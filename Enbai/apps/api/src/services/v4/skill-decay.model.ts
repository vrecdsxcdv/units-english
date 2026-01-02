/**
 * V4 Skill Decay Model
 *
 * Implements forgetting curve with:
 * - Skill-specific decay rates (vocabulary > speaking > grammar)
 * - Mastery floors (never drop below confirmed level)
 * - Exponential/logarithmic decay models
 * - Raw vs effective skill separation
 */

import type { SkillType } from '@enbai/types';
import {
  SKILL_DECAY_RATES,
  type SkillStateV4,
  type SkillVectorV4,
  type DecayConfig,
  type DecayResult,
  type DecayBatchResult,
  type MasteryConfirmation,
  type SkillSnapshotV4,
  DEFAULT_DECAY_CONFIG,
} from '@enbai/types';

/**
 * Apply decay to a single skill
 */
export function applyDecayToSkill(
  skillType: SkillType,
  skill: SkillStateV4,
  now: Date,
  config: DecayConfig = DEFAULT_DECAY_CONFIG
): DecayResult {
  const lastPracticed = new Date(skill.lastPracticed);
  const daysSince = Math.max(0, (now.getTime() - lastPracticed.getTime()) / (1000 * 60 * 60 * 24));

  // No decay if practiced recently
  if (daysSince < 1) {
    return {
      skillType,
      previousEffective: skill.effectiveSkill,
      newEffective: skill.effectiveSkill,
      decayAmount: 0,
      daysSinceLastPractice: daysSince,
      hitMasteryFloor: false,
    };
  }

  // Cap decay days
  const effectiveDays = Math.min(daysSince, config.maxDecayDays);

  // Get skill-specific decay rate
  const baseRate = SKILL_DECAY_RATES[skillType];
  const adjustedRate = baseRate * config.baseRateMultiplier;

  // Calculate decay factor based on model
  let decayFactor: number;

  switch (config.decayModel) {
    case 'exponential':
      // Standard exponential decay: e^(-rate * days)
      decayFactor = Math.exp(-adjustedRate * effectiveDays);
      break;

    case 'logarithmic':
      // Slower decay: 1 / (1 + rate * ln(1 + days))
      decayFactor = 1 / (1 + adjustedRate * Math.log(1 + effectiveDays));
      break;

    case 'linear':
      // Simple linear: 1 - rate * days (clamped)
      decayFactor = Math.max(0, 1 - adjustedRate * effectiveDays);
      break;

    default:
      decayFactor = Math.exp(-adjustedRate * effectiveDays);
  }

  // Calculate floor
  const floor = config.masteryFloorEnabled
    ? Math.max(config.minEffectiveSkill, skill.confirmedMastery)
    : config.minEffectiveSkill;

  // Apply decay: effective = floor + (raw - floor) * decayFactor
  const decayableAmount = skill.rawSkill - floor;
  const newEffective = floor + decayableAmount * decayFactor;

  const previousEffective = skill.effectiveSkill;
  const decayAmount = previousEffective - newEffective;
  const hitMasteryFloor = newEffective <= skill.confirmedMastery && decayableAmount > 0;

  return {
    skillType,
    previousEffective,
    newEffective: Math.max(newEffective, floor),
    decayAmount: Math.max(0, decayAmount),
    daysSinceLastPractice: daysSince,
    hitMasteryFloor,
  };
}

/**
 * Apply decay to full skill vector
 */
