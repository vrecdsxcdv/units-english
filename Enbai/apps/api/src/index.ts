import Fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import rateLimit from '@fastify/rate-limit';
import { config, isDev } from './config';
import { registerJwt } from './utils/jwt';
import { AppError } from './utils/errors';
import { prisma } from './db';

// Routes
import { authRoutes } from './routes/auth.routes';
import { chatRoutes } from './routes/chat.routes';
import { taskRoutes } from './routes/task.routes';
import { onboardingRoutes } from './routes/onboarding.routes';
import { ttsRoutes } from './routes/tts.routes';
import { topicRoutes } from './routes/topic.routes';
import { progressRoutes } from './routes/progress.routes';

async function main() {
  // Create Fastify instance
  const app = Fastify({
    logger: {
      level: isDev ? 'debug' : 'info',
      transport: isDev
        ? {
            target: 'pino-pretty',
            options: {
              colorize: true,
            },
          }
        : undefined,
    },
    // Увеличиваем таймауты для AI запросов
    requestTimeout: 120000, // 2 минуты
    bodyLimit: 10485760, // 10MB
  });

  // Register plugins
  await app.register(cors, {
    origin: config.FRONTEND_URL,
    credentials: true,
  });

  await app.register(helmet, {
    contentSecurityPolicy: false, // Disable for dev
  });

  await app.register(rateLimit, {
    max: 1000, // Убрал ограничение — 1000 запросов в минуту
    timeWindow: '1 minute',
    keyGenerator: (request) => {
      // Rate limit by user ID if authenticated, otherwise by IP
      return (request as any).user?.id || request.ip;
    },
  });

  // Register JWT
  registerJwt(app);

  // Global error handler
  app.setErrorHandler((error, request, reply) => {
    request.log.error(error);

    if (error instanceof AppError) {
      return reply.status(error.statusCode).send({
        success: false,
        error: error.toJSON(),
      });
    }

    // Fastify validation errors
    if (error.validation) {
      return reply.status(400).send({
        success: false,
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Validation failed',
          details: error.validation,
        },
      });
    }

    // Unknown errors
    return reply.status(500).send({
      success: false,
      error: {
        code: 'INTERNAL_ERROR',
        message: isDev ? error.message : 'Internal server error',
      },
    });
  });

  // Health check
  app.get('/health', async () => ({
    status: 'ok',
    timestamp: new Date().toISOString(),
  }));

  // Register routes
  await app.register(authRoutes, { prefix: '/api/auth' });
  await app.register(chatRoutes, { prefix: '/api/chat' });
  await app.register(taskRoutes, { prefix: '/api/tasks' });
  await app.register(onboardingRoutes, { prefix: '/api/onboarding' });
  await app.register(ttsRoutes, { prefix: '/api/tts' });
  await app.register(topicRoutes, { prefix: '/api/topics' });
  await app.register(progressRoutes, { prefix: '/api/progress' });

  // Graceful shutdown
  const signals = ['SIGINT', 'SIGTERM'];
  signals.forEach((signal) => {
    process.on(signal, async () => {
      app.log.info(`Received ${signal}, shutting down...`);
      await app.close();
      await prisma.$disconnect();
      process.exit(0);
    });
  });

  // Start server
  try {
    await app.listen({ port: config.PORT, host: '0.0.0.0' });
    app.log.info(`Server running at http://localhost:${config.PORT}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

main();
