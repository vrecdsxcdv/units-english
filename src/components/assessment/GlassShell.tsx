"use client";

import React from "react";

export default function GlassShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_700px_at_85%_20%,rgba(59,130,246,0.18),transparent),radial-gradient(900px_600px_at_10%_0%,rgba(99,102,241,0.12),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.6),rgba(255,255,255,0.35))]" />
      {children}
    </div>
  );
}
