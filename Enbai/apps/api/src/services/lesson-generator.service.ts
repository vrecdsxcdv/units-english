/**
 * Lesson Generator Service V3
 *
 * Generates personalized LessonModalV3 from TopicTemplates.
 * Uses AI to fill placeholders with context-aware content.
 */

import { generateChatCompletion, jsonGenerationConfig, ChatMessage } from '../ai/client';
import { ALL_TOPIC_TEMPLATES, getTemplateById, getTemplatesForLevel, getTemplatesForSkill } from '../data/topic-templates';
import type {
  LessonModalV3,
  LessonPageV3,
  ContentBlockV3,
  InteractionV3,
  LessonTemplateV3,
  SkillType,
  CEFRLevel,
  SkillVector,
  TopicTemplate,
} from '@enbai/types';
import { prisma } from '../db';

// ============================================
// INTERFACES
// ============================================

export interface LessonGenerationContext {
  userId: string;
  skillVector: SkillVector;
  cefrLevel: CEFRLevel;
  interests: string[];
  recentErrors: string[];
  learningGoal?: string;
  dailyTimeMinutes: number;
  tasksCompletedToday: number;
  recentTopicIds: string[];
}

export interface TopicSelectionResult {
  template: TopicTemplate;
  microTopic: string;
  microTopicRu: string;
  priority: number;
  reason: string;
}

// ============================================
// TOPIC SELECTION ALGORITHM
// ============================================

/**
 * Select best topic for user based on skill vector, errors, interests
 */
export function selectTopicForUser(ctx: LessonGenerationContext): TopicSelectionResult | null {
  const candidates: Array<TopicSelectionResult & { score: number }> = [];

  // Get templates applicable for level
  const levelTemplates = getTemplatesForLevel(ctx.cefrLevel);

  for (const template of levelTemplates) {
    // Skip recently used templates
    if (ctx.recentTopicIds.includes(template.id)) {
      continue;
    }

    let score = template.priority;
    let reason = '';

    // Boost by weak skills
    const weakSkills = getWeakSkills(ctx.skillVector);
    const matchesWeakSkill = template.primarySkills.some(s => weakSkills.includes(s));
    if (matchesWeakSkill) {
      score += 30;
      reason = `Слабый навык: ${template.primarySkills[0]}`;
    }

    // Boost by recent errors
    if (template.whenToUse?.recentErrorTopics) {
      const matchesError = ctx.recentErrors.some(e =>
        template.whenToUse!.recentErrorTopics!.some(t =>
          e.toLowerCase().includes(t.toLowerCase())
        )
      );
      if (matchesError) {
        score += 25;
        reason = reason || `Связано с недавними ошибками`;
      }
    }

    // Boost by interests
    if (template.whenToUse?.interestBoost) {
      const matchesInterest = ctx.interests.some(i =>
        template.whenToUse!.interestBoost!.some(b =>
          i.toLowerCase().includes(b.toLowerCase())
        )
      );
      if (matchesInterest) {
        score += 12;
      }
    }

    // Boost by IELTS goal
    if (ctx.learningGoal?.toLowerCase().includes('ielts')) {
      if (template.ieltsFocus) {
        score += 15;
      }
    }

    // Generate micro-topic based on template
    const microTopic = generateMicroTopic(template, ctx);

    candidates.push({
      template,
      microTopic: microTopic.en,
      microTopicRu: microTopic.ru,
      priority: score,
      reason: reason || `Подходит для уровня ${ctx.cefrLevel}`,
      score,
    });
  }

  // Sort by score and return best
  candidates.sort((a, b) => b.score - a.score);

  if (candidates.length === 0) return null;

  const best = candidates[0];
  return {
    template: best.template,
    microTopic: best.microTopic,
    microTopicRu: best.microTopicRu,
    priority: best.priority,
    reason: best.reason,
  };
}

function getWeakSkills(vector: SkillVector, threshold = 0.4): SkillType[] {
  return (Object.entries(vector) as [SkillType, number][])
    .filter(([_, v]) => v < threshold)
    .sort((a, b) => a[1] - b[1])
    .map(([k]) => k);
}

