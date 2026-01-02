"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import {
  Send,
  Loader2,
  Plus,
  MessageSquare,
  Menu,
  X,
  Sparkles,
  BookOpen,
  Languages,
  GraduationCap,
  MessageCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

type Conversation = {
  id: string;
  title: string;
  mode: string;
  messageCount: number;
  updatedAt: string;
  lastMessage?: {
    content: string;
    role: string;
  };
};

const GREETING_MESSAGE: Message = {
  id: "greeting",
  role: "assistant",
  content: "Привет! Я твой персональный репетитор английского языка. Расскажи, какие у тебя цели в изучении английского?",
  timestamp: new Date(),
};

const suggestions = [
  { icon: GraduationCap, text: "Подготовка к IELTS", desc: "Экзамен и сертификация" },
  { icon: BookOpen, text: "Грамматика", desc: "Правила и упражнения" },
  { icon: Languages, text: "Разговорный", desc: "Практика общения" },
  { icon: MessageCircle, text: "Для работы", desc: "Бизнес-английский" },
];

export default function TutorPage() {
  const { data: session, status } = useSession();
  const [messages, setMessages] = useState<Message[]>([GREETING_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loadingConversations, setLoadingConversations] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  const adjustTextareaHeight = () => {
    const textarea = inputRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = Math.min(textarea.scrollHeight, 160) + "px";
    }
  };

  // Load conversations list
  const loadConversations = useCallback(async () => {
    if (!session?.user?.id) return;
    setLoadingConversations(true);
    try {
      const response = await fetch("/api/tutor/conversations");
      if (response.ok) {
        const data = await response.json();
        setConversations(data.conversations || []);
      }
    } catch (error) {
      console.error("Failed to load conversations:", error);
    } finally {
      setLoadingConversations(false);
    }
  }, [session?.user?.id]);

  // Load specific conversation
  const loadConversation = useCallback(async (id: string) => {
    try {
      const response = await fetch(`/api/tutor/conversations/${id}`);
      if (response.ok) {
        const data = await response.json();
        const loadedMessages: Message[] = data.conversation.messages.map((m: any) => ({
          id: m.id,
          role: m.role as "user" | "assistant",
          content: m.content,
          timestamp: new Date(m.timestamp),
        }));
        setMessages(loadedMessages.length > 0 ? loadedMessages : [GREETING_MESSAGE]);
        setConversationId(id);
        setSidebarOpen(false);
      }
    } catch (error) {
      console.error("Failed to load conversation:", error);
    }
  }, []);

  useEffect(() => {
    if (session?.user?.id) {
      loadConversations();
    }
  }, [session?.user?.id, loadConversations]);

  const [hasAutoLoaded, setHasAutoLoaded] = useState(false);
  useEffect(() => {
    if (conversations.length > 0 && !conversationId && !hasAutoLoaded && session?.user?.id) {
      const mostRecent = conversations[0];
      if (mostRecent) {
        setHasAutoLoaded(true);
        loadConversation(mostRecent.id);
      }
    }
  }, [conversations, conversationId, hasAutoLoaded, session?.user?.id, loadConversation]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const startNewConversation = () => {
    setMessages([GREETING_MESSAGE]);
    setConversationId(null);
    setSidebarOpen(false);
    inputRef.current?.focus();
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    if (inputRef.current) inputRef.current.style.height = "auto";
    setIsLoading(true);

    try {
      const response = await fetch("/api/tutor/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: input,
          mode: "general",
          conversationId,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.response || data.error || "Failed to get response");
      }

      if (data.conversationId && data.conversationId !== conversationId) {
        setConversationId(data.conversationId);
        loadConversations();
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error: any) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: error.message || "Извините, произошла ошибка. Попробуйте ещё раз.",
        timestamp: new Date(),
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
      handleSend();
    }
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#007AFF] to-[#5856D6] flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div className="flex items-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin text-[#86868b]" />
            <span className="text-[#86868b] text-sm">Загрузка...</span>
          </div>
        </motion.div>
      </div>
    );
  }

  const isNewChat = messages.length === 1 && messages[0].id === "greeting";

  return (
    <div className="min-h-screen bg-[#f5f5f7] flex font-[-apple-system,BlinkMacSystemFont,'SF_Pro_Display',sans-serif]">
      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
            <motion.aside
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed lg:relative z-50 w-[300px] h-screen bg-white/80 backdrop-blur-xl border-r border-[#d2d2d7] flex flex-col"
            >
              {/* Sidebar Header */}
              <div className="p-4 border-b border-[#d2d2d7]/50">
                <button
                  onClick={startNewConversation}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#007AFF] hover:bg-[#0066CC] active:scale-[0.98] transition-all text-white text-sm font-medium shadow-sm"
                >
                  <Plus className="w-4 h-4" />
                  Новый чат
                </button>
              </div>

              {/* Conversations */}
              <div className="flex-1 overflow-y-auto p-3">
                <p className="text-xs font-medium text-[#86868b] uppercase tracking-wide px-3 mb-2">
                  История
                </p>
                {loadingConversations ? (
                  <div className="flex justify-center py-8">
                    <Loader2 className="w-5 h-5 animate-spin text-[#86868b]" />
                  </div>
                ) : conversations.length === 0 ? (
                  <div className="text-center py-8 px-4">
                    <MessageSquare className="w-8 h-8 text-[#d2d2d7] mx-auto mb-2" />
                    <p className="text-[#86868b] text-sm">Пока нет чатов</p>
                  </div>
                ) : (
                  <div className="space-y-1">
                    {conversations.map((conv) => (
                      <button
                        key={conv.id}
                        onClick={() => loadConversation(conv.id)}
                        className={`w-full text-left px-3 py-2.5 rounded-xl transition-all text-sm ${
                          conversationId === conv.id
                            ? "bg-[#007AFF]/10 text-[#007AFF]"
                            : "text-[#1d1d1f] hover:bg-[#f5f5f7]"
                        }`}
                      >
                        <p className="truncate font-medium">{conv.title || "Без названия"}</p>
                        <p className="text-xs text-[#86868b] mt-0.5">{conv.messageCount} сообщ.</p>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Close button mobile */}
              <div className="p-3 border-t border-[#d2d2d7]/50 lg:hidden">
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-[#86868b] hover:bg-[#f5f5f7] transition-colors text-sm"
                >
                  <X className="w-4 h-4" />
                  Закрыть
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-white/70 backdrop-blur-xl border-b border-[#d2d2d7]/50">
          <div className="flex items-center justify-between px-4 h-14 max-w-4xl mx-auto w-full">
            <div className="flex items-center gap-3">
              {session?.user && (
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="p-2 -ml-2 rounded-xl hover:bg-[#f5f5f7] active:bg-[#e8e8ed] transition-colors"
                >
                  <Menu className="w-5 h-5 text-[#1d1d1f]" />
                </button>
              )}
              <Link href="/" className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#007AFF] to-[#5856D6] flex items-center justify-center shadow-sm">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-[15px] font-semibold text-[#1d1d1f]">Vocab OS</h1>
                  <p className="text-[11px] text-[#86868b] -mt-0.5">Репетитор</p>
                </div>
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#34C759]/10 text-[#34C759]">
                Online
              </span>
            </div>
          </div>
        </header>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto px-4 py-6">
            {isNewChat ? (
              /* Welcome Screen */
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center min-h-[60vh] text-center"
              >
                {/* Illustration */}
                <div className="relative mb-8">
                  <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#007AFF] to-[#5856D6] flex items-center justify-center shadow-lg shadow-[#007AFF]/20">
                    <Sparkles className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -right-2 -bottom-2 w-8 h-8 rounded-xl bg-[#34C759] flex items-center justify-center shadow-md">
                    <Languages className="w-4 h-4 text-white" />
                  </div>
                </div>

                <h1 className="text-[28px] font-semibold text-[#1d1d1f] mb-2">
                  Добро пожаловать
                </h1>
                <p className="text-[17px] text-[#86868b] max-w-md mb-8 leading-relaxed">
                  Я помогу тебе выучить английский язык.<br/>
                  Выбери тему или задай вопрос.
                </p>

                {/* Suggestion Cards */}
                <div className="grid grid-cols-2 gap-3 w-full max-w-md">
                  {suggestions.map((item, i) => (
                    <motion.button
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * i }}
                      onClick={() => {
                        setInput(item.text);
                        inputRef.current?.focus();
                      }}
                      className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#d2d2d7]/50 hover:border-[#007AFF]/30 hover:shadow-md hover:shadow-[#007AFF]/5 active:scale-[0.98] transition-all text-left group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#f5f5f7] group-hover:bg-[#007AFF]/10 flex items-center justify-center transition-colors">
                        <item.icon className="w-5 h-5 text-[#007AFF]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[15px] font-medium text-[#1d1d1f]">{item.text}</p>
                        <p className="text-[13px] text-[#86868b]">{item.desc}</p>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : (
              /* Messages */
              <div className="space-y-6">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`flex gap-3 max-w-[85%] ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                      {/* Avatar */}
                      {message.role === "assistant" && (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#007AFF] to-[#5856D6] flex-shrink-0 flex items-center justify-center shadow-sm">
                          <Sparkles className="w-4 h-4 text-white" />
                        </div>
                      )}

                      {/* Message Bubble */}
                      <div
                        className={`px-4 py-3 rounded-2xl ${
                          message.role === "user"
                            ? "bg-[#007AFF] text-white rounded-br-md"
                            : "bg-white border border-[#d2d2d7]/50 text-[#1d1d1f] rounded-bl-md shadow-sm"
                        }`}
                      >
                        <p className="text-[15px] leading-relaxed whitespace-pre-wrap">
                          {message.content}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Typing Indicator */}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#007AFF] to-[#5856D6] flex items-center justify-center shadow-sm">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div className="px-4 py-3 rounded-2xl rounded-bl-md bg-white border border-[#d2d2d7]/50 shadow-sm">
                      <div className="flex items-center gap-1.5">
                        <motion.span
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 1.2, repeat: Infinity, delay: 0 }}
                          className="w-2 h-2 bg-[#86868b] rounded-full"
                        />
                        <motion.span
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
                          className="w-2 h-2 bg-[#86868b] rounded-full"
                        />
                        <motion.span
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
                          className="w-2 h-2 bg-[#86868b] rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>
            )}
          </div>
        </div>

        {/* Input Area */}
        <div className="sticky bottom-0 bg-gradient-to-t from-[#f5f5f7] via-[#f5f5f7] to-transparent pt-4 pb-6 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative bg-white rounded-2xl border border-[#d2d2d7]/50 shadow-lg shadow-black/5 overflow-hidden">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  adjustTextareaHeight();
                }}
                onKeyDown={handleKeyDown}
                placeholder="Напиши сообщение..."
                disabled={isLoading}
                rows={1}
                className="w-full px-4 py-3.5 pr-14 bg-transparent text-[#1d1d1f] placeholder:text-[#86868b] text-[15px] resize-none focus:outline-none disabled:opacity-50 max-h-[160px]"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="absolute right-2.5 bottom-2.5 p-2 rounded-xl bg-[#007AFF] hover:bg-[#0066CC] disabled:bg-[#d2d2d7] disabled:cursor-not-allowed active:scale-95 transition-all"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
            <p className="text-center text-[#86868b] text-[11px] mt-3">
              {session?.user ? "Чаты сохраняются автоматически" : "Войдите, чтобы сохранять историю"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
