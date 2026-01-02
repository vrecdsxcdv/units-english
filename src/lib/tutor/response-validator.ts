// Response Validator for VocabOS Tutor
// QA-lite validation without separate model - pattern-based checks

import { SessionPhase, UserIntent } from './context-anchor';

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  shouldRegenerate: boolean;
}

// Patterns that indicate forbidden content
const FORBIDDEN_PATTERNS = {
  // Bureaucratic/plan-style language
  bureaucratic: [
    /твой план действий/i,
    /план действий/i,
    /шаг\s*1[.:]/i,
    /шаг\s*2[.:]/i,
    /шаг\s*3[.:]/i,
    /этап\s*1[.:]/i,
    /этап\s*2[.:]/i,
    /этапы обучения/i,
    /рекомендую выполнить/i,
    /рекомендации:/i,
    /план на сегодня/i,
    /план на неделю/i,
  ],

  // Technical jargon (exposing internal data)
  technicalJargon: [
    /skillvector/i,
    /skill\s*vector/i,
    /fatigue\s*=\s*(low|medium|high)/i,
    /sessionphase/i,
    /messagesinsession/i,
    /0\.\d+ в (grammar|vocabulary|speaking)/i,
    /твой уровень по шкале/i,
  ],

  // Empty coaching
  emptyCoaching: [
    /ты молодец,?\s*что пришёл/i,
    /верю в тебя/i,
    /твой путь к успеху/i,
    /ты справишься/i,
    /я горжусь/i,
  ],

  // Markdown (should not be used)
  markdown: [
    /\*\*[^*]+\*\*/,  // bold
    /\*[^*]+\*/,      // italic (but allow single * in sentences)
    /^#{1,6}\s/m,     // headers
    /```/,            // code blocks
    /__[^_]+__/,      // underline bold
  ],

  // Exercise patterns (for onboarding check)
  exercises: [
    /вставь\s*(слово|пропущенное)/i,
    /заполни\s*пропуски/i,
    /выбери\s*правильный/i,
    /fill\s*in\s*the\s*(blank|gap)/i,
    /choose\s*the\s*(correct|right)/i,
    /переведи\s*(на|предложение)/i,
    /упражнение\s*\d/i,
    /задание\s*\d/i,
    /\d\)\s*[A-Z][a-z]+\s*___/,  // numbered exercise with blank
  ],

  // Grammar rules (for onboarding check)
  grammarRules: [
    /правило:/i,
    /образуется с помощью/i,
    /используется когда/i,
    /present\s*(simple|continuous|perfect)/i,
    /past\s*(simple|continuous|perfect)/i,
    /future\s*(simple|continuous|perfect)/i,
    /глагол\s*to\s*be/i,
    /артикль\s*(a|an|the)/i,
  ],
};

// Check if response contains forbidden patterns
function checkForbiddenPatterns(
  response: string,
  patterns: RegExp[]
): string[] {
  const found: string[] = [];
  for (const pattern of patterns) {
    if (pattern.test(response)) {
      found.push(pattern.source);
    }
  }
  return found;
}

// Check if response has question (for dialogue requirement)
function hasQuestion(response: string): boolean {
  return response.includes('?');
}

// Check if response has examples (English + translation pattern)
function hasExamples(response: string): boolean {
  // Pattern: "English text" — Russian translation
  const examplePattern = /"[^"]+"\s*[—–-]\s*[А-Яа-яёЁ]/;
  return examplePattern.test(response);
}

// Count examples in response
function countExamples(response: string): number {
  const examplePattern = /"[^"]+"\s*[—–-]\s*[А-Яа-яёЁ]/g;
  const matches = response.match(examplePattern);
  return matches ? matches.length : 0;
}

// Check response length
function isResponseTooLong(response: string, phase: SessionPhase): boolean {
  const lines = response.split('\n').filter(l => l.trim().length > 0);
  if (phase === 'ONBOARDING') {
    return lines.length > 8;  // Max 8 lines in onboarding
  }
  return lines.length > 20;  // Max 20 lines in teaching
}

// Check for three paragraphs without question
function hasThreeParagraphsWithoutQuestion(response: string): boolean {
  const paragraphs = response.split('\n\n').filter(p => p.trim().length > 0);
  if (paragraphs.length < 3) return false;

  // Check if first 3 paragraphs have no question
  const first3 = paragraphs.slice(0, 3).join('\n');
  return !first3.includes('?');
}

// Main validation function
export function validateTutorResponse(
  response: string,
  phase: SessionPhase,
  intent?: UserIntent
): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Always check: bureaucratic patterns
  const bureaucraticFound = checkForbiddenPatterns(
    response,
    FORBIDDEN_PATTERNS.bureaucratic
  );
  if (bureaucraticFound.length > 0) {
    errors.push(`Обнаружен канцелярит/план-стиль: ${bureaucraticFound.join(', ')}`);
  }

  // Always check: technical jargon
  const jargonFound = checkForbiddenPatterns(
    response,
    FORBIDDEN_PATTERNS.technicalJargon
  );
  if (jargonFound.length > 0) {
    errors.push(`Обнаружен технический жаргон: ${jargonFound.join(', ')}`);
  }

  // Always check: empty coaching
  const coachingFound = checkForbiddenPatterns(
    response,
    FORBIDDEN_PATTERNS.emptyCoaching
  );
  if (coachingFound.length > 0) {
    warnings.push(`Пустой коучинг: ${coachingFound.join(', ')}`);
  }

  // Always check: markdown
  const markdownFound = checkForbiddenPatterns(
    response,
    FORBIDDEN_PATTERNS.markdown
  );
  if (markdownFound.length > 0) {
    warnings.push('Обнаружен Markdown форматирование');
  }

  // Phase-specific checks
  if (phase === 'ONBOARDING') {
    // In onboarding: no exercises
    const exercisesFound = checkForbiddenPatterns(
      response,
      FORBIDDEN_PATTERNS.exercises
    );
    if (exercisesFound.length > 0) {
      errors.push('Упражнения запрещены в фазе ONBOARDING');
    }

    // In onboarding: no grammar rules
    const rulesFound = checkForbiddenPatterns(
      response,
      FORBIDDEN_PATTERNS.grammarRules
    );
    if (rulesFound.length > 0) {
      errors.push('Грамматические правила запрещены в фазе ONBOARDING');
    }

    // In onboarding: must have question about person
    if (!hasQuestion(response)) {
      warnings.push('В ONBOARDING желательно задавать вопрос о человеке');
    }

    // In onboarding: should be short
    if (isResponseTooLong(response, 'ONBOARDING')) {
      warnings.push('Слишком длинный ответ для ONBOARDING (макс 8 строк)');
    }
  }

  if (phase === 'TEACHING') {
    // In teaching with practice intent: check for explanation + examples
    if (intent === 'grammar_practice' || intent === 'exercises') {
      const exampleCount = countExamples(response);
      if (exampleCount < 2) {
        warnings.push(`Мало примеров для практики (${exampleCount}/2)`);
      }

      // Should have CHECK question
      if (!hasQuestion(response)) {
        warnings.push('Нет CHECK-вопроса перед практикой');
      }
    }

    // Check for monologue (3+ paragraphs without question)
    if (hasThreeParagraphsWithoutQuestion(response)) {
      warnings.push('Три абзаца без вопроса — похоже на лекцию');
    }

    // In teaching: should not be too long
    if (isResponseTooLong(response, 'TEACHING')) {
      warnings.push('Очень длинный ответ — рассмотри разбивку');
    }
  }

  // Determine if should regenerate
  const shouldRegenerate = errors.length > 0;

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    shouldRegenerate,
  };
}

// Clean up response (light fixes)
export function cleanResponse(response: string): string {
  let cleaned = response;

  // Remove markdown bold
  cleaned = cleaned.replace(/\*\*([^*]+)\*\*/g, '$1');

  // Remove markdown headers
  cleaned = cleaned.replace(/^#{1,6}\s+/gm, '');

  // Replace code blocks with plain text
  cleaned = cleaned.replace(/```[^`]*```/g, '');

  // Trim excessive newlines
  cleaned = cleaned.replace(/\n{3,}/g, '\n\n');

  return cleaned.trim();
}

// Generate regeneration prompt addition
export function getRegenerationHint(validationResult: ValidationResult): string {
  if (!validationResult.shouldRegenerate) return '';

  const hints: string[] = [];

  for (const error of validationResult.errors) {
    if (error.includes('канцелярит')) {
      hints.push('Избегай "план действий", "шаг 1/2/3". Пиши живым языком.');
    }
    if (error.includes('технический')) {
      hints.push('Не упоминай технические данные напрямую.');
    }
    if (error.includes('ONBOARDING') && error.includes('пражнени')) {
      hints.push('Не давай упражнений — только знакомство и вопросы о человеке.');
    }
    if (error.includes('ONBOARDING') && error.includes('рамматич')) {
      hints.push('Не объясняй правила — сначала узнай человека.');
    }
  }

  return hints.length > 0
    ? `\n\nВАЖНО для этого ответа: ${hints.join(' ')}`
    : '';
}

export default {
  validateTutorResponse,
  cleanResponse,
  getRegenerationHint,
};
