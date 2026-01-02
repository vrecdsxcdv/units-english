import { config } from '../config';

// OpenRouter API configuration
const OPENROUTER_BASE_URL = 'https://openrouter.ai/api/v1';

// Models for different purposes
// DeepSeek - works from Russia, great quality
const MODELS = {
  chat: 'deepseek/deepseek-chat-v3-0324',
  analysis: 'deepseek/deepseek-chat-v3-0324',
};

// Retry configuration
const RETRY_DELAYS = [1000, 2000, 5000]; // ms
const REQUEST_TIMEOUT = 90000; // 90 секунд таймаут для AI запросов

export type ModelType = 'chat' | 'analysis';

export interface GenerationConfig {
  temperature?: number;
  topK?: number;
  topP?: number;
  maxOutputTokens?: number;
  responseMimeType?: string;
  model?: ModelType;
}

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface GenerationResult {
  text: string;
  usageMetadata?: {
    promptTokenCount: number;
    candidatesTokenCount: number;
  };
}

/**
 * Check if AI is available
 */
export function isAIAvailable(): boolean {
  return !!config.OPENROUTER_API_KEY;
}

/**
 * Generate content using OpenRouter
 */
export async function generateContent(
  prompt: string,
  generationConfig: GenerationConfig = defaultGenerationConfig,
  systemPrompt?: string
): Promise<GenerationResult> {
  if (!config.OPENROUTER_API_KEY) {
    throw new Error('AI not configured. Set TOGETHER_API_KEY in .env');
  }

  const messages: ChatMessage[] = [];

  if (systemPrompt) {
    messages.push({ role: 'system', content: systemPrompt });
  }

  messages.push({ role: 'user', content: prompt });

  const modelType = generationConfig.model || 'chat';
  const model = MODELS[modelType];

  const response = await fetch(`${OPENROUTER_BASE_URL}/chat/completions`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${config.OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      messages,
      temperature: generationConfig.temperature ?? 0.7,
      top_p: generationConfig.topP ?? 0.95,
      max_tokens: generationConfig.maxOutputTokens ?? 2048,
      ...(generationConfig.responseMimeType === 'application/json' && {
        response_format: { type: 'json_object' },
      }),
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error('OpenRouter error:', response.status, error);
    throw new Error(`OpenRouter error: ${response.status} - ${error}`);
  }

  const data = await response.json() as {
    choices: Array<{ message: { content: string } }>;
    usage?: { prompt_tokens: number; completion_tokens: number };
  };

  return {
    text: data.choices[0]?.message?.content || '',
    usageMetadata: {
      promptTokenCount: data.usage?.prompt_tokens || 0,
      candidatesTokenCount: data.usage?.completion_tokens || 0,
    },
  };
}

/**
 * Sleep helper
 */
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Generate chat completion with history and retry logic
 */
export async function generateChatCompletion(
  messages: ChatMessage[],
  generationConfig: GenerationConfig = defaultGenerationConfig
): Promise<GenerationResult> {
  if (!config.OPENROUTER_API_KEY) {
    throw new Error('AI not configured. Set TOGETHER_API_KEY in .env');
  }

  const modelType = generationConfig.model || 'chat';
  const model = MODELS[modelType];

  let lastError: Error | null = null;

  // Retry loop
  for (let attempt = 0; attempt <= RETRY_DELAYS.length; attempt++) {
    try {
      // Таймаут для fetch
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

      const response = await fetch(`${OPENROUTER_BASE_URL}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${config.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model,
          messages,
          temperature: generationConfig.temperature ?? 0.7,
          top_p: generationConfig.topP ?? 0.95,
          max_tokens: generationConfig.maxOutputTokens ?? 2048,
          ...(generationConfig.responseMimeType === 'application/json' && {
            response_format: { type: 'json_object' },
          }),
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      // Handle rate limit with retry
      if (response.status === 429) {
        const retryAfter = response.headers.get('retry-after');
        const waitTime = retryAfter ? parseInt(retryAfter) * 1000 : RETRY_DELAYS[attempt] || 5000;
        console.log(`Rate limited, waiting ${waitTime}ms before retry ${attempt + 1}...`);
        await sleep(waitTime);
        continue;
      }

      if (!response.ok) {
        const error = await response.text();
        console.error('OpenRouter error:', error);
        throw new Error(`OpenRouter error: ${response.status}`);
      }

      const data = await response.json() as {
        choices: Array<{ message: { content: string } }>;
        usage?: { prompt_tokens: number; completion_tokens: number };
      };

      return {
        text: data.choices[0]?.message?.content || '',
        usageMetadata: {
          promptTokenCount: data.usage?.prompt_tokens || 0,
          candidatesTokenCount: data.usage?.completion_tokens || 0,
        },
      };
    } catch (error) {
      lastError = error as Error;
      if (attempt < RETRY_DELAYS.length) {
        console.log(`Request failed, retrying in ${RETRY_DELAYS[attempt]}ms...`);
        await sleep(RETRY_DELAYS[attempt]);
      }
    }
  }

  throw lastError || new Error('Failed after retries');
}

/**
 * Default generation config
 */
export const defaultGenerationConfig: GenerationConfig = {
  temperature: 0.7,
  topK: 40,
  topP: 0.95,
  maxOutputTokens: 2048,
  model: 'chat',
};

/**
 * Generation config for structured output (JSON)
 */
export const jsonGenerationConfig: GenerationConfig = {
  temperature: 0.3,
  topK: 20,
  topP: 0.9,
  maxOutputTokens: 4096,
  responseMimeType: 'application/json',
  model: 'analysis',
};

/**
 * Generation config for creative tasks
 */
export const creativeGenerationConfig: GenerationConfig = {
  temperature: 0.9,
  topK: 50,
  topP: 0.95,
  maxOutputTokens: 2048,
  model: 'chat',
};

/**
 * Generation config for task grading
 */
export const gradingGenerationConfig: GenerationConfig = {
  temperature: 0.2,
  topK: 10,
  topP: 0.9,
  maxOutputTokens: 2048,
  model: 'analysis',
};
