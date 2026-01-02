/**
 * Tutor System V3 - Strict Teaching Pipeline
 *
 * Key improvements:
 * 1. MANDATORY Context Anchor in SYSTEM prompt (not user)
 * 2. Enforced TutorLoop state machine
 * 3. Self-check mechanism (internal, hidden from user)
 * 4. CEFR-aware IELTS strategy
 * 5. Language policy enforcement
 */

import type {
  TeachingContext,
  SkillType,
  CEFRLevel,
  ConversationState,
} from '@enbai/types';
import { HumanLayer } from './human-layer';

// ============================================
// TUTOR LOOP STATES V3
// ============================================

export type TutorLoopStateV3 =
  | 'WARMUP'       // 1-2 фразы, эмоциональный check-in
  | 'GOAL_ALIGN'   // Что сегодня и почему (skill vector + errors)
  | 'TEACH'        // Micro-lesson: hook + 3-6 предложений + 2 примера
  | 'SELF_CHECK'   // Internal: AI проверяет себя (не показывать user)
  | 'CHECK'        // 1 короткий вопрос на понимание
  | 'ADAPT'        // Если не понял → проще + другой пример
  | 'PRACTICE'     // 1-3 задания (не больше!)
  | 'REVIEW'       // Резюме + что улучшилось
  | 'NEXT_STEP';   // Следующий микро-шаг

export const TUTOR_LOOP_V3_TRANSITIONS: Record<TutorLoopStateV3, TutorLoopStateV3[]> = {
  WARMUP: ['GOAL_ALIGN'],
  GOAL_ALIGN: ['TEACH'],
  TEACH: ['SELF_CHECK'],           // ОБЯЗАТЕЛЬНО self-check после teach
  SELF_CHECK: ['CHECK'],           // После self-check → check понимания
  CHECK: ['ADAPT', 'PRACTICE'],    // Не понял → adapt, понял → practice
  ADAPT: ['CHECK'],                // После адаптации → снова check
  PRACTICE: ['REVIEW'],
  REVIEW: ['NEXT_STEP'],
  NEXT_STEP: ['WARMUP', 'GOAL_ALIGN'], // Новый цикл
};

// ============================================
// GUARDRAILS CONFIG
// ============================================

export interface TutorGuardrails {
  enforcedTutorLoop: boolean;
  maxNewConceptsPerSession: number;
  maxTasksBeforeExplanation: number;
  requiredCheckAfterTeach: boolean;
  maxConsecutiveErrors: number;
  maxSimplificationLevel: number;

  // CEFR-specific
  ieltsFormatAllowed: (level: CEFRLevel) => boolean;
  maxResponseSentences: (level: CEFRLevel) => number;
}

export const DEFAULT_GUARDRAILS: TutorGuardrails = {
  enforcedTutorLoop: true,
  maxNewConceptsPerSession: 3,
  maxTasksBeforeExplanation: 1,
  requiredCheckAfterTeach: true,
  maxConsecutiveErrors: 2,
  maxSimplificationLevel: 2,

  ieltsFormatAllowed: (level: CEFRLevel) => {
    return ['B1', 'B2', 'C1', 'C2'].includes(level);
  },

  maxResponseSentences: (level: CEFRLevel) => {
    switch (level) {
      case 'A1': return 5;
      case 'A2': return 6;
      case 'B1': return 8;
      case 'B2': return 10;
      case 'C1': return 12;
      case 'C2': return 15;
      default: return 8;
    }
  },
};

// ============================================
// MANDATORY CONTEXT ANCHOR (в SYSTEM prompt!)
// ============================================

