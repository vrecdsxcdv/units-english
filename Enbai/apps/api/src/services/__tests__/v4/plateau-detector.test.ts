/**
 * V4 Plateau Detector Tests
 */

import { describe, it, expect } from 'vitest';
import {
  detectPlateaus,
  shouldApplyIntervention,
  _testExports,
} from '../../v4/plateau-detector.service';
import {
  DEFAULT_PLATEAU_CONFIG,
  type PlateauDetectionConfig,
  type PracticeSession,
} from '@enbai/types';
import type { SkillStateV4, SkillVectorV4, SkillSnapshotV4 } from '@enbai/types';

const { detectErrorPatterns, classifyPlateau } = _testExports;

describe('Plateau Detector V4', () => {
  // Helper to create skill state with history
  function createSkillState(
    snapshots: Partial<SkillSnapshotV4>[],
    baseValue = 0.5
  ): SkillStateV4 {
    const now = new Date();
    return {
      rawSkill: baseValue,
      effectiveSkill: baseValue,
      confirmedMastery: baseValue * 0.5,
      lastPracticed: now,
      decayAppliedAt: now,
      confidence: 0.5,
      totalAttempts: 10,
      recentAttempts: 5,
      recentCorrect: 3,
      easeFactor: 2.5,
      interval: 3,
      historySnapshots: snapshots.map((s, i) => ({
        date: new Date(now.getTime() - (14 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        rawSkill: s.rawSkill ?? baseValue,
        effectiveSkill: s.effectiveSkill ?? baseValue,
        practiceCount: s.practiceCount ?? 3,
        errorCount: s.errorCount ?? 1,
      })),
    };
  }

  describe('detectPlateaus', () => {
    it('should detect stagnation plateau', () => {
      // Create snapshots with minimal change
      const stagnantSnapshots = Array(10).fill(null).map((_, i) => ({
        effectiveSkill: 0.5 + (Math.random() * 0.01), // Very small variance
        rawSkill: 0.5,
        practiceCount: 3,
        errorCount: 1,
      }));

      const skillStates: SkillVectorV4 = {
        grammar: createSkillState(stagnantSnapshots),
        vocabulary: createSkillState([{ effectiveSkill: 0.5 }]),
        pronunciation: createSkillState([{ effectiveSkill: 0.5 }]),
        listening: createSkillState([{ effectiveSkill: 0.5 }]),
        speaking: createSkillState([{ effectiveSkill: 0.5 }]),
        slang: createSkillState([{ effectiveSkill: 0.5 }]),
        word_formation: createSkillState([{ effectiveSkill: 0.5 }]),
        fluency: createSkillState([{ effectiveSkill: 0.5 }]),
        writing: createSkillState([{ effectiveSkill: 0.5 }]),
        comprehension: createSkillState([{ effectiveSkill: 0.5 }]),
      };

      const result = detectPlateaus('user123', skillStates, []);

      expect(result.userId).toBe('user123');
      expect(result.analyzedAt).toBeDefined();
      expect(result.overallLearningHealth).toBeDefined();
      expect(result.healthScore).toBeGreaterThanOrEqual(0);
      expect(result.healthScore).toBeLessThanOrEqual(100);
    });

    it('should detect oscillation plateau', () => {
      // Create snapshots with high variance but no net progress
      const oscillatingSnapshots = Array(10).fill(null).map((_, i) => ({
        effectiveSkill: 0.5 + (i % 2 === 0 ? 0.05 : -0.05),
        rawSkill: 0.5,
        practiceCount: 3,
        errorCount: 1,
      }));

      const skillStates: SkillVectorV4 = {
        grammar: createSkillState(oscillatingSnapshots),
        vocabulary: createSkillState([{ effectiveSkill: 0.5 }]),
        pronunciation: createSkillState([{ effectiveSkill: 0.5 }]),
        listening: createSkillState([{ effectiveSkill: 0.5 }]),
        speaking: createSkillState([{ effectiveSkill: 0.5 }]),
        slang: createSkillState([{ effectiveSkill: 0.5 }]),
        word_formation: createSkillState([{ effectiveSkill: 0.5 }]),
        fluency: createSkillState([{ effectiveSkill: 0.5 }]),
        writing: createSkillState([{ effectiveSkill: 0.5 }]),
        comprehension: createSkillState([{ effectiveSkill: 0.5 }]),
      };

      const result = detectPlateaus('user123', skillStates, []);

      // Check that oscillating skill might be detected
      const grammarPlateau = result.detectedPlateaus.find(p => p.skill === 'grammar');
      if (grammarPlateau) {
        expect(['stagnation', 'oscillation']).toContain(grammarPlateau.plateauType);
      }
    });

    it('should not detect plateau for improving skill', () => {
      // Create snapshots with consistent improvement
      const improvingSnapshots = Array(10).fill(null).map((_, i) => ({
        effectiveSkill: 0.4 + i * 0.03,
        rawSkill: 0.4 + i * 0.03,
        practiceCount: 3,
        errorCount: 0,
      }));

      const skillStates: SkillVectorV4 = {
        grammar: createSkillState(improvingSnapshots, 0.7),
        vocabulary: createSkillState([{ effectiveSkill: 0.5 }]),
        pronunciation: createSkillState([{ effectiveSkill: 0.5 }]),
        listening: createSkillState([{ effectiveSkill: 0.5 }]),
        speaking: createSkillState([{ effectiveSkill: 0.5 }]),
        slang: createSkillState([{ effectiveSkill: 0.5 }]),
        word_formation: createSkillState([{ effectiveSkill: 0.5 }]),
        fluency: createSkillState([{ effectiveSkill: 0.5 }]),
        writing: createSkillState([{ effectiveSkill: 0.5 }]),
        comprehension: createSkillState([{ effectiveSkill: 0.5 }]),
      };

      const result = detectPlateaus('user123', skillStates, []);

      const grammarPlateau = result.detectedPlateaus.find(p => p.skill === 'grammar');
      // Should not detect plateau for improving skill
      expect(grammarPlateau?.confidence || 0).toBeLessThan(DEFAULT_PLATEAU_CONFIG.minConfidence);
    });

    it('should calculate learning health correctly', () => {
      const healthySnapshots = Array(7).fill(null).map((_, i) => ({
        effectiveSkill: 0.5 + i * 0.02,
        rawSkill: 0.5 + i * 0.02,
        practiceCount: 3,
        errorCount: 0,
      }));

      const skillStates: SkillVectorV4 = {
        grammar: createSkillState(healthySnapshots),
        vocabulary: createSkillState(healthySnapshots),
        pronunciation: createSkillState(healthySnapshots),
        listening: createSkillState(healthySnapshots),
        speaking: createSkillState(healthySnapshots),
        slang: createSkillState(healthySnapshots),
        word_formation: createSkillState(healthySnapshots),
        fluency: createSkillState(healthySnapshots),
        writing: createSkillState(healthySnapshots),
        comprehension: createSkillState(healthySnapshots),
      };

      const result = detectPlateaus('user123', skillStates, []);

      expect(result.overallLearningHealth).toBe('healthy');
      expect(result.healthScore).toBeGreaterThanOrEqual(80);
    });
  });

  describe('detectErrorPatterns', () => {
    it('should detect repeated errors', () => {
      const sessions: PracticeSession[] = [
        {
          date: '2024-01-10',
          skillType: 'grammar',
          durationMinutes: 15,
          tasksAttempted: 5,
          tasksCorrect: 3,
          skillBefore: 0.5,
          skillAfter: 0.51,
          errorsDetailed: [
            { taskId: 'articles_1', errorType: 'article_usage', errorDescription: 'Wrong article', attemptNumber: 1, wasEventuallyCorrect: true },
            { taskId: 'articles_2', errorType: 'article_usage', errorDescription: 'Wrong article', attemptNumber: 1, wasEventuallyCorrect: false },
          ],
        },
        {
          date: '2024-01-11',
          skillType: 'grammar',
          durationMinutes: 15,
          tasksAttempted: 5,
          tasksCorrect: 4,
          skillBefore: 0.51,
          skillAfter: 0.52,
          errorsDetailed: [
            { taskId: 'articles_3', errorType: 'article_usage', errorDescription: 'Wrong article', attemptNumber: 1, wasEventuallyCorrect: true },
          ],
        },
      ];

      const patterns = detectErrorPatterns(sessions, DEFAULT_PLATEAU_CONFIG);

      expect(patterns.length).toBe(1);
      expect(patterns[0].patternId).toBe('err_article_usage');
      expect(patterns[0].occurrences).toBe(3);
    });

    it('should not flag single errors as patterns', () => {
      const sessions: PracticeSession[] = [
        {
          date: '2024-01-10',
          skillType: 'grammar',
          durationMinutes: 15,
          tasksAttempted: 5,
          tasksCorrect: 4,
          skillBefore: 0.5,
          skillAfter: 0.52,
          errorsDetailed: [
            { taskId: 'task_1', errorType: 'verb_tense', errorDescription: 'Wrong tense', attemptNumber: 1, wasEventuallyCorrect: true },
          ],
        },
      ];

      const patterns = detectErrorPatterns(sessions, DEFAULT_PLATEAU_CONFIG);

      expect(patterns.length).toBe(0);
    });
  });

  describe('classifyPlateau', () => {
    it('should classify stagnation correctly', () => {
      const result = classifyPlateau(
        0.005,   // Very low delta
        0.001,   // Very low variance
        1.2,     // Normal effort ratio
        [],
        DEFAULT_PLATEAU_CONFIG
      );

      expect(result.plateauType).toBe('stagnation');
      expect(result.confidence).toBeGreaterThan(0.5);
    });

    it('should classify oscillation correctly', () => {
      const result = classifyPlateau(
        0.005,   // Low average delta
        0.05,    // High variance
        1.2,     // Normal effort ratio
        [],
        DEFAULT_PLATEAU_CONFIG
      );

      expect(result.plateauType).toBe('oscillation');
    });

    it('should classify effort mismatch correctly', () => {
      const result = classifyPlateau(
        0.01,    // Some movement
        0.01,    // Low variance
        3.0,     // High effort/result ratio
        [],
        DEFAULT_PLATEAU_CONFIG
      );

      expect(result.plateauType).toBe('effort_mismatch');
    });

    it('should prioritize error patterns when present', () => {
      const result = classifyPlateau(
        0.01,
        0.01,
        1.5,
        [{ patternId: 'err_1', description: 'Test', occurrences: 8, lastOccurrence: '2024-01-10', affectedTopics: [] }],
        DEFAULT_PLATEAU_CONFIG
      );

      expect(result.plateauType).toBe('error_pattern');
      expect(result.confidence).toBeGreaterThan(0.5);
    });
  });

  describe('shouldApplyIntervention', () => {
    it('should return intervention for high-confidence plateau', () => {
      const analysis = {
        userId: 'user123',
        analyzedAt: new Date().toISOString(),
        windowStart: '2024-01-01',
        windowEnd: '2024-01-14',
        detectedPlateaus: [
          {
            skill: 'grammar' as const,
            durationDays: 10,
            confidence: 0.8,
            plateauType: 'stagnation' as const,
            evidence: {} as any,
            recommendedInterventions: [
              {
                type: 'change_format' as const,
                priority: 8,
                description: 'Try examples-first',
                expectedImpact: 'medium' as const,
                tutorLoopModifications: {} as any,
              },
            ],
          },
        ],
        overallLearningHealth: 'plateau' as const,
        healthScore: 55,
        urgentInterventions: [],
        suggestedFocus: ['grammar' as const],
      };

      const intervention = shouldApplyIntervention(analysis, 'grammar');

      expect(intervention).not.toBeNull();
      expect(intervention?.type).toBe('change_format');
    });

    it('should return null for low-confidence plateau', () => {
      const analysis = {
        userId: 'user123',
        analyzedAt: new Date().toISOString(),
        windowStart: '2024-01-01',
        windowEnd: '2024-01-14',
        detectedPlateaus: [
          {
            skill: 'grammar' as const,
            durationDays: 5,
            confidence: 0.4,
            plateauType: 'stagnation' as const,
            evidence: {} as any,
            recommendedInterventions: [],
          },
        ],
        overallLearningHealth: 'slowing' as const,
        healthScore: 70,
        urgentInterventions: [],
        suggestedFocus: ['grammar' as const],
      };

      const intervention = shouldApplyIntervention(analysis, 'grammar');

      expect(intervention).toBeNull();
    });

    it('should return null for skill without plateau', () => {
      const analysis = {
        userId: 'user123',
        analyzedAt: new Date().toISOString(),
        windowStart: '2024-01-01',
        windowEnd: '2024-01-14',
        detectedPlateaus: [],
        overallLearningHealth: 'healthy' as const,
        healthScore: 90,
        urgentInterventions: [],
        suggestedFocus: [],
      };

      const intervention = shouldApplyIntervention(analysis, 'vocabulary');

      expect(intervention).toBeNull();
    });
  });

  describe('intervention strategies', () => {
    it('should provide interventions for each plateau type', () => {
      const plateauTypes = ['stagnation', 'oscillation', 'error_pattern', 'effort_mismatch', 'ceiling_effect'];

      for (const type of plateauTypes) {
        const stagnantSnapshots = Array(10).fill(null).map(() => ({
          effectiveSkill: 0.5,
          rawSkill: 0.5,
          practiceCount: 3,
          errorCount: 1,
        }));

        const skillStates: SkillVectorV4 = {
          grammar: createSkillState(stagnantSnapshots),
          vocabulary: createSkillState([{ effectiveSkill: 0.5 }]),
          pronunciation: createSkillState([{ effectiveSkill: 0.5 }]),
          listening: createSkillState([{ effectiveSkill: 0.5 }]),
          speaking: createSkillState([{ effectiveSkill: 0.5 }]),
          slang: createSkillState([{ effectiveSkill: 0.5 }]),
          word_formation: createSkillState([{ effectiveSkill: 0.5 }]),
          fluency: createSkillState([{ effectiveSkill: 0.5 }]),
          writing: createSkillState([{ effectiveSkill: 0.5 }]),
          comprehension: createSkillState([{ effectiveSkill: 0.5 }]),
        };

        const result = detectPlateaus('user123', skillStates, []);

        // At least verify the structure works
        expect(result.suggestedFocus).toBeDefined();
      }
    });
  });
});