export function applyDecay(
  skillVector: SkillVectorV4,
  now: Date = new Date(),
  config: DecayConfig = DEFAULT_DECAY_CONFIG
): DecayBatchResult {
  const results: DecayResult[] = [];
  const skillsAtRisk: SkillType[] = [];
  const skillsNeedingReview: SkillType[] = [];

  for (const [skillType, skill] of Object.entries(skillVector) as [SkillType, SkillStateV4][]) {
    const result = applyDecayToSkill(skillType, skill, now, config);
    results.push(result);

    // Track skills at risk (>20% gap between raw and effective)
    const gap = (skill.rawSkill - result.newEffective) / skill.rawSkill;
    if (gap > 0.2 && skill.rawSkill > 0.1) {
      skillsAtRisk.push(skillType);
    }

    // Track skills needing review (based on interval)
    const daysSince = result.daysSinceLastPractice;
    if (daysSince >= skill.interval) {
      skillsNeedingReview.push(skillType);
    }
  }

  // Calculate total decay
  const totalDecay = results.reduce((sum, r) => sum + r.decayAmount, 0);

  // Recommend practice order: at-risk first, then by decay amount
  const recommendedPracticeOrder = results
    .filter(r => r.decayAmount > 0)
    .sort((a, b) => {
      // At-risk skills first
      const aAtRisk = skillsAtRisk.includes(a.skillType) ? 1 : 0;
      const bAtRisk = skillsAtRisk.includes(b.skillType) ? 1 : 0;
      if (aAtRisk !== bAtRisk) return bAtRisk - aAtRisk;

      // Then by decay amount
      return b.decayAmount - a.decayAmount;
    })
    .map(r => r.skillType);

  return {
    results,
    totalDecay,
    skillsAtRisk,
    skillsNeedingReview,
    recommendedPracticeOrder,
  };
}

/**
 * Get effective skill value with decay applied
 */
export function getEffectiveSkill(
  skill: SkillStateV4,
  skillType: SkillType,
  now: Date = new Date(),
  config: DecayConfig = DEFAULT_DECAY_CONFIG
): number {
  const result = applyDecayToSkill(skillType, skill, now, config);
  return result.newEffective;
}

/**
 * Update skill state after successful practice
 */
export function updateSkillAfterPractice(
  skill: SkillStateV4,
  skillType: SkillType,
  score: number,
  now: Date = new Date()
): SkillStateV4 {
  // Apply decay first
  const decayResult = applyDecayToSkill(skillType, skill, now);
  const currentEffective = decayResult.newEffective;

  // Calculate skill gain (positive only for score >= 0.6)
  const isCorrect = score >= 0.6;
  let rawDelta = 0;

  if (isCorrect) {
    // Base gain scaled by score
    const baseGain = 0.08 * score;
    // Ceiling effect - harder to gain at higher levels
    const ceilingMod = 1 - skill.rawSkill * 0.4;
    rawDelta = baseGain * ceilingMod;
  }

  // Update raw skill (never decreases)
  const newRaw = Math.min(0.98, skill.rawSkill + Math.max(0, rawDelta));

  // Effective skill catches up on practice
  const newEffective = isCorrect
    ? Math.min(newRaw, currentEffective + rawDelta * 1.2) // Slight boost on correct
    : currentEffective * 0.97; // Small penalty on wrong

  // Update confirmed mastery if performance is consistent
  let newConfirmedMastery = skill.confirmedMastery;
  if (isCorrect && score >= 0.8 && skill.recentCorrect >= 3) {
    // Confirm mastery at current effective level
    newConfirmedMastery = Math.max(skill.confirmedMastery, newEffective * 0.9);
  }

  // Add snapshot to history
  const today = now.toISOString().split('T')[0];
  const todaySnapshot = skill.historySnapshots.find(s => s.date === today);

  let newHistory: SkillSnapshotV4[];
  if (todaySnapshot) {
    // Update existing snapshot
    newHistory = skill.historySnapshots.map(s =>
      s.date === today
        ? {
            ...s,
            rawSkill: newRaw,
            effectiveSkill: newEffective,
            practiceCount: s.practiceCount + 1,
            errorCount: s.errorCount + (isCorrect ? 0 : 1),
          }
        : s
    );
  } else {
    // Add new snapshot (keep last 30 days)
    newHistory = [
      ...skill.historySnapshots.slice(-29),
      {
        date: today,
        rawSkill: newRaw,
        effectiveSkill: newEffective,
        practiceCount: 1,
        errorCount: isCorrect ? 0 : 1,
      },
    ];
  }

  // Update recent counters (simplified - full impl would check dates)
  const newRecentAttempts = skill.recentAttempts + 1;
  const newRecentCorrect = skill.recentCorrect + (isCorrect ? 1 : 0);

  return {
    rawSkill: newRaw,
    effectiveSkill: Math.max(newConfirmedMastery, newEffective),
    confirmedMastery: newConfirmedMastery,
    lastPracticed: now,
    decayAppliedAt: now,
    confidence: Math.min(0.95, skill.confidence + 0.03),
    totalAttempts: skill.totalAttempts + 1,
    recentAttempts: newRecentAttempts,
    recentCorrect: newRecentCorrect,
    easeFactor: updateEaseFactor(skill.easeFactor, score),
    interval: calculateNextInterval(skill.interval, skill.easeFactor, isCorrect),
    historySnapshots: newHistory,
  };
}

