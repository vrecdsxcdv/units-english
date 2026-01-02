/**
 * Dual-AI System Architecture
 *
 * AI-1 (Analytics Engine): Works with DB, updates skillVector, analyzes progress
 * AI-2 (Tutor Chat): Interacts with user, receives context from AI-1
 *
 * Flow:
 * User → AI-2 (Tutor) → Response
 *           ↓ (after interaction)
 *        AI-1 (Analytics) → DB update → skillVector delta
 *           ↓ (next interaction)
 *        AI-2 receives updated context
 */

import { prisma } from '../db';
import {
  generateChatCompletion,
  isAIAvailable,
  defaultGenerationConfig,
  jsonGenerationConfig,
  ChatMessage,
} from './client';
import { buildTutorSystemPromptV2, buildContextAnchors, MemoryRecap } from './prompts/tutor-system-v2';
import {
  buildTutorSystemPromptV3,
  buildMandatoryContextAnchor,
  buildPostOnboardingPrompt,
  validateTutorResponse,
  TutorLoopStateV3,
  TUTOR_LOOP_V3_TRANSITIONS,
  DEFAULT_GUARDRAILS,
  MemoryRecapV3,
  createEmptyMemoryRecap,
} from './prompts/tutor-system-v3';
import type {
  SkillVector,
  SkillType,
  CEFRLevel,
  TeachingContext,
  ConversationState,
  TeachingState,
  RuntimeSignalsV4,
  TutorLoopOverrides,
  SessionMetrics,
} from '@enbai/types';
import {
  computeRuntimeSignalsV4,
  buildOverrideInstruction,
  createEmptySessionMetrics,
  updateSessionMetrics,
  type SessionContext,
} from '../services/v4/runtime-signals.service';

// ============================================
// 10-DIMENSIONAL SKILL VECTOR
// ============================================

export const SKILL_DIMENSIONS: SkillType[] = [
  'grammar',
  'vocabulary',
  'pronunciation',
  'listening',
  'speaking',
  'slang',
  'word_formation',
  'fluency',
  'writing',
  'comprehension',
];

export interface SkillVectorFull {
  grammar: number;        // Грамматика (0-1)
  vocabulary: number;     // Словарный запас (0-1)
  pronunciation: number;  // Произношение (0-1)
  listening: number;      // Понимание на слух (0-1)
  speaking: number;       // Разговорная речь (0-1)
  slang: number;          // Сленг и идиомы (0-1)
  word_formation: number; // Словообразование (0-1)
  fluency: number;        // Беглость речи (0-1)
  writing: number;        // Письменная речь (0-1)
  comprehension: number;  // Общее понимание (0-1)
}

export interface SkillDelta {
  skill: SkillType;
  delta: number;          // -0.05 to +0.05
  reason: string;
  confidence: number;     // 0-1
}

// ============================================
// AI-1: SKILL ANALYTICS ENGINE
// ============================================

/**
 * AI-1 System Prompt - Analytics & DB Operations
 */
const AI1_SYSTEM_PROMPT = `Ты — Skill Analytics Engine для платформы изучения английского.

ТВОЯ РОЛЬ:
- Анализировать ответы пользователя и вычислять изменения навыков
- Определять паттерны ошибок
- Рекомендовать следующие темы для изучения
- Обновлять 10-мерный skill vector

10 ИЗМЕРЕНИЙ SKILL VECTOR:
1. grammar (0-1): Грамматическая корректность
2. vocabulary (0-1): Словарный запас и использование слов
3. pronunciation (0-1): Произношение (для audio tasks)
4. listening (0-1): Понимание на слух
5. speaking (0-1): Устная речь (structure, coherence)
6. slang (0-1): Сленг, идиомы, colloquial expressions
7. word_formation (0-1): Словообразование (prefixes, suffixes)
8. fluency (0-1): Беглость и естественность
9. writing (0-1): Письменная речь (structure, style)
10. comprehension (0-1): Общее понимание контекста

ПРАВИЛА РАСЧЁТА DELTA:
- Правильный ответ быстро: +0.03 to +0.05
- Правильный ответ медленно: +0.01 to +0.02
- Частично правильно: -0.01 to +0.01
- Неправильно (minor error): -0.01 to -0.02
- Неправильно (major error): -0.03 to -0.05
- Повторная ошибка того же типа: удвоить negative delta

ФОРМАТ ОТВЕТА (ТОЛЬКО JSON):
\`\`\`json
{
  "analysis": {
    "taskType": "grammar|vocabulary|speaking|...",
    "difficulty": 1-10,
    "timeSpent": seconds,
    "expectedTime": seconds
  },
  "evaluation": {
    "isCorrect": boolean,
    "score": 0.0-1.0,
    "errorTypes": ["grammar", "vocabulary", ...],
    "errorDetails": [
      {"type": "grammar", "what": "wrong tense", "severity": "moderate"}
    ]
  },
  "skillDeltas": [
    {"skill": "grammar", "delta": 0.02, "reason": "correct use of past tense", "confidence": 0.9},
    {"skill": "vocabulary", "delta": -0.01, "reason": "wrong word choice", "confidence": 0.7}
  ],
  "patterns": {
    "repeatedErrors": ["articles", "prepositions"],
    "improvements": ["verb tenses"],
    "suggestions": ["focus on articles next"]
  },
  "nextTopicRecommendation": {
    "primarySkill": "grammar",
    "microTopic": "articles_a_an_the",
    "reason": "3 errors in last 5 tasks"
  }
}
\`\`\``;

/**
 * AI-1: Skill Analytics Engine
 * Handles all DB operations and skill calculations
 */