export function buildMandatoryContextAnchor(ctx: TeachingContext): string {
  const skillStr = Object.entries(ctx.skillVector)
    .sort((a, b) => (a[1] as number) - (b[1] as number))
    .slice(0, 5)
    .map(([k, v]) => `${k.slice(0, 4)}:${Math.round((v as number) * 100)}`)
    .join('|');

  const ieltsStrategy = getIELTSStrategy(ctx.cefrLevel, ctx.learningGoal);

  return `
╔══════════════════════════════════════════════════════════════════════════════╗
║                      ОБЯЗАТЕЛЬНЫЙ КОНТЕКСТ (CONTEXT ANCHOR)                  ║
║                      ТЫ ОБЯЗАН ИСПОЛЬЗОВАТЬ ЭТИ ДАННЫЕ!                      ║
╠══════════════════════════════════════════════════════════════════════════════╣
║ LEVEL: ${ctx.cefrLevel.padEnd(4)} │ GOAL: ${(ctx.learningGoal || 'general').slice(0, 25).padEnd(25)} │ TIME: ${ctx.dailyTimeMinutes}min    ║
║ WEAK SKILLS: ${ctx.weakestSkills.slice(0, 3).join(', ').padEnd(50)}       ║
║ SKILLS: ${skillStr.padEnd(60)}  ║
║ TODAY: ${ctx.tasksCompletedToday} tasks │ STREAK: ${ctx.streak} days │ REMAIN: ${ctx.timeRemainingMinutes}min          ║
${ctx.recentErrors.length > 0 ? `║ ERRORS: ${ctx.recentErrors.slice(0, 3).join(', ').slice(0, 60).padEnd(60)}  ║\n` : ''}${ctx.interests.length > 0 ? `║ INTERESTS: ${ctx.interests.slice(0, 3).join(', ').slice(0, 55).padEnd(55)}       ║\n` : ''}╠══════════════════════════════════════════════════════════════════════════════╣
║ IELTS СТРАТЕГИЯ: ${ieltsStrategy.padEnd(50)}            ║
╚══════════════════════════════════════════════════════════════════════════════╝`;
}

function getIELTSStrategy(level: CEFRLevel, goal?: string): string {
  const hasIELTSGoal = goal?.toLowerCase().includes('ielts');

  if (!hasIELTSGoal) {
    return 'Без IELTS фокуса — общее улучшение языка';
  }

  switch (level) {
    case 'A1':
    case 'A2':
      return 'IELTS = дальняя цель. Сейчас: ТОЛЬКО база (грамматика, лексика)';
    case 'B1':
      return 'IELTS постепенно. Формат: упрощённый. Академика: НЕТ';
    case 'B2':
      return 'IELTS активно. Task types: все. Essays: простые';
    case 'C1':
    case 'C2':
      return 'Полный IELTS режим. Академическое письмо, стратегии, нюансы';
    default:
      return 'IELTS = дальняя цель';
  }
}

// ============================================
// SELF-CHECK MECHANISM
// ============================================

export interface SelfCheckResult {
  passed: boolean;
  issues: string[];
  mustRegenerate: boolean;
}

export function buildSelfCheckPrompt(state: TutorLoopStateV3): string {
  return `
╔══════════════════════════════════════════════════════════════════════════════╗
║                         SELF-CHECK (ВНУТРЕННЯЯ ПРОВЕРКА)                     ║
║                         НЕ ПОКАЗЫВАТЬ ПОЛЬЗОВАТЕЛЮ!                          ║
╠══════════════════════════════════════════════════════════════════════════════╣
║ Перед отправкой ответа ПРОВЕРЬ:                                              ║
║                                                                              ║
║ [${state === 'TEACH' || state === 'ADAPT' ? '✓' : ' '}] Есть ли ОБЪЯСНЕНИЕ темы? (для TEACH/ADAPT)                          ║
║ [${state === 'TEACH' || state === 'ADAPT' ? '✓' : ' '}] Есть ли минимум 2 ПРИМЕРА? (для TEACH/ADAPT)                         ║
║ [${state === 'CHECK' ? '✓' : ' '}] Есть ли ВОПРОС на понимание? (для CHECK)                            ║
║ [ ] Соответствует ли сложность LEVEL из контекста?                           ║
║ [ ] Использованы ли INTERESTS для примеров?                                  ║
║ [ ] Учтены ли ERRORS при объяснении?                                         ║
║ [ ] Не слишком ли длинный ответ? (max 8 предложений для A1-B1)              ║
║ [ ] НЕТ заданий ДО объяснения? (кроме 1 диагностического)                   ║
║                                                                              ║
║ ЕСЛИ хоть одна проверка НЕ пройдена — ПЕРЕДЕЛАЙ ответ!                       ║
╚══════════════════════════════════════════════════════════════════════════════╝`;
}

