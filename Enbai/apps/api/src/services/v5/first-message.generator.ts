/**
 * V5 First Message Generator
 *
 * Generates the first AI message after placement test completion.
 * This message combines WARMUP + GOAL_ALIGN + TEACH + CHECK in one response.
 *
 * Key features:
 * - No user input required (auto-generated after onboarding)
 * - Uses skill vector from placement test
 * - Includes micro-lesson on weakest skill
 * - Ends with comprehension check question
 */

import { prisma } from '../../db';
import {
  generateChatCompletion,
  defaultGenerationConfig,
  ChatMessage,
} from '../../ai/client';
import { HumanLayer } from '../../ai/prompts/human-layer';
import type {
  SkillVector,
  SkillType,
  CEFRLevel,
  ConversationState,
  TeachingState,
} from '@enbai/types';

// ============================================
// INTERFACES
// ============================================

export interface FirstMessageContext {
  userId: string;
  skillVector: SkillVector;
  cefrLevel: CEFRLevel;
  learningGoal?: string;
  interests: string[];
  dailyTimeMinutes: number;
  weakestSkills: SkillType[];
  strongestSkills: SkillType[];
}

export interface FirstMessageResult {
  conversationId: string;
  messageId: string;
  content: string;
  conversationState: ConversationState;
}

// ============================================
// FIRST MESSAGE SYSTEM PROMPT
// ============================================

function buildFirstMessageSystemPrompt(ctx: FirstMessageContext): string {
  const hasIELTS = ctx.learningGoal?.toLowerCase().includes('ielts');
  const isLowLevel = ['A1', 'A2'].includes(ctx.cefrLevel);

  const skillStr = Object.entries(ctx.skillVector)
    .sort((a, b) => (a[1] as number) - (b[1] as number))
    .slice(0, 5)
    .map(([k, v]) => `${k}:${Math.round((v as number) * 100)}%`)
    .join(', ');

  return `ТЫ — ENBAI, AI-РЕПЕТИТОР АНГЛИЙСКОГО ЯЗЫКА.

═══════════════════════════════════════════════════════════════
                    КОНТЕКСТ УЧЕНИКА
═══════════════════════════════════════════════════════════════

УРОВЕНЬ: ${ctx.cefrLevel}
ЦЕЛЬ: ${ctx.learningGoal || 'Общее улучшение языка'}
ИНТЕРЕСЫ: ${ctx.interests.join(', ') || 'не указаны'}
ВРЕМЯ В ДЕНЬ: ${ctx.dailyTimeMinutes} минут

SKILL VECTOR: ${skillStr}
СЛАБЫЕ НАВЫКИ: ${ctx.weakestSkills.slice(0, 3).join(', ')}
СИЛЬНЫЕ НАВЫКИ: ${ctx.strongestSkills.slice(0, 3).join(', ')}

═══════════════════════════════════════════════════════════════
                    ТВОЯ ЗАДАЧА
═══════════════════════════════════════════════════════════════

Это ПЕРВОЕ СООБЩЕНИЕ после прохождения placement теста.
Ученик НИЧЕГО не написал — ты начинаешь диалог!

СТРУКТУРА ОТВЕТА (все 4 части в ОДНОМ сообщении):

1. WARMUP (2-3 предложения):
   - Поздравь с прохождением теста
   - "Твой уровень: ${ctx.cefrLevel}"
   - Тёплый тон, без формальностей

2. GOAL_ALIGN (2-3 предложения):
   - "Мы будем работать над: [слабый навык]"
   - Почему это важно
${hasIELTS && isLowLevel ? `   - "IELTS — это цель. Сначала база, потом формат экзамена"` : ''}

3. TEACH (микро-урок, 3-6 предложений):
   - Начни с micro-hook (факт/ситуация/вопрос)
   - Объясни ОДНО простое правило для ${ctx.weakestSkills[0] || 'grammar'}
   - 2 примера НА УРОВНЕ ${ctx.cefrLevel}
${ctx.interests.length > 0 ? `   - Используй интересы: ${ctx.interests.slice(0, 2).join(', ')}` : ''}

4. CHECK (1 вопрос):
   - Простой вопрос на понимание
   - "Попробуй: [вопрос]?"
   - Не экзамен, дружелюбный тон!

═══════════════════════════════════════════════════════════════
                    ПРАВИЛА
═══════════════════════════════════════════════════════════════

ОБЯЗАТЕЛЬНО:
- Объяснения на РУССКОМ
- Примеры на АНГЛИЙСКОМ с переводом
- Дружелюбный тон ("привет", "круто", "давай")
- Короткие предложения${isLowLevel ? ' (особенно для A1-A2!)' : ''}
- Заканчивай вопросом для проверки

ЗАПРЕЩЕНО:
- Markdown разметка (*, **, #, ##, \`\`\`)
- Длинные лекции
- Формальный стиль
- Вопросы о целях/уровне (УЖЕ ИЗВЕСТНЫ!)
- Ожидание ответа перед объяснением
- Эмодзи

ДЛИНА: 8-12 предложений максимум.

═══════════════════════════════════════════════════════════════
                    ПРИМЕР СТРУКТУРЫ
═══════════════════════════════════════════════════════════════

Привет! Отлично справился с тестом. Твой уровень: B1 — это уже солидная база!

Я вижу, что грамматика пока хромает — это нормально, и мы это исправим. Каждый день по 15 минут, и через месяц увидишь результат.

Давай начнём с артиклей — 90% учеников их путают! Правило простое: "the" = "тот самый, конкретный", "a/an" = "какой-то, один из".

Примеры:
"I saw a dog" (какую-то собаку, первый раз вижу)
"The dog was friendly" (та самая собака, о которой говорили)

Попробуй: как будет "Я купил машину. Машина красная"?

${HumanLayer.buildPrompt({
  cefrLevel: ctx.cefrLevel,
  learningGoal: ctx.learningGoal,
  weakestSkills: ctx.weakestSkills,
  dailyTimeMinutes: ctx.dailyTimeMinutes,
})}`;
}

