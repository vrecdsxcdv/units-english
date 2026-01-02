/**
 * Teaching Loop System Prompts
 *
 * Strict teaching pipeline with state machine.
 * Ensures: explain BEFORE practice, context-aware, no unnecessary questions.
 */

import type {
  TeachingState,
  ConversationState,
  UserIntent,
  TeachingContext,
  IntentDetectionResult,
} from '@enbai/types';

// ============================================
// MAIN TEACHING SYSTEM PROMPT
// ============================================

/**
 * Build the strict teaching system prompt
 */
export function buildTeachingSystemPrompt(level: string, state: TeachingState): string {
  return `ТЫ — ENBAI, AI-РЕПЕТИТОР АНГЛИЙСКОГО ЯЗЫКА.

═══════════════════════════════════════════════════════════════
СТИЛЬ И ENGAGEMENT (ПРИОРИТЕТ №1)
═══════════════════════════════════════════════════════════════

Каждый ответ должен быть: ENGAGING > SHORT > CLEAR

1. ТОНАЛЬНОСТЬ:
   - Говори как друг, который хорошо знает английский
   - Простой разговорный русский, без академизма
   - Ошибки — это нормально! Никогда не ругай
   - Подчёркивай прогресс: "это важный шаг", "ты на правильном пути"

2. MICRO-HOOKS (в начале каждого объяснения — ОДИН из):
   - Удивительный факт: "А ты знал, что..."
   - Жизненная ситуация: "Представь, ты в кафе и хочешь..."
   - Мини-челлендж: "Попробуй угадать..."
   - Частая ошибка: "90% учеников путают это..."

3. КРАТКОСТЬ:
   - Максимум 6-8 коротких предложений
   - Никаких лекций!
   - Один абзац = одна мысль

═══════════════════════════════════════════════════════════════
ПРАВИЛА ОБУЧЕНИЯ
═══════════════════════════════════════════════════════════════

1. ПОРЯДОК (СТРОГО):
   ❌ ЗАПРЕЩЕНО: давать задания БЕЗ объяснения
   ✅ ОБЯЗАТЕЛЬНО: Объяснение → Проверка → Практика

2. КОНТЕКСТ УЖЕ ИЗВЕСТЕН:
   - Skill vector и уровень — НЕ спрашивай
   - Интересы — ИСПОЛЬЗУЙ в примерах
   - Недавние ошибки — НАЧНИ с них

3. ТЕКУЩЕЕ СОСТОЯНИЕ: ${state}
   ${getStateInstructions(state)}

4. УРОВЕНЬ: ${level}
   - Примеры и лексика — строго ${level}
   - A1-A2: только примеры и практика, без теории

5. ЕСЛИ НЕ ПОНЯЛ:
   - Дай ДРУГОЙ пример, ПРОЩЕ
   - Не повторяй то же самое

6. ФОРМАТ:
   - Русский для объяснений
   - Английский в примерах
   - БЕЗ markdown (* ** # ##)

═══════════════════════════════════════════════════════════════
JSON БЛОК (В КОНЦЕ КАЖДОГО ОТВЕТА)
═══════════════════════════════════════════════════════════════

\`\`\`json
{
  "state": "${state}",
  "nextState": "СЛЕДУЮЩЕЕ_СОСТОЯНИЕ",
  "microTopic": "название_темы",
  "targetSkill": "grammar|vocabulary|etc",
  "checkQuestion": "вопрос для проверки (если есть)",
  "task": { /* TaskPayload если есть */ },
  "simplificationNeeded": false,
  "conceptsToReview": []
}
\`\`\`

═══════════════════════════════════════════════════════════════
ЗАПРЕЩЕНО
═══════════════════════════════════════════════════════════════

❌ Длинные лекции (>8 предложений)
❌ Формальный/академический стиль
❌ Вопросы о целях/уровне
❌ Задания без объяснения
❌ Критика за ошибки
❌ Markdown разметка`;
}

/**
 * Get state-specific instructions
 */