export class SkillAnalyticsEngine {
  /**
   * Analyze task attempt and calculate skill deltas
   */
  async analyzeTaskAttempt(params: {
    userId: string;
    taskType: string;
    taskDifficulty: number;
    targetSkills: SkillType[];
    userAnswer: string;
    expectedAnswer: string | string[];
    timeSpent: number;
    expectedTime: number;
    currentSkillVector: SkillVector;
    recentErrors: string[];
  }): Promise<{
    evaluation: {
      isCorrect: boolean;
      score: number;
      feedback: string;
    };
    skillDeltas: SkillDelta[];
    patterns: {
      repeatedErrors: string[];
      improvements: string[];
      suggestions: string[];
    };
    nextTopicRecommendation: {
      primarySkill: SkillType;
      microTopic: string;
      reason: string;
    } | null;
  }> {
    const prompt = `Проанализируй ответ ученика:

ЗАДАНИЕ:
- Тип: ${params.taskType}
- Сложность: ${params.taskDifficulty}/10
- Целевые навыки: ${params.targetSkills.join(', ')}
- Ожидаемое время: ${params.expectedTime}с

ОТВЕТ УЧЕНИКА:
"${params.userAnswer}"

ПРАВИЛЬНЫЙ ОТВЕТ:
${Array.isArray(params.expectedAnswer) ? params.expectedAnswer.join(' | ') : params.expectedAnswer}

ВРЕМЯ ОТВЕТА: ${params.timeSpent}с

ТЕКУЩИЙ SKILL VECTOR:
${Object.entries(params.currentSkillVector)
  .map(([k, v]) => `${k}: ${(v * 100).toFixed(0)}%`)
  .join('\n')}

НЕДАВНИЕ ОШИБКИ:
${params.recentErrors.slice(0, 5).join(', ') || 'нет'}

Проведи анализ и верни JSON.`;

    const messages: ChatMessage[] = [
      { role: 'system', content: AI1_SYSTEM_PROMPT },
      { role: 'user', content: prompt },
    ];

    try {
      const response = await generateChatCompletion(messages, {
        ...jsonGenerationConfig,
        temperature: 0.2, // Low temp for consistent analysis
      });

      const parsed = this.parseAnalyticsResponse(response.text);
      return parsed;
    } catch (error) {
      console.error('[AI-1] Analysis failed:', error);
      // Fallback to simple evaluation
      return this.fallbackAnalysis(params);
    }
  }

  /**
   * Update skill vector in database
   */
  async updateSkillVector(
    userId: string,
    deltas: SkillDelta[]
  ): Promise<SkillVector> {
    // Get current vector
    const current = await prisma.skillVector.findFirst({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });

    if (!current) {
      throw new Error('No skill vector found for user');
    }

    // Apply deltas
    const newVector: Record<string, number> = {
      grammar: Number(current.grammar),
      vocabulary: Number(current.vocabulary),
      pronunciation: Number(current.pronunciation),
      listening: Number(current.listening),
      speaking: Number(current.speaking),
      slang: Number(current.slang),
      wordFormation: Number(current.wordFormation),
      fluency: Number(current.fluency),
      writing: Number(current.writing),
      comprehension: Number(current.comprehension),
    };

    for (const delta of deltas) {
      const key = delta.skill === 'word_formation' ? 'wordFormation' : delta.skill;
      if (key in newVector) {
        newVector[key] = Math.max(0, Math.min(1, newVector[key] + delta.delta));
      }
    }

    // Create new version
    const newSkillVector = await prisma.skillVector.create({
      data: {
        userId,
        grammar: newVector.grammar,
        vocabulary: newVector.vocabulary,
        pronunciation: newVector.pronunciation,
        listening: newVector.listening,
        speaking: newVector.speaking,
        slang: newVector.slang,
        wordFormation: newVector.wordFormation,
        fluency: newVector.fluency,
        writing: newVector.writing,
        comprehension: newVector.comprehension,
        learningAbility: Number(current.learningAbility),
        confidence: Number(current.confidence),
        version: current.version + 1,
        calculationMethod: 'incremental',
      },
    });

    return {
      grammar: Number(newSkillVector.grammar),
      vocabulary: Number(newSkillVector.vocabulary),
      pronunciation: Number(newSkillVector.pronunciation),
      listening: Number(newSkillVector.listening),
      speaking: Number(newSkillVector.speaking),
      slang: Number(newSkillVector.slang),
      word_formation: Number(newSkillVector.wordFormation),
      fluency: Number(newSkillVector.fluency),
      writing: Number(newSkillVector.writing),
      comprehension: Number(newSkillVector.comprehension),
    };
  }

