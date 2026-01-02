/**
 * V4.1 Weekly Report Service
 *
 * Generates comprehensive weekly learning reports in WeeklyReportV1 format.
 * Uses existing progress data and optionally AI for enhanced summaries.
 */

import { prisma } from '../../db';
import type {
  WeeklyReportV1,
  SkillProgressV1,
  AchievementV4,
  ChallengeV1,
  RiskV1,
  RecommendationV1,
  NextWeekPlanV1,
  RecommendationTypeV4,
} from '@enbai/types';

/**
 * Generate V4 weekly report for a user
 */
export async function generateWeeklyReportV4(
  userId: string,
  weekStartStr?: string
): Promise<WeeklyReportV1> {
  // Calculate week boundaries
  const today = new Date();
  let weekStart: Date;

  if (weekStartStr) {
    weekStart = new Date(weekStartStr);
  } else {
    weekStart = new Date(today);
    weekStart.setDate(today.getDate() - today.getDay()); // Start of current week (Sunday)
  }
  weekStart.setHours(0, 0, 0, 0);

  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekStart.getDate() + 6);
  weekEnd.setHours(23, 59, 59, 999);

  // Fetch all data in parallel
  const [
    currentVector,
    previousVector,
    weekAttempts,
    profile,
    recentSnapshots,
  ] = await Promise.all([
    getCurrentSkillVector(userId),
    getSkillVectorBefore(userId, weekStart),
    getWeekAttempts(userId, weekStart, weekEnd),
    prisma.profile.findUnique({ where: { userId } }),
    prisma.progressSnapshot.findMany({
      where: {
        userId,
        periodDate: { gte: weekStart, lte: weekEnd },
      },
    }),
  ]);

  // Calculate skill progress
  const skillProgress = calculateSkillProgress(previousVector, currentVector);

  // Calculate summary stats
  const totalTasks = weekAttempts.length;
  const correctTasks = weekAttempts.filter(a => a.isCorrect).length;
  const totalMinutes = Math.round(
    weekAttempts.reduce((sum, a) => sum + (a.timeSpentSeconds || 0), 0) / 60
  );

  // Determine streak
  const currentStreak = await calculateStreak(userId);

  // Build achievements
  const achievements = buildWeekAchievements(
    totalTasks,
    correctTasks,
    skillProgress,
    currentStreak
  );

  // Build challenges
  const challenges = buildChallenges(weekAttempts, skillProgress);

  // Build risks
  const risks = buildRisks(skillProgress, totalMinutes, totalTasks);

  // Build recommendations
  const recommendations = buildRecommendations(skillProgress, challenges, risks);

  // Build next week plan
  const nextWeekPlan = buildNextWeekPlan(skillProgress, recommendations);

  // Build summary
  const summary = buildSummary(
    totalTasks,
    correctTasks,
    totalMinutes,
    skillProgress,
    currentStreak,
    profile?.cefrLevel || 'A2'
  );

  return {
    schemaVersion: '1.0',
    generatedAt: new Date().toISOString(),
    userId,
    weekStart: weekStart.toISOString().split('T')[0],
    weekEnd: weekEnd.toISOString().split('T')[0],

    summary,
    skillProgress,
    achievements,
    challenges,
    risks,
    recommendations,
    nextWeekPlan,
  };
}

// ============================================
// HELPERS
// ============================================

interface SkillVector {
  grammar: number;
  vocabulary: number;
  pronunciation: number;
  listening: number;
  speaking: number;
  slang: number;
  wordFormation: number;
  fluency: number;
  writing: number;
  comprehension: number;
}

async function getCurrentSkillVector(userId: string): Promise<SkillVector> {
  const vector = await prisma.skillVector.findFirst({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  });

  return mapVector(vector);
}

async function getSkillVectorBefore(userId: string, date: Date): Promise<SkillVector> {
  const vector = await prisma.skillVector.findFirst({
    where: {
      userId,
      createdAt: { lt: date },
    },
    orderBy: { createdAt: 'desc' },
  });

  return mapVector(vector);
}

function mapVector(vector: any): SkillVector {
  if (!vector) {
    return {
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
    };
  }

  return {
    grammar: Number(vector.grammar) || 0.5,
    vocabulary: Number(vector.vocabulary) || 0.5,
    pronunciation: Number(vector.pronunciation) || 0.5,
    listening: Number(vector.listening) || 0.5,
    speaking: Number(vector.speaking) || 0.5,
    slang: Number(vector.slang) || 0.5,
    wordFormation: Number(vector.wordFormation) || 0.5,
    fluency: Number(vector.fluency) || 0.5,
    writing: Number(vector.writing) || 0.5,
    comprehension: Number(vector.comprehension) || 0.5,
  };
}