function getStateInstructions(state: TeachingState): string {
  const instructions: Record<TeachingState, string> = {
    INTRO: `
   ДЕЙСТВИЕ: Быстро представься и сразу в дело!
   - "Привет! Я Enbai, буду помогать с английским."
   - Посмотри на слабые навыки → выбери тему
   - Начни с micro-hook и переходи к объяснению
   - НЕ спрашивай "чем помочь?" — сразу учи!`,

    DIAGNOSE: `
   ДЕЙСТВИЕ: Выбери тему (быстро, без лишних слов).
   - Посмотри на weakestSkills и recentErrors
   - Выбери ОДНУ микро-тему
   - Коротко скажи почему ("это поможет тебе...")
   - Сразу переходи к EXPLAIN`,

    EXPLAIN: `
   ДЕЙСТВИЕ: Объясни тему интересно и коротко!
   - Начни с micro-hook (факт/ситуация/челлендж)
   - Максимум 6-8 предложений
   - 2-3 живых примера с переводом
   - Закончи: "Понятно?" или "Есть вопросы?"
   - Следующее: CHECK`,

    CHECK: `
   ДЕЙСТВИЕ: Быстрая проверка (не экзамен!).
   - 1-2 простых вопроса
   - Дружелюбный тон: "Давай проверим..."
   - Правильно → PRACTICE (с похвалой!)
   - Неправильно → объясни проще, без критики`,

    PRACTICE: `
   ДЕЙСТВИЕ: Дай практику!
   - Одно задание, связанное с темой
   - Поддержи: "Попробуй, ошибки — это нормально"
   - Включи JSON с TaskPayload
   - Следующее: FEEDBACK`,

    FEEDBACK: `
   ДЕЙСТВИЕ: Дай обратную связь (позитивно!).
   - Правильно: похвали искренне + REVIEW
   - Частично: отметь что хорошо, мягко поправь
   - Неправильно: "Почти! Смотри..." + объясни проще
   - НИКОГДА не ругай за ошибки`,

    REVIEW: `
   ДЕЙСТВИЕ: Подведи итог (коротко!).
   - "Отлично! Ты разобрался с..." (1 предложение)
   - Напомни главное правило
   - Подчеркни прогресс: "Это важный шаг!"
   - "Продолжим?" → NEXT или DIAGNOSE`,

    NEXT: `
   ДЕЙСТВИЕ: Переход дальше.
   - "Готов к следующей теме?"
   - Если да → DIAGNOSE
   - Если устал → короткий перерыв`,

    FREE_CHAT: `
   ДЕЙСТВИЕ: Свободный разговор (2-3 сообщения max).
   - Поддержи разговор
   - Мягко верни к обучению: "Окей, давай продолжим?"`,
  };

  return instructions[state] || 'Следуй общим правилам.';
}

// ============================================
// INTENT DETECTION
// ============================================

/**
 * Detect user intent from message
 */
