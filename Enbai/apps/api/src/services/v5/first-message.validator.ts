/**
 * V5 First Message Validator
 *
 * Validates that the first AI message contains all required components:
 * - WARMUP (greeting, level announcement)
 * - GOAL_ALIGN (what we'll work on)
 * - TEACH (micro-lesson with 3-6 sentences + 2 examples)
 * - CHECK (1 comprehension question)
 *
 * Also checks:
 * - No Markdown formatting
 * - Appropriate length
 * - Russian explanations, English examples
 */

import type { CEFRLevel } from '@enbai/types';

// ============================================
// INTERFACES
// ============================================

export interface ValidationResult {
  isValid: boolean;
  score: number; // 0-100
  components: {
    warmup: ComponentCheck;
    goalAlign: ComponentCheck;
    teach: ComponentCheck;
    check: ComponentCheck;
  };
  issues: string[];
  warnings: string[];
}

export interface ComponentCheck {
  found: boolean;
  quality: 'good' | 'acceptable' | 'poor' | 'missing';
  details: string;
}

// ============================================
// VALIDATION CONFIG
// ============================================

const VALIDATION_CONFIG = {
  minLength: 200,
  maxLength: 1500,
  minSentences: 6,
  maxSentences: 15,
  minExamples: 2,
  maxExamples: 4,

  // Patterns for component detection
  patterns: {
    warmup: [
      /привет/i,
      /здравствуй/i,
      /отлично справил/i,
      /твой уровень/i,
      /тест (пройден|сдан)/i,
    ],
    goalAlign: [
      /будем работать/i,
      /сфокусируемся на/i,
      /начнём с/i,
      /поработаем над/i,
      /разберём/i,
      /важн(о|ее всего)/i,
    ],
    teach: [
      /правило/i,
      /например/i,
      /пример/i,
      /значит/i,
      /означает/i,
      /используется/i,
    ],
    check: [
      /\?$/m,
      /попробуй/i,
      /как будет/i,
      /как сказать/i,
      /переведи/i,
      /выбери/i,
    ],
    examples: [
      /"[^"]+"/g, // Quoted text
      /«[^»]+»/g, // Russian quotes
      /"[^"]+"/g, // Smart quotes
    ],
  },

  // Forbidden patterns
  forbidden: {
    markdown: [
      /\*\*[^*]+\*\*/,  // Bold
      /\*[^*]+\*/,      // Italic
      /^#{1,6}\s/m,     // Headers
      /```[\s\S]*```/,  // Code blocks
      /`[^`]+`/,        // Inline code
    ],
    emojis: /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}]/u,
    tooFormal: [
      /добрый день/i,
      /уважаемый/i,
      /позвольте/i,
      /разрешите/i,
    ],
  },
};

// ============================================
// VALIDATOR CLASS
// ============================================

export class FirstMessageValidator {
  /**
   * Validate first AI message content
   */
  validate(content: string, cefrLevel: CEFRLevel): ValidationResult {
    const issues: string[] = [];
    const warnings: string[] = [];

    // Check length
    if (content.length < VALIDATION_CONFIG.minLength) {
      issues.push(`Сообщение слишком короткое: ${content.length} < ${VALIDATION_CONFIG.minLength} символов`);
    }
    if (content.length > VALIDATION_CONFIG.maxLength) {
      warnings.push(`Сообщение слишком длинное: ${content.length} > ${VALIDATION_CONFIG.maxLength} символов`);
    }

    // Check sentence count
    const sentences = this.countSentences(content);
    if (sentences < VALIDATION_CONFIG.minSentences) {
      issues.push(`Мало предложений: ${sentences} < ${VALIDATION_CONFIG.minSentences}`);
    }
    if (sentences > VALIDATION_CONFIG.maxSentences) {
      warnings.push(`Много предложений: ${sentences} > ${VALIDATION_CONFIG.maxSentences}`);
    }

    // Check forbidden patterns
    this.checkForbiddenPatterns(content, issues);

    // Check components
    const warmup = this.checkWarmup(content, cefrLevel);
    const goalAlign = this.checkGoalAlign(content);
    const teach = this.checkTeach(content);
    const check = this.checkCheck(content);

    // Add component issues
    if (!warmup.found) issues.push('Отсутствует WARMUP (приветствие, уровень)');
    if (!goalAlign.found) issues.push('Отсутствует GOAL_ALIGN (план работы)');
    if (!teach.found) issues.push('Отсутствует TEACH (объяснение)');
    if (!check.found) issues.push('Отсутствует CHECK (вопрос на понимание)');

    // Calculate score
    const score = this.calculateScore(warmup, goalAlign, teach, check, issues, warnings);

    return {
      isValid: issues.length === 0,
      score,
      components: {
        warmup,
        goalAlign,
        teach,
        check,
      },
      issues,
      warnings,
    };
  }

  // ============================================
  // COMPONENT CHECKS
  // ============================================

  private checkWarmup(content: string, cefrLevel: CEFRLevel): ComponentCheck {
    const patterns = VALIDATION_CONFIG.patterns.warmup;
    const matches = patterns.filter(p => p.test(content)).length;

    // Check for level mention
    const hasLevel = content.includes(cefrLevel) ||
                     content.toLowerCase().includes(cefrLevel.toLowerCase());

    if (matches >= 2 && hasLevel) {
      return {
        found: true,
        quality: 'good',
        details: 'Приветствие и уровень указаны',
      };
    } else if (matches >= 1 || hasLevel) {
      return {
        found: true,
        quality: 'acceptable',
        details: matches >= 1 ? 'Есть приветствие, но уровень не указан явно' : 'Уровень указан, но приветствие слабое',
      };
    }

    return {
      found: false,
      quality: 'missing',
      details: 'Нет приветствия и указания уровня',
    };
  }

  private checkGoalAlign(content: string): ComponentCheck {
    const patterns = VALIDATION_CONFIG.patterns.goalAlign;
    const matches = patterns.filter(p => p.test(content)).length;

    // Check for skill mention
    const skills = ['грамматик', 'лексик', 'vocabular', 'grammar', 'speaking', 'writing', 'listening'];
    const hasSkillMention = skills.some(s => content.toLowerCase().includes(s));

    if (matches >= 2 && hasSkillMention) {
      return {
        found: true,
        quality: 'good',
        details: 'Цель обучения и навык указаны',
      };
    } else if (matches >= 1 || hasSkillMention) {
      return {
        found: true,
        quality: 'acceptable',
        details: 'Есть указание на цель, но не полное',
      };
    }

    return {
      found: false,
      quality: 'missing',
      details: 'Нет указания на цель/план обучения',
    };
  }

  private checkTeach(content: string): ComponentCheck {
    const patterns = VALIDATION_CONFIG.patterns.teach;
    const matches = patterns.filter(p => p.test(content)).length;

    // Count examples
    const exampleCount = this.countExamples(content);

    if (matches >= 2 && exampleCount >= 2) {
      return {
        found: true,
        quality: 'good',
        details: `Объяснение с ${exampleCount} примерами`,
      };
    } else if (matches >= 1 && exampleCount >= 1) {
      return {
        found: true,
        quality: 'acceptable',
        details: `Есть объяснение, но примеров мало (${exampleCount})`,
      };
    } else if (matches >= 1) {
      return {
        found: true,
        quality: 'poor',
        details: 'Есть объяснение, но нет примеров',
      };
    }

    return {
      found: false,
      quality: 'missing',
      details: 'Нет объяснения темы',
    };
  }

  private checkCheck(content: string): ComponentCheck {
    const patterns = VALIDATION_CONFIG.patterns.check;
    const matches = patterns.filter(p => p.test(content)).length;

    // Check if ends with question
    const trimmed = content.trim();
    const endsWithQuestion = trimmed.endsWith('?');

    if (matches >= 2 && endsWithQuestion) {
      return {
        found: true,
        quality: 'good',
        details: 'Есть вопрос на понимание в конце',
      };
    } else if (matches >= 1 || endsWithQuestion) {
      return {
        found: true,
        quality: 'acceptable',
        details: 'Есть вопрос, но не в конце или неявный',
      };
    }

    return {
      found: false,
      quality: 'missing',
      details: 'Нет вопроса на понимание',
    };
  }

  // ============================================
  // HELPER METHODS
  // ============================================

  private countSentences(content: string): number {
    const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 10);
    return sentences.length;
  }

  private countExamples(content: string): number {
    let count = 0;
    for (const pattern of VALIDATION_CONFIG.patterns.examples) {
      const matches = content.match(pattern);
      if (matches) count += matches.length;
    }
    return Math.floor(count / 2); // Divide by 2 as we often have opening and closing quotes
  }

  private checkForbiddenPatterns(content: string, issues: string[]): void {
    // Check markdown
    for (const pattern of VALIDATION_CONFIG.forbidden.markdown) {
      if (pattern.test(content)) {
        issues.push('Содержит Markdown разметку');
        break;
      }
    }

    // Check emojis
    if (VALIDATION_CONFIG.forbidden.emojis.test(content)) {
      issues.push('Содержит эмодзи');
    }

    // Check formal language
    for (const pattern of VALIDATION_CONFIG.forbidden.tooFormal) {
      if (pattern.test(content)) {
        issues.push('Слишком формальный стиль');
        break;
      }
    }
  }

  private calculateScore(
    warmup: ComponentCheck,
    goalAlign: ComponentCheck,
    teach: ComponentCheck,
    check: ComponentCheck,
    issues: string[],
    warnings: string[]
  ): number {
    let score = 100;

    // Component scores (each worth 20 points)
    const qualityScores = {
      good: 20,
      acceptable: 15,
      poor: 8,
      missing: 0,
    };

    score = qualityScores[warmup.quality] +
            qualityScores[goalAlign.quality] +
            qualityScores[teach.quality] +
            qualityScores[check.quality];

    // Bonus for having all components (20 points)
    if (warmup.found && goalAlign.found && teach.found && check.found) {
      score += 20;
    }

    // Deductions for issues
    score -= issues.length * 5;
    score -= warnings.length * 2;

    return Math.max(0, Math.min(100, score));
  }
}

// Singleton export
export const firstMessageValidator = new FirstMessageValidator();

// ============================================
// QUICK VALIDATION FUNCTION
// ============================================

/**
 * Quick validation check for first message
 * Returns true if message is acceptable (score >= 60)
 */
export function isFirstMessageValid(content: string, cefrLevel: CEFRLevel): boolean {
  const result = firstMessageValidator.validate(content, cefrLevel);
  return result.isValid || result.score >= 60;
}
