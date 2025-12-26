"use client";

import React, { useState } from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function PassiveVoice1({ step }: Props) {
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

/* ===== СТРАНИЦА 1: Введение в Passive Voice ===== */
function Step1() {
  return (
    <>
      <UiSection title="Passive Voice: Пассивный залог">
        <div className="bg-gradient-to-br from-slate-50 via-zinc-50 to-slate-50 rounded-lg p-6 mb-6 border-2 border-slate-300">
          <div className="flex items-start gap-4 mb-4">
            <div className="text-4xl">📚</div>
            <div>
              <p className="text-lg font-bold text-slate-900 mb-3">
                Что такое залог?
              </p>
              <p className="text-zinc-800 leading-relaxed mb-3">
                <strong>Залог (Voice)</strong> — это грамматическая категория,
                которая показывает отношение между действием и его исполнителем.
              </p>
              <p className="text-zinc-800 leading-relaxed">
                В английском языке существует два залога:{" "}
                <strong>Active Voice</strong> (действительный залог) и{" "}
                <strong>Passive Voice</strong> (страдательный/пассивный залог).
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-xl font-bold text-indigo-900 mb-4">
            Active Voice (Действительный залог)
          </h4>
          <p className="text-zinc-700 mb-4">
            Подлежащее <strong>само выполняет</strong> действие.
          </p>
          <div className="bg-indigo-50 rounded-lg p-5">
            <p className="text-lg font-semibold text-indigo-900 mb-2">
              <strong>Shakespeare</strong> wrote "Hamlet".
            </p>
            <p className="text-sm text-zinc-600 mb-1">
              Шекспир написал "Гамлета".
            </p>
            <p className="text-sm text-indigo-700 italic">
              Подлежащее (Shakespeare) выполняет действие (wrote).
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-sky-300">
          <h4 className="text-xl font-bold text-sky-900 mb-4">
            Passive Voice (Страдательный залог)
          </h4>
          <p className="text-zinc-700 mb-4">
            Подлежащее <strong>испытывает на себе</strong> действие, которое
            совершается кем-то или чем-то другим.
          </p>
          <div className="bg-sky-50 rounded-lg p-5">
            <p className="text-lg font-semibold text-sky-900 mb-2">
              "Hamlet" <strong>was written</strong> by Shakespeare.
            </p>
            <p className="text-sm text-zinc-600 mb-1">
              "Гамлет" был написан Шекспиром.
            </p>
            <p className="text-sm text-sky-700 italic">
              Подлежащее (Hamlet) испытывает на себе действие (was written).
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-50 to-zinc-50 rounded-lg p-6 border-2 border-slate-300">
          <h4 className="text-xl font-bold text-slate-900 mb-4">
            Когда используется Passive Voice?
          </h4>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4">
              <p className="font-semibold text-zinc-900 mb-2">
                1. Исполнитель действия неизвестен или неважен
              </p>
              <p className="text-sm text-zinc-700 mb-1">
                My car <strong>was stolen</strong> yesterday.
              </p>
              <p className="text-xs text-zinc-600">
                (Неважно, кто украл — факт в том, что машину украли)
              </p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <p className="font-semibold text-zinc-900 mb-2">
                2. Исполнитель очевиден из контекста
              </p>
              <p className="text-sm text-zinc-700 mb-1">
                The criminal <strong>was arrested</strong>.
              </p>
              <p className="text-xs text-zinc-600">
                (Понятно, что полиция арестовала)
              </p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <p className="font-semibold text-zinc-900 mb-2">
                3. Акцент на действии, а не на исполнителе
              </p>
              <p className="text-sm text-zinc-700 mb-1">
                The pyramids <strong>were built</strong> thousands of years ago.
              </p>
              <p className="text-xs text-zinc-600">
                (Важен факт постройки, а не кто именно строил)
              </p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <p className="font-semibold text-zinc-900 mb-2">
                4. В научных, технических и официальных текстах
              </p>
              <p className="text-sm text-zinc-700 mb-1">
                The results <strong>are published</strong> in the journal.
              </p>
              <p className="text-xs text-zinc-600">
                (Формальный, объективный стиль)
              </p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <p className="font-semibold text-zinc-900 mb-2">
                5. Когда хотим избежать обвинений или перекладывания
                ответственности
              </p>
              <p className="text-sm text-zinc-700 mb-1">
                A mistake <strong>was made</strong>.
              </p>
              <p className="text-xs text-zinc-600">
                (Не указываем, кто сделал ошибку)
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-sky-50 rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-xl font-bold text-indigo-900 mb-4">
            Общая формула Passive Voice
          </h4>
          <div className="bg-white rounded-lg p-5 mb-4">
            <p className="text-2xl font-bold text-center text-indigo-900 mb-3">
              BE + V3 (Past Participle)
            </p>
            <p className="text-center text-zinc-700">
              Глагол <strong>be</strong> в нужном времени + третья форма глагола
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-indigo-50 rounded p-4">
              <p className="font-semibold text-indigo-900 mb-2">
                Present Simple Passive
              </p>
              <p className="text-sm text-zinc-700">am/is/are + V3</p>
              <p className="text-xs text-zinc-600 mt-1">
                The room <strong>is cleaned</strong> every day.
              </p>
            </div>
            <div className="bg-sky-50 rounded p-4">
              <p className="font-semibold text-sky-900 mb-2">
                Past Simple Passive
              </p>
              <p className="text-sm text-zinc-700">was/were + V3</p>
              <p className="text-xs text-zinc-600 mt-1">
                The room <strong>was cleaned</strong> yesterday.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 2: Present Simple Passive - образование ===== */
function Step2() {
  return (
    <>
      <UiSection title="Present Simple Passive: Образование">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <p className="text-indigo-900 leading-relaxed font-semibold text-lg mb-2">
            Present Simple Passive используется для описания действий, которые
            происходят регулярно или являются общепринятыми фактами.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Фокус на действии, а не на том, кто его совершает.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-2xl font-bold text-indigo-900 mb-4">
            Формула образования
          </h4>
          <div className="bg-gradient-to-r from-indigo-100 to-sky-100 rounded-lg p-6 mb-6">
            <p className="text-3xl font-bold text-center text-indigo-900 mb-2">
              am / is / are + V3
            </p>
            <p className="text-center text-zinc-700 text-lg">
              Глагол <strong>be</strong> в Present Simple + третья форма глагола
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-zinc-50 rounded-lg p-5">
              <h5 className="font-bold text-zinc-900 mb-3 text-lg">
                Выбор формы глагола BE:
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded p-4 border-2 border-indigo-200">
                  <p className="font-bold text-indigo-700 mb-2">AM</p>
                  <p className="text-sm text-zinc-700">I am</p>
                  <p className="text-xs text-zinc-600 mt-2">
                    I <strong>am invited</strong> to the party.
                  </p>
                </div>
                <div className="bg-white rounded p-4 border-2 border-sky-200">
                  <p className="font-bold text-sky-700 mb-2">IS</p>
                  <p className="text-sm text-zinc-700">
                    He / She / It
                    <br />
                    единственное число
                  </p>
                  <p className="text-xs text-zinc-600 mt-2">
                    The book <strong>is written</strong> in English.
                  </p>
                </div>
                <div className="bg-white rounded p-4 border-2 border-blue-200">
                  <p className="font-bold text-blue-700 mb-2">ARE</p>
                  <p className="text-sm text-zinc-700">
                    You / We / They
                    <br />
                    множественное число
                  </p>
                  <p className="text-xs text-zinc-600 mt-2">
                    The houses <strong>are built</strong> of brick.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 rounded-lg p-5">
              <h5 className="font-bold text-indigo-900 mb-3 text-lg">
                Третья форма глагола (V3):
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded p-4">
                  <p className="font-semibold text-indigo-700 mb-2">
                    Правильные глаголы: + ED
                  </p>
                  <div className="space-y-1 text-sm">
                    <p>
                      clean → clean<strong>ed</strong>
                    </p>
                    <p>
                      use → us<strong>ed</strong>
                    </p>
                    <p>
                      paint → paint<strong>ed</strong>
                    </p>
                    <p>
                      cook → cook<strong>ed</strong>
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded p-4">
                  <p className="font-semibold text-sky-700 mb-2">
                    Неправильные глаголы: 3-я форма
                  </p>
                  <div className="space-y-1 text-sm">
                    <p>
                      write → writ<strong>ten</strong>
                    </p>
                    <p>
                      make → ma<strong>de</strong>
                    </p>
                    <p>
                      build → bui<strong>lt</strong>
                    </p>
                    <p>
                      speak → spo<strong>ken</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-sky-300">
          <h4 className="text-2xl font-bold text-sky-900 mb-4">
            1. Утвердительные предложения
          </h4>
          <div className="space-y-3">
            {[
              {
                en: "English is spoken all over the world.",
                ru: "На английском говорят по всему миру.",
                structure: "English (subject) + is (be) + spoken (V3)",
              },
              {
                en: "The letters are delivered every morning.",
                ru: "Письма доставляются каждое утро.",
                structure: "The letters (subject) + are (be) + delivered (V3)",
              },
              {
                en: "This room is cleaned twice a day.",
                ru: "Эта комната убирается дважды в день.",
                structure: "This room (subject) + is (be) + cleaned (V3)",
              },
              {
                en: "Cars are made in this factory.",
                ru: "Машины производятся на этом заводе.",
                structure: "Cars (subject) + are (be) + made (V3)",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-sky-50 rounded-lg p-4">
                <p className="text-sm font-semibold text-sky-900 mb-1">
                  {item.en}
                </p>
                <p className="text-sm text-zinc-700 mb-2">{item.ru}</p>
                <p className="text-xs text-zinc-600 italic">{item.structure}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-slate-300">
          <h4 className="text-2xl font-bold text-slate-900 mb-4">
            2. Отрицательные предложения
          </h4>
          <div className="bg-slate-100 rounded-lg p-5 mb-4">
            <p className="text-xl font-bold text-center text-slate-900 mb-2">
              am / is / are + NOT + V3
            </p>
          </div>
          <div className="space-y-3">
            {[
              {
                en: "This language is not spoken in Europe.",
                ru: "На этом языке не говорят в Европе.",
                short: "isn't spoken",
              },
              {
                en: "The letters are not delivered on Sundays.",
                ru: "Письма не доставляются по воскресеньям.",
                short: "aren't delivered",
              },
              {
                en: "I am not invited to the party.",
                ru: "Я не приглашён на вечеринку.",
                short: "I'm not invited",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-zinc-50 rounded-lg p-4">
                <p className="text-sm font-semibold text-zinc-900 mb-1">
                  {item.en}
                </p>
                <p className="text-sm text-zinc-700 mb-2">{item.ru}</p>
                <p className="text-xs text-indigo-600">
                  Сокращённо: {item.short}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-2xl font-bold text-indigo-900 mb-4">
            3. Вопросительные предложения
          </h4>
          <div className="bg-indigo-100 rounded-lg p-5 mb-4">
            <p className="text-xl font-bold text-center text-indigo-900 mb-2">
              Am / Is / Are + subject + V3?
            </p>
          </div>
          <div className="space-y-3">
            {[
              {
                en: "Is English spoken in this country?",
                ru: "На английском говорят в этой стране?",
                answer: "Yes, it is. / No, it isn't.",
              },
              {
                en: "Are the letters delivered every day?",
                ru: "Письма доставляются каждый день?",
                answer: "Yes, they are. / No, they aren't.",
              },
              {
                en: "Is this room cleaned regularly?",
                ru: "Эта комната убирается регулярно?",
                answer: "Yes, it is. / No, it isn't.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-indigo-50 rounded-lg p-4">
                <p className="text-sm font-semibold text-indigo-900 mb-1">
                  {item.en}
                </p>
                <p className="text-sm text-zinc-700 mb-2">{item.ru}</p>
                <p className="text-xs text-zinc-600">
                  <strong>Ответ:</strong> {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 3: Present Simple Passive - использование + упражнения ===== */
function Step3() {
  const exercise1: FillItem[] = [
    {
      left: "1. This newspaper",
      right: "(publish) every day.",
      answers: ["is published"],
      explanation: "Present Simple Passive: is + published",
    },
    {
      left: "2. Millions of emails",
      right: "(send) every hour.",
      answers: ["are sent"],
      explanation: "Present Simple Passive: are + sent (множ. число)",
    },
    {
      left: "3. The office",
      right: "(clean) in the evening.",
      answers: ["is cleaned"],
      explanation: "Present Simple Passive: is + cleaned",
    },
    {
      left: "4. These cars",
      right: "(make) in Germany.",
      answers: ["are made"],
      explanation: "Present Simple Passive: are + made (мн. число)",
    },
    {
      left: "5. I",
      right: "(not / invite) to parties very often.",
      answers: ["am not invited", "am not invited", "'m not invited"],
      explanation: "Present Simple Passive отрицание: am not invited",
    },
  ];

  return (
    <>
      <UiSection title="Present Simple Passive: Использование">
        <div className="bg-gradient-to-r from-indigo-50 to-sky-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <h4 className="text-lg font-bold text-indigo-900 mb-3">
            Когда используется Present Simple Passive:
          </h4>
          <div className="space-y-3">
            <div className="bg-white rounded p-4">
              <p className="font-semibold text-indigo-700 mb-1">
                1. Регулярные, повторяющиеся действия
              </p>
              <p className="text-sm text-zinc-700">
                The shop <strong>is opened</strong> at 9 AM every day.
              </p>
            </div>
            <div className="bg-white rounded p-4">
              <p className="font-semibold text-sky-700 mb-1">
                2. Общеизвестные факты
              </p>
              <p className="text-sm text-zinc-700">
                Rice <strong>is grown</strong> in Asia.
              </p>
            </div>
            <div className="bg-white rounded p-4">
              <p className="font-semibold text-slate-700 mb-1">
                3. Процессы и правила
              </p>
              <p className="text-sm text-zinc-700">
                Passports <strong>are required</strong> for international
                travel.
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-sky-300">
          <h4 className="text-xl font-bold text-sky-900 mb-4">
            BY-agent (указание исполнителя)
          </h4>
          <p className="text-zinc-700 mb-4">
            Если нужно указать, <strong>кто</strong> или <strong>что</strong>{" "}
            выполняет действие, используем <strong>by + исполнитель</strong>:
          </p>
          <div className="space-y-3">
            <div className="bg-sky-50 rounded-lg p-4">
              <p className="font-semibold text-sky-900 mb-2">С указанием BY:</p>
              <div className="space-y-2">
                <div>
                  <p className="text-sm text-zinc-900">
                    This book <strong>is written by</strong> J.K. Rowling.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Эта книга написана Дж. К. Роулинг.
                  </p>
                </div>
                <div>
                  <p className="text-sm text-zinc-900">
                    The house <strong>is cleaned by</strong> a professional
                    service.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Дом убирается профессиональной службой.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-50 rounded-lg p-4">
              <p className="font-semibold text-zinc-900 mb-2">
                БЕЗ указания BY (исполнитель неважен/неизвестен):
              </p>
              <div className="space-y-2">
                <div>
                  <p className="text-sm text-zinc-900">
                    English <strong>is spoken</strong> here.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Здесь говорят по-английски.
                  </p>
                </div>
                <div>
                  <p className="text-sm text-zinc-900">
                    The office <strong>is closed</strong> at 6 PM.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Офис закрывается в 6 вечера.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-xl font-bold text-indigo-900 mb-4">
            Примеры из реальной жизни
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                category: "Образование",
                examples: [
                  "Students are taught English at school.",
                  "Exams are held twice a year.",
                  "Homework is assigned every day.",
                ],
              },
              {
                category: "Работа",
                examples: [
                  "Employees are paid monthly.",
                  "Reports are written every week.",
                  "Meetings are organized regularly.",
                ],
              },
              {
                category: "Повседневная жизнь",
                examples: [
                  "Newspapers are delivered in the morning.",
                  "Rubbish is collected on Tuesdays.",
                  "The streets are cleaned at night.",
                ],
              },
              {
                category: "Производство",
                examples: [
                  "These phones are made in China.",
                  "Products are tested before sale.",
                  "Quality is checked carefully.",
                ],
              },
            ].map((block) => (
              <div key={block.category} className="bg-indigo-50 rounded-lg p-4">
                <p className="font-bold text-indigo-900 mb-3">
                  {block.category}
                </p>
                <div className="space-y-2">
                  {block.examples.map((ex, idx) => (
                    <p key={idx} className="text-sm text-zinc-700">
                      • {ex}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <CheckableExercise
          title="Упражнение 1: Образуйте Present Simple Passive"
          instruction="Поставьте глагол в скобках в Present Simple Passive."
          items={exercise1}
        />

        <div className="bg-white rounded-lg p-6 border-2 border-slate-300">
          <h4 className="text-xl font-bold text-slate-900 mb-4">
            Упражнение 2: Трансформация Active → Passive
          </h4>
          <p className="text-sm text-zinc-700 mb-4">
            Преобразуйте предложения из Active в Passive Voice:
          </p>
          <div className="space-y-4">
            {[
              {
                active: "They speak Spanish in Argentina.",
                passive: "Spanish is spoken in Argentina.",
                note: "Подлежащее Active (Spanish) становится подлежащим Passive",
              },
              {
                active: "People grow coffee in Brazil.",
                passive: "Coffee is grown in Brazil.",
                note: "Дополнение Active (coffee) → подлежащее Passive",
              },
              {
                active: "They make these shoes in Italy.",
                passive: "These shoes are made in Italy.",
                note: "Множественное число → are made",
              },
              {
                active: "The company employs 500 people.",
                passive: "500 people are employed by the company.",
                note: "С указанием by-agent",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-zinc-50 rounded-lg p-4">
                <p className="text-sm text-zinc-800 mb-1">
                  <strong className="text-indigo-700">
                    {idx + 1}. Active:
                  </strong>{" "}
                  {item.active}
                </p>
                <p className="text-sm text-sky-900 font-semibold mb-2">
                  <strong className="text-sky-700">Passive:</strong>{" "}
                  {item.passive}
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

/* ===== СТРАНИЦА 4: Past Simple Passive - образование ===== */
function Step4() {
  return (
    <>
      <UiSection title="Past Simple Passive: Образование">
        <div className="bg-gradient-to-r from-slate-50 via-zinc-50 to-slate-50 rounded-lg p-6 mb-6 border-2 border-slate-300">
          <p className="text-slate-900 leading-relaxed font-semibold text-lg mb-2">
            Past Simple Passive используется для описания действий, которые
            произошли в прошлом.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Фокус на действии в прошлом, а не на том, кто его совершил.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-slate-300">
          <h4 className="text-2xl font-bold text-slate-900 mb-4">
            Формула образования
          </h4>
          <div className="bg-gradient-to-r from-slate-100 to-zinc-100 rounded-lg p-6 mb-6">
            <p className="text-3xl font-bold text-center text-slate-900 mb-2">
              was / were + V3
            </p>
            <p className="text-center text-zinc-700 text-lg">
              Глагол <strong>be</strong> в Past Simple + третья форма глагола
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-zinc-50 rounded-lg p-5">
              <h5 className="font-bold text-zinc-900 mb-3 text-lg">
                Выбор формы глагола BE в прошедшем времени:
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded p-4 border-2 border-slate-200">
                  <p className="font-bold text-slate-700 mb-2">WAS</p>
                  <p className="text-sm text-zinc-700 mb-3">
                    I / He / She / It
                    <br />
                    единственное число
                  </p>
                  <div className="space-y-2 text-xs">
                    <p className="text-zinc-900">
                      I <strong>was invited</strong> to the meeting.
                    </p>
                    <p className="text-zinc-900">
                      The letter <strong>was sent</strong> yesterday.
                    </p>
                    <p className="text-zinc-900">
                      He <strong>was born</strong> in 1990.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded p-4 border-2 border-indigo-200">
                  <p className="font-bold text-indigo-700 mb-2">WERE</p>
                  <p className="text-sm text-zinc-700 mb-3">
                    You / We / They
                    <br />
                    множественное число
                  </p>
                  <div className="space-y-2 text-xs">
                    <p className="text-zinc-900">
                      We <strong>were invited</strong> to the party.
                    </p>
                    <p className="text-zinc-900">
                      The letters <strong>were sent</strong> last week.
                    </p>
                    <p className="text-zinc-900">
                      They <strong>were born</strong> in the USA.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-2xl font-bold text-indigo-900 mb-4">
            1. Утвердительные предложения
          </h4>
          <div className="space-y-3">
            {[
              {
                en: "The pyramids were built thousands of years ago.",
                ru: "Пирамиды были построены тысячи лет назад.",
                structure: "The pyramids (plural) + were + built (V3)",
              },
              {
                en: "This house was built in 1900.",
                ru: "Этот дом был построен в 1900 году.",
                structure: "This house (singular) + was + built (V3)",
              },
              {
                en: "The thieves were arrested yesterday.",
                ru: "Воры были арестованы вчера.",
                structure: "The thieves (plural) + were + arrested (V3)",
              },
              {
                en: "The book was written by Tolstoy.",
                ru: "Книга была написана Толстым.",
                structure:
                  "The book (singular) + was + written (V3) + by Tolstoy",
              },
              {
                en: "Many people were invited to the wedding.",
                ru: "Много людей было приглашено на свадьбу.",
                structure: "Many people (plural) + were + invited (V3)",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-indigo-50 rounded-lg p-4">
                <p className="text-sm font-semibold text-indigo-900 mb-1">
                  {item.en}
                </p>
                <p className="text-sm text-zinc-700 mb-2">{item.ru}</p>
                <p className="text-xs text-zinc-600 italic">{item.structure}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-sky-300">
          <h4 className="text-2xl font-bold text-sky-900 mb-4">
            2. Отрицательные предложения
          </h4>
          <div className="bg-sky-100 rounded-lg p-5 mb-4">
            <p className="text-xl font-bold text-center text-sky-900 mb-2">
              was / were + NOT + V3
            </p>
          </div>
          <div className="space-y-3">
            {[
              {
                en: "The letter was not sent yesterday.",
                ru: "Письмо не было отправлено вчера.",
                short: "wasn't sent",
              },
              {
                en: "The students were not invited to the conference.",
                ru: "Студенты не были приглашены на конференцию.",
                short: "weren't invited",
              },
              {
                en: "This book was not written in English.",
                ru: "Эта книга не была написана на английском.",
                short: "wasn't written",
              },
              {
                en: "The questions were not answered.",
                ru: "На вопросы не ответили.",
                short: "weren't answered",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-sky-50 rounded-lg p-4">
                <p className="text-sm font-semibold text-sky-900 mb-1">
                  {item.en}
                </p>
                <p className="text-sm text-zinc-700 mb-2">{item.ru}</p>
                <p className="text-xs text-indigo-600">
                  Сокращённо: {item.short}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-slate-300">
          <h4 className="text-2xl font-bold text-slate-900 mb-4">
            3. Вопросительные предложения
          </h4>
          <div className="bg-slate-100 rounded-lg p-5 mb-4">
            <p className="text-xl font-bold text-center text-slate-900 mb-2">
              Was / Were + subject + V3?
            </p>
          </div>
          <div className="space-y-3">
            {[
              {
                en: "Was the letter sent yesterday?",
                ru: "Письмо было отправлено вчера?",
                answer: "Yes, it was. / No, it wasn't.",
              },
              {
                en: "Were the students invited to the meeting?",
                ru: "Студенты были приглашены на встречу?",
                answer: "Yes, they were. / No, they weren't.",
              },
              {
                en: "Was this house built in the 19th century?",
                ru: "Этот дом был построен в 19 веке?",
                answer: "Yes, it was. / No, it wasn't.",
              },
              {
                en: "Were the documents signed?",
                ru: "Документы были подписаны?",
                answer: "Yes, they were. / No, they weren't.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-zinc-50 rounded-lg p-4">
                <p className="text-sm font-semibold text-slate-900 mb-1">
                  {item.en}
                </p>
                <p className="text-sm text-zinc-700 mb-2">{item.ru}</p>
                <p className="text-xs text-zinc-600">
                  <strong>Ответ:</strong> {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-sky-50 rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-xl font-bold text-indigo-900 mb-4">
            ⚠️ Важно: WAS или WERE?
          </h4>
          <div className="space-y-3">
            <div className="bg-white rounded p-4">
              <p className="font-semibold text-indigo-700 mb-2">
                ✓ The car WAS stolen. (единственное число)
              </p>
              <p className="font-semibold text-sky-700 mb-2">
                ✓ The cars WERE stolen. (множественное число)
              </p>
            </div>
            <div className="bg-white rounded p-4">
              <p className="font-semibold text-red-700 mb-2">
                ✗ The car <s>were</s> stolen. ❌
              </p>
              <p className="font-semibold text-red-700 mb-2">
                ✗ The cars <s>was</s> stolen. ❌
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 5: Past Simple Passive - использование + упражнения ===== */
function Step5() {
  const exercise2: FillItem[] = [
    {
      left: "1. The building",
      right: "(destroy) in the fire last year.",
      answers: ["was destroyed"],
      explanation: "Past Simple Passive: was + destroyed (ед. число)",
    },
    {
      left: "2. These photographs",
      right: "(take) in 1965.",
      answers: ["were taken"],
      explanation: "Past Simple Passive: were + taken (мн. число)",
    },
    {
      left: "3. The letter",
      right: "(not / send) yesterday.",
      answers: ["was not sent", "wasn't sent"],
      explanation: "Past Simple Passive отрицание: was not sent",
    },
    {
      left: "4. When",
      right: "this bridge (build)?",
      answers: ["was this bridge built", "was", "built"],
      explanation: "Вопрос в Past Simple Passive: When was ... built?",
    },
    {
      left: "5. The thieves",
      right: "(arrest) two days ago.",
      answers: ["were arrested"],
      explanation: "Past Simple Passive: were + arrested (мн. число)",
    },
  ];

  return (
    <>
      <UiSection title="Past Simple Passive: Использование и практика">
        <div className="bg-gradient-to-r from-slate-50 to-zinc-50 rounded-lg p-6 mb-6 border-2 border-slate-300">
          <h4 className="text-lg font-bold text-slate-900 mb-3">
            Когда используется Past Simple Passive:
          </h4>
          <div className="space-y-3">
            <div className="bg-white rounded p-4">
              <p className="font-semibold text-slate-700 mb-1">
                1. Завершённые действия в прошлом
              </p>
              <p className="text-sm text-zinc-700">
                The work <strong>was finished</strong> last week.
              </p>
            </div>
            <div className="bg-white rounded p-4">
              <p className="font-semibold text-indigo-700 mb-1">
                2. Исторические факты
              </p>
              <p className="text-sm text-zinc-700">
                America <strong>was discovered</strong> in 1492.
              </p>
            </div>
            <div className="bg-white rounded p-4">
              <p className="font-semibold text-sky-700 mb-1">
                3. События с конкретным указанием времени
              </p>
              <p className="text-sm text-zinc-700">
                The email <strong>was sent</strong> at 3 PM yesterday.
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-xl font-bold text-indigo-900 mb-4">
            Примеры из истории и реальной жизни
          </h4>
          <div className="space-y-3">
            {[
              {
                en: "The first computer was invented in the 1940s.",
                ru: "Первый компьютер был изобретён в 1940-х.",
                category: "Изобретения",
              },
              {
                en: "The Harry Potter books were written by J.K. Rowling.",
                ru: "Книги о Гарри Поттере были написаны Дж. К. Роулинг.",
                category: "Литература",
              },
              {
                en: "The Olympic Games were held in Tokyo in 2021.",
                ru: "Олимпийские игры проводились в Токио в 2021.",
                category: "Спорт",
              },
              {
                en: "Penicillin was discovered by Alexander Fleming in 1928.",
                ru: "Пенициллин был открыт Александром Флемингом в 1928.",
                category: "Наука",
              },
              {
                en: "The Mona Lisa was painted by Leonardo da Vinci.",
                ru: "Мона Лиза была написана Леонардо да Винчи.",
                category: "Искусство",
              },
              {
                en: "The Great Wall of China was built over many centuries.",
                ru: "Великая Китайская стена строилась на протяжении многих веков.",
                category: "Архитектура",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-indigo-50 rounded-lg p-4">
                <p className="text-xs font-bold text-indigo-600 mb-1">
                  {item.category}
                </p>
                <p className="text-sm font-semibold text-indigo-900 mb-1">
                  {item.en}
                </p>
                <p className="text-sm text-zinc-700">{item.ru}</p>
              </div>
            ))}
          </div>
        </div>

        <CheckableExercise
          title="Упражнение: Образуйте Past Simple Passive"
          instruction="Поставьте глагол в скобках в Past Simple Passive."
          items={exercise2}
        />

        <div className="bg-white rounded-lg p-6 border-2 border-sky-300">
          <h4 className="text-xl font-bold text-sky-900 mb-4">
            Трансформация Active → Passive (Past Simple)
          </h4>
          <div className="space-y-4">
            {[
              {
                active: "Columbus discovered America in 1492.",
                passive: "America was discovered by Columbus in 1492.",
              },
              {
                active: "They built this church in 1850.",
                passive: "This church was built in 1850.",
              },
              {
                active: "Someone stole my bicycle last night.",
                passive: "My bicycle was stolen last night.",
              },
              {
                active: "People elected him president in 2020.",
                passive: "He was elected president in 2020.",
              },
              {
                active: "The company fired 100 employees.",
                passive: "100 employees were fired by the company.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-sky-50 rounded-lg p-4">
                <p className="text-sm text-zinc-800 mb-2">
                  <strong className="text-indigo-700">
                    {idx + 1}. Active:
                  </strong>{" "}
                  {item.active}
                </p>
                <p className="text-sm text-sky-900 font-semibold">
                  <strong className="text-sky-700">Passive:</strong>{" "}
                  {item.passive}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 6: Active → Passive - детальные правила трансформации ===== */
function Step6() {
  return (
    <>
      <UiSection title="Active → Passive: Правила трансформации">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <p className="text-indigo-900 leading-relaxed font-semibold text-lg">
            Чтобы преобразовать предложение из Active Voice в Passive Voice,
            нужно следовать чёткому алгоритму.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border-2 border-slate-300">
          <h4 className="text-2xl font-bold text-slate-900 mb-6">
            Алгоритм трансформации (5 шагов)
          </h4>

          <div className="space-y-5">
            <div className="bg-gradient-to-r from-indigo-50 to-sky-50 rounded-lg p-5 border-2 border-indigo-200">
              <div className="flex items-start gap-4">
                <div className="text-3xl font-bold text-indigo-900 bg-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <p className="font-bold text-indigo-900 mb-2 text-lg">
                    Дополнение (Object) становится подлежащим (Subject)
                  </p>
                  <div className="bg-white rounded p-4">
                    <p className="text-sm text-zinc-700 mb-1">
                      <span className="font-semibold">Active:</span> People
                      speak <span className="bg-yellow-200 px-1">English</span>{" "}
                      worldwide.
                    </p>
                    <p className="text-sm text-indigo-700">
                      <span className="font-semibold">Passive:</span>{" "}
                      <span className="bg-yellow-200 px-1">English</span> is
                      spoken worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-lg p-5 border-2 border-sky-200">
              <div className="flex items-start gap-4">
                <div className="text-3xl font-bold text-sky-900 bg-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <p className="font-bold text-sky-900 mb-2 text-lg">
                    Выбираем форму BE по времени и числу нового подлежащего
                  </p>
                  <div className="bg-white rounded p-4 space-y-2">
                    <p className="text-sm text-zinc-700">
                      Present Simple: is/are + V3
                    </p>
                    <p className="text-sm text-zinc-700">
                      Past Simple: was/were + V3
                    </p>
                    <p className="text-xs text-zinc-600 mt-2">
                      English (singular) → <strong>is</strong> spoken
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-sky-50 rounded-lg p-5 border-2 border-indigo-200">
              <div className="flex items-start gap-4">
                <div className="text-3xl font-bold text-indigo-900 bg-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <p className="font-bold text-indigo-900 mb-2 text-lg">
                    Основной глагол ставим в V3 (Past Participle)
                  </p>
                  <div className="bg-white rounded p-4">
                    <p className="text-sm text-zinc-700 mb-2">
                      speak → <strong>spoken</strong>
                    </p>
                    <p className="text-sm text-zinc-700 mb-2">
                      write → <strong>written</strong>
                    </p>
                    <p className="text-sm text-zinc-700">
                      build → <strong>built</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-lg p-5 border-2 border-sky-200">
              <div className="flex items-start gap-4">
                <div className="text-3xl font-bold text-sky-900 bg-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  4
                </div>
                <div className="flex-1">
                  <p className="font-bold text-sky-900 mb-2 text-lg">
                    Если нужно, добавляем BY + исполнитель (agent)
                  </p>
                  <div className="bg-white rounded p-4 space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-zinc-900 mb-1">
                        Добавляем BY, если исполнитель важен:
                      </p>
                      <p className="text-sm text-zinc-700">
                        "Hamlet" was written <strong>by Shakespeare</strong>.
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-zinc-900 mb-1">
                        Опускаем BY, если исполнитель неважен/неизвестен:
                      </p>
                      <p className="text-sm text-zinc-700">
                        My car was stolen. (не важно, кто украл)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-sky-50 rounded-lg p-5 border-2 border-indigo-200">
              <div className="flex items-start gap-4">
                <div className="text-3xl font-bold text-indigo-900 bg-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  5
                </div>
                <div className="flex-1">
                  <p className="font-bold text-indigo-900 mb-2 text-lg">
                    Сохраняем остальные элементы предложения
                  </p>
                  <div className="bg-white rounded p-4">
                    <p className="text-sm text-zinc-700 mb-2">
                      Время, место, обстоятельства остаются на своих местах
                    </p>
                    <p className="text-xs text-zinc-600">
                      Active: They built this house{" "}
                      <span className="bg-green-200 px-1">in 1900</span>.
                    </p>
                    <p className="text-xs text-indigo-600">
                      Passive: This house was built{" "}
                      <span className="bg-green-200 px-1">in 1900</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
          <h4 className="text-2xl font-bold text-indigo-900 mb-4">
            Подробные примеры трансформации
          </h4>
          <div className="space-y-6">
            {[
              {
                active: "Shakespeare wrote 'Romeo and Juliet'.",
                breakdown: {
                  subject: "Shakespeare",
                  verb: "wrote",
                  object: "'Romeo and Juliet'",
                },
                passive: "'Romeo and Juliet' was written by Shakespeare.",
                steps: [
                  "Object → Subject: 'Romeo and Juliet'",
                  "Время: Past Simple → was",
                  "V3: wrote → written",
                  "BY + agent: by Shakespeare",
                ],
              },
              {
                active: "They clean the office every day.",
                breakdown: {
                  subject: "They",
                  verb: "clean",
                  object: "the office",
                },
                passive: "The office is cleaned every day.",
                steps: [
                  "Object → Subject: the office",
                  "Время: Present Simple → is",
                  "V3: clean → cleaned",
                  "Исполнитель неважен, BY не нужен",
                ],
              },
            ].map((example, idx) => (
              <div key={idx} className="bg-indigo-50 rounded-lg p-5">
                <div className="bg-white rounded p-4 mb-4">
                  <p className="text-sm font-bold text-indigo-900 mb-3">
                    {idx + 1}. ACTIVE:
                  </p>
                  <p className="text-base text-zinc-900 mb-3">
                    {example.active}
                  </p>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="bg-red-50 rounded p-2">
                      <p className="font-semibold text-red-700">Subject:</p>
                      <p>{example.breakdown.subject}</p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="font-semibold text-blue-700">Verb:</p>
                      <p>{example.breakdown.verb}</p>
                    </div>
                    <div className="bg-green-50 rounded p-2">
                      <p className="font-semibold text-green-700">Object:</p>
                      <p>{example.breakdown.object}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded p-4 mb-4">
                  <p className="text-sm font-bold text-sky-900 mb-2">Шаги:</p>
                  <div className="space-y-1">
                    {example.steps.map((step, idx) => (
                      <p key={idx} className="text-sm text-zinc-700">
                        {idx + 1}. {step}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="bg-sky-100 rounded p-4">
                  <p className="text-sm font-bold text-sky-900 mb-2">
                    PASSIVE:
                  </p>
                  <p className="text-base text-zinc-900 font-semibold">
                    {example.passive}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-6 border-2 border-red-300">
          <h4 className="text-xl font-bold text-red-900 mb-4">
            ⚠️ Типичные ошибки
          </h4>
          <div className="space-y-3">
            {[
              {
                wrong: "The book is wrote by Tolstoy. ❌",
                right: "The book is written by Tolstoy. ✓",
                note: "Нужна третья форма (written), а не вторая (wrote)",
              },
              {
                wrong: "The letters was sent yesterday. ❌",
                right: "The letters were sent yesterday. ✓",
                note: "Letters (мн. число) → were, а не was",
              },
              {
                wrong: "English spoken in many countries. ❌",
                right: "English is spoken in many countries. ✓",
                note: "Забыли глагол BE (is)",
              },
              {
                wrong: "This house built in 1900. ❌",
                right: "This house was built in 1900. ✓",
                note: "Забыли глагол BE (was)",
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

/* Step7-10 добавляются далее */
/* ===== СТРАНИЦА 7: Смешанные упражнения ===== */
function Step7() {
  const mixedExercise: FillItem[] = [
    {
      left: "1. English",
      right: "(speak) in many countries. [Present]",
      answers: ["is spoken"],
      explanation: "Present Simple Passive: is spoken",
    },
    {
      left: "2. This book",
      right: "(write) 100 years ago. [Past]",
      answers: ["was written"],
      explanation: "Past Simple Passive: was written",
    },
    {
      left: "3. The emails",
      right: "(send) every morning. [Present]",
      answers: ["are sent"],
      explanation: "Present Simple Passive: are sent (мн. число)",
    },
    {
      left: "4. The Eiffel Tower",
      right: "(build) in 1889. [Past]",
      answers: ["was built"],
      explanation: "Past Simple Passive: was built",
    },
    {
      left: "5. These products",
      right: "(not / make) in our factory. [Present]",
      answers: ["are not made", "aren't made"],
      explanation: "Present Simple Passive отрицание: are not made",
    },
    {
      left: "6. Where",
      right: "this photo (take)? [Past]",
      answers: ["was this photo taken", "was", "taken"],
      explanation: "Past Simple Passive вопрос: Where was ... taken?",
    },
  ];

  return (
    <>
      <UiSection title="Смешанные упражнения: Present & Past Simple Passive">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <p className="text-indigo-900 leading-relaxed">
            Проверьте свои знания обоих времён в пассивном залоге!
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="Упражнение 1: Выберите правильное время"
        instruction="Образуйте Present или Past Simple Passive."
        items={mixedExercise}
      />

      <div className="bg-white rounded-lg p-6 border-2 border-sky-300 my-6">
        <h4 className="text-xl font-bold text-sky-900 mb-4">
          Упражнение 2: Исправьте ошибки
        </h4>
        <p className="text-sm text-zinc-700 mb-4">
          В каждом предложении есть ошибка. Найдите и исправьте её.
        </p>
        <div className="space-y-4">
          {[
            {
              wrong: "The letter is sent yesterday.",
              right: "The letter was sent yesterday.",
              error: "Нужно Past Simple (was sent), так как 'yesterday'",
            },
            {
              wrong: "These houses was built in 2010.",
              right: "These houses were built in 2010.",
              error: "Houses (мн. число) → were, а не was",
            },
            {
              wrong: "English spoken in Canada.",
              right: "English is spoken in Canada.",
              error: "Забыли глагол BE (is)",
            },
            {
              wrong: "The book is wrote by a famous author.",
              right: "The book is written by a famous author.",
              error: "Нужна V3 (written), а не V2 (wrote)",
            },
            {
              wrong: "Where the meeting is held?",
              right: "Where is the meeting held?",
              error: "Порядок слов в вопросе: Where IS the meeting held?",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-sky-50 rounded-lg p-4">
              <p className="text-sm text-red-700 font-semibold mb-1">
                ✗ {idx + 1}. {item.wrong}
              </p>
              <p className="text-sm text-green-700 font-semibold mb-2">
                ✓ {item.right}
              </p>
              <p className="text-xs text-zinc-600 italic">{item.error}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border-2 border-indigo-300">
        <h4 className="text-xl font-bold text-indigo-900 mb-4">
          Упражнение 3: Переведите на английский
        </h4>
        <div className="space-y-4">
          {[
            {
              ru: "1. Эти автомобили производятся в Германии.",
              en: "These cars are made in Germany.",
            },
            {
              ru: "2. Книга была написана в прошлом году.",
              en: "The book was written last year.",
            },
            {
              ru: "3. На английском говорят в Австралии.",
              en: "English is spoken in Australia.",
            },
            {
              ru: "4. Пирамиды были построены тысячи лет назад.",
              en: "The pyramids were built thousands of years ago.",
            },
            {
              ru: "5. Офис не убирается по воскресеньям.",
              en: "The office is not cleaned on Sundays. / The office isn't cleaned on Sundays.",
            },
            {
              ru: "6. Когда был открыт этот музей?",
              en: "When was this museum opened?",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-indigo-50 rounded-lg p-4">
              <p className="text-sm text-zinc-900 mb-2">{item.ru}</p>
              <p className="text-sm text-indigo-700 font-semibold">
                <strong>Ответ:</strong> {item.en}
              </p>
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
      <UiSection title="Чтение: The History of the Internet">
        <div className="bg-gradient-to-r from-slate-50 to-zinc-50 rounded-lg p-6 mb-6 border-2 border-slate-300">
          <p className="text-slate-900 leading-relaxed">
            Прочитайте текст об истории Интернета. Обратите внимание на
            использование пассивного залога.
          </p>
        </div>
      </UiSection>

      <div className="bg-white rounded-lg p-6 border-2 border-indigo-200 mb-6">
        <h3 className="text-2xl font-bold text-indigo-900 mb-6 text-center">
          The History of the Internet
        </h3>

        <div className="space-y-4 text-zinc-800 leading-relaxed">
          <p>
            The Internet, which <strong>is used</strong> by billions of people
            today, has a fascinating history. It{" "}
            <strong>was not created</strong> by one person, but rather{" "}
            <strong>was developed</strong> over many years by numerous
            scientists and engineers.
          </p>

          <p>
            The foundations of the Internet <strong>were laid</strong> in the
            1960s during the Cold War. At that time, the U.S. Department of
            Defense wanted a communication system that could survive a nuclear
            attack. As a result, ARPANET (Advanced Research Projects Agency
            Network) <strong>was created</strong> in 1969. This network{" "}
            <strong>was designed</strong> to connect computers at different
            universities and research centers.
          </p>

          <p>
            The first message between two computers <strong>was sent</strong> on
            October 29, 1969. It <strong>was transmitted</strong> from UCLA
            (University of California, Los Angeles) to Stanford Research
            Institute. Interestingly, the system crashed after only two letters{" "}
            <strong>were typed</strong>, but the problem{" "}
            <strong>was quickly fixed</strong>.
          </p>

          <p>
            During the 1970s and 1980s, many important protocols{" "}
            <strong>were developed</strong>. TCP/IP (Transmission Control
            Protocol/Internet Protocol) <strong>was invented</strong> by Vint
            Cerf and Bob Kahn in 1974. This protocol{" "}
            <strong>is still used</strong> today as the foundation of Internet
            communication.
          </p>

          <p>
            Email <strong>was introduced</strong> in 1971 by Ray Tomlinson, who
            also chose the @ symbol for email addresses. By the end of the
            1980s, email <strong>was widely used</strong> by academics and
            researchers.
          </p>

          <p>
            The World Wide Web (WWW) <strong>was invented</strong> in 1989 by
            British scientist Tim Berners-Lee while he{" "}
            <strong>was employed</strong> at CERN in Switzerland. The first
            website <strong>was launched</strong> in 1991. It{" "}
            <strong>was hosted</strong> on Berners-Lee's NeXT computer and{" "}
            <strong>was dedicated</strong> to information about the World Wide
            Web project.
          </p>

          <p>
            The first web browser that <strong>was widely adopted</strong> by
            the public was Mosaic, which <strong>was released</strong> in 1993.
            After that, the Internet <strong>was transformed</strong> from an
            academic tool into a global phenomenon. By 1995, commercial websites{" "}
            <strong>were being created</strong> rapidly, and online shopping{" "}
            <strong>was introduced</strong>.
          </p>

          <p>
            Today, the Internet <strong>is accessed</strong> by over 5 billion
            people worldwide. New technologies <strong>are developed</strong>{" "}
            constantly, and our lives <strong>are changed</strong> by digital
            innovation every day. Social media platforms{" "}
            <strong>are used</strong> for communication, news{" "}
            <strong>is shared</strong> instantly, and business{" "}
            <strong>is conducted</strong> online.
          </p>

          <p>
            The Internet continues to evolve. Artificial intelligence,
            blockchain, and quantum computing{" "}
            <strong>are being explored</strong> as the next frontiers. Who knows
            what amazing innovations <strong>will be created</strong> in the
            future?
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-indigo-50 to-sky-50 border-2 border-indigo-200 rounded-lg p-6">
        <h4 className="text-xl font-bold text-indigo-900 mb-4">
          Словарь к тексту
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            ["fascinating", "/ˈfæsɪneɪtɪŋ/", "увлекательный, захватывающий"],
            ["numerous", "/ˈnjuːmərəs/", "многочисленный"],
            ["foundations", "/faʊnˈdeɪʃnz/", "основы, фундамент"],
            ["survive", "/səˈvaɪv/", "выжить, пережить"],
            ["nuclear attack", "—", "ядерная атака"],
            ["transmit", "/trænsˈmɪt/", "передавать"],
            ["crash", "/kræʃ/", "падать (о системе), ломаться"],
            ["protocol", "/ˈprəʊtəkɒl/", "протокол"],
            ["foundation", "/faʊnˈdeɪʃn/", "основа"],
            ["widely", "/ˈwaɪdli/", "широко"],
            ["adopt", "/əˈdɒpt/", "принимать, перенимать"],
            ["phenomenon", "/fəˈnɒmɪnən/", "феномен, явление"],
            ["rapidly", "/ˈræpɪdli/", "быстро"],
            ["evolve", "/ɪˈvɒlv/", "развиваться, эволюционировать"],
            ["frontier", "/frʌnˈtɪə/", "граница, рубеж"],
            ["innovation", "/ˌɪnəˈveɪʃn/", "инновация, новшество"],
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
      q: "1. When was ARPANET created?",
      options: ["A. In 1960", "B. In 1969", "C. In 1974"],
      correct: "B",
      explanation: "В тексте: 'ARPANET was created in 1969'.",
    },
    {
      q: "2. Who invented TCP/IP?",
      options: [
        "A. Tim Berners-Lee",
        "B. Ray Tomlinson",
        "C. Vint Cerf and Bob Kahn",
      ],
      correct: "C",
      explanation: "В тексте: 'TCP/IP was invented by Vint Cerf and Bob Kahn'.",
    },
    {
      q: "3. When was email introduced?",
      options: ["A. In 1969", "B. In 1971", "C. In 1989"],
      correct: "B",
      explanation: "В тексте: 'Email was introduced in 1971'.",
    },
    {
      q: "4. Who invented the World Wide Web?",
      options: ["A. Tim Berners-Lee", "B. Ray Tomlinson", "C. Vint Cerf"],
      correct: "A",
      explanation:
        "В тексте: 'The World Wide Web was invented in 1989 by British scientist Tim Berners-Lee'.",
    },
    {
      q: "5. When was the first website launched?",
      options: ["A. In 1989", "B. In 1991", "C. In 1993"],
      correct: "B",
      explanation: "В тексте: 'The first website was launched in 1991'.",
    },
    {
      q: "6. What was the first widely adopted web browser?",
      options: ["A. Mosaic", "B. Internet Explorer", "C. Netscape"],
      correct: "A",
      explanation:
        "В тексте: 'The first web browser that was widely adopted by the public was Mosaic'.",
    },
    {
      q: "7. When was Mosaic released?",
      options: ["A. In 1991", "B. In 1993", "C. In 1995"],
      correct: "B",
      explanation: "В тексте: 'Mosaic, which was released in 1993'.",
    },
    {
      q: "8. By what year were commercial websites being created rapidly?",
      options: ["A. 1991", "B. 1993", "C. 1995"],
      correct: "C",
      explanation:
        "В тексте: 'By 1995, commercial websites were being created rapidly'.",
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
      q: "1. The report ... yesterday.",
      options: ["A. is finished", "B. was finished", "C. were finished"],
      correct: "B",
      explanation: "Past Simple Passive + yesterday → was finished",
    },
    {
      q: "2. English ... in many countries.",
      options: ["A. is spoken", "B. was spoken", "C. are spoken"],
      correct: "A",
      explanation: "Present Simple Passive, English (ед. число) → is spoken",
    },
    {
      q: "3. These cars ... in Japan.",
      options: ["A. is made", "B. was made", "C. are made"],
      correct: "C",
      explanation: "Present Simple Passive, cars (мн. число) → are made",
    },
    {
      q: "4. The building ... in 1850.",
      options: ["A. is built", "B. was built", "C. were built"],
      correct: "B",
      explanation: "Past Simple Passive, building (ед. число) → was built",
    },
    {
      q: "5. The letters ... every morning.",
      options: ["A. is sent", "B. was sent", "C. are sent"],
      correct: "C",
      explanation:
        "Present Simple Passive + every morning, letters (мн. число) → are sent",
    },
    {
      q: "6. This book ... by Tolstoy.",
      options: ["A. is written", "B. was written", "C. were written"],
      correct: "B",
      explanation: "Past Simple Passive (исторический факт) → was written",
    },
    {
      q: "7. ... the office cleaned every day?",
      options: ["A. Is", "B. Was", "C. Are"],
      correct: "A",
      explanation:
        "Present Simple Passive вопрос, office (ед. число) → Is ... cleaned?",
    },
    {
      q: "8. The pyramids ... thousands of years ago.",
      options: ["A. is built", "B. was built", "C. were built"],
      correct: "C",
      explanation: "Past Simple Passive, pyramids (мн. число) → were built",
    },
    {
      q: "9. Where ... this photo taken?",
      options: ["A. is", "B. was", "C. were"],
      correct: "B",
      explanation: "Past Simple Passive вопрос, photo (ед. число) → was taken",
    },
    {
      q: "10. The work ... yet.",
      options: [
        "A. is not finished",
        "B. was not finished",
        "C. are not finished",
      ],
      correct: "A",
      explanation:
        "Present Simple Passive отрицание, work (ед. число) → is not finished",
    },
  ];

  return (
    <>
      <UiSection title="Итоговый тест: Passive Voice">
        <div className="bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-300">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🎯</div>
            <div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">
                Финальный тест!
              </h3>
              <p className="text-zinc-800 leading-relaxed">
                Проверьте свои знания Present и Past Simple Passive. Выберите
                правильный вариант ответа.
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
          Итоговая таблица: Present & Past Simple Passive
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-100 via-sky-100 to-blue-100">
                <th className="border-2 border-indigo-300 p-3 text-left font-bold text-indigo-900">
                  Время
                </th>
                <th className="border-2 border-indigo-300 p-3 text-left font-bold text-indigo-900">
                  Формула
                </th>
                <th className="border-2 border-indigo-300 p-3 text-left font-bold text-indigo-900">
                  Пример (+)
                </th>
                <th className="border-2 border-indigo-300 p-3 text-left font-bold text-indigo-900">
                  Пример (-)
                </th>
                <th className="border-2 border-indigo-300 p-3 text-left font-bold text-indigo-900">
                  Пример (?)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border-2 border-indigo-200 p-3 font-semibold text-indigo-700">
                  Present Simple Passive
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  am/is/are + V3
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  English <strong>is spoken</strong> here.
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  It <strong>is not used</strong> often.
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  <strong>Is</strong> it <strong>made</strong> in China?
                </td>
              </tr>
              <tr className="bg-indigo-50">
                <td className="border-2 border-indigo-200 p-3 font-semibold text-sky-700">
                  Past Simple Passive
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  was/were + V3
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  The book <strong>was written</strong> in 1990.
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  It <strong>was not sent</strong> yesterday.
                </td>
                <td className="border-2 border-indigo-200 p-3">
                  <strong>Was</strong> it <strong>built</strong> in 1900?
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
                <strong>Что такое Passive Voice</strong> и когда он используется
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                <strong>Present Simple Passive</strong>: am/is/are + V3
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                <strong>Past Simple Passive</strong>: was/were + V3
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                <strong>Трансформацию Active → Passive</strong> (5 шагов)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                Использование <strong>BY-agent</strong>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold text-lg">•</span>
              <span>
                <strong>Типичные ошибки</strong> и как их избегать
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
            Вы успешно изучили основы пассивного залога в Present и Past Simple!
            Это фундаментальная грамматическая тема, которая используется в
            английском языке постоянно. Продолжайте практиковаться, и скоро
            использование Passive Voice станет для вас естественным!
          </p>
        </div>
      </div>
    </>
  );
}
