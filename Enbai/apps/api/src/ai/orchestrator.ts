import { generateContent, generateChatCompletion, isAIAvailable, defaultGenerationConfig, jsonGenerationConfig, ChatMessage } from './client';
import { buildSystemPrompt, buildUserContext, getTutorMode, estimateLevel } from './prompts/system';
import { buildTaskGenerationPrompt, buildTaskEvaluationPrompt } from './prompts/task';
import {
  buildTeachingSystemPrompt,
  buildTeachingStatePrompt,
  detectIntent,
  canTransition,
  createInitialState,
  updateStateForTransition,
  R1_EVALUATION_PROMPT,
  buildR1EvaluationRequest,
} from './prompts/teaching-loop';
import { Errors } from '../utils/errors';
import { getRandomMockTask, getRandomChatResponse, evaluateMockTask } from './mock-data';
import type {
  SkillVector,
  TaskPayload,
  SkillType,
  TeachingState,
  ConversationState,
  TeachingContext,
  UserIntent,
  DetailedEvaluation,
  LessonModal,
  LessonPage,
  MicroTopic,
} from '@enbai/types';

interface UserContext {
  skillVector: SkillVector;
  learningAbility: number;
  interests: string[];
  dailyTimeMinutes: number;
  tasksCompletedToday: number;
  streak: number;
}

interface ChatRequest {
  message: string;
  history: Array<{ role: 'user' | 'assistant'; content: string }>;
  userContext: UserContext;
}

interface ChatResponse {
  content: string;
  task?: TaskPayload;
  tokensUsed: { input: number; output: number };
}

interface TaskGenerationRequest {
  userContext: UserContext;
  targetSkill?: SkillType | 'auto';
  difficulty?: number | 'auto';
  preferredType?: string;
  topic?: string;
}

interface TaskEvaluationRequest {
  task: any;
  answer: any;
  userContext: UserContext;
}

interface TaskEvaluationResult {
  isCorrect: boolean;
  score: number;
  feedback: string;
  mistakes: any[];
  skillDeltas: Partial<Record<SkillType, number>>;
  encouragement?: string;
}

// ============================================
// TEACHING LOOP INTERFACES
// ============================================

interface TeachingChatRequest {
  message: string;
  history: Array<{ role: 'user' | 'assistant'; content: string }>;
  teachingContext: TeachingContext;
  conversationState: ConversationState;
}

interface TeachingChatResponse {
  content: string;
  task?: TaskPayload;
  lesson?: LessonModal;
  newState: ConversationState;
  stateTransition?: {
    from: TeachingState;
    to: TeachingState;
    reason: string;
  };
  intentDetected: UserIntent;
  skillUpdates?: Partial<Record<SkillType, number>>;
  microTopic?: MicroTopic;
  tokensUsed: { input: number; output: number };
}

interface TeachingEvaluationRequest {
  task: {
    prompt: string;
    expectedAnswer: string | string[];
    targetSkills: SkillType[];
  };
  studentAnswer: string;
  teachingContext: TeachingContext;
  attemptNumber: number;
  timeSpent: number;
}

const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 1000;

/**
 * AI Orchestrator - manages all AI interactions via OpenRouter
 */
export class AIOrchestrator {
  /**
   * Check if AI is available
   */
  isAvailable(): boolean {
    return isAIAvailable();
  }

  /**
   * Generate chat response with optional task
   */
  async chat(request: ChatRequest): Promise<ChatResponse> {
    // Use mock mode if AI is not available
    if (!this.isAvailable()) {
      return this.mockChat(request);
    }

    // Get user level and tutor mode
    const level = estimateLevel(request.userContext.skillVector);
    const tutorMode = getTutorMode(level);

    // Build SEPARATE system prompt and user context
    const systemPrompt = buildSystemPrompt(tutorMode, level);
    const isFirstMessage = request.history.length === 0;
    const userContext = buildUserContext({ ...request.userContext, isFirstMessage });

    // Build messages for chat
    const messages: ChatMessage[] = [
      { role: 'system', content: systemPrompt },
    ];

    // Add history (last 10 messages)
    for (const msg of request.history.slice(-10)) {
      messages.push({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: msg.content,
      });
    }

    // Add user context + current message
    messages.push({
      role: 'user',
      content: `${userContext}\n\nСообщение ученика: ${request.message}`,
    });

    const response = await this.generateWithRetry(messages, defaultGenerationConfig);

    // Parse response for task JSON
    const { text, task } = this.parseResponseWithTask(response.text);

    return {
      content: text,
      task: task ? this.enrichTaskPayload(task) : undefined,
      tokensUsed: {
        input: response.usageMetadata?.promptTokenCount || 0,
        output: response.usageMetadata?.candidatesTokenCount || 0,
      },
    };
  }

