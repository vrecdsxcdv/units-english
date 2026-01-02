/**
 * V4 QA Outcome Validator
 *
 * Validates that lesson interactions actually test the declared learning outcomes.
 * Ensures CHECK and PRACTICE are connected to outcomes, not just formal.
 */

import type { SkillType } from '@enbai/types';
import type {
  LearningOutcome,
  UserCanStatement,
  OutcomeValidation,
  OutcomeIssue,
  InteractionOutcomeMapping,
} from '@enbai/types';
import type {
  LessonModalV3,
  InteractionV3,
  LessonPageV3,
} from '@enbai/types';

/**
 * Validate that lesson interactions test the declared outcomes
 */
export function validateOutcomes(
  lesson: LessonModalV3,
  outcome: LearningOutcome
): OutcomeValidation {
  const issues: OutcomeIssue[] = [];
  const testedOutcomes: string[] = [];
  const interactionMappings: InteractionOutcomeMapping[] = [];

  // Get all interactions from lesson
  const allInteractions = getAllInteractions(lesson);

  // Map each interaction to outcomes
  for (const interaction of allInteractions) {
    const mapping = mapInteractionToOutcomes(interaction, outcome.userCan);
    interactionMappings.push(mapping);

    for (const outcomeId of mapping.testedOutcomes) {
      if (!testedOutcomes.includes(outcomeId)) {
        testedOutcomes.push(outcomeId);
      }
    }
  }

  // Find untested outcomes
  const untestedOutcomes = outcome.userCan
    .filter(uc => uc.testableInLesson && !testedOutcomes.includes(uc.id))
    .map(uc => uc.id);

  // Calculate coverage
  const testableCount = outcome.userCan.filter(uc => uc.testableInLesson).length;
  const coverage = testableCount > 0
    ? (testedOutcomes.length / testableCount) * 100
    : 0;

  // Check for issues
  issues.push(...validateCoverage(coverage, untestedOutcomes, outcome.userCan));
  issues.push(...validateCheckPage(lesson, outcome));
  issues.push(...validatePracticePage(lesson, outcome));
  issues.push(...validateSkillAlignment(lesson, outcome));

  // Generate recommendations
  const recommendations = generateRecommendations(issues, untestedOutcomes, outcome);

  const isValid = !issues.some(i => i.severity === 'error');

  return {
    isValid,
    testedOutcomes,
    untestedOutcomes,
    coverage,
    issues,
    recommendations,
  };
}

/**
 * Get all interactions from lesson pages
 */
function getAllInteractions(lesson: LessonModalV3): InteractionV3[] {
  return lesson.pages.flatMap(page => page.interactions);
}

/**
 * Map an interaction to the outcomes it tests
 */
function mapInteractionToOutcomes(
  interaction: InteractionV3,
  userCans: UserCanStatement[]
): InteractionOutcomeMapping {
  const testedOutcomes: string[] = [];
  let coverageQuality: 'direct' | 'indirect' | 'partial' = 'partial';

  for (const userCan of userCans) {
    const match = checkInteractionOutcomeMatch(interaction, userCan);
    if (match.matches) {
      testedOutcomes.push(userCan.id);
      if (match.quality === 'direct') {
        coverageQuality = 'direct';
      } else if (match.quality === 'indirect' && coverageQuality !== 'direct') {
        coverageQuality = 'indirect';
      }
    }
  }

  return {
    interactionId: interaction.interactionId,
    testedOutcomes,
    coverageQuality,
  };
}

/**
 * Check if interaction tests a specific outcome
 */
function checkInteractionOutcomeMatch(
  interaction: InteractionV3,
  userCan: UserCanStatement
): { matches: boolean; quality: 'direct' | 'indirect' | 'partial' } {
  // Check skill overlap
  const skillOverlap = interaction.targetSkills.some(
    skill => userCan.targetSkills.includes(skill)
  );

  if (!skillOverlap) {
    return { matches: false, quality: 'partial' };
  }

  // Check bloom level alignment
  const interactionBloom = inferBloomLevel(interaction);
  const bloomMatch = bloomLevelMatches(interactionBloom, userCan.bloomLevel);

  // Check category alignment
  const categoryMatch = checkCategoryMatch(interaction, userCan.category);

  if (skillOverlap && bloomMatch && categoryMatch) {
    return { matches: true, quality: 'direct' };
  }

  if (skillOverlap && (bloomMatch || categoryMatch)) {
    return { matches: true, quality: 'indirect' };
  }

  if (skillOverlap) {
    return { matches: true, quality: 'partial' };
  }

  return { matches: false, quality: 'partial' };
}

