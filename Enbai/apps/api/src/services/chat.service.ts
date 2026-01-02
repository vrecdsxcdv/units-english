import { prisma } from '../db';
import { aiOrchestrator } from '../ai/orchestrator';
import { aiBridge, type SkillDelta } from '../ai/dual-ai-system';
import { Errors } from '../utils/errors';
import type {
  Message,
  Conversation,
  TaskPayload,
  SkillVector,
  ConversationState,
  TeachingContext,
  SkillType,
  CEFRLevel,
} from '@enbai/types';

interface SendMessageParams {
  userId: string;
  content: string;
  conversationId?: string;
  taskSubmission?: {
    taskId: string;
    answer: string;
    timeSpent: number;
  };
}

interface SendMessageResult {
  userMessage: Message;
  assistantMessage: Message;
  conversation: Conversation;
  task?: TaskPayload;
  skillUpdates?: SkillDelta[];
}

export class ChatService {
  /**
   * Send a message and get AI response using the dual-AI system
   * AI-1 (Analytics) handles skill analysis and DB updates
   * AI-2 (Tutor) handles user interaction with context from AI-1
   */
  async sendMessage(params: SendMessageParams): Promise<SendMessageResult> {
    const { userId, content, conversationId, taskSubmission } = params;

    // Get or create conversation
    let conversation = conversationId
      ? await prisma.conversation.findFirst({
          where: { id: conversationId, userId },
        })
      : null;

    // Get or create conversation state
    let conversationState: ConversationState;

    if (!conversation) {
      conversation = await prisma.conversation.create({
        data: {
          userId,
          title: this.generateTitle(content),
        },
      });
      // Initialize new teaching session
      conversationState = aiOrchestrator.createTeachingSession();
    } else {
      // Load existing conversation state from metadata or create new
      const lastMessage = await prisma.message.findFirst({
        where: { conversationId: conversation.id, role: 'assistant' },
        orderBy: { createdAt: 'desc' },
      });
      const savedState = (lastMessage?.aiMetadata as any)?.conversationState;
      conversationState = savedState || aiOrchestrator.createTeachingSession();
    }

    // Get conversation history
    const history = await this.getHistory(conversation.id);

    // Save user message
    const userMessage = await prisma.message.create({
      data: {
        conversationId: conversation.id,
        userId,
        role: 'user',
        content,
      },
    });

    // Get user profile for context (interests, goals, etc.)
    const userContext = await this.getUserContext(userId);

    // Detect if this is first message after onboarding
    const isPostOnboarding = !conversationId && conversationState.currentState === 'INTRO';

    // Generate AI response using dual-AI bridge
    // AI-1 handles analytics, AI-2 handles chat
    // V3: Now passing full userProfile for proper context!
    const aiResponse = await aiBridge.processInteraction({
      userId,
      message: content,
      conversationState,
      history: history.map((m) => ({
        role: m.role as 'user' | 'assistant',
        content: m.content,
      })),
      taskSubmission,
      userProfile: {
        interests: userContext.interests,
        dailyTimeMinutes: userContext.dailyTimeMinutes,
        learningGoal: userContext.learningGoal,
      },
      isPostOnboarding,
    });

    // Save task if generated (only if content is present)
    let savedTask = null;
    if (aiResponse.task && aiResponse.task.content) {
      savedTask = await prisma.task.create({
        data: {
          userId,
          conversationId: conversation.id,
          templateId: aiResponse.task.templateId || 'multiple_choice_v1',
          type: aiResponse.task.type || 'grammar',
          difficulty: aiResponse.task.difficulty || 5,
          content: aiResponse.task.content as any,
          uiHints: (aiResponse.task.uiHints || { showTimer: true }) as any,
          evaluationRubric: (aiResponse.task.evaluation || {
            type: 'auto',
            scoringMethod: 'exact',
            skillWeights: { [aiResponse.task.type || 'grammar']: 1.0 },
          }) as any,
          objectives: aiResponse.task.objectives || [],
          targetSkills: aiResponse.task.targetSkills || [aiResponse.task.type || 'grammar'],
          expectedTimeSeconds: aiResponse.task.expectedTimeSeconds || 60,
          generatedBy: 'openrouter',
        },
      });
    }

    // Save assistant message with conversation state and memory recap
    const assistantMessage = await prisma.message.create({
      data: {
        conversationId: conversation.id,
        userId,
        role: 'assistant',
        content: aiResponse.response,
        hasTask: !!savedTask,
        taskId: savedTask?.id,
        aiMetadata: {
          model: 'dual-ai-v2',
          tokensUsed: 0, // TODO: track tokens
          latencyMs: 0, // TODO: measure actual latency
          cached: false,
          // Persist conversation state for teaching pipeline (serialized as JSON)
          conversationState: JSON.parse(JSON.stringify(aiResponse.newState)),
          // Memory recap for context persistence between messages (serialized)
          memoryRecap: JSON.parse(JSON.stringify(aiResponse.memoryRecap)),
          // Skill updates from AI-1 analytics (serialized)
          skillUpdates: aiResponse.skillUpdates ? JSON.parse(JSON.stringify(aiResponse.skillUpdates)) : null,
        },
      },
    });

    // Update conversation stats
    await prisma.conversation.update({
      where: { id: conversation.id },
      data: {
        messageCount: { increment: 2 },
        taskCount: savedTask ? { increment: 1 } : undefined,
        lastMessageAt: new Date(),
      },
    });

    return {
      userMessage: this.mapMessage(userMessage),
      assistantMessage: this.mapMessage(assistantMessage),
      conversation: this.mapConversation(conversation),
      task: savedTask
        ? {
            ...aiResponse.task!,
            id: savedTask.id,
          }
        : undefined,
      skillUpdates: aiResponse.skillUpdates,
    };
  }