  /**
   * Mock chat for development without API key
   */
  private mockChat(request: ChatRequest): ChatResponse {
    const message = request.message.toLowerCase();

    // Detect if user wants a task
    const wantsTask = message.includes('practice') ||
      message.includes('exercise') ||
      message.includes('task') ||
      message.includes('test') ||
      message.includes('learn') ||
      message.includes('help me');

    // Find weak skills
    const weakSkills = Object.entries(request.userContext.skillVector)
      .filter(([_, v]) => v < 0.5)
      .sort((a, b) => a[1] - b[1])
      .map(([k]) => k as SkillType);

    const targetSkill = weakSkills[0] || 'grammar';

    let content = getRandomChatResponse();
    let task: TaskPayload | undefined;

    if (wantsTask) {
      task = getRandomMockTask(targetSkill);

      // Добавляем объяснение перед заданием
      const explanations: Record<string, string> = {
        grammar: `Отлично! Давай попрактикуем грамматику.

Сегодня поработаем с артиклями (a, an, the). Это маленькие слова, но они очень важны!

Правило простое:
- "a" — перед согласными звуками (a book, a cat)
- "an" — перед гласными звуками (an apple, an hour)
- "the" — когда говорим о чём-то конкретном

Примеры:
- I need a pen. (любая ручка)
- I need the pen on the table. (конкретная ручка)

А теперь попробуй сам:`,
        vocabulary: `Отлично! Давай расширим словарный запас.

Сегодня выучим несколько полезных слов. Запоминай не только перевод, но и как слово используется в контексте — это поможет лучше запомнить!

Совет: старайся связать новое слово с чем-то знакомым или придумай ассоциацию.

Вот задание для тебя:`,
      };

      content = explanations[targetSkill] || `Отличная идея! Давай попрактикуемся. Вот задание для тебя:`;
    } else if (message.includes('hello') || message.includes('hi') || message.includes('привет') || message.includes('здравствуй')) {
      content = "Привет! Я Enbai — твой персональный репетитор английского. Чем могу помочь? Можешь задать вопрос про английский или написать 'practice' для упражнения.";
    } else if (message.includes('how are you') || message.includes('как дела') || message.includes('как ты')) {
      content = "Отлично, спасибо что спросил! Я здесь чтобы помочь тебе улучшить английский. Хочешь попрактиковаться?";
    } else if (message.includes('что ты умеешь') || message.includes('что можешь')) {
      content = "Я помогу тебе учить английский! Напиши 'practice' для упражнений, или просто пообщайся со мной на английском для практики.";
    }

    return {
      content,
      task,
      tokensUsed: { input: 0, output: 0 },
    };
  }

  /**
   * Generate a new task
   */
  async generateTask(request: TaskGenerationRequest): Promise<TaskPayload> {
    // Use mock mode if AI is not available
    if (!this.isAvailable()) {
      const targetSkill = request.targetSkill === 'auto' ? undefined : request.targetSkill;
      return getRandomMockTask(targetSkill);
    }

    const prompt = buildTaskGenerationPrompt({
      skillVector: request.userContext.skillVector,
      targetSkill: request.targetSkill,
      difficulty: request.difficulty,
      preferredType: request.preferredType,
      topic: request.topic,
      interests: request.userContext.interests,
    });

    const response = await this.generateWithRetry(
      [{ role: 'user', content: prompt }],
      jsonGenerationConfig
    );

    try {
      const parsed = JSON.parse(response.text);
      return this.enrichTaskPayload(parsed);
    } catch (error) {
      console.error('Failed to parse task JSON:', response.text);
      throw Errors.aiError('Failed to generate valid task');
    }
  }

  /**
   * Evaluate a task attempt
   */
  async evaluateTask(request: TaskEvaluationRequest): Promise<TaskEvaluationResult> {
    // Use mock mode if AI is not available
    if (!this.isAvailable()) {
      return evaluateMockTask(request.task, request.answer);
    }

    const userLevel = estimateLevel(request.userContext.skillVector);

    const prompt = buildTaskEvaluationPrompt({
      task: request.task,
      answer: request.answer,
      userLevel,
    });

    const response = await this.generateWithRetry(
      [{ role: 'user', content: prompt }],
      jsonGenerationConfig
    );

    try {
      return JSON.parse(response.text);
    } catch (error) {
      console.error('Failed to parse evaluation JSON:', response.text);
      throw Errors.aiError('Failed to evaluate task');
    }
  }

