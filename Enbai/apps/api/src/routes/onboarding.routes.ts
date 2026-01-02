import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { authenticate, getCurrentUserId } from '../middleware/auth';
import { Errors } from '../utils/errors';
import { prisma } from '../db';
import {
  ONBOARDING_QUESTIONS,
  getAdaptiveQuestions,
  calculateSkillVector,
} from '../data/onboarding-questions';
import { firstMessageGenerator } from '../services/v5/first-message.generator';
import { firstMessageValidator } from '../services/v5/first-message.validator';
import type { CEFRLevel } from '@enbai/types';

const submitTestSchema = z.object({
  answers: z.array(z.object({
    questionId: z.string(),
    answer: z.string(),
  })),
});

export async function onboardingRoutes(app: FastifyInstance) {
  app.addHook('preHandler', authenticate);

  /**
   * GET /onboarding/questions
   * Get questions for the onboarding test
   */
  app.get('/questions', async (request, reply) => {
    const questions = getAdaptiveQuestions(20, 4);

    // Return questions without correct answers
    const sanitized = questions.map(q => ({
      id: q.id,
      type: q.type,
      difficulty: q.difficulty,
      question: q.question,
      options: q.options,
    }));

    return reply.send({
      success: true,
      data: {
        questions: sanitized,
        totalQuestions: sanitized.length,
      },
    });
  });

  /**
   * POST /onboarding/submit
   * Submit test answers and calculate skill vector
   */
  app.post('/submit', async (request, reply) => {
    const userId = getCurrentUserId(request);

    const parsed = submitTestSchema.safeParse(request.body);
    if (!parsed.success) {
      throw Errors.validationError('Неверные данные', {
        errors: parsed.error.flatten().fieldErrors,
      });
    }

    const { answers } = parsed.data;

    // Grade answers
    const gradedAnswers = answers.map(a => {
      const question = ONBOARDING_QUESTIONS.find(q => q.id === a.questionId);
      if (!question) {
        return { questionId: a.questionId, correct: false };
      }

      const correct = Array.isArray(question.correctAnswer)
        ? question.correctAnswer.includes(a.answer)
        : question.correctAnswer === a.answer;

      return { questionId: a.questionId, correct };
    });

    // Calculate skill vector
    const skillVector = calculateSkillVector(gradedAnswers);

    // Calculate overall score
    const correctCount = gradedAnswers.filter(a => a.correct).length;
    const totalCount = gradedAnswers.length;
    const percentage = Math.round((correctCount / totalCount) * 100);

    // Determine CEFR level
    let level = 'A1';
    const avg = Object.values(skillVector).reduce((a, b) => a + b, 0) / 10;
    if (avg >= 0.83) level = 'C2';
    else if (avg >= 0.67) level = 'C1';
    else if (avg >= 0.50) level = 'B2';
    else if (avg >= 0.33) level = 'B1';
    else if (avg >= 0.17) level = 'A2';

    // Update user's skill vector in database
    await prisma.skillVector.updateMany({
      where: { userId },
      data: {
        grammar: skillVector.grammar,
        vocabulary: skillVector.vocabulary,
        pronunciation: skillVector.pronunciation,
        listening: skillVector.listening,
        speaking: skillVector.speaking,
        slang: skillVector.slang,
        wordFormation: skillVector.word_formation,
        fluency: skillVector.fluency,
        writing: skillVector.writing,
        comprehension: skillVector.comprehension,
      },
    });

    // Update or create profile to mark onboarding complete
    await prisma.profile.upsert({
      where: { userId },
      update: {
        onboardingCompleted: true,
        targetLevel: level,
      },
      create: {
        userId,
        onboardingCompleted: true,
        targetLevel: level,
        dailyTimeMinutes: 15,
      },
    });

    // Build detailed results
    const results = gradedAnswers.map(a => {
      const question = ONBOARDING_QUESTIONS.find(q => q.id === a.questionId);
      return {
        questionId: a.questionId,
        correct: a.correct,
        correctAnswer: question?.correctAnswer,
        explanation: question?.explanation,
      };
    });

    return reply.send({
      success: true,
      data: {
        score: {
          correct: correctCount,
          total: totalCount,
          percentage,
        },
        level,
        skillVector,
        results,
      },
    });
  });

  /**
   * GET /onboarding/status
   * Check if user has completed onboarding
   */
  app.get('/status', async (request, reply) => {
    const userId = getCurrentUserId(request);

    const profile = await prisma.profile.findUnique({
      where: { userId },
      select: { onboardingCompleted: true },
    });

    return reply.send({
      success: true,
      data: {
        completed: profile?.onboardingCompleted ?? false,
      },
    });
  });

  /**
   * POST /onboarding/complete
   * V5: Complete onboarding and generate first AI message
   *
   * This endpoint should be called after /submit.
   * It creates the first conversation and generates the initial AI message
   * containing WARMUP + GOAL_ALIGN + TEACH + CHECK.
   *
   * Response: { conversationId, firstMessageId, content }
   */
  app.post('/complete', async (request, reply) => {
    const userId = getCurrentUserId(request);

    // 1. Verify onboarding is completed
    const profile = await prisma.profile.findUnique({
      where: { userId },
      select: {
        onboardingCompleted: true,
        targetLevel: true,
      },
    });

    if (!profile?.onboardingCompleted) {
      throw Errors.badRequest('Онбординг не завершён. Сначала пройдите тест.');
    }

    // 2. Check if first message already exists
    const existingConversation = await prisma.conversation.findFirst({
      where: { userId },
      include: {
        messages: {
          where: {
            role: 'assistant',
            aiMetadata: {
              path: ['isFirstMessage'],
              equals: true,
            },
          },
          take: 1,
        },
      },
      orderBy: { createdAt: 'asc' },
    });

    if (existingConversation && existingConversation.messages.length > 0) {
      // First message already generated, return existing
      const firstMessage = existingConversation.messages[0];
      return reply.send({
        success: true,
        data: {
          conversationId: existingConversation.id,
          firstMessageId: firstMessage.id,
          content: firstMessage.content,
          alreadyGenerated: true,
        },
      });
    }

    // 3. Generate first AI message
    const startTime = Date.now();
    const result = await firstMessageGenerator.generate(userId);
    const generationTime = Date.now() - startTime;

    // 4. Validate first message quality
    const cefrLevel = (profile.targetLevel || 'B1') as CEFRLevel;
    const validation = firstMessageValidator.validate(result.content, cefrLevel);

    // Log validation result (for QA monitoring)
    console.log('[V5] First message generated:', {
      userId,
      conversationId: result.conversationId,
      messageId: result.messageId,
      generationTimeMs: generationTime,
      validation: {
        isValid: validation.isValid,
        score: validation.score,
        issues: validation.issues,
      },
    });

    // 5. Update profile with onboardingCompletedAt if not set
    await prisma.profile.update({
      where: { userId },
      data: {
        onboardingCompletedAt: new Date(),
      },
    });

    return reply.send({
      success: true,
      data: {
        conversationId: result.conversationId,
        firstMessageId: result.messageId,
        content: result.content,
        validation: {
          score: validation.score,
          isValid: validation.isValid,
          components: {
            warmup: validation.components.warmup.quality,
            goalAlign: validation.components.goalAlign.quality,
            teach: validation.components.teach.quality,
            check: validation.components.check.quality,
          },
        },
        generationTimeMs: generationTime,
      },
    });
  });
}
