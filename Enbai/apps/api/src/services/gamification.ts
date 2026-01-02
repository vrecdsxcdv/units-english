/**
 * Gamification System
 *
 * Features:
 * - XP and Levels
 * - Achievements/Badges
 * - Daily/Weekly Missions
 * - Streak bonuses
 * - Story mode quests
 */

import type { SkillKey, CEFRLevel } from '@enbai/types';

// XP configuration
const XP_CONFIG = {
  TASK_BASE_XP: 10,
  CORRECT_MULTIPLIER: 2,
  STREAK_BONUS_PER_DAY: 0.1,  // 10% bonus per streak day
  MAX_STREAK_BONUS: 2.0,      // Max 200% bonus
  DIFFICULTY_MULTIPLIER: 1.5, // Extra XP for harder tasks
  FIRST_TRY_BONUS: 5,         // Bonus for getting it right first try
  PERFECT_SCORE_BONUS: 10,    // Bonus for score = 1.0
};

// Level thresholds (XP required)
const LEVEL_THRESHOLDS = [
  0,      // Level 1
  100,    // Level 2
  300,    // Level 3
  600,    // Level 4
  1000,   // Level 5
  1500,   // Level 6
  2200,   // Level 7
  3000,   // Level 8
  4000,   // Level 9
  5200,   // Level 10
  6600,   // Level 11
  8200,   // Level 12
  10000,  // Level 13
  12000,  // Level 14
  14500,  // Level 15
  17500,  // Level 16
  21000,  // Level 17
  25000,  // Level 18
  30000,  // Level 19
  36000,  // Level 20 (Master)
];

// Achievement definitions
export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'streak' | 'skill' | 'task' | 'special' | 'story';
  requirement: {
    type: string;
    value: number;
    skillKey?: SkillKey;
  };
  xpReward: number;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
}

export const ACHIEVEMENTS: Achievement[] = [
  // Streak achievements
  {
    id: 'streak-3',
    name: 'Первые шаги',
    description: '3 дня подряд',
    icon: 'flame',
    category: 'streak',
    requirement: { type: 'streak', value: 3 },
    xpReward: 50,
    rarity: 'common',
  },
  {
    id: 'streak-7',
    name: 'Неделя упорства',
    description: '7 дней подряд',
    icon: 'flame',
    category: 'streak',
    requirement: { type: 'streak', value: 7 },
    xpReward: 150,
    rarity: 'uncommon',
  },
  {
    id: 'streak-30',
    name: 'Месяц силы воли',
    description: '30 дней подряд',
    icon: 'flame',
    category: 'streak',
    requirement: { type: 'streak', value: 30 },
    xpReward: 500,
    rarity: 'rare',
  },
  {
    id: 'streak-100',
    name: 'Легенда',
    description: '100 дней подряд',
    icon: 'crown',
    category: 'streak',
    requirement: { type: 'streak', value: 100 },
    xpReward: 2000,
    rarity: 'legendary',
  },

  // Task achievements
  {
    id: 'tasks-10',
    name: 'Начинающий',
    description: 'Выполни 10 заданий',
    icon: 'check',
    category: 'task',
    requirement: { type: 'tasks_completed', value: 10 },
    xpReward: 30,
    rarity: 'common',
  },
  {
    id: 'tasks-100',
    name: 'Практик',
    description: 'Выполни 100 заданий',
    icon: 'check-double',
    category: 'task',
    requirement: { type: 'tasks_completed', value: 100 },
    xpReward: 200,
    rarity: 'uncommon',
  },
  {
    id: 'tasks-500',
    name: 'Мастер практики',
    description: 'Выполни 500 заданий',
    icon: 'star',
    category: 'task',
    requirement: { type: 'tasks_completed', value: 500 },
    xpReward: 1000,
    rarity: 'epic',
  },
  {
    id: 'perfect-10',
    name: 'Перфекционист',
    description: '10 идеальных ответов подряд',
    icon: 'target',
    category: 'task',
    requirement: { type: 'perfect_streak', value: 10 },
    xpReward: 300,
    rarity: 'rare',
  },

  // Skill achievements
  {
    id: 'grammar-50',
    name: 'Грамматик',
    description: 'Грамматика достигла 50%',
    icon: 'book',
    category: 'skill',
    requirement: { type: 'skill_level', value: 0.5, skillKey: 'grammar' },
    xpReward: 100,
    rarity: 'uncommon',
  },
  {
    id: 'vocabulary-50',
    name: 'Словарный запас',
    description: 'Словарь достиг 50%',
    icon: 'book-open',
    category: 'skill',
    requirement: { type: 'skill_level', value: 0.5, skillKey: 'vocabulary' },
    xpReward: 100,
    rarity: 'uncommon',
  },
  {
    id: 'all-skills-30',
    name: 'Всесторонний',
    description: 'Все навыки минимум 30%',
    icon: 'chart',
    category: 'skill',
    requirement: { type: 'all_skills_min', value: 0.3 },
    xpReward: 200,
    rarity: 'rare',
  },
  {
    id: 'cefr-b1',
    name: 'B1 Достигнут',
    description: 'Общий уровень B1',
    icon: 'medal',
    category: 'skill',
    requirement: { type: 'cefr_level', value: 3 }, // B1 = 3rd level
    xpReward: 500,
    rarity: 'epic',
  },
];

