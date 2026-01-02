'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Send, Loader2, BookOpen, Sparkles, Mic, MicOff, Volume2, VolumeX, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TaskRenderer } from '@/components/tasks/TaskRenderer';
import { useChatStore } from '@/stores/chatStore';
import { useVoiceChat } from '@/hooks/useVoiceChat';
import type { TaskPayload, UserAnswer } from '@enbai/types';

const LANGUAGES = [
  { code: 'en-US', label: 'EN', flag: '🇺🇸', name: 'English' },
  { code: 'ru-RU', label: 'RU', flag: '🇷🇺', name: 'Русский' },
];

export default function ChatPage() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');
  const [activeTask, setActiveTask] = useState<TaskPayload | null>(null);
  const [autoSpeak, setAutoSpeak] = useState(true);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    messages,
    isLoading,
    isLoadingInitial,
    error,
    needsOnboarding,
    needsFirstMessage,
    loadCurrentChat,
    generateFirstMessage,
    sendMessage,
    submitTask,
  } = useChatStore();

  // V5: Load current chat on mount
  useEffect(() => {
    loadCurrentChat();
  }, [loadCurrentChat]);

  // V5: Redirect to onboarding if needed
  useEffect(() => {
    if (needsOnboarding) {
      router.push('/onboarding');
    }
  }, [needsOnboarding, router]);

  // V5: Generate first message if needed
  useEffect(() => {
    if (needsFirstMessage && !isLoading) {
      generateFirstMessage();
    }
  }, [needsFirstMessage, isLoading, generateFirstMessage]);

  // Voice chat hook
  const {
    isListening,
    isSupported,
    transcript,
    startListening,
    stopListening,
    speak,
    isSpeaking,
    stopSpeaking,
    setLanguage,
    currentLang,
  } = useVoiceChat({
    lang: 'en-US',
    onResult: (text) => {
      setInputValue(text);
    },
    onError: (error) => {
      console.error('Voice error:', error);
    },
    useApiTts: true, // Use OpenAI TTS for better quality
  });

  const currentLangInfo = LANGUAGES.find(l => l.code === currentLang) || LANGUAGES[0];

  // Update input with transcript while speaking
  useEffect(() => {
    if (transcript) {
      setInputValue(transcript);
    }
  }, [transcript]);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Auto-speak AI responses
  useEffect(() => {
    if (autoSpeak && messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage.role === 'assistant' && !lastMessage.pending) {
        // Detect language from content (simple heuristic)
        const hasRussian = /[а-яА-ЯёЁ]/.test(lastMessage.content);
        const lang = hasRussian ? 'ru-RU' : 'en-US';
        speak(lastMessage.content, lang);
      }
    }
  }, [messages, autoSpeak, speak]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const message = inputValue.trim();
    setInputValue('');

    // Stop listening if active
    if (isListening) {
      stopListening();
    }

    const result = await sendMessage(message);

    // If AI returned a task, show it
    if (result?.task) {
      setActiveTask(result.task);
    }
  };

  const handleTaskSubmit = async (answer: UserAnswer) => {
    if (!activeTask) return;

    await submitTask(activeTask.id, answer, 60);
    setActiveTask(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const toggleAutoSpeak = () => {
    if (isSpeaking) {
      stopSpeaking();
    }
    setAutoSpeak(!autoSpeak);
  };

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode);
    setShowLangMenu(false);
  };

  const speakMessage = (content: string) => {
    // Detect language from content
    const hasRussian = /[а-яА-ЯёЁ]/.test(content);
    const lang = hasRussian ? 'ru-RU' : 'en-US';
    speak(content, lang);
  };

  const quickPrompts = [
    { text: 'Практика грамматики', icon: <BookOpen className="w-4 h-4" /> },
    { text: 'Учить слова', icon: <Sparkles className="w-4 h-4" /> },
    { text: 'Дай упражнение', icon: <BookOpen className="w-4 h-4" /> },
  ];

  // V5: Show loading state while checking chat status
  if (isLoadingInitial) {
    return (
      <div className="h-[calc(100vh-80px)] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4 text-[hsl(var(--primary))]" />
          <p className="text-muted-foreground">Загрузка чата...</p>
        </div>
      </div>
    );
  }

  // V5: Show loading state while generating first message
  if (needsFirstMessage || (isLoading && messages.length === 0)) {
    return (
      <div className="h-[calc(100vh-80px)] flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-[hsl(var(--primary))] rounded-full flex items-center justify-center">
            <span className="text-4xl font-black text-white">E</span>
          </div>
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-2">Готовлю первый урок...</h2>
          <p className="text-muted-foreground">AI анализирует твой уровень и готовит персональное приветствие</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-80px)] flex flex-col">
      {/* Task Modal */}
      {activeTask && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-auto">
            <div className="p-6">
              <TaskRenderer
                task={activeTask}
                onSubmit={handleTaskSubmit}
                onSkip={() => setActiveTask(null)}
              />
            </div>
          </div>
        </div>
      )}

      {/* Voice Controls Bar */}
      {isSupported && (
        <div className="border-b-2 border-foreground bg-muted px-4 py-2">
          <div className="max-w-3xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  className={cn(
                    'flex items-center gap-2 px-3 py-1',
                    'border-2 border-foreground bg-white',
                    'hover:bg-muted transition-colors',
                    'text-sm font-medium'
                  )}
                >
                  <Globe className="w-4 h-4" />
                  <span>{currentLangInfo.flag}</span>
                  <span>{currentLangInfo.label}</span>
                </button>

                {showLangMenu && (
                  <div className="absolute top-full left-0 mt-1 bg-white border-2 border-foreground shadow-lg z-10">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={cn(
                          'flex items-center gap-2 w-full px-4 py-2',
                          'hover:bg-muted transition-colors text-left',
                          currentLang === lang.code && 'bg-muted'
                        )}
                      >
                        <span>{lang.flag}</span>
                        <span className="font-medium">{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Status indicators */}
              <div className="flex items-center gap-2">
                <div
                  className={cn(
                    'w-2 h-2 rounded-full',
                    isListening ? 'bg-red-500 animate-pulse' : 'bg-gray-400'
                  )}
                />
                <span className="text-xs font-medium uppercase tracking-wider">
                  {isListening ? 'Слушаю...' : 'Голосовой ввод'}
                </span>
              </div>
              {isSpeaking && (
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-xs font-medium uppercase tracking-wider">
                    Говорю...
                  </span>
                </div>
              )}
            </div>

            {/* Auto-speak toggle */}
            <button
              onClick={toggleAutoSpeak}
              className={cn(
                'flex items-center gap-2 px-3 py-1 text-xs font-medium uppercase tracking-wider',
                'border-2 border-foreground transition-colors',
                autoSpeak ? 'bg-[hsl(var(--primary))] text-white' : 'bg-white'
              )}
            >
              {autoSpeak ? <Volume2 className="w-3 h-3" /> : <VolumeX className="w-3 h-3" />}
              Озвучка {autoSpeak ? 'вкл' : 'выкл'}
            </button>
          </div>
        </div>
      )}

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-3xl mx-auto space-y-6">
          {messages.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 mx-auto mb-6 bg-[hsl(var(--primary))] rounded-full flex items-center justify-center">
                <span className="text-4xl font-black text-white">E</span>
              </div>
              <h2 className="text-2xl font-bold mb-2">Добро пожаловать в Enbai</h2>
              <p className="text-muted-foreground mb-4">
                Твой AI-помощник для изучения английского. Спроси что угодно или попробуй:
              </p>

              {/* Voice hint */}
              {isSupported && (
                <p className="text-sm text-[hsl(var(--primary))] mb-6">
                  🎤 Нажми на микрофон и говори на {currentLangInfo.name}!
                </p>
              )}

              {/* Quick Prompts */}
              <div className="flex flex-wrap justify-center gap-3">
                {quickPrompts.map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setInputValue(prompt.text);
                      inputRef.current?.focus();
                    }}
                    className={cn(
                      'flex items-center gap-2 px-4 py-2',
                      'border-2 border-foreground bg-white',
                      'hover:bg-muted transition-colors',
                      'font-medium text-sm'
                    )}
                  >
                    {prompt.icon}
                    {prompt.text}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    'flex',
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  <div
                    className={cn(
                      'max-w-[85%] px-5 py-3',
                      message.role === 'user'
                        ? 'bg-[hsl(var(--primary))] text-white'
                        : 'bg-muted border-2 border-foreground'
                    )}
                  >
                    {message.role === 'assistant' && (
                      <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-foreground/20">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-[hsl(var(--primary))] rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold text-white">E</span>
                          </div>
                          <span className="text-xs font-bold uppercase">Enbai</span>
                        </div>
                        {/* Speak button for each message */}
                        <button
                          onClick={() => speakMessage(message.content)}
                          disabled={isSpeaking}
                          className={cn(
                            'p-1 hover:bg-foreground/10 rounded transition-colors',
                            'disabled:opacity-50'
                          )}
                          title="Озвучить"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                    <p className="whitespace-pre-wrap">{message.content}</p>
                    {message.pending && (
                      <span className="text-xs opacity-70 mt-1 block">Отправка...</span>
                    )}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted border-2 border-foreground px-5 py-4">
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span className="text-sm">Думаю...</span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </>
          )}
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-red-100 border-2 border-red-500 text-red-700 px-4 py-2 mb-4">
              {error}
            </div>
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="border-t-2 border-foreground bg-background px-4 py-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3">
            {/* Microphone Button */}
            {isSupported && (
              <button
                onClick={toggleListening}
                disabled={isLoading}
                className={cn(
                  'w-12 h-12 flex items-center justify-center',
                  'border-2 border-foreground',
                  'transition-all',
                  isListening
                    ? 'bg-red-500 text-white animate-pulse'
                    : 'bg-white hover:bg-muted',
                  'disabled:opacity-50 disabled:cursor-not-allowed'
                )}
                title={`Говорить на ${currentLangInfo.name}`}
              >
                {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              </button>
            )}

            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={isListening ? `Говори на ${currentLangInfo.name}...` : 'Напиши сообщение...'}
              disabled={isLoading}
              className={cn(
                'flex-1 px-4 py-3 text-base',
                'border-2 border-foreground bg-white',
                'focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                'placeholder:text-muted-foreground',
                isListening && 'border-red-500'
              )}
            />
            <button
              onClick={handleSend}
              disabled={!inputValue.trim() || isLoading}
              className={cn(
                'w-12 h-12 flex items-center justify-center',
                'bg-[hsl(var(--primary))] text-white',
                'border-2 border-foreground',
                'hover:opacity-90 transition-opacity',
                'disabled:opacity-50 disabled:cursor-not-allowed'
              )}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            {isSupported
              ? `🎤 Говори на ${currentLangInfo.name} — AI услышит и ответит голосом`
              : 'Работает на AI — спрашивай про грамматику, слова или проси упражнения'}
          </p>
        </div>
      </div>
    </div>
  );
}
