/**
 * V4.1 Runtime Signals Service
 *
 * Computes unified runtime signals (fatigue + plateau) before each AI-2 response.
 * These signals are used to adapt the TutorLoop behavior in real-time.
 */

import {
  type RuntimeSignalsV4,
  type RuntimeFatigueSignal,
  type RuntimePlateauSignal,
  type TutorLoopOverrides,
  type RuntimeSignalConfig,
  type SkillType,
  type FatigueLevel,
  type SessionMetrics,
  type PlateauAnalysis,
  type SkillStateV4,
  DEFAULT_TUTOR_LOOP_OVERRIDES,
  DEFAULT_RUNTIME_SIGNAL_CONFIG,
  OVERRIDE_PRESETS,
} from '@enbai/types';

import { detectFatigue, createSessionMetrics } from './fatigue-detector.service';
import { detectPlateaus, shouldApplyIntervention } from './plateau-detector.service';

/**
 * Session context for computing signals
 */
export interface SessionContext {
  userId: string;
  sessionMetrics: SessionMetrics;
  skillStates?: Record<SkillType, SkillStateV4>;
  currentSkillFocus?: SkillType;
  recentAttempts?: AttemptInfo[];
}

/**
 * Recent attempt info for signal computation
 */
export interface AttemptInfo {
  correct: boolean;
  timeSeconds: number;
  responseLength: number;
  skillType: SkillType;
  errorType?: string;
  createdAt: Date;
}

/**
 * Compute runtime signals for TutorLoop adaptation
 */
export function computeRuntimeSignalsV4(
  context: SessionContext,
  config: RuntimeSignalConfig = DEFAULT_RUNTIME_SIGNAL_CONFIG
): RuntimeSignalsV4 {
  const now = new Date();
  const explanation: string[] = [];

  // 1. Compute fatigue signal
  let fatigueSignal: RuntimeFatigueSignal | undefined;
  if (config.enableFatigueDetection) {
    fatigueSignal = computeFatigueSignal(context.sessionMetrics, config);
    if (fatigueSignal && shouldApplyFatigueOverrides(fatigueSignal.level, config)) {
      explanation.push(`Fatigue detected: ${fatigueSignal.level}`);
      fatigueSignal.factors.forEach(f => {
        explanation.push(`  - ${f.type}: ${f.note || f.value}`);
      });
    }
  }

  // 2. Compute plateau signal
  let plateauSignal: RuntimePlateauSignal | undefined;
  if (config.enablePlateauDetection && context.skillStates && context.currentSkillFocus) {
    plateauSignal = computePlateauSignal(
      context.userId,
      context.skillStates,
      context.currentSkillFocus,
      config
    );
    if (plateauSignal && plateauSignal.confidence >= config.minPlateauConfidence) {
      explanation.push(`Plateau detected in ${plateauSignal.skill}: ${plateauSignal.plateauType}`);
      explanation.push(`  - Confidence: ${(plateauSignal.confidence * 100).toFixed(0)}%`);
      explanation.push(`  - Duration: ${plateauSignal.durationDays} days`);
    }
  }

  // 3. Merge overrides from both signals
  const overrides = mergeOverrides(fatigueSignal, plateauSignal, config);

  // 4. Add final explanation
  if (explanation.length === 0) {
    explanation.push('No significant signals detected - proceeding normally');
  }

  // 5. Log if configured
  if (config.logSignals && (fatigueSignal || plateauSignal)) {
    console.log('[V4.1 Runtime Signals]', {
      userId: context.userId,
      fatigue: fatigueSignal?.level || 'none',
      plateau: plateauSignal?.plateauType || 'none',
      overridesApplied: Object.keys(overrides).filter(k =>
        (overrides as any)[k] !== (DEFAULT_TUTOR_LOOP_OVERRIDES as any)[k]
      ).length,
    });
  }

  return {
    computedAt: now,
    fatigue: fatigueSignal,
    plateau: plateauSignal,
    overrides,
    explanation,
  };
}

/**
 * Compute fatigue signal from session metrics
 */
