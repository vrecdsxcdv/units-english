import { hash, verify } from 'argon2';
import { FastifyInstance } from 'fastify';
import { prisma } from '../db';
import { generateTokens, verifyRefreshToken, parseExpiresIn } from '../utils/jwt';
import { Errors } from '../utils/errors';
import { config } from '../config';
import type { User, AuthTokens } from '@enbai/types';

// Argon2 options
const ARGON2_OPTIONS = {
  type: 2, // argon2id
  memoryCost: 65536,
  timeCost: 3,
  parallelism: 4,
};

export class AuthService {
  constructor(private app: FastifyInstance) {}

  /**
   * Register new user
   */
  async register(
    email: string,
    password: string
  ): Promise<{ user: User; tokens: AuthTokens }> {
    // Check if email exists
    const existing = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (existing) {
      throw Errors.emailExists();
    }

    // Validate password strength
    if (!this.isStrongPassword(password)) {
      throw Errors.validationError(
        'Password must be at least 8 characters with uppercase, lowercase, and number'
      );
    }

    // Hash password
    const passwordHash = await hash(password, ARGON2_OPTIONS);

    // Create user
    const user = await prisma.user.create({
      data: {
        email: email.toLowerCase(),
        passwordHash,
        role: 'user',
      },
    });

    // Generate tokens
    const tokens = await generateTokens(this.app, user.id, user.role);

    // Store refresh token hash
    await this.storeRefreshToken(user.id, tokens.refreshToken);

    return {
      user: this.mapUser(user),
      tokens: {
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
        expiresIn: tokens.expiresIn,
        tokenType: 'Bearer',
      },
    };
  }

  /**
   * Guest login - create temporary user without password
   */
  async guestLogin(): Promise<{ user: User; tokens: AuthTokens }> {
    // Generate guest email
    const guestId = crypto.randomUUID().slice(0, 8);
    const guestEmail = `guest_${guestId}@enbai.local`;

    // Create guest user (no password)
    const user = await prisma.user.create({
      data: {
        email: guestEmail,
        passwordHash: '', // Empty for guests
        role: 'user',
      },
    });

    // Create default profile with beginner settings
    await prisma.profile.create({
      data: {
        userId: user.id,
        learningGoal: 'general',
        targetLevel: 'B1',
        dailyTimeMinutes: 15,
        interests: ['general'],
      },
    });

    // Create initial skill vector
    await prisma.skillVector.create({
      data: {
        userId: user.id,
        grammar: 0.5,
        vocabulary: 0.5,
        pronunciation: 0.5,
        listening: 0.5,
        speaking: 0.5,
        slang: 0.3,
        wordFormation: 0.4,
        fluency: 0.4,
        writing: 0.5,
        comprehension: 0.5,
        learningAbility: 0.5,
        confidence: 0.3,
        calculationMethod: 'default',
      },
    });

    // Generate tokens
    const tokens = await generateTokens(this.app, user.id, user.role);

    // Store refresh token
    await this.storeRefreshToken(user.id, tokens.refreshToken);

    return {
      user: this.mapUser(user),
      tokens: {
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
        expiresIn: tokens.expiresIn,
        tokenType: 'Bearer',
      },
    };
  }

  /**
   * Login user
   */
  async login(
    email: string,
    password: string
  ): Promise<{ user: User; tokens: AuthTokens }> {
    // Find user
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (!user || user.deletedAt) {
      throw Errors.invalidCredentials();
    }

    // Verify password
    const valid = await verify(user.passwordHash, password);
    if (!valid) {
      throw Errors.invalidCredentials();
    }

    // Update last login
    await prisma.user.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date() },
    });

    // Generate tokens
    const tokens = await generateTokens(this.app, user.id, user.role);

    // Store refresh token hash
    await this.storeRefreshToken(user.id, tokens.refreshToken);

    return {
      user: this.mapUser(user),
      tokens: {
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
        expiresIn: tokens.expiresIn,
        tokenType: 'Bearer',
      },
    };
  }

  /**
   * Refresh access token
   */
  async refresh(refreshToken: string): Promise<AuthTokens> {
    try {
      // Verify token
      const payload = await verifyRefreshToken(this.app, refreshToken);

      // Find stored token
      const storedTokens = await prisma.refreshToken.findMany({
        where: { userId: payload.sub },
      });

      // Verify token hash matches
      let validToken = null;
      for (const stored of storedTokens) {
        try {
          if (await verify(stored.tokenHash, refreshToken)) {
            validToken = stored;
            break;
          }
        } catch {
          continue;
        }
      }

      if (!validToken) {
        throw Errors.tokenInvalid();
      }

      // Delete old token
      await prisma.refreshToken.delete({
        where: { id: validToken.id },
      });

      // Get user
      const user = await prisma.user.findUnique({
        where: { id: payload.sub },
      });

      if (!user || user.deletedAt) {
        throw Errors.unauthorized();
      }

      // Generate new tokens
      const tokens = await generateTokens(this.app, user.id, user.role);

      // Store new refresh token
      await this.storeRefreshToken(user.id, tokens.refreshToken);

      return {
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
        expiresIn: tokens.expiresIn,
        tokenType: 'Bearer',
      };
    } catch (error: any) {
      if (error.code === 'FST_JWT_AUTHORIZATION_TOKEN_EXPIRED') {
        throw Errors.tokenExpired();
      }
      throw Errors.tokenInvalid();
    }
  }

  /**
   * Logout user (revoke tokens)
   */
  async logout(userId: string): Promise<void> {
    // Delete all refresh tokens
    await prisma.refreshToken.deleteMany({
      where: { userId },
    });
  }

  /**
   * Get user by ID with profile
   */
  async getUser(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        profile: true,
        skillVectors: {
          orderBy: { createdAt: 'desc' },
          take: 1,
        },
      },
    });

    if (!user || user.deletedAt) {
      throw Errors.notFound('User');
    }

    return {
      ...this.mapUser(user),
      profile: user.profile,
      skillVector: user.skillVectors[0] || null,
    };
  }

  // ============================================
  // PRIVATE METHODS
  // ============================================

  private isStrongPassword(password: string): boolean {
    return (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password)
    );
  }

  private async storeRefreshToken(
    userId: string,
    token: string
  ): Promise<void> {
    const tokenHash = await hash(token, ARGON2_OPTIONS);
    const expiresIn = parseExpiresIn(config.JWT_REFRESH_EXPIRES_IN);

    await prisma.refreshToken.create({
      data: {
        userId,
        tokenHash,
        expiresAt: new Date(Date.now() + expiresIn * 1000),
      },
    });

    // Clean up expired tokens
    await prisma.refreshToken.deleteMany({
      where: {
        expiresAt: { lt: new Date() },
      },
    });
  }

  private mapUser(user: any): User {
    return {
      id: user.id,
      email: user.email,
      role: user.role,
      emailVerified: user.emailVerified,
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
      lastLoginAt: user.lastLoginAt?.toISOString() || null,
    };
  }
}
