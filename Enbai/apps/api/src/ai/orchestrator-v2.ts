/**
 * AI Orchestrator V2
 *
 * Enhanced teaching orchestrator with:
 * - TutorLoop state machine
 * - Context anchors and memory recap
 * - Dual-model routing (DeepSeek-chat + DeepSeek-R1)
 * - Context preservation guards
 */

import {
  generateChatCompletion,
  isAIAvailable,
  defaultGenerationConfig,
  jsonGenerationConfig,
  ChatMessage,
} from './client';
import {
  buildTutorSystemPromptV2,
  buildContextAnchors,
  buildMemoryContext,
  validateContextUsage,
  TutorLoopState,
  TUTOR_LOOP_TRANSITIONS,
  R1_EVALUATION_PROMPT_V2,
  MemoryRecap,
  buildTopicModalGenerationPrompt,
} from './prompts/tutor-system-v2';
import { detectIntent, createInitialState } from './prompts/teaching-loop';
import { Errors } from '../utils/errors';
import type {
  SkillVector,
  TaskPayload,
  SkillType,
  TeachingState,
  ConversationState,
  TeachingContext,
  UserIntent,
} from '@enbai/types';

// TopicModal is defined locally until types are fully updated
interface TopicModal {
  type: 'topic_modal';
  topicId: string;
  templateId: string;
  pages: any[];
  [key: string]: any;
}

// ============================================
// INTERFACES
// ============================================

interface TeachingChatRequestV2 {
  message: string;
  history: Array<{ role: 'user' | 'assistant'; content: string; metadata?: any }>;
  teachingContext: TeachingContext;
  conversationState: ConversationState;
  previousRecaps?: MemoryRecap[];
}

interface TeachingChatResponseV2 {
  content: string;
  task?: TaskPayload;
  topicModal?: TopicModal;
  newState: ConversationState;
  stateTransition?: {
    from: TutorLoopState | TeachingState;
    to: TutorLoopState | TeachingState;
    reason: string;
  };
  intentDetected: UserIntent;
  memoryRecap: MemoryRecap;
  skillUpdates?: Partial<Record<SkillType, number>>;
  tokensUsed: { input: number; output: number };
  contextValid: boolean;
  contextIssues?: string[];
}

const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 1000;

// ============================================
// AI ORCHESTRATOR V2
// ============================================

export class AIOrchestrator_V2 {
  /**
   * Check if AI is available
   */
  isAvailable(): boolean {
    return isAIAvailable();
  }

  /**
   * Main teaching chat with TutorLoop state machine
   */
  async teachingChat(request: TeachingChatRequestV2): Promise<TeachingChatResponseV2> {
    const { message, history, teachingContext, conversationState, previousRecaps } = request;

    // 1. Detect user intent
    const intentResult = detectIntent(message, conversationState);
    const intent = intentResult.intent;

    console.log(`[TutorV2] Intent: ${intent} (confidence: ${intentResult.confidence})`);
    console.log(`[TutorV2] Current state: ${conversationState.currentState}`);

    // 2. Route based on intent
    if (intent === 'assess' && intentResult.userAnswer) {
      return this.handleAssessment(request, intentResult.userAnswer as string);
    }

    if (intent === 'simplify') {
      return this.handleSimplify(request);
    }

    if (intent === 'repair') {
      return this.handleRepair(request, intentResult.repairTarget);
    }

    // 3. Main teaching flow
    return this.handleTeaching(request, intent);
  }

