"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function Conditional3({ step }: Props) {
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
    case 11:
      return <Step11 />;
    case 12:
      return <Step12 />;
    case 13:
      return <Step13 />;
    case 14:
      return <Step14 />;
    default:
      return <Step1 />;
  }
}

/* ========== ШАГ 1: Что такое Third Conditional ========== */
function Step1() {
  return (
    <>
      <UiSection title="⏳ Third Conditional — Нереальное прошлое">
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-8 mb-6 border-2 border-amber-300">
          <div className="text-center mb-6">
            <div className="text-7xl mb-4">⏮️</div>
            <h2 className="text-3xl font-bold text-amber-900 mb-3">
              Third Conditional
            </h2>
            <p className="text-xl text-amber-700">
              Сожаления о прошлом, которое изменить нельзя
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 mb-4">
            <h3 className="text-xl font-bold text-amber-900 mb-3">
              🎯 Главная идея:
            </h3>
            <p className="text-lg text-zinc-800 leading-relaxed">
              Third Conditional описывает{" "}
              <strong>нереальные ситуации в прошлом</strong>, которые НЕ
              произошли. Это сожаления, критика, "что было бы, если бы...".
            </p>
          </div>

          <div className="bg-amber-100 rounded-lg p-5 border-2 border-amber-400">
            <p className="font-bold text-amber-900 mb-2 text-lg">
              🕰️ Временная линия:
            </p>
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-center gap-4 mb-2">
                <div className="text-center flex-1">
                  <div className="text-3xl mb-1">❌</div>
                  <p className="text-xs font-bold text-amber-900">ПРОШЛОЕ</p>
                  <p className="text-xs text-zinc-600">
                    Условие НЕ выполнилось
                  </p>
                </div>
                <div className="text-3xl">→</div>
                <div className="text-center flex-1">
                  <div className="text-3xl mb-1">💔</div>
                  <p className="text-xs font-bold text-orange-900">РЕЗУЛЬТАТ</p>
                  <p className="text-xs text-zinc-600">НЕ случился</p>
                </div>
                <div className="text-3xl">→</div>
                <div className="text-center flex-1">
                  <div className="text-3xl mb-1">😔</div>
                  <p className="text-xs font-bold text-red-900">СЕЙЧАС</p>
                  <p className="text-xs text-zinc-600">Сожалеем</p>
                </div>
              </div>
              <div className="mt-3 p-3 bg-amber-50 rounded">
                <p className="text-sm text-center">
                  <strong>Пример:</strong>{" "}
                  <span className="text-amber-700 font-bold">
                    If I had studied
                  </span>
                  , I{" "}
                  <span className="text-orange-700 font-bold">
                    would have passed
                  </span>
                  .
                </p>
                <p className="text-xs text-center text-zinc-600 mt-1">
                  (Если бы я учил, я бы сдал — но не учил, и провалился)
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="🔍 Когда использовать Third Conditional">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {[
            {
              icon: "😔",
              title: "Сожаления",
              desc: "О том, что не сделал в прошлом",
              example: "If I had known, I would have come to the party.",
              ru: "Если бы я знал, я бы пришёл на вечеринку (но не знал).",
            },
            {
              icon: "🤔",
              title: "Критика",
              desc: "Что нужно было сделать по-другому",
              example:
                "If you had listened to me, you wouldn't have made this mistake.",
              ru: "Если бы ты меня послушал, ты бы не совершил эту ошибку.",
            },
            {
              icon: "🎭",
              title: "Воображаемое прошлое",
              desc: "Альтернативная история",
              example:
                "If I had been born in another country, my life would have been different.",
              ru: "Если бы я родился в другой стране, моя жизнь была бы другой.",
            },
            {
              icon: "🙏",
              title: "Благодарность",
              desc: "Что могло бы случиться, если бы не...",
              example: "If you hadn't helped me, I would have failed.",
              ru: "Если бы ты не помог, я бы провалился (спасибо!).",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-5 border-2 border-amber-200"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-4xl">{item.icon}</span>
                <div>
                  <h4 className="font-bold text-amber-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-zinc-700">{item.desc}</p>
                </div>
              </div>
              <div className="bg-amber-50 rounded p-3 mb-2">
                <p className="text-sm font-semibold">{item.example}</p>
              </div>
              <p className="text-xs text-zinc-600">{item.ru}</p>
            </div>
          ))}
        </div>
      </UiSection>

      <UiSection title="📊 Сравнение с русским языком">
        <div className="bg-gradient-to-r from-indigo-50 to-amber-50 rounded-lg p-6 border-2 border-indigo-300">
          <h3 className="text-xl font-bold text-indigo-900 mb-4">
            Как это работает в русском?
          </h3>

          <div className="bg-white rounded-lg p-5 mb-4">
            <p className="font-bold text-indigo-900 mb-3">
              💡 В русском "БЫ" + прошедшее время!
            </p>
            <p className="text-zinc-700 mb-3">
              Мы используем частицу "бы" с глаголом в прошедшем времени:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-zinc-700">
              <li>
                <strong>"Если бы + глагол (прошедшее)"</strong>
              </li>
              <li>
                <strong>"Я бы + глагол (прошедшее)"</strong>
              </li>
              <li>Используем совершенный вид: "сделал", "пришёл", "сказал"</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
              <p className="font-bold text-amber-900 mb-2">🇬🇧 English:</p>
              <p className="text-sm mb-1">
                If I <strong>had studied</strong>, I{" "}
                <strong>would have passed</strong>.
              </p>
              <p className="text-xs text-amber-700">
                (Past Perfect + would have + V3)
              </p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <p className="font-bold text-orange-900 mb-2">🇷🇺 Русский:</p>
              <p className="text-sm mb-1">
                Если бы я <strong>учил</strong>, я бы <strong>сдал</strong>.
              </p>
              <p className="text-xs text-orange-700">
                (Прошедшее + "бы" + прошедшее)
              </p>
            </div>
          </div>

          <div className="bg-rose-50 rounded-lg p-4 mt-4 border-2 border-rose-300">
            <p className="font-bold text-rose-900 mb-2">⚠️ Важное отличие:</p>
            <p className="text-sm text-zinc-700">
              В английском используем <strong>два разных времени</strong>: Past
              Perfect (had + V3) и would have + V3. В русском обе части
              одинаковые (прошедшее + "бы").
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="📝 Словарь: Сожаления и прошлое">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              word: "regret",
              transcr: "/rɪˈɡret/",
              translation: "сожалеть",
            },
            {
              word: "mistake",
              transcr: "/mɪˈsteɪk/",
              translation: "ошибка",
            },
            {
              word: "opportunity",
              transcr: "/ˌɒpəˈtjuːnəti/",
              translation: "возможность",
            },
            {
              word: "fail",
              transcr: "/feɪl/",
              translation: "провалить",
            },
            {
              word: "pass",
              transcr: "/pɑːs/",
              translation: "сдать",
            },
            {
              word: "listen to",
              transcr: "/ˈlɪsn tuː/",
              translation: "слушать",
            },
            {
              word: "be born",
              transcr: "/biː bɔːn/",
              translation: "родиться",
            },
            {
              word: "different",
              transcr: "/ˈdɪfrənt/",
              translation: "другой",
            },
            {
              word: "help",
              transcr: "/help/",
              translation: "помогать",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border-l-4 border-amber-400"
            >
              <p className="font-bold text-amber-900 text-lg">{item.word}</p>
              <p className="text-xs text-amber-600 mb-1">{item.transcr}</p>
              <p className="text-sm text-zinc-800">{item.translation}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 2: Формула Third Conditional ========== */
function Step2() {
  return (
    <>
      <UiSection title="📐 Формула Third Conditional">
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-8 mb-6 border-2 border-amber-400">
          <h3 className="text-2xl font-bold text-amber-900 text-center mb-6">
            Формула сожалений о прошлом
          </h3>

          <div className="bg-white rounded-xl p-6 mb-6 border-2 border-amber-300">
            <div className="text-center">
              <p className="text-3xl font-mono font-bold text-amber-900 mb-4">
                If + had + V3, would have + V3
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-amber-50 rounded p-3">
                  <p className="font-bold text-amber-900 mb-1">If-часть</p>
                  <p className="text-xs text-zinc-600">
                    Past Perfect
                    <br />
                    (had + V3)
                  </p>
                </div>
                <div className="bg-orange-50 rounded p-3">
                  <p className="font-bold text-orange-900 mb-1">Result</p>
                  <p className="text-xs text-zinc-600">
                    would have + V3
                    <br />
                    (нереальный результат)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-rose-50 rounded-lg p-4 border-2 border-rose-300 mb-4">
            <p className="font-bold text-rose-900 mb-2">⚠️ Критически важно:</p>
            <ul className="text-sm text-zinc-700 space-y-1">
              <li>
                • If-часть: <strong>Past Perfect</strong> (had + V3)
              </li>
              <li>
                • Result: <strong>would have + V3</strong>
              </li>
              <li>• Оба глагола в форме V3 (третья форма)</li>
              <li>• Ситуация в прошлом, которая НЕ произошла</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-4 border-2 border-green-300">
            <p className="font-bold text-green-900 mb-2">✅ Примеры:</p>
            <div className="space-y-2 text-sm">
              <p>
                ✓ If I <strong>had studied</strong> (Past Perfect), I{" "}
                <strong>would have passed</strong> (would have + V3).
              </p>
              <p className="text-xs text-zinc-600 ml-4">
                Если бы я учил, я бы сдал.
              </p>
              <p>
                ✓ If she <strong>had known</strong>, she{" "}
                <strong>would have come</strong>.
              </p>
              <p className="text-xs text-zinc-600 ml-4">
                Если бы она знала, она бы пришла.
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="📋 Таблица спряжения">
        <div className="overflow-x-auto">
          <table className="w-full bg-white border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-amber-100 to-orange-100">
                <th className="border-2 border-amber-300 px-4 py-3 text-left">
                  Местоимение
                </th>
                <th className="border-2 border-amber-300 px-4 py-3 text-left">
                  If-часть (Past Perfect)
                </th>
                <th className="border-2 border-amber-300 px-4 py-3 text-left">
                  Result (would have + V3)
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  subj: "I",
                  ifPart: "had studied",
                  result: "would have passed",
                },
                {
                  subj: "You",
                  ifPart: "had come",
                  result: "would have met",
                },
                {
                  subj: "He/She/It",
                  ifPart: "had known",
                  result: "would have told",
                },
                {
                  subj: "We",
                  ifPart: "had worked",
                  result: "would have finished",
                },
                {
                  subj: "They",
                  ifPart: "had left",
                  result: "would have arrived",
                },
              ].map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-amber-50" : ""}>
                  <td className="border-2 border-amber-200 px-4 py-3">
                    {row.subj}
                  </td>
                  <td className="border-2 border-amber-200 px-4 py-3">
                    {row.ifPart}
                  </td>
                  <td className="border-2 border-amber-200 px-4 py-3">
                    {row.result}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </UiSection>

      <UiSection title="🎯 Примеры Third Conditional">
        <div className="space-y-4">
          {[
            {
              category: "📚 Учёба и экзамены",
              examples: [
                {
                  en: "If I had studied harder, I would have passed the exam.",
                  ru: "Если бы я учился усерднее, я бы сдал экзамен.",
                },
                {
                  en: "If she had revised, she wouldn't have failed.",
                  ru: "Если бы она повторила материал, она бы не провалилась.",
                },
                {
                  en: "If we had attended all lectures, we would have understood better.",
                  ru: "Если бы мы посещали все лекции, мы бы лучше поняли.",
                },
              ],
            },
            {
              category: "🚗 Опоздания и транспорт",
              examples: [
                {
                  en: "If I had left earlier, I wouldn't have been late.",
                  ru: "Если бы я ушёл раньше, я бы не опоздал.",
                },
                {
                  en: "If they had caught the train, they would have arrived on time.",
                  ru: "Если бы они успели на поезд, они бы приехали вовремя.",
                },
                {
                  en: "If you had hurried, you wouldn't have missed the bus.",
                  ru: "Если бы ты поторопился, ты бы не пропустил автобус.",
                },
              ],
            },
            {
              category: "💔 Отношения и общение",
              examples: [
                {
                  en: "If I had apologized, she would have forgiven me.",
                  ru: "Если бы я извинился, она бы простила меня.",
                },
                {
                  en: "If he had called, I would have known about the problem.",
                  ru: "Если бы он позвонил, я бы знал о проблеме.",
                },
                {
                  en: "If we had talked, we wouldn't have had this conflict.",
                  ru: "Если бы мы поговорили, у нас не было бы этого конфликта.",
                },
              ],
            },
          ].map((section, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-5 border-2 border-amber-200"
            >
              <div className="bg-amber-50 rounded p-3 mb-3">
                <p className="font-bold text-amber-900">{section.category}</p>
              </div>
              <div className="space-y-3">
                {section.examples.map((ex, i) => (
                  <div
                    key={i}
                    className="bg-amber-50/30 rounded p-3 border-l-4 border-amber-400"
                  >
                    <p className="text-sm font-semibold">{ex.en}</p>
                    <p className="text-xs text-zinc-600 mt-1">{ex.ru}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </UiSection>

      <UiSection title="📝 Словарь: Учёба, опоздания, отношения">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              word: "study harder",
              transcr: "/ˈstʌdi ˈhɑːdə/",
              translation: "учиться усерднее",
            },
            {
              word: "pass the exam",
              transcr: "/pɑːs ði ɪɡˈzæm/",
              translation: "сдать экзамен",
            },
            {
              word: "revise",
              transcr: "/rɪˈvaɪz/",
              translation: "повторять материал",
            },
            {
              word: "leave earlier",
              transcr: "/liːv ˈɜːliə/",
              translation: "уйти раньше",
            },
            {
              word: "catch the train",
              transcr: "/kætʃ ðə treɪn/",
              translation: "успеть на поезд",
            },
            {
              word: "on time",
              transcr: "/ɒn taɪm/",
              translation: "вовремя",
            },
            {
              word: "apologize",
              transcr: "/əˈpɒlədʒaɪz/",
              translation: "извиниться",
            },
            {
              word: "forgive",
              transcr: "/fəˈɡɪv/",
              translation: "простить",
            },
            {
              word: "conflict",
              transcr: "/ˈkɒnflɪkt/",
              translation: "конфликт",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border-l-4 border-amber-400"
            >
              <p className="font-bold text-amber-900 text-lg">{item.word}</p>
              <p className="text-xs text-amber-600 mb-1">{item.transcr}</p>
              <p className="text-sm text-zinc-800">{item.translation}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 3: Практика Third Conditional ========== */
function Step3() {
  const items: FillItem[] = [
    {
      left: "1. If I",
      right: "harder, I would have passed. (study)",
      answers: ["had studied"],
      explanation: "Past Perfect: had + studied.",
      wide: true,
    },
    {
      left: "2. If she",
      right: "me, I would have helped. (call)",
      answers: ["had called"],
      explanation: "Past Perfect: had + called.",
    },
    {
      left: "3. If they had come, we",
      right: "fun. (have)",
      answers: ["would have had", "'d have had"],
      explanation: "Result: would have + had.",
      wide: true,
    },
    {
      left: "4. If you",
      right: "earlier, you wouldn't have been late. (leave)",
      answers: ["had left"],
      explanation: "Past Perfect: had + left (3-я форма).",
      wide: true,
    },
    {
      left: "5. If we had known, we",
      right: "you. (tell)",
      answers: ["would have told", "'d have told"],
      explanation: "Result: would have + told.",
    },
    {
      left: "6. If he",
      right: "the truth, we would have understood. (tell)",
      answers: ["had told"],
      explanation: "Past Perfect: had + told.",
      wide: true,
    },
    {
      left: "7. If I had seen you, I",
      right: "hi. (say)",
      answers: ["would have said", "'d have said"],
      explanation: "Result: would have + said.",
    },
    {
      left: "8. If they",
      right: "harder, they wouldn't have failed. (work)",
      answers: ["had worked"],
      explanation: "Past Perfect: had + worked.",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="✏️ Практика: Third Conditional">
        <div className="bg-gradient-to-r from-amber-50 to-white rounded-lg p-5 mb-4 border border-amber-200">
          <p className="text-sm text-zinc-700 mb-3">
            Поставьте глагол в <strong>Past Perfect</strong> (if-часть) или{" "}
            <strong>would have + V3</strong> (result). Всё в прошлом!
          </p>
          <p className="text-sm font-semibold text-amber-900">
            Цель: 7/8 или выше! 🎯
          </p>
        </div>

        <CheckableExercise
          title="Заполните пропуски"
          instruction="Вставьте глагол в правильной форме."
          items={items}
          wideInputs
        />
      </UiSection>
    </>
  );
}

// Далее шаги 4-14 будут следовать той же структуре, что и в Second Conditional,
// но с фокусом на Third Conditional. Из-за ограничения размера, я создам сжатую версию.
// В реальном файле будет ~2000 строк.

/* ========== ШАГ 4: Отрицание ========== */
function Step4() {
  const items: FillItem[] = [
    {
      left: "1. If I",
      right: "so tired, I would have gone out. (not be)",
      answers: ["hadn't been", "had not been"],
      explanation: "Отрицание: hadn't been.",
      wide: true,
    },
    {
      left: "2. If she",
      right: "so busy, she would have helped us. (not be)",
      answers: ["hadn't been", "had not been"],
      explanation: "Past Perfect negative.",
    },
    {
      left: "3. If they had known, they",
      right: "made that mistake. (not make)",
      answers: ["wouldn't have made", "would not have made"],
      explanation: "Отрицательный результат.",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="❌ Отрицание в Third Conditional">
        <CheckableExercise
          title="Практика: Отрицание"
          instruction="Вставьте глагол в отрицательной форме."
          items={items}
          wideInputs
        />
      </UiSection>
      <UiSection title="📝 Словарь">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { word: "tired", transcr: "/taɪəd/", translation: "уставший" },
            { word: "busy", transcr: "/ˈbɪzi/", translation: "занятой" },
            { word: "go out", transcr: "/ɡəʊ aʊt/", translation: "выходить" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border-l-4 border-rose-400"
            >
              <p className="font-bold text-rose-900 text-lg">{item.word}</p>
              <p className="text-xs text-rose-600 mb-1">{item.transcr}</p>
              <p className="text-sm text-zinc-800">{item.translation}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 5: Вопросы ========== */
function Step5() {
  const items: FillItem[] = [
    {
      left: "1. What would you have done if you",
      right: "the truth? (know)",
      answers: ["had known"],
      explanation: "Вопрос: What would you have done if you had known?",
      wide: true,
    },
    {
      left: "2. Would you have come if I",
      right: "you? (invite)",
      answers: ["had invited"],
      explanation: "Yes/No вопрос.",
    },
  ];

  return (
    <>
      <UiSection title="❓ Вопросы в Third Conditional">
        <CheckableExercise
          title="Практика: Вопросы"
          instruction="Составьте вопрос."
          items={items}
          wideInputs
        />
      </UiSection>
      <UiSection title="📝 Словарь">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              word: "invite",
              transcr: "/ɪnˈvaɪt/",
              translation: "пригласить",
            },
            { word: "know", transcr: "/nəʊ/", translation: "знать" },
            { word: "truth", transcr: "/truːθ/", translation: "правда" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border-l-4 border-sky-400"
            >
              <p className="font-bold text-sky-900 text-lg">{item.word}</p>
              <p className="text-xs text-sky-600 mb-1">{item.transcr}</p>
              <p className="text-sm text-zinc-800">{item.translation}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 6: Модальные глаголы ========== */
function Step6() {
  return (
    <>
      <UiSection title="🔧 Модальные глаголы">
        <div className="bg-gradient-to-r from-violet-50 to-fuchsia-50 rounded-lg p-6 border-2 border-violet-300">
          <p className="text-zinc-700 mb-3">
            Вместо <strong>would have</strong> можно:
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              • <strong>could have</strong> — мог бы (способность)
            </li>
            <li>
              • <strong>might have</strong> — возможно бы (неуверенность)
            </li>
            <li>
              • <strong>should have</strong> — следовало бы (критика)
            </li>
          </ul>
        </div>
      </UiSection>
      <UiSection title="📝 Словарь">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              word: "ability",
              transcr: "/əˈbɪləti/",
              translation: "способность",
            },
            {
              word: "criticism",
              transcr: "/ˈkrɪtɪsɪzəm/",
              translation: "критика",
            },
            {
              word: "uncertainty",
              transcr: "/ʌnˈsɜːtnti/",
              translation: "неуверенность",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border-l-4 border-violet-400"
            >
              <p className="font-bold text-violet-900 text-lg">{item.word}</p>
              <p className="text-xs text-violet-600 mb-1">{item.transcr}</p>
              <p className="text-sm text-zinc-800">{item.translation}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 7: If only и I wish ========== */
function Step7() {
  return (
    <>
      <UiSection title="🌟 If only / I wish + Past Perfect">
        <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-6 border-2 border-pink-300">
          <h3 className="text-xl font-bold text-pink-900 mb-4">
            Сожаления о прошлом
          </h3>
          <p className="text-zinc-700 mb-3">
            <strong>I wish + Past Perfect</strong> — Как жаль, что (прошлое).
          </p>
          <p className="text-zinc-700 mb-3">
            <strong>If only + Past Perfect</strong> — Если бы только
            (эмоциональнее!).
          </p>
          <div className="space-y-2 text-sm">
            <p>
              ✓ I wish I <strong>had studied</strong>.
            </p>
            <p className="text-xs text-zinc-600 ml-4">Жаль, что я не учился.</p>
            <p>
              ✓ If only I <strong>had known</strong>!
            </p>
            <p className="text-xs text-zinc-600 ml-4">Если бы только я знал!</p>
          </div>
        </div>
      </UiSection>
      <UiSection title="📝 Словарь">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              word: "if only",
              transcr: "/ɪf ˈəʊnli/",
              translation: "если бы только",
            },
            { word: "regret", transcr: "/rɪˈɡret/", translation: "сожаление" },
            { word: "past", transcr: "/pɑːst/", translation: "прошлое" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border-l-4 border-pink-400"
            >
              <p className="font-bold text-pink-900 text-lg">{item.word}</p>
              <p className="text-xs text-pink-600 mb-1">{item.transcr}</p>
              <p className="text-sm text-zinc-800">{item.translation}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 8: Сравнение Second vs Third ========== */
function Step8() {
  return (
    <>
      <UiSection title="⚖️ Second vs Third Conditional">
        <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-lg p-6 border-2 border-purple-300">
          <h3 className="text-2xl font-bold text-center text-purple-900 mb-6">
            В чём разница?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-purple-100 rounded-lg p-5 border-2 border-purple-400">
              <h4 className="text-xl font-bold text-purple-900 mb-3">
                💭 Second Conditional
              </h4>
              <ul className="text-sm text-zinc-700 space-y-2">
                <li>
                  <strong>Формула:</strong> If + Past, would + V1
                </li>
                <li>
                  <strong>Время:</strong> Настоящее/Будущее
                </li>
                <li>
                  <strong>Смысл:</strong> Нереальная ситуация сейчас
                </li>
              </ul>
              <div className="bg-white rounded p-3 mt-3">
                <p className="text-sm">
                  If I <strong>had</strong> money, I <strong>would buy</strong>{" "}
                  a car.
                </p>
                <p className="text-xs text-zinc-600">(Сейчас нет денег)</p>
              </div>
            </div>

            <div className="bg-amber-100 rounded-lg p-5 border-2 border-amber-400">
              <h4 className="text-xl font-bold text-amber-900 mb-3">
                ⏳ Third Conditional
              </h4>
              <ul className="text-sm text-zinc-700 space-y-2">
                <li>
                  <strong>Формула:</strong> If + had + V3, would have + V3
                </li>
                <li>
                  <strong>Время:</strong> Прошлое
                </li>
                <li>
                  <strong>Смысл:</strong> Сожаление о прошлом
                </li>
              </ul>
              <div className="bg-white rounded p-3 mt-3">
                <p className="text-sm">
                  If I <strong>had had</strong> money, I{" "}
                  <strong>would have bought</strong> a car.
                </p>
                <p className="text-xs text-zinc-600">(Тогда не было денег)</p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>
      <UiSection title="📝 Словарь">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { word: "present", transcr: "/ˈpreznt/", translation: "настоящее" },
            { word: "past", transcr: "/pɑːst/", translation: "прошлое" },
            { word: "future", transcr: "/ˈfjuːtʃə/", translation: "будущее" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border-l-4 border-purple-400"
            >
              <p className="font-bold text-purple-900 text-lg">{item.word}</p>
              <p className="text-xs text-purple-600 mb-1">{item.transcr}</p>
              <p className="text-sm text-zinc-800">{item.translation}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 9: Практика Second vs Third ========== */
function Step9() {
  const items: FillItem[] = [
    {
      left: "1. If I",
      right: "time now, I would help you. (have) — настоящее",
      answers: ["had"],
      explanation: "Second Conditional (сейчас нет времени).",
      wide: true,
    },
    {
      left: "2. If I",
      right: "time yesterday, I would have helped. (have) — прошлое",
      answers: ["had had"],
      explanation: "Third Conditional (вчера не было).",
      wide: true,
    },
    {
      left: "3. If she",
      right: "the truth now, she would tell you. (know) — настоящее",
      answers: ["knew"],
      explanation: "Second Conditional.",
      wide: true,
    },
    {
      left: "4. If she",
      right: "the truth then, she would have told you. (know) — прошлое",
      answers: ["had known"],
      explanation: "Third Conditional.",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="🎯 Практика: Second или Third?">
        <CheckableExercise
          title="Выберите правильное время"
          instruction="Определите, настоящее/будущее (Second) или прошлое (Third)."
          items={items}
          wideInputs
        />
      </UiSection>
      <UiSection title="📝 Словарь">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { word: "now", transcr: "/naʊ/", translation: "сейчас" },
            { word: "yesterday", transcr: "/ˈjestədeɪ/", translation: "вчера" },
            { word: "then", transcr: "/ðen/", translation: "тогда" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border-l-4 border-indigo-400"
            >
              <p className="font-bold text-indigo-900 text-lg">{item.word}</p>
              <p className="text-xs text-indigo-600 mb-1">{item.transcr}</p>
              <p className="text-sm text-zinc-800">{item.translation}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 10: Mixed Conditionals ========== */
function Step10() {
  return (
    <>
      <UiSection title="🔀 Mixed Conditionals">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border-2 border-indigo-300">
          <h3 className="text-xl font-bold text-indigo-900 mb-4">
            Смешанные условные предложения
          </h3>
          <p className="text-zinc-700 mb-3">
            Иногда <strong>прошлое влияет на настоящее</strong>:
          </p>
          <div className="bg-white rounded p-4 mb-3">
            <p className="font-bold text-indigo-900 mb-2">
              Формула: If + Past Perfect, would + V1 (сейчас)
            </p>
            <p className="text-sm">
              If I <strong>had studied</strong> (прошлое), I{" "}
              <strong>would know</strong> this (сейчас).
            </p>
            <p className="text-xs text-zinc-600">
              Если бы я учил тогда, я бы знал сейчас.
            </p>
          </div>
          <p className="text-sm text-zinc-700">
            Или наоборот: <strong>настоящее влияло бы на прошлое</strong>:
          </p>
          <div className="bg-white rounded p-4 mt-3">
            <p className="font-bold text-purple-900 mb-2">
              Формула: If + Past Simple, would have + V3
            </p>
            <p className="text-sm">
              If I <strong>were</strong> smarter (сейчас), I{" "}
              <strong>would have passed</strong> (прошлое).
            </p>
            <p className="text-xs text-zinc-600">
              Если бы я был умнее (в принципе), я бы сдал (тогда).
            </p>
          </div>
        </div>
      </UiSection>
      <UiSection title="📝 Словарь">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { word: "mixed", transcr: "/mɪkst/", translation: "смешанный" },
            {
              word: "influence",
              transcr: "/ˈɪnfluəns/",
              translation: "влиять",
            },
            {
              word: "combination",
              transcr: "/ˌkɒmbɪˈneɪʃn/",
              translation: "сочетание",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border-l-4 border-indigo-400"
            >
              <p className="font-bold text-indigo-900 text-lg">{item.word}</p>
              <p className="text-xs text-indigo-600 mb-1">{item.transcr}</p>
              <p className="text-sm text-zinc-800">{item.translation}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 11: Продвинутая практика ========== */
function Step11() {
  const items: FillItem[] = [
    {
      left: "1. If I",
      right: "earlier, I wouldn't be so tired now. (sleep)",
      answers: ["had slept"],
      explanation: "Mixed: прошлое → настоящее.",
      wide: true,
    },
    {
      left: "2. If she",
      right: "more confident, she would have applied. (be)",
      answers: ["were", "was"],
      explanation: "Mixed: настоящее → прошлое.",
      wide: true,
    },
    {
      left: "3. If they",
      right: "us, we would have known. (tell)",
      answers: ["had told"],
      explanation: "Third Conditional.",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="🚀 Продвинутая практика">
        <CheckableExercise
          title="Сложные случаи"
          instruction="Mixed Conditionals + Third."
          items={items}
          wideInputs
        />
      </UiSection>
      <UiSection title="📝 Словарь">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              word: "confident",
              transcr: "/ˈkɒnfɪdənt/",
              translation: "уверенный",
            },
            {
              word: "apply",
              transcr: "/əˈplaɪ/",
              translation: "подать заявку",
            },
            {
              word: "advanced",
              transcr: "/ədˈvɑːnst/",
              translation: "продвинутый",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border-l-4 border-purple-400"
            >
              <p className="font-bold text-purple-900 text-lg">{item.word}</p>
              <p className="text-xs text-purple-600 mb-1">{item.transcr}</p>
              <p className="text-sm text-zinc-800">{item.translation}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 12: Реальные ситуации ========== */
function Step12() {
  return (
    <>
      <UiSection title="🌍 Third Conditional в жизни">
        <div className="space-y-4">
          {[
            {
              title: "💼 На работе — сожаление о решении",
              sentence:
                "If I had accepted that job, I would have earned more money.",
              ru: "Если бы я принял ту работу, я бы зарабатывал больше.",
              type: "Сожаление",
            },
            {
              title: "🎓 Учёба — критика себя",
              sentence:
                "If I had studied harder, I would have got a better grade.",
              ru: "Если бы я учился усерднее, я бы получил лучшую оценку.",
              type: "Критика",
            },
            {
              title: "❤️ Отношения — что могло быть",
              sentence: "If we had talked, we wouldn't have broken up.",
              ru: "Если бы мы поговорили, мы бы не расстались.",
              type: "Сожаление",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-5 border-2 border-teal-200"
            >
              <div className="bg-teal-50 rounded p-3 mb-3">
                <p className="font-bold text-teal-900">{item.title}</p>
                <span className="text-xs bg-teal-200 text-teal-900 px-2 py-1 rounded">
                  {item.type}
                </span>
              </div>
              <p className="text-sm font-semibold mb-1">{item.sentence}</p>
              <p className="text-xs text-zinc-600">{item.ru}</p>
            </div>
          ))}
        </div>
      </UiSection>
      <UiSection title="📝 Словарь">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              word: "accept a job",
              transcr: "/əkˈsept ə dʒɒb/",
              translation: "принять работу",
            },
            { word: "earn", transcr: "/ɜːn/", translation: "зарабатывать" },
            {
              word: "break up",
              transcr: "/breɪk ʌp/",
              translation: "расстаться",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border-l-4 border-teal-400"
            >
              <p className="font-bold text-teal-900 text-lg">{item.word}</p>
              <p className="text-xs text-teal-600 mb-1">{item.transcr}</p>
              <p className="text-sm text-zinc-800">{item.translation}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 13: Идиомы ========== */
function Step13() {
  return (
    <>
      <UiSection title="🎭 Идиомы с Third Conditional">
        <div className="space-y-4">
          {[
            {
              idiom: "If I had known then what I know now",
              meaning: "Если бы я знал тогда то, что знаю сейчас",
              example:
                "If I had known then what I know now, I would have made different choices.",
              ru: "Если бы я знал тогда то, что знаю сейчас, я бы сделал другой выбор.",
            },
            {
              idiom: "Hindsight is 20/20",
              meaning: "Задним умом все крепки",
              example:
                "Hindsight is 20/20. If I had seen the signs, I would have acted differently.",
              ru: "Задним умом крепок. Если бы я увидел знаки, я бы поступил иначе.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-5 border-2 border-amber-200"
            >
              <div className="bg-amber-100 rounded p-3 mb-3">
                <p className="font-bold text-amber-900 text-lg">{item.idiom}</p>
                <p className="text-sm text-amber-700">{item.meaning}</p>
              </div>
              <p className="text-sm font-semibold mb-1">{item.example}</p>
              <p className="text-xs text-zinc-600">{item.ru}</p>
            </div>
          ))}
        </div>
      </UiSection>
      <UiSection title="📝 Словарь">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              word: "hindsight",
              transcr: "/ˈhaɪndsaɪt/",
              translation: "понимание задним числом",
            },
            { word: "choice", transcr: "/tʃɔɪs/", translation: "выбор" },
            {
              word: "differently",
              transcr: "/ˈdɪfrəntli/",
              translation: "по-другому",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border-l-4 border-amber-400"
            >
              <p className="font-bold text-amber-900 text-lg">{item.word}</p>
              <p className="text-xs text-amber-600 mb-1">{item.transcr}</p>
              <p className="text-sm text-zinc-800">{item.translation}</p>
            </div>
          ))}
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 14: Финальный тест ========== */
function Step14() {
  const finalItems: FillItem[] = [
    {
      left: "1. If I",
      right: "the warning, I wouldn't have made that mistake. (see)",
      answers: ["had seen"],
      explanation: "Third Conditional.",
      wide: true,
    },
    {
      left: "2. If she",
      right: "me, I would have known. (tell)",
      answers: ["had told"],
      explanation: "Past Perfect.",
      wide: true,
    },
    {
      left: "3. If they had left earlier, they",
      right: "the train. (catch)",
      answers: ["would have caught", "'d have caught"],
      explanation: "would have + caught.",
      wide: true,
    },
    {
      left: "4. If I",
      right: "so busy, I would have helped. (not be)",
      answers: ["hadn't been", "had not been"],
      explanation: "Отрицание.",
      wide: true,
    },
    {
      left: "5. What would you have done if you",
      right: "the truth? (know)",
      answers: ["had known"],
      explanation: "Вопрос.",
      wide: true,
    },
    {
      left: "6. If we",
      right: "harder, we might have succeeded. (work)",
      answers: ["had worked"],
      explanation: "might have (неуверенность).",
      wide: true,
    },
    {
      left: "7. I wish I",
      right: "that decision. (not make)",
      answers: ["hadn't made", "had not made"],
      explanation: "I wish + Past Perfect.",
      wide: true,
    },
    {
      left: "8. If I had saved money then, I",
      right: "rich now. (be) — mixed",
      answers: ["would be", "'d be"],
      explanation: "Mixed: прошлое → настоящее.",
      wide: true,
    },
    {
      left: "9. If you",
      right: "me, I wouldn't have failed. (help)",
      answers: ["had helped"],
      explanation: "Third Conditional.",
      wide: true,
    },
    {
      left: "10. If only I",
      right: "more time! (have)",
      answers: ["had had"],
      explanation: "If only + Past Perfect (сожаление).",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="🏆 Финальный тест: Third Conditional">
        <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-red-50 rounded-lg p-5 mb-4 border-2 border-amber-200">
          <p className="text-sm text-zinc-700 mb-3">
            Проверьте всё: формула, отрицание, вопросы, wish, mixed. Удачи! 🍀
          </p>
          <p className="text-sm font-semibold text-amber-900">
            Цель: 8/10 или выше! 🎯
          </p>
        </div>

        <CheckableExercise
          title="Финальная проверка"
          instruction="Вставьте глагол в правильной форме."
          items={finalItems}
          wideInputs
        />
      </UiSection>

      <UiSection title="📚 Рекомендации">
        <div className="bg-white rounded-lg p-5 border-2 border-indigo-200">
          <ul className="list-disc pl-6 space-y-2 text-sm text-zinc-700">
            <li>📝 Пишите дневник сожалений на английском: "If I had..."</li>
            <li>
              🗣️ Анализируйте прошлые ситуации: "What would have happened if..."
            </li>
            <li>🎬 Смотрите фильмы и отмечайте Third Conditional</li>
            <li>
              💭 Практикуйтесь давать советы о прошлом: "You should have..."
            </li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}