  /**
   * Get user analytics summary for AI-2
   */
  async getUserAnalyticsSummary(userId: string): Promise<{
    skillVector: SkillVector;
    weakestSkills: SkillType[];
    strongestSkills: SkillType[];
    recentErrors: string[];
    errorPatterns: string[];
    recommendedTopics: string[];
    progressTrend: 'improving' | 'stable' | 'declining';
    learningVelocity: number;
  }> {
    // Get current skill vector
    const skillVector = await prisma.skillVector.findFirst({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });

    if (!skillVector) {
      return this.getDefaultAnalyticsSummary();
    }

    // Get recent task attempts for error analysis
    const recentAttempts = await prisma.taskAttempt.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 20,
      include: { task: true },
    });

    // Extract errors
    const recentErrors: string[] = [];
    const errorPatterns: string[] = [];

    for (const attempt of recentAttempts) {
      if (!attempt.isCorrect && attempt.mistakes) {
        const mistakes = attempt.mistakes as any[];
        for (const m of mistakes) {
          if (m.type) recentErrors.push(m.type);
        }
      }
    }

    // Count error frequencies
    const errorCounts: Record<string, number> = {};
    for (const error of recentErrors) {
      errorCounts[error] = (errorCounts[error] || 0) + 1;
    }
    const sortedErrors = Object.entries(errorCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([type]) => type);

    // Calculate weakest/strongest skills
    const skills: [SkillType, number][] = [
      ['grammar', Number(skillVector.grammar)],
      ['vocabulary', Number(skillVector.vocabulary)],
      ['pronunciation', Number(skillVector.pronunciation)],
      ['listening', Number(skillVector.listening)],
      ['speaking', Number(skillVector.speaking)],
      ['slang', Number(skillVector.slang)],
      ['word_formation', Number(skillVector.wordFormation)],
      ['fluency', Number(skillVector.fluency)],
      ['writing', Number(skillVector.writing)],
      ['comprehension', Number(skillVector.comprehension)],
    ];

    const sortedSkills = [...skills].sort((a, b) => a[1] - b[1]);
    const weakestSkills = sortedSkills.slice(0, 3).map(([skill]) => skill);
    const strongestSkills = sortedSkills.reverse().slice(0, 3).map(([skill]) => skill);

    // Calculate progress trend (compare last two vectors)
    const previousVector = await prisma.skillVector.findFirst({
      where: { userId, version: skillVector.version - 1 },
    });

    let progressTrend: 'improving' | 'stable' | 'declining' = 'stable';
    if (previousVector) {
      const avgCurrent = skills.reduce((sum, [_, v]) => sum + v, 0) / 10;
      const avgPrevious = (
        Number(previousVector.grammar) +
        Number(previousVector.vocabulary) +
        Number(previousVector.pronunciation) +
        Number(previousVector.listening) +
        Number(previousVector.speaking) +
        Number(previousVector.slang) +
        Number(previousVector.wordFormation) +
        Number(previousVector.fluency) +
        Number(previousVector.writing) +
        Number(previousVector.comprehension)
      ) / 10;

      if (avgCurrent > avgPrevious + 0.02) progressTrend = 'improving';
      else if (avgCurrent < avgPrevious - 0.02) progressTrend = 'declining';
    }

    return {
      skillVector: {
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
      },
      weakestSkills,
      strongestSkills,
      recentErrors: sortedErrors,
      errorPatterns: sortedErrors.slice(0, 3),
      recommendedTopics: this.getRecommendedTopics(weakestSkills, sortedErrors),
      progressTrend,
      learningVelocity: Number(skillVector.learningAbility),
    };
  }

  // ============================================
  // PRIVATE METHODS
  // ============================================

  private parseAnalyticsResponse(text: string): any {
    try {
      const jsonMatch = text.match(/```json\s*([\s\S]*?)\s*```/);
      const jsonStr = jsonMatch ? jsonMatch[1] : text;
      const parsed = JSON.parse(jsonStr);

      return {
        evaluation: {
          isCorrect: parsed.evaluation?.isCorrect ?? false,
          score: parsed.evaluation?.score ?? 0,
          feedback: this.buildFeedbackFromEvaluation(parsed.evaluation),
        },
        skillDeltas: (parsed.skillDeltas || []).map((d: any) => ({
          skill: d.skill,
          delta: Math.max(-0.05, Math.min(0.05, d.delta)),
          reason: d.reason,
          confidence: d.confidence || 0.8,
        })),
        patterns: parsed.patterns || {
          repeatedErrors: [],
          improvements: [],
          suggestions: [],
        },
        nextTopicRecommendation: parsed.nextTopicRecommendation || null,
      };
    } catch (e) {
      console.error('[AI-1] Failed to parse response:', e);
      throw e;
    }
  }

  private buildFeedbackFromEvaluation(evaluation: any): string {
    if (!evaluation) return 'Ответ принят.';

    if (evaluation.isCorrect) {
      return 'Отлично! Правильный ответ.';
    }

    const errors = evaluation.errorDetails || [];
    if (errors.length === 0) {
      return 'Попробуй ещё раз.';
    }

    const mainError = errors[0];
    return `Почти! Ошибка в ${mainError.type}: ${mainError.what}`;
  }

  private fallbackAnalysis(params: any): any {
    // Simple rule-based fallback
    const isCorrect = params.userAnswer.toLowerCase().trim() ===
      (Array.isArray(params.expectedAnswer)
        ? params.expectedAnswer[0]
        : params.expectedAnswer
      ).toLowerCase().trim();

    return {
      evaluation: {
        isCorrect,
        score: isCorrect ? 1.0 : 0.0,
        feedback: isCorrect ? 'Правильно!' : 'Попробуй ещё раз.',
      },
      skillDeltas: params.targetSkills.map((skill: SkillType) => ({
        skill,
        delta: isCorrect ? 0.02 : -0.01,
        reason: isCorrect ? 'correct answer' : 'incorrect answer',
        confidence: 0.5,
      })),
      patterns: {
        repeatedErrors: [],
        improvements: [],
        suggestions: [],
      },
      nextTopicRecommendation: null,
    };
  }

  private getDefaultAnalyticsSummary(): any {
    return {
      skillVector: {
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
      },
      weakestSkills: ['grammar', 'vocabulary', 'speaking'],
      strongestSkills: ['comprehension', 'listening', 'fluency'],
      recentErrors: [],
      errorPatterns: [],
      recommendedTopics: ['basic_grammar', 'common_vocabulary'],
      progressTrend: 'stable' as const,
      learningVelocity: 0.5,
    };
  }

  private getRecommendedTopics(weakestSkills: SkillType[], errors: string[]): string[] {
    const topics: string[] = [];

    // Map skills to topics
    const skillTopicMap: Record<SkillType, string[]> = {
      grammar: ['articles', 'tenses', 'prepositions', 'conditionals'],
      vocabulary: ['common_words', 'phrasal_verbs', 'collocations'],
      pronunciation: ['vowel_sounds', 'consonant_clusters', 'stress_patterns'],
      listening: ['dictation', 'comprehension', 'note_taking'],
      speaking: ['conversation', 'presentation', 'discussion'],
      slang: ['idioms', 'informal_expressions', 'colloquialisms'],
      word_formation: ['prefixes', 'suffixes', 'compound_words'],
      fluency: ['speed_reading', 'spontaneous_speech', 'linking_words'],
      writing: ['essay_structure', 'email_writing', 'punctuation'],
      comprehension: ['reading_strategies', 'inference', 'main_idea'],
    };

    for (const skill of weakestSkills) {
      const relatedTopics = skillTopicMap[skill] || [];
      topics.push(...relatedTopics.slice(0, 2));
    }

    // Add error-related topics
    for (const error of errors.slice(0, 2)) {
      if (!topics.includes(error)) {
        topics.push(error);
      }
    }

    return topics.slice(0, 5);
  }
}

// ============================================
// AI-2: TUTOR CHAT SYSTEM
// ============================================

/**
 * AI-2: Tutor Chat System V3
 * Interacts with user, receives context from AI-1
 * Now with MANDATORY context anchors, enforced TutorLoop, and self-check
 */
export class TutorChatSystem {
  private analyticsEngine: SkillAnalyticsEngine;
  private useV3Prompts: boolean = true; // Use new V3 system
  private useV4Signals: boolean = true; // V4.1: Enable runtime signals

  // V4.1: Session metrics per user (in-memory, resets on restart)
  private sessionMetricsCache: Map<string, SessionMetrics> = new Map();

  constructor() {
    this.analyticsEngine = new SkillAnalyticsEngine();
  }

  /**
   * V4.1: Get or create session metrics for user
   */
  private getSessionMetrics(userId: string): SessionMetrics {
    if (!this.sessionMetricsCache.has(userId)) {
      this.sessionMetricsCache.set(userId, createEmptySessionMetrics());
    }
    return this.sessionMetricsCache.get(userId)!;
  }

