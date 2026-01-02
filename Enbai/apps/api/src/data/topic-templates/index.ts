/**
 * Topic Templates Index
 *
 * All learning topic templates for AI-driven content generation.
 */

import type { TopicTemplate } from '@enbai/types';

// Import all templates
import { grammarClinicTemplate } from './grammar-clinic';
import { vocabularyBuilderTemplate } from './vocabulary-builder';
import { speakingRoleplayTemplate } from './speaking-roleplay';
import { listeningMissionTemplate } from './listening-mission';
import { writingWorkshopTemplate } from './writing-workshop';
import { pronunciationLabTemplate } from './pronunciation-lab';
import { slangInContextTemplate } from './slang-in-context';
import { wordFormationFactoryTemplate } from './word-formation-factory';
import { fluencySprintTemplate } from './fluency-sprint';
import { mixedReviewTemplate } from './mixed-review';

// Export all templates as array
export const ALL_TOPIC_TEMPLATES: TopicTemplate[] = [
  grammarClinicTemplate,
  vocabularyBuilderTemplate,
  speakingRoleplayTemplate,
  listeningMissionTemplate,
  writingWorkshopTemplate,
  pronunciationLabTemplate,
  slangInContextTemplate,
  wordFormationFactoryTemplate,
  fluencySprintTemplate,
  mixedReviewTemplate,
];

// Export as map for quick lookup
export const TOPIC_TEMPLATES_MAP: Record<string, TopicTemplate> = {};
for (const template of ALL_TOPIC_TEMPLATES) {
  TOPIC_TEMPLATES_MAP[template.id] = template;
}

// Export individual templates
export {
  grammarClinicTemplate,
  vocabularyBuilderTemplate,
  speakingRoleplayTemplate,
  listeningMissionTemplate,
  writingWorkshopTemplate,
  pronunciationLabTemplate,
  slangInContextTemplate,
  wordFormationFactoryTemplate,
  fluencySprintTemplate,
  mixedReviewTemplate,
};

/**
 * Get template by ID
 */
export function getTemplateById(id: string): TopicTemplate | undefined {
  return TOPIC_TEMPLATES_MAP[id];
}

/**
 * Get templates applicable for CEFR level
 */
export function getTemplatesForLevel(level: string): TopicTemplate[] {
  return ALL_TOPIC_TEMPLATES.filter(t => t.applicableCEFR.includes(level as any));
}

/**
 * Get templates for specific skill
 */
export function getTemplatesForSkill(skill: string): TopicTemplate[] {
  return ALL_TOPIC_TEMPLATES.filter(
    t => t.primarySkills.includes(skill as any) || t.secondarySkills.includes(skill as any)
  );
}
