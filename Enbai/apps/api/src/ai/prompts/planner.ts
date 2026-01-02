/**
 * PLANNER PROMPT - For task selection and learning path (deepseek-r1 or chat, temp 0.3)
 * Role: Strategic planner who selects optimal next task based on skill vector
 */

export const PLANNER_SYSTEM_PROMPT = `Ты Planner — система планирования обучения.

РОЛЬ: Выбирать оптимальное следующее задание на основе профиля ученика и истории.

СТРАТЕГИЯ ВЫБОРА:

1. ПРИОРИТЕТ НАВЫКОВ (по порядку):
   a) Навыки с недавними ошибками (conceptsToReview)
   b) Слабые навыки (<40%)
   c) Навыки, которые давно не практиковались
   d) Укрепление средних навыков (40-60%)
   e) Развитие сильных навыков (>60%)

2. СЛОЖНОСТЬ:
   - Оптимально: текущий уровень + 10-15% (зона ближайшего развития)
   - После 3 ошибок подряд: снизить сложность
   - После 3 успехов подряд: повысить сложность
   - Учитывать learningAbility: быстрые ученики могут брать +20%

3. РАЗНООБРАЗИЕ:
   - Не повторять тот же тип задания подряд
   - Чередовать навыки (не 3 grammar подряд)
   - Использовать интересы ученика для тем

4. ВРЕМЯ СЕССИИ:
   - Учитывать dailyTimeMinutes
   - К концу сессии - более лёгкие задания
   - Не перегружать (макс 10 заданий/сессия)

5. SPACED REPETITION:
   - Возвращаться к концептам через интервалы
   - После ошибки - повторить через 1-2 задания
   - После успеха - увеличить интервал

ФОРМАТ ОТВЕТА:
Верни JSON с выбранным заданием и обоснованием:

\`\`\`json
{
  "planning": {
    "selectedTaskSlug": "a2-past-simple-001",
    "reasoning": {
      "primaryFocus": "grammar",
      "why": "Навык grammar на 32%, ниже порога. Недавняя ошибка в past tense.",
      "difficultyChoice": "Сложность 0.25 оптимальна для текущего уровня A2",
      "variety": "Предыдущее задание было multiple_choice, это fill_blanks"
    },
    "alternativeTasks": ["a2-articles-001", "a2-vocabulary-food-001"],
    "sessionProgress": {
      "tasksCompleted": 3,
      "estimatedTimeLeft": 15,
      "recommendation": "continue"
    },
    "nextConceptToReview": "past_simple_irregular",
    "confidence": 0.85
  }
}
\`\`\`

ВХОДНЫЕ ДАННЫЕ (будут предоставлены):
- Skill vector (10 навыков 0-1)
- Recent errors (концепты с ошибками)
- Last N tasks (что уже делали)
- Available tasks (банк заданий)
- Session context (время, прогресс)
- User preferences (интересы)

ОГРАНИЧЕНИЯ:
- Возвращай ТОЛЬКО JSON
- selectedTaskSlug должен быть из available tasks
- Не выбирай задания выше уровня ученика более чем на 1 ступень
- Если нет подходящих заданий - верни recommendation: "generate_new"`;

/**
 * Build planning request
 */
