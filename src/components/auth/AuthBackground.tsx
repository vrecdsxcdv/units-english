"use client";
import * as React from "react";

export default function AuthBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* gentle cool wash */}
      <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_12%_-6%,rgba(99,102,241,0.12),transparent),radial-gradient(820px_460px_at_88%_4%,rgba(56,189,248,0.10),transparent),linear-gradient(to_bottom,rgba(255,255,255,0.6),rgba(255,255,255,0.45))] dark:bg-[radial-gradient(900px_520px_at_12%_-6%,rgba(99,102,241,0.10),transparent),radial-gradient(820px_460px_at_88%_4%,rgba(56,189,248,0.08),transparent),linear-gradient(to_bottom,rgba(12,12,14,0.6),rgba(12,12,14,0.6))]" />
      {/* soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(58%_46%_at_50%_0%,rgba(255,255,255,0.28),transparent)] dark:bg-[radial-gradient(58%_46%_at_50%_0%,rgba(255,255,255,0.05),transparent)]" />
      {/* slightly stronger micro-noise */}
      <div className="absolute inset-0 opacity-[0.06] mix-blend-soft-light [background-image:var(--noise-url)]" />
      {/* glossy streak */}
      <div className="absolute -top-36 left-1/2 h-72 w-[120%] -translate-x-1/2 rotate-[6deg] rounded-[60px] bg-white/8 blur-3xl dark:bg-white/6" />
    </div>
  );
}
