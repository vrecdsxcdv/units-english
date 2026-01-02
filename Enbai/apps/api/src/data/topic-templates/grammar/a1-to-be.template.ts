/**
 * Topic Template: A1 - To Be (am/is/are)
 *
 * Example template for beginners learning the verb "to be".
 */

import type { SkillType, CEFRLevel } from '@enbai/types';

// Local interface until types package exports are updated
interface ModalPageTemplate {
  pageType: 'hook' | 'explain' | 'check' | 'practice' | 'mistakes' | 'summary';
  titleTemplate: string;
  titleTemplateRu: string;
  contentBlockTemplates: Array<{
    type: string;
    placeholder: string;
    maxLength?: number;
    required: boolean;
  }>;
  interactionTemplates: Array<{
    kind: string;
    promptPlaceholder: string;
    difficultyRange: [number, number];
    count: number;
  }>;
  repeatIfScore?: number;
}

interface TopicTemplateV2 {
  id: string;
  schemaVersion: string;
  name: string;
  nameRu: string;
  description: string;
  descriptionRu: string;
  category: string;
  tags: string[];
  primarySkill: SkillType;
  secondarySkills: SkillType[];
  applicableLevels: CEFRLevel[];
  difficultyRange: [number, number];
  ieltsComponents?: string[];
  ieltsBandRange?: [number, number];
  placeholders: {
    example_1: string;
    example_2: string;
    example_3?: string;
    hook_fact: string;
    hook_situation: string;
    hook_challenge: string;
    common_errors: string[];
    interest_hooks: string[];
  };
  defaultPages: ModalPageTemplate[];
  prerequisites: string[];
  selectionCriteria: {
    weaknessThreshold: number;
    errorTopics: string[];
    interestBoost: string[];
    cooldownDays: number;
  };
  estimatedMinutes: number;
  version: string;
  createdAt: string;
  updatedAt: string;
}

