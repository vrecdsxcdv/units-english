"use client";

import React, { useState } from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function RelativeClauses({ step }: Props) {
  switch (step) {
    case 1:
      return <Step1 />;
    case 2:
      return <Step2 />;
    case 3:
      return <Step3 />;
    case 4:
      return <Step4 />;
    case 5:
      return <Step5 />;
    case 6:
      return <Step6 />;
    case 7:
      return <Step7 />;
    case 8:
      return <Step8 />;
    case 9:
      return <Step9 />;
    case 10:
      return <Step10 />;
    default:
      return <Step1 />;
  }
}

/* ===== Компонент для multiple choice с отложенным показом ответа ===== */
function MultipleChoiceQuestion({
  question,
  options,
  correctAnswer,
  explanation,
}: {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setShowResult(true);
  };

  const isCorrect = selectedAnswer === correctAnswer;

  return (
    <div className="bg-zinc-50 rounded-lg p-4 mb-4">
      <p className="text-sm font-semibold mb-3 text-zinc-900">{question}</p>
      <div className="space-y-2 mb-3">
        {options.map((opt) => {
          const optionLetter = opt.split(".")[0];
          const isSelected = selectedAnswer === optionLetter;
          const isCorrectOption = optionLetter === correctAnswer;

          return (
            <button
              key={opt}
              onClick={() => !showResult && handleAnswer(optionLetter)}
              disabled={showResult}
              className={`w-full text-left rounded p-3 transition-colors ${
                showResult
                  ? isCorrectOption
                    ? "bg-green-100 border-2 border-green-500"
                    : isSelected
                    ? "bg-red-100 border-2 border-red-500"
                    : "bg-white"
                  : isSelected
                  ? "bg-indigo-100 border-2 border-indigo-400"
                  : "bg-white hover:bg-zinc-100"
              } ${!showResult ? "cursor-pointer" : "cursor-default"}`}
            >
              <p className="text-sm text-zinc-700">{opt}</p>
            </button>
          );
        })}
      </div>

      {showResult && (
        <div
          className={`rounded-lg p-4 ${
            isCorrect
              ? "bg-green-50 border border-green-300"
              : "bg-red-50 border border-red-300"
          }`}
        >
          <p
            className={`text-sm font-semibold mb-2 ${
              isCorrect ? "text-green-800" : "text-red-800"
            }`}
          >
            {isCorrect ? "✓ Правильно!" : "✗ Неправильно"}
          </p>
          <p className="text-sm text-zinc-700 mb-1">
            <strong>Правильный ответ:</strong> {correctAnswer}
          </p>
          <p className="text-xs text-zinc-600">{explanation}</p>
        </div>
      )}
    </div>
  );
}

