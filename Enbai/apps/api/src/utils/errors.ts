import { ERROR_CODES, ERROR_STATUS_CODES, type ErrorCode } from '@enbai/types';

export class AppError extends Error {
  public readonly code: ErrorCode;
  public readonly statusCode: number;
  public readonly details?: Record<string, unknown>;

  constructor(code: ErrorCode, message?: string, details?: Record<string, unknown>) {
    super(message || code);
    this.code = code;
    this.statusCode = ERROR_STATUS_CODES[code] || 500;
    this.details = details;

    // Capture stack trace
    Error.captureStackTrace(this, this.constructor);
  }

  toJSON() {
    return {
      code: this.code,
      message: this.message,
      ...(this.details && { details: this.details }),
    };
  }
}

// Convenience factories
export const Errors = {
  unauthorized: (message = 'Unauthorized') =>
    new AppError(ERROR_CODES.UNAUTHORIZED, message),

  invalidCredentials: () =>
    new AppError(ERROR_CODES.INVALID_CREDENTIALS, 'Invalid email or password'),

  tokenExpired: () =>
    new AppError(ERROR_CODES.TOKEN_EXPIRED, 'Token has expired'),

  tokenInvalid: () =>
    new AppError(ERROR_CODES.TOKEN_INVALID, 'Invalid token'),

  emailExists: () =>
    new AppError(ERROR_CODES.EMAIL_EXISTS, 'An account with this email already exists'),

  validationError: (message: string, details?: Record<string, unknown>) =>
    new AppError(ERROR_CODES.VALIDATION_ERROR, message, details),

  badRequest: (message: string, details?: Record<string, unknown>) =>
    new AppError(ERROR_CODES.VALIDATION_ERROR, message, details),

  notFound: (resource = 'Resource') =>
    new AppError(ERROR_CODES.NOT_FOUND, `${resource} not found`),

  forbidden: (message = 'Access denied') =>
    new AppError(ERROR_CODES.FORBIDDEN, message),

  rateLimitExceeded: (retryAfter?: number) =>
    new AppError(ERROR_CODES.RATE_LIMIT_EXCEEDED, 'Too many requests', { retryAfter }),

  aiError: (message = 'AI service error') =>
    new AppError(ERROR_CODES.AI_ERROR, message),

  aiTimeout: () =>
    new AppError(ERROR_CODES.AI_TIMEOUT, 'AI request timed out'),

  internal: (message = 'Internal server error') =>
    new AppError(ERROR_CODES.INTERNAL_ERROR, message),
};