function generateMicroTopic(template: TopicTemplate, ctx: LessonGenerationContext): { en: string; ru: string } {
  // Generate specific micro-topic based on template category and level
  const microTopics: Record<string, Array<{ en: string; ru: string; levels: string[] }>> = {
    'grammar-clinic': [
      { en: 'Articles: A vs AN', ru: 'Артикли: A и AN', levels: ['A1'] },
      { en: 'Present Simple', ru: 'Настоящее простое время', levels: ['A1', 'A2'] },
      { en: 'Past Simple', ru: 'Прошедшее простое время', levels: ['A1', 'A2'] },
      { en: 'Present Continuous', ru: 'Настоящее продолженное', levels: ['A1', 'A2'] },
      { en: 'Countable vs Uncountable', ru: 'Исчисляемые и неисчисляемые', levels: ['A2', 'B1'] },
      { en: 'Present Perfect', ru: 'Настоящее совершённое', levels: ['A2', 'B1'] },
      { en: 'Conditionals Type 1', ru: 'Условные предложения 1 типа', levels: ['B1'] },
      { en: 'Conditionals Type 2', ru: 'Условные предложения 2 типа', levels: ['B1', 'B2'] },
      { en: 'Passive Voice', ru: 'Страдательный залог', levels: ['B1', 'B2'] },
      { en: 'Reported Speech', ru: 'Косвенная речь', levels: ['B2'] },
      { en: 'Inversion', ru: 'Инверсия', levels: ['C1', 'C2'] },
    ],
    'vocabulary-builder': [
      { en: 'Daily Routine', ru: 'Распорядок дня', levels: ['A1'] },
      { en: 'Food & Drinks', ru: 'Еда и напитки', levels: ['A1', 'A2'] },
      { en: 'Travel Vocabulary', ru: 'Путешествия', levels: ['A2', 'B1'] },
      { en: 'Work & Career', ru: 'Работа и карьера', levels: ['B1', 'B2'] },
      { en: 'Academic Vocabulary', ru: 'Академическая лексика', levels: ['B2', 'C1'] },
    ],
  };

  const templateTopics = microTopics[template.id] || [];
  const applicable = templateTopics.filter(t => t.levels.includes(ctx.cefrLevel));

  if (applicable.length > 0) {
    // Return random applicable topic
    const idx = Math.floor(Math.random() * applicable.length);
    return applicable[idx];
  }

  // Fallback
  return {
    en: `${template.name} Practice`,
    ru: `Практика: ${template.description.split('.')[0]}`,
  };
}

// ============================================
// LESSON GENERATION
// ============================================

/**
 * Generate a complete LessonModalV3 from a template
 */
export async function generateLessonFromTemplate(
  template: TopicTemplate,
  microTopic: { en: string; ru: string },
  ctx: LessonGenerationContext
): Promise<LessonModalV3> {
  const lessonId = `lesson_${template.id}_${Date.now()}`;

  // Generate pages using AI
  const pages = await generateLessonPages(template, microTopic, ctx);

  const lesson: LessonModalV3 = {
    type: 'lesson_modal',
    schemaVersion: '3.0',
    lessonId,
    templateId: template.id,

    title: microTopic.en,
    titleRu: microTopic.ru,
    description: `Learn ${microTopic.en} with examples and practice.`,
    descriptionRu: `Изучи ${microTopic.ru} с примерами и практикой.`,

    cefrLevel: ctx.cefrLevel,
    targetSkills: template.primarySkills as SkillType[],
    difficulty: calculateDifficulty(ctx.cefrLevel),

    ielts: template.ieltsFocus ? {
      relevance: ctx.cefrLevel >= 'B1' ? 'medium' : 'low',
      components: [template.ieltsFocus as any],
    } : undefined,

    pages,

    estimatedMinutes: template.estimatedTotalMinutes?.min || 15,

    personalizedFor: {
      userId: ctx.userId,
      interests: ctx.interests,
      weakSkills: getWeakSkills(ctx.skillVector) as SkillType[],
      recentErrors: ctx.recentErrors,
    },

    progress: {
      currentPageIndex: 0,
      completedPages: [],
      totalScore: 0,
      timeSpentSeconds: 0,
      skillScores: {},
    },

    generatedAt: new Date().toISOString(),
    generatedBy: 'ai',
  };

  return lesson;
}

