/**
 * Legacy to TemplateV1 Converter
 *
 * Converts legacy content formats to clean TemplateV1 schema:
 * - LegacyLesson (from steps/) → TemplateV1
 * - TopicTemplate (v1.0) → TemplateV1
 * - TopicModal (v2.0) → TemplateV1
 */

import type {
  TemplateV1,
  TemplatePageV1,
  TemplatePageType,
  TemplateInteractionType,
  TemplateContentType,
  TEMPLATE_V1_SCHEMA_VERSION,
} from '@enbai/types';
import type { SkillType, CEFRLevel } from '@enbai/types';
import type { LegacyLesson, LegacyStep, LegacyContent, LegacyExercise } from './legacy-loader';

// ============================================
// CONVERSION RESULT
// ============================================

export interface ConversionResult {
  success: boolean;
  template?: TemplateV1;
  errors: string[];
  warnings: string[];
  sourceInfo: {
    type: 'legacy_step' | 'topic_template' | 'topic_modal';
    path: string;
    originalSize: number;
  };
}

// ============================================
// MAPPINGS
// ============================================

const LEGACY_STEP_TYPE_TO_PAGE_TYPE: Record<string, TemplatePageType> = {
  intro: 'hook',
  explanation: 'theory',
  example: 'examples',
  exercise: 'practice',
  summary: 'summary',
};

const LEGACY_EXERCISE_TYPE_TO_INTERACTION: Record<string, TemplateInteractionType> = {
  fill: 'fill_blank',
  mcq: 'mcq',
  reorder: 'reorder',
  match: 'match',
  error: 'select_error',
  input: 'input',
};

const LEGACY_CONTENT_TYPE_TO_TEMPLATE: Record<string, TemplateContentType> = {
  heading: 'text',
  text: 'text',
  example: 'example',
  rule: 'rule',
  list: 'list',
  table: 'table',
  warning: 'warning',
};

const LEVEL_STRING_TO_CEFR: Record<string, CEFRLevel[]> = {
  'A1': ['A1'],
  'A2': ['A2'],
  'A1-A2': ['A1', 'A2'],
  'A2-B1': ['A2', 'B1'],
  'B1': ['B1'],
  'B1-B2': ['B1', 'B2'],
  'B2': ['B2'],
  'B2-C1': ['B2', 'C1'],
  'C1': ['C1'],
  'C1-C2': ['C1', 'C2'],
  'C2': ['C2'],
};

const TOPIC_TO_SKILL: Record<string, SkillType> = {
  'Grammar': 'grammar',
  'Cleft Sentences': 'grammar',
  'Present Perfect': 'grammar',
  'Past Simple': 'grammar',
  'Conditionals': 'grammar',
  'Passive Voice': 'grammar',
  'Reported Speech': 'grammar',
  'Articles': 'grammar',
  'Modal Verbs': 'grammar',
  'Phrasal Verbs': 'vocabulary',
  'Relative Clauses': 'grammar',
  'Vocabulary': 'vocabulary',
  'Speaking': 'speaking',
  'Writing': 'writing',
  'Listening': 'listening',
  'Pronunciation': 'pronunciation',
};

// ============================================
// LEGACY LESSON CONVERTER
// ============================================