  // ============================================
  // PRIVATE METHODS
  // ============================================

  /**
   * Generate with retry logic
   */
  private async generateWithRetry(
    messages: ChatMessage[],
    config: typeof defaultGenerationConfig,
    attempt = 1
  ): Promise<any> {
    try {
      return await generateChatCompletion(messages, config);
    } catch (error: any) {
      if (attempt < MAX_RETRIES && this.isRetryable(error)) {
        await this.sleep(RETRY_DELAY_MS * attempt);
        return this.generateWithRetry(messages, config, attempt + 1);
      }

      if (error.message?.includes('quota') || error.message?.includes('rate')) {
        throw Errors.aiError('AI service is temporarily unavailable. Please try again.');
      }

      throw Errors.aiError(error.message || 'AI generation failed');
    }
  }

  /**
   * Check if error is retryable
   */
  private isRetryable(error: any): boolean {
    const message = error.message?.toLowerCase() || '';
    return (
      message.includes('rate') ||
      message.includes('timeout') ||
      message.includes('unavailable') ||
      message.includes('500') ||
      message.includes('503')
    );
  }

  /**
   * Parse response and extract task if present
   */
  private parseResponseWithTask(text: string): { text: string; task?: any } {
    // Look for JSON code block with task
    const jsonMatch = text.match(/```json\s*(\{[\s\S]*?"task"[\s\S]*?\})\s*```/);

    if (jsonMatch) {
      try {
        const parsed = JSON.parse(jsonMatch[1]);
        const cleanText = text.replace(jsonMatch[0], '').trim();
        return {
          text: cleanText,
          task: parsed.task || parsed,
        };
      } catch {
        // JSON parsing failed, return original text
      }
    }

    return { text };
  }

  /**
   * Enrich task payload with required fields
   */
  private enrichTaskPayload(task: any): TaskPayload {
    const now = new Date().toISOString();

    return {
      id: crypto.randomUUID(),
      templateId: task.templateId || task.template_id || 'multiple_choice_v1',
      schemaVersion: '1.0',
      type: task.type || 'grammar',
      secondaryTypes: task.secondaryTypes,
      difficulty: task.difficulty || 5,
      objectives: task.objectives || [],
      targetSkills: task.targetSkills || task.target_skills || [task.type || 'grammar'],
      content: task.content,
      uiHints: task.uiHints || task.ui_hints || { showTimer: true },
      evaluation: task.evaluation || {
        type: 'auto',
        scoringMethod: 'exact',
        skillWeights: { [task.type || 'grammar']: 1.0 },
      },
      expectedTimeSeconds: task.expectedTimeSeconds || task.expected_time_seconds || 60,
      createdAt: now,
      generatedBy: 'openrouter',
    };
  }

  private sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // ============================================
  // TEACHING LOOP METHODS
  // ============================================

  /**
   * Teaching-mode chat with state machine and intent routing
   */
  async teachingChat(request: TeachingChatRequest): Promise<TeachingChatResponse> {
    const { message, history, teachingContext, conversationState } = request;

    // 1. Detect user intent
    const intentResult = detectIntent(message, conversationState);
    const intent = intentResult.intent;

    console.log(`[Teaching] Intent: ${intent} (confidence: ${intentResult.confidence})`);
    console.log(`[Teaching] Current state: ${conversationState.currentState}`);

    // 2. Route based on intent
    if (intent === 'assess' && intentResult.userAnswer) {
      // Use R1 model for evaluation
      return this.handleAssessIntent(request, intentResult.userAnswer as string);
    }

    if (intent === 'simplify') {
      // Increase simplification level and re-explain
      return this.handleSimplifyIntent(request);
    }

    if (intent === 'repair') {
      // Reset to previous state
      return this.handleRepairIntent(request, intentResult.repairTarget);
    }

    // 3. Default: teaching flow with state machine
    return this.handleTeachIntent(request, intent);
  }