function calculateDifficulty(level: CEFRLevel): number {
  const map: Record<CEFRLevel, number> = {
    A1: 2,
    A2: 3,
    B1: 5,
    B2: 6,
    C1: 8,
    C2: 9,
  };
  return map[level] || 5;
}

/**
 * Generate lesson pages using AI
 */
async function generateLessonPages(
  template: TopicTemplate,
  microTopic: { en: string; ru: string },
  ctx: LessonGenerationContext
): Promise<LessonPageV3[]> {
  const prompt = buildLessonGenerationPrompt(template, microTopic, ctx);

  const messages: ChatMessage[] = [
    {
      role: 'system',
      content: `Ты — генератор обучающего контента для платформы изучения английского.
Создавай уроки строго по JSON-схеме.
Уровень ученика: ${ctx.cefrLevel}
Интересы: ${ctx.interests.join(', ') || 'общие'}
Недавние ошибки: ${ctx.recentErrors.slice(0, 3).join(', ') || 'нет'}

ПРАВИЛА:
1. Примеры должны быть на уровне ${ctx.cefrLevel}
2. Объяснения на РУССКОМ, примеры на АНГЛИЙСКОМ с переводом
3. Каждая страница должна иметь чёткую цель
4. Задания должны быть разнообразными (mcq, fill_blank, match)
5. Используй интересы ученика для примеров`,
    },
    { role: 'user', content: prompt },
  ];

  try {
    const response = await generateChatCompletion(messages, {
      ...jsonGenerationConfig,
      temperature: 0.6,
    });

    const parsed = parseGeneratedPages(response.text);
    return parsed;
  } catch (error) {
    console.error('[LessonGenerator] AI generation failed:', error);
    // Return fallback pages
    return generateFallbackPages(template, microTopic, ctx);
  }
}

function buildLessonGenerationPrompt(
  template: TopicTemplate,
  microTopic: { en: string; ru: string },
  ctx: LessonGenerationContext
): string {
  return `Создай урок "${microTopic.en}" (${microTopic.ru}) для уровня ${ctx.cefrLevel}.

СТРУКТУРА УРОКА (5-7 страниц):

1. HOOK (тип: hook)
   - Интересный факт или ситуация
   - Почему это важно знать
   - 1-2 коротких абзаца

2. THEORY (тип: theory)
   - Основное правило
   - Формула/структура
   - 1 совет + 1 предупреждение

3. EXAMPLES (тип: examples)
   - 4-5 примеров с переводом
   - Используй интересы: ${ctx.interests.join(', ') || 'музыка, путешествия'}
   - Highlight ключевые слова

4. CHECK (тип: check)
   - 2 MCQ вопроса на понимание
   - Простые, не ловушки

5. PRACTICE (тип: practice)
   - 3-4 задания: mcq, fill_blank, или match
   - Разный уровень сложности

6. MISTAKES (тип: mistakes)
   - 3 частые ошибки
   - Правильно vs Неправильно

7. SUMMARY (тип: summary)
   - Краткое резюме (3 пункта)
   - Gamification: "+3% к grammar!"
   - Совет для практики

Верни JSON массив страниц в формате:
\`\`\`json
{
  "pages": [
    {
      "pageIndex": 0,
      "pageId": "hook",
      "type": "hook",
      "title": "Did you know?",
      "titleRu": "А ты знал?",
      "contentBlocks": [...],
      "interactions": [],
      "hints": [],
      "settings": { "canSkip": true, "minScore": 0, "allowRetry": false, "maxRetries": 0, "showFeedback": false, "showCorrectAnswers": false },
      "state": { "completed": false, "score": 0, "attemptCount": 0, "timeSpentSeconds": 0 }
    },
    ...
  ]
}
\`\`\`

Используй типы contentBlocks: text, heading, example, rule, comparison, tip, warning, list
Используй типы interactions: mcq, fill_blank, match`;
}