// Mission types
export interface Mission {
  id: string;
  type: 'daily' | 'weekly' | 'story';
  name: string;
  description: string;
  requirement: {
    type: 'complete_tasks' | 'correct_answers' | 'practice_skill' | 'time_spent' | 'streak';
    value: number;
    skillKey?: SkillKey;
  };
  progress: number;
  completed: boolean;
  xpReward: number;
  expiresAt?: Date;
}

// Daily mission templates
const DAILY_MISSION_TEMPLATES = [
  {
    type: 'complete_tasks',
    name: 'Ежедневная практика',
    description: 'Выполни {value} заданий',
    values: [3, 5, 7],
    xpReward: [30, 50, 80],
  },
  {
    type: 'correct_answers',
    name: 'Точность',
    description: 'Дай {value} правильных ответов',
    values: [3, 5, 10],
    xpReward: [40, 70, 120],
  },
  {
    type: 'practice_skill',
    name: 'Фокус на {skill}',
    description: 'Выполни {value} заданий на {skill}',
    values: [2, 3, 5],
    xpReward: [35, 55, 90],
  },
];

// Story mode quests
export interface StoryQuest {
  id: string;
  chapter: number;
  name: string;
  description: string;
  scenario: string;  // e.g., "airport", "restaurant", "job_interview"
  tasks: string[];   // Task slugs in order
  requiredLevel: CEFRLevel;
  xpReward: number;
  unlockRequirement?: {
    type: 'quest_completed' | 'skill_level' | 'cefr_level';
    value: string | number;
  };
}

export const STORY_QUESTS: StoryQuest[] = [
  {
    id: 'story-airport-1',
    chapter: 1,
    name: 'Приключение в аэропорту',
    description: 'Твой первый полёт за границу! Научись общаться в аэропорту.',
    scenario: 'airport',
    tasks: ['a1-greeting-001', 'a2-directions-airport', 'a2-boarding-pass'],
    requiredLevel: 'A1',
    xpReward: 200,
  },
  {
    id: 'story-restaurant-1',
    chapter: 2,
    name: 'Ужин в Лондоне',
    description: 'Закажи еду в английском ресторане.',
    scenario: 'restaurant',
    tasks: ['a2-menu-reading', 'a2-ordering-food', 'a2-paying-bill'],
    requiredLevel: 'A2',
    xpReward: 250,
    unlockRequirement: { type: 'quest_completed', value: 'story-airport-1' },
  },
  {
    id: 'story-interview-1',
    chapter: 5,
    name: 'Собеседование мечты',
    description: 'Пройди собеседование в международной компании.',
    scenario: 'job_interview',
    tasks: ['b1-self-introduction', 'b1-strengths-weaknesses', 'b1-interview-questions'],
    requiredLevel: 'B1',
    xpReward: 400,
    unlockRequirement: { type: 'cefr_level', value: 'B1' },
  },
];

/**
 * Calculate XP for task completion
 */
export function calculateTaskXP(params: {
  score: number;
  difficulty: number;
  streak: number;
  wasFirstTry: boolean;
  isPerfect: boolean;
}): number {
  let xp = XP_CONFIG.TASK_BASE_XP;

  // Score multiplier (correct = 2x)
  xp *= params.score >= 0.6 ? XP_CONFIG.CORRECT_MULTIPLIER : 0.5;

  // Difficulty bonus
  xp *= 1 + params.difficulty * XP_CONFIG.DIFFICULTY_MULTIPLIER;

  // Streak bonus (capped)
  const streakBonus = Math.min(
    1 + params.streak * XP_CONFIG.STREAK_BONUS_PER_DAY,
    XP_CONFIG.MAX_STREAK_BONUS
  );
  xp *= streakBonus;

  // First try bonus
  if (params.wasFirstTry && params.score >= 0.6) {
    xp += XP_CONFIG.FIRST_TRY_BONUS;
  }

  // Perfect score bonus
  if (params.isPerfect) {
    xp += XP_CONFIG.PERFECT_SCORE_BONUS;
  }

  return Math.round(xp);
}

/**
 * Get level from XP
 */
