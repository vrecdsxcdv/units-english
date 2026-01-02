import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { progressService } from '../services/progress.service';
import { authenticate, getCurrentUserId } from '../middleware/auth';
import { Errors } from '../utils/errors';
import { generateWeeklyReportV4 } from '../services/v4/weekly-report.service';

export async function progressRoutes(app: FastifyInstance) {
  // All progress routes require authentication
  app.addHook('preHandler', authenticate);

  /**
   * GET /progress/overview
   * Get comprehensive progress overview
   */
  app.get('/overview', async (request, reply) => {
    const userId = getCurrentUserId(request);

    const overview = await progressService.getOverview(userId);

    return reply.send({
      success: true,
      data: overview,
    });
  });

  /**
   * GET /progress/skills
   * Get skill history with trends
   */
  app.get<{
    Querystring: { days?: string };
  }>('/skills', async (request, reply) => {
    const userId = getCurrentUserId(request);
    const days = request.query.days ? parseInt(request.query.days) : 30;

    if (days < 1 || days > 365) {
      throw Errors.validationError('Days must be between 1 and 365');
    }

    const skillProgress = await progressService.getSkillHistory(userId, days);

    return reply.send({
      success: true,
      data: {
        skills: skillProgress,
        period: days,
      },
    });
  });

  /**
   * GET /progress/daily
   * Get daily statistics
   */
  app.get<{
    Querystring: { days?: string };
  }>('/daily', async (request, reply) => {
    const userId = getCurrentUserId(request);
    const days = request.query.days ? parseInt(request.query.days) : 7;

    if (days < 1 || days > 90) {
      throw Errors.validationError('Days must be between 1 and 90');
    }

    const dailyStats = await progressService.getDailyStats(userId, days);

    return reply.send({
      success: true,
      data: {
        stats: dailyStats,
        period: days,
      },
    });
  });

  /**
   * GET /progress/weekly
   * Get weekly report (legacy format)
   */
  app.get('/weekly', async (request, reply) => {
    const userId = getCurrentUserId(request);

    const report = await progressService.getWeeklyReport(userId);

    return reply.send({
      success: true,
      data: report,
    });
  });

  /**
   * GET /progress/weekly-report
   * V4.1: Get enhanced weekly report (WeeklyReportV1 format)
   */
  app.get<{
    Querystring: { weekStart?: string };
  }>('/weekly-report', async (request, reply) => {
    const userId = getCurrentUserId(request);
    const weekStart = request.query.weekStart;

    // Validate date format if provided
    if (weekStart && !/^\d{4}-\d{2}-\d{2}$/.test(weekStart)) {
      throw Errors.validationError('weekStart must be in YYYY-MM-DD format');
    }

    const report = await generateWeeklyReportV4(userId, weekStart);

    return reply.send({
      success: true,
      data: report,
    });
  });

  /**
   * GET /progress/achievements
   * Get user achievements
   */
  app.get('/achievements', async (request, reply) => {
    const userId = getCurrentUserId(request);

    const achievements = await progressService.getAchievements(userId);

    // Split into unlocked and locked
    const unlocked = achievements.filter(a => a.unlockedAt !== null);
    const locked = achievements.filter(a => a.unlockedAt === null);

    return reply.send({
      success: true,
      data: {
        unlocked,
        locked,
        total: achievements.length,
        unlockedCount: unlocked.length,
      },
    });
  });

  /**
   * POST /progress/snapshot
   * Record daily progress snapshot (called at end of session)
   */
  app.post('/snapshot', async (request, reply) => {
    const userId = getCurrentUserId(request);

    await progressService.recordDailySnapshot(userId);

    return reply.send({
      success: true,
      message: 'Progress snapshot recorded',
    });
  });
}
