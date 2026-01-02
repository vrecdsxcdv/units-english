/**
 * V4 Weekly Learning Report Generator
 *
 * Generates comprehensive weekly learning reports.
 * Uses AI-1 for analysis and natural language generation.
 */

import type { SkillType, CEFRLevel, SkillVector } from '@enbai/types';
import {
  type WeeklyReportV1,
  type WeekSummary,
  type SkillProgressReport,
  type SkillStatus,
  type Achievement,
  type AchievementType,
  type Challenge,
  type RiskAssessment,
  type WeeklyRecommendation,
  type NextWeekPlan,
  type MotivationalMessage,
  type RecommendedTopic,
  WEEKLY_REPORT_SCHEMA_VERSION,
} from '@enbai/types';
import type { SkillStateV4, SkillVectorV4 } from '@enbai/types';
import type { PlateauAnalysis, PlateauSignal } from '@enbai/types';
import { calculateCEFRLevel } from '@enbai/types';

/**
 * Input data for report generation
 */
export interface WeeklyReportInput {
  userId: string;
  weekStart: Date;
  weekEnd: Date;

  // Skill data
  skillVectorStart: SkillVectorV4;
  skillVectorEnd: SkillVectorV4;

  // Activity data
  sessions: SessionSummary[];
  tasksCompleted: TaskSummary[];
  lessonsCompleted: LessonSummary[];

  // Analysis data
  plateauAnalysis?: PlateauAnalysis;
  errorPatterns: ErrorPatternSummary[];

  // User context
  streak: number;
  longestStreak: number;
  learningGoal?: string;
}

export interface SessionSummary {
  date: string;
  durationMinutes: number;
  tasksCompleted: number;
  accuracy: number;
}

export interface TaskSummary {
  taskId: string;
  skill: SkillType;
  correct: boolean;
  difficulty: number;
}

export interface LessonSummary {
  lessonId: string;
  title: string;
  skills: SkillType[];
  score: number;
}

export interface ErrorPatternSummary {
  patternId: string;
  skill: SkillType;
  description: string;
  occurrences: number;
}

/**
 * Generate weekly report
 */
export function generateWeeklyReport(input: WeeklyReportInput): WeeklyReportV1 {
  const reportId = `report_${input.weekStart.toISOString().split('T')[0]}_${input.userId}`;

  // Generate each section
  const summary = generateSummary(input);
  const skillProgress = generateSkillProgress(input);
  const achievements = generateAchievements(input);
  const challenges = generateChallenges(input);
  const risks = generateRisks(input);
  const recommendations = generateRecommendations(input, skillProgress, risks);
  const nextWeekPlan = generateNextWeekPlan(input, skillProgress, recommendations);
  const motivation = generateMotivation(input, summary);

  return {
    schemaVersion: WEEKLY_REPORT_SCHEMA_VERSION,
    reportId,
    userId: input.userId,
    weekStart: input.weekStart.toISOString().split('T')[0],
    weekEnd: input.weekEnd.toISOString().split('T')[0],
    generatedAt: new Date().toISOString(),
    summary,
    skillProgress,
    achievements,
    challenges,
    risks,
    recommendations,
    nextWeekPlan,
    motivation,
  };
}

/**
 * Generate week summary
 */
function generateSummary(input: WeeklyReportInput): WeekSummary {
  const { sessions, tasksCompleted, lessonsCompleted, streak, longestStreak } = input;

  // Calculate totals
  const totalSessionsCount = sessions.length;
  const totalMinutesLearned = sessions.reduce((sum, s) => sum + s.durationMinutes, 0);
  const averageSessionMinutes = totalSessionsCount > 0
    ? Math.round(totalMinutesLearned / totalSessionsCount)
    : 0;

  // Calculate days active
  const uniqueDays = new Set(sessions.map(s => s.date)).size;

  // Calculate accuracy
  const correctTasks = tasksCompleted.filter(t => t.correct).length;
  const averageAccuracy = tasksCompleted.length > 0
    ? Math.round((correctTasks / tasksCompleted.length) * 100)
    : 0;

  // Calculate skill change
  const overallSkillChange = calculateOverallSkillChange(
    input.skillVectorStart,
    input.skillVectorEnd
  );

  const progressDirection = overallSkillChange > 0.02
    ? 'improving'
    : overallSkillChange < -0.02
      ? 'declining'
      : 'stable';

  // Calculate CEFR
  const endSimple = skillVectorV4ToSimple(input.skillVectorEnd);
  const currentCEFR = calculateCEFRLevel(endSimple);
  const cefrProgress = calculateCEFRProgress(endSimple, currentCEFR);

  // Generate headline
  const { headline, headlineRu } = generateHeadline(
    overallSkillChange,
    averageAccuracy,
    uniqueDays
  );

  return {
    totalSessionsCount,
    totalMinutesLearned,
    averageSessionMinutes,
    daysActive: uniqueDays,
    tasksCompleted: tasksCompleted.length,
    averageAccuracy,
    lessonsCompleted: lessonsCompleted.length,
    overallSkillChange,
    progressDirection,
    currentCEFR,
    cefrProgress,
    currentStreak: streak,
    longestStreak,
    headline,
    headlineRu,
  };
}

