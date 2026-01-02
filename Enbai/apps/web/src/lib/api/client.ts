import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import type { ApiError, AuthTokens } from '@enbai/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

// Create axios instance
export const apiClient: AxiosInstance = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 120000, // 2 минуты для AI запросов
});

// Token storage (works in both client and server)
let accessToken: string | null = null;
let refreshToken: string | null = null;
let refreshPromise: Promise<AuthTokens> | null = null;

export function setTokens(tokens: AuthTokens | null) {
  if (tokens) {
    accessToken = tokens.accessToken;
    refreshToken = tokens.refreshToken;
  } else {
    accessToken = null;
    refreshToken = null;
  }
}

export function getAccessToken() {
  return accessToken;
}

// Request interceptor - add auth header
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Try to get token from store if not set
    if (!accessToken && typeof window !== 'undefined') {
      const stored = localStorage.getItem('enbai-auth');
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          accessToken = parsed.state?.accessToken;
          refreshToken = parsed.state?.refreshToken;
        } catch (e) {
          // ignore
        }
      }
    }

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor - handle token refresh
apiClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<{ error: ApiError }>) => {
    const originalRequest = error.config;

    // If 401 and we have refresh token, try to refresh
    if (
      error.response?.status === 401 &&
      refreshToken &&
      originalRequest &&
      !(originalRequest as any)._retry
    ) {
      (originalRequest as any)._retry = true;

      try {
        // Prevent multiple refresh calls
        if (!refreshPromise) {
          refreshPromise = refreshAccessToken();
        }

        const tokens = await refreshPromise;
        refreshPromise = null;

        // Update tokens
        setTokens(tokens);

        // Update stored tokens
        if (typeof window !== 'undefined') {
          const stored = localStorage.getItem('enbai-auth');
          if (stored) {
            const parsed = JSON.parse(stored);
            parsed.state.accessToken = tokens.accessToken;
            parsed.state.refreshToken = tokens.refreshToken;
            localStorage.setItem('enbai-auth', JSON.stringify(parsed));
          }
        }

        // Retry original request
        originalRequest.headers.Authorization = `Bearer ${tokens.accessToken}`;
        return apiClient(originalRequest);
      } catch (refreshError) {
        refreshPromise = null;
        // Refresh failed - logout
        setTokens(null);
        if (typeof window !== 'undefined') {
          localStorage.removeItem('enbai-auth');
          window.location.href = '/login';
        }
        return Promise.reject(refreshError);
      }
    }

    // Transform error
    const apiError: ApiError = error.response?.data?.error || {
      code: 'UNKNOWN_ERROR',
      message: error.message || 'An unexpected error occurred',
    };

    return Promise.reject(apiError);
  }
);

async function refreshAccessToken(): Promise<AuthTokens> {
  const response = await axios.post<{ data: AuthTokens }>(
    `${API_URL}/api/auth/refresh`,
    { refreshToken },
    { headers: { 'Content-Type': 'application/json' } }
  );
  return response.data.data;
}

// Typed API methods
export const api = {
  get: <T>(url: string, config?: Parameters<typeof apiClient.get>[1]) =>
    apiClient.get<{ data: T }>(url, config).then((res) => res.data.data),

  post: <T>(url: string, data?: unknown, config?: Parameters<typeof apiClient.post>[2]) =>
    apiClient.post<{ data: T }>(url, data, config).then((res) => res.data.data),

  put: <T>(url: string, data?: unknown, config?: Parameters<typeof apiClient.put>[2]) =>
    apiClient.put<{ data: T }>(url, data, config).then((res) => res.data.data),

  patch: <T>(url: string, data?: unknown, config?: Parameters<typeof apiClient.patch>[2]) =>
    apiClient.patch<{ data: T }>(url, data, config).then((res) => res.data.data),

  delete: <T>(url: string, config?: Parameters<typeof apiClient.delete>[1]) =>
    apiClient.delete<{ data: T }>(url, config).then((res) => res.data.data),
};
