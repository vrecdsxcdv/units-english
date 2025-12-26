"use client";

import CheckableExercise from "@/components/lesson/CheckableExercise";

export default function Step5() {
  const exercises = [
    {
      id: "ex1",
      question: "Never let a fool kiss you, or ___ ___ ___ ___ ___.",
      answer: "a kiss fool you",
      hint: "Поменяйте местами kiss и fool",
    },
    {
      id: "ex2",
      question: "Eat to live, don't ___ ___ ___.",
      answer: "live to eat",
      hint: "Инвертируйте eat и live",
    },
    {
      id: "ex3",
      question: "In peace, sons bury their fathers; in war, ___ ___ ___ ___.",
      answer: "fathers bury their sons",
      hint: "Поменяйте местами fathers и sons",
    },
    {
      id: "ex4",
      question: "You forget what you want to remember, and ___ ___ ___ ___ ___ ___.",
      answer: "you remember what you want to forget",
      hint: "Инвертируйте remember и forget",
    },
    {
      id: "ex5",
      question: "When the going gets tough, ___ ___ ___ ___.",
      answer: "the tough get going",
      hint: "Поменяйте местами tough и going",
    },
    {
      id: "ex6",
      question: "All for one, ___ ___ ___.",
      answer: "one for all",
      hint: "Классический хиазм из 'Трёх мушкетёров'",
    },
    {
      id: "ex7",
      question: "Beauty is truth, ___ ___.",
      answer: "truth beauty",
      hint: "Простая инверсия двух существительных",
    },
    {
      id: "ex8",
      question: "It's nice to be important, but it's more important ___ ___ ___.",
      answer: "to be nice",
      hint: "Поменяйте местами nice и important",
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">✍️</div>
        <h1 className="text-5xl font-black mb-3 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Chiasmus: Practice
        </h1>
        <p className="text-2xl text-gray-700 font-medium">
          Завершите хиазмы, инвертируя элементы
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border-2 border-indigo-200 p-8">
        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl p-5 border-2 border-blue-200 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-3xl">📝</span>
            <div>
              <h3 className="font-bold text-lg text-blue-800 mb-2">Задание:</h3>
              <p className="text-gray-700">
                Завершите каждое предложение, создав зеркальную структуру (AB → BA).
                Помните: элементы должны поменяться местами!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 rounded-xl p-5 border-2 border-indigo-200 mb-8">
          <div className="flex items-center justify-center gap-4">
            <div className="bg-white px-4 py-2 rounded-lg border-2 border-indigo-300">
              <span className="font-bold text-indigo-600">A</span>
              <span className="mx-2">+</span>
              <span className="font-bold text-purple-600">B</span>
            </div>
            <span className="text-3xl">→</span>
            <div className="bg-white px-4 py-2 rounded-lg border-2 border-purple-300">
              <span className="font-bold text-purple-600">B</span>
              <span className="mx-2">+</span>
              <span className="font-bold text-indigo-600">A</span>
            </div>
          </div>
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

      <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-6 border-2 border-amber-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🎯</span>
          <div>
            <h3 className="font-bold text-xl text-amber-800 mb-2">Совет:</h3>
            <p className="text-gray-700 text-lg">
              Хиазм создаёт <span className="font-bold text-amber-700">запоминающийся эффект</span>{" "}
              и делает вашу речь более <span className="font-bold text-amber-700">элегантной</span>.
              Используйте его в заключениях эссе!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
