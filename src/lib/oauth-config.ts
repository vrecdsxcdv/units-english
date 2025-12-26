// Проверка доступности OAuth провайдеров
export const oauthConfig = {
  google: {
    enabled: !!(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET),
  },
  github: {
    enabled: !!(process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET),
  },
};

// Проверка, доступен ли хотя бы один OAuth провайдер
export const hasOAuthProviders = oauthConfig.google.enabled || oauthConfig.github.enabled;
