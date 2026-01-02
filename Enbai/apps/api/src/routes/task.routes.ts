import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { taskService } from '../services/task.service';
import { authenticate, getCurrentUserId } from '../middleware/auth';
import { Errors } from '../utils/errors';
import { SKILL_TYPES } from '@enbai/types';

const generateTaskSchema = z.object({
  targetSkill: z.enum([...SKILL_TYPES, 'auto'] as [string, ...string[]]).optional(),
  difficulty: z.union([z.number().min(1).max(10), z.literal('auto')]).optional(),
  preferredType: z.string().optional(),
  topic: z.string().max(200).optional(),
});

const submitTaskSchema = z.object({
  answer: z.record(z.unknown()), // Flexible answer structure
  timeSpentSeconds: z.number().min(1).max(3600),
});

export async function taskRoutes(app: FastifyInstance) {
  // All task routes require authentication
  app.addHook('preHandler', authenticate);

  /**
   * POST /tasks/generate
   * Generate a new task
   */
  app.post('/generate', async (request, reply) => {
    const userId = getCurrentUserId(request);

    const parsed = generateTaskSchema.safeParse(request.body);
    if (!parsed.success) {
      throw Errors.validationError('Invalid input', {
        errors: parsed.error.flatten().fieldErrors,
      });
    }

    const task = await taskService.generateTask({
      userId,
      targetSkill: parsed.data.targetSkill as any,
      difficulty: parsed.data.difficulty as any,
      preferredType: parsed.data.preferredType,
      topic: parsed.data.topic,
    });

    return reply.status(201).send({
      success: true,
      data: { task },
    });
  });

  /**
   * GET /tasks/pending
   * Get pending tasks for user
   */
  app.get('/pending', async (request, reply) => {
    const userId = getCurrentUserId(request);

    const tasks = await taskService.getPendingTasks(userId);

    return reply.send({
      success: true,
      data: { tasks },
    });
  });

  /**
   * GET /tasks/:id
   * Get a specific task
   */
  app.get<{ Params: { id: string } }>('/:id', async (request, reply) => {
    const userId = getCurrentUserId(request);
    const { id } = request.params;

    const task = await taskService.getTask(userId, id);

    return reply.send({
      success: true,
      data: { task },
    });
  });

  /**
   * POST /tasks/:id/start
   * Mark task as started
   */
  app.post<{ Params: { id: string } }>('/:id/start', async (request, reply) => {
    const userId = getCurrentUserId(request);
    const { id } = request.params;

    await taskService.startTask(userId, id);

    return reply.send({
      success: true,
      data: { message: 'Task started' },
    });
  });

  /**
   * POST /tasks/:id/submit
   * Submit task answer
   */
  app.post<{ Params: { id: string } }>('/:id/submit', async (request, reply) => {
    const userId = getCurrentUserId(request);
    const { id } = request.params;

    const parsed = submitTaskSchema.safeParse(request.body);
    if (!parsed.success) {
      throw Errors.validationError('Invalid input', {
        errors: parsed.error.flatten().fieldErrors,
      });
    }

    const result = await taskService.submitTask({
      userId,
      taskId: id,
      answer: parsed.data.answer as any,
      timeSpentSeconds: parsed.data.timeSpentSeconds,
    });

    return reply.send({
      success: true,
      data: {
        attemptId: result.attemptId,
        result: {
          isCorrect: result.isCorrect,
          score: result.score,
          feedback: result.feedback,
          mistakes: result.mistakes,
          skillDeltas: result.skillDeltas,
          encouragement: result.encouragement,
        },
        updatedSkillVector: result.updatedSkillVector,
      },
    });
  });

  /**
   * POST /tasks/:id/skip
   * Skip a task
   */
  app.post<{ Params: { id: string } }>('/:id/skip', async (request, reply) => {
    const userId = getCurrentUserId(request);
    const { id } = request.params;

    await taskService.skipTask(userId, id);

    return reply.send({
      success: true,
      data: { message: 'Task skipped' },
    });
  });
}
