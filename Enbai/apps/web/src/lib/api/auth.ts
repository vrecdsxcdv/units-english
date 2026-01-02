import { api, setTokens } from './client';
import type {
  RegisterRequest,
  LoginRequest,
  AuthTokens,
  User,
  UserWithProfile,
} from '@enbai/types';

export const authApi = {
  /**
   * Register new user
   */
  register: async (data: RegisterRequest): Promise<{ user: User; tokens: AuthTokens }> => {
    const response = await api.post<{ user: User; tokens: AuthTokens }>('/auth/register', data);
    setTokens(response.tokens);
    return response;
  },

  /**
   * Login user
   */
  login: async (data: LoginRequest): Promise<{ user: User; tokens: AuthTokens }> => {
    const response = await api.post<{ user: User; tokens: AuthTokens }>('/auth/login', data);
    setTokens(response.tokens);
    return response;
  },

  /**
   * Guest login (no registration)
   */
  guestLogin: async (): Promise<{ user: User; tokens: AuthTokens }> => {
    const response = await api.post<{ user: User; tokens: AuthTokens }>('/auth/guest');
    setTokens(response.tokens);
    return response;
  },

  /**
   * Logout user
   */
  logout: async (): Promise<void> => {
    try {
      await api.post('/auth/logout');
    } finally {
      setTokens(null);
    }
  },

  /**
   * Get current user with profile
   */
  getMe: async (): Promise<UserWithProfile> => {
    return api.get<UserWithProfile>('/auth/me');
  },

  /**
   * Refresh access token
   */
  refresh: async (refreshToken: string): Promise<AuthTokens> => {
    const tokens = await api.post<AuthTokens>('/auth/refresh', { refreshToken });
    setTokens(tokens);
    return tokens;
  },
};
