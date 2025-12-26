"use client";

import { Section } from "@/components/ui/Section";
import { useState, useEffect } from "react";

type Props = { step: number };

export default function FinalTest({ step }: Props) {
  if (step === 1) return <TestPage />;
  return <TestPage />;
}

type Category = {
  id: string;
  name: string;
  nameRu: string;
  questions: number;
};

const categories: Category[] = [
  { id: "nouns", name: "Nouns", nameRu: "Существительные", questions: 4 },
  { id: "articles", name: "Articles", nameRu: "Артикли", questions: 6 },
  { id: "pronouns", name: "Pronouns", nameRu: "Местоимения", questions: 5 },
  {
    id: "demonstrative",
    name: "Demonstrative Pronouns",
    nameRu: "Указательные местоимения",
    questions: 3,
  },
  {
    id: "possessive",
    name: "Possessive 's",
    nameRu: "Притяжательный падеж",
    questions: 3,
  },
  {
    id: "adjectives",
    name: "Adjectives",
    nameRu: "Прилагательные",
    questions: 4,
  },
  { id: "adverbs", name: "Adverbs", nameRu: "Наречия", questions: 4 },
  { id: "tobe", name: "To Be", nameRu: "Глагол To Be", questions: 5 },
  { id: "have", name: "Have/Has Got", nameRu: "Have/Has Got", questions: 3 },
  {
    id: "presentSimple",
    name: "Present Simple",
    nameRu: "Present Simple",
    questions: 8,
  },
  {
    id: "presentContinuous",
    name: "Present Continuous",
    nameRu: "Present Continuous",
    questions: 6,
  },
  {
    id: "presentComparison",
    name: "Present Simple vs Continuous",
    nameRu: "Present Simple vs Continuous",
    questions: 5,
  },
  {
    id: "imperatives",
    name: "Imperatives",
    nameRu: "Повелительное наклонение",
    questions: 3,
  },
  { id: "can", name: "Can/Can't", nameRu: "Can/Can't", questions: 4 },
  { id: "thereIs", name: "There is/are", nameRu: "There is/are", questions: 4 },
  {
    id: "prepPlace",
    name: "Prepositions of Place",
    nameRu: "Предлоги места",
    questions: 5,
  },
  {
    id: "prepTime",
    name: "Prepositions of Time",
    nameRu: "Предлоги времени",
    questions: 4,
  },
  {
    id: "pastToBe",
    name: "Past Simple (to be)",
    nameRu: "Past Simple (to be)",
    questions: 4,
  },
  {
    id: "pastContinuous",
    name: "Past Continuous",
    nameRu: "Past Continuous",
    questions: 5,
  },
  {
    id: "pastComparison",
    name: "Past Simple vs Continuous",
    nameRu: "Past Simple vs Continuous",
    questions: 5,
  },
  { id: "translation", name: "Translation", nameRu: "Перевод", questions: 5 },
  { id: "reading", name: "Reading", nameRu: "Чтение", questions: 5 },
];

type Answer = {
  category: string;
  isCorrect: boolean;
};