function computeFatigueSignal(
  metrics: SessionMetrics,
  config: RuntimeSignalConfig
): RuntimeFatigueSignal | undefined {
  const fatigueResult = detectFatigue(metrics);

  if (fatigueResult.fatigueLevel === 'none') {
    return undefined;
  }

  // Convert to runtime format
  const runtimeFactors = fatigueResult.factors.map(f => ({
    type: f.type,
    value: f.value,
    note: f.description,
  }));

  // Get overrides based on fatigue level
  const overrides = getFatigueOverrides(fatigueResult.fatigueLevel);

  return {
    level: fatigueResult.fatigueLevel,
    factors: runtimeFactors,
    overrides,
  };
}

/**
 * Compute plateau signal for current skill
 */
function computePlateauSignal(
  userId: string,
  skillStates: Record<SkillType, SkillStateV4>,
  currentSkill: SkillType,
  config: RuntimeSignalConfig
): RuntimePlateauSignal | undefined {
  // Run plateau detection
  const analysis = detectPlateaus(userId, skillStates, []);

  // Find plateau for current skill
  const plateau = analysis.detectedPlateaus.find(p => p.skill === currentSkill);

  if (!plateau || plateau.confidence < config.minPlateauConfidence) {
    return undefined;
  }

  // Get overrides based on plateau type
  const overrides = getPlateauOverrides(plateau.plateauType, plateau.evidence.repeatingErrors);

  return {
    skill: plateau.skill,
    plateauType: plateau.plateauType,
    confidence: plateau.confidence,
    durationDays: plateau.durationDays,
    interventions: plateau.recommendedInterventions,
    overrides,
  };
}

/**
 * Get overrides for fatigue level
 */
function getFatigueOverrides(level: FatigueLevel): Partial<TutorLoopOverrides> {
  switch (level) {
    case 'critical':
      return {
        ...OVERRIDE_PRESETS.FATIGUE_HIGH,
        endSessionSoon: true,
        maxRemainingMinutes: 0,
      };

    case 'high':
      return OVERRIDE_PRESETS.FATIGUE_HIGH;

    case 'moderate':
      return OVERRIDE_PRESETS.FATIGUE_MODERATE;

    case 'low':
      return {
        encouragementBoost: true,
        showProgressReminder: true,
      };

    default:
      return {};
  }
}

/**
 * Get overrides for plateau type
 */
function getPlateauOverrides(
  plateauType: string,
  errorPatterns: { patternId: string; description: string }[]
): Partial<TutorLoopOverrides> {
  switch (plateauType) {
    case 'stagnation':
      return OVERRIDE_PRESETS.PLATEAU_STAGNATION;

    case 'error_pattern':
      return {
        ...OVERRIDE_PRESETS.PLATEAU_ERROR_PATTERN,
        targetErrorPatterns: errorPatterns.map(p => p.description),
      };

    case 'oscillation':
      return OVERRIDE_PRESETS.PLATEAU_OSCILLATION;

    case 'effort_mismatch':
      return OVERRIDE_PRESETS.PLATEAU_EFFORT_MISMATCH;

    case 'ceiling_effect':
      return {
        reviewToNewRatio: 0.4,
        maxDifficulty: 8,
        encouragementBoost: true,
      };

    default:
      return {};
  }
}

/**
 * Check if fatigue level warrants overrides
 */
function shouldApplyFatigueOverrides(
  level: FatigueLevel,
  config: RuntimeSignalConfig
): boolean {
  const levels: FatigueLevel[] = ['none', 'low', 'moderate', 'high', 'critical'];
  const minIndex = levels.indexOf(config.minFatigueLevelForOverrides);
  const currentIndex = levels.indexOf(level);
  return currentIndex >= minIndex;
}

/**
 * Merge overrides from fatigue and plateau signals
 * Fatigue takes priority for safety-related overrides
 */
