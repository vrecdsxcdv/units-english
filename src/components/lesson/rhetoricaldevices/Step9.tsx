"use client";

import CheckableExercise from "@/components/lesson/CheckableExercise";

export default function Step9() {
  const exercises = [
    {
      id: "ex1",
      question: "He opened the door and ___ ___.",
      answer: "her heart",
      hint: "Что можно 'открыть' метафорически?",
    },
    {
      id: "ex2",
      question: "She took his advice and ___ ___.",
      answer: "his wallet",
      hint: "Глагол 'took' управляет абстрактным и конкретным объектом",
    },
    {
      id: "ex3",
      question: "They had tea and ___ ___.",
      answer: "a conversation",
      hint: "'Had' может означать и 'пили', и 'вели'",
    },
    {
      id: "ex4",
      question: "He caught the train and ___ ___.",
      answer: "a cold",
      hint: "Что ещё можно 'поймать' кроме поезда?",
    },
    {
      id: "ex5",
      question: "She left the city and ___ ___.",
      answer: "her worries behind",
      hint: "'Left' описывает физический и эмоциональный уход",
    },
    {
      id: "ex6",
      question: "He stole my money and ___ ___.",
      answer: "my heart",
      hint: "Классическая зевгма: материальное и эмоциональное",
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">✍️</div>
        <h1 className="text-5xl font-black mb-3 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
          Zeugma: Practice
        </h1>
        <p className="text-2xl text-gray-700 font-medium">
          Создайте зевгмы, добавив второй объект
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border-2 border-amber-200 p-8">
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-5 border-2 border-purple-200 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-3xl">📝</span>
            <div>
              <h3 className="font-bold text-lg text-purple-800 mb-2">Задание:</h3>
              <p className="text-gray-700">
                Завершите каждое предложение, добавив второй объект к глаголу.
                Создайте неожиданную связь между буквальным и метафорическим значением!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 rounded-xl p-5 border-2 border-amber-200 mb-8">
          <div className="text-center space-y-2">
            <p className="text-lg font-mono">
              <span className="bg-amber-200 px-3 py-1 rounded font-bold">VERB</span>
              <span className="mx-2">+</span>
              <span className="bg-orange-200 px-3 py-1 rounded">object₁ (concrete)</span>
              <span className="mx-2">+</span>
              <span className="bg-red-200 px-3 py-1 rounded">object₂ (abstract)</span>
            </p>
            <p className="text-gray-600 text-sm">
              Один глагол управляет конкретным и абстрактным объектами
            </p>
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

      <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl p-6 border-2 border-blue-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🎯</span>
          <div>
            <h3 className="font-bold text-xl text-blue-800 mb-2">Совет:</h3>
            <p className="text-gray-700 text-lg">
              Zeugma создаёт <span className="font-bold text-blue-700">юмор</span> и{" "}
              <span className="font-bold text-blue-700">неожиданность</span> через игру значений.
              Используйте её для креативного письма и запоминающихся фраз!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
