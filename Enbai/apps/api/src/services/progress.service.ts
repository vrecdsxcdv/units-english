/**
 * Progress Tracking Service
 *
 * Provides comprehensive progress tracking for users:
 * - Skill vector history & deltas
 * - Daily/weekly/monthly statistics
 * - Streak tracking
 * - Learning analytics
 */

import { prisma } from '../db';
import type { SkillType } from '@enbai/types';

// ============================================
// TYPES
// ============================================

export interface ProgressOverview {
  // Current skill levels
  currentSkills: SkillSnapshot;

  // Overall stats
  totalTasksCompleted: number;
  totalCorrect: number;
  accuracyPercent: number;
  totalTimeMinutes: number;

  // Streak
  currentStreak: number;
  longestStreak: number;

  // Level info
  estimatedCEFR: string;
  overallProgress: number; // 0-100

  // Recent activity
  lastActivityAt: string | null;
  daysActive: number;
}

export interface SkillSnapshot {
  grammar: number;
  vocabulary: number;
  pronunciation: number;
  listening: number;
  speaking: number;
  slang: number;
  word_formation: number;
  fluency: number;
  writing: number;
  comprehension: number;
}

export interface SkillProgress {
  skill: SkillType;
  currentValue: number;
  previousValue: number;
  delta: number;
  trend: 'up' | 'down' | 'stable';
  history: { date: string; value: number }[];
}

export interface DailyStats {
  date: string;
  tasksCompleted: number;
  tasksCorrect: number;
  timeSpentMinutes: number;
  skillsImproved: string[];
  streak: number;
}

export interface WeeklyReport {
  weekStart: string;
  weekEnd: string;

  // Summary
  totalTasks: number;
  totalCorrect: number;
  totalTimeMinutes: number;
  averageAccuracy: number;

  // Skills
  skillDeltas: Record<string, number>;
  mostImproved: string | null;
  needsWork: string | null;

  // Daily breakdown
  dailyStats: DailyStats[];

  // AI insights
  summary?: string;
  recommendations?: string[];
}

export interface Achievement {
  id: string;
  name: string;
  nameRu: string;
  description: string;
  descriptionRu: string;
  icon: string;
  unlockedAt: string | null;
  progress: number; // 0-100
  requirement: number;
  current: number;
}

// ============================================
// SERVICE
// ============================================

export class ProgressService {
  /**
   * Get comprehensive progress overview for a user
   */
  async getOverview(userId: string): Promise<ProgressOverview> {
    const [
      profile,
      currentVector,
      taskStats,
      streakInfo,
      firstActivity,
    ] = await Promise.all([
      prisma.profile.findUnique({ where: { userId } }),
      this.getCurrentSkillVector(userId),
      this.getTaskStats(userId),
      this.getStreakInfo(userId),
      this.getFirstActivityDate(userId),
    ]);

    const overallProgress = this.calculateOverallProgress(currentVector);
    const estimatedCEFR = this.estimateCEFR(overallProgress);

    return {
      currentSkills: currentVector,
      totalTasksCompleted: taskStats.total,
      totalCorrect: taskStats.correct,
      accuracyPercent: taskStats.total > 0
        ? Math.round((taskStats.correct / taskStats.total) * 100)
        : 0,
      totalTimeMinutes: taskStats.timeMinutes,
      currentStreak: streakInfo.current,
      longestStreak: streakInfo.longest,
      estimatedCEFR,
      overallProgress,
      lastActivityAt: taskStats.lastActivity,
      daysActive: this.calculateDaysActive(firstActivity),
    };
  }

  /**
   * Get skill history with trends
   */
  async getSkillHistory(
    userId: string,
    days: number = 30
  ): Promise<SkillProgress[]> {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    // Get all skill vectors in the period
    const vectors = await prisma.skillVector.findMany({
      where: {
        userId,
        createdAt: { gte: startDate },
      },
      orderBy: { createdAt: 'asc' },
    });

    // Get current and previous (30 days ago) vectors
    const currentVector = await this.getCurrentSkillVector(userId);
    const previousVector = vectors.length > 0
      ? this.mapSkillVector(vectors[0])
      : currentVector;

    const skills: SkillType[] = [
      'grammar', 'vocabulary', 'pronunciation', 'listening',
      'speaking', 'slang', 'word_formation', 'fluency',
      'writing', 'comprehension'
    ];

    return skills.map(skill => {
      const current = currentVector[skill as keyof SkillSnapshot] || 0.5;
      const previous = previousVector[skill as keyof SkillSnapshot] || 0.5;
      const delta = current - previous;

      // Build history from vectors
      const history = vectors.map(v => ({
        date: v.createdAt.toISOString().split('T')[0],
        value: Number((v as any)[skill === 'word_formation' ? 'wordFormation' : skill] || 0.5),
      }));

      // Add current if not in list
      const today = new Date().toISOString().split('T')[0];
      if (!history.find(h => h.date === today)) {
        history.push({ date: today, value: current });
      }

      return {
        skill,
        currentValue: current,
        previousValue: previous,
        delta: Math.round(delta * 1000) / 1000,
        trend: delta > 0.02 ? 'up' : delta < -0.02 ? 'down' : 'stable',
        history,
      };
    });
  }