async function getWeekAttempts(userId: string, weekStart: Date, weekEnd: Date) {
  return prisma.taskAttempt.findMany({
    where: {
      userId,
      submittedAt: { gte: weekStart, lte: weekEnd },
    },
    orderBy: { submittedAt: 'asc' },
  });
}

async function calculateStreak(userId: string): Promise<number> {
  let streak = 0;
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (let i = 0; i < 365; i++) {
    const checkDate = new Date(today);
    checkDate.setDate(today.getDate() - i);
    const nextDay = new Date(checkDate);
    nextDay.setDate(checkDate.getDate() + 1);

    const hasActivity = await prisma.taskAttempt.findFirst({
      where: {
        userId,
        submittedAt: { gte: checkDate, lt: nextDay },
      },
    });

    if (hasActivity) {
      streak++;
    } else if (i > 0) {
      break;
    }
  }

  return streak;
}

function calculateSkillProgress(
  previous: SkillVector,
  current: SkillVector
): SkillProgressV1[] {
  const skillNames: { key: keyof SkillVector; name: string; nameRu: string }[] = [
    { key: 'grammar', name: 'Grammar', nameRu: 'Грамматика' },
    { key: 'vocabulary', name: 'Vocabulary', nameRu: 'Словарный запас' },
    { key: 'pronunciation', name: 'Pronunciation', nameRu: 'Произношение' },
    { key: 'listening', name: 'Listening', nameRu: 'Аудирование' },
    { key: 'speaking', name: 'Speaking', nameRu: 'Разговорная речь' },
    { key: 'slang', name: 'Slang', nameRu: 'Сленг' },
    { key: 'wordFormation', name: 'Word Formation', nameRu: 'Словообразование' },
    { key: 'fluency', name: 'Fluency', nameRu: 'Беглость' },
    { key: 'writing', name: 'Writing', nameRu: 'Письмо' },
    { key: 'comprehension', name: 'Comprehension', nameRu: 'Понимание' },
  ];

  return skillNames.map(({ key, name, nameRu }) => {
    const start = Math.round(previous[key] * 100);
    const end = Math.round(current[key] * 100);
    const delta = end - start;

    let trend: 'up' | 'down' | 'stable' = 'stable';
    if (delta > 2) trend = 'up';
    else if (delta < -2) trend = 'down';

    return {
      skill: key as any,
      skillName: name,
      skillNameRu: nameRu,
      weekStart: start,
      weekEnd: end,
      delta,
      trend,
      practiceCount: 0, // Would need to track per-skill
      accuracyPercent: 0, // Would need to track per-skill
    };
  });
}

function buildWeekAchievements(
  totalTasks: number,
  correctTasks: number,
  skillProgress: SkillProgressV1[],
  streak: number
): AchievementV4[] {
  const achievements: AchievementV4[] = [];

  // Task milestones
  if (totalTasks >= 50) {
    achievements.push({
      id: 'week_50_tasks',
      name: 'Marathon Week',
      nameRu: 'Марафонская неделя',
      description: '50+ tasks in a week',
      descriptionRu: '50+ заданий за неделю',
      icon: '🏃',
      unlockedAt: new Date().toISOString(),
    });
  } else if (totalTasks >= 25) {
    achievements.push({
      id: 'week_25_tasks',
      name: 'Productive Week',
      nameRu: 'Продуктивная неделя',
      description: '25+ tasks in a week',
      descriptionRu: '25+ заданий за неделю',
      icon: '📚',
      unlockedAt: new Date().toISOString(),
    });
  }

  // Accuracy
  const accuracy = totalTasks > 0 ? (correctTasks / totalTasks) * 100 : 0;
  if (accuracy >= 90 && totalTasks >= 10) {
    achievements.push({
      id: 'week_90_accuracy',
      name: 'Perfect Precision',
      nameRu: 'Идеальная точность',
      description: '90%+ accuracy',
      descriptionRu: '90%+ точность',
      icon: '🎯',
      unlockedAt: new Date().toISOString(),
    });
  }

  // Skill improvement
  const improvedSkills = skillProgress.filter(s => s.delta >= 5);
  if (improvedSkills.length >= 3) {
    achievements.push({
      id: 'week_multi_skill',
      name: 'Well Rounded',
      nameRu: 'Всесторонний',
      description: 'Improved 3+ skills',
      descriptionRu: 'Улучшил 3+ навыка',
      icon: '⭐',
      unlockedAt: new Date().toISOString(),
    });
  }

  // Streak
  if (streak >= 7) {
    achievements.push({
      id: 'week_streak_7',
      name: 'Full Week',
      nameRu: 'Полная неделя',
      description: '7-day streak',
      descriptionRu: '7 дней подряд',
      icon: '🔥',
      unlockedAt: new Date().toISOString(),
    });
  }

  return achievements;
}

