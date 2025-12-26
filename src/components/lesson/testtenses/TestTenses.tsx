"use client";

import React, { useState } from "react";
import { Section as UiSection } from "@/components/ui/Section";

type Props = { step: number };

type Answer = string | null;
type Answers = Record<string, Answer>;

export default function TestTenses({ step }: Props) {
  const [answers, setAnswers] = useState<Answers>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const checkAnswers = () => {
    let correct = 0;
    const totalQuestions = getTotalQuestions();

    Object.keys(correctAnswers).forEach((key) => {
      const userAnswer = answers[key]?.trim().toLowerCase();
      const correct_answer = correctAnswers[key];

      if (Array.isArray(correct_answer)) {
        if (correct_answer.some((ans) => ans.toLowerCase() === userAnswer)) {
          correct++;
        }
      } else {
        if (correct_answer.toLowerCase() === userAnswer) {
          correct++;
        }
      }
    });

    setScore(correct);
    setShowResults(true);
  };

  const getTotalQuestions = () => {
    return Object.keys(correctAnswers).length;
  };

  const isCorrect = (questionId: string): boolean | null => {
    if (!showResults) return null;
    const userAnswer = answers[questionId]?.trim().toLowerCase();
    const correct_answer = correctAnswers[questionId];

    if (!userAnswer) return false;

    if (Array.isArray(correct_answer)) {
      return correct_answer.some((ans) => ans.toLowerCase() === userAnswer);
    }
    return correct_answer.toLowerCase() === userAnswer;
  };

  const resetTest = () => {
    setAnswers({});
    setShowResults(false);
    setScore(0);
  };

  switch (step) {
    case 1:
      return <Step1 />;
    case 2:
      return (
        <Step2
          answers={answers}
          handleAnswerChange={handleAnswerChange}
          isCorrect={isCorrect}
          showResults={showResults}
        />
      );
    case 3:
      return (
        <Step3
          answers={answers}
          handleAnswerChange={handleAnswerChange}
          isCorrect={isCorrect}
          showResults={showResults}
        />
      );
    case 4:
      return (
        <Step4
          answers={answers}
          handleAnswerChange={handleAnswerChange}
          isCorrect={isCorrect}
          showResults={showResults}
        />
      );
    case 5:
      return (
        <Step5
          answers={answers}
          handleAnswerChange={handleAnswerChange}
          isCorrect={isCorrect}
          showResults={showResults}
        />
      );
    case 6:
      return (
        <Step6
          answers={answers}
          handleAnswerChange={handleAnswerChange}
          isCorrect={isCorrect}
          showResults={showResults}
        />
      );
    case 7:
      return (
        <Step7
          answers={answers}
          handleAnswerChange={handleAnswerChange}
          isCorrect={isCorrect}
          showResults={showResults}
        />
      );
    case 8:
      return (
        <Step8
          answers={answers}
          handleAnswerChange={handleAnswerChange}
          isCorrect={isCorrect}
          showResults={showResults}
        />
      );
    case 9:
      return <Step9 />;
    case 10:
      return (
        <Step10
          answers={answers}
          handleAnswerChange={handleAnswerChange}
          isCorrect={isCorrect}
          showResults={showResults}
          checkAnswers={checkAnswers}
          score={score}
          totalQuestions={getTotalQuestions()}
          resetTest={resetTest}
        />
      );
    default:
      return <Step1 />;
  }
}

// Правильные ответы для всех вопросов
const correctAnswers: Record<string, string | string[]> = {
  // Step 2: Multiple Choice
  "2-1": "a",
  "2-2": "b",
  "2-3": "b",
  "2-4": "b",
  "2-5": "a",

  // Step 3: Fill in the Blanks
  "3-1": "play",
  "3-2": "is watching",
  "3-3": "went",
  "3-4": "were reading",
  "3-5": "Are",
  "3-5b": "eating",
  "3-6": "studied",
  "3-7": "Were",
  "3-7b": "running",

  // Step 4: Negative Sentences
  "4-1": [
    "I don't play football every day",
    "I don't play football every day.",
  ],
  "4-2": [
    "She isn't watching TV now",
    "She isn't watching TV now.",
    "She is not watching TV now",
    "She is not watching TV now.",
  ],
  "4-3": [
    "They didn't go to school yesterday",
    "They didn't go to school yesterday.",
  ],
  "4-4": [
    "We weren't reading a book at 6 p.m",
    "We weren't reading a book at 6 p.m.",
    "We were not reading a book at 6 p.m",
    "We were not reading a book at 6 p.m.",
  ],

  // Step 5: Questions
  "5-1": ["Do I play football every day", "Do I play football every day?"],
  "5-2": ["Is she watching TV now", "Is she watching TV now?"],
  "5-3": [
    "Did they go to school yesterday",
    "Did they go to school yesterday?",
  ],
  "5-4": [
    "Were we reading a book at 6 p.m",
    "Were we reading a book at 6 p.m.?",
  ],

  // Step 6: Translation
  "6-1": ["I read a book every day", "I read a book every day."],
  "6-2": ["They are playing football now", "They are playing football now."],
  "6-3": ["I watched TV yesterday", "I watched TV yesterday."],
  "6-4": ["She was eating when I called", "She was eating when I called."],

  // Step 7: Correct the Mistakes
  "7-1": ["I play football every day", "I play football every day."],
  "7-2": ["She is watching TV now", "She is watching TV now."],
  "7-3": ["They went to school yesterday", "They went to school yesterday."],
  "7-4": [
    "We were reading a book at 6 p.m",
    "We were reading a book at 6 p.m.",
  ],

  // Step 8: Combined Sentences
  "8-1": [
    "I was reading a book when you called",
    "I was reading a book when you called.",
  ],
  "8-2": [
    "While she was watching TV, I arrived",
    "While she was watching TV, I arrived.",
  ],

  // Step 10: True/False
  "10-1": ["True", "true"],
  "10-2": ["True", "true"],
  "10-3": ["True", "true"],
  "10-4": ["False", "false"],
  "10-5": ["False", "false"],
};

