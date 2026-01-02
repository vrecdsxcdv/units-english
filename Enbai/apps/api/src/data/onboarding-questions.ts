/**
 * Onboarding test questions for skill assessment
 * Each question targets specific skills and has a difficulty level (1-10)
 */

export interface OnboardingQuestion {
  id: string;
  type: 'multiple_choice' | 'fill_blank' | 'error_correction';
  difficulty: number; // 1-10
  targetSkills: string[];
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
}

export const ONBOARDING_QUESTIONS: OnboardingQuestion[] = [
  // === GRAMMAR - Easy (1-3) ===
  {
    id: 'g1',
    type: 'multiple_choice',
    difficulty: 1,
    targetSkills: ['grammar'],
    question: 'She ___ a student.',
    options: ['is', 'are', 'am', 'be'],
    correctAnswer: 'is',
    explanation: 'С местоимениями he/she/it используется "is".',
  },
  {
    id: 'g2',
    type: 'multiple_choice',
    difficulty: 2,
    targetSkills: ['grammar'],
    question: 'They ___ to school every day.',
    options: ['goes', 'go', 'going', 'gone'],
    correctAnswer: 'go',
    explanation: 'С местоимением they используется базовая форма глагола.',
  },
  {
    id: 'g3',
    type: 'multiple_choice',
    difficulty: 3,
    targetSkills: ['grammar'],
    question: 'I ___ my homework yesterday.',
    options: ['do', 'did', 'done', 'does'],
    correctAnswer: 'did',
    explanation: '"Yesterday" указывает на прошедшее время, поэтому используем "did".',
  },

  // === GRAMMAR - Medium (4-6) ===
  {
    id: 'g4',
    type: 'multiple_choice',
    difficulty: 4,
    targetSkills: ['grammar'],
    question: 'If I ___ rich, I would travel the world.',
    options: ['am', 'was', 'were', 'be'],
    correctAnswer: 'were',
    explanation: 'В условных предложениях второго типа используется "were" для всех лиц.',
  },
  {
    id: 'g5',
    type: 'multiple_choice',
    difficulty: 5,
    targetSkills: ['grammar'],
    question: 'The book ___ by millions of people.',
    options: ['has read', 'has been read', 'have been read', 'was reading'],
    correctAnswer: 'has been read',
    explanation: 'Пассивный залог в Present Perfect: has/have + been + V3.',
  },
  {
    id: 'g6',
    type: 'multiple_choice',
    difficulty: 6,
    targetSkills: ['grammar'],
    question: 'She asked me where I ___.',
    options: ['live', 'lived', 'am living', 'living'],
    correctAnswer: 'lived',
    explanation: 'В косвенной речи время сдвигается назад (backshift).',
  },

  // === GRAMMAR - Hard (7-10) ===
  {
    id: 'g7',
    type: 'multiple_choice',
    difficulty: 7,
    targetSkills: ['grammar'],
    question: 'Had I known about the meeting, I ___ attended.',
    options: ['would have', 'will have', 'would', 'have'],
    correctAnswer: 'would have',
    explanation: 'Условное предложение третьего типа с инверсией.',
  },
  {
    id: 'g8',
    type: 'multiple_choice',
    difficulty: 8,
    targetSkills: ['grammar'],
    question: 'Not until she spoke ___ who she was.',
    options: ['I realized', 'did I realize', 'I did realize', 'realized I'],
    correctAnswer: 'did I realize',
    explanation: 'После "Not until" используется инверсия.',
  },

  // === VOCABULARY - Easy ===
  {
    id: 'v1',
    type: 'multiple_choice',
    difficulty: 1,
    targetSkills: ['vocabulary'],
    question: 'What is the opposite of "hot"?',
    options: ['warm', 'cold', 'cool', 'wet'],
    correctAnswer: 'cold',
    explanation: '"Cold" — антоним слова "hot".',
  },
  {
    id: 'v2',
    type: 'multiple_choice',
    difficulty: 2,
    targetSkills: ['vocabulary'],
    question: 'A person who writes books is called a(n) ___.',
    options: ['teacher', 'author', 'doctor', 'actor'],
    correctAnswer: 'author',
    explanation: '"Author" — человек, который пишет книги.',
  },
  {
    id: 'v3',
    type: 'multiple_choice',
    difficulty: 3,
    targetSkills: ['vocabulary'],
    question: 'Choose the correct synonym for "happy".',
    options: ['sad', 'angry', 'joyful', 'tired'],
    correctAnswer: 'joyful',
    explanation: '"Joyful" означает радостный, счастливый.',
  },

  // === VOCABULARY - Medium ===
  {
    id: 'v4',
    type: 'multiple_choice',
    difficulty: 4,
    targetSkills: ['vocabulary'],
    question: 'The project was ___ due to lack of funding.',
    options: ['abandoned', 'adopted', 'adapted', 'admired'],
    correctAnswer: 'abandoned',
    explanation: '"Abandoned" означает заброшенный, оставленный.',
  },
  {
    id: 'v5',
    type: 'multiple_choice',
    difficulty: 5,
    targetSkills: ['vocabulary'],
    question: 'She has a ___ for languages; she speaks five fluently.',
    options: ['talent', 'knack', 'gift', 'all of the above'],
    correctAnswer: 'all of the above',
    explanation: 'Все три слова могут использоваться в значении "способность, талант".',
  },
  {
    id: 'v6',
    type: 'multiple_choice',
    difficulty: 6,
    targetSkills: ['vocabulary'],
    question: 'The politician\'s ___ remarks caused a scandal.',
    options: ['innocuous', 'inflammatory', 'mundane', 'benevolent'],
    correctAnswer: 'inflammatory',
    explanation: '"Inflammatory" — провокационный, разжигающий.',
  },

  // === VOCABULARY - Hard ===
  {
    id: 'v7',
    type: 'multiple_choice',
    difficulty: 7,
    targetSkills: ['vocabulary'],
    question: 'His ___ attitude made him unpopular with colleagues.',
    options: ['gregarious', 'supercilious', 'magnanimous', 'altruistic'],
    correctAnswer: 'supercilious',
    explanation: '"Supercilious" — высокомерный, надменный.',
  },
  {
    id: 'v8',
    type: 'multiple_choice',
    difficulty: 8,
    targetSkills: ['vocabulary'],
    question: 'The author\'s ___ style made the book difficult to read.',
    options: ['lucid', 'perspicuous', 'abstruse', 'pellucid'],
    correctAnswer: 'abstruse',
    explanation: '"Abstruse" — трудный для понимания, заумный.',
  },

  // === COMPREHENSION ===
  {
    id: 'c1',
    type: 'multiple_choice',
    difficulty: 3,
    targetSkills: ['comprehension'],
    question: '"He let the cat out of the bag." This means he:',
    options: ['freed a cat', 'revealed a secret', 'made a mistake', 'bought a pet'],
    correctAnswer: 'revealed a secret',
    explanation: 'Идиома "let the cat out of the bag" означает раскрыть секрет.',
  },
  {
    id: 'c2',
    type: 'multiple_choice',
    difficulty: 5,
    targetSkills: ['comprehension'],
    question: '"She\'s feeling under the weather." This means:',
    options: ['She likes rain', 'She\'s outside', 'She\'s feeling ill', 'She\'s cold'],
    correctAnswer: 'She\'s feeling ill',
    explanation: '"Under the weather" — чувствовать себя нездоровым.',
  },
  {
    id: 'c3',
    type: 'multiple_choice',
    difficulty: 7,
    targetSkills: ['comprehension'],
    question: '"He\'s playing devil\'s advocate." This means:',
    options: [
      'He\'s being evil',
      'He\'s arguing the opposite side for discussion',
      'He\'s a lawyer',
      'He\'s being difficult'
    ],
    correctAnswer: 'He\'s arguing the opposite side for discussion',
    explanation: '"Devil\'s advocate" — человек, который спорит ради дискуссии.',
  },

  // === WORD FORMATION ===
  {
    id: 'wf1',
    type: 'multiple_choice',
    difficulty: 3,
    targetSkills: ['word_formation'],
    question: 'Choose the correct noun form: "His ___ surprised everyone."',
    options: ['arrive', 'arrival', 'arriving', 'arrived'],
    correctAnswer: 'arrival',
    explanation: '"Arrival" — существительное от глагола "arrive".',
  },
  {
    id: 'wf2',
    type: 'multiple_choice',
    difficulty: 5,
    targetSkills: ['word_formation'],
    question: 'The ___ of the building took two years. (construct)',
    options: ['construction', 'constructive', 'constructor', 'constructing'],
    correctAnswer: 'construction',
    explanation: '"Construction" — существительное, означающее процесс строительства.',
  },
  {
    id: 'wf3',
    type: 'multiple_choice',
    difficulty: 7,
    targetSkills: ['word_formation'],
    question: 'His behavior was completely ___. (defend)',
    options: ['defensive', 'indefensible', 'defendable', 'defendant'],
    correctAnswer: 'indefensible',
    explanation: '"Indefensible" — не поддающийся оправданию.',
  },

  // === LISTENING/PRONUNCIATION (text-based simulation) ===
  {
    id: 'p1',
    type: 'multiple_choice',
    difficulty: 2,
    targetSkills: ['pronunciation'],
    question: 'Which word has a different vowel sound? "cat, bat, hate, sat"',
    options: ['cat', 'bat', 'hate', 'sat'],
    correctAnswer: 'hate',
    explanation: '"Hate" имеет долгий звук /eɪ/, остальные — краткий /æ/.',
  },
  {
    id: 'p2',
    type: 'multiple_choice',
    difficulty: 4,
    targetSkills: ['pronunciation'],
    question: 'Which word is stressed on the second syllable?',
    options: ['photograph', 'photographer', 'photographic', 'photo'],
    correctAnswer: 'photographer',
    explanation: 'phoTOgrapher — ударение на втором слоге.',
  },
  {
    id: 'p3',
    type: 'multiple_choice',
    difficulty: 6,
    targetSkills: ['pronunciation'],
    question: 'In "comfortable", how many syllables are typically pronounced?',
    options: ['2', '3', '4', '5'],
    correctAnswer: '3',
    explanation: 'В разговорной речи: COMF-ter-ble (3 слога).',
  },

  // === SLANG ===
  {
    id: 's1',
    type: 'multiple_choice',
    difficulty: 4,
    targetSkills: ['slang'],
    question: '"That movie was lit!" means:',
    options: ['It was on fire', 'It was boring', 'It was amazing', 'It was bright'],
    correctAnswer: 'It was amazing',
    explanation: '"Lit" в сленге означает крутой, потрясающий.',
  },
  {
    id: 's2',
    type: 'multiple_choice',
    difficulty: 6,
    targetSkills: ['slang'],
    question: '"No cap" means:',
    options: ['Without a hat', 'No limit', 'No lie / seriously', 'No money'],
    correctAnswer: 'No lie / seriously',
    explanation: '"No cap" — сленг, означающий "без обмана, серьёзно".',
  },

  // === FLUENCY (sentence structure) ===
  {
    id: 'f1',
    type: 'multiple_choice',
    difficulty: 4,
    targetSkills: ['fluency'],
    question: 'Which sentence sounds most natural?',
    options: [
      'I very much like this movie.',
      'I like very much this movie.',
      'I like this movie very much.',
      'Very much I like this movie.'
    ],
    correctAnswer: 'I like this movie very much.',
    explanation: 'Наречие "very much" обычно ставится в конце предложения.',
  },
  {
    id: 'f2',
    type: 'multiple_choice',
    difficulty: 6,
    targetSkills: ['fluency'],
    question: 'Choose the most natural response to "How\'s it going?"',
    options: [
      'I am fine, thank you, and you?',
      'Not bad, you?',
      'I am going well.',
      'It goes.'
    ],
    correctAnswer: 'Not bad, you?',
    explanation: '"Not bad, you?" — естественный разговорный ответ.',
  },
];