function parseGeneratedPages(text: string): LessonPageV3[] {
  try {
    const jsonMatch = text.match(/```json\s*([\s\S]*?)\s*```/);
    const jsonStr = jsonMatch ? jsonMatch[1] : text;
    const parsed = JSON.parse(jsonStr);

    if (parsed.pages && Array.isArray(parsed.pages)) {
      return parsed.pages.map((p: any, idx: number) => ({
        ...p,
        pageIndex: idx,
        state: p.state || { completed: false, score: 0, attemptCount: 0, timeSpentSeconds: 0 },
        settings: p.settings || {
          canSkip: p.type === 'hook' || p.type === 'summary',
          minScore: p.type === 'practice' || p.type === 'check' ? 60 : 0,
          allowRetry: true,
          maxRetries: 3,
          showFeedback: true,
          showCorrectAnswers: true,
        },
      }));
    }

    return [];
  } catch (e) {
    console.error('[LessonGenerator] Failed to parse pages:', e);
    return [];
  }
}

function generateFallbackPages(
  template: TopicTemplate,
  microTopic: { en: string; ru: string },
  ctx: LessonGenerationContext
): LessonPageV3[] {
  // Return minimal fallback pages
  return [
    {
      pageIndex: 0,
      pageId: 'hook',
      type: 'hook',
      title: 'Introduction',
      titleRu: 'Введение',
      contentBlocks: [
        {
          blockId: 'intro_1',
          type: 'text',
          content: `Сегодня мы изучим ${microTopic.ru}. Это важная тема для уровня ${ctx.cefrLevel}.`,
          contentRu: `Сегодня мы изучим ${microTopic.ru}. Это важная тема для уровня ${ctx.cefrLevel}.`,
        },
      ],
      interactions: [],
      hints: [],
      settings: {
        canSkip: true,
        minScore: 0,
        allowRetry: false,
        maxRetries: 0,
        showFeedback: false,
        showCorrectAnswers: false,
      },
      state: { completed: false, score: 0, attemptCount: 0, timeSpentSeconds: 0 },
    },
    {
      pageIndex: 1,
      pageId: 'theory',
      type: 'theory',
      title: 'The Rule',
      titleRu: 'Правило',
      contentBlocks: [
        {
          blockId: 'rule_1',
          type: 'rule',
          content: `${microTopic.en} - основное правило будет здесь.`,
          contentRu: `${microTopic.ru} - основное правило будет здесь.`,
        },
      ],
      interactions: [],
      hints: [],
      settings: {
        canSkip: false,
        minScore: 0,
        allowRetry: false,
        maxRetries: 0,
        showFeedback: false,
        showCorrectAnswers: false,
      },
      state: { completed: false, score: 0, attemptCount: 0, timeSpentSeconds: 0 },
    },
    {
      pageIndex: 2,
      pageId: 'summary',
      type: 'summary',
      title: 'Great job!',
      titleRu: 'Отлично!',
      contentBlocks: [
        {
          blockId: 'summary_1',
          type: 'text',
          content: `Ты изучил ${microTopic.ru}. Продолжай в том же духе!`,
          contentRu: `Ты изучил ${microTopic.ru}. Продолжай в том же духе!`,
        },
      ],
      interactions: [],
      hints: [],
      settings: {
        canSkip: true,
        minScore: 0,
        allowRetry: false,
        maxRetries: 0,
        showFeedback: false,
        showCorrectAnswers: false,
      },
      state: { completed: false, score: 0, attemptCount: 0, timeSpentSeconds: 0 },
    },
  ];
}

// ============================================
// LESSON SERVICE CLASS
// ============================================