function buildChallenges(
  attempts: any[],
  skillProgress: SkillProgressV1[]
): ChallengeV1[] {
  const challenges: ChallengeV1[] = [];

  // Find declining skills
  const decliningSkills = skillProgress.filter(s => s.delta < -2);
  for (const skill of decliningSkills) {
    challenges.push({
      id: `decline_${skill.skill}`,
      skill: skill.skill,
      description: `${skill.skillNameRu} снизился на ${Math.abs(skill.delta)}%`,
      descriptionRu: `${skill.skillNameRu} снизился на ${Math.abs(skill.delta)}%`,
      frequency: 1,
      severity: Math.abs(skill.delta) > 5 ? 'high' : 'medium',
      suggestedFix: `Больше практики по теме ${skill.skillNameRu}`,
      suggestedFixRu: `Больше практики по теме ${skill.skillNameRu}`,
    });
  }

  // Find stuck skills
  const stuckSkills = skillProgress.filter(
    s => s.delta === 0 && s.weekEnd < 60
  );
  for (const skill of stuckSkills) {
    challenges.push({
      id: `stuck_${skill.skill}`,
      skill: skill.skill,
      description: `No progress in ${skill.skillName}`,
      descriptionRu: `Нет прогресса в ${skill.skillNameRu}`,
      frequency: 1,
      severity: 'medium',
      suggestedFix: `Try different approaches for ${skill.skillName}`,
      suggestedFixRu: `Попробуй другие подходы к ${skill.skillNameRu}`,
    });
  }

  return challenges.slice(0, 3); // Max 3 challenges
}

function buildRisks(
  skillProgress: SkillProgressV1[],
  totalMinutes: number,
  totalTasks: number
): RiskV1[] {
  const risks: RiskV1[] = [];

  // Low activity risk
  if (totalTasks < 10) {
    risks.push({
      id: 'low_activity',
      type: 'low_engagement',
      description: 'Low activity this week',
      descriptionRu: 'Низкая активность на этой неделе',
      severity: totalTasks < 5 ? 'high' : 'medium',
      recommendation: 'Try to practice at least 15 minutes daily',
      recommendationRu: 'Старайся заниматься хотя бы 15 минут в день',
    });
  }

  // Skill decay risk
  const lowSkills = skillProgress.filter(s => s.weekEnd < 40);
  for (const skill of lowSkills.slice(0, 2)) {
    risks.push({
      id: `decay_${skill.skill}`,
      type: 'skill_decay',
      description: `${skill.skillName} is at risk of decay`,
      descriptionRu: `${skill.skillNameRu} может снизиться без практики`,
      severity: skill.weekEnd < 30 ? 'high' : 'medium',
      recommendation: `Focus on ${skill.skillName} exercises`,
      recommendationRu: `Сфокусируйся на упражнениях по ${skill.skillNameRu}`,
    });
  }

  return risks;
}

