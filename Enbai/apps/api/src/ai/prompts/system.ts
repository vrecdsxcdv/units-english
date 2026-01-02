import type { SkillVector } from '@enbai/types';

/**
 * TutorMode configuration - controls AI behavior strictly
 */
export interface TutorMode {
  allowTheory: boolean;
  allowExamExplanation: boolean;
  maxConceptLevel: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  maxResponseLength: 'short' | 'medium' | 'long';
}

/**
 * Get TutorMode based on user level
 */
export function getTutorMode(level: string): TutorMode {
  const levelCode = level.substring(0, 2).toUpperCase();

  switch (levelCode) {
    case 'A1':
      return {
        allowTheory: false,
        allowExamExplanation: false,
        maxConceptLevel: 'A1',
        maxResponseLength: 'short',
      };
    case 'A2':
      return {
        allowTheory: false,
        allowExamExplanation: false,
        maxConceptLevel: 'A2',
        maxResponseLength: 'short',
      };
    case 'B1':
      return {
        allowTheory: true,
        allowExamExplanation: true,
        maxConceptLevel: 'B1',
        maxResponseLength: 'medium',
      };
    case 'B2':
      return {
        allowTheory: true,
        allowExamExplanation: true,
        maxConceptLevel: 'B2',
        maxResponseLength: 'medium',
      };
    case 'C1':
    case 'C2':
      return {
        allowTheory: true,
        allowExamExplanation: true,
        maxConceptLevel: levelCode as 'C1' | 'C2',
        maxResponseLength: 'long',
      };
    default:
      return {
        allowTheory: false,
        allowExamExplanation: false,
        maxConceptLevel: 'A1',
        maxResponseLength: 'short',
      };
  }
}

/**
 * Build strict system prompt for DeepSeek
 * This is the SYSTEM prompt - not mixed with user context
 */
export function buildSystemPrompt(tutorMode: TutorMode, level: string): string {
  return `Ты — Enbai, AI-репетитор английского языка.
Твоя задача — ОБУЧАТЬ, а не объяснять теорию свободно.

ПЕРВОЕ СООБЩЕНИЕ В ДИАЛОГЕ:
Если это первое сообщение ученика (нет предыдущей истории), ты ОБЯЗАН:
1. Представиться коротко: "Привет! Я Enbai — твой AI-репетитор английского."
2. Спросить как зовут или сразу предложить начать обучение.
3. НЕ давать задание сразу — сначала установи контакт.

ОБЯЗАТЕЛЬНЫЕ ПРАВИЛА (НАРУШЕНИЕ ЗАПРЕЩЕНО):

1. Ты ВСЕГДА работаешь в рамках текущего уровня CEFR пользователя.
   Текущий уровень — ${level}.
   Ты НЕ МОЖЕШЬ:
   - объяснять темы выше ${tutorMode.maxConceptLevel},
   - использовать лексику выше ${tutorMode.maxConceptLevel},
   - говорить "в будущем мы будем…", кроме 1 короткого предложения.

2. Skill Vector — ЭТО УПРАВЛЯЮЩИЙ СИГНАЛ, А НЕ СПРАВКА.
   При каждом ответе:
   - выбери 1–2 самых слабых навыка,
   - строй ответ ТОЛЬКО вокруг них.

3. ЗАПРЕЩЕНО:
   - начинать лекцию,
   - рассказывать формат экзаменов,
   - давать абстрактные планы обучения,
   - объяснять IELTS как концепцию,
   ${!tutorMode.allowExamExplanation ? 'ЕСЛИ уровень пользователя ниже B1.' : ''}

4. ЕСЛИ пользователь говорит о цели (например, IELTS),
   ты:
   - подтверждаешь цель ОДНИМ коротким предложением,
   - сразу возвращаешься к обучению на текущем уровне.

   Пример ПРАВИЛЬНО:
   "Отлично, IELTS — хорошая цель. Сейчас твоя задача — выучить базовые слова и фразы. Давай начнём."

5. Каждое сообщение должно содержать ОДНО учебное действие:
   - вопрос
   - задание
   - мини-диалог
   - проверку

6. Если пользователь чего-то "не знает" или "не понимает":
   - НЕ объясняй,
   - ДАЙ ПРИМЕР,
   - ПРЕДЛОЖИ ПОВТОРИТЬ или ВЫБРАТЬ.

7. Твоя цель — прогресс skill vector, а не "быть полезным собеседником".

СТИЛЬ:
- короткие фразы
- простой язык
- дружелюбно, но структурно
- без лишней информации
- НЕ используй markdown-разметку (*, **, #, ##)
- Пиши простым текстом

ЯЗЫК:
- ВСЕГДА отвечай на РУССКОМ
- Английский ТОЛЬКО для примеров и упражнений
- Даже если ученик пишет на английском — отвечай на РУССКОМ

Если есть сомнение — выбирай ПРОСТОТУ и УРОВЕНЬ ${level}.

TUTOR MODE CONFIG:
- allowTheory: ${tutorMode.allowTheory}
- allowExamExplanation: ${tutorMode.allowExamExplanation}
- maxConceptLevel: ${tutorMode.maxConceptLevel}
- maxResponseLength: ${tutorMode.maxResponseLength}`;
}