/**
 * Generate skill progress reports
 */
function generateSkillProgress(input: WeeklyReportInput): SkillProgressReport[] {
  const reports: SkillProgressReport[] = [];

  for (const [skillType, endState] of Object.entries(input.skillVectorEnd) as [SkillType, SkillStateV4][]) {
    const startState = input.skillVectorStart[skillType];

    const delta = endState.effectiveSkill - startState.effectiveSkill;
    const deltaPercent = startState.effectiveSkill > 0
      ? Math.round((delta / startState.effectiveSkill) * 100)
      : 0;

    // Count practices for this skill
    const skillTasks = input.tasksCompleted.filter(t => t.skill === skillType);
    const practiceCount = skillTasks.length;
    const correctCount = skillTasks.filter(t => t.correct).length;
    const accuracy = practiceCount > 0
      ? Math.round((correctCount / practiceCount) * 100)
      : 0;

    // Determine trend
    const trend = delta > 0.01 ? 'up' : delta < -0.01 ? 'down' : 'stable';

    // Determine status
    const status = determineSkillStatus(
      endState,
      delta,
      practiceCount,
      input.plateauAnalysis
    );

    reports.push({
      skill: skillType,
      startValue: startState.effectiveSkill,
      endValue: endState.effectiveSkill,
      rawValue: endState.rawSkill,
      delta,
      deltaPercent,
      trend,
      practiceCount,
      accuracy,
      status,
    });
  }

  // Sort by delta (biggest improvements first)
  return reports.sort((a, b) => b.delta - a.delta);
}

/**
 * Determine skill status
 */
function determineSkillStatus(
  skill: SkillStateV4,
  delta: number,
  practiceCount: number,
  plateauAnalysis?: PlateauAnalysis
): SkillStatus {
  // Check if mastered
  if (skill.effectiveSkill >= 0.9) return 'mastered';

  // Check if neglected
  if (practiceCount === 0) return 'neglected';

  // Check if at risk (plateau)
  if (plateauAnalysis?.detectedPlateaus.some(p => p.skill === skill as any)) {
    return 'at_risk';
  }

  // Check trend
  if (delta > 0.02) return 'improving';
  if (delta < -0.02) return 'declining';
  return 'stable';
}

/**
 * Generate achievements
 */
function generateAchievements(input: WeeklyReportInput): Achievement[] {
  const achievements: Achievement[] = [];

  // Streak achievements
  if (input.streak >= 30) {
    achievements.push({
      id: `ach_streak_30`,
      type: 'streak',
      title: 'Monthly Champion!',
      titleRu: 'Чемпион месяца!',
      description: '30 days of consistent practice',
      descriptionRu: '30 дней подряд',
      earnedAt: new Date().toISOString(),
      icon: '🏆',
      xpValue: 300,
    });
  } else if (input.streak >= 14) {
    achievements.push({
      id: `ach_streak_14`,
      type: 'streak',
      title: '2 Week Streak!',
      titleRu: '2 недели подряд!',
      description: '14 days of consistent practice',
      descriptionRu: '14 дней подряд',
      earnedAt: new Date().toISOString(),
      icon: '🔥',
      xpValue: 150,
    });
  } else if (input.streak >= 7) {
    achievements.push({
      id: `ach_streak_7`,
      type: 'streak',
      title: 'Week Warrior!',
      titleRu: 'Недельный воин!',
      description: '7 days in a row',
      descriptionRu: '7 дней подряд',
      earnedAt: new Date().toISOString(),
      icon: '💪',
      xpValue: 75,
    });
  }

  // Accuracy achievement
  const avgAccuracy = input.tasksCompleted.length > 0
    ? input.tasksCompleted.filter(t => t.correct).length / input.tasksCompleted.length
    : 0;

  if (avgAccuracy >= 0.9 && input.tasksCompleted.length >= 20) {
    achievements.push({
      id: 'ach_accuracy_90',
      type: 'accuracy',
      title: 'Precision Master',
      titleRu: 'Мастер точности',
      description: '90%+ accuracy on 20+ tasks',
      descriptionRu: '90%+ точности на 20+ заданиях',
      earnedAt: new Date().toISOString(),
      icon: '🎯',
      xpValue: 100,
    });
  }

  // Learning marathon
  const totalMinutes = input.sessions.reduce((sum, s) => sum + s.durationMinutes, 0);
  if (totalMinutes >= 240) {
    achievements.push({
      id: 'ach_marathon',
      type: 'consistency',
      title: 'Learning Marathon',
      titleRu: 'Учебный марафон',
      description: 'Over 4 hours of learning this week',
      descriptionRu: 'Больше 4 часов учёбы за неделю',
      earnedAt: new Date().toISOString(),
      icon: '🏃',
      xpValue: 100,
    });
  }

  // Skill improvement
  const skillChange = calculateOverallSkillChange(
    input.skillVectorStart,
    input.skillVectorEnd
  );

  if (skillChange >= 0.1) {
    achievements.push({
      id: 'ach_big_jump',
      type: 'improvement',
      title: 'Big Leap!',
      titleRu: 'Большой скачок!',
      description: 'Major skill improvement this week',
      descriptionRu: 'Значительный рост навыков за неделю',
      earnedAt: new Date().toISOString(),
      icon: '🚀',
      xpValue: 150,
    });
  }

  return achievements;
}

