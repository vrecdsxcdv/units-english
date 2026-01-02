/**
 * Topic Modal Schema V2
 *
 * JSON schema for AI-generated learning modals (3-7 pages).
 * Designed for frontend rendering with full type safety.
 */

import type { SkillType, CEFRLevel } from './skills';

// Schema version
export const TOPIC_MODAL_SCHEMA_VERSION = '2.0';

// ============================================
// MAIN TOPIC MODAL INTERFACE
// ============================================

export interface TopicModal {
  // Identity
  type: 'topic_modal';
  topicId: string;
  templateId: string;
  schemaVersion: string;

  // Metadata
  title: string;           // English title
  titleRu: string;         // Russian title
  description?: string;    // Brief description

  // Learning context
  cefrLevel: CEFRLevel;
  ielts?: {
    bandTarget: number;      // e.g., 6.0, 6.5, 7.0
    skills: ('listening' | 'reading' | 'writing' | 'speaking')[];
  };
  targetSkills: SkillType[];

  // Content
  pages: TopicModalPage[];

  // Timing
  estimatedMinutes: number;
  difficulty: number;        // 0.0 - 1.0 (for skill vector)

  // Generation metadata
  generatedAt: string;
  generatedFor: string;      // userId
  personalizedFor: {
    interests: string[];
    weakSkills: SkillType[];
    recentErrors: string[];
  };

  // Progress (runtime)
  currentPageIndex: number;
  completedPages: number[];
  totalScore?: number;
  skillScores?: Partial<Record<SkillType, number>>;
}

// ============================================
// PAGE TYPES
// ============================================

export type TopicModalPageType =
  | 'hook'        // Engaging intro (fact, situation, challenge)
  | 'explain'     // Main explanation with examples
  | 'check'       // Understanding check (1-3 questions)
  | 'practice'    // Exercises and drills
  | 'mistakes'    // Common mistakes to avoid
  | 'summary';    // Wrap-up and next steps

export interface TopicModalPage {
  pageIndex: number;
  pageId: string;
  type: TopicModalPageType;

  // Display
  title: string;
  titleRu: string;

  // Content
  contentBlocks: TopicModalContentBlock[];

  // Interactive elements
  interactions: TopicModalInteraction[];

  // Hints for stuck users
  hints: string[];

  // Completion criteria
  successCriteria?: {
    minScore: number;
    requiredCorrect: number;
    allowRetry: boolean;
    maxRetries: number;
  };

  // Runtime state
  completed: boolean;
  score?: number;
  attemptCount: number;
}

// ============================================
// CONTENT BLOCKS
// ============================================

export type ModalContentBlockType =
  | 'text'        // Plain text explanation
  | 'example'     // Example sentence with translation
  | 'rule'        // Grammar/usage rule
  | 'comparison'  // Before/after, correct/incorrect
  | 'tip'         // Helpful tip
  | 'warning'     // Common mistake warning
  | 'table'       // Structured data (conjugations, etc)
  | 'audio';      // Audio content (TTS)

export interface TopicModalContentBlock {
  type: ModalContentBlockType;

  // Main content
  content: string;
  contentRu?: string;

  // For 'example' type
  english?: string;
  russian?: string;
  highlight?: string;     // Word/phrase to highlight
  context?: string;       // Usage context

  // For 'rule' type
  rule?: string;
  ruleRu?: string;
  exceptions?: string[];

  // For 'comparison' type
  items?: Array<{
    label: string;
    correct?: string;
    incorrect?: string;
    explanation?: string;
  }>;

  // For 'table' type
  tableData?: {
    headers: string[];
    rows: string[][];
  };

  // For 'tip' and 'warning' types
  icon?: 'info' | 'warning' | 'lightbulb' | 'star' | 'check' | 'x';
}

// ============================================
// INTERACTIONS
// ============================================

export type InteractionKind =
  | 'mcq'           // Multiple choice question
  | 'fill_blank'    // Fill in the blank(s)
  | 'input'         // Free text input
  | 'match'         // Match pairs
  | 'reorder'       // Reorder items
  | 'speaking'      // Voice recording
  | 'listening'     // Listen and answer
  | 'writing';      // Short writing task

export interface TopicModalInteraction {
  interactionId: string;
  kind: InteractionKind;

  // Prompt
  prompt: string;
  promptRu?: string;

  // Content (structure depends on kind)
  content: InteractionContent;

  // Evaluation
  expectedAnswer?: string | string[];
  acceptableVariants?: string[];
  rubric?: {
    autoCheck: boolean;
    partialCredit: boolean;
    caseSensitive: boolean;
  };

  // Metadata
  targetSkills: SkillType[];
  difficulty: number;        // 1-10

  // Hints
  hints: string[];

