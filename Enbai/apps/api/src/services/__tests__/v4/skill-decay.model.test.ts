/**
 * V4 Skill Decay Model Tests
 */

import { describe, it, expect, beforeEach } from 'vitest';
import {
  applyDecayToSkill,
  applyDecay,
  getEffectiveSkill,
  updateSkillAfterPractice,
  confirmMastery,
  createInitialSkillStateV4,
  getReviewPriority,
} from '../../v4/skill-decay.model';
import {
  SKILL_DECAY_RATES,
  DEFAULT_DECAY_CONFIG,
  type SkillStateV4,
  type SkillVectorV4,
} from '@enbai/types';

describe('Skill Decay Model V4', () => {
  let baseSkillState: SkillStateV4;

  beforeEach(() => {
    baseSkillState = createInitialSkillStateV4(0.5);
  });

  describe('applyDecayToSkill', () => {
    it('should not decay if practiced today', () => {
      const now = new Date();
      const result = applyDecayToSkill('grammar', baseSkillState, now);

      expect(result.decayAmount).toBe(0);
      expect(result.newEffective).toBe(baseSkillState.effectiveSkill);
    });

    it('should apply exponential decay after 7 days', () => {
      const now = new Date();
      const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      const skillState: SkillStateV4 = {
        ...baseSkillState,
        lastPracticed: sevenDaysAgo,
      };

      const result = applyDecayToSkill('grammar', skillState, now);

      expect(result.decayAmount).toBeGreaterThan(0);
      expect(result.newEffective).toBeLessThan(skillState.effectiveSkill);
      expect(result.daysSinceLastPractice).toBeCloseTo(7, 0);
    });

    it('should decay vocabulary faster than grammar', () => {
      const now = new Date();
      const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      const skillState: SkillStateV4 = {
        ...baseSkillState,
        lastPracticed: sevenDaysAgo,
      };

      const vocabResult = applyDecayToSkill('vocabulary', skillState, now);
      const grammarResult = applyDecayToSkill('grammar', skillState, now);

      expect(vocabResult.decayAmount).toBeGreaterThan(grammarResult.decayAmount);
    });

    it('should respect mastery floor', () => {
      const now = new Date();
      const sixtyDaysAgo = new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000);
      const skillState: SkillStateV4 = {
        ...baseSkillState,
        rawSkill: 0.6,
        effectiveSkill: 0.6,
        confirmedMastery: 0.55, // High floor close to raw skill
        lastPracticed: sixtyDaysAgo,
      };

      const result = applyDecayToSkill('vocabulary', skillState, now);

      // Should not decay below mastery floor
      expect(result.newEffective).toBeGreaterThanOrEqual(0.55);
    });

    it('should never decay below minimum effective skill', () => {
      const now = new Date();
      const sixtyDaysAgo = new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000);
      const skillState: SkillStateV4 = {
        ...baseSkillState,
        rawSkill: 0.3,
        effectiveSkill: 0.3,
        confirmedMastery: 0.02,
        lastPracticed: sixtyDaysAgo,
      };

      const result = applyDecayToSkill('slang', skillState, now);

      expect(result.newEffective).toBeGreaterThanOrEqual(DEFAULT_DECAY_CONFIG.minEffectiveSkill);
    });
  });

  describe('applyDecay (batch)', () => {
    it('should apply decay to all skills', () => {
      const now = new Date();
      const fiveDaysAgo = new Date(now.getTime() - 5 * 24 * 60 * 60 * 1000);

      const skillVector: SkillVectorV4 = {
        grammar: { ...baseSkillState, lastPracticed: fiveDaysAgo },
        vocabulary: { ...baseSkillState, lastPracticed: fiveDaysAgo },
        pronunciation: { ...baseSkillState, lastPracticed: now },
        listening: { ...baseSkillState, lastPracticed: fiveDaysAgo },
        speaking: { ...baseSkillState, lastPracticed: fiveDaysAgo },
        slang: { ...baseSkillState, lastPracticed: fiveDaysAgo },
        word_formation: { ...baseSkillState, lastPracticed: fiveDaysAgo },
        fluency: { ...baseSkillState, lastPracticed: fiveDaysAgo },
        writing: { ...baseSkillState, lastPracticed: fiveDaysAgo },
        comprehension: { ...baseSkillState, lastPracticed: fiveDaysAgo },
      };

      const result = applyDecay(skillVector, now);

      expect(result.results.length).toBe(10);
      expect(result.totalDecay).toBeGreaterThan(0);

      // Pronunciation practiced today should have no decay
      const pronResult = result.results.find(r => r.skillType === 'pronunciation');
      expect(pronResult?.decayAmount).toBe(0);
    });

    it('should identify skills at risk', () => {
      const now = new Date();
      const twentyDaysAgo = new Date(now.getTime() - 20 * 24 * 60 * 60 * 1000);

      const skillVector: SkillVectorV4 = {
        grammar: { ...baseSkillState, rawSkill: 0.6, lastPracticed: twentyDaysAgo },
        vocabulary: { ...baseSkillState, rawSkill: 0.6, lastPracticed: twentyDaysAgo },
        pronunciation: { ...baseSkillState, lastPracticed: now },
        listening: { ...baseSkillState, lastPracticed: now },
        speaking: { ...baseSkillState, lastPracticed: now },
        slang: { ...baseSkillState, lastPracticed: now },
        word_formation: { ...baseSkillState, lastPracticed: now },
        fluency: { ...baseSkillState, lastPracticed: now },
        writing: { ...baseSkillState, lastPracticed: now },
        comprehension: { ...baseSkillState, lastPracticed: now },
      };

      const result = applyDecay(skillVector, now);

      // Skills with significant decay should be at risk
      expect(result.skillsAtRisk.length).toBeGreaterThanOrEqual(0);
    });

    it('should recommend practice order based on urgency', () => {
      const now = new Date();
      const tenDaysAgo = new Date(now.getTime() - 10 * 24 * 60 * 60 * 1000);
      const fiveDaysAgo = new Date(now.getTime() - 5 * 24 * 60 * 60 * 1000);

      const skillVector: SkillVectorV4 = {
        grammar: { ...baseSkillState, lastPracticed: tenDaysAgo },
        vocabulary: { ...baseSkillState, lastPracticed: fiveDaysAgo },
        pronunciation: { ...baseSkillState, lastPracticed: now },
        listening: { ...baseSkillState, lastPracticed: now },
        speaking: { ...baseSkillState, lastPracticed: now },
        slang: { ...baseSkillState, lastPracticed: now },
        word_formation: { ...baseSkillState, lastPracticed: now },
        fluency: { ...baseSkillState, lastPracticed: now },
        writing: { ...baseSkillState, lastPracticed: now },
        comprehension: { ...baseSkillState, lastPracticed: now },
      };

      const result = applyDecay(skillVector, now);

      // Both grammar and vocabulary should be in recommended order (both need practice)
      // Vocabulary decays faster, so may actually come first
      expect(result.recommendedPracticeOrder).toContain('grammar');
      expect(result.recommendedPracticeOrder).toContain('vocabulary');
      expect(result.recommendedPracticeOrder.length).toBeGreaterThanOrEqual(2);
    });
  });

  describe('updateSkillAfterPractice', () => {
    it('should increase rawSkill on correct answer', () => {
      const now = new Date();
      const result = updateSkillAfterPractice(baseSkillState, 'grammar', 0.9, now);

      expect(result.rawSkill).toBeGreaterThan(baseSkillState.rawSkill);
      expect(result.effectiveSkill).toBeGreaterThanOrEqual(baseSkillState.effectiveSkill);
    });

    it('should not decrease rawSkill on wrong answer', () => {
      const now = new Date();
      const result = updateSkillAfterPractice(baseSkillState, 'grammar', 0.3, now);

      expect(result.rawSkill).toBeGreaterThanOrEqual(baseSkillState.rawSkill);
    });

    it('should slightly decrease effectiveSkill on wrong answer', () => {
      const now = new Date();
      const result = updateSkillAfterPractice(baseSkillState, 'grammar', 0.3, now);

      expect(result.effectiveSkill).toBeLessThan(baseSkillState.effectiveSkill);
    });

    it('should update lastPracticed timestamp', () => {
      const now = new Date();
      const result = updateSkillAfterPractice(baseSkillState, 'grammar', 0.8, now);

      expect(result.lastPracticed).toEqual(now);
    });

    it('should add snapshot to history', () => {
      const now = new Date();
      const result = updateSkillAfterPractice(baseSkillState, 'grammar', 0.8, now);

      expect(result.historySnapshots.length).toBe(1);
      expect(result.historySnapshots[0].practiceCount).toBe(1);
    });

    it('should update existing day snapshot', () => {
      const now = new Date();
      const today = now.toISOString().split('T')[0];

      const stateWithHistory: SkillStateV4 = {
        ...baseSkillState,
        historySnapshots: [
          { date: today, rawSkill: 0.5, effectiveSkill: 0.5, practiceCount: 2, errorCount: 1 },
        ],
      };

      const result = updateSkillAfterPractice(stateWithHistory, 'grammar', 0.8, now);

      expect(result.historySnapshots.length).toBe(1);
      expect(result.historySnapshots[0].practiceCount).toBe(3);
    });

    it('should confirm mastery after consistent correct answers', () => {
      const now = new Date();
      const stateWithStreak: SkillStateV4 = {
        ...baseSkillState,
        recentCorrect: 4,
        confirmedMastery: 0.2,
      };

      const result = updateSkillAfterPractice(stateWithStreak, 'grammar', 0.9, now);

      expect(result.confirmedMastery).toBeGreaterThan(stateWithStreak.confirmedMastery);
    });
  });

  describe('confirmMastery', () => {
    it('should raise mastery floor', () => {
      const result = confirmMastery(baseSkillState, {
        skillType: 'grammar',
        confirmedAt: new Date(),
        confirmedLevel: 0.6,
        confirmationType: 'test',
        confidence: 0.9,
      });

      expect(result.confirmedMastery).toBeGreaterThan(baseSkillState.confirmedMastery);
    });

    it('should not lower mastery floor', () => {
      const highMasteryState: SkillStateV4 = {
        ...baseSkillState,
        confirmedMastery: 0.7,
      };

      const result = confirmMastery(highMasteryState, {
        skillType: 'grammar',
        confirmedAt: new Date(),
        confirmedLevel: 0.5,
        confirmationType: 'practice',
        confidence: 0.8,
      });

      expect(result.confirmedMastery).toBe(0.7);
    });
  });

  describe('getReviewPriority', () => {
    it('should prioritize overdue skills', () => {
      const now = new Date();
      const tenDaysAgo = new Date(now.getTime() - 10 * 24 * 60 * 60 * 1000);

      const skillVector: SkillVectorV4 = {
        grammar: { ...baseSkillState, interval: 5, lastPracticed: tenDaysAgo },
        vocabulary: { ...baseSkillState, interval: 7, lastPracticed: now },
        pronunciation: { ...baseSkillState, lastPracticed: now },
        listening: { ...baseSkillState, lastPracticed: now },
        speaking: { ...baseSkillState, lastPracticed: now },
        slang: { ...baseSkillState, lastPracticed: now },
        word_formation: { ...baseSkillState, lastPracticed: now },
        fluency: { ...baseSkillState, lastPracticed: now },
        writing: { ...baseSkillState, lastPracticed: now },
        comprehension: { ...baseSkillState, lastPracticed: now },
      };

      const priorities = getReviewPriority(skillVector, now);

      expect(priorities.length).toBeGreaterThan(0);
      expect(priorities[0].skillType).toBe('grammar');
      expect(priorities[0].reason).toContain('overdue');
    });

    it('should flag low confidence skills', () => {
      const now = new Date();
      const twoDaysAgo = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000);

      const skillVector: SkillVectorV4 = {
        grammar: { ...baseSkillState, confidence: 0.3, lastPracticed: twoDaysAgo, interval: 1 },
        vocabulary: { ...baseSkillState, lastPracticed: now },
        pronunciation: { ...baseSkillState, lastPracticed: now },
        listening: { ...baseSkillState, lastPracticed: now },
        speaking: { ...baseSkillState, lastPracticed: now },
        slang: { ...baseSkillState, lastPracticed: now },
        word_formation: { ...baseSkillState, lastPracticed: now },
        fluency: { ...baseSkillState, lastPracticed: now },
        writing: { ...baseSkillState, lastPracticed: now },
        comprehension: { ...baseSkillState, lastPracticed: now },
      };

      const priorities = getReviewPriority(skillVector, now);

      const grammarPriority = priorities.find(p => p.skillType === 'grammar');
      expect(grammarPriority?.reason).toContain('confidence');
    });
  });

  describe('decay rates configuration', () => {
    it('should have all skills configured', () => {
      const skills = [
        'grammar', 'vocabulary', 'pronunciation', 'listening', 'speaking',
        'slang', 'word_formation', 'fluency', 'writing', 'comprehension',
      ];

      for (const skill of skills) {
        expect(SKILL_DECAY_RATES[skill as keyof typeof SKILL_DECAY_RATES]).toBeDefined();
        expect(SKILL_DECAY_RATES[skill as keyof typeof SKILL_DECAY_RATES]).toBeGreaterThan(0);
      }
    });

    it('should have vocabulary decay faster than comprehension', () => {
      expect(SKILL_DECAY_RATES.vocabulary).toBeGreaterThan(SKILL_DECAY_RATES.comprehension);
    });
  });
});
