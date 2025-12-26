"use client";

import CheckableExercise from "@/components/lesson/CheckableExercise";

export default function Step3() {
  const exercises = [
    {
      id: "ex1",
      question: "Every day, we wake up. Every day, we face new challenges. ___ ___ ___, we grow stronger.",
      answer: "Every day",
      hint: "Какая фраза повторяется в начале предложений?",
    },
    {
      id: "ex2",
      question: "We will not surrender. We will not retreat. ___ ___ ___ give up hope.",
      answer: "We will not",
      hint: "Продолжите анафору отрицания",
    },
    {
      id: "ex3",
      question: "It is time to act. It is time to change. ___ ___ ___ ___ make a difference.",
      answer: "It is time to",
      hint: "Повторите призыв к действию",
    },
    {
      id: "ex4",
      question: "To succeed, we must work hard. To succeed, we must stay focused. ___ ___, we must never give up.",
      answer: "To succeed",
      hint: "Что является целью во всех предложениях?",
    },
    {
      id: "ex5",
      question: "Now is the moment. Now is our chance. ___ ___ the time to shine.",
      answer: "Now is",
      hint: "Подчеркните настоящий момент",
    },
    {
      id: "ex6",
      question: "I believe in justice. I believe in equality. ___ ___ ___ a better tomorrow.",
      answer: "I believe in",
      hint: "Выразите свою веру",
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">✍️</div>
        <h1 className="text-5xl font-black mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Anaphora: Practice
        </h1>
        <p className="text-2xl text-gray-700 font-medium">
          Дополните предложения, используя анафору
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border-2 border-purple-200 p-8">
        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl p-5 border-2 border-blue-200 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-3xl">📝</span>
            <div>
              <h3 className="font-bold text-lg text-blue-800 mb-2">Задание:</h3>
              <p className="text-gray-700">
                Завершите каждое предложение, повторив ключевую фразу в начале (анафора).
                Обратите внимание на ритм и эмоциональное усиление!
              </p>
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

      <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-6 border-2 border-green-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🎯</span>
          <div>
            <h3 className="font-bold text-xl text-green-800 mb-2">Совет:</h3>
            <p className="text-gray-700 text-lg">
              Анафора создаёт <span className="font-bold text-green-700">ритм</span> и{" "}
              <span className="font-bold text-green-700">эмоциональное усиление</span>.
              Используйте её в эссе и презентациях для максимального воздействия!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