  /**
   * V4.1: Update session metrics after task attempt
   */
  updateSessionMetricsAfterAttempt(
    userId: string,
    result: {
      correct: boolean;
      responseLength: number;
      timeSeconds: number;
      hintsUsed: number;
      retries: number;
      skipped: boolean;
      isCheckTask: boolean;
    }
  ): void {
    const metrics = this.getSessionMetrics(userId);
    const updated = updateSessionMetrics(metrics, result);
    this.sessionMetricsCache.set(userId, updated);
  }

  /**
   * V4.1: Reset session metrics (e.g., after break or new session)
   */
  resetSessionMetrics(userId: string): void {
    this.sessionMetricsCache.set(userId, createEmptySessionMetrics());
  }

  /**
   * Process user message with full context from AI-1
   * V3: Enforced TutorLoop + mandatory context anchors + QA validation
   * V4.1: Runtime signals integration (fatigue + plateau)
   */
  async processMessage(params: {
    userId: string;
    message: string;
    conversationState: ConversationState;
    history: Array<{ role: 'user' | 'assistant'; content: string }>;
    userProfile?: {
      interests: string[];
      dailyTimeMinutes: number;
      learningGoal?: string;
    };
    isPostOnboarding?: boolean;
  }): Promise<{
    response: string;
    newState: ConversationState;
    task?: any;
    memoryRecap: MemoryRecap;
    qaResult?: { validated: boolean; issues: string[] };
    runtimeSignals?: RuntimeSignalsV4; // V4.1: Include signals in response
  }> {
    // 1. Get analytics summary from AI-1
    const analytics = await this.analyticsEngine.getUserAnalyticsSummary(params.userId);

    // 2. Get user profile (interests, goals, etc.)
    const userProfile = params.userProfile || await this.getUserProfile(params.userId);

    // 3. Build teaching context with FULL data (fixed: now includes profile!)
    const teachingContext = this.buildTeachingContextV3(
      params.userId,
      analytics,
      params.conversationState,
      userProfile
    );

    // 4. Detect if this is first message after onboarding
    const isFirstMessage = params.history.length === 0;
    const isPostOnboarding = params.isPostOnboarding || (isFirstMessage && params.conversationState.currentState === 'INTRO');

    // 4.1. V4.1: Compute runtime signals BEFORE building system prompt
    let runtimeSignals: RuntimeSignalsV4 | undefined;
    let overrideInstruction = '';

    if (this.useV4Signals) {
      const sessionContext: SessionContext = {
        userId: params.userId,
        sessionMetrics: this.getSessionMetrics(params.userId),
        currentSkillFocus: params.conversationState.currentSkillFocus,
        // skillStates would come from DB in production - for now we skip plateau detection
      };

      runtimeSignals = computeRuntimeSignalsV4(sessionContext);
      overrideInstruction = buildOverrideInstruction(runtimeSignals.overrides);

      // Log signals for debugging
      if (runtimeSignals.fatigue || runtimeSignals.plateau) {
        console.log('[V4.1] Runtime signals applied:', {
          fatigue: runtimeSignals.fatigue?.level,
          plateau: runtimeSignals.plateau?.plateauType,
          explanation: runtimeSignals.explanation,
        });
      }
    }

    // 5. Build system prompt (V3 with mandatory context anchor IN system prompt)
    let systemPrompt: string;
    if (this.useV3Prompts) {
      systemPrompt = buildTutorSystemPromptV3(teachingContext);
      if (isPostOnboarding) {
        systemPrompt += '\n\n' + buildPostOnboardingPrompt(teachingContext);
      }
    } else {
      // Fallback to V2
      systemPrompt = buildTutorSystemPromptV2(teachingContext);
    }

    // 5.1. V4.1: Add runtime overrides to system prompt
    if (overrideInstruction) {
      systemPrompt += '\n\n' + overrideInstruction;
    }

    // 6. Add AI-1 insights
    const ai1Insights = this.formatAI1Insights(analytics);

    // 7. Build messages - context anchor NOW in system prompt, not user message!
    const messages: ChatMessage[] = [
      { role: 'system', content: systemPrompt },
      { role: 'system', content: ai1Insights },
    ];

    // Add history (last 10 messages)
    for (const msg of params.history.slice(-10)) {
      messages.push({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: msg.content,
      });
    }

    // Add current message (WITHOUT context anchor - it's already in system prompt!)
    messages.push({
      role: 'user',
      content: params.message,
    });

    // 8. Generate response
    let response = await generateChatCompletion(messages, {
      ...defaultGenerationConfig,
      temperature: 0.7,
    });

    // 9. Parse response
    let parsed = this.parseResponseV3(response.text);

    // 10. QA Validation (V3: validate response quality)
    let qaResult: { validated: boolean; issues: string[] } | undefined;
    if (this.useV3Prompts) {
      const validation = validateTutorResponse(
        parsed.text,
        (params.conversationState.currentState as TutorLoopStateV3) || 'WARMUP',
        teachingContext
      );

      qaResult = {
        validated: validation.isValid,
        issues: validation.issues,
      };

      // If must regenerate, try once more with stricter instructions
      if (validation.mustRegenerate) {
        console.log('[AI-2] QA failed, regenerating with stricter prompt');
        const stricterPrompt = systemPrompt + '\n\nВАЖНО: Твой предыдущий ответ не прошёл проверку:\n' +
          validation.issues.map(i => `- ${i}`).join('\n') +
          '\n\nИСПРАВЬ эти проблемы в новом ответе!';

        messages[0] = { role: 'system', content: stricterPrompt };
        response = await generateChatCompletion(messages, {
          ...defaultGenerationConfig,
          temperature: 0.5, // Lower temp for correction
        });
        parsed = this.parseResponseV3(response.text);
      }
    }

    // 11. Update state with V3 logic (enforced transitions)
    // V4.1: Apply forced state from overrides if applicable
    let stateToUse = params.conversationState;
    if (runtimeSignals?.overrides.forceState) {
      console.log(`[V4.1] Forcing state to: ${runtimeSignals.overrides.forceState}`);
      stateToUse = {
        ...params.conversationState,
        currentState: runtimeSignals.overrides.forceState as any,
      };
    }

    const newState = this.updateStateV3(stateToUse, parsed, teachingContext);

    return {
      response: parsed.text,
      newState,
      task: parsed.task,
      memoryRecap: parsed.memoryRecap || createEmptyMemoryRecap(),
      qaResult,
      runtimeSignals, // V4.1: Include runtime signals
    };
  }

