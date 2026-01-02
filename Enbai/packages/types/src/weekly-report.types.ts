/**
 * V4 Weekly Learning Report Types
 *
 * Schema for AI-generated weekly learning reports.
 */

import type { SkillType, CEFRLevel } from './skills';
import type { PlateauSignal } from './plateau-detection.types';

/**
 * Weekly report schema version
 */
export const WEEKLY_REPORT_SCHEMA_VERSION = '1.0';

/**
 * Complete weekly learning report
 */
export interface WeeklyReportV1 {
  // Identity
  schemaVersion: typeof WEEKLY_REPORT_SCHEMA_VERSION;
  reportId: string;
  userId: string;

  // Period
  weekStart: string;          // ISO date
  weekEnd: string;            // ISO date
  generatedAt: string;        // ISO timestamp

  // Summary
  summary: WeekSummary;

  // Skill analysis
  skillProgress: SkillProgressReport[];

  // Achievements
  achievements: AchievementV4[];

  // Challenges
  challenges: Challenge[];

  // Plateaus and risks
  risks: RiskAssessment[];

  // Recommendations
  recommendations: WeeklyRecommendation[];

  // Next week plan
  nextWeekPlan: NextWeekPlan;

  // Motivational message
  motivation: MotivationalMessage;
}

/**
 * Overall week summary
 */
export interface WeekSummary {
  // Activity
  totalSessionsCount: number;
  totalMinutesLearned: number;
  averageSessionMinutes: number;
  daysActive: number;

  // Performance
  tasksCompleted: number;
  averageAccuracy: number;       // 0-100
  lessonsCompleted: number;

  // Progress
  overallSkillChange: number;    // -1 to 1
  progressDirection: 'improving' | 'stable' | 'declining';

  // CEFR
  currentCEFR: CEFRLevel;
  cefrProgress: number;          // % towards next level

  // Streak
  currentStreak: number;
  longestStreak: number;

  // Headlines
  headline: string;              // e.g., "Great week! +5% overall"
  headlineRu: string;
}

/**
 * Per-skill progress report
 */
export interface SkillProgressReport {
  skill: SkillType;

  // Values
  startValue: number;            // Effective skill at week start
  endValue: number;              // Effective skill at week end
  rawValue: number;              // Raw skill (without decay)

  // Change
  delta: number;                 // Change this week
  deltaPercent: number;          // % change
  trend: 'up' | 'down' | 'stable';

  // Practice
  practiceCount: number;
  accuracy: number;              // 0-100

  // Status
  status: SkillStatus;

  // Comparison
  percentile?: number;           // vs other learners (0-100)
}

/**
 * Skill status
 */
export type SkillStatus =
  | 'improving'        // Consistent growth
  | 'stable'           // No significant change
  | 'declining'        // Losing ground
  | 'at_risk'          // Needs attention
  | 'mastered'         // Near ceiling
  | 'neglected';       // Not practiced

/**
 * Achievement earned this week (V4 extended version)
 */
export interface AchievementV4 {
  id: string;
  type: AchievementTypeV4;
  title: string;
  titleRu: string;
  description: string;
  descriptionRu: string;
  earnedAt: string;              // ISO timestamp
  icon: string;                  // Emoji or icon name
  xpValue: number;
}

/**
 * Achievement types (V4)
 */
export type AchievementTypeV4 =
  | 'streak'           // N days in a row
  | 'mastery'          // Skill reached threshold
  | 'completion'       // Finished course/section
  | 'accuracy'         // High accuracy session
  | 'consistency'      // Regular practice
  | 'improvement'      // Big skill jump
  | 'milestone';       // Level up, etc.

/**
 * Challenge faced this week
 */
export interface Challenge {
  skill: SkillType;
  type: ChallengeType;
  description: string;
  descriptionRu: string;
  severity: 'low' | 'medium' | 'high';
  errorPattern?: string;
  suggestedFix: string;
  suggestedFixRu: string;
}

/**
 * Challenge types
 */
export type ChallengeType =
  | 'repeated_error'     // Same mistake multiple times
  | 'concept_confusion'  // Mixing up related concepts
  | 'low_retention'      // Forgetting quickly
  | 'avoidance'          // Skipping certain tasks
  | 'time_pressure';     // Struggling with timed tasks