  /**
   * Handle main teaching flow with context anchors
   */
  private async handleTeaching(
    request: TeachingChatRequestV2,
    intent: UserIntent
  ): Promise<TeachingChatResponseV2> {
    const { message, history, teachingContext, conversationState, previousRecaps } = request;

    // Build system prompt with context anchors
    const systemPrompt = buildTutorSystemPromptV2(teachingContext);

    // Build memory context from previous recaps
    const memoryContext = previousRecaps ? buildMemoryContext(previousRecaps) : '';

    // Build messages
    const messages: ChatMessage[] = [
      { role: 'system', content: systemPrompt },
    ];

    // Add memory context if available
    if (memoryContext) {
      messages.push({
        role: 'system',
        content: memoryContext,
      });
    }

    // Add history (last 10 messages)
    for (const msg of history.slice(-10)) {
      messages.push({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: msg.content,
      });
    }

    // Add current message with context reminder
    const contextAnchors = buildContextAnchors(teachingContext);
    messages.push({
      role: 'user',
      content: `${contextAnchors}\n\nСообщение ученика: ${message}`,
    });

    // Generate response
    const response = await this.generateWithRetry(messages, defaultGenerationConfig);

    // Parse response
    const parsed = this.parseTeachingResponseV2(response.text);

    // Validate context usage
    const validation = validateContextUsage(response.text, teachingContext);
    if (!validation.valid) {
      console.warn(`[TutorV2] Context issues: ${validation.issues.join(', ')}`);
      // Could trigger re-generation here if critical
    }

    // Determine state transition
    let newState = conversationState;
    let stateTransition: TeachingChatResponseV2['stateTransition'];

    const nextState = parsed.nextState || this.inferNextState(
      conversationState.currentState as TutorLoopState,
      intent,
      parsed.studentUnderstood
    );

    if (nextState && nextState !== conversationState.currentState) {
      if (this.canTransitionV2(conversationState.currentState as TutorLoopState, nextState)) {
        newState = this.updateStateV2(conversationState, nextState, parsed);
        stateTransition = {
          from: conversationState.currentState,
          to: nextState,
          reason: parsed.transitionReason || 'Normal progression',
        };
        console.log(`[TutorV2] State transition: ${conversationState.currentState} → ${nextState}`);
      } else {
        console.warn(`[TutorV2] Invalid transition blocked: ${conversationState.currentState} → ${nextState}`);
      }
    }

    // Build memory recap
    const memoryRecap: MemoryRecap = {
      taughtConcepts: parsed.memoryRecap?.taughtConcepts || [],
      studentUnderstood: parsed.memoryRecap?.studentUnderstood ?? true,
      errorsNoted: parsed.memoryRecap?.errorsNoted || [],
      nextFocus: parsed.memoryRecap?.nextFocus || '',
      simplificationLevel: conversationState.simplificationLevel,
      topicsThisSession: [
        ...conversationState.topicsCompletedThisSession,
        ...(parsed.microTopic ? [parsed.microTopic] : []),
      ],
    };

    return {
      content: parsed.text,
      task: parsed.task ? this.enrichTaskPayload(parsed.task) : undefined,
      topicModal: parsed.topicModal,
      newState,
      stateTransition,
      intentDetected: intent,
      memoryRecap,
      skillUpdates: parsed.skillUpdates,
      tokensUsed: {
        input: response.usageMetadata?.promptTokenCount || 0,
        output: response.usageMetadata?.candidatesTokenCount || 0,
      },
      contextValid: validation.valid,
      contextIssues: validation.issues,
    };
  }

