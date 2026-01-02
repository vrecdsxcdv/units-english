import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { AuthService } from '../services/auth.service';
import { authenticate, getCurrentUserId } from '../middleware/auth';
import { Errors } from '../utils/errors';

// Validation schemas
const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

const refreshSchema = z.object({
  refreshToken: z.string().min(1),
});

export async function authRoutes(app: FastifyInstance) {
  const authService = new AuthService(app);

  /**
   * POST /auth/register
   */
  app.post('/register', async (request, reply) => {
    const parsed = registerSchema.safeParse(request.body);
    if (!parsed.success) {
      throw Errors.validationError('Invalid input', {
        errors: parsed.error.flatten().fieldErrors,
      });
    }

    const { email, password } = parsed.data;
    const result = await authService.register(email, password);

    return reply.status(201).send({
      success: true,
      data: result,
    });
  });

  /**
   * POST /auth/guest
   * Login as guest (no registration required)
   */
  app.post('/guest', async (request, reply) => {
    const result = await authService.guestLogin();

    return reply.status(201).send({
      success: true,
      data: result,
    });
  });

  /**
   * POST /auth/login
   */
  app.post('/login', async (request, reply) => {
    const parsed = loginSchema.safeParse(request.body);
    if (!parsed.success) {
      throw Errors.validationError('Invalid input', {
        errors: parsed.error.flatten().fieldErrors,
      });
    }

    const { email, password } = parsed.data;
    const result = await authService.login(email, password);

    return reply.send({
      success: true,
      data: result,
    });
  });

  /**
   * POST /auth/refresh
   */
  app.post('/refresh', async (request, reply) => {
    const parsed = refreshSchema.safeParse(request.body);
    if (!parsed.success) {
      throw Errors.validationError('Missing refresh token');
    }

    const tokens = await authService.refresh(parsed.data.refreshToken);

    return reply.send({
      success: true,
      data: tokens,
    });
  });

  /**
   * POST /auth/logout
   */
  app.post(
    '/logout',
    { preHandler: authenticate },
    async (request, reply) => {
      const userId = getCurrentUserId(request);
      await authService.logout(userId);

      return reply.send({
        success: true,
        data: { message: 'Logged out successfully' },
      });
    }
  );

  /**
   * GET /auth/me
   */
  app.get(
    '/me',
    { preHandler: authenticate },
    async (request, reply) => {
      const userId = getCurrentUserId(request);
      const user = await authService.getUser(userId);

      return reply.send({
        success: true,
        data: user,
      });
    }
  );
}