  /**
   * Get daily statistics for a period
   */
  async getDailyStats(
    userId: string,
    days: number = 7
  ): Promise<DailyStats[]> {
    const startDate = new Date();
    startDate.setHours(0, 0, 0, 0);
    startDate.setDate(startDate.getDate() - days + 1);

    const snapshots = await prisma.progressSnapshot.findMany({
      where: {
        userId,
        periodType: 'daily',
        periodDate: { gte: startDate },
      },
      orderBy: { periodDate: 'asc' },
    });

    // Fill in missing days
    const result: DailyStats[] = [];
    const snapshotMap = new Map(
      snapshots.map(s => [s.periodDate.toISOString().split('T')[0], s])
    );

    for (let i = 0; i < days; i++) {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);
      const dateStr = date.toISOString().split('T')[0];

      const snapshot = snapshotMap.get(dateStr);
      if (snapshot) {
        const deltas = snapshot.skillDeltas as Record<string, number> | null;
        result.push({
          date: dateStr,
          tasksCompleted: snapshot.tasksCompleted,
          tasksCorrect: snapshot.tasksCorrect,
          timeSpentMinutes: snapshot.timeSpentMinutes,
          skillsImproved: deltas
            ? Object.entries(deltas).filter(([_, v]) => v > 0).map(([k]) => k)
            : [],
          streak: snapshot.streakDays,
        });
      } else {
        result.push({
          date: dateStr,
          tasksCompleted: 0,
          tasksCorrect: 0,
          timeSpentMinutes: 0,
          skillsImproved: [],
          streak: 0,
        });
      }
    }