  /**
   * Handle teach intent - main teaching flow
   */
  private async handleTeachIntent(
    request: TeachingChatRequest,
    intent: UserIntent
  ): Promise<TeachingChatResponse> {
    const { message, history, teachingContext, conversationState } = request;
    const currentState = conversationState.currentState;

    // Build teaching system prompt
    const level = teachingContext.cefrLevel;
    const systemPrompt = buildTeachingSystemPrompt(level, currentState);

    // Build state-specific instructions
    const statePrompt = buildTeachingStatePrompt(currentState, teachingContext);

    // Build user context
    const userContextStr = this.buildTeachingUserContext(teachingContext);

    // Build messages
    const messages: ChatMessage[] = [
      { role: 'system', content: systemPrompt },
    ];

    // Add state-specific instructions as system message
    messages.push({
      role: 'system',
      content: `ИНСТРУКЦИИ ДЛЯ СОСТОЯНИЯ ${currentState}:\n${statePrompt}`,
    });

    // Add history (last 10 messages)
    for (const msg of history.slice(-10)) {
      messages.push({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: msg.content,
      });
    }

    // Add user context + current message
    messages.push({
      role: 'user',
      content: `${userContextStr}\n\nСообщение ученика: ${message}`,
    });

    // Generate response
    const response = await this.generateWithRetry(messages, defaultGenerationConfig);

    // Parse response
    const parsed = this.parseTeachingResponse(response.text);

    // Determine next state
    let newState = conversationState;
    let stateTransition: TeachingChatResponse['stateTransition'];

    if (parsed.nextState && parsed.nextState !== currentState) {
      const transition = canTransition(currentState, parsed.nextState, conversationState);
      if (transition.allowed) {
        newState = updateStateForTransition(conversationState, parsed.nextState, {
          currentMicroTopic: parsed.microTopic,
          currentSkillFocus: parsed.targetSkill as SkillType,
        });
        stateTransition = {
          from: currentState,
          to: parsed.nextState,
          reason: transition.reason || 'Normal progression',
        };
        console.log(`[Teaching] State transition: ${currentState} → ${parsed.nextState}`);
      } else {
        console.warn(`[Teaching] Invalid transition blocked: ${currentState} → ${parsed.nextState}`);
      }
    }

    return {
      content: parsed.text,
      task: parsed.task ? this.enrichTaskPayload(parsed.task) : undefined,
      newState,
      stateTransition,
      intentDetected: intent,
      microTopic: parsed.microTopic ? {
        id: parsed.microTopic,
        name: parsed.microTopic,
        nameRu: parsed.microTopic,
        parentSkill: (parsed.targetSkill as SkillType) || 'grammar',
        difficulty: 5,
        prerequisites: [],
        keyPoints: [],
        commonMistakes: [],
        examples: [],
      } : undefined,
      tokensUsed: {
        input: response.usageMetadata?.promptTokenCount || 0,
        output: response.usageMetadata?.candidatesTokenCount || 0,
      },
    };
  }

  /**
   * Handle assess intent - evaluate student answer with R1 model
   */
  private async handleAssessIntent(
    request: TeachingChatRequest,
    userAnswer: string
  ): Promise<TeachingChatResponse> {
    const { teachingContext, conversationState } = request;

    // For now, use simple evaluation
    // TODO: Extract actual task from context
    const mockTask = {
      prompt: 'Current task',
      expectedAnswer: '', // Would come from active task
      targetSkills: teachingContext.weakestSkills,
    };

    const evaluationRequest = buildR1EvaluationRequest({
      task: mockTask,
      studentAnswer: userAnswer,
      studentLevel: teachingContext.cefrLevel,
      attemptNumber: conversationState.practiceAttempts + 1,
      timeSpent: 30,
      expectedTime: 60,
    });

    // Use lower temperature for evaluation
    const evalConfig = { ...jsonGenerationConfig, temperature: 0.2 };

    const messages: ChatMessage[] = [
      { role: 'system', content: R1_EVALUATION_PROMPT },
      { role: 'user', content: evaluationRequest },
    ];

    try {
      const response = await this.generateWithRetry(messages, evalConfig);
      const evaluation = this.parseEvaluationResponse(response.text);

      // Determine next state based on evaluation
      let nextState: TeachingState;
      if (evaluation.isCorrect && evaluation.score >= 0.8) {
        nextState = 'REVIEW';
      } else if (evaluation.score >= 0.5) {
        nextState = 'FEEDBACK';
      } else {
        nextState = conversationState.consecutiveErrors >= 2 ? 'EXPLAIN' : 'FEEDBACK';
      }

      const newState = updateStateForTransition(conversationState, nextState, {
        practiceAttempts: conversationState.practiceAttempts + 1,
        consecutiveErrors: evaluation.isCorrect ? 0 : conversationState.consecutiveErrors + 1,
      });

      // Build feedback message
      const feedbackContent = this.buildFeedbackMessage(evaluation);

      return {
        content: feedbackContent,
        newState,
        stateTransition: {
          from: conversationState.currentState,
          to: nextState,
          reason: evaluation.isCorrect ? 'Correct answer' : 'Needs feedback',
        },
        intentDetected: 'assess',
        skillUpdates: evaluation.skillDeltas,
        tokensUsed: {
          input: response.usageMetadata?.promptTokenCount || 0,
          output: response.usageMetadata?.candidatesTokenCount || 0,
        },
      };
    } catch (error) {
      console.error('[Teaching] Evaluation failed:', error);
      // Fallback to simple feedback
      return {
        content: 'Давай проверим твой ответ... Попробуй ещё раз или скажи "не понял" если нужна помощь.',
        newState: conversationState,
        intentDetected: 'assess',
        tokensUsed: { input: 0, output: 0 },
      };
    }
  }

