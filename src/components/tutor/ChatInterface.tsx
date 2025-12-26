"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Loader2, Sparkles } from "lucide-react";
import { useSession } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  suggestions?: string[];
};

type Props = {
  mode: "general" | "lesson" | "practice";
  onModeChange: (mode: "general" | "lesson" | "practice") => void;
};

export default function ChatInterface({ mode, onModeChange }: Props) {
  const { data: session } = useSession();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // Initialize with greeting
    setMessages([
      {
        id: "greeting",
        role: "assistant",
        content: getGreeting(mode),
        timestamp: new Date(),
        suggestions: getSuggestions(mode),
      },
    ]);
  }, [mode]);

  const getGreeting = (mode: string) => {
    switch (mode) {
      case "general":
        return "Hello! 😉 I'm Speakly, your English teacher. Ask me anything about grammar, vocabulary, pronunciation, or practice conversation. How can I help you today?";
      case "lesson":
        return "Hi! 📚 I'll help you with your current lesson. If something is unclear or you need more examples — just ask!";
      case "practice":
        return "Hello! 🗣️ Let's practice English conversation. I'll help you improve your speaking skills. What would you like to talk about?";
      default:
        return "Hello! 😉 How can I help you today?";
    }
  };

  const getSuggestions = (mode: string) => {
    switch (mode) {
      case "general":
        return [
          "Explain Present Simple tense",
          "What's the difference between 'make' and 'do'?",
          "How to use articles (a, an, the)?",
        ];
      case "lesson":
        return [
          "Give me an exercise on this topic",
          "Can you explain this with more examples?",
          "What are common mistakes here?",
        ];
      case "practice":
        return [
          "Let's talk about my hobbies",
          "Help me describe my daily routine",
          "I want to practice job interview questions",
        ];
      default:
        return [];
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const conversationHistory = messages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

      const response = await fetch("/api/tutor/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: input,
          mode,
          userId: session?.user?.id,
          conversationId,
          conversationHistory,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Используем более детальное сообщение от сервера
        const errorMessage =
          data.response || data.error || "Failed to get response";
        throw new Error(errorMessage);
      }

      // Update conversationId if new
      if (data.conversationId && !conversationId) {
        setConversationId(data.conversationId);
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.response,
        timestamp: new Date(),
        suggestions: data.suggestions,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error: any) {
      console.error("Chat error:", error);

      // Определяем сообщение об ошибке
      let errorContent = "Извините, произошла ошибка. Попробуйте ещё раз.";

      if (error.message) {
        errorContent = error.message;
      }

      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: errorContent,
        timestamp: new Date(),
        suggestions: [
          "Попробовать снова",
          "Задать другой вопрос",
          "Перезагрузить страницу",
        ],
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
    inputRef.current?.focus();
  };

  const modeOptions = [
    { id: "general" as const, label: "💬 General", desc: "Ask anything" },
    { id: "lesson" as const, label: "📚 Lesson Help", desc: "Current topic" },
    { id: "practice" as const, label: "🗣️ Practice", desc: "Conversation" },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Mode Selector */}
      <div className="bg-white/60 backdrop-blur-sm border-b border-gray-200 px-6 py-3">
        <div className="max-w-4xl mx-auto flex items-center gap-2">
          {modeOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onModeChange(option.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                mode === option.id
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              <span className="block">{option.label}</span>
              <span className="text-xs opacity-70">{option.desc}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                  msg.role === "user"
                    ? "bg-indigo-600 text-white"
                    : "bg-white border border-gray-200 text-gray-900 shadow-sm"
                }`}
              >
                {msg.role === "assistant" && (
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-indigo-600" />
                    <span className="text-xs font-medium text-indigo-600">
                      Speakly AI
                    </span>
                  </div>
                )}
                <p className="whitespace-pre-wrap leading-relaxed">
                  {msg.content}
                </p>

                {/* Suggestions */}
                {msg.suggestions && msg.suggestions.length > 0 && (
                  <div className="mt-3 space-y-2">
                    <p className="text-xs text-gray-500">Try asking:</p>
                    {msg.suggestions.map((suggestion, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="block w-full text-left text-sm px-3 py-2 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 transition border border-indigo-200"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}

                <span className="text-xs opacity-60 mt-2 block">
                  {msg.timestamp.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-sm">
              <Loader2 className="w-5 h-5 animate-spin text-indigo-600" />
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-200 bg-white px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end gap-3">
            <div className="flex-1 relative">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Message Speakly..."
                className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent max-h-32 bg-white"
                rows={1}
              />
            </div>
            <button
              onClick={handleSendMessage}
              disabled={!input.trim() || isLoading}
              className="flex-shrink-0 h-12 w-12 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition flex items-center justify-center shadow-lg shadow-indigo-500/20"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Speakly can make mistakes. Check important info.
          </p>
        </div>
      </div>
    </div>
  );
}