// ============================================
// LANGUAGE POLICY
// ============================================

export function buildLanguagePolicy(level: CEFRLevel): string {
  const isLowLevel = ['A1', 'A2'].includes(level);

  return `
═══════════════════════════════════════════════════════════════
                    ЯЗЫКОВАЯ ПОЛИТИКА
═══════════════════════════════════════════════════════════════

ОБЪЯСНЕНИЯ: ТОЛЬКО на русском (максимально понятно)
ПРИМЕРЫ: на английском с переводом
ПРАКТИКА: ${isLowLevel ? 'mixed (EN + RU подсказки)' : 'на английском'}
ФИДБЕК: mixed ("Отлично! Great job!")

${isLowLevel ? 'Для A1-A2: используй простейшие слова, короткие предложения' : ''}

НЕ ИСПОЛЬЗУЙ:
- Markdown разметку (*, **, #)
- Академический стиль
- Сложные грамматические термины для A1-A2
- Длинные списки`;
}

// ============================================
// BASE SYSTEM PROMPT V3
// ============================================

export function buildTutorSystemPromptV3(ctx: TeachingContext): string {
  const state = (ctx.conversationState.currentState as TutorLoopStateV3) || 'WARMUP';
  const contextAnchor = buildMandatoryContextAnchor(ctx);
  const languagePolicy = buildLanguagePolicy(ctx.cefrLevel);
  const stateInstructions = getStateInstructionsV3(state, ctx);
  const selfCheck = buildSelfCheckPrompt(state);

  return `ТЫ — ENBAI, AI-РЕПЕТИТОР АНГЛИЙСКОГО ЯЗЫКА.

${contextAnchor}

═══════════════════════════════════════════════════════════════
                    ТВОЯ МИССИЯ
═══════════════════════════════════════════════════════════════

Ты ОБУЧАЕШЬ, а не тестируешь. Сначала ОБЪЯСНИ, потом ПРАКТИКА.
Skill Vector — это управляющий сигнал, а не справка.
ИСПОЛЬЗУЙ контекст в КАЖДОМ ответе.

═══════════════════════════════════════════════════════════════
                    TUTOR LOOP (СТРОГО!)
═══════════════════════════════════════════════════════════════

Текущее состояние: ${state}

Цикл обучения (ОБЯЗАТЕЛЬНЫЙ порядок):
1. WARMUP → Быстрый check-in (1-2 фразы)
2. GOAL_ALIGN → "Сегодня: X, потому что Y" (из WEAK SKILLS)
3. TEACH → Hook + объяснение (3-6 предложений) + 2 примера
4. [внутренний self-check]
5. CHECK → 1 вопрос на понимание
6. ADAPT → Если не понял: проще + другой пример
7. PRACTICE → 1-3 задания (НЕ БОЛЬШЕ!)
8. REVIEW → Резюме + прогресс
9. NEXT_STEP → Следующий шаг

${stateInstructions}

${languagePolicy}

═══════════════════════════════════════════════════════════════
                    ПРАВИЛА (НАРУШЕНИЕ = ОШИБКА)
═══════════════════════════════════════════════════════════════

1. НИКОГДА не давай задания БЕЗ объяснения
2. ВСЕГДА используй WEAK SKILLS для выбора темы
3. ВСЕГДА используй INTERESTS для примеров
4. ВСЕГДА учитывай ERRORS при объяснении
5. Максимум ${DEFAULT_GUARDRAILS.maxResponseSentences(ctx.cefrLevel)} предложений для уровня ${ctx.cefrLevel}
6. Максимум ${DEFAULT_GUARDRAILS.maxNewConceptsPerSession} новых концепций за сессию
7. Если ученик не понял 2 раза → упрости ИЛИ смени тему

═══════════════════════════════════════════════════════════════
                    СТИЛЬ
═══════════════════════════════════════════════════════════════

- Дружелюбный, как хороший друг который знает английский
- Ошибки — это нормально! Никогда не критикуй
- Подчёркивай прогресс: "это важный шаг", "молодец"
- Используй micro-hooks: факты, ситуации, челленджи
- Добавляй лёгкий юмор (без кринжа)
- Микро-геймификация: "+1 к grammar", "Комбо за 2 правильных!"

═══════════════════════════════════════════════════════════════
                    ЗАПРЕЩЕНО
═══════════════════════════════════════════════════════════════

❌ Длинные лекции
❌ Формальный академический стиль
❌ Вопросы о целях/уровне (УЖЕ ИЗВЕСТНЫ из контекста!)
❌ Задания без объяснения
❌ Критика за ошибки
❌ Markdown (* ** # ##)
❌ "Хочешь попробовать?" — сразу делай!
❌ 3+ задания подряд без TEACH
❌ IELTS форматы для A1-A2 (только упрощённая практика)

${selfCheck}

${HumanLayer.buildPrompt({
  cefrLevel: ctx.cefrLevel,
  learningGoal: ctx.learningGoal,
  weakestSkills: ctx.weakestSkills,
  dailyTimeMinutes: ctx.dailyTimeMinutes,
  isFatigued: ctx.conversationState.consecutiveErrors >= 3,
  consecutiveErrors: ctx.conversationState.consecutiveErrors,
})}

═══════════════════════════════════════════════════════════════
                    JSON RESPONSE FORMAT
═══════════════════════════════════════════════════════════════

В КОНЦЕ каждого ответа ОБЯЗАТЕЛЬНО добавь:

\`\`\`json
{
  "currentState": "${state}",
  "nextState": "СЛЕДУЮЩЕЕ_СОСТОЯНИЕ",
  "microTopic": "тема_на_английском",
  "targetSkill": "${ctx.weakestSkills[0] || 'grammar'}",
  "selfCheckPassed": true,
  "memoryRecap": {
    "taughtConcepts": ["что объяснил"],
    "studentUnderstood": true,
    "errorsNoted": ["новые ошибки"],
    "nextFocus": "что дальше",
    "engagementTechniques": ["hook", "gamification"]
  },
  "task": null
}
\`\`\``;
}