/**
 * Infer Bloom's level from interaction type
 */
function inferBloomLevel(interaction: InteractionV3): string {
  const typeToBloom: Record<string, string> = {
    mcq: 'remember',
    fill_blank: 'apply',
    input: 'apply',
    match: 'understand',
    reorder: 'analyze',
    select_error: 'analyze',
    speaking: 'create',
    listening: 'understand',
    writing: 'create',
  };

  return typeToBloom[interaction.type] || 'apply';
}

/**
 * Check if bloom levels are compatible
 */
function bloomLevelMatches(interactionBloom: string, outcomeBloom: string): boolean {
  const levels = ['remember', 'understand', 'apply', 'analyze', 'evaluate', 'create'];
  const interactionIndex = levels.indexOf(interactionBloom);
  const outcomeIndex = levels.indexOf(outcomeBloom);

  // Interaction can test at same level or one level lower
  return Math.abs(interactionIndex - outcomeIndex) <= 1;
}

/**
 * Check if interaction matches outcome category
 */
function checkCategoryMatch(interaction: InteractionV3, category: string): boolean {
  const typeToCategory: Record<string, string[]> = {
    mcq: ['knowledge', 'recognition'],
    fill_blank: ['production'],
    input: ['production'],
    match: ['recognition', 'knowledge'],
    reorder: ['production'],
    select_error: ['recognition'],
    speaking: ['production', 'fluency'],
    listening: ['recognition', 'knowledge'],
    writing: ['production', 'transfer'],
  };

  const categories = typeToCategory[interaction.type] || [];
  return categories.includes(category);
}

/**
 * Validate overall coverage
 */
function validateCoverage(
  coverage: number,
  untestedOutcomes: string[],
  userCans: UserCanStatement[]
): OutcomeIssue[] {
  const issues: OutcomeIssue[] = [];

  if (coverage < 50) {
    issues.push({
      severity: 'error',
      message: `Low outcome coverage: only ${Math.round(coverage)}% of outcomes are tested`,
      messageRu: `Низкое покрытие результатов: только ${Math.round(coverage)}% результатов тестируются`,
      suggestion: 'Add more interactions that directly test declared outcomes',
    });
  } else if (coverage < 75) {
    issues.push({
      severity: 'warning',
      message: `Moderate outcome coverage: ${Math.round(coverage)}%`,
      messageRu: `Среднее покрытие результатов: ${Math.round(coverage)}%`,
      suggestion: 'Consider adding interactions for untested outcomes',
    });
  }

  for (const outcomeId of untestedOutcomes) {
    const outcome = userCans.find(uc => uc.id === outcomeId);
    if (outcome) {
      issues.push({
        severity: 'warning',
        outcomeId,
        message: `Outcome not tested: "${outcome.statement}"`,
        messageRu: `Результат не тестируется: "${outcome.statementRu}"`,
        suggestion: `Add an interaction that tests: ${outcome.statement}`,
      });
    }
  }

  return issues;
}

/**
 * Validate CHECK page has outcome-connected questions
 */
