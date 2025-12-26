"use client";
import * as React from "react";

type Props = {
  title: string;
  pill: string;
  subtitle: string;
  onClick: () => void;
  icon?: React.ReactNode;
};

export default function LevelCard({
  title,
  pill,
  subtitle,
  onClick,
  icon,
}: Props) {
  return (
    <div
      className={[
        "group relative rounded-3xl border border-white/20 bg-white/60",
        "backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.06)]",
        "transition-transform duration-200 hover:-translate-y-0.5",
      ].join(" ")}
    >
      {/* subtle top sheen */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/60 via-white/20 to-transparent"></div>

      <div className="relative p-6">
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <span className="inline-flex items-center gap-1 rounded-full border border-gray-200/70 bg-white/70 px-2 py-0.5">
            {icon ? <span className="text-sm">{icon}</span> : null}
            <span>{pill}</span>
          </span>
        </div>

        <h3 className="mt-3 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600 leading-relaxed">{subtitle}</p>

        <div className="mt-5">
          <button
            onClick={onClick}
            className={[
              "inline-flex h-10 items-center justify-center rounded-full px-5 text-sm font-medium",
              "text-white bg-gray-900 hover:bg-black/90",
              "shadow-[0_6px_20px_rgba(0,0,0,0.12)] transition-colors",
            ].join(" ")}
          >
            Начать
          </button>
        </div>
      </div>
    </div>
  );
}
