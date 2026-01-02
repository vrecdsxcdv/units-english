/**
 * AI Safety and Validation
 *
 * Features:
 * - JSON extraction and validation
 * - Prompt injection protection
 * - Rate limiting and deduplication
 * - Logging and tracing
 */

import { z } from 'zod';
import crypto from 'crypto';

// ============= JSON VALIDATION =============

/**
 * Extract JSON from AI response (handles code blocks and raw JSON)
 */
export function extractJSON(response: string): {
  success: boolean;
  json?: unknown;
  raw?: string;
  error?: string;
} {
  // Try to find JSON in code block first
  const codeBlockMatch = response.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
  if (codeBlockMatch) {
    try {
      const json = JSON.parse(codeBlockMatch[1]);
      return { success: true, json, raw: codeBlockMatch[1] };
    } catch (e) {
      // Continue to other methods
    }
  }

  // Try to find JSON object directly
  const objectMatch = response.match(/\{[\s\S]*\}/);
  if (objectMatch) {
    try {
      const json = JSON.parse(objectMatch[0]);
      return { success: true, json, raw: objectMatch[0] };
    } catch (e) {
      // Continue to other methods
    }
  }

  // Try to find JSON array directly
  const arrayMatch = response.match(/\[[\s\S]*\]/);
  if (arrayMatch) {
    try {
      const json = JSON.parse(arrayMatch[0]);
      return { success: true, json, raw: arrayMatch[0] };
    } catch (e) {
      return { success: false, error: `JSON parse error: ${e}` };
    }
  }

  return { success: false, error: 'No JSON found in response' };
}

/**
 * Validate extracted JSON against Zod schema
 */
export function validateJSON<T>(
  json: unknown,
  schema: z.ZodSchema<T>
): { success: true; data: T } | { success: false; errors: string[] } {
  const result = schema.safeParse(json);

  if (result.success) {
    return { success: true, data: result.data };
  }

  const errors = result.error.errors.map(
    e => `${e.path.join('.')}: ${e.message}`
  );

  return { success: false, errors };
}

// Evaluation response schema
export const EvaluationSchema = z.object({
  evaluation: z.object({
    isCorrect: z.boolean(),
    score: z.number().min(0).max(1),
    skillScores: z.record(z.string(), z.number().min(0).max(1)).optional(),
    errors: z.array(z.object({
      type: z.string(),
      description: z.string(),
      correction: z.string().optional(),
      skillAffected: z.string().optional(),
      severity: z.enum(['minor', 'moderate', 'major']).optional(),
    })).optional(),
    feedback: z.object({
      summary: z.string(),
      praise: z.string().optional(),
      improvement: z.string().optional(),
    }),
    conceptsToReview: z.array(z.string()).optional(),
    confidence: z.number().min(0).max(1).optional(),
  }),
});

// Planning response schema
export const PlanningSchema = z.object({
  planning: z.object({
    selectedTaskSlug: z.string(),
    reasoning: z.object({
      primaryFocus: z.string(),
      why: z.string(),
      difficultyChoice: z.string().optional(),
      variety: z.string().optional(),
    }),
    alternativeTasks: z.array(z.string()).optional(),
    sessionProgress: z.object({
      tasksCompleted: z.number().optional(),
      estimatedTimeLeft: z.number().optional(),
      recommendation: z.enum(['continue', 'break', 'end_session', 'generate_new']).optional(),
    }).optional(),
    nextConceptToReview: z.string().optional(),
    confidence: z.number().min(0).max(1).optional(),
  }),
});

// Task generation schema
export const TaskGenerationSchema = z.object({
  task: z.object({
    type: z.string(),
    difficulty: z.number().min(0).max(1),
    content: z.object({
      instruction: z.string(),
      question: z.string(),
      options: z.array(z.string()).optional(),
      correctAnswer: z.union([z.string(), z.array(z.string())]).optional(),
      explanation: z.string().optional(),
    }),
    targetSkills: z.array(z.string()),
  }),
});

