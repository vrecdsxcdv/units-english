/**
 * V4 Plateau Detection Types
 *
 * Detects when a user is "stuck" and not progressing.
 * Provides intervention strategies to break through plateaus.
 */

import type { SkillType } from './skills';

/**
 * Plateau detection signal
 */
export interface PlateauSignal {
  // Which skill is plateauing
  skill: SkillType;

  // How long has the plateau lasted
  durationDays: number;

  // How confident we are this is a real plateau (0-1)
  confidence: number;

  // Type of plateau detected
  plateauType: PlateauType;

  // Evidence that led to detection
  evidence: PlateauEvidence;

  // Recommended interventions
  recommendedInterventions: InterventionStrategy[];
}

/**
 * Types of plateau patterns
 */
export type PlateauType =
  | 'stagnation'        // No movement in skill delta
  | 'oscillation'       // Going up/down but not progressing
  | 'error_pattern'     // Repeating same mistakes
  | 'effort_mismatch'   // High effort, low results
  | 'ceiling_effect';   // Near max but can't break through

/**
 * Evidence supporting plateau detection
 */
export interface PlateauEvidence {
  // Skill change metrics
  skillDeltaAvg: number;          // Average daily change
  skillDeltaVariance: number;     // How much it fluctuates

  // Practice metrics
  practiceSessionCount: number;   // Sessions in detection window
  avgSessionDuration: number;     // Minutes per session

  // Error patterns
  repeatingErrors: ErrorPattern[];
  errorRateChange: number;        // Positive = getting worse

  // Effort metrics
  effortScore: number;            // Calculated effort (0-1)
  resultScore: number;            // Calculated results (0-1)
  effortResultRatio: number;      // High = lots of effort, little result
}

/**
 * Repeating error pattern
 */
export interface ErrorPattern {
  patternId: string;
  description: string;
  occurrences: number;
  lastOccurrence: string;         // ISO date
  affectedTopics: string[];
}

/**
 * Intervention strategy to break plateau
 */
export interface InterventionStrategy {
  type: InterventionType;
  priority: number;               // 1-10, higher = try first
  description: string;
  expectedImpact: 'low' | 'medium' | 'high';

  // How to apply in TutorLoop
  tutorLoopModifications: TutorLoopModification;
}

/**
 * Types of interventions
 */
export type InterventionType =
  | 'change_format'       // Switch teaching style
  | 'simplify'            // Break down to basics
  | 'review_only'         // No new content, just review
  | 'switch_skill'        // Temporarily work on different skill
  | 'increase_practice'   // More practice, less theory
  | 'decrease_difficulty' // Easier tasks
  | 'gamify'              // Add game elements
  | 'real_world'          // More practical examples
  | 'peer_compare'        // Show progress vs others
  | 'micro_goals';        // Smaller achievable targets

/**
 * How intervention affects TutorLoop
 */
export interface TutorLoopModification {
  // Format changes
  preferExamplesFirst: boolean;
  preferPracticeFirst: boolean;
  maxNewConcepts: number;
  skipWarmup: boolean;

  // Content changes
  simplificationLevel: 0 | 1 | 2 | 3;  // 0 = normal, 3 = maximum simplify
  reviewWeight: number;                // 0-1, how much to emphasize review
  practiceWeight: number;              // 0-1, how much practice vs theory

  // Session changes
  sessionLengthModifier: number;       // 0.5 = half length, 2 = double
  breakFrequency: 'none' | 'normal' | 'frequent';

  // Motivation
  encouragementLevel: 'low' | 'normal' | 'high';
  showProgressIndicators: boolean;
}

/**
 * Plateau detection configuration
 */
export interface PlateauDetectionConfig {
  // Detection window
  windowDays: number;             // How many days to analyze (default: 14)
  minDataPoints: number;          // Minimum practices to detect (default: 5)

  // Thresholds
  stagnationThreshold: number;    // Max delta to consider stagnant (default: 0.02)
  oscillationThreshold: number;   // Variance threshold (default: 0.03)
  effortMismatchRatio: number;    // Min effort/result ratio (default: 2.0)

  // Confidence requirements
  minConfidence: number;          // Min confidence to report (default: 0.6)

  // Error pattern detection
  minErrorRepetitions: number;    // Times to repeat before pattern (default: 3)
}

/**
 * Default plateau detection config
 */
export const DEFAULT_PLATEAU_CONFIG: PlateauDetectionConfig = {
  windowDays: 14,
  minDataPoints: 5,
  stagnationThreshold: 0.02,
  oscillationThreshold: 0.03,
  effortMismatchRatio: 2.0,
  minConfidence: 0.6,
  minErrorRepetitions: 3,
};

/**
 * Plateau detection result for a user
 */
export interface PlateauAnalysis {
  userId: string;
  analyzedAt: string;             // ISO timestamp
  windowStart: string;            // ISO date
  windowEnd: string;              // ISO date

  // Detected plateaus
  detectedPlateaus: PlateauSignal[];

  // Overall health
  overallLearningHealth: 'healthy' | 'slowing' | 'plateau' | 'declining';
  healthScore: number;            // 0-100

  // Action items
  urgentInterventions: InterventionStrategy[];
  suggestedFocus: SkillType[];
}

/**
 * Practice session data for plateau detection
 */
export interface PracticeSession {
  date: string;                   // ISO date
  skillType: SkillType;
  durationMinutes: number;
  tasksAttempted: number;
  tasksCorrect: number;
  skillBefore: number;
  skillAfter: number;
  errorsDetailed: SessionError[];
}

/**
 * Error within a session
 */
export interface SessionError {
  taskId: string;
  errorType: string;              // e.g., "verb_tense", "article_usage"
  errorDescription: string;
  attemptNumber: number;
  wasEventuallyCorrect: boolean;
}