/**
 * Risk assessment
 */
export interface RiskAssessment {
  type: RiskType;
  skill?: SkillType;
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  descriptionRu: string;
  plateauSignal?: PlateauSignal;
  mitigationSuggestion: string;
  mitigationSuggestionRu: string;
}

/**
 * Risk types
 */
export type RiskType =
  | 'plateau'           // Skill not progressing
  | 'churn'             // Risk of stopping
  | 'burnout'           // Over-practicing
  | 'skill_decay'       // Forgetting unpracticed skills
  | 'imbalance';        // Some skills neglected

/**
 * Weekly recommendation
 */
export interface WeeklyRecommendation {
  priority: 1 | 2 | 3;           // 1 = highest
  type: RecommendationTypeV4;
  title: string;
  titleRu: string;
  description: string;
  descriptionRu: string;
  actionable: string;            // Specific action to take
  actionableRu: string;
  relatedSkills: SkillType[];
  estimatedImpact: 'low' | 'medium' | 'high';
}

/**
 * Recommendation types (V4 version - different from analytics)
 */
export type RecommendationTypeV4 =
  | 'focus_skill'        // Prioritize specific skill
  | 'review'             // Review past material
  | 'practice_more'      // Increase practice
  | 'take_break'         // Rest to avoid burnout
  | 'try_different'      // Change approach
  | 'consolidate'        // Reinforce before moving on
  | 'challenge'          // Ready for harder content
  | 'schedule';          // Adjust learning schedule

/**
 * Plan for next week
 */
export interface NextWeekPlan {
  // Focus areas
  primaryFocus: SkillType;
  secondaryFocus: SkillType[];

  // Goals
  suggestedSessions: number;
  suggestedMinutesPerDay: number;
  targetAccuracy: number;

  // Topics
  recommendedTopics: RecommendedTopic[];

  // Milestones
  weeklyMilestone: string;
  weeklyMilestoneRu: string;
}

/**
 * Recommended topic for next week
 */
export interface RecommendedTopic {
  topicId: string;
  title: string;
  titleRu: string;
  reason: string;
  reasonRu: string;
  priority: number;             // 1-10
  estimatedMinutes: number;
}

/**
 * Motivational message
 */
export interface MotivationalMessage {
  tone: 'encouraging' | 'celebratory' | 'supportive' | 'challenging';
  message: string;
  messageRu: string;
  emoji: string;
}

// ============================================
// EXAMPLE REPORTS
// ============================================

/**
 * Example: A2 user with plateau
 */