/**
 * Get questions for adaptive test
 * Starts with medium difficulty, adjusts based on answers
 */
export function getAdaptiveQuestions(
  targetCount: number = 20,
  startDifficulty: number = 4
): OnboardingQuestion[] {
  // Group by skill
  const bySkill = new Map<string, OnboardingQuestion[]>();

  for (const q of ONBOARDING_QUESTIONS) {
    for (const skill of q.targetSkills) {
      if (!bySkill.has(skill)) {
        bySkill.set(skill, []);
      }
      bySkill.get(skill)!.push(q);
    }
  }

  // Select questions evenly across skills
  const selected: OnboardingQuestion[] = [];
  const skills = Array.from(bySkill.keys());
  const perSkill = Math.ceil(targetCount / skills.length);

  for (const skill of skills) {
    const questions = bySkill.get(skill)!;
    // Sort by distance from start difficulty
    const sorted = [...questions].sort(
      (a, b) => Math.abs(a.difficulty - startDifficulty) - Math.abs(b.difficulty - startDifficulty)
    );
    selected.push(...sorted.slice(0, perSkill));
  }

  // Shuffle and limit
  return selected
    .sort(() => Math.random() - 0.5)
    .slice(0, targetCount);
}

/**
 * Calculate skill vector from test results
 */
