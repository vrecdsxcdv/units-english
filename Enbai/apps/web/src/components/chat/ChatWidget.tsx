'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { TaskRenderer } from '@/components/tasks/TaskRenderer';
import { useChatStore } from '@/stores/chatStore';
import type { TaskPayload, UserAnswer } from '@enbai/types';

type ChatMode = 'collapsed' | 'widget' | 'task';

export function ChatWidget() {
  const [mode, setMode] = useState<ChatMode>('collapsed');
  const [inputValue, setInputValue] = useState('');
  const [activeTask, setActiveTask] = useState<TaskPayload | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const {
    messages,
    isLoading,
    sendMessage,
    submitTask,
  } = useChatStore();

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const message = inputValue.trim();
    setInputValue('');

    const result = await sendMessage(message);

    // If AI returned a task, show it
    if (result?.task) {
      setActiveTask(result.task);
      setMode('task');
    }
  };

  const handleTaskSubmit = async (answer: UserAnswer) => {
    if (!activeTask) return;

    await submitTask(activeTask.id, answer, 60);
    setActiveTask(null);
    setMode('widget');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Collapsed state - just a button
  if (mode === 'collapsed') {
    return (
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className={cn(
          'fixed bottom-6 right-6 z-50',
          'w-14 h-14 rounded-full bg-primary-500 text-white shadow-lg',
          'flex items-center justify-center',
          'hover:bg-primary-600 transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
        )}
        onClick={() => setMode('widget')}
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>
    );
  }

  // Task mode - fullscreen task
  if (mode === 'task' && activeTask) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-gray-50"
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <header className="bg-white border-b px-4 py-3 flex items-center justify-between">
            <h2 className="font-semibold text-gray-900">Practice Task</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setActiveTask(null);
                setMode('widget');
              }}
            >
              <X className="w-5 h-5" />
            </Button>
          </header>

          {/* Task */}
          <div className="flex-1 overflow-auto p-4">
            <div className="max-w-2xl mx-auto">
              <TaskRenderer
                task={activeTask}
                onSubmit={handleTaskSubmit}
                onSkip={() => {
                  setActiveTask(null);
                  setMode('widget');
                }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Widget mode - chat panel
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      className={cn(
        'fixed bottom-6 right-6 z-50',
        'w-96 h-[500px] max-h-[80vh]',
        'bg-white rounded-2xl shadow-2xl border',
        'flex flex-col overflow-hidden'
      )}
    >
      {/* Header */}
      <div className="px-4 py-3 border-b bg-primary-500 text-white flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-sm font-bold">E</span>
          </div>
          <div>
            <h3 className="font-medium text-sm">Enbai Assistant</h3>
            <p className="text-xs text-primary-100">Online</p>
          </div>
        </div>
        <button
          onClick={() => setMode('collapsed')}
          className="p-1 hover:bg-white/10 rounded transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            <p className="text-sm">Hi! I'm your English learning assistant.</p>
            <p className="text-sm mt-1">How can I help you today?</p>
          </div>
        )}

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
                'max-w-[80%] rounded-2xl px-4 py-2',
                message.role === 'user'
                  ? 'bg-primary-500 text-white rounded-br-md'
                  : 'bg-gray-100 text-gray-900 rounded-bl-md'
              )}
            >
              <p className="text-sm whitespace-pre-wrap">{message.content}</p>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-2xl rounded-bl-md px-4 py-3">
              <Loader2 className="w-5 h-5 animate-spin text-gray-400" />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            disabled={isLoading}
            className={cn(
              'flex-1 px-4 py-2 border rounded-full text-sm',
              'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
              'disabled:opacity-50 disabled:cursor-not-allowed'
            )}
          />
          <button
            onClick={handleSend}
            disabled={!inputValue.trim() || isLoading}
            className={cn(
              'w-10 h-10 rounded-full bg-primary-500 text-white',
              'flex items-center justify-center',
              'hover:bg-primary-600 transition-colors',
              'disabled:opacity-50 disabled:cursor-not-allowed'
            )}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