/**
 * Generate challenges
 */
function generateChallenges(input: WeeklyReportInput): Challenge[] {
  const challenges: Challenge[] = [];

  // Error pattern challenges
  for (const pattern of input.errorPatterns) {
    if (pattern.occurrences >= 3) {
      challenges.push({
        skill: pattern.skill,
        type: 'repeated_error',
        description: pattern.description,
        descriptionRu: pattern.description, // Would be translated in real implementation
        severity: pattern.occurrences >= 5 ? 'high' : 'medium',
        errorPattern: pattern.patternId,
        suggestedFix: `Focus on ${pattern.description.toLowerCase()} with targeted practice`,
        suggestedFixRu: `Сфокусируйся на ${pattern.description.toLowerCase()} с целевой практикой`,
      });
    }
  }

  return challenges;
}

/**
 * Generate risks
 */
function generateRisks(input: WeeklyReportInput): RiskAssessment[] {
  const risks: RiskAssessment[] = [];

  // Plateau risks
  if (input.plateauAnalysis) {
    for (const plateau of input.plateauAnalysis.detectedPlateaus) {
      risks.push({
        type: 'plateau',
        skill: plateau.skill,
        severity: plateau.confidence >= 0.8 ? 'high' : 'medium',
        description: `${plateau.skill} has not improved in ${plateau.durationDays} days`,
        descriptionRu: `${plateau.skill} не растёт ${plateau.durationDays} дней`,
        plateauSignal: plateau,
        mitigationSuggestion: plateau.recommendedInterventions[0]?.description || 'Try different approach',
        mitigationSuggestionRu: 'Попробуй другой подход',
      });
    }
  }

  // Burnout risk
  const totalMinutes = input.sessions.reduce((sum, s) => sum + s.durationMinutes, 0);
  if (totalMinutes >= 300 && input.sessions.length >= 10) {
    risks.push({
      type: 'burnout',
      severity: 'medium',
      description: 'High activity level may lead to burnout',
      descriptionRu: 'Высокая активность может привести к выгоранию',
      mitigationSuggestion: 'Consider shorter, more focused sessions',
      mitigationSuggestionRu: 'Рассмотри более короткие сессии',
    });
  }

  // Skill decay risk
  for (const [skillType, state] of Object.entries(input.skillVectorEnd) as [SkillType, SkillStateV4][]) {
    const gap = state.rawSkill - state.effectiveSkill;
    if (gap > 0.1) {
      risks.push({
        type: 'skill_decay',
        skill: skillType,
        severity: gap > 0.2 ? 'high' : 'medium',
        description: `${skillType} has decayed significantly`,
        descriptionRu: `${skillType} значительно просел`,
        mitigationSuggestion: `Practice ${skillType} to recover lost ground`,
        mitigationSuggestionRu: `Практикуй ${skillType} для восстановления`,
      });
    }
  }

  return risks;
}

/**
 * Generate recommendations
 */
