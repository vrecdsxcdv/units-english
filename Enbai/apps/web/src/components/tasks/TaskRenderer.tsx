'use client';

import { Suspense, lazy, ComponentType } from 'react';
import type { TaskPayload, UserAnswer } from '@enbai/types';

// Loading skeleton for tasks
function TaskSkeleton() {
  return (
    <div className="animate-pulse space-y-4 p-6">
      <div className="h-6 bg-gray-200 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      <div className="space-y-3 mt-8">
        <div className="h-12 bg-gray-200 rounded"></div>
        <div className="h-12 bg-gray-200 rounded"></div>
        <div className="h-12 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}

// Props for all task templates
export interface TaskTemplateProps {
  task: TaskPayload;
  onSubmit: (answer: UserAnswer) => void;
  onSkip?: () => void;
  disabled?: boolean;
}

// Lazy load templates
const MultipleChoice = lazy(() => import('./templates/MultipleChoice'));
const FillBlanks = lazy(() => import('./templates/FillBlanks'));
const MatchPairs = lazy(() => import('./templates/MatchPairs'));
const ReorderSentence = lazy(() => import('./templates/ReorderSentence'));
const ErrorCorrection = lazy(() => import('./templates/ErrorCorrection'));

// Template registry by templateId
const templateRegistry: Record<string, ComponentType<TaskTemplateProps>> = {
  multiple_choice_v1: MultipleChoice,
  multiple_choice_image_v1: MultipleChoice,
  fill_blanks_v1: FillBlanks,
  fill_blanks_v2: FillBlanks,
  fill_blanks_wordbank_v1: FillBlanks,
  match_pairs_v1: MatchPairs,
  match_pairs_image_v1: MatchPairs,
  reorder_sentence_v1: ReorderSentence,
  reorder_paragraph_v1: ReorderSentence,
  error_correction_v1: ErrorCorrection,
};

// Fallback registry by content.type (for AI-generated tasks)
const contentTypeRegistry: Record<string, ComponentType<TaskTemplateProps>> = {
  multiple_choice: MultipleChoice,
  fill_blanks: FillBlanks,
  match_pairs: MatchPairs,
  reorder: ReorderSentence,
  error_correction: ErrorCorrection,
};

// Fallback template for unknown types
function FallbackTemplate({ task, onSubmit }: TaskTemplateProps) {
  return (
    <div className="p-6 text-center">
      <p className="text-gray-500">
        Unknown task template: {task.templateId}
      </p>
      <p className="text-sm text-gray-400 mt-2">
        Task type: {task.type}
      </p>
    </div>
  );
}

interface TaskRendererProps {
  task: TaskPayload;
  onSubmit: (answer: UserAnswer) => void;
  onSkip?: () => void;
  disabled?: boolean;
}

export function TaskRenderer({ task, onSubmit, onSkip, disabled }: TaskRendererProps) {
  // First try templateId, then fall back to content.type
  const contentType = (task.content as any)?.type;
  const Template = templateRegistry[task.templateId]
    || (contentType && contentTypeRegistry[contentType])
    || FallbackTemplate;

  return (
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
      {/* Task header */}
      <div className="px-6 py-4 border-b bg-gray-50">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium text-gray-900">
              {task.objectives[0] || 'Practice Task'}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              {task.type.replace('_', ' ')} • Difficulty {task.difficulty}/10
            </p>
          </div>
          {task.uiHints?.showTimer && (
            <div className="text-sm text-gray-500">
              ~{Math.ceil((task.expectedTimeSeconds || 60) / 60)} min
            </div>
          )}
        </div>
      </div>

      {/* Task content */}
      <Suspense fallback={<TaskSkeleton />}>
        <Template
          task={task}
          onSubmit={onSubmit}
          onSkip={onSkip}
          disabled={disabled}
        />
      </Suspense>
    </div>
  );
}
