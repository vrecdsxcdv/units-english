import type { TaskPayload } from './task';

/**
 * Message role
 */
export type MessageRole = 'user' | 'assistant' | 'system';

/**
 * Conversation status
 */
export type ConversationStatus = 'active' | 'archived';

/**
 * Conversation entity
 */
export interface Conversation {
  id: string;
  userId: string;

  title: string | null;
  status: ConversationStatus;

  messageCount: number;
  taskCount: number;

  startedAt: string;
  lastMessageAt: string | null;

  createdAt: string;
}

/**
 * AI metadata for assistant messages
 */
export interface AIMessageMetadata {
  model: 'flash' | 'deep_research';
  tokensUsed: {
    input: number;
    output: number;
  };
  latencyMs: number;
  cached: boolean;
}

/**
 * Message entity
 */
export interface Message {
  id: string;
  conversationId: string;
  userId: string;

  role: MessageRole;
  content: string;

  hasTask: boolean;
  taskId?: string;

  aiMetadata?: AIMessageMetadata;

  createdAt: string;
}

/**
 * Message with embedded task (for frontend)
 */
export interface MessageWithTask extends Message {
  task?: TaskPayload;
}

// ============================================
// WEBSOCKET EVENTS
// ============================================

/**
 * Client -> Server: Send message
 */
export interface WSSendMessage {
  type: 'message';
  content: string;
  conversationId?: string;
}

/**
 * Server -> Client: Stream start
 */
export interface WSStreamStart {
  type: 'stream_start';
  messageId: string;
  conversationId: string;
}

/**
 * Server -> Client: Stream chunk
 */
export interface WSStreamChunk {
  type: 'stream_chunk';
  messageId: string;
  content: string;
}

/**
 * Server -> Client: Stream end
 */
export interface WSStreamEnd {
  type: 'stream_end';
  messageId: string;
  fullContent: string;
}

/**
 * Server -> Client: Task available
 */
export interface WSTaskAvailable {
  type: 'task_available';
  task: TaskPayload;
}

/**
 * Server -> Client: Error
 */
export interface WSError {
  type: 'error';
  code: string;
  message: string;
}

/**
 * All WebSocket server events
 */
export type WSServerEvent =
  | WSStreamStart
  | WSStreamChunk
  | WSStreamEnd
  | WSTaskAvailable
  | WSError;

/**
 * All WebSocket client events
 */
export type WSClientEvent = WSSendMessage;

// ============================================
// API TYPES
// ============================================

export interface SendMessageRequest {
  content: string;
  conversationId?: string;
}

export interface SendMessageResponse {
  messageId: string;
  conversationId: string;
  assistantMessage: Message;
  task?: TaskPayload;
}

export interface GetConversationsResponse {
  conversations: Conversation[];
  total: number;
}

export interface GetMessagesResponse {
  messages: MessageWithTask[];
  total: number;
  hasMore: boolean;
}
