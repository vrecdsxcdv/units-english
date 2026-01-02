import { describe, it, expect } from 'vitest';
import { VOCABOS_SYSTEM_PROMPT_V3 } from '../system-prompt';
import { buildContextAnchor, createDefaultContext, determineSessionPhase } from '../context-anchor';
import { validateTutorResponse } from '../response-validator';

describe('VocabOS Tutor System', () => {

  // Test 1: Onboarding - no exercises/rules, has questions about the person
  describe('Onboarding Phase', () => {
    it('should define ONBOARDING mode rules in prompt', () => {
      const prompt = VOCABOS_SYSTEM_PROMPT_V3;

      // Check that ONBOARDING section forbids exercises
      expect(prompt).toContain('РЕЖИМ 1: ONBOARDING');
      expect(prompt).toContain('СТРОГО ЗАПРЕЩЕНО');
      expect(prompt).toContain('Упражнения любого типа');
      expect(prompt).toContain('Грамматические правила');

      // Check that onboarding focuses on understanding the person
      expect(prompt).toContain('РАЗРЕШЕНО ТОЛЬКО');
      expect(prompt).toContain('Вопросы о человеке');
      expect(prompt).toContain('цели');
    });

    it('should detect ONBOARDING phase for first 6 messages without plan confirmation', () => {
      // determineSessionPhase(messagesCount, hasConfirmedPlan)
      expect(determineSessionPhase(1, false)).toBe('ONBOARDING');
      expect(determineSessionPhase(3, false)).toBe('ONBOARDING');
      expect(determineSessionPhase(6, false)).toBe('ONBOARDING');
    });

    it('should detect TEACHING phase after 6 messages', () => {
      expect(determineSessionPhase(7, false)).toBe('TEACHING');
      expect(determineSessionPhase(10, false)).toBe('TEACHING');
    });

    it('should reject exercises during ONBOARDING phase', () => {
      const responseWithExercise = `
        Привет! Давай начнём с упражнения.

        Заполни пропуски:
        I ___ a student.
      `;

      const validation = validateTutorResponse(responseWithExercise, 'ONBOARDING');

      expect(validation.isValid).toBe(false);
      expect(validation.errors.some(e => e.includes('ONBOARDING'))).toBe(true);
    });

    it('should reject grammar rules during ONBOARDING', () => {
      const responseWithRules = `
        Привет! Давай сразу разберём Present Simple.
        Present Simple используется когда говорим о привычках.
      `;

      const validation = validateTutorResponse(responseWithRules, 'ONBOARDING');

      expect(validation.isValid).toBe(false);
    });
  });

  // Test 2: Teaching - grammar_practice → explanation + examples + CHECK + exercises
  describe('Teaching Phase - Grammar Practice', () => {
    it('should define TutorLoop structure in prompt', () => {
      const prompt = VOCABOS_SYSTEM_PROMPT_V3;

      // Check TutorLoop structure
      expect(prompt).toContain('TEACH');
      expect(prompt).toContain('CHECK');
      expect(prompt).toContain('ADAPT');
      expect(prompt).toContain('PRACTICE');

      // Check that explanation comes before exercises
      expect(prompt).toContain('объяснение');
      expect(prompt).toContain('пример');
    });

    it('should allow exercises in TEACHING phase with explanation', () => {
      const goodTeachingResponse = `
        Present Simple используется для привычных действий.

        "I work every day" — Я работаю каждый день
        "She studies English" — Она учит английский

        Понятно, как это работает?
      `;

      const validation = validateTutorResponse(goodTeachingResponse, 'TEACHING', 'grammar_practice');

      // Should be valid as it has explanation + examples + CHECK
      expect(validation.isValid).toBe(true);
    });

    it('should warn when no examples provided in teaching', () => {
      const noExamplesResponse = `
        Present Simple — это очень важное время.
        Мы его используем для привычек.
        Понятно?
      `;

      const validation = validateTutorResponse(noExamplesResponse, 'TEACHING', 'grammar_practice');

      // Should have warning about missing examples
      expect(validation.warnings.some(w => w.includes('примеров'))).toBe(true);
    });
  });

  // Test 3: Forbid "ТВОЙ ПЛАН ДЕЙСТВИЙ" in response
  describe('Anti-patterns', () => {
    it('should reject bureaucratic patterns like "ТВОЙ ПЛАН ДЕЙСТВИЙ"', () => {
      const bureaucraticResponse = `
        Отлично! Давай составим план.

        ТВОЙ ПЛАН ДЕЙСТВИЙ:
        - Учим грамматику
        - Практикуем
        - Повторяем
      `;

      const validation = validateTutorResponse(bureaucraticResponse, 'TEACHING');

      expect(validation.isValid).toBe(false);
      expect(validation.errors.some(e =>
        e.toLowerCase().includes('план') || e.toLowerCase().includes('канцелярит')
      )).toBe(true);
    });

    it('should reject "Шаг 1/2/3" numbered steps', () => {
      const stepsResponse = `
        Сегодня мы будем:

        Шаг 1. Изучим новые слова
        Шаг 2. Попрактикуемся
        Шаг 3. Закрепим материал
      `;

      const validation = validateTutorResponse(stepsResponse, 'TEACHING');

      expect(validation.isValid).toBe(false);
    });

    it('should reject technical jargon in responses', () => {
      const jargonResponse = `
        Давай поработаем над твоим skillVector!
        Сейчас у тебя 0.3 в grammar, нужно поднять.
      `;

      const validation = validateTutorResponse(jargonResponse, 'TEACHING');

      expect(validation.isValid).toBe(false);
      expect(validation.errors.some(e => e.includes('жаргон'))).toBe(true);
    });
  });

  // Test 4: Context anchor goes into SYSTEM prompt, not user content
  describe('Context Anchor', () => {
    it('should build context anchor with proper structure', () => {
      const context = createDefaultContext();
      const anchor = buildContextAnchor(context);

      // Should contain SYSTEM ONLY marker
      expect(anchor).toContain('SYSTEM ONLY');
      expect(anchor).toContain('КОНТЕКСТ УЧЕНИКА');

      // Should contain user data fields
      expect(anchor).toContain('Уровень');
      expect(anchor).toContain('Цель');
    });

    it('should include skill summary in context anchor', () => {
      const context = createDefaultContext();
      context.skillVector = {
        grammar: 0.3,
        vocabulary: 0.5,
        pronunciation: 0.2,
        listening: 0.4,
        speaking: 0.2,
        slang: 0.1,
        wordFormation: 0.1,
        fluency: 0.3,
        writing: 0.3,
        comprehension: 0.5,
      };

      const anchor = buildContextAnchor(context);

      // Should identify weak skills
      expect(anchor).toContain('Слабые');
    });

    it('should mark context as not for direct mention', () => {
      const context = createDefaultContext();
      const anchor = buildContextAnchor(context);

      // Should have instruction not to mention directly
      expect(anchor).toContain('НЕ НАЗЫВАЙ НАПРЯМУЮ');
    });

    it('should include session phase info', () => {
      const context = createDefaultContext();
      context.sessionPhase = 'TEACHING';
      context.messagesInSession = 10;

      const anchor = buildContextAnchor(context);

      expect(anchor).toContain('TEACHING');
      expect(anchor).toContain('#10');
    });
  });

  // Test 5: vocab_study button → 5-7 words with context + CHECK + mini-practice
  describe('Vocab Study Intent', () => {
    it('should define vocab_study handling in prompt', () => {
      const prompt = VOCABOS_SYSTEM_PROMPT_V3;

      // Check that vocab study pattern exists
      expect(prompt).toContain('vocab_study');
      expect(prompt).toContain('5-7 слов');
    });

    it('should validate vocab response has words with context', () => {
      const goodVocabResponse = `
        Вот 5 полезных слов по теме работа:

        "deadline" — крайний срок
        "colleague" — коллега
        "promote" — повышать
        "salary" — зарплата
        "resign" — увольняться

        Какое слово тебе уже знакомо?
      `;

      const validation = validateTutorResponse(goodVocabResponse, 'TEACHING', 'vocab_study');

      expect(validation.isValid).toBe(true);
    });

    it('should pass validation for vocab response with CHECK', () => {
      const vocabWithCheck = `
        Вот слова по теме:

        "deadline" — крайний срок
        "colleague" — коллега

        Какое слово знаешь?
      `;

      const validation = validateTutorResponse(vocabWithCheck, 'TEACHING', 'vocab_study');

      // Should have no errors since it has a question
      expect(validation.isValid).toBe(true);
    });
  });

  // Additional edge cases
  describe('Edge Cases', () => {
    it('should transition from ONBOARDING to TEACHING after plan confirmation', () => {
      // With plan confirmation, should switch to TEACHING regardless of message count
      expect(determineSessionPhase(3, true)).toBe('TEACHING');
      expect(determineSessionPhase(1, true)).toBe('TEACHING');
    });

    it('should respect explicit phase override', () => {
      // Explicit phase should override everything
      expect(determineSessionPhase(1, false, 'TEACHING')).toBe('TEACHING');
      expect(determineSessionPhase(10, true, 'ONBOARDING')).toBe('ONBOARDING');
    });

    it('should handle responses with markdown', () => {
      const markdownResponse = `
        # Урок грамматики

        **Present Simple** используется для:

        "I work" — Я работаю

        Понятно?
      `;

      const validation = validateTutorResponse(markdownResponse, 'TEACHING');

      // Should have warnings about markdown
      expect(validation.warnings.some(w => w.includes('Markdown'))).toBe(true);
    });

    it('should warn about monologue without questions', () => {
      const monologueResponse = `
        Сегодня поговорим о временах.

        Present Simple очень важно.

        Его используют для привычек.

        Форма простая - глагол без изменений.
      `;

      const validation = validateTutorResponse(monologueResponse, 'TEACHING');

      // Should warn about no question
      expect(validation.warnings.some(w => w.includes('без вопроса') || w.includes('лекция'))).toBe(true);
    });

    it('should accept valid conversational response', () => {
      const goodResponse = `
        Окей, давай разберём Present Simple!

        "I work every day" — Я работаю каждый день
        "She likes coffee" — Она любит кофе

        Видишь, как просто? Какие ещё примеры приходят в голову?
      `;

      const validation = validateTutorResponse(goodResponse, 'TEACHING');

      expect(validation.isValid).toBe(true);
    });
  });
});
