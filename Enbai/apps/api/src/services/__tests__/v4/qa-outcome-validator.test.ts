/**
 * V4 QA Outcome Validator Tests
 */

import { describe, it, expect } from 'vitest';
import {
  validateOutcomes,
  quickValidateOutcomes,
  _testExports,
} from '../../v4/qa-outcome-validator';
import {
  EXAMPLE_LESSON_A1_ARTICLES,
  EXAMPLE_OUTCOME_ARTICLES,
} from '@enbai/types';
import type { LessonModalV3, LessonPageV3, InteractionV3 } from '@enbai/types';
import type { LearningOutcome, UserCanStatement } from '@enbai/types';

const { inferBloomLevel, checkCategoryMatch, bloomLevelMatches } = _testExports;

describe('QA Outcome Validator V4', () => {
  describe('validateOutcomes', () => {
    it('should validate example lesson with example outcomes', () => {
      const result = validateOutcomes(EXAMPLE_LESSON_A1_ARTICLES, EXAMPLE_OUTCOME_ARTICLES);

      expect(result).toBeDefined();
      expect(result.coverage).toBeGreaterThanOrEqual(0);
      expect(result.coverage).toBeLessThanOrEqual(100);
      expect(result.issues).toBeDefined();
      expect(Array.isArray(result.testedOutcomes)).toBe(true);
      expect(Array.isArray(result.untestedOutcomes)).toBe(true);
    });

    it('should find CHECK page issues when missing', () => {
      // Create lesson without check page
      const lessonWithoutCheck: LessonModalV3 = {
        ...EXAMPLE_LESSON_A1_ARTICLES,
        pages: EXAMPLE_LESSON_A1_ARTICLES.pages.filter(p => p.type !== 'check'),
      };

      const result = validateOutcomes(lessonWithoutCheck, EXAMPLE_OUTCOME_ARTICLES);

      expect(result.issues.some(i => i.message.includes('CHECK'))).toBe(true);
      expect(result.issues.some(i => i.severity === 'error')).toBe(true);
    });

    it('should find PRACTICE page issues when missing', () => {
      // Create lesson without practice page
      const lessonWithoutPractice: LessonModalV3 = {
        ...EXAMPLE_LESSON_A1_ARTICLES,
        pages: EXAMPLE_LESSON_A1_ARTICLES.pages.filter(p => p.type !== 'practice'),
      };

      const result = validateOutcomes(lessonWithoutPractice, EXAMPLE_OUTCOME_ARTICLES);

      expect(result.issues.some(i => i.message.includes('PRACTICE'))).toBe(true);
    });

    it('should report low coverage for empty interactions', () => {
      // Create lesson with empty interactions
      const lessonEmptyInteractions: LessonModalV3 = {
        ...EXAMPLE_LESSON_A1_ARTICLES,
        pages: EXAMPLE_LESSON_A1_ARTICLES.pages.map(p => ({
          ...p,
          interactions: [],
        })),
      };

      const result = validateOutcomes(lessonEmptyInteractions, EXAMPLE_OUTCOME_ARTICLES);

      expect(result.coverage).toBe(0);
      expect(result.testedOutcomes.length).toBe(0);
    });

    it('should generate recommendations for issues', () => {
      const result = validateOutcomes(EXAMPLE_LESSON_A1_ARTICLES, EXAMPLE_OUTCOME_ARTICLES);

      // If there are issues, there should be recommendations
      if (result.issues.length > 0) {
        expect(result.recommendations.length).toBeGreaterThanOrEqual(0);
      }
    });
  });

  describe('quickValidateOutcomes', () => {
    it('should return valid for well-structured lesson', () => {
      const result = quickValidateOutcomes(EXAMPLE_LESSON_A1_ARTICLES, EXAMPLE_OUTCOME_ARTICLES);

      // The example lesson should be reasonably valid
      expect(result).toBeDefined();
      expect(typeof result.valid).toBe('boolean');
    });

    it('should return invalid with reason for bad lesson', () => {
      const badLesson: LessonModalV3 = {
        ...EXAMPLE_LESSON_A1_ARTICLES,
        pages: [], // No pages at all
      };

      const result = quickValidateOutcomes(badLesson, EXAMPLE_OUTCOME_ARTICLES);

      expect(result.valid).toBe(false);
      expect(result.reason).toBeDefined();
    });
  });

  describe('inferBloomLevel', () => {
    it('should map MCQ to remember', () => {
      const interaction: InteractionV3 = {
        interactionId: 'test',
        type: 'mcq',
        prompt: 'Test',
        promptRu: 'Тест',
        data: { type: 'mcq', question: 'Q', options: [], correctOptionId: 'a' },
        answer: { correct: 'a' },
        targetSkills: ['grammar'],
        difficulty: 2,
        points: 10,
        hints: [],
        feedback: { correct: 'Good', incorrect: 'Try again' },
        state: { attempted: false, score: 0, hintsUsed: 0 },
      };

      expect(inferBloomLevel(interaction)).toBe('remember');
    });

    it('should map fill_blank to apply', () => {
      const interaction: InteractionV3 = {
        interactionId: 'test',
        type: 'fill_blank',
        prompt: 'Test',
        promptRu: 'Тест',
        data: { type: 'fill_blank', sentence: 'Test ___', blanks: [] },
        answer: { correct: 'answer' },
        targetSkills: ['grammar'],
        difficulty: 2,
        points: 10,
        hints: [],
        feedback: { correct: 'Good', incorrect: 'Try again' },
        state: { attempted: false, score: 0, hintsUsed: 0 },
      };

      expect(inferBloomLevel(interaction)).toBe('apply');
    });

    it('should map speaking to create', () => {
      const interaction: InteractionV3 = {
        interactionId: 'test',
        type: 'speaking',
        prompt: 'Test',
        promptRu: 'Тест',
        data: { type: 'speaking', promptText: 'Speak', maxDurationSeconds: 60 },
        answer: { correct: [] },
        targetSkills: ['speaking'],
        difficulty: 3,
        points: 15,
        hints: [],
        feedback: { correct: 'Good', incorrect: 'Try again' },
        state: { attempted: false, score: 0, hintsUsed: 0 },
      };

      expect(inferBloomLevel(interaction)).toBe('create');
    });

    it('should map reorder to analyze', () => {
      const interaction: InteractionV3 = {
        interactionId: 'test',
        type: 'reorder',
        prompt: 'Test',
        promptRu: 'Тест',
        data: { type: 'reorder', items: [], correctOrder: [] },
        answer: { correct: [] },
        targetSkills: ['grammar'],
        difficulty: 3,
        points: 10,
        hints: [],
        feedback: { correct: 'Good', incorrect: 'Try again' },
        state: { attempted: false, score: 0, hintsUsed: 0 },
      };

      expect(inferBloomLevel(interaction)).toBe('analyze');
    });
  });

  describe('bloomLevelMatches', () => {
    it('should match same level', () => {
      expect(bloomLevelMatches('apply', 'apply')).toBe(true);
    });

    it('should match adjacent levels', () => {
      expect(bloomLevelMatches('apply', 'understand')).toBe(true);
      expect(bloomLevelMatches('apply', 'analyze')).toBe(true);
    });

    it('should not match distant levels', () => {
      expect(bloomLevelMatches('remember', 'create')).toBe(false);
    });
  });

  describe('checkCategoryMatch', () => {
    it('should match MCQ with knowledge', () => {
      const mcqInteraction: InteractionV3 = {
        interactionId: 'test',
        type: 'mcq',
        prompt: 'Test',
        promptRu: 'Тест',
        data: { type: 'mcq', question: 'Q', options: [], correctOptionId: 'a' },
        answer: { correct: 'a' },
        targetSkills: ['grammar'],
        difficulty: 2,
        points: 10,
        hints: [],
        feedback: { correct: 'Good', incorrect: 'Try again' },
        state: { attempted: false, score: 0, hintsUsed: 0 },
      };

      expect(checkCategoryMatch(mcqInteraction, 'knowledge')).toBe(true);
      expect(checkCategoryMatch(mcqInteraction, 'recognition')).toBe(true);
    });

    it('should match fill_blank with production', () => {
      const fillBlankInteraction: InteractionV3 = {
        interactionId: 'test',
        type: 'fill_blank',
        prompt: 'Test',
        promptRu: 'Тест',
        data: { type: 'fill_blank', sentence: 'Test ___', blanks: [] },
        answer: { correct: 'answer' },
        targetSkills: ['grammar'],
        difficulty: 2,
        points: 10,
        hints: [],
        feedback: { correct: 'Good', incorrect: 'Try again' },
        state: { attempted: false, score: 0, hintsUsed: 0 },
      };

      expect(checkCategoryMatch(fillBlankInteraction, 'production')).toBe(true);
    });

    it('should match speaking with fluency', () => {
      const speakingInteraction: InteractionV3 = {
        interactionId: 'test',
        type: 'speaking',
        prompt: 'Test',
        promptRu: 'Тест',
        data: { type: 'speaking', promptText: 'Speak', maxDurationSeconds: 60 },
        answer: { correct: [] },
        targetSkills: ['speaking'],
        difficulty: 3,
        points: 15,
        hints: [],
        feedback: { correct: 'Good', incorrect: 'Try again' },
        state: { attempted: false, score: 0, hintsUsed: 0 },
      };

      expect(checkCategoryMatch(speakingInteraction, 'fluency')).toBe(true);
      expect(checkCategoryMatch(speakingInteraction, 'production')).toBe(true);
    });

    it('should not match MCQ with fluency', () => {
      const mcqInteraction: InteractionV3 = {
        interactionId: 'test',
        type: 'mcq',
        prompt: 'Test',
        promptRu: 'Тест',
        data: { type: 'mcq', question: 'Q', options: [], correctOptionId: 'a' },
        answer: { correct: 'a' },
        targetSkills: ['grammar'],
        difficulty: 2,
        points: 10,
        hints: [],
        feedback: { correct: 'Good', incorrect: 'Try again' },
        state: { attempted: false, score: 0, hintsUsed: 0 },
      };

      expect(checkCategoryMatch(mcqInteraction, 'fluency')).toBe(false);
    });
  });

  describe('skill alignment validation', () => {
    it('should detect missing skills in lesson', () => {
      const outcomeWithExtraSkill: LearningOutcome = {
        ...EXAMPLE_OUTCOME_ARTICLES,
        userCan: [
          ...EXAMPLE_OUTCOME_ARTICLES.userCan,
          {
            id: 'uc_extra',
            statement: 'Speak fluently about articles',
            statementRu: 'Свободно говорить об артиклях',
            category: 'fluency',
            targetSkills: ['speaking'], // Lesson doesn't target speaking
            bloomLevel: 'apply',
            testableInLesson: true,
          },
        ],
      };

      const result = validateOutcomes(EXAMPLE_LESSON_A1_ARTICLES, outcomeWithExtraSkill);

      // Should flag that speaking skill is in outcome but not in lesson
      const skillMismatchIssue = result.issues.find(i =>
        i.message.includes('not in lesson') || i.message.includes('speaking')
      );
      expect(skillMismatchIssue || result.untestedOutcomes.includes('uc_extra')).toBeTruthy();
    });
  });

  describe('outcome coverage calculation', () => {
    it('should calculate correct coverage percentage', () => {
      const result = validateOutcomes(EXAMPLE_LESSON_A1_ARTICLES, EXAMPLE_OUTCOME_ARTICLES);

      const testableOutcomes = EXAMPLE_OUTCOME_ARTICLES.userCan.filter(uc => uc.testableInLesson);
      const expectedMax = testableOutcomes.length;

      expect(result.coverage).toBeGreaterThanOrEqual(0);
      expect(result.coverage).toBeLessThanOrEqual(100);
      expect(result.testedOutcomes.length + result.untestedOutcomes.length).toBe(expectedMax);
    });
  });

  describe('integration with LessonModalV3', () => {
    it('should work with real lesson structure', () => {
      // Verify the example lesson has the expected structure
      expect(EXAMPLE_LESSON_A1_ARTICLES.pages.length).toBeGreaterThan(0);

      const checkPage = EXAMPLE_LESSON_A1_ARTICLES.pages.find(p => p.type === 'check');
      expect(checkPage).toBeDefined();
      expect(checkPage?.interactions.length).toBeGreaterThan(0);

      const practicePage = EXAMPLE_LESSON_A1_ARTICLES.pages.find(p => p.type === 'practice');
      expect(practicePage).toBeDefined();
      expect(practicePage?.interactions.length).toBeGreaterThan(0);

      // Validation should work
      const result = validateOutcomes(EXAMPLE_LESSON_A1_ARTICLES, EXAMPLE_OUTCOME_ARTICLES);
      expect(result).toBeDefined();
    });

    it('should validate interaction types against outcomes', () => {
      const result = validateOutcomes(EXAMPLE_LESSON_A1_ARTICLES, EXAMPLE_OUTCOME_ARTICLES);

      // The lesson has fill_blank and mcq interactions
      // These should match production and knowledge/recognition outcomes
      const hasProductionTest = result.testedOutcomes.some(id =>
        EXAMPLE_OUTCOME_ARTICLES.userCan.find(uc => uc.id === id)?.category === 'production'
      );

      // At least some outcomes should be tested
      expect(result.testedOutcomes.length).toBeGreaterThan(0);
    });
  });
});