function mergeOverrides(
  fatigue: RuntimeFatigueSignal | undefined,
  plateau: RuntimePlateauSignal | undefined,
  config: RuntimeSignalConfig
): TutorLoopOverrides {
  // Start with defaults
  const merged: TutorLoopOverrides = { ...DEFAULT_TUTOR_LOOP_OVERRIDES };

  // Apply plateau overrides first (lower priority)
  if (plateau?.overrides) {
    Object.assign(merged, plateau.overrides);
  }

  // Apply fatigue overrides second (higher priority - safety)
  if (fatigue?.overrides) {
    Object.assign(merged, fatigue.overrides);

    // Fatigue always wins for these safety-critical fields
    if (fatigue.overrides.blockNewConcepts) {
      merged.blockNewConcepts = true;
    }
    if (fatigue.overrides.maxDifficulty !== undefined) {
      merged.maxDifficulty = Math.min(
        merged.maxDifficulty,
        fatigue.overrides.maxDifficulty
      );
    }
    if (fatigue.overrides.suggestBreak) {
      merged.suggestBreak = true;
    }
    if (fatigue.overrides.endSessionSoon) {
      merged.endSessionSoon = true;
    }
  }

  // Combine target error patterns from both
  if (plateau?.overrides?.targetErrorPatterns) {
    merged.targetErrorPatterns = [
      ...new Set([...merged.targetErrorPatterns, ...plateau.overrides.targetErrorPatterns]),
    ];
  }

  return merged;
}

/**
 * Build override instruction for system prompt
 */
export function buildOverrideInstruction(overrides: TutorLoopOverrides): string {
  const changes: string[] = [];

  if (overrides.blockNewConcepts) {
    changes.push('BLOCK_NEW: Не вводи новых концепций, только повторение');
  }

  if (overrides.maxDifficulty < 10) {
    changes.push(`MAX_DIFF: Максимальная сложность ${overrides.maxDifficulty}/10`);
  }

  if (overrides.reviewToNewRatio > 0.5) {
    changes.push(`REVIEW_HEAVY: ${Math.round(overrides.reviewToNewRatio * 100)}% времени на повторение`);
  }

  if (overrides.forceState) {
    changes.push(`FORCE_STATE: Перейди в состояние ${overrides.forceState}`);
  }

  if (overrides.shortenTeach) {
    changes.push('SHORT_TEACH: Объяснения максимум 1-3 предложения');
  }

  if (overrides.requireExtraExamples) {
    changes.push('EXTRA_EXAMPLES: Дай 3-4 примера вместо 2');
  }

  if (overrides.switchToSimplerFormat) {
    changes.push('SIMPLE_FORMAT: Используй examples-first, MCQ вместо input');
  }

  if (overrides.simplificationLevel > 0) {
    changes.push(`SIMPLIFY: Уровень упрощения ${overrides.simplificationLevel}/3`);
  }

  if (overrides.reduceTasksCount) {
    changes.push(`FEW_TASKS: Максимум ${overrides.maxTasksPerPractice} заданий`);
  }

  if (overrides.suggestBreak) {
    changes.push('SUGGEST_BREAK: Предложи сделать перерыв');
  }

  if (overrides.endSessionSoon) {
    changes.push('END_SOON: Заверши сессию после этого шага');
  }

  if (overrides.targetErrorPatterns.length > 0) {
    changes.push(`TARGET_ERRORS: Сфокусируйся на: ${overrides.targetErrorPatterns.join(', ')}`);
  }

  if (overrides.encouragementBoost) {
    changes.push('ENCOURAGE: Больше похвалы и поддержки');
  }

  if (overrides.showProgressReminder) {
    changes.push('PROGRESS: Напомни о достигнутом прогрессе');
  }

  if (changes.length === 0) {
    return '';
  }

  return `
═══════════════════════════════════════════════════════════════
                 V4.1 RUNTIME OVERRIDES (ОБЯЗАТЕЛЬНО!)
═══════════════════════════════════════════════════════════════
${changes.map(c => `▶ ${c}`).join('\n')}
═══════════════════════════════════════════════════════════════`;
}

/**
 * Create empty session metrics for new session
 */
export function createEmptySessionMetrics(): SessionMetrics {
  return createSessionMetrics();
}

/**
 * Update session metrics after attempt
 */
export { updateSessionMetrics } from './fatigue-detector.service';

/**
 * Export for testing
 */
export const _testExports = {
  computeFatigueSignal,
  computePlateauSignal,
  getFatigueOverrides,
  getPlateauOverrides,
  shouldApplyFatigueOverrides,
  mergeOverrides,
};
