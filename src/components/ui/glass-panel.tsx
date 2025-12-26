import * as React from "react";
import { cn } from "@/lib/utils";

type GlassPanelProps = React.ComponentProps<"div"> & {
  title?: string;
  subtitle?: string;
  footer?: React.ReactNode;
};

export default function GlassPanel({
  className,
  title,
  subtitle,
  footer,
  children,
  ...props
}: GlassPanelProps) {
  return (
    <div
      className={cn(
        "relative w-full max-w-md rounded-2xl p-6 sm:p-8",
        // liquid glass: очень прозрачная панель
        "bg-white/10 dark:bg-white/5",
        "backdrop-blur-3xl",
        // тонкая стеклянная кромка
        "border border-white/25 dark:border-white/10 ring-1 ring-white/10",
        // глубина и мягкая тень
        "shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)]",
        className
      )}
      {...props}
    >
      {/* деликатные блики/подсветка — прямоугольная форма, без масок */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(140%_120%_at_0%_0%,rgba(255,255,255,0.25),transparent_55%),radial-gradient(120%_100%_at_100%_100%,rgba(0,0,0,0.08),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5"
      />

      <div className="relative">
        {(title || subtitle) && (
          <div className="mb-6 text-center">
            {title && (
              <h1 className="text-2xl font-semibold tracking-tight text-gray-900/90 dark:text-gray-100">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {children}

        {footer && <div className="mt-6">{footer}</div>}
      </div>
    </div>
  );
}