export function convertLegacyLesson(lesson: LegacyLesson): ConversionResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  try {
    // Validate minimum requirements
    if (!lesson.title) {
      errors.push('Missing lesson title');
    }
    if (lesson.steps.length === 0) {
      errors.push('No steps found in lesson');
    }

    if (errors.length > 0) {
      return {
        success: false,
        errors,
        warnings,
        sourceInfo: {
          type: 'legacy_step',
          path: lesson.sourcePath,
          originalSize: 0,
        },
      };
    }

    // Convert steps to pages
    const pages = convertStepsToPages(lesson.steps, warnings);

    // Ensure minimum page count
    if (pages.length < 3) {
      warnings.push(`Only ${pages.length} pages generated, adding default pages`);
      // Add missing essential pages
      if (!pages.some(p => p.type === 'hook')) {
        pages.unshift(createDefaultPage('hook', lesson.title));
      }
      if (!pages.some(p => p.type === 'check')) {
        pages.push(createDefaultPage('check', lesson.title));
      }
      if (!pages.some(p => p.type === 'summary')) {
        pages.push(createDefaultPage('summary', lesson.title));
      }
    }

    // Cap at 7 pages
    if (pages.length > 7) {
      warnings.push(`Capping pages from ${pages.length} to 7`);
      pages.length = 7;
    }

    // Determine CEFR levels
    const cefrLevels = LEVEL_STRING_TO_CEFR[lesson.level] || ['B1'];

    // Determine primary skill
    const primarySkill = TOPIC_TO_SKILL[lesson.topic] || 'grammar';

    // Build template
    const template: TemplateV1 = {
      id: generateTemplateId(lesson),
      schemaVersion: '1.0' as typeof TEMPLATE_V1_SCHEMA_VERSION,

      name: lesson.title,
      description: `Learn about ${lesson.topic} - converted from legacy content`,
      icon: getIconForTopic(lesson.topic),
      category: getCategoryForTopic(lesson.topic),

      cefrLevels,
      primarySkill,
      secondarySkills: determineSecondarySkills(lesson, primarySkill),

      ieltsRelevant: cefrLevels.some(l => ['B1', 'B2', 'C1', 'C2'].includes(l)),
      ieltsBand: cefrLevels.includes('C1') || cefrLevels.includes('C2') ? 7 : 6,

      language: {
        explanation: 'ru',
        examples: 'both',
        practice: cefrLevels.includes('A1') ? 'mixed' : 'en',
      },

      pages,

      selection: {
        weakSkillThresholds: [
          { skill: primarySkill, below: 0.5 },
        ],
        errorTopics: lesson.metadata.keywords,
        cooldownDays: 7,
        position: 'any',
      },
      priority: 5,

      estimatedMinutes: {
        min: Math.max(5, lesson.metadata.estimatedMinutes - 3),
        max: lesson.metadata.estimatedMinutes + 5,
      },

      generationHints: {
        tone: 'friendly',
        useInterests: true,
        exampleCount: 4,
        difficultyAdaptation: true,
      },

      version: '1.0.0',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    return {
      success: true,
      template,
      errors,
      warnings,
      sourceInfo: {
        type: 'legacy_step',
        path: lesson.sourcePath,
        originalSize: lesson.totalSteps,
      },
    };
  } catch (error) {
    return {
      success: false,
      errors: [`Conversion failed: ${error}`],
      warnings,
      sourceInfo: {
        type: 'legacy_step',
        path: lesson.sourcePath,
        originalSize: 0,
      },
    };
  }
}

function convertStepsToPages(steps: LegacyStep[], warnings: string[]): TemplatePageV1[] {
  const pages: TemplatePageV1[] = [];
  const usedTypes = new Set<TemplatePageType>();

  for (const step of steps) {
    const pageType = LEGACY_STEP_TYPE_TO_PAGE_TYPE[step.type] || 'theory';

    // Skip duplicate page types (except theory and practice)
    if (usedTypes.has(pageType) && !['theory', 'practice'].includes(pageType)) {
      warnings.push(`Skipping duplicate ${pageType} page from step ${step.stepNumber}`);
      continue;
    }

    const page = convertStepToPage(step, pageType);
    pages.push(page);
    usedTypes.add(pageType);
  }

  // Sort pages in logical order
  const pageOrder: TemplatePageType[] = [
    'hook', 'theory', 'examples', 'check', 'practice', 'mistakes', 'summary', 'ielts'
  ];

  return pages.sort((a, b) => {
    const aIndex = pageOrder.indexOf(a.type);
    const bIndex = pageOrder.indexOf(b.type);
    return aIndex - bIndex;
  });
}

