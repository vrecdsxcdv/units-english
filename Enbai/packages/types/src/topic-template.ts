/**
 * Topic Template System
 *
 * Templates for AI-driven learning topics.
 * Each topic opens as a modal with 3-7 pages.
 */

import type { SkillKey } from './task-v2';
import type { CEFRLevel } from './skills';

// Schema version for backwards compatibility
export const TOPIC_TEMPLATE_SCHEMA_VERSION = '1.0';

// IELTS focus areas
export type IELTSFocus = 'listening' | 'reading' | 'writing' | 'speaking' | 'none';

// Page types
export type PageType =
  | 'explanation'  // Объяснение концепции
  | 'example'      // Примеры использования
  | 'drill'        // Тренировочные упражнения
  | 'use'          // Применение в контексте
  | 'test'         // Проверка понимания
  | 'reflection';  // Рефлексия и закрепление

// Exercise types available in pages
export type ExerciseType =
  | 'multiple_choice'
  | 'fill_gap'
  | 'rewrite'
  | 'speaking_prompt'
  | 'mini_dialogue'
  | 'writing_task'
  | 'matching'
  | 'ordering'
  | 'error_correction'
  | 'translation'
  | 'listen_and_repeat'
  | 'record_and_compare';

// Content block types
export type ContentBlockType =
  | 'text'           // Plain text explanation
  | 'rule'           // Grammar/usage rule
  | 'tip'            // Helpful tip
  | 'warning'        // Common mistake warning
  | 'example'        // Example sentence/dialogue
  | 'comparison'     // Before/after or correct/incorrect
  | 'table'          // Structured data (conjugation, etc)
  | 'audio'          // Audio content (TTS generated)
  | 'image_prompt';  // Placeholder for image

// Content block definition
export interface ContentBlock {
  type: ContentBlockType;
  placeholder: string;  // What AI should generate here
  required: boolean;
  maxLength?: number;   // Character limit
}

// Exercise definition in page
export interface PageExercise {
  type: ExerciseType;
  count: number;        // How many of this type
  difficulty: 'adaptive' | 'fixed';
  placeholder: string;  // What AI should generate
}

// Evaluation criteria
export interface PageEvaluation {
  autoCheck: boolean;
  skillsMeasured: SkillKey[];
  typicalErrors: string[];  // Categories of errors to watch for
  passingScore: number;     // 0-1, what counts as "passed"
}

// Exit criteria for page
export interface ExitCriteria {
  type: 'score' | 'completion' | 'time' | 'attempts';
  value: number;
  description: string;
}

// Page template
export interface PageTemplate {
  pageId: string;
  type: PageType;
  title: string;           // Display title (can have {placeholders})
  goal: string;            // What student should achieve
  targetSkills: SkillKey[];
  estimatedMinutes: number;

  contentBlocks: ContentBlock[];
  exercises: PageExercise[];
  evaluation: PageEvaluation;
  exitCriteria: ExitCriteria;

  // Optional hints/scaffolding
  hintsAvailable: boolean;
  maxHints: number;
}

// When to use this template (selection criteria)
export interface SelectionCriteria {
  // Skill conditions
  skillConditions?: {
    skill: SkillKey;
    condition: 'below' | 'above' | 'between';
    value: number | [number, number];
  }[];

  // Recent errors in these areas trigger this template
  recentErrorTopics?: string[];

  // Streak conditions
  streakMin?: number;
  streakMax?: number;

  // Time since last practice of this skill
  daysSinceSkillPractice?: {
    skill: SkillKey;
    minDays: number;
  };

  // User interests boost
  interestBoost?: string[];  // If user has these interests, prefer this template

  // Time of day preference
  preferredTimeOfDay?: 'morning' | 'afternoon' | 'evening' | 'any';

  // Session context
  sessionPosition?: 'start' | 'middle' | 'end' | 'any';
}

// Main Topic Template interface
export interface TopicTemplate {
  // Identity
  id: string;              // Unique slug
  schemaVersion: string;

  // Metadata
  name: string;
  description: string;     // 1-2 sentences
  icon: string;            // Emoji or icon name
  category: string;        // For grouping

  // CEFR & IELTS
  applicableCEFR: CEFRLevel[];
  ieltsFocus: IELTSFocus;

  // Skills
  primarySkills: SkillKey[];    // 1-3 main skills
  secondarySkills: SkillKey[];  // 0-3 supporting skills

  // Selection
  whenToUse: SelectionCriteria;
  priority: number;        // Higher = more likely to be selected (1-10)
  cooldownDays: number;    // Don't repeat this template within X days

  // Structure
  estimatedTotalMinutes: { min: number; max: number };
  pages: PageTemplate[];

  // AI generation hints
  contentGuidelines: {
    tone: 'casual' | 'neutral' | 'formal';
    useUserInterests: boolean;
    exampleStyle: 'realistic' | 'fun' | 'professional';
    difficultyAdaptation: 'strict' | 'flexible';
  };

  // Versioning
  version: string;
  createdAt: string;
  updatedAt: string;
}

// Generated topic (template filled with content)
export interface GeneratedTopic {
  id: string;
  templateId: string;
  userId: string;

  // Personalization context
  userLevel: CEFRLevel;
  userInterests: string[];
  targetSkills: SkillKey[];

  // Generated content
  title: string;
  pages: GeneratedPage[];

  // Progress
  currentPageIndex: number;
  completedPages: number[];
  startedAt: string;
  completedAt?: string;

  // Results
  totalScore: number;
  skillScores: Partial<Record<SkillKey, number>>;
  timeSpentMinutes: number;
}

// Generated page (page template filled with content)
export interface GeneratedPage {
  pageId: string;
  templatePageId: string;

  title: string;
  content: GeneratedContentBlock[];
  exercises: GeneratedExercise[];

  // Progress
  completed: boolean;
  score?: number;
  attempts: number;
  hintsUsed: number;
  timeSpentSeconds: number;
}

// Generated content block
export interface GeneratedContentBlock {
  type: ContentBlockType;
  content: string;
  metadata?: Record<string, unknown>;
}

// Generated exercise
export interface GeneratedExercise {
  id: string;
  type: ExerciseType;
  instruction: string;
  content: unknown;  // Type depends on exercise type
  correctAnswer: unknown;
  explanation: string;
  userAnswer?: unknown;
  isCorrect?: boolean;
  score?: number;
}
