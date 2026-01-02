import type { TopicTemplate } from '@enbai/types';

/**
 * SPEAKING ROLEPLAY
 *
 * Практика разговорной речи через ролевые ситуации.
 * Паттерн: Ситуация → Полезные фразы → Диалог-образец → Практика → Свободная речь
 */
export const speakingRoleplayTemplate: TopicTemplate = {
  id: 'speaking-roleplay',
  schemaVersion: '1.0',

  name: 'Speaking Roleplay',
  description: 'Практика разговорной речи в реалистичных жизненных ситуациях.',
  icon: '🎭',
  category: 'speaking',

  applicableCEFR: ['A2', 'B1', 'B2', 'C1'],
  ieltsFocus: 'speaking',

  primarySkills: ['speaking', 'fluency'],
  secondarySkills: ['vocabulary', 'listening'],

  whenToUse: {
    skillConditions: [
      { skill: 'speaking', condition: 'below', value: 0.6 },
      { skill: 'fluency', condition: 'below', value: 0.5 }
    ],
    recentErrorTopics: ['hesitation', 'wrong_register', 'incomplete_response'],
    interestBoost: ['travel', 'business', 'socializing'],
    sessionPosition: 'middle',
  },
  priority: 8,
  cooldownDays: 2,

  estimatedTotalMinutes: { min: 18, max: 30 },

  pages: [
    // PAGE 1: Ситуация и контекст
    {
      pageId: 'situation-intro',
      type: 'explanation',
      title: '{situation}: Введение',
      goal: 'Понять ситуацию и что от тебя ожидается',
      targetSkills: ['comprehension'],
      estimatedMinutes: 3,

      contentBlocks: [
        { type: 'text', placeholder: 'Описание ситуации: где ты, с кем говоришь, что нужно сделать', required: true, maxLength: 250 },
        { type: 'image_prompt', placeholder: 'Описание изображения ситуации', required: false },
        { type: 'tip', placeholder: 'Культурный контекст: что принято/не принято в этой ситуации', required: true, maxLength: 150 },
      ],

      exercises: [],
      evaluation: {
        autoCheck: false,
        skillsMeasured: [],
        typicalErrors: [],
        passingScore: 1.0,
      },
      exitCriteria: {
        type: 'completion',
        value: 1,
        description: 'Прочитать описание ситуации',
      },
      hintsAvailable: false,
      maxHints: 0,
    },

    // PAGE 2: Полезные фразы
    {
      pageId: 'useful-phrases',
      type: 'explanation',
      title: 'Полезные фразы',
      goal: 'Выучить ключевые фразы для этой ситуации',
      targetSkills: ['vocabulary', 'speaking'],
      estimatedMinutes: 4,

      contentBlocks: [
        { type: 'table', placeholder: 'Таблица фраз: Фраза | Перевод | Когда использовать', required: true, maxLength: 800 },
        { type: 'audio', placeholder: 'Аудио произношение фраз', required: true },
        { type: 'tip', placeholder: 'Интонация: как звучать естественно', required: true, maxLength: 150 },
      ],

      exercises: [
        { type: 'listen_and_repeat', count: 5, difficulty: 'adaptive', placeholder: 'Послушай и повтори фразу с правильной интонацией' },
      ],

      evaluation: {
        autoCheck: false,
        skillsMeasured: ['pronunciation'],
        typicalErrors: ['wrong_intonation', 'word_stress'],
        passingScore: 1.0,
      },
      exitCriteria: {
        type: 'completion',
        value: 1,
        description: 'Прослушать и повторить все фразы',
      },
      hintsAvailable: false,
      maxHints: 0,
    },

    // PAGE 3: Диалог-образец
    {
      pageId: 'sample-dialogue',
      type: 'example',
      title: 'Пример диалога',
      goal: 'Увидеть как фразы используются в реальном диалоге',
      targetSkills: ['listening', 'comprehension'],
      estimatedMinutes: 4,

      contentBlocks: [
        { type: 'text', placeholder: 'Полный диалог (8-12 реплик) с выделенными ключевыми фразами', required: true, maxLength: 800 },
        { type: 'audio', placeholder: 'Аудио диалога', required: true },
        { type: 'comparison', placeholder: 'Формальный vs Неформальный вариант одной реплики', required: true, maxLength: 200 },
      ],

      exercises: [
        { type: 'multiple_choice', count: 3, difficulty: 'adaptive', placeholder: 'Вопросы на понимание диалога' },
      ],

      evaluation: {
        autoCheck: true,
        skillsMeasured: ['listening', 'comprehension'],
        typicalErrors: ['detail_missed', 'context_misunderstanding'],
        passingScore: 0.66,
      },
      exitCriteria: {
        type: 'score',
        value: 0.66,
        description: 'Ответить на 2 из 3 вопросов',
      },
      hintsAvailable: true,
      maxHints: 1,
    },

    // PAGE 4: Заполни диалог
    {
      pageId: 'complete-dialogue',
      type: 'drill',
      title: 'Заверши диалог',
      goal: 'Научиться выбирать подходящую реплику',
      targetSkills: ['speaking', 'comprehension'],
      estimatedMinutes: 4,

      contentBlocks: [
        { type: 'text', placeholder: 'Инструкция: выбери подходящую реплику', required: true, maxLength: 100 },
      ],

      exercises: [
        { type: 'mini_dialogue', count: 4, difficulty: 'adaptive', placeholder: 'Диалог с пропущенной репликой, выбор из 3 вариантов' },
      ],

      evaluation: {
        autoCheck: true,
        skillsMeasured: ['speaking', 'comprehension'],
        typicalErrors: ['wrong_register', 'inappropriate_response'],
        passingScore: 0.75,
      },
      exitCriteria: {
        type: 'score',
        value: 0.75,
        description: 'Минимум 3 из 4 правильно',
      },
      hintsAvailable: true,
      maxHints: 2,
    },

    // PAGE 5: Ролевая игра
    {
      pageId: 'roleplay-practice',
      type: 'use',
      title: 'Твоя очередь говорить',
      goal: 'Практиковать речь в роли одного из участников',
      targetSkills: ['speaking', 'fluency'],
      estimatedMinutes: 6,

      contentBlocks: [
        { type: 'text', placeholder: 'Сценарий: ты играешь роль X, AI играет роль Y', required: true, maxLength: 200 },
        { type: 'tip', placeholder: 'Подсказка: используй изученные фразы', required: true, maxLength: 100 },
      ],

      exercises: [
        { type: 'speaking_prompt', count: 4, difficulty: 'adaptive', placeholder: 'AI говорит реплику, пользователь отвечает голосом или текстом' },
      ],

      evaluation: {
        autoCheck: true,
        skillsMeasured: ['speaking', 'fluency', 'vocabulary'],
        typicalErrors: ['incomplete_response', 'off_topic', 'grammar_error'],
        passingScore: 0.7,
      },
      exitCriteria: {
        type: 'score',
        value: 0.7,
        description: 'Дать адекватные ответы на 3 из 4 реплик',
      },
      hintsAvailable: true,
      maxHints: 2,
    },

    // PAGE 6: Свободная практика
    {
      pageId: 'free-practice',
      type: 'test',
      title: 'Свободный диалог',
      goal: 'Провести полноценный диалог без подсказок',
      targetSkills: ['speaking', 'fluency', 'vocabulary'],
      estimatedMinutes: 7,

      contentBlocks: [
        { type: 'text', placeholder: 'Новая вариация ситуации: немного другой контекст', required: true, maxLength: 200 },
      ],

      exercises: [
        { type: 'speaking_prompt', count: 5, difficulty: 'fixed', placeholder: 'Полноценный диалог без подсказок, AI оценивает ответы' },
      ],

      evaluation: {
        autoCheck: true,
        skillsMeasured: ['speaking', 'fluency', 'vocabulary', 'grammar'],
        typicalErrors: ['hesitation', 'repetition', 'limited_vocabulary', 'grammar_error'],
        passingScore: 0.7,
      },
      exitCriteria: {
        type: 'score',
        value: 0.7,
        description: 'Успешно завершить диалог',
      },
      hintsAvailable: false,
      maxHints: 0,
    },
  ],

  contentGuidelines: {
    tone: 'casual',
    useUserInterests: true,
    exampleStyle: 'realistic',
    difficultyAdaptation: 'flexible',
  },

  version: '1.0.0',
  createdAt: '2025-01-01T00:00:00Z',
  updatedAt: '2025-01-01T00:00:00Z',
};
