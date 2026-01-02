/**
 * Legacy Loader
 *
 * Loads and parses legacy content from:
 * 1. /steps/ directory (hardcoded React lessons)
 * 2. Old TopicTemplate format
 * 3. TopicModal v2.0 format
 *
 * Extracts structured data for conversion to TemplateV1.
 */

import * as fs from 'fs';
import * as path from 'path';

// ============================================
// LEGACY DATA STRUCTURES
// ============================================

export interface LegacyStep {
  stepNumber: number;
  title: string;
  type: 'intro' | 'explanation' | 'example' | 'exercise' | 'summary';
  content: LegacyContent[];
  exercises: LegacyExercise[];
}

export interface LegacyContent {
  type: 'heading' | 'text' | 'example' | 'rule' | 'list' | 'table' | 'warning';
  text: string;
  translation?: string;
  items?: string[];
}

export interface LegacyExercise {
  type: 'fill' | 'mcq' | 'reorder' | 'match' | 'error' | 'input';
  instruction: string;
  items: LegacyExerciseItem[];
}

export interface LegacyExerciseItem {
  question: string;
  answer: string | string[];
  options?: string[];
  explanation?: string;
}

export interface LegacyLesson {
  id: string;
  sourcePath: string;
  title: string;
  topic: string;
  level: string;
  totalSteps: number;
  steps: LegacyStep[];
  metadata: {
    estimatedMinutes: number;
    skills: string[];
    keywords: string[];
  };
}

// ============================================
// STEP FILE PARSER
// ============================================

/**
 * Parse a legacy step file (React component) and extract content
 */
export function parseStepFile(content: string, filePath: string): LegacyLesson | null {
  try {
    const lesson: LegacyLesson = {
      id: path.basename(filePath, path.extname(filePath)),
      sourcePath: filePath,
      title: extractTitle(content),
      topic: extractTopic(content),
      level: extractLevel(content),
      totalSteps: countSteps(content),
      steps: [],
      metadata: {
        estimatedMinutes: 0,
        skills: [],
        keywords: [],
      },
    };

    // Extract each step
    const stepMatches = content.matchAll(/function Step(\d+)\(\)/g);
    for (const match of stepMatches) {
      const stepNumber = parseInt(match[1], 10);
      const step = extractStep(content, stepNumber);
      if (step) {
        lesson.steps.push(step);
      }
    }

    // Calculate estimated time
    lesson.metadata.estimatedMinutes = lesson.steps.length * 3; // ~3 min per step

    // Extract keywords from content
    lesson.metadata.keywords = extractKeywords(content);

    // Determine skills
    lesson.metadata.skills = determineSkills(lesson);

    return lesson;
  } catch (error) {
    console.error(`Failed to parse step file ${filePath}:`, error);
    return null;
  }
}

function extractTitle(content: string): string {
  // Look for UiSection title or main heading
  const titleMatch = content.match(/title="([^"]+)"/);
  if (titleMatch) return titleMatch[1].replace(/[🎯📝💡🔦]/g, '').trim();

  const headingMatch = content.match(/<h[12][^>]*>([^<]+)<\/h[12]>/);
  if (headingMatch) return headingMatch[1];

  return 'Unknown Topic';
}

function extractTopic(content: string): string {
  // Try to extract main topic from content
  const topics = [
    { pattern: /cleft.*sentence/i, topic: 'Cleft Sentences' },
    { pattern: /present.*perfect/i, topic: 'Present Perfect' },
    { pattern: /past.*simple/i, topic: 'Past Simple' },
    { pattern: /conditional/i, topic: 'Conditionals' },
    { pattern: /passive.*voice/i, topic: 'Passive Voice' },
    { pattern: /reported.*speech/i, topic: 'Reported Speech' },
    { pattern: /articles?/i, topic: 'Articles' },
    { pattern: /modal.*verb/i, topic: 'Modal Verbs' },
    { pattern: /phrasal.*verb/i, topic: 'Phrasal Verbs' },
    { pattern: /relative.*clause/i, topic: 'Relative Clauses' },
  ];

  for (const { pattern, topic } of topics) {
    if (pattern.test(content)) return topic;
  }

  return 'Grammar';
}