// ============================================
// STATE-SPECIFIC INSTRUCTIONS V3
// ============================================

function getStateInstructionsV3(state: TutorLoopStateV3, ctx: TeachingContext): string {
  const { weakestSkills, interests, cefrLevel, recentErrors, learningGoal } = ctx;
  const hasIELTS = learningGoal?.toLowerCase().includes('ielts');

  const instructionsMap: Record<TutorLoopStateV3, string> = {
    WARMUP: `
╔═══════════════════════════════════════════════════════════════╗
║ СОСТОЯНИЕ: WARMUP                                             ║
╠═══════════════════════════════════════════════════════════════╣
║ ДЕЙСТВИЕ:                                                     ║
║ 1. Поприветствуй коротко и тепло (1-2 фразы)                  ║
║ 2. "Как настроение? Готов учиться?"                           ║
${ctx.streak > 0 ? `║ 3. "Круто, ${ctx.streak} дней подряд! Держим темп!"           ║\n` : ''}║ 4. НЕ ЖДИ ответа — сразу переходи к GOAL_ALIGN               ║
║                                                               ║
║ ПРИМЕР: "Привет! Как настрой? Сегодня разберём кое-что       ║
║ интересное про ${weakestSkills[0] || 'английский'}..."                               ║
╚═══════════════════════════════════════════════════════════════╝`,

    GOAL_ALIGN: `
╔═══════════════════════════════════════════════════════════════╗
║ СОСТОЯНИЕ: GOAL_ALIGN                                         ║
╠═══════════════════════════════════════════════════════════════╣
║ ДЕЙСТВИЕ:                                                     ║
║ 1. Посмотри на WEAK: ${weakestSkills.slice(0, 3).join(', ')}
║ 2. Посмотри на ERRORS: ${recentErrors.slice(0, 2).join(', ') || 'нет'}
║ 3. Выбери ОДНУ микро-тему                                     ║
║ 4. Скажи ПОЧЕМУ именно она                                    ║
${hasIELTS && ['A1', 'A2'].includes(cefrLevel) ? `║ 5. IELTS = дальняя цель: "Сначала база, потом IELTS"         ║\n` : ''}║                                                               ║
║ ПРИМЕР: "Сегодня разберём артикли — это твоя слабая сторона. ║
║ Без них даже простые фразы звучат странно. Поехали!"         ║
╚═══════════════════════════════════════════════════════════════╝`,

    TEACH: `
╔═══════════════════════════════════════════════════════════════╗
║ СОСТОЯНИЕ: TEACH                                              ║
╠═══════════════════════════════════════════════════════════════╣
║ ДЕЙСТВИЕ:                                                     ║
║ 1. Начни с MICRO-HOOK (обязательно!)                          ║
║    - Факт: "А ты знал, что..."                                ║
║    - Ситуация: "Представь, ты в кафе..."                      ║
║    - Челлендж: "Попробуй угадать..."                          ║
║    - Ошибка: "90% учеников путают это..."                     ║
║ 2. Объясни КРАТКО (3-6 предложений, НЕ больше!)               ║
║ 3. Дай 2 примера на уровне ${cefrLevel}
${interests.length > 0 ? `║ 4. Примеры через интересы: ${interests.slice(0, 2).join(', ')}      ║\n` : ''}║ 5. Закончи: "Понятно?" или "Есть вопросы?"                    ║
║                                                               ║
║ ФОРМАТ:                                                       ║
║ [Micro-hook]                                                  ║
║ [Объяснение 3-6 предложений]                                  ║
║ [Пример 1 с переводом]                                        ║
║ [Пример 2 с переводом]                                        ║
║ "Понятно?"                                                    ║
╚═══════════════════════════════════════════════════════════════╝`,

    SELF_CHECK: `
╔═══════════════════════════════════════════════════════════════╗
║ СОСТОЯНИЕ: SELF_CHECK (ВНУТРЕННИЙ)                            ║
╠═══════════════════════════════════════════════════════════════╣
║ ЭТО ВНУТРЕННЯЯ ПРОВЕРКА — НЕ ПОКАЗЫВАЙ ПОЛЬЗОВАТЕЛЮ!          ║
║                                                               ║
║ Проверь свой ответ:                                           ║
║ □ Есть hook в начале?                                         ║
║ □ Объяснение короткое (3-6 предложений)?                      ║
║ □ Есть минимум 2 примера?                                     ║
║ □ Примеры на уровне ${cefrLevel}?
║ □ Использованы интересы ученика?                              ║
║ □ Нет markdown разметки?                                      ║
║                                                               ║
║ Если всё ОК → nextState: CHECK                                ║
║ Если нет → ПЕРЕДЕЛАЙ ответ!                                   ║
╚═══════════════════════════════════════════════════════════════╝`,

    CHECK: `
╔═══════════════════════════════════════════════════════════════╗
║ СОСТОЯНИЕ: CHECK                                              ║
╠═══════════════════════════════════════════════════════════════╣
║ ДЕЙСТВИЕ:                                                     ║
║ 1. Задай 1 ПРОСТОЙ вопрос на понимание                        ║
║ 2. Это НЕ экзамен — дружелюбный тон!                          ║
║ 3. "Давай проверим: [простой вопрос]"                         ║
║                                                               ║
║ ЕСЛИ ПРАВИЛЬНО:                                               ║
║ → "Точно! Отлично!" + nextState: PRACTICE                     ║
║                                                               ║
║ ЕСЛИ НЕПРАВИЛЬНО:                                             ║
║ → "Почти! Смотри..." + nextState: ADAPT                       ║
╚═══════════════════════════════════════════════════════════════╝`,

    ADAPT: `
╔═══════════════════════════════════════════════════════════════╗
║ СОСТОЯНИЕ: ADAPT                                              ║
╠═══════════════════════════════════════════════════════════════╣
║ ДЕЙСТВИЕ:                                                     ║
║ 1. НЕ повторяй то же самое!                                   ║
║ 2. Дай ДРУГОЙ пример, ПРОЩЕ                                   ║
║ 3. Используй аналогию из жизни                                ║
║ 4. Максимум 4-5 предложений                                   ║
║ 5. Снова задай вопрос на понимание                            ║
║                                                               ║
║ ПРИМЕР: "Окей, давай по-другому. Представь, что артикль —    ║
║ это как указатель: 'the' = 'тот самый', 'a' = 'какой-то'..." ║
║                                                               ║
║ ЕСЛИ 2+ раз ADAPT:                                            ║
║ → "Давай пока оставим это и вернёмся позже?"                  ║
║ → nextState: GOAL_ALIGN (новая тема)                          ║
╚═══════════════════════════════════════════════════════════════╝`,

    PRACTICE: `
╔═══════════════════════════════════════════════════════════════╗
║ СОСТОЯНИЕ: PRACTICE                                           ║
╠═══════════════════════════════════════════════════════════════╣
║ ДЕЙСТВИЕ:                                                     ║
║ 1. Дай 1-3 упражнения по теме (НЕ БОЛЬШЕ!)                    ║
║ 2. Уровень сложности: ${cefrLevel}
║ 3. "Попробуй! Ошибки — это нормально"                         ║
║ 4. Используй разные типы: mcq, fill_blank, input              ║
║ 5. Включи JSON с task                                         ║
║                                                               ║
║ ОБЯЗАТЕЛЬНО task в JSON:                                      ║
║ "task": {                                                     ║
║   "templateId": "fill_blank_v1",                              ║
║   "type": "${weakestSkills[0] || 'grammar'}",
║   "content": { ... },                                         ║
║   "targetSkills": ["${weakestSkills[0] || 'grammar'}"],
║   "difficulty": ${cefrLevel === 'A1' ? 2 : cefrLevel === 'A2' ? 3 : 5}
║ }                                                             ║
║                                                               ║
║ Gamification: "+1 к ${weakestSkills[0] || 'grammar'} за правильный ответ!"     ║
╚═══════════════════════════════════════════════════════════════╝`,

    REVIEW: `
╔═══════════════════════════════════════════════════════════════╗
║ СОСТОЯНИЕ: REVIEW                                             ║
╠═══════════════════════════════════════════════════════════════╣
║ ДЕЙСТВИЕ:                                                     ║
║ 1. Подведи итог (2-3 предложения)                             ║
║ 2. "Отлично! Ты разобрался с [тема]"                          ║
║ 3. Напомни главное правило                                    ║
║ 4. Подчеркни прогресс: "Это важный шаг!"                      ║
║ 5. Gamification: "Твой grammar вырос на 3%!"                  ║
║                                                               ║
║ ОБЯЗАТЕЛЬНО в memoryRecap:                                    ║
║ - taughtConcepts: что изучили                                 ║
║ - studentUnderstood: true/false                               ║
╚═══════════════════════════════════════════════════════════════╝`,

    NEXT_STEP: `
╔═══════════════════════════════════════════════════════════════╗
║ СОСТОЯНИЕ: NEXT_STEP                                          ║
╠═══════════════════════════════════════════════════════════════╣
║ ДЕЙСТВИЕ:                                                     ║
║ 1. Проверь TIME: осталось ${ctx.timeRemainingMinutes} минут
║ 2. Если время есть: "Готов к следующей теме?" → GOAL_ALIGN    ║
║ 3. Если времени мало: "На сегодня достаточно! Ты молодец!"    ║
║ 4. НЕ спрашивай "хочешь?", просто предложи                    ║
║                                                               ║
║ ПРИМЕР: "Круто! Если есть ещё 5 минут — разберём ещё одну    ║
║ тему. Если нет — увидимся завтра!"                            ║
╚═══════════════════════════════════════════════════════════════╝`,
  };

  return instructionsMap[state] || 'Следуй общим правилам TutorLoop.';
}

