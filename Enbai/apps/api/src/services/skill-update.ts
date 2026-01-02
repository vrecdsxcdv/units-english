/**
 * Improved Skill Vector Update Algorithm
 *
 * Features:
 * - Bayesian-inspired confidence updates
 * - Task difficulty weighting
 * - Spaced repetition decay
 * - Learning ability personalization
 * - Bounded 0-1 output
 */

import type { SkillKey } from '@enbai/types';

// Skill state with metadata
export interface SkillState {
  value: number;           // Current skill level 0-1
  confidence: number;      // How confident we are in this value 0-1
  lastPracticed: Date;     // When was this skill last tested
  totalAttempts: number;   // Total number of attempts
  recentAttempts: number;  // Attempts in last 7 days
  recentCorrect: number;   // Correct in last 7 days
  easeFactor: number;      // SM-2 ease factor (default 2.5)
  interval: number;        // Days until next review
}

// Evaluation result from task
export interface TaskEvaluation {
  isCorrect: boolean;
  score: number;           // 0-1, can be partial
  skillScores: Partial<Record<SkillKey, number>>; // Per-skill scores
  taskDifficulty: number;  // 0-1
  skillWeights: Partial<Record<SkillKey, number>>; // How much task tested each skill
  confidence: number;      // Evaluator confidence
}

// User learning profile
export interface LearnerProfile {
  learningAbility: number; // 0-1, how fast they learn
  dailyTimeMinutes: number;
  streak: number;
}

// Configuration constants
const CONFIG = {
  // Base deltas
  BASE_CORRECT_DELTA: 0.08,    // Base increase for correct answer
  BASE_WRONG_DELTA: -0.03,     // Base decrease for wrong answer

  // Modifiers
  DIFFICULTY_WEIGHT: 0.5,       // How much difficulty affects delta
  CONFIDENCE_WEIGHT: 0.3,       // How much evaluator confidence affects update
  LEARNING_ABILITY_WEIGHT: 0.4, // How much learningAbility affects delta

  // Decay
  DECAY_RATE_PER_DAY: 0.005,    // Skill decay per day without practice
  MAX_DECAY_DAYS: 30,           // Maximum days to apply decay
  MIN_VALUE: 0.05,              // Minimum skill value (never fully forget)
  MAX_VALUE: 0.98,              // Maximum skill value (always room to grow)

  // Confidence
  INITIAL_CONFIDENCE: 0.3,      // Starting confidence for new skills
  CONFIDENCE_GAIN_PER_ATTEMPT: 0.05,
  MAX_CONFIDENCE: 0.95,

  // Spaced repetition (SM-2 inspired)
  MIN_EASE_FACTOR: 1.3,
  DEFAULT_EASE_FACTOR: 2.5,
  EASE_BONUS_CORRECT: 0.1,
  EASE_PENALTY_WRONG: 0.2,
};

/**
 * Main skill update function
 */
export function updateSkillVector(
  currentSkills: Record<SkillKey, SkillState>,
  evaluation: TaskEvaluation,
  learnerProfile: LearnerProfile
): Record<SkillKey, SkillState> {
  const now = new Date();
  const updatedSkills = { ...currentSkills };

  // Process each skill that was tested
  for (const [skillKey, weight] of Object.entries(evaluation.skillWeights)) {
    if (weight <= 0) continue;

    const skill = skillKey as SkillKey;
    const current = updatedSkills[skill];
    if (!current) continue;

    // Get skill-specific score (or use overall score)
    const skillScore = evaluation.skillScores[skill] ?? evaluation.score;

    // Calculate delta
    const delta = calculateDelta(
      skillScore,
      evaluation.taskDifficulty,
      current.value,
      weight,
      learnerProfile.learningAbility,
      evaluation.confidence
    );

    // Apply decay since last practice
    const decayedValue = applyDecay(current.value, current.lastPracticed, now);

    // Calculate new value with bounds
    const newValue = clamp(
      decayedValue + delta,
      CONFIG.MIN_VALUE,
      CONFIG.MAX_VALUE
    );

    // Update confidence
    const newConfidence = Math.min(
      current.confidence + CONFIG.CONFIDENCE_GAIN_PER_ATTEMPT * weight,
      CONFIG.MAX_CONFIDENCE
    );

    // Update ease factor (SM-2)
    const newEaseFactor = updateEaseFactor(
      current.easeFactor,
      skillScore,
      evaluation.taskDifficulty
    );

    // Update interval
    const newInterval = calculateNextInterval(
      current.interval,
      newEaseFactor,
      skillScore >= 0.6
    );

    // Update skill state
    updatedSkills[skill] = {
      value: newValue,
      confidence: newConfidence,
      lastPracticed: now,
      totalAttempts: current.totalAttempts + 1,
      recentAttempts: current.recentAttempts + 1,
      recentCorrect: current.recentCorrect + (skillScore >= 0.6 ? 1 : 0),
      easeFactor: newEaseFactor,
      interval: newInterval,
    };
  }

  return updatedSkills;
}

/**
 * Calculate delta (change in skill value)
 */
