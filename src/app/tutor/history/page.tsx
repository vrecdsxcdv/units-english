"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Clock, MessageCircle, Trash2 } from "lucide-react";
import Link from "next/link";

type Conversation = {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: string;
  messageCount: number;
  mode: "general" | "lesson" | "practice";
};

export default function HistoryPage() {
  const router = useRouter();
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await fetch("/api/tutor/history");
      const data = await response.json();
      setConversations(data.conversations || []);
    } catch (error) {
      console.error("Failed to fetch history:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteConversation = async (id: string) => {
    if (!confirm("Delete this conversation?")) return;

    try {
      await fetch(`/api/tutor/history?id=${id}`, { method: "DELETE" });
      setConversations((prev) => prev.filter((c) => c.id !== id));
    } catch (error) {
      console.error("Failed to delete:", error);
    }
  };

  const getModeColor = (mode: string) => {
    switch (mode) {
      case "general":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "lesson":
        return "bg-green-100 text-green-700 border-green-200";
      case "practice":
        return "bg-purple-100 text-purple-700 border-purple-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getModeLabel = (mode: string) => {
    switch (mode) {
      case "general":
        return "💬 General";
      case "lesson":
        return "📚 Lesson";
      case "practice":
        return "🗣️ Practice";
      default:
        return mode;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/tutor"
            className="text-indigo-600 hover:text-indigo-700 mb-4 inline-block"
          >
            ← Back to chat
          </Link>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
            Chat History
          </h1>
          <p className="text-gray-600 mt-2">
            All your conversations with Speakly AI
          </p>
        </div>

        {/* Conversations List */}
        {conversations.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 text-center">
            <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              No chat history yet
            </h2>
            <p className="text-gray-600 mb-6">
              Start a conversation with Speakly to see your history here
            </p>
            <Link
              href="/tutor"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition shadow-lg shadow-indigo-500/20"
            >
              Start chatting
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {conversations.map((conv) => (
              <div
                key={conv.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {conv.title}
                      </h3>
                      <span
                        className={`text-xs px-2 py-1 rounded-full border ${getModeColor(
                          conv.mode
                        )}`}
                      >
                        {getModeLabel(conv.mode)}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {conv.lastMessage}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-3 h-3" />
                        {conv.messageCount} messages
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {new Date(conv.timestamp).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "short",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition">
                    <button
                      onClick={() =>
                        router.push(`/tutor?conversation=${conv.id}`)
                      }
                      className="px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm transition"
                    >
                      Open
                    </button>
                    <button
                      onClick={() => deleteConversation(conv.id)}
                      className="p-2 rounded-lg border border-red-200 hover:bg-red-50 text-red-600 transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
