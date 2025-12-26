"use client";

import CheckableExercise from "@/components/lesson/CheckableExercise";

export default function Step10() {
  const exercises = [
    {
      id: "ex1",
      question: "Identify the device: 'We shall fight on the beaches, we shall fight on the landing grounds...' → ___",
      answer: "anaphora",
      hint: "Повторение в начале предложений",
    },
    {
      id: "ex2",
      question: "Identify the device: 'Ask not what your country can do for you — ask what you can do for your country.' → ___",
      answer: "chiasmus",
      hint: "Перекрёстная структура AB → BA",
    },
    {
      id: "ex3",
      question: "Identify the device: 'That's one small step for man, one giant leap for mankind.' → ___",
      answer: "antithesis",
      hint: "Контраст между small и giant",
    },
    {
      id: "ex4",
      question: "Identify the device: 'She broke his car and his heart.' → ___",
      answer: "zeugma",
      hint: "Один глагол управляет разными объектами",
    },
    {
      id: "ex5",
      question: "Identify the device: 'It was the best of times, it was the worst of times.' → ___",
      answer: "antithesis",
      hint: "Противопоставление best и worst",
    },
    {
      id: "ex6",
      question: "Identify the device: 'I have a dream... I have a dream... I have a dream...' → ___",
      answer: "anaphora",
      hint: "Повторяющаяся фраза",
    },
    {
      id: "ex7",
      question: "Identify the device: 'Never let a fool kiss you, or a kiss fool you.' → ___",
      answer: "chiasmus",
      hint: "Kiss и fool меняются местами",
    },
    {
      id: "ex8",
      question: "Identify the device: 'He lost his coat and his temper.' → ___",
      answer: "zeugma",
      hint: "Lost управляет конкретным и абстрактным",
    },
    {
      id: "ex9",
      question: "Identify the device: 'To err is human; to forgive, divine.' → ___",
      answer: "antithesis",
      hint: "Контраст между human и divine",
    },
    {
      id: "ex10",
      question: "Identify the device: 'When the going gets tough, the tough get going.' → ___",
      answer: "chiasmus",
      hint: "Going и tough меняются местами",
    },
    {
      id: "ex11",
      question: "Identify the device: 'Now is the moment. Now is our chance. Now is the time.' → ___",
      answer: "anaphora",
      hint: "Now повторяется в начале",
    },
    {
      id: "ex12",
      question: "Identify the device: 'She arrived in a taxi and a bad mood.' → ___",
      answer: "zeugma",
      hint: "Arrived управляет транспортом и настроением",
    },
  ];

  return (
    <div className="space-y-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">🎓</div>
        <h1 className="text-5xl font-black mb-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Final Test
        </h1>
        <p className="text-2xl text-gray-700 font-medium">
          Определите риторический приём в каждом примере
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border-2 border-indigo-200 p-8">
        <div className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 rounded-xl p-5 border-2 border-indigo-300 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-3xl">🎯</span>
            <div>
              <h3 className="font-bold text-lg text-indigo-800 mb-2">Задание:</h3>
              <p className="text-gray-700">
                Определите, какой риторический приём использован в каждом примере.
                Варианты: <span className="font-bold">anaphora, chiasmus, antithesis, zeugma</span>
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4">
            <p className="font-bold text-purple-700 mb-2">🔁 Anaphora</p>
            <p className="text-sm text-gray-700">Повторение в начале предложений</p>
          </div>
          <div className="bg-indigo-50 border-2 border-indigo-200 rounded-lg p-4">
            <p className="font-bold text-indigo-700 mb-2">🔄 Chiasmus</p>
            <p className="text-sm text-gray-700">Перекрёстная структура (AB → BA)</p>
          </div>
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
            <p className="font-bold text-blue-700 mb-2">⚖️ Antithesis</p>
            <p className="text-sm text-gray-700">Противопоставление идей</p>
          </div>
          <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-4">
            <p className="font-bold text-amber-700 mb-2">🎪 Zeugma</p>
            <p className="text-sm text-gray-700">Одно слово управляет разными объектами</p>
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
          <span className="text-4xl">🌟</span>
          <div>
            <h3 className="font-bold text-xl text-green-800 mb-2">Поздравляем!</h3>
            <p className="text-gray-700 text-lg">
              Вы изучили 4 продвинутых риторических приёма! Используйте их в эссе,
              презентациях и креативном письме для создания{" "}
              <span className="font-bold text-green-700">мастерского стиля</span>.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-6 border-2 border-indigo-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">💡</span>
          <div>
            <h3 className="font-bold text-xl text-indigo-800 mb-3">Краткая памятка:</h3>
            <div className="space-y-2 text-gray-700">
              <p><span className="font-bold text-purple-600">Anaphora:</span> повторение → ритм и усиление</p>
              <p><span className="font-bold text-indigo-600">Chiasmus:</span> AB → BA → зеркальный эффект</p>
              <p><span className="font-bold text-blue-600">Antithesis:</span> контраст → драматизм</p>
              <p><span className="font-bold text-amber-600">Zeugma:</span> один глагол → разные объекты → юмор</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
