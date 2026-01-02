import type { SkillType, SkillVector, CEFRLevel } from './skills';
import type { LearningGoal } from './user';

/**
 * Assessment status
 */
export type AssessmentStatus = 'in_progress' | 'completed' | 'abandoned';

/**
 * Onboarding question types
 */
export type OnboardingQuestionType =
  | 'multiple_choice'
  | 'fill_blank'
  | 'reorder';

/**
 * Single onboarding question
 */
export interface OnboardingQuestion {
  id: string;
  type: OnboardingQuestionType;
  skillTarget: SkillType;
  difficulty: number; // 1-10

  content: {
    question: string;
    options?: Array<{ id: string; text: string }>;
    blanks?: Array<{ id: string; hint?: string }>;
    items?: Array<{ id: string; text: string }>;
  };
}

/**
 * User's answer to onboarding question
 */
export interface OnboardingAnswer {
  questionId: string;
  answer: {
    selectedOptionId?: string;
    blanks?: Array<{ blankId: string; value: string }>;
    order?: string[];
  };
  timeSpentSeconds: number;
}

/**
 * Assessment entity
 */
export interface Assessment {
  id: string;
  userId: string;
  type: 'onboarding' | 'periodic' | 'placement';
  status: AssessmentStatus;

  questions: OnboardingQuestion[];
  answers: OnboardingAnswer[];
  currentQuestionIndex: number;

  startedAt: string;
  completedAt: string | null;

  rawScore: number | null;
  initialVector: SkillVector | null;
  aiAnalysis: Record<string, unknown> | null;

  createdAt: string;
}

// ============================================
// API TYPES
// ============================================

/**
 * Get onboarding test response
 */
export interface GetOnboardingTestResponse {
  assessmentId: string;
  totalQuestions: number;
  estimatedTimeMinutes: number;
  questions: OnboardingQuestion[];
}

/**
 * Submit answer request
 */
export interface SubmitOnboardingAnswerRequest {
  assessmentId: string;
  questionId: string;
  answer: OnboardingAnswer['answer'];
  timeSpentSeconds: number;
}

/**
 * Submit answer response
 */
export interface SubmitOnboardingAnswerResponse {
  accepted: boolean;
  questionsRemaining: number;
  progressPercent: number;
}

/**
 * Complete onboarding request
 */
export interface CompleteOnboardingRequest {
  assessmentId: string;
  profileData: {
    learningGoal: LearningGoal;
    interests: string[];
    dailyTimeMinutes: number;
  };
}

/**
 * Complete onboarding response
 */
export interface CompleteOnboardingResponse {
  profile: {
    id: string;
    learningGoal: LearningGoal;
    targetLevel: CEFRLevel;
    onboardingCompleted: boolean;
  };
  skillVector: SkillVector & {
    overallLevel: CEFRLevel;
    weakestSkills: SkillType[];
  };
  recommendations: Array<{
    type: string;
    skill: SkillType;
    message: string;
  }>;
}
