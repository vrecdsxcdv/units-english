/**
 * EVALUATOR PROMPT - For grading responses (deepseek-r1, temp 0.2)
 * Role: Strict but fair evaluator who scores answers and identifies skill gaps
 */

export const EVALUATOR_SYSTEM_PROMPT = `Ты Evaluator — система оценки ответов учеников.

РОЛЬ: Объективно оценивать ответы учеников и определять, какие навыки требуют улучшения.

ПРИНЦИПЫ ОЦЕНКИ:
1. Будь объективным и последовательным
2. Учитывай частичную правильность
3. Определяй конкретные ошибки и их причины
4. Связывай ошибки с навыками из skill vector

ФОРМАТ ОТВЕТА:
Ты ОБЯЗАН вернуть JSON в следующем формате (и ТОЛЬКО JSON, без текста до/после):

\`\`\`json
{
  "evaluation": {
    "isCorrect": true/false,
    "score": 0.0-1.0,
    "skillScores": {
      "grammar": 0.0-1.0,
      "vocabulary": 0.0-1.0,
      ...только релевантные навыки
    },
    "errors": [
      {
        "type": "grammar|vocabulary|spelling|logic|incomplete",
        "description": "Описание ошибки на русском",
        "correction": "Правильный вариант",
        "skillAffected": "название навыка",
        "severity": "minor|moderate|major"
      }
    ],
    "feedback": {
      "summary": "Краткий итог на русском (1-2 предложения)",
      "praise": "Что хорошо (если есть)",
      "improvement": "Что улучшить (если есть)"
    },
    "conceptsToReview": ["concept_key_1", "concept_key_2"],
    "confidence": 0.0-1.0
  }
}
\`\`\`

ПРАВИЛА ОЦЕНКИ:

1. EXACT MATCH задания (multiple_choice, fill_blanks):
   - Полное совпадение = score 1.0
   - Частичное (fill_blanks) = пропорционально правильным
   - Неправильно = score 0.0

2. SEMANTIC задания (free_response, error_correction):
   - Оценивай по смыслу, не по точному совпадению
   - Учитывай грамматику, лексику, полноту ответа
   - Используй rubric если предоставлен

3. SKILL SCORES:
   - Выставляй только для навыков, которые задание тестирует
   - Основывайся на skillWeights из задания
   - 1.0 = безупречно, 0.5 = есть ошибки, 0.0 = полностью неверно

4. SEVERITY ошибок:
   - minor: опечатки, мелкие неточности (не влияют на понимание)
   - moderate: ошибки, которые затрудняют понимание
   - major: критические ошибки, полностью меняющие смысл

5. CONFIDENCE:
   - Твоя уверенность в оценке
   - 0.9-1.0: однозначный ответ (exact match)
   - 0.7-0.9: высокая уверенность (семантика понятна)
   - 0.5-0.7: средняя уверенность (неоднозначно)
   - <0.5: низкая уверенность (нужна проверка человеком)

ОГРАНИЧЕНИЯ:
- Возвращай ТОЛЬКО JSON, никакого текста вокруг
- Не добавляй комментарии в JSON
- Все текстовые поля на русском языке
- Не будь слишком строгим к начинающим (A1-A2)`;

/**
 * Build evaluation request
 */
export function buildEvaluationRequest(data: {
  task: {
    type: string;
    question: string;
    expectedAnswer: {
      correct: string | string[];
      explanation: string;
    };
    skillWeights: Record<string, number>;
    level: { cefr: string };
    scoring: { method: string; rubric?: unknown[] };
  };
  studentAnswer: string;
  studentLevel: string;
}): string {
  return `
ЗАДАНИЕ:
- Тип: ${data.task.type}
- Уровень: ${data.task.level.cefr}
- Метод оценки: ${data.task.scoring.method}
- Вопрос: ${data.task.question}
- Правильный ответ: ${JSON.stringify(data.task.expectedAnswer.correct)}
- Объяснение: ${data.task.expectedAnswer.explanation}
- Веса навыков: ${JSON.stringify(data.task.skillWeights)}
${data.task.scoring.rubric ? `- Рубрика: ${JSON.stringify(data.task.scoring.rubric)}` : ''}

ОТВЕТ УЧЕНИКА:
"${data.studentAnswer}"

УРОВЕНЬ УЧЕНИКА: ${data.studentLevel}

Оцени ответ и верни JSON в указанном формате.`;
}

/**
 * Parse evaluation response with fallback
 */
export function parseEvaluationResponse(response: string): {
  success: boolean;
  evaluation?: {
    isCorrect: boolean;
    score: number;
    skillScores: Record<string, number>;
    errors: Array<{
      type: string;
      description: string;
      correction: string;
      skillAffected: string;
      severity: string;
    }>;
    feedback: {
      summary: string;
      praise?: string;
      improvement?: string;
    };
    conceptsToReview: string[];
    confidence: number;
  };
  error?: string;
} {
  try {
    // Try to extract JSON from code block
    const jsonMatch = response.match(/```json\s*([\s\S]*?)\s*```/);
    const jsonStr = jsonMatch ? jsonMatch[1] : response;

    const parsed = JSON.parse(jsonStr);

    if (!parsed.evaluation) {
      return { success: false, error: 'Missing evaluation object' };
    }

    // Validate required fields
    const { evaluation } = parsed;
    if (typeof evaluation.isCorrect !== 'boolean') {
      return { success: false, error: 'Missing isCorrect' };
    }
    if (typeof evaluation.score !== 'number') {
      return { success: false, error: 'Missing score' };
    }

    // Clamp score to 0-1
    evaluation.score = Math.max(0, Math.min(1, evaluation.score));

    // Ensure arrays exist
    evaluation.errors = evaluation.errors || [];
    evaluation.conceptsToReview = evaluation.conceptsToReview || [];

    // Ensure feedback exists
    evaluation.feedback = evaluation.feedback || { summary: 'Оценка выполнена' };

    // Default confidence
    evaluation.confidence = evaluation.confidence || 0.8;

    return { success: true, evaluation };
  } catch (error) {
    return {
      success: false,
      error: `JSON parse error: ${error instanceof Error ? error.message : 'Unknown'}`,
    };
  }
}

/**
 * Fallback evaluation when AI fails
 */
export function createFallbackEvaluation(
  isLikelyCorrect: boolean,
  taskType: string
): ReturnType<typeof parseEvaluationResponse>['evaluation'] {
  return {
    isCorrect: isLikelyCorrect,
    score: isLikelyCorrect ? 0.7 : 0.3,
    skillScores: {},
    errors: [],
    feedback: {
      summary: 'Автоматическая оценка временно недоступна. Ответ принят.',
      improvement: 'Попробуй ещё раз для более точной оценки.',
    },
    conceptsToReview: [],
    confidence: 0.3,
  };
}
