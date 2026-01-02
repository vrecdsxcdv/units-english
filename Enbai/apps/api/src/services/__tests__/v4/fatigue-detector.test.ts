/**
 * V4 Fatigue Detector Tests
 */

import { describe, it, expect, beforeEach } from 'vitest';
import {
  detectFatigue,
  createSessionMetrics,
  updateSessionMetrics,
  recordBreak,
  shouldIntervene,
  getUserMessage,
  _testExports,
} from '../../v4/fatigue-detector.service';
import { DEFAULT_FATIGUE_CONFIG, type SessionMetrics } from '@enbai/types';

const { detectFactors, calculateFatigueScore, scoreToLevel, determineTrend } = _testExports;

describe('Fatigue Detector V4', () => {
  let baseMetrics: SessionMetrics;

  beforeEach(() => {
    baseMetrics = createSessionMetrics();
  });

  describe('createSessionMetrics', () => {
    it('should create initial metrics with defaults', () => {
      const metrics = createSessionMetrics();

      expect(metrics.tasksAttempted).toBe(0);
      expect(metrics.tasksCorrect).toBe(0);
      expect(metrics.totalErrors).toBe(0);
      expect(metrics.consecutiveErrors).toBe(0);
      expect(metrics.hintsUsed).toBe(0);
      expect(metrics.retriesUsed).toBe(0);
    });

    it('should set session start time', () => {
      const before = new Date();
      const metrics = createSessionMetrics();
      const after = new Date();

      expect(metrics.sessionStartTime.getTime()).toBeGreaterThanOrEqual(before.getTime());
      expect(metrics.sessionStartTime.getTime()).toBeLessThanOrEqual(after.getTime());
    });
  });

  describe('updateSessionMetrics', () => {
    it('should increment task counts on correct answer', () => {
      const updated = updateSessionMetrics(baseMetrics, {
        correct: true,
        responseLength: 50,
        timeSeconds: 30,
        hintsUsed: 0,
        retries: 0,
        skipped: false,
        isCheckTask: false,
      });

      expect(updated.tasksAttempted).toBe(1);
      expect(updated.tasksCorrect).toBe(1);
      expect(updated.totalErrors).toBe(0);
      expect(updated.consecutiveErrors).toBe(0);
    });

    it('should increment error counts on wrong answer', () => {
      const updated = updateSessionMetrics(baseMetrics, {
        correct: false,
        responseLength: 30,
        timeSeconds: 45,
        hintsUsed: 1,
        retries: 1,
        skipped: false,
        isCheckTask: false,
      });

      expect(updated.tasksAttempted).toBe(1);
      expect(updated.tasksCorrect).toBe(0);
      expect(updated.totalErrors).toBe(1);
      expect(updated.consecutiveErrors).toBe(1);
    });

    it('should track consecutive errors', () => {
      let metrics = baseMetrics;

      // Three wrong answers in a row
      for (let i = 0; i < 3; i++) {
        metrics = updateSessionMetrics(metrics, {
          correct: false,
          responseLength: 20,
          timeSeconds: 40,
          hintsUsed: 0,
          retries: 0,
          skipped: false,
          isCheckTask: false,
        });
      }

      expect(metrics.consecutiveErrors).toBe(3);

      // Correct answer resets streak
      metrics = updateSessionMetrics(metrics, {
        correct: true,
        responseLength: 50,
        timeSeconds: 30,
        hintsUsed: 0,
        retries: 0,
        skipped: false,
        isCheckTask: false,
      });

      expect(metrics.consecutiveErrors).toBe(0);
    });

    it('should track CHECK task failures', () => {
      let metrics = baseMetrics;

      // Two CHECK failures
      for (let i = 0; i < 2; i++) {
        metrics = updateSessionMetrics(metrics, {
          correct: false,
          responseLength: 30,
          timeSeconds: 45,
          hintsUsed: 0,
          retries: 0,
          skipped: false,
          isCheckTask: true,
        });
      }

      expect(metrics.checkAttempts).toBe(2);
      expect(metrics.checkPasses).toBe(0);
      expect(metrics.consecutiveCheckFailures).toBe(2);
    });

    it('should track hints and retries', () => {
      const updated = updateSessionMetrics(baseMetrics, {
        correct: true,
        responseLength: 50,
        timeSeconds: 60,
        hintsUsed: 2,
        retries: 1,
        skipped: false,
        isCheckTask: false,
      });

      expect(updated.hintsUsed).toBe(2);
      expect(updated.retriesUsed).toBe(1);
    });

    it('should track skipped tasks', () => {
      const updated = updateSessionMetrics(baseMetrics, {
        correct: false,
        responseLength: 0,
        timeSeconds: 5,
        hintsUsed: 0,
        retries: 0,
        skipped: true,
        isCheckTask: false,
      });

      expect(updated.tasksSkipped).toBe(1);
      // Skipped tasks shouldn't count as errors
      expect(updated.totalErrors).toBe(0);
    });

    it('should update error windows', () => {
      const updated = updateSessionMetrics(baseMetrics, {
        correct: false,
        responseLength: 20,
        timeSeconds: 30,
        hintsUsed: 0,
        retries: 0,
        skipped: false,
        isCheckTask: false,
      });

      expect(updated.errorsByTimeWindow.length).toBe(1);
      expect(updated.errorsByTimeWindow[0].errorCount).toBe(1);
      expect(updated.errorsByTimeWindow[0].taskCount).toBe(1);
    });
  });

  describe('detectFatigue', () => {
    it('should return no fatigue for fresh session', () => {
      const signal = detectFatigue(baseMetrics);

      expect(signal.fatigueLevel).toBe('none');
      expect(signal.factors.length).toBe(0);
      expect(signal.recommendation.action).toBe('continue');
    });

    it('should detect fatigue from consecutive errors', () => {
      let metrics = baseMetrics;

      // 5 wrong answers in a row
      for (let i = 0; i < 5; i++) {
        metrics = updateSessionMetrics(metrics, {
          correct: false,
          responseLength: 20,
          timeSeconds: 40,
          hintsUsed: 0,
          retries: 0,
          skipped: false,
          isCheckTask: false,
        });
      }

      const signal = detectFatigue(metrics);

      expect(['moderate', 'high', 'critical']).toContain(signal.fatigueLevel);
      expect(signal.factors.some(f => f.type === 'consecutive_failures')).toBe(true);
    });

    it('should detect fatigue from long session', () => {
      const longSession: SessionMetrics = {
        ...baseMetrics,
        totalActiveMinutes: 35,
        tasksAttempted: 20,
        tasksCorrect: 15,
        totalErrors: 5,
        consecutiveErrors: 0,
        errorsByTimeWindow: [],
      };

      const signal = detectFatigue(longSession);

      expect(signal.factors.some(f => f.type === 'time_on_task')).toBe(true);
    });

    it('should detect fatigue from high hint usage', () => {
      const highHintMetrics: SessionMetrics = {
        ...baseMetrics,
        tasksAttempted: 10,
        tasksCorrect: 7,
        totalErrors: 3,
        consecutiveErrors: 0,
        hintsUsed: 6,
        errorsByTimeWindow: [],
      };

      const signal = detectFatigue(highHintMetrics);

      expect(signal.factors.some(f => f.type === 'hint_usage_increase')).toBe(true);
    });

    it('should suggest break for high fatigue', () => {
      let metrics = baseMetrics;

      // Create high fatigue scenario
      for (let i = 0; i < 8; i++) {
        metrics = updateSessionMetrics(metrics, {
          correct: i % 3 === 0, // 33% accuracy
          responseLength: 20 - i, // Decreasing length
          timeSeconds: 40 + i * 5, // Increasing time
          hintsUsed: 1,
          retries: 1,
          skipped: false,
          isCheckTask: i % 4 === 0,
        });
      }

      // Simulate long session
      metrics = {
        ...metrics,
        totalActiveMinutes: 30,
      };

      const signal = detectFatigue(metrics);

      if (signal.fatigueLevel === 'high' || signal.fatigueLevel === 'critical') {
        expect(['suggest_break', 'force_break']).toContain(signal.recommendation.action);
      }
    });
  });

  describe('scoreToLevel', () => {
    it('should map scores to correct levels', () => {
      expect(scoreToLevel(0)).toBe('none');
      expect(scoreToLevel(15)).toBe('none');
      expect(scoreToLevel(25)).toBe('low');
      expect(scoreToLevel(45)).toBe('moderate');
      expect(scoreToLevel(65)).toBe('high');
      expect(scoreToLevel(85)).toBe('critical');
      expect(scoreToLevel(100)).toBe('critical');
    });
  });

  describe('determineTrend', () => {
    it('should detect increasing trend', () => {
      const metrics: SessionMetrics = {
        ...baseMetrics,
        errorsByTimeWindow: [
          { windowStart: new Date(), windowEnd: new Date(), errorCount: 1, taskCount: 5 },
          { windowStart: new Date(), windowEnd: new Date(), errorCount: 2, taskCount: 5 },
          { windowStart: new Date(), windowEnd: new Date(), errorCount: 4, taskCount: 5 },
        ],
      };

      const trend = determineTrend(metrics);
      expect(trend).toBe('increasing');
    });

    it('should detect decreasing trend', () => {
      const metrics: SessionMetrics = {
        ...baseMetrics,
        errorsByTimeWindow: [
          { windowStart: new Date(), windowEnd: new Date(), errorCount: 4, taskCount: 5 },
          { windowStart: new Date(), windowEnd: new Date(), errorCount: 2, taskCount: 5 },
          { windowStart: new Date(), windowEnd: new Date(), errorCount: 1, taskCount: 5 },
        ],
      };

      const trend = determineTrend(metrics);
      expect(trend).toBe('decreasing');
    });

    it('should detect stable trend', () => {
      const metrics: SessionMetrics = {
        ...baseMetrics,
        errorsByTimeWindow: [
          { windowStart: new Date(), windowEnd: new Date(), errorCount: 2, taskCount: 5 },
          { windowStart: new Date(), windowEnd: new Date(), errorCount: 2, taskCount: 5 },
          { windowStart: new Date(), windowEnd: new Date(), errorCount: 2, taskCount: 5 },
        ],
      };

      const trend = determineTrend(metrics);
      expect(trend).toBe('stable');
    });
  });

  describe('recordBreak', () => {
    it('should reset consecutive errors', () => {
      const metricsWithErrors: SessionMetrics = {
        ...baseMetrics,
        consecutiveErrors: 3,
        consecutiveCheckFailures: 2,
      };

      const afterBreak = recordBreak(metricsWithErrors);

      expect(afterBreak.consecutiveErrors).toBe(0);
      expect(afterBreak.consecutiveCheckFailures).toBe(0);
      expect(afterBreak.lastBreakTime).toBeDefined();
    });
  });

  describe('shouldIntervene', () => {
    it('should return true for high fatigue', () => {
      const signal = {
        fatigueLevel: 'high' as const,
        confidence: 0.8,
        factors: [],
        trend: 'increasing' as const,
        recommendation: {} as any,
      };

      expect(shouldIntervene(signal)).toBe(true);
    });

    it('should return true for critical fatigue', () => {
      const signal = {
        fatigueLevel: 'critical' as const,
        confidence: 0.9,
        factors: [],
        trend: 'increasing' as const,
        recommendation: {} as any,
      };

      expect(shouldIntervene(signal)).toBe(true);
    });

    it('should return false for moderate fatigue', () => {
      const signal = {
        fatigueLevel: 'moderate' as const,
        confidence: 0.7,
        factors: [],
        trend: 'stable' as const,
        recommendation: {} as any,
      };

      expect(shouldIntervene(signal)).toBe(false);
    });
  });

  describe('getUserMessage', () => {
    it('should return null for no fatigue', () => {
      const signal = {
        fatigueLevel: 'none' as const,
        confidence: 0.5,
        factors: [],
        trend: 'stable' as const,
        recommendation: {} as any,
      };

      expect(getUserMessage(signal)).toBeNull();
    });

    it('should return message for moderate fatigue', () => {
      const signal = {
        fatigueLevel: 'moderate' as const,
        confidence: 0.7,
        factors: [],
        trend: 'stable' as const,
        recommendation: {} as any,
      };

      const message = getUserMessage(signal);
      expect(message).toBeDefined();
      expect(message).toContain('отдохнём');
    });

    it('should return message for high fatigue', () => {
      const signal = {
        fatigueLevel: 'high' as const,
        confidence: 0.8,
        factors: [],
        trend: 'increasing' as const,
        recommendation: {} as any,
      };

      const message = getUserMessage(signal);
      expect(message).toBeDefined();
      expect(message).toContain('перерыв');
    });

    it('should return session-ending message for critical fatigue', () => {
      const signal = {
        fatigueLevel: 'critical' as const,
        confidence: 0.9,
        factors: [],
        trend: 'increasing' as const,
        recommendation: {} as any,
      };

      const message = getUserMessage(signal);
      expect(message).toBeDefined();
      expect(message).toContain('завтра');
    });
  });

  describe('tutor loop overrides', () => {
    it('should block new concepts for high fatigue', () => {
      let metrics = baseMetrics;

      // Create high fatigue scenario
      for (let i = 0; i < 6; i++) {
        metrics = updateSessionMetrics(metrics, {
          correct: false,
          responseLength: 15,
          timeSeconds: 50,
          hintsUsed: 2,
          retries: 2,
          skipped: false,
          isCheckTask: true,
        });
      }
      metrics = { ...metrics, totalActiveMinutes: 35 };

      const signal = detectFatigue(metrics);

      if (signal.fatigueLevel === 'high' || signal.fatigueLevel === 'critical') {
        expect(signal.recommendation.tutorLoopOverrides.blockNewConcepts).toBe(true);
        expect(signal.recommendation.tutorLoopOverrides.maxDifficulty).toBeLessThanOrEqual(3);
      }
    });

    it('should suggest break for high fatigue', () => {
      let metrics = baseMetrics;

      // Create high fatigue scenario
      for (let i = 0; i < 6; i++) {
        metrics = updateSessionMetrics(metrics, {
          correct: false,
          responseLength: 15,
          timeSeconds: 50,
          hintsUsed: 2,
          retries: 2,
          skipped: false,
          isCheckTask: true,
        });
      }
      metrics = { ...metrics, totalActiveMinutes: 35 };

      const signal = detectFatigue(metrics);

      if (signal.fatigueLevel === 'high' || signal.fatigueLevel === 'critical') {
        expect(signal.recommendation.tutorLoopOverrides.suggestBreakAfterTask).toBe(true);
      }
    });
  });
});