  /**
   * Get user profile from DB
   */
  private async getUserProfile(userId: string): Promise<{
    interests: string[];
    dailyTimeMinutes: number;
    learningGoal?: string;
  }> {
    try {
      const profile = await prisma.profile.findUnique({
        where: { userId },
      });

      return {
        interests: profile?.interests || [],
        dailyTimeMinutes: profile?.dailyTimeMinutes || 15,
        learningGoal: profile?.learningGoal || undefined,
      };
    } catch {
      return {
        interests: [],
        dailyTimeMinutes: 15,
        learningGoal: undefined,
      };
    }
  }

  /**
   * Build teaching context V3 - now includes ALL profile data!
   */
  private buildTeachingContextV3(
    userId: string,
    analytics: Awaited<ReturnType<SkillAnalyticsEngine['getUserAnalyticsSummary']>>,
    conversationState: ConversationState,
    userProfile: { interests: string[]; dailyTimeMinutes: number; learningGoal?: string }
  ): TeachingContext {
    const level = this.estimateLevel(analytics.skillVector);

    // Calculate time remaining
    const estimatedMinutesPerTask = 5;
    const tasksCompletedToday = 0; // TODO: get from DB
    const timeRemainingMinutes = Math.max(0, userProfile.dailyTimeMinutes - (tasksCompletedToday * estimatedMinutesPerTask));

    return {
      userId,
      skillVector: analytics.skillVector,
      cefrLevel: level,
      learningAbility: analytics.learningVelocity,
      learningGoal: userProfile.learningGoal, // NOW INCLUDED!
      interests: userProfile.interests,        // NOW INCLUDED!
      dailyTimeMinutes: userProfile.dailyTimeMinutes, // NOW INCLUDED!
      tasksCompletedToday,
      streak: 0, // TODO: calculate from DB
      timeRemainingMinutes,
      recentErrors: analytics.recentErrors,
      conceptsToReview: analytics.errorPatterns,
      conversationState,
      weakestSkills: analytics.weakestSkills,
      strongestSkills: analytics.strongestSkills,
    };
  }

  /**
   * Parse response V3 - extracts structured data from AI response
   */
  private parseResponseV3(text: string): {
    text: string;
    task?: any;
    memoryRecap?: MemoryRecapV3;
    nextState?: TutorLoopStateV3;
    microTopic?: string;
    targetSkill?: string;
    selfCheckPassed?: boolean;
  } {
    let cleanText = text;
    let task: any;
    let memoryRecap: MemoryRecapV3 | undefined;
    let nextState: TutorLoopStateV3 | undefined;
    let microTopic: string | undefined;
    let targetSkill: string | undefined;
    let selfCheckPassed: boolean | undefined;

    // Extract JSON block
    const jsonMatch = text.match(/```json\s*([\s\S]*?)\s*```/);
    if (jsonMatch) {
      try {
        const parsed = JSON.parse(jsonMatch[1]);
        task = parsed.task;
        memoryRecap = parsed.memoryRecap;
        nextState = parsed.nextState as TutorLoopStateV3;
        microTopic = parsed.microTopic;
        targetSkill = parsed.targetSkill;
        selfCheckPassed = parsed.selfCheckPassed;
        cleanText = text.replace(jsonMatch[0], '').trim();
      } catch (e) {
        console.warn('[AI-2] Failed to parse JSON block:', e);
      }
    }

    return { text: cleanText, task, memoryRecap, nextState, microTopic, targetSkill, selfCheckPassed };
  }

  /**
   * Update state V3 - enforced TutorLoop transitions
   */
  private updateStateV3(
    current: ConversationState,
    parsed: ReturnType<typeof this.parseResponseV3>,
    ctx: TeachingContext
  ): ConversationState {
    const currentState = current.currentState as TutorLoopStateV3;
    const requestedNextState = parsed.nextState;

    // Validate transition
    let newState: TutorLoopStateV3 = currentState;
    if (requestedNextState) {
      const allowedTransitions = TUTOR_LOOP_V3_TRANSITIONS[currentState] || [];
      if (allowedTransitions.includes(requestedNextState)) {
        newState = requestedNextState;
        console.log(`[AI-2] State transition: ${currentState} → ${newState}`);
      } else {
        console.warn(`[AI-2] Invalid transition blocked: ${currentState} → ${requestedNextState}`);
        // Auto-determine next state based on rules
        newState = this.autoNextState(currentState, ctx);
      }
    }

    // Update conversation state
    // Note: TutorLoopStateV3 is compatible with TeachingState for the states we use
    return {
      ...current,
      previousState: current.currentState,
      currentState: newState as unknown as TeachingState,
      currentMicroTopic: parsed.microTopic || current.currentMicroTopic,
      currentSkillFocus: (parsed.targetSkill as SkillType) || current.currentSkillFocus,
      explanationGiven: currentState === 'TEACH' || current.explanationGiven,
      simplificationLevel: currentState === 'ADAPT'
        ? Math.min(2, current.simplificationLevel + 1) as 0 | 1 | 2
        : current.simplificationLevel,
      lastInteractionAt: new Date().toISOString(),
    };
  }

  /**
   * Auto-determine next state if AI's suggestion is invalid
   */
  private autoNextState(current: TutorLoopStateV3, ctx: TeachingContext): TutorLoopStateV3 {
    const transitions = TUTOR_LOOP_V3_TRANSITIONS[current];
    if (!transitions || transitions.length === 0) return 'WARMUP';

    // Default: first allowed transition
    return transitions[0];
  }