function validateCheckPage(
  lesson: LessonModalV3,
  outcome: LearningOutcome
): OutcomeIssue[] {
  const issues: OutcomeIssue[] = [];
  const checkPages = lesson.pages.filter(p => p.type === 'check');

  if (checkPages.length === 0) {
    issues.push({
      severity: 'error',
      message: 'No CHECK page found in lesson',
      messageRu: 'В уроке нет страницы CHECK',
      suggestion: 'Add a check page to verify understanding',
    });
    return issues;
  }

  for (const checkPage of checkPages) {
    const interactions = checkPage.interactions;

    if (interactions.length === 0) {
      issues.push({
        severity: 'error',
        message: `CHECK page "${checkPage.pageId}" has no interactions`,
        messageRu: `Страница CHECK "${checkPage.pageId}" не имеет взаимодействий`,
      });
      continue;
    }

    // Check if interactions test understanding (not just recall)
    const hasUnderstandingTest = interactions.some(i => {
      const bloom = inferBloomLevel(i);
      return bloom !== 'remember';
    });

    if (!hasUnderstandingTest) {
      issues.push({
        severity: 'warning',
        message: `CHECK page "${checkPage.pageId}" only tests recall, not understanding`,
        messageRu: `Страница CHECK "${checkPage.pageId}" проверяет только запоминание, не понимание`,
        suggestion: 'Add questions that test comprehension or application',
      });
    }

    // Check skill alignment with outcomes
    const checkSkills = new Set(interactions.flatMap(i => i.targetSkills));
    const outcomeSkills = new Set(outcome.userCan.flatMap(uc => uc.targetSkills));

    const missingSkills = [...outcomeSkills].filter(s => !checkSkills.has(s));
    if (missingSkills.length > 0) {
      issues.push({
        severity: 'info',
        message: `CHECK doesn't test all outcome skills: missing ${missingSkills.join(', ')}`,
        messageRu: `CHECK не проверяет все навыки: отсутствуют ${missingSkills.join(', ')}`,
      });
    }
  }

  return issues;
}

/**
 * Validate PRACTICE page has meaningful exercises
 */
function validatePracticePage(
  lesson: LessonModalV3,
  outcome: LearningOutcome
): OutcomeIssue[] {
  const issues: OutcomeIssue[] = [];
  const practicePages = lesson.pages.filter(p => p.type === 'practice');

  if (practicePages.length === 0) {
    issues.push({
      severity: 'error',
      message: 'No PRACTICE page found in lesson',
      messageRu: 'В уроке нет страницы PRACTICE',
      suggestion: 'Add a practice page with exercises',
    });
    return issues;
  }

  for (const practicePage of practicePages) {
    const interactions = practicePage.interactions;

    if (interactions.length < 2) {
      issues.push({
        severity: 'warning',
        message: `PRACTICE page "${practicePage.pageId}" has only ${interactions.length} interaction(s)`,
        messageRu: `Страница PRACTICE "${practicePage.pageId}" имеет только ${interactions.length} взаимодействие(й)`,
        suggestion: 'Add more practice exercises (recommended: 3-5)',
      });
    }

    // Check variety of interaction types
    const types = new Set(interactions.map(i => i.type));
    if (types.size < 2 && interactions.length >= 3) {
      issues.push({
        severity: 'info',
        message: `PRACTICE uses only one interaction type: ${[...types][0]}`,
        messageRu: `PRACTICE использует только один тип взаимодействия: ${[...types][0]}`,
        suggestion: 'Consider adding variety with different interaction types',
      });
    }

    // Check if practice tests production outcomes
    const productionOutcomes = outcome.userCan.filter(uc => uc.category === 'production');
    if (productionOutcomes.length > 0) {
      const hasProductionExercise = interactions.some(i =>
        ['fill_blank', 'input', 'speaking', 'writing'].includes(i.type)
      );

      if (!hasProductionExercise) {
        issues.push({
          severity: 'warning',
          message: 'PRACTICE has no production exercises but outcome requires production',
          messageRu: 'PRACTICE не имеет упражнений на продукцию, но результат требует её',
          suggestion: 'Add fill_blank, input, speaking, or writing exercises',
        });
      }
    }

    // Check difficulty progression
    const difficulties = interactions.map(i => i.difficulty);
    const isProgressing = difficulties.every((d, i) =>
      i === 0 || d >= difficulties[i - 1] - 1
    );

    if (!isProgressing && interactions.length >= 3) {
      issues.push({
        severity: 'info',
        message: 'PRACTICE difficulty doesn\'t progress smoothly',
        messageRu: 'Сложность PRACTICE не прогрессирует плавно',
        suggestion: 'Order exercises from easier to harder',
      });
    }
  }

  return issues;
}

