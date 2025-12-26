import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      writingMode: {
        'vertical-rl': 'vertical-rl',
        'vertical-lr': 'vertical-lr',
      },
      textOrientation: {
        'mixed': 'mixed',
        'upright': 'upright',
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Inter",
          "Apple Color Emoji",
          "Segoe UI Emoji",
        ],
      },
      typography: ({ theme }) => ({
        zinc: {
          css: {
            maxWidth: "65ch",
            h1: { fontWeight: "800", letterSpacing: "-0.02em" },
            h2: {
              fontWeight: "800",
              fontSize: theme("fontSize.2xl")[0],
              letterSpacing: "-0.01em",
              marginTop: theme("spacing.8"),
              marginBottom: theme("spacing.3"),
            },
            p: {
              marginTop: theme("spacing.3"),
              marginBottom: theme("spacing.3"),
            },
            li: {
              marginTop: theme("spacing.1"),
              marginBottom: theme("spacing.1"),
            },
            code: {
              backgroundColor: theme("colors.zinc.100"),
              padding: "0.1rem 0.3rem",
              borderRadius: "0.25rem",
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // Plugin for vertical writing modes
    function({ addUtilities }: { addUtilities: (utilities: Record<string, Record<string, string>>) => void }) {
      addUtilities({
        '.writing-mode-vertical-rl': {
          'writing-mode': 'vertical-rl',
        },
        '.writing-mode-vertical-lr': {
          'writing-mode': 'vertical-lr',
        },
        '.text-orientation-mixed': {
          'text-orientation': 'mixed',
        },
        '.text-orientation-upright': {
          'text-orientation': 'upright',
        },
        // 3D flip card utilities
        '.perspective-1000': {
          'perspective': '1000px',
        },
        '.transform-style-3d': {
          'transform-style': 'preserve-3d',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.rotate-y-180': {
          'transform': 'rotateY(180deg)',
        },
      })
    },
  ],
};
export default config;