  // Runtime state
  attempted: boolean;
  userAnswer?: unknown;
  score?: number;
  feedback?: string;
}

// ============================================
// INTERACTION CONTENT TYPES
// ============================================

export type InteractionContent =
  | MCQContent
  | FillBlankContent
  | InputContent
  | MatchContent
  | ModalReorderContent
  | ModalSpeakingContent
  | ModalListeningContent
  | WritingContent;

export interface MCQContent {
  question: string;
  questionRu?: string;
  options: string[];
  optionsRu?: string[];
  correctIndex: number;
  explanation?: string;
  explanationRu?: string;
}

export interface FillBlankContent {
  sentence: string;
  sentenceRu?: string;
  blanks: Array<{
    index: number;         // Position in sentence (for ___)
    answer: string;
    alternatives?: string[];
  }>;
}

export interface InputContent {
  question: string;
  questionRu?: string;
  expectedAnswer: string;
  alternatives?: string[];
  placeholder?: string;
}

export interface MatchContent {
  leftItems: string[];
  rightItems: string[];
  correctPairs: [number, number][];  // [leftIndex, rightIndex]
}

export interface ModalReorderContent {
  items: string[];
  correctOrder: number[];
}

export interface ModalSpeakingContent {
  promptText: string;
  promptTextRu?: string;
  referenceAudio?: string;     // URL
  expectedKeyPhrases?: string[];
  maxDurationSeconds: number;
}

export interface ModalListeningContent {
  audioUrl: string;
  transcript?: string;
  questions: MCQContent[];
}

export interface WritingContent {
  promptText: string;
  promptTextRu?: string;
  minWords: number;
  maxWords: number;
  keyPhrases?: string[];      // Should be included
  rubric: {
    grammar: number;
    vocabulary: number;
    coherence: number;
  };
}

// ============================================
// TOPIC SELECTION TYPES
// ============================================

export interface TopicSelectionInput {
  skillVector: Record<SkillType, number>;
  recentErrors: string[];
  streak: number;
  dailyTimeMinutes: number;
  tasksCompletedToday: number;
  interests: string[];
  cefrLevel: CEFRLevel;
  targetIELTSBand?: number;
  recentTopicIds: string[];    // To avoid repetition
}

export interface TopicSelectionResult {
  templateId: string;
  topicName: string;
  priority: number;
  reason: string;
  teaser: string;             // Short hook to show user
  estimatedMinutes: number;
  targetSkills: SkillType[];
}

// ============================================
// TOPIC TEMPLATE (for migration)
// ============================================

export interface TopicTemplateV2 {
  id: string;
  schemaVersion: string;

  // Identity
  name: string;
  nameRu: string;
  description: string;
  descriptionRu: string;

  // Category and tags
  category: string;           // e.g., "grammar", "vocabulary", "ielts"
  tags: string[];             // e.g., ["articles", "a-an-the", "determiners"]

  // Skill mapping
  primarySkill: SkillType;
  secondarySkills: SkillType[];

  // Level constraints
  applicableLevels: CEFRLevel[];
  difficultyRange: [number, number];  // [min, max] 1-10

  // IELTS mapping
  ieltsComponents?: ('listening' | 'reading' | 'writing' | 'speaking')[];
  ieltsBandRange?: [number, number];

  // Content placeholders (AI fills these)
  placeholders: {
    // Example slots
    example_1: string;        // Description of what to generate
    example_2: string;
    example_3?: string;

    // Hook options
    hook_fact: string;
    hook_situation: string;
    hook_challenge: string;

    // Error patterns to address
    common_errors: string[];

    // Interest-based examples
    interest_hooks: string[];
  };

  // Page structure
  defaultPages: ModalPageTemplate[];

  // Prerequisites
  prerequisites: string[];    // Template IDs

  // Selection criteria
  selectionCriteria: {
    weaknessThreshold: number;    // Select if skill < this
    errorTopics: string[];        // Select if recent errors match
    interestBoost: string[];      // Boost if interests match
    cooldownDays: number;         // Don't repeat within X days
  };

  // Timing
  estimatedMinutes: number;

  // Versioning
  version: string;
  createdAt: string;
  updatedAt: string;
}

export interface ModalPageTemplate {
  pageType: TopicModalPageType;
  titleTemplate: string;
  titleTemplateRu: string;

  contentBlockTemplates: Array<{
    type: ModalContentBlockType;
    placeholder: string;        // Key for AI to fill
    maxLength?: number;
    required: boolean;
  }>;

  interactionTemplates: Array<{
    kind: InteractionKind;
    promptPlaceholder: string;
    difficultyRange: [number, number];
    count: number;
  }>;

  // Adaptive rules
  skipIfScore?: number;        // Skip if previous page score >= this
  repeatIfScore?: number;      // Repeat if score < this
}
