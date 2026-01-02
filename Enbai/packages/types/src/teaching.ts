/**
 * Teaching Pipeline Types
 *
 * Strict teaching system with state machine, intent routing,
 * and structured lesson modals.
 */

import type { SkillType, SkillVector, CEFRLevel, SkillDelta } from './skills';
import type { TaskContent, EvaluationRubric } from './task';

// ============================================
// TEACHING STATE MACHINE
// ============================================

/**
 * Teaching states - strict progression
 */
export type TeachingState =
  | 'INTRO'        // First contact, establish rapport
  | 'DIAGNOSE'     // Identify what to teach
  | 'EXPLAIN'      // Micro-lesson delivery
  | 'CHECK'        // Understanding check (1-2 questions)
  | 'PRACTICE'     // Guided exercises
  | 'FEEDBACK'     // Review attempt, provide feedback
  | 'REVIEW'       // Summary and next steps
  | 'NEXT'         // Transition to next topic
  | 'FREE_CHAT';   // Off-topic conversation (limited)

/**
 * Intent classification for routing
 */
export type UserIntent =
  | 'teach'           // Continue/start teaching
  | 'assess'          // User submitted answer for evaluation
  | 'clarify'         // User asks for clarification
  | 'simplify'        // User says "don't understand"
  | 'skip'            // User wants to skip current topic
  | 'repair'          // User says "go back", "reset", "wrong"
  | 'off_topic'       // Unrelated conversation
  | 'greeting'        // Hello, hi, etc.
  | 'farewell';       // Goodbye, end session

/**
 * Conversation state tracking
 */
export interface ConversationState {
  currentState: TeachingState;
  previousState?: TeachingState;

  // Topic tracking
  currentMicroTopic?: string;
  currentSkillFocus?: SkillType;
  topicsCompletedThisSession: string[];

  // Progress within current topic
  explanationGiven: boolean;
  checkAttempts: number;
  practiceAttempts: number;

  // Error tracking
  consecutiveErrors: number;
  simplificationLevel: 0 | 1 | 2; // 0=normal, 1=simpler, 2=very simple

  // Timestamps
  stateEnteredAt: string;
  lastInteractionAt: string;
}

// ============================================
// TOPIC TEMPLATE SYSTEM
// ============================================

/**
 * Clean topic template - content-agnostic blueprint
 * Named TeachingTopicTemplate to avoid conflict with topic-template.ts
 */
export interface TeachingTopicTemplate {
  id: string;
  name: string;
  nameRu: string;
  description: string;

  // Skill mapping
  primarySkill: SkillType;
  secondarySkills: SkillType[];

  // Level constraints
  applicableLevels: CEFRLevel[];
  minDifficulty: number; // 1-10
  maxDifficulty: number;

  // IELTS mapping (optional)
  ieltsComponents?: ('listening' | 'reading' | 'writing' | 'speaking')[];

  // Content placeholders
  contentPlaceholders: {
    examples: string[];        // {{example_1}}, {{example_2}}
    misconceptions: string[];  // Common mistakes
    interestHooks: string[];   // {{interest_hook}}
    practicePrompts: string[]; // For exercises
  };

  // Page structure
  defaultPages: TopicPageTemplate[];

  // Prerequisites
  prerequisites: string[]; // Topic IDs

  // Metadata
  estimatedMinutes: number;
  version: string;
  tags: string[];
}

/**
 * Page template within topic
 */
export interface TopicPageTemplate {
  pageType: 'hook' | 'explain' | 'check' | 'practice' | 'mistakes' | 'summary';
  titleTemplate: string;
  titleTemplateRu: string;

  contentBlocks: ContentBlockTemplate[];
  interactions?: InteractionTemplate[];

  // Adaptive rules
  skipIfScore?: number;    // Skip if check score >= this
  repeatIfScore?: number;  // Repeat if score < this
}

/**
 * Content block template
 */
export interface ContentBlockTemplate {
  type: 'text' | 'example' | 'rule' | 'comparison' | 'tip' | 'warning';
  placeholder: string;     // Key for AI to fill
  maxLength?: number;
  requiresRussian: boolean;
}

