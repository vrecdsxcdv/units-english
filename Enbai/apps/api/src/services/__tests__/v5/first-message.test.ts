/**
 * V5 First Message Tests
 *
 * Tests for:
 * - First message generator
 * - First message validator
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  firstMessageValidator,
  ValidationResult,
} from '../../v5/first-message.validator';
import type { CEFRLevel } from '@enbai/types';

// ============================================
// FIRST MESSAGE VALIDATOR TESTS
// ============================================

describe('FirstMessageValidator', () => {
  describe('validate', () => {
    it('should pass a valid first message with all components', () => {
      const content = `Привет! Отлично справился с тестом. Твой уровень: B1 — это уже солидная база!

Я вижу, что грамматика пока хромает — это нормально, и мы это исправим. Будем работать над грамматикой каждый день.

Давай начнём с артиклей — 90% учеников их путают! Правило простое: "the" означает конкретный предмет, "a/an" — какой-то.

Примеры:
"I saw a dog" — какую-то собаку
"The dog was friendly" — та самая собака

Попробуй: как будет "Я купил машину. Машина красная"?`;

      const result = firstMessageValidator.validate(content, 'B1');

      expect(result.isValid).toBe(true);
      expect(result.score).toBeGreaterThanOrEqual(60);
      expect(result.components.warmup.found).toBe(true);
      expect(result.components.goalAlign.found).toBe(true);
      expect(result.components.teach.found).toBe(true);
      expect(result.components.check.found).toBe(true);
    });

    it('should fail if message is too short', () => {
      const content = 'Привет! Как дела?';
      const result = firstMessageValidator.validate(content, 'A1');

      expect(result.isValid).toBe(false);
      expect(result.issues.some(i => i.includes('короткое'))).toBe(true);
    });

    it('should fail if WARMUP is missing', () => {
      const content = `Будем работать над грамматикой. Это важно для твоего уровня.

Артикли — это важная тема. "The" используется для конкретных предметов, "a/an" — для неконкретных.

"I have a book" — какая-то книга
"The book is interesting" — та самая книга

Как сказать "Я вижу машину"?`;

      const result = firstMessageValidator.validate(content, 'A2');

      expect(result.components.warmup.found).toBe(false);
    });

    it('should fail if TEACH is missing examples', () => {
      const content = `Привет! Твой уровень: A1 — отличное начало!

Сегодня будем работать над грамматикой — это важно для основ.

Артикли — это слова перед существительными. Они бывают определённые и неопределённые. Это базовая тема.

Попробуй сам — как сказать "книга"?`;

      const result = firstMessageValidator.validate(content, 'A1');

      // TEACH exists but quality should be poor/acceptable due to lack of examples
      expect(result.components.teach.quality).not.toBe('good');
    });

    it('should fail if CHECK question is missing', () => {
      const content = `Привет! Отлично справился с тестом. Твой уровень: B2.

Будем работать над vocabulary — это твоя слабая сторона.

Давай начнём с phrasal verbs. Они состоят из глагола и предлога.

"Look up" — искать в словаре
"Give up" — сдаваться

Вот несколько полезных выражений для практики.`;

      const result = firstMessageValidator.validate(content, 'B2');

      expect(result.components.check.found).toBe(false);
    });

    it('should fail if message contains Markdown', () => {
      const content = `Привет! Твой уровень: **B1**!

Будем работать над грамматикой.

## Артикли

Правило простое:
- "the" = конкретный
- "a/an" = неконкретный

Попробуй: как сказать это?`;

      const result = firstMessageValidator.validate(content, 'B1');

      expect(result.isValid).toBe(false);
      expect(result.issues).toContain('Содержит Markdown разметку');
    });

    it('should fail if message is too formal', () => {
      const content = `Добрый день, уважаемый ученик! Позвольте поздравить вас с прохождением теста. Ваш уровень: C1.

Разрешите предложить вам работу над грамматикой.

Артикли являются важной частью английского языка.

"The" используется для определённых предметов
"A/an" используется для неопределённых предметов

Будьте добры ответить на вопрос?`;

      const result = firstMessageValidator.validate(content, 'C1');

      expect(result.isValid).toBe(false);
      expect(result.issues).toContain('Слишком формальный стиль');
    });

    it('should calculate score correctly', () => {
      // Perfect message should score high
      const perfectMessage = `Привет! Круто справился с тестом. Твой уровень: B1!

Я вижу, что грамматика — твоя слабая сторона. Будем работать над ней.

А ты знал, что артикли — это самая частая ошибка? Правило простое: "the" — конкретный предмет, "a" — какой-то.

"I bought a car" — какую-то машину
"The car is red" — та самая машина

Попробуй: как будет "Я вижу собаку. Собака большая"?`;

      const result = firstMessageValidator.validate(perfectMessage, 'B1');

      expect(result.score).toBeGreaterThanOrEqual(80);
    });

    it('should handle different CEFR levels', () => {
      const messageWithA1 = `Привет! Твой уровень: A1 — отличное начало!

Будем работать над простой грамматикой.

Артикли — это просто. "A" = один, "the" = тот.

"A dog" — собака
"The dog" — та собака

Как сказать "кошка"?`;

      const resultA1 = firstMessageValidator.validate(messageWithA1, 'A1');
      expect(resultA1.components.warmup.found).toBe(true);

      const messageWithC2 = `Привет! Твой уровень: C2 — впечатляющий результат!

Будем работать над нюансами academic writing.

Артикли в научных текстах имеют особые правила.

"The research suggests..." — конкретное исследование
"A study has shown..." — одно из исследований

Как использовать артикль в предложении "hypothesis was confirmed"?`;

      const resultC2 = firstMessageValidator.validate(messageWithC2, 'C2');
      expect(resultC2.components.warmup.found).toBe(true);
    });
  });

  describe('component checks', () => {
    it('should detect WARMUP with greeting and level', () => {
      const content = `Привет! Отлично справился с тестом. Твой уровень: B1!

Будем работать над грамматикой.

"Example one" — пример
"Example two" — пример

Как сказать это?`;

      const result = firstMessageValidator.validate(content, 'B1');
      expect(result.components.warmup.quality).toBe('good');
    });

    it('should detect GOAL_ALIGN with skill mention', () => {
      const content = `Привет! Уровень B2.

Сфокусируемся на vocabulary — это важнее всего сейчас. Будем работать над расширением словарного запаса.

"Vocabulary" — словарный запас
"Example" — пример

Как сказать?`;

      const result = firstMessageValidator.validate(content, 'B2');
      expect(result.components.goalAlign.found).toBe(true);
    });

    it('should count examples correctly in TEACH', () => {
      const content = `Привет! Уровень A2.

Работаем над grammar.

Правило такое, например:

"I have a book" — у меня есть книга
"The book is red" — книга красная
"An apple" — яблоко
"The apple" — то яблоко

Как сказать "дом"?`;

      const result = firstMessageValidator.validate(content, 'A2');
      expect(result.components.teach.quality).toBe('good');
    });

    it('should detect CHECK question at the end', () => {
      const content = `Привет! Уровень B1.

Работаем над grammar.

Правило простое.

"Example" — пример

Попробуй: как будет "я читаю книгу"?`;

      const result = firstMessageValidator.validate(content, 'B1');
      expect(result.components.check.found).toBe(true);
    });
  });
});

// ============================================
// INTEGRATION TEST PLACEHOLDER
// ============================================

describe('FirstMessageGenerator (integration)', () => {
  // These tests would require a real database connection
  // and are marked as skipped for unit testing

  it.skip('should generate a valid first message', async () => {
    // This would test the actual generator with a mocked prisma
    // and AI client
  });

  it.skip('should create conversation and message in DB', async () => {
    // This would test the DB operations
  });

  it.skip('should set correct conversation state after generation', async () => {
    // This would verify the state is set to CHECK after first message
  });
});
