/**
 * 10-dimensional skill types for English learning
 */
export const SKILL_TYPES = [
  'grammar',
  'vocabulary',
  'pronunciation',
  'listening',
  'speaking',
  'slang',
  'word_formation',
  'fluency',
  'writing',
  'comprehension',
] as const;

export type SkillType = (typeof SKILL_TYPES)[number];

/**
 * Skill vector - 10 dimensions + meta skills
 */
export interface SkillVector {
  // Core 10 skills (0.0 - 1.0)
  grammar: number;
  vocabulary: number;
  pronunciation: number;
  listening: number;
  speaking: number;
  slang: number;
  word_formation: number;
  fluency: number;
  writing: number;
  comprehension: number;
}

export interface SkillVectorWithMeta extends SkillVector {
  id: string;
  userId: string;

  // Meta skills
  learningAbility: number;
  confidence: number;

  // Derived
  overallLevel: CEFRLevel;
  strongestSkills: SkillType[];
  weakestSkills: SkillType[];

  // Versioning
  version: number;
  calculatedAt: string;
  calculationMethod: 'onboarding' | 'incremental' | 'deep_analysis';
}

/**
 * CEFR Language Levels
 */
export const CEFR_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const;
export type CEFRLevel = (typeof CEFR_LEVELS)[number];

/**
 * Skill delta after task completion
 */
export type SkillDelta = Partial<Record<SkillType, number>>;

/**
 * Calculate overall level from skill vector
 */
export function calculateCEFRLevel(vector: SkillVector): CEFRLevel {
  const values = Object.values(vector);
  const avg = values.reduce((a, b) => a + b, 0) / values.length;

  if (avg < 0.17) return 'A1';
  if (avg < 0.33) return 'A2';
  if (avg < 0.50) return 'B1';
  if (avg < 0.67) return 'B2';
  if (avg < 0.83) return 'C1';
  return 'C2';
}

/**
 * Get top N strongest/weakest skills
 */
export function getSkillRanking(vector: SkillVector, n: number = 3): {
  strongest: SkillType[];
  weakest: SkillType[];
} {
  const entries = Object.entries(vector) as [SkillType, number][];
  const sorted = entries.sort((a, b) => b[1] - a[1]);

  return {
    strongest: sorted.slice(0, n).map(([skill]) => skill),
    weakest: sorted.slice(-n).reverse().map(([skill]) => skill),
  };
}
