/**
 * Topic Blueprints - Clean templates for AI-driven teaching
 *
 * These are content-agnostic blueprints that define the structure
 * of lessons. AI fills in the actual content based on user context.
 */

import type { TeachingTopicTemplate, SkillType, CEFRLevel } from '@enbai/types';

// ============================================
// GRAMMAR BLUEPRINTS
// ============================================

export const BLUEPRINT_GRAMMAR_ARTICLES: TeachingTopicTemplate = {
  id: 'grammar_articles_basic',
  name: 'Articles (a, an, the)',
  nameRu: 'Артикли (a, an, the)',
  description: 'Basic article usage - when to use a, an, the, or no article',

  primarySkill: 'grammar',
  secondarySkills: ['vocabulary'],

  applicableLevels: ['A1', 'A2'],
  minDifficulty: 1,
  maxDifficulty: 4,

  ieltsComponents: ['writing', 'speaking'],

  contentPlaceholders: {
    examples: [
      '{{indefinite_a_example}}',
      '{{indefinite_an_example}}',
      '{{definite_the_example}}',
      '{{zero_article_example}}',
    ],
    misconceptions: [
      'Using "a" before vowel sounds',
      'Using "the" with general concepts',
      'Omitting articles with specific nouns',
    ],
    interestHooks: ['{{interest_hook_articles}}'],
    practicePrompts: [
      'Fill in the article: I saw ___ elephant',
      'Choose correct: She is ___ engineer',
    ],
  },

  defaultPages: [
    {
      pageType: 'hook',
      titleTemplate: 'Зачем нужны артикли?',
      titleTemplateRu: 'Зачем нужны артикли?',
      contentBlocks: [
        { type: 'text', placeholder: 'hook_intro', requiresRussian: true },
        { type: 'example', placeholder: 'hook_example', requiresRussian: true, maxLength: 100 },
      ],
    },
    {
      pageType: 'explain',
      titleTemplate: 'Правило a/an',
      titleTemplateRu: 'Правило a/an',
      contentBlocks: [
        { type: 'rule', placeholder: 'rule_a_an', requiresRussian: true },
        { type: 'example', placeholder: 'examples_a', requiresRussian: true },
        { type: 'example', placeholder: 'examples_an', requiresRussian: true },
        { type: 'tip', placeholder: 'tip_vowel_sound', requiresRussian: true },
      ],
      interactions: [
        {
          kind: 'mcq',
          promptPlaceholder: 'check_a_an',
          targetSkills: ['grammar'],
          difficultyRange: [1, 3],
          timeSeconds: 30,
        },
      ],
    },
    {
      pageType: 'check',
      titleTemplate: 'Проверка понимания',
      titleTemplateRu: 'Проверка понимания',
      contentBlocks: [],
      interactions: [
        {
          kind: 'fill_blank',
          promptPlaceholder: 'fill_article_1',
          targetSkills: ['grammar'],
          difficultyRange: [2, 4],
          timeSeconds: 45,
        },
        {
          kind: 'fill_blank',
          promptPlaceholder: 'fill_article_2',
          targetSkills: ['grammar'],
          difficultyRange: [2, 4],
          timeSeconds: 45,
        },
      ],
      skipIfScore: 0.8,
      repeatIfScore: 0.4,
    },
    {
      pageType: 'practice',
      titleTemplate: 'Практика',
      titleTemplateRu: 'Практика',
      contentBlocks: [
        { type: 'text', placeholder: 'practice_intro', requiresRussian: true, maxLength: 50 },
      ],
      interactions: [
        {
          kind: 'fill_blank',
          promptPlaceholder: 'practice_sentence_1',
          targetSkills: ['grammar', 'vocabulary'],
          difficultyRange: [3, 5],
          timeSeconds: 60,
        },
        {
          kind: 'mcq',
          promptPlaceholder: 'practice_mcq_1',
          targetSkills: ['grammar'],
          difficultyRange: [3, 5],
          timeSeconds: 30,
        },
      ],
    },
    {
      pageType: 'summary',
      titleTemplate: 'Итог',
      titleTemplateRu: 'Итог',
      contentBlocks: [
        { type: 'rule', placeholder: 'summary_rule', requiresRussian: true },
        { type: 'tip', placeholder: 'next_steps', requiresRussian: true },
      ],
    },
  ],

  prerequisites: [],
  estimatedMinutes: 8,
  version: '1.0',
  tags: ['grammar', 'articles', 'a1', 'a2', 'basics'],
};