/* ===== СТРАНИЦА 1: Введение ===== */
function Step1() {
  return (
    <>
      <UiSection title="Что такое этот тест?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Этот тест проверяет, как хорошо вы понимаете и используете{" "}
          <strong>Present Simple</strong>, <strong>Present Continuous</strong>,{" "}
          <strong>Past Simple</strong> и <strong>Past Continuous</strong>. Он
          включает задания на выбор формы, заполнение пропусков, перевод,
          исправление ошибок и создание предложений.
        </p>
      </UiSection>

      <UiSection title="Зачем нужен тест?">
        <ul className="list-disc pl-5 space-y-2">
          <li>Проверяет знание времён.</li>
          <li>Помогает выявить слабые места.</li>
          <li>Закрепляет навыки через практику.</li>
        </ul>
      </UiSection>

      <UiSection title="Структура теста">
        <ul className="list-disc pl-5 space-y-2">
          <li>10 страниц с заданиями разного типа.</li>
          <li>
            Вопросы: выбор формы, заполнение, перевод, исправление ошибок,
            составление предложений, чтение True/False.
          </li>
          <li>Лексика из предыдущей темы.</li>
        </ul>
      </UiSection>

      <UiSection title="Советы">
        <div className="bg-blue-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Вспомните временные слова (
              <em>always, now, yesterday, at 5 p.m.</em>
              ).
            </li>
            <li>
              Проверяйте формы: <em>play/plays</em>, <em>am/is/are playing</em>,{" "}
              <em>played</em>, <em>was/were playing</em>.
            </li>
            <li>
              Обращайте внимание на контекст (привычка, сейчас, завершено,
              длилось).
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русскоязычные часто путают времена из-за отсутствия чёткого
            разделения в русском (<em>я играю</em> = <em>I play</em> или{" "}
            <em>I am playing</em>). Внимательно читайте контекст!
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 2: Выбор формы ===== */
interface TestStepProps {
  answers: Answers;
  handleAnswerChange: (questionId: string, value: string) => void;
  isCorrect: (questionId: string) => boolean | null;
  showResults: boolean;
}

function Step2({
  answers,
  handleAnswerChange,
  isCorrect,
  showResults,
}: TestStepProps) {
  const getInputClass = (questionId: string) => {
    const correct = isCorrect(questionId);
    if (correct === null) return "border-gray-300";
    return correct
      ? "border-green-500 bg-green-50"
      : "border-red-500 bg-red-50";
  };

  return (
    <>
      <UiSection title="Тест — Выбор формы (Multiple Choice)">
        <p className="text-zinc-700 mb-4">
          <strong>Инструкции:</strong> Выберите правильную форму глагола.
        </p>

        <div className="space-y-6">
          {/* Question 1 */}
          <div className={`p-4 rounded-lg ${getInputClass("2-1")}`}>
            <p className="font-semibold mb-3">
              1. I ______ football every weekend.
            </p>
            <div className="space-y-2">
              {["a) play", "b) am playing", "c) played"].map((option) => (
                <label
                  key={option}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="2-1"
                    value={option[0]}
                    checked={answers["2-1"] === option[0]}
                    onChange={(e) => handleAnswerChange("2-1", e.target.value)}
                    disabled={showResults}
                    className="w-4 h-4"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
            {showResults && (
              <p className="mt-2 text-sm text-gray-600">
                ✓ Ответ: a) play — Present Simple, привычка.
              </p>
            )}
          </div>

          {/* Question 2 */}
          <div className={`p-4 rounded-lg ${getInputClass("2-2")}`}>
            <p className="font-semibold mb-3">2. She ______ TV now.</p>
            <div className="space-y-2">
              {["a) watches", "b) is watching", "c) watched"].map((option) => (
                <label
                  key={option}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="2-2"
                    value={option[0]}
                    checked={answers["2-2"] === option[0]}
                    onChange={(e) => handleAnswerChange("2-2", e.target.value)}
                    disabled={showResults}
                    className="w-4 h-4"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
            {showResults && (
              <p className="mt-2 text-sm text-gray-600">
                ✓ Ответ: b) is watching — Present Continuous, сейчас.
              </p>
            )}
          </div>

          {/* Question 3 */}
          <div className={`p-4 rounded-lg ${getInputClass("2-3")}`}>
            <p className="font-semibold mb-3">
              3. They ______ to school yesterday.
            </p>
            <div className="space-y-2">
              {["a) go", "b) went", "c) were going"].map((option) => (
                <label
                  key={option}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="2-3"
                    value={option[0]}
                    checked={answers["2-3"] === option[0]}
                    onChange={(e) => handleAnswerChange("2-3", e.target.value)}
                    disabled={showResults}
                    className="w-4 h-4"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
            {showResults && (
              <p className="mt-2 text-sm text-gray-600">
                ✓ Ответ: b) went — Past Simple, завершено.
              </p>
            )}
          </div>

          {/* Question 4 */}
          <div className={`p-4 rounded-lg ${getInputClass("2-4")}`}>
            <p className="font-semibold mb-3">
              4. We ______ a book at 6 p.m. yesterday.
            </p>
            <div className="space-y-2">
              {["a) read", "b) were reading", "c) are reading"].map(
                (option) => (
                  <label
                    key={option}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="2-4"
                      value={option[0]}
                      checked={answers["2-4"] === option[0]}
                      onChange={(e) =>
                        handleAnswerChange("2-4", e.target.value)
                      }
                      disabled={showResults}
                      className="w-4 h-4"
                    />
                    <span>{option}</span>
                  </label>
                )
              )}
            </div>
            {showResults && (
              <p className="mt-2 text-sm text-gray-600">
                ✓ Ответ: b) were reading — Past Continuous, длилось.
              </p>
            )}
          </div>

          {/* Question 5 */}
          <div className={`p-4 rounded-lg ${getInputClass("2-5")}`}>
            <p className="font-semibold mb-3">
              5. ______ you (watch) TV every evening?
            </p>
            <div className="space-y-2">
              {["a) Do", "b) Are", "c) Did"].map((option) => (
                <label
                  key={option}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="2-5"
                    value={option[0]}
                    checked={answers["2-5"] === option[0]}
                    onChange={(e) => handleAnswerChange("2-5", e.target.value)}
                    disabled={showResults}
                    className="w-4 h-4"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
            {showResults && (
              <p className="mt-2 text-sm text-gray-600">
                ✓ Ответ: a) Do — Present Simple, вопрос.
              </p>
            )}
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 3: Заполнение пропусков ===== */
function Step3({
  answers,
  handleAnswerChange,
  isCorrect,
  showResults,
}: TestStepProps) {
  const getInputClass = (questionId: string) => {
    const correct = isCorrect(questionId);
    if (correct === null) return "border-gray-300";
    return correct
      ? "border-green-500 bg-green-50"
      : "border-red-500 bg-red-50";
  };

  return (
    <>
      <UiSection title="Тест — Заполнение пропусков (Fill in the Blanks)">
        <p className="text-zinc-700 mb-4">
          <strong>Инструкции:</strong> Вставьте правильную форму глагола в
          скобках.
        </p>

        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${getInputClass("3-1")}`}>
            <p className="mb-2">
              1. I{" "}
              <input
                type="text"
                value={answers["3-1"] || ""}
                onChange={(e) => handleAnswerChange("3-1", e.target.value)}
                disabled={showResults}
                className="border-b-2 border-gray-400 px-2 py-1 w-40 bg-transparent"
                placeholder="..."
              />{" "}
              (play) football every day.
            </p>
            {showResults && (
              <p className="text-sm text-gray-600">✓ Ответ: play</p>
            )}
          </div>

          <div className={`p-4 rounded-lg ${getInputClass("3-2")}`}>
            <p className="mb-2">
              2. She{" "}
              <input
                type="text"
                value={answers["3-2"] || ""}
                onChange={(e) => handleAnswerChange("3-2", e.target.value)}
                disabled={showResults}
                className="border-b-2 border-gray-400 px-2 py-1 w-40 bg-transparent"
                placeholder="..."
              />{" "}
              (watch) TV at the moment.
            </p>
            {showResults && (
              <p className="text-sm text-gray-600">✓ Ответ: is watching</p>
            )}
          </div>

          <div className={`p-4 rounded-lg ${getInputClass("3-3")}`}>
            <p className="mb-2">
              3. They{" "}
              <input
                type="text"
                value={answers["3-3"] || ""}
                onChange={(e) => handleAnswerChange("3-3", e.target.value)}
                disabled={showResults}
                className="border-b-2 border-gray-400 px-2 py-1 w-40 bg-transparent"
                placeholder="..."
              />{" "}
              (go) to the park last week.
            </p>
            {showResults && (
              <p className="text-sm text-gray-600">✓ Ответ: went</p>
            )}
          </div>

          <div className={`p-4 rounded-lg ${getInputClass("3-4")}`}>
            <p className="mb-2">
              4. We{" "}
              <input
                type="text"
                value={answers["3-4"] || ""}
                onChange={(e) => handleAnswerChange("3-4", e.target.value)}
                disabled={showResults}
                className="border-b-2 border-gray-400 px-2 py-1 w-40 bg-transparent"
                placeholder="..."
              />{" "}
              (read) a book when you called.
            </p>
            {showResults && (
              <p className="text-sm text-gray-600">✓ Ответ: were reading</p>
            )}
          </div>

          <div
            className={`p-4 rounded-lg ${
              getInputClass("3-5") === "border-green-500 bg-green-50" &&
              getInputClass("3-5b") === "border-green-500 bg-green-50"
                ? "border-green-500 bg-green-50"
                : getInputClass("3-5") === "border-red-500 bg-red-50" ||
                  getInputClass("3-5b") === "border-red-500 bg-red-50"
                ? "border-red-500 bg-red-50"
                : "border-gray-300"
            }`}
          >
            <p className="mb-2">
              5.{" "}
              <input
                type="text"
                value={answers["3-5"] || ""}
                onChange={(e) => handleAnswerChange("3-5", e.target.value)}
                disabled={showResults}
                className="border-b-2 border-gray-400 px-2 py-1 w-32 bg-transparent"
                placeholder="..."
              />{" "}
              you{" "}
              <input
                type="text"
                value={answers["3-5b"] || ""}
                onChange={(e) => handleAnswerChange("3-5b", e.target.value)}
                disabled={showResults}
                className="border-b-2 border-gray-400 px-2 py-1 w-32 bg-transparent"
                placeholder="..."
              />{" "}
              (eat) now?
            </p>
            {showResults && (
              <p className="text-sm text-gray-600">✓ Ответ: Are eating</p>
            )}
          </div>

          <div className={`p-4 rounded-lg ${getInputClass("3-6")}`}>
            <p className="mb-2">
              6. He{" "}
              <input
                type="text"
                value={answers["3-6"] || ""}
                onChange={(e) => handleAnswerChange("3-6", e.target.value)}
                disabled={showResults}
                className="border-b-2 border-gray-400 px-2 py-1 w-40 bg-transparent"
                placeholder="..."
              />{" "}
              (study) yesterday.
            </p>
            {showResults && (
              <p className="text-sm text-gray-600">✓ Ответ: studied</p>
            )}
          </div>

          <div
            className={`p-4 rounded-lg ${
              getInputClass("3-7") === "border-green-500 bg-green-50" &&
              getInputClass("3-7b") === "border-green-500 bg-green-50"
                ? "border-green-500 bg-green-50"
                : getInputClass("3-7") === "border-red-500 bg-red-50" ||
                  getInputClass("3-7b") === "border-red-500 bg-red-50"
                ? "border-red-500 bg-red-50"
                : "border-gray-300"
            }`}
          >
            <p className="mb-2">
              7.{" "}
              <input
                type="text"
                value={answers["3-7"] || ""}
                onChange={(e) => handleAnswerChange("3-7", e.target.value)}
                disabled={showResults}
                className="border-b-2 border-gray-400 px-2 py-1 w-32 bg-transparent"
                placeholder="..."
              />{" "}
              they{" "}
              <input
                type="text"
                value={answers["3-7b"] || ""}
                onChange={(e) => handleAnswerChange("3-7b", e.target.value)}
                disabled={showResults}
                className="border-b-2 border-gray-400 px-2 py-1 w-32 bg-transparent"
                placeholder="..."
              />{" "}
              (run) at 7 p.m. yesterday?
            </p>
            {showResults && (
              <p className="text-sm text-gray-600">✓ Ответ: Were running</p>
            )}
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 4: Отрицания ===== */
function Step4({
  answers,
  handleAnswerChange,
  isCorrect,
  showResults,
}: TestStepProps) {
  const getInputClass = (questionId: string) => {
    const correct = isCorrect(questionId);
    if (correct === null) return "border-gray-300";
    return correct
      ? "border-green-500 bg-green-50"
      : "border-red-500 bg-red-50";
  };

  return (
    <>
      <UiSection title="Тест — Отрицания (Negative Sentences)">
        <p className="text-zinc-700 mb-4">
          <strong>Инструкции:</strong> Сделайте предложения отрицательными.
        </p>

        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${getInputClass("4-1")}`}>
            <p className="mb-2 font-semibold">
              1. I play football every day. →
            </p>
            <input
              type="text"
              value={answers["4-1"] || ""}
              onChange={(e) => handleAnswerChange("4-1", e.target.value)}
              disabled={showResults}
              className="border-2 rounded px-3 py-2 w-full bg-transparent"
              placeholder="Ваш ответ..."
            />
            {showResults && (
              <p className="mt-2 text-sm text-gray-600">
                ✓ Ответ: I don't play football every day.
              </p>
            )}
          </div>

          <div className={`p-4 rounded-lg ${getInputClass("4-2")}`}>
            <p className="mb-2 font-semibold">2. She is watching TV now. →</p>
            <input
              type="text"
              value={answers["4-2"] || ""}
              onChange={(e) => handleAnswerChange("4-2", e.target.value)}
              disabled={showResults}
              className="border-2 rounded px-3 py-2 w-full bg-transparent"
              placeholder="Ваш ответ..."
            />
            {showResults && (
              <p className="mt-2 text-sm text-gray-600">
                ✓ Ответ: She isn't watching TV now.
              </p>
            )}
          </div>

          <div className={`p-4 rounded-lg ${getInputClass("4-3")}`}>
            <p className="mb-2 font-semibold">
              3. They went to school yesterday. →
            </p>
            <input
              type="text"
              value={answers["4-3"] || ""}
              onChange={(e) => handleAnswerChange("4-3", e.target.value)}
              disabled={showResults}
              className="border-2 rounded px-3 py-2 w-full bg-transparent"
              placeholder="Ваш ответ..."
            />
            {showResults && (
              <p className="mt-2 text-sm text-gray-600">
                ✓ Ответ: They didn't go to school yesterday.
              </p>
            )}
          </div>

          <div className={`p-4 rounded-lg ${getInputClass("4-4")}`}>
            <p className="mb-2 font-semibold">
              4. We were reading a book at 6 p.m. →
            </p>
            <input
              type="text"
              value={answers["4-4"] || ""}
              onChange={(e) => handleAnswerChange("4-4", e.target.value)}
              disabled={showResults}
              className="border-2 rounded px-3 py-2 w-full bg-transparent"
              placeholder="Ваш ответ..."
            />
            {showResults && (
              <p className="mt-2 text-sm text-gray-600">
                ✓ Ответ: We weren't reading a book at 6 p.m.
              </p>
            )}
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 5: Вопросы ===== */
function Step5({
  answers,
  handleAnswerChange,
  isCorrect,
  showResults,
}: TestStepProps) {
  const getInputClass = (questionId: string) => {
    const correct = isCorrect(questionId);
    if (correct === null) return "border-gray-300";
    return correct
      ? "border-green-500 bg-green-50"
      : "border-red-500 bg-red-50";
  };

  return (
    <>
      <UiSection title="Тест — Вопросы (Questions)">
        <p className="text-zinc-700 mb-4">
          <strong>Инструкции:</strong> Составьте вопросы к предложениям.
        </p>

        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${getInputClass("5-1")}`}>
            <p className="mb-2 font-semibold">
              1. I play football every day. →
            </p>
            <input
              type="text"
              value={answers["5-1"] || ""}
              onChange={(e) => handleAnswerChange("5-1", e.target.value)}
              disabled={showResults}
              className="border-2 rounded px-3 py-2 w-full bg-transparent"
              placeholder="Ваш ответ..."
            />
            {showResults && (
              <p className="mt-2 text-sm text-gray-600">
                ✓ Ответ: Do I play football every day?
              </p>
            )}
          </div>

          <div className={`p-4 rounded-lg ${getInputClass("5-2")}`}>
            <p className="mb-2 font-semibold">2. She is watching TV now. →</p>
            <input
              type="text"
              value={answers["5-2"] || ""}
              onChange={(e) => handleAnswerChange("5-2", e.target.value)}
              disabled={showResults}
              className="border-2 rounded px-3 py-2 w-full bg-transparent"
              placeholder="Ваш ответ..."
            />
            {showResults && (
              <p className="mt-2 text-sm text-gray-600">
                ✓ Ответ: Is she watching TV now?
              </p>
            )}
          </div>

          <div className={`p-4 rounded-lg ${getInputClass("5-3")}`}>
            <p className="mb-2 font-semibold">
              3. They went to school yesterday. →
            </p>
            <input
              type="text"
              value={answers["5-3"] || ""}
              onChange={(e) => handleAnswerChange("5-3", e.target.value)}
              disabled={showResults}
              className="border-2 rounded px-3 py-2 w-full bg-transparent"
              placeholder="Ваш ответ..."
            />
            {showResults && (
              <p className="mt-2 text-sm text-gray-600">
                ✓ Ответ: Did they go to school yesterday?
              </p>
            )}
          </div>

          <div className={`p-4 rounded-lg ${getInputClass("5-4")}`}>
            <p className="mb-2 font-semibold">
              4. We were reading a book at 6 p.m. →
            </p>
            <input
              type="text"
              value={answers["5-4"] || ""}
              onChange={(e) => handleAnswerChange("5-4", e.target.value)}
              disabled={showResults}
              className="border-2 rounded px-3 py-2 w-full bg-transparent"
              placeholder="Ваш ответ..."
            />
            {showResults && (
              <p className="mt-2 text-sm text-gray-600">
                ✓ Ответ: Were we reading a book at 6 p.m.?
              </p>
            )}
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 6: Перевод ===== */
function Step6({
  answers,
  handleAnswerChange,
  isCorrect,
  showResults,
}: TestStepProps) {
  const getInputClass = (questionId: string) => {
    const correct = isCorrect(questionId);
    if (correct === null) return "border-gray-300";
    return correct
      ? "border-green-500 bg-green-50"
      : "border-red-500 bg-red-50";
  };

  return (
    <>
      <UiSection title="Тест — Перевод (Translation)">
        <p className="text-zinc-700 mb-4">
          <strong>Инструкции:</strong> Переведите предложения на английский.
        </p>

        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${getInputClass("6-1")}`}>
            <p className="mb-2 font-semibold">
              1. Я читаю книгу каждый день. →
            </p>
            <input
              type="text"
              value={answers["6-1"] || ""}
              onChange={(e) => handleAnswerChange("6-1", e.target.value)}
              disabled={showResults}
              className="border-2 rounded px-3 py-2 w-full bg-transparent"
              placeholder="Ваш ответ..."
            />
            {showResults && (
              <p className="mt-2 text-sm text-gray-600">
                ✓ Ответ: I read a book every day.
              </p>
            )}
          </div>

          <div className={`p-4 rounded-lg ${getInputClass("6-2")}`}>
            <p className="mb-2 font-semibold">
              2. Они играют в футбол сейчас. →
            </p>
            <input
              type="text"
              value={answers["6-2"] || ""}
              onChange={(e) => handleAnswerChange("6-2", e.target.value)}
              disabled={showResults}
              className="border-2 rounded px-3 py-2 w-full bg-transparent"
              placeholder="Ваш ответ..."
            />
            {showResults && (
              <p className="mt-2 text-sm text-gray-600">
                ✓ Ответ: They are playing football now.
              </p>
            )}
          </div>

          <div className={`p-4 rounded-lg ${getInputClass("6-3")}`}>
            <p className="mb-2 font-semibold">
              3. Я смотрел телевизор вчера. →
            </p>
            <input
              type="text"
              value={answers["6-3"] || ""}
              onChange={(e) => handleAnswerChange("6-3", e.target.value)}
              disabled={showResults}
              className="border-2 rounded px-3 py-2 w-full bg-transparent"
              placeholder="Ваш ответ..."
            />
            {showResults && (
              <p className="mt-2 text-sm text-gray-600">
                ✓ Ответ: I watched TV yesterday.
              </p>
            )}
          </div>

          <div className={`p-4 rounded-lg ${getInputClass("6-4")}`}>
            <p className="mb-2 font-semibold">
              4. Она ела, когда я позвонил. →
            </p>
            <input
              type="text"
              value={answers["6-4"] || ""}
              onChange={(e) => handleAnswerChange("6-4", e.target.value)}
              disabled={showResults}
              className="border-2 rounded px-3 py-2 w-full bg-transparent"
              placeholder="Ваш ответ..."
            />
            {showResults && (
              <p className="mt-2 text-sm text-gray-600">
                ✓ Ответ: She was eating when I called.
              </p>
            )}
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 7: Исправление ошибок ===== */
function Step7({
  answers,
  handleAnswerChange,
  isCorrect,
  showResults,
}: TestStepProps) {
  const getInputClass = (questionId: string) => {
    const correct = isCorrect(questionId);
    if (correct === null) return "border-gray-300";
    return correct
      ? "border-green-500 bg-green-50"
      : "border-red-500 bg-red-50";
  };

  return (
    <>
      <UiSection title="Тест — Исправление ошибок (Correct the Mistakes)">
        <p className="text-zinc-700 mb-4">
          <strong>Инструкции:</strong> Исправьте ошибки в предложениях.
        </p>

        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${getInputClass("7-1")}`}>
            <p className="mb-2 font-semibold text-red-600">
              1. ❌ I am play football every day. →
            </p>
            <input
              type="text"
              value={answers["7-1"] || ""}
              onChange={(e) => handleAnswerChange("7-1", e.target.value)}
              disabled={showResults}
              className="border-2 rounded px-3 py-2 w-full bg-transparent"
              placeholder="Ваш ответ..."
            />
            {showResults && (
              <p className="mt-2 text-sm text-gray-600">
                ✓ Ответ: I play football every day.
              </p>
            )}
          </div>

          <div className={`p-4 rounded-lg ${getInputClass("7-2")}`}>
            <p className="mb-2 font-semibold text-red-600">
              2. ❌ She watch TV now. →
            </p>
            <input
              type="text"
              value={answers["7-2"] || ""}
              onChange={(e) => handleAnswerChange("7-2", e.target.value)}
              disabled={showResults}
              className="border-2 rounded px-3 py-2 w-full bg-transparent"
              placeholder="Ваш ответ..."
            />
            {showResults && (
              <p className="mt-2 text-sm text-gray-600">
                ✓ Ответ: She is watching TV now.
              </p>
            )}
          </div>

          <div className={`p-4 rounded-lg ${getInputClass("7-3")}`}>
            <p className="mb-2 font-semibold text-red-600">
              3. ❌ They go to school yesterday. →
            </p>
            <input
              type="text"
              value={answers["7-3"] || ""}
              onChange={(e) => handleAnswerChange("7-3", e.target.value)}
              disabled={showResults}
              className="border-2 rounded px-3 py-2 w-full bg-transparent"
              placeholder="Ваш ответ..."
            />
            {showResults && (
              <p className="mt-2 text-sm text-gray-600">
                ✓ Ответ: They went to school yesterday.
              </p>
            )}
          </div>

          <div className={`p-4 rounded-lg ${getInputClass("7-4")}`}>
            <p className="mb-2 font-semibold text-red-600">
              4. ❌ We was reading a book at 6 p.m. →
            </p>
            <input
              type="text"
              value={answers["7-4"] || ""}
              onChange={(e) => handleAnswerChange("7-4", e.target.value)}
              disabled={showResults}
              className="border-2 rounded px-3 py-2 w-full bg-transparent"
              placeholder="Ваш ответ..."
            />
            {showResults && (
              <p className="mt-2 text-sm text-gray-600">
                ✓ Ответ: We were reading a book at 6 p.m.
              </p>
            )}
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 8: Комбинированные предложения ===== */
function Step8({
  answers,
  handleAnswerChange,
  isCorrect,
  showResults,
}: TestStepProps) {
  const getInputClass = (questionId: string) => {
    const correct = isCorrect(questionId);
    if (correct === null) return "border-gray-300";
    return correct
      ? "border-green-500 bg-green-50"
      : "border-red-500 bg-red-50";
  };

  return (
    <>
      <UiSection title="Тест — Комбинированные предложения (Combined Sentences)">
        <p className="text-zinc-700 mb-4">
          <strong>Инструкции:</strong> Составьте предложения с <em>when</em> или{" "}
          <em>while</em>, используя Past Simple и Past Continuous.
        </p>

        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${getInputClass("8-1")}`}>
            <p className="mb-2 font-semibold">1. I/read/a book → you/call. →</p>
            <input
              type="text"
              value={answers["8-1"] || ""}
              onChange={(e) => handleAnswerChange("8-1", e.target.value)}
              disabled={showResults}
              className="border-2 rounded px-3 py-2 w-full bg-transparent"
              placeholder="Ваш ответ..."
            />
            {showResults && (
              <p className="mt-2 text-sm text-gray-600">
                ✓ Ответ: I was reading a book when you called.
              </p>
            )}
          </div>

          <div className={`p-4 rounded-lg ${getInputClass("8-2")}`}>
            <p className="mb-2 font-semibold">
              2. While/she/watch/TV → I/arrive. →
            </p>
            <input
              type="text"
              value={answers["8-2"] || ""}
              onChange={(e) => handleAnswerChange("8-2", e.target.value)}
              disabled={showResults}
              className="border-2 rounded px-3 py-2 w-full bg-transparent"
              placeholder="Ваш ответ..."
            />
            {showResults && (
              <p className="mt-2 text-sm text-gray-600">
                ✓ Ответ: While she was watching TV, I arrived.
              </p>
            )}
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 9: Составьте свои предложения ===== */
function Step9() {
  return (
    <>
      <UiSection title="Тест — Составьте свои предложения (Create Your Own Sentences)">
        <p className="text-zinc-700 mb-4">
          <strong>Инструкции:</strong> Напишите 8 предложений: по 2 для каждого
          времени (утвердительные, отрицательные или вопросы).
        </p>

        <div className="bg-blue-50/50 rounded-lg p-4 mb-4">
          <p className="font-semibold mb-2">Пример:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <em>I play football every day.</em>
            </li>
            <li>
              <em>She isn't watching TV now.</em>
            </li>
            <li>
              <em>Did they go to school yesterday?</em>
            </li>
            <li>
              <em>Were we reading a book at 6 p.m.?</em>
            </li>
          </ul>
        </div>

        <div className="bg-amber-50/50 rounded-lg p-4">
          <p className="font-semibold mb-2">Ваши предложения:</p>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold mb-1">Present Simple (2):</p>
              <textarea
                className="w-full border-2 border-gray-300 rounded px-3 py-2 min-h-[80px]"
                placeholder="Напишите 2 предложения..."
              />
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">
                Present Continuous (2):
              </p>
              <textarea
                className="w-full border-2 border-gray-300 rounded px-3 py-2 min-h-[80px]"
                placeholder="Напишите 2 предложения..."
              />
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">Past Simple (2):</p>
              <textarea
                className="w-full border-2 border-gray-300 rounded px-3 py-2 min-h-[80px]"
                placeholder="Напишите 2 предложения..."
              />
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">Past Continuous (2):</p>
              <textarea
                className="w-full border-2 border-gray-300 rounded px-3 py-2 min-h-[80px]"
                placeholder="Напишите 2 предложения..."
              />
            </div>
          </div>
        </div>

        <div className="bg-green-50/50 rounded-lg p-4 mt-4">
          <p className="text-sm text-gray-700">
            💡 <strong>Совет:</strong> Это задание для самостоятельной работы.
            Проверьте свои предложения с учителем или используйте онлайн ресурсы
            для проверки грамматики.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 10: Чтение и True/False + Результаты ===== */
interface Step10Props extends TestStepProps {
  checkAnswers: () => void;
  score: number;
  totalQuestions: number;
  resetTest: () => void;
}

function Step10({
  answers,
  handleAnswerChange,
  isCorrect,
  showResults,
  checkAnswers,
  score,
  totalQuestions,
  resetTest,
}: Step10Props) {
  const [showTranslation, setShowTranslation] = React.useState(false);

  const getInputClass = (questionId: string) => {
    const correct = isCorrect(questionId);
    if (correct === null) return "border-gray-300";
    return correct
      ? "border-green-500 bg-green-50"
      : "border-red-500 bg-red-50";
  };

  const percentage =
    totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  return (
    <>
      <UiSection title="Текст для чтения: My Day">
        <div className="bg-blue-50/50 rounded-lg p-6 mb-4">
          <p className="text-zinc-900 leading-relaxed">
            I go to school every day. Now, I am reading a book in the park.
            Yesterday, I played football with my friends. At 5 p.m., I was
            watching TV. My brother went to the shop yesterday. He wasn't
            running at 6 p.m. Do I play football every day? Yes, I do. Was I
            playing football at 5 p.m.? No, I wasn't.
          </p>
        </div>

        <button
          onClick={() => setShowTranslation(!showTranslation)}
          className="mb-4 px-4 py-2 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-900 font-medium transition-colors flex items-center gap-2"
        >
          {showTranslation ? "🔼 Скрыть перевод" : "🔽 Показать перевод"}
        </button>

        {showTranslation && (
          <div className="bg-amber-50/50 rounded-lg p-6 mb-4">
            <p className="font-semibold text-zinc-900 mb-2">Перевод текста:</p>
            <p className="text-zinc-700 leading-relaxed">
              Я хожу в школу каждый день. Сейчас я читаю книгу в парке. Вчера я
              играл в футбол с друзьями. В 5 вечера я смотрел телевизор. Мой
              брат пошёл в магазин вчера. Он не бежал в 6 вечера. Играю ли я в
              футбол каждый день? Да, играю. Играл ли я в футбол в 5 вечера?
              Нет, не играл.
            </p>
          </div>
        )}
      </UiSection>

      <UiSection title="True/False">
        <p className="text-zinc-700 mb-4">
          <strong>Инструкции:</strong> Определите, верны ли утверждения (True)
          или ложны (False).
        </p>

        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${getInputClass("10-1")}`}>
            <p className="mb-2 font-semibold">1. I go to school every day.</p>
            <input
              type="text"
              value={answers["10-1"] || ""}
              onChange={(e) => handleAnswerChange("10-1", e.target.value)}
              disabled={showResults}
              className="border-2 rounded px-3 py-2 w-full bg-transparent"
              placeholder="True или False..."
            />
            {showResults && (
              <p className="mt-2 text-sm text-gray-600">✓ Ответ: True</p>
            )}
          </div>

          <div className={`p-4 rounded-lg ${getInputClass("10-2")}`}>
            <p className="mb-2 font-semibold">
              2. I am reading a book in the park.
            </p>
            <input
              type="text"
              value={answers["10-2"] || ""}
              onChange={(e) => handleAnswerChange("10-2", e.target.value)}
              disabled={showResults}
              className="border-2 rounded px-3 py-2 w-full bg-transparent"
              placeholder="True или False..."
            />
            {showResults && (
              <p className="mt-2 text-sm text-gray-600">✓ Ответ: True</p>
            )}
          </div>

          <div className={`p-4 rounded-lg ${getInputClass("10-3")}`}>
            <p className="mb-2 font-semibold">
              3. I played football yesterday.
            </p>
            <input
              type="text"
              value={answers["10-3"] || ""}
              onChange={(e) => handleAnswerChange("10-3", e.target.value)}
              disabled={showResults}
              className="border-2 rounded px-3 py-2 w-full bg-transparent"
              placeholder="True или False..."
            />
            {showResults && (
              <p className="mt-2 text-sm text-gray-600">✓ Ответ: True</p>
            )}
          </div>

          <div className={`p-4 rounded-lg ${getInputClass("10-4")}`}>
            <p className="mb-2 font-semibold">
              4. I was playing football at 5 p.m.
            </p>
            <input
              type="text"
              value={answers["10-4"] || ""}
              onChange={(e) => handleAnswerChange("10-4", e.target.value)}
              disabled={showResults}
              className="border-2 rounded px-3 py-2 w-full bg-transparent"
              placeholder="True или False..."
            />
            {showResults && (
              <p className="mt-2 text-sm text-gray-600">✓ Ответ: False</p>
            )}
          </div>

          <div className={`p-4 rounded-lg ${getInputClass("10-5")}`}>
            <p className="mb-2 font-semibold">
              5. My brother was running at 6 p.m.
            </p>
            <input
              type="text"
              value={answers["10-5"] || ""}
              onChange={(e) => handleAnswerChange("10-5", e.target.value)}
              disabled={showResults}
              className="border-2 rounded px-3 py-2 w-full bg-transparent"
              placeholder="True или False..."
            />
            {showResults && (
              <p className="mt-2 text-sm text-gray-600">✓ Ответ: False</p>
            )}
          </div>
        </div>
      </UiSection>

      {!showResults ? (
        <div className="mt-8 text-center">
          <button
            onClick={checkAnswers}
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg text-lg transition-colors shadow-lg"
          >
            🎯 Проверить ответы
          </button>
        </div>
      ) : (
        <>
          {/* Modal Results */}
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-[fadeIn_0.3s_ease-in-out]">
              <div className="text-center">
                <div className="mb-4">
                  {percentage >= 80 ? (
                    <div className="text-6xl">🎉</div>
                  ) : percentage >= 60 ? (
                    <div className="text-6xl">👍</div>
                  ) : (
                    <div className="text-6xl">📚</div>
                  )}
                </div>

                <h2 className="text-3xl font-bold mb-2">Результаты теста</h2>

                <div className="my-6">
                  <div className="text-5xl font-bold text-indigo-600 mb-2">
                    {score} / {totalQuestions}
                  </div>
                  <div className="text-2xl font-semibold text-gray-700">
                    {percentage}%
                  </div>
                </div>

                <div className="mb-6">
                  {percentage >= 80 ? (
                    <p className="text-lg text-gray-700">
                      Отлично! Вы отлично знаете времена! 🌟
                    </p>
                  ) : percentage >= 60 ? (
                    <p className="text-lg text-gray-700">
                      Хорошо! Но есть над чем поработать. 💪
                    </p>
                  ) : (
                    <p className="text-lg text-gray-700">
                      Продолжайте практиковаться! Вы на верном пути. 📖
                    </p>
                  )}
                </div>

                <div className="space-y-3">
                  <button
                    onClick={resetTest}
                    className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors"
                  >
                    🔄 Пройти тест заново
                  </button>
                  <button
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="w-full px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition-colors"
                  >
                    📋 Просмотреть ответы
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}