function extractLevel(content: string): string {
  // Try to determine CEFR level from complexity
  const hasAdvancedGrammar = /cleft|subjunctive|inversion|conditional.*3|reported/i.test(content);
  const hasIntermediateGrammar = /perfect|continuous|passive|modal/i.test(content);

  if (hasAdvancedGrammar) return 'B2-C1';
  if (hasIntermediateGrammar) return 'B1-B2';
  return 'A2-B1';
}

function countSteps(content: string): number {
  const matches = content.match(/case\s+\d+:/g);
  return matches ? matches.length : 0;
}

function extractStep(content: string, stepNumber: number): LegacyStep | null {
  // Find the step function
  const stepPattern = new RegExp(
    `function Step${stepNumber}\\(\\)[^{]*\\{([\\s\\S]*?)(?=function Step\\d+|$)`,
    'g'
  );
  const match = stepPattern.exec(content);
  if (!match) return null;

  const stepContent = match[1];

  const step: LegacyStep = {
    stepNumber,
    title: extractStepTitle(stepContent, stepNumber),
    type: determineStepType(stepContent, stepNumber),
    content: extractStepContent(stepContent),
    exercises: extractExercises(stepContent),
  };

  return step;
}

function extractStepTitle(content: string, stepNumber: number): string {
  // Look for step comment or heading
  const commentMatch = content.match(/\/\*.*ШАГ\s*\d+:\s*([^*]+)\*\//i);
  if (commentMatch) return commentMatch[1].trim();

  const titleMatch = content.match(/title="([^"]+)"/);
  if (titleMatch) return titleMatch[1].replace(/[🎯📝💡🔦]/g, '').trim();

  return `Step ${stepNumber}`;
}

function determineStepType(
  content: string,
  stepNumber: number
): 'intro' | 'explanation' | 'example' | 'exercise' | 'summary' {
  if (stepNumber === 1) return 'intro';

  const hasExercise = /CheckableExercise|FillItem|exercise/i.test(content);
  const hasSummary = /итог|summary|резюме|запомни/i.test(content);
  const hasExample = /пример|example|sentence.*:/i.test(content);
  const hasRule = /правило|rule|формула/i.test(content);

  if (hasSummary) return 'summary';
  if (hasExercise) return 'exercise';
  if (hasExample && !hasRule) return 'example';
  return 'explanation';
}

function extractStepContent(content: string): LegacyContent[] {
  const result: LegacyContent[] = [];

  // Extract text blocks
  const textMatches = content.matchAll(/<p[^>]*>([^<]+)<\/p>/g);
  for (const match of textMatches) {
    const text = match[1].trim();
    if (text.length > 20) {
      result.push({
        type: 'text',
        text: cleanHtml(text),
      });
    }
  }

  // Extract examples (sentences in quotes or with translations)
  const exampleMatches = content.matchAll(/"([A-Z][^"]+[.!?])"/g);
  for (const match of exampleMatches) {
    result.push({
      type: 'example',
      text: match[1],
    });
  }

  // Extract rules/formulas
  const ruleMatches = content.matchAll(/(?:правило|формула|rule)[:\s]+([^<\n]+)/gi);
  for (const match of ruleMatches) {
    result.push({
      type: 'rule',
      text: cleanHtml(match[1]),
    });
  }

  // Extract lists
  const listMatches = content.matchAll(/<li[^>]*>([^<]+)<\/li>/g);
  const listItems: string[] = [];
  for (const match of listMatches) {
    listItems.push(cleanHtml(match[1]));
  }
  if (listItems.length > 0) {
    result.push({
      type: 'list',
      text: 'List',
      items: listItems,
    });
  }

  return result;
}

function extractExercises(content: string): LegacyExercise[] {
  const exercises: LegacyExercise[] = [];

  // Look for CheckableExercise or FillItem
  const exerciseMatches = content.matchAll(/items:\s*\[([^\]]+)\]/g);
  for (const match of exerciseMatches) {
    const itemsContent = match[1];
    const items = parseExerciseItems(itemsContent);
    if (items.length > 0) {
      exercises.push({
        type: 'fill',
        instruction: 'Fill in the blanks',
        items,
      });
    }
  }

  return exercises;
}