  /**
   * Handle assessment with R1 model
   */
  private async handleAssessment(
    request: TeachingChatRequestV2,
    userAnswer: string
  ): Promise<TeachingChatResponseV2> {
    const { teachingContext, conversationState } = request;

    // Build evaluation request
    const evalRequest = `
ОТВЕТ УЧЕНИКА: "${userAnswer}"

КОНТЕКСТ:
- Уровень: ${teachingContext.cefrLevel}
- Текущая тема: ${conversationState.currentMicroTopic || 'не определена'}
- Целевой навык: ${conversationState.currentSkillFocus || teachingContext.weakestSkills[0]}
- Попытка #${conversationState.practiceAttempts + 1}

Оцени ответ по правилам.`;

    // Use R1 model for evaluation (lower temperature)
    const evalConfig = { ...jsonGenerationConfig, temperature: 0.2 };

    const messages: ChatMessage[] = [
      { role: 'system', content: R1_EVALUATION_PROMPT_V2 },
      { role: 'user', content: evalRequest },
    ];

    try {
      const response = await this.generateWithRetry(messages, evalConfig);
      const evaluation = this.parseEvaluationResponse(response.text);

      // Determine next state based on evaluation
      let nextState: TutorLoopState;
      if (evaluation.isCorrect && evaluation.score >= 0.8) {
        nextState = 'REVIEW';
      } else if (evaluation.score >= 0.5) {
        nextState = 'REVIEW';  // Partial credit, still move on
      } else {
        nextState = conversationState.consecutiveErrors >= 2 ? 'ADAPT' : 'PRACTICE';
      }

      const newState = this.updateStateV2(conversationState, nextState, {
        practiceAttempts: conversationState.practiceAttempts + 1,
        consecutiveErrors: evaluation.isCorrect ? 0 : conversationState.consecutiveErrors + 1,
      });

      // Build feedback message
      const feedbackContent = this.buildFeedbackMessage(evaluation);

      const memoryRecap: MemoryRecap = {
        taughtConcepts: [],
        studentUnderstood: evaluation.isCorrect,
        errorsNoted: evaluation.errors.map(e => e.what),
        nextFocus: evaluation.isCorrect ? 'next topic' : 'retry or adapt',
        simplificationLevel: conversationState.simplificationLevel,
        topicsThisSession: conversationState.topicsCompletedThisSession,
      };

      return {
        content: feedbackContent,
        newState,
        stateTransition: {
          from: conversationState.currentState,
          to: nextState,
          reason: evaluation.isCorrect ? 'Correct answer' : 'Needs feedback',
        },
        intentDetected: 'assess',
        memoryRecap,
        skillUpdates: evaluation.skillDeltas,
        tokensUsed: {
          input: response.usageMetadata?.promptTokenCount || 0,
          output: response.usageMetadata?.candidatesTokenCount || 0,
        },
        contextValid: true,
      };
    } catch (error) {
      console.error('[TutorV2] Evaluation failed:', error);
      // Fallback
      const memoryRecap: MemoryRecap = {
        taughtConcepts: [],
        studentUnderstood: false,
        errorsNoted: [],
        nextFocus: 'retry',
        simplificationLevel: conversationState.simplificationLevel,
        topicsThisSession: conversationState.topicsCompletedThisSession,
      };

      return {
        content: 'Давай попробуем ещё раз. Скажи "не понял" если нужна помощь.',
        newState: conversationState,
        intentDetected: 'assess',
        memoryRecap,
        tokensUsed: { input: 0, output: 0 },
        contextValid: true,
      };
    }
  }

  /**
   * Handle simplification request
   */
  private async handleSimplify(
    request: TeachingChatRequestV2
  ): Promise<TeachingChatResponseV2> {
    const { teachingContext, conversationState } = request;

    // Increase simplification level
    const newSimplificationLevel = Math.min(2, conversationState.simplificationLevel + 1) as 0 | 1 | 2;

    const newState = this.updateStateV2(conversationState, 'ADAPT', {
      simplificationLevel: newSimplificationLevel,
    });

    // Build simplified explanation request
    const systemPrompt = buildTutorSystemPromptV2({
      ...teachingContext,
      conversationState: newState,
    });

    const simplifyInstruction = `
УЧЕНИК НЕ ПОНЯЛ. ОБЪЯСНИ ПРОЩЕ (уровень упрощения: ${newSimplificationLevel + 1}/3):

${newSimplificationLevel === 1 ? '- Используй более простые слова\n- Больше примеров\n- Короче предложения' : ''}
${newSimplificationLevel === 2 ? '- МАКСИМАЛЬНО простой язык\n- Только базовые примеры\n- Визуальные аналогии' : ''}

Тема: ${conversationState.currentMicroTopic || teachingContext.weakestSkills[0]}
`;

    const messages: ChatMessage[] = [
      { role: 'system', content: systemPrompt },
      { role: 'system', content: simplifyInstruction },
      { role: 'user', content: 'Объясни проще, я не понял.' },
    ];

    const response = await this.generateWithRetry(messages, defaultGenerationConfig);
    const parsed = this.parseTeachingResponseV2(response.text);

    const memoryRecap: MemoryRecap = {
      taughtConcepts: parsed.memoryRecap?.taughtConcepts || [],
      studentUnderstood: false,
      errorsNoted: [],
      nextFocus: 'simplified explanation',
      simplificationLevel: newSimplificationLevel,
      topicsThisSession: conversationState.topicsCompletedThisSession,
    };

    return {
      content: parsed.text,
      newState,
      stateTransition: {
        from: conversationState.currentState,
        to: 'ADAPT',
        reason: 'Simplification requested',
      },
      intentDetected: 'simplify',
      memoryRecap,
      tokensUsed: {
        input: response.usageMetadata?.promptTokenCount || 0,
        output: response.usageMetadata?.candidatesTokenCount || 0,
      },
      contextValid: true,
    };
  }

