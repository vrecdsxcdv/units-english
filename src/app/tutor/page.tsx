"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import ChatInterface from "@/components/tutor/ChatInterface";

export default function TutorPage() {
  const { data: session, status } = useSession();
  const [activeMode, setActiveMode] = useState<
    "general" | "lesson" | "practice"
  >("general");

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #f0f4ff 0%, #e8f0fe 50%, #f3e8ff 100%)",
        }}>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600" />
      </div>
    );
  }

  return (
    <div className="flex h-screen"
      style={{
        background: "linear-gradient(135deg, #f0f4ff 0%, #e8f0fe 50%, #f3e8ff 100%)",
      }}>
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header with liquid glass effect */}
        <header className="px-6 py-5 border-b"
          style={{
            background: "rgba(255, 255, 255, 0.4)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderColor: "rgba(255, 255, 255, 0.5)",
            boxShadow: "0 4px 16px rgba(99, 102, 241, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.6)",
          }}>
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                style={{
                  background: "linear-gradient(135deg, #818cf8 0%, #c084fc 100%)",
                  boxShadow: "0 8px 24px rgba(129, 140, 248, 0.3)",
                }}>
                😉
              </div>
              <div>
                <h1 className="text-2xl font-bold"
                  style={{
                    background: "linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                  Speakly AI
                </h1>
                <p className="text-sm text-slate-600">Your English teacher</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2"
                style={{
                  background: "rgba(34, 197, 94, 0.15)",
                  color: "#15803d",
                  border: "1px solid rgba(34, 197, 94, 0.3)",
                  boxShadow: "0 2px 8px rgba(34, 197, 94, 0.15)",
                }}>
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Online
              </span>
            </div>
          </div>
        </header>

        {/* Chat Interface with mode selector inside */}
        <ChatInterface mode={activeMode} onModeChange={setActiveMode} />
      </div>
    </div>
  );
}