  /**
   * Handle task submission - sends to AI-1 for analysis
   */
  async handleTaskSubmission(params: {
    userId: string;
    taskId: string;
    answer: string;
    timeSpent: number;
  }): Promise<{
    evaluation: { isCorrect: boolean; score: number; feedback: string };
    skillUpdates: SkillDelta[];
    newSkillVector: SkillVector;
  }> {
    // Get task details
    const task = await prisma.task.findUnique({
      where: { id: params.taskId },
    });

    if (!task) {
      throw new Error('Task not found');
    }

    // Get current skill vector
    const skillVector = await prisma.skillVector.findFirst({
      where: { userId: params.userId },
      orderBy: { createdAt: 'desc' },
    });

    const currentVector: SkillVector = skillVector ? {
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
    } : {
      grammar: 0.5, vocabulary: 0.5, pronunciation: 0.5, listening: 0.5,
      speaking: 0.5, slang: 0.5, word_formation: 0.5, fluency: 0.5,
      writing: 0.5, comprehension: 0.5,
    };

    // Get recent errors
    const recentAttempts = await prisma.taskAttempt.findMany({
      where: { userId: params.userId, isCorrect: false },
      orderBy: { createdAt: 'desc' },
      take: 10,
    });
    const recentErrors = recentAttempts
      .flatMap(a => {
        const mistakes = a.mistakes as any[];
        return mistakes?.map(m => m.type) || [];
      })
      .filter(Boolean);

    // Send to AI-1 for analysis
    const analysis = await this.analyticsEngine.analyzeTaskAttempt({
      userId: params.userId,
      taskType: task.type,
      taskDifficulty: task.difficulty,
      targetSkills: task.targetSkills as SkillType[],
      userAnswer: params.answer,
      expectedAnswer: (task.expectedAnswers as any) || '',
      timeSpent: params.timeSpent,
      expectedTime: task.expectedTimeSeconds || 60,
      currentSkillVector: currentVector,
      recentErrors,
    });

    // Update skill vector in DB
    const newSkillVector = await this.analyticsEngine.updateSkillVector(
      params.userId,
      analysis.skillDeltas
    );

    // Save task attempt
    await prisma.taskAttempt.create({
      data: {
        taskId: params.taskId,
        userId: params.userId,
        answer: { text: params.answer },
        isCorrect: analysis.evaluation.isCorrect,
        score: analysis.evaluation.score,
        feedback: analysis.evaluation.feedback,
        mistakes: analysis.skillDeltas.filter(d => d.delta < 0).map(d => ({
          type: d.skill,
          reason: d.reason,
        })),
        skillDeltas: analysis.skillDeltas.reduce((acc, d) => {
          acc[d.skill] = d.delta;
          return acc;
        }, {} as Record<string, number>),
        timeSpentSeconds: params.timeSpent,
        evaluatedBy: 'ai-1-analytics',
      },
    });

    // Update task status
    await prisma.task.update({
      where: { id: params.taskId },
      data: { status: 'completed' },
    });

    return {
      evaluation: analysis.evaluation,
      skillUpdates: analysis.skillDeltas,
      newSkillVector,
    };
  }

  // ============================================
  // PRIVATE METHODS
  // ============================================

  private buildTeachingContext(
    userId: string,
    analytics: Awaited<ReturnType<SkillAnalyticsEngine['getUserAnalyticsSummary']>>,
    conversationState: ConversationState
  ): TeachingContext {
    const level = this.estimateLevel(analytics.skillVector);

    return {
      userId,
      skillVector: analytics.skillVector,
      cefrLevel: level,
      learningAbility: analytics.learningVelocity,
      interests: [], // TODO: get from profile
      dailyTimeMinutes: 15, // TODO: get from profile
      tasksCompletedToday: 0, // TODO: calculate
      streak: 0, // TODO: calculate
      timeRemainingMinutes: 15,
      recentErrors: analytics.recentErrors,
      conceptsToReview: analytics.errorPatterns,
      conversationState,
      weakestSkills: analytics.weakestSkills,
      strongestSkills: analytics.strongestSkills,
    };
  }

  private formatAI1Insights(analytics: any): string {
    return `
═══════════════════════════════════════════════════════════════
              AI-1 ANALYTICS INSIGHTS
═══════════════════════════════════════════════════════════════

ПРОГРЕСС: ${analytics.progressTrend === 'improving' ? '📈 Улучшается' :
             analytics.progressTrend === 'declining' ? '📉 Снижается' : '➡️ Стабильно'}

СКОРОСТЬ ОБУЧЕНИЯ: ${(analytics.learningVelocity * 100).toFixed(0)}%

ПАТТЕРНЫ ОШИБОК:
${analytics.errorPatterns.length > 0
  ? analytics.errorPatterns.map((e: string) => `• ${e}`).join('\n')
  : '• Нет явных паттернов'}

РЕКОМЕНДУЕМЫЕ ТЕМЫ:
${analytics.recommendedTopics.slice(0, 3).map((t: string) => `• ${t}`).join('\n')}

ИСПОЛЬЗУЙ ЭТИ ДАННЫЕ для персонализации обучения!
═══════════════════════════════════════════════════════════════`;
  }

  private estimateLevel(skillVector: SkillVector): CEFRLevel {
    const avg = Object.values(skillVector).reduce((sum, v) => sum + v, 0) / 10;

    if (avg < 0.2) return 'A1';
    if (avg < 0.35) return 'A2';
    if (avg < 0.5) return 'B1';
    if (avg < 0.65) return 'B2';
    if (avg < 0.8) return 'C1';
    return 'C2';
  }

  private parseResponse(text: string): any {
    let cleanText = text;
    let task: any;
    let memoryRecap: MemoryRecap | undefined;

    const jsonMatch = text.match(/```json\s*([\s\S]*?)\s*```/);
    if (jsonMatch) {
      try {
        const parsed = JSON.parse(jsonMatch[1]);
        task = parsed.task;
        memoryRecap = parsed.memoryRecap;
        cleanText = text.replace(jsonMatch[0], '').trim();
      } catch (e) {
        // Ignore parse errors
      }
    }

    return { text: cleanText, task, memoryRecap };
  }

  private updateState(current: ConversationState, parsed: any): ConversationState {
    return {
      ...current,
      lastInteractionAt: new Date().toISOString(),
    };
  }
}

// ============================================
// AI-3: QUALITY ASSURANCE (SELF-CHECK)
// ============================================

/**
 * AI-3 System Prompt - Teaching Quality Validator
 */
