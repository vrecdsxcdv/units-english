/**
 * AI Prompts for Topic Content Generation
 *
 * Prompts used to fill topic templates with personalized content.
 */

import type { TopicTemplate, CEFRLevel, SkillKey } from '@enbai/types';

export interface TopicGenerationContext {
  template: TopicTemplate;
  userLevel: CEFRLevel;
  userInterests: string[];
  targetSkills: SkillKey[];
  recentErrors?: string[];
  sessionNumber?: number;
}

/**
 * System prompt for topic content generation
 */
export function getTopicGenerationSystemPrompt(): string {
  return `Ты — опытный преподаватель английского языка, создающий персонализированные учебные материалы.

Твоя задача — наполнить шаблон урока контентом, подходящим для конкретного ученика.

ПРАВИЛА:
1. Весь учебный контент на АНГЛИЙСКОМ языке
2. Инструкции и объяснения на РУССКОМ языке
3. Адаптируй сложность под уровень CEFR ученика
4. Используй интересы ученика для создания релевантных примеров
5. Примеры должны быть реалистичными и современными
6. Избегай клише и скучных тем

СТРУКТУРА ОТВЕТА:
Отвечай в формате JSON, строго следуя структуре шаблона.`;
}

/**
 * Generate prompt for filling a specific topic template
 */
export function getTopicGenerationPrompt(context: TopicGenerationContext): string {
  const { template, userLevel, userInterests, targetSkills, recentErrors } = context;

  const interestsStr = userInterests.length > 0
    ? userInterests.join(', ')
    : 'общие темы';

  const errorsStr = recentErrors && recentErrors.length > 0
    ? `\n\nНедавние ошибки ученика: ${recentErrors.join(', ')}`
    : '';

  const pagesPrompt = template.pages.map((page, idx) => {
    const contentBlocksDesc = page.contentBlocks
      .map(b => `  - ${b.type}: ${b.placeholder} (макс. ${b.maxLength || 500} символов)`)
      .join('\n');

    const exercisesDesc = page.exercises
      .map(e => `  - ${e.type} x${e.count}: ${e.placeholder}`)
      .join('\n');

    return `
### Страница ${idx + 1}: ${page.title}
Тип: ${page.type}
Цель: ${page.goal}
Целевые навыки: ${page.targetSkills.join(', ')}

Контент-блоки:
${contentBlocksDesc || '  (нет)'}

Упражнения:
${exercisesDesc || '  (нет)'}`;
  }).join('\n');

  return `Создай контент для урока "${template.name}".

## Информация об ученике
- Уровень CEFR: ${userLevel}
- Интересы: ${interestsStr}
- Целевые навыки: ${targetSkills.join(', ')}${errorsStr}

## Шаблон урока
ID: ${template.id}
Название: ${template.name}
Описание: ${template.description}
Основные навыки: ${template.primarySkills.join(', ')}
Тон: ${template.contentGuidelines.tone}
Стиль примеров: ${template.contentGuidelines.exampleStyle}

## Структура страниц
${pagesPrompt}

## Формат ответа
Верни JSON объект GeneratedTopic со всеми заполненными страницами и упражнениями.
Каждое упражнение должно содержать:
- instruction: инструкция на русском
- content: контент упражнения (вопрос, текст с пропусками, и т.д.)
- correctAnswer: правильный ответ
- explanation: объяснение на русском почему этот ответ правильный`;
}

/**
 * Prompt for selecting the best template for a user
 */
export function getTemplateSelectionPrompt(
  templates: TopicTemplate[],
  userLevel: CEFRLevel,
  skillVector: Record<SkillKey, number>,
  userInterests: string[],
  recentTopicIds: string[]
): string {
  const templatesDesc = templates.map(t => `
- ${t.id}: ${t.name}
  Навыки: ${t.primarySkills.join(', ')}
  CEFR: ${t.applicableCEFR.join(', ')}
  Когда использовать: ${JSON.stringify(t.whenToUse)}
  Приоритет: ${t.priority}`
  ).join('\n');

  const skillsDesc = Object.entries(skillVector)
    .map(([skill, value]) => `  ${skill}: ${(value * 100).toFixed(0)}%`)
    .join('\n');

  return `Выбери лучший шаблон урока для ученика.

## Профиль ученика
Уровень CEFR: ${userLevel}
Интересы: ${userInterests.join(', ') || 'не указаны'}

Текущие навыки (0-100%):
${skillsDesc}

## Недавние уроки (избегать повторов)
${recentTopicIds.length > 0 ? recentTopicIds.join(', ') : 'нет'}

## Доступные шаблоны
${templatesDesc}

## Задача
Выбери один шаблон, который:
1. Подходит для уровня ученика
2. Развивает слабые навыки
3. Не повторяет недавние уроки
4. Соответствует интересам (если возможно)

Ответь JSON объектом:
{
  "templateId": "id-шаблона",
  "reason": "краткое объяснение выбора на русском"
}`;
}

/**
 * Prompt for evaluating user's exercise response
 */
export function getExerciseEvaluationPrompt(
  exerciseType: string,
  instruction: string,
  content: unknown,
  correctAnswer: unknown,
  userAnswer: unknown,
  userLevel: CEFRLevel
): string {
  return `Оцени ответ ученика на упражнение.

## Упражнение
Тип: ${exerciseType}
Инструкция: ${instruction}
Контент: ${JSON.stringify(content)}
Правильный ответ: ${JSON.stringify(correctAnswer)}
Ответ ученика: ${JSON.stringify(userAnswer)}
Уровень ученика: ${userLevel}

## Задача
Оцени ответ и дай обратную связь.

Ответь JSON объектом:
{
  "isCorrect": true/false,
  "score": 0.0-1.0,
  "feedback": "объяснение на русском, что правильно/неправильно",
  "correction": "исправленный вариант, если есть ошибки",
  "skillsAffected": {
    "skill_name": delta_value  // например: {"grammar": -0.02}
  }
}`;
}
