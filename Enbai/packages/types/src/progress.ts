/**
 * Progress Tracking Types
 *
 * Types for user progress tracking, statistics, and achievements.
 */

import type { SkillType } from './skills';

// ============================================
// SKILL SNAPSHOT
// ============================================

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

// ============================================
// PROGRESS OVERVIEW
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

// ============================================
// SKILL PROGRESS (detailed with history)
// ============================================

export interface SkillProgressDetailed {
  skill: SkillType;
  currentValue: number;
  previousValue: number;
  delta: number;
  trend: 'up' | 'down' | 'stable';
  history: SkillHistoryPoint[];
}

export interface SkillHistoryPoint {
  date: string;
  value: number;
}

// ============================================
// DAILY STATS
// ============================================

export interface DailyStats {
  date: string;
  tasksCompleted: number;
  tasksCorrect: number;
  timeSpentMinutes: number;
  skillsImproved: string[];
  streak: number;
}

// ============================================
// WEEKLY REPORT
// ============================================

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

// ============================================
// ACHIEVEMENTS
// ============================================

export interface UserAchievement {
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

export interface AchievementCategory {
  id: string;
  name: string;
  nameRu: string;
  achievements: UserAchievement[];
}

// ============================================
// PROGRESS SNAPSHOT (for DB)
// ============================================

export interface ProgressSnapshotData {
  periodType: 'daily' | 'weekly' | 'monthly';
  periodDate: string;

  // Stats
  tasksCompleted: number;
  tasksCorrect: number;
  timeSpentMinutes: number;
  streakDays: number;

  // Skill changes
  skillVectorStart?: SkillSnapshot;
  skillVectorEnd?: SkillSnapshot;
  skillDeltas?: Record<string, number>;

  // Areas
  strongestSkill?: string;
  weakestSkill?: string;
  mostImprovedSkill?: string;

  // AI insights
  aiSummary?: string;
  aiRecommendations?: string[];
}

// ============================================
// API RESPONSES
// ============================================

export interface ProgressOverviewResponse {
  success: true;
  data: ProgressOverview;
}

export interface SkillHistoryResponse {
  success: true;
  data: {
    skills: SkillProgressDetailed[];
    period: number;
  };
}

export interface DailyStatsResponse {
  success: true;
  data: {
    stats: DailyStats[];
    period: number;
  };
}

export interface WeeklyReportResponse {
  success: true;
  data: WeeklyReport;
}

export interface AchievementsResponse {
  success: true;
  data: {
    unlocked: UserAchievement[];
    locked: UserAchievement[];
    total: number;
    unlockedCount: number;
  };
}
