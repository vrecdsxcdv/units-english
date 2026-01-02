'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import type { TaskTemplateProps } from '../TaskRenderer';
import type { ErrorCorrectionContent, ErrorCorrectionAnswer } from '@enbai/types';

interface Selection {
  startIndex: number;
  endIndex: number;
  text: string;
}

interface Correction {
  startIndex: number;
  endIndex: number;
  original: string;
  replacement: string;
}

export default function ErrorCorrection({ task, onSubmit, onSkip, disabled }: TaskTemplateProps) {
  const content = task.content as ErrorCorrectionContent;
  const [selection, setSelection] = useState<Selection | null>(null);
  const [corrections, setCorrections] = useState<Correction[]>([]);
  const [replacementInput, setReplacementInput] = useState('');
  const [showInput, setShowInput] = useState(false);

  // Проверка формата данных
  const isValidContent = content && content.sentence;

  // Защита от неправильного формата данных
  if (!isValidContent) {
    return (
      <div className="p-6 text-center text-gray-500">
        Ошибка: неверный формат задания
      </div>
    );
  }

  const handleTextSelect = () => {
    if (disabled) return;

    const sel = window.getSelection();
    if (!sel || sel.isCollapsed || !sel.rangeCount) return;

    const range = sel.getRangeAt(0);
    const container = range.commonAncestorContainer;

    // Find the sentence span
    let sentenceElement = container as Element;
    while (sentenceElement && !sentenceElement.classList?.contains('sentence')) {
      sentenceElement = sentenceElement.parentElement as Element;
    }

    if (!sentenceElement) return;

    const text = sel.toString().trim();
    if (!text) return;

    // Get the position in the original sentence
    const fullText = content.sentence;
    const startIndex = fullText.indexOf(text);

    if (startIndex === -1) return;

    setSelection({
      startIndex,
      endIndex: startIndex + text.length,
      text,
    });
    setReplacementInput('');
    setShowInput(true);

    // Clear browser selection
    sel.removeAllRanges();
  };

  const handleAddCorrection = () => {
    if (!selection || !replacementInput.trim()) return;

    const newCorrection: Correction = {
      startIndex: selection.startIndex,
      endIndex: selection.endIndex,
      original: selection.text,
      replacement: replacementInput.trim(),
    };

    setCorrections((prev) => [...prev, newCorrection]);
    setSelection(null);
    setReplacementInput('');
    setShowInput(false);
  };

  const handleRemoveCorrection = (index: number) => {
    setCorrections((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    const answer: ErrorCorrectionAnswer = {
      type: 'error_correction',
      corrections: corrections.map((c) => ({
        startIndex: c.startIndex,
        endIndex: c.endIndex,
        replacement: c.replacement,
      })),
    };
    onSubmit(answer);
  };

  // Render sentence with highlights for corrections
  const renderSentence = () => {
    let result = [];
    let lastIndex = 0;

    // Sort corrections by startIndex
    const sortedCorrections = [...corrections].sort((a, b) => a.startIndex - b.startIndex);

    for (const correction of sortedCorrections) {
      // Text before correction
      if (correction.startIndex > lastIndex) {
        result.push(
          <span key={`text-${lastIndex}`}>
            {content.sentence.slice(lastIndex, correction.startIndex)}
          </span>
        );
      }

      // Corrected text
      result.push(
        <span
          key={`correction-${correction.startIndex}`}
          className="relative"
        >
          <span className="line-through text-error-500">
            {correction.original}
          </span>
          <span className="ml-1 text-success-600 font-medium">
            {correction.replacement}
          </span>
        </span>
      );

      lastIndex = correction.endIndex;
    }

    // Remaining text
    if (lastIndex < content.sentence.length) {
      result.push(
        <span key={`text-end`}>
          {content.sentence.slice(lastIndex)}
        </span>
      );
    }

    return result;
  };

  return (
    <div className="p-6">
      {/* Instructions */}
      <p className="text-sm text-gray-500 mb-4">
        {content.instruction || 'Выдели ошибки в предложении и исправь их.'}
      </p>

      <p className="text-sm text-gray-400 mb-2">
        Совет: выдели текст мышкой чтобы отметить ошибку
      </p>

      {/* Sentence */}
      <div
        className="p-4 bg-gray-50 rounded-lg text-lg leading-relaxed sentence select-text cursor-text"
        onMouseUp={handleTextSelect}
      >
        {corrections.length === 0 ? content.sentence : renderSentence()}
      </div>

      {/* Replacement input */}
      {showInput && selection && (
        <div className="mt-4 p-4 bg-primary-50 rounded-lg border border-primary-200">
          <p className="text-sm text-primary-700 mb-2">
            Заменить "<span className="font-medium">{selection.text}</span>" на:
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              value={replacementInput}
              onChange={(e) => setReplacementInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleAddCorrection();
                if (e.key === 'Escape') {
                  setShowInput(false);
                  setSelection(null);
                }
              }}
              placeholder="Введи исправление..."
              className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              autoFocus
            />
            <Button onClick={handleAddCorrection} disabled={!replacementInput.trim()}>
              Добавить
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                setShowInput(false);
                setSelection(null);
              }}
            >
              Отмена
            </Button>
          </div>
        </div>
      )}

      {/* Corrections list */}
      {corrections.length > 0 && (
        <div className="mt-4">
          <p className="text-sm font-medium text-gray-700 mb-2">
            Твои исправления ({corrections.length}):
          </p>
          <div className="space-y-2">
            {corrections.map((correction, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 bg-gray-100 rounded-lg"
              >
                <span className="text-sm">
                  <span className="line-through text-error-500">
                    {correction.original}
                  </span>
                  {' → '}
                  <span className="text-success-600 font-medium">
                    {correction.replacement}
                  </span>
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleRemoveCorrection(index)}
                  disabled={disabled}
                >
                  Удалить
                </Button>
              </div>
            ))}
          </div>
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
          disabled={disabled || corrections.length === 0}
          className="ml-auto"
        >
          Ответить
        </Button>
      </div>
    </div>
  );
}