const AI3_SYSTEM_PROMPT = `Ты — контролёр качества обучения (QA).
Твоя задача — проверить, что ответ AI-тьютора ОБУЧАЕТ, а не просто тестирует.

ОБЯЗАТЕЛЬНЫЙ ОБУЧАЮЩИЙ ЦИКЛ:
TEACH → CHECK UNDERSTANDING → ADAPT → PRACTICE → FEEDBACK

ЧЕК-ЛИСТ ПРОВЕРКИ:

1) TEACH (объяснение)
- Есть ли объяснение темы?
- Соответствует ли уровню CEFR?
- Короткое (не лекция)?
- Есть примеры?

2) CHECK UNDERSTANDING (проверка понимания)
- Есть ли вопрос для проверки?
- Идёт ПОСЛЕ объяснения, не вместо?

3) PRACTICE (практика)
- Задания даны ПОСЛЕ объяснения?
- Не больше 3 заданий?

4) УРОВЕНЬ
- Не выходит за пределы CEFR?
- Не использует сложную лексику?

5) КОНТЕКСТ
- Учитывает текущий уровень?
- Учитывает состояние ученика?

ФОРМАТ ОТВЕТА (ТОЛЬКО JSON):
\`\`\`json
{
  "verdict": "pass" | "rewrite",
  "checks": {
    "hasTeaching": boolean,
    "hasExamples": boolean,
    "hasCheckUnderstanding": boolean,
    "practiceAfterExplanation": boolean,
    "matchesCEFRLevel": boolean,
    "usesContext": boolean
  },
  "issues": [
    {"check": "hasTeaching", "problem": "описание проблемы"}
  ],
  "rewrittenResponse": "исправленный ответ (только если verdict=rewrite)"
}
\`\`\`

ВАЖНО:
- Если все проверки пройдены → verdict: "pass"
- Если хотя бы одна проверка НЕ пройдена → verdict: "rewrite" + исправленный ответ
- НЕ добавляй новых тем
- НЕ усложняй
- Сохраняй дружелюбный стиль`;

/**
 * AI-3: Quality Assurance Engine
 * Validates teaching quality of AI-2 responses
 */
export class QualityAssuranceEngine {
  /**
   * Validate AI-2 response for teaching quality
   */
  async validateResponse(params: {
    originalResponse: string;
    userMessage: string;
    cefrLevel: CEFRLevel;
    currentTopic?: string;
    conversationState: ConversationState;
  }): Promise<{
    isValid: boolean;
    issues: Array<{ check: string; problem: string }>;
    correctedResponse?: string;
    checks: {
      hasTeaching: boolean;
      hasExamples: boolean;
      hasCheckUnderstanding: boolean;
      practiceAfterExplanation: boolean;
      matchesCEFRLevel: boolean;
      usesContext: boolean;
    };
  }> {
    const prompt = `Проверь качество ответа AI-тьютора:

УРОВЕНЬ УЧЕНИКА: ${params.cefrLevel}
ТЕКУЩАЯ ТЕМА: ${params.currentTopic || 'не указана'}
СОСТОЯНИЕ: ${params.conversationState.currentState || 'WARMUP'}

СООБЩЕНИЕ УЧЕНИКА:
"${params.userMessage}"

ОТВЕТ ТЬЮТОРА:
"${params.originalResponse}"

Проведи проверку по чек-листу и верни JSON.`;

    const messages: ChatMessage[] = [
      { role: 'system', content: AI3_SYSTEM_PROMPT },
      { role: 'user', content: prompt },
    ];

    try {
      const response = await generateChatCompletion(messages, {
        ...jsonGenerationConfig,
        temperature: 0.1, // Very low temp for consistent QA
      });

      const parsed = this.parseQAResponse(response.text);

      return {
        isValid: parsed.verdict === 'pass',
        issues: parsed.issues || [],
        correctedResponse: parsed.rewrittenResponse,
        checks: parsed.checks || {
          hasTeaching: true,
          hasExamples: true,
          hasCheckUnderstanding: true,
          practiceAfterExplanation: true,
          matchesCEFRLevel: true,
          usesContext: true,
        },
      };
    } catch (error) {
      console.error('[AI-3] QA validation failed:', error);
      // On error, pass through original response
      return {
        isValid: true,
        issues: [],
        checks: {
          hasTeaching: true,
          hasExamples: true,
          hasCheckUnderstanding: true,
          practiceAfterExplanation: true,
          matchesCEFRLevel: true,
          usesContext: true,
        },
      };
    }
  }

  /**
   * Quick heuristic check (no AI call)
   * Use for fast validation before full AI-3 check
   */
  quickCheck(response: string, cefrLevel: CEFRLevel): {
    likelyValid: boolean;
    warnings: string[];
  } {
    const warnings: string[] = [];

    // Check 1: Response too short (likely no teaching)
    if (response.length < 100) {
      warnings.push('Ответ слишком короткий — возможно, нет объяснения');
    }

    // Check 2: Only questions, no explanation
    const sentences = response.split(/[.!?]+/).filter(s => s.trim());
    const questionCount = sentences.filter(s => s.includes('?')).length;
    if (questionCount > sentences.length * 0.7) {
      warnings.push('Слишком много вопросов, мало объяснений');
    }

    // Check 3: Advanced vocabulary for beginners
    if (cefrLevel === 'A1' || cefrLevel === 'A2') {
      const advancedWords = [
        'nevertheless', 'furthermore', 'consequently', 'albeit',
        'notwithstanding', 'hitherto', 'whereby', 'inasmuch',
      ];
      const hasAdvanced = advancedWords.some(word =>
        response.toLowerCase().includes(word)
      );
      if (hasAdvanced) {
        warnings.push('Сложная лексика для начального уровня');
      }
    }

    // Check 4: No examples (look for quotation marks or "например")
    const hasExamples = response.includes('"') ||
                       response.includes('«') ||
                       response.toLowerCase().includes('например') ||
                       response.toLowerCase().includes('example') ||
                       response.includes('→');
    if (!hasExamples && response.length > 200) {
      warnings.push('Нет примеров');
    }

    // Check 5: Too many tasks at once
    const taskIndicators = [
      /\d+\)/g,  // 1) 2) 3)
      /•/g,      // bullet points
      /\[\s*\]/g, // checkboxes
    ];
    let taskCount = 0;
    for (const pattern of taskIndicators) {
      const matches = response.match(pattern);
      if (matches) taskCount += matches.length;
    }
    if (taskCount > 5) {
      warnings.push('Слишком много заданий одновременно');
    }

    return {
      likelyValid: warnings.length === 0,
      warnings,
    };
  }

  /**
   * Parse AI-3 QA response
   */
  private parseQAResponse(text: string): {
    verdict: 'pass' | 'rewrite';
    checks: any;
    issues: Array<{ check: string; problem: string }>;
    rewrittenResponse?: string;
  } {
    try {
      const jsonMatch = text.match(/```json\s*([\s\S]*?)\s*```/);
      const jsonStr = jsonMatch ? jsonMatch[1] : text;
      const parsed = JSON.parse(jsonStr);

      return {
        verdict: parsed.verdict || 'pass',
        checks: parsed.checks || {},
        issues: parsed.issues || [],
        rewrittenResponse: parsed.rewrittenResponse,
      };
    } catch (e) {
      console.error('[AI-3] Failed to parse QA response:', e);
      return {
        verdict: 'pass',
        checks: {},
        issues: [],
      };
    }
  }
}