function generateRecommendations(
  input: WeeklyReportInput,
  skillProgress: SkillProgressReport[],
  risks: RiskAssessment[]
): WeeklyRecommendation[] {
  const recommendations: WeeklyRecommendation[] = [];

  // Focus on at-risk skills
  const atRiskSkills = skillProgress.filter(s => s.status === 'at_risk');
  if (atRiskSkills.length > 0) {
    recommendations.push({
      priority: 1,
      type: 'focus_skill',
      title: `Focus on ${atRiskSkills[0].skill}`,
      titleRu: `Сфокусируйся на ${atRiskSkills[0].skill}`,
      description: `Your ${atRiskSkills[0].skill} needs extra attention`,
      descriptionRu: `Твой ${atRiskSkills[0].skill} требует внимания`,
      actionable: `Complete 3 focused lessons on ${atRiskSkills[0].skill}`,
      actionableRu: `Пройди 3 урока по ${atRiskSkills[0].skill}`,
      relatedSkills: [atRiskSkills[0].skill],
      estimatedImpact: 'high',
    });
  }

  // Burnout prevention
  const burnoutRisk = risks.find(r => r.type === 'burnout');
  if (burnoutRisk) {
    recommendations.push({
      priority: 1,
      type: 'take_break',
      title: 'Time to Rest',
      titleRu: 'Время отдохнуть',
      description: 'Your brain needs rest to consolidate learning',
      descriptionRu: 'Мозгу нужен отдых для закрепления',
      actionable: 'Take 1-2 days off or reduce to 10 minutes/day',
      actionableRu: 'Отдохни 1-2 дня или сократи до 10 мин/день',
      relatedSkills: [],
      estimatedImpact: 'high',
    });
  }

  // Review errors
  if (input.errorPatterns.length > 0) {
    recommendations.push({
      priority: 2,
      type: 'review',
      title: 'Review Past Mistakes',
      titleRu: 'Повтори ошибки',
      description: 'Learning from mistakes accelerates progress',
      descriptionRu: 'Работа над ошибками ускоряет прогресс',
      actionable: 'Spend 10 minutes reviewing error patterns',
      actionableRu: 'Потрать 10 минут на разбор ошибок',
      relatedSkills: input.errorPatterns.map(e => e.skill),
      estimatedImpact: 'medium',
    });
  }

  // Challenge if doing well
  const improvingSkills = skillProgress.filter(s => s.status === 'improving' && s.accuracy > 80);
  if (improvingSkills.length > 0 && !burnoutRisk) {
    recommendations.push({
      priority: 3,
      type: 'challenge',
      title: 'Ready for More',
      titleRu: 'Готов к большему',
      description: `You're doing great in ${improvingSkills[0].skill}!`,
      descriptionRu: `Ты отлично справляешься с ${improvingSkills[0].skill}!`,
      actionable: 'Try harder exercises to accelerate growth',
      actionableRu: 'Попробуй более сложные упражнения',
      relatedSkills: [improvingSkills[0].skill],
      estimatedImpact: 'medium',
    });
  }

  return recommendations.slice(0, 3);
}

/**
 * Generate next week plan
 */
function generateNextWeekPlan(
  input: WeeklyReportInput,
  skillProgress: SkillProgressReport[],
  recommendations: WeeklyRecommendation[]
): NextWeekPlan {
  // Determine focus
  const atRiskSkills = skillProgress.filter(s => s.status === 'at_risk');
  const decliningSkills = skillProgress.filter(s => s.status === 'declining');
  const weakSkills = skillProgress.filter(s => s.endValue < 0.4);

  const primaryFocus = atRiskSkills[0]?.skill ||
                       decliningSkills[0]?.skill ||
                       weakSkills[0]?.skill ||
                       'grammar';

  const secondaryFocus = skillProgress
    .filter(s => s.skill !== primaryFocus && s.status !== 'mastered')
    .slice(0, 2)
    .map(s => s.skill);

  // Adjust sessions based on burnout risk
  const burnoutRisk = recommendations.some(r => r.type === 'take_break');
  const suggestedSessions = burnoutRisk ? 4 : 6;
  const suggestedMinutesPerDay = burnoutRisk ? 15 : 20;

  // Generate topic recommendations
  const recommendedTopics: RecommendedTopic[] = [
    {
      topicId: `${primaryFocus}_review`,
      title: `${capitalize(primaryFocus)} Review`,
      titleRu: `Повторение ${primaryFocus}`,
      reason: 'Addresses your main focus area',
      reasonRu: 'Решает твою главную задачу',
      priority: 10,
      estimatedMinutes: 15,
    },
  ];

  // Generate milestone
  const targetAccuracy = Math.min(90, (input.tasksCompleted.filter(t => t.correct).length / input.tasksCompleted.length * 100) + 10);

  return {
    primaryFocus,
    secondaryFocus,
    suggestedSessions,
    suggestedMinutesPerDay,
    targetAccuracy,
    recommendedTopics,
    weeklyMilestone: `Improve ${primaryFocus} by 5%`,
    weeklyMilestoneRu: `Улучшить ${primaryFocus} на 5%`,
  };
}

