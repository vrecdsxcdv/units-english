/**
 * V4.1 Runtime Signals for TutorLoop
 *
 * Unified signals interface that combines fatigue and plateau detection
 * for real-time TutorLoop adaptation during AI-2 message generation.
 */

import type { SkillType } from './skills';
import type { FatigueLevel, FatigueFactor } from './fatigue-detection.types';
import type { PlateauType, InterventionStrategy } from './plateau-detection.types';
import type { TutorLoopStateV3 } from './tutor-loop.types';

/**
 * Unified runtime signals computed before each AI-2 response
 */
export interface RuntimeSignalsV4 {
  // Timestamp when signals were computed
  computedAt: Date;

  // Fatigue signal (if detected)
  fatigue?: RuntimeFatigueSignal;

  // Plateau signal (if detected for current skill focus)
  plateau?: RuntimePlateauSignal;

  // Combined TutorLoop overrides (merged from fatigue + plateau)
  overrides: TutorLoopOverrides;

  // Explainability: why these overrides were applied
  explanation: string[];
}

/**
 * Fatigue signal for runtime
 */
export interface RuntimeFatigueSignal {
  level: FatigueLevel;
  factors: RuntimeFatigueFactor[];
  overrides: Partial<TutorLoopOverrides>;
}

/**
 * Simplified fatigue factor for runtime
 */
export interface RuntimeFatigueFactor {
  type: string;
  value: number;
  note?: string;
}

/**
 * Plateau signal for runtime
 */
export interface RuntimePlateauSignal {
  skill: SkillType;
  plateauType: PlateauType;
  confidence: number; // 0..1
  durationDays: number;
  interventions: InterventionStrategy[];
  overrides: Partial<TutorLoopOverrides>;
}

/**
 * TutorLoop overrides applied before AI-2 message generation
 */
export interface TutorLoopOverrides {
  // === Content Control ===

  /** Block introduction of new concepts (only review existing) */
  blockNewConcepts: boolean;

  /** Maximum difficulty level for tasks (1-10, lower = easier) */
  maxDifficulty: number;

  /** Prefer review content over new content (0.0-1.0, 0.7 = 70% review) */
  reviewToNewRatio: number;

  // === State Control ===

  /** Force a specific TutorLoop state (e.g., REVIEW instead of PRACTICE) */
  forceState?: TutorLoopStateV3;

  /** Skip certain states */
  skipStates: TutorLoopStateV3[];

  // === Format Control ===

  /** Use shorter explanations (1-3 sentences max) */
  shortenTeach: boolean;

  /** Require extra examples in explanations */
  requireExtraExamples: boolean;

  /** Switch to simpler format (examples-first, MCQ instead of free input) */
  switchToSimplerFormat: boolean;

  /** Simplification level (0 = normal, 1-3 = progressive simplification) */
  simplificationLevel: 0 | 1 | 2 | 3;

  // === Task Control ===

  /** Reduce number of tasks (1 instead of 3) */
  reduceTasksCount: boolean;

  /** Maximum number of tasks per PRACTICE state */
  maxTasksPerPractice: number;

  // === Session Control ===

  /** Suggest break to user */
  suggestBreak: boolean;

  /** End session after current task/state */
  endSessionSoon: boolean;

  /** Maximum remaining minutes before suggesting end */
  maxRemainingMinutes: number;

  // === Skill Focus ===

  /** Pronunciation focus (add short phonetics at end) */
  pronunciationFocus: boolean;

  /** Target specific error patterns */
  targetErrorPatterns: string[];

  // === Encouragement ===

  /** Boost encouragement level */
  encouragementBoost: boolean;

  /** Show progress reminders */
  showProgressReminder: boolean;
}

/**
 * Default TutorLoop overrides (no changes)
 */
export const DEFAULT_TUTOR_LOOP_OVERRIDES: TutorLoopOverrides = {
  blockNewConcepts: false,
  maxDifficulty: 10,
  reviewToNewRatio: 0.3,
  forceState: undefined,
  skipStates: [],
  shortenTeach: false,
  requireExtraExamples: false,
  switchToSimplerFormat: false,
  simplificationLevel: 0,
  reduceTasksCount: false,
  maxTasksPerPractice: 3,
  suggestBreak: false,
  endSessionSoon: false,
  maxRemainingMinutes: 60,
  pronunciationFocus: false,
  targetErrorPatterns: [],
  encouragementBoost: false,
  showProgressReminder: false,
};

/**
 * Presets for common override scenarios
 */
export const OVERRIDE_PRESETS = {
  /** Fatigue: High - reduce load significantly */
  FATIGUE_HIGH: {
    blockNewConcepts: true,
    maxDifficulty: 3,
    reviewToNewRatio: 0.9,
    shortenTeach: true,
    reduceTasksCount: true,
    maxTasksPerPractice: 1,
    suggestBreak: true,
    simplificationLevel: 2 as const,
    encouragementBoost: true,
  } satisfies Partial<TutorLoopOverrides>,

  /** Fatigue: Moderate - slight simplification */
  FATIGUE_MODERATE: {
    maxDifficulty: 5,
    reviewToNewRatio: 0.6,
    reduceTasksCount: true,
    maxTasksPerPractice: 2,
    simplificationLevel: 1 as const,
    encouragementBoost: true,
    showProgressReminder: true,
  } satisfies Partial<TutorLoopOverrides>,

  /** Plateau: Stagnation - change format, add variety */
  PLATEAU_STAGNATION: {
    switchToSimplerFormat: true,
    requireExtraExamples: true,
    reviewToNewRatio: 0.5,
    encouragementBoost: true,
    showProgressReminder: true,
  } satisfies Partial<TutorLoopOverrides>,

  /** Plateau: Error Pattern - focus on specific errors */
  PLATEAU_ERROR_PATTERN: {
    blockNewConcepts: true,
    requireExtraExamples: true,
    simplificationLevel: 2 as const,
    reduceTasksCount: true,
    maxTasksPerPractice: 1,
    // targetErrorPatterns will be set dynamically
  } satisfies Partial<TutorLoopOverrides>,

  /** Plateau: Oscillation - stabilize with review */
  PLATEAU_OSCILLATION: {
    blockNewConcepts: true,
    reviewToNewRatio: 0.8,
    maxDifficulty: 4,
    simplificationLevel: 1 as const,
  } satisfies Partial<TutorLoopOverrides>,

  /** Plateau: Effort Mismatch - change approach */
  PLATEAU_EFFORT_MISMATCH: {
    switchToSimplerFormat: true,
    reviewToNewRatio: 0.6,
    encouragementBoost: true,
    showProgressReminder: true,
  } satisfies Partial<TutorLoopOverrides>,
} as const;

/**
 * Configuration for runtime signal computation
 */
export interface RuntimeSignalConfig {
  /** Enable fatigue detection */
  enableFatigueDetection: boolean;

  /** Enable plateau detection */
  enablePlateauDetection: boolean;

  /** Minimum fatigue level to apply overrides */
  minFatigueLevelForOverrides: FatigueLevel;

  /** Minimum plateau confidence to apply overrides */
  minPlateauConfidence: number;

  /** Allow override to force state changes */
  allowStateForcing: boolean;

  /** Log signals for debugging */
  logSignals: boolean;
}

/**
 * Default runtime signal config
 */
export const DEFAULT_RUNTIME_SIGNAL_CONFIG: RuntimeSignalConfig = {
  enableFatigueDetection: true,
  enablePlateauDetection: true,
  minFatigueLevelForOverrides: 'low',
  minPlateauConfidence: 0.6,
  allowStateForcing: true,
  logSignals: true,
};