/**
 * Confirm mastery at a specific level (after test/assessment)
 */
export function confirmMastery(
  skill: SkillStateV4,
  confirmation: MasteryConfirmation
): SkillStateV4 {
  // Only raise floor, never lower it
  const newMastery = Math.max(
    skill.confirmedMastery,
    confirmation.confirmedLevel * confirmation.confidence
  );

  return {
    ...skill,
    confirmedMastery: newMastery,
    // Ensure effective is at least at mastery level
    effectiveSkill: Math.max(skill.effectiveSkill, newMastery),
  };
}

/**
 * Create initial V4 skill state
 */
export function createInitialSkillStateV4(initialValue: number = 0.3): SkillStateV4 {
  const now = new Date();
  return {
    rawSkill: initialValue,
    effectiveSkill: initialValue,
    confirmedMastery: initialValue * 0.5, // Start with low floor
    lastPracticed: now,
    decayAppliedAt: now,
    confidence: 0.3,
    totalAttempts: 0,
    recentAttempts: 0,
    recentCorrect: 0,
    easeFactor: 2.5,
    interval: 1,
    historySnapshots: [],
  };
}

/**
 * Convert simple skill value to V4 state
 */
export function skillValueToStateV4(value: number, confirmedMastery?: number): SkillStateV4 {
  const state = createInitialSkillStateV4(value);
  if (confirmedMastery !== undefined) {
    state.confirmedMastery = confirmedMastery;
  }
  return state;
}

/**
 * Get skills ordered by urgency of review
 */
export function getReviewPriority(
  skillVector: SkillVectorV4,
  now: Date = new Date()
): Array<{ skillType: SkillType; urgency: number; reason: string }> {
  const priorities: Array<{ skillType: SkillType; urgency: number; reason: string }> = [];

  for (const [skillType, skill] of Object.entries(skillVector) as [SkillType, SkillStateV4][]) {
    const decayResult = applyDecayToSkill(skillType, skill, now);
    const daysSince = decayResult.daysSinceLastPractice;

    // Calculate urgency score
    let urgency = 0;
    let reason = '';

    // High decay = high urgency
    const decayPercent = decayResult.decayAmount / (skill.rawSkill || 1);
    if (decayPercent > 0.15) {
      urgency += 50;
      reason = 'significant decay';
    } else if (decayPercent > 0.1) {
      urgency += 30;
      reason = 'moderate decay';
    }

    // Overdue review
    if (daysSince >= skill.interval * 1.5) {
      urgency += 40;
      reason = reason ? `${reason}, overdue` : 'overdue';
    } else if (daysSince >= skill.interval) {
      urgency += 20;
      reason = reason ? `${reason}, due` : 'due for review';
    }

    // Low confidence = needs more practice
    if (skill.confidence < 0.5) {
      urgency += 15;
      reason = reason ? `${reason}, low confidence` : 'low confidence';
    }

    // At mastery floor
    if (decayResult.hitMasteryFloor) {
      urgency += 25;
      reason = reason ? `${reason}, at floor` : 'at mastery floor';
    }

    if (urgency > 0) {
      priorities.push({ skillType, urgency, reason });
    }
  }

  return priorities.sort((a, b) => b.urgency - a.urgency);
}

// Helper functions

function updateEaseFactor(currentEase: number, score: number): number {
  const quality = Math.round(score * 5);
  let newEase = currentEase + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  return Math.max(1.3, newEase);
}

function calculateNextInterval(currentInterval: number, easeFactor: number, wasCorrect: boolean): number {
  if (!wasCorrect) return 1;
  if (currentInterval === 0) return 1;
  if (currentInterval === 1) return 6;
  return Math.round(currentInterval * easeFactor);
}
