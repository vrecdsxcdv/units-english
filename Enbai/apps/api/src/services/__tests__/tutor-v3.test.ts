/**
 * Tests for Tutor System V3
 *
 * Tests 5 key requirements:
 * 1. contextAnchor is in SYSTEM prompt (not user)
 * 2. No tasks before explanation (WARMUP/GOAL_ALIGN)
 * 3. CHECK question exists after TEACH
 * 4. nextState is properly applied
 * 5. QA doesn't skip long responses
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  buildTutorSystemPromptV3,
  buildMandatoryContextAnchor,
  validateTutorResponse,
  TUTOR_LOOP_V3_TRANSITIONS,
  TutorLoopStateV3,
  DEFAULT_GUARDRAILS,
} from '../../ai/prompts/tutor-system-v3';
import type {
  TeachingContext,
  ConversationState,
  SkillVector,
  SkillType,
  CEFRLevel,
} from '@enbai/types';

// ============================================
// TEST FIXTURES
// ============================================

const createMockSkillVector = (level: number = 0.3): SkillVector => ({
  grammar: level,
  vocabulary: level + 0.05,
  pronunciation: level + 0.1,
  listening: level + 0.15,
  speaking: level - 0.05,
  slang: level - 0.1,
  word_formation: level - 0.02,
  fluency: level + 0.08,
  writing: level + 0.03,
  comprehension: level + 0.12,
});

// Helper to create a mock ConversationState with V3 state names
const createMockConversationState = (state: string = 'WARMUP'): ConversationState => ({
  currentState: state as any, // V3 states like WARMUP, GOAL_ALIGN, TEACH, etc.
  previousState: 'INTRO' as any,
  currentMicroTopic: 'articles',
  currentSkillFocus: 'grammar' as SkillType,
  topicsCompletedThisSession: [],
  explanationGiven: false,
  checkAttempts: 0,
  practiceAttempts: 0,
  consecutiveErrors: 0,
  simplificationLevel: 0,
  stateEnteredAt: new Date().toISOString(),
  lastInteractionAt: new Date().toISOString(),
});

const createMockTeachingContext = (overrides?: Partial<TeachingContext>): TeachingContext => ({
  userId: 'test-user-123',
  skillVector: createMockSkillVector(),
  cefrLevel: 'A1' as CEFRLevel,
  learningAbility: 0.5,
  learningGoal: 'IELTS preparation',
  interests: ['movies', 'technology', 'travel'],
  dailyTimeMinutes: 20,
  tasksCompletedToday: 2,
  streak: 5,
  timeRemainingMinutes: 15,
  recentErrors: ['articles', 'prepositions'],
  conceptsToReview: ['a/an usage'],
  conversationState: createMockConversationState('WARMUP'),
  weakestSkills: ['slang', 'speaking', 'word_formation'] as SkillType[],
  strongestSkills: ['listening', 'comprehension', 'fluency'] as SkillType[],
  ...overrides,
});

// ============================================
// TEST 1: Context Anchor in SYSTEM Prompt
// ============================================

describe('1. Context Anchor in SYSTEM Prompt', () => {
  it('should include context anchor in system prompt', () => {
    const ctx = createMockTeachingContext();
    const systemPrompt = buildTutorSystemPromptV3(ctx);

    // Must contain the context anchor box
    expect(systemPrompt).toContain('ОБЯЗАТЕЛЬНЫЙ КОНТЕКСТ');
    expect(systemPrompt).toContain('CONTEXT ANCHOR');
    expect(systemPrompt).toContain('ТЫ ОБЯЗАН ИСПОЛЬЗОВАТЬ ЭТИ ДАННЫЕ');
  });

  it('should include user level in context anchor', () => {
    const ctx = createMockTeachingContext({ cefrLevel: 'B1' });
    const anchor = buildMandatoryContextAnchor(ctx);

    expect(anchor).toContain('LEVEL: B1');
  });

  it('should include learning goal in context anchor', () => {
    const ctx = createMockTeachingContext({ learningGoal: 'IELTS preparation' });
    const anchor = buildMandatoryContextAnchor(ctx);

    expect(anchor).toContain('GOAL: IELTS preparation');
  });

  it('should include weak skills in context anchor', () => {
    const ctx = createMockTeachingContext({
      weakestSkills: ['grammar', 'vocabulary', 'speaking'],
    });
    const anchor = buildMandatoryContextAnchor(ctx);

    expect(anchor).toContain('WEAK SKILLS:');
    expect(anchor).toContain('grammar');
    expect(anchor).toContain('vocabulary');
  });

  it('should include interests in context anchor when present', () => {
    const ctx = createMockTeachingContext({
      interests: ['football', 'music', 'gaming'],
    });
    const anchor = buildMandatoryContextAnchor(ctx);

    expect(anchor).toContain('INTERESTS:');
    expect(anchor).toContain('football');
  });

  it('should include recent errors in context anchor when present', () => {
    const ctx = createMockTeachingContext({
      recentErrors: ['tense usage', 'word order'],
    });
    const anchor = buildMandatoryContextAnchor(ctx);

    expect(anchor).toContain('ERRORS:');
  });

  it('should include IELTS strategy in context anchor', () => {
    const ctxA1 = createMockTeachingContext({
      cefrLevel: 'A1',
      learningGoal: 'IELTS band 6.5',
    });
    const anchorA1 = buildMandatoryContextAnchor(ctxA1);

    // For A1-A2 with IELTS goal, should mention it's a distant goal
    expect(anchorA1).toContain('IELTS СТРАТЕГИЯ:');
    expect(anchorA1).toMatch(/база|фундамент|дальн/i);

    const ctxB2 = createMockTeachingContext({
      cefrLevel: 'B2',
      learningGoal: 'IELTS band 7',
    });
    const anchorB2 = buildMandatoryContextAnchor(ctxB2);

    // For B2+ with IELTS goal, should mention active prep
    expect(anchorB2).toContain('IELTS СТРАТЕГИЯ:');
    expect(anchorB2).toMatch(/актив|essay|task/i);
  });

  it('should include skill percentages in context anchor', () => {
    const ctx = createMockTeachingContext({
      skillVector: {
        grammar: 0.35,
        vocabulary: 0.42,
        pronunciation: 0.28,
        listening: 0.55,
        speaking: 0.22,
        slang: 0.15,
        word_formation: 0.31,
        fluency: 0.38,
        writing: 0.44,
        comprehension: 0.61,
      },
    });
    const anchor = buildMandatoryContextAnchor(ctx);

    // Should contain skill values as percentages
    expect(anchor).toContain('SKILLS:');
    // Slang is weakest at 15%, should appear
    expect(anchor).toMatch(/slan:\d+/);
  });
});

// ============================================
// TEST 2: No Tasks Before Explanation
// ============================================

describe('2. No Tasks Before Explanation (WARMUP/GOAL_ALIGN)', () => {
  it('should detect task in WARMUP state as invalid', () => {
    const ctx = createMockTeachingContext({
      conversationState: createMockConversationState('WARMUP'),
    });

    // Response with task in WARMUP
    const responseWithTask = `
Привет! Как дела?

\`\`\`json
{
  "currentState": "WARMUP",
  "nextState": "GOAL_ALIGN",
  "task": {
    "templateId": "mcq_v1",
    "type": "grammar",
    "content": {"question": "Choose the correct answer"}
  }
}
\`\`\`
    `;

    const validation = validateTutorResponse(responseWithTask, 'WARMUP', ctx);

    expect(validation.isValid).toBe(false);
    expect(validation.issues).toContain('Задание до объяснения!');
    expect(validation.mustRegenerate).toBe(true);
  });

  it('should detect task in GOAL_ALIGN state as invalid', () => {
    const ctx = createMockTeachingContext({
      conversationState: createMockConversationState('GOAL_ALIGN'),
    });

    const responseWithTask = `
Сегодня займёмся артиклями!

\`\`\`json
{
  "currentState": "GOAL_ALIGN",
  "nextState": "TEACH",
  "task": {
    "templateId": "fill_blank_v1",
    "type": "grammar"
  }
}
\`\`\`
    `;

    const validation = validateTutorResponse(responseWithTask, 'GOAL_ALIGN', ctx);

    expect(validation.isValid).toBe(false);
    expect(validation.issues).toContain('Задание до объяснения!');
  });

  it('should allow response without task in WARMUP', () => {
    const ctx = createMockTeachingContext();

    const responseNoTask = `
Привет! Как настроение? Готов к новым знаниям? Сегодня разберём интересную тему про артикли!

\`\`\`json
{
  "currentState": "WARMUP",
  "nextState": "GOAL_ALIGN",
  "task": null
}
\`\`\`
    `;

    const validation = validateTutorResponse(responseNoTask, 'WARMUP', ctx);

    // Should not have "task before explanation" issue
    const hasTaskIssue = validation.issues.some(i => i.includes('Задание до объяснения'));
    expect(hasTaskIssue).toBe(false);
  });

  it('should allow task in PRACTICE state', () => {
    const practiceState = createMockConversationState('PRACTICE');
    practiceState.explanationGiven = true;
    const ctx = createMockTeachingContext({
      conversationState: practiceState,
    });

    const responseWithTask = `
Отлично! Теперь попробуй:

\`\`\`json
{
  "currentState": "PRACTICE",
  "nextState": "REVIEW",
  "task": {
    "templateId": "fill_blank_v1",
    "type": "grammar",
    "content": {"question": "Fill in the blank: ___ apple"}
  }
}
\`\`\`
    `;

    const validation = validateTutorResponse(responseWithTask, 'PRACTICE', ctx);

    // Should not have "task before explanation" issue in PRACTICE
    const hasTaskIssue = validation.issues.some(i => i.includes('Задание до объяснения'));
    expect(hasTaskIssue).toBe(false);
  });
});

// ============================================
// TEST 3: CHECK Question After TEACH
// ============================================

describe('3. CHECK Question After TEACH', () => {
  it('should require question mark in CHECK state response', () => {
    const ctx = createMockTeachingContext({
      conversationState: createMockConversationState('CHECK'),
    });

    // Response without question in CHECK state
    const responseNoQuestion = `
Хорошо, ты усвоил материал. Перейдём к практике.

\`\`\`json
{
  "currentState": "CHECK",
  "nextState": "PRACTICE"
}
\`\`\`
    `;

    const validation = validateTutorResponse(responseNoQuestion, 'CHECK', ctx);

    expect(validation.isValid).toBe(false);
    expect(validation.issues).toContain('Нет вопроса на проверку в CHECK');
  });

  it('should pass CHECK validation when question is present', () => {
    const ctx = createMockTeachingContext({
      conversationState: createMockConversationState('CHECK'),
    });

    const responseWithQuestion = `
Отлично! Давай проверим: какой артикль нужен перед словом "apple" - "a" или "an"?

\`\`\`json
{
  "currentState": "CHECK",
  "nextState": "PRACTICE"
}
\`\`\`
    `;

    const validation = validateTutorResponse(responseWithQuestion, 'CHECK', ctx);

    // Should not have "no question" issue
    const hasQuestionIssue = validation.issues.some(i => i.includes('Нет вопроса'));
    expect(hasQuestionIssue).toBe(false);
  });

  it('should enforce TEACH -> SELF_CHECK transition', () => {
    const transitions = TUTOR_LOOP_V3_TRANSITIONS.TEACH;

    expect(transitions).toContain('SELF_CHECK');
    expect(transitions.length).toBe(1); // Only SELF_CHECK allowed after TEACH
  });

  it('should enforce SELF_CHECK -> CHECK transition', () => {
    const transitions = TUTOR_LOOP_V3_TRANSITIONS.SELF_CHECK;

    expect(transitions).toContain('CHECK');
    expect(transitions.length).toBe(1); // Only CHECK allowed after SELF_CHECK
  });

  it('should not allow skipping CHECK after TEACH', () => {
    // TEACH should NOT be able to go directly to PRACTICE
    const transitions = TUTOR_LOOP_V3_TRANSITIONS.TEACH;

    expect(transitions).not.toContain('PRACTICE');
    expect(transitions).not.toContain('REVIEW');
    expect(transitions).not.toContain('NEXT_STEP');
  });
});

// ============================================
// TEST 4: nextState Application
// ============================================

describe('4. nextState Application (Enforced Transitions)', () => {
  it('should define valid transitions for all states', () => {
    const allStates: TutorLoopStateV3[] = [
      'WARMUP',
      'GOAL_ALIGN',
      'TEACH',
      'SELF_CHECK',
      'CHECK',
      'ADAPT',
      'PRACTICE',
      'REVIEW',
      'NEXT_STEP',
    ];

    for (const state of allStates) {
      const transitions = TUTOR_LOOP_V3_TRANSITIONS[state];
      expect(transitions).toBeDefined();
      expect(Array.isArray(transitions)).toBe(true);
      expect(transitions.length).toBeGreaterThan(0);
    }
  });

  it('should enforce WARMUP -> GOAL_ALIGN only', () => {
    const transitions = TUTOR_LOOP_V3_TRANSITIONS.WARMUP;

    expect(transitions).toEqual(['GOAL_ALIGN']);
    expect(transitions).not.toContain('TEACH');
    expect(transitions).not.toContain('PRACTICE');
  });

  it('should enforce GOAL_ALIGN -> TEACH only', () => {
    const transitions = TUTOR_LOOP_V3_TRANSITIONS.GOAL_ALIGN;

    expect(transitions).toEqual(['TEACH']);
  });

  it('should allow CHECK -> ADAPT or PRACTICE', () => {
    const transitions = TUTOR_LOOP_V3_TRANSITIONS.CHECK;

    expect(transitions).toContain('ADAPT');
    expect(transitions).toContain('PRACTICE');
    expect(transitions.length).toBe(2);
  });

  it('should enforce ADAPT -> CHECK (loop back for retry)', () => {
    const transitions = TUTOR_LOOP_V3_TRANSITIONS.ADAPT;

    expect(transitions).toContain('CHECK');
  });

  it('should enforce PRACTICE -> REVIEW', () => {
    const transitions = TUTOR_LOOP_V3_TRANSITIONS.PRACTICE;

    expect(transitions).toEqual(['REVIEW']);
  });

  it('should enforce REVIEW -> NEXT_STEP', () => {
    const transitions = TUTOR_LOOP_V3_TRANSITIONS.REVIEW;

    expect(transitions).toEqual(['NEXT_STEP']);
  });

  it('should allow NEXT_STEP -> WARMUP or GOAL_ALIGN (new cycle)', () => {
    const transitions = TUTOR_LOOP_V3_TRANSITIONS.NEXT_STEP;

    expect(transitions).toContain('WARMUP');
    expect(transitions).toContain('GOAL_ALIGN');
  });

  it('should form a complete learning cycle', () => {
    // Verify we can trace a path through the entire loop
    const path: TutorLoopStateV3[] = ['WARMUP'];
    let current: TutorLoopStateV3 = 'WARMUP';

    // Follow path, preferring PRACTICE over ADAPT when at CHECK
    while (true) {
      const nextOptions: TutorLoopStateV3[] = TUTOR_LOOP_V3_TRANSITIONS[current];
      // At CHECK, prefer PRACTICE (success path) over ADAPT (retry path)
      const next: TutorLoopStateV3 = current === 'CHECK' && nextOptions.includes('PRACTICE')
        ? 'PRACTICE'
        : nextOptions[0];

      if (path.includes(next)) {
        // We've completed a cycle
        break;
      }

      path.push(next);
      current = next;

      // Safety limit
      if (path.length > 15) {
        throw new Error('Infinite loop detected in state machine');
      }
    }

    // Should have visited key states
    expect(path).toContain('TEACH');
    expect(path).toContain('CHECK');
    expect(path).toContain('PRACTICE');
    expect(path).toContain('REVIEW');
  });
});

// ============================================
// TEST 5: QA Doesn't Skip Long Responses
// ============================================

describe('5. QA Validation for Long Responses', () => {
  it('should validate responses over 100 chars', () => {
    const ctx = createMockTeachingContext();

    // Long response that should still be validated
    const longResponse = `
Привет! Сегодня мы поработаем над артиклями. Это важная тема!

Артикли в английском языке бывают двух видов: определённый "the" и неопределённый "a/an".

Используй "a" перед согласными звуками.
Используй "an" перед гласными звуками.

Примеры:
- "a book" (книга)
- "an apple" (яблоко)

Понятно?

\`\`\`json
{
  "currentState": "TEACH",
  "nextState": "SELF_CHECK",
  "task": null
}
\`\`\`
    `;

    expect(longResponse.length).toBeGreaterThan(100);

    // Validation should still run and check for examples, etc.
    const validation = validateTutorResponse(longResponse, 'TEACH', ctx);

    // This response has examples, should pass that check
    const hasExamplesIssue = validation.issues.some(i => i.includes('Нет примеров'));
    expect(hasExamplesIssue).toBe(false);
  });

  it('should detect missing examples in TEACH response when no example markers present', () => {
    const ctx = createMockTeachingContext();

    // Response WITHOUT any example markers at all (no quotes anywhere, no "например", no "example")
    // Note: validateTutorResponse checks entire response including JSON
    // So we test without JSON block to verify example detection
    const responseNoExamplesNoJSON =
      'Привет! Сегодня мы поработаем над артиклями. Это важная тема для изучения английского языка.\n\n' +
      'Артикли помогают понять, о каком конкретном предмете идёт речь или о предмете вообще.\n' +
      'Они бывают разных видов и используются по определённым правилам.\n' +
      'Понимание артиклей поможет тебе говорить более естественно.';

    const validation = validateTutorResponse(responseNoExamplesNoJSON, 'TEACH', ctx);

    // Should detect missing examples
    expect(validation.issues).toContain('Нет примеров в TEACH/ADAPT');
    // Also missing JSON
    expect(validation.issues).toContain('Отсутствует JSON блок в конце ответа');
  });

  it('should validate long responses and not skip them', () => {
    const ctx = createMockTeachingContext();

    // Long response (>100 chars) - should still be fully validated
    const longResponse = `
Привет! Сегодня мы поработаем над артиклями. Это важная тема!

Артикли в английском языке бывают двух видов: определённый "the" и неопределённый "a/an".

Используй "a" перед согласными звуками.
Используй "an" перед гласными звуками.

Понятно?

\`\`\`json
{
  "currentState": "TEACH",
  "nextState": "SELF_CHECK",
  "task": null
}
\`\`\`
    `;

    expect(longResponse.length).toBeGreaterThan(100);

    // Validation should run (not skip) even for long responses
    const validation = validateTutorResponse(longResponse, 'TEACH', ctx);

    // The response has examples (quoted text), so should not have that issue
    const hasExamplesIssue = validation.issues.some(i => i.includes('Нет примеров'));
    expect(hasExamplesIssue).toBe(false);

    // Has JSON, so should not have that issue
    const hasJSONIssue = validation.issues.some(i => i.includes('JSON'));
    expect(hasJSONIssue).toBe(false);
  });

  it('should detect missing JSON block regardless of length', () => {
    const ctx = createMockTeachingContext();

    const responseNoJSON = `
Привет! Сегодня разберём артикли. Это важная тема!

Артикли бывают определённые и неопределённые.

Например:
- "a cat" - какой-то кот
- "the cat" - тот самый кот

Понятно?
    `;

    const validation = validateTutorResponse(responseNoJSON, 'TEACH', ctx);

    expect(validation.issues).toContain('Отсутствует JSON блок в конце ответа');
  });

  it('should enforce sentence limit based on CEFR level', () => {
    // For A1, max should be 5 sentences
    const maxA1 = DEFAULT_GUARDRAILS.maxResponseSentences('A1');
    expect(maxA1).toBe(5);

    // For B2, max should be higher
    const maxB2 = DEFAULT_GUARDRAILS.maxResponseSentences('B2');
    expect(maxB2).toBe(10);

    // For C2, even higher
    const maxC2 = DEFAULT_GUARDRAILS.maxResponseSentences('C2');
    expect(maxC2).toBe(15);
  });

  it('should detect too-long response for A1 level', () => {
    const ctx = createMockTeachingContext({ cefrLevel: 'A1' });

    // Response with more than 5 sentences (A1 limit)
    const tooLongResponse = `
Первое предложение. Второе предложение. Третье предложение.
Четвёртое предложение. Пятое предложение. Шестое предложение.
Седьмое предложение. Восьмое предложение. Девятое предложение.
Десятое предложение.

\`\`\`json
{
  "currentState": "TEACH",
  "nextState": "SELF_CHECK"
}
\`\`\`
    `;

    const validation = validateTutorResponse(tooLongResponse, 'TEACH', ctx);

    const hasTooLongIssue = validation.issues.some(i => i.includes('Слишком длинный ответ'));
    expect(hasTooLongIssue).toBe(true);
  });

  it('should not flag markdown as issue for code blocks in JSON', () => {
    const ctx = createMockTeachingContext();

    const responseWithJSON = `
Вот пример артиклей.

\`\`\`json
{
  "currentState": "TEACH",
  "nextState": "SELF_CHECK"
}
\`\`\`
    `;

    const validation = validateTutorResponse(responseWithJSON, 'TEACH', ctx);

    // json code blocks are OK, but ** or ## are not
    const hasMarkdownIssue = validation.issues.some(i => i.includes('Markdown'));
    expect(hasMarkdownIssue).toBe(false);
  });

  it('should detect markdown formatting in response text', () => {
    const ctx = createMockTeachingContext();

    const responseWithMarkdown = `
Вот **важные** правила артиклей:

## Неопределённый артикль
Используется для первого упоминания.

\`\`\`json
{
  "currentState": "TEACH",
  "nextState": "SELF_CHECK"
}
\`\`\`
    `;

    const validation = validateTutorResponse(responseWithMarkdown, 'TEACH', ctx);

    expect(validation.issues).toContain('Markdown разметка в ответе');
  });
});

// ============================================
// ADDITIONAL INTEGRATION TESTS
// ============================================

describe('Guardrails Configuration', () => {
  it('should have enforced TutorLoop enabled by default', () => {
    expect(DEFAULT_GUARDRAILS.enforcedTutorLoop).toBe(true);
  });

  it('should limit tasks before explanation to 1', () => {
    expect(DEFAULT_GUARDRAILS.maxTasksBeforeExplanation).toBe(1);
  });

  it('should require CHECK after TEACH', () => {
    expect(DEFAULT_GUARDRAILS.requiredCheckAfterTeach).toBe(true);
  });

  it('should limit new concepts per session', () => {
    expect(DEFAULT_GUARDRAILS.maxNewConceptsPerSession).toBe(3);
  });

  it('should allow IELTS format only for B1+', () => {
    expect(DEFAULT_GUARDRAILS.ieltsFormatAllowed('A1')).toBe(false);
    expect(DEFAULT_GUARDRAILS.ieltsFormatAllowed('A2')).toBe(false);
    expect(DEFAULT_GUARDRAILS.ieltsFormatAllowed('B1')).toBe(true);
    expect(DEFAULT_GUARDRAILS.ieltsFormatAllowed('B2')).toBe(true);
    expect(DEFAULT_GUARDRAILS.ieltsFormatAllowed('C1')).toBe(true);
    expect(DEFAULT_GUARDRAILS.ieltsFormatAllowed('C2')).toBe(true);
  });
});

describe('System Prompt Generation', () => {
  it('should include TutorLoop instructions in system prompt', () => {
    const ctx = createMockTeachingContext();
    const prompt = buildTutorSystemPromptV3(ctx);

    expect(prompt).toContain('TUTOR LOOP');
    expect(prompt).toContain('WARMUP');
    expect(prompt).toContain('GOAL_ALIGN');
    expect(prompt).toContain('TEACH');
    expect(prompt).toContain('CHECK');
  });

  it('should include language policy in system prompt', () => {
    const ctx = createMockTeachingContext();
    const prompt = buildTutorSystemPromptV3(ctx);

    expect(prompt).toContain('ЯЗЫКОВАЯ ПОЛИТИКА');
    expect(prompt).toContain('русском');
    expect(prompt).toContain('английском');
  });

  it('should include rules/prohibitions in system prompt', () => {
    const ctx = createMockTeachingContext();
    const prompt = buildTutorSystemPromptV3(ctx);

    expect(prompt).toContain('ЗАПРЕЩЕНО');
    expect(prompt).toContain('ПРАВИЛА');
    expect(prompt).toContain('НИКОГДА не давай задания БЕЗ объяснения');
  });

  it('should include JSON response format in system prompt', () => {
    const ctx = createMockTeachingContext();
    const prompt = buildTutorSystemPromptV3(ctx);

    expect(prompt).toContain('JSON RESPONSE FORMAT');
    expect(prompt).toContain('currentState');
    expect(prompt).toContain('nextState');
    expect(prompt).toContain('memoryRecap');
  });

  it('should include self-check instructions in system prompt', () => {
    const ctx = createMockTeachingContext();
    const prompt = buildTutorSystemPromptV3(ctx);

    expect(prompt).toContain('SELF-CHECK');
    expect(prompt).toContain('НЕ ПОКАЗЫВАТЬ ПОЛЬЗОВАТЕЛЮ');
  });

  it('should adapt prompt for current state', () => {
    const ctx = createMockTeachingContext({
      conversationState: createMockConversationState('TEACH'),
    });
    const prompt = buildTutorSystemPromptV3(ctx);

    // Should include TEACH-specific instructions
    expect(prompt).toContain('СОСТОЯНИЕ: TEACH');
    expect(prompt).toContain('MICRO-HOOK');
    expect(prompt).toContain('объяснение');
    expect(prompt).toContain('примера');
  });
});