  /**
   * Get conversation history
   */
  async getConversationMessages(
    userId: string,
    conversationId: string,
    limit = 50,
    before?: string
  ) {
    const conversation = await prisma.conversation.findFirst({
      where: { id: conversationId, userId },
    });

    if (!conversation) {
      throw Errors.notFound('Conversation');
    }

    const messages = await prisma.message.findMany({
      where: {
        conversationId,
        ...(before && { createdAt: { lt: new Date(before) } }),
      },
      orderBy: { createdAt: 'desc' },
      take: limit,
      include: { task: true },
    });

    return {
      messages: messages.reverse().map(this.mapMessage),
      hasMore: messages.length === limit,
    };
  }

  /**
   * Get user's conversations
   */
  async getConversations(userId: string, limit = 20) {
    const conversations = await prisma.conversation.findMany({
      where: { userId, status: 'active' },
      orderBy: { lastMessageAt: 'desc' },
      take: limit,
    });

    return conversations.map(this.mapConversation);
  }

  // ============================================
  // PRIVATE METHODS
  // ============================================

  private async getUserContext(userId: string) {
    const [profile, skillVector, tasksToday] = await Promise.all([
      prisma.profile.findUnique({ where: { userId } }),
      prisma.skillVector.findFirst({
        where: { userId },
        orderBy: { createdAt: 'desc' },
      }),
      prisma.task.count({
        where: {
          userId,
          status: 'completed',
          createdAt: { gte: new Date(new Date().setHours(0, 0, 0, 0)) },
        },
      }),
    ]);

    // TODO: Calculate streak properly
    const streak = 0;

    const defaultVector: SkillVector = {
      grammar: 0.5,
      vocabulary: 0.5,
      pronunciation: 0.5,
      listening: 0.5,
      speaking: 0.5,
      slang: 0.5,
      word_formation: 0.5,
      fluency: 0.5,
      writing: 0.5,
      comprehension: 0.5,
    };

    return {
      skillVector: skillVector
        ? {
            grammar: Number(skillVector.grammar),
            vocabulary: Number(skillVector.vocabulary),
            pronunciation: Number(skillVector.pronunciation),
            listening: Number(skillVector.listening),
            speaking: Number(skillVector.speaking),
            slang: Number(skillVector.slang),
            word_formation: Number(skillVector.wordFormation),
            fluency: Number(skillVector.fluency),
            writing: Number(skillVector.writing),
            comprehension: Number(skillVector.comprehension),
          }
        : defaultVector,
      learningAbility: skillVector ? Number(skillVector.learningAbility) : 0.5,
      interests: profile?.interests || [],
      dailyTimeMinutes: profile?.dailyTimeMinutes || 15,
      tasksCompletedToday: tasksToday,
      streak,
      learningGoal: profile?.learningGoal || undefined, // NOW INCLUDED!
    };
  }

