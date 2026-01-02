'use client';

import { useState, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import type { TaskTemplateProps } from '../TaskRenderer';
import type { ReorderContent, ReorderAnswer } from '@enbai/types';

export default function ReorderSentence({ task, onSubmit, onSkip, disabled }: TaskTemplateProps) {
  const content = task.content as ReorderContent;

  // Проверка формата данных
  const isValidContent = content && content.items && Array.isArray(content.items);

  // Shuffle items only once on mount (memoized)
  const shuffledItems = useMemo(() => {
    if (!isValidContent) return [];
    return [...content.items].sort(() => Math.random() - 0.5);
  }, [isValidContent ? content.items : null]);

  const [available, setAvailable] = useState(shuffledItems);
  const [ordered, setOrdered] = useState<typeof content.items>([]);

  // Защита от неправильного формата данных
  if (!isValidContent) {
    return (
      <div className="p-6 text-center text-gray-500">
        Ошибка: неверный формат задания
      </div>
    );
  }

  const handleAddItem = (item: typeof content.items[0]) => {
    if (disabled) return;
    setAvailable((prev) => prev.filter((i) => i.id !== item.id));
    setOrdered((prev) => [...prev, item]);
  };

  const handleRemoveItem = (item: typeof content.items[0]) => {
    if (disabled) return;
    setOrdered((prev) => prev.filter((i) => i.id !== item.id));
    setAvailable((prev) => [...prev, item]);
  };

  const handleClear = () => {
    setAvailable([...content.items].sort(() => Math.random() - 0.5));
    setOrdered([]);
  };

  const handleSubmit = () => {
    const answer: ReorderAnswer = {
      type: 'reorder',
      order: ordered.map((item) => item.id),
    };
    onSubmit(answer);
  };

  const allPlaced = ordered.length === content.items.length;

  return (
    <div className="p-6">
      {/* Instructions */}
      <p className="text-sm text-gray-500 mb-4">
        {content.instruction || 'Расположи слова в правильном порядке.'}
      </p>

      {/* Answer area */}
      <div className="min-h-16 p-4 border-2 border-dashed border-gray-300 rounded-lg mb-6 bg-gray-50">
        {ordered.length === 0 ? (
          <p className="text-gray-400 text-center">
            Нажми на слова ниже чтобы составить ответ
          </p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {ordered.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleRemoveItem(item)}
                disabled={disabled}
                className={cn(
                  'px-4 py-2 bg-primary-100 text-primary-700 rounded-lg',
                  'hover:bg-primary-200 transition-colors',
                  'focus:outline-none focus:ring-2 focus:ring-primary-500',
                  disabled && 'opacity-50 cursor-not-allowed'
                )}
              >
                <span className="text-xs text-primary-500 mr-1">{index + 1}.</span>
                {item.text}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Available words */}
      <div className="p-4 bg-gray-100 rounded-lg">
        <p className="text-sm font-medium text-gray-700 mb-3">Доступные слова:</p>
        <div className="flex flex-wrap gap-2">
          {available.length === 0 ? (
            <p className="text-gray-400 text-sm">Все слова расставлены!</p>
          ) : (
            available.map((item) => (
              <button
                key={item.id}
                onClick={() => handleAddItem(item)}
                disabled={disabled}
                className={cn(
                  'px-4 py-2 bg-white border border-gray-300 rounded-lg',
                  'hover:border-primary-400 hover:bg-primary-50 transition-colors',
                  'focus:outline-none focus:ring-2 focus:ring-primary-500',
                  disabled && 'opacity-50 cursor-not-allowed'
                )}
              >
                {item.text}
              </button>
            ))
          )}
        </div>
      </div>

      {/* Clear button */}
      {ordered.length > 0 && (
        <div className="mt-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClear}
            disabled={disabled}
          >
            Очистить всё
          </Button>
        </div>
      )}

      {/* Actions */}
      <div className="flex justify-between mt-6">
        {onSkip && task.uiHints?.allowSkip !== false && (
          <Button variant="ghost" onClick={onSkip} disabled={disabled}>
            Пропустить
          </Button>
        )}
        <Button
          onClick={handleSubmit}
          disabled={disabled || !allPlaced}
          className="ml-auto"
        >
          Ответить
        </Button>
      </div>
    </div>
  );
}
