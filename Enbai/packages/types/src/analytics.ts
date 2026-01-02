import type { SkillType, SkillVector, CEFRLevel } from './skills';

/**
 * Progress snapshot period type
 */
export type ProgressPeriodType = 'daily' | 'weekly' | 'monthly';

/**
 * Recommendation types
 */
export type RecommendationType =
  | 'daily_focus'
  | 'weakness'
  | 'task_suggestion'
  | 'streak_alert'
  | 'achievement';

/**
 * Recommendation status
 */
export type RecommendationStatus = 'active' | 'dismissed' | 'completed';

/**
 * Skill progress over period
 */
export interface SkillProgress {
  start: number;
  end: number;
  change: number;
}

/**
 * Daily breakdown
 */
export interface DailyBreakdown {
  date: string;
  tasks: number;
  minutes: number;
  accuracy: number;
}

/**
 * Achievement
 */
export interface Achievement {
  type: 'streak' | 'skill_up' | 'milestone' | 'perfect_day';
  value: number;
  message: string;
  earnedAt: string;
}

/**
 * Progress snapshot entity
 */
export interface ProgressSnapshot {
  id: string;
  userId: string;

  periodType: ProgressPeriodType;
  periodDate: string;

  tasksCompleted: number;
  tasksCorrect: number;
  timeSpentMinutes: number;
  streakDays: number;

  skillVectorStart: SkillVector | null;
  skillVectorEnd: SkillVector | null;
  skillDeltas: Partial<Record<SkillType, number>>;

  strongestSkill: SkillType | null;
  weakestSkill: SkillType | null;
  mostImprovedSkill: SkillType | null;

  aiSummary: string | null;
  aiRecommendations: unknown | null;

  createdAt: string;
}

/**
 * Recommendation entity
 */
export interface Recommendation {
  id: string;
  userId: string;

  type: RecommendationType;
  priority: 1 | 2 | 3 | 4 | 5;

  content: {
    title: string;
    description: string;
    actionLabel?: string;
    actionUrl?: string;
  };
  reason: string | null;

  targetSkills: SkillType[];

  status: RecommendationStatus;
  dismissedAt: string | null;

  validFrom: string;
  validUntil: string | null;

  generatedBy: 'deep_research' | 'analytics_engine';

  createdAt: string;
}

// ============================================
// API TYPES
// ============================================

/**
 * Progress summary response
 */
export interface GetProgressResponse {
  period: {
    start: string;
    end: string;
  };
  summary: {
    tasksCompleted: number;
    tasksCorrect: number;
    accuracy: number;
    timeSpentMinutes: number;
    streakDays: number;
    currentLevel: CEFRLevel;
  };
  skillProgress: Partial<Record<SkillType, SkillProgress>>;
  dailyBreakdown: DailyBreakdown[];
  topAchievements: Achievement[];
  aiInsights: string | null;
}

/**
 * Recommendations response
 */
export interface GetRecommendationsResponse {
  recommendations: Recommendation[];
  total: number;
}