export class LessonGeneratorService {
  /**
   * Generate daily lesson for user
   */
  async generateDailyLesson(userId: string): Promise<LessonModalV3 | null> {
    // Get user context
    const ctx = await this.buildUserContext(userId);

    // Select topic
    const selection = selectTopicForUser(ctx);
    if (!selection) {
      console.log('[LessonGenerator] No suitable topic found');
      return null;
    }

    // Generate lesson
    const lesson = await generateLessonFromTemplate(
      selection.template,
      { en: selection.microTopic, ru: selection.microTopicRu },
      ctx
    );

    // Save to DB (optional)
    await this.saveLessonToDb(lesson);

    return lesson;
  }

  /**
   * Generate lesson from specific template
   */
  async generateFromTemplate(
    userId: string,
    templateId: string,
    microTopic?: { en: string; ru: string }
  ): Promise<LessonModalV3 | null> {
    const template = getTemplateById(templateId);
    if (!template) {
      console.error(`[LessonGenerator] Template not found: ${templateId}`);
      return null;
    }

    const ctx = await this.buildUserContext(userId);

    const topic = microTopic || generateMicroTopic(template, ctx);

    return generateLessonFromTemplate(template, topic, ctx);
  }

  /**
   * Build user context for lesson generation
   */
  private async buildUserContext(userId: string): Promise<LessonGenerationContext> {
    const [profile, skillVector, recentLessons] = await Promise.all([
      prisma.profile.findUnique({ where: { userId } }),
      prisma.skillVector.findFirst({
        where: { userId },
        orderBy: { createdAt: 'desc' },
      }),
      prisma.task.findMany({
        where: { userId, status: 'completed' },
        orderBy: { createdAt: 'desc' },
        take: 10,
        select: { type: true },
      }),
    ]);

    // Get recent errors from task attempts
    const recentAttempts = await prisma.taskAttempt.findMany({
      where: { userId, isCorrect: false },
      orderBy: { createdAt: 'desc' },
      take: 10,
    });

    const recentErrors = recentAttempts
      .flatMap(a => {
        const mistakes = a.mistakes as any[];
        return mistakes?.map(m => m.type || m.reason) || [];
      })
      .filter(Boolean);

    // Calculate CEFR level
    const defaultVector: SkillVector = {
      grammar: 0.5, vocabulary: 0.5, pronunciation: 0.5, listening: 0.5,
      speaking: 0.5, slang: 0.5, word_formation: 0.5, fluency: 0.5,
      writing: 0.5, comprehension: 0.5,
    };

    const vector: SkillVector = skillVector ? {
      grammar: Number(skillVector.grammar),
      vocabulary: Number(skillVector.vocabulary),
      pronunciation: Number(skillVector.pronunciation),
      listening: Number(skillVector.listening),
      speaking: Number(skillVector.speaking),
      slang: Number(skillVector.slang),
      word_formation: Number(skillVector.wordFormation),
      fluency: Number(skillVector.fluency),
      writing: Number(skillVector.writing),
      comprehension: Number(skillVector.comprehension),
    } : defaultVector;

    const avg = Object.values(vector).reduce((a, b) => a + b, 0) / 10;
    let cefrLevel: CEFRLevel = 'A1';
    if (avg >= 0.8) cefrLevel = 'C2';
    else if (avg >= 0.65) cefrLevel = 'C1';
    else if (avg >= 0.5) cefrLevel = 'B2';
    else if (avg >= 0.35) cefrLevel = 'B1';
    else if (avg >= 0.2) cefrLevel = 'A2';

    return {
      userId,
      skillVector: vector,
      cefrLevel,
      interests: profile?.interests || [],
      recentErrors,
      learningGoal: profile?.learningGoal || undefined,
      dailyTimeMinutes: profile?.dailyTimeMinutes || 15,
      tasksCompletedToday: 0, // TODO: calculate
      recentTopicIds: recentLessons.map(l => l.type).filter(Boolean),
    };
  }

  /**
   * Save lesson to database
   */
  private async saveLessonToDb(lesson: LessonModalV3): Promise<void> {
    // This would save to a lessons table if it exists
    // For now, we just log
    console.log(`[LessonGenerator] Generated lesson: ${lesson.lessonId}`);
  }
}

export const lessonGeneratorService = new LessonGeneratorService();
