/**
 * V4 Fatigue/Cognitive Load Detection Types
 *
 * Detects when user is overloaded and needs rest/simplification.
 */

import type { SkillType } from './skills';

/**
 * Fatigue signal from detector
 */
export interface FatigueSignal {
  // Overall fatigue level
  fatigueLevel: FatigueLevel;

  // Confidence in detection (0-1)
  confidence: number;

  // Contributing factors
  factors: FatigueFactor[];

  // How the signal evolved over session
  trend: 'increasing' | 'stable' | 'decreasing';

  // Recommended action
  recommendation: FatigueRecommendation;
}

/**
 * Fatigue levels
 */
export type FatigueLevel =
  | 'none'        // 0-20%: Fresh, engaged
  | 'low'         // 20-40%: Slight tiredness, can continue
  | 'moderate'    // 40-60%: Noticeable fatigue, consider break
  | 'high'        // 60-80%: Significant fatigue, simplify tasks
  | 'critical';   // 80-100%: Stop, needs rest

/**
 * Factor contributing to fatigue
 */
export interface FatigueFactor {
  type: FatigueFactorType;
  weight: number;           // 0-1, how much this contributes
  value: number;            // The actual measured value
  threshold: number;        // The threshold that triggered it
  description: string;
}

/**
 * Types of fatigue indicators
 */
export type FatigueFactorType =
  | 'error_rate_increase'       // More mistakes over time
  | 'response_length_decrease'  // Shorter answers
  | 'engagement_drop'           // Less interaction
  | 'consecutive_failures'      // Multiple CHECKs failed
  | 'time_on_task'              // Long session without break
  | 'task_completion_slowdown'  // Tasks taking longer
  | 'hint_usage_increase'       // More hints requested
  | 'retry_rate_increase'       // More retries needed
  | 'skip_rate_increase';       // More content skipped

/**
 * Recommendation based on fatigue
 */
export interface FatigueRecommendation {
  action: FatigueAction;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  message: string;
  messageRu: string;

  // For TutorLoop integration
  tutorLoopOverrides: FatigueTutorOverrides;
}

/**
 * Actions to take when fatigued
 */
export type FatigueAction =
  | 'continue'              // No action needed
  | 'encourage'             // Add encouragement
  | 'simplify'              // Reduce complexity
  | 'shorten_session'       // End session sooner
  | 'review_only'           // No new concepts
  | 'suggest_break'         // Recommend a break
  | 'force_break';          // Session should end

/**
 * How fatigue affects TutorLoop
 */
export interface FatigueTutorOverrides {
  // Disable new concepts
  blockNewConcepts: boolean;

  // Reduce complexity
  maxDifficulty: number;        // 1-10
  simplificationLevel: number;  // 0-3

  // Shorten session
  maxRemainingTasks: number;
  maxRemainingMinutes: number;

  // Encourage
  encouragementBoost: boolean;
  showProgressReminder: boolean;

  // Force break
  suggestBreakAfterTask: boolean;
  endSessionAfterTask: boolean;
}

/**
 * Session metrics for fatigue detection
 */
export interface SessionMetrics {
  // Time
  sessionStartTime: Date;
  currentTime: Date;
  lastBreakTime?: Date;
  totalActiveMinutes: number;

  // Task performance
  tasksAttempted: number;
  tasksCorrect: number;
  tasksSkipped: number;

  // Error tracking
  totalErrors: number;
  consecutiveErrors: number;
  errorsByTimeWindow: ErrorWindow[];

  // Response patterns
  averageResponseLength: number;
  responseRengthTrend: number;     // Negative = decreasing

  // Engagement
  hintsUsed: number;
  retriesUsed: number;
  avgTimePerTask: number;
  timePerTaskTrend: number;        // Positive = slowing down

  // CHECK failures
  checkAttempts: number;
  checkPasses: number;
  consecutiveCheckFailures: number;
}

/**
 * Error counts in time window
 */
export interface ErrorWindow {
  windowStart: Date;
  windowEnd: Date;
  errorCount: number;
  taskCount: number;
}

/**
 * Fatigue detection configuration
 */
export interface FatigueConfig {
  // Time thresholds
  maxSessionMinutes: number;        // Default: 45
  recommendBreakAfterMinutes: number; // Default: 25
  breakDurationMinutes: number;     // Default: 5

  // Error thresholds
  errorRateThreshold: number;       // Default: 0.4 (40%)
  consecutiveErrorThreshold: number; // Default: 3
  errorIncreaseThreshold: number;   // Default: 0.15 (15% increase)

  // Response thresholds
  responseLengthDropThreshold: number; // Default: 0.3 (30% drop)

  // Engagement thresholds
  hintUsageThreshold: number;       // Default: 0.5 (50% of tasks)
  retryRateThreshold: number;       // Default: 0.4 (40% of tasks)
  skipRateThreshold: number;        // Default: 0.2 (20% of tasks)

  // Task timing
  taskSlowdownThreshold: number;    // Default: 1.5 (50% slower)

  // CHECK failures
  maxConsecutiveCheckFailures: number; // Default: 2

  // Weights for combining factors
  factorWeights: Record<FatigueFactorType, number>;
}

/**
 * Default fatigue configuration
 */
export const DEFAULT_FATIGUE_CONFIG: FatigueConfig = {
  maxSessionMinutes: 45,
  recommendBreakAfterMinutes: 25,
  breakDurationMinutes: 5,

  errorRateThreshold: 0.4,
  consecutiveErrorThreshold: 3,
  errorIncreaseThreshold: 0.15,

  responseLengthDropThreshold: 0.3,

  hintUsageThreshold: 0.5,
  retryRateThreshold: 0.4,
  skipRateThreshold: 0.2,

  taskSlowdownThreshold: 1.5,

  maxConsecutiveCheckFailures: 2,

  factorWeights: {
    error_rate_increase: 0.2,
    response_length_decrease: 0.1,
    engagement_drop: 0.1,
    consecutive_failures: 0.25,
    time_on_task: 0.15,
    task_completion_slowdown: 0.1,
    hint_usage_increase: 0.05,
    retry_rate_increase: 0.05,
    skip_rate_increase: 0.05,
  },
};

/**
 * Fatigue history for trend analysis
 */
export interface FatigueHistory {
  userId: string;
  sessionId: string;
  readings: FatigueReading[];
}

/**
 * Single fatigue reading
 */
export interface FatigueReading {
  timestamp: Date;
  level: FatigueLevel;
  score: number;              // 0-100
  dominantFactor?: FatigueFactorType;
}

/**
 * Break taken by user
 */
export interface BreakRecord {
  startTime: Date;
  endTime?: Date;
  durationMinutes: number;
  type: 'suggested' | 'forced' | 'voluntary';
}
