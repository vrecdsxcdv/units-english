"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function Questions({ step }: Props) {
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
    default:
      return <Step1 />;
  }
}

/* ===== СТРАНИЦА 1: Введение и порядок слов ===== */
function Step1() {
  return (
    <>
      <UiSection title="Questions: Порядок слов в вопросах">
        <div className="bg-gradient-to-br from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border-2 border-indigo-200">
          <p className="text-lg font-semibold text-indigo-900 mb-4">
            Зачем нужны вопросы?
          </p>
          <p className="text-zinc-800 leading-relaxed mb-4">
            Вопросы — это способ получить информацию. В английском языке есть
            строгий порядок слов в вопросах, который отличается от русского.
          </p>
          <p className="text-zinc-800 leading-relaxed">
            Существует два основных типа вопросов:{" "}
            <strong>Yes/No questions</strong>
            (общие вопросы) и <strong>Wh-questions</strong> (специальные
            вопросы).
          </p>
        </div>
      </UiSection>

      <UiSection title="Word Order: Порядок слов в вопросах">
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-sky-200 rounded-lg p-6">
            <h4 className="text-xl font-bold text-sky-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">❓</span>
              <span>Утверждение vs Вопрос</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-5 border border-green-200">
                <h5 className="font-bold text-green-700 mb-3 text-center">
                  УТВЕРЖДЕНИЕ
                </h5>
                <div className="bg-green-50 rounded-lg p-4 mb-3">
                  <p className="text-center font-mono text-sm font-semibold text-green-800">
                    Подлежащее + Глагол + ...
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm font-semibold">
                      <span className="text-green-700">You</span>{" "}
                      <span className="text-blue-700">like</span> coffee.
                    </p>
                    <p className="text-xs text-zinc-600 mt-1">
                      Ты любишь кофе.
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm font-semibold">
                      <span className="text-green-700">She</span>{" "}
                      <span className="text-blue-700">is</span> a teacher.
                    </p>
                    <p className="text-xs text-zinc-600 mt-1">Она учитель.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 border-2 border-indigo-200">
                <h5 className="font-bold text-indigo-700 mb-3 text-center">
                  ВОПРОС
                </h5>
                <div className="bg-indigo-50 rounded-lg p-4 mb-3">
                  <p className="text-center font-mono text-sm font-semibold text-purple-800">
                    Глагол + Подлежащее + ...?
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="bg-purple-100 rounded p-3">
                    <p className="text-sm font-semibold">
                      <span className="text-blue-700">Do</span>{" "}
                      <span className="text-green-700">you</span> like coffee?
                    </p>
                    <p className="text-xs text-zinc-600 mt-1">
                      Ты любишь кофе?
                    </p>
                  </div>
                  <div className="bg-purple-100 rounded p-3">
                    <p className="text-sm font-semibold">
                      <span className="text-blue-700">Is</span>{" "}
                      <span className="text-green-700">she</span> a teacher?
                    </p>
                    <p className="text-xs text-zinc-600 mt-1">Она учитель?</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-cyan-100 border border-cyan-300 rounded-lg p-4">
              <h5 className="font-semibold text-sky-900 mb-2 flex items-center gap-2">
                <span>💡</span>
                <span>Главное правило:</span>
              </h5>
              <p className="text-sm text-zinc-800">
                В вопросе вспомогательный глагол или be/have идёт{" "}
                <strong className="text-indigo-700">ПЕРЕД</strong> подлежащим!
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-300 rounded-lg p-6">
            <h4 className="text-xl font-bold text-slate-900 mb-4">
              Вспомогательные глаголы (Auxiliary Verbs)
            </h4>
            <p className="text-sm text-zinc-800 mb-4">
              Для вопросов используем вспомогательные глаголы:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border-2 border-blue-300">
                <h5 className="font-bold text-blue-800 mb-3 text-center">
                  DO / DOES / DID
                </h5>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Do</strong> — I, you, we, they
                  </p>
                  <p>
                    <strong>Does</strong> — he, she, it
                  </p>
                  <p>
                    <strong>Did</strong> — Past Simple
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-emerald-300">
                <h5 className="font-bold text-emerald-800 mb-3 text-center">
                  BE (AM / IS / ARE)
                </h5>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Am</strong> — I
                  </p>
                  <p>
                    <strong>Is</strong> — he, she, it
                  </p>
                  <p>
                    <strong>Are</strong> — you, we, they
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-indigo-200">
                <h5 className="font-bold text-purple-800 mb-3 text-center">
                  HAVE / HAS / HAD
                </h5>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Have</strong> — I, you, we, they
                  </p>
                  <p>
                    <strong>Has</strong> — he, she, it
                  </p>
                  <p>
                    <strong>Had</strong> — Past Simple
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Примеры вопросов">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 border border-blue-200 rounded-lg p-5">
            <h5 className="font-bold text-blue-900 mb-3">Present Simple:</h5>
            <div className="space-y-2">
              <div className="bg-white rounded p-3">
                <p className="text-sm">
                  <strong className="text-blue-700">Do</strong> you like pizza?
                </p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-sm">
                  <strong className="text-blue-700">Does</strong> she speak
                  English?
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-sky-50 border border-indigo-200 rounded-lg p-5">
            <h5 className="font-bold text-indigo-900 mb-3">Past Simple:</h5>
            <div className="space-y-2">
              <div className="bg-white rounded p-3">
                <p className="text-sm">
                  <strong className="text-indigo-700">Did</strong> you see the
                  movie?
                </p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-sm">
                  <strong className="text-indigo-700">Did</strong> he go to
                  school?
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-sky-50 to-indigo-50 border border-sky-200 rounded-lg p-5">
            <h5 className="font-bold text-sky-900 mb-3">To Be:</h5>
            <div className="space-y-2">
              <div className="bg-white rounded p-3">
                <p className="text-sm">
                  <strong className="text-sky-700">Is</strong> she a doctor?
                </p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-sm">
                  <strong className="text-sky-700">Are</strong> they at
                  home?
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-zinc-50 to-slate-50 border border-zinc-200 rounded-lg p-5">
            <h5 className="font-bold text-slate-900 mb-3">Present Perfect:</h5>
            <div className="space-y-2">
              <div className="bg-white rounded p-3">
                <p className="text-sm">
                  <strong className="text-slate-700">Have</strong> you finished?
                </p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-sm">
                  <strong className="text-slate-700">Has</strong> he arrived?
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <div className="mt-6 bg-gradient-to-r from-indigo-50 via-sky-50 to-blue-50 border border-indigo-200 rounded-lg p-6">
        <h4 className="font-bold text-indigo-900 mb-3 flex items-center gap-2">
          <span>✨</span>
          <span>Запомните:</span>
        </h4>
        <ul className="space-y-2 text-sm text-zinc-800">
          <li className="flex items-start gap-2">
            <span className="text-indigo-600 font-bold text-lg">•</span>
            <span>
              Вопрос ={" "}
              <strong>
                Вспомогательный глагол + Подлежащее + Основной глагол
              </strong>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-indigo-600 font-bold text-lg">•</span>
            <span>
              Не забывайте про вспомогательные глаголы (do, does, did, am, is,
              are)
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-indigo-600 font-bold text-lg">•</span>
            <span>
              Основной глагол в вопросе всегда в <strong>базовой форме</strong>{" "}
              (V1)
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 2: Yes/No Questions ===== */
function Step2() {
  return (
    <>
      <UiSection title="Yes/No Questions: Общие вопросы">
        <div className="bg-gradient-to-br from-cyan-100 via-blue-100 to-purple-100 rounded-lg p-6 mb-6 border border-sky-200">
          <p className="text-lg font-semibold text-sky-900 mb-4">
            Что такое Yes/No Questions?
          </p>
          <p className="text-zinc-800 leading-relaxed mb-4">
            Это вопросы, на которые можно ответить <strong>Yes</strong> (да) или{" "}
            <strong>No</strong> (нет). Они не требуют развёрнутого ответа.
          </p>
        </div>
      </UiSection>

      <UiSection title="Формулы Yes/No Questions">
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 rounded-lg p-6">
            <h4 className="text-xl font-bold text-blue-900 mb-4">
              Present Simple:
            </h4>
            <div className="bg-white rounded-lg p-5 mb-4 border-2 border-blue-300">
              <p className="text-center font-mono text-lg font-bold text-blue-800 mb-2">
                Do/Does + подлежащее + V1?
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-100 rounded-lg p-4">
                <p className="font-semibold text-blue-900 mb-2">Вопрос:</p>
                <p className="text-sm mb-2">
                  <strong>Do you like coffee?</strong>
                </p>
                <p className="text-xs text-zinc-600">Ты любишь кофе?</p>
              </div>
              <div className="bg-emerald-100 rounded-lg p-4">
                <p className="font-semibold text-sky-900 mb-2">Ответы:</p>
                <p className="text-sm">✓ Yes, I do.</p>
                <p className="text-sm">✗ No, I don&apos;t.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-100 border border-indigo-200 rounded-lg p-6">
            <h4 className="text-xl font-bold text-indigo-900 mb-4">
              Past Simple:
            </h4>
            <div className="bg-white rounded-lg p-5 mb-4 border-2 border-indigo-200">
              <p className="text-center font-mono text-lg font-bold text-purple-800 mb-2">
                Did + подлежащее + V1?
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-purple-100 rounded-lg p-4">
                <p className="font-semibold text-indigo-900 mb-2">Вопрос:</p>
                <p className="text-sm mb-2">
                  <strong>Did she call you?</strong>
                </p>
                <p className="text-xs text-zinc-600">Она звонила тебе?</p>
              </div>
              <div className="bg-rose-100 rounded-lg p-4">
                <p className="font-semibold text-slate-900 mb-2">Ответы:</p>
                <p className="text-sm">✓ Yes, she did.</p>
                <p className="text-sm">✗ No, she didn&apos;t.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-teal-100 border border-sky-200 rounded-lg p-6">
            <h4 className="text-xl font-bold text-sky-900 mb-4">
              To Be (Present):
            </h4>
            <div className="bg-white rounded-lg p-5 mb-4 border-2 border-emerald-300">
              <p className="text-center font-mono text-lg font-bold text-emerald-800 mb-2">
                Am/Is/Are + подлежащее?
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-emerald-100 rounded-lg p-4">
                <p className="font-semibold text-sky-900 mb-2">Вопрос:</p>
                <p className="text-sm mb-2">
                  <strong>Is he a teacher?</strong>
                </p>
                <p className="text-xs text-zinc-600">Он учитель?</p>
              </div>
              <div className="bg-cyan-100 rounded-lg p-4">
                <p className="font-semibold text-sky-900 mb-2">Ответы:</p>
                <p className="text-sm">✓ Yes, he is.</p>
                <p className="text-sm">✗ No, he isn&apos;t.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-rose-50 to-orange-100 border border-zinc-200 rounded-lg p-6">
            <h4 className="text-xl font-bold text-slate-900 mb-4">
              Present Continuous:
            </h4>
            <div className="bg-white rounded-lg p-5 mb-4 border-2 border-rose-300">
              <p className="text-center font-mono text-lg font-bold text-rose-800 mb-2">
                Am/Is/Are + подлежащее + V-ing?
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-rose-100 rounded-lg p-4">
                <p className="font-semibold text-slate-900 mb-2">Вопрос:</p>
                <p className="text-sm mb-2">
                  <strong>Are you working now?</strong>
                </p>
                <p className="text-xs text-zinc-600">Ты сейчас работаешь?</p>
              </div>
              <div className="bg-orange-100 rounded-lg p-4">
                <p className="font-semibold text-zinc-900 mb-2">Ответы:</p>
                <p className="text-sm">✓ Yes, I am.</p>
                <p className="text-sm">✗ No, I&apos;m not.</p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Short Answers (Краткие ответы)">
        <div className="bg-gradient-to-r from-indigo-50 to-sky-50 border-2 border-indigo-200 rounded-lg p-6">
          <h4 className="font-bold text-indigo-900 mb-4">
            Как правильно отвечать:
          </h4>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
              <p className="text-sm font-semibold mb-1">
                Q: Do you like coffee?
              </p>
              <p className="text-sm text-blue-700">
                A: Yes, I <strong>do</strong>. / No, I{" "}
                <strong>don&apos;t</strong>.
              </p>
              <p className="text-xs text-zinc-600 mt-1">
                (используем тот же вспомогательный глагол)
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-indigo-400">
              <p className="text-sm font-semibold mb-1">Q: Did she call?</p>
              <p className="text-sm text-indigo-700">
                A: Yes, she <strong>did</strong>. / No, she{" "}
                <strong>didn&apos;t</strong>.
              </p>
              <p className="text-xs text-zinc-600 mt-1">(did, а не does!)</p>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-sky-400">
              <p className="text-sm font-semibold mb-1">Q: Is he happy?</p>
              <p className="text-sm text-sky-700">
                A: Yes, he <strong>is</strong>. / No, he{" "}
                <strong>isn&apos;t</strong>.
              </p>
              <p className="text-xs text-zinc-600 mt-1">(повторяем форму be)</p>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-slate-400">
              <p className="text-sm font-semibold mb-1">
                Q: Have you finished?
              </p>
              <p className="text-sm text-slate-700">
                A: Yes, I <strong>have</strong>. / No, I{" "}
                <strong>haven&apos;t</strong>.
              </p>
              <p className="text-xs text-zinc-600 mt-1">(Present Perfect)</p>
            </div>
          </div>
        </div>
      </UiSection>

      <div className="mt-6 bg-gradient-to-br from-zinc-50 to-slate-50 border border-zinc-200 rounded-lg p-6">
        <h4 className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
          <span>⚠️</span>
          <span>Важные правила:</span>
        </h4>
        <ul className="space-y-2 text-sm text-zinc-800">
          <li className="flex items-start gap-2">
            <span className="text-zinc-600 font-bold">1.</span>
            <span>
              В кратком ответе используем тот же вспомогательный глагол, что и в
              вопросе
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-zinc-600 font-bold">2.</span>
            <span>
              Нельзя говорить: &quot;Yes, I do like&quot; или &quot;No, I
              don&apos;t like&quot; в кратком ответе
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-zinc-600 font-bold">3.</span>
            <span>Основной глагол НЕ повторяется в кратком ответе</span>
          </li>
        </ul>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 3: Wh-Questions ===== */
function Step3() {
  return (
    <>
      <UiSection title="Wh-Questions: Специальные вопросы">
        <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 rounded-lg p-6 mb-6 border-2 border-indigo-400">
          <p className="text-lg font-semibold text-indigo-900 mb-4">
            Что такое Wh-Questions?
          </p>
          <p className="text-zinc-800 leading-relaxed mb-4">
            Это вопросы, которые начинаются с вопросительных слов (Question
            Words):
            <strong> What, Where, When, Who, Why, How</strong> и других.
          </p>
          <p className="text-zinc-800 leading-relaxed">
            На такие вопросы нельзя ответить просто &quot;Yes&quot; или
            &quot;No&quot; — нужен развёрнутый ответ.
          </p>
        </div>
      </UiSection>

      <UiSection title="Формула Wh-Questions">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-indigo-200 rounded-lg p-6 mb-6">
          <div className="bg-white rounded-lg p-6 mb-4 border-2 border-indigo-200">
            <p className="text-center font-mono text-xl font-bold text-indigo-900 mb-3">
              WH-word + Вспомогательный глагол + Подлежащее + Глагол?
            </p>
            <p className="text-center text-sm text-zinc-600">
              Вопросительное слово + (do/does/did/is/are...) + подлежащее +
              основной глагол
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg p-5 border border-sky-200">
              <h5 className="font-bold text-sky-900 mb-3">Примеры:</h5>
              <div className="space-y-2 text-sm">
                <p>
                  <strong className="text-indigo-700">What</strong>{" "}
                  <strong className="text-blue-600">do</strong>{" "}
                  <strong className="text-green-600">you</strong> want?
                </p>
                <p>
                  <strong className="text-indigo-700">Where</strong>{" "}
                  <strong className="text-blue-600">does</strong>{" "}
                  <strong className="text-green-600">she</strong> live?
                </p>
                <p>
                  <strong className="text-indigo-700">When</strong>{" "}
                  <strong className="text-blue-600">did</strong>{" "}
                  <strong className="text-green-600">they</strong> arrive?
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-zinc-50 to-slate-50 rounded-lg p-5 border-2 border-rose-300">
              <h5 className="font-bold text-slate-900 mb-3">С глаголом BE:</h5>
              <div className="space-y-2 text-sm">
                <p>
                  <strong className="text-indigo-700">Where</strong>{" "}
                  <strong className="text-blue-600">is</strong>{" "}
                  <strong className="text-green-600">he</strong>?
                </p>
                <p>
                  <strong className="text-indigo-700">Who</strong>{" "}
                  <strong className="text-blue-600">are</strong>{" "}
                  <strong className="text-green-600">you</strong>?
                </p>
                <p>
                  <strong className="text-indigo-700">Why</strong>{" "}
                  <strong className="text-blue-600">was</strong>{" "}
                  <strong className="text-green-600">she</strong> late?
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Основные Wh-Words">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 border border-blue-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-white">?</span>
              </div>
              <div>
                <h5 className="text-xl font-bold text-blue-900">WHAT</h5>
                <p className="text-sm text-zinc-600">Что? / Какой?</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="bg-white rounded p-3">
                <p className="font-semibold">What do you do?</p>
                <p className="text-xs text-zinc-600">Чем ты занимаешься?</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="font-semibold">What time is it?</p>
                <p className="text-xs text-zinc-600">Который час?</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-sky-50 border border-indigo-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-white">📍</span>
              </div>
              <div>
                <h5 className="text-xl font-bold text-indigo-900">WHERE</h5>
                <p className="text-sm text-zinc-600">Где? / Куда?</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="bg-white rounded p-3">
                <p className="font-semibold">Where do you live?</p>
                <p className="text-xs text-zinc-600">Где ты живёшь?</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="font-semibold">Where is she going?</p>
                <p className="text-xs text-zinc-600">Куда она идёт?</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-sky-50 to-indigo-50 border border-sky-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-white">⏰</span>
              </div>
              <div>
                <h5 className="text-xl font-bold text-sky-900">WHEN</h5>
                <p className="text-sm text-zinc-600">Когда?</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="bg-white rounded p-3">
                <p className="font-semibold">When did you arrive?</p>
                <p className="text-xs text-zinc-600">Когда ты приехал?</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="font-semibold">When is your birthday?</p>
                <p className="text-xs text-zinc-600">
                  Когда твой день рождения?
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-zinc-50 to-slate-50 border border-zinc-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-slate-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-white">👤</span>
              </div>
              <div>
                <h5 className="text-xl font-bold text-slate-900">WHO</h5>
                <p className="text-sm text-zinc-600">Кто?</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="bg-white rounded p-3">
                <p className="font-semibold">Who is that man?</p>
                <p className="text-xs text-zinc-600">Кто тот мужчина?</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="font-semibold">Who called you?</p>
                <p className="text-xs text-zinc-600">Кто тебе звонил?</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-zinc-50 to-slate-50 border border-zinc-200 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-zinc-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-white">💭</span>
              </div>
              <div>
                <h5 className="text-xl font-bold text-zinc-900">WHY</h5>
                <p className="text-sm text-zinc-600">Почему? / Зачем?</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="bg-white rounded p-3">
                <p className="font-semibold">Why are you sad?</p>
                <p className="text-xs text-zinc-600">Почему ты грустный?</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="font-semibold">Why did she leave?</p>
                <p className="text-xs text-zinc-600">Почему она ушла?</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-100 to-blue-100 border-2 border-indigo-400 rounded-lg p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-white">🔧</span>
              </div>
              <div>
                <h5 className="text-xl font-bold text-indigo-900">HOW</h5>
                <p className="text-sm text-zinc-600">Как?</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="bg-white rounded p-3">
                <p className="font-semibold">How do you spell it?</p>
                <p className="text-xs text-zinc-600">Как это пишется?</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="font-semibold">How are you?</p>
                <p className="text-xs text-zinc-600">Как дела?</p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <div className="mt-6 bg-gradient-to-r from-cyan-100 via-blue-100 to-purple-100 border border-indigo-200 rounded-lg p-6">
        <h4 className="font-bold text-sky-900 mb-3 flex items-center gap-2">
          <span>💡</span>
          <span>Важно знать:</span>
        </h4>
        <ul className="space-y-2 text-sm text-zinc-800">
          <li className="flex items-start gap-2">
            <span className="text-sky-600 font-bold text-lg">•</span>
            <span>
              Wh-Questions требуют <strong>развёрнутого ответа</strong>, а не
              Yes/No
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-sky-600 font-bold text-lg">•</span>
            <span>
              Порядок слов:{" "}
              <strong>Wh-word + вспомогательный + подлежащее + глагол</strong>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-sky-600 font-bold text-lg">•</span>
            <span>
              С глаголом BE вспомогательный глагол НЕ нужен:{" "}
              <em>Where is he?</em> (не &quot;Where does he is?&quot;)
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 4: Question Words (Подробно) ===== */
function Step4() {
  return (
    <>
      <UiSection title="Question Words: Детальное изучение">
        <div className="bg-gradient-to-r from-sky-50 via-indigo-50 to-blue-50 rounded-lg p-6 mb-6 border border-indigo-200">
          <p className="text-zinc-800 leading-relaxed">
            Разберём каждое вопросительное слово подробнее, включая их
            комбинации и особые случаи использования.
          </p>
        </div>
      </UiSection>

      <div className="space-y-6">
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-indigo-200 rounded-lg p-6">
          <h4 className="text-xl font-bold text-indigo-900 mb-4">
            HOW + прилагательное/наречие:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
              <p className="font-semibold text-blue-900 mb-2">How old...?</p>
              <p className="text-sm mb-1">Сколько лет?</p>
              <p className="text-xs text-zinc-600 italic">How old are you?</p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-sky-400">
              <p className="font-semibold text-sky-900 mb-2">
                How many...?
              </p>
              <p className="text-sm mb-1">Сколько? (исчисляемые)</p>
              <p className="text-xs text-zinc-600 italic">How many books?</p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-slate-400">
              <p className="font-semibold text-slate-900 mb-2">How much...?</p>
              <p className="text-sm mb-1">Сколько? (неисчисляемые)</p>
              <p className="text-xs text-zinc-600 italic">How much water?</p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-zinc-400">
              <p className="font-semibold text-zinc-900 mb-2">How far...?</p>
              <p className="text-sm mb-1">Как далеко?</p>
              <p className="text-xs text-zinc-600 italic">How far is it?</p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-sky-400">
              <p className="font-semibold text-sky-900 mb-2">How long...?</p>
              <p className="text-sm mb-1">Как долго? / Какой длины?</p>
              <p className="text-xs text-zinc-600 italic">
                How long did it take?
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-indigo-400">
              <p className="font-semibold text-indigo-900 mb-2">
                How often...?
              </p>
              <p className="text-sm mb-1">Как часто?</p>
              <p className="text-xs text-zinc-600 italic">
                How often do you exercise?
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border border-sky-200 rounded-lg p-6">
          <h4 className="text-xl font-bold text-sky-900 mb-4">
            WHICH vs WHAT:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-5 border-2 border-blue-300">
              <h5 className="font-bold text-blue-900 mb-3">WHICH (Который?)</h5>
              <p className="text-sm text-indigo-700 mb-3">
                Используем, когда есть <strong>ограниченный выбор</strong>
              </p>
              <div className="space-y-2 text-sm">
                <div className="bg-blue-50 rounded p-2">
                  <p className="font-semibold">Which color do you prefer?</p>
                  <p className="text-xs text-zinc-600">
                    (из этих нескольких цветов)
                  </p>
                </div>
                <div className="bg-blue-50 rounded p-2">
                  <p className="font-semibold">Which bus goes to the city?</p>
                  <p className="text-xs text-zinc-600">
                    (из автобусов на остановке)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-indigo-200">
              <h5 className="font-bold text-indigo-900 mb-3">
                WHAT (Что? / Какой?)
              </h5>
              <p className="text-sm text-indigo-700 mb-3">
                Используем, когда <strong>выбор неограничен</strong>
              </p>
              <div className="space-y-2 text-sm">
                <div className="bg-indigo-50 rounded p-2">
                  <p className="font-semibold">What color is your car?</p>
                  <p className="text-xs text-zinc-600">
                    (любой цвет в принципе)
                  </p>
                </div>
                <div className="bg-indigo-50 rounded p-2">
                  <p className="font-semibold">What do you want?</p>
                  <p className="text-xs text-zinc-600">(что угодно)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-300 rounded-lg p-6">
          <h4 className="text-xl font-bold text-sky-900 mb-4">
            WHOSE (Чей?):
          </h4>
          <p className="text-sm text-indigo-700 mb-4">
            Спрашиваем о принадлежности (кому принадлежит)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm font-semibold mb-2">Whose book is this?</p>
              <p className="text-xs text-zinc-600">Чья это книга?</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm font-semibold mb-2">
                Whose car is parked outside?
              </p>
              <p className="text-xs text-zinc-600">
                Чья машина припаркована снаружи?
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-zinc-50 to-slate-50 border-2 border-rose-300 rounded-lg p-6">
          <h4 className="text-xl font-bold text-slate-900 mb-4">
            Subject Questions (Вопросы к подлежащему):
          </h4>
          <p className="text-sm text-indigo-700 mb-4">
            Когда WHO или WHAT — это подлежащее, <strong>НЕ используем</strong>{" "}
            вспомогательный глагол!
          </p>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
              <p className="text-sm font-semibold mb-1 text-green-700">
                ✓ Who called you?
              </p>
              <p className="text-xs text-zinc-600">
                (Кто тебе звонил? — WHO = подлежащее)
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
              <p className="text-sm font-semibold mb-1 text-red-700">
                ✗ Who did call you?
              </p>
              <p className="text-xs text-zinc-600">
                (Неправильно! Не нужен did)
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
              <p className="text-sm font-semibold mb-1 text-green-700">
                ✓ What happened?
              </p>
              <p className="text-xs text-zinc-600">
                (Что случилось? — WHAT = подлежащее)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-gradient-to-r from-zinc-50 to-slate-50 border border-zinc-200 rounded-lg p-6">
        <h4 className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
          <span>📝</span>
          <span>Запомните:</span>
        </h4>
        <ul className="space-y-2 text-sm text-zinc-800">
          <li className="flex items-start gap-2">
            <span className="text-zinc-600 font-bold">•</span>
            <span>
              <strong>How many</strong> + исчисляемые (books, people)
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-zinc-600 font-bold">•</span>
            <span>
              <strong>How much</strong> + неисчисляемые (water, money)
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-zinc-600 font-bold">•</span>
            <span>
              <strong>Which</strong> = ограниченный выбор, <strong>What</strong>{" "}
              = неограниченный
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-zinc-600 font-bold">•</span>
            <span>
              Вопросы к подлежащему (Who/What = subject) <strong>БЕЗ</strong>{" "}
              вспомогательного глагола
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 5: ДЗ - Упражнения ===== */
function Step5() {
  const exercise1: FillItem[] = [
    {
      left: "1.",
      right: "do you live? — In London.",
      answers: ["Where"],
      explanation: "Где? → Where",
    },
    {
      left: "2.",
      right: "is your name? — My name is Anna.",
      answers: ["What"],
      explanation: "Что/Какое? → What",
    },
    {
      left: "3.",
      right: "did you arrive? — Yesterday.",
      answers: ["When"],
      explanation: "Когда? → When",
    },
    {
      left: "4.",
      right: "are you sad? — Because I failed the test.",
      answers: ["Why"],
      explanation: "Почему? → Why",
    },
    {
      left: "5.",
      right: "is that man? — He's my teacher.",
      answers: ["Who"],
      explanation: "Кто? → Who",
    },
  ];

  const exercise2: FillItem[] = [
    {
      left: "6.",
      right: "old are you? — I'm 25.",
      answers: ["How"],
      explanation: "How old = Сколько лет",
    },
    {
      left: "7.",
      right: "books do you have? — I have five books.",
      answers: ["How many"],
      explanation: "Исчисляемые → How many",
    },
    {
      left: "8.",
      right: "water do you need? — Two glasses.",
      answers: ["How much"],
      explanation: "Неисчисляемое → How much",
    },
    {
      left: "9.",
      right: "car is yours? — The blue one.",
      answers: ["Which"],
      explanation: "Который (из этих)? → Which",
    },
    {
      left: "10.",
      right: "bag is this? — It's Mary's.",
      answers: ["Whose"],
      explanation: "Чей? → Whose",
    },
  ];

  return (
    <>
      <UiSection title="ДЗ: Домашнее задание — Упражнения">
        <div className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 rounded-lg p-6 mb-6 border-2 border-indigo-400">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">📚</span>
            <h3 className="text-xl font-bold text-indigo-900">
              Домашнее задание
            </h3>
          </div>
          <p className="text-zinc-800 leading-relaxed">
            Выполните упражнения, чтобы закрепить знания о вопросах и
            вопросительных словах. Это важно для свободного общения на
            английском!
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="ДЗ - Упражнение 1: Вопросительные слова"
        instruction="Вставьте правильное вопросительное слово (What, Where, When, Who, Why)."
        items={exercise1}
      />

      <CheckableExercise
        title="ДЗ - Упражнение 2: How + другие слова"
        instruction="Заполните пропуски (How, How many, How much, Which, Whose)."
        items={exercise2}
      />

      <UiSection title="ДЗ - Задание 3: Составьте вопросы">
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border border-sky-200 rounded-lg p-6">
          <h4 className="font-semibold text-sky-900 mb-4">
            Составьте вопросы из слов в правильном порядке:
          </h4>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm font-semibold mb-2 text-indigo-700">
                1. you / do / what / want / ?
              </p>
              <p className="text-sm text-green-700">✓ What do you want?</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm font-semibold mb-2 text-indigo-700">
                2. live / where / she / does / ?
              </p>
              <p className="text-sm text-green-700">✓ Where does she live?</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm font-semibold mb-2 text-indigo-700">
                3. they / when / did / arrive / ?
              </p>
              <p className="text-sm text-green-700">✓ When did they arrive?</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm font-semibold mb-2 text-indigo-700">
                4. is / he / who / ?
              </p>
              <p className="text-sm text-green-700">✓ Who is he?</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm font-semibold mb-2 text-indigo-700">
                5. often / how / you / exercise / do / ?
              </p>
              <p className="text-sm text-green-700">
                ✓ How often do you exercise?
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="ДЗ - Задание 4: Найдите ошибки">
        <div className="bg-gradient-to-br from-zinc-50 to-slate-50 border-2 border-rose-300 rounded-lg p-6">
          <h4 className="font-semibold text-slate-900 mb-4">
            Исправьте ошибки в вопросах:
          </h4>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm font-semibold mb-1 text-red-700">
                ✗ Where you live?
              </p>
              <p className="text-sm text-green-700">✓ Where do you live?</p>
              <p className="text-xs text-zinc-600 mt-1">
                (нужен вспомогательный глагол do)
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm font-semibold mb-1 text-red-700">
                ✗ What she wants?
              </p>
              <p className="text-sm text-green-700">✓ What does she want?</p>
              <p className="text-xs text-zinc-600 mt-1">
                (нужен вспомогательный глагол does)
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm font-semibold mb-1 text-red-700">
                ✗ Who did call you?
              </p>
              <p className="text-sm text-green-700">✓ Who called you?</p>
              <p className="text-xs text-zinc-600 mt-1">
                (вопрос к подлежащему — did не нужен)
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="text-sm font-semibold mb-1 text-red-700">
                ✗ How much books do you have?
              </p>
              <p className="text-sm text-green-700">
                ✓ How many books do you have?
              </p>
              <p className="text-xs text-zinc-600 mt-1">
                (books — исчисляемое → how many)
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <div className="mt-6 bg-gradient-to-r from-indigo-50 to-sky-50 border border-indigo-200 rounded-lg p-6">
        <h4 className="font-bold text-indigo-900 mb-3 flex items-center gap-2">
          <span>💪</span>
          <span>Советы для выполнения ДЗ:</span>
        </h4>
        <ul className="space-y-2 text-sm text-zinc-800">
          <li>
            • Всегда проверяйте порядок слов: Wh-word + вспомогательный +
            подлежащее
          </li>
          <li>• Помните про вспомогательные глаголы (do/does/did)</li>
          <li>
            • Вопросы к подлежащему (Who/What) БЕЗ вспомогательного глагола
          </li>
          <li>• С глаголом BE вспомогательный глагол не нужен</li>
        </ul>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 6: Итоговый тест ===== */
function Step6() {
  const finalTest: FillItem[] = [
    {
      left: "1.",
      right: "is your favorite color? — Blue.",
      answers: ["What"],
      explanation: "Какой? → What",
    },
    {
      left: "2.",
      right: "do you go to work? — By bus.",
      answers: ["How"],
      explanation: "Как? → How",
    },
    {
      left: "3.",
      right: "does she live? — In Paris.",
      answers: ["Where"],
      explanation: "Где? → Where",
    },
    {
      left: "4.",
      right: "called you last night? — My mother.",
      answers: ["Who"],
      explanation: "Кто? (подлежащее) → Who (без did!)",
    },
    {
      left: "5.",
      right: "is your birthday? — In May.",
      answers: ["When"],
      explanation: "Когда? → When",
    },
    {
      left: "6.",
      right: "didn't you come? — I was sick.",
      answers: ["Why"],
      explanation: "Почему? → Why",
    },
    {
      left: "7.",
      right: "students are in your class? — Twenty.",
      answers: ["How many"],
      explanation: "Сколько (исчисляемые)? → How many",
    },
    {
      left: "8.",
      right: "book is yours? — The red one.",
      answers: ["Which"],
      explanation: "Который? → Which",
    },
    {
      left: "9.",
      right: "phone is this? — It's John's.",
      answers: ["Whose"],
      explanation: "Чей? → Whose",
    },
    {
      left: "10.",
      right: "often do you exercise? — Three times a week.",
      answers: ["How"],
      explanation: "Как часто? → How often",
    },
  ];

  return (
    <>
      <UiSection title="Итоговый тест: Questions">
        <div className="bg-gradient-to-br from-indigo-50 via-sky-50 to-blue-50 rounded-lg p-6 mb-6 border border-indigo-200">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🎯</div>
            <div>
              <h3 className="text-xl font-bold text-indigo-900 mb-2">
                Проверьте свои знания!
              </h3>
              <p className="text-zinc-800 leading-relaxed">
                Пройдите финальный тест, чтобы убедиться, что вы усвоили порядок
                слов в вопросах и все вопросительные слова.
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <CheckableExercise
        title="Финальный тест"
        instruction="Вставьте правильное вопросительное слово."
        items={finalTest}
      />

      <UiSection title="Итоговая таблица: Question Words">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-purple-200 via-pink-200 to-rose-200">
                <th className="border border-indigo-200 p-3 text-left font-bold text-indigo-900">
                  Слово
                </th>
                <th className="border border-indigo-200 p-3 text-left font-bold text-indigo-900">
                  Перевод
                </th>
                <th className="border border-indigo-200 p-3 text-left font-bold text-indigo-900">
                  Пример
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["What", "Что? / Какой?", "What do you want?"],
                ["Where", "Где? / Куда?", "Where do you live?"],
                ["When", "Когда?", "When did you arrive?"],
                ["Who", "Кто?", "Who is that man?"],
                ["Why", "Почему?", "Why are you sad?"],
                ["How", "Как?", "How are you?"],
                ["Which", "Который?", "Which color do you prefer?"],
                ["Whose", "Чей?", "Whose book is this?"],
                ["How many", "Сколько? (исч.)", "How many books?"],
                ["How much", "Сколько? (неисч.)", "How much water?"],
                ["How old", "Сколько лет?", "How old are you?"],
                ["How often", "Как часто?", "How often do you go?"],
              ].map(([word, translation, example], idx) => (
                <tr
                  key={word}
                  className={idx % 2 === 0 ? "bg-white" : "bg-indigo-50"}
                >
                  <td className="border border-indigo-200 p-3 font-semibold text-indigo-700">
                    {word}
                  </td>
                  <td className="border border-indigo-200 p-3">
                    {translation}
                  </td>
                  <td className="border border-indigo-200 p-3 font-mono text-sm">
                    {example}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </UiSection>

      <div className="mt-6 space-y-4">
        <div className="bg-gradient-to-r from-cyan-100 to-blue-100 border border-indigo-200 rounded-lg p-6">
          <h4 className="font-bold text-sky-900 mb-3 flex items-center gap-2">
            <span>🎓</span>
            <span>Ключевые выводы:</span>
          </h4>
          <ul className="space-y-2 text-sm text-zinc-800">
            <li className="flex items-start gap-2">
              <span className="text-sky-600 font-bold text-lg">•</span>
              <span>
                <strong>Порядок слов в вопросе:</strong> Вспомогательный глагол
                + Подлежащее + Глагол
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-600 font-bold text-lg">•</span>
              <span>
                <strong>Yes/No questions:</strong> начинаются с вспомогательного
                глагола
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-600 font-bold text-lg">•</span>
              <span>
                <strong>Wh-questions:</strong> начинаются с вопросительного
                слова
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-600 font-bold text-lg">•</span>
              <span>
                <strong>Вопросы к подлежащему</strong> (Who/What = subject) БЕЗ
                вспомогательного глагола
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-600 font-bold text-lg">•</span>
              <span>
                <strong>С глаголом BE</strong> вспомогательный глагол не нужен
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-sky-50 via-indigo-50 to-blue-50 rounded-lg p-6 border border-sky-200">
          <h4 className="font-bold text-sky-900 mb-3 flex items-center gap-2">
            <span>✨</span>
            <span>Отличная работа!</span>
          </h4>
          <p className="text-sm text-zinc-800">
            Теперь вы знаете, как правильно строить вопросы на английском языке!
            Продолжайте практиковаться, задавая вопросы в реальных разговорах.
            Помните: правильный порядок слов — это ключ к грамотной речи!
          </p>
        </div>
      </div>
    </>
  );
}
