'use client';

import { useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import type { TaskTemplateProps } from '../TaskRenderer';
import type { FillBlanksContent, FillBlanksAnswer } from '@enbai/types';

export default function FillBlanks({ task, onSubmit, onSkip, disabled }: TaskTemplateProps) {
  const content = task.content as FillBlanksContent;
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  // Проверка формата данных
  const isValidContent = content && content.text && content.blanks && Array.isArray(content.blanks);

  // Защита от неправильного формата данных
  if (!isValidContent) {
    return (
      <div className="p-6 text-center text-gray-500">
        Ошибка: неверный формат задания
      </div>
    );
  }

  // Parse text and extract blanks
  const parts = parseTextWithBlanks(content.text, content.blanks);

  const handleInputChange = (blankId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [blankId]: value }));
  };

  const handleKeyDown = (e: React.KeyboardEvent, blankId: string, index: number) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      // Move to next blank or submit
      const blankIds = content.blanks.map((b) => b.id);
      const nextIndex = index + 1;
      if (nextIndex < blankIds.length) {
        inputRefs.current[blankIds[nextIndex]]?.focus();
      } else {
        handleSubmit();
      }
    }
  };

  const handleSubmit = () => {
    const filledBlanks = content.blanks.map((blank) => ({
      blankId: blank.id,
      value: answers[blank.id]?.trim() || '',
    }));

    const answer: FillBlanksAnswer = {
      type: 'fill_blanks',
      blanks: filledBlanks,
    };

    onSubmit(answer);
  };

  const allFilled = content.blanks.every(
    (blank) => answers[blank.id]?.trim()
  );

  return (
    <div className="p-6">
      {/* Instructions */}
      <p className="text-sm text-gray-500 mb-4">
        Заполни пропуски правильными словами.
      </p>

      {/* Word bank if present */}
      {content.wordBank && content.wordBank.length > 0 && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm font-medium text-gray-700 mb-2">Слова для выбора:</p>
          <div className="flex flex-wrap gap-2">
            {content.wordBank.map((word, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-white border rounded-full text-sm text-gray-700"
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Text with blanks */}
      <div className="text-lg leading-relaxed text-gray-900">
        {parts.map((part, idx) => {
          if (part.type === 'text') {
            return <span key={idx}>{part.content}</span>;
          }

          const blank = content.blanks.find((b) => b.id === part.blankId);
          const blankIndex = content.blanks.findIndex((b) => b.id === part.blankId);

          return (
            <span key={idx} className="inline-block mx-1">
              <input
                ref={(el) => {
                  inputRefs.current[part.blankId] = el;
                }}
                type="text"
                value={answers[part.blankId] || ''}
                onChange={(e) => handleInputChange(part.blankId, e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, part.blankId, blankIndex)}
                disabled={disabled}
                placeholder={blank?.hint || '...'}
                className={cn(
                  'w-32 px-2 py-1 border-b-2 border-primary-300 bg-transparent',
                  'text-center focus:outline-none focus:border-primary-500',
                  'placeholder:text-gray-400 placeholder:text-sm',
                  disabled && 'opacity-50 cursor-not-allowed'
                )}
              />
            </span>
          );
        })}
      </div>

      {/* Hints */}
      {task.uiHints?.allowHint && (
        <div className="mt-4">
          {content.blanks.map((blank) =>
            blank.hint ? (
              <p key={blank.id} className="text-sm text-gray-500">
                Подсказка: {blank.hint}
              </p>
            ) : null
          )}
        </div>
      )}

      {/* Actions */}
      <div className="flex justify-between mt-8">
        {onSkip && task.uiHints?.allowSkip !== false && (
          <Button variant="ghost" onClick={onSkip} disabled={disabled}>
            Пропустить
          </Button>
        )}
        <Button
          onClick={handleSubmit}
          disabled={disabled || !allFilled}
          className="ml-auto"
        >
          Ответить
        </Button>
      </div>
    </div>
  );
}

// Helper function to parse text with {{blank_id}} markers
function parseTextWithBlanks(
  text: string,
  blanks: Array<{ id: string }>
): Array<{ type: 'text'; content: string } | { type: 'blank'; blankId: string }> {
  const parts: Array<{ type: 'text'; content: string } | { type: 'blank'; blankId: string }> = [];
  const regex = /\{\{(\w+)\}\}/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Add text before the blank
    if (match.index > lastIndex) {
      parts.push({
        type: 'text',
        content: text.slice(lastIndex, match.index),
      });
    }

    // Add the blank
    parts.push({
      type: 'blank',
      blankId: match[1],
    });

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push({
      type: 'text',
      content: text.slice(lastIndex),
    });
  }

  return parts;
}