export const BLUEPRINT_GRAMMAR_TENSES_PRESENT: TeachingTopicTemplate = {
  id: 'grammar_present_simple',
  name: 'Present Simple',
  nameRu: 'Настоящее простое время',
  description: 'When and how to use Present Simple tense',

  primarySkill: 'grammar',
  secondarySkills: ['vocabulary', 'speaking'],

  applicableLevels: ['A1', 'A2', 'B1'],
  minDifficulty: 2,
  maxDifficulty: 5,

  ieltsComponents: ['writing', 'speaking'],

  contentPlaceholders: {
    examples: [
      '{{affirmative_example}}',
      '{{negative_example}}',
      '{{question_example}}',
      '{{third_person_example}}',
    ],
    misconceptions: [
      'Forgetting -s in third person',
      'Using Present Simple for ongoing actions',
      'Do/Does confusion',
    ],
    interestHooks: ['{{interest_hook_routines}}'],
    practicePrompts: [
      'Make it negative: She likes coffee',
      'Add -s if needed: He (play) football',
    ],
  },

  defaultPages: [
    {
      pageType: 'hook',
      titleTemplate: 'Когда используем Present Simple?',
      titleTemplateRu: 'Когда используем Present Simple?',
      contentBlocks: [
        { type: 'text', placeholder: 'hook_when_to_use', requiresRussian: true },
        { type: 'comparison', placeholder: 'hook_vs_continuous', requiresRussian: true },
      ],
    },
    {
      pageType: 'explain',
      titleTemplate: 'Структура предложения',
      titleTemplateRu: 'Структура предложения',
      contentBlocks: [
        { type: 'rule', placeholder: 'structure_affirmative', requiresRussian: true },
        { type: 'example', placeholder: 'examples_affirmative', requiresRussian: true },
        { type: 'warning', placeholder: 'warning_third_person', requiresRussian: true },
      ],
      interactions: [
        {
          kind: 'mcq',
          promptPlaceholder: 'check_structure',
          targetSkills: ['grammar'],
          difficultyRange: [2, 4],
        },
      ],
    },
    {
      pageType: 'explain',
      titleTemplate: 'Отрицания и вопросы',
      titleTemplateRu: 'Отрицания и вопросы',
      contentBlocks: [
        { type: 'rule', placeholder: 'structure_negative', requiresRussian: true },
        { type: 'rule', placeholder: 'structure_question', requiresRussian: true },
        { type: 'tip', placeholder: 'tip_do_does', requiresRussian: true },
      ],
    },
    {
      pageType: 'check',
      titleTemplate: 'Проверим',
      titleTemplateRu: 'Проверим',
      contentBlocks: [],
      interactions: [
        {
          kind: 'input',
          promptPlaceholder: 'make_negative',
          targetSkills: ['grammar'],
          difficultyRange: [3, 5],
          timeSeconds: 60,
        },
        {
          kind: 'input',
          promptPlaceholder: 'make_question',
          targetSkills: ['grammar'],
          difficultyRange: [3, 5],
          timeSeconds: 60,
        },
      ],
    },
    {
      pageType: 'practice',
      titleTemplate: 'Практика',
      titleTemplateRu: 'Практика',
      contentBlocks: [],
      interactions: [
        {
          kind: 'fill_blank',
          promptPlaceholder: 'fill_verb_form',
          targetSkills: ['grammar'],
          difficultyRange: [3, 6],
          timeSeconds: 45,
        },
        {
          kind: 'speaking',
          promptPlaceholder: 'describe_routine',
          targetSkills: ['speaking', 'grammar'],
          difficultyRange: [4, 6],
          timeSeconds: 120,
        },
      ],
    },
    {
      pageType: 'summary',
      titleTemplate: 'Итог',
      titleTemplateRu: 'Итог',
      contentBlocks: [
        { type: 'rule', placeholder: 'summary_when', requiresRussian: true },
        { type: 'rule', placeholder: 'summary_structure', requiresRussian: true },
        { type: 'tip', placeholder: 'common_mistakes', requiresRussian: true },
      ],
    },
  ],

  prerequisites: [],
  estimatedMinutes: 12,
  version: '1.0',
  tags: ['grammar', 'tenses', 'present', 'a1', 'a2', 'b1'],
};

