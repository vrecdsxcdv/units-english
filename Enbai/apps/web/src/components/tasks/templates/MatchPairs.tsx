'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import type { TaskTemplateProps } from '../TaskRenderer';
import type { MatchPairsContent, MatchPairsAnswer } from '@enbai/types';

export default function MatchPairs({ task, onSubmit, onSkip, disabled }: TaskTemplateProps) {
  const content = task.content as MatchPairsContent;
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [pairs, setPairs] = useState<Array<{ leftId: string; rightId: string }>>([]);
  const [matchedLeft, setMatchedLeft] = useState<Set<string>>(new Set());
  const [matchedRight, setMatchedRight] = useState<Set<string>>(new Set());

  // Проверка формата данных
  const isValidContent = content && content.leftItems && Array.isArray(content.leftItems) && content.rightItems && Array.isArray(content.rightItems);

  // Защита от неправильного формата данных
  if (!isValidContent) {
    return (
      <div className="p-6 text-center text-gray-500">
        Ошибка: неверный формат задания
      </div>
    );
  }

  const handleLeftClick = (id: string) => {
    if (disabled || matchedLeft.has(id)) return;
    setSelectedLeft(id);
  };

  const handleRightClick = (id: string) => {
    if (disabled || !selectedLeft || matchedRight.has(id)) return;

    // Create a new pair
    const newPair = { leftId: selectedLeft, rightId: id };
    setPairs((prev) => [...prev, newPair]);
    setMatchedLeft((prev) => new Set([...prev, selectedLeft]));
    setMatchedRight((prev) => new Set([...prev, id]));
    setSelectedLeft(null);
  };

  const handleUndo = () => {
    if (pairs.length === 0) return;

    const lastPair = pairs[pairs.length - 1];
    setPairs((prev) => prev.slice(0, -1));
    setMatchedLeft((prev) => {
      const next = new Set(prev);
      next.delete(lastPair.leftId);
      return next;
    });
    setMatchedRight((prev) => {
      const next = new Set(prev);
      next.delete(lastPair.rightId);
      return next;
    });
  };

  const handleSubmit = () => {
    const answer: MatchPairsAnswer = {
      type: 'match_pairs',
      pairs,
    };
    onSubmit(answer);
  };

  const allMatched =
    matchedLeft.size === content.leftItems.length &&
    matchedRight.size === content.rightItems.length;

  return (
    <div className="p-6">
      {/* Instructions */}
      <p className="text-sm text-gray-500 mb-4">
        {content.instruction || 'Соедини элементы слева с их парами справа.'}
      </p>

      {/* Matching area */}
      <div className="flex gap-8">
        {/* Left column */}
        <div className="flex-1 space-y-3">
          {content.leftItems.map((item) => {
            const isMatched = matchedLeft.has(item.id);
            const isSelected = selectedLeft === item.id;
            const pair = pairs.find((p) => p.leftId === item.id);
            const pairIndex = pair ? pairs.indexOf(pair) : -1;

            return (
              <button
                key={item.id}
                onClick={() => handleLeftClick(item.id)}
                disabled={disabled || isMatched}
                className={cn(
                  'w-full p-4 rounded-lg border-2 text-left transition-all',
                  'focus:outline-none focus:ring-2 focus:ring-primary-500',
                  isMatched
                    ? 'border-success-300 bg-success-50 text-success-700'
                    : isSelected
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50',
                  disabled && !isMatched && 'opacity-50 cursor-not-allowed'
                )}
              >
                <div className="flex items-center justify-between">
                  <span>{item.text}</span>
                  {isMatched && (
                    <span className="text-xs font-medium text-success-600 bg-success-100 px-2 py-1 rounded">
                      {pairIndex + 1}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Connection lines area - visual indicator */}
        <div className="w-8 flex items-center justify-center">
          <div className="h-full w-0.5 bg-gray-200"></div>
        </div>

        {/* Right column */}
        <div className="flex-1 space-y-3">
          {content.rightItems.map((item) => {
            const isMatched = matchedRight.has(item.id);
            const pair = pairs.find((p) => p.rightId === item.id);
            const pairIndex = pair ? pairs.indexOf(pair) : -1;

            return (
              <button
                key={item.id}
                onClick={() => handleRightClick(item.id)}
                disabled={disabled || isMatched || !selectedLeft}
                className={cn(
                  'w-full p-4 rounded-lg border-2 text-left transition-all',
                  'focus:outline-none focus:ring-2 focus:ring-primary-500',
                  isMatched
                    ? 'border-success-300 bg-success-50 text-success-700'
                    : selectedLeft && !isMatched
                    ? 'border-gray-200 hover:border-primary-500 hover:bg-primary-50 cursor-pointer'
                    : 'border-gray-200',
                  (disabled || !selectedLeft) && !isMatched && 'opacity-50 cursor-not-allowed'
                )}
              >
                <div className="flex items-center justify-between">
                  <span>{item.text}</span>
                  {isMatched && (
                    <span className="text-xs font-medium text-success-600 bg-success-100 px-2 py-1 rounded">
                      {pairIndex + 1}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Progress and undo */}
      <div className="flex items-center justify-between mt-6">
        <p className="text-sm text-gray-500">
          Соединено: {pairs.length} / {content.leftItems.length}
        </p>
        {pairs.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleUndo}
            disabled={disabled}
          >
            Отменить
          </Button>
        )}
      </div>

      {/* Actions */}
      <div className="flex justify-between mt-6">
        {onSkip && task.uiHints?.allowSkip !== false && (
          <Button variant="ghost" onClick={onSkip} disabled={disabled}>
            Пропустить
          </Button>
        )}
        <Button
          onClick={handleSubmit}
          disabled={disabled || !allMatched}
          className="ml-auto"
        >
          Ответить
        </Button>
      </div>
    </div>
  );
}
