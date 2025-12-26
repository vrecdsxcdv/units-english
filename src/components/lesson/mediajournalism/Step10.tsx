"use client";

import { useState } from "react";

export default function Step10() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<Record<string, boolean | null>>({});
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (id: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
    setResults((prev) => ({ ...prev, [id]: null }));
  };

  const checkAnswer = (id: string, correctAnswers: string[]) => {
    const userAnswer = (answers[id] || "").toLowerCase().trim();
    const isCorrect = correctAnswers.some(
      (correct) => correct.toLowerCase() === userAnswer
    );
    setResults((prev) => ({ ...prev, [id]: isCorrect }));
  };

  const checkAllAnswers = () => {
    fillInTheBlank.forEach((item) => {
      const userAnswer = (answers[item.id] || "").toLowerCase().trim();
      const isCorrect = item.answers.some(
        (correct) => correct.toLowerCase() === userAnswer
      );
      setResults((prev) => ({ ...prev, [item.id]: isCorrect }));
    });
    setShowResults(true);
  };

  const fillInTheBlank = [
    {
      id: "q1",
      question: "The journalist got a major _____ about the CEO's resignation.",
      answers: ["scoop"],
      hint: "эксклюзивная новость",
    },
    {
      id: "q2",
      question: "The government's _____ on the economy was more optimistic than the data.",
      answers: ["spin"],
      hint: "интерпретация, подача",
    },
    {
      id: "q3",
      question: "She wrote an _____ criticizing the new policy in The Times.",
      answers: ["op-ed", "op ed"],
      hint: "авторская колонка с мнением",
    },
    {
      id: "q4",
      question: "The _____ endorsed the Democratic candidate.",
      answers: ["editorial"],
      hint: "редакционная статья",
    },
    {
      id: "q5",
      question: "Politicians often speak in _____ to get media coverage.",
      answers: ["soundbites", "sound bites"],
      hint: "короткие цитаты",
    },
    {
      id: "q6",
      question: "The headline was pure _____ — the article had no real news.",
      answers: ["clickbait"],
      hint: "сенсационный заголовок для кликов",
    },
    {
      id: "q7",
      question: "The video went _____ overnight, reaching millions of views.",
      answers: ["viral"],
      hint: "стать популярным в интернете",
    },
    {
      id: "q8",
      question: "The official spoke off the _____ about the negotiations.",
      answers: ["record"],
      hint: "не для публикации",
    },
  ];

  const translationExercises = [
    {
      id: "t1",
      russian: "Срочные новости",
      answers: ["breaking news"],
    },
    {
      id: "t2",
      russian: "Проверка фактов",
      answers: ["fact-checking", "fact checking", "factchecking"],
    },
    {
      id: "t3",
      russian: "Анонимный источник",
      answers: ["anonymous source"],
    },
    {
      id: "t4",
      russian: "Прайм-тайм",
      answers: ["primetime", "prime time", "prime-time"],
    },
    {
      id: "t5",
      russian: "Утечка информации",
      answers: ["leak", "information leak"],
    },
  ];

  const getResultColor = (id: string) => {
    if (results[id] === null) return "border-gray-300";
    return results[id] ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50";
  };

  const getResultIcon = (id: string) => {
    if (results[id] === null) return null;
    return results[id] ? "✅" : "❌";
  };

  const correctCount = Object.values(results).filter((r) => r === true).length;
  const totalQuestions = fillInTheBlank.length + translationExercises.length;

  return (
    <div className="space-y-8 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-8 rounded-3xl">
      <div className="text-center mb-8">
        <div className="text-7xl mb-4">📝</div>
        <h2 className="text-4xl font-black mb-2 text-gray-800">Practice & Exercises</h2>
        <p className="text-xl text-gray-600">Практика с проверкой ответов</p>
      </div>

      {/* Fill in the blanks */}
      <div className="bg-white rounded-2xl shadow-lg border-2 border-emerald-200 p-6">
        <h3 className="text-2xl font-bold text-emerald-700 mb-4 flex items-center gap-2">
          <span>✏️</span> Fill in the Blanks
        </h3>
        <p className="text-gray-600 mb-6">Заполните пропуски подходящими словами и нажмите &quot;Проверить&quot;:</p>

        <div className="space-y-4">
          {fillInTheBlank.map((item, i) => (
            <div key={item.id} className={`rounded-xl p-4 border-2 ${getResultColor(item.id)} transition-all`}>
              <div className="flex items-start gap-2 mb-3">
                <span className="font-bold text-emerald-600">{i + 1}.</span>
                <p className="text-gray-800 flex-1">{item.question}</p>
                {getResultIcon(item.id) && (
                  <span className="text-xl">{getResultIcon(item.id)}</span>
                )}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={answers[item.id] || ""}
                  onChange={(e) => handleInputChange(item.id, e.target.value)}
                  placeholder="Введите ответ..."
                  className={`flex-1 px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                    results[item.id] === false ? "border-red-300" : "border-gray-300"
                  }`}
                />
                <button
                  onClick={() => checkAnswer(item.id, item.answers)}
                  className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition font-semibold"
                >
                  Проверить
                </button>
              </div>
              <p className="text-sm text-gray-500 italic mt-2">Подсказка: {item.hint}</p>
              {results[item.id] === false && (
                <p className="text-sm text-red-600 mt-2">
                  Правильный ответ: <strong>{item.answers[0]}</strong>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Translation exercise */}
      <div className="bg-white rounded-2xl shadow-lg border-2 border-blue-200 p-6">
        <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
          <span>🌐</span> Translate to English
        </h3>
        <p className="text-gray-600 mb-6">Переведите на английский:</p>

        <div className="space-y-4">
          {translationExercises.map((item, i) => (
            <div key={item.id} className={`rounded-xl p-4 border-2 ${getResultColor(item.id)} transition-all`}>
              <div className="flex items-start gap-2 mb-3">
                <span className="font-bold text-blue-600">{i + 1}.</span>
                <p className="text-gray-800 font-medium flex-1">{item.russian}</p>
                {getResultIcon(item.id) && (
                  <span className="text-xl">{getResultIcon(item.id)}</span>
                )}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={answers[item.id] || ""}
                  onChange={(e) => handleInputChange(item.id, e.target.value)}
                  placeholder="Enter translation..."
                  className={`flex-1 px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    results[item.id] === false ? "border-red-300" : "border-gray-300"
                  }`}
                />
                <button
                  onClick={() => checkAnswer(item.id, item.answers)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-semibold"
                >
                  Проверить
                </button>
              </div>
              {results[item.id] === false && (
                <p className="text-sm text-red-600 mt-2">
                  Правильный ответ: <strong>{item.answers[0]}</strong>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Check all button */}
      <div className="flex justify-center">
        <button
          onClick={checkAllAnswers}
          className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl hover:from-emerald-600 hover:to-teal-600 transition font-bold text-xl shadow-lg"
        >
          Проверить все ответы
        </button>
      </div>

      {/* Results summary */}
      {showResults && (
        <div className={`rounded-2xl p-6 border-2 shadow-lg ${
          correctCount === totalQuestions
            ? "bg-gradient-to-r from-green-100 to-emerald-100 border-green-300"
            : correctCount >= totalQuestions * 0.7
            ? "bg-gradient-to-r from-yellow-100 to-amber-100 border-yellow-300"
            : "bg-gradient-to-r from-red-100 to-rose-100 border-red-300"
        }`}>
          <div className="flex items-center gap-4">
            <span className="text-5xl">
              {correctCount === totalQuestions ? "🎉" : correctCount >= totalQuestions * 0.7 ? "👍" : "📚"}
            </span>
            <div>
              <h3 className="font-bold text-2xl text-gray-800 mb-1">
                Результат: {correctCount} из {totalQuestions}
              </h3>
              <p className="text-gray-700">
                {correctCount === totalQuestions
                  ? "Отлично! Вы справились со всеми заданиями!"
                  : correctCount >= totalQuestions * 0.7
                  ? "Хороший результат! Повторите ошибки и попробуйте снова."
                  : "Стоит повторить материал и попробовать ещё раз."}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Summary */}
      <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-6 border-2 border-indigo-300 shadow-lg">
        <div className="flex items-start gap-4">
          <span className="text-4xl">🎓</span>
          <div>
            <h3 className="font-bold text-xl text-indigo-800 mb-2">Поздравляем с завершением курса!</h3>
            <p className="text-gray-700 text-lg">
              Вы изучили более <strong>60 медиа-терминов</strong> и множество устойчивых выражений.
              Теперь вы можете:
            </p>
            <ul className="mt-3 space-y-1 text-gray-700">
              <li>✅ Читать и понимать англоязычные СМИ</li>
              <li>✅ Различать типы публикаций (editorial, op-ed, feature)</li>
              <li>✅ Понимать терминологию цифровых медиа</li>
              <li>✅ Критически оценивать информацию (bias, fake news, fact-checking)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