// ============================================
// FIRST MESSAGE GENERATOR CLASS
// ============================================

export class FirstMessageGenerator {
  /**
   * Generate first AI message after onboarding completion
   */
  async generate(userId: string): Promise<FirstMessageResult> {
    // 1. Get user context from DB
    const ctx = await this.buildContext(userId);

    // 2. Generate first message using AI
    const content = await this.generateMessage(ctx);

    // 3. Create conversation and save message
    const result = await this.saveToDb(userId, content, ctx);

    return result;
  }

  /**
   * Build context from user's profile and skill vector
   */
  private async buildContext(userId: string): Promise<FirstMessageContext> {
    const [profile, skillVector] = await Promise.all([
      prisma.profile.findUnique({ where: { userId } }),
      prisma.skillVector.findFirst({
        where: { userId },
        orderBy: { createdAt: 'desc' },
      }),
    ]);

    if (!profile) {
      throw new Error('Profile not found for user');
    }

    // Default skill vector if not found
    const defaultVector: SkillVector = {
      grammar: 0.5,
      vocabulary: 0.5,
      pronunciation: 0.5,
      listening: 0.5,
      speaking: 0.5,
      slang: 0.5,
      word_formation: 0.5,
      fluency: 0.5,
      writing: 0.5,
      comprehension: 0.5,
    };

    const vector: SkillVector = skillVector
      ? {
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
        }
      : defaultVector;

    // Calculate CEFR level from average
    const avg = Object.values(vector).reduce((a, b) => a + b, 0) / 10;
    let cefrLevel: CEFRLevel = 'A1';
    if (avg >= 0.8) cefrLevel = 'C2';
    else if (avg >= 0.65) cefrLevel = 'C1';
    else if (avg >= 0.5) cefrLevel = 'B2';
    else if (avg >= 0.35) cefrLevel = 'B1';
    else if (avg >= 0.2) cefrLevel = 'A2';

    // Calculate weakest and strongest skills
    const skillEntries = Object.entries(vector) as [SkillType, number][];
    const sorted = [...skillEntries].sort((a, b) => a[1] - b[1]);
    const weakestSkills = sorted.slice(0, 3).map(([skill]) => skill);
    const strongestSkills = sorted.reverse().slice(0, 3).map(([skill]) => skill);

    return {
      userId,
      skillVector: vector,
      cefrLevel,
      learningGoal: profile.learningGoal || undefined,
      interests: profile.interests || [],
      dailyTimeMinutes: profile.dailyTimeMinutes || 15,
      weakestSkills,
      strongestSkills,
    };
  }

  /**
   * Generate first message content using AI
   */
  private async generateMessage(ctx: FirstMessageContext): Promise<string> {
    const systemPrompt = buildFirstMessageSystemPrompt(ctx);

    const messages: ChatMessage[] = [
      { role: 'system', content: systemPrompt },
      {
        role: 'user',
        content: 'Сгенерируй первое сообщение для ученика после прохождения теста.',
      },
    ];

    const response = await generateChatCompletion(messages, {
      ...defaultGenerationConfig,
      temperature: 0.7,
    });

    return response.text.trim();
  }

  /**
   * Save conversation and message to database
   */
  private async saveToDb(
    userId: string,
    content: string,
    ctx: FirstMessageContext
  ): Promise<FirstMessageResult> {
    // Create initial conversation state
    const initialState: ConversationState = {
      currentState: 'CHECK' as TeachingState, // After first message, we're waiting for CHECK response
      previousState: 'EXPLAIN' as TeachingState,
      currentMicroTopic: ctx.weakestSkills[0] || 'grammar',
      currentSkillFocus: ctx.weakestSkills[0] || 'grammar',
      topicsCompletedThisSession: [],
      consecutiveErrors: 0,
      explanationGiven: true, // TEACH was included in first message
      checkAttempts: 0,
      practiceAttempts: 0,
      simplificationLevel: 0,
      stateEnteredAt: new Date().toISOString(),
      lastInteractionAt: new Date().toISOString(),
    };

    // Create conversation
    const conversation = await prisma.conversation.create({
      data: {
        userId,
        title: 'Первый урок после теста',
        status: 'active',
        messageCount: 1,
        taskCount: 0,
      },
    });

    // Save first AI message
    const message = await prisma.message.create({
      data: {
        conversationId: conversation.id,
        userId,
        role: 'assistant',
        content,
        hasTask: false,
        aiMetadata: {
          model: 'v5-first-message',
          tokensUsed: 0,
          latencyMs: 0,
          cached: false,
          conversationState: JSON.parse(JSON.stringify(initialState)),
          isFirstMessage: true,
          cefrLevel: ctx.cefrLevel,
          targetSkill: ctx.weakestSkills[0],
        },
      },
    });

    return {
      conversationId: conversation.id,
      messageId: message.id,
      content,
      conversationState: initialState,
    };
  }
}

// Singleton export
export const firstMessageGenerator = new FirstMessageGenerator();