  /**
   * Handle repair request (go back)
   */
  private async handleRepair(
    request: TeachingChatRequestV2,
    repairTarget?: 'topic' | 'lesson' | 'conversation'
  ): Promise<TeachingChatResponseV2> {
    const { conversationState } = request;

    let targetState: TutorLoopState = 'GOAL_ALIGN';

    if (repairTarget === 'topic') {
      targetState = 'GOAL_ALIGN';
    } else if (repairTarget === 'lesson') {
      targetState = 'TEACH';
    }

    const newState = this.updateStateV2(conversationState, targetState, {
      simplificationLevel: 0,
      consecutiveErrors: 0,
    });

    const memoryRecap: MemoryRecap = {
      taughtConcepts: [],
      studentUnderstood: true,
      errorsNoted: [],
      nextFocus: targetState === 'GOAL_ALIGN' ? 'new topic selection' : 're-explain',
      simplificationLevel: 0,
      topicsThisSession: conversationState.topicsCompletedThisSession,
    };

    return {
      content: `Хорошо! ${targetState === 'GOAL_ALIGN' ? 'Давай выберем другую тему.' : 'Объясню ещё раз по-другому.'}`,
      newState,
      stateTransition: {
        from: conversationState.currentState,
        to: targetState,
        reason: 'User requested repair',
      },
      intentDetected: 'repair',
      memoryRecap,
      tokensUsed: { input: 0, output: 0 },
      contextValid: true,
    };
  }

  /**
   * Generate topic modal from template
   */
  async generateTopicModal(
    templateId: string,
    topicName: string,
    teachingContext: TeachingContext
  ): Promise<TopicModal | null> {
    const prompt = buildTopicModalGenerationPrompt(templateId, teachingContext, topicName);

    const messages: ChatMessage[] = [
      { role: 'system', content: 'Ты — генератор учебных модалок. Отвечай ТОЛЬКО JSON.' },
      { role: 'user', content: prompt },
    ];

    try {
      const response = await this.generateWithRetry(messages, jsonGenerationConfig);
      const parsed = this.parseTopicModalResponse(response.text);
      return parsed;
    } catch (error) {
      console.error('[TutorV2] Failed to generate topic modal:', error);
      return null;
    }
  }

  // ============================================
  // HELPER METHODS
  // ============================================

  /**
   * Check if transition is valid in TutorLoop
   */
  private canTransitionV2(from: TutorLoopState, to: TutorLoopState): boolean {
    // Also allow legacy state names
    const legacyMap: Record<string, TutorLoopState> = {
      'INTRO': 'WARMUP',
      'DIAGNOSE': 'GOAL_ALIGN',
      'EXPLAIN': 'TEACH',
      'FEEDBACK': 'REVIEW',
      'NEXT': 'NEXT_STEP',
      'FREE_CHAT': 'WARMUP',
    };

    const normalizedFrom = legacyMap[from] || from;
    const normalizedTo = legacyMap[to] || to;

    return TUTOR_LOOP_TRANSITIONS[normalizedFrom]?.includes(normalizedTo) ?? false;
  }

