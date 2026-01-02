import type { TaskPayload, SkillType } from '@enbai/types';

/**
 * Mock responses for development without Gemini API
 */

// Sample chat responses (in Russian!)
export const MOCK_CHAT_RESPONSES = [
  "Хороший вопрос! Давай разберёмся вместе.",
  "Это частая сложность для изучающих английский. Вот что я предлагаю...",
  "Ты делаешь хорошие успехи! Давай попрактикуемся вместе.",
  "Интересно! Хочешь попробовать быстрое упражнение на эту тему?",
  "Понимаю. Давай объясню проще.",
  "Отлично! У тебя получается. Готов к испытанию?",
];

// Sample tasks by type
export const MOCK_TASKS: Record<string, TaskPayload> = {
  multiple_choice_grammar: {
    id: crypto.randomUUID(),
    templateId: 'multiple_choice_v1',
    schemaVersion: '1.0',
    type: 'grammar',
    difficulty: 5,
    objectives: ['Practice past tense verbs'],
    targetSkills: ['grammar'],
    content: {
      type: 'multiple_choice',
      question: 'Choose the correct form: "Yesterday, I ___ to the store."',
      options: [
        { id: 'a', text: 'go' },
        { id: 'b', text: 'went' },
        { id: 'c', text: 'gone' },
        { id: 'd', text: 'going' },
      ],
      correctOptionId: 'b',
      explanation: '"Went" is the past tense of "go". We use past tense with "yesterday".',
    },
    uiHints: { showTimer: true, allowSkip: true },
    evaluation: {
      type: 'auto',
      scoringMethod: 'exact',
      skillWeights: { grammar: 1.0 },
    },
    expectedTimeSeconds: 30,
    createdAt: new Date().toISOString(),
    generatedBy: 'template',
  },

  multiple_choice_vocabulary: {
    id: crypto.randomUUID(),
    templateId: 'multiple_choice_v1',
    schemaVersion: '1.0',
    type: 'vocabulary',
    difficulty: 4,
    objectives: ['Learn word meanings'],
    targetSkills: ['vocabulary'],
    content: {
      type: 'multiple_choice',
      question: 'What does "ubiquitous" mean?',
      options: [
        { id: 'a', text: 'Very rare' },
        { id: 'b', text: 'Present everywhere' },
        { id: 'c', text: 'Extremely large' },
        { id: 'd', text: 'Moving quickly' },
      ],
      correctOptionId: 'b',
      explanation: '"Ubiquitous" means present, appearing, or found everywhere.',
    },
    uiHints: { showTimer: true, allowSkip: true },
    evaluation: {
      type: 'auto',
      scoringMethod: 'exact',
      skillWeights: { vocabulary: 1.0 },
    },
    expectedTimeSeconds: 45,
    createdAt: new Date().toISOString(),
    generatedBy: 'template',
  },

  fill_blanks_grammar: {
    id: crypto.randomUUID(),
    templateId: 'fill_blanks_v1',
    schemaVersion: '1.0',
    type: 'grammar',
    difficulty: 6,
    objectives: ['Practice articles (a/an/the)'],
    targetSkills: ['grammar'],
    content: {
      type: 'fill_blanks',
      text: 'I saw {{blank_1}} elephant at {{blank_2}} zoo yesterday. It was {{blank_3}} biggest animal there.',
      blanks: [
        { id: 'blank_1', hint: 'indefinite article before vowel', correctAnswers: ['an'] },
        { id: 'blank_2', hint: 'definite article', correctAnswers: ['the'] },
        { id: 'blank_3', hint: 'definite article for superlative', correctAnswers: ['the'] },
      ],
    },
    uiHints: { showTimer: true, allowHint: true, allowSkip: true },
    evaluation: {
      type: 'auto',
      scoringMethod: 'exact',
      partialCredit: true,
      skillWeights: { grammar: 1.0 },
    },
    expectedTimeSeconds: 60,
    createdAt: new Date().toISOString(),
    generatedBy: 'template',
  },

  fill_blanks_vocabulary: {
    id: crypto.randomUUID(),
    templateId: 'fill_blanks_wordbank_v1',
    schemaVersion: '1.0',
    type: 'vocabulary',
    difficulty: 5,
    objectives: ['Practice using context clues'],
    targetSkills: ['vocabulary', 'comprehension'],
    content: {
      type: 'fill_blanks',
      text: 'The weather was {{blank_1}}, so we decided to stay {{blank_2}}. We watched a {{blank_3}} movie together.',
      blanks: [
        { id: 'blank_1', correctAnswers: ['terrible', 'awful'] },
        { id: 'blank_2', correctAnswers: ['inside', 'indoors'] },
        { id: 'blank_3', correctAnswers: ['great', 'fantastic'] },
      ],
      wordBank: ['terrible', 'inside', 'great', 'outside', 'beautiful', 'boring'],
    },
    uiHints: { showTimer: true, allowSkip: true },
    evaluation: {
      type: 'auto',
      scoringMethod: 'exact',
      partialCredit: true,
      skillWeights: { vocabulary: 0.7, comprehension: 0.3 },
    },
    expectedTimeSeconds: 90,
    createdAt: new Date().toISOString(),
    generatedBy: 'template',
  },

  match_pairs: {
    id: crypto.randomUUID(),
    templateId: 'match_pairs_v1',
    schemaVersion: '1.0',
    type: 'vocabulary',
    difficulty: 4,
    objectives: ['Match words with definitions'],
    targetSkills: ['vocabulary'],
    content: {
      type: 'match_pairs',
      instruction: 'Match each word with its definition',
      leftItems: [
        { id: 'l1', text: 'Brave' },
        { id: 'l2', text: 'Clever' },
        { id: 'l3', text: 'Generous' },
        { id: 'l4', text: 'Honest' },
      ],
      rightItems: [
        { id: 'r1', text: 'Willing to give and share' },
        { id: 'r2', text: 'Quick to understand' },
        { id: 'r3', text: 'Ready to face danger' },
        { id: 'r4', text: 'Telling the truth' },
      ],
      correctPairs: [
        { leftId: 'l1', rightId: 'r3' },
        { leftId: 'l2', rightId: 'r2' },
        { leftId: 'l3', rightId: 'r1' },
        { leftId: 'l4', rightId: 'r4' },
      ],
    },
    uiHints: { showTimer: true, allowSkip: true },
    evaluation: {
      type: 'auto',
      scoringMethod: 'partial',
      partialCredit: true,
      skillWeights: { vocabulary: 1.0 },
    },
    expectedTimeSeconds: 60,
    createdAt: new Date().toISOString(),
    generatedBy: 'template',
  },

  reorder_sentence: {
    id: crypto.randomUUID(),
    templateId: 'reorder_sentence_v1',
    schemaVersion: '1.0',
    type: 'grammar',
    difficulty: 5,
    objectives: ['Practice word order'],
    targetSkills: ['grammar', 'comprehension'],
    content: {
      type: 'reorder',
      instruction: 'Put the words in the correct order to make a sentence',
      items: [
        { id: 'w1', text: 'never' },
        { id: 'w2', text: 'I' },
        { id: 'w3', text: 'before' },
        { id: 'w4', text: 'have' },
        { id: 'w5', text: 'sushi' },
        { id: 'w6', text: 'tried' },
      ],
      correctOrder: ['w2', 'w4', 'w1', 'w6', 'w5', 'w3'], // I have never tried sushi before
    },
    uiHints: { showTimer: true, allowSkip: true },
    evaluation: {
      type: 'auto',
      scoringMethod: 'exact',
      skillWeights: { grammar: 0.7, comprehension: 0.3 },
    },
    expectedTimeSeconds: 45,
    createdAt: new Date().toISOString(),
    generatedBy: 'template',
  },

  error_correction: {
    id: crypto.randomUUID(),
    templateId: 'error_correction_v1',
    schemaVersion: '1.0',
    type: 'grammar',
    difficulty: 6,
    objectives: ['Find and correct grammar mistakes'],
    targetSkills: ['grammar', 'writing'],
    content: {
      type: 'error_correction',
      instruction: 'Find and correct the errors in this sentence',
      sentence: 'She dont like to goes to the beach on weekends.',
      errors: [
        { startIndex: 4, endIndex: 8, correctText: "doesn't", errorType: 'grammar' },
        { startIndex: 17, endIndex: 21, correctText: 'go', errorType: 'grammar' },
      ],
    },
    uiHints: { showTimer: true, allowSkip: true },
    evaluation: {
      type: 'auto',
      scoringMethod: 'partial',
      partialCredit: true,
      skillWeights: { grammar: 0.8, writing: 0.2 },
    },
    expectedTimeSeconds: 60,
    createdAt: new Date().toISOString(),
    generatedBy: 'template',
  },
};