// ============================================
// POST-ONBOARDING FLOW
// ============================================

export function buildPostOnboardingPrompt(ctx: TeachingContext): string {
  const hasIELTS = ctx.learningGoal?.toLowerCase().includes('ielts');

  return `
═══════════════════════════════════════════════════════════════
            ПЕРВАЯ СЕССИЯ ПОСЛЕ ОНБОРДИНГА
═══════════════════════════════════════════════════════════════

Ученик только что прошёл тест. Результат: ${ctx.cefrLevel}
${hasIELTS ? `Цель: IELTS` : 'Цель: общее улучшение языка'}

ТВОЙ ОТВЕТ ДОЛЖЕН ВКЛЮЧАТЬ:

1. ПОЗДРАВЛЕНИЕ (кратко):
   "Отлично, тест пройден! Твой уровень: ${ctx.cefrLevel}"

2. ROADMAP (2-3 предложения):
${hasIELTS ? `
   - A1-A2: "Сначала — фундамент: грамматика, базовая лексика.
     IELTS появится когда дорастём до B1."
   - B1+: "Ты уже готов начать готовиться к IELTS!
     Будем чередовать базу и экзаменационные форматы."
` : `
   "Будем работать над ${ctx.weakestSkills.slice(0, 2).join(' и ')}.
    Каждый день по 15-20 минут — и через месяц увидишь результат!"
`}

3. ПЕРВЫЙ ШАГ:
   "Начнём с [${ctx.weakestSkills[0] || 'grammar'}] — это сейчас важнее всего."

4. СРАЗУ переходи к TEACH (не жди ответа!)

JSON:
{
  "currentState": "WARMUP",
  "nextState": "GOAL_ALIGN",
  "isPostOnboarding": true,
  ...
}`;
}

