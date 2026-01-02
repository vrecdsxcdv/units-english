import type { TopicTemplate } from '@enbai/types';

/**
 * PRONUNCIATION LAB
 *
 * Работа над произношением: звуки, интонация, связная речь.
 * Паттерн: Звук → Минимальные пары → Слова → Фразы → Связная речь
 */
export const pronunciationLabTemplate: TopicTemplate = {
  id: 'pronunciation-lab',
  schemaVersion: '1.0',

  name: 'Pronunciation Lab',
  description: 'Лаборатория произношения: от отдельных звуков до естественной речи.',
  icon: '🗣️',
  category: 'pronunciation',

  applicableCEFR: ['A1', 'A2', 'B1', 'B2', 'C1'],
  ieltsFocus: 'speaking',

  primarySkills: ['pronunciation'],
  secondarySkills: ['speaking', 'listening'],

  whenToUse: {
    skillConditions: [
      { skill: 'pronunciation', condition: 'below', value: 0.5 }
    ],
    recentErrorTopics: ['th_sound', 'vowels', 'word_stress', 'intonation'],
    interestBoost: [],
    sessionPosition: 'any',
  },
  priority: 6,
  cooldownDays: 3,

  estimatedTotalMinutes: { min: 12, max: 20 },

  pages: [
    // PAGE 1: Целевой звук
    {
      pageId: 'target-sound',
      type: 'explanation',
      title: 'Звук /{sound}/',
      goal: 'Понять как произносится целевой звук',
      targetSkills: ['pronunciation'],
      estimatedMinutes: 3,

      contentBlocks: [
        { type: 'text', placeholder: 'Описание звука: позиция языка, губ, тип звука', required: true, maxLength: 200 },
        { type: 'audio', placeholder: 'Изолированный звук (несколько повторений)', required: true },
        { type: 'comparison', placeholder: 'Сравнение с похожим русским звуком + почему это не то же самое', required: true, maxLength: 200 },
        { type: 'tip', placeholder: 'Лайфхак для произношения', required: true, maxLength: 150 },
      ],

      exercises: [
        { type: 'listen_and_repeat', count: 3, difficulty: 'adaptive', placeholder: 'Повтори звук' },
      ],

      evaluation: {
        autoCheck: false,
        skillsMeasured: ['pronunciation'],
        typicalErrors: [],
        passingScore: 1.0,
      },
      exitCriteria: {
        type: 'completion',
        value: 1,
        description: 'Прослушать и повторить звук',
      },
      hintsAvailable: false,
      maxHints: 0,
    },

    // PAGE 2: Минимальные пары
    {
      pageId: 'minimal-pairs',
      type: 'drill',
      title: 'Слышишь разницу?',
      goal: 'Научиться различать похожие звуки на слух',
      targetSkills: ['listening', 'pronunciation'],
      estimatedMinutes: 4,

      contentBlocks: [
        { type: 'text', placeholder: 'Инструкция: послушай и выбери какое слово произнесено', required: true, maxLength: 100 },
        { type: 'example', placeholder: 'Пример минимальной пары: ship/sheep, bad/bed', required: true, maxLength: 150 },
      ],

      exercises: [
        { type: 'multiple_choice', count: 6, difficulty: 'adaptive', placeholder: 'Какое слово ты слышишь? (аудио + 2 варианта)' },
      ],

      evaluation: {
        autoCheck: true,
        skillsMeasured: ['listening'],
        typicalErrors: ['confusion_similar_sounds'],
        passingScore: 0.83,
      },
      exitCriteria: {
        type: 'score',
        value: 0.83,
        description: 'Минимум 5 из 6 правильно',
      },
      hintsAvailable: true,
      maxHints: 2,
    },

    // PAGE 3: Слова
    {
      pageId: 'words-practice',
      type: 'drill',
      title: 'Произношение слов',
      goal: 'Правильно произносить слова с целевым звуком',
      targetSkills: ['pronunciation'],
      estimatedMinutes: 4,

      contentBlocks: [
        { type: 'table', placeholder: 'Таблица: Слово | Транскрипция | Аудио', required: true, maxLength: 500 },
      ],

      exercises: [
        { type: 'listen_and_repeat', count: 6, difficulty: 'adaptive', placeholder: 'Послушай и повтори слово' },
        { type: 'record_and_compare', count: 2, difficulty: 'adaptive', placeholder: 'Запиши себя и сравни с образцом' },
      ],

      evaluation: {
        autoCheck: false,
        skillsMeasured: ['pronunciation'],
        typicalErrors: ['wrong_sound', 'wrong_stress'],
        passingScore: 1.0,
      },
      exitCriteria: {
        type: 'completion',
        value: 1,
        description: 'Произнести все слова',
      },
      hintsAvailable: false,
      maxHints: 0,
    },

    // PAGE 4: Фразы и ударение
    {
      pageId: 'phrases-stress',
      type: 'use',
      title: 'Фразы и ударение',
      goal: 'Произносить фразы с правильным ударением и ритмом',
      targetSkills: ['pronunciation', 'fluency'],
      estimatedMinutes: 4,

      contentBlocks: [
        { type: 'text', placeholder: 'Объяснение: ударение в предложении, слабые формы', required: true, maxLength: 200 },
        { type: 'example', placeholder: 'Примеры фраз с разметкой ударения', required: true, maxLength: 300 },
        { type: 'audio', placeholder: 'Аудио фраз в естественном темпе', required: true },
      ],

      exercises: [
        { type: 'listen_and_repeat', count: 4, difficulty: 'adaptive', placeholder: 'Повтори фразу с правильной интонацией' },
      ],

      evaluation: {
        autoCheck: false,
        skillsMeasured: ['pronunciation', 'fluency'],
        typicalErrors: ['flat_intonation', 'wrong_stress'],
        passingScore: 1.0,
      },
      exitCriteria: {
        type: 'completion',
        value: 1,
        description: 'Произнести все фразы',
      },
      hintsAvailable: false,
      maxHints: 0,
    },

    // PAGE 5: Связная речь
    {
      pageId: 'connected-speech',
      type: 'test',
      title: 'Связная речь',
      goal: 'Применить навыки в связной речи',
      targetSkills: ['pronunciation', 'fluency', 'speaking'],
      estimatedMinutes: 5,

      contentBlocks: [
        { type: 'text', placeholder: 'Короткий текст для чтения вслух (50-80 слов)', required: true, maxLength: 400 },
        { type: 'audio', placeholder: 'Образцовое чтение текста', required: true },
      ],

      exercises: [
        { type: 'speaking_prompt', count: 1, difficulty: 'fixed', placeholder: 'Прочитай текст вслух, стараясь звучать естественно' },
        { type: 'record_and_compare', count: 1, difficulty: 'fixed', placeholder: 'Запиши себя и сравни с образцом' },
      ],

      evaluation: {
        autoCheck: false,
        skillsMeasured: ['pronunciation', 'fluency'],
        typicalErrors: ['unnatural_rhythm', 'target_sound_error'],
        passingScore: 0.7,
      },
      exitCriteria: {
        type: 'completion',
        value: 1,
        description: 'Прочитать текст вслух',
      },
      hintsAvailable: false,
      maxHints: 0,
    },
  ],

  contentGuidelines: {
    tone: 'casual',
    useUserInterests: false,
    exampleStyle: 'realistic',
    difficultyAdaptation: 'strict',
  },

  version: '1.0.0',
  createdAt: '2025-01-01T00:00:00Z',
  updatedAt: '2025-01-01T00:00:00Z',
};