/**
 * Interaction template (exercises, checks)
 */
export interface InteractionTemplate {
  kind: 'mcq' | 'input' | 'fill_blank' | 'speaking' | 'listening' | 'writing' | 'match';
  promptPlaceholder: string;
  targetSkills: SkillType[];
  difficultyRange: [number, number];
  timeSeconds?: number;
}

// ============================================
// LESSON MODAL (Generated from Template)
// ============================================

/**
 * Complete lesson modal - UI-ready structure
 */
export interface LessonModal {
  id: string;
  templateId: string;

  // Metadata
  title: string;
  titleRu: string;
  cefrLevel: CEFRLevel;
  targetSkills: SkillType[];
  ieltsComponents?: string[];
  estimatedMinutes: number;

  // Content pages (3-7)
  pages: LessonPage[];

  // Progress
  currentPageIndex: number;
  completedPages: number[];

  // Evaluation
  evaluationRubric: LessonEvaluationRubric;

  // Generated metadata
  generatedAt: string;
  generatedFor: string; // userId
  personalizedFor: {
    interests: string[];
    weakSkills: SkillType[];
    recentErrors: string[];
  };
}

/**
 * Single page in lesson modal
 */
export interface LessonPage {
  pageIndex: number;
  pageId: string;
  type: 'hook' | 'explain' | 'check' | 'practice' | 'mistakes' | 'summary';

  title: string;
  titleRu: string;

  // Content blocks
  contentBlocks: TeachingContentBlock[];

  // Interactions (if any)
  interactions: Interaction[];

  // Page-level hints
  hints: string[];

  // Completion criteria
  successCriteria: {
    minScore: number;
    requiredInteractionsCorrect: number;
    allowRetry: boolean;
    maxRetries: number;
  };

  // State
  completed: boolean;
  score?: number;
  attemptCount: number;
}

/**
 * Content block - actual content
 * Named TeachingContentBlock to avoid conflict with topic-template.ts
 */
export interface TeachingContentBlock {
  type: 'text' | 'example' | 'rule' | 'comparison' | 'tip' | 'warning';

  // Main content
  content: string;
  contentRu?: string;

  // For examples
  english?: string;
  russian?: string;
  highlight?: string;
  context?: string;

  // For rules
  rule?: string;
  ruleRu?: string;
  exceptions?: string[];

  // For comparisons
  items?: Array<{
    term: string;
    description: string;
    example: string;
  }>;

  // For tips/warnings
  icon?: 'info' | 'warning' | 'lightbulb' | 'star';
}

/**
 * Interactive element
 */
export interface Interaction {
  interactionId: string;
  kind: 'mcq' | 'input' | 'fill_blank' | 'speaking' | 'listening' | 'writing' | 'match';

  // Prompt
  prompt: string;
  promptRu?: string;

  // Content varies by kind
  content: TaskContent;

  // Expected answer (for auto-check)
  expectedAnswer?: string | string[];
  acceptableVariants?: string[];

  // Evaluation
  rubric: EvaluationRubric;
  targetSkills: SkillType[];
  difficulty: number;

  // Hints
  hints: string[];

  // State
  attempted: boolean;
  userAnswer?: unknown;
  score?: number;
  feedback?: string;
}

/**
 * Lesson-level evaluation
 */
export interface LessonEvaluationRubric {
  passingScore: number;
  skillWeights: Partial<Record<SkillType, number>>;
  bonusForSpeed: boolean;
  penaltyForHints: boolean;
}

// ============================================
// AI RESPONSE FORMAT
// ============================================

/**
 * Structured AI response (always returned)
 */
export interface TeachingResponse {
  // Text for UI display
  replyText: string;
  replyTextRu?: string;

  // Current state
  currentState: TeachingState;
  nextState?: TeachingState;

  // Lesson data (if teaching)
  lesson?: LessonModal;
  currentPage?: LessonPage;

  // Skill updates (if assessment)
  skillUpdates?: SkillDelta;

  // Next focus recommendation
  nextFocus?: {
    skills: SkillType[];
    reason: string;
    suggestedTemplates: string[];
  };