export function calculateSkillVector(
  answers: Array<{ questionId: string; correct: boolean }>
): Record<string, number> {
  const skillScores = new Map<string, { correct: number; total: number; weightedScore: number }>();

  for (const answer of answers) {
    const question = ONBOARDING_QUESTIONS.find(q => q.id === answer.questionId);
    if (!question) continue;

    for (const skill of question.targetSkills) {
      if (!skillScores.has(skill)) {
        skillScores.set(skill, { correct: 0, total: 0, weightedScore: 0 });
      }

      const scores = skillScores.get(skill)!;
      scores.total++;

      if (answer.correct) {
        scores.correct++;
        // Weight by difficulty (harder questions = more points)
        scores.weightedScore += question.difficulty / 10;
      }
    }
  }

  // Convert to 0-1 scale
  const vector: Record<string, number> = {
    grammar: 0.3,
    vocabulary: 0.3,
    pronunciation: 0.3,
    listening: 0.3,
    speaking: 0.3,
    slang: 0.3,
    word_formation: 0.3,
    fluency: 0.3,
    writing: 0.3,
    comprehension: 0.3,
  };

  for (const [skill, scores] of skillScores) {
    if (scores.total > 0) {
      // Combine accuracy with weighted score
      const accuracy = scores.correct / scores.total;
      const weighted = scores.weightedScore / scores.total;
      vector[skill] = Math.min(0.95, Math.max(0.05, (accuracy * 0.6 + weighted * 0.4)));
    }
  }

  return vector;
}