export function getLevelFromXP(xp: number): {
  level: number;
  currentXP: number;
  nextLevelXP: number;
  progress: number;
} {
  let level = 1;

  for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
    if (xp >= LEVEL_THRESHOLDS[i]) {
      level = i + 1;
      break;
    }
  }

  const currentThreshold = LEVEL_THRESHOLDS[level - 1] || 0;
  const nextThreshold = LEVEL_THRESHOLDS[level] || LEVEL_THRESHOLDS[level - 1] * 1.5;
  const xpInLevel = xp - currentThreshold;
  const xpNeeded = nextThreshold - currentThreshold;

  return {
    level,
    currentXP: xpInLevel,
    nextLevelXP: xpNeeded,
    progress: xpInLevel / xpNeeded,
  };
}

/**
 * Check for new achievements
 */
export function checkAchievements(params: {
  streak: number;
  tasksCompleted: number;
  perfectStreak: number;
  skillVector: Record<SkillKey, number>;
  cefrLevel: number; // 1-6 for A1-C2
  earnedAchievements: string[];
}): Achievement[] {
  const newAchievements: Achievement[] = [];

  for (const achievement of ACHIEVEMENTS) {
    // Skip if already earned
    if (params.earnedAchievements.includes(achievement.id)) continue;

    const { type, value, skillKey } = achievement.requirement;
    let earned = false;

    switch (type) {
      case 'streak':
        earned = params.streak >= value;
        break;
      case 'tasks_completed':
        earned = params.tasksCompleted >= value;
        break;
      case 'perfect_streak':
        earned = params.perfectStreak >= value;
        break;
      case 'skill_level':
        if (skillKey && params.skillVector[skillKey]) {
          earned = params.skillVector[skillKey] >= value;
        }
        break;
      case 'all_skills_min':
        earned = Object.values(params.skillVector).every(v => v >= value);
        break;
      case 'cefr_level':
        earned = params.cefrLevel >= value;
        break;
    }

    if (earned) {
      newAchievements.push(achievement);
    }
  }

  return newAchievements;
}

/**
 * Generate daily missions
 */
export function generateDailyMissions(
  weakSkills: SkillKey[],
  userLevel: number
): Mission[] {
  const missions: Mission[] = [];
  const today = new Date();
  today.setHours(23, 59, 59, 999);

  // Always include basic task completion mission
  const taskMission = DAILY_MISSION_TEMPLATES[0];
  const difficultyIndex = Math.min(Math.floor(userLevel / 7), 2);
  missions.push({
    id: `daily-tasks-${Date.now()}`,
    type: 'daily',
    name: taskMission.name,
    description: taskMission.description.replace('{value}', String(taskMission.values[difficultyIndex])),
    requirement: {
      type: 'complete_tasks',
      value: taskMission.values[difficultyIndex],
    },
    progress: 0,
    completed: false,
    xpReward: taskMission.xpReward[difficultyIndex],
    expiresAt: today,
  });

  // Add skill-focused mission if there are weak skills
  if (weakSkills.length > 0) {
    const skillMission = DAILY_MISSION_TEMPLATES[2];
    const targetSkill = weakSkills[0];
    const skillName = getSkillNameRu(targetSkill);
    missions.push({
      id: `daily-skill-${Date.now()}`,
      type: 'daily',
      name: skillMission.name.replace('{skill}', skillName),
      description: skillMission.description
        .replace('{value}', String(skillMission.values[difficultyIndex]))
        .replace('{skill}', skillName),
      requirement: {
        type: 'practice_skill',
        value: skillMission.values[difficultyIndex],
        skillKey: targetSkill,
      },
      progress: 0,
      completed: false,
      xpReward: skillMission.xpReward[difficultyIndex],
      expiresAt: today,
    });
  }

  return missions;
}

/**
 * Get Russian skill name
 */
function getSkillNameRu(skill: SkillKey): string {
  const names: Record<SkillKey, string> = {
    grammar: 'грамматику',
    vocabulary: 'словарь',
    pronunciation: 'произношение',
    listening: 'аудирование',
    speaking: 'разговорную речь',
    slang: 'сленг',
    word_formation: 'словообразование',
    fluency: 'беглость',
    writing: 'письмо',
    comprehension: 'понимание',
  };
  return names[skill] || skill;
}

/**
 * Update mission progress
 */
export function updateMissionProgress(
  missions: Mission[],
  event: {
    type: 'task_completed' | 'correct_answer' | 'skill_practiced';
    skillKey?: SkillKey;
  }
): Mission[] {
  return missions.map(mission => {
    if (mission.completed) return mission;

    let shouldIncrement = false;

    switch (mission.requirement.type) {
      case 'complete_tasks':
        shouldIncrement = event.type === 'task_completed';
        break;
      case 'correct_answers':
        shouldIncrement = event.type === 'correct_answer';
        break;
      case 'practice_skill':
        shouldIncrement =
          event.type === 'skill_practiced' &&
          event.skillKey === mission.requirement.skillKey;
        break;
    }

    if (shouldIncrement) {
      const newProgress = mission.progress + 1;
      return {
        ...mission,
        progress: newProgress,
        completed: newProgress >= mission.requirement.value,
      };
    }

    return mission;
  });
}
