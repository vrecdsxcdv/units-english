import { z } from 'zod';
import { config as dotenvConfig } from 'dotenv';
import { resolve } from 'path';

// Load .env file
dotenvConfig({ path: resolve(__dirname, '../.env') });

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.string().default('3001').transform(Number),

  // Database
  DATABASE_URL: z.string().url(),

  // Redis
  REDIS_URL: z.string().url().default('redis://localhost:6379'),

  // JWT
  JWT_ACCESS_SECRET: z.string().min(32),
  JWT_REFRESH_SECRET: z.string().min(32),
  JWT_ACCESS_EXPIRES_IN: z.string().default('15m'),
  JWT_REFRESH_EXPIRES_IN: z.string().default('7d'),

  // AI (OpenRouter)
  OPENROUTER_API_KEY: z.string().optional(),

  // AI (Together AI)
  TOGETHER_API_KEY: z.string().optional(),

  // OpenAI API for TTS
  OPENAI_API_KEY: z.string().optional(),

  // Storage (optional for MVP)
  S3_BUCKET: z.string().optional(),
  S3_REGION: z.string().optional(),
  S3_ACCESS_KEY: z.string().optional(),
  S3_SECRET_KEY: z.string().optional(),

  // Frontend URL for CORS
  FRONTEND_URL: z.string().url().default('http://localhost:3000'),
});

// Parse and validate environment
const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error('Invalid environment variables:');
  console.error(parsed.error.format());
  process.exit(1);
}

export const config = parsed.data;

export const isDev = config.NODE_ENV === 'development';
export const isProd = config.NODE_ENV === 'production';
