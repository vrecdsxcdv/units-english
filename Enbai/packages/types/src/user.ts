import type { CEFRLevel, SkillVectorWithMeta } from './skills';

/**
 * User roles
 */
export type UserRole = 'user' | 'admin';

/**
 * Base user entity
 */
export interface User {
  id: string;
  email: string;
  role: UserRole;
  emailVerified: boolean;
  createdAt: string;
  updatedAt: string;
  lastLoginAt: string | null;
}

/**
 * Learning goals
 */
export const LEARNING_GOALS = [
  'travel',
  'work',
  'exams',
  'academic',
  'immigration',
  'entertainment',
  'general',
] as const;

export type LearningGoal = (typeof LEARNING_GOALS)[number];

/**
 * User profile with learning preferences
 */
export interface UserProfile {
  id: string;
  userId: string;

  // Goals & Preferences
  learningGoal: LearningGoal | null;
  targetLevel: CEFRLevel | null;
  interests: string[];
  dailyTimeMinutes: number;
  preferredDifficulty: 'easy' | 'adaptive' | 'challenging';

  // Notification settings
  notifications: {
    dailyReminder: boolean;
    reminderTime: string | null; // "09:00" in user's timezone
    streakAlerts: boolean;
    weeklySummary: boolean;
  };

  // Onboarding status
  onboardingCompleted: boolean;
  onboardingCompletedAt: string | null;

  timezone: string;

  createdAt: string;
  updatedAt: string;
}

/**
 * Full user data with profile and skills
 */
export interface UserWithProfile extends User {
  profile: UserProfile | null;
  skillVector: SkillVectorWithMeta | null;
}

/**
 * User stats for dashboard
 */
export interface UserStats {
  tasksCompleted: number;
  tasksCorrect: number;
  accuracy: number;
  totalTimeMinutes: number;
  currentStreak: number;
  longestStreak: number;
  lastActivityAt: string | null;
}

/**
 * Registration request
 */
export interface RegisterRequest {
  email: string;
  password: string;
}

/**
 * Login request
 */
export interface LoginRequest {
  email: string;
  password: string;
}

/**
 * Auth tokens response
 */
export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  tokenType: 'Bearer';
}

/**
 * Profile update request
 */
export interface UpdateProfileRequest {
  learningGoal?: LearningGoal;
  targetLevel?: CEFRLevel;
  interests?: string[];
  dailyTimeMinutes?: number;
  preferredDifficulty?: 'easy' | 'adaptive' | 'challenging';
  notifications?: Partial<UserProfile['notifications']>;
  timezone?: string;
}