export const A1_TO_BE_TEMPLATE: TopicTemplateV2 = {
  id: 'grammar_a1_to_be_v1',
  schemaVersion: '2.0',

  // Identity
  name: 'To Be: am, is, are',
  nameRu: 'Глагол to be: am, is, are',
  description: 'Learn the most basic and important verb in English',
  descriptionRu: 'Изучи самый важный глагол в английском языке',

  // Category and tags
  category: 'grammar',
  tags: ['to-be', 'am-is-are', 'present-simple', 'beginner', 'essential'],

  // Skill mapping
  primarySkill: 'grammar',
  secondarySkills: ['vocabulary', 'speaking'],

  // Level constraints
  applicableLevels: ['A1'],
  difficultyRange: [1, 3],

  // IELTS mapping (not primary for A1)
  ieltsComponents: ['speaking'],
  ieltsBandRange: [3.0, 4.5],

  // Content placeholders
  placeholders: {
    example_1: 'Простой пример с I am',
    example_2: 'Примеры с he/she/it is',
    example_3: 'Примеры с we/you/they are',

    hook_fact: 'А ты знал, что to be — самый используемый глагол в английском? Без него не обойтись!',
    hook_situation: 'Представь, ты знакомишься с новыми людьми. Как сказать "Я — студент"?',
    hook_challenge: 'Попробуй угадать: какой глагол используется в КАЖДОМ втором предложении?',

    common_errors: [
      'I is happy (неправильно)',
      'She am a doctor (неправильно)',
      'They is students (неправильно)',
    ],

    interest_hooks: [
      'Расскажи о себе: I am...',
      'Опиши своего питомца: My cat is...',
      'Говори о друзьях: My friends are...',
    ],
  },

  // Page structure
  defaultPages: [
    {
      pageType: 'hook',
      titleTemplate: 'Did you know?',
      titleTemplateRu: 'А ты знал?',
      contentBlockTemplates: [
        {
          type: 'text',
          placeholder: 'hook_fact',
          maxLength: 200,
          required: true,
        },
      ],
      interactionTemplates: [],
    },
    {
      pageType: 'explain',
      titleTemplate: 'The Rule',
      titleTemplateRu: 'Правило',
      contentBlockTemplates: [
        {
          type: 'rule',
          placeholder: 'main_rule',
          maxLength: 300,
          required: true,
        },
        {
          type: 'table',
          placeholder: 'conjugation_table',
          required: true,
        },
        {
          type: 'example',
          placeholder: 'example_1',
          maxLength: 100,
          required: true,
        },
        {
          type: 'example',
          placeholder: 'example_2',
          maxLength: 100,
          required: true,
        },
      ],
      interactionTemplates: [],
    },
    {
      pageType: 'mistakes',
      titleTemplate: 'Common Mistakes',
      titleTemplateRu: 'Частые ошибки',
      contentBlockTemplates: [
        {
          type: 'warning',
          placeholder: 'common_errors',
          required: true,
        },
        {
          type: 'comparison',
          placeholder: 'correct_vs_incorrect',
          required: true,
        },
      ],
      interactionTemplates: [],
    },
    {
      pageType: 'check',
      titleTemplate: 'Quick Check',
      titleTemplateRu: 'Проверка',
      contentBlockTemplates: [],
      interactionTemplates: [
        {
          kind: 'mcq',
          promptPlaceholder: 'understanding_check_mcq',
          difficultyRange: [1, 2],
          count: 2,
        },
      ],
      repeatIfScore: 0.5,
    },
    {
      pageType: 'practice',
      titleTemplate: 'Practice',
      titleTemplateRu: 'Практика',
      contentBlockTemplates: [
        {
          type: 'tip',
          placeholder: 'practice_encouragement',
          maxLength: 100,
          required: false,
        },
      ],
      interactionTemplates: [
        {
          kind: 'fill_blank',
          promptPlaceholder: 'fill_the_blank_exercise',
          difficultyRange: [2, 3],
          count: 3,
        },
      ],
    },
    {
      pageType: 'summary',
      titleTemplate: 'Great job!',
      titleTemplateRu: 'Отлично!',
      contentBlockTemplates: [
        {
          type: 'text',
          placeholder: 'summary_text',
          maxLength: 150,
          required: true,
        },
        {
          type: 'tip',
          placeholder: 'next_steps',
          maxLength: 100,
          required: true,
        },
      ],
      interactionTemplates: [],
    },
  ],

  // Prerequisites
  prerequisites: [],  // This is a beginner topic

  // Selection criteria
  selectionCriteria: {
    weaknessThreshold: 0.4,
    errorTopics: ['am', 'is', 'are', 'to be', 'I is', 'she am'],
    interestBoost: ['self-introduction', 'meeting-people', 'basic-english'],
    cooldownDays: 5,
  },

  // Timing
  estimatedMinutes: 10,

  // Versioning
  version: '1.0.0',
  createdAt: '2024-12-30T00:00:00Z',
  updatedAt: '2024-12-30T00:00:00Z',
};

// ============================================
// EXAMPLE GENERATED MODAL
// ============================================

/**
 * Example of what the AI generates from this template
 * This is a complete TopicModal ready for frontend rendering
 */