export function buildPlanningRequest(data: {
  skillVector: Record<string, number>;
  recentErrors: string[];
  lastTasks: Array<{ slug: string; type: string; wasCorrect: boolean }>;
  availableTasks: Array<{ slug: string; type: string; difficulty: number; targetSkills: string[]; level: string }>;
  sessionContext: {
    tasksCompleted: number;
    minutesElapsed: number;
    dailyTimeMinutes: number;
    consecutiveCorrect: number;
    consecutiveWrong: number;
  };
  userLevel: string;
  interests: string[];
  learningAbility: number;
}): string {
  // Find weak skills
  const weakSkills = Object.entries(data.skillVector)
    .filter(([_, v]) => v < 0.4)
    .sort((a, b) => a[1] - b[1])
    .map(([k]) => k);

  // Find strong skills
  const strongSkills = Object.entries(data.skillVector)
    .filter(([_, v]) => v >= 0.6)
    .map(([k]) => k);

  return `
SKILL VECTOR:
${Object.entries(data.skillVector).map(([k, v]) => `- ${k}: ${(v * 100).toFixed(0)}%`).join('\n')}

АНАЛИЗ:
- Слабые навыки (<40%): ${weakSkills.join(', ') || 'нет'}
- Сильные навыки (>60%): ${strongSkills.join(', ') || 'нет'}
- Уровень ученика: ${data.userLevel}
- Скорость обучения: ${data.learningAbility > 0.7 ? 'быстрая' : data.learningAbility > 0.4 ? 'средняя' : 'медленная'}

НЕДАВНИЕ ОШИБКИ (концепты для повторения):
${data.recentErrors.length > 0 ? data.recentErrors.join(', ') : 'нет'}

ПОСЛЕДНИЕ ЗАДАНИЯ:
${data.lastTasks.slice(-5).map(t => `- ${t.slug} (${t.type}) - ${t.wasCorrect ? 'верно' : 'ошибка'}`).join('\n') || 'нет'}

КОНТЕКСТ СЕССИИ:
- Заданий выполнено: ${data.sessionContext.tasksCompleted}
- Времени прошло: ${data.sessionContext.minutesElapsed} мин
- Времени в день: ${data.sessionContext.dailyTimeMinutes} мин
- Подряд правильных: ${data.sessionContext.consecutiveCorrect}
- Подряд неправильных: ${data.sessionContext.consecutiveWrong}

ИНТЕРЕСЫ УЧЕНИКА:
${data.interests.join(', ') || 'не указаны'}

ДОСТУПНЫЕ ЗАДАНИЯ:
${data.availableTasks.map(t => `- ${t.slug}: ${t.type}, сложность ${t.difficulty}, навыки [${t.targetSkills.join(',')}], уровень ${t.level}`).join('\n')}

Выбери оптимальное следующее задание и верни JSON.`;
}

/**
 * Parse planning response
 */
export function parsePlanningResponse(response: string): {
  success: boolean;
  planning?: {
    selectedTaskSlug: string;
    reasoning: {
      primaryFocus: string;
      why: string;
      difficultyChoice: string;
      variety: string;
    };
    alternativeTasks: string[];
    sessionProgress: {
      tasksCompleted: number;
      estimatedTimeLeft: number;
      recommendation: 'continue' | 'break' | 'end_session' | 'generate_new';
    };
    nextConceptToReview?: string;
    confidence: number;
  };
  error?: string;
} {
  try {
    const jsonMatch = response.match(/```json\s*([\s\S]*?)\s*```/);
    const jsonStr = jsonMatch ? jsonMatch[1] : response;

    const parsed = JSON.parse(jsonStr);

    if (!parsed.planning || !parsed.planning.selectedTaskSlug) {
      return { success: false, error: 'Missing planning.selectedTaskSlug' };
    }

    return { success: true, planning: parsed.planning };
  } catch (error) {
    return {
      success: false,
      error: `JSON parse error: ${error instanceof Error ? error.message : 'Unknown'}`,
    };
  }
}

/**
 * Fallback task selection (rule-based, no AI)
 */
export function selectTaskFallback(
  skillVector: Record<string, number>,
  availableTasks: Array<{ slug: string; difficulty: number; targetSkills: string[] }>,
  lastTaskSlugs: string[]
): string | null {
  // Find weakest skill
  const weakestSkill = Object.entries(skillVector)
    .sort((a, b) => a[1] - b[1])[0]?.[0];

  if (!weakestSkill) return availableTasks[0]?.slug || null;

  // Find tasks targeting weakest skill, not recently done
  const candidates = availableTasks
    .filter(t => t.targetSkills.includes(weakestSkill))
    .filter(t => !lastTaskSlugs.includes(t.slug))
    .sort((a, b) => a.difficulty - b.difficulty);

  return candidates[0]?.slug || availableTasks[0]?.slug || null;
}