function convertStepToPage(step: LegacyStep, pageType: TemplatePageType): TemplatePageV1 {
  const page: TemplatePageV1 = {
    id: `page-${step.stepNumber}`,
    type: pageType,
    title: step.title,
    goal: getGoalForPageType(pageType),
    estimatedSeconds: getSecondsForPageType(pageType),
    contentPlaceholders: [],
    interactionPlaceholders: [],
  };

  // Convert content blocks
  for (const content of step.content) {
    const contentType = LEGACY_CONTENT_TYPE_TO_TEMPLATE[content.type] || 'text';
    page.contentPlaceholders.push({
      type: contentType,
      placeholder: content.text,
      required: true,
      maxLength: 500,
    });
  }

  // Convert exercises
  for (const exercise of step.exercises) {
    const interactionType = LEGACY_EXERCISE_TYPE_TO_INTERACTION[exercise.type] || 'fill_blank';
    page.interactionPlaceholders = page.interactionPlaceholders || [];
    page.interactionPlaceholders.push({
      type: interactionType,
      count: exercise.items.length,
      placeholder: exercise.instruction,
      difficulty: 'adaptive',
    });
  }

  // Ensure minimum content
  if (page.contentPlaceholders.length === 0) {
    page.contentPlaceholders.push({
      type: 'text',
      placeholder: `Content for ${pageType} page`,
      required: true,
    });
  }

  return page;
}

function createDefaultPage(type: TemplatePageType, topicTitle: string): TemplatePageV1 {
  const defaults: Record<TemplatePageType, Partial<TemplatePageV1>> = {
    hook: {
      title: 'Why This Matters',
      goal: 'Capture student interest',
      contentPlaceholders: [
        { type: 'text', placeholder: `Interesting fact about ${topicTitle}`, required: true },
      ],
    },
    theory: {
      title: 'Understanding the Concept',
      goal: 'Learn the main rules',
      contentPlaceholders: [
        { type: 'rule', placeholder: 'Main rule explanation', required: true },
      ],
    },
    examples: {
      title: 'Examples in Action',
      goal: 'See how it works',
      contentPlaceholders: [
        { type: 'example', placeholder: 'Example 1 with translation', required: true },
        { type: 'example', placeholder: 'Example 2 with translation', required: true },
      ],
    },
    check: {
      title: 'Quick Check',
      goal: 'Verify understanding',
      interactionPlaceholders: [
        { type: 'mcq', count: 2, placeholder: 'Comprehension question', difficulty: 3 },
      ],
    },
    practice: {
      title: 'Practice Time',
      goal: 'Apply knowledge',
      interactionPlaceholders: [
        { type: 'fill_blank', count: 3, placeholder: 'Practice exercise', difficulty: 'adaptive' },
      ],
    },
    mistakes: {
      title: 'Common Mistakes',
      goal: 'Avoid errors',
      contentPlaceholders: [
        { type: 'warning', placeholder: 'Common mistake to avoid', required: true },
        { type: 'comparison', placeholder: 'Wrong vs right', required: true },
      ],
    },
    summary: {
      title: 'Key Takeaways',
      goal: 'Remember the main points',
      contentPlaceholders: [
        { type: 'list', placeholder: 'Main points to remember', required: true },
      ],
    },
    ielts: {
      title: 'IELTS Connection',
      goal: 'Understand exam relevance',
      contentPlaceholders: [
        { type: 'tip', placeholder: 'How this helps in IELTS', required: true },
      ],
    },
  };

  const defaultConfig = defaults[type] || defaults.theory;

  return {
    id: `default-${type}`,
    type,
    title: defaultConfig.title || 'Page',
    goal: defaultConfig.goal || 'Learn',
    estimatedSeconds: getSecondsForPageType(type),
    contentPlaceholders: defaultConfig.contentPlaceholders || [],
    interactionPlaceholders: defaultConfig.interactionPlaceholders,
  };
}

function getGoalForPageType(type: TemplatePageType): string {
  const goals: Record<TemplatePageType, string> = {
    hook: 'Get interested in the topic',
    theory: 'Understand the main concept',
    examples: 'See practical examples',
    check: 'Verify understanding',
    practice: 'Apply knowledge through exercises',
    mistakes: 'Learn what to avoid',
    summary: 'Remember key points',
    ielts: 'Connect to IELTS preparation',
  };
  return goals[type] || 'Learn';
}