/**
 * Generate motivational message
 */
function generateMotivation(input: WeeklyReportInput, summary: WeekSummary): MotivationalMessage {
  const { progressDirection, averageAccuracy, daysActive } = summary;

  if (progressDirection === 'improving' && averageAccuracy >= 80) {
    return {
      tone: 'celebratory',
      message: 'Outstanding week! Your hard work is paying off. Keep this momentum!',
      messageRu: 'Потрясающая неделя! Твой труд окупается. Так держать!',
      emoji: '🌟',
    };
  }

  if (progressDirection === 'declining') {
    return {
      tone: 'supportive',
      message: 'Everyone has tough weeks. What matters is showing up again. You\'ve got this!',
      messageRu: 'У всех бывают сложные недели. Главное — продолжать. Ты справишься!',
      emoji: '💪',
    };
  }

  if (daysActive >= 5) {
    return {
      tone: 'encouraging',
      message: 'Great consistency! Regular practice is the key to fluency.',
      messageRu: 'Отличная регулярность! Регулярная практика — ключ к свободному владению.',
      emoji: '🎯',
    };
  }

  return {
    tone: 'encouraging',
    message: 'Every step forward counts. Keep building that habit!',
    messageRu: 'Каждый шаг вперёд важен. Продолжай формировать привычку!',
    emoji: '🚶',
  };
}

// Helper functions

function calculateOverallSkillChange(
  start: SkillVectorV4,
  end: SkillVectorV4
): number {
  const skills = Object.keys(start) as SkillType[];
  let totalChange = 0;

  for (const skill of skills) {
    totalChange += end[skill].effectiveSkill - start[skill].effectiveSkill;
  }

  return totalChange / skills.length;
}

function skillVectorV4ToSimple(vector: SkillVectorV4): SkillVector {
  const simple: Partial<SkillVector> = {};
  for (const [skill, state] of Object.entries(vector)) {
    (simple as any)[skill] = state.effectiveSkill;
  }
  return simple as SkillVector;
}

function calculateCEFRProgress(vector: SkillVector, currentLevel: CEFRLevel): number {
  const values = Object.values(vector);
  const avg = values.reduce((a, b) => a + b, 0) / values.length;

  const levelThresholds: Record<CEFRLevel, [number, number]> = {
    'A1': [0, 0.17],
    'A2': [0.17, 0.33],
    'B1': [0.33, 0.50],
    'B2': [0.50, 0.67],
    'C1': [0.67, 0.83],
    'C2': [0.83, 1.0],
  };

  const [min, max] = levelThresholds[currentLevel];
  return Math.round(((avg - min) / (max - min)) * 100);
}

function generateHeadline(
  change: number,
  accuracy: number,
  daysActive: number
): { headline: string; headlineRu: string } {
  if (change >= 0.05) {
    return {
      headline: `Great week! +${Math.round(change * 100)}% overall`,
      headlineRu: `Отличная неделя! +${Math.round(change * 100)}% в целом`,
    };
  }

  if (accuracy >= 80) {
    return {
      headline: 'High accuracy week!',
      headlineRu: 'Неделя высокой точности!',
    };
  }

  if (daysActive >= 5) {
    return {
      headline: 'Consistent practice week',
      headlineRu: 'Неделя регулярной практики',
    };
  }

  return {
    headline: 'Steady progress',
    headlineRu: 'Стабильный прогресс',
  };
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * AI-1 Prompt for generating narrative sections
 */
export const WEEKLY_REPORT_AI_PROMPT = `
You are an AI learning analyst generating a weekly learning report for a language learner.

Given the following data:
- Skill progress: {{skillProgress}}
- Achievements: {{achievements}}
- Challenges: {{challenges}}
- Risks: {{risks}}

Generate:
1. A personalized motivational message (2-3 sentences)
2. Key insights about their learning patterns
3. Specific, actionable recommendations

Guidelines:
- Be encouraging but honest
- Use simple language appropriate for their CEFR level
- Focus on progress, not perfection
- Make recommendations specific and achievable
- If they're at risk of burnout, prioritize rest
- If they're plateauing, suggest changing approach

Output in JSON format matching WeeklyReportV1 schema.
`;