  /**
   * Infer next state based on current state and intent
   */
  private inferNextState(
    current: TutorLoopState,
    intent: UserIntent,
    understood?: boolean
  ): TutorLoopState {
    // Legacy state mapping
    const stateMap: Record<string, TutorLoopState> = {
      'INTRO': 'WARMUP',
      'DIAGNOSE': 'GOAL_ALIGN',
      'EXPLAIN': 'TEACH',
      'CHECK': 'CHECK',
      'PRACTICE': 'PRACTICE',
      'FEEDBACK': 'REVIEW',
      'REVIEW': 'REVIEW',
      'NEXT': 'NEXT_STEP',
      'FREE_CHAT': 'WARMUP',
    };

    const normalizedCurrent = stateMap[current] || current;

    const progressionMap: Record<TutorLoopState, TutorLoopState> = {
      'WARMUP': 'GOAL_ALIGN',
      'GOAL_ALIGN': 'TEACH',
      'TEACH': 'CHECK',
      'CHECK': understood === false ? 'ADAPT' : 'PRACTICE',
      'ADAPT': 'CHECK',
      'PRACTICE': 'REVIEW',
      'REVIEW': 'NEXT_STEP',
      'NEXT_STEP': 'TEACH',
    };

    return progressionMap[normalizedCurrent] || 'TEACH';
  }

  /**
   * Update conversation state for transition
   */
  private updateStateV2(
    current: ConversationState,
    newState: TutorLoopState | TeachingState,
    updates?: Partial<ConversationState> & { microTopic?: string; studentUnderstood?: boolean }
  ): ConversationState {
    return {
      ...current,
      previousState: current.currentState,
      currentState: newState as TeachingState,
      stateEnteredAt: new Date().toISOString(),
      lastInteractionAt: new Date().toISOString(),
      ...(newState === 'TEACH' || newState === 'EXPLAIN' ? { explanationGiven: true } : {}),
      ...(newState === 'CHECK' ? { checkAttempts: 0 } : {}),
      ...(newState === 'PRACTICE' ? { practiceAttempts: 0 } : {}),
      ...(newState === 'GOAL_ALIGN' || newState === 'DIAGNOSE' ? {
        explanationGiven: false,
        checkAttempts: 0,
        practiceAttempts: 0,
      } : {}),
      ...updates,
    };
  }

  /**
   * Parse teaching response with memory recap
   */
  private parseTeachingResponseV2(text: string): {
    text: string;
    task?: any;
    topicModal?: TopicModal;
    nextState?: TutorLoopState;
    transitionReason?: string;
    microTopic?: string;
    targetSkill?: string;
    studentUnderstood?: boolean;
    skillUpdates?: Partial<Record<SkillType, number>>;
    memoryRecap?: Partial<MemoryRecap>;
  } {
    let cleanText = text;
    let task: any;
    let topicModal: TopicModal | undefined;
    let nextState: TutorLoopState | undefined;
    let transitionReason: string | undefined;
    let microTopic: string | undefined;
    let targetSkill: string | undefined;
    let studentUnderstood: boolean | undefined;
    let skillUpdates: Partial<Record<SkillType, number>> | undefined;
    let memoryRecap: Partial<MemoryRecap> | undefined;

    // Extract JSON block
    const jsonMatch = text.match(/```json\s*([\s\S]*?)\s*```/);
    if (jsonMatch) {
      try {
        const parsed = JSON.parse(jsonMatch[1]);
        task = parsed.task;
        topicModal = parsed.type === 'topic_modal' ? parsed : undefined;
        nextState = parsed.nextState as TutorLoopState;
        transitionReason = parsed.transitionReason;
        microTopic = parsed.microTopic;
        targetSkill = parsed.targetSkill;
        studentUnderstood = parsed.memoryRecap?.studentUnderstood;
        skillUpdates = parsed.skillUpdates;
        memoryRecap = parsed.memoryRecap;
        cleanText = text.replace(jsonMatch[0], '').trim();
      } catch (e) {
        console.warn('[TutorV2] Failed to parse JSON block:', e);
      }
    }

    return {
      text: cleanText,
      task,
      topicModal,
      nextState,
      transitionReason,
      microTopic,
      targetSkill,
      studentUnderstood,
      skillUpdates,
      memoryRecap,
    };
  }

