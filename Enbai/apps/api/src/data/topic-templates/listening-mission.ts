import type { TopicTemplate } from '@enbai/types';

/**
 * LISTENING MISSION
 *
 * Развитие навыка аудирования через миссии.
 * Паттерн: Контекст → Первое прослушивание → Детали → Транскрипт → Практика
 */
export const listeningMissionTemplate: TopicTemplate = {
  id: 'listening-mission',
  schemaVersion: '1.0',

  name: 'Listening Mission',
  description: 'Миссия на понимание аудио: от общего смысла к деталям.',
  icon: '🎧',
  category: 'listening',

  applicableCEFR: ['A2', 'B1', 'B2', 'C1', 'C2'],
  ieltsFocus: 'listening',

  primarySkills: ['listening', 'comprehension'],
  secondarySkills: ['vocabulary'],

  whenToUse: {
    skillConditions: [
      { skill: 'listening', condition: 'below', value: 0.6 }
    ],
    recentErrorTopics: ['missed_details', 'speed_issues', 'accent_difficulty'],
    interestBoost: ['podcasts', 'movies', 'music', 'news'],
    sessionPosition: 'any',
  },
  priority: 7,
  cooldownDays: 2,

  estimatedTotalMinutes: { min: 15, max: 25 },

  pages: [
    // PAGE 1: Контекст и подготовка
    {
      pageId: 'pre-listening',
      type: 'explanation',
      title: 'Миссия: {topic}',
      goal: 'Подготовиться к прослушиванию, активировать знания',
      targetSkills: ['vocabulary', 'comprehension'],
      estimatedMinutes: 3,

      contentBlocks: [
        { type: 'text', placeholder: 'Контекст: что ты будешь слушать (подкаст, новости, диалог)', required: true, maxLength: 150 },
        { type: 'text', placeholder: 'Предварительные вопросы: о чём ты уже знаешь по этой теме?', required: true, maxLength: 150 },
        { type: 'table', placeholder: 'Ключевые слова, которые могут встретиться (5-7 слов)', required: true, maxLength: 300 },
      ],

      exercises: [
        { type: 'multiple_choice', count: 2, difficulty: 'adaptive', placeholder: 'Предугадай: что скорее всего будет в аудио?' },
      ],

      evaluation: {
        autoCheck: false,
        skillsMeasured: [],
        typicalErrors: [],
        passingScore: 1.0,
      },
      exitCriteria: {
        type: 'completion',
        value: 1,
        description: 'Подготовиться к прослушиванию',
      },
      hintsAvailable: false,
      maxHints: 0,
    },

    // PAGE 2: Первое прослушивание (gist)
    {
      pageId: 'first-listen',
      type: 'drill',
      title: 'Первое прослушивание: общий смысл',
      goal: 'Понять общий смысл аудио',
      targetSkills: ['listening', 'comprehension'],
      estimatedMinutes: 5,

      contentBlocks: [
        { type: 'text', placeholder: 'Инструкция: послушай и ответь на общие вопросы', required: true, maxLength: 100 },
        { type: 'audio', placeholder: 'Аудио 1-2 минуты на тему из интересов пользователя', required: true },
      ],

      exercises: [
        { type: 'multiple_choice', count: 3, difficulty: 'adaptive', placeholder: 'Вопросы на общее понимание: о чём, кто, где, когда' },
      ],

      evaluation: {
        autoCheck: true,
        skillsMeasured: ['listening', 'comprehension'],
        typicalErrors: ['missed_main_idea', 'confusion'],
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

    // PAGE 3: Второе прослушивание (детали)
    {
      pageId: 'second-listen',
      type: 'drill',
      title: 'Второе прослушивание: детали',
      goal: 'Услышать конкретные детали',
      targetSkills: ['listening'],
      estimatedMinutes: 5,

      contentBlocks: [
        { type: 'text', placeholder: 'Инструкция: послушай ещё раз и найди конкретную информацию', required: true, maxLength: 100 },
        { type: 'audio', placeholder: 'То же аудио', required: true },
      ],

      exercises: [
        { type: 'fill_gap', count: 4, difficulty: 'adaptive', placeholder: 'Заполни пропуски тем, что услышал (числа, имена, факты)' },
      ],

      evaluation: {
        autoCheck: true,
        skillsMeasured: ['listening'],
        typicalErrors: ['missed_number', 'spelling', 'similar_sound'],
        passingScore: 0.75,
      },
      exitCriteria: {
        type: 'score',
        value: 0.75,
        description: 'Правильно заполнить 3 из 4 пропусков',
      },
      hintsAvailable: true,
      maxHints: 1,
    },

    // PAGE 4: Транскрипт и анализ
    {
      pageId: 'transcript-study',
      type: 'example',
      title: 'Разбор транскрипта',
      goal: 'Понять что именно было сказано, выучить новые выражения',
      targetSkills: ['vocabulary', 'comprehension'],
      estimatedMinutes: 4,

      contentBlocks: [
        { type: 'text', placeholder: 'Полный транскрипт с выделенными полезными фразами', required: true, maxLength: 1000 },
        { type: 'tip', placeholder: 'Разговорные сокращения и связки (gonna, wanna, lemme)', required: true, maxLength: 200 },
        { type: 'audio', placeholder: 'Аудио с возможностью замедления', required: true },
      ],

      exercises: [
        { type: 'matching', count: 4, difficulty: 'adaptive', placeholder: 'Соедини фразу из аудио с её значением' },
      ],

      evaluation: {
        autoCheck: true,
        skillsMeasured: ['vocabulary'],
        typicalErrors: ['idiom_misunderstanding'],
        passingScore: 0.75,
      },
      exitCriteria: {
        type: 'score',
        value: 0.75,
        description: 'Правильно соединить 3 из 4',
      },
      hintsAvailable: true,
      maxHints: 1,
    },

    // PAGE 5: Финальный тест
    {
      pageId: 'listening-test',
      type: 'test',
      title: 'Проверка понимания',
      goal: 'Подтвердить понимание аудио',
      targetSkills: ['listening', 'comprehension', 'vocabulary'],
      estimatedMinutes: 5,

      contentBlocks: [
        { type: 'audio', placeholder: 'Новое короткое аудио (30-60 сек) на ту же тему', required: true },
      ],

      exercises: [
        { type: 'multiple_choice', count: 3, difficulty: 'fixed', placeholder: 'Вопросы на понимание нового аудио' },
        { type: 'fill_gap', count: 2, difficulty: 'fixed', placeholder: 'Заполни пропуски из нового аудио' },
      ],

      evaluation: {
        autoCheck: true,
        skillsMeasured: ['listening', 'comprehension'],
        typicalErrors: ['missed_details', 'confusion'],
        passingScore: 0.8,
      },
      exitCriteria: {
        type: 'score',
        value: 0.8,
        description: 'Минимум 4 из 5 правильно',
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