// ============= PROMPT INJECTION PROTECTION =============

// Dangerous patterns that might indicate prompt injection
const INJECTION_PATTERNS = [
  /ignore\s+(previous|above|all)\s+(instructions?|prompts?)/i,
  /forget\s+(everything|all|your)\s+(instructions?|prompts?)/i,
  /new\s+instructions?:/i,
  /system\s*:\s*/i,
  /\[INST\]/i,
  /\[\/INST\]/i,
  /<\|im_start\|>/i,
  /<\|im_end\|>/i,
  /act\s+as\s+(a\s+)?different/i,
  /pretend\s+(you\s+are|to\s+be)/i,
  /you\s+are\s+now/i,
  /roleplay\s+as/i,
  /jailbreak/i,
  /bypass\s+(safety|filters?|restrictions?)/i,
  /reveal\s+(your|system)\s+(prompt|instructions?)/i,
  /what\s+are\s+your\s+(instructions?|rules?)/i,
];

/**
 * Check if user input might contain prompt injection
 */
export function detectPromptInjection(input: string): {
  isSafe: boolean;
  threats: string[];
  sanitized: string;
} {
  const threats: string[] = [];
  let sanitized = input;

  for (const pattern of INJECTION_PATTERNS) {
    if (pattern.test(input)) {
      threats.push(`Detected pattern: ${pattern.source}`);
      // Replace dangerous content
      sanitized = sanitized.replace(pattern, '[FILTERED]');
    }
  }

  // Check for excessive special characters
  const specialCharRatio = (input.match(/[<>{}[\]|\\]/g) || []).length / input.length;
  if (specialCharRatio > 0.1) {
    threats.push('High special character ratio');
  }

  // Check for very long inputs (potential overflow)
  if (input.length > 5000) {
    threats.push('Input too long');
    sanitized = sanitized.slice(0, 5000) + '...';
  }

  return {
    isSafe: threats.length === 0,
    threats,
    sanitized,
  };
}

/**
 * Sanitize user input before sending to AI
 */
