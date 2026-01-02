/**
 * V4 Learning Outcomes Types
 *
 * Every lesson must have measurable outcomes.
 * QA validates that practice actually tests outcomes.
 */

import type { SkillType } from './skills';

/**
 * Learning outcome for a lesson
 */
export interface LearningOutcome {
  // What user will be able to do after lesson
  userCan: UserCanStatement[];

  // How we measure success
  successCriteria: SuccessCriterion[];

  // CEFR alignment
  cefrDescriptors: string[];

  // Estimated mastery time
  masteryRequirements: MasteryRequirement;
}

/**
 * Single "user can" statement (observable behavior)
 */
export interface UserCanStatement {
  id: string;

  // The statement (always starts with verb)
  statement: string;            // e.g., "correctly choose between 'a' and 'an'"
  statementRu: string;          // e.g., "правильно выбирать между 'a' и 'an'"

  // Category of outcome
  category: OutcomeCategory;

  // Which skills this maps to
  targetSkills: SkillType[];

  // Bloom's taxonomy level
  bloomLevel: BloomLevel;

  // Is this testable in lesson?
  testableInLesson: boolean;
}

/**
 * Bloom's taxonomy levels
 */
export type BloomLevel =
  | 'remember'      // Recall facts
  | 'understand'    // Explain ideas
  | 'apply'         // Use in new situations
  | 'analyze'       // Draw connections
  | 'evaluate'      // Justify decisions
  | 'create';       // Produce new work

/**
 * Outcome categories
 */
export type OutcomeCategory =
  | 'knowledge'     // Know the rule/concept
  | 'recognition'   // Recognize correct/incorrect usage
  | 'production'    // Produce correct output
  | 'fluency'       // Use automatically
  | 'transfer';     // Apply to new contexts

/**
 * Success criterion (measurable)
 */
export interface SuccessCriterion {
  id: string;

  // What to measure
  metric: SuccessMetric;

  // Threshold for success
  threshold: number;

  // Comparison operator
  operator: 'gte' | 'lte' | 'eq' | 'between';

  // Upper bound (for 'between')
  upperBound?: number;

  // Description
  description: string;
  descriptionRu: string;
}

/**
 * Metrics that can be measured
 */
export type SuccessMetric =
  | 'accuracy_percent'       // % correct answers
  | 'attempts_count'         // Number of attempts before success
  | 'time_seconds'           // Time to complete
  | 'hints_used'             // Hints requested
  | 'retry_count'            // Retries needed
  | 'confidence_score'       // Self-reported confidence
  | 'skill_delta';           // Change in skill value

/**
 * Mastery requirements
 */
export interface MasteryRequirement {
  // Minimum score to pass lesson
  minPassScore: number;             // 0-100

  // Score to consider mastered
  masteryScore: number;             // 0-100

  // For spaced repetition
  recommendedReviewAfterDays: number;

  // Expected time to mastery (sessions)
  expectedSessions: number;
}

/**
 * Outcome validation result
 */
export interface OutcomeValidation {
  isValid: boolean;

  // Which outcomes are tested
  testedOutcomes: string[];         // UserCanStatement IDs

  // Which outcomes are NOT tested
  untestedOutcomes: string[];       // UserCanStatement IDs

  // Coverage percentage
  coverage: number;                 // 0-100

  // Issues found
  issues: OutcomeIssue[];

  // Recommendations
  recommendations: string[];
}

/**
 * Issue with outcome coverage
 */
export interface OutcomeIssue {
  severity: 'error' | 'warning' | 'info';
  outcomeId?: string;
  message: string;
  messageRu: string;
  suggestion?: string;
}

/**
 * Mapping between interaction and outcomes
 */
export interface InteractionOutcomeMapping {
  interactionId: string;
  testedOutcomes: string[];         // UserCanStatement IDs
  coverageQuality: 'direct' | 'indirect' | 'partial';
  notes?: string;
}

/**
 * Lesson with outcomes (V4 extension)
 */
export interface LessonOutcomeMetadata {
  lessonId: string;
  outcome: LearningOutcome;
  interactionMappings: InteractionOutcomeMapping[];
  validation: OutcomeValidation;
}

/**
 * Example learning outcomes for Articles A/AN lesson
 */
export const EXAMPLE_OUTCOME_ARTICLES: LearningOutcome = {
  userCan: [
    {
      id: 'uc_1',
      statement: 'correctly choose between "a" and "an" based on the following sound',
      statementRu: 'правильно выбирать между "a" и "an" на основе следующего звука',
      category: 'production',
      targetSkills: ['grammar'],
      bloomLevel: 'apply',
      testableInLesson: true,
    },
    {
      id: 'uc_2',
      statement: 'explain why "an hour" uses "an" despite starting with H',
      statementRu: 'объяснить, почему "an hour" использует "an", хотя начинается с H',
      category: 'knowledge',
      targetSkills: ['grammar', 'comprehension'],
      bloomLevel: 'understand',
      testableInLesson: true,
    },
    {
      id: 'uc_3',
      statement: 'identify common exceptions where letter and sound differ',
      statementRu: 'определять распространённые исключения, где буква и звук различаются',
      category: 'recognition',
      targetSkills: ['grammar', 'vocabulary'],
      bloomLevel: 'analyze',
      testableInLesson: true,
    },
  ],

  successCriteria: [
    {
      id: 'sc_1',
      metric: 'accuracy_percent',
      threshold: 70,
      operator: 'gte',
      description: 'At least 70% correct answers on practice tasks',
      descriptionRu: 'Не менее 70% правильных ответов в практике',
    },
    {
      id: 'sc_2',
      metric: 'attempts_count',
      threshold: 3,
      operator: 'lte',
      description: 'Complete check questions in 3 or fewer attempts',
      descriptionRu: 'Выполнить проверочные вопросы за 3 или меньше попыток',
    },
    {
      id: 'sc_3',
      metric: 'hints_used',
      threshold: 2,
      operator: 'lte',
      description: 'Use 2 or fewer hints during practice',
      descriptionRu: 'Использовать 2 или меньше подсказок во время практики',
    },
  ],

  cefrDescriptors: [
    'A1: Can use basic articles (a/an) with familiar nouns',
    'A1: Can recognize simple patterns in language use',
  ],

  masteryRequirements: {
    minPassScore: 60,
    masteryScore: 85,
    recommendedReviewAfterDays: 7,
    expectedSessions: 2,
  },
};