// ============================================
// VOCABULARY BLUEPRINTS
// ============================================

export const BLUEPRINT_VOCAB_DAILY_ROUTINES: TeachingTopicTemplate = {
  id: 'vocab_daily_routines',
  name: 'Daily Routines Vocabulary',
  nameRu: 'Словарь: ежедневные действия',
  description: 'Common verbs and phrases for describing daily activities',

  primarySkill: 'vocabulary',
  secondarySkills: ['speaking', 'grammar'],

  applicableLevels: ['A1', 'A2'],
  minDifficulty: 1,
  maxDifficulty: 4,

  ieltsComponents: ['speaking'],

  contentPlaceholders: {
    examples: [
      '{{morning_routine_words}}',
      '{{work_routine_words}}',
      '{{evening_routine_words}}',
    ],
    misconceptions: [
      'Confusing "wake up" and "get up"',
      'Using wrong prepositions with time',
    ],
    interestHooks: ['{{interest_hook_daily}}'],
    practicePrompts: [
      'What time do you wake up?',
      'Describe your morning routine',
    ],
  },

  defaultPages: [
    {
      pageType: 'hook',
      titleTemplate: 'Твой обычный день',
      titleTemplateRu: 'Твой обычный день',
      contentBlocks: [
        { type: 'text', placeholder: 'hook_question', requiresRussian: true },
      ],
    },
    {
      pageType: 'explain',
      titleTemplate: 'Утренние действия',
      titleTemplateRu: 'Утренние действия',
      contentBlocks: [
        { type: 'text', placeholder: 'morning_words_intro', requiresRussian: true },
        { type: 'example', placeholder: 'morning_words', requiresRussian: true },
        { type: 'tip', placeholder: 'wake_vs_get_up', requiresRussian: true },
      ],
      interactions: [
        {
          kind: 'match',
          promptPlaceholder: 'match_morning_words',
          targetSkills: ['vocabulary'],
          difficultyRange: [1, 3],
        },
      ],
    },
    {
      pageType: 'practice',
      titleTemplate: 'Практика',
      titleTemplateRu: 'Практика',
      contentBlocks: [],
      interactions: [
        {
          kind: 'fill_blank',
          promptPlaceholder: 'fill_routine_sentence',
          targetSkills: ['vocabulary', 'grammar'],
          difficultyRange: [2, 4],
        },
        {
          kind: 'speaking',
          promptPlaceholder: 'describe_your_morning',
          targetSkills: ['speaking', 'vocabulary'],
          difficultyRange: [3, 5],
          timeSeconds: 60,
        },
      ],
    },
    {
      pageType: 'summary',
      titleTemplate: 'Итог',
      titleTemplateRu: 'Итог',
      contentBlocks: [
        { type: 'text', placeholder: 'summary_words_learned', requiresRussian: true },
        { type: 'tip', placeholder: 'practice_tip', requiresRussian: true },
      ],
    },
  ],

  prerequisites: [],
  estimatedMinutes: 10,
  version: '1.0',
  tags: ['vocabulary', 'daily', 'routines', 'a1', 'a2'],
};

