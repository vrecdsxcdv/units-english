"use client";

import { useState } from "react";
import CheckableExercise, { FillItem } from "@/components/lesson/CheckableExercise";

interface Props {
  step: number;
}

// Email Writing Practice Component with AI Check
function EmailWritingPractice() {
  const [emailType, setEmailType] = useState<"formal" | "informal">("formal");
  const [emailText, setEmailText] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const tasks = {
    formal: {
      title: "Формальное письмо",
      scenario: "Вы хотите подать заявку на стажировку в международной IT-компании. Напишите формальное письмо HR-менеджеру с просьбой рассмотреть вашу кандидатуру.",
      hints: [
        "Используйте Dear Sir or Madam или Dear Hiring Manager",
        "Укажите цель письма в первом предложении",
        "Кратко опишите свои навыки",
        "Завершите фразой I look forward to hearing from you",
        "Подпишите Yours faithfully или Yours sincerely",
      ],
    },
    informal: {
      title: "Неформальное письмо",
      scenario: "Напишите письмо другу, приглашая его/её на свой день рождения в следующую субботу. Расскажите, что планируете и кто ещё придёт.",
      hints: [
        "Используйте Hey! или Hi + имя",
        "Можно использовать сокращения (I'm, you're, gonna)",
        "Добавьте эмоции и восклицательные знаки",
        "Завершите дружеским прощанием (Cheers, Take care, Love)",
      ],
    },
  };

  const currentTask = tasks[emailType];

  async function checkEmail() {
    if (!emailText.trim()) {
      setError("Напишите письмо перед проверкой");
      return;
    }

    setIsLoading(true);
    setError(null);
    setFeedback(null);

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content: `You are an English teacher checking student emails. The student is learning to write ${emailType} emails in English.

Task for the student: ${currentTask.scenario}

Analyze the email and provide feedback in Russian. Include:
1. Оценка (от 1 до 10)
2. Что хорошо (2-3 пункта)
3. Что можно улучшить (2-3 пункта с конкретными исправлениями)
4. Исправленная версия письма (если есть ошибки)

Be encouraging but point out grammar mistakes, wrong register (formal/informal mismatch), and structural issues.`,
            },
            {
              role: "user",
              content: emailText,
            },
          ],
          temperature: 0.7,
          max_tokens: 1000,
        }),
      });

      if (!response.ok) {
        throw new Error("Ошибка API");
      }

      const data = await response.json();
      setFeedback(data.choices[0]?.message?.content || "Не удалось получить ответ");
    } catch (err) {
      setError("Ошибка при проверке. Попробуйте ещё раз.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-2">✍️ Практика: Напишите письмо</h2>
        <p className="text-indigo-100">
          Напишите письмо и получите проверку от AI-учителя
        </p>
      </div>

      {/* Task Type Selector */}
      <div className="flex gap-3">
        <button
          onClick={() => { setEmailType("formal"); setFeedback(null); setEmailText(""); }}
          className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
            emailType === "formal"
              ? "bg-indigo-600 text-white shadow-lg"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          🎩 Формальное
        </button>
        <button
          onClick={() => { setEmailType("informal"); setFeedback(null); setEmailText(""); }}
          className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
            emailType === "informal"
              ? "bg-green-600 text-white shadow-lg"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          👋 Неформальное
        </button>
      </div>

      {/* Task Description */}
      <div className={`rounded-xl p-5 border-2 ${
        emailType === "formal"
          ? "bg-indigo-50 border-indigo-200"
          : "bg-green-50 border-green-200"
      }`}>
        <h3 className="font-bold text-lg text-slate-800 mb-2">📝 Задание:</h3>
        <p className="text-slate-700">{currentTask.scenario}</p>

        <div className="mt-4">
          <h4 className="font-medium text-slate-700 mb-2">💡 Подсказки:</h4>
          <ul className="space-y-1 text-sm text-slate-600">
            {currentTask.hints.map((hint, i) => (
              <li key={i}>• {hint}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Text Area */}
      <div>
        <label className="block font-medium text-slate-700 mb-2">
          Ваше письмо:
        </label>
        <textarea
          value={emailText}
          onChange={(e) => setEmailText(e.target.value)}
          placeholder={emailType === "formal"
            ? "Dear Sir or Madam,\n\nI am writing to..."
            : "Hey!\n\nHow's it going?..."
          }
          className="w-full h-64 p-4 rounded-xl border-2 border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none resize-none font-mono text-sm"
        />
        <p className="text-sm text-slate-500 mt-1">
          {emailText.length} символов
        </p>
      </div>

      {/* Submit Button */}
      <button
        onClick={checkEmail}
        disabled={isLoading || !emailText.trim()}
        className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
          isLoading || !emailText.trim()
            ? "bg-slate-300 text-slate-500 cursor-not-allowed"
            : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:scale-[1.02]"
        }`}
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Проверяю...
          </span>
        ) : (
          "🚀 Отправить на проверку"
        )}
      </button>

      {/* Error */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700">
          ❌ {error}
        </div>
      )}

      {/* Feedback */}
      {feedback && (
        <div className="bg-white rounded-xl border-2 border-green-300 p-6 shadow-lg">
          <h3 className="font-bold text-lg text-green-800 mb-4 flex items-center gap-2">
            ✅ Результат проверки
          </h3>
          <div className="prose prose-sm max-w-none text-slate-700 whitespace-pre-wrap">
            {feedback}
          </div>
        </div>
      )}

      {/* Completion Message */}
      <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
        <h3 className="font-bold text-amber-800 mb-2">🎉 Поздравляем!</h3>
        <p className="text-slate-700">
          Вы завершили урок по написанию формальных и неформальных email!
          Практикуйтесь, отправляя разные типы писем на проверку.
        </p>
      </div>
    </div>
  );
}

// Email Template Component
function EmailTemplate({
  type,
  subject,
  greeting,
  body,
  closing,
  signature,
  notes,
}: {
  type: "formal" | "semi-formal" | "informal";
  subject: string;
  greeting: string;
  body: string[];
  closing: string;
  signature: string;
  notes?: string[];
}) {
  const colors = {
    formal: "border-indigo-300 bg-indigo-50/50",
    "semi-formal": "border-amber-300 bg-amber-50/50",
    informal: "border-green-300 bg-green-50/50",
  };

  const labels = {
    formal: { text: "Formal", bg: "bg-indigo-100 text-indigo-700" },
    "semi-formal": { text: "Semi-formal", bg: "bg-amber-100 text-amber-700" },
    informal: { text: "Informal", bg: "bg-green-100 text-green-700" },
  };

  return (
    <div className={`rounded-xl border-2 ${colors[type]} overflow-hidden`}>
      <div className="bg-white/80 px-4 py-2 border-b flex items-center justify-between">
        <span className={`text-xs px-2 py-1 rounded-full ${labels[type].bg}`}>
          {labels[type].text}
        </span>
        <span className="text-sm text-slate-600">📧 {subject}</span>
      </div>
      <div className="p-4 space-y-3 font-mono text-sm">
        <p className="text-slate-700">{greeting}</p>
        {body.map((para, i) => (
          <p key={i} className="text-slate-600">{para}</p>
        ))}
        <p className="text-slate-700">{closing}</p>
        <p className="text-slate-800 font-medium">{signature}</p>
      </div>
      {notes && (
        <div className="bg-slate-100 px-4 py-2 border-t">
          {notes.map((note, i) => (
            <p key={i} className="text-xs text-slate-500">💡 {note}</p>
          ))}
        </div>
      )}
    </div>
  );
}

// Phrase Comparison Component
function PhraseComparison({
  formal,
  informal,
  context,
}: {
  formal: string;
  informal: string;
  context: string;
}) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
      <p className="text-xs text-slate-500 mb-3">📝 {context}</p>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-indigo-50 rounded-lg p-3 border border-indigo-200">
          <span className="text-xs text-indigo-600 font-medium">Formal</span>
          <p className="text-slate-800 mt-1">{formal}</p>
        </div>
        <div className="bg-green-50 rounded-lg p-3 border border-green-200">
          <span className="text-xs text-green-600 font-medium">Informal</span>
          <p className="text-slate-800 mt-1">{informal}</p>
        </div>
      </div>
    </div>
  );
}

// Structure Block Component
function StructureBlock({
  title,
  icon,
  examples,
  type,
}: {
  title: string;
  icon: string;
  examples: string[];
  type: "formal" | "informal";
}) {
  const [showAll, setShowAll] = useState(false);
  const color = type === "formal"
    ? "bg-indigo-100 border-indigo-300 text-indigo-800"
    : "bg-green-100 border-green-300 text-green-800";

  return (
    <div className={`rounded-xl border-2 p-4 ${color}`}>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xl">{icon}</span>
        <h4 className="font-bold">{title}</h4>
      </div>
      <ul className="space-y-2">
        {examples.slice(0, showAll ? examples.length : 3).map((ex, i) => (
          <li key={i} className="text-sm flex items-start gap-2">
            <span>•</span>
            <span>{ex}</span>
          </li>
        ))}
      </ul>
      {examples.length > 3 && (
        <button
          className="text-xs mt-2 underline"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Свернуть" : `Ещё ${examples.length - 3}...`}
        </button>
      )}
    </div>
  );
}

// Tip Card Component
function TipCard({ emoji, title, description }: { emoji: string; title: string; description: string }) {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-200">
      <div className="flex items-start gap-3">
        <span className="text-2xl">{emoji}</span>
        <div>
          <h4 className="font-bold text-slate-800">{title}</h4>
          <p className="text-sm text-slate-600 mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function WritingEmails({ step }: Props) {
  // ═══════════════════════════════════════════════════════════════════
  // STEP 1: Introduction - Formal vs Informal
  // ═══════════════════════════════════════════════════════════════════
  if (step === 1) {
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-2">📧 Writing Formal & Informal Emails</h2>
          <p className="text-indigo-100">
            Умение писать письма на английском — важный навык для работы, учёбы и общения.
          </p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
          <h3 className="font-bold text-lg text-slate-800 mb-4">Когда писать какой тип?</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-200">
              <h4 className="font-bold text-indigo-800 flex items-center gap-2">
                <span>🎩</span> Formal (Формальные)
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>• Деловая переписка</li>
                <li>• Письма в организации</li>
                <li>• Жалобы и запросы</li>
                <li>• Первый контакт с незнакомыми</li>
                <li>• Заявления на работу</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <h4 className="font-bold text-green-800 flex items-center gap-2">
                <span>👋</span> Informal (Неформальные)
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>• Друзьям и семье</li>
                <li>• Знакомым коллегам</li>
                <li>• Приглашения</li>
                <li>• Благодарности друзьям</li>
                <li>• Поздравления</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
          <p className="text-amber-800 flex items-start gap-2">
            <span className="text-xl">💡</span>
            <span>
              <strong>Semi-formal</strong> — промежуточный стиль для коллег, с которыми вы знакомы,
              или для повторного контакта с клиентами.
            </span>
          </p>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 2: Email Structure Overview
  // ═══════════════════════════════════════════════════════════════════
  if (step === 2) {
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-slate-800">📋 Структура Email</h2>

        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg">
              <span className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">1</span>
              <div>
                <h4 className="font-bold text-slate-800">Subject Line</h4>
                <p className="text-sm text-slate-600">Тема письма — краткая и информативная</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg">
              <span className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">2</span>
              <div>
                <h4 className="font-bold text-slate-800">Greeting / Salutation</h4>
                <p className="text-sm text-slate-600">Приветствие получателя</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg">
              <span className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">3</span>
              <div>
                <h4 className="font-bold text-slate-800">Opening Line</h4>
                <p className="text-sm text-slate-600">Вступительная фраза — причина письма</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg">
              <span className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">4</span>
              <div>
                <h4 className="font-bold text-slate-800">Body</h4>
                <p className="text-sm text-slate-600">Основная часть — детали, информация, запросы</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg">
              <span className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">5</span>
              <div>
                <h4 className="font-bold text-slate-800">Closing Line</h4>
                <p className="text-sm text-slate-600">Заключительная фраза</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg">
              <span className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">6</span>
              <div>
                <h4 className="font-bold text-slate-800">Sign-off & Signature</h4>
                <p className="text-sm text-slate-600">Прощание и подпись</p>
              </div>
            </div>
          </div>
        </div>

        <TipCard
          emoji="✨"
          title="Правило 5 секунд"
          description="Получатель должен понять суть письма за 5 секунд, взглянув на тему и первый абзац."
        />
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 3: Greetings - Formal vs Informal
  // ═══════════════════════════════════════════════════════════════════
  if (step === 3) {
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-slate-800">👋 Приветствия (Greetings)</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <StructureBlock
            title="Formal Greetings"
            icon="🎩"
            type="formal"
            examples={[
              "Dear Mr/Mrs/Ms Smith,",
              "Dear Sir or Madam,",
              "Dear Hiring Manager,",
              "To Whom It May Concern,",
              "Dear Customer Service Team,",
              "Dear Professor Johnson,",
            ]}
          />

          <StructureBlock
            title="Informal Greetings"
            icon="👋"
            type="informal"
            examples={[
              "Hi John,",
              "Hey!",
              "Hello everyone,",
              "Hi there,",
              "Dear Tom, (semi-formal)",
              "Morning!",
            ]}
          />
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <h3 className="font-bold text-slate-800 mb-3">⚠️ Важные правила</h3>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="text-red-500">✗</span>
              <span><strong>Dear Friend</strong> — слишком общо для формального письма</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✓</span>
              <span>Используйте <strong>Ms</strong> если не знаете семейное положение женщины</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✓</span>
              <span>После приветствия в британском английском — запятая, в американском — двоеточие</span>
            </li>
          </ul>
        </div>

        <PhraseComparison
          context="Вы не знаете имя получателя"
          formal="Dear Sir or Madam,"
          informal="Hi there,"
        />
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 4: Opening Lines
  // ═══════════════════════════════════════════════════════════════════
  if (step === 4) {
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-slate-800">📝 Вступительные фразы (Opening Lines)</h2>

        <div className="bg-indigo-50 rounded-xl p-5 border border-indigo-200">
          <h3 className="font-bold text-indigo-800 mb-3">🎩 Formal Opening Lines</h3>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-3">
              <p className="font-medium text-slate-800">I am writing to inquire about...</p>
              <p className="text-sm text-slate-500">Пишу, чтобы узнать о...</p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="font-medium text-slate-800">I am writing with regard to...</p>
              <p className="text-sm text-slate-500">Пишу касательно...</p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="font-medium text-slate-800">I am writing to express my concern about...</p>
              <p className="text-sm text-slate-500">Пишу, чтобы выразить обеспокоенность...</p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="font-medium text-slate-800">Further to our conversation...</p>
              <p className="text-sm text-slate-500">В продолжение нашего разговора...</p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="font-medium text-slate-800">I would like to apply for the position of...</p>
              <p className="text-sm text-slate-500">Хотел бы подать заявку на должность...</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-xl p-5 border border-green-200">
          <h3 className="font-bold text-green-800 mb-3">👋 Informal Opening Lines</h3>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-3">
              <p className="font-medium text-slate-800">Just wanted to check in...</p>
              <p className="text-sm text-slate-500">Просто хотел узнать как дела...</p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="font-medium text-slate-800">Hope you&apos;re doing well!</p>
              <p className="text-sm text-slate-500">Надеюсь, у тебя всё хорошо!</p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="font-medium text-slate-800">Thanks for getting back to me!</p>
              <p className="text-sm text-slate-500">Спасибо, что ответил!</p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="font-medium text-slate-800">Long time no see!</p>
              <p className="text-sm text-slate-500">Давно не виделись!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 5: Closing Lines & Sign-offs
  // ═══════════════════════════════════════════════════════════════════
  if (step === 5) {
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-slate-800">✍️ Заключительные фразы и прощания</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <h3 className="font-bold text-indigo-700">🎩 Formal</h3>

            <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-200">
              <h4 className="font-medium text-slate-800 mb-2">Closing Lines:</h4>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• I look forward to hearing from you.</li>
                <li>• Please do not hesitate to contact me.</li>
                <li>• Thank you for your time and consideration.</li>
                <li>• I would appreciate a prompt reply.</li>
              </ul>
            </div>

            <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-200">
              <h4 className="font-medium text-slate-800 mb-2">Sign-offs:</h4>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• Yours sincerely, <span className="text-slate-500">(если знаете имя)</span></li>
                <li>• Yours faithfully, <span className="text-slate-500">(если не знаете)</span></li>
                <li>• Kind regards,</li>
                <li>• Best regards,</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-green-700">👋 Informal</h3>

            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <h4 className="font-medium text-slate-800 mb-2">Closing Lines:</h4>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• Can&apos;t wait to see you!</li>
                <li>• Let me know what you think!</li>
                <li>• Talk soon!</li>
                <li>• Hope to hear from you soon!</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <h4 className="font-medium text-slate-800 mb-2">Sign-offs:</h4>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• Cheers,</li>
                <li>• Take care,</li>
                <li>• Love, / Lots of love,</li>
                <li>• Best,</li>
                <li>• See you soon,</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
          <p className="text-sm text-amber-800">
            <strong>💡 Запомните:</strong> &quot;Yours sincerely&quot; используется когда вы обращались по имени
            (Dear Mr Smith), а &quot;Yours faithfully&quot; — когда не знали имя (Dear Sir or Madam).
          </p>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 6: Formal Email Example
  // ═══════════════════════════════════════════════════════════════════
  if (step === 6) {
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-slate-800">📄 Пример формального письма</h2>

        <EmailTemplate
          type="formal"
          subject="Job Application - Marketing Manager Position"
          greeting="Dear Mr Johnson,"
          body={[
            "I am writing to apply for the position of Marketing Manager as advertised on your company website.",
            "I have over five years of experience in digital marketing and have successfully led campaigns for major brands. I believe my skills and experience would be a valuable addition to your team.",
            "Please find my CV attached for your review. I would welcome the opportunity to discuss my application further at your convenience.",
          ]}
          closing="I look forward to hearing from you."
          signature="Yours sincerely,\nJohn Smith"
          notes={[
            "Используется Yours sincerely потому что мы знаем имя получателя",
            "Чёткая структура: причина → опыт → призыв к действию",
          ]}
        />

        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <h3 className="font-bold text-slate-800 mb-3">📌 Ключевые особенности:</h3>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="text-indigo-500">✓</span>
              <span>Полные формы слов (I am, I have, I would)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500">✓</span>
              <span>Формальная лексика (advertised, valuable addition, at your convenience)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500">✓</span>
              <span>Нет сленга и разговорных выражений</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500">✓</span>
              <span>Вежливые конструкции (I would welcome, Please find)</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 7: Informal Email Example
  // ═══════════════════════════════════════════════════════════════════
  if (step === 7) {
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-slate-800">💬 Пример неформального письма</h2>

        <EmailTemplate
          type="informal"
          subject="Party this Saturday!"
          greeting="Hey Sarah!"
          body={[
            "Hope you are doing great! Have not seen you in ages!",
            "So, I am throwing a birthday party this Saturday at my place. It is gonna be super fun - there will be music, food, and all our old friends from uni are coming!",
            "Would love it if you could make it! Let me know if you can come.",
          ]}
          closing="Cannot wait to see you!"
          signature="Love,\nEmma xx"
          notes={[
            "Сокращения: I am → I'm, It is → It's, you are → you're",
            "Разговорные выражения: gonna, super fun, ages",
          ]}
        />

        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <h3 className="font-bold text-slate-800 mb-3">📌 Ключевые особенности:</h3>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="text-green-500">✓</span>
              <span>Сокращения (I&apos;m, you&apos;re, haven&apos;t, gonna)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✓</span>
              <span>Восклицательные знаки для эмоций!</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✓</span>
              <span>Разговорные фразы (ages, super fun, would love it)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✓</span>
              <span>Дружеское прощание с &quot;xx&quot; (поцелуи)</span>
            </li>
          </ul>
        </div>

        <PhraseComparison
          context="Приглашение на мероприятие"
          formal="I would be delighted if you could attend."
          informal="Would love it if you could make it!"
        />
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 8: Making Requests
  // ═══════════════════════════════════════════════════════════════════
  if (step === 8) {
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-slate-800">🙏 Как делать запросы (Making Requests)</h2>

        <div className="bg-indigo-50 rounded-xl p-5 border border-indigo-200">
          <h3 className="font-bold text-indigo-800 mb-4">🎩 Formal Requests</h3>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-3">
              <p className="font-medium text-slate-800">I would be grateful if you could...</p>
              <p className="text-sm text-slate-500">Буду благодарен, если бы вы могли...</p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="font-medium text-slate-800">Would it be possible to...?</p>
              <p className="text-sm text-slate-500">Возможно ли...?</p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="font-medium text-slate-800">I would appreciate it if you could...</p>
              <p className="text-sm text-slate-500">Был бы признателен, если бы вы...</p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="font-medium text-slate-800">Could you kindly...?</p>
              <p className="text-sm text-slate-500">Не могли бы вы любезно...?</p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="font-medium text-slate-800">I was wondering if you could...</p>
              <p className="text-sm text-slate-500">Мне интересно, могли бы вы...</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-xl p-5 border border-green-200">
          <h3 className="font-bold text-green-800 mb-4">👋 Informal Requests</h3>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-3">
              <p className="font-medium text-slate-800">Can you...?</p>
              <p className="text-sm text-slate-500">Можешь...?</p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="font-medium text-slate-800">Could you do me a favour?</p>
              <p className="text-sm text-slate-500">Можешь сделать мне одолжение?</p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="font-medium text-slate-800">Would you mind...?</p>
              <p className="text-sm text-slate-500">Ты не против...?</p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="font-medium text-slate-800">Any chance you could...?</p>
              <p className="text-sm text-slate-500">Есть шанс, что ты мог бы...?</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 9: Apologizing & Complaining
  // ═══════════════════════════════════════════════════════════════════
  if (step === 9) {
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-slate-800">😔 Извинения и жалобы</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-rose-50 rounded-xl p-5 border border-rose-200">
            <h3 className="font-bold text-rose-800 mb-3">🎩 Formal Apologies</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• I sincerely apologize for...</li>
              <li>• Please accept my apologies for...</li>
              <li>• I regret to inform you that...</li>
              <li>• I am sorry for any inconvenience caused.</li>
              <li>• Please forgive the delay in responding.</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-xl p-5 border border-green-200">
            <h3 className="font-bold text-green-800 mb-3">👋 Informal Apologies</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Sorry about that!</li>
              <li>• My bad!</li>
              <li>• I&apos;m so sorry, I totally forgot!</li>
              <li>• Oops, sorry for the late reply!</li>
              <li>• Sorry for messing up!</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
          <h3 className="font-bold text-amber-800 mb-3">📢 Formal Complaints</h3>
          <div className="space-y-2 text-sm text-slate-700">
            <p>• I am writing to express my dissatisfaction with...</p>
            <p>• I wish to complain about...</p>
            <p>• I am writing to draw your attention to...</p>
            <p>• I must express my disappointment regarding...</p>
            <p>• I would like to request a full refund.</p>
          </div>
        </div>

        <TipCard
          emoji="⚠️"
          title="Важно при жалобах"
          description="Даже в формальных жалобах оставайтесь вежливыми. Избегайте агрессивного тона — это снижает шансы на положительный ответ."
        />
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 10: Exercise - Choose the Right Phrase
  // ═══════════════════════════════════════════════════════════════════
  if (step === 10) {
    const items: FillItem[] = [
      {
        id: "1",
        text: 'Формальное приветствие, когда не знаете имя:',
        correctAnswer: "Dear Sir or Madam",
        options: ["Dear Sir or Madam", "Hey there", "Hi", "Hello friend"],
      },
      {
        id: "2",
        text: 'Неформальное приветствие другу:',
        correctAnswer: "Hey!",
        options: ["Dear Mr Smith", "To Whom It May Concern", "Hey!", "Yours faithfully"],
      },
      {
        id: "3",
        text: 'Формальное окончание письма (знаете имя получателя):',
        correctAnswer: "Yours sincerely",
        options: ["Cheers", "Love", "Yours sincerely", "See ya"],
      },
      {
        id: "4",
        text: 'Формальный запрос информации:',
        correctAnswer: "I would be grateful if you could",
        options: ["Can you just", "I would be grateful if you could", "Give me", "I want"],
      },
      {
        id: "5",
        text: 'Неформальное прощание:',
        correctAnswer: "Take care",
        options: ["Yours faithfully", "Take care", "Kind regards", "Respectfully"],
      },
    ];

    return (
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-slate-800">✏️ Упражнение: Выберите правильную фразу</h2>

        <p className="text-slate-600">
          Выберите подходящую фразу для каждой ситуации.
        </p>

        <CheckableExercise items={items} />
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 11: Exercise - Fill in the Blanks (Formal Email)
  // ═══════════════════════════════════════════════════════════════════
  if (step === 11) {
    const items: FillItem[] = [
      {
        id: "1",
        text: '___ Mr Thompson,',
        correctAnswer: "Dear",
        options: ["Dear", "Hey", "Hi", "Hello"],
      },
      {
        id: "2",
        text: 'I am writing to ___ about the marketing position.',
        correctAnswer: "inquire",
        options: ["ask", "inquire", "know", "wonder"],
      },
      {
        id: "3",
        text: 'I would be ___ if you could send me more details.',
        correctAnswer: "grateful",
        options: ["happy", "grateful", "nice", "good"],
      },
      {
        id: "4",
        text: 'I look forward to ___ from you.',
        correctAnswer: "hearing",
        options: ["hear", "hearing", "heard", "hears"],
      },
      {
        id: "5",
        text: 'Yours ___,\nJohn Smith',
        correctAnswer: "sincerely",
        options: ["faithfully", "sincerely", "truly", "honest"],
      },
    ];

    return (
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-slate-800">✏️ Упражнение: Заполните формальное письмо</h2>

        <p className="text-slate-600">
          Выберите правильное слово для каждого пропуска в формальном письме.
        </p>

        <CheckableExercise items={items} />

        <TipCard
          emoji="💡"
          title="Подсказка"
          description="'Yours sincerely' используется, когда вы знаете имя получателя (Dear Mr Thompson)."
        />
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 12: Exercise - Transform Formal to Informal
  // ═══════════════════════════════════════════════════════════════════
  if (step === 12) {
    const items: FillItem[] = [
      {
        id: "1",
        text: 'Formal: "I am writing to inquire..." → Informal:',
        correctAnswer: "Just wanted to ask...",
        options: ["Just wanted to ask...", "I hereby inquire...", "May I request...", "It is my duty to ask..."],
      },
      {
        id: "2",
        text: 'Formal: "I would be grateful if..." → Informal:',
        correctAnswer: "Could you...?",
        options: ["Could you...?", "I would appreciate...", "It would be appreciated if...", "Please be so kind as to..."],
      },
      {
        id: "3",
        text: 'Formal: "I look forward to hearing from you" → Informal:',
        correctAnswer: "Let me know!",
        options: ["Let me know!", "I await your response", "Kindly respond", "Reply at your earliest convenience"],
      },
      {
        id: "4",
        text: 'Formal: "Dear Sir or Madam" → Informal:',
        correctAnswer: "Hi there!",
        options: ["Hi there!", "To Whom It May Concern", "Dear Friend", "Respected Sir"],
      },
      {
        id: "5",
        text: 'Formal: "Please do not hesitate to contact me" → Informal:',
        correctAnswer: "Just give me a shout!",
        options: ["Just give me a shout!", "Feel free to reach out at your convenience", "Do contact me", "I remain at your disposal"],
      },
    ];

    return (
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-slate-800">🔄 Упражнение: Преобразуйте в неформальный стиль</h2>

        <p className="text-slate-600">
          Выберите неформальный эквивалент для каждой формальной фразы.
        </p>

        <CheckableExercise items={items} />
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 13: Common Mistakes
  // ═══════════════════════════════════════════════════════════════════
  if (step === 13) {
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-slate-800">⚠️ Частые ошибки</h2>

        <div className="space-y-4">
          <div className="bg-red-50 rounded-xl p-4 border border-red-200">
            <div className="flex items-start gap-3">
              <span className="text-2xl">❌</span>
              <div>
                <p className="font-medium text-red-800">Dear Friend,</p>
                <p className="text-sm text-slate-600 mt-1">
                  Слишком размыто для формального письма. Используйте имя или должность.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-xl p-4 border border-red-200">
            <div className="flex items-start gap-3">
              <span className="text-2xl">❌</span>
              <div>
                <p className="font-medium text-red-800">I want to know about...</p>
                <p className="text-sm text-slate-600 mt-1">
                  Слишком прямолинейно. Лучше: &quot;I would like to inquire about...&quot;
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-xl p-4 border border-red-200">
            <div className="flex items-start gap-3">
              <span className="text-2xl">❌</span>
              <div>
                <p className="font-medium text-red-800">Смешивание стилей</p>
                <p className="text-sm text-slate-600 mt-1">
                  &quot;Dear Mr Smith, ... Cheers, John&quot; — начало формальное, конец неформальный.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-xl p-4 border border-red-200">
            <div className="flex items-start gap-3">
              <span className="text-2xl">❌</span>
              <div>
                <p className="font-medium text-red-800">CAPS LOCK или много !!!</p>
                <p className="text-sm text-slate-600 mt-1">
                  Выглядит как крик. Даже в неформальных письмах используйте умеренно.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-xl p-4 border border-red-200">
            <div className="flex items-start gap-3">
              <span className="text-2xl">❌</span>
              <div>
                <p className="font-medium text-red-800">Yours faithfully + имя получателя</p>
                <p className="text-sm text-slate-600 mt-1">
                  Если вы знаете имя (Dear Mr Smith), используйте &quot;Yours sincerely&quot;, не &quot;faithfully&quot;.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-xl p-4 border border-green-200">
          <h3 className="font-bold text-green-800 mb-2">✅ Правильно:</h3>
          <ul className="text-sm text-slate-700 space-y-1">
            <li>• Выдерживайте один стиль от начала до конца</li>
            <li>• Проверяйте письмо перед отправкой</li>
            <li>• Используйте Subject Line — он обязателен</li>
          </ul>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 14: Useful Phrases Cheat Sheet
  // ═══════════════════════════════════════════════════════════════════
  if (step === 14) {
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-slate-800">📋 Шпаргалка полезных фраз</h2>

        <div className="grid gap-4">
          <PhraseComparison
            context="Начало письма"
            formal="I am writing with reference to..."
            informal="Just a quick email about..."
          />

          <PhraseComparison
            context="Просьба о помощи"
            formal="I would appreciate your assistance with..."
            informal="Could you help me with...?"
          />

          <PhraseComparison
            context="Благодарность"
            formal="Thank you for your kind assistance."
            informal="Thanks so much for your help!"
          />

          <PhraseComparison
            context="Извинение за задержку"
            formal="Please accept my apologies for the delayed response."
            informal="Sorry for the late reply!"
          />

          <PhraseComparison
            context="Прикрепление файла"
            formal="Please find attached..."
            informal="I've attached..."
          />

          <PhraseComparison
            context="Ожидание ответа"
            formal="I look forward to your reply at your earliest convenience."
            informal="Let me know what you think!"
          />

          <PhraseComparison
            context="Предложение помощи"
            formal="Please do not hesitate to contact me should you require any further information."
            informal="Just let me know if you need anything else!"
          />
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 15: Writing Practice with AI Check
  // ═══════════════════════════════════════════════════════════════════
  if (step === 15) {
    return <EmailWritingPractice />;
  }

  return null;
}
