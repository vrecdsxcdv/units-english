// Skills & Vectors
export * from './skills';

// User & Auth
export * from './user';

// Tasks & Attempts
export * from './task';
export * from './task-v2';
export * from './attempt';

// Chat & Conversations
export * from './chat';

// Onboarding & Assessment
export * from './onboarding';

// Analytics & Progress
export * from './analytics';

// Media & Audio
export * from './media';

// API utilities
export * from './api';

// Topic Templates
export * from './topic-template';

// Topic Modal (V2)
export * from './topic-modal';

// Teaching Pipeline
export * from './teaching';

// Progress Tracking
export * from './progress';

// Lesson Modal V3 (explicit exports to avoid conflicts)
export {
  LESSON_MODAL_SCHEMA_VERSION,
  LessonModalV3,
  LessonPageV3,
  LessonPageType,
  ContentBlockV3,
  InteractionV3,
  InteractionType,
  InteractionData,
  MCQData,
  FillBlankData,
  InputData,
  MatchData,
  ReorderData,
  SelectErrorData,
  SpeakingData,
  ListeningData,
  WritingData,
  LessonTemplateV3,
  EXAMPLE_LESSON_A1_ARTICLES,
} from './lesson-modal-v3';

// Template V1 - Clean Template Schema
export {
  TEMPLATE_V1_SCHEMA_VERSION,
  TemplateV1,
  TemplatePageV1,
  TemplatePageType,
  TemplateInteractionType,
  TemplateContentType,
  TemplateSelectionV1,
  TemplateLibraryV1,
  TEMPLATE_A1_ARTICLES,
  TEMPLATE_B1_PRESENT_PERFECT,
} from './template-v1';

// ============================================
// V4 - Intelligence & Resilience Layer
// ============================================

// Skill Decay Model
export * from './skill-decay.types';

// Plateau Detection
export * from './plateau-detection.types';

// Learning Outcomes
export * from './learning-outcomes.types';

// Fatigue Detection
export * from './fatigue-detection.types';

// Weekly Reports
export * from './weekly-report.types';

// TutorLoop Types
export * from './tutor-loop.types';

// V4.1 Runtime Signals
export * from './runtime-signals-v4.types';
