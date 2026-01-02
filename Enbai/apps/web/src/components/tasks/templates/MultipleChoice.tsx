'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import type { TaskTemplateProps } from '../TaskRenderer';
import type { MultipleChoiceContent, MultipleChoiceAnswer } from '@enbai/types';

export default function MultipleChoice({ task, onSubmit, onSkip, disabled }: TaskTemplateProps) {
  const content = task.content as MultipleChoiceContent;
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Проверка формата данных
  const isValidContent = content && content.options && Array.isArray(content.options);

  // Защита от неправильного формата данных
  if (!isValidContent) {
    return (
      <div className="p-6 text-center text-gray-500">
        Ошибка: неверный формат задания
      </div>
    );
  }

  const handleSubmit = () => {
    if (!selectedOption) return;

    const answer: MultipleChoiceAnswer = {
      type: 'multiple_choice',
      selectedOptionId: selectedOption,
    };

    onSubmit(answer);
  };

  return (
    <div className="p-6">
      {/* Question */}
      <div className="mb-6">
        <p className="text-lg text-gray-900">{content.question}</p>
      </div>

      {/* Media if present */}
      {content.media && content.media.type === 'image' && (
        <div className="mb-6">
          <img
            src={content.media.url}
            alt={content.media.altText || 'Task image'}
            className="max-w-full h-auto rounded-lg"
          />
        </div>
      )}

      {/* Options */}
      <div className="space-y-3">
        {content.options.map((option) => (
          <button
            key={option.id}
            onClick={() => setSelectedOption(option.id)}
            disabled={disabled}
            className={cn(
              'w-full p-4 text-left rounded-lg border-2 transition-all',
              'hover:border-primary-300 hover:bg-primary-50',
              'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
              selectedOption === option.id
                ? 'border-primary-500 bg-primary-50'
                : 'border-gray-200 bg-white',
              disabled && 'opacity-50 cursor-not-allowed'
            )}
          >
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  'w-6 h-6 rounded-full border-2 flex items-center justify-center',
                  selectedOption === option.id
                    ? 'border-primary-500 bg-primary-500'
                    : 'border-gray-300'
                )}
              >
                {selectedOption === option.id && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>
              <span className="text-gray-900">{option.text}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Actions */}
      <div className="flex justify-between mt-8">
        {onSkip && task.uiHints?.allowSkip !== false && (
          <Button variant="ghost" onClick={onSkip} disabled={disabled}>
            Пропустить
          </Button>
        )}
        <Button
          onClick={handleSubmit}
          disabled={disabled || !selectedOption}
          className="ml-auto"
        >
          Ответить
        </Button>
      </div>
    </div>
  );
}