function getSecondsForPageType(type: TemplatePageType): number {
  const seconds: Record<TemplatePageType, number> = {
    hook: 60,
    theory: 120,
    examples: 90,
    check: 60,
    practice: 120,
    mistakes: 60,
    summary: 45,
    ielts: 90,
  };
  return seconds[type] || 60;
}

function generateTemplateId(lesson: LegacyLesson): string {
  const topic = lesson.topic.toLowerCase().replace(/\s+/g, '-');
  const level = lesson.level.toLowerCase().replace(/\s+/g, '-');
  return `${topic}-${level}-${lesson.id}`;
}

function getIconForTopic(topic: string): string {
  const icons: Record<string, string> = {
    'Cleft Sentences': '🔦',
    'Present Perfect': '⏰',
    'Past Simple': '📅',
    'Conditionals': '🌿',
    'Passive Voice': '🔄',
    'Reported Speech': '💬',
    'Articles': '📝',
    'Modal Verbs': '💪',
    'Phrasal Verbs': '🚀',
    'Relative Clauses': '🔗',
    'Grammar': '📖',
    'Vocabulary': '📚',
    'Speaking': '🎤',
    'Writing': '✍️',
    'Listening': '👂',
  };
  return icons[topic] || '📝';
}

function getCategoryForTopic(topic: string): string {
  if (['Vocabulary', 'Phrasal Verbs'].includes(topic)) return 'Vocabulary';
  if (['Speaking', 'Listening', 'Writing'].includes(topic)) return topic;
  return 'Grammar';
}

function determineSecondarySkills(lesson: LegacyLesson, primary: SkillType): SkillType[] {
  const skills: SkillType[] = [];

  // Add based on metadata
  for (const skill of lesson.metadata.skills) {
    const mapped = skill.toLowerCase() as SkillType;
    if (mapped !== primary && ['vocabulary', 'speaking', 'writing', 'comprehension'].includes(mapped)) {
      skills.push(mapped);
    }
  }

  // Default secondary
  if (skills.length === 0 && primary === 'grammar') {
    skills.push('vocabulary');
  }

  return skills.slice(0, 2);
}

// ============================================
// BATCH CONVERTER
// ============================================

export class LegacyConverter {
  /**
   * Convert all legacy lessons
   */
  convertAll(lessons: LegacyLesson[]): ConversionResult[] {
    return lessons.map(lesson => convertLegacyLesson(lesson));
  }

  /**
   * Generate migration report
   */
  generateReport(results: ConversionResult[]): string {
    const successful = results.filter(r => r.success);
    const failed = results.filter(r => !r.success);
    const warnings = results.flatMap(r => r.warnings);

    let report = `# Legacy to TemplateV1 Migration Report\n\n`;
    report += `Generated: ${new Date().toISOString()}\n\n`;
    report += `## Summary\n\n`;
    report += `- Total processed: ${results.length}\n`;
    report += `- Successful: ${successful.length}\n`;
    report += `- Failed: ${failed.length}\n`;
    report += `- Total warnings: ${warnings.length}\n\n`;

    if (successful.length > 0) {
      report += `## Converted Templates\n\n`;
      for (const result of successful) {
        report += `### ${result.template!.name}\n`;
        report += `- ID: \`${result.template!.id}\`\n`;
        report += `- Source: ${result.sourceInfo.path}\n`;
        report += `- Pages: ${result.template!.pages.length}\n`;
        report += `- CEFR: ${result.template!.cefrLevels.join(', ')}\n`;
        if (result.warnings.length > 0) {
          report += `- Warnings:\n`;
          for (const w of result.warnings) {
            report += `  - ${w}\n`;
          }
        }
        report += `\n`;
      }
    }

    if (failed.length > 0) {
      report += `## Failed Conversions\n\n`;
      for (const result of failed) {
        report += `- ${result.sourceInfo.path}\n`;
        for (const e of result.errors) {
          report += `  - Error: ${e}\n`;
        }
      }
    }

    return report;
  }
}

export const legacyConverter = new LegacyConverter();