  /**
   * Handle simplify intent - re-explain at lower complexity
   */
  private async handleSimplifyIntent(
    request: TeachingChatRequest
  ): Promise<TeachingChatResponse> {
    const { teachingContext, conversationState } = request;

    // Increase simplification level
    const newSimplificationLevel = Math.min(2, conversationState.simplificationLevel + 1) as 0 | 1 | 2;

    const newState = updateStateForTransition(conversationState, 'EXPLAIN', {
      simplificationLevel: newSimplificationLevel,
    });

    // Build simplified prompt
    const level = teachingContext.cefrLevel;
    const systemPrompt = buildTeachingSystemPrompt(level, 'EXPLAIN');

    const simplifyInstruction = `
УЧЕНИК НЕ ПОНЯЛ. ОБЪЯСНИ ПРОЩЕ (уровень упрощения: ${newSimplificationLevel + 1}/3):
${newSimplificationLevel === 1 ? '- Используй более простые слова\n- Больше примеров\n- Короче предложения' : ''}
${newSimplificationLevel === 2 ? '- Максимально простой язык\n- Только базовые примеры\n- Визуальные аналогии если возможно' : ''}

Тема: ${conversationState.currentMicroTopic || teachingContext.weakestSkills[0]}
`;

    const messages: ChatMessage[] = [
      { role: 'system', content: systemPrompt },
      { role: 'system', content: simplifyInstruction },
      { role: 'user', content: 'Объясни проще, я не понял.' },
    ];

    const response = await this.generateWithRetry(messages, defaultGenerationConfig);
    const parsed = this.parseTeachingResponse(response.text);

    return {
      content: parsed.text,
      newState,
      stateTransition: {
        from: conversationState.currentState,
        to: 'EXPLAIN',
        reason: 'Simplification requested',
      },
      intentDetected: 'simplify',
      tokensUsed: {
        input: response.usageMetadata?.promptTokenCount || 0,
        output: response.usageMetadata?.candidatesTokenCount || 0,
      },
    };
  }

  /**
   * Handle repair intent - go back to previous state/topic
   */
  private async handleRepairIntent(
    request: TeachingChatRequest,
    repairTarget?: 'topic' | 'lesson' | 'conversation'
  ): Promise<TeachingChatResponse> {
    const { conversationState } = request;

    let targetState: TeachingState = conversationState.previousState || 'DIAGNOSE';

    if (repairTarget === 'topic') {
      targetState = 'DIAGNOSE';
    } else if (repairTarget === 'lesson') {
      targetState = 'EXPLAIN';
    }

    const newState = updateStateForTransition(conversationState, targetState, {
      simplificationLevel: 0,
      consecutiveErrors: 0,
    });

    return {
      content: `Хорошо, давай вернёмся назад. ${targetState === 'DIAGNOSE' ? 'Выберем другую тему.' : 'Объясню ещё раз.'}`,
      newState,
      stateTransition: {
        from: conversationState.currentState,
        to: targetState,
        reason: 'User requested repair',
      },
      intentDetected: 'repair',
      tokensUsed: { input: 0, output: 0 },
    };
  }