// Get all mock tasks as array
export const MOCK_TASKS_ARRAY = Object.values(MOCK_TASKS);

/**
 * Get a random mock task, optionally filtered by skill
 */
export function getRandomMockTask(targetSkill?: SkillType): TaskPayload {
  let tasks = MOCK_TASKS_ARRAY;

  if (targetSkill && targetSkill !== 'auto' as any) {
    tasks = tasks.filter(t => t.targetSkills.includes(targetSkill));
  }

  if (tasks.length === 0) {
    tasks = MOCK_TASKS_ARRAY;
  }

  const task = tasks[Math.floor(Math.random() * tasks.length)];

  // Return a copy with new ID
  return {
    ...task,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
}

/**
 * Get a random chat response
 */
export function getRandomChatResponse(): string {
  return MOCK_CHAT_RESPONSES[Math.floor(Math.random() * MOCK_CHAT_RESPONSES.length)];
}

/**
 * Simple evaluation logic for mock mode
 */
export function evaluateMockTask(
  task: TaskPayload,
  answer: any
): {
  isCorrect: boolean;
  score: number;
  feedback: string;
  mistakes: any[];
  skillDeltas: Partial<Record<SkillType, number>>;
  encouragement: string;
} {
  const content = task.content as any;
  let isCorrect = false;
  let score = 0;
  let feedback = '';
  const mistakes: any[] = [];

  switch (content.type) {
    case 'multiple_choice': {
      isCorrect = answer.selectedOptionId === content.correctOptionId;
      score = isCorrect ? 1.0 : 0;
      feedback = isCorrect
        ? 'Correct! ' + (content.explanation || '')
        : `The correct answer was "${content.options.find((o: any) => o.id === content.correctOptionId)?.text}". ${content.explanation || ''}`;
      if (!isCorrect) {
        mistakes.push({
          type: task.type,
          description: 'Wrong answer selected',
          correction: content.options.find((o: any) => o.id === content.correctOptionId)?.text,
          severity: 'moderate',
        });
      }
      break;
    }

    case 'fill_blanks': {
      const blanks = content.blanks as any[];
      let correctCount = 0;

      blanks.forEach((blank: any) => {
        const userAnswer = answer.blanks?.[blank.id]?.toLowerCase().trim();
        const correct = blank.correctAnswers?.some(
          (a: string) => a.toLowerCase() === userAnswer
        );
        if (correct) {
          correctCount++;
        } else {
          mistakes.push({
            type: 'grammar',
            description: `Blank "${blank.id}" was incorrect`,
            correction: blank.correctAnswers?.[0],
            severity: 'minor',
          });
        }
      });

      score = blanks.length > 0 ? correctCount / blanks.length : 0;
      isCorrect = score >= 0.8;
      feedback = isCorrect
        ? `Great job! You got ${correctCount}/${blanks.length} correct.`
        : `You got ${correctCount}/${blanks.length} correct. Keep practicing!`;
      break;
    }

    case 'match_pairs': {
      const correctPairs = content.correctPairs as any[];
      const userPairs = answer.pairs || [];
      let correctCount = 0;

      correctPairs.forEach((cp: any) => {
        const match = userPairs.find(
          (up: any) => up.leftId === cp.leftId && up.rightId === cp.rightId
        );
        if (match) correctCount++;
      });

      score = correctPairs.length > 0 ? correctCount / correctPairs.length : 0;
      isCorrect = score >= 0.8;
      feedback = isCorrect
        ? `Excellent! You matched ${correctCount}/${correctPairs.length} pairs correctly.`
        : `You matched ${correctCount}/${correctPairs.length} pairs. Try again!`;
      break;
    }

    case 'reorder': {
      const correctOrder = content.correctOrder as string[];
      const userOrder = answer.order || [];

      isCorrect = JSON.stringify(correctOrder) === JSON.stringify(userOrder);
      score = isCorrect ? 1.0 : 0;
      feedback = isCorrect
        ? 'Perfect! The sentence is in the correct order.'
        : 'Not quite right. The correct order forms a different sentence.';
      break;
    }

    case 'error_correction': {
      // Simplified: just check if they found any errors
      const corrections = answer.corrections || [];
      const actualErrors = content.errors || [];

      score = corrections.length > 0 ? 0.5 : 0;
      isCorrect = corrections.length >= actualErrors.length;
      feedback = isCorrect
        ? 'Good work finding the errors!'
        : `There were ${actualErrors.length} errors to find.`;
      break;
    }

    default:
      score = 0.5;
      feedback = 'Task evaluated.';
  }

  // Calculate skill deltas
  const skillDeltas: Partial<Record<SkillType, number>> = {};
  const weights = task.evaluation?.skillWeights || { [task.type]: 1.0 };

  for (const [skill, weight] of Object.entries(weights)) {
    if (isCorrect) {
      skillDeltas[skill as SkillType] = 0.02 * weight;
    } else if (score > 0) {
      skillDeltas[skill as SkillType] = 0.01 * weight * score;
    } else {
      skillDeltas[skill as SkillType] = -0.005 * weight;
    }
  }

  const encouragements = isCorrect
    ? [
        "You're doing great! Keep it up!",
        "Excellent work! You're improving!",
        "Fantastic! Your skills are growing!",
      ]
    : [
        "Don't worry, practice makes perfect!",
        "Keep trying, you'll get it!",
        "Every mistake is a learning opportunity!",
      ];

  return {
    isCorrect,
    score,
    feedback,
    mistakes,
    skillDeltas,
    encouragement: encouragements[Math.floor(Math.random() * encouragements.length)],
  };
}
