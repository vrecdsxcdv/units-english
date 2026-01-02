'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2, CheckCircle, XCircle, ArrowRight, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';
import { api } from '@/lib/api/client';

interface Question {
  id: string;
  type: 'multiple_choice' | 'fill_blank' | 'error_correction';
  difficulty: number;
  question: string;
  options?: string[];
}

interface TestResult {
  score: {
    correct: number;
    total: number;
    percentage: number;
  };
  level: string;
  skillVector: Record<string, number>;
  results: Array<{
    questionId: string;
    correct: boolean;
    correctAnswer?: string | string[];
    explanation?: string;
  }>;
}

export default function OnboardingPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<TestResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Load questions on mount
  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const response = await api.get<{ questions: Question[]; totalQuestions: number }>(
          '/onboarding/questions'
        );
        setQuestions(response.questions);
        setIsLoading(false);
      } catch (err: any) {
        setError(err.message || 'Не удалось загрузить вопросы');
        setIsLoading(false);
      }
    };
    loadQuestions();
  }, []);

  const currentQuestion = questions[currentIndex];
  const progress = questions.length > 0 ? ((currentIndex + 1) / questions.length) * 100 : 0;

  const handleAnswer = (answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: answer,
    }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);

    try {
      const formattedAnswers = Object.entries(answers).map(([questionId, answer]) => ({
        questionId,
        answer,
      }));

      const response = await api.post<TestResult>('/onboarding/submit', {
        answers: formattedAnswers,
      });

      setResult(response);
    } catch (err: any) {
      setError(err.message || 'Не удалось отправить ответы');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFinish = () => {
    router.push('/chat');
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4 text-[hsl(var(--primary))]" />
          <p className="text-muted-foreground">Загружаем тест...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error && !result) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <XCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <p className="text-red-500 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-[hsl(var(--primary))] text-white border-2 border-foreground"
          >
            Попробовать снова
          </button>
        </div>
      </div>
    );
  }

  // Results state
  if (result) {
    const levelColors: Record<string, string> = {
      A1: 'bg-red-100 text-red-700 border-red-500',
      A2: 'bg-orange-100 text-orange-700 border-orange-500',
      B1: 'bg-yellow-100 text-yellow-700 border-yellow-500',
      B2: 'bg-green-100 text-green-700 border-green-500',
      C1: 'bg-blue-100 text-blue-700 border-blue-500',
      C2: 'bg-purple-100 text-purple-700 border-purple-500',
    };

    return (
      <div className="max-w-2xl mx-auto py-8">
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-4 bg-[hsl(var(--primary))] rounded-full flex items-center justify-center">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Тест завершён!</h1>
          <p className="text-muted-foreground">Вот твои результаты</p>
        </div>

        {/* Score Card */}
        <div className="bg-white border-4 border-foreground p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-bold">Твой уровень</span>
            <span
              className={cn(
                'text-2xl font-black px-4 py-1 border-2',
                levelColors[result.level] || 'bg-gray-100'
              )}
            >
              {result.level}
            </span>
          </div>

          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span>Правильных ответов</span>
              <span className="font-bold">
                {result.score.correct} / {result.score.total}
              </span>
            </div>
            <div className="h-4 bg-muted border-2 border-foreground">
              <div
                className="h-full bg-[hsl(var(--primary))]"
                style={{ width: `${result.score.percentage}%` }}
              />
            </div>
            <div className="text-right text-sm font-bold mt-1">{result.score.percentage}%</div>
          </div>
        </div>

        {/* Skills Breakdown */}
        <div className="bg-white border-4 border-foreground p-6 mb-6">
          <h3 className="font-bold text-lg mb-4">Твои навыки</h3>
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(result.skillVector).map(([skill, value]) => (
              <div key={skill} className="flex items-center gap-2">
                <div className="flex-1">
                  <div className="text-xs font-medium uppercase mb-1">
                    {skillLabels[skill] || skill}
                  </div>
                  <div className="h-2 bg-muted border border-foreground">
                    <div
                      className="h-full bg-[hsl(var(--primary))]"
                      style={{ width: `${value * 100}%` }}
                    />
                  </div>
                </div>
                <span className="text-xs font-bold w-8">{Math.round(value * 100)}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Continue Button */}
        <button
          onClick={handleFinish}
          className={cn(
            'w-full py-4 text-lg font-bold',
            'bg-[hsl(var(--primary))] text-white',
            'border-4 border-foreground',
            'hover:opacity-90 transition-opacity',
            'flex items-center justify-center gap-2'
          )}
        >
          Начать обучение
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    );
  }

  // Test state
  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === questions.length;
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : null;

  return (
    <div className="max-w-2xl mx-auto py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Определим твой уровень</h1>
        <p className="text-muted-foreground">
          Ответь на вопросы, чтобы мы подобрали упражнения под тебя
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span className="font-medium">
            Вопрос {currentIndex + 1} из {questions.length}
          </span>
          <span className="text-muted-foreground">{answeredCount} отвечено</span>
        </div>
        <div className="h-3 bg-muted border-2 border-foreground">
          <div
            className="h-full bg-[hsl(var(--primary))] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      {currentQuestion && (
        <div className="bg-white border-4 border-foreground p-6 mb-6">
          {/* Difficulty Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span
              className={cn(
                'text-xs font-bold px-2 py-1 border-2 border-foreground',
                currentQuestion.difficulty <= 3
                  ? 'bg-green-100'
                  : currentQuestion.difficulty <= 6
                    ? 'bg-yellow-100'
                    : 'bg-red-100'
              )}
            >
              {currentQuestion.difficulty <= 3
                ? 'Легко'
                : currentQuestion.difficulty <= 6
                  ? 'Средне'
                  : 'Сложно'}
            </span>
          </div>

          {/* Question Text */}
          <h2 className="text-xl font-bold mb-6">{currentQuestion.question}</h2>

          {/* Options */}
          {currentQuestion.options && (
            <div className="space-y-3">
              {currentQuestion.options.map((option, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(option)}
                  className={cn(
                    'w-full text-left px-4 py-3 border-2 transition-all',
                    currentAnswer === option
                      ? 'border-[hsl(var(--primary))] bg-[hsl(var(--primary))]/10'
                      : 'border-foreground hover:bg-muted'
                  )}
                >
                  <span className="font-medium">{option}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center gap-4">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={cn(
            'px-6 py-3 font-bold border-2 border-foreground',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'hover:bg-muted transition-colors'
          )}
        >
          Назад
        </button>

        <div className="flex-1" />

        {currentIndex < questions.length - 1 ? (
          <button
            onClick={handleNext}
            disabled={!currentAnswer}
            className={cn(
              'px-6 py-3 font-bold',
              'bg-[hsl(var(--primary))] text-white border-2 border-foreground',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              'hover:opacity-90 transition-opacity'
            )}
          >
            Далее
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!allAnswered || isSubmitting}
            className={cn(
              'px-6 py-3 font-bold',
              'bg-[hsl(var(--primary))] text-white border-2 border-foreground',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              'hover:opacity-90 transition-opacity',
              'flex items-center gap-2'
            )}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Проверяем...
              </>
            ) : (
              <>
                Завершить тест
                <CheckCircle className="w-4 h-4" />
              </>
            )}
          </button>
        )}
      </div>

      {/* Question Dots */}
      <div className="flex flex-wrap gap-2 mt-8 justify-center">
        {questions.map((q, i) => (
          <button
            key={q.id}
            onClick={() => setCurrentIndex(i)}
            className={cn(
              'w-8 h-8 text-xs font-bold border-2 border-foreground',
              'transition-colors',
              i === currentIndex
                ? 'bg-[hsl(var(--primary))] text-white'
                : answers[q.id]
                  ? 'bg-green-100'
                  : 'bg-white hover:bg-muted'
            )}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

const skillLabels: Record<string, string> = {
  grammar: 'Грамматика',
  vocabulary: 'Словарный запас',
  pronunciation: 'Произношение',
  listening: 'Аудирование',
  speaking: 'Разговорная речь',
  slang: 'Сленг',
  word_formation: 'Словообразование',
  fluency: 'Беглость',
  writing: 'Письмо',
  comprehension: 'Понимание',
};
