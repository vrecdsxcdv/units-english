import { create } from 'zustand';
import { api } from '@/lib/api/client';
import type { Message, TaskPayload, UserAnswer } from '@enbai/types';

interface ChatMessage extends Omit<Message, 'conversationId' | 'userId' | 'aiMetadata'> {
  pending?: boolean;
}

interface ChatState {
  messages: ChatMessage[];
  conversationId: string | null;
  isLoading: boolean;
  isLoadingInitial: boolean;
  error: string | null;
  needsOnboarding: boolean;
  needsFirstMessage: boolean;

  // Actions
  loadCurrentChat: () => Promise<void>;
  generateFirstMessage: () => Promise<void>;
  sendMessage: (content: string) => Promise<{ task?: TaskPayload } | undefined>;
  submitTask: (taskId: string, answer: UserAnswer, timeSpent: number) => Promise<any>;
  clearMessages: () => void;
  setError: (error: string | null) => void;
}

export const useChatStore = create<ChatState>((set, get) => ({
  messages: [],
  conversationId: null,
  isLoading: false,
  isLoadingInitial: false,
  error: null,
  needsOnboarding: false,
  needsFirstMessage: false,

  /**
   * V5: Load current chat state
   * Checks if user needs onboarding or has existing conversation
   */
  loadCurrentChat: async () => {
    set({ isLoadingInitial: true, error: null });

    try {
      const response = await api.get<{
        hasConversation: boolean;
        needsOnboarding?: boolean;
        needsFirstMessage?: boolean;
        conversation?: {
          id: string;
          title: string;
          messageCount: number;
        };
        messages?: Array<{
          id: string;
          role: string;
          content: string;
          hasTask: boolean;
          taskId?: string;
          createdAt: string;
        }>;
      }>('/chat/current');

      if (response.needsOnboarding) {
        set({
          isLoadingInitial: false,
          needsOnboarding: true,
          needsFirstMessage: false,
        });
        return;
      }

      if (response.needsFirstMessage || !response.hasConversation) {
        set({
          isLoadingInitial: false,
          needsOnboarding: false,
          needsFirstMessage: true,
        });
        return;
      }

      // Load existing messages
      const messages: ChatMessage[] = (response.messages || []).map((m) => ({
        id: m.id,
        role: m.role as 'user' | 'assistant',
        content: m.content,
        hasTask: m.hasTask,
        taskId: m.taskId,
        createdAt: m.createdAt,
      }));

      set({
        isLoadingInitial: false,
        needsOnboarding: false,
        needsFirstMessage: false,
        conversationId: response.conversation?.id || null,
        messages,
      });
    } catch (error: any) {
      set({
        isLoadingInitial: false,
        error: error.message || 'Failed to load chat',
      });
    }
  },

  /**
   * V5: Generate first AI message after onboarding
   */
  generateFirstMessage: async () => {
    set({ isLoading: true, error: null });

    try {
      const response = await api.post<{
        conversationId: string;
        firstMessageId: string;
        content: string;
        validation: {
          score: number;
          isValid: boolean;
        };
      }>('/onboarding/complete');

      // Add first AI message
      const firstMessage: ChatMessage = {
        id: response.firstMessageId,
        role: 'assistant',
        content: response.content,
        hasTask: false,
        createdAt: new Date().toISOString(),
      };

      set({
        isLoading: false,
        needsFirstMessage: false,
        conversationId: response.conversationId,
        messages: [firstMessage],
      });
    } catch (error: any) {
      set({
        isLoading: false,
        error: error.message || 'Failed to generate first message',
      });
    }
  },

  sendMessage: async (content: string) => {
    const tempId = `temp-${Date.now()}`;

    // Add user message immediately
    const userMessage: ChatMessage = {
      id: tempId,
      role: 'user',
      content,
      hasTask: false,
      createdAt: new Date().toISOString(),
      pending: true,
    };

    set((state) => ({
      messages: [...state.messages, userMessage],
      isLoading: true,
      error: null,
    }));

    try {
      const response = await api.post<{
        messageId: string;
        conversationId: string;
        assistantMessage: Message;
        task?: TaskPayload;
      }>('/chat/message', {
        content,
        conversationId: get().conversationId,
      });

      // Update user message with real ID and add assistant message
      set((state) => ({
        messages: [
          ...state.messages.filter((m) => m.id !== tempId),
          { ...userMessage, id: `user-${response.messageId}`, pending: false },
          {
            id: response.assistantMessage.id,
            role: response.assistantMessage.role,
            content: response.assistantMessage.content,
            hasTask: response.assistantMessage.hasTask,
            taskId: response.assistantMessage.taskId,
            createdAt: response.assistantMessage.createdAt,
          },
        ],
        conversationId: response.conversationId,
        isLoading: false,
      }));

      return { task: response.task };
    } catch (error: any) {
      set((state) => ({
        messages: state.messages.filter((m) => m.id !== tempId),
        isLoading: false,
        error: error.message || 'Failed to send message',
      }));
      return undefined;
    }
  },

  submitTask: async (taskId: string, answer: UserAnswer, timeSpentSeconds: number) => {
    set({ isLoading: true, error: null });

    try {
      const response = await api.post(`/tasks/${taskId}/submit`, {
        answer,
        timeSpentSeconds,
      });

      set({ isLoading: false });
      return response;
    } catch (error: any) {
      set({
        isLoading: false,
        error: error.message || 'Failed to submit task',
      });
      throw error;
    }
  },

  clearMessages: () => {
    set({
      messages: [],
      conversationId: null,
      error: null,
    });
  },

  setError: (error) => {
    set({ error });
  },
}));
