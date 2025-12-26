"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function HypotheticalWish({ step }: Props) {
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
    default:
      return <Step1 />;
  }
}

function Step1() {
  return (
    <>
      <UiSection title="💭 Hypothetical Wish — Гипотетические желания">
        <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 rounded-2xl p-10 mb-8 border-4 border-purple-300 shadow-xl">
          <div className="text-8xl mb-6 text-center animate-pulse">😔</div>
          <h2 className="text-3xl font-black text-center mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
            Regrets, Dreams & Fantasy
          </h2>
          <p className="text-xl text-gray-800 leading-relaxed mb-6 text-center font-semibold">
            Выражаем сожаления, нереальные желания и мечты! 🌟
          </p>
          <div className="bg-white/90 backdrop-blur rounded-xl p-6 border-2 border-purple-300 mb-6">
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              <strong className="text-purple-700">I wish</strong> и <strong className="text-pink-700">If only</strong> —
              это способ выразить желание, чтобы реальность была другой. Это сожаления о прошлом, недовольство настоящим или мечты о будущем.
            </p>
            <div className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-lg p-5 border-2 border-pink-300">
              <p className="text-xl font-bold text-gray-900 mb-2">
                I wish I hadn&apos;t said that...
              </p>
              <p className="text-base text-gray-700 mb-3">
                🇷🇺 Жаль, что я это сказал... (сожаление о прошлом)
              </p>
              <p className="text-xl font-bold text-gray-900 mb-2">
                If only she were here...
              </p>
              <p className="text-base text-gray-700">
                🇷🇺 Если бы только она была здесь... (желание в настоящем)
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5 border-2 border-blue-300">
              <div className="text-4xl mb-2">💬</div>
              <p className="font-bold text-blue-800 mb-2">I wish</p>
              <p className="text-sm text-gray-700">Более формальное, нейтральное</p>
              <p className="text-xs text-gray-600 mt-1">Используется чаще</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-5 border-2 border-orange-300">
              <div className="text-4xl mb-2">❗</div>
              <p className="font-bold text-orange-800 mb-2">If only</p>
              <p className="text-sm text-gray-700">Более эмоциональное, сильное</p>
              <p className="text-xs text-gray-600 mt-1">Добавляет драматизма</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 rounded-2xl p-8 mb-6 border-4 border-yellow-300">
          <div className="text-6xl mb-4 text-center">🔑</div>
          <h3 className="text-2xl font-black text-center mb-4 text-orange-700">
            Три типа Wish & If Only
          </h3>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border-2 border-purple-300">
              <p className="font-bold text-purple-800 mb-2">1️⃣ Wish/If only + Past Perfect</p>
              <p className="text-gray-700 text-sm mb-2">
                Сожаление о прошлом (то, что уже произошло или не произошло)
              </p>
              <p className="text-base font-semibold text-gray-900">
                I wish I had studied harder.
              </p>
              <p className="text-xs text-gray-600 mt-1">
                🇷🇺 Жаль, что я не учился усерднее.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 border-2 border-blue-300">
              <p className="font-bold text-blue-800 mb-2">2️⃣ Wish/If only + Past Simple</p>
              <p className="text-gray-700 text-sm mb-2">
                Желание в настоящем (то, что сейчас не так, как хочется)
              </p>
              <p className="text-base font-semibold text-gray-900">
                I wish I were rich.
              </p>
              <p className="text-xs text-gray-600 mt-1">
                🇷🇺 Жаль, что я не богат (сейчас).
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 border-2 border-green-300">
              <p className="font-bold text-green-800 mb-2">3️⃣ Wish/If only + would/could</p>
              <p className="text-gray-700 text-sm mb-2">
                Раздражение или желание изменений в будущем
              </p>
              <p className="text-base font-semibold text-gray-900">
                I wish you would listen to me!
              </p>
              <p className="text-xs text-gray-600 mt-1">
                🇷🇺 Хотел бы я, чтобы ты меня слушал! (раздражение)
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border-2 border-indigo-300">
          <div className="text-5xl mb-3">⚠️</div>
          <p className="text-lg font-bold text-indigo-800 mb-3">Важно!</p>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
              <p className="text-sm text-gray-700 mb-1">
                ✓ <strong>I wish I were</strong> (не was!) — всегда were для всех лиц
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-pink-500">
              <p className="text-sm text-gray-700 mb-1">
                ✓ <strong>If only</strong> = то же самое, что wish, но эмоциональнее
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
              <p className="text-sm text-gray-700 mb-1">
                ✓ После wish/if only время &quot;сдвигается назад&quot; (backshift)
              </p>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

function Step2() {
  return (
    <>
      <UiSection title="⏪ Type 1: Wish + Past Perfect — Сожаления о прошлом">
        <div className="bg-gradient-to-r from-red-100 via-pink-100 to-purple-100 rounded-2xl p-8 mb-8 border-4 border-red-400">
          <div className="text-7xl mb-4 text-center">😭</div>
          <h2 className="text-2xl font-black text-center mb-6 text-red-800">
            Regrets About the Past
          </h2>
          <div className="bg-white/90 backdrop-blur rounded-xl p-6 border-2 border-red-300">
            <p className="text-xl font-bold text-red-700 mb-3">Формула:</p>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-5 border-2 border-red-300 mb-4">
              <p className="text-lg font-mono text-gray-800 mb-2">
                I wish / If only + subject + <strong className="text-red-700">had + V3</strong>
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Используем, когда <strong>сожалеем о прошлом</strong> — о том, что сделали или не сделали.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border-4 border-pink-300">
            <div className="text-5xl mb-3">💔</div>
            <h3 className="text-xl font-bold text-pink-800 mb-4">Отношения и дружба</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border-2 border-pink-200 hover:border-pink-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  I wish I hadn&apos;t ghosted her.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Жаль, что я её заигнорил.
                </p>
                <div className="bg-pink-50 rounded-lg p-3 mt-3 border border-pink-200">
                  <p className="text-xs text-gray-600">
                    💭 Сейчас сожалею, что это сделал в прошлом
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-pink-200 hover:border-pink-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  If only I had told him the truth!
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Если бы только я сказал ему правду! (более эмоционально)
                </p>
                <div className="bg-pink-50 rounded-lg p-3 mt-3 border border-pink-200">
                  <p className="text-xs text-gray-600">
                    💭 Сильное сожаление — не сказал правду, теперь проблемы
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-pink-200 hover:border-pink-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  I wish I had spent more time with my grandparents.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Жаль, что я не проводил больше времени с бабушкой и дедушкой.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-4 border-blue-300">
            <div className="text-5xl mb-3">🎓</div>
            <h3 className="text-xl font-bold text-blue-800 mb-4">Учёба и карьера</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border-2 border-blue-200 hover:border-blue-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  I wish I had studied medicine instead of law.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Жаль, что я учился на юриста, а не на врача.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-blue-200 hover:border-blue-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  If only I had accepted that job offer in London!
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Если бы только я принял то предложение о работе в Лондоне!
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-blue-200 hover:border-blue-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  I wish I hadn&apos;t dropped out of university.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Жаль, что я бросил университет.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-4 border-green-300">
            <div className="text-5xl mb-3">💸</div>
            <h3 className="text-xl font-bold text-green-800 mb-4">Деньги и инвестиции</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border-2 border-green-200 hover:border-green-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  I wish I had bought Bitcoin in 2010.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Жаль, что я не купил Bitcoin в 2010.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-green-200 hover:border-green-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  If only I hadn&apos;t spent all my savings on that car!
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Если бы только я не потратил все сбережения на ту машину!
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-green-200 hover:border-green-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  I wish I had saved more money when I was younger.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Жаль, что я не откладывал больше денег, когда был моложе.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-4 border-orange-300">
            <div className="text-5xl mb-3">🎯</div>
            <h3 className="text-xl font-bold text-orange-800 mb-4">Упущенные возможности</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border-2 border-orange-200 hover:border-orange-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  I wish I had learned to play guitar when I was young.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Жаль, что я не научился играть на гитаре в молодости.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-orange-200 hover:border-orange-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  If only I had traveled more in my twenties!
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Если бы только я больше путешествовал в свои двадцать!
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-orange-200 hover:border-orange-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  I wish I hadn&apos;t wasted so much time on social media.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Жаль, что я потратил столько времени на соцсети.
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

function Step3() {
  const items: FillItem[] = [
    {
      left: "I wish I",
      answers: ["had studied", "had been studying"],
      right: "(study) harder for the exam. I failed it.",
    },
    {
      left: "If only we",
      answers: ["had left", "had gone"],
      right: "(leave) earlier! We missed the train.",
    },
    {
      left: "I wish I",
      answers: ["hadn't said", "hadnt said"],
      right: "(not say) those words. I hurt her feelings.",
    },
    {
      left: "If only I",
      answers: ["had listened"],
      right: "(listen) to your advice! You were right.",
    },
    {
      left: "She wishes she",
      answers: ["had taken"],
      right: "(take) that job offer. It was a great opportunity.",
    },
    {
      left: "I wish I",
      answers: ["hadn't eaten", "hadnt eaten"],
      right: "(not eat) so much. I feel sick now.",
    },
    {
      left: "If only they",
      answers: ["had invited"],
      right: "(invite) me to the party! I wanted to go.",
    },
    {
      left: "He wishes he",
      answers: ["had been", "had gone"],
      right: "(be) more honest with her from the beginning.",
    },
  ];

  return (
    <>
      <UiSection title="✍️ Практика: Сожаления о прошлом">
        <div className="bg-gradient-to-r from-red-100 via-pink-100 to-purple-100 rounded-2xl p-8 mb-6 border-4 border-red-300">
          <div className="text-6xl mb-4 text-center">😢</div>
          <h3 className="text-2xl font-black text-center text-red-800 mb-3">
            Regret Practice!
          </h3>
          <p className="text-center text-gray-700 font-semibold">
            Выражаем сожаления о прошлом — используй Past Perfect
          </p>
        </div>
        <CheckableExercise
          title="Заполни пропуски"
          instruction="Используй Past Perfect (had + V3)"
          items={items}
        />
      </UiSection>
    </>
  );
}

function Step4() {
  return (
    <>
      <UiSection title="⏺️ Type 2: Wish + Past Simple — Желания в настоящем">
        <div className="bg-gradient-to-r from-indigo-100 via-blue-100 to-cyan-100 rounded-2xl p-8 mb-8 border-4 border-indigo-400">
          <div className="text-7xl mb-4 text-center">🌟</div>
          <h2 className="text-2xl font-black text-center mb-6 text-indigo-800">
            Present Wishes & Dreams
          </h2>
          <div className="bg-white/90 backdrop-blur rounded-xl p-6 border-2 border-indigo-300">
            <p className="text-xl font-bold text-indigo-700 mb-3">Формула:</p>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-5 border-2 border-blue-300 mb-4">
              <p className="text-lg font-mono text-gray-800 mb-2">
                I wish / If only + subject + <strong className="text-blue-700">Past Simple</strong>
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-3">
              Используем, когда <strong>хотим, чтобы настоящее было другим</strong>.
            </p>
            <div className="bg-yellow-50 rounded-lg p-4 border-2 border-yellow-300">
              <p className="text-sm font-bold text-yellow-800 mb-2">⚠️ Важно!</p>
              <p className="text-sm text-gray-700">
                Для глагола BE всегда используем <strong>WERE</strong> (не was!) для всех лиц:
                <br />I wish I <strong>were</strong> rich, I wish he <strong>were</strong> here.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-rose-50 to-red-50 rounded-xl p-6 border-4 border-rose-300">
            <div className="text-5xl mb-3">💰</div>
            <h3 className="text-xl font-bold text-rose-800 mb-4">Деньги и статус</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border-2 border-rose-200 hover:border-rose-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  I wish I were rich.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Жаль, что я не богат (сейчас).
                </p>
                <div className="bg-rose-50 rounded-lg p-3 mt-3 border border-rose-200">
                  <p className="text-xs text-gray-600">
                    💭 Реальность: я не богат сейчас. Желание: хочу быть богатым.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-rose-200 hover:border-rose-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  If only I had a better salary!
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Если бы только у меня была зарплата получше!
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-rose-200 hover:border-rose-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  I wish I lived in a bigger apartment.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Жаль, что я не живу в квартире побольше.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl p-6 border-4 border-blue-300">
            <div className="text-5xl mb-3">🎯</div>
            <h3 className="text-xl font-bold text-blue-800 mb-4">Способности и навыки</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border-2 border-blue-200 hover:border-blue-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  I wish I spoke Chinese.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Жаль, что я не говорю по-китайски.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-blue-200 hover:border-blue-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  If only I could play the piano!
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Если бы только я умел играть на пианино!
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-blue-200 hover:border-blue-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  I wish I knew how to code.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Жаль, что я не умею программировать.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border-4 border-purple-300">
            <div className="text-5xl mb-3">🏃</div>
            <h3 className="text-xl font-bold text-purple-800 mb-4">Внешность и характер</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border-2 border-purple-200 hover:border-purple-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  I wish I were taller.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Жаль, что я не выше ростом.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-purple-200 hover:border-purple-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  If only I were more confident!
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Если бы только я был более уверенным в себе!
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-purple-200 hover:border-purple-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  I wish I weren&apos;t so shy.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Жаль, что я такой застенчивый.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border-4 border-green-300">
            <div className="text-5xl mb-3">🌍</div>
            <h3 className="text-xl font-bold text-green-800 mb-4">Местоположение и жизнь</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border-2 border-green-200 hover:border-green-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  I wish I lived in New York.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Жаль, что я не живу в Нью-Йорке.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-green-200 hover:border-green-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  If only it were summer right now!
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Если бы только сейчас было лето!
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-green-200 hover:border-green-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  I wish I had more free time.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Жаль, что у меня нет больше свободного времени.
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

function Step5() {
  const items: FillItem[] = [
    {
      left: "I wish I",
      answers: ["were", "was"],
      right: "(be) on holiday right now. I hate this office!",
    },
    {
      left: "If only I",
      answers: ["had"],
      right: "(have) a car! Public transport is so slow.",
    },
    {
      left: "I wish I",
      answers: ["spoke"],
      right: "(speak) English fluently. It would help my career.",
    },
    {
      left: "If only she",
      answers: ["lived"],
      right: "(live) closer! We could meet more often.",
    },
    {
      left: "I wish I",
      answers: ["weren't", "wasnt", "were not"],
      right: "(not be) so tired all the time.",
    },
    {
      left: "If only I",
      answers: ["knew"],
      right: "(know) the answer! This test is so difficult.",
    },
    {
      left: "I wish my boss",
      answers: ["were", "was"],
      right: "(be) more understanding.",
    },
    {
      left: "If only we",
      answers: ["had"],
      right: "(have) more money! We could travel the world.",
    },
  ];

  return (
    <>
      <UiSection title="✍️ Практика: Желания в настоящем">
        <div className="bg-gradient-to-r from-indigo-100 via-blue-100 to-cyan-100 rounded-2xl p-8 mb-6 border-4 border-indigo-300">
          <div className="text-6xl mb-4 text-center">🌟</div>
          <h3 className="text-2xl font-black text-center text-indigo-800 mb-3">
            Dream Practice!
          </h3>
          <p className="text-center text-gray-700 font-semibold">
            Выражаем желания о настоящем — используй Past Simple
          </p>
        </div>
        <CheckableExercise
          title="Заполни пропуски"
          instruction="Используй Past Simple (were или V2)"
          items={items}
        />

        <div className="mt-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border-4 border-yellow-300">
          <div className="text-5xl mb-3 text-center">💡</div>
          <h3 className="text-xl font-black text-center text-orange-800 mb-4">
            Quick Recap: Past Perfect vs Past Simple
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-5 border-2 border-red-300">
              <p className="font-bold text-red-700 mb-2 text-lg">😭 Wish + Past Perfect</p>
              <p className="text-sm text-gray-700 mb-2 font-mono">
                I wish I had + V3
              </p>
              <p className="text-xs text-gray-600 mb-2">
                Сожаление о прошлом
              </p>
              <div className="bg-red-50 rounded p-2 text-xs">
                I wish I <strong>had studied</strong> harder.
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 border-2 border-blue-300">
              <p className="font-bold text-blue-700 mb-2 text-lg">🌟 Wish + Past Simple</p>
              <p className="text-sm text-gray-700 mb-2 font-mono">
                I wish I were / V2
              </p>
              <p className="text-xs text-gray-600 mb-2">
                Желание в настоящем
              </p>
              <div className="bg-blue-50 rounded p-2 text-xs">
                I wish I <strong>were</strong> rich now.
              </div>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

function Step6() {
  return (
    <>
      <UiSection title="⏩ Type 3: Wish + would/could — Раздражение и будущее">
        <div className="bg-gradient-to-r from-orange-100 via-red-100 to-pink-100 rounded-2xl p-8 mb-8 border-4 border-orange-400">
          <div className="text-7xl mb-4 text-center">😤</div>
          <h2 className="text-2xl font-black text-center mb-6 text-orange-800">
            Annoyance & Future Wishes
          </h2>
          <div className="bg-white/90 backdrop-blur rounded-xl p-6 border-2 border-orange-300">
            <p className="text-xl font-bold text-orange-700 mb-3">Формула:</p>
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-5 border-2 border-orange-300 mb-4">
              <p className="text-lg font-mono text-gray-800 mb-2">
                I wish / If only + subject + <strong className="text-orange-700">would/could + V1</strong>
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-3">
              Используем для <strong>раздражения</strong> или <strong>желания изменений в будущем</strong>.
            </p>
            <div className="bg-yellow-50 rounded-lg p-4 border-2 border-yellow-300">
              <p className="text-sm font-bold text-yellow-800 mb-2">⚠️ Важно!</p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Would</strong> — для действий других людей (не себя!)
              </p>
              <p className="text-sm text-gray-700">
                <strong>Could</strong> — для желания возможности/способности
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-6 border-4 border-red-300">
            <div className="text-5xl mb-3">😠</div>
            <h3 className="text-xl font-bold text-red-800 mb-4">Раздражение поведением других</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border-2 border-red-200 hover:border-red-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  I wish you would listen to me!
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Хотел бы я, чтобы ты меня слушал! (раздражение)
                </p>
                <div className="bg-red-50 rounded-lg p-3 mt-3 border border-red-200">
                  <p className="text-xs text-gray-600">
                    💭 Ты не слушаешь меня, и это меня раздражает
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-red-200 hover:border-red-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  If only he would stop complaining!
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Если бы только он перестал жаловаться!
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-red-200 hover:border-red-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  I wish my neighbors would be quieter!
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Хотел бы я, чтобы соседи были потише!
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-4 border-orange-300">
            <div className="text-5xl mb-3">🙏</div>
            <h3 className="text-xl font-bold text-orange-800 mb-4">Желание изменений</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border-2 border-orange-200 hover:border-orange-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  I wish the weather would improve.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Хотел бы я, чтобы погода улучшилась.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-orange-200 hover:border-orange-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  If only prices would go down!
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Если бы только цены снизились!
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-orange-200 hover:border-orange-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  I wish things would get better soon.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Хотел бы я, чтобы всё наладилось поскорее.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-4 border-blue-300">
            <div className="text-5xl mb-3">✨</div>
            <h3 className="text-xl font-bold text-blue-800 mb-4">Желание возможности (could)</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border-2 border-blue-200 hover:border-blue-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  I wish I could fly!
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Хотел бы я уметь летать! (мечта о способности)
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-blue-200 hover:border-blue-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  If only I could go to the concert!
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Если бы только я мог пойти на концерт! (но не могу)
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-blue-200 hover:border-blue-400 transition-all">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  I wish we could meet more often.
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  🇷🇺 Хотел бы я, чтобы мы могли встречаться чаще.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border-4 border-yellow-300">
          <div className="text-5xl mb-3 text-center">⚠️</div>
          <h3 className="text-xl font-black text-center text-orange-800 mb-4">
            Important: Would vs Could
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-5 border-2 border-orange-300">
              <p className="font-bold text-orange-700 mb-3">Would — действия других</p>
              <p className="text-sm text-gray-700 mb-2">
                ❌ I wish I would be rich
              </p>
              <p className="text-sm text-gray-700 mb-2">
                ✅ I wish you would help me
              </p>
              <p className="text-xs text-gray-600 mt-2 italic">
                Would = хочу, чтобы кто-то другой сделал что-то
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 border-2 border-blue-300">
              <p className="font-bold text-blue-700 mb-3">Could — возможность</p>
              <p className="text-sm text-gray-700 mb-2">
                ✅ I wish I could fly
              </p>
              <p className="text-sm text-gray-700 mb-2">
                ✅ I wish I could go
              </p>
              <p className="text-xs text-gray-600 mt-2 italic">
                Could = хочу иметь возможность/способность
              </p>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

function Step7() {
  const items: FillItem[] = [
    {
      left: "I wish you",
      answers: ["would stop"],
      right: "(stop) smoking! It's bad for your health.",
    },
    {
      left: "If only the rain",
      answers: ["would stop"],
      right: "(stop)! I want to go outside.",
    },
    {
      left: "I wish I",
      answers: ["could speak"],
      right: "(speak) to her right now, but she's busy.",
    },
    {
      left: "If only he",
      answers: ["would call"],
      right: "(call) me back! I've been waiting for hours.",
    },
    {
      left: "I wish my parents",
      answers: ["would understand"],
      right: "(understand) me better.",
    },
    {
      left: "If only I",
      answers: ["could afford"],
      right: "(afford) a new laptop! This one is so slow.",
    },
    {
      left: "I wish the government",
      answers: ["would do"],
      right: "(do) something about the traffic.",
    },
    {
      left: "If only we",
      answers: ["could travel"],
      right: "(travel) back in time!",
    },
  ];

  return (
    <>
      <UiSection title="✍️ Практика: Would & Could">
        <div className="bg-gradient-to-r from-orange-100 via-red-100 to-pink-100 rounded-2xl p-8 mb-6 border-4 border-orange-300">
          <div className="text-6xl mb-4 text-center">😤</div>
          <h3 className="text-2xl font-black text-center text-orange-800 mb-3">
            Annoyance & Possibility Practice!
          </h3>
          <p className="text-center text-gray-700 font-semibold">
            Раздражение или желание возможности — используй would/could
          </p>
        </div>
        <CheckableExercise
          title="Заполни пропуски"
          instruction="Используй would или could + V1"
          items={items}
        />
      </UiSection>
    </>
  );
}

function Step8() {
  const items: FillItem[] = [
    {
      left: "I wish I",
      answers: ["had bought"],
      right: "(buy) that dress yesterday. Now it's sold out. [PAST]",
    },
    {
      left: "If only I",
      answers: ["were", "was"],
      right: "(be) on vacation right now! [PRESENT]",
    },
    {
      left: "I wish you",
      answers: ["would be"],
      right: "(be) more careful with my things! [ANNOYANCE]",
    },
    {
      left: "If only I",
      answers: ["had learned", "had learnt"],
      right: "(learn) to swim as a child. [PAST]",
    },
    {
      left: "I wish I",
      answers: ["could fly"],
      right: "(fly) like a bird! [POSSIBILITY]",
    },
    {
      left: "If only she",
      answers: ["lived"],
      right: "(live) closer to me. [PRESENT]",
    },
    {
      left: "I wish the neighbors",
      answers: ["would stop"],
      right: "(stop) making so much noise! [ANNOYANCE]",
    },
    {
      left: "If only I",
      answers: ["hadn't said", "hadnt said"],
      right: "(not say) those mean words to her. [PAST]",
    },
    {
      left: "I wish I",
      answers: ["spoke"],
      right: "(speak) Italian. It's such a beautiful language. [PRESENT]",
    },
    {
      left: "If only the weather",
      answers: ["would improve"],
      right: "(improve)! It's been raining for days. [FUTURE WISH]",
    },
  ];

  return (
    <>
      <UiSection title="🎭 Mixed Practice: Все три типа">
        <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 rounded-2xl p-10 mb-8 border-4 border-purple-300 shadow-xl">
          <div className="text-8xl mb-6 text-center">🔀</div>
          <h2 className="text-3xl font-black text-center mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            Ultimate Wish Challenge
          </h2>
          <p className="text-xl text-gray-800 leading-relaxed text-center font-semibold mb-6">
            Определи тип и используй правильную форму! 🎯
          </p>
          <div className="bg-white/80 backdrop-blur rounded-xl p-4 border-2 border-purple-300">
            <p className="text-sm text-gray-700 text-center">
              В конце указано, какой тип: <strong className="text-red-700">PAST</strong>,
              <strong className="text-blue-700"> PRESENT</strong>,
              <strong className="text-orange-700"> ANNOYANCE</strong> или
              <strong className="text-green-700"> POSSIBILITY</strong>
            </p>
          </div>
        </div>

        <CheckableExercise
          title="Заполни пропуски"
          instruction="Определи тип и используй правильную форму глагола"
          items={items}
        />
      </UiSection>
    </>
  );
}

function Step9() {
  return (
    <>
      <UiSection title="⚠️ Common Mistakes — Типичные ошибки">
        <div className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 rounded-2xl p-10 mb-8 border-4 border-red-300 shadow-xl">
          <div className="text-8xl mb-6 text-center">⚡</div>
          <h2 className="text-3xl font-black text-center mb-6 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
            Не попадись в эти ловушки!
          </h2>
          <p className="text-xl text-gray-800 leading-relaxed text-center font-semibold">
            Разбираем самые частые ошибки в Wish & If Only 🚨
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-6 border-4 border-red-300">
            <div className="text-5xl mb-4">❌</div>
            <h3 className="text-2xl font-bold text-red-800 mb-6">Mistake #1: Использовал was вместо were</h3>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border-3 border-red-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">❌</span>
                  <p className="font-bold text-red-700">НЕПРАВИЛЬНО:</p>
                </div>
                <p className="text-lg text-gray-800 mb-2 line-through">
                  I wish I was rich.
                </p>
                <div className="bg-red-50 rounded-lg p-3 border-l-4 border-red-400">
                  <p className="text-sm text-red-700 font-semibold">
                    🚫 Ошибка: после wish/if only всегда используем WERE для всех лиц!
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border-3 border-green-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">✅</span>
                  <p className="font-bold text-green-700">ПРАВИЛЬНО:</p>
                </div>
                <p className="text-lg text-gray-800 mb-2 font-semibold">
                  I wish I were rich.
                </p>
                <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-400">
                  <p className="text-sm text-green-700 font-semibold">
                    ✓ WERE — для всех лиц (I, he, she, it, we, they)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border-4 border-orange-300">
            <div className="text-5xl mb-4">❌</div>
            <h3 className="text-2xl font-bold text-orange-800 mb-6">Mistake #2: Не сдвинул время назад</h3>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border-3 border-red-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">❌</span>
                  <p className="font-bold text-red-700">НЕПРАВИЛЬНО:</p>
                </div>
                <p className="text-lg text-gray-800 mb-2 line-through">
                  I wish I can speak Chinese.
                </p>
                <div className="bg-red-50 rounded-lg p-3 border-l-4 border-red-400">
                  <p className="text-sm text-red-700 font-semibold">
                    🚫 Ошибка: can → could (сдвигаем время назад!)
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border-3 border-green-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">✅</span>
                  <p className="font-bold text-green-700">ПРАВИЛЬНО:</p>
                </div>
                <p className="text-lg text-gray-800 mb-2 font-semibold">
                  I wish I could speak Chinese.
                </p>
                <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-400">
                  <p className="text-sm text-green-700 font-semibold">
                    ✓ После wish время сдвигается: can → could
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-lime-50 rounded-2xl p-6 border-4 border-yellow-300">
            <div className="text-5xl mb-4">❌</div>
            <h3 className="text-2xl font-bold text-yellow-800 mb-6">Mistake #3: Использовал would для себя</h3>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border-3 border-red-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">❌</span>
                  <p className="font-bold text-red-700">НЕПРАВИЛЬНО:</p>
                </div>
                <p className="text-lg text-gray-800 mb-2 line-through">
                  I wish I would be rich.
                </p>
                <div className="bg-red-50 rounded-lg p-3 border-l-4 border-red-400">
                  <p className="text-sm text-red-700 font-semibold">
                    🚫 Would используется для действий ДРУГИХ людей, не себя!
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border-3 border-green-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">✅</span>
                  <p className="font-bold text-green-700">ПРАВИЛЬНО:</p>
                </div>
                <p className="text-lg text-gray-800 mb-2 font-semibold">
                  I wish I were rich. / I wish you would help me.
                </p>
                <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-400">
                  <p className="text-sm text-green-700 font-semibold">
                    ✓ О себе: were/V2. О других: would + V1
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-4 border-blue-300">
            <div className="text-5xl mb-4">❌</div>
            <h3 className="text-2xl font-bold text-blue-800 mb-6">Mistake #4: Перепутал Past Perfect и Past Simple</h3>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border-3 border-red-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">❌</span>
                  <p className="font-bold text-red-700">НЕПРАВИЛЬНО:</p>
                </div>
                <p className="text-lg text-gray-800 mb-2 line-through">
                  I wish I studied harder. (для прошлого)
                </p>
                <div className="bg-red-50 rounded-lg p-3 border-l-4 border-red-400">
                  <p className="text-sm text-red-700 font-semibold">
                    🚫 Для сожаления о прошлом нужен Past Perfect!
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border-3 border-green-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">✅</span>
                  <p className="font-bold text-green-700">ПРАВИЛЬНО:</p>
                </div>
                <p className="text-lg text-gray-800 mb-2 font-semibold">
                  I wish I had studied harder. (past regret)
                </p>
                <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-400">
                  <p className="text-sm text-green-700 font-semibold">
                    ✓ Past Perfect = сожаление о прошлом
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border-4 border-indigo-300">
          <div className="text-5xl mb-3 text-center">💎</div>
          <h3 className="text-xl font-black text-center text-indigo-800 mb-4">
            Golden Rules для Wish & If Only
          </h3>
          <div className="space-y-3">
            <div className="bg-white rounded-xl p-4 border-2 border-indigo-200">
              <p className="font-bold text-indigo-700 mb-2">🎯 Rule #1: Всегда WERE после wish</p>
              <p className="text-sm text-gray-700">
                I wish I <strong>were</strong>, he <strong>were</strong>, she <strong>were</strong> — никогда was!
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 border-2 border-purple-200">
              <p className="font-bold text-purple-700 mb-2">🎯 Rule #2: Время сдвигается назад</p>
              <p className="text-sm text-gray-700">
                Present → Past Simple, Past → Past Perfect
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 border-2 border-pink-200">
              <p className="font-bold text-pink-700 mb-2">🎯 Rule #3: Would только для других людей</p>
              <p className="text-sm text-gray-700">
                I wish <strong>you</strong> would... / I wish <strong>he</strong> would... (не I would!)
              </p>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

function Step10() {
  const items: FillItem[] = [
    {
      left: "I wish I",
      answers: ["had saved"],
      right: "(save) more money when I was young.",
    },
    {
      left: "If only I",
      answers: ["were", "was"],
      right: "(be) taller! I hate being short.",
    },
    {
      left: "I wish you",
      answers: ["would stop"],
      right: "(stop) interrupting me!",
    },
    {
      left: "If only I",
      answers: ["hadn't quit", "hadnt quit"],
      right: "(not quit) my job. It was actually really good.",
    },
    {
      left: "I wish I",
      answers: ["could play"],
      right: "(play) the piano. It's such a beautiful instrument.",
    },
    {
      left: "If only she",
      answers: ["lived"],
      right: "(live) in the same city as me.",
    },
    {
      left: "I wish the government",
      answers: ["would invest"],
      right: "(invest) more in education.",
    },
    {
      left: "If only I",
      answers: ["had learned", "had learnt"],
      right: "(learn) a second language as a child.",
    },
    {
      left: "I wish I",
      answers: ["weren't", "wasnt", "were not"],
      right: "(not be) so stressed all the time.",
    },
    {
      left: "If only I",
      answers: ["could afford"],
      right: "(afford) to travel around the world!",
    },
  ];

  return (
    <>
      <UiSection title="🏆 Final Test + Cheat Sheet">
        <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 rounded-2xl p-10 mb-8 border-4 border-purple-400 shadow-xl">
          <div className="text-8xl mb-6 text-center">👑</div>
          <h2 className="text-4xl font-black text-center mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
            Master of Wishes!
          </h2>
          <p className="text-xl text-gray-800 leading-relaxed text-center font-semibold">
            Финальный тест на все типы Wish & If Only 🎯
          </p>
        </div>

        <CheckableExercise
          title="Финальный тест"
          instruction="Заполни пропуски правильной формой глагола (сам определи тип)"
          items={items}
        />

        <div className="mt-12 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl p-8 border-4 border-indigo-400 shadow-xl">
          <div className="text-7xl mb-6 text-center">📖</div>
          <h2 className="text-3xl font-black text-center mb-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Ultimate Wish & If Only Cheat Sheet
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border-4 border-red-300 hover:shadow-2xl transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">😭</div>
                <h3 className="text-2xl font-black text-red-700">Type 1: Past Regrets</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-red-50 rounded-xl p-4 border-2 border-red-300">
                  <p className="font-bold text-red-800 mb-2">📝 Formula:</p>
                  <p className="font-mono text-sm text-gray-800">
                    I wish / If only + <span className="text-red-700 font-bold">had + V3</span>
                  </p>
                </div>

                <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-xl p-4 border-2 border-red-200">
                  <p className="font-bold text-gray-800 mb-2">💡 Когда использовать:</p>
                  <p className="text-sm text-gray-700">
                    Сожаление о прошлом — то, что уже произошло или не произошло
                  </p>
                </div>

                <div className="bg-white rounded-xl p-4 border-2 border-red-200">
                  <p className="font-bold text-red-700 mb-2">✨ Examples:</p>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-800">
                      • I wish I <strong>had studied</strong> harder
                    </p>
                    <p className="text-gray-800">
                      • If only I <strong>hadn&apos;t said</strong> that
                    </p>
                    <p className="text-gray-800">
                      • I wish I <strong>had bought</strong> Bitcoin
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border-4 border-blue-300 hover:shadow-2xl transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">🌟</div>
                <h3 className="text-2xl font-black text-blue-700">Type 2: Present Wishes</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-300">
                  <p className="font-bold text-blue-800 mb-2">📝 Formula:</p>
                  <p className="font-mono text-sm text-gray-800">
                    I wish / If only + <span className="text-blue-700 font-bold">Past Simple</span>
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl p-4 border-2 border-blue-200">
                  <p className="font-bold text-gray-800 mb-2">💡 Когда использовать:</p>
                  <p className="text-sm text-gray-700">
                    Желание в настоящем — хочу, чтобы сейчас было по-другому
                  </p>
                </div>

                <div className="bg-white rounded-xl p-4 border-2 border-blue-200">
                  <p className="font-bold text-blue-700 mb-2">✨ Examples:</p>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-800">
                      • I wish I <strong>were</strong> rich
                    </p>
                    <p className="text-gray-800">
                      • If only I <strong>lived</strong> in New York
                    </p>
                    <p className="text-gray-800">
                      • I wish I <strong>could speak</strong> Chinese
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-xl p-3 border-2 border-yellow-300">
                  <p className="text-xs font-semibold text-yellow-800">
                    ⚠️ Всегда WERE для всех лиц (I were, he were, she were)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border-4 border-orange-300 hover:shadow-2xl transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">😤</div>
                <h3 className="text-2xl font-black text-orange-700">Type 3: Would/Could</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-orange-50 rounded-xl p-4 border-2 border-orange-300">
                  <p className="font-bold text-orange-800 mb-2">📝 Formula:</p>
                  <p className="font-mono text-sm text-gray-800">
                    I wish / If only + <span className="text-orange-700 font-bold">would/could + V1</span>
                  </p>
                </div>

                <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-4 border-2 border-orange-200">
                  <p className="font-bold text-gray-800 mb-2">💡 Когда использовать:</p>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Would:</strong> раздражение поведением других<br />
                    <strong>Could:</strong> желание возможности
                  </p>
                </div>

                <div className="bg-white rounded-xl p-4 border-2 border-orange-200">
                  <p className="font-bold text-orange-700 mb-2">✨ Examples:</p>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-800">
                      • I wish you <strong>would listen</strong> to me!
                    </p>
                    <p className="text-gray-800">
                      • If only he <strong>would stop</strong> complaining!
                    </p>
                    <p className="text-gray-800">
                      • I wish I <strong>could fly</strong>!
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-xl p-3 border-2 border-yellow-300">
                  <p className="text-xs font-semibold text-yellow-800">
                    ⚠️ Would для ДРУГИХ людей, не для себя! (❌ I wish I would be rich)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-4 border-green-300">
            <div className="text-5xl mb-3 text-center">🧠</div>
            <h3 className="text-2xl font-black text-center text-green-800 mb-6">
              Quick Decision Guide
            </h3>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border-3 border-green-300">
                <p className="font-bold text-green-800 mb-3 text-lg">❓ Как выбрать правильный тип?</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border-2 border-red-200">
                    <span className="text-2xl">1️⃣</span>
                    <div>
                      <p className="font-semibold text-gray-800 mb-1">Сожаление о прошлом?</p>
                      <p className="text-sm text-gray-700">
                        → Past Perfect: I wish I <strong>had + V3</strong>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-2 border-blue-200">
                    <span className="text-2xl">2️⃣</span>
                    <div>
                      <p className="font-semibold text-gray-800 mb-1">Желание в настоящем?</p>
                      <p className="text-sm text-gray-700">
                        → Past Simple: I wish I <strong>were/V2</strong>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border-2 border-orange-200">
                    <span className="text-2xl">3️⃣</span>
                    <div>
                      <p className="font-semibold text-gray-800 mb-1">Раздражение или возможность?</p>
                      <p className="text-sm text-gray-700">
                        → Would/Could: I wish you <strong>would/could + V1</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6 border-4 border-pink-300">
            <div className="text-4xl mb-3 text-center">💪</div>
            <h3 className="text-xl font-black text-center text-pink-800 mb-4">
              Congratulations! 🎉
            </h3>
            <p className="text-center text-gray-700 text-lg leading-relaxed">
              Ты прошёл все 10 страниц Hypothetical Wish! Теперь ты можешь выражать сожаления,
              желания и мечты на продвинутом уровне. Keep wishing and dreaming! 🌟
            </p>
          </div>
        </div>
      </UiSection>
    </>
  );
}