function calculateDelta(
  score: number,           // 0-1, how well they did
  taskDifficulty: number,  // 0-1, how hard was the task
  currentValue: number,    // 0-1, current skill level
  skillWeight: number,     // 0-1, how much task tested this skill
  learningAbility: number, // 0-1, how fast learner adapts
  evaluatorConfidence: number // 0-1, how confident is the evaluation
): number {
  // Base delta based on correctness
  const isCorrect = score >= 0.6;
  let baseDelta = isCorrect
    ? CONFIG.BASE_CORRECT_DELTA
    : CONFIG.BASE_WRONG_DELTA;

  // Scale by partial score (0.7 score = 70% of positive delta)
  if (isCorrect) {
    baseDelta *= score;
  } else {
    // For wrong answers, worse score = bigger penalty
    baseDelta *= (1 - score);
  }

  // Difficulty modifier
  // Correct on hard task = bigger reward
  // Wrong on easy task = bigger penalty
  const difficultyModifier = isCorrect
    ? 1 + (taskDifficulty - currentValue) * CONFIG.DIFFICULTY_WEIGHT
    : 1 + (currentValue - taskDifficulty) * CONFIG.DIFFICULTY_WEIGHT;

  // Learning ability modifier
  // Fast learners gain more, but also lose less
  const learningModifier = isCorrect
    ? 1 + (learningAbility - 0.5) * CONFIG.LEARNING_ABILITY_WEIGHT
    : 1 - (learningAbility - 0.5) * CONFIG.LEARNING_ABILITY_WEIGHT * 0.5;

  // Confidence modifier (less confident evaluation = smaller update)
  const confidenceModifier = 0.5 + evaluatorConfidence * CONFIG.CONFIDENCE_WEIGHT;

  // Ceiling effect: harder to improve when already high
  const ceilingModifier = isCorrect
    ? 1 - currentValue * 0.3  // Slower gains at high levels
    : 1;

  // Floor effect: harder to lose when already low
  const floorModifier = isCorrect
    ? 1
    : currentValue * 0.7 + 0.3;  // Smaller losses at low levels

  // Combine all modifiers
  const delta = baseDelta
    * skillWeight
    * difficultyModifier
    * learningModifier
    * confidenceModifier
    * (isCorrect ? ceilingModifier : floorModifier);

  return delta;
}

/**
 * Apply time-based decay
 */
function applyDecay(
  value: number,
  lastPracticed: Date,
  now: Date
): number {
  const daysSince = Math.min(
    (now.getTime() - lastPracticed.getTime()) / (1000 * 60 * 60 * 24),
    CONFIG.MAX_DECAY_DAYS
  );

  if (daysSince <= 0) return value;

  // Exponential decay
  const decayFactor = Math.exp(-CONFIG.DECAY_RATE_PER_DAY * daysSince);
  const decayedValue = CONFIG.MIN_VALUE + (value - CONFIG.MIN_VALUE) * decayFactor;

  return Math.max(decayedValue, CONFIG.MIN_VALUE);
}

/**
 * Update SM-2 ease factor
 */
function updateEaseFactor(
  currentEase: number,
  score: number,
  difficulty: number
): number {
  // Score 0-1 mapped to quality 0-5 (SM-2 uses 0-5 scale)
  const quality = Math.round(score * 5);

  // SM-2 formula adaptation
  let newEase = currentEase + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));

  // Difficulty adjustment
  if (difficulty > 0.7 && score >= 0.6) {
    newEase += CONFIG.EASE_BONUS_CORRECT;
  } else if (difficulty < 0.3 && score < 0.6) {
    newEase -= CONFIG.EASE_PENALTY_WRONG;
  }

  return Math.max(newEase, CONFIG.MIN_EASE_FACTOR);
}

/**
 * Calculate next review interval (SM-2 inspired)
 */
function calculateNextInterval(
  currentInterval: number,
  easeFactor: number,
  wasCorrect: boolean
): number {
  if (!wasCorrect) {
    return 1; // Reset to 1 day on failure
  }

  if (currentInterval === 0) {
    return 1;
  } else if (currentInterval === 1) {
    return 6;
  } else {
    return Math.round(currentInterval * easeFactor);
  }
}

/**
 * Clamp value between min and max
 */
function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

/**
 * Create initial skill state
 */
export function createInitialSkillState(initialValue: number = 0.3): SkillState {
  return {
    value: initialValue,
    confidence: CONFIG.INITIAL_CONFIDENCE,
    lastPracticed: new Date(),
    totalAttempts: 0,
    recentAttempts: 0,
    recentCorrect: 0,
    easeFactor: CONFIG.DEFAULT_EASE_FACTOR,
    interval: 0,
  };
}

/**
 * Convert simple skill vector to full state
 */
export function skillVectorToState(
  simpleVector: Record<SkillKey, number>
): Record<SkillKey, SkillState> {
  const state: Partial<Record<SkillKey, SkillState>> = {};

  for (const [key, value] of Object.entries(simpleVector)) {
    state[key as SkillKey] = createInitialSkillState(value);
  }

  return state as Record<SkillKey, SkillState>;
}

/**
 * Extract simple values from state (for display/storage)
 */
export function stateToSkillVector(
  state: Record<SkillKey, SkillState>
): Record<SkillKey, number> {
  const vector: Partial<Record<SkillKey, number>> = {};

  for (const [key, skillState] of Object.entries(state)) {
    vector[key as SkillKey] = skillState.value;
  }

  return vector as Record<SkillKey, number>;
}

/**
 * Get skills that need review (based on interval)
 */
export function getSkillsNeedingReview(
  state: Record<SkillKey, SkillState>
): SkillKey[] {
  const now = new Date();

  return (Object.entries(state) as [SkillKey, SkillState][])
    .filter(([_, skillState]) => {
      const daysSince = (now.getTime() - skillState.lastPracticed.getTime()) / (1000 * 60 * 60 * 24);
      return daysSince >= skillState.interval;
    })
    .sort((a, b) => a[1].value - b[1].value) // Weakest first
    .map(([key]) => key);
}
