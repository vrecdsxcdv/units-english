import { FastifyInstance } from 'fastify';
import { config } from '../config';

export interface AccessTokenPayload {
  sub: string; // user id
  role: string;
  iat: number;
  exp: number;
}

export interface RefreshTokenPayload {
  sub: string; // user id
  type: 'refresh';
  iat: number;
  exp: number;
}

export function parseExpiresIn(expiresIn: string): number {
  const match = expiresIn.match(/^(\d+)([smhd])$/);
  if (!match) return 900; // default 15 minutes

  const value = parseInt(match[1]);
  const unit = match[2];

  switch (unit) {
    case 's':
      return value;
    case 'm':
      return value * 60;
    case 'h':
      return value * 60 * 60;
    case 'd':
      return value * 60 * 60 * 24;
    default:
      return 900;
  }
}

export function registerJwt(app: FastifyInstance) {
  // Access token JWT
  app.register(require('@fastify/jwt'), {
    secret: config.JWT_ACCESS_SECRET,
    sign: {
      expiresIn: config.JWT_ACCESS_EXPIRES_IN,
    },
    namespace: 'access',
  });

  // Refresh token JWT (separate namespace)
  app.register(require('@fastify/jwt'), {
    secret: config.JWT_REFRESH_SECRET,
    sign: {
      expiresIn: config.JWT_REFRESH_EXPIRES_IN,
    },
    namespace: 'refresh',
  });
}

// Generate tokens
export async function generateTokens(
  app: FastifyInstance,
  userId: string,
  role: string
): Promise<{ accessToken: string; refreshToken: string; expiresIn: number }> {
  const accessToken = app.jwt.access.sign({
    sub: userId,
    role,
  });

  const refreshToken = app.jwt.refresh.sign({
    sub: userId,
    type: 'refresh',
  });

  const expiresIn = parseExpiresIn(config.JWT_ACCESS_EXPIRES_IN);

  return { accessToken, refreshToken, expiresIn };
}

// Verify access token
export async function verifyAccessToken(
  app: FastifyInstance,
  token: string
): Promise<AccessTokenPayload> {
  return app.jwt.access.verify(token);
}

// Verify refresh token
export async function verifyRefreshToken(
  app: FastifyInstance,
  token: string
): Promise<RefreshTokenPayload> {
  return app.jwt.refresh.verify(token);
}
