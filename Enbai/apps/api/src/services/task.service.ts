import { prisma } from '../db';
import { aiOrchestrator } from '../ai/orchestrator';
import { Errors } from '../utils/errors';
import type { TaskPayload, SkillType, SkillVector, UserAnswer } from '@enbai/types';

interface GenerateTaskParams {
  userId: string;
  targetSkill?: SkillType | 'auto';
  difficulty?: number | 'auto';
  preferredType?: string;
  topic?: string;
}

interface SubmitTaskParams {
  userId: string;
  taskId: string;
  answer: UserAnswer;
  timeSpentSeconds: number;
}

interface SubmitTaskResult {
  attemptId: string;
  isCorrect: boolean;
  score: number;
  feedback: string;
  mistakes: any[];
  skillDeltas: Partial<Record<SkillType, number>>;
  encouragement?: string;
  updatedSkillVector?: Partial<Record<SkillType, number>>;
}

export class TaskService {
  /**
   * Generate a new task for user
   */
  async generateTask(params: GenerateTaskParams): Promise<TaskPayload> {
    const { userId, targetSkill, difficulty, preferredType, topic } = params;

    // Get user context
    const userContext = await this.getUserContext(userId);

    // Check daily limit
    const tasksToday = await prisma.task.count({
      where: {
        userId,
        createdAt: { gte: new Date(new Date().setHours(0, 0, 0, 0)) },
      },
    });

    if (tasksToday >= 10) {
      throw Errors.rateLimitExceeded();
    }

    // Generate task via AI
    const taskPayload = await aiOrchestrator.generateTask({
      userContext,
      targetSkill,
      difficulty,
      preferredType,
      topic,
    });

    // Save to database
    const task = await prisma.task.create({
      data: {
        id: taskPayload.id,
        userId,
        templateId: taskPayload.templateId,
        type: taskPayload.type,
        difficulty: taskPayload.difficulty,
        content: taskPayload.content as any,
        uiHints: taskPayload.uiHints as any,
        evaluationRubric: taskPayload.evaluation as any,
        objectives: taskPayload.objectives,
        targetSkills: taskPayload.targetSkills,
        expectedTimeSeconds: taskPayload.expectedTimeSeconds,
        generatedBy: 'flash',
      },
    });

    return {
      ...taskPayload,
      id: task.id,
    };
  }

  /**
   * Get a task by ID
   */
  async getTask(userId: string, taskId: string): Promise<TaskPayload> {
    const task = await prisma.task.findFirst({
      where: { id: taskId, userId },
    });

    if (!task) {
      throw Errors.notFound('Task');
    }

    return this.mapTask(task);
  }

  /**
   * Get pending tasks for user
   */
  async getPendingTasks(userId: string): Promise<TaskPayload[]> {
    const tasks = await prisma.task.findMany({
      where: {
        userId,
        status: { in: ['pending', 'in_progress'] },
      },
      orderBy: { createdAt: 'desc' },
      take: 10,
    });

    return tasks.map(this.mapTask);
  }

  /**
   * Mark task as started
   */
  async startTask(userId: string, taskId: string): Promise<void> {
    const task = await prisma.task.findFirst({
      where: { id: taskId, userId },
    });

    if (!task) {
      throw Errors.notFound('Task');
    }

    await prisma.task.update({
      where: { id: taskId },
      data: { status: 'in_progress' },
    });
  }

  /**
   * Submit task answer and get evaluation
   */
  async submitTask(params: SubmitTaskParams): Promise<SubmitTaskResult> {
    const { userId, taskId, answer, timeSpentSeconds } = params;

    // Get task
    const task = await prisma.task.findFirst({
      where: { id: taskId, userId },
    });

    if (!task) {
      throw Errors.notFound('Task');
    }

    if (task.status === 'completed') {
      throw Errors.validationError('Task already completed');
    }

    // Get user context for evaluation
    const userContext = await this.getUserContext(userId);

    // Evaluate with AI
    const evaluation = await aiOrchestrator.evaluateTask({
      task: {
        content: task.content,
        evaluationRubric: task.evaluationRubric,
        type: task.type,
      },
      answer,
      userContext,
    });

    // Create attempt record
    const attempt = await prisma.taskAttempt.create({
      data: {
        taskId,
        userId,
        answer: answer as any,
        isCorrect: evaluation.isCorrect,
        score: evaluation.score,
        feedback: evaluation.feedback,
        mistakes: evaluation.mistakes as any,
        skillDeltas: evaluation.skillDeltas as any,
        evaluatedBy: 'flash',
        timeSpentSeconds,
        startedAt: new Date(Date.now() - timeSpentSeconds * 1000),
      },
    });

    // Update task status
    await prisma.task.update({
      where: { id: taskId },
      data: { status: 'completed' },
    });

    // Update skill vector
    const updatedVector = await this.updateSkillVector(userId, evaluation.skillDeltas);

    return {
      attemptId: attempt.id,
      isCorrect: evaluation.isCorrect,
      score: evaluation.score,
      feedback: evaluation.feedback,
      mistakes: evaluation.mistakes,
      skillDeltas: evaluation.skillDeltas,
      encouragement: evaluation.encouragement,
      updatedSkillVector: updatedVector,
    };
  }