// ============================================
// LISTENING BLUEPRINTS
// ============================================

export const BLUEPRINT_LISTENING_INTRO: TeachingTopicTemplate = {
  id: 'listening_intro_dialogues',
  name: 'Introduction Dialogues',
  nameRu: 'Диалоги: знакомство',
  description: 'Understanding simple introduction conversations',

  primarySkill: 'listening',
  secondarySkills: ['speaking', 'vocabulary'],

  applicableLevels: ['A1', 'A2'],
  minDifficulty: 1,
  maxDifficulty: 3,

  ieltsComponents: ['listening', 'speaking'],

  contentPlaceholders: {
    examples: [
      '{{intro_dialogue_1}}',
      '{{intro_dialogue_2}}',
    ],
    misconceptions: [
      'Missing contractions in fast speech',
      'Confusing similar sounds',
    ],
    interestHooks: ['{{interest_hook_meeting}}'],
    practicePrompts: [
      'Listen and answer: What is his name?',
      'Listen and complete the sentence',
    ],
  },

  defaultPages: [
    {
      pageType: 'hook',
      titleTemplate: 'Знакомство по-английски',
      titleTemplateRu: 'Знакомство по-английски',
      contentBlocks: [
        { type: 'text', placeholder: 'hook_intro', requiresRussian: true },
        { type: 'tip', placeholder: 'listening_strategy', requiresRussian: true },
      ],
    },
    {
      pageType: 'explain',
      titleTemplate: 'Ключевые фразы',
      titleTemplateRu: 'Ключевые фразы',
      contentBlocks: [
        { type: 'example', placeholder: 'key_phrases', requiresRussian: true },
        { type: 'tip', placeholder: 'pronunciation_note', requiresRussian: true },
      ],
    },
    {
      pageType: 'practice',
      titleTemplate: 'Слушаем диалог',
      titleTemplateRu: 'Слушаем диалог',
      contentBlocks: [
        { type: 'text', placeholder: 'listen_instruction', requiresRussian: true },
      ],
      interactions: [
        {
          kind: 'listening',
          promptPlaceholder: 'dialogue_audio',
          targetSkills: ['listening', 'comprehension'],
          difficultyRange: [1, 3],
          timeSeconds: 120,
        },
        {
          kind: 'mcq',
          promptPlaceholder: 'comprehension_question',
          targetSkills: ['listening', 'comprehension'],
          difficultyRange: [1, 3],
        },
      ],
    },
    {
      pageType: 'summary',
      titleTemplate: 'Итог',
      titleTemplateRu: 'Итог',
      contentBlocks: [
        { type: 'text', placeholder: 'summary_phrases', requiresRussian: true },
      ],
    },
  ],

  prerequisites: [],
  estimatedMinutes: 8,
  version: '1.0',
  tags: ['listening', 'dialogues', 'introductions', 'a1', 'a2', 'ielts'],
};

// ============================================
// SPEAKING BLUEPRINTS
// ============================================