  /**
   * Build compact user context for teaching
   */
  private buildTeachingUserContext(ctx: TeachingContext): string {
    const skillVectorStr = Object.entries(ctx.skillVector)
      .map(([k, v]) => `${k.slice(0, 4)}:${Math.round(v * 100)}%`)
      .join(' | ');

    return `═══ ПРОФИЛЬ ═══
Уровень: ${ctx.cefrLevel} | Цель: ${ctx.learningGoal || 'общее улучшение'}
Слабые: ${ctx.weakestSkills.slice(0, 3).join(', ')}
Сильные: ${ctx.strongestSkills.slice(0, 2).join(', ')}
Интересы: ${ctx.interests.join(', ') || 'не указаны'}

═══ SKILL VECTOR ═══
${skillVectorStr}

═══ СЕССИЯ ═══
Заданий сегодня: ${ctx.tasksCompletedToday} | Серия: ${ctx.streak} дней
Времени осталось: ${ctx.timeRemainingMinutes} мин
${ctx.recentErrors.length > 0 ? `Недавние ошибки: ${ctx.recentErrors.slice(0, 3).join(', ')}` : ''}

═══ СОСТОЯНИЕ ═══
Текущее: ${ctx.conversationState.currentState}
${ctx.currentMicroTopic ? `Тема: ${ctx.currentMicroTopic.name}` : ''}`;
  }

  /**
   * Parse teaching response and extract structured data
   */
  private parseTeachingResponse(text: string): {
    text: string;
    task?: any;
    nextState?: TeachingState;
    microTopic?: string;
    targetSkill?: string;
  } {
    let cleanText = text;
    let task: any;
    let nextState: TeachingState | undefined;
    let microTopic: string | undefined;
    let targetSkill: string | undefined;

    // Extract JSON block
    const jsonMatch = text.match(/```json\s*([\s\S]*?)\s*```/);
    if (jsonMatch) {
      try {
        const parsed = JSON.parse(jsonMatch[1]);
        task = parsed.task;
        nextState = parsed.nextState as TeachingState;
        microTopic = parsed.microTopic;
        targetSkill = parsed.targetSkill;
        cleanText = text.replace(jsonMatch[0], '').trim();
      } catch (e) {
        console.warn('[Teaching] Failed to parse JSON block:', e);
      }
    }

    return { text: cleanText, task, nextState, microTopic, targetSkill };
  }

  /**
   * Parse evaluation response from R1
   */
  private parseEvaluationResponse(text: string): {
    isCorrect: boolean;
    score: number;
    feedback: { positive: string; correction?: string; tip?: string };
    errors: any[];
    skillDeltas: Partial<Record<SkillType, number>>;
  } {
    try {
      const jsonMatch = text.match(/```json\s*([\s\S]*?)\s*```/);
      const jsonStr = jsonMatch ? jsonMatch[1] : text;
      const parsed = JSON.parse(jsonStr);
      const eval_ = parsed.evaluation || parsed;

      return {
        isCorrect: eval_.isCorrect ?? false,
        score: eval_.score ?? 0,
        feedback: eval_.feedback ?? { positive: 'Ответ принят' },
        errors: eval_.errors ?? [],
        skillDeltas: eval_.skillDelta ? { [eval_.skillDelta.skill]: eval_.skillDelta.delta } : {},
      };
    } catch (e) {
      console.error('[Teaching] Failed to parse evaluation:', e);
      return {
        isCorrect: false,
        score: 0,
        feedback: { positive: 'Давай попробуем ещё раз' },
        errors: [],
        skillDeltas: {},
      };
    }
  }

  /**
   * Build feedback message from evaluation
   */
  private buildFeedbackMessage(evaluation: {
    isCorrect: boolean;
    score: number;
    feedback: { positive: string; correction?: string; tip?: string };
    errors: any[];
  }): string {
    const parts: string[] = [];

    if (evaluation.isCorrect) {
      parts.push(`Отлично! ${evaluation.feedback.positive}`);
    } else {
      parts.push(evaluation.feedback.positive);
      if (evaluation.feedback.correction) {
        parts.push(`\n${evaluation.feedback.correction}`);
      }
    }

    if (evaluation.errors.length > 0) {
      const errorSummary = evaluation.errors
        .slice(0, 2)
        .map(e => `• ${e.what}: ${e.correct}`)
        .join('\n');
      parts.push(`\nОшибки:\n${errorSummary}`);
    }

    if (evaluation.feedback.tip) {
      parts.push(`\nСовет: ${evaluation.feedback.tip}`);
    }

    return parts.join('');
  }

  /**
   * Initialize a new teaching session
   */
  createTeachingSession(): ConversationState {
    return createInitialState();
  }
}

// Singleton instance
export const aiOrchestrator = new AIOrchestrator();

// Export types for external use
export type { TeachingChatRequest, TeachingChatResponse, TeachingEvaluationRequest };