function buildRecommendations(
  skillProgress: SkillProgressV1[],
  challenges: ChallengeV1[],
  risks: RiskV1[]
): RecommendationV1[] {
  const recommendations: RecommendationV1[] = [];

  // Recommend focusing on weakest skill
  const weakest = [...skillProgress].sort((a, b) => a.weekEnd - b.weekEnd)[0];
  if (weakest && weakest.weekEnd < 60) {
    recommendations.push({
      id: 'focus_weakest',
      type: 'focus_skill' as RecommendationTypeV4,
      priority: 'high',
      title: `Сфокусируйся на ${weakest.skillNameRu}`,
      titleRu: `Сфокусируйся на ${weakest.skillNameRu}`,
      description: `Your ${weakest.skillName} is at ${weakest.weekEnd}%. Let's improve it!`,
      descriptionRu: `Твой уровень ${weakest.skillNameRu} — ${weakest.weekEnd}%. Давай улучшим!`,
      estimatedMinutes: 20,
    });
  }

  // Recommend practice time if low
  if (risks.some(r => r.type === 'low_engagement')) {
    recommendations.push({
      id: 'increase_practice',
      type: 'increase_practice' as RecommendationTypeV4,
      priority: 'high',
      title: 'Увеличь время занятий',
      titleRu: 'Увеличь время занятий',
      description: 'Try to practice at least 15-20 minutes daily for best results',
      descriptionRu: 'Занимайся хотя бы 15-20 минут в день для лучших результатов',
      estimatedMinutes: 15,
    });
  }

  // Recommend review for declining skills
  const declining = skillProgress.filter(s => s.delta < -2);
  if (declining.length > 0) {
    recommendations.push({
      id: 'review_declining',
      type: 'review_topic' as RecommendationTypeV4,
      priority: 'medium',
      title: 'Повтори сложные темы',
      titleRu: 'Повтори сложные темы',
      description: `Review ${declining.map(s => s.skillName).join(', ')} to prevent skill loss`,
      descriptionRu: `Повтори ${declining.map(s => s.skillNameRu).join(', ')}, чтобы не потерять прогресс`,
      estimatedMinutes: 15,
    });
  }

  return recommendations.slice(0, 5); // Max 5 recommendations
}

function buildNextWeekPlan(
  skillProgress: SkillProgressV1[],
  recommendations: RecommendationV1[]
): NextWeekPlanV1 {
  // Find primary focus (weakest skill)
  const sorted = [...skillProgress].sort((a, b) => a.weekEnd - b.weekEnd);
  const primaryFocus = sorted[0]?.skill || 'grammar';
  const secondaryFocus = sorted[1]?.skill || 'vocabulary';

  // Set goals based on current levels
  const goals = [
    `Improve ${sorted[0]?.skillName || 'Grammar'} by 5%`,
    `Complete at least 5 lessons`,
    `Maintain 7-day streak`,
  ];

  const goalsRu = [
    `Улучши ${sorted[0]?.skillNameRu || 'Грамматику'} на 5%`,
    `Пройди минимум 5 уроков`,
    `Сохрани серию 7 дней`,
  ];

  return {
    primaryFocus: primaryFocus as any,
    secondaryFocus: secondaryFocus as any,
    suggestedDailyMinutes: 20,
    goals,
    goalsRu,
    focusTopics: recommendations.map(r => r.title).slice(0, 3),
    focusTopicsRu: recommendations.map(r => r.titleRu).slice(0, 3),
  };
}

function buildSummary(
  totalTasks: number,
  correctTasks: number,
  totalMinutes: number,
  skillProgress: SkillProgressV1[],
  streak: number,
  cefrLevel: string
): WeeklyReportV1['summary'] {
  const accuracy = totalTasks > 0 ? Math.round((correctTasks / totalTasks) * 100) : 0;
  const mostImproved = [...skillProgress].sort((a, b) => b.delta - a.delta)[0];
  const needsWork = [...skillProgress].sort((a, b) => a.weekEnd - b.weekEnd)[0];

  // Generate text summary
  let textEn = `This week you completed ${totalTasks} tasks`;
  let textRu = `На этой неделе ты выполнил ${totalTasks} заданий`;

  if (totalTasks > 0) {
    textEn += ` with ${accuracy}% accuracy.`;
    textRu += ` с точностью ${accuracy}%.`;
  } else {
    textEn = 'No activities this week. Let\'s get started!';
    textRu = 'Нет активности на этой неделе. Давай начнём!';
  }

  if (mostImproved && mostImproved.delta > 2) {
    textEn += ` Great progress in ${mostImproved.skillName}!`;
    textRu += ` Отличный прогресс в ${mostImproved.skillNameRu}!`;
  }

  return {
    totalTasks,
    correctTasks,
    accuracyPercent: accuracy,
    totalMinutes,
    streakDays: streak,
    daysActive: skillProgress.filter(s => s.practiceCount > 0).length || 0,
    cefrLevel,
    cefrProgress: Math.round(
      skillProgress.reduce((sum, s) => sum + s.weekEnd, 0) / skillProgress.length
    ),
    mostImprovedSkill: mostImproved?.skill || null,
    needsWorkSkill: needsWork?.skill || null,
    textSummary: textEn,
    textSummaryRu: textRu,
  };
}