/**
 * Build user context section (separate from system prompt)
 */
export function buildUserContext(context: {
  skillVector: SkillVector;
  learningAbility: number;
  interests: string[];
  dailyTimeMinutes: number;
  tasksCompletedToday: number;
  streak: number;
  recentErrors?: string[];
  strongSkills?: string[];
  learningGoal?: string;
  isFirstMessage?: boolean;
}): string {
  const weakSkills = getWeakSkills(context.skillVector);
  const strongSkills = getStrongSkills(context.skillVector);
  const level = estimateLevel(context.skillVector);

  const isFirst = context.isFirstMessage ? '\n⚠️ ЭТО ПЕРВОЕ СООБЩЕНИЕ — ПРЕДСТАВЬСЯ!' : '';

  return `ПРОФИЛЬ УЧЕНИКА:
Уровень: ${level}
Слабые навыки (ФОКУС): ${weakSkills.join(', ') || 'не определены'}
Сильные навыки: ${strongSkills.join(', ') || 'не определены'}
Интересы: ${context.interests.join(', ') || 'не указаны'}
${context.learningGoal ? `Цель: ${context.learningGoal}` : ''}${isFirst}

SKILL VECTOR (управляющий сигнал):
${formatSkillVectorCompact(context.skillVector)}

СЕССИЯ:
- Заданий сегодня: ${context.tasksCompletedToday}
- Серия дней: ${context.streak}
${context.recentErrors?.length ? `- Недавние ошибки: ${context.recentErrors.slice(0, 3).join('; ')}` : ''}

ЗАДАЧА НА ЭТОТ ОТВЕТ:
${generateTaskDirective(weakSkills, context.learningAbility)}`;
}

/**
 * Format skill vector compactly
 */
function formatSkillVectorCompact(vector: SkillVector): string {
  const shortNames: Record<string, string> = {
    grammar: 'gram',
    vocabulary: 'vocab',
    pronunciation: 'pron',
    listening: 'list',
    speaking: 'speak',
    slang: 'slang',
    word_formation: 'word',
    fluency: 'flu',
    writing: 'writ',
    comprehension: 'comp',
  };

  return Object.entries(vector)
    .map(([skill, value]) => `${shortNames[skill] || skill}:${Math.round((value as number) * 100)}%`)
    .join(' | ');
}

/**
 * Generate specific task directive for this response
 */
function generateTaskDirective(weakSkills: string[], learningAbility: number): string {
  if (weakSkills.length === 0) {
    return 'Дай простое задание на любой навык.';
  }

  const focus = weakSkills[0];
  const complexity = learningAbility < 0.4 ? 'очень простое' : learningAbility > 0.7 ? 'с вызовом' : 'умеренное';

  return `Фокус: ${focus}. Дай ${complexity} задание или вопрос по этой теме.`;
}

/**
 * Get strong skills above threshold
 */
function getStrongSkills(vector: SkillVector, threshold = 0.6): string[] {
  const skillNames: Record<string, string> = {
    grammar: 'грамматика',
    vocabulary: 'словарь',
    pronunciation: 'произношение',
    listening: 'аудирование',
    speaking: 'разговорный',
    slang: 'сленг',
    word_formation: 'словообразование',
    fluency: 'беглость',
    writing: 'письмо',
    comprehension: 'понимание',
  };

  const skills = Object.entries(vector) as [string, number][];
  return skills
    .filter(([_, value]) => value >= threshold)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([skill]) => skillNames[skill] || skill);
}

/**
 * Get skills below threshold
 */
function getWeakSkills(vector: SkillVector, threshold = 0.4): string[] {
  const skillNames: Record<string, string> = {
    grammar: 'грамматика',
    vocabulary: 'словарь',
    pronunciation: 'произношение',
    listening: 'аудирование',
    speaking: 'разговорный',
    slang: 'сленг',
    word_formation: 'словообразование',
    fluency: 'беглость',
    writing: 'письмо',
    comprehension: 'понимание',
  };

  const skills = Object.entries(vector) as [string, number][];
  return skills
    .filter(([_, value]) => value < threshold)
    .sort((a, b) => a[1] - b[1])
    .slice(0, 3)
    .map(([skill]) => skillNames[skill] || skill);
}

/**
 * Estimate CEFR level from skill vector
 */
export function estimateLevel(vector: SkillVector): string {
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
 * Describe learning ability
 */
function describeLearningAbility(value: number): string {
  if (value < 0.3) return 'медленный';
  if (value < 0.5) return 'средний';
  if (value < 0.7) return 'быстрый';
  return 'очень быстрый';
}

// Legacy export for backwards compatibility
export const BASE_SYSTEM_PROMPT = buildSystemPrompt(
  { allowTheory: false, allowExamExplanation: false, maxConceptLevel: 'A1', maxResponseLength: 'short' },
  'A1'
);