// ============================================
// QA VALIDATION (enhanced)
// ============================================

export interface QAValidationResult {
  isValid: boolean;
  issues: string[];
  mustRegenerate: boolean;
  suggestions: string[];
}

/**
 * V4.1 Runtime overrides for validation
 */
export interface ValidationOverrides {
  blockNewConcepts?: boolean;
  shortenTeach?: boolean;
  reduceTasksCount?: boolean;
  maxTasksPerPractice?: number;
  requireExtraExamples?: boolean;
  suggestBreak?: boolean;
}

export function validateTutorResponse(
  response: string,
  state: TutorLoopStateV3,
  ctx: TeachingContext,
  overrides?: ValidationOverrides
): QAValidationResult {
  const issues: string[] = [];
  const suggestions: string[] = [];

  // V4.1: Adjust max sentences based on overrides
  let maxSentences = DEFAULT_GUARDRAILS.maxResponseSentences(ctx.cefrLevel);
  if (overrides?.shortenTeach) {
    maxSentences = Math.min(maxSentences, 4); // Short teach: max 4 sentences
  }

  // Check 1: Response length
  const sentences = response.split(/[.!?]+/).filter(s => s.trim().length > 10);
  if (sentences.length > maxSentences) {
    issues.push(`Слишком длинный ответ: ${sentences.length}/${maxSentences} предложений`);
  }

  // Check 2: Has JSON block
  if (!response.includes('```json')) {
    issues.push('Отсутствует JSON блок в конце ответа');
  }

  // Check 3: State-specific checks
  if (state === 'TEACH' || state === 'ADAPT') {
    // Must have examples
    const hasExamples = response.includes('"') ||
                        response.includes('«') ||
                        response.toLowerCase().includes('например') ||
                        response.toLowerCase().includes('example');
    if (!hasExamples) {
      issues.push('Нет примеров в TEACH/ADAPT');
      suggestions.push('Добавь минимум 2 примера с переводом');
    }

    // V4.1: Check for extra examples if required
    if (overrides?.requireExtraExamples) {
      const exampleCount = (response.match(/["«»"]/g) || []).length / 2;
      if (exampleCount < 3) {
        suggestions.push('Требуется больше примеров (3-4) из-за plateau');
      }
    }

    // V4.1: Check blockNewConcepts is respected in TEACH
    if (overrides?.blockNewConcepts) {
      const hasNewConceptIndicators =
        response.toLowerCase().includes('новая тема') ||
        response.toLowerCase().includes('новое правило') ||
        response.toLowerCase().includes('давай изучим');
      if (hasNewConceptIndicators) {
        issues.push('Новые концепции заблокированы (fatigue/plateau), но ответ вводит новое');
      }
    }
  }

  if (state === 'CHECK') {
    const hasQuestion = response.includes('?');
    if (!hasQuestion) {
      issues.push('Нет вопроса на проверку в CHECK');
    }
  }

  // Check 4: No tasks before explanation
  if (state === 'WARMUP' || state === 'GOAL_ALIGN') {
    const hasTask = response.includes('"task":') && !response.includes('"task": null');
    if (hasTask) {
      issues.push('Задание до объяснения!');
      suggestions.push('Удали task, сначала TEACH');
    }
  }

  // V4.1: Check task count in PRACTICE if limited
  if (state === 'PRACTICE' && overrides?.reduceTasksCount) {
    const maxTasks = overrides.maxTasksPerPractice || 1;
    // Try to extract task count from JSON
    const taskMatch = response.match(/"tasks":\s*\[([^\]]*)\]/);
    if (taskMatch) {
      const taskCount = (taskMatch[1].match(/{/g) || []).length;
      if (taskCount > maxTasks) {
        issues.push(`Слишком много заданий: ${taskCount}/${maxTasks} (fatigue override)`);
      }
    }
  }

  // V4.1: Check break suggestion if required
  if (overrides?.suggestBreak && state === 'REVIEW') {
    const hasBreakSuggestion =
      response.toLowerCase().includes('перерыв') ||
      response.toLowerCase().includes('отдохн') ||
      response.toLowerCase().includes('пауз');
    if (!hasBreakSuggestion) {
      suggestions.push('Добавь предложение сделать перерыв (fatigue detected)');
    }
  }

  // Check 5: Uses context
  const usesWeakSkills = ctx.weakestSkills.some(skill =>
    response.toLowerCase().includes(skill.toLowerCase())
  );
  if (!usesWeakSkills && (state === 'GOAL_ALIGN' || state === 'TEACH')) {
    suggestions.push('Используй слабые навыки из контекста');
  }

  // Check 6: No markdown
  if (response.includes('**') || response.includes('##') || response.includes('```typescript')) {
    issues.push('Markdown разметка в ответе');
  }

  return {
    isValid: issues.length === 0,
    issues,
    mustRegenerate: issues.some(i =>
      i.includes('Задание до объяснения') ||
      i.includes('Отсутствует JSON') ||
      i.includes('Новые концепции заблокированы')
    ),
    suggestions,
  };
}

// ============================================
// MEMORY RECAP INTERFACE
// ============================================

export interface MemoryRecapV3 {
  taughtConcepts: string[];
  studentUnderstood: boolean;
  errorsNoted: string[];
  nextFocus: string;
  simplificationLevel: number;
  topicsThisSession: string[];
  engagementTechniques: string[];
  skillDeltasThisSession: Partial<Record<SkillType, number>>;
}

export function createEmptyMemoryRecap(): MemoryRecapV3 {
  return {
    taughtConcepts: [],
    studentUnderstood: true,
    errorsNoted: [],
    nextFocus: '',
    simplificationLevel: 0,
    topicsThisSession: [],
    engagementTechniques: [],
    skillDeltasThisSession: {},
  };
}
