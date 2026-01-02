/**
 * V4 Skill Decay Types
 *
 * Enhanced skill model with decay awareness and mastery floors.
 * Vocabulary decays faster than grammar, speaking faster than comprehension.
 */

import type { SkillType } from './skills';

/**
 * Decay rate categories for different skill types
 * Higher = faster decay
 */
export const SKILL_DECAY_RATES: Record<SkillType, number> = {
  // Fast decay - need frequent practice
  vocabulary: 0.012,      // ~1.2% per day - words are easily forgotten
  slang: 0.015,           // ~1.5% per day - colloquialisms fade quickly
  pronunciation: 0.010,   // ~1.0% per day - articulation degrades

  // Medium decay
  speaking: 0.008,        // ~0.8% per day - fluency needs maintenance
  fluency: 0.008,         // ~0.8% per day - speed degrades
  listening: 0.007,       // ~0.7% per day - ear needs tuning

  // Slow decay - more stable once learned
  grammar: 0.004,         // ~0.4% per day - rules stick better
  word_formation: 0.005,  // ~0.5% per day - patterns are stable
  writing: 0.006,         // ~0.6% per day - writing skills persist
  comprehension: 0.003,   // ~0.3% per day - understanding is durable
};

/**
 * Extended skill state with raw/effective split
 */
export interface SkillStateV4 {
  // Core values
  rawSkill: number;           // Accumulated skill (never decreases on correct practice)
  effectiveSkill: number;     // With decay applied (what user can actually demonstrate)

  // Mastery floor - never decay below this
  confirmedMastery: number;   // Last confirmed working level

  // Decay tracking
  lastPracticed: Date;
  decayAppliedAt: Date;       // When effectiveSkill was last calculated

  // Confidence metrics
  confidence: number;
  totalAttempts: number;
  recentAttempts: number;     // Last 7 days
  recentCorrect: number;      // Last 7 days

  // Spaced repetition
  easeFactor: number;
  interval: number;           // Days until next review

  // History for plateau detection
  historySnapshots: SkillSnapshotV4[];
}

/**
 * Skill snapshot for trend analysis (V4-specific)
 */
export interface SkillSnapshotV4 {
  date: string;               // ISO date
  rawSkill: number;
  effectiveSkill: number;
  practiceCount: number;      // Practices that day
  errorCount: number;         // Errors that day
}

/**
 * Full skill vector with V4 enhancements
 */
export type SkillVectorV4 = Record<SkillType, SkillStateV4>;

/**
 * Decay configuration
 */
export interface DecayConfig {
  // Rate modifiers
  baseRateMultiplier: number;     // Global adjustment (default 1.0)
  maxDecayDays: number;           // Stop applying decay after N days

  // Floor behavior
  minEffectiveSkill: number;      // Absolute minimum (default 0.05)
  masteryFloorEnabled: boolean;   // Use confirmedMastery as floor

  // Decay model
  decayModel: 'exponential' | 'logarithmic' | 'linear';
}

/**
 * Default decay configuration
 */
export const DEFAULT_DECAY_CONFIG: DecayConfig = {
  baseRateMultiplier: 1.0,
  maxDecayDays: 60,               // 2 months max decay period
  minEffectiveSkill: 0.05,
  masteryFloorEnabled: true,
  decayModel: 'exponential',
};

/**
 * Decay calculation result
 */
export interface DecayResult {
  skillType: SkillType;
  previousEffective: number;
  newEffective: number;
  decayAmount: number;
  daysSinceLastPractice: number;
  hitMasteryFloor: boolean;
}

/**
 * Batch decay result for full vector
 */
export interface DecayBatchResult {
  results: DecayResult[];
  totalDecay: number;
  skillsAtRisk: SkillType[];      // Skills decayed >20% from raw
  skillsNeedingReview: SkillType[];
  recommendedPracticeOrder: SkillType[];
}

/**
 * Mastery confirmation event
 */
export interface MasteryConfirmation {
  skillType: SkillType;
  confirmedAt: Date;
  confirmedLevel: number;
  confirmationType: 'test' | 'practice' | 'assessment';
  confidence: number;
}
