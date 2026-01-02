import { FastifyRequest, FastifyReply } from 'fastify';
import { Errors } from '../utils/errors';

// Extend FastifyRequest to include user
declare module 'fastify' {
  interface FastifyRequest {
    user?: {
      id: string;
      role: string;
    };
  }
}

/**
 * Authentication middleware - verifies JWT and adds user to request
 */
export async function authenticate(
  request: FastifyRequest,
  reply: FastifyReply
): Promise<void> {
  try {
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw Errors.unauthorized('Missing authorization header');
    }

    const token = authHeader.slice(7);

    // Verify with access JWT
    const payload = await request.server.jwt.access.verify(token);

    request.user = {
      id: payload.sub,
      role: payload.role,
    };
  } catch (error: any) {
    if (error.code === 'FST_JWT_AUTHORIZATION_TOKEN_EXPIRED') {
      throw Errors.tokenExpired();
    }
    if (error.code?.startsWith('FST_JWT')) {
      throw Errors.tokenInvalid();
    }
    throw error;
  }
}

/**
 * Optional authentication - doesn't fail if no token
 */
export async function optionalAuth(
  request: FastifyRequest,
  reply: FastifyReply
): Promise<void> {
  try {
    await authenticate(request, reply);
  } catch {
    // Ignore auth errors for optional auth
    request.user = undefined;
  }
}

/**
 * Admin-only middleware
 */
export async function adminOnly(
  request: FastifyRequest,
  reply: FastifyReply
): Promise<void> {
  await authenticate(request, reply);

  if (request.user?.role !== 'admin') {
    throw Errors.forbidden('Admin access required');
  }
}

/**
 * Get current user ID (throws if not authenticated)
 */
export function getCurrentUserId(request: FastifyRequest): string {
  if (!request.user?.id) {
    throw Errors.unauthorized();
  }
  return request.user.id;
}