  /**
   * Parse evaluation response from R1
   */
  private parseEvaluationResponse(text: string): {
    isCorrect: boolean;
    score: number;
    feedback: { positive: string; gentle_correction?: string; tip?: string };
    errors: Array<{ type: string; what: string; better: string; severity: string }>;
    skillDeltas: Partial<Record<SkillType, number>>;
    encouragement: string;
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
        skillDeltas: eval_.skillDelta
          ? { [eval_.skillDelta.skill]: eval_.skillDelta.delta }
          : {},
        encouragement: eval_.encouragement ?? 'Продолжай в том же духе!',
      };
    } catch (e) {
      console.error('[TutorV2] Failed to parse evaluation:', e);
      return {
        isCorrect: false,
        score: 0,
        feedback: { positive: 'Давай попробуем ещё раз' },
        errors: [],
        skillDeltas: {},
        encouragement: 'Не сдавайся!',
      };
    }
  }

  /**
   * Parse topic modal response
   */
  private parseTopicModalResponse(text: string): TopicModal | null {
    try {
      const jsonMatch = text.match(/```json\s*([\s\S]*?)\s*```/);
      const jsonStr = jsonMatch ? jsonMatch[1] : text;
      const parsed = JSON.parse(jsonStr);

      if (parsed.type === 'topic_modal') {
        return parsed as TopicModal;
      }
      return null;
    } catch (e) {
      console.error('[TutorV2] Failed to parse topic modal:', e);
      return null;
    }
  }

  /**
   * Build feedback message from evaluation
   */
  private buildFeedbackMessage(evaluation: {
    isCorrect: boolean;
    score: number;
    feedback: { positive: string; gentle_correction?: string; tip?: string };
    errors: Array<{ type: string; what: string; better: string; severity: string }>;
    encouragement: string;
  }): string {
    const parts: string[] = [];

    // Always start positive
    parts.push(evaluation.feedback.positive);

    if (!evaluation.isCorrect) {
      if (evaluation.feedback.gentle_correction) {
        parts.push(`\n${evaluation.feedback.gentle_correction}`);
      }

      if (evaluation.errors.length > 0) {
        const errorHints = evaluation.errors
          .slice(0, 2)
          .map(e => `• ${e.what} → ${e.better}`)
          .join('\n');
        parts.push(`\n${errorHints}`);
      }
    }

    if (evaluation.feedback.tip) {
      parts.push(`\n💡 ${evaluation.feedback.tip}`);
    }

    parts.push(`\n${evaluation.encouragement}`);

    return parts.join('');
  }

  /**
   * Enrich task payload with required fields
   */
  private enrichTaskPayload(task: any): TaskPayload {
    return {
      id: crypto.randomUUID(),
      templateId: task.templateId || 'multiple_choice_v1',
      schemaVersion: '1.0',
      type: task.type || 'grammar',
      secondaryTypes: task.secondaryTypes,
      difficulty: task.difficulty || 5,
      objectives: task.objectives || [],
      targetSkills: task.targetSkills || [task.type || 'grammar'],
      content: task.content,
      uiHints: task.uiHints || { showTimer: true },
      evaluation: task.evaluation || {
        type: 'auto',
        scoringMethod: 'exact',
        skillWeights: { [task.type || 'grammar']: 1.0 },
      },
      expectedTimeSeconds: task.expectedTimeSeconds || 60,
      createdAt: new Date().toISOString(),
      generatedBy: 'openrouter' as const,
    };
  }

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

  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Initialize a new teaching session
   */
  createTeachingSession(): ConversationState {
    return createInitialState();
  }
}

// Singleton
export const aiOrchestratorV2 = new AIOrchestrator_V2();