export const EXAMPLE_REPORT_A2_PLATEAU: WeeklyReportV1 = {
  schemaVersion: WEEKLY_REPORT_SCHEMA_VERSION,
  reportId: 'report_20240115_user123',
  userId: 'user123',
  weekStart: '2024-01-08',
  weekEnd: '2024-01-14',
  generatedAt: new Date().toISOString(),

  summary: {
    totalSessionsCount: 5,
    totalMinutesLearned: 87,
    averageSessionMinutes: 17,
    daysActive: 5,
    tasksCompleted: 42,
    averageAccuracy: 68,
    lessonsCompleted: 3,
    overallSkillChange: 0.01,
    progressDirection: 'stable',
    currentCEFR: 'A2',
    cefrProgress: 45,
    currentStreak: 5,
    longestStreak: 12,
    headline: 'Steady week — grammar needs attention',
    headlineRu: 'Стабильная неделя — грамматика требует внимания',
  },

  skillProgress: [
    {
      skill: 'grammar',
      startValue: 0.32,
      endValue: 0.33,
      rawValue: 0.38,
      delta: 0.01,
      deltaPercent: 3,
      trend: 'stable',
      practiceCount: 15,
      accuracy: 62,
      status: 'at_risk',
    },
    {
      skill: 'vocabulary',
      startValue: 0.35,
      endValue: 0.38,
      rawValue: 0.38,
      delta: 0.03,
      deltaPercent: 9,
      trend: 'up',
      practiceCount: 18,
      accuracy: 75,
      status: 'improving',
    },
  ],

  achievements: [
    {
      id: 'ach_streak_5',
      type: 'streak',
      title: '5 Day Streak!',
      titleRu: '5 дней подряд!',
      description: 'You practiced 5 days in a row',
      descriptionRu: 'Ты занимался 5 дней подряд',
      earnedAt: '2024-01-12T18:30:00Z',
      icon: '🔥',
      xpValue: 50,
    },
  ],

  challenges: [
    {
      skill: 'grammar',
      type: 'repeated_error',
      description: 'Confusing Present Simple and Present Continuous',
      descriptionRu: 'Путаница между Present Simple и Present Continuous',
      severity: 'medium',
      errorPattern: 'tense_confusion',
      suggestedFix: 'Review time markers (always, now, every day)',
      suggestedFixRu: 'Повтори маркеры времени (always, now, every day)',
    },
  ],

  risks: [
    {
      type: 'plateau',
      skill: 'grammar',
      severity: 'medium',
      description: 'Grammar skill has not improved in 2 weeks',
      descriptionRu: 'Грамматика не растёт 2 недели',
      mitigationSuggestion: 'Try different learning format (examples first)',
      mitigationSuggestionRu: 'Попробуй другой формат (сначала примеры)',
    },
  ],

  recommendations: [
    {
      priority: 1,
      type: 'focus_skill',
      title: 'Focus on Grammar',
      titleRu: 'Сфокусируйся на грамматике',
      description: 'Your grammar needs extra attention this week',
      descriptionRu: 'Грамматика требует особого внимания на этой неделе',
      actionable: 'Complete 2 grammar lessons on tenses',
      actionableRu: 'Пройди 2 урока по временам',
      relatedSkills: ['grammar'],
      estimatedImpact: 'high',
    },
    {
      priority: 2,
      type: 'review',
      title: 'Review Past Mistakes',
      titleRu: 'Повтори ошибки',
      description: 'Review the mistakes you made this week',
      descriptionRu: 'Повтори ошибки этой недели',
      actionable: 'Spend 10 minutes on error review session',
      actionableRu: 'Потрать 10 минут на разбор ошибок',
      relatedSkills: ['grammar', 'vocabulary'],
      estimatedImpact: 'medium',
    },
  ],

  nextWeekPlan: {
    primaryFocus: 'grammar',
    secondaryFocus: ['vocabulary'],
    suggestedSessions: 6,
    suggestedMinutesPerDay: 20,
    targetAccuracy: 75,
    recommendedTopics: [
      {
        topicId: 'tenses_present_simple_continuous',
        title: 'Present Simple vs Continuous',
        titleRu: 'Present Simple vs Continuous',
        reason: 'Addresses your main challenge',
        reasonRu: 'Решает твою главную проблему',
        priority: 10,
        estimatedMinutes: 15,
      },
    ],
    weeklyMilestone: 'Reach 70% accuracy in grammar exercises',
    weeklyMilestoneRu: 'Достигни 70% точности в грамматике',
  },

  motivation: {
    tone: 'supportive',
    message: 'Grammar can be tricky, but you\'re making progress! Small consistent steps lead to big results.',
    messageRu: 'Грамматика бывает сложной, но ты продвигаешься! Маленькие шаги ведут к большим результатам.',
    emoji: '💪',
  },
};

/**
 * Example: B1 user with fatigue
 */