function TestPage() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<Answer[]>([]);
  const [timeLeft, setTimeLeft] = useState(3600); // 60 minutes
  const [isRunning, setIsRunning] = useState(true);

  // Timer
  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const checkAnswers = (): Answer[] => {
    const results: Answer[] = [];

    // 1. Nouns (4)
    const nounsCorrect = ["children", "women", "teeth", "mice"];
    nounsCorrect.forEach((correct, idx) => {
      results.push({
        category: "nouns",
        isCorrect: answers[`noun${idx}`]?.toLowerCase().trim() === correct,
      });
    });

    // 2. Articles (6)
    const articlesCorrect = ["a", "the", "an", "the", "an", "-"];
    articlesCorrect.forEach((correct, idx) => {
      results.push({
        category: "articles",
        isCorrect: answers[`art${idx}`]?.toLowerCase().trim() === correct,
      });
    });

    // 3. Pronouns (5)
    const pronounsCorrect = ["he", "she", "they", "it", "we"];
    pronounsCorrect.forEach((correct, idx) => {
      results.push({
        category: "pronouns",
        isCorrect: answers[`pron${idx}`]?.toLowerCase().trim() === correct,
      });
    });

    // 4. Demonstrative (3)
    const demoCorrect = ["this", "these", "that"];
    demoCorrect.forEach((correct, idx) => {
      results.push({
        category: "demonstrative",
        isCorrect: answers[`demo${idx}`]?.toLowerCase().trim() === correct,
      });
    });

    // 5. Possessive (3)
    const possCorrect = ["mary's", "children's", "james's"];
    possCorrect.forEach((correct, idx) => {
      const answer = answers[`poss${idx}`]?.toLowerCase().trim() || "";
      results.push({
        category: "possessive",
        isCorrect: answer === correct || answer === correct.replace("'s", "s"),
      });
    });

    // 6. Adjectives (4)
    const adjCorrect = ["big", "beautiful", "happy", "interesting"];
    adjCorrect.forEach((correct, idx) => {
      results.push({
        category: "adjectives",
        isCorrect: answers[`adj${idx}`]?.toLowerCase().trim() === correct,
      });
    });

    // 7. Adverbs (4)
    const advCorrect = ["quickly", "slowly", "always", "never"];
    advCorrect.forEach((correct, idx) => {
      results.push({
        category: "adverbs",
        isCorrect: answers[`adv${idx}`]?.toLowerCase().trim() === correct,
      });
    });

    // 8. To Be (5)
    const tobeCorrect = ["am", "is", "are", "is", "are"];
    tobeCorrect.forEach((correct, idx) => {
      results.push({
        category: "tobe",
        isCorrect: answers[`tobe${idx}`]?.toLowerCase().trim() === correct,
      });
    });

    // 9. Have/Has Got (3)
    const haveCorrect = ["has", "have", "has"];
    haveCorrect.forEach((correct, idx) => {
      const answer = answers[`have${idx}`]?.toLowerCase().trim() || "";
      results.push({
        category: "have",
        isCorrect: answer.includes(correct),
      });
    });

    // 10. Present Simple (8)
    const psCorrect = [
      "works",
      "don't like",
      "plays",
      "studies",
      "doesn't go",
      "do you live",
      "watches",
      "don't eat",
    ];
    psCorrect.forEach((correct, idx) => {
      const answer = answers[`ps${idx}`]?.toLowerCase().trim() || "";
      const isCorrect =
        answer.includes(correct.replace(/\s+/g, "")) ||
        correct.split(" ").every((word) => answer.includes(word));
      results.push({
        category: "presentSimple",
        isCorrect,
      });
    });

    // 11. Present Continuous (6)
    const pcCorrect = [
      "playing",
      "studying",
      "running",
      "swimming",
      "reading",
      "writing",
    ];
    pcCorrect.forEach((correct, idx) => {
      results.push({
        category: "presentContinuous",
        isCorrect: answers[`pc${idx}`]?.toLowerCase().trim() === correct,
      });
    });

    // 12. Present Comparison (5)
    const compCorrect = [
      "simple",
      "continuous",
      "simple",
      "continuous",
      "simple",
    ];
    compCorrect.forEach((correct, idx) => {
      const answer = answers[`comp${idx}`]?.toLowerCase().trim() || "";
      results.push({
        category: "presentComparison",
        isCorrect: answer.includes(correct),
      });
    });

    // 13. Imperatives (3)
    const impCorrect = ["open", "don't", "be"];
    impCorrect.forEach((correct, idx) => {
      const answer = answers[`imp${idx}`]?.toLowerCase().trim() || "";
      results.push({
        category: "imperatives",
        isCorrect: answer.includes(correct),
      });
    });

    // 14. Can/Can't (4)
    const canCorrect = ["can", "can't", "can", "can't"];
    canCorrect.forEach((correct, idx) => {
      const answer = answers[`can${idx}`]?.toLowerCase().trim() || "";
      results.push({
        category: "can",
        isCorrect: answer.includes(correct.replace("'", "")),
      });
    });

    // 15. There is/are (4)
    const thereCorrect = ["is", "are", "is", "are"];
    thereCorrect.forEach((correct, idx) => {
      const answer = answers[`there${idx}`]?.toLowerCase().trim() || "";
      results.push({
        category: "thereIs",
        isCorrect: answer.includes(correct),
      });
    });

    // 16. Prepositions of Place (5)
    const prepPlaceCorrect = ["in", "on", "under", "next to", "between"];
    prepPlaceCorrect.forEach((correct, idx) => {
      const answer = answers[`prepplace${idx}`]?.toLowerCase().trim() || "";
      results.push({
        category: "prepPlace",
        isCorrect: answer.includes(correct.replace(/\s+/g, "")),
      });
    });

    // 17. Prepositions of Time (4)
    const prepTimeCorrect = ["in", "on", "at", "in"];
    prepTimeCorrect.forEach((correct, idx) => {
      results.push({
        category: "prepTime",
        isCorrect: answers[`preptime${idx}`]?.toLowerCase().trim() === correct,
      });
    });

    // 18. Past To Be (4)
    const pastToBeCorrect = ["was", "were", "was", "were"];
    pastToBeCorrect.forEach((correct, idx) => {
      results.push({
        category: "pastToBe",
        isCorrect: answers[`pasttobe${idx}`]?.toLowerCase().trim() === correct,
      });
    });

    // 19. Past Continuous (5)
    const pastContCorrect = [
      "was playing",
      "were studying",
      "was reading",
      "were watching",
      "was sleeping",
    ];
    pastContCorrect.forEach((correct, idx) => {
      const answer = answers[`pastcont${idx}`]?.toLowerCase().trim() || "";
      const isCorrect = correct
        .split(" ")
        .every((word) => answer.includes(word));
      results.push({
        category: "pastContinuous",
        isCorrect,
      });
    });

    // 20. Past Comparison (5)
    const pastCompCorrect = [
      "simple",
      "continuous",
      "simple",
      "continuous",
      "continuous",
    ];
    pastCompCorrect.forEach((correct, idx) => {
      const answer = answers[`pastcomp${idx}`]?.toLowerCase().trim() || "";
      results.push({
        category: "pastComparison",
        isCorrect: answer.includes(correct),
      });
    });

    // 21. Translation (5)
    const transCorrect = ["hello", "thank", "tomorrow", "friend", "help"];
    transCorrect.forEach((correct, idx) => {
      const answer = answers[`trans${idx}`]?.toLowerCase().trim() || "";
      results.push({
        category: "translation",
        isCorrect: answer.length > 0 && answer.includes(correct),
      });
    });

    // 22. Reading (5)
    const readCorrect = ["london", "teacher", "9", "gym", "reading"];
    readCorrect.forEach((correct, idx) => {
      const answer = answers[`read${idx}`]?.toLowerCase().trim() || "";
      results.push({
        category: "reading",
        isCorrect: answer.length > 0 && answer.includes(correct),
      });
    });

    return results;
  };

  const handleSubmit = () => {
    const testResults = checkAnswers();
    setResults(testResults);
    setShowResults(true);
    setIsRunning(false);
  };

  // Calculate stats
  const totalQuestions = 100;
  const answeredCount = Object.keys(answers).length;
  const progress = Math.round((answeredCount / totalQuestions) * 100);

  // Results Modal
  if (showResults) {
    const categoryResults = categories.map((cat) => {
      const catAnswers = results.filter((a) => a.category === cat.id);
      const correct = catAnswers.filter((a) => a.isCorrect).length;
      const total = catAnswers.length;
      const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
      return {
        ...cat,
        correct,
        total,
        percentage,
      };
    });

    const totalCorrect = results.filter((a) => a.isCorrect).length;
    const totalPercentage = Math.round((totalCorrect / totalQuestions) * 100);
    const passed = totalPercentage >= 80;

    const weakCategories = categoryResults.filter((cat) => cat.percentage < 70);
    const strongCategories = categoryResults.filter(
      (cat) => cat.percentage >= 85
    );

    return (
      <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50 p-4 overflow-y-auto">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
          <button
            onClick={() => setShowResults(false)}
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-colors"
            title="Закрыть"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="sticky top-0 bg-white border-b-2 border-gray-200 p-6 rounded-t-2xl">
            <div className="text-center">
              <div className="text-6xl mb-4">{passed ? "🎉" : "📚"}</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {passed ? "Отличный результат!" : "Тест завершён!"}
              </h2>
              <p className="text-xl text-gray-700">
                Ваш результат: <b>{totalCorrect}</b> из <b>{totalQuestions}</b>{" "}
                (
                <span
                  className={
                    totalPercentage >= 80 ? "text-green-600" : "text-orange-600"
                  }
                >
                  {totalPercentage}%
                </span>
                )
              </p>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Overall Progress */}
            <div>
              <div className="h-6 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full ${
                    totalPercentage >= 80
                      ? "bg-green-500"
                      : totalPercentage >= 60
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  } transition-all`}
                  style={{ width: `${totalPercentage}%` }}
                />
              </div>
            </div>

            {/* Results by Category */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Результаты по темам:
              </h3>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {categoryResults.map((cat) => (
                  <div
                    key={cat.id}
                    className={`p-3 rounded-lg border-2 ${
                      cat.percentage >= 85
                        ? "bg-green-50 border-green-300"
                        : cat.percentage >= 70
                        ? "bg-blue-50 border-blue-300"
                        : cat.percentage >= 50
                        ? "bg-yellow-50 border-yellow-300"
                        : "bg-red-50 border-red-300"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-sm">{cat.name}</p>
                        <p className="text-xs text-gray-600">{cat.nameRu}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">{cat.percentage}%</p>
                        <p className="text-xs text-gray-600">
                          {cat.correct}/{cat.total}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weak Areas */}
            {weakCategories.length > 0 && (
              <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-4">
                <h3 className="font-bold text-lg text-orange-900 mb-2 flex items-center gap-2">
                  <span>⚠️</span>
                  <span>Нужно повторить (минусы):</span>
                </h3>
                <ul className="space-y-2">
                  {weakCategories.map((cat) => (
                    <li
                      key={cat.id}
                      className="text-sm bg-white p-2 rounded border border-orange-200"
                    >
                      <b>{cat.name}</b> — {cat.percentage}% ({cat.correct}/
                      {cat.total})
                      <br />
                      <span className="text-xs text-gray-600">
                        Рекомендуем повторить эту тему
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Strong Areas */}
            {strongCategories.length > 0 && (
              <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4">
                <h3 className="font-bold text-lg text-green-900 mb-2 flex items-center gap-2">
                  <span>✅</span>
                  <span>Сильные стороны (плюсы):</span>
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {strongCategories.map((cat) => (
                    <div
                      key={cat.id}
                      className="text-sm bg-white p-2 rounded border border-green-200"
                    >
                      <b>{cat.name}</b>
                      <br />
                      <span className="text-xs text-green-700">
                        {cat.percentage}% — Отлично! ✓
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Recommendation */}
            <div
              className={`p-4 rounded-lg border-2 ${
                passed
                  ? "bg-green-50 border-green-300"
                  : "bg-yellow-50 border-yellow-300"
              }`}
            >
              <h3 className="font-bold text-lg mb-2">
                {passed ? "🎓 Готовы к B1!" : "📚 Рекомендации:"}
              </h3>
              <p className="text-sm text-gray-700">
                {passed
                  ? "Поздравляем! Вы показали отличный результат и готовы к переходу на уровень B1."
                  : `Вы набрали ${totalPercentage}%. Для уверенного перехода к B1 рекомендуем набрать минимум 80%. Повторите слабые темы и попробуйте снова!`}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => window.location.reload()}
                className="flex-1 px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600"
              >
                🔄 Пройти тест заново
              </button>
              <button
                onClick={() =>
                  (window.location.href = "/blocks/a1?t=review1&s=1")
                }
                className="flex-1 px-6 py-3 bg-purple-500 text-white font-bold rounded-lg hover:bg-purple-600"
              >
                📚 Перейти к Review
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Timer & Progress */}
      <div className="sticky top-0 bg-white border-2 border-blue-300 rounded-xl p-4 shadow-lg z-10">
        <div className="flex justify-between items-center mb-3">
          <div>
            <h2 className="text-2xl font-bold text-blue-900">A1 Final Test</h2>
            <p className="text-sm text-gray-600">100 вопросов • 60 минут</p>
          </div>
          <div
            className={`text-3xl font-bold ${
              timeLeft < 300 ? "text-red-600" : "text-blue-900"
            }`}
          >
            ⏱️ {formatTime(timeLeft)}
          </div>
        </div>
        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-center text-xs text-gray-600 mt-1">
          Заполнено: {answeredCount}/100 ({progress}%)
        </p>
      </div>

      {/* Instructions */}
      <Section title="📋 Инструкции">
        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4">
          <ul className="space-y-1 text-sm text-gray-700">
            <li>✓ Тест длится 60 минут</li>
            <li>✓ Всего 100 вопросов по всем темам A1</li>
            <li>✓ Для перехода к B1 нужно набрать минимум 80%</li>
            <li>✓ После теста вы увидите свои плюсы и минусы</li>
          </ul>
        </div>
      </Section>

      {/* 1. Nouns (4) */}
      <Section title="1. Nouns — Существительные (4 вопроса)">
        <div className="space-y-2">
          {["child", "woman", "tooth", "mouse"].map((word, idx) => (
            <div key={idx} className="p-3 bg-white border rounded">
              <p className="text-sm mb-1">
                {idx + 1}. {word} → (plural)
              </p>
              <input
                type="text"
                value={answers[`noun${idx}`] || ""}
                onChange={(e) => handleChange(`noun${idx}`, e.target.value)}
                className="w-full p-2 border rounded text-sm"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* 2. Articles (6) */}
      <Section title="2. Articles — Артикли (6 вопросов)">
        <div className="space-y-2">
          {[
            "I have ___ dog.",
            "___ sun is bright.",
            "She is ___ engineer.",
            "Close ___ door, please.",
            "I need ___ umbrella.",
            "___ water is important. (no article)",
          ].map((sent, idx) => (
            <div key={idx} className="p-3 bg-white border rounded">
              <p className="text-sm mb-1">
                {idx + 1}. {sent}
              </p>
              <input
                type="text"
                value={answers[`art${idx}`] || ""}
                onChange={(e) => handleChange(`art${idx}`, e.target.value)}
                className="w-full p-2 border rounded text-sm"
                placeholder="a, an, the или -"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* 3. Pronouns (5) */}
      <Section title="3. Pronouns — Местоимения (5 вопросов)">
        <div className="space-y-2">
          {[
            "Tom is tall. ___ is a student.",
            "Mary is nice. ___ is my friend.",
            "Tom and Mary are here. ___ are happy.",
            "The cat is small. ___ is sleeping.",
            "You and I are friends. ___ are happy.",
          ].map((sent, idx) => (
            <div key={idx} className="p-3 bg-white border rounded">
              <p className="text-sm mb-1">
                {idx + 1}. {sent}
              </p>
              <input
                type="text"
                value={answers[`pron${idx}`] || ""}
                onChange={(e) => handleChange(`pron${idx}`, e.target.value)}
                className="w-full p-2 border rounded text-sm"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* 4. Demonstrative (3) */}
      <Section title="4. Demonstrative Pronouns — Указательные местоимения (3)">
        <div className="space-y-2">
          {[
            "___ book (here, singular)",
            "___ books (here, plural)",
            "___ car (there, singular)",
          ].map((sent, idx) => (
            <div key={idx} className="p-3 bg-white border rounded">
              <p className="text-sm mb-1">
                {idx + 1}. {sent}
              </p>
              <input
                type="text"
                value={answers[`demo${idx}`] || ""}
                onChange={(e) => handleChange(`demo${idx}`, e.target.value)}
                className="w-full p-2 border rounded text-sm"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* 5. Possessive (3) */}
      <Section title="5. Possessive 's — Притяжательный падеж (3)">
        <div className="space-y-2">
          {[
            "the book of Mary = ___ book",
            "the toys of the children = ___ toys",
            "the car of James = ___ car",
          ].map((sent, idx) => (
            <div key={idx} className="p-3 bg-white border rounded">
              <p className="text-sm mb-1">
                {idx + 1}. {sent}
              </p>
              <input
                type="text"
                value={answers[`poss${idx}`] || ""}
                onChange={(e) => handleChange(`poss${idx}`, e.target.value)}
                className="w-full p-2 border rounded text-sm"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* 6. Adjectives (4) */}
      <Section title="6. Adjectives — Прилагательные (4)">
        <div className="space-y-2">
          {[
            "большой (big)",
            "красивый (beautiful)",
            "счастливый (happy)",
            "интересный (interesting)",
          ].map((word, idx) => (
            <div key={idx} className="p-3 bg-white border rounded">
              <p className="text-sm mb-1">
                {idx + 1}. Translate: {word}
              </p>
              <input
                type="text"
                value={answers[`adj${idx}`] || ""}
                onChange={(e) => handleChange(`adj${idx}`, e.target.value)}
                className="w-full p-2 border rounded text-sm"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* 7. Adverbs (4) */}
      <Section title="7. Adverbs — Наречия (4)">
        <div className="space-y-2">
          {[
            "быстро (quickly)",
            "медленно (slowly)",
            "всегда (always)",
            "никогда (never)",
          ].map((word, idx) => (
            <div key={idx} className="p-3 bg-white border rounded">
              <p className="text-sm mb-1">
                {idx + 1}. Translate: {word}
              </p>
              <input
                type="text"
                value={answers[`adv${idx}`] || ""}
                onChange={(e) => handleChange(`adv${idx}`, e.target.value)}
                className="w-full p-2 border rounded text-sm"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* 8. To Be (5) */}
      <Section title="8. To Be — Глагол To Be (5)">
        <div className="space-y-2">
          {[
            "I ___ a student.",
            "She ___ my sister.",
            "They ___ happy.",
            "It ___ a book.",
            "We ___ friends.",
          ].map((sent, idx) => (
            <div key={idx} className="p-3 bg-white border rounded">
              <p className="text-sm mb-1">
                {idx + 1}. {sent}
              </p>
              <input
                type="text"
                value={answers[`tobe${idx}`] || ""}
                onChange={(e) => handleChange(`tobe${idx}`, e.target.value)}
                className="w-full p-2 border rounded text-sm"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* 9. Have/Has Got (3) */}
      <Section title="9. Have/Has Got — Владение (3)">
        <div className="space-y-2">
          {[
            "She ___ got a dog.",
            "I ___ got a car.",
            "He ___ got blue eyes.",
          ].map((sent, idx) => (
            <div key={idx} className="p-3 bg-white border rounded">
              <p className="text-sm mb-1">
                {idx + 1}. {sent}
              </p>
              <input
                type="text"
                value={answers[`have${idx}`] || ""}
                onChange={(e) => handleChange(`have${idx}`, e.target.value)}
                className="w-full p-2 border rounded text-sm"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* 10. Present Simple (8) */}
      <Section title="10. Present Simple — Настоящее простое (8)">
        <div className="space-y-2">
          {[
            "She _____ (work) in a hospital.",
            "They _____ (not/like) coffee.",
            "He _____ (play) football.",
            "She _____ (study) English.",
            "He _____ (not/go) to school.",
            "Where _____ (you/live)?",
            "She _____ (watch) TV every day.",
            "They _____ (not/eat) meat.",
          ].map((sent, idx) => (
            <div key={idx} className="p-3 bg-white border rounded">
              <p className="text-sm mb-1">
                {idx + 1}. {sent}
              </p>
              <input
                type="text"
                value={answers[`ps${idx}`] || ""}
                onChange={(e) => handleChange(`ps${idx}`, e.target.value)}
                className="w-full p-2 border rounded text-sm"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* 11. Present Continuous (6) */}
      <Section title="11. Present Continuous — Настоящее длительное (6)">
        <div className="space-y-2">
          {[
            "play → (now)",
            "study → (now)",
            "run → (now)",
            "swim → (now)",
            "read → (now)",
            "write → (now)",
          ].map((word, idx) => (
            <div key={idx} className="p-3 bg-white border rounded">
              <p className="text-sm mb-1">
                {idx + 1}. {word}
              </p>
              <input
                type="text"
                value={answers[`pc${idx}`] || ""}
                onChange={(e) => handleChange(`pc${idx}`, e.target.value)}
                className="w-full p-2 border rounded text-sm"
                placeholder="-ing form"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* 12. Present Comparison (5) */}
      <Section title="12. Present Simple vs Continuous (5)">
        <div className="space-y-2">
          {[
            "I _____ (work) every day. (simple/continuous?)",
            "She _____ (study) right now. (simple/continuous?)",
            "They _____ (live) in London. (simple/continuous?)",
            "We _____ (watch) TV now. (simple/continuous?)",
            "He _____ (play) football on Mondays. (simple/continuous?)",
          ].map((sent, idx) => (
            <div key={idx} className="p-3 bg-white border rounded">
              <p className="text-sm mb-1">
                {idx + 1}. {sent}
              </p>
              <input
                type="text"
                value={answers[`comp${idx}`] || ""}
                onChange={(e) => handleChange(`comp${idx}`, e.target.value)}
                className="w-full p-2 border rounded text-sm"
                placeholder="simple or continuous"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* 13. Imperatives (3) */}
      <Section title="13. Imperatives — Повелительное наклонение (3)">
        <div className="space-y-2">
          {[
            "_____ the door! (open)",
            "_____ touch that! (negative)",
            "_____ quiet! (be)",
          ].map((sent, idx) => (
            <div key={idx} className="p-3 bg-white border rounded">
              <p className="text-sm mb-1">
                {idx + 1}. {sent}
              </p>
              <input
                type="text"
                value={answers[`imp${idx}`] || ""}
                onChange={(e) => handleChange(`imp${idx}`, e.target.value)}
                className="w-full p-2 border rounded text-sm"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* 14. Can/Can't (4) */}
      <Section title="14. Can/Can't — Способность (4)">
        <div className="space-y-2">
          {[
            "I _____ swim.",
            "She _____ speak French. (negative)",
            "_____ you drive?",
            "They _____ come. (negative)",
          ].map((sent, idx) => (
            <div key={idx} className="p-3 bg-white border rounded">
              <p className="text-sm mb-1">
                {idx + 1}. {sent}
              </p>
              <input
                type="text"
                value={answers[`can${idx}`] || ""}
                onChange={(e) => handleChange(`can${idx}`, e.target.value)}
                className="w-full p-2 border rounded text-sm"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* 15. There is/are (4) */}
      <Section title="15. There is/are — Существование (4)">
        <div className="space-y-2">
          {[
            "There ___ a book on the table.",
            "There ___ many students here.",
            "There ___ a problem.",
            "There ___ two cats in the garden.",
          ].map((sent, idx) => (
            <div key={idx} className="p-3 bg-white border rounded">
              <p className="text-sm mb-1">
                {idx + 1}. {sent}
              </p>
              <input
                type="text"
                value={answers[`there${idx}`] || ""}
                onChange={(e) => handleChange(`there${idx}`, e.target.value)}
                className="w-full p-2 border rounded text-sm"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* 16. Prepositions of Place (5) */}
      <Section title="16. Prepositions of Place — Предлоги места (5)">
        <div className="space-y-2">
          {[
            "The book is ___ the box. (inside)",
            "The book is ___ the table. (surface)",
            "The cat is ___ the table. (below)",
            "The shop is ___ the bank. (beside)",
            "I'm sitting ___ Tom and Mary. (middle)",
          ].map((sent, idx) => (
            <div key={idx} className="p-3 bg-white border rounded">
              <p className="text-sm mb-1">
                {idx + 1}. {sent}
              </p>
              <input
                type="text"
                value={answers[`prepplace${idx}`] || ""}
                onChange={(e) =>
                  handleChange(`prepplace${idx}`, e.target.value)
                }
                className="w-full p-2 border rounded text-sm"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* 17. Prepositions of Time (4) */}
      <Section title="17. Prepositions of Time — Предлоги времени (4)">
        <div className="space-y-2">
          {[
            "I was born ___ 1995.",
            "The meeting is ___ Monday.",
            "I wake up ___ 7 AM.",
            "It's cold ___ winter.",
          ].map((sent, idx) => (
            <div key={idx} className="p-3 bg-white border rounded">
              <p className="text-sm mb-1">
                {idx + 1}. {sent}
              </p>
              <input
                type="text"
                value={answers[`preptime${idx}`] || ""}
                onChange={(e) => handleChange(`preptime${idx}`, e.target.value)}
                className="w-full p-2 border rounded text-sm"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* 18. Past To Be (4) */}
      <Section title="18. Past Simple (to be) — Прошедшее время (4)">
        <div className="space-y-2">
          {[
            "I ___ at home yesterday.",
            "They ___ happy.",
            "She ___ tired.",
            "We ___ in London.",
          ].map((sent, idx) => (
            <div key={idx} className="p-3 bg-white border rounded">
              <p className="text-sm mb-1">
                {idx + 1}. {sent}
              </p>
              <input
                type="text"
                value={answers[`pasttobe${idx}`] || ""}
                onChange={(e) => handleChange(`pasttobe${idx}`, e.target.value)}
                className="w-full p-2 border rounded text-sm"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* 19. Past Continuous (5) */}
      <Section title="19. Past Continuous — Прошедшее длительное (5)">
        <div className="space-y-2">
          {[
            "I _____ (play) football at 5 PM.",
            "They _____ (study) all evening.",
            "She _____ (read) a book.",
            "We _____ (watch) TV.",
            "He _____ (sleep) at midnight.",
          ].map((sent, idx) => (
            <div key={idx} className="p-3 bg-white border rounded">
              <p className="text-sm mb-1">
                {idx + 1}. {sent}
              </p>
              <input
                type="text"
                value={answers[`pastcont${idx}`] || ""}
                onChange={(e) => handleChange(`pastcont${idx}`, e.target.value)}
                className="w-full p-2 border rounded text-sm"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* 20. Past Comparison (5) */}
      <Section title="20. Past Simple vs Continuous (5)">
        <div className="space-y-2">
          {[
            "I _____ (go) to Paris last year. (simple/continuous?)",
            "She _____ (read) when I called. (simple/continuous?)",
            "They _____ (visit) us yesterday. (simple/continuous?)",
            "We _____ (watch) TV at 8 PM. (simple/continuous?)",
            "He _____ (sleep) when you arrived. (simple/continuous?)",
          ].map((sent, idx) => (
            <div key={idx} className="p-3 bg-white border rounded">
              <p className="text-sm mb-1">
                {idx + 1}. {sent}
              </p>
              <input
                type="text"
                value={answers[`pastcomp${idx}`] || ""}
                onChange={(e) => handleChange(`pastcomp${idx}`, e.target.value)}
                className="w-full p-2 border rounded text-sm"
                placeholder="simple or continuous"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* 21. Translation (5) */}
      <Section title="21. Translation — Перевод предложений (5)">
        <div className="space-y-2">
          {[
            "Привет / Здравствуйте",
            "Спасибо",
            "Завтра",
            "Друг",
            "Помогите / Помочь",
          ].map((word, idx) => (
            <div key={idx} className="p-3 bg-white border rounded">
              <p className="text-sm mb-1">
                {idx + 1}. Translate to English: {word}
              </p>
              <input
                type="text"
                value={answers[`trans${idx}`] || ""}
                onChange={(e) => handleChange(`trans${idx}`, e.target.value)}
                className="w-full p-2 border rounded text-sm"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* 22. Reading (5) */}
      <Section title="22. Reading — Чтение (5)">
        <div className="bg-white border-2 rounded-lg p-4 mb-4">
          <p className="text-sm text-gray-800 leading-relaxed">
            My name is Sarah. I live in London. I am a teacher. I work at a
            school. Every day, I wake up at 6 AM and go to school at 9 AM. I
            teach English. After work, I go to the gym. I like reading books in
            my free time.
          </p>
        </div>
        <div className="space-y-2">
          {[
            "Where does Sarah live?",
            "What is her job?",
            "What time does she go to school?",
            "Where does she go after work?",
            "What does she like doing in her free time?",
          ].map((q, idx) => (
            <div key={idx} className="p-3 bg-white border rounded">
              <p className="text-sm mb-1">
                {idx + 1}. {q}
              </p>
              <input
                type="text"
                value={answers[`read${idx}`] || ""}
                onChange={(e) => handleChange(`read${idx}`, e.target.value)}
                className="w-full p-2 border rounded text-sm"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Submit Button */}
      <div className="bg-white border-2 border-green-300 rounded-xl p-4 shadow-lg mt-8">
        <button
          onClick={handleSubmit}
          className="w-full py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white text-xl font-bold rounded-lg hover:from-green-600 hover:to-blue-600"
        >
          Отправить тест и получить результаты
        </button>
        <p className="text-center text-xs text-gray-600 mt-2">
          Убедитесь, что ответили на все вопросы!
        </p>
      </div>
    </div>
  );
}
