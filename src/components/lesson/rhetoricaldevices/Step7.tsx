"use client";

import CheckableExercise from "@/components/lesson/CheckableExercise";

export default function Step7() {
  const exercises = [
    {
      id: "ex1",
      question: "Many are called, but ___ ___ ___.",
      answer: "few are chosen",
      hint: "Противопоставьте many и few",
    },
    {
      id: "ex2",
      question: "Give me liberty, or ___ ___ ___.",
      answer: "give me death",
      hint: "Что противоположно свободе (liberty)?",
    },
    {
      id: "ex3",
      question: "Speech is silver, but ___ ___ ___.",
      answer: "silence is gold",
      hint: "Противопоставьте речь и молчание",
    },
    {
      id: "ex4",
      question: "The more you know, ___ ___ ___ ___.",
      answer: "the less you understand",
      hint: "Парадоксальный контраст: больше знаний → меньше понимания",
    },
    {
      id: "ex5",
      question: "We must learn to live together as brothers or ___ ___ ___ ___ ___.",
      answer: "perish together as fools",
      hint: "Контраст: жить как братья vs. погибнуть как...",
    },
    {
      id: "ex6",
      question: "That's one small step for man, one ___ ___ ___ ___.",
      answer: "giant leap for mankind",
      hint: "Знаменитая фраза Армстронга: small vs. giant",
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">✍️</div>
        <h1 className="text-5xl font-black mb-3 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Antithesis: Practice
        </h1>
        <p className="text-2xl text-gray-700 font-medium">
          Завершите антитезы, создав контраст
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-200 p-8">
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-5 border-2 border-purple-200 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-3xl">📝</span>
            <div>
              <h3 className="font-bold text-lg text-purple-800 mb-2">Задание:</h3>
              <p className="text-gray-700">
                Завершите каждое предложение, создав контраст с первой частью.
                Используйте противоположные идеи для максимального эффекта!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-5 border-2 border-blue-200 mb-8">
          <div className="flex items-center justify-center gap-4">
            <div className="bg-white px-4 py-2 rounded-lg border-2 border-blue-300">
              <span className="font-bold text-blue-600">Idea A</span>
            </div>
            <span className="text-3xl">⚡</span>
            <div className="bg-white px-4 py-2 rounded-lg border-2 border-cyan-300">
              <span className="font-bold text-cyan-600">Opposite Idea B</span>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-3">
            Противопоставьте контрастные понятия
          </p>
        </div>

        <div className="space-y-6">
          {exercises.map((ex) => (
            <CheckableExercise
              key={ex.id}
              question={ex.question}
              answer={ex.answer}
              hint={ex.hint}
            />
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-6 border-2 border-green-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🎯</span>
          <div>
            <h3 className="font-bold text-xl text-green-800 mb-2">Совет:</h3>
            <p className="text-gray-700 text-lg">
              Антитеза усиливает вашу аргументацию через{" "}
              <span className="font-bold text-green-700">контраст</span>.
              Используйте её для создания <span className="font-bold text-green-700">драматического эффекта</span>{" "}
              и запоминающихся фраз!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