export function sanitizeUserInput(input: string): string {
  // Remove potential control characters
  let sanitized = input.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');

  // Escape potential markdown/formatting that could affect prompts
  sanitized = sanitized.replace(/```/g, '\\`\\`\\`');

  // Limit length
  if (sanitized.length > 5000) {
    sanitized = sanitized.slice(0, 5000);
  }

  return sanitized;
}

// ============= RATE LIMITING & DEDUPLICATION =============

interface RateLimitEntry {
  count: number;
  firstRequest: number;
  lastRequest: number;
}

interface TaskDedupeEntry {
  taskSlug: string;
  timestamp: number;
}

// In-memory stores (in production, use Redis)
const rateLimitStore = new Map<string, RateLimitEntry>();
const taskDedupeStore = new Map<string, TaskDedupeEntry[]>();

const RATE_LIMIT_CONFIG = {
  WINDOW_MS: 60 * 1000,      // 1 minute window
  MAX_REQUESTS: 30,          // Max 30 requests per minute
  TASK_DEDUPE_WINDOW: 5,     // Don't repeat same task within 5 tasks
};

/**
 * Check rate limit for user
 */
export function checkRateLimit(userId: string): {
  allowed: boolean;
  remaining: number;
  resetIn: number;
} {
  const now = Date.now();
  const entry = rateLimitStore.get(userId);

  if (!entry || now - entry.firstRequest > RATE_LIMIT_CONFIG.WINDOW_MS) {
    // New window
    rateLimitStore.set(userId, {
      count: 1,
      firstRequest: now,
      lastRequest: now,
    });
    return {
      allowed: true,
      remaining: RATE_LIMIT_CONFIG.MAX_REQUESTS - 1,
      resetIn: RATE_LIMIT_CONFIG.WINDOW_MS,
    };
  }

  if (entry.count >= RATE_LIMIT_CONFIG.MAX_REQUESTS) {
    const resetIn = RATE_LIMIT_CONFIG.WINDOW_MS - (now - entry.firstRequest);
    return {
      allowed: false,
      remaining: 0,
      resetIn,
    };
  }

  entry.count++;
  entry.lastRequest = now;
  rateLimitStore.set(userId, entry);

  return {
    allowed: true,
    remaining: RATE_LIMIT_CONFIG.MAX_REQUESTS - entry.count,
    resetIn: RATE_LIMIT_CONFIG.WINDOW_MS - (now - entry.firstRequest),
  };
}

/**
 * Check if task was recently assigned (avoid duplicates)
 */
export function checkTaskDedupe(userId: string, taskSlug: string): boolean {
  const entries = taskDedupeStore.get(userId) || [];

  // Check if task was in last N tasks
  const recentTasks = entries.slice(-RATE_LIMIT_CONFIG.TASK_DEDUPE_WINDOW);
  const isDuplicate = recentTasks.some(e => e.taskSlug === taskSlug);

  return !isDuplicate;
}

/**
 * Record task assignment
 */
export function recordTaskAssignment(userId: string, taskSlug: string): void {
  const entries = taskDedupeStore.get(userId) || [];
  entries.push({ taskSlug, timestamp: Date.now() });

  // Keep only last 20 entries
  if (entries.length > 20) {
    entries.shift();
  }

  taskDedupeStore.set(userId, entries);
}

// ============= LOGGING & TRACING =============

interface TraceEntry {
  traceId: string;
  userId: string;
  timestamp: number;
  action: string;
  input?: unknown;
  output?: unknown;
  duration?: number;
  error?: string;
  metadata?: Record<string, unknown>;
}

const traceStore: TraceEntry[] = [];
const MAX_TRACE_ENTRIES = 1000;

/**
 * Generate trace ID
 */
export function generateTraceId(): string {
  return crypto.randomBytes(16).toString('hex');
}

/**
 * Log AI interaction
 */
export function logAIInteraction(entry: Omit<TraceEntry, 'timestamp'>): void {
  const fullEntry: TraceEntry = {
    ...entry,
    timestamp: Date.now(),
  };

  traceStore.push(fullEntry);

  // Trim old entries
  if (traceStore.length > MAX_TRACE_ENTRIES) {
    traceStore.splice(0, traceStore.length - MAX_TRACE_ENTRIES);
  }

  // Also log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[AI Trace ${entry.traceId}] ${entry.action}`, {
      userId: entry.userId,
      duration: entry.duration,
      error: entry.error,
    });
  }
}

/**
 * Get traces for user
 */
export function getTraces(userId: string, limit: number = 50): TraceEntry[] {
  return traceStore
    .filter(e => e.userId === userId)
    .slice(-limit);
}

/**
 * Get trace by ID
 */
export function getTraceById(traceId: string): TraceEntry | undefined {
  return traceStore.find(e => e.traceId === traceId);
}

// ============= RETRY HELPERS =============

/**
 * Retry with exponential backoff
 */
export async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  options: {
    maxRetries: number;
    initialDelayMs: number;
    maxDelayMs: number;
    shouldRetry?: (error: unknown) => boolean;
  }
): Promise<T> {
  let lastError: unknown;
  let delay = options.initialDelayMs;

  for (let attempt = 0; attempt <= options.maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;

      if (options.shouldRetry && !options.shouldRetry(error)) {
        throw error;
      }

      if (attempt < options.maxRetries) {
        await new Promise(resolve => setTimeout(resolve, delay));
        delay = Math.min(delay * 2, options.maxDelayMs);
      }
    }
  }

  throw lastError;
}

/**
 * Check if error is retryable
 */
export function isRetryableError(error: unknown): boolean {
  if (error instanceof Error) {
    const message = error.message.toLowerCase();
    return (
      message.includes('rate limit') ||
      message.includes('timeout') ||
      message.includes('503') ||
      message.includes('502') ||
      message.includes('network')
    );
  }
  return false;
}
