import type { SkillDelta, SkillType } from './skills';

/**
 * Task schema version for backward compatibility
 */
export type TaskSchemaVersion = '1.0' | '1.1';

/**
 * Task difficulty level (1-10)
 */
export type TaskDifficulty = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

/**
 * Task status
 */
export type TaskStatus = 'pending' | 'in_progress' | 'completed' | 'skipped' | 'expired';

/**
 * Who generated the task
 */
export type TaskGenerator = 'flash' | 'deep_research' | 'template' | 'openrouter';

/**
 * Media attachment for tasks
 */
export interface MediaAttachment {
  type: 'image' | 'audio' | 'video';
  url: string;
  altText?: string;
  durationSeconds?: number;
}

// ============================================
// TASK CONTENT TYPES
// ============================================

export interface MultipleChoiceContent {
  type: 'multiple_choice';
  question: string;
  options: Array<{
    id: string;
    text: string;
  }>;
  correctOptionId?: string; // Only on backend
  explanation?: string;
  media?: MediaAttachment;
}

export interface FillBlanksContent {
  type: 'fill_blanks';
  text: string; // "The cat {{blank_1}} on the mat"
  blanks: Array<{
    id: string;
    hint?: string;
    correctAnswers?: string[]; // Only on backend
    caseSensitive?: boolean;
  }>;
  wordBank?: string[];
}

export interface MatchPairsContent {
  type: 'match_pairs';
  instruction: string;
  leftItems: Array<{ id: string; text: string; media?: MediaAttachment }>;
  rightItems: Array<{ id: string; text: string; media?: MediaAttachment }>;
  correctPairs?: Array<{ leftId: string; rightId: string }>; // Only on backend
}

export interface ReorderContent {
  type: 'reorder';
  instruction: string;
  items: Array<{ id: string; text: string }>;
  correctOrder?: string[]; // Only on backend
}

export interface SpeakingContent {
  type: 'speaking';
  subtype: 'repeat' | 'describe' | 'respond' | 'read_aloud' | 'free_speech';
  prompt: string;
  referenceText?: string;
  referenceAudioUrl?: string;
  imageUrl?: string;
  context?: string;
  minDurationSeconds?: number;
  maxDurationSeconds?: number;
}

export interface ListeningContent {
  type: 'listening';
  audioUrl: string;
  audioDurationSeconds: number;
  playsAllowed: number; // -1 for unlimited
  question: string;
  answerType: 'multiple_choice' | 'text' | 'fill_blanks';
  answerContent: MultipleChoiceContent | FillBlanksContent;
  transcript?: string;
}

export interface ErrorCorrectionContent {
  type: 'error_correction';
  instruction: string;
  sentence: string;
  errors?: Array<{
    startIndex: number;
    endIndex: number;
    correctText: string;
    errorType: 'grammar' | 'spelling' | 'word_choice' | 'punctuation';
  }>; // Only on backend
}

export interface DialogueContent {
  type: 'dialogue';
  context: string;
  participants: string[];
  turns: Array<{
    speaker: string;
    text?: string;
    isUserTurn: boolean;
    hints?: string[];
    acceptableResponses?: string[]; // Only on backend
  }>;
}

export type TaskContent =
  | MultipleChoiceContent
  | FillBlanksContent
  | MatchPairsContent
  | ReorderContent
  | SpeakingContent
  | ListeningContent
  | ErrorCorrectionContent
  | DialogueContent;

// ============================================
// UI HINTS
// ============================================

export interface UIHints {
  theme?: 'default' | 'minimal' | 'game' | 'exam';
  showProgress?: boolean;
  showTimer?: boolean;
  allowSkip?: boolean;
  allowHint?: boolean;
  animation?: 'none' | 'subtle' | 'playful';
  celebrationLevel?: 'none' | 'simple' | 'confetti';
  layout?: 'single_column' | 'two_column' | 'fullscreen';
  accentColor?: string;
  largeText?: boolean;
  highContrast?: boolean;
}

// ============================================
// EVALUATION
// ============================================

export interface EvaluationRubric {
  type: 'auto' | 'ai' | 'hybrid';
  scoringMethod?: 'exact' | 'partial' | 'semantic';
  partialCredit?: boolean;
  criteria?: Array<{
    name: string;
    weight: number;
    description: string;
  }>;
  skillWeights: Partial<Record<SkillType, number>>;
  feedbackStyle?: 'brief' | 'detailed' | 'encouraging';
}

// ============================================
// MAIN TASK PAYLOAD
// ============================================

export interface TaskPayload {
  id: string;
  templateId: string;
  schemaVersion: TaskSchemaVersion;

  type: SkillType;
  secondaryTypes?: SkillType[];
  difficulty: TaskDifficulty;

  objectives: string[];
  targetSkills: SkillType[];

  content: TaskContent;
  uiHints?: UIHints;
  evaluation: EvaluationRubric;

  expectedTimeSeconds: number;
  timeLimitSeconds?: number;

  createdAt: string;
  generatedBy: TaskGenerator;
}

/**
 * Task entity in database (extends payload with status, etc.)
 */
export interface Task extends TaskPayload {
  userId: string;
  conversationId?: string;
  messageId?: string;

  status: TaskStatus;
  scheduledFor?: string;
  expiresAt?: string;

  updatedAt: string;
}

// ============================================
// TEMPLATE REGISTRY
// ============================================

/**
 * Available task templates (100+ over time)
 */
export const TASK_TEMPLATES = {
  // Multiple Choice variants
  multiple_choice_v1: { supportedTypes: ['grammar', 'vocabulary', 'comprehension'] },
  multiple_choice_image_v1: { supportedTypes: ['vocabulary', 'comprehension'] },

  // Fill Blanks variants
  fill_blanks_v1: { supportedTypes: ['grammar', 'vocabulary', 'word_formation'] },
  fill_blanks_v2: { supportedTypes: ['grammar', 'vocabulary', 'word_formation'] },
  fill_blanks_wordbank_v1: { supportedTypes: ['vocabulary', 'word_formation'] },

  // Match Pairs
  match_pairs_v1: { supportedTypes: ['vocabulary', 'grammar'] },
  match_pairs_image_v1: { supportedTypes: ['vocabulary'] },

  // Reorder
  reorder_sentence_v1: { supportedTypes: ['grammar', 'comprehension'] },
  reorder_paragraph_v1: { supportedTypes: ['comprehension', 'writing'] },

  // Speaking
  speaking_repeat_v1: { supportedTypes: ['pronunciation', 'fluency'] },
  speaking_describe_v1: { supportedTypes: ['speaking', 'fluency', 'vocabulary'] },
  speaking_respond_v1: { supportedTypes: ['speaking', 'fluency', 'comprehension'] },
  speaking_read_aloud_v1: { supportedTypes: ['pronunciation', 'fluency'] },

  // Listening
  listening_comprehension_v1: { supportedTypes: ['listening', 'comprehension'] },
  listening_fill_blanks_v1: { supportedTypes: ['listening', 'vocabulary'] },

  // Error Correction
  error_correction_v1: { supportedTypes: ['grammar', 'writing'] },

  // Dialogue
  dialogue_complete_v1: { supportedTypes: ['speaking', 'comprehension', 'slang'] },
} as const;

export type TaskTemplateId = keyof typeof TASK_TEMPLATES;