  private async getHistory(conversationId: string, limit = 10) {
    const messages = await prisma.message.findMany({
      where: { conversationId, role: { in: ['user', 'assistant'] } },
      orderBy: { createdAt: 'desc' },
      take: limit,
    });
    return messages.reverse();
  }

  private generateTitle(content: string): string {
    // Take first 50 chars of first message as title
    return content.length > 50 ? content.slice(0, 47) + '...' : content;
  }

  /**
   * Build full teaching context from user context and conversation state
   * Note: This method is kept for backward compatibility but is no longer used
   * by the main sendMessage flow which uses the dual-AI system
   */
  private buildTeachingContext(
    userId: string,
    userContext: {
      skillVector: SkillVector;
      learningAbility: number;
      interests: string[];
      dailyTimeMinutes: number;
      tasksCompletedToday: number;
      streak: number;
      recentErrors?: string[];
      learningGoal?: string;
    },
    conversationState: ConversationState
  ): TeachingContext {
    // Calculate weakest and strongest skills
    const skillEntries = Object.entries(userContext.skillVector) as [SkillType, number][];
    const sortedByValue = [...skillEntries].sort((a, b) => a[1] - b[1]);

    const weakestSkills = sortedByValue.slice(0, 3).map(([skill]) => skill);
    const strongestSkills = sortedByValue.reverse().slice(0, 3).map(([skill]) => skill);

    // Estimate CEFR level from average skill
    const avg = Object.values(userContext.skillVector).reduce((sum, v) => sum + v, 0) / 10;
    let level: CEFRLevel = 'A1';
    if (avg >= 0.8) level = 'C2';
    else if (avg >= 0.65) level = 'C1';
    else if (avg >= 0.5) level = 'B2';
    else if (avg >= 0.35) level = 'B1';
    else if (avg >= 0.2) level = 'A2';

    return {
      userId,
      skillVector: userContext.skillVector,
      cefrLevel: level,
      learningAbility: userContext.learningAbility,
      learningGoal: userContext.learningGoal,
      interests: userContext.interests,
      dailyTimeMinutes: userContext.dailyTimeMinutes,
      tasksCompletedToday: userContext.tasksCompletedToday,
      streak: userContext.streak,
      timeRemainingMinutes: Math.max(0, userContext.dailyTimeMinutes - (userContext.tasksCompletedToday * 5)),
      recentErrors: userContext.recentErrors || [],
      conceptsToReview: [],
      conversationState,
      weakestSkills,
      strongestSkills,
    };
  }

  private mapMessage(m: any): Message {
    return {
      id: m.id,
      conversationId: m.conversationId,
      userId: m.userId,
      role: m.role,
      content: m.content,
      hasTask: m.hasTask,
      taskId: m.taskId,
      aiMetadata: m.aiMetadata,
      createdAt: m.createdAt.toISOString(),
    };
  }

  private mapConversation(c: any): Conversation {
    return {
      id: c.id,
      userId: c.userId,
      title: c.title,
      status: c.status,
      messageCount: c.messageCount,
      taskCount: c.taskCount,
      startedAt: c.startedAt.toISOString(),
      lastMessageAt: c.lastMessageAt?.toISOString() || null,
      createdAt: c.createdAt.toISOString(),
    };
  }
}

export const chatService = new ChatService();