/**
 * Validate skill alignment between lesson and outcomes
 */
function validateSkillAlignment(
  lesson: LessonModalV3,
  outcome: LearningOutcome
): OutcomeIssue[] {
  const issues: OutcomeIssue[] = [];

  const lessonSkills = new Set(lesson.targetSkills);
  const outcomeSkills = new Set(outcome.userCan.flatMap(uc => uc.targetSkills));

  // Skills in outcome but not in lesson
  const missingInLesson = [...outcomeSkills].filter(s => !lessonSkills.has(s));
  if (missingInLesson.length > 0) {
    issues.push({
      severity: 'warning',
      message: `Outcome targets skills not in lesson: ${missingInLesson.join(', ')}`,
      messageRu: `Результат нацелен на навыки, не указанные в уроке: ${missingInLesson.join(', ')}`,
      suggestion: 'Add these skills to lesson targetSkills or remove from outcomes',
    });
  }

  // Skills in lesson but not tested in interactions
  const interactionSkills = new Set(
    lesson.pages.flatMap(p =>
      p.interactions.flatMap(i => i.targetSkills)
    )
  );

  const untestedSkills = [...lessonSkills].filter(s => !interactionSkills.has(s));
  if (untestedSkills.length > 0) {
    issues.push({
      severity: 'info',
      message: `Lesson targets skills not tested in interactions: ${untestedSkills.join(', ')}`,
      messageRu: `Урок нацелен на навыки, не тестируемые во взаимодействиях: ${untestedSkills.join(', ')}`,
    });
  }

  return issues;
}

/**
 * Generate recommendations based on issues
 */
function generateRecommendations(
  issues: OutcomeIssue[],
  untestedOutcomes: string[],
  outcome: LearningOutcome
): string[] {
  const recommendations: string[] = [];

  // High priority: errors
  const errors = issues.filter(i => i.severity === 'error');
  if (errors.length > 0) {
    recommendations.push('Fix critical issues before publishing lesson');
  }

  // Untested outcomes
  if (untestedOutcomes.length > 0) {
    const untestedStatements = outcome.userCan
      .filter(uc => untestedOutcomes.includes(uc.id))
      .map(uc => uc.statement);

    recommendations.push(
      `Add interactions to test: ${untestedStatements.slice(0, 2).join('; ')}`
    );
  }

  // Low coverage
  const coverageIssue = issues.find(i =>
    i.message.includes('coverage') && i.severity === 'error'
  );
  if (coverageIssue) {
    recommendations.push('Increase outcome coverage to at least 75%');
  }

  // No CHECK
  if (issues.some(i => i.message.includes('No CHECK page'))) {
    recommendations.push('Add a CHECK page with 1-3 understanding questions');
  }

  // No PRACTICE
  if (issues.some(i => i.message.includes('No PRACTICE page'))) {
    recommendations.push('Add a PRACTICE page with 3-5 exercises');
  }

  // Only recall
  if (issues.some(i => i.message.includes('only tests recall'))) {
    recommendations.push('Add questions that require explanation or application');
  }

  return recommendations;
}

/**
 * Quick validation check (returns true/false with reason)
 */
export function quickValidateOutcomes(
  lesson: LessonModalV3,
  outcome: LearningOutcome
): { valid: boolean; reason?: string } {
  const result = validateOutcomes(lesson, outcome);

  if (!result.isValid) {
    const firstError = result.issues.find(i => i.severity === 'error');
    return {
      valid: false,
      reason: firstError?.message || 'Validation failed',
    };
  }

  if (result.coverage < 50) {
    return {
      valid: false,
      reason: `Outcome coverage too low: ${Math.round(result.coverage)}%`,
    };
  }

  return { valid: true };
}

/**
 * Export for testing
 */
export const _testExports = {
  getAllInteractions,
  mapInteractionToOutcomes,
  checkInteractionOutcomeMatch,
  inferBloomLevel,
  bloomLevelMatches,
  checkCategoryMatch,
  validateCoverage,
  validateCheckPage,
  validatePracticePage,
  validateSkillAlignment,
};