function parseExerciseItems(content: string): LegacyExerciseItem[] {
  const items: LegacyExerciseItem[] = [];

  // Parse object literals
  const itemMatches = content.matchAll(/\{[^}]+\}/g);
  for (const match of itemMatches) {
    try {
      // Extract question and answer
      const questionMatch = match[0].match(/question:\s*"([^"]+)"/);
      const answerMatch = match[0].match(/answer:\s*"([^"]+)"/);

      if (questionMatch && answerMatch) {
        items.push({
          question: questionMatch[1],
          answer: answerMatch[1],
        });
      }
    } catch {
      // Skip malformed items
    }
  }

  return items;
}

function extractKeywords(content: string): string[] {
  const keywords: string[] = [];

  // Common grammar keywords
  const grammarTerms = [
    'cleft', 'it-cleft', 'wh-cleft', 'present perfect', 'past simple',
    'conditional', 'passive', 'reported speech', 'article', 'modal',
    'phrasal verb', 'relative clause', 'gerund', 'infinitive',
  ];

  for (const term of grammarTerms) {
    if (new RegExp(term, 'i').test(content)) {
      keywords.push(term);
    }
  }

  return keywords;
}

function determineSkills(lesson: LegacyLesson): string[] {
  const skills: string[] = ['grammar'];

  // Check for speaking exercises
  if (lesson.steps.some(s => /speak|говор|произнес/i.test(JSON.stringify(s)))) {
    skills.push('speaking');
  }

  // Check for writing exercises
  if (lesson.steps.some(s => /writ|напиш|состав/i.test(JSON.stringify(s)))) {
    skills.push('writing');
  }

  return skills;
}

function cleanHtml(text: string): string {
  return text
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .trim();
}

// ============================================
// LEGACY LOADER CLASS
// ============================================

export class LegacyLoader {
  private stepsDir: string;

  constructor(stepsDir: string = '/Users/matvey/Desktop/Enbai/steps') {
    this.stepsDir = stepsDir;
  }

  /**
   * Load all legacy step files
   */
  async loadAllSteps(): Promise<LegacyLesson[]> {
    const lessons: LegacyLesson[] = [];

    try {
      // Check if directory exists
      if (!fs.existsSync(this.stepsDir)) {
        console.warn(`Steps directory not found: ${this.stepsDir}`);
        return lessons;
      }

      const files = fs.readdirSync(this.stepsDir);

      for (const file of files) {
        const filePath = path.join(this.stepsDir, file);
        const stat = fs.statSync(filePath);

        if (stat.isFile()) {
          const content = fs.readFileSync(filePath, 'utf-8');
          const lesson = parseStepFile(content, filePath);
          if (lesson) {
            lessons.push(lesson);
          }
        }
      }
    } catch (error) {
      console.error('Failed to load legacy steps:', error);
    }

    return lessons;
  }

  /**
   * Load a specific step file
   */
  loadStep(fileId: string): LegacyLesson | null {
    const filePath = path.join(this.stepsDir, fileId);

    if (!fs.existsSync(filePath)) {
      return null;
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    return parseStepFile(content, filePath);
  }

  /**
   * Get summary of all legacy content
   */
  async getSummary(): Promise<{
    totalLessons: number;
    totalSteps: number;
    topics: string[];
    levels: string[];
    estimatedMigrationTime: string;
  }> {
    const lessons = await this.loadAllSteps();

    const topics = [...new Set(lessons.map(l => l.topic))];
    const levels = [...new Set(lessons.map(l => l.level))];
    const totalSteps = lessons.reduce((sum, l) => sum + l.totalSteps, 0);

    return {
      totalLessons: lessons.length,
      totalSteps,
      topics,
      levels,
      estimatedMigrationTime: `${Math.ceil(lessons.length * 0.5)} hours`,
    };
  }
}

// Singleton instance
export const legacyLoader = new LegacyLoader();