  /**
   * Skip a task
   */
  async skipTask(userId: string, taskId: string): Promise<void> {
    const task = await prisma.task.findFirst({
      where: { id: taskId, userId },
    });

    if (!task) {
      throw Errors.notFound('Task');
    }

    await prisma.task.update({
      where: { id: taskId },
      data: { status: 'skipped' },
    });
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
      streak: 0,
    };
  }

  private async updateSkillVector(
    userId: string,
    deltas: Partial<Record<SkillType, number>>
  ): Promise<Partial<Record<SkillType, number>>> {
    // Get current vector
    const current = await prisma.skillVector.findFirst({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });

    if (!current) {
      // Create initial vector with deltas
      const initialVector = {
        grammar: 0.5,
        vocabulary: 0.5,
        pronunciation: 0.5,
        listening: 0.5,
        speaking: 0.5,
        slang: 0.5,
        wordFormation: 0.5,
        fluency: 0.5,
        writing: 0.5,
        comprehension: 0.5,
        learningAbility: 0.5,
        confidence: 0.3,
        calculationMethod: 'incremental',
      };

      // Apply deltas
      for (const [skill, delta] of Object.entries(deltas)) {
        const key = skill === 'word_formation' ? 'wordFormation' : skill;
        if (key in initialVector) {
          (initialVector as any)[key] = Math.max(
            0,
            Math.min(1, (initialVector as any)[key] + (delta || 0))
          );
        }
      }

      await prisma.skillVector.create({
        data: {
          userId,
          ...initialVector,
        },
      });

      return deltas;
    }

    // Apply deltas to current vector
    const updates: any = {};
    for (const [skill, delta] of Object.entries(deltas)) {
      const key = skill === 'word_formation' ? 'wordFormation' : skill;
      if (key in current) {
        const currentValue = Number((current as any)[key]);
        updates[key] = Math.max(0, Math.min(1, currentValue + (delta || 0)));
      }
    }

    // Create new vector with incremented version
    await prisma.skillVector.create({
      data: {
        userId,
        grammar: updates.grammar ?? Number(current.grammar),
        vocabulary: updates.vocabulary ?? Number(current.vocabulary),
        pronunciation: updates.pronunciation ?? Number(current.pronunciation),
        listening: updates.listening ?? Number(current.listening),
        speaking: updates.speaking ?? Number(current.speaking),
        slang: updates.slang ?? Number(current.slang),
        wordFormation: updates.wordFormation ?? Number(current.wordFormation),
        fluency: updates.fluency ?? Number(current.fluency),
        writing: updates.writing ?? Number(current.writing),
        comprehension: updates.comprehension ?? Number(current.comprehension),
        learningAbility: Number(current.learningAbility),
        confidence: Math.min(1, Number(current.confidence) + 0.01),
        version: current.version + 1,
        calculationMethod: 'incremental',
      },
    });

    return updates;
  }

  private mapTask(task: any): TaskPayload {
    return {
      id: task.id,
      templateId: task.templateId,
      schemaVersion: task.schemaVersion || '1.0',
      type: task.type as SkillType,
      difficulty: task.difficulty,
      objectives: task.objectives,
      targetSkills: task.targetSkills as SkillType[],
      content: task.content,
      uiHints: task.uiHints,
      evaluation: task.evaluationRubric,
      expectedTimeSeconds: task.expectedTimeSeconds || 60,
      createdAt: task.createdAt.toISOString(),
      generatedBy: task.generatedBy as any,
    };
  }
}

export const taskService = new TaskService();
