/**
 * Tests for Skill Update Algorithm
 */

import { describe, it, expect, beforeEach } from 'vitest';
import {
  updateSkillVector,
  createInitialSkillState,
  applyDecay,
  calculateDelta,
  SkillState,
  TaskEvaluation,
  LearnerProfile,
} from '../skill-update';
import type { SkillKey } from '@enbai/types';

// Helper to create skill state
function createTestSkillState(overrides: Partial<SkillState> = {}): SkillState {
  return {
    value: 0.5,
    confidence: 0.5,
    lastPracticed: new Date(),
    totalAttempts: 10,
    recentAttempts: 5,
    recentCorrect: 3,
    easeFactor: 2.5,
    interval: 1,
    ...overrides,
  };
}

// Helper to create full skill vector
function createTestSkillVector(): Record<SkillKey, SkillState> {
  const skills: SkillKey[] = [
    'grammar', 'vocabulary', 'pronunciation', 'listening', 'speaking',
    'slang', 'word_formation', 'fluency', 'writing', 'comprehension'
  ];

  const vector: Partial<Record<SkillKey, SkillState>> = {};
  for (const skill of skills) {
    vector[skill] = createTestSkillState();
  }
  return vector as Record<SkillKey, SkillState>;
}

describe('Skill Update Algorithm', () => {
  describe('updateSkillVector', () => {
    let skillVector: Record<SkillKey, SkillState>;
    let learnerProfile: LearnerProfile;

    beforeEach(() => {
      skillVector = createTestSkillVector();
      learnerProfile = {
        learningAbility: 0.5,
        dailyTimeMinutes: 30,
        streak: 5,
      };
    });

    it('should increase skill value on correct answer', () => {
      const evaluation: TaskEvaluation = {
        isCorrect: true,
        score: 1.0,
        skillScores: { grammar: 1.0 },
        taskDifficulty: 0.5,
        skillWeights: { grammar: 1.0 },
        confidence: 0.9,
      };

      const before = skillVector.grammar.value;
      const updated = updateSkillVector(skillVector, evaluation, learnerProfile);

      expect(updated.grammar.value).toBeGreaterThan(before);
    });

    it('should decrease skill value on wrong answer', () => {
      const evaluation: TaskEvaluation = {
        isCorrect: false,
        score: 0.2,
        skillScores: { grammar: 0.2 },
        taskDifficulty: 0.5,
        skillWeights: { grammar: 1.0 },
        confidence: 0.9,
      };

      const before = skillVector.grammar.value;
      const updated = updateSkillVector(skillVector, evaluation, learnerProfile);

      expect(updated.grammar.value).toBeLessThan(before);
    });

    it('should give bigger reward for harder tasks', () => {
      const easyEval: TaskEvaluation = {
        isCorrect: true,
        score: 1.0,
        skillScores: {},
        taskDifficulty: 0.2,
        skillWeights: { grammar: 1.0 },
        confidence: 0.9,
      };

      const hardEval: TaskEvaluation = {
        isCorrect: true,
        score: 1.0,
        skillScores: {},
        taskDifficulty: 0.8,
        skillWeights: { grammar: 1.0 },
        confidence: 0.9,
      };

      const afterEasy = updateSkillVector({ ...skillVector }, easyEval, learnerProfile);
      const afterHard = updateSkillVector({ ...skillVector }, hardEval, learnerProfile);

      expect(afterHard.grammar.value).toBeGreaterThan(afterEasy.grammar.value);
    });

    it('should update multiple skills based on weights', () => {
      const evaluation: TaskEvaluation = {
        isCorrect: true,
        score: 1.0,
        skillScores: { grammar: 0.8, vocabulary: 1.0 },
        taskDifficulty: 0.5,
        skillWeights: { grammar: 0.6, vocabulary: 0.4 },
        confidence: 0.9,
      };

      const beforeGrammar = skillVector.grammar.value;
      const beforeVocab = skillVector.vocabulary.value;
      const updated = updateSkillVector(skillVector, evaluation, learnerProfile);

      expect(updated.grammar.value).toBeGreaterThan(beforeGrammar);
      expect(updated.vocabulary.value).toBeGreaterThan(beforeVocab);
    });

    it('should respect bounds (0-1)', () => {
      // Test upper bound
      skillVector.grammar.value = 0.98;
      const highEval: TaskEvaluation = {
        isCorrect: true,
        score: 1.0,
        skillScores: {},
        taskDifficulty: 0.9,
        skillWeights: { grammar: 1.0 },
        confidence: 0.9,
      };
      const afterHigh = updateSkillVector(skillVector, highEval, learnerProfile);
      expect(afterHigh.grammar.value).toBeLessThanOrEqual(0.98);

      // Test lower bound
      skillVector.grammar.value = 0.05;
      const lowEval: TaskEvaluation = {
        isCorrect: false,
        score: 0.0,
        skillScores: {},
        taskDifficulty: 0.1,
        skillWeights: { grammar: 1.0 },
        confidence: 0.9,
      };
      const afterLow = updateSkillVector(skillVector, lowEval, learnerProfile);
      expect(afterLow.grammar.value).toBeGreaterThanOrEqual(0.05);
    });

    it('should factor in learningAbility', () => {
      const evaluation: TaskEvaluation = {
        isCorrect: true,
        score: 1.0,
        skillScores: {},
        taskDifficulty: 0.5,
        skillWeights: { grammar: 1.0 },
        confidence: 0.9,
      };

      const slowLearner: LearnerProfile = { ...learnerProfile, learningAbility: 0.2 };
      const fastLearner: LearnerProfile = { ...learnerProfile, learningAbility: 0.9 };

      const afterSlow = updateSkillVector({ ...skillVector }, evaluation, slowLearner);
      const afterFast = updateSkillVector({ ...skillVector }, evaluation, fastLearner);

      expect(afterFast.grammar.value).toBeGreaterThan(afterSlow.grammar.value);
    });

    it('should increase confidence with more attempts', () => {
      const evaluation: TaskEvaluation = {
        isCorrect: true,
        score: 1.0,
        skillScores: {},
        taskDifficulty: 0.5,
        skillWeights: { grammar: 1.0 },
        confidence: 0.9,
      };

      const beforeConfidence = skillVector.grammar.confidence;
      const updated = updateSkillVector(skillVector, evaluation, learnerProfile);

      expect(updated.grammar.confidence).toBeGreaterThan(beforeConfidence);
    });
  });

  describe('Decay', () => {
    it('should decay skill value over time', () => {
      const lastPracticed = new Date();
      lastPracticed.setDate(lastPracticed.getDate() - 7); // 7 days ago

      const decayed = applyDecay(0.5, lastPracticed, new Date());
      expect(decayed).toBeLessThan(0.5);
    });

    it('should not decay below minimum', () => {
      const lastPracticed = new Date();
      lastPracticed.setDate(lastPracticed.getDate() - 100); // Long time ago

      const decayed = applyDecay(0.5, lastPracticed, new Date());
      expect(decayed).toBeGreaterThanOrEqual(0.05);
    });

    it('should not decay if recently practiced', () => {
      const decayed = applyDecay(0.5, new Date(), new Date());
      expect(decayed).toBe(0.5);
    });
  });

  describe('Edge Cases', () => {
    it('should handle partial scores', () => {
      const skillVector = createTestSkillVector();
      const evaluation: TaskEvaluation = {
        isCorrect: true,
        score: 0.75,
        skillScores: { grammar: 0.75 },
        taskDifficulty: 0.5,
        skillWeights: { grammar: 1.0 },
        confidence: 0.9,
      };

      const before = skillVector.grammar.value;
      const updated = updateSkillVector(skillVector, evaluation, {
        learningAbility: 0.5,
        dailyTimeMinutes: 30,
        streak: 0,
      });

      // Partial score should still increase (0.75 >= 0.6 threshold)
      expect(updated.grammar.value).toBeGreaterThan(before);
    });

    it('should handle zero skill weight', () => {
      const skillVector = createTestSkillVector();
      const before = skillVector.vocabulary.value;

      const evaluation: TaskEvaluation = {
        isCorrect: true,
        score: 1.0,
        skillScores: {},
        taskDifficulty: 0.5,
        skillWeights: { grammar: 1.0, vocabulary: 0 },
        confidence: 0.9,
      };

      const updated = updateSkillVector(skillVector, evaluation, {
        learningAbility: 0.5,
        dailyTimeMinutes: 30,
        streak: 0,
      });

      // Vocabulary should not change (weight = 0)
      expect(updated.vocabulary.value).toBe(before);
    });

    it('should handle low evaluator confidence', () => {
      const skillVector = createTestSkillVector();

      const highConfidence: TaskEvaluation = {
        isCorrect: true,
        score: 1.0,
        skillScores: {},
        taskDifficulty: 0.5,
        skillWeights: { grammar: 1.0 },
        confidence: 0.95,
      };

      const lowConfidence: TaskEvaluation = {
        isCorrect: true,
        score: 1.0,
        skillScores: {},
        taskDifficulty: 0.5,
        skillWeights: { grammar: 1.0 },
        confidence: 0.3,
      };

      const learnerProfile = {
        learningAbility: 0.5,
        dailyTimeMinutes: 30,
        streak: 0,
      };

      const afterHigh = updateSkillVector({ ...skillVector }, highConfidence, learnerProfile);
      const afterLow = updateSkillVector({ ...skillVector }, lowConfidence, learnerProfile);

      // High confidence should result in bigger change
      expect(Math.abs(afterHigh.grammar.value - 0.5))
        .toBeGreaterThan(Math.abs(afterLow.grammar.value - 0.5));
    });
  });
});