    return result;
  }

  /**
   * Get weekly report
   */
  async getWeeklyReport(userId: string): Promise<WeeklyReport> {
    const today = new Date();
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() - today.getDay()); // Start of week (Sunday)
    weekStart.setHours(0, 0, 0, 0);

    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6);
    weekEnd.setHours(23, 59, 59, 999);

    // Get daily stats for the week
    const dailyStats = await this.getDailyStats(userId, 7);

    // Calculate totals
    const totalTasks = dailyStats.reduce((sum, d) => sum + d.tasksCompleted, 0);
    const totalCorrect = dailyStats.reduce((sum, d) => sum + d.tasksCorrect, 0);
    const totalTimeMinutes = dailyStats.reduce((sum, d) => sum + d.timeSpentMinutes, 0);

    // Get skill changes for the week
    const skillHistory = await this.getSkillHistory(userId, 7);
    const skillDeltas: Record<string, number> = {};
    let mostImproved: string | null = null;
    let needsWork: string | null = null;
    let maxDelta = -Infinity;
    let minDelta = Infinity;

    for (const skill of skillHistory) {
      skillDeltas[skill.skill] = skill.delta;
      if (skill.delta > maxDelta) {
        maxDelta = skill.delta;
        mostImproved = skill.skill;
      }
      if (skill.currentValue < 0.4 && skill.currentValue < minDelta) {
        minDelta = skill.currentValue;
        needsWork = skill.skill;
      }
    }

    // Get weekly snapshot for AI summary
    const weeklySnapshot = await prisma.progressSnapshot.findFirst({
      where: {
        userId,
        periodType: 'weekly',
        periodDate: { gte: weekStart, lte: weekEnd },
      },
    });

    return {
      weekStart: weekStart.toISOString().split('T')[0],
      weekEnd: weekEnd.toISOString().split('T')[0],
      totalTasks,
      totalCorrect,
      totalTimeMinutes,
      averageAccuracy: totalTasks > 0
        ? Math.round((totalCorrect / totalTasks) * 100)
        : 0,
      skillDeltas,
      mostImproved: maxDelta > 0.01 ? mostImproved : null,
      needsWork,
      dailyStats,
      summary: weeklySnapshot?.aiSummary || undefined,
      recommendations: weeklySnapshot?.aiRecommendations as string[] | undefined,
    };
  }

  /**
   * Get user achievements
   */
  async getAchievements(userId: string): Promise<Achievement[]> {
    const [taskStats, streakInfo, skillHistory] = await Promise.all([
      this.getTaskStats(userId),
      this.getStreakInfo(userId),
      this.getSkillHistory(userId, 365),
    ]);

    const achievements: Achievement[] = [
      // Task-based achievements
      {
        id: 'first_task',
        name: 'First Steps',
        nameRu: 'Первые шаги',
        description: 'Complete your first task',
        descriptionRu: 'Выполни первое задание',
        icon: '🎯',
        unlockedAt: taskStats.total >= 1 ? taskStats.firstTaskAt : null,
        progress: Math.min(100, (taskStats.total / 1) * 100),
        requirement: 1,
        current: taskStats.total,
      },
      {
        id: 'task_10',
        name: 'Getting Started',
        nameRu: 'Начало пути',
        description: 'Complete 10 tasks',
        descriptionRu: 'Выполни 10 заданий',
        icon: '📚',
        unlockedAt: taskStats.total >= 10 ? taskStats.lastActivity : null,
        progress: Math.min(100, (taskStats.total / 10) * 100),
        requirement: 10,
        current: taskStats.total,
      },
      {
        id: 'task_50',
        name: 'Dedicated Learner',
        nameRu: 'Усердный ученик',
        description: 'Complete 50 tasks',
        descriptionRu: 'Выполни 50 заданий',
        icon: '🌟',
        unlockedAt: taskStats.total >= 50 ? taskStats.lastActivity : null,
        progress: Math.min(100, (taskStats.total / 50) * 100),
        requirement: 50,
        current: taskStats.total,
      },
      {
        id: 'task_100',
        name: 'Century',
        nameRu: 'Сотня',
        description: 'Complete 100 tasks',
        descriptionRu: 'Выполни 100 заданий',
        icon: '💯',
        unlockedAt: taskStats.total >= 100 ? taskStats.lastActivity : null,
        progress: Math.min(100, (taskStats.total / 100) * 100),
        requirement: 100,
        current: taskStats.total,
      },

      // Streak achievements
      {
        id: 'streak_3',
        name: 'Consistent',
        nameRu: 'Стабильность',
        description: '3-day streak',
        descriptionRu: 'Занимайся 3 дня подряд',
        icon: '🔥',
        unlockedAt: streakInfo.longest >= 3 ? new Date().toISOString() : null,
        progress: Math.min(100, (streakInfo.longest / 3) * 100),
        requirement: 3,
        current: streakInfo.longest,
      },
      {
        id: 'streak_7',
        name: 'Week Warrior',
        nameRu: 'Недельный воин',
        description: '7-day streak',
        descriptionRu: 'Занимайся 7 дней подряд',
        icon: '⚡',
        unlockedAt: streakInfo.longest >= 7 ? new Date().toISOString() : null,
        progress: Math.min(100, (streakInfo.longest / 7) * 100),
        requirement: 7,
        current: streakInfo.longest,
      },
      {
        id: 'streak_30',
        name: 'Monthly Master',
        nameRu: 'Мастер месяца',
        description: '30-day streak',
        descriptionRu: 'Занимайся 30 дней подряд',
        icon: '👑',
        unlockedAt: streakInfo.longest >= 30 ? new Date().toISOString() : null,
        progress: Math.min(100, (streakInfo.longest / 30) * 100),
        requirement: 30,
        current: streakInfo.longest,
      },

      // Accuracy achievements
      {
        id: 'accuracy_80',
        name: 'Sharp Mind',
        nameRu: 'Острый ум',
        description: '80% accuracy (min 20 tasks)',
        descriptionRu: '80% точность (мин. 20 заданий)',
        icon: '🎯',
        unlockedAt: taskStats.total >= 20 && (taskStats.correct / taskStats.total) >= 0.8
          ? taskStats.lastActivity
          : null,
        progress: taskStats.total >= 20
          ? Math.min(100, ((taskStats.correct / taskStats.total) / 0.8) * 100)
          : (taskStats.total / 20) * 100,
        requirement: 80,
        current: taskStats.total >= 20
          ? Math.round((taskStats.correct / taskStats.total) * 100)
          : Math.round((taskStats.total / 20) * 80),
      },

      // Skill mastery
      {
        id: 'skill_70',
        name: 'Skill Builder',
        nameRu: 'Строитель навыков',
        description: 'Reach 70% in any skill',
        descriptionRu: 'Достигни 70% в любом навыке',
        icon: '📈',
        unlockedAt: skillHistory.some(s => s.currentValue >= 0.7)
          ? new Date().toISOString()
          : null,
        progress: Math.min(100, (Math.max(...skillHistory.map(s => s.currentValue)) / 0.7) * 100),
        requirement: 70,
        current: Math.round(Math.max(...skillHistory.map(s => s.currentValue)) * 100),
      },
    ];

    return achievements.sort((a, b) => {
      // Unlocked first, then by progress
      if (a.unlockedAt && !b.unlockedAt) return -1;
      if (!a.unlockedAt && b.unlockedAt) return 1;
      return b.progress - a.progress;
    });
  }

  /**
   * Record daily progress snapshot
   * Should be called at end of day or when user finishes session
   */
  async recordDailySnapshot(userId: string): Promise<void> {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Check if snapshot already exists for today
    const existing = await prisma.progressSnapshot.findFirst({
      where: {
        userId,
        periodType: 'daily',
        periodDate: today,
      },
    });

    // Get today's stats
    const todayStart = new Date(today);
    const todayEnd = new Date(today);
    todayEnd.setHours(23, 59, 59, 999);

    const [attempts, currentVector, previousVector] = await Promise.all([
      prisma.taskAttempt.findMany({
        where: {
          userId,
          submittedAt: { gte: todayStart, lte: todayEnd },
        },
      }),
      this.getCurrentSkillVector(userId),
      this.getSkillVectorAt(userId, todayStart),
    ]);

    const tasksCompleted = attempts.length;
    const tasksCorrect = attempts.filter(a => a.isCorrect).length;
    const timeSpentMinutes = Math.round(
      attempts.reduce((sum, a) => sum + (a.timeSpentSeconds || 0), 0) / 60
    );

    // Calculate skill deltas
    const skillDeltas: Record<string, number> = {};
    const skills = Object.keys(currentVector) as (keyof SkillSnapshot)[];
    for (const skill of skills) {
      const current = currentVector[skill] || 0.5;
      const previous = previousVector[skill] || 0.5;
      skillDeltas[skill] = Math.round((current - previous) * 1000) / 1000;
    }

    // Find most improved and weakest
    const deltaEntries = Object.entries(skillDeltas);
    const mostImproved = deltaEntries.reduce(
      (max, [skill, delta]) => delta > (max[1] || 0) ? [skill, delta] : max,
      ['', -Infinity] as [string, number]
    )[0] || null;
    const weakestEntry = Object.entries(currentVector).reduce(
      (min, [skill, value]) => value < (min[1] || 1) ? [skill, value] : min,
      ['', Infinity] as [string, number]
    );
    const weakest = weakestEntry[0] || null;

    // Get streak
    const streak = await this.calculateCurrentStreak(userId);

    if (existing) {
      await prisma.progressSnapshot.update({
        where: { id: existing.id },
        data: {
          tasksCompleted,
          tasksCorrect,
          timeSpentMinutes,
          streakDays: streak,
          skillVectorEnd: currentVector as any,
          skillDeltas: skillDeltas as any,
          mostImprovedSkill: mostImproved,
          weakestSkill: weakest,
        },
      });
    } else {
      await prisma.progressSnapshot.create({
        data: {
          userId,
          periodType: 'daily',
          periodDate: today,
          tasksCompleted,
          tasksCorrect,
          timeSpentMinutes,
          streakDays: streak,
          skillVectorStart: previousVector as any,
          skillVectorEnd: currentVector as any,
          skillDeltas: skillDeltas as any,
          strongestSkill: Object.entries(currentVector).reduce(
            (max, [skill, value]) => value > (max[1] || 0) ? [skill, value] : max,
            ['', -Infinity] as [string, number]
          )[0] || null,
          weakestSkill: weakest,
          mostImprovedSkill: mostImproved,
        },
      });
    }
  }

  // ============================================
  // PRIVATE HELPERS
  // ============================================

  private async getCurrentSkillVector(userId: string): Promise<SkillSnapshot> {
    const vector = await prisma.skillVector.findFirst({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });

    if (!vector) {
      return this.getDefaultSkillVector();
    }

    return this.mapSkillVector(vector);
  }

  private async getSkillVectorAt(userId: string, date: Date): Promise<SkillSnapshot> {
    const vector = await prisma.skillVector.findFirst({
      where: {
        userId,
        createdAt: { lte: date },
      },
      orderBy: { createdAt: 'desc' },
    });

    if (!vector) {
      return this.getDefaultSkillVector();
    }

    return this.mapSkillVector(vector);
  }

  private mapSkillVector(vector: any): SkillSnapshot {
    return {
      grammar: Number(vector.grammar) || 0.5,
      vocabulary: Number(vector.vocabulary) || 0.5,
      pronunciation: Number(vector.pronunciation) || 0.5,
      listening: Number(vector.listening) || 0.5,
      speaking: Number(vector.speaking) || 0.5,
      slang: Number(vector.slang) || 0.5,
      word_formation: Number(vector.wordFormation) || 0.5,
      fluency: Number(vector.fluency) || 0.5,
      writing: Number(vector.writing) || 0.5,
      comprehension: Number(vector.comprehension) || 0.5,
    };
  }

  private getDefaultSkillVector(): SkillSnapshot {
    return {
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
  }

  private async getTaskStats(userId: string): Promise<{
    total: number;
    correct: number;
    timeMinutes: number;
    lastActivity: string | null;
    firstTaskAt: string | null;
  }> {
    const [attempts, firstAttempt, lastAttempt] = await Promise.all([
      prisma.taskAttempt.aggregate({
        where: { userId },
        _count: true,
        _sum: { timeSpentSeconds: true },
      }),
      prisma.taskAttempt.findFirst({
        where: { userId },
        orderBy: { createdAt: 'asc' },
      }),
      prisma.taskAttempt.findFirst({
        where: { userId },
        orderBy: { createdAt: 'desc' },
      }),
    ]);

    const correctCount = await prisma.taskAttempt.count({
      where: { userId, isCorrect: true },
    });

    return {
      total: attempts._count || 0,
      correct: correctCount,
      timeMinutes: Math.round((attempts._sum.timeSpentSeconds || 0) / 60),
      lastActivity: lastAttempt?.createdAt.toISOString() || null,
      firstTaskAt: firstAttempt?.createdAt.toISOString() || null,
    };
  }

  private async getStreakInfo(userId: string): Promise<{
    current: number;
    longest: number;
  }> {
    const current = await this.calculateCurrentStreak(userId);

    // Get longest from snapshots
    const longestSnapshot = await prisma.progressSnapshot.findFirst({
      where: { userId },
      orderBy: { streakDays: 'desc' },
    });

    return {
      current,
      longest: Math.max(current, longestSnapshot?.streakDays || 0),
    };
  }

  private async calculateCurrentStreak(userId: string): Promise<number> {
    let streak = 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Check each day backwards
    for (let i = 0; i < 365; i++) {
      const checkDate = new Date(today);
      checkDate.setDate(today.getDate() - i);
      const nextDay = new Date(checkDate);
      nextDay.setDate(checkDate.getDate() + 1);

      const hasActivity = await prisma.taskAttempt.findFirst({
        where: {
          userId,
          submittedAt: {
            gte: checkDate,
            lt: nextDay,
          },
        },
      });

      if (hasActivity) {
        streak++;
      } else if (i > 0) {
        // Allow today to be empty (user might not have practiced yet)
        break;
      }
    }

    return streak;
  }

  private async getFirstActivityDate(userId: string): Promise<Date | null> {
    const first = await prisma.taskAttempt.findFirst({
      where: { userId },
      orderBy: { createdAt: 'asc' },
    });
    return first?.createdAt || null;
  }

  private calculateDaysActive(firstActivity: Date | null): number {
    if (!firstActivity) return 0;
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - firstActivity.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  private calculateOverallProgress(skills: SkillSnapshot): number {
    const values = Object.values(skills);
    const avg = values.reduce((sum, v) => sum + v, 0) / values.length;
    return Math.round(avg * 100);
  }

  private estimateCEFR(progress: number): string {
    if (progress >= 90) return 'C2';
    if (progress >= 75) return 'C1';
    if (progress >= 60) return 'B2';
    if (progress >= 45) return 'B1';
    if (progress >= 30) return 'A2';
    return 'A1';
  }
}

export const progressService = new ProgressService();
