import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { chatService } from '../services/chat.service';
import { authenticate, getCurrentUserId } from '../middleware/auth';
import { Errors } from '../utils/errors';
import { prisma } from '../db';

const sendMessageSchema = z.object({
  content: z.string().min(1).max(4000),
  conversationId: z.string().uuid().optional().nullable().transform(val => val ?? undefined),
});

export async function chatRoutes(app: FastifyInstance) {
  // All chat routes require authentication
  app.addHook('preHandler', authenticate);

  /**
   * POST /chat/message
   * Send a message and get AI response
   */
  app.post('/message', async (request, reply) => {
    const userId = getCurrentUserId(request);

    const parsed = sendMessageSchema.safeParse(request.body);
    if (!parsed.success) {
      throw Errors.validationError('Invalid input', {
        errors: parsed.error.flatten().fieldErrors,
      });
    }

    const result = await chatService.sendMessage({
      userId,
      content: parsed.data.content,
      conversationId: parsed.data.conversationId,
    });

    return reply.send({
      success: true,
      data: {
        messageId: result.assistantMessage.id,
        conversationId: result.conversation.id,
        assistantMessage: result.assistantMessage,
        task: result.task,
      },
    });
  });

  /**
   * GET /chat/conversations
   * Get user's conversations
   */
  app.get('/conversations', async (request, reply) => {
    const userId = getCurrentUserId(request);

    const conversations = await chatService.getConversations(userId);

    return reply.send({
      success: true,
      data: {
        conversations,
        total: conversations.length,
      },
    });
  });

  /**
   * GET /chat/conversations/:id/messages
   * Get messages in a conversation
   */
  app.get<{
    Params: { id: string };
    Querystring: { limit?: string; before?: string };
  }>('/conversations/:id/messages', async (request, reply) => {
    const userId = getCurrentUserId(request);
    const { id } = request.params;
    const limit = request.query.limit ? parseInt(request.query.limit) : 50;
    const before = request.query.before;

    const result = await chatService.getConversationMessages(
      userId,
      id,
      limit,
      before
    );

    return reply.send({
      success: true,
      data: result,
    });
  });

  /**
   * GET /chat/current
   * V5: Get current conversation with first message (if exists)
   * Used by browser to load chat after onboarding
   */
  app.get('/current', async (request, reply) => {
    const userId = getCurrentUserId(request);

    // Check if user completed onboarding
    const profile = await prisma.profile.findUnique({
      where: { userId },
      select: { onboardingCompleted: true },
    });

    if (!profile?.onboardingCompleted) {
      return reply.send({
        success: true,
        data: {
          hasConversation: false,
          needsOnboarding: true,
        },
      });
    }

    // Find the most recent conversation
    const conversation = await prisma.conversation.findFirst({
      where: { userId, status: 'active' },
      orderBy: { lastMessageAt: 'desc' },
      include: {
        messages: {
          orderBy: { createdAt: 'asc' },
          take: 50,
        },
      },
    });

    if (!conversation) {
      return reply.send({
        success: true,
        data: {
          hasConversation: false,
          needsOnboarding: false,
          needsFirstMessage: true,
        },
      });
    }

    return reply.send({
      success: true,
      data: {
        hasConversation: true,
        conversation: {
          id: conversation.id,
          title: conversation.title,
          messageCount: conversation.messageCount,
        },
        messages: conversation.messages.map((m) => ({
          id: m.id,
          role: m.role,
          content: m.content,
          hasTask: m.hasTask,
          taskId: m.taskId,
          createdAt: m.createdAt.toISOString(),
        })),
      },
    });
  });
}