export const BLUEPRINT_SPEAKING_SELF_INTRO: TeachingTopicTemplate = {
  id: 'speaking_self_introduction',
  name: 'Self Introduction',
  nameRu: 'Рассказ о себе',
  description: 'How to introduce yourself in English',

  primarySkill: 'speaking',
  secondarySkills: ['vocabulary', 'grammar', 'fluency'],

  applicableLevels: ['A1', 'A2', 'B1'],
  minDifficulty: 2,
  maxDifficulty: 5,

  ieltsComponents: ['speaking'],

  contentPlaceholders: {
    examples: [
      '{{intro_template}}',
      '{{intro_example_student}}',
      '{{intro_example_professional}}',
    ],
    misconceptions: [
      'Starting with "I am" instead of "My name is"',
      'Too much or too little detail',
    ],
    interestHooks: ['{{interest_hook_intro}}'],
    practicePrompts: [
      'Introduce yourself in 30 seconds',
      'Tell about your job/studies',
    ],
  },

  defaultPages: [
    {
      pageType: 'hook',
      titleTemplate: 'Как представиться?',
      titleTemplateRu: 'Как представиться?',
      contentBlocks: [
        { type: 'text', placeholder: 'hook_importance', requiresRussian: true },
      ],
    },
    {
      pageType: 'explain',
      titleTemplate: 'Структура представления',
      titleTemplateRu: 'Структура представления',
      contentBlocks: [
        { type: 'rule', placeholder: 'intro_structure', requiresRussian: true },
        { type: 'example', placeholder: 'intro_example', requiresRussian: true },
        { type: 'tip', placeholder: 'fluency_tip', requiresRussian: true },
      ],
    },
    {
      pageType: 'check',
      titleTemplate: 'Проверим',
      titleTemplateRu: 'Проверим',
      contentBlocks: [],
      interactions: [
        {
          kind: 'mcq',
          promptPlaceholder: 'order_intro_parts',
          targetSkills: ['speaking', 'comprehension'],
          difficultyRange: [2, 4],
        },
      ],
    },
    {
      pageType: 'practice',
      titleTemplate: 'Твоя очередь',
      titleTemplateRu: 'Твоя очередь',
      contentBlocks: [
        { type: 'text', placeholder: 'speaking_instruction', requiresRussian: true },
      ],
      interactions: [
        {
          kind: 'speaking',
          promptPlaceholder: 'record_intro',
          targetSkills: ['speaking', 'fluency', 'pronunciation'],
          difficultyRange: [3, 5],
          timeSeconds: 60,
        },
      ],
    },
    {
      pageType: 'summary',
      titleTemplate: 'Итог',
      titleTemplateRu: 'Итог',
      contentBlocks: [
        { type: 'rule', placeholder: 'summary_structure', requiresRussian: true },
        { type: 'tip', placeholder: 'practice_advice', requiresRussian: true },
      ],
    },
  ],

  prerequisites: [],
  estimatedMinutes: 10,
  version: '1.0',
  tags: ['speaking', 'introduction', 'ielts', 'a1', 'a2', 'b1'],
};

// ============================================
// WRITING BLUEPRINTS
// ============================================

export const BLUEPRINT_WRITING_EMAIL_INFORMAL: TeachingTopicTemplate = {
  id: 'writing_email_informal',
  name: 'Informal Email',
  nameRu: 'Неформальное письмо',
  description: 'How to write a casual email to a friend',

  primarySkill: 'writing',
  secondarySkills: ['vocabulary', 'grammar'],

  applicableLevels: ['A2', 'B1'],
  minDifficulty: 3,
  maxDifficulty: 6,

  ieltsComponents: ['writing'],

  contentPlaceholders: {
    examples: [
      '{{email_greeting}}',
      '{{email_body}}',
      '{{email_closing}}',
    ],
    misconceptions: [
      'Using formal language in informal emails',
      'Wrong greeting/closing combinations',
    ],
    interestHooks: ['{{interest_hook_email}}'],
    practicePrompts: [
      'Write a short email to a friend about your weekend',
      'Reply to a friend inviting you to a party',
    ],
  },

  defaultPages: [
    {
      pageType: 'hook',
      titleTemplate: 'Пишем другу',
      titleTemplateRu: 'Пишем другу',
      contentBlocks: [
        { type: 'text', placeholder: 'hook_context', requiresRussian: true },
      ],
    },
    {
      pageType: 'explain',
      titleTemplate: 'Структура письма',
      titleTemplateRu: 'Структура письма',
      contentBlocks: [
        { type: 'rule', placeholder: 'email_structure', requiresRussian: true },
        { type: 'example', placeholder: 'greeting_examples', requiresRussian: true },
        { type: 'example', placeholder: 'closing_examples', requiresRussian: true },
      ],
    },
    {
      pageType: 'explain',
      titleTemplate: 'Полезные фразы',
      titleTemplateRu: 'Полезные фразы',
      contentBlocks: [
        { type: 'example', placeholder: 'useful_phrases', requiresRussian: true },
        { type: 'tip', placeholder: 'informal_markers', requiresRussian: true },
      ],
    },
    {
      pageType: 'practice',
      titleTemplate: 'Пишем письмо',
      titleTemplateRu: 'Пишем письмо',
      contentBlocks: [
        { type: 'text', placeholder: 'writing_task', requiresRussian: true },
      ],
      interactions: [
        {
          kind: 'writing',
          promptPlaceholder: 'write_email_task',
          targetSkills: ['writing', 'vocabulary', 'grammar'],
          difficultyRange: [4, 6],
          timeSeconds: 300,
        },
      ],
    },
    {
      pageType: 'summary',
      titleTemplate: 'Итог',
      titleTemplateRu: 'Итог',
      contentBlocks: [
        { type: 'rule', placeholder: 'summary_checklist', requiresRussian: true },
      ],
    },
  ],

  prerequisites: [],
  estimatedMinutes: 15,
  version: '1.0',
  tags: ['writing', 'email', 'informal', 'a2', 'b1', 'ielts'],
};