/* ===== СТРАНИЦА 1: Введение в Relative Clauses ===== */
function Step1() {
  return (
    <>
      <UiSection title="Relative Clauses: Относительные придаточные предложения">
        <div className="bg-gradient-to-br from-slate-50 via-zinc-50 to-slate-50 rounded-lg p-6 mb-6 border-2 border-slate-300">
          <div className="flex items-start gap-4 mb-4">
            <div className="text-4xl">🔗</div>
            <div>
              <p className="text-lg font-bold text-slate-900 mb-3">
                Что такое Relative Clauses?
              </p>
              <p className="text-zinc-800 leading-relaxed mb-3">
                <strong>Relative Clauses</strong> (относительные придаточные
                предложения) — это придаточные предложения, которые дают
                дополнительную информацию о существительном в главном
                предложении.
              </p>
              <p className="text-zinc-800 leading-relaxed">
                Они начинаются с <strong>relative pronouns</strong>{" "}
                (относительных местоимений):{" "}
                <strong>who, which, that, whose, where, when</strong>.
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-xl font-bold text-indigo-900 mb-4">
            Зачем нужны Relative Clauses?
          </h4>
          <p className="text-zinc-700 mb-4">
            Вместо двух коротких предложений мы можем объединить их в одно с
            помощью относительного местоимения:
          </p>
          <div className="space-y-4">
            <div className="bg-indigo-50 rounded-lg p-5">
              <p className="text-sm text-red-700 mb-2">
                ❌ <strong>Без Relative Clause (два предложения):</strong>
              </p>
              <p className="text-zinc-800 mb-1">
                I have a friend. He lives in London.
              </p>
              <p className="text-xs text-zinc-600 italic">
                У меня есть друг. Он живёт в Лондоне.
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-5">
              <p className="text-sm text-green-700 mb-2">
                ✓ <strong>С Relative Clause (одно предложение):</strong>
              </p>
              <p className="text-zinc-800 mb-1">
                I have a friend <strong>who</strong> lives in London.
              </p>
              <p className="text-xs text-zinc-600 italic">
                У меня есть друг, который живёт в Лондоне.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-sky-300">
          <h4 className="text-xl font-bold text-sky-900 mb-4">
            Основные Relative Pronouns
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-sky-50 rounded-lg p-5">
              <p className="font-bold text-sky-900 mb-3 text-lg">WHO</p>
              <p className="text-sm text-zinc-700 mb-2">
                Используется для <strong>людей</strong>
              </p>
              <div className="bg-white rounded p-3">
                <p className="text-sm text-zinc-900 mb-1">
                  The woman <strong>who</strong> called you is my sister.
                </p>
                <p className="text-xs text-zinc-600">
                  Женщина, которая тебе звонила, — моя сестра.
                </p>
              </div>
            </div>

            <div className="bg-indigo-50 rounded-lg p-5">
              <p className="font-bold text-indigo-900 mb-3 text-lg">WHICH</p>
              <p className="text-sm text-zinc-700 mb-2">
                Используется для <strong>вещей и животных</strong>
              </p>
              <div className="bg-white rounded p-3">
                <p className="text-sm text-zinc-900 mb-1">
                  The book <strong>which</strong> I bought is interesting.
                </p>
                <p className="text-xs text-zinc-600">
                  Книга, которую я купил, интересная.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-5">
              <p className="font-bold text-slate-900 mb-3 text-lg">THAT</p>
              <p className="text-sm text-zinc-700 mb-2">
                Используется для <strong>людей, вещей и животных</strong>
              </p>
              <div className="bg-white rounded p-3">
                <p className="text-sm text-zinc-900 mb-1">
                  The car <strong>that</strong> he drives is expensive.
                </p>
                <p className="text-xs text-zinc-600">
                  Машина, на которой он ездит, дорогая.
                </p>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-5">
              <p className="font-bold text-green-900 mb-3 text-lg">WHOSE</p>
              <p className="text-sm text-zinc-700 mb-2">
                Показывает <strong>принадлежность</strong>
              </p>
              <div className="bg-white rounded p-3">
                <p className="text-sm text-zinc-900 mb-1">
                  The man <strong>whose</strong> car was stolen called the
                  police.
                </p>
                <p className="text-xs text-zinc-600">
                  Человек, чью машину украли, позвонил в полицию.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-5">
              <p className="font-bold text-blue-900 mb-3 text-lg">WHERE</p>
              <p className="text-sm text-zinc-700 mb-2">
                Используется для <strong>мест</strong>
              </p>
              <div className="bg-white rounded p-3">
                <p className="text-sm text-zinc-900 mb-1">
                  The house <strong>where</strong> I was born is in Moscow.
                </p>
                <p className="text-xs text-zinc-600">
                  Дом, где я родился, находится в Москве.
                </p>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-5">
              <p className="font-bold text-purple-900 mb-3 text-lg">WHEN</p>
              <p className="text-sm text-zinc-700 mb-2">
                Используется для <strong>времени</strong>
              </p>
              <div className="bg-white rounded p-3">
                <p className="text-sm text-zinc-900 mb-1">
                  The day <strong>when</strong> we met was sunny.
                </p>
                <p className="text-xs text-zinc-600">
                  День, когда мы встретились, был солнечным.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-sky-50 rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-xl font-bold text-indigo-900 mb-4">
            Структура предложения с Relative Clause
          </h4>
          <div className="bg-white rounded-lg p-6 mb-4">
            <p className="text-2xl font-bold text-center text-indigo-900 mb-3">
              Main Clause + Relative Pronoun + Relative Clause
            </p>
            <div className="space-y-3 mt-4">
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div className="bg-red-50 rounded p-3">
                  <p className="font-semibold text-red-700 mb-1">Main Clause</p>
                  <p className="text-zinc-800">I know a girl</p>
                </div>
                <div className="bg-blue-50 rounded p-3">
                  <p className="font-semibold text-blue-700 mb-1">
                    Relative Pronoun
                  </p>
                  <p className="text-zinc-800">who</p>
                </div>
                <div className="bg-green-50 rounded p-3">
                  <p className="font-semibold text-green-700 mb-1">
                    Relative Clause
                  </p>
                  <p className="text-zinc-800">speaks five languages.</p>
                </div>
              </div>
              <p className="text-center text-zinc-700 text-sm italic">
                Я знаю девушку, которая говорит на пяти языках.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-slate-300">
          <h4 className="text-xl font-bold text-slate-900 mb-4">
            Два типа Relative Clauses
          </h4>
          <div className="space-y-4">
            <div className="bg-indigo-50 rounded-lg p-5">
              <h5 className="font-bold text-indigo-900 mb-2 text-lg">
                1. Defining Relative Clauses (определяющие)
              </h5>
              <p className="text-sm text-zinc-700 mb-3">
                Дают <strong>необходимую</strong> информацию, без которой смысл
                предложения неясен. <strong>БЕЗ запятых</strong>.
              </p>
              <div className="bg-white rounded p-4">
                <p className="text-sm text-zinc-900 mb-1">
                  The book <strong>that I'm reading</strong> is fascinating.
                </p>
                <p className="text-xs text-zinc-600 mb-2">
                  Книга, которую я читаю, увлекательная.
                </p>
                <p className="text-xs text-indigo-700 italic">
                  (Без "that I'm reading" непонятно, о какой книге речь)
                </p>
              </div>
            </div>

            <div className="bg-sky-50 rounded-lg p-5">
              <h5 className="font-bold text-sky-900 mb-2 text-lg">
                2. Non-Defining Relative Clauses (описательные)
              </h5>
              <p className="text-sm text-zinc-700 mb-3">
                Дают <strong>дополнительную</strong> информацию, без которой
                смысл ясен. <strong>С запятыми</strong>.
              </p>
              <div className="bg-white rounded p-4">
                <p className="text-sm text-zinc-900 mb-1">
                  My brother<strong>, who lives in Paris,</strong> is a doctor.
                </p>
                <p className="text-xs text-zinc-600 mb-2">
                  Мой брат, который живёт в Париже, — врач.
                </p>
                <p className="text-xs text-sky-700 italic">
                  (Мы уже знаем, о каком брате речь; информация о Париже —
                  дополнительная)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 2: WHO и WHICH - детальное изучение ===== */
function Step2() {
  return (
    <>
      <UiSection title="WHO и WHICH: Использование и правила">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <p className="text-indigo-900 leading-relaxed font-semibold text-lg">
            WHO и WHICH — самые частые относительные местоимения в английском
            языке. Важно понимать, когда использовать каждое из них.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-2xl font-bold text-indigo-900 mb-4">
            WHO — для людей
          </h4>
          <div className="bg-indigo-100 rounded-lg p-5 mb-4">
            <p className="text-xl font-bold text-center text-indigo-900 mb-2">
              WHO = КТО, КОТОРЫЙ/КОТОРАЯ/КОТОРЫЕ
            </p>
            <p className="text-center text-zinc-700">
              Используется ТОЛЬКО для людей
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-indigo-700 mb-2">
                1. WHO как подлежащее (subject)
              </h5>
              <p className="text-sm text-zinc-700 mb-3">
                Когда относительное местоимение выполняет действие:
              </p>
              <div className="space-y-2">
                {[
                  {
                    en: "The woman who called you is my boss.",
                    ru: "Женщина, которая тебе звонила, — мой начальник.",
                    note: "who = подлежащее (она звонила)",
                  },
                  {
                    en: "People who exercise regularly live longer.",
                    ru: "Люди, которые регулярно занимаются спортом, живут дольше.",
                    note: "who = подлежащее (они занимаются)",
                  },
                  {
                    en: "The man who lives next door is a teacher.",
                    ru: "Мужчина, который живёт по соседству, — учитель.",
                    note: "who = подлежащее (он живёт)",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-indigo-50 rounded p-4">
                    <p className="text-sm font-semibold text-zinc-900 mb-1">
                      {item.en}
                    </p>
                    <p className="text-sm text-zinc-700 mb-1">{item.ru}</p>
                    <p className="text-xs text-indigo-600 italic">
                      {item.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-indigo-700 mb-2">
                2. WHO(M) как дополнение (object)
              </h5>
              <p className="text-sm text-zinc-700 mb-3">
                Когда относительное местоимение является объектом действия:
              </p>
              <div className="space-y-2">
                {[
                  {
                    en: "The person who(m) I met yesterday was very kind.",
                    ru: "Человек, которого я встретил вчера, был очень добрым.",
                    note: "who(m) = дополнение (я встретил его)",
                  },
                  {
                    en: "The girl who I told you about is my cousin.",
                    ru: "Девушка, о которой я тебе рассказывал, — моя двоюродная сестра.",
                    note: "who = дополнение (я рассказывал о ней)",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-sky-50 rounded p-4">
                    <p className="text-sm font-semibold text-zinc-900 mb-1">
                      {item.en}
                    </p>
                    <p className="text-sm text-zinc-700 mb-1">{item.ru}</p>
                    <p className="text-xs text-sky-600 italic">{item.note}</p>
                  </div>
                ))}
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-3">
                <p className="text-sm text-yellow-800">
                  <strong>Примечание:</strong> WHOM — более формальная форма для
                  дополнения. В разговорной речи чаще используется WHO или
                  вообще опускается.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-sky-300">
          <h4 className="text-2xl font-bold text-sky-900 mb-4">
            WHICH — для вещей и животных
          </h4>
          <div className="bg-sky-100 rounded-lg p-5 mb-4">
            <p className="text-xl font-bold text-center text-sky-900 mb-2">
              WHICH = КОТОРЫЙ/КОТОРАЯ/КОТОРОЕ/КОТОРЫЕ
            </p>
            <p className="text-center text-zinc-700">
              Используется для вещей, предметов, животных
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-sky-700 mb-2">
                1. WHICH как подлежащее (subject)
              </h5>
              <div className="space-y-2">
                {[
                  {
                    en: "The book which is on the table is mine.",
                    ru: "Книга, которая лежит на столе, — моя.",
                    note: "which = подлежащее (она лежит)",
                  },
                  {
                    en: "The company which employs 500 people is expanding.",
                    ru: "Компания, которая нанимает 500 человек, расширяется.",
                    note: "which = подлежащее (она нанимает)",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-sky-50 rounded p-4">
                    <p className="text-sm font-semibold text-zinc-900 mb-1">
                      {item.en}
                    </p>
                    <p className="text-sm text-zinc-700 mb-1">{item.ru}</p>
                    <p className="text-xs text-sky-600 italic">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-sky-700 mb-2">
                2. WHICH как дополнение (object)
              </h5>
              <div className="space-y-2">
                {[
                  {
                    en: "The car which I bought last year is very reliable.",
                    ru: "Машина, которую я купил в прошлом году, очень надёжная.",
                    note: "which = дополнение (я купил её)",
                  },
                  {
                    en: "The film which we watched yesterday was boring.",
                    ru: "Фильм, который мы смотрели вчера, был скучным.",
                    note: "which = дополнение (мы смотрели его)",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-indigo-50 rounded p-4">
                    <p className="text-sm font-semibold text-zinc-900 mb-1">
                      {item.en}
                    </p>
                    <p className="text-sm text-zinc-700 mb-1">{item.ru}</p>
                    <p className="text-xs text-indigo-600 italic">
                      {item.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-slate-300">
          <h4 className="text-xl font-bold text-slate-900 mb-4">
            WHO vs WHICH: Сравнение
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-100 to-sky-100">
                  <th className="border-2 border-indigo-200 p-3 text-left font-bold text-indigo-900">
                    Критерий
                  </th>
                  <th className="border-2 border-indigo-200 p-3 text-left font-bold text-indigo-900">
                    WHO
                  </th>
                  <th className="border-2 border-indigo-200 p-3 text-left font-bold text-indigo-900">
                    WHICH
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border-2 border-indigo-200 p-3 font-semibold text-zinc-700">
                    Для кого/чего
                  </td>
                  <td className="border-2 border-indigo-200 p-3">
                    Только для <strong>людей</strong>
                  </td>
                  <td className="border-2 border-indigo-200 p-3">
                    Для <strong>вещей и животных</strong>
                  </td>
                </tr>
                <tr className="bg-indigo-50">
                  <td className="border-2 border-indigo-200 p-3 font-semibold text-zinc-700">
                    Пример (subject)
                  </td>
                  <td className="border-2 border-indigo-200 p-3">
                    The man <strong>who</strong> works here
                  </td>
                  <td className="border-2 border-indigo-200 p-3">
                    The computer <strong>which</strong> works fast
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="border-2 border-indigo-200 p-3 font-semibold text-zinc-700">
                    Пример (object)
                  </td>
                  <td className="border-2 border-indigo-200 p-3">
                    The woman <strong>who(m)</strong> I know
                  </td>
                  <td className="border-2 border-indigo-200 p-3">
                    The book <strong>which</strong> I read
                  </td>
                </tr>
                <tr className="bg-indigo-50">
                  <td className="border-2 border-indigo-200 p-3 font-semibold text-zinc-700">
                    Можно опустить?
                  </td>
                  <td className="border-2 border-indigo-200 p-3">
                    Только как object
                  </td>
                  <td className="border-2 border-indigo-200 p-3">
                    Только как object
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-6 border-2 border-red-300">
          <h4 className="text-xl font-bold text-red-900 mb-4">
            ⚠️ Типичные ошибки
          </h4>
          <div className="space-y-3">
            {[
              {
                wrong: "The book who I read was great. ❌",
                right: "The book which I read was great. ✓",
                note: "WHO только для людей, для книги — WHICH",
              },
              {
                wrong: "The woman which called is my friend. ❌",
                right: "The woman who called is my friend. ✓",
                note: "WHICH только для вещей, для женщины — WHO",
              },
              {
                wrong: "The people which live here are friendly. ❌",
                right: "The people who live here are friendly. ✓",
                note: "People (люди) → WHO, не WHICH",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4">
                <p className="text-sm text-red-700 font-semibold mb-1">
                  ✗ {item.wrong}
                </p>
                <p className="text-sm text-green-700 font-semibold mb-2">
                  ✓ {item.right}
                </p>
                <p className="text-xs text-zinc-600 italic">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* Остальные страницы будут добавлены в следующей части из-за размера файла */

/* ===== СТРАНИЦА 3: THAT - универсальное местоимение ===== */
function Step3() {
  const exercise1: FillItem[] = [
    {
      left: "1. The man",
      right: "lives next door is a doctor. (WHO/THAT)",
      answers: ["who", "that"],
      explanation: "Для людей можно использовать WHO или THAT",
    },
    {
      left: "2. The book",
      right: "I bought yesterday is interesting. (WHICH/THAT)",
      answers: ["which", "that", ""],
      explanation: "Для вещей можно использовать WHICH или THAT (или опустить)",
    },
    {
      left: "3. This is the best film",
      right: "I have ever seen. (THAT)",
      answers: ["that"],
      explanation: "После превосходной степени (the best) используется THAT",
    },
    {
      left: "4. The woman",
      right: "car was stolen called the police. (WHOSE)",
      answers: ["whose"],
      explanation: "WHOSE показывает принадлежность",
    },
    {
      left: "5. The hotel",
      right: "we stayed was very comfortable. (WHERE)",
      answers: ["where"],
      explanation: "WHERE используется для мест",
    },
  ];

  return (
    <>
      <UiSection title="THAT: Универсальное относительное местоимение">
        <div className="bg-gradient-to-r from-slate-50 to-zinc-50 rounded-lg p-6 mb-6 border-2 border-slate-300">
          <p className="text-slate-900 leading-relaxed font-semibold text-lg">
            THAT — самое универсальное относительное местоимение. Оно может
            заменять WHO и WHICH во многих случаях.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-2xl font-bold text-indigo-900 mb-4">
            Когда используется THAT
          </h4>
          <div className="space-y-4">
            <div className="bg-indigo-50 rounded-lg p-5">
              <h5 className="font-semibold text-indigo-900 mb-3">
                1. THAT может заменять WHO (для людей)
              </h5>
              <div className="space-y-2">
                <div className="bg-white rounded p-3">
                  <p className="text-sm text-zinc-900 mb-1">
                    The people <strong>who/that</strong> live here are friendly.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Люди, которые живут здесь, дружелюбные.
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm text-zinc-900 mb-1">
                    The girl <strong>who/that</strong> won the prize is my sister.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Девушка, которая выиграла приз, — моя сестра.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-sky-50 rounded-lg p-5">
              <h5 className="font-semibold text-sky-900 mb-3">
                2. THAT может заменять WHICH (для вещей)
              </h5>
              <div className="space-y-2">
                <div className="bg-white rounded p-3">
                  <p className="text-sm text-zinc-900 mb-1">
                    The car <strong>which/that</strong> I bought is red.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Машина, которую я купил, красная.
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm text-zinc-900 mb-1">
                    The house <strong>which/that</strong> stands on the hill is
                    old.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Дом, который стоит на холме, старый.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-green-300">
          <h4 className="text-2xl font-bold text-green-900 mb-4">
            Когда ОБЯЗАТЕЛЬНО используется THAT
          </h4>
          <div className="space-y-4">
            {[
              {
                rule: "1. После превосходной степени (superlative)",
                examples: [
                  "This is the best book that I have ever read.",
                  "She is the most beautiful woman that I know.",
                ],
              },
              {
                rule: "2. После порядковых числительных (first, second, last...)",
                examples: [
                  "He was the first person that arrived.",
                  "This is the last chance that we have.",
                ],
              },
              {
                rule: "3. После слов: all, everything, nothing, anything, only, very",
                examples: [
                  "Everything that he said was true.",
                  "This is the only thing that matters.",
                  "Is there anything that I can do?",
                ],
              },
              {
                rule: "4. После сочетания людей и вещей",
                examples: [
                  "Look at the man and the dog that are running.",
                  "I can remember the people and places that I visited.",
                ],
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-green-50 rounded-lg p-5">
                <h5 className="font-semibold text-green-900 mb-3">
                  {item.rule}
                </h5>
                <div className="space-y-2">
                  {item.examples.map((ex, i) => (
                    <div key={i} className="bg-white rounded p-3">
                      <p className="text-sm text-zinc-900">{ex}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-red-300">
          <h4 className="text-2xl font-bold text-red-900 mb-4">
            Когда НЕЛЬЗЯ использовать THAT
          </h4>
          <div className="space-y-3">
            <div className="bg-red-50 rounded-lg p-5">
              <h5 className="font-semibold text-red-900 mb-3">
                1. В Non-Defining Relative Clauses (с запятыми)
              </h5>
              <div className="space-y-2">
                <div className="bg-white rounded p-3">
                  <p className="text-sm text-red-700 font-semibold mb-1">
                    ✗ My brother, that lives in Paris, is a doctor. ❌
                  </p>
                  <p className="text-sm text-green-700 font-semibold">
                    ✓ My brother, who lives in Paris, is a doctor. ✓
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 rounded-lg p-5">
              <h5 className="font-semibold text-orange-900 mb-3">
                2. После предлогов
              </h5>
              <div className="space-y-2">
                <div className="bg-white rounded p-3">
                  <p className="text-sm text-red-700 font-semibold mb-1">
                    ✗ The person to that I spoke was helpful. ❌
                  </p>
                  <p className="text-sm text-green-700 font-semibold">
                    ✓ The person to whom I spoke was helpful. ✓
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CheckableExercise
          title="Упражнение: Выберите правильное местоимение"
          instruction="Заполните пропуски подходящим относительным местоимением."
          items={exercise1}
        />

        <div className="bg-gradient-to-br from-indigo-50 to-sky-50 rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-xl font-bold text-indigo-900 mb-4">
            WHO/WHICH vs THAT: Выбор
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-100 to-sky-100">
                  <th className="border-2 border-indigo-200 p-3 text-left font-bold text-indigo-900">
                    Ситуация
                  </th>
                  <th className="border-2 border-indigo-200 p-3 text-left font-bold text-indigo-900">
                    Используйте
                  </th>
                  <th className="border-2 border-indigo-200 p-3 text-left font-bold text-indigo-900">
                    НЕ используйте
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border-2 border-indigo-200 p-3">
                    Обычные предложения (люди)
                  </td>
                  <td className="border-2 border-indigo-200 p-3">
                    WHO или THAT
                  </td>
                  <td className="border-2 border-indigo-200 p-3">—</td>
                </tr>
                <tr className="bg-indigo-50">
                  <td className="border-2 border-indigo-200 p-3">
                    Обычные предложения (вещи)
                  </td>
                  <td className="border-2 border-indigo-200 p-3">
                    WHICH или THAT
                  </td>
                  <td className="border-2 border-indigo-200 p-3">—</td>
                </tr>
                <tr className="bg-white">
                  <td className="border-2 border-indigo-200 p-3">
                    С запятыми (non-defining)
                  </td>
                  <td className="border-2 border-indigo-200 p-3">
                    WHO или WHICH
                  </td>
                  <td className="border-2 border-indigo-200 p-3 text-red-700">
                    THAT ❌
                  </td>
                </tr>
                <tr className="bg-indigo-50">
                  <td className="border-2 border-indigo-200 p-3">
                    После превосходной степени
                  </td>
                  <td className="border-2 border-indigo-200 p-3">
                    <strong>THAT (обязательно)</strong>
                  </td>
                  <td className="border-2 border-indigo-200 p-3">—</td>
                </tr>
                <tr className="bg-white">
                  <td className="border-2 border-indigo-200 p-3">
                    После предлогов
                  </td>
                  <td className="border-2 border-indigo-200 p-3">
                    WHO/WHICH
                  </td>
                  <td className="border-2 border-indigo-200 p-3 text-red-700">
                    THAT ❌
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 4: WHOSE, WHERE, WHEN ===== */
function Step4() {
  return (
    <>
      <UiSection title="WHOSE, WHERE, WHEN: Специальные относительные местоимения">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <p className="text-indigo-900 leading-relaxed">
            Эти относительные местоимения используются в особых случаях для
            обозначения принадлежности, места и времени.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-green-300">
          <h4 className="text-2xl font-bold text-green-900 mb-4">
            WHOSE — принадлежность
          </h4>
          <div className="bg-green-100 rounded-lg p-5 mb-4">
            <p className="text-xl font-bold text-center text-green-900 mb-2">
              WHOSE = ЧЕЙ/ЧЬЯ/ЧЬЁ/ЧЬИ (принадлежность)
            </p>
            <p className="text-center text-zinc-700">
              Используется вместо his/her/its/their в придаточном предложении
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-green-700 mb-3">
                Как образуется с WHOSE:
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-50 rounded p-4">
                  <p className="text-sm font-semibold text-red-700 mb-2">
                    ❌ Без WHOSE (два предложения):
                  </p>
                  <p className="text-sm text-zinc-800 mb-1">
                    I know a woman. Her daughter is a doctor.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Я знаю женщину. Её дочь — врач.
                  </p>
                </div>
                <div className="bg-green-50 rounded p-4">
                  <p className="text-sm font-semibold text-green-700 mb-2">
                    ✓ С WHOSE (одно предложение):
                  </p>
                  <p className="text-sm text-zinc-800 mb-1">
                    I know a woman <strong>whose</strong> daughter is a doctor.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Я знаю женщину, чья дочь — врач.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-green-700 mb-3">
                Примеры с WHOSE:
              </h5>
              <div className="space-y-2">
                {[
                  {
                    en: "The man whose car was stolen called the police.",
                    ru: "Человек, чью машину украли, позвонил в полицию.",
                    note: "whose car = his car",
                  },
                  {
                    en: "I have a friend whose brother lives in Paris.",
                    ru: "У меня есть друг, чей брат живёт в Париже.",
                    note: "whose brother = his/her brother",
                  },
                  {
                    en: "The company whose products we use is very successful.",
                    ru: "Компания, чьи продукты мы используем, очень успешная.",
                    note: "whose products = its products",
                  },
                  {
                    en: "This is the student whose essay won the prize.",
                    ru: "Это студент, чьё эссе выиграло приз.",
                    note: "whose essay = his/her essay",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-green-50 rounded p-4">
                    <p className="text-sm font-semibold text-zinc-900 mb-1">
                      {item.en}
                    </p>
                    <p className="text-sm text-zinc-700 mb-1">{item.ru}</p>
                    <p className="text-xs text-green-600 italic">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-blue-300">
          <h4 className="text-2xl font-bold text-blue-900 mb-4">
            WHERE — место
          </h4>
          <div className="bg-blue-100 rounded-lg p-5 mb-4">
            <p className="text-xl font-bold text-center text-blue-900 mb-2">
              WHERE = ГДЕ (место)
            </p>
            <p className="text-center text-zinc-700">
              Используется для мест вместо in/at/on which
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-50 rounded p-4">
                <p className="text-sm font-semibold text-red-700 mb-2">
                  ❌ Без WHERE:
                </p>
                <p className="text-sm text-zinc-800">
                  The hotel <strong>in which</strong> we stayed was comfortable.
                </p>
              </div>
              <div className="bg-green-50 rounded p-4">
                <p className="text-sm font-semibold text-green-700 mb-2">
                  ✓ С WHERE:
                </p>
                <p className="text-sm text-zinc-800">
                  The hotel <strong>where</strong> we stayed was comfortable.
                </p>
              </div>
            </div>

            <div className="space-y-2">
              {[
                {
                  en: "The restaurant where we had dinner was excellent.",
                  ru: "Ресторан, где мы ужинали, был превосходным.",
                },
                {
                  en: "This is the house where I was born.",
                  ru: "Это дом, где я родился.",
                },
                {
                  en: "The city where she lives is very beautiful.",
                  ru: "Город, где она живёт, очень красивый.",
                },
                {
                  en: "Do you know a shop where I can buy this?",
                  ru: "Ты знаешь магазин, где я могу купить это?",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-blue-50 rounded p-4">
                  <p className="text-sm font-semibold text-zinc-900 mb-1">
                    {item.en}
                  </p>
                  <p className="text-sm text-zinc-700">{item.ru}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-purple-300">
          <h4 className="text-2xl font-bold text-purple-900 mb-4">
            WHEN — время
          </h4>
          <div className="bg-purple-100 rounded-lg p-5 mb-4">
            <p className="text-xl font-bold text-center text-purple-900 mb-2">
              WHEN = КОГДА (время)
            </p>
            <p className="text-center text-zinc-700">
              Используется для времени вместо in/on/at which
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-50 rounded p-4">
                <p className="text-sm font-semibold text-red-700 mb-2">
                  ❌ Без WHEN:
                </p>
                <p className="text-sm text-zinc-800">
                  The day <strong>on which</strong> we met was sunny.
                </p>
              </div>
              <div className="bg-green-50 rounded p-4">
                <p className="text-sm font-semibold text-green-700 mb-2">
                  ✓ С WHEN:
                </p>
                <p className="text-sm text-zinc-800">
                  The day <strong>when</strong> we met was sunny.
                </p>
              </div>
            </div>

            <div className="space-y-2">
              {[
                {
                  en: "I remember the time when we were students.",
                  ru: "Я помню время, когда мы были студентами.",
                },
                {
                  en: "The year when I was born was 1990.",
                  ru: "Год, когда я родился, был 1990.",
                },
                {
                  en: "Sunday is the day when I relax.",
                  ru: "Воскресенье — день, когда я отдыхаю.",
                },
                {
                  en: "That was the moment when everything changed.",
                  ru: "Это был момент, когда всё изменилось.",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-purple-50 rounded p-4">
                  <p className="text-sm font-semibold text-zinc-900 mb-1">
                    {item.en}
                  </p>
                  <p className="text-sm text-zinc-700">{item.ru}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-sky-50 rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-xl font-bold text-indigo-900 mb-4">
            Сводная таблица: WHOSE, WHERE, WHEN
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-100 to-sky-100">
                  <th className="border-2 border-indigo-200 p-3 text-left font-bold text-indigo-900">
                    Местоимение
                  </th>
                  <th className="border-2 border-indigo-200 p-3 text-left font-bold text-indigo-900">
                    Значение
                  </th>
                  <th className="border-2 border-indigo-200 p-3 text-left font-bold text-indigo-900">
                    Заменяет
                  </th>
                  <th className="border-2 border-indigo-200 p-3 text-left font-bold text-indigo-900">
                    Пример
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border-2 border-indigo-200 p-3 font-semibold text-green-700">
                    WHOSE
                  </td>
                  <td className="border-2 border-indigo-200 p-3">
                    Чей/чья/чьё
                  </td>
                  <td className="border-2 border-indigo-200 p-3">
                    his/her/its/their
                  </td>
                  <td className="border-2 border-indigo-200 p-3">
                    The man <strong>whose</strong> car...
                  </td>
                </tr>
                <tr className="bg-indigo-50">
                  <td className="border-2 border-indigo-200 p-3 font-semibold text-blue-700">
                    WHERE
                  </td>
                  <td className="border-2 border-indigo-200 p-3">Где</td>
                  <td className="border-2 border-indigo-200 p-3">
                    in/at/on which
                  </td>
                  <td className="border-2 border-indigo-200 p-3">
                    The place <strong>where</strong> I live...
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="border-2 border-indigo-200 p-3 font-semibold text-purple-700">
                    WHEN
                  </td>
                  <td className="border-2 border-indigo-200 p-3">Когда</td>
                  <td className="border-2 border-indigo-200 p-3">
                    in/on/at which
                  </td>
                  <td className="border-2 border-indigo-200 p-3">
                    The day <strong>when</strong> we met...
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 5: Defining vs Non-Defining Clauses ===== */
function Step5() {
  return (
    <>
      <UiSection title="Defining vs Non-Defining Relative Clauses">
        <div className="bg-gradient-to-r from-slate-50 to-zinc-50 rounded-lg p-6 mb-6 border-2 border-slate-300">
          <p className="text-slate-900 leading-relaxed font-semibold text-lg">
            Это КРИТИЧЕСКИ ВАЖНОЕ различие! От типа придаточного зависит
            использование запятых и выбор местоимения.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-2xl font-bold text-indigo-900 mb-4">
            1. Defining Relative Clauses (Определяющие)
          </h4>
          <div className="bg-indigo-100 rounded-lg p-5 mb-4">
            <p className="text-lg font-bold text-indigo-900 mb-2">
              Дают НЕОБХОДИМУЮ информацию
            </p>
            <p className="text-zinc-700">
              Без этой информации смысл предложения неясен или неполон.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-indigo-50 rounded-lg p-5">
              <h5 className="font-semibold text-indigo-900 mb-3">
                Характеристики:
              </h5>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span className="text-zinc-800">
                    <strong>БЕЗ запятых</strong>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span className="text-zinc-800">
                    Можно использовать <strong>THAT</strong>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span className="text-zinc-800">
                    Местоимение <strong>можно опустить</strong>, если оно object
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span className="text-zinc-800">
                    Ответ на вопрос: <strong>"Который именно?"</strong>
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-indigo-700 mb-3">Примеры:</h5>
              <div className="space-y-3">
                {[
                  {
                    en: "The book that I'm reading is very interesting.",
                    ru: "Книга, которую я читаю, очень интересная.",
                    note: "Какая именно книга? Та, которую я читаю.",
                  },
                  {
                    en: "The man who lives next door is a doctor.",
                    ru: "Мужчина, который живёт по соседству, — врач.",
                    note: "Какой именно мужчина? Тот, который живёт по соседству.",
                  },
                  {
                    en: "People who smoke risk their health.",
                    ru: "Люди, которые курят, рискуют своим здоровьем.",
                    note: "Какие именно люди? Те, которые курят.",
                  },
                  {
                    en: "The restaurant where we had dinner was expensive.",
                    ru: "Ресторан, где мы ужинали, был дорогим.",
                    note: "Какой именно ресторан? Тот, где мы ужинали.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 border-2 border-indigo-200">
                    <p className="text-sm font-semibold text-zinc-900 mb-1">
                      {item.en}
                    </p>
                    <p className="text-sm text-zinc-700 mb-2">{item.ru}</p>
                    <p className="text-xs text-indigo-600 italic">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-sky-300">
          <h4 className="text-2xl font-bold text-sky-900 mb-4">
            2. Non-Defining Relative Clauses (Описательные)
          </h4>
          <div className="bg-sky-100 rounded-lg p-5 mb-4">
            <p className="text-lg font-bold text-sky-900 mb-2">
              Дают ДОПОЛНИТЕЛЬНУЮ информацию
            </p>
            <p className="text-zinc-700">
              Без этой информации смысл предложения всё равно ясен.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-sky-50 rounded-lg p-5">
              <h5 className="font-semibold text-sky-900 mb-3">
                Характеристики:
              </h5>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-sky-600 font-bold">•</span>
                  <span className="text-zinc-800">
                    <strong>С запятыми</strong> (обязательно!)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-600 font-bold">•</span>
                  <span className="text-zinc-800">
                    <strong>НЕЛЬЗЯ</strong> использовать THAT
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-600 font-bold">•</span>
                  <span className="text-zinc-800">
                    Местоимение <strong>НЕЛЬЗЯ опустить</strong>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-600 font-bold">•</span>
                  <span className="text-zinc-800">
                    Дополнительная информация (можно убрать без потери смысла)
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold text-sky-700 mb-3">Примеры:</h5>
              <div className="space-y-3">
                {[
                  {
                    en: "My brother, who lives in Paris, is a doctor.",
                    ru: "Мой брат, который живёт в Париже, — врач.",
                    note: "Мы уже знаем, о каком брате речь. Информация о Париже — дополнительная.",
                  },
                  {
                    en: "London, which is the capital of England, is very expensive.",
                    ru: "Лондон, который является столицей Англии, очень дорогой.",
                    note: "Мы знаем, что такое Лондон. Информация о столице — дополнительная.",
                  },
                  {
                    en: "Shakespeare, who was born in 1564, wrote many plays.",
                    ru: "Шекспир, который родился в 1564, написал много пьес.",
                    note: "Мы знаем, кто такой Шекспир. Дата рождения — дополнительная информация.",
                  },
                  {
                    en: "My car, which I bought last year, is already broken.",
                    ru: "Моя машина, которую я купил в прошлом году, уже сломалась.",
                    note: "У меня одна машина, информация о покупке — дополнительная.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 border-2 border-sky-200">
                    <p className="text-sm font-semibold text-zinc-900 mb-1">
                      {item.en}
                    </p>
                    <p className="text-sm text-zinc-700 mb-2">{item.ru}</p>
                    <p className="text-xs text-sky-600 italic">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-slate-300">
          <h4 className="text-2xl font-bold text-slate-900 mb-4">
            Сравнение: Defining vs Non-Defining
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-100 to-sky-100">
                  <th className="border-2 border-indigo-200 p-3 text-left font-bold text-indigo-900">
                    Критерий
                  </th>
                  <th className="border-2 border-indigo-200 p-3 text-left font-bold text-indigo-900">
                    Defining
                  </th>
                  <th className="border-2 border-indigo-200 p-3 text-left font-bold text-indigo-900">
                    Non-Defining
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border-2 border-indigo-200 p-3 font-semibold">
                    Запятые
                  </td>
                  <td className="border-2 border-indigo-200 p-3">
                    <strong className="text-red-700">НЕТ</strong>
                  </td>
                  <td className="border-2 border-indigo-200 p-3">
                    <strong className="text-green-700">ДА</strong> (обязательно)
                  </td>
                </tr>
                <tr className="bg-indigo-50">
                  <td className="border-2 border-indigo-200 p-3 font-semibold">
                    THAT
                  </td>
                  <td className="border-2 border-indigo-200 p-3">
                    <strong className="text-green-700">Можно</strong>
                  </td>
                  <td className="border-2 border-indigo-200 p-3">
                    <strong className="text-red-700">НЕЛЬЗЯ</strong>
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="border-2 border-indigo-200 p-3 font-semibold">
                    Опустить местоимение
                  </td>
                  <td className="border-2 border-indigo-200 p-3">
                    Можно (если object)
                  </td>
                  <td className="border-2 border-indigo-200 p-3">
                    <strong className="text-red-700">НЕЛЬЗЯ</strong>
                  </td>
                </tr>
                <tr className="bg-indigo-50">
                  <td className="border-2 border-indigo-200 p-3 font-semibold">
                    Тип информации
                  </td>
                  <td className="border-2 border-indigo-200 p-3">
                    Необходимая
                  </td>
                  <td className="border-2 border-indigo-200 p-3">
                    Дополнительная
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="border-2 border-indigo-200 p-3 font-semibold">
                    Можно убрать?
                  </td>
                  <td className="border-2 border-indigo-200 p-3">
                    Нет (смысл неясен)
                  </td>
                  <td className="border-2 border-indigo-200 p-3">
                    Да (смысл ясен)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-yellow-300">
          <h4 className="text-xl font-bold text-yellow-900 mb-4">
            ⚠️ Как изменится смысл в зависимости от запятых
          </h4>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5">
              <p className="font-semibold text-indigo-900 mb-3">
                БЕЗ запятых (Defining):
              </p>
              <p className="text-sm text-zinc-900 mb-2">
                My brother <strong>who lives in Paris</strong> is a doctor.
              </p>
              <p className="text-sm text-zinc-700 mb-3">
                Мой брат, который живёт в Париже, — врач.
              </p>
              <p className="text-xs text-indigo-600 italic">
                Значение: У меня несколько братьев. Тот, который живёт в
                Париже, — врач (а другие — нет).
              </p>
            </div>

            <div className="bg-white rounded-lg p-5">
              <p className="font-semibold text-sky-900 mb-3">
                С запятыми (Non-Defining):
              </p>
              <p className="text-sm text-zinc-900 mb-2">
                My brother<strong>, who lives in Paris,</strong> is a doctor.
              </p>
              <p className="text-sm text-zinc-700 mb-3">
                Мой брат, который живёт в Париже, — врач.
              </p>
              <p className="text-xs text-sky-600 italic">
                Значение: У меня один брат. Он врач. Кстати, он живёт в Париже
                (дополнительная информация).
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 6: Опущение относительных местоимений ===== */
function Step6() {
  const exercise2: FillItem[] = [
    {
      left: "1. The film",
      right: "we watched yesterday was boring.",
      answers: ["that", "which", ""],
      explanation: "Можно опустить (object): The film (that/which) we watched",
    },
    {
      left: "2. The man",
      right: "lives next door is friendly.",
      answers: ["who", "that"],
      explanation: "НЕЛЬЗЯ опустить (subject): The man who/that lives",
    },
    {
      left: "3. The book",
      right: "I borrowed from the library is interesting.",
      answers: ["that", "which", ""],
      explanation: "Можно опустить (object): The book (that/which) I borrowed",
    },
    {
      left: "4. The woman",
      right: "called you is my sister.",
      answers: ["who", "that"],
      explanation: "НЕЛЬЗЯ опустить (subject): The woman who/that called",
    },
    {
      left: "5. The hotel",
      right: "we stayed at was very comfortable.",
      answers: ["that", "which", ""],
      explanation: "Можно опустить (object): The hotel (that/which) we stayed at",
    },
  ];

  return (
    <>
      <UiSection title="Опущение относительных местоимений">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <p className="text-indigo-900 leading-relaxed font-semibold text-lg">
            В некоторых случаях относительное местоимение можно опустить. Это
            делает речь более естественной и разговорной.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-green-300">
          <h4 className="text-2xl font-bold text-green-900 mb-4">
            Когда МОЖНО опустить местоимение
          </h4>
          <div className="bg-green-100 rounded-lg p-5 mb-4">
            <p className="text-xl font-bold text-center text-green-900 mb-2">
              Местоимение можно опустить, если оно OBJECT (дополнение)
            </p>
            <p className="text-center text-zinc-700">
              То есть, если местоимение является объектом действия в придаточном
              предложении
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "С WHO/WHOM (люди как object)",
                examples: [
                  {
                    full: "The man who I met yesterday was very kind.",
                    short: "The man I met yesterday was very kind.",
                    ru: "Человек, которого я встретил вчера, был очень добрым.",
                  },
                  {
                    full: "The girl who you told me about is my cousin.",
                    short: "The girl you told me about is my cousin.",
                    ru: "Девушка, о которой ты мне рассказывал, — моя двоюродная сестра.",
                  },
                ],
              },
              {
                title: "С WHICH (вещи как object)",
                examples: [
                  {
                    full: "The book which I bought is interesting.",
                    short: "The book I bought is interesting.",
                    ru: "Книга, которую я купил, интересная.",
                  },
                  {
                    full: "The car which we rented was expensive.",
                    short: "The car we rented was expensive.",
                    ru: "Машина, которую мы арендовали, была дорогой.",
                  },
                ],
              },
              {
                title: "С THAT (люди и вещи как object)",
                examples: [
                  {
                    full: "The film that we watched was boring.",
                    short: "The film we watched was boring.",
                    ru: "Фильм, который мы смотрели, был скучным.",
                  },
                  {
                    full: "The people that I work with are friendly.",
                    short: "The people I work with are friendly.",
                    ru: "Люди, с которыми я работаю, дружелюбные.",
                  },
                ],
              },
            ].map((section, idx) => (
              <div key={idx} className="bg-green-50 rounded-lg p-5">
                <h5 className="font-semibold text-green-900 mb-3 text-lg">
                  {section.title}
                </h5>
                <div className="space-y-3">
                  {section.examples.map((ex, i) => (
                    <div key={i} className="bg-white rounded p-4">
                      <p className="text-sm text-zinc-900 mb-1">
                        ✓ <strong>С местоимением:</strong> {ex.full}
                      </p>
                      <p className="text-sm text-green-700 font-semibold mb-1">
                        ✓ <strong>Без местоимения:</strong> {ex.short}
                      </p>
                      <p className="text-xs text-zinc-600 italic">{ex.ru}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-red-300">
          <h4 className="text-2xl font-bold text-red-900 mb-4">
            Когда НЕЛЬЗЯ опустить местоимение
          </h4>
          <div className="bg-red-100 rounded-lg p-5 mb-4">
            <p className="text-xl font-bold text-center text-red-900 mb-2">
              Местоимение НЕЛЬЗЯ опустить, если оно SUBJECT (подлежащее)
            </p>
            <p className="text-center text-zinc-700">
              То есть, если местоимение выполняет действие в придаточном
              предложении
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                correct: "The man who lives next door is friendly.",
                wrong: "The man lives next door is friendly.",
                note: "WHO — subject (он живёт), НЕЛЬЗЯ опустить",
              },
              {
                correct: "The book which is on the table is mine.",
                wrong: "The book is on the table is mine.",
                note: "WHICH — subject (она лежит), НЕЛЬЗЯ опустить",
              },
              {
                correct: "The people who work here are very professional.",
                wrong: "The people work here are very professional.",
                note: "WHO — subject (они работают), НЕЛЬЗЯ опустить",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-red-50 rounded-lg p-4">
                <p className="text-sm text-green-700 font-semibold mb-2">
                  ✓ {item.correct}
                </p>
                <p className="text-sm text-red-700 font-semibold mb-2">
                  ✗ {item.wrong} ❌
                </p>
                <p className="text-xs text-zinc-600 italic">{item.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-orange-300">
          <h4 className="text-2xl font-bold text-orange-900 mb-4">
            Также НЕЛЬЗЯ опустить в Non-Defining Clauses
          </h4>
          <p className="text-zinc-700 mb-4">
            В придаточных с запятыми (Non-Defining) местоимение НИКОГДА нельзя
            опустить, даже если оно object:
          </p>
          <div className="space-y-3">
            {[
              {
                correct: "My brother, who lives in Paris, is a doctor.",
                wrong: "My brother, lives in Paris, is a doctor.",
              },
              {
                correct: "London, which is the capital of England, is expensive.",
                wrong: "London, is the capital of England, is expensive.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-orange-50 rounded-lg p-4">
                <p className="text-sm text-green-700 font-semibold mb-2">
                  ✓ {item.correct}
                </p>
                <p className="text-sm text-red-700 font-semibold">
                  ✗ {item.wrong} ❌
                </p>
              </div>
            ))}
          </div>
        </div>

        <CheckableExercise
          title="Упражнение: Заполните пропуски"
          instruction="Используйте относительное местоимение или оставьте пустым, если можно опустить."
          items={exercise2}
        />

        <div className="bg-gradient-to-br from-indigo-50 to-sky-50 rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-xl font-bold text-indigo-900 mb-4">
            Алгоритм: Можно ли опустить местоимение?
          </h4>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-5 border-l-4 border-indigo-400">
              <p className="font-bold text-indigo-900 mb-2">Шаг 1:</p>
              <p className="text-sm text-zinc-800">
                Есть ли запятые? → Если ДА (Non-Defining), НЕЛЬЗЯ опускать
              </p>
            </div>
            <div className="bg-white rounded-lg p-5 border-l-4 border-sky-400">
              <p className="font-bold text-sky-900 mb-2">Шаг 2:</p>
              <p className="text-sm text-zinc-800">
                Местоимение — subject или object?
              </p>
              <p className="text-xs text-zinc-600 mt-1">
                (Subject выполняет действие, object — испытывает)
              </p>
            </div>
            <div className="bg-white rounded-lg p-5 border-l-4 border-green-400">
              <p className="font-bold text-green-900 mb-2">Шаг 3:</p>
              <p className="text-sm text-zinc-800">
                Если object → МОЖНО опустить
              </p>
              <p className="text-sm text-zinc-800">
                Если subject → НЕЛЬЗЯ опустить
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 7: Смешанные упражнения ===== */
function Step7() {
  const mixedExercise: FillItem[] = [
    {
      left: "1. The woman",
      right: "I spoke to was very helpful.",
      answers: ["who", "that", "whom", ""],
      explanation: "Object — можно использовать who/that/whom или опустить",
    },
    {
      left: "2. The house",
      right: "roof is red belongs to my uncle.",
      answers: ["whose"],
      explanation: "Принадлежность (roof = its roof) → whose",
    },
    {
      left: "3. This is the best film",
      right: "I have ever seen.",
      answers: ["that"],
      explanation: "После the best (превосходная степень) → обязательно THAT",
    },
    {
      left: "4. The city",
      right: "I was born is Moscow.",
      answers: ["where"],
      explanation: "Место (in which) → where",
    },
    {
      left: "5. Do you remember the day",
      right: "we first met?",
      answers: ["when"],
      explanation: "Время (on which) → when",
    },
    {
      left: "6. The people",
      right: "live in this street are friendly.",
      answers: ["who", "that"],
      explanation: "Subject — НЕЛЬЗЯ опустить, используем who/that",
    },
  ];

  return (
    <>
      <UiSection title="Смешанные упражнения: Все типы Relative Clauses">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <p className="text-indigo-900 leading-relaxed">
            Проверьте свои знания всех типов относительных местоимений!
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="Упражнение 1: Заполните пропуски"
        instruction="Используйте подходящее относительное местоимение."
        items={mixedExercise}
      />

      <div className="bg-white rounded-lg p-6 border-2 border-sky-300 my-6">
        <h4 className="text-xl font-bold text-sky-900 mb-4">
          Упражнение 2: Объедините предложения
        </h4>
        <p className="text-sm text-zinc-700 mb-4">
          Используйте относительное местоимение для объединения двух предложений
          в одно:
        </p>
        <div className="space-y-4">
          {[
            {
              pair: ["I met a woman.", "She can speak six languages."],
              answer: "I met a woman who can speak six languages.",
            },
            {
              pair: ["This is the book.", "I told you about it."],
              answer: "This is the book (which/that) I told you about.",
            },
            {
              pair: ["The man called.", "His car was stolen."],
              answer: "The man whose car was stolen called.",
            },
            {
              pair: ["We went to a restaurant.", "The food was excellent there."],
              answer: "We went to a restaurant where the food was excellent.",
            },
            {
              pair: ["I'll never forget the day.", "I met you on that day."],
              answer: "I'll never forget the day when I met you.",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-sky-50 rounded-lg p-4">
              <div className="mb-3">
                {item.pair.map((sent, i) => (
                  <p key={i} className="text-sm text-zinc-800">
                    {i + 1}. {sent}
                  </p>
                ))}
              </div>
              <p className="text-sm text-sky-900 font-semibold">
                <strong className="text-sky-700">Ответ:</strong> {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
        <h4 className="text-xl font-bold text-indigo-900 mb-4">
          Упражнение 3: Defining или Non-Defining?
        </h4>
        <p className="text-sm text-zinc-700 mb-4">
          Определите тип придаточного и добавьте запятые, если нужно:
        </p>
        <div className="space-y-4">
          {[
            {
              sentence: "My sister who lives in London is a teacher.",
              type: "Defining (без запятых)",
              note: "Есть несколько сестёр, уточняем, о какой речь",
            },
            {
              sentence: "Shakespeare who was born in 1564 wrote many plays.",
              corrected: "Shakespeare, who was born in 1564, wrote many plays.",
              type: "Non-Defining (нужны запятые)",
              note: "Мы знаем, кто такой Шекспир, дата — дополнительная информация",
            },
            {
              sentence: "The book that I'm reading is fascinating.",
              type: "Defining (без запятых)",
              note: "Уточняем, какая именно книга",
            },
            {
              sentence: "My car which I bought last year is already broken.",
              corrected: "My car, which I bought last year, is already broken.",
              type: "Non-Defining (нужны запятые)",
              note: "У меня одна машина, информация о покупке — дополнительная",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-indigo-50 rounded-lg p-4">
              <p className="text-sm text-zinc-900 mb-2">
                {idx + 1}. {item.sentence}
              </p>
              {item.corrected && (
                <p className="text-sm text-indigo-700 font-semibold mb-2">
                  <strong>Исправлено:</strong> {item.corrected}
                </p>
              )}
              <p className="text-sm text-zinc-700 mb-1">
                <strong>Тип:</strong> {item.type}
              </p>
              <p className="text-xs text-zinc-600 italic">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 8: Текст для чтения ===== */
function Step8() {
  return (
    <>
      <UiSection title="Чтение: Famous Inventors and Their Inventions">
        <div className="bg-gradient-to-r from-slate-50 to-zinc-50 rounded-lg p-6 mb-6 border-2 border-slate-300">
          <p className="text-slate-900 leading-relaxed">
            Прочитайте текст о знаменитых изобретателях. Обратите внимание на
            использование Relative Clauses.
          </p>
        </div>
      </UiSection>

      <div className="bg-white rounded-lg p-6 border-2 border-indigo-200 mb-6">
        <h3 className="text-2xl font-bold text-indigo-900 mb-6 text-center">
          Famous Inventors and Their Inventions
        </h3>

        <div className="space-y-4 text-zinc-800 leading-relaxed">
          <p>
            Throughout history, there have been many brilliant people{" "}
            <strong>who</strong> changed the world with their inventions. These
            are the people <strong>whose</strong> creativity and hard work made
            our modern life possible.
          </p>

          <div className="bg-indigo-50 rounded-lg p-5 my-4">
            <h4 className="text-xl font-bold text-indigo-900 mb-3">
              Thomas Edison (1847-1931)
            </h4>
            <p className="mb-3">
              Thomas Edison, <strong>who</strong> is often called "The Wizard of
              Menlo Park", was one of the most prolific inventors in history. He
              was the man <strong>who</strong> invented the practical electric
              light bulb in 1879, <strong>which</strong> transformed the way
              people lived and worked.
            </p>
            <p className="mb-3">
              Edison also created the phonograph, <strong>which</strong> was the
              first device <strong>that</strong> could record and play back
              sound. The laboratory <strong>where</strong> he worked in Menlo
              Park, New Jersey, became one of the first modern research
              facilities.
            </p>
            <p>
              Edison, <strong>whose</strong> inventions numbered over 1,000
              patents, famously said: "Genius is one percent inspiration and
              ninety-nine percent perspiration." This was the philosophy{" "}
              <strong>that</strong> guided his work throughout his life.
            </p>
          </div>

          <div className="bg-sky-50 rounded-lg p-5 my-4">
            <h4 className="text-xl font-bold text-sky-900 mb-3">
              Marie Curie (1867-1934)
            </h4>
            <p className="mb-3">
              Marie Curie was a Polish scientist <strong>who</strong> became the
              first woman to win a Nobel Prize. She was also the only person{" "}
              <strong>who</strong> won Nobel Prizes in two different scientific
              fields — Physics and Chemistry.
            </p>
            <p className="mb-3">
              Together with her husband Pierre, <strong>whom</strong> she
              married in 1895, Marie discovered two new elements:{" "}
              <strong>polonium</strong>, <strong>which</strong> she named after
              her native Poland, and <strong>radium</strong>. The research{" "}
              <strong>that</strong> they conducted laid the foundation for the
              development of X-rays and cancer treatment.
            </p>
            <p>
              The laboratory <strong>where</strong> Marie worked was often cold
              and poorly equipped, but this didn't stop her. She died in 1934 from
              aplastic anemia, <strong>which</strong> was likely caused by her
              long exposure to radiation. The notebooks <strong>that</strong> she
              used are still radioactive and are kept in lead-lined boxes.
            </p>
          </div>

          <div className="bg-green-50 rounded-lg p-5 my-4">
            <h4 className="text-xl font-bold text-green-900 mb-3">
              Alexander Graham Bell (1847-1922)
            </h4>
            <p className="mb-3">
              Alexander Graham Bell, <strong>whose</strong> mother and wife were
              both deaf, was a Scottish scientist <strong>who</strong> is best
              known for inventing the telephone in 1876. However, the telephone
              was not the only thing <strong>that</strong> he worked on.
            </p>
            <p className="mb-3">
              Bell, <strong>who</strong> moved to Canada and later to the United
              States, was also interested in aviation, hydrofoils, and optical
              telecommunications. The year <strong>when</strong> he made the
              first successful telephone call was 1876, <strong>when</strong> he
              spoke the famous words to his assistant: "Mr. Watson, come here, I
              want to see you."
            </p>
            <p>
              The invention <strong>which</strong> made him famous changed
              communication forever. Today, billions of people use devices{" "}
              <strong>that</strong> evolved from Bell's original telephone.
            </p>
          </div>

          <div className="bg-purple-50 rounded-lg p-5 my-4">
            <h4 className="text-xl font-bold text-purple-900 mb-3">
              The Wright Brothers (Orville: 1871-1948, Wilbur: 1867-1912)
            </h4>
            <p className="mb-3">
              Orville and Wilbur Wright were American brothers{" "}
              <strong>who</strong> invented and built the world's first
              successful airplane. The place <strong>where</strong> they made
              their historic first flight was Kitty Hawk, North Carolina, on
              December 17, 1903.
            </p>
            <p className="mb-3">
              The brothers, <strong>whose</strong> background was in bicycle
              manufacturing, spent years studying bird flight and experimenting
              with gliders. The airplane <strong>that</strong> they built, the
              Wright Flyer, flew for 12 seconds and covered 120 feet on its first
              flight.
            </p>
            <p>
              The achievements <strong>that</strong> the Wright Brothers made
              marked the beginning of the aviation age. Today, millions of people
              fly in airplanes <strong>that</strong> are descendants of the
              Wright Flyer, traveling to destinations <strong>where</strong> it
              would have been impossible to go just over a century ago.
            </p>
          </div>

          <p>
            These inventors and many others <strong>whose</strong> names might
            not be as famous have shaped the modern world. The inventions{" "}
            <strong>that</strong> they created continue to impact our lives
            every day. We live in a time <strong>when</strong> new technologies
            are developed constantly, building on the foundations{" "}
            <strong>that</strong> these pioneers established.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-indigo-50 to-sky-50 border-2 border-indigo-200 rounded-lg p-6">
        <h4 className="text-xl font-bold text-indigo-900 mb-4">
          Словарь к тексту
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            ["prolific", "/prəˈlɪfɪk/", "плодовитый, продуктивный"],
            ["transform", "/trænsˈfɔːm/", "трансформировать, преобразовывать"],
            ["phonograph", "/ˈfəʊnəɡrɑːf/", "фонограф"],
            ["patent", "/ˈpætnt/", "патент"],
            ["perspiration", "/ˌpɜːspəˈreɪʃn/", "пот, усердие"],
            ["polonium", "/pəˈləʊniəm/", "полоний (элемент)"],
            ["radium", "/ˈreɪdiəm/", "радий (элемент)"],
            ["aplastic anemia", "—", "апластическая анемия"],
            ["exposure", "/ɪkˈspəʊʒə/", "воздействие, облучение"],
            ["deaf", "/def/", "глухой"],
            ["aviation", "/ˌeɪviˈeɪʃn/", "авиация"],
            ["hydrofoil", "/ˈhaɪdrəfɔɪl/", "судно на подводных крыльях"],
            ["glider", "/ˈɡlaɪdə/", "планер"],
            ["descendant", "/dɪˈsendənt/", "потомок"],
            ["establish", "/ɪˈstæblɪʃ/", "основывать, устанавливать"],
            ["pioneer", "/ˌpaɪəˈnɪə/", "пионер, первопроходец"],
          ].map(([word, transcr, translation]) => (
            <div
              key={word}
              className="bg-white rounded-lg p-3 border-l-4 border-indigo-400"
            >
              <p className="font-bold text-indigo-700">{word}</p>
              <p className="text-xs text-zinc-600">{transcr}</p>
              <p className="text-sm text-zinc-800">{translation}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 9: Задания на текст с multiple choice ===== */
function Step9() {
  const questions = [
    {
      q: "1. What did Thomas Edison invent in 1879?",
      options: [
        "A. The phonograph",
        "B. The electric light bulb",
        "C. The telephone",
      ],
      correct: "B",
      explanation: "В тексте: 'He was the man who invented the practical electric light bulb in 1879'.",
    },
    {
      q: "2. How many Nobel Prizes did Marie Curie win?",
      options: ["A. One", "B. Two", "C. Three"],
      correct: "B",
      explanation: "В тексте: 'the only person who won Nobel Prizes in two different scientific fields'.",
    },
    {
      q: "3. What element did Marie Curie name after her native country?",
      options: ["A. Radium", "B. Curium", "C. Polonium"],
      correct: "C",
      explanation: "В тексте: 'polonium, which she named after her native Poland'.",
    },
    {
      q: "4. What year did Alexander Graham Bell invent the telephone?",
      options: ["A. 1876", "B. 1879", "C. 1903"],
      correct: "A",
      explanation: "В тексте: 'inventing the telephone in 1876'.",
    },
    {
      q: "5. Where did the Wright Brothers make their first flight?",
      options: [
        "A. In Ohio",
        "B. At Kitty Hawk, North Carolina",
        "C. In Washington",
      ],
      correct: "B",
      explanation: "В тексте: 'The place where they made their historic first flight was Kitty Hawk, North Carolina'.",
    },
    {
      q: "6. What was the Wright Brothers' background before aviation?",
      options: [
        "A. Car manufacturing",
        "B. Bicycle manufacturing",
        "C. Engine manufacturing",
      ],
      correct: "B",
      explanation: "В тексте: 'whose background was in bicycle manufacturing'.",
    },
    {
      q: "7. How long was the Wright Flyer's first flight?",
      options: ["A. 12 seconds", "B. 30 seconds", "C. 1 minute"],
      correct: "A",
      explanation: "В тексте: 'flew for 12 seconds'.",
    },
    {
      q: "8. What caused Marie Curie's death?",
      options: [
        "A. Cancer",
        "B. Aplastic anemia from radiation exposure",
        "C. Old age",
      ],
      correct: "B",
      explanation: "В тексте: 'She died in 1934 from aplastic anemia, which was likely caused by her long exposure to radiation'.",
    },
  ];

  return (
    <>
      <UiSection title="Задания на понимание текста">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <p className="text-indigo-700 leading-relaxed">
            Проверьте, насколько внимательно вы прочитали текст! Выберите
            правильный ответ.
          </p>
        </div>
      </UiSection>

      <div className="space-y-4">
        {questions.map((item, idx) => (
          <MultipleChoiceQuestion
            key={idx}
            question={item.q}
            options={item.options}
            correctAnswer={item.correct}
            explanation={item.explanation}
          />
        ))}
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 10: Итоговый тест ===== */
function Step10() {
  const finalTest = [
    {
      q: "1. The woman ... called you is my friend.",
      options: ["A. who", "B. which", "C. whose"],
      correct: "A",
      explanation: "Для людей (subject) → WHO",
    },
    {
      q: "2. The book ... I'm reading is fascinating.",
      options: ["A. who", "B. which", "C. whose"],
      correct: "B",
      explanation: "Для вещей → WHICH (или THAT, или можно опустить)",
    },
    {
      q: "3. This is the best hotel ... I have ever stayed in.",
      options: ["A. which", "B. that", "C. where"],
      correct: "B",
      explanation: "После превосходной степени (the best) → обязательно THAT",
    },
    {
      q: "4. The man ... car was stolen called the police.",
      options: ["A. who", "B. which", "C. whose"],
      correct: "C",
      explanation: "Принадлежность (his car) → WHOSE",
    },
    {
      q: "5. The city ... I was born is Moscow.",
      options: ["A. which", "B. where", "C. when"],
      correct: "B",
      explanation: "Место (in which) → WHERE",
    },
    {
      q: "6. I remember the day ... we first met.",
      options: ["A. which", "B. where", "C. when"],
      correct: "C",
      explanation: "Время (on which) → WHEN",
    },
    {
      q: "7. My brother, ... lives in Paris, is a doctor.",
      options: ["A. who", "B. that", "C. which"],
      correct: "A",
      explanation: "Non-Defining (с запятыми) → НЕЛЬЗЯ использовать THAT, только WHO",
    },
    {
      q: "8. The people ... work here are friendly.",
      options: ["A. (nothing)", "B. who", "C. whose"],
      correct: "B",
      explanation: "Subject — НЕЛЬЗЯ опустить, используем WHO или THAT",
    },
    {
      q: "9. London, ... is the capital of England, is expensive.",
      options: ["A. that", "B. which", "C. where"],
      correct: "B",
      explanation: "Non-Defining (с запятыми) → WHICH (THAT нельзя)",
    },
    {
      q: "10. The film ... we watched was boring.",
      options: ["A. must use 'which'", "B. must use 'that'", "C. can be omitted"],
      correct: "C",
      explanation: "Object в Defining clause → можно опустить",
    },
  ];

  return (
    <>
      <UiSection title="Итоговый тест: Relative Clauses">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🎯</div>
            <div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">
                Финальный тест!
              </h3>
              <p className="text-zinc-800 leading-relaxed">
                Проверьте свои знания Relative Clauses. Выберите правильный
                вариант ответа.
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <div className="space-y-4 mb-6">
        {finalTest.map((item, idx) => (
          <MultipleChoiceQuestion
            key={idx}
            question={item.q}
            options={item.options}
            correctAnswer={item.correct}
            explanation={item.explanation}
          />
        ))}
      </div>

      <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
        <h4 className="text-xl font-bold text-indigo-900 mb-4">
          Итоговая таблица: Relative Pronouns
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-100 via-sky-100 to-blue-100">
                <th className="border-2 border-indigo-300 p-3 text-left font-bold text-indigo-900">
                  Местоимение
                </th>
                <th className="border-2 border-indigo-300 p-3 text-left font-bold text-indigo-900">
                  Используется для
                </th>
                <th className="border-2 border-indigo-300 p-3 text-left font-bold text-indigo-900">
                  Можно опустить?
                </th>
                <th className="border-2 border-indigo-300 p-3 text-left font-bold text-indigo-900">
                  Пример
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border-2 border-indigo-200 p-3 font-semibold text-indigo-700">
                  WHO
                </td>
                <td className="border-2 border-indigo-200 p-3">Люди</td>
                <td className="border-2 border-indigo-200 p-3">
                  Только как object
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  The man <strong>who</strong> lives here
                </td>
              </tr>
              <tr className="bg-indigo-50">
                <td className="border-2 border-indigo-200 p-3 font-semibold text-sky-700">
                  WHICH
                </td>
                <td className="border-2 border-indigo-200 p-3">Вещи, животные</td>
                <td className="border-2 border-indigo-200 p-3">
                  Только как object
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  The book <strong>which</strong> I read
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border-2 border-indigo-200 p-3 font-semibold text-slate-700">
                  THAT
                </td>
                <td className="border-2 border-indigo-200 p-3">Люди, вещи</td>
                <td className="border-2 border-indigo-200 p-3">
                  Только как object
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  The car <strong>that</strong> he drives
                </td>
              </tr>
              <tr className="bg-indigo-50">
                <td className="border-2 border-indigo-200 p-3 font-semibold text-green-700">
                  WHOSE
                </td>
                <td className="border-2 border-indigo-200 p-3">Принадлежность</td>
                <td className="border-2 border-indigo-200 p-3">Никогда</td>
                <td className="border-2 border-indigo-200 p-3">
                  The man <strong>whose</strong> car...
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border-2 border-indigo-200 p-3 font-semibold text-blue-700">
                  WHERE
                </td>
                <td className="border-2 border-indigo-200 p-3">Место</td>
                <td className="border-2 border-indigo-200 p-3">Никогда</td>
                <td className="border-2 border-indigo-200 p-3">
                  The house <strong>where</strong> I live
                </td>
              </tr>
              <tr className="bg-indigo-50">
                <td className="border-2 border-indigo-200 p-3 font-semibold text-purple-700">
                  WHEN
                </td>
                <td className="border-2 border-indigo-200 p-3">Время</td>
                <td className="border-2 border-indigo-200 p-3">Никогда</td>
                <td className="border-2 border-indigo-200 p-3">
                  The day <strong>when</strong> we met
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="bg-gradient-to-r from-indigo-50 to-sky-50 border-2 border-indigo-300 rounded-lg p-6">
          <h4 className="font-bold text-sky-900 mb-3 flex items-center gap-2">
            <span>🎓</span>
            <span>Что вы изучили:</span>
          </h4>
          <ul className="space-y-2 text-sm text-zinc-800">
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                <strong>6 основных относительных местоимений</strong>: who,
                which, that, whose, where, when
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                <strong>Defining vs Non-Defining Clauses</strong> и правила
                использования запятых
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                Когда можно <strong>опустить</strong> относительное местоимение
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                Когда <strong>обязательно</strong> использовать THAT
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                Разницу между <strong>subject</strong> и <strong>object</strong>{" "}
                в придаточных предложениях
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-sky-50 via-indigo-50 to-blue-50 rounded-lg p-6 border-2 border-sky-300">
          <h4 className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
            <span>✨</span>
            <span>Отличная работа!</span>
          </h4>
          <p className="text-sm text-zinc-800">
            Вы успешно изучили Relative Clauses — одну из самых важных
            грамматических тем! Теперь вы можете создавать сложные предложения,
            делая свою речь более естественной и плавной. Продолжайте
            практиковаться, обращая внимание на использование относительных
            местоимений в текстах и речи носителей языка!
          </p>
        </div>
      </div>
    </>
  );
}

