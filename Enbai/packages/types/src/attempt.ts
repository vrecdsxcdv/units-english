import type { SkillDelta, SkillType } from './skills';

// ============================================
// USER ANSWERS
// ============================================

export interface MultipleChoiceAnswer {
  type: 'multiple_choice';
  selectedOptionId: string;
}

export interface FillBlanksAnswer {
  type: 'fill_blanks';
  blanks: Array<{
    blankId: string;
    value: string;
  }>;
}

export interface MatchPairsAnswer {
  type: 'match_pairs';
  pairs: Array<{
    leftId: string;
    rightId: string;
  }>;
}

export interface ReorderAnswer {
  type: 'reorder';
  order: string[];
}

export interface SpeakingAnswer {
  type: 'speaking';
  audioSubmissionId: string;
  transcription?: string;
}

export interface ErrorCorrectionAnswer {
  type: 'error_correction';
  corrections: Array<{
    startIndex: number;
    endIndex: number;
    replacement: string;
  }>;
}

export interface DialogueAnswer {
  type: 'dialogue';
  responses: Array<{
    turnIndex: number;
    text: string;
  }>;
}

export type UserAnswer =
  | MultipleChoiceAnswer
  | FillBlanksAnswer
  | MatchPairsAnswer
  | ReorderAnswer
  | SpeakingAnswer
  | ErrorCorrectionAnswer
  | DialogueAnswer;

// ============================================
// ATTEMPT RESULT
// ============================================

export interface Mistake {
  type: string;
  description: string;
  location?: string;
  correction?: string;
  severity: 'minor' | 'moderate' | 'major';
}

export interface PronunciationDetails {
  overallScore: number;
  phonemeScores?: Array<{
    phoneme: string;
    expected: string;
    actual: string;
    score: number;
  }>;
  fluencyScore?: number;
  intonationScore?: number;
}

export interface AttemptResult {
  isCorrect: boolean;
  score: number; // 0.0 - 1.0

  feedback: string;
  mistakes?: Mistake[];

  skillDeltas: SkillDelta;

  encouragement?: string;
  hint?: string;

  pronunciationDetails?: PronunciationDetails;
}

// ============================================
// TASK ATTEMPT
// ============================================

export interface TaskAttempt {
  id: string;
  taskId: string;
  userId: string;

  answer: UserAnswer;

  audioSubmission?: {
    id: string;
    url: string;
    durationSeconds: number;
  };

  startedAt: string;
  submittedAt: string;
  timeSpentSeconds: number;

  result?: AttemptResult;
}

// ============================================
// API TYPES
// ============================================

export interface SubmitTaskRequest {
  answer: UserAnswer;
  timeSpentSeconds: number;
}

export interface SubmitTaskResponse {
  attemptId: string;
  result: AttemptResult;
  updatedSkillVector?: {
    [K in SkillType]?: number;
  };
  nextRecommendation?: {
    type: 'continue' | 'rest' | 'specific_task';
    message: string;
    taskId?: string;
  };
}

export interface GenerateTaskRequest {
  targetSkill?: SkillType | 'auto';
  difficulty?: number | 'auto';
  preferredType?: string;
  topic?: string;
}