// ============================================
// ALL BLUEPRINTS
// ============================================

export const ALL_BLUEPRINTS: TeachingTopicTemplate[] = [
  BLUEPRINT_GRAMMAR_ARTICLES,
  BLUEPRINT_GRAMMAR_TENSES_PRESENT,
  BLUEPRINT_VOCAB_DAILY_ROUTINES,
  BLUEPRINT_LISTENING_INTRO,
  BLUEPRINT_SPEAKING_SELF_INTRO,
  BLUEPRINT_WRITING_EMAIL_INFORMAL,
];

// ============================================
// BLUEPRINT SELECTION
// ============================================

/**
 * Select best blueprint based on user context
 */
export function selectBlueprint(params: {
  weakestSkills: SkillType[];
  cefrLevel: CEFRLevel;
  recentErrors: string[];
  completedTemplates: string[];
  interests: string[];
}): TeachingTopicTemplate | null {
  const { weakestSkills, cefrLevel, recentErrors, completedTemplates } = params;

  // Filter by level
  const levelFiltered = ALL_BLUEPRINTS.filter(bp =>
    bp.applicableLevels.includes(cefrLevel)
  );

  // Filter out recently completed
  const notCompleted = levelFiltered.filter(bp =>
    !completedTemplates.includes(bp.id)
  );

  if (notCompleted.length === 0) {
    return levelFiltered[0] || null;
  }

  // Score each blueprint
  const scored = notCompleted.map(bp => {
    let score = 0;

    // Boost for matching weak skills
    if (weakestSkills.includes(bp.primarySkill)) {
      score += 10;
    }
    bp.secondarySkills.forEach(skill => {
      if (weakestSkills.includes(skill)) {
        score += 3;
      }
    });

    // Boost for matching recent errors
    recentErrors.forEach(error => {
      if (bp.tags.some(tag => error.toLowerCase().includes(tag))) {
        score += 5;
      }
    });

    return { blueprint: bp, score };
  });

  // Sort by score and return best
  scored.sort((a, b) => b.score - a.score);
  return scored[0]?.blueprint || null;
}

/**
 * Get blueprint by ID
 */
export function getBlueprintById(id: string): TeachingTopicTemplate | null {
  return ALL_BLUEPRINTS.find(bp => bp.id === id) || null;
}

/**
 * Get blueprints by skill
 */
export function getBlueprintsBySkill(skill: SkillType): TeachingTopicTemplate[] {
  return ALL_BLUEPRINTS.filter(bp =>
    bp.primarySkill === skill || bp.secondarySkills.includes(skill)
  );
}
