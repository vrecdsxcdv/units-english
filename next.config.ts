import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Explicitly set the tracing root to the current project directory
  outputFileTracingRoot: path.join(__dirname),

  // Ignore ESLint errors during production build
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Ignore TypeScript errors during production build
  typescript: {
    ignoreBuildErrors: true,
  },

  // Exclude native modules from serverless bundling
  serverExternalPackages: ['bcrypt'],

  // Fix dev port to 3001
  ...(process.env.NODE_ENV === "development" && {
    experimental: {
      // Disable asset caching in development
      staticGenerationRetryCount: 0,
    },
  }),
  // Disable caching for static assets in development
  ...(process.env.NODE_ENV === "development" && {
    headers: async () => [
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate",
          },
        ],
      },
    ],
  }),
};

export default nextConfig;