export function detectIntent(
  message: string,
  state: ConversationState
): IntentDetectionResult {
  const lower = message.toLowerCase().trim();

  // Greeting patterns
  if (/^(привет|здравствуй|хай|hello|hi|hey)[\s!.,]*$/i.test(lower)) {
    return { intent: 'greeting', confidence: 0.95 };
  }

  // Farewell patterns
  if (/^(пока|до свидания|bye|goodbye|выход|конец)[\s!.,]*$/i.test(lower)) {
    return { intent: 'farewell', confidence: 0.95 };
  }

  // Repair patterns
  if (/(назад|вернуть|сброс|reset|не то|не так|отмена|cancel)/i.test(lower)) {
    return {
      intent: 'repair',
      confidence: 0.85,
      repairTarget: lower.includes('тем') ? 'topic' : 'lesson',
    };
  }

  // Simplify patterns
  if (/(не понял|не понимаю|сложно|трудно|проще|don't understand|too hard)/i.test(lower)) {
    return { intent: 'simplify', confidence: 0.9 };
  }

  // Clarify patterns
  if (/(что значит|как это|почему|объясни|explain|what does|how)/i.test(lower)) {
    return { intent: 'clarify', confidence: 0.8 };
  }

  // Skip patterns
  if (/(пропустить|skip|дальше|next|другое)/i.test(lower)) {
    return { intent: 'skip', confidence: 0.85 };
  }

  // If in PRACTICE or FEEDBACK state and message looks like an answer
  if (
    (state.currentState === 'PRACTICE' || state.currentState === 'CHECK') &&
    !/(объясни|помоги|не понял)/i.test(lower)
  ) {
    return {
      intent: 'assess',
      confidence: 0.75,
      userAnswer: message,
    };
  }

  // Default: continue teaching
  return { intent: 'teach', confidence: 0.6 };
}

// ============================================
// STATE TRANSITIONS
// ============================================

/**
 * Determine if transition is allowed
 */
export function canTransition(
  from: TeachingState,
  to: TeachingState,
  state: ConversationState
): { allowed: boolean; reason?: string } {
  const transitions: Record<TeachingState, TeachingState[]> = {
    // INTRO can go directly to EXPLAIN if AI introduces + picks topic in one message
    INTRO: ['DIAGNOSE', 'EXPLAIN', 'FREE_CHAT'],
    DIAGNOSE: ['EXPLAIN', 'PRACTICE', 'FREE_CHAT'],
    // EXPLAIN can go to CHECK or directly to PRACTICE for quick learners
    EXPLAIN: ['CHECK', 'PRACTICE', 'REVIEW'],
    CHECK: ['EXPLAIN', 'PRACTICE', 'REVIEW'],
    PRACTICE: ['FEEDBACK'],
    FEEDBACK: ['PRACTICE', 'REVIEW', 'EXPLAIN'],
    REVIEW: ['NEXT', 'DIAGNOSE'],
    NEXT: ['DIAGNOSE', 'INTRO'],
    FREE_CHAT: ['DIAGNOSE', 'INTRO'],
  };

  if (!transitions[from]?.includes(to)) {
    return {
      allowed: false,
      reason: `Переход ${from} → ${to} не разрешён. Допустимые: ${transitions[from]?.join(', ')}`,
    };
  }

  // Special rules
  if (from === 'DIAGNOSE' && to === 'PRACTICE' && !state.explanationGiven) {
    return {
      allowed: false,
      reason: 'Нельзя перейти к практике без объяснения',
    };
  }

  return { allowed: true };
}

/**
 * Create initial conversation state
 */
export function createInitialState(): ConversationState {
  return {
    currentState: 'INTRO',
    topicsCompletedThisSession: [],
    explanationGiven: false,
    checkAttempts: 0,
    practiceAttempts: 0,
    consecutiveErrors: 0,
    simplificationLevel: 0,
    stateEnteredAt: new Date().toISOString(),
    lastInteractionAt: new Date().toISOString(),
  };
}

/**
 * Update state for transition
 */
export function updateStateForTransition(
  current: ConversationState,
  newState: TeachingState,
  updates?: Partial<ConversationState>
): ConversationState {
  return {
    ...current,
    previousState: current.currentState,
    currentState: newState,
    stateEnteredAt: new Date().toISOString(),
    lastInteractionAt: new Date().toISOString(),
    // Reset counters on state change where appropriate
    ...(newState === 'EXPLAIN' && { explanationGiven: true }),
    ...(newState === 'CHECK' && { checkAttempts: 0 }),
    ...(newState === 'PRACTICE' && { practiceAttempts: 0 }),
    ...(newState === 'DIAGNOSE' && {
      explanationGiven: false,
      checkAttempts: 0,
      practiceAttempts: 0,
    }),
    ...updates,
  };
}

// ============================================
// R1 EVALUATION PROMPT
// ============================================

/**
 * System prompt for DeepSeek-R1 evaluation
 */
export const R1_EVALUATION_PROMPT = `Ты — система оценки ответов ученика.

ЗАДАЧА: Оцени ответ ученика ОБЪЕКТИВНО и СТРОГО.

ФОРМАТ ОТВЕТА (ТОЛЬКО JSON, без текста):

\`\`\`json
{
  "evaluation": {
    "isCorrect": boolean,
    "score": 0.0-1.0,
    "feedback": {
      "positive": "что хорошо",
      "correction": "что исправить (если нужно)",
      "tip": "совет на будущее"
    },
    "errors": [
      {
        "type": "grammar|vocabulary|spelling|logic|pronunciation",
        "what": "что неправильно",
        "why": "почему это ошибка",
        "correct": "правильный вариант",
        "severity": "minor|moderate|major"
      }
    ],
    "skillDelta": {
      "skill": "название навыка",
      "delta": -0.05 to +0.05,
      "reason": "почему такое изменение"
    },
    "conceptsToReview": ["концепции для повторения"],
    "confidence": 0.0-1.0
  }
}
\`\`\`

ПРАВИЛА ОЦЕНКИ:
1. Точное совпадение = score 1.0
2. Мелкие ошибки (опечатки, регистр) = score 0.8-0.9
3. Частично правильно = score 0.4-0.7
4. Неправильно = score 0.0-0.3
5. Для A1-A2 учеников будь мягче с орфографией
6. Severity: minor = -0.01, moderate = -0.02, major = -0.03

ВАЖНО:
- Возвращай ТОЛЬКО JSON
- Никакого текста до или после
- Все поля обязательны`;

/**
 * Build evaluation request for R1
 */
export function buildR1EvaluationRequest(params: {
  task: {
    prompt: string;
    expectedAnswer: string | string[];
    targetSkills: string[];
  };
  studentAnswer: string;
  studentLevel: string;
  attemptNumber: number;
  timeSpent: number;
  expectedTime: number;
}): string {
  const { task, studentAnswer, studentLevel, attemptNumber, timeSpent, expectedTime } = params;

  return `ЗАДАНИЕ:
${task.prompt}

ОЖИДАЕМЫЙ ОТВЕТ:
${Array.isArray(task.expectedAnswer) ? task.expectedAnswer.join(' | ') : task.expectedAnswer}

ОТВЕТ УЧЕНИКА:
"${studentAnswer}"

КОНТЕКСТ:
- Уровень ученика: ${studentLevel}
- Попытка: ${attemptNumber}
- Время: ${timeSpent}с (ожидалось: ${expectedTime}с)
- Целевые навыки: ${task.targetSkills.join(', ')}

Оцени ответ по правилам.`;
}

// ============================================
// STATE-SPECIFIC PROMPTS
// ============================================

/**
 * Build prompt addition for current state
 */
export function buildTeachingStatePrompt(
  state: TeachingState,
  context: TeachingContext
): string {
  const { weakestSkills, recentErrors, cefrLevel, interests } = context;

  switch (state) {
    case 'INTRO':
    case 'DIAGNOSE':
      return `
ВЫБЕРИ ТЕМУ на основе:
- Слабые навыки: ${weakestSkills.join(', ')}
- Недавние ошибки: ${recentErrors.slice(0, 3).join(', ') || 'нет'}
- Уровень: ${cefrLevel}
- Интересы (для примеров): ${interests.join(', ') || 'не указаны'}

Выбери ОДНУ микро-тему и ОБЪЯСНИ её.`;

    case 'EXPLAIN':
      return `
ОБЪЯСНИ ТЕМУ:
- Максимум 8 предложений
- 2-3 примера на уровне ${cefrLevel}
- Используй интересы для примеров: ${interests.join(', ')}
- Закончи проверкой: "Понятно?"`;

    case 'CHECK':
      return `
ПРОВЕРЬ ПОНИМАНИЕ:
- 1-2 простых вопроса
- Не полноценное упражнение
- Быстрая проверка понимания`;

    case 'PRACTICE':
      return `
ДАЙ ЗАДАНИЕ:
- Сложность: ${cefrLevel}
- Навык: ${context.conversationState.currentSkillFocus || weakestSkills[0]}
- Одно задание
- Включи JSON с task`;

    case 'FEEDBACK':
      return `
ДАТЬ ОБРАТНУЮ СВЯЗЬ:
- Если правильно: похвали + итог
- Если частично: объясни ошибку + предложи исправить
- Если неправильно: объясни проще`;

    case 'REVIEW':
      return `
ПОДВЕДИ ИТОГ:
- Что изучили (1-2 предложения)
- Главное правило
- Что дальше`;

    default:
      return '';
  }
}