  // Memory hints for persistence
  memoryHints?: {
    recentErrorsToTrack: string[];
    vocabToAdd: string[];
    pronunciationFocus: string[];
    conceptsToReview: string[];
  };

  // Debug info (optional)
  debug?: {
    intentDetected: UserIntent;
    modelUsed: string;
    templateSelected?: string;
    skillVectorSnapshot: SkillVector;
  };
}

// ============================================
// TEACHING CONTEXT
// ============================================

/**
 * Full context passed to AI
 */
export interface TeachingContext {
  // User profile
  userId: string;
  skillVector: SkillVector;
  cefrLevel: CEFRLevel;
  learningAbility: number;

  // Goals
  learningGoal?: string;
  targetIELTSBand?: number;

  // Preferences
  interests: string[];
  dailyTimeMinutes: number;
  preferredDifficulty?: number;

  // Session state
  tasksCompletedToday: number;
  streak: number;
  timeRemainingMinutes: number;

  // Error history
  recentErrors: string[];
  conceptsToReview: string[];

  // Current conversation
  conversationState: ConversationState;

  // Current lesson (if active)
  activeLessonId?: string;
  currentMicroTopic?: MicroTopic;

  // Calculated
  weakestSkills: SkillType[];
  strongestSkills: SkillType[];
}

/**
 * Micro-topic for focused teaching
 */
export interface MicroTopic {
  id: string;
  name: string;
  nameRu: string;
  parentSkill: SkillType;

  // Complexity
  difficulty: number;
  prerequisites: string[];

  // Content summary
  keyPoints: string[];
  commonMistakes: string[];
  examples: string[];
}

// ============================================
// INTENT DETECTION
// ============================================

/**
 * Intent detection result
 */
export interface IntentDetectionResult {
  intent: UserIntent;
  confidence: number;

  // For assess intent
  taskId?: string;
  userAnswer?: unknown;

  // For clarify/simplify
  targetConcept?: string;

  // For repair
  repairTarget?: 'topic' | 'lesson' | 'conversation';
}

// ============================================
// EVALUATION RESULT
// ============================================

/**
 * Detailed evaluation from R1 model
 */
export interface DetailedEvaluation {
  // Basic result
  isCorrect: boolean;
  score: number;
  partialCredit: boolean;

  // Feedback
  feedback: {
    positive: string;
    correction?: string;
    tip?: string;
  };

  // Error analysis
  errors: Array<{
    type: 'grammar' | 'vocabulary' | 'spelling' | 'logic' | 'pronunciation';
    what: string;
    why: string;
    correct: string;
    severity: 'minor' | 'moderate' | 'major';
  }>;

  // Skill impact
  skillDeltas: SkillDelta;

  // Learning recommendations
  conceptsToReview: string[];
  suggestedPractice: string[];

  // Confidence in evaluation
  confidence: number;
}

// ============================================
// STATE TRANSITIONS
// ============================================

/**
 * Valid state transitions
 */
export const STATE_TRANSITIONS: Record<TeachingState, TeachingState[]> = {
  // INTRO can go directly to EXPLAIN if AI introduces + picks topic in one message
  INTRO: ['DIAGNOSE', 'EXPLAIN', 'FREE_CHAT'],
  DIAGNOSE: ['EXPLAIN', 'PRACTICE', 'FREE_CHAT'],
  // EXPLAIN can go to CHECK or directly to PRACTICE for quick learners
  EXPLAIN: ['CHECK', 'PRACTICE', 'REVIEW'],
  CHECK: ['EXPLAIN', 'PRACTICE', 'REVIEW'], // Back to explain if failed
  PRACTICE: ['FEEDBACK'],
  FEEDBACK: ['PRACTICE', 'REVIEW', 'EXPLAIN'], // Loop or advance
  REVIEW: ['NEXT', 'DIAGNOSE'],
  NEXT: ['DIAGNOSE', 'INTRO'],
  FREE_CHAT: ['DIAGNOSE', 'INTRO'],
};

/**
 * Check if transition is valid
 */
export function isValidTransition(from: TeachingState, to: TeachingState): boolean {
  return STATE_TRANSITIONS[from]?.includes(to) ?? false;
}