export const A1_TO_BE_EXAMPLE_MODAL = {
  type: 'topic_modal' as const,
  topicId: 'grammar_a1_to_be_v1_1704067200000',
  templateId: 'grammar_a1_to_be_v1',
  schemaVersion: '2.0',

  title: 'To Be: am, is, are',
  titleRu: 'Глагол to be: am, is, are',
  description: 'Самый важный глагол в английском — давай разберёмся!',

  cefrLevel: 'A1' as const,
  targetSkills: ['grammar', 'vocabulary'] as const,
  estimatedMinutes: 10,
  difficulty: 0.2,

  generatedAt: '2024-12-30T12:00:00Z',
  generatedFor: 'user_123',
  personalizedFor: {
    interests: ['музыка', 'путешествия'],
    weakSkills: ['grammar'] as const,
    recentErrors: ['I is happy'],
  },

  currentPageIndex: 0,
  completedPages: [] as number[],

  pages: [
    // Page 0: Hook
    {
      pageIndex: 0,
      pageId: 'hook',
      type: 'hook' as const,
      title: 'Did you know?',
      titleRu: 'А ты знал?',
      contentBlocks: [
        {
          type: 'text' as const,
          content: 'А ты знал, что глагол "to be" используется в каждом втором английском предложении?',
          contentRu: 'Это как фундамент дома — без него никуда!',
        },
        {
          type: 'text' as const,
          content: 'Представь: ты знакомишься с кем-то в путешествии. Как сказать "Я из России"? Или "Она — моя подруга"? Везде нужен to be!',
        },
      ],
      interactions: [],
      hints: [],
      completed: false,
      attemptCount: 0,
    },

    // Page 1: Explain
    {
      pageIndex: 1,
      pageId: 'explain',
      type: 'explain' as const,
      title: 'The Rule',
      titleRu: 'Правило — проще некуда!',
      contentBlocks: [
        {
          type: 'rule' as const,
          content: 'To be меняется в зависимости от того, о ком говорим:',
          rule: 'I → am | He/She/It → is | We/You/They → are',
          ruleRu: 'Я → am | Он/Она/Оно → is | Мы/Вы/Они → are',
        },
        {
          type: 'table' as const,
          content: 'Таблица спряжения:',
          tableData: {
            headers: ['Местоимение', 'To Be', 'Пример'],
            rows: [
              ['I', 'am', 'I am happy'],
              ['He / She / It', 'is', 'She is a doctor'],
              ['We / You / They', 'are', 'They are students'],
            ],
          },
        },
        {
          type: 'example' as const,
          english: 'I am a music lover.',
          russian: 'Я любитель музыки.',
          highlight: 'am',
          context: 'Говоришь о себе — всегда am',
        },
        {
          type: 'example' as const,
          english: 'My favorite band is from London.',
          russian: 'Моя любимая группа из Лондона.',
          highlight: 'is',
          context: 'Группа — это "it", поэтому is',
        },
        {
          type: 'example' as const,
          english: 'We are travelers.',
          russian: 'Мы — путешественники.',
          highlight: 'are',
          context: 'Мы — это we, поэтому are',
        },
      ],
      interactions: [],
      hints: [],
      completed: false,
      attemptCount: 0,
    },

    // Page 2: Mistakes
    {
      pageIndex: 2,
      pageId: 'mistakes',
      type: 'mistakes' as const,
      title: 'Common Mistakes',
      titleRu: '90% учеников путают это!',
      contentBlocks: [
        {
          type: 'warning' as const,
          content: 'Самая частая ошибка — использовать is со всеми!',
          icon: 'warning' as const,
        },
        {
          type: 'comparison' as const,
          content: 'Сравни:',
          items: [
            {
              label: 'I',
              correct: 'I am happy',
              incorrect: 'I is happy ❌',
              explanation: 'С I всегда am!',
            },
            {
              label: 'She',
              correct: 'She is a doctor',
              incorrect: 'She am a doctor ❌',
              explanation: 'С he/she/it всегда is!',
            },
            {
              label: 'They',
              correct: 'They are students',
              incorrect: 'They is students ❌',
              explanation: 'С we/you/they всегда are!',
            },
          ],
        },
        {
          type: 'tip' as const,
          content: 'Лайфхак: запомни как песню — "I am, you are, he is..."',
          icon: 'lightbulb' as const,
        },
      ],
      interactions: [],
      hints: [],
      completed: false,
      attemptCount: 0,
    },

    // Page 3: Check
    {
      pageIndex: 3,
      pageId: 'check',
      type: 'check' as const,
      title: 'Quick Check',
      titleRu: 'Проверим?',
      contentBlocks: [],
      interactions: [
        {
          interactionId: 'check_1',
          kind: 'mcq' as const,
          prompt: 'Выбери правильный вариант:',
          content: {
            question: 'My sister ___ a teacher.',
            options: ['am', 'is', 'are', 'be'],
            correctIndex: 1,
            explanation: 'Sister = she, поэтому is',
            explanationRu: 'Сестра — это "она" (she), значит используем is',
          },
          targetSkills: ['grammar'] as const,
          difficulty: 2,
          hints: ['Подумай: sister — это he, she или they?'],
          attempted: false,
        },
        {
          interactionId: 'check_2',
          kind: 'mcq' as const,
          prompt: 'Выбери правильный вариант:',
          content: {
            question: 'We ___ from Russia.',
            options: ['am', 'is', 'are', 'be'],
            correctIndex: 2,
            explanation: 'We = we, поэтому are',
            explanationRu: 'Мы — это "we", значит используем are',
          },
          targetSkills: ['grammar'] as const,
          difficulty: 2,
          hints: ['We — это мы. Какой глагол с "мы"?'],
          attempted: false,
        },
      ],
      hints: ['Вспомни таблицу: I-am, he/she/it-is, we/you/they-are'],
      successCriteria: {
        minScore: 0.5,
        requiredCorrect: 1,
        allowRetry: true,
        maxRetries: 2,
      },
      completed: false,
      attemptCount: 0,
    },

    // Page 4: Practice
    {
      pageIndex: 4,
      pageId: 'practice',
      type: 'practice' as const,
      title: 'Practice',
      titleRu: 'Практика — сила!',
      contentBlocks: [
        {
          type: 'tip' as const,
          content: 'Не бойся ошибаться! Ошибки — это часть обучения.',
          icon: 'star' as const,
        },
      ],
      interactions: [
        {
          interactionId: 'practice_1',
          kind: 'fill_blank' as const,
          prompt: 'Заполни пропуски правильной формой to be:',
          content: {
            sentence: 'I ___ happy today.',
            sentenceRu: 'Я счастлив сегодня.',
            blanks: [{ index: 0, answer: 'am', alternatives: ['AM', 'Am'] }],
          },
          targetSkills: ['grammar'] as const,
          difficulty: 2,
          hints: ['I + ?'],
          attempted: false,
        },
        {
          interactionId: 'practice_2',
          kind: 'fill_blank' as const,
          prompt: 'Заполни пропуски:',
          content: {
            sentence: 'My friends ___ musicians.',
            sentenceRu: 'Мои друзья — музыканты.',
            blanks: [{ index: 0, answer: 'are', alternatives: ['ARE', 'Are'] }],
          },
          targetSkills: ['grammar'] as const,
          difficulty: 2,
          hints: ['Friends — это много людей. They...'],
          attempted: false,
        },
        {
          interactionId: 'practice_3',
          kind: 'fill_blank' as const,
          prompt: 'Заполни пропуски:',
          content: {
            sentence: 'This song ___ amazing!',
            sentenceRu: 'Эта песня потрясающая!',
            blanks: [{ index: 0, answer: 'is', alternatives: ['IS', 'Is'] }],
          },
          targetSkills: ['grammar'] as const,
          difficulty: 3,
          hints: ['Song — это it'],
          attempted: false,
        },
      ],
      hints: [],
      completed: false,
      attemptCount: 0,
    },

    // Page 5: Summary
    {
      pageIndex: 5,
      pageId: 'summary',
      type: 'summary' as const,
      title: 'Great job!',
      titleRu: 'Отлично! Ты справился!',
      contentBlocks: [
        {
          type: 'text' as const,
          content: 'Теперь ты знаешь самый важный глагол в английском!',
          contentRu: 'Запомни простое правило: I-am, he/she/it-is, we/you/they-are',
        },
        {
          type: 'tip' as const,
          content: 'Попробуй составить 3 предложения о себе: I am..., My hobby is..., My friends are...',
          icon: 'lightbulb' as const,
        },
        {
          type: 'text' as const,
          content: 'Следующий шаг: отрицания и вопросы с to be (is not, are not, Am I...?)',
          contentRu: 'Готов продолжить?',
        },
      ],
      interactions: [],
      hints: [],
      completed: false,
      attemptCount: 0,
    },
  ],
};
