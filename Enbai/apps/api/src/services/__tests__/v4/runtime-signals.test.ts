/**
 * V4.1 Runtime Signals Tests
 */

import { describe, it, expect, beforeEach } from 'vitest';
import {
  computeRuntimeSignalsV4,
  buildOverrideInstruction,
  createEmptySessionMetrics,
  _testExports,
  type SessionContext,
} from '../../v4/runtime-signals.service';
import {
  DEFAULT_TUTOR_LOOP_OVERRIDES,
  DEFAULT_RUNTIME_SIGNAL_CONFIG,
  OVERRIDE_PRESETS,
  type SessionMetrics,
  type FatigueLevel,
} from '@enbai/types';

const { getFatigueOverrides, getPlateauOverrides, mergeOverrides, shouldApplyFatigueOverrides } = _testExports;

describe('Runtime Signals V4.1', () => {
  let baseSessionMetrics: SessionMetrics;

  beforeEach(() => {
    baseSessionMetrics = createEmptySessionMetrics();
  });

  describe('computeRuntimeSignalsV4', () => {
    it('should return default overrides for fresh session', () => {
      const context: SessionContext = {
        userId: 'test-user',
        sessionMetrics: baseSessionMetrics,
      };

      const result = computeRuntimeSignalsV4(context);

      expect(result.computedAt).toBeDefined();
      expect(result.fatigue).toBeUndefined();
      expect(result.plateau).toBeUndefined();
      expect(result.overrides.blockNewConcepts).toBe(false);
      expect(result.overrides.maxDifficulty).toBe(10);
      expect(result.explanation.length).toBeGreaterThan(0);
    });

    it('should detect fatigue after many consecutive errors', () => {
      const fatigueMetrics: SessionMetrics = {
        ...baseSessionMetrics,
        consecutiveErrors: 5,
        totalErrors: 10,
        tasksAttempted: 15,
        tasksCorrect: 5,
        totalActiveMinutes: 20,
      };

      const context: SessionContext = {
        userId: 'test-user',
        sessionMetrics: fatigueMetrics,
      };

      const result = computeRuntimeSignalsV4(context);

      // Should have fatigue signal due to consecutive errors
      if (result.fatigue) {
        expect(['low', 'moderate', 'high', 'critical']).toContain(result.fatigue.level);
      }
    });

    it('should detect fatigue after long session', () => {
      const longSessionMetrics: SessionMetrics = {
        ...baseSessionMetrics,
        totalActiveMinutes: 40, // Above recommended break threshold
        tasksAttempted: 20,
        tasksCorrect: 15,
      };

      const context: SessionContext = {
        userId: 'test-user',
        sessionMetrics: longSessionMetrics,
      };

      const result = computeRuntimeSignalsV4(context);

      expect(result.overrides).toBeDefined();
    });
  });

  describe('getFatigueOverrides', () => {
    it('should return empty overrides for none level', () => {
      const overrides = getFatigueOverrides('none');
      expect(Object.keys(overrides)).toHaveLength(0);
    });

    it('should return encouragement for low level', () => {
      const overrides = getFatigueOverrides('low');
      expect(overrides.encouragementBoost).toBe(true);
      expect(overrides.showProgressReminder).toBe(true);
    });

    it('should return moderate restrictions for moderate level', () => {
      const overrides = getFatigueOverrides('moderate');
      expect(overrides.maxDifficulty).toBe(5);
      expect(overrides.reduceTasksCount).toBe(true);
    });

    it('should return strict restrictions for high level', () => {
      const overrides = getFatigueOverrides('high');
      expect(overrides.blockNewConcepts).toBe(true);
      expect(overrides.maxDifficulty).toBe(3);
      expect(overrides.suggestBreak).toBe(true);
    });

    it('should end session for critical level', () => {
      const overrides = getFatigueOverrides('critical');
      expect(overrides.blockNewConcepts).toBe(true);
      expect(overrides.endSessionSoon).toBe(true);
      expect(overrides.maxRemainingMinutes).toBe(0);
    });
  });

  describe('getPlateauOverrides', () => {
    it('should return format changes for stagnation', () => {
      const overrides = getPlateauOverrides('stagnation', []);
      expect(overrides.switchToSimplerFormat).toBe(true);
      expect(overrides.requireExtraExamples).toBe(true);
    });

    it('should target error patterns for error_pattern', () => {
      const errorPatterns = [
        { patternId: 'err_1', description: 'Article usage' },
        { patternId: 'err_2', description: 'Verb tense' },
      ];
      const overrides = getPlateauOverrides('error_pattern', errorPatterns);

      expect(overrides.blockNewConcepts).toBe(true);
      expect(overrides.targetErrorPatterns).toContain('Article usage');
      expect(overrides.targetErrorPatterns).toContain('Verb tense');
    });

    it('should focus on review for oscillation', () => {
      const overrides = getPlateauOverrides('oscillation', []);
      expect(overrides.blockNewConcepts).toBe(true);
      expect(overrides.reviewToNewRatio).toBe(0.8);
    });

    it('should encourage for effort_mismatch', () => {
      const overrides = getPlateauOverrides('effort_mismatch', []);
      expect(overrides.switchToSimplerFormat).toBe(true);
      expect(overrides.encouragementBoost).toBe(true);
    });
  });

  describe('shouldApplyFatigueOverrides', () => {
    const config = DEFAULT_RUNTIME_SIGNAL_CONFIG;

    it('should apply for levels at or above minimum', () => {
      expect(shouldApplyFatigueOverrides('moderate', config)).toBe(true);
      expect(shouldApplyFatigueOverrides('high', config)).toBe(true);
      expect(shouldApplyFatigueOverrides('critical', config)).toBe(true);
    });

    it('should apply for low when minLevel is low', () => {
      expect(shouldApplyFatigueOverrides('low', config)).toBe(true);
    });

    it('should not apply for none', () => {
      expect(shouldApplyFatigueOverrides('none', config)).toBe(false);
    });
  });

  describe('mergeOverrides', () => {
    it('should return defaults when no signals', () => {
      const merged = mergeOverrides(undefined, undefined, DEFAULT_RUNTIME_SIGNAL_CONFIG);
      expect(merged).toEqual(DEFAULT_TUTOR_LOOP_OVERRIDES);
    });

    it('should apply fatigue overrides', () => {
      const fatigueSignal = {
        level: 'high' as FatigueLevel,
        factors: [],
        overrides: OVERRIDE_PRESETS.FATIGUE_HIGH,
      };

      const merged = mergeOverrides(fatigueSignal, undefined, DEFAULT_RUNTIME_SIGNAL_CONFIG);

      expect(merged.blockNewConcepts).toBe(true);
      expect(merged.maxDifficulty).toBe(3);
    });

    it('should apply plateau overrides', () => {
      const plateauSignal = {
        skill: 'grammar' as const,
        plateauType: 'stagnation' as const,
        confidence: 0.8,
        durationDays: 10,
        interventions: [],
        overrides: OVERRIDE_PRESETS.PLATEAU_STAGNATION,
      };

      const merged = mergeOverrides(undefined, plateauSignal, DEFAULT_RUNTIME_SIGNAL_CONFIG);

      expect(merged.switchToSimplerFormat).toBe(true);
      expect(merged.requireExtraExamples).toBe(true);
    });

    it('should prioritize fatigue for safety-critical fields', () => {
      const fatigueSignal = {
        level: 'high' as FatigueLevel,
        factors: [],
        overrides: { maxDifficulty: 3, blockNewConcepts: true },
      };

      const plateauSignal = {
        skill: 'grammar' as const,
        plateauType: 'stagnation' as const,
        confidence: 0.8,
        durationDays: 10,
        interventions: [],
        overrides: { maxDifficulty: 7, blockNewConcepts: false },
      };

      const merged = mergeOverrides(fatigueSignal, plateauSignal, DEFAULT_RUNTIME_SIGNAL_CONFIG);

      // Fatigue wins for safety
      expect(merged.maxDifficulty).toBe(3);
      expect(merged.blockNewConcepts).toBe(true);
    });

    it('should combine target error patterns from both', () => {
      const plateauSignal = {
        skill: 'grammar' as const,
        plateauType: 'error_pattern' as const,
        confidence: 0.8,
        durationDays: 10,
        interventions: [],
        overrides: {
          targetErrorPatterns: ['Article usage', 'Verb tense'],
        },
      };

      const merged = mergeOverrides(undefined, plateauSignal, DEFAULT_RUNTIME_SIGNAL_CONFIG);

      expect(merged.targetErrorPatterns).toContain('Article usage');
      expect(merged.targetErrorPatterns).toContain('Verb tense');
    });
  });

  describe('buildOverrideInstruction', () => {
    it('should return empty string for default overrides', () => {
      const instruction = buildOverrideInstruction(DEFAULT_TUTOR_LOOP_OVERRIDES);
      expect(instruction).toBe('');
    });

    it('should include block new concepts instruction', () => {
      const overrides = { ...DEFAULT_TUTOR_LOOP_OVERRIDES, blockNewConcepts: true };
      const instruction = buildOverrideInstruction(overrides);

      expect(instruction).toContain('BLOCK_NEW');
      expect(instruction).toContain('повторение');
    });

    it('should include max difficulty instruction', () => {
      const overrides = { ...DEFAULT_TUTOR_LOOP_OVERRIDES, maxDifficulty: 3 };
      const instruction = buildOverrideInstruction(overrides);

      expect(instruction).toContain('MAX_DIFF');
      expect(instruction).toContain('3/10');
    });

    it('should include suggest break instruction', () => {
      const overrides = { ...DEFAULT_TUTOR_LOOP_OVERRIDES, suggestBreak: true };
      const instruction = buildOverrideInstruction(overrides);

      expect(instruction).toContain('SUGGEST_BREAK');
      expect(instruction).toContain('перерыв');
    });

    it('should include multiple instructions', () => {
      const overrides = {
        ...DEFAULT_TUTOR_LOOP_OVERRIDES,
        blockNewConcepts: true,
        maxDifficulty: 3,
        shortenTeach: true,
        suggestBreak: true,
      };
      const instruction = buildOverrideInstruction(overrides);

      expect(instruction).toContain('BLOCK_NEW');
      expect(instruction).toContain('MAX_DIFF');
      expect(instruction).toContain('SHORT_TEACH');
      expect(instruction).toContain('SUGGEST_BREAK');
    });

    it('should include target error patterns', () => {
      const overrides = {
        ...DEFAULT_TUTOR_LOOP_OVERRIDES,
        targetErrorPatterns: ['Article usage', 'Verb tense'],
      };
      const instruction = buildOverrideInstruction(overrides);

      expect(instruction).toContain('TARGET_ERRORS');
      expect(instruction).toContain('Article usage');
      expect(instruction).toContain('Verb tense');
    });
  });

  describe('OVERRIDE_PRESETS', () => {
    it('should have FATIGUE_HIGH preset', () => {
      expect(OVERRIDE_PRESETS.FATIGUE_HIGH.blockNewConcepts).toBe(true);
      expect(OVERRIDE_PRESETS.FATIGUE_HIGH.maxDifficulty).toBe(3);
      expect(OVERRIDE_PRESETS.FATIGUE_HIGH.suggestBreak).toBe(true);
    });

    it('should have FATIGUE_MODERATE preset', () => {
      expect(OVERRIDE_PRESETS.FATIGUE_MODERATE.maxDifficulty).toBe(5);
      expect(OVERRIDE_PRESETS.FATIGUE_MODERATE.reduceTasksCount).toBe(true);
    });

    it('should have PLATEAU_STAGNATION preset', () => {
      expect(OVERRIDE_PRESETS.PLATEAU_STAGNATION.switchToSimplerFormat).toBe(true);
      expect(OVERRIDE_PRESETS.PLATEAU_STAGNATION.requireExtraExamples).toBe(true);
    });

    it('should have PLATEAU_ERROR_PATTERN preset', () => {
      expect(OVERRIDE_PRESETS.PLATEAU_ERROR_PATTERN.blockNewConcepts).toBe(true);
      expect(OVERRIDE_PRESETS.PLATEAU_ERROR_PATTERN.simplificationLevel).toBe(2);
    });
  });
});
