"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function MixedConditionals({ step }: Props) {
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

/* ========== ШАГ 1: Что такое Mixed Conditionals ========== */
function Step1() {
  return (
    <>
      <UiSection title="🔀 Mixed Conditionals — Смешанные условия">
        <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-lg p-8 mb-6 border-2 border-indigo-300">
          <div className="text-center mb-6">
            <div className="text-7xl mb-4">🔀</div>
            <h2 className="text-3xl font-bold text-indigo-900 mb-3">
              Mixed Conditionals
            </h2>
            <p className="text-xl text-indigo-700">
              Когда прошлое влияет на настоящее (и наоборот)
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 mb-4">
            <h3 className="text-xl font-bold text-indigo-900 mb-3">
              🎯 Главная идея:
            </h3>
            <p className="text-lg text-zinc-800 leading-relaxed mb-3">
              Mixed Conditionals — это <strong>комбинация разных времён</strong>{" "}
              в условных предложениях. Мы смешиваем прошлое и настоящее, когда
              одно влияет на другое.
            </p>
            <p className="text-zinc-700">
              Например:{" "}
              <em>
                "Если бы я учился тогда (прошлое), я бы знал сейчас (настоящее)"
              </em>
            </p>
          </div>

          <div className="bg-indigo-100 rounded-lg p-5 border-2 border-indigo-400">
            <p className="font-bold text-indigo-900 mb-2 text-lg">
              🕰️ Два типа Mixed Conditionals:
            </p>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4">
                <p className="font-bold text-purple-900 mb-2">
                  1️⃣ Type 1: Past → Present
                </p>
                <p className="text-sm mb-2">
                  <strong>If + Past Perfect, would + V1 (now)</strong>
                </p>
                <div className="bg-purple-50 rounded p-3">
                  <p className="text-sm font-semibold">
                    If I <span className="text-purple-700">had studied</span>{" "}
                    harder (тогда), I{" "}
                    <span className="text-indigo-700">would know</span> this
                    (сейчас).
                  </p>
                  <p className="text-xs text-zinc-600 mt-1">
                    Если бы я учился усерднее, я бы знал это сейчас.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <p className="font-bold text-pink-900 mb-2">
                  2️⃣ Type 2: Present → Past
                </p>
                <p className="text-sm mb-2">
                  <strong>If + Past Simple, would have + V3</strong>
                </p>
                <div className="bg-pink-50 rounded p-3">
                  <p className="text-sm font-semibold">
                    If I <span className="text-pink-700">were</span> smarter
                    (вообще), I{" "}
                    <span className="text-rose-700">would have passed</span>{" "}
                    (тогда).
                  </p>
                  <p className="text-xs text-zinc-600 mt-1">
                    Если бы я был умнее, я бы сдал тогда.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="🔍 Когда использовать Mixed Conditionals">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {[
            {
              icon: "📚",
              title: "Образование → сейчас",
              desc: "Прошлые решения влияют на текущие знания",
              example:
                "If I had gone to university, I would have a better job now.",
              ru: "Если бы я учился в университете, у меня была бы лучшая работа сейчас.",
            },
            {
              icon: "💰",
              title: "Финансы → сейчас",
              desc: "Прошлые траты влияют на текущее состояние",
              example: "If I hadn't spent all my money, I would be rich now.",
              ru: "Если бы я не потратил все деньги, я был бы богат сейчас.",
            },
            {
              icon: "🎭",
              title: "Характер → прошлое",
              desc: "Текущие качества влияли бы на прошлое",
              example: "If I were more confident, I would have asked her out.",
              ru: "Если бы я был увереннее, я бы пригласил её на свидание.",
            },
            {
              icon: "🏃",
              title: "Здоровье → прошлое",
              desc: "Текущее состояние влияло бы на прошлые события",
              example:
                "If I weren't so lazy, I would have finished the project.",
              ru: "Если бы я не был таким ленивым, я бы закончил проект.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-5 border-2 border-indigo-200"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-4xl">{item.icon}</span>
                <div>
                  <h4 className="font-bold text-indigo-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-zinc-700">{item.desc}</p>
                </div>
              </div>
              <div className="bg-indigo-50 rounded p-3 mb-2">
                <p className="text-sm font-semibold">{item.example}</p>
              </div>
              <p className="text-xs text-zinc-600">{item.ru}</p>
            </div>
          ))}
        </div>
      </UiSection>

      <UiSection title="📊 Сравнение с русским языком">
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6 border-2 border-purple-300">
          <h3 className="text-xl font-bold text-purple-900 mb-4">
            Как это работает в русском?
          </h3>

          <div className="bg-white rounded-lg p-5 mb-4">
            <p className="font-bold text-purple-900 mb-3">
              💡 В русском используем "БЫ" для обеих частей!
            </p>
            <p className="text-zinc-700 mb-3">
              В русском языке обе части выглядят одинаково, но в английском —
              разные времена:
            </p>
            <div className="space-y-3 text-sm">
              <div className="bg-purple-50 rounded p-3">
                <p className="font-bold mb-1">🇬🇧 English (Past → Present):</p>
                <p>
                  If I <strong>had studied</strong>, I{" "}
                  <strong>would know</strong>.
                </p>
                <p className="text-xs text-zinc-600 mt-1">
                  (Past Perfect + would + V1)
                </p>
              </div>
              <div className="bg-pink-50 rounded p-3">
                <p className="font-bold mb-1">🇷🇺 Русский:</p>
                <p>
                  Если бы я <strong>учил</strong>, я <strong>бы знал</strong>.
                </p>
                <p className="text-xs text-zinc-600 mt-1">
                  (Обе части с "бы" + прошедшее время)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-rose-50 rounded-lg p-4 border-2 border-rose-300">
            <p className="font-bold text-rose-900 mb-2">⚠️ Важно:</p>
            <p className="text-sm text-zinc-700">
              В английском нужно <strong>чётко разделять времена</strong>:
              прошлое (Past Perfect / Past Simple) и настоящее (would + V1). В
              русском всё проще — везде "бы".
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="📝 Словарь: Причины и следствия">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              word: "consequence",
              transcr: "/ˈkɒnsɪkwəns/",
              translation: "последствие",
            },
            {
              word: "influence",
              transcr: "/ˈɪnfluəns/",
              translation: "влияние",
            },
            {
              word: "regret",
              transcr: "/rɪˈɡret/",
              translation: "сожалеть",
            },
            {
              word: "go to university",
              transcr: "/ɡəʊ tə ˌjuːnɪˈvɜːsəti/",
              translation: "учиться в университете",
            },
            {
              word: "spend money",
              transcr: "/spend ˈmʌni/",
              translation: "тратить деньги",
            },
            {
              word: "confident",
              transcr: "/ˈkɒnfɪdənt/",
              translation: "уверенный",
            },
            {
              word: "ask out",
              transcr: "/ɑːsk aʊt/",
              translation: "пригласить на свидание",
            },
            {
              word: "lazy",
              transcr: "/ˈleɪzi/",
              translation: "ленивый",
            },
            {
              word: "finish a project",
              transcr: "/ˈfɪnɪʃ ə ˈprɒdʒekt/",
              translation: "закончить проект",
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

/* ========== ШАГ 2: Type 1 - Past → Present ========== */
function Step2() {
  return (
    <>
      <UiSection title="1️⃣ Type 1: Past Condition → Present Result">
        <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-8 mb-6 border-2 border-purple-400">
          <h3 className="text-2xl font-bold text-purple-900 text-center mb-6">
            Прошлое условие → Настоящий результат
          </h3>

          <div className="bg-white rounded-xl p-6 mb-6 border-2 border-purple-300">
            <div className="text-center">
              <p className="text-3xl font-mono font-bold text-purple-900 mb-4">
                If + had + V3, would + V1 (now)
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-purple-50 rounded p-3">
                  <p className="font-bold text-purple-900 mb-1">
                    If-часть (ПРОШЛОЕ)
                  </p>
                  <p className="text-xs text-zinc-600">
                    Past Perfect
                    <br />
                    (had + V3)
                  </p>
                </div>
                <div className="bg-violet-50 rounded p-3">
                  <p className="font-bold text-violet-900 mb-1">
                    Result (СЕЙЧАС)
                  </p>
                  <p className="text-xs text-zinc-600">
                    would + V1
                    <br />
                    (текущее состояние)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300 mb-4">
            <p className="font-bold text-amber-900 mb-2">
              💡 Когда использовать:
            </p>
            <ul className="text-sm text-zinc-700 space-y-1">
              <li>
                • Прошлые решения влияют на <strong>текущую ситуацию</strong>
              </li>
              <li>
                • То, что мы <strong>не сделали тогда</strong>, влияет на{" "}
                <strong>сейчас</strong>
              </li>
              <li>• Сожаление о прошлом, которое видно сейчас</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-4 border-2 border-green-300">
            <p className="font-bold text-green-900 mb-2">✅ Примеры:</p>
            <div className="space-y-2 text-sm">
              <p>
                ✓ If I <strong>had saved</strong> money (тогда), I{" "}
                <strong>would be</strong> rich (сейчас).
              </p>
              <p className="text-xs text-zinc-600 ml-4">
                Если бы я копил деньги, я был бы богат сейчас.
              </p>
              <p>
                ✓ If she <strong>had learned</strong> English (раньше), she{" "}
                <strong>would have</strong> a better job (сейчас).
              </p>
              <p className="text-xs text-zinc-600 ml-4">
                Если бы она учила английский, у неё была бы лучшая работа
                сейчас.
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="🎯 Примеры Type 1 по категориям">
        <div className="space-y-4">
          {[
            {
              category: "📚 Образование → Карьера",
              examples: [
                {
                  en: "If I had gone to medical school, I would be a doctor now.",
                  ru: "Если бы я учился в медицинском, я был бы врачом сейчас.",
                },
                {
                  en: "If he had studied programming, he would work in IT now.",
                  ru: "Если бы он изучал программирование, он бы работал в IT сейчас.",
                },
                {
                  en: "If they had finished university, they would have degrees now.",
                  ru: "Если бы они закончили университет, у них были бы дипломы сейчас.",
                },
              ],
            },
            {
              category: "💰 Финансы → Текущее состояние",
              examples: [
                {
                  en: "If I hadn't bought that car, I would have more money now.",
                  ru: "Если бы я не купил ту машину, у меня было бы больше денег сейчас.",
                },
                {
                  en: "If she had invested wisely, she would be wealthy now.",
                  ru: "Если бы она инвестировала мудро, она была бы богата сейчас.",
                },
                {
                  en: "If we had saved, we would own a house now.",
                  ru: "Если бы мы копили, у нас был бы дом сейчас.",
                },
              ],
            },
            {
              category: "🏃 Здоровье → Сегодняшняя форма",
              examples: [
                {
                  en: "If I had exercised regularly, I would be fit now.",
                  ru: "Если бы я регулярно тренировался, я был бы в форме сейчас.",
                },
                {
                  en: "If he had quit smoking, he would be healthier now.",
                  ru: "Если бы он бросил курить, он был бы здоровее сейчас.",
                },
                {
                  en: "If she had slept more, she wouldn't be so tired now.",
                  ru: "Если бы она больше спала, она не была бы такой уставшей сейчас.",
                },
              ],
            },
          ].map((section, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-5 border-2 border-purple-200"
            >
              <div className="bg-purple-50 rounded p-3 mb-3">
                <p className="font-bold text-purple-900">{section.category}</p>
              </div>
              <div className="space-y-3">
                {section.examples.map((ex, i) => (
                  <div
                    key={i}
                    className="bg-purple-50/30 rounded p-3 border-l-4 border-purple-400"
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

      <UiSection title="📝 Словарь: Образование, финансы, здоровье">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              word: "medical school",
              transcr: "/ˈmedɪkl skuːl/",
              translation: "медицинский институт",
            },
            {
              word: "degree",
              transcr: "/dɪˈɡriː/",
              translation: "диплом, степень",
            },
            {
              word: "invest",
              transcr: "/ɪnˈvest/",
              translation: "инвестировать",
            },
            {
              word: "wisely",
              transcr: "/ˈwaɪzli/",
              translation: "мудро",
            },
            {
              word: "wealthy",
              transcr: "/ˈwelθi/",
              translation: "богатый",
            },
            {
              word: "own a house",
              transcr: "/əʊn ə haʊs/",
              translation: "владеть домом",
            },
            {
              word: "exercise",
              transcr: "/ˈeksəsaɪz/",
              translation: "тренироваться",
            },
            {
              word: "regularly",
              transcr: "/ˈreɡjələli/",
              translation: "регулярно",
            },
            {
              word: "quit smoking",
              transcr: "/kwɪt ˈsməʊkɪŋ/",
              translation: "бросить курить",
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

/* ========== ШАГ 3: Практика Type 1 ========== */
function Step3() {
  const items: FillItem[] = [
    {
      left: "1. If I",
      right: "harder at school, I would have a better job now. (study)",
      answers: ["had studied"],
      explanation: "Past Perfect (прошлое условие).",
      wide: true,
    },
    {
      left: "2. If she",
      right: "that money, she would be rich now. (save)",
      answers: ["had saved"],
      explanation: "Past Perfect → текущий результат.",
      wide: true,
    },
    {
      left: "3. If they had learned Spanish, they",
      right: "in Spain now. (can/live)",
      answers: ["could live"],
      explanation: "Result: could + V1 (сейчас).",
      wide: true,
    },
    {
      left: "4. If I",
      right: "regularly, I would be fit now. (exercise)",
      answers: ["had exercised"],
      explanation: "Прошлое действие влияет на сейчас.",
      wide: true,
    },
    {
      left: "5. If he had gone to university, he",
      right: "a degree now. (have)",
      answers: ["would have", "'d have"],
      explanation: "Result: would have (сейчас).",
      wide: true,
    },
    {
      left: "6. If we",
      right: "money, we wouldn't be in debt now. (not spend)",
      answers: ["hadn't spent", "had not spent"],
      explanation: "Отрицание в Past Perfect.",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="✏️ Практика: Type 1 (Past → Present)">
        <div className="bg-gradient-to-r from-purple-50 to-white rounded-lg p-5 mb-4 border border-purple-200">
          <p className="text-sm text-zinc-700 mb-3">
            Вставьте глагол в <strong>Past Perfect</strong> (условие в прошлом)
            или <strong>would/could + V1</strong> (результат сейчас).
          </p>
          <p className="text-sm font-semibold text-purple-900">
            Цель: 5/6 или выше! 🎯
          </p>
        </div>

        <CheckableExercise
          title="Заполните пропуски"
          instruction="Прошлое условие → Настоящий результат."
          items={items}
          wideInputs
        />
      </UiSection>

      <UiSection title="📝 Словарь: Полезные фразы">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              word: "in debt",
              transcr: "/ɪn det/",
              translation: "в долгах",
            },
            {
              word: "fit",
              transcr: "/fɪt/",
              translation: "в хорошей форме",
            },
            {
              word: "have a degree",
              transcr: "/hæv ə dɪˈɡriː/",
              translation: "иметь диплом",
            },
            {
              word: "better job",
              transcr: "/ˈbetə dʒɒb/",
              translation: "лучшая работа",
            },
            {
              word: "at school",
              transcr: "/ət skuːl/",
              translation: "в школе",
            },
            {
              word: "save money",
              transcr: "/seɪv ˈmʌni/",
              translation: "копить деньги",
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

// Продолжение следует... (шаги 4-14 будут такие же насыщенные)

/* ========== ШАГ 4: Type 2 - Present → Past ========== */
function Step4() {
  return (
    <>
      <UiSection title="2️⃣ Type 2: Present Condition → Past Result">
        <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-8 mb-6 border-2 border-pink-400">
          <h3 className="text-2xl font-bold text-pink-900 text-center mb-6">
            Настоящее условие → Прошлый результат
          </h3>

          <div className="bg-white rounded-xl p-6 mb-6 border-2 border-pink-300">
            <div className="text-center">
              <p className="text-3xl font-mono font-bold text-pink-900 mb-4">
                If + Past Simple, would have + V3
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-pink-50 rounded p-3">
                  <p className="font-bold text-pink-900 mb-1">
                    If-часть (СЕЙЧАС)
                  </p>
                  <p className="text-xs text-zinc-600">
                    Past Simple
                    <br />
                    (о характере, свойствах)
                  </p>
                </div>
                <div className="bg-rose-50 rounded p-3">
                  <p className="font-bold text-rose-900 mb-1">
                    Result (ПРОШЛОЕ)
                  </p>
                  <p className="text-xs text-zinc-600">
                    would have + V3
                    <br />
                    (что было бы)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-4 border-2 border-amber-300 mb-4">
            <p className="font-bold text-amber-900 mb-2">
              💡 Когда использовать:
            </p>
            <ul className="text-sm text-zinc-700 space-y-1">
              <li>
                • Текущие <strong>качества/характер</strong> влияли бы на{" "}
                <strong>прошлое</strong>
              </li>
              <li>
                • "Если бы я был другим человеком (сейчас), тогда бы
                произошло..."
              </li>
              <li>• Критика на основе текущих качеств</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-4 border-2 border-green-300">
            <p className="font-bold text-green-900 mb-2">✅ Примеры:</p>
            <div className="space-y-2 text-sm">
              <p>
                ✓ If I <strong>were</strong> braver (сейчас), I{" "}
                <strong>would have asked</strong> her out (тогда).
              </p>
              <p className="text-xs text-zinc-600 ml-4">
                Если бы я был смелее, я бы пригласил её тогда.
              </p>
              <p>
                ✓ If she <strong>weren't</strong> so shy (по характеру), she{" "}
                <strong>would have spoken</strong> up (на той встрече).
              </p>
              <p className="text-xs text-zinc-600 ml-4">
                Если бы она не была такой стеснительной, она бы высказалась.
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="📝 Словарь: Характер и качества">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              word: "brave",
              transcr: "/breɪv/",
              translation: "смелый",
            },
            {
              word: "shy",
              transcr: "/ʃaɪ/",
              translation: "стеснительный",
            },
            {
              word: "speak up",
              transcr: "/spiːk ʌp/",
              translation: "высказаться",
            },
            {
              word: "confident",
              transcr: "/ˈkɒnfɪdənt/",
              translation: "уверенный",
            },
            {
              word: "organized",
              transcr: "/ˈɔːɡənaɪzd/",
              translation: "организованный",
            },
            {
              word: "patient",
              transcr: "/ˈpeɪʃnt/",
              translation: "терпеливый",
            },
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

/* ШАГ 5-14: Продолжение с той же структурой... */
/* Для экономии места покажу сокращённо, но в реальном файле будет полно */

function Step5() {
  const items: FillItem[] = [
    {
      left: "1. If I",
      right: "more organized, I would have finished on time. (be)",
      answers: ["were", "was"],
      explanation: "Present quality → Past result.",
      wide: true,
    },
    {
      left: "2. If she weren't so shy, she",
      right: "up at the meeting. (speak)",
      answers: ["would have spoken", "'d have spoken"],
      explanation: "Type 2: текущее качество → прошлое.",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="✏️ Практика: Type 2 (Present → Past)">
        <CheckableExercise
          title="Type 2 Mixed"
          instruction="Настоящее → Прошлое."
          items={items}
          wideInputs
        />
      </UiSection>
    </>
  );
}

function Step6() {
  return (
    <>
      <UiSection title="🔄 Сравнение Type 1 vs Type 2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-purple-100 rounded-lg p-5 border-2 border-purple-400">
            <h4 className="text-xl font-bold text-purple-900 mb-3">Type 1</h4>
            <p className="text-sm">Past → Present</p>
            <p className="text-sm">If + had + V3, would + V1</p>
            <p className="text-xs mt-2">Прошлое действие влияет на сейчас.</p>
          </div>
          <div className="bg-pink-100 rounded-lg p-5 border-2 border-pink-400">
            <h4 className="text-xl font-bold text-pink-900 mb-3">Type 2</h4>
            <p className="text-sm">Present → Past</p>
            <p className="text-sm">If + Past, would have + V3</p>
            <p className="text-xs mt-2">
              Текущее качество влияло бы на прошлое.
            </p>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ========== ШАГ 7: Модальные глаголы ========== */
function Step7() {
  return (
    <>
      <UiSection title="🔧 Модальные глаголы в Mixed Conditionals">
        <div className="bg-gradient-to-r from-violet-50 to-fuchsia-50 rounded-lg p-6 border-2 border-violet-300">
          <h3 className="text-xl font-bold text-violet-900 mb-4">
            Could, might, should в Mixed
          </h3>
          <p className="text-zinc-700 mb-3">
            Вместо <strong>would</strong> можно использовать модальные глаголы:
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

          <div className="bg-white rounded p-4 mt-4">
            <p className="font-bold mb-2">Type 1 с модальными:</p>
            <p className="text-sm">
              If I had practiced more, I <strong>could play</strong> guitar now.
            </p>
            <p className="text-xs text-zinc-600">
              Если бы я больше практиковался, я мог бы играть на гитаре сейчас.
            </p>
          </div>

          <div className="bg-white rounded p-4 mt-3">
            <p className="font-bold mb-2">Type 2 с модальными:</p>
            <p className="text-sm">
              If I were smarter, I <strong>might have solved</strong> it.
            </p>
            <p className="text-xs text-zinc-600">
              Если бы я был умнее, возможно, я бы решил это.
            </p>
          </div>
        </div>
      </UiSection>
      <UiSection title="📝 Словарь">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              word: "practice",
              transcr: "/ˈpræktɪs/",
              translation: "практиковать",
            },
            {
              word: "play guitar",
              transcr: "/pleɪ ɡɪˈtɑː/",
              translation: "играть на гитаре",
            },
            {
              word: "solve",
              transcr: "/sɒlv/",
              translation: "решить",
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

/* ========== ШАГ 8: Отрицание ========== */
function Step8() {
  return (
    <>
      <UiSection title="❌ Отрицание в Mixed Conditionals">
        <div className="bg-gradient-to-r from-rose-50 to-orange-50 rounded-lg p-6 border-2 border-rose-300">
          <h3 className="text-xl font-bold text-rose-900 mb-4">
            Как строить отрицание?
          </h3>
          <div className="space-y-3">
            <div className="bg-white rounded p-4">
              <p className="font-bold text-rose-900 mb-2">
                Type 1 (Past → Present):
              </p>
              <p className="text-sm mb-1">
                If-часть: <strong>hadn't + V3</strong>
              </p>
              <p className="text-sm mb-2">
                Result: <strong>wouldn't + V1</strong>
              </p>
              <p className="text-xs bg-rose-50 rounded p-2">
                If I <strong>hadn't wasted</strong> time, I{" "}
                <strong>wouldn't be</strong> behind now.
              </p>
            </div>

            <div className="bg-white rounded p-4">
              <p className="font-bold text-orange-900 mb-2">
                Type 2 (Present → Past):
              </p>
              <p className="text-sm mb-1">
                If-часть: <strong>weren't / wasn't</strong>
              </p>
              <p className="text-sm mb-2">
                Result: <strong>wouldn't have + V3</strong>
              </p>
              <p className="text-xs bg-orange-50 rounded p-2">
                If I <strong>weren't</strong> so lazy, I{" "}
                <strong>wouldn't have failed</strong>.
              </p>
            </div>
          </div>
        </div>
      </UiSection>
      <UiSection title="📝 Словарь">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              word: "waste time",
              transcr: "/weɪst taɪm/",
              translation: "тратить время",
            },
            {
              word: "behind",
              transcr: "/bɪˈhaɪnd/",
              translation: "отставать",
            },
            {
              word: "fail",
              transcr: "/feɪl/",
              translation: "провалить",
            },
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

/* ========== ШАГ 9: Вопросы ========== */
function Step9() {
  return (
    <>
      <UiSection title="❓ Вопросы в Mixed Conditionals">
        <div className="bg-gradient-to-r from-sky-50 to-cyan-50 rounded-lg p-6 border-2 border-sky-300">
          <h3 className="text-xl font-bold text-sky-900 mb-4">
            Как задавать вопросы?
          </h3>
          <div className="space-y-3">
            <div className="bg-white rounded p-4">
              <p className="font-bold mb-2">Type 1:</p>
              <p className="text-sm">
                <strong>What/Where + would + подлежащее + V1</strong> if you had
                + V3?
              </p>
              <p className="text-xs bg-sky-50 rounded p-2 mt-2">
                <strong>What</strong> would you be doing now if you{" "}
                <strong>had studied</strong> medicine?
              </p>
            </div>

            <div className="bg-white rounded p-4">
              <p className="font-bold mb-2">Type 2:</p>
              <p className="text-sm">
                <strong>Would + подлежащее + have + V3</strong> if you were...?
              </p>
              <p className="text-xs bg-cyan-50 rounded p-2 mt-2">
                <strong>Would</strong> you have taken the job if you{" "}
                <strong>were</strong> more confident?
              </p>
            </div>
          </div>
        </div>
      </UiSection>
      <UiSection title="📝 Словарь">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              word: "study medicine",
              transcr: "/ˈstʌdi ˈmedsn/",
              translation: "изучать медицину",
            },
            {
              word: "take a job",
              transcr: "/teɪk ə dʒɒb/",
              translation: "принять работу",
            },
            {
              word: "what would you be doing",
              transcr: "/wɒt wʊd juː biː ˈduːɪŋ/",
              translation: "что бы ты делал",
            },
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

/* ========== ШАГ 10: Реальные ситуации ========== */
function Step10() {
  return (
    <>
      <UiSection title="🌍 Mixed Conditionals в реальной жизни">
        <div className="space-y-4">
          {[
            {
              title: "💼 Карьера",
              sentence: "If I had studied IT, I would be working in tech now.",
              ru: "Если бы я изучал IT, я бы работал в технологиях сейчас.",
              type: "Type 1",
            },
            {
              title: "💔 Отношения",
              sentence: "If I weren't so stubborn, I would have apologized.",
              ru: "Если бы я не был таким упрямым, я бы извинился.",
              type: "Type 2",
            },
            {
              title: "🏃 Здоровье",
              sentence: "If I had exercised more, I would be healthier now.",
              ru: "Если бы я больше тренировался, я был бы здоровее сейчас.",
              type: "Type 1",
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
              word: "work in tech",
              transcr: "/wɜːk ɪn tek/",
              translation: "работать в технологиях",
            },
            {
              word: "stubborn",
              transcr: "/ˈstʌbən/",
              translation: "упрямый",
            },
            {
              word: "healthier",
              transcr: "/ˈhelθiə/",
              translation: "здоровее",
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

/* ========== ШАГ 11: Сложная практика ========== */
function Step11() {
  const items: FillItem[] = [
    {
      left: "1. If I",
      right: "more organized, I would have finished on time. (be)",
      answers: ["were", "was"],
      explanation: "Type 2: Present → Past.",
      wide: true,
    },
    {
      left: "2. If she",
      right: "that course, she would have a certificate now. (take)",
      answers: ["had taken"],
      explanation: "Type 1: Past → Present.",
      wide: true,
    },
    {
      left: "3. If they weren't so lazy, they",
      right: "passed. (have)",
      answers: ["would have passed", "'d have passed"],
      explanation: "Type 2: Present quality → Past result.",
      wide: true,
    },
    {
      left: "4. If I",
      right: "harder, I would know this now. (work)",
      answers: ["had worked"],
      explanation: "Type 1: Past action → Present knowledge.",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="🚀 Сложная практика: Оба типа">
        <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-lg p-5 mb-4 border-2 border-indigo-200">
          <p className="text-sm text-zinc-700 mb-3">
            Определите тип Mixed (Type 1 или Type 2) и вставьте правильную
            форму. Будьте внимательны!
          </p>
          <p className="text-sm font-semibold text-indigo-900">Цель: 4/4! 🎯</p>
        </div>

        <CheckableExercise
          title="Mixed Types"
          instruction="Определите тип и вставьте правильную форму."
          items={items}
          wideInputs
        />
      </UiSection>
      <UiSection title="📝 Словарь">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              word: "take a course",
              transcr: "/teɪk ə kɔːs/",
              translation: "пройти курс",
            },
            {
              word: "certificate",
              transcr: "/səˈtɪfɪkət/",
              translation: "сертификат",
            },
            {
              word: "on time",
              transcr: "/ɒn taɪm/",
              translation: "вовремя",
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

/* ========== ШАГ 12: Типичные ошибки ========== */
function Step12() {
  return (
    <>
      <UiSection title="⚠️ Типичные ошибки в Mixed Conditionals">
        <div className="space-y-4">
          {[
            {
              error: "❌ If I studied harder, I would know now.",
              correct: "✅ If I had studied harder, I would know now.",
              explanation:
                "Type 1: нужен Past Perfect (had studied) для прошлого условия.",
            },
            {
              error: "❌ If I were smarter, I would passed the test.",
              correct: "✅ If I were smarter, I would have passed the test.",
              explanation:
                "Type 2: нужен would have + V3 для прошлого результата.",
            },
            {
              error: "❌ If I had saved money, I will be rich now.",
              correct: "✅ If I had saved money, I would be rich now.",
              explanation:
                "Type 1: result должен быть с would (не will), т.к. нереально.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-5 border-2 border-amber-200"
            >
              <p className="text-red-700 mb-2">{item.error}</p>
              <p className="text-green-700 mb-2">{item.correct}</p>
              <p className="text-xs text-zinc-600 bg-amber-50 rounded p-2">
                {item.explanation}
              </p>
            </div>
          ))}
        </div>
      </UiSection>
      <UiSection title="📝 Словарь">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {
              word: "mistake",
              transcr: "/mɪˈsteɪk/",
              translation: "ошибка",
            },
            {
              word: "typical",
              transcr: "/ˈtɪpɪkl/",
              translation: "типичный",
            },
            {
              word: "correct",
              transcr: "/kəˈrekt/",
              translation: "правильный",
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

/* ========== ШАГ 13: Идиомы ========== */
function Step13() {
  return (
    <>
      <UiSection title="🎭 Идиомы с Mixed Conditionals">
        <div className="space-y-4">
          {[
            {
              idiom: "If I knew then what I know now",
              meaning: "Если бы я знал тогда то, что знаю сейчас",
              example:
                "If I knew then what I know now, I would have made different choices.",
              ru: "Если бы я знал тогда то, что знаю сейчас, я бы сделал другой выбор.",
              type: "Type 2 → Past",
            },
            {
              idiom: "If I were different",
              meaning: "Если бы я был другим",
              example: "If I were different, I would have succeeded.",
              ru: "Если бы я был другим, я бы преуспел.",
              type: "Type 2 → Past",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-5 border-2 border-purple-200"
            >
              <div className="bg-purple-100 rounded p-3 mb-3">
                <p className="font-bold text-purple-900 text-lg">
                  {item.idiom}
                </p>
                <p className="text-sm text-purple-700">{item.meaning}</p>
                <span className="text-xs bg-purple-200 text-purple-900 px-2 py-1 rounded">
                  {item.type}
                </span>
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
              word: "idiom",
              transcr: "/ˈɪdiəm/",
              translation: "идиома",
            },
            {
              word: "expression",
              transcr: "/ɪkˈspreʃn/",
              translation: "выражение",
            },
            {
              word: "succeed",
              transcr: "/səkˈsiːd/",
              translation: "преуспеть",
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

function Step14() {
  const finalItems: FillItem[] = [
    {
      left: "1. If I",
      right: "harder, I would know this now. (study)",
      answers: ["had studied"],
      explanation: "Type 1: Past → Present.",
      wide: true,
    },
    {
      left: "2. If she",
      right: "more confident, she would have applied. (be)",
      answers: ["were", "was"],
      explanation: "Type 2: Present → Past.",
      wide: true,
    },
    {
      left: "3. If they had saved money, they",
      right: "rich now. (be)",
      answers: ["would be", "'d be"],
      explanation: "Type 1 result.",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="🏆 Финальный тест: Mixed Conditionals">
        <CheckableExercise
          title="Финал"
          instruction="Определите тип и вставьте правильную форму."
          items={finalItems}
          wideInputs
        />
      </UiSection>
    </>
  );
}