export const EXAMPLE_REPORT_B1_FATIGUE: WeeklyReportV1 = {
  schemaVersion: WEEKLY_REPORT_SCHEMA_VERSION,
  reportId: 'report_20240115_user456',
  userId: 'user456',
  weekStart: '2024-01-08',
  weekEnd: '2024-01-14',
  generatedAt: new Date().toISOString(),

  summary: {
    totalSessionsCount: 12,
    totalMinutesLearned: 245,
    averageSessionMinutes: 20,
    daysActive: 7,
    tasksCompleted: 98,
    averageAccuracy: 71,
    lessonsCompleted: 8,
    overallSkillChange: 0.04,
    progressDirection: 'improving',
    currentCEFR: 'B1',
    cefrProgress: 30,
    currentStreak: 14,
    longestStreak: 14,
    headline: 'Ambitious week — time for rest',
    headlineRu: 'Амбициозная неделя — пора отдохнуть',
  },

  skillProgress: [
    {
      skill: 'speaking',
      startValue: 0.45,
      endValue: 0.48,
      rawValue: 0.50,
      delta: 0.03,
      deltaPercent: 7,
      trend: 'up',
      practiceCount: 25,
      accuracy: 70,
      status: 'improving',
    },
    {
      skill: 'listening',
      startValue: 0.42,
      endValue: 0.44,
      rawValue: 0.44,
      delta: 0.02,
      deltaPercent: 5,
      trend: 'up',
      practiceCount: 20,
      accuracy: 68,
      status: 'improving',
    },
  ],

  achievements: [
    {
      id: 'ach_streak_14',
      type: 'streak',
      title: '2 Week Streak!',
      titleRu: '2 недели подряд!',
      description: 'Incredible! 14 days of consistent practice',
      descriptionRu: 'Невероятно! 14 дней подряд',
      earnedAt: '2024-01-14T20:00:00Z',
      icon: '🏆',
      xpValue: 150,
    },
    {
      id: 'ach_marathon',
      type: 'consistency',
      title: 'Learning Marathon',
      titleRu: 'Учебный марафон',
      description: 'Over 4 hours of learning this week',
      descriptionRu: 'Больше 4 часов обучения за неделю',
      earnedAt: '2024-01-13T19:00:00Z',
      icon: '🏃',
      xpValue: 100,
    },
  ],

  challenges: [
    {
      skill: 'speaking',
      type: 'time_pressure',
      description: 'Response time increasing in later sessions',
      descriptionRu: 'Время ответа растёт к концу сессий',
      severity: 'low',
      suggestedFix: 'Take breaks every 20 minutes',
      suggestedFixRu: 'Делай перерывы каждые 20 минут',
    },
  ],

  risks: [
    {
      type: 'burnout',
      severity: 'high',
      description: 'Very high activity may lead to burnout',
      descriptionRu: 'Высокая активность может привести к выгоранию',
      mitigationSuggestion: 'Reduce to 15 minutes per day next week',
      mitigationSuggestionRu: 'Сократи до 15 минут в день на следующей неделе',
    },
  ],

  recommendations: [
    {
      priority: 1,
      type: 'take_break',
      title: 'Rest Day Tomorrow',
      titleRu: 'Отдохни завтра',
      description: 'Your brain needs rest to consolidate learning',
      descriptionRu: 'Мозгу нужен отдых для закрепления',
      actionable: 'Take 1-2 days completely off from learning',
      actionableRu: 'Сделай 1-2 дня полного отдыха от учёбы',
      relatedSkills: [],
      estimatedImpact: 'high',
    },
    {
      priority: 2,
      type: 'schedule',
      title: 'Shorter Sessions',
      titleRu: 'Короче сессии',
      description: 'Shorter sessions are more effective',
      descriptionRu: 'Короткие сессии эффективнее',
      actionable: 'Limit sessions to 15 minutes for the next week',
      actionableRu: 'Ограничь сессии 15 минутами на следующей неделе',
      relatedSkills: [],
      estimatedImpact: 'medium',
    },
  ],

  nextWeekPlan: {
    primaryFocus: 'speaking',
    secondaryFocus: ['listening'],
    suggestedSessions: 4,          // Reduced!
    suggestedMinutesPerDay: 15,    // Reduced!
    targetAccuracy: 75,
    recommendedTopics: [
      {
        topicId: 'speaking_daily_situations',
        title: 'Daily Conversations',
        titleRu: 'Бытовые разговоры',
        reason: 'Light practice to maintain momentum',
        reasonRu: 'Лёгкая практика для поддержания темпа',
        priority: 8,
        estimatedMinutes: 10,
      },
    ],
    weeklyMilestone: 'Maintain skills while resting',
    weeklyMilestoneRu: 'Сохранить навыки во время отдыха',
  },

  motivation: {
    tone: 'supportive',
    message: 'You\'ve been amazing this week! Now give your brain the rest it deserves. Learning happens during sleep too!',
    messageRu: 'Ты был потрясающ на этой неделе! Теперь дай мозгу заслуженный отдых. Обучение происходит и во сне!',
    emoji: '😴',
  },
};