// ============================================
// BRIDGE: AI-1 ↔ AI-2 ↔ AI-3 COMMUNICATION
// ============================================

/**
 * Bridge between AI-1, AI-2, and AI-3
 * Manages data flow, synchronization, and quality assurance
 *
 * Flow:
 * 1. AI-1 (Analytics) → provides context
 * 2. AI-2 (Tutor) → generates response
 * 3. AI-3 (QA) → validates & corrects if needed
 */
export class AIBridge {
  private ai1: SkillAnalyticsEngine;
  private ai2: TutorChatSystem;
  private ai3: QualityAssuranceEngine;

  // Configuration
  private enableQA: boolean = true;
  private useQuickCheckFirst: boolean = true;
  private maxQARetries: number = 1;

  constructor(options?: {
    enableQA?: boolean;
    useQuickCheckFirst?: boolean;
    maxQARetries?: number;
  }) {
    this.ai1 = new SkillAnalyticsEngine();
    this.ai2 = new TutorChatSystem();
    this.ai3 = new QualityAssuranceEngine();

    if (options) {
      this.enableQA = options.enableQA ?? true;
      this.useQuickCheckFirst = options.useQuickCheckFirst ?? true;
      this.maxQARetries = options.maxQARetries ?? 1;
    }
  }

  /**
   * Get AI-1 instance
   */
  getAnalyticsEngine(): SkillAnalyticsEngine {
    return this.ai1;
  }

  /**
   * Get AI-2 instance
   */
  getTutorChat(): TutorChatSystem {
    return this.ai2;
  }

  /**
   * Get AI-3 instance
   */
  getQAEngine(): QualityAssuranceEngine {
    return this.ai3;
  }

  /**
   * Full interaction flow with QA (V3)
   * 1. Get context from AI-1
   * 2. Process message with AI-2 (now with userProfile!)
   * 3. Validate with AI-3 (if enabled)
   * 4. If task submitted, analyze with AI-1
   * 5. Update DB
   */
  async processInteraction(params: {
    userId: string;
    message: string;
    conversationState: ConversationState;
    history: Array<{ role: 'user' | 'assistant'; content: string }>;
    taskSubmission?: {
      taskId: string;
      answer: string;
      timeSpent: number;
    };
    userProfile?: {
      interests: string[];
      dailyTimeMinutes: number;
      learningGoal?: string;
    };
    isPostOnboarding?: boolean;
  }): Promise<{
    response: string;
    newState: ConversationState;
    task?: any;
    skillUpdates?: SkillDelta[];
    memoryRecap: MemoryRecap;
    qaResult?: {
      validated: boolean;
      corrected: boolean;
      issues: Array<{ check: string; problem: string }>;
    };
  }> {
    // If task submission, process with AI-1 first
    let skillUpdates: SkillDelta[] | undefined;
    if (params.taskSubmission) {
      const taskResult = await this.ai2.handleTaskSubmission({
        userId: params.userId,
        ...params.taskSubmission,
      });
      skillUpdates = taskResult.skillUpdates;
    }

    // Process message with AI-2 (V3: now passing userProfile!)
    let chatResult = await this.ai2.processMessage({
      userId: params.userId,
      message: params.message,
      conversationState: params.conversationState,
      history: params.history,
      userProfile: params.userProfile, // NOW PASSED!
      isPostOnboarding: params.isPostOnboarding, // NOW PASSED!
    });

    // QA validation with AI-3 (if enabled)
    let qaResult: {
      validated: boolean;
      corrected: boolean;
      issues: Array<{ check: string; problem: string }>;
    } | undefined;

    if (this.enableQA && chatResult.response) {
      qaResult = await this.runQAValidation({
        response: chatResult.response,
        userMessage: params.message,
        conversationState: params.conversationState,
      });

      // If QA corrected the response, use the corrected version
      if (qaResult.corrected && qaResult.validated) {
        // The corrected response is already set in qaResult
        // We need to get it from the full QA result
        const fullQA = await this.ai3.validateResponse({
          originalResponse: chatResult.response,
          userMessage: params.message,
          cefrLevel: this.estimateCEFRFromState(params.conversationState),
          conversationState: params.conversationState,
        });

        if (fullQA.correctedResponse) {
          chatResult = {
            ...chatResult,
            response: fullQA.correctedResponse,
          };
        }
      }
    }

    return {
      ...chatResult,
      skillUpdates,
      qaResult,
    };
  }

  /**
   * Run QA validation with quick check fallback
   */
  private async runQAValidation(params: {
    response: string;
    userMessage: string;
    conversationState: ConversationState;
  }): Promise<{
    validated: boolean;
    corrected: boolean;
    issues: Array<{ check: string; problem: string }>;
  }> {
    const cefrLevel = this.estimateCEFRFromState(params.conversationState);

    // Step 1: Quick heuristic check (fast, no AI call)
    if (this.useQuickCheckFirst) {
      const quickResult = this.ai3.quickCheck(params.response, cefrLevel);

      if (quickResult.likelyValid) {
        // Quick check passed, skip full AI-3 validation
        return {
          validated: true,
          corrected: false,
          issues: [],
        };
      }

      // Quick check found warnings, log them
      console.log('[AI-3] Quick check warnings:', quickResult.warnings);
    }

    // Step 2: Full AI-3 validation
    const fullResult = await this.ai3.validateResponse({
      originalResponse: params.response,
      userMessage: params.userMessage,
      cefrLevel,
      conversationState: params.conversationState,
    });

    return {
      validated: fullResult.isValid || !!fullResult.correctedResponse,
      corrected: !!fullResult.correctedResponse,
      issues: fullResult.issues,
    };
  }

  /**
   * Estimate CEFR level from conversation state
   */
  private estimateCEFRFromState(state: ConversationState): CEFRLevel {
    // Try to get from state - ConversationState doesn't have metadata in types
    // but we check it dynamically for forward compatibility
    const stateAny = state as any;
    if (stateAny.metadata?.cefrLevel) {
      return stateAny.metadata.cefrLevel as CEFRLevel;
    }

    // Default to B1 if unknown
    return 'B1';
  }
}

// ============================================
// SINGLETON EXPORTS
// ============================================

export const skillAnalyticsEngine = new SkillAnalyticsEngine();
export const tutorChatSystem = new TutorChatSystem();
export const qualityAssuranceEngine = new QualityAssuranceEngine();
export const aiBridge = new AIBridge();
