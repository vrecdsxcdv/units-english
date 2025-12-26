"use client";
import { Section } from "@/components/ui/Section";
import CheckableExercise from "../CheckableExercise";
import type { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function AdverbsPosition({ step }: Props) {
  if (step === 1) {
    return (
      <>
        <Section title="📍 Adverbs: Position & Advanced Types">
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-400">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">
              Наречия: позиция и продвинутые типы
            </h2>
            <p className="text-sm text-zinc-700 mb-4">
              **Наречия (adverbs)** — одна из самых гибких частей речи в
              английском! Их **позиция в предложении** может **радикально
              изменить** значение и стиль высказывания. В этой теме мы изучим
              **3 позиции** и **3 продвинутых типа** наречий!
            </p>

            <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-lg p-5 border-2 border-red-400 mb-4">
              <h3 className="font-bold text-red-900 mb-3 text-lg text-center">
                🔑 Три позиции наречий
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-blue-900">
                    FRONT Position
                  </p>
                  <p className="text-xs text-zinc-600 mb-2">
                    В начале предложения
                  </p>
                  <p className="text-sm italic">
                    <strong className="text-blue-700">Obviously</strong>, he's
                    lying.
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-green-900">
                    MID Position
                  </p>
                  <p className="text-xs text-zinc-600 mb-2">
                    В середине предложения
                  </p>
                  <p className="text-sm italic">
                    He <strong className="text-green-700">obviously</strong>{" "}
                    lied.
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-purple-900">
                    END Position
                  </p>
                  <p className="text-xs text-zinc-600 mb-2">
                    В конце предложения
                  </p>
                  <p className="text-sm italic">
                    He spoke{" "}
                    <strong className="text-purple-700">clearly</strong>.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-100 rounded-lg p-5 border-2 border-cyan-400 mb-4">
              <h3 className="font-bold text-cyan-900 mb-3 text-lg text-center">
                🎯 Три продвинутых типа
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-blue-900">
                    Comment Adverbs
                  </p>
                  <p className="text-xs text-zinc-600 mb-2">
                    Комментирующие (ваше мнение)
                  </p>
                  <p className="text-sm italic">
                    <strong className="text-blue-700">Fortunately</strong>, we
                    survived.
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-green-900">
                    Viewpoint Adverbs
                  </p>
                  <p className="text-xs text-zinc-600 mb-2">
                    Точка зрения (аспект)
                  </p>
                  <p className="text-sm italic">
                    <strong className="text-green-700">Personally</strong>, I
                    disagree.
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-purple-900">
                    Linking Adverbs
                  </p>
                  <p className="text-xs text-zinc-600 mb-2">
                    Связующие (логика)
                  </p>
                  <p className="text-sm italic">
                    <strong className="text-purple-700">However</strong>, I
                    stayed.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-5 border-2 border-amber-400">
              <h4 className="font-bold text-amber-900 mb-3 text-center">
                💡 В этой теме мы изучим:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-zinc-700">
                <div>
                  <p>✅ Front / Mid / End Position</p>
                  <p>✅ Comment Adverbs (fortunately, surprisingly)</p>
                  <p>✅ Viewpoint Adverbs (personally, politically)</p>
                </div>
                <div>
                  <p>✅ Linking Adverbs (however, therefore, moreover)</p>
                  <p>✅ 100+ примеров использования</p>
                  <p>✅ Типичные ошибки русскоговорящих</p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 2) {
    return (
      <>
        <Section title="⬆️ FRONT Position — Начало предложения">
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300 mb-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Наречия в начале предложения
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              **FRONT Position** = наречие стоит **в самом начале** предложения
              и обычно **выделяется запятой**! Это создаёт **акцент** и делает
              речь более **выразительной**.
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  Основные случаи использования
                </h4>
                <div className="space-y-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">
                      1. Comment Adverbs (комментирующие)
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                      <p className="text-sm italic">
                        <strong className="text-blue-700">Fortunately</strong>,
                        we arrived on time.
                      </p>
                      <p className="text-xs text-zinc-600">
                        К счастью, мы прибыли вовремя
                      </p>
                      <p className="text-sm italic">
                        <strong className="text-blue-700">Surprisingly</strong>,
                        he agreed.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Удивительно, он согласился
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">
                      2. Time Adverbs (время)
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                      <p className="text-sm italic">
                        <strong className="text-green-700">Yesterday</strong>, I
                        went shopping.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Вчера я ходил за покупками
                      </p>
                      <p className="text-sm italic">
                        <strong className="text-green-700">Tomorrow</strong>,
                        we'll leave.
                      </p>
                      <p className="text-xs text-zinc-600">Завтра мы уедем</p>
                    </div>
                  </div>

                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">
                      3. Linking Adverbs (связующие)
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                      <p className="text-sm italic">
                        <strong className="text-purple-700">However</strong>, I
                        stayed.
                      </p>
                      <p className="text-xs text-zinc-600">Однако я остался</p>
                      <p className="text-sm italic">
                        <strong className="text-purple-700">Therefore</strong>,
                        we left.
                      </p>
                      <p className="text-xs text-zinc-600">Поэтому мы ушли</p>
                    </div>
                  </div>

                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">
                      4. Viewpoint Adverbs (точка зрения)
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                      <p className="text-sm italic">
                        <strong className="text-orange-700">Personally</strong>,
                        I disagree.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Лично я не согласен
                      </p>
                      <p className="text-sm italic">
                        <strong className="text-orange-700">Politically</strong>
                        , it's risky.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Политически это рискованно
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  20 наречий для FRONT Position
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="bg-white rounded p-2">
                    <p className="text-sm font-semibold">Obviously</p>
                    <p className="text-xs text-zinc-600">Очевидно</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="text-sm font-semibold">Clearly</p>
                    <p className="text-xs text-zinc-600">Ясно</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="text-sm font-semibold">Fortunately</p>
                    <p className="text-xs text-zinc-600">К счастью</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="text-sm font-semibold">Unfortunately</p>
                    <p className="text-xs text-zinc-600">К сожалению</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="text-sm font-semibold">Surprisingly</p>
                    <p className="text-xs text-zinc-600">Удивительно</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="text-sm font-semibold">Frankly</p>
                    <p className="text-xs text-zinc-600">Честно</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="text-sm font-semibold">Honestly</p>
                    <p className="text-xs text-zinc-600">Честно говоря</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="text-sm font-semibold">Basically</p>
                    <p className="text-xs text-zinc-600">В основном</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="text-sm font-semibold">Naturally</p>
                    <p className="text-xs text-zinc-600">Естественно</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="text-sm font-semibold">Actually</p>
                    <p className="text-xs text-zinc-600">На самом деле</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="text-sm font-semibold">Personally</p>
                    <p className="text-xs text-zinc-600">Лично</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="text-sm font-semibold">Apparently</p>
                    <p className="text-xs text-zinc-600">По-видимому</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="text-sm font-semibold">However</p>
                    <p className="text-xs text-zinc-600">Однако</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="text-sm font-semibold">Therefore</p>
                    <p className="text-xs text-zinc-600">Поэтому</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="text-sm font-semibold">Moreover</p>
                    <p className="text-xs text-zinc-600">Более того</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="text-sm font-semibold">Nevertheless</p>
                    <p className="text-xs text-zinc-600">Тем не менее</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="text-sm font-semibold">Meanwhile</p>
                    <p className="text-xs text-zinc-600">Тем временем</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="text-sm font-semibold">Consequently</p>
                    <p className="text-xs text-zinc-600">Следовательно</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="text-sm font-semibold">Certainly</p>
                    <p className="text-xs text-zinc-600">Конечно</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="text-sm font-semibold">Undoubtedly</p>
                    <p className="text-xs text-zinc-600">Несомненно</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-400">
                <h4 className="font-bold text-yellow-900 mb-3 text-center">
                  ⚠️ Важно: запятая!
                </h4>
                <div className="space-y-2 text-sm text-zinc-700">
                  <p>
                    <strong>✅ С запятой:</strong> Obviously, he's lying.
                  </p>
                  <p>
                    <strong>❌ Без запятой:</strong> Obviously he's lying.
                    (менее формально)
                  </p>
                  <p className="text-xs text-zinc-600 mt-2">
                    💡 В формальном английском **запятая обязательна** после
                    наречия в FRONT Position!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 3) {
    return (
      <>
        <Section title="↔️ MID Position — Середина предложения">
          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300 mb-4">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              Наречия в середине предложения
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              **MID Position** = наречие стоит **между подлежащим и сказуемым**
              (или после первого вспомогательного глагола)! Это **самая частая**
              позиция для наречий частоты, степени и манеры.
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  Правила для MID Position
                </h4>
                <div className="space-y-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">
                      1. После подлежащего, ПЕРЕД основным глаголом
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                      <p className="text-sm italic">
                        She <strong className="text-blue-700">often</strong>{" "}
                        visits us.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Она часто навещает нас
                      </p>
                      <p className="text-sm italic">
                        They <strong className="text-blue-700">always</strong>{" "}
                        arrive late.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Они всегда опаздывают
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">
                      2. ПОСЛЕ глагола BE
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                      <p className="text-sm italic">
                        He is <strong className="text-green-700">always</strong>{" "}
                        busy.
                      </p>
                      <p className="text-xs text-zinc-600">Он всегда занят</p>
                      <p className="text-sm italic">
                        They are{" "}
                        <strong className="text-green-700">usually</strong>{" "}
                        late.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Они обычно опаздывают
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">
                      3. ПОСЛЕ первого вспомогательного глагола
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                      <p className="text-sm italic">
                        I have{" "}
                        <strong className="text-purple-700">never</strong> been
                        there.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Я никогда там не был
                      </p>
                      <p className="text-sm italic">
                        She can{" "}
                        <strong className="text-purple-700">hardly</strong>{" "}
                        walk.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Она едва может ходить
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">
                      4. ПЕРЕД NOT в отрицаниях (для некоторых наречий)
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                      <p className="text-sm italic">
                        I <strong className="text-orange-700">probably</strong>{" "}
                        won't go.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Я, вероятно, не пойду
                      </p>
                      <p className="text-sm italic">
                        He{" "}
                        <strong className="text-orange-700">certainly</strong>{" "}
                        didn't know.
                      </p>
                      <p className="text-xs text-zinc-600">Он точно не знал</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  Наречия частоты в MID Position
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="bg-white rounded p-2">
                    <p className="text-sm font-semibold">Always</p>
                    <p className="text-xs text-zinc-600">Всегда (100%)</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="text-sm font-semibold">Usually</p>
                    <p className="text-xs text-zinc-600">Обычно (80%)</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="text-sm font-semibold">Often</p>
                    <p className="text-xs text-zinc-600">Часто (60%)</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="text-sm font-semibold">Sometimes</p>
                    <p className="text-xs text-zinc-600">Иногда (40%)</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="text-sm font-semibold">Rarely</p>
                    <p className="text-xs text-zinc-600">Редко (20%)</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="text-sm font-semibold">Seldom</p>
                    <p className="text-xs text-zinc-600">Редко (20%)</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="text-sm font-semibold">Never</p>
                    <p className="text-xs text-zinc-600">Никогда (0%)</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="text-sm font-semibold">Hardly ever</p>
                    <p className="text-xs text-zinc-600">Почти никогда</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-lg p-5 border-2 border-purple-400">
                <h4 className="text-xl font-bold text-purple-900 mb-3">
                  Наречия степени в MID Position
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="bg-white rounded p-2">
                    <p className="text-sm font-semibold">Completely</p>
                    <p className="text-xs text-zinc-600">Полностью</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="text-sm font-semibold">Absolutely</p>
                    <p className="text-xs text-zinc-600">Абсолютно</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="text-sm font-semibold">Totally</p>
                    <p className="text-xs text-zinc-600">Совершенно</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="text-sm font-semibold">Really</p>
                    <p className="text-xs text-zinc-600">Действительно</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="text-sm font-semibold">Quite</p>
                    <p className="text-xs text-zinc-600">Довольно</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="text-sm font-semibold">Almost</p>
                    <p className="text-xs text-zinc-600">Почти</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="text-sm font-semibold">Nearly</p>
                    <p className="text-xs text-zinc-600">Почти</p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="text-sm font-semibold">Hardly</p>
                    <p className="text-xs text-zinc-600">Едва</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-5 border-2 border-red-400">
                <h4 className="font-bold text-red-900 mb-3">
                  ⚠️ Критическая ошибка!
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm mb-1">
                      ❌ I <strong className="text-red-700">go often</strong>{" "}
                      there.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Неправильно! OFTEN должно быть ПЕРЕД глаголом!
                    </p>
                  </div>
                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm mb-1">
                      ✅ I <strong className="text-green-700">often go</strong>{" "}
                      there.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Правильно! OFTEN перед основным глаголом!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 4) {
    return (
      <>
        <Section title="⬇️ END Position — Конец предложения">
          <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300 mb-4">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              Наречия в конце предложения
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              **END Position** = наречие стоит **в конце** предложения! Это
              **обязательная позиция** для наречий **манеры** (как?) и
              **возможная** для наречий времени и места.
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  Основные случаи END Position
                </h4>
                <div className="space-y-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">
                      1. Наречия манеры (HOW? — Как?)
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                      <p className="text-sm italic">
                        He spoke{" "}
                        <strong className="text-blue-700">clearly</strong>.
                      </p>
                      <p className="text-xs text-zinc-600">Он говорил чётко</p>
                      <p className="text-sm italic">
                        She sings{" "}
                        <strong className="text-blue-700">beautifully</strong>.
                      </p>
                      <p className="text-xs text-zinc-600">Она поёт красиво</p>
                      <p className="text-sm italic">
                        They work{" "}
                        <strong className="text-blue-700">hard</strong>.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Они работают усердно
                      </p>
                      <p className="text-sm italic">
                        He drives{" "}
                        <strong className="text-blue-700">carefully</strong>.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Он водит осторожно
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">
                      2. Наречия места (WHERE? — Где?)
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                      <p className="text-sm italic">
                        We met <strong className="text-green-700">there</strong>
                        .
                      </p>
                      <p className="text-xs text-zinc-600">
                        Мы встретились там
                      </p>
                      <p className="text-sm italic">
                        They live{" "}
                        <strong className="text-green-700">here</strong>.
                      </p>
                      <p className="text-xs text-zinc-600">Они живут здесь</p>
                      <p className="text-sm italic">
                        He went{" "}
                        <strong className="text-green-700">upstairs</strong>.
                      </p>
                      <p className="text-xs text-zinc-600">Он пошёл наверх</p>
                      <p className="text-sm italic">
                        She looked{" "}
                        <strong className="text-green-700">outside</strong>.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Она посмотрела снаружи
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold">
                      3. Наречия времени (WHEN? — Когда?)
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                      <p className="text-sm italic">
                        I'll call you{" "}
                        <strong className="text-purple-700">tomorrow</strong>.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Я позвоню тебе завтра
                      </p>
                      <p className="text-sm italic">
                        We met{" "}
                        <strong className="text-purple-700">yesterday</strong>.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Мы встретились вчера
                      </p>
                      <p className="text-sm italic">
                        They left{" "}
                        <strong className="text-purple-700">early</strong>.
                      </p>
                      <p className="text-xs text-zinc-600">Они ушли рано</p>
                      <p className="text-sm italic">
                        She arrived{" "}
                        <strong className="text-purple-700">late</strong>.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Она прибыла поздно
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-amber-100 rounded-lg p-5 border-2 border-orange-400">
                <h4 className="text-xl font-bold text-orange-900 mb-3">
                  Порядок наречий в END Position: MANNER — PLACE — TIME
                </h4>
                <div className="space-y-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-2 font-semibold text-center">
                      Как? (Manner) → Где? (Place) → Когда? (Time)
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm italic">
                        He spoke{" "}
                        <strong className="text-blue-700">clearly</strong>{" "}
                        <strong className="text-green-700">
                          at the meeting
                        </strong>{" "}
                        <strong className="text-purple-700">yesterday</strong>.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Manner (как) → Place (где) → Time (когда)
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded p-3">
                    <p className="text-sm italic">
                      She sang{" "}
                      <strong className="text-blue-700">beautifully</strong>{" "}
                      <strong className="text-green-700">on stage</strong>{" "}
                      <strong className="text-purple-700">last night</strong>.
                    </p>
                  </div>

                  <div className="bg-white rounded p-3">
                    <p className="text-sm italic">
                      They worked{" "}
                      <strong className="text-blue-700">hard</strong>{" "}
                      <strong className="text-green-700">in the office</strong>{" "}
                      <strong className="text-purple-700">all day</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-400">
                <h4 className="font-bold text-yellow-900 mb-3 text-center">
                  🔑 Ключевое правило
                </h4>
                <div className="space-y-2 text-sm text-zinc-700">
                  <p>
                    <strong>Наречия манеры</strong> (clearly, slowly, carefully)
                    **почти всегда** стоят в END Position!
                  </p>
                  <p>
                    <strong>Наречия времени и места</strong> могут стоять в
                    FRONT или END Position.
                  </p>
                  <p>
                    <strong>Порядок:</strong> MANNER (как?) → PLACE (где?) →
                    TIME (когда?)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 5) {
    return (
      <>
        <Section title="💬 Comment Adverbs — Комментирующие наречия">
          <div className="bg-cyan-50 rounded-lg p-6 border-2 border-cyan-300 mb-4">
            <h3 className="text-2xl font-bold text-cyan-900 mb-4">
              Comment Adverbs — выражают ваше отношение
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              **Comment Adverbs** = наречия, которые выражают **ваше мнение**
              или **отношение** к тому, что происходит! Они обычно стоят в
              **FRONT Position** с запятой.
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  Основные Comment Adverbs
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold text-blue-900">
                      Fortunately
                    </p>
                    <p className="text-xs text-zinc-600 mb-2">К счастью</p>
                    <p className="text-sm italic">
                      Fortunately, we arrived on time.
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold text-red-900">
                      Unfortunately
                    </p>
                    <p className="text-xs text-zinc-600 mb-2">К сожалению</p>
                    <p className="text-sm italic">
                      Unfortunately, he failed the exam.
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold text-purple-900">
                      Surprisingly
                    </p>
                    <p className="text-xs text-zinc-600 mb-2">Удивительно</p>
                    <p className="text-sm italic">Surprisingly, she agreed.</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold text-orange-900">
                      Obviously
                    </p>
                    <p className="text-xs text-zinc-600 mb-2">Очевидно</p>
                    <p className="text-sm italic">Obviously, he's lying.</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold text-green-900">
                      Naturally
                    </p>
                    <p className="text-xs text-zinc-600 mb-2">Естественно</p>
                    <p className="text-sm italic">Naturally, I said yes.</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold text-cyan-900">
                      Clearly
                    </p>
                    <p className="text-xs text-zinc-600 mb-2">Ясно</p>
                    <p className="text-sm italic">
                      Clearly, something went wrong.
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold text-pink-900">
                      Frankly
                    </p>
                    <p className="text-xs text-zinc-600 mb-2">Честно говоря</p>
                    <p className="text-sm italic">Frankly, I don't care.</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold text-indigo-900">
                      Honestly
                    </p>
                    <p className="text-xs text-zinc-600 mb-2">Честно</p>
                    <p className="text-sm italic">Honestly, I'm exhausted.</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold text-teal-900">
                      Apparently
                    </p>
                    <p className="text-xs text-zinc-600 mb-2">По-видимому</p>
                    <p className="text-sm italic">Apparently, he's moved.</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold text-amber-900">
                      Basically
                    </p>
                    <p className="text-xs text-zinc-600 mb-2">В основном</p>
                    <p className="text-sm italic">Basically, we're done.</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold text-lime-900">
                      Interestingly
                    </p>
                    <p className="text-xs text-zinc-600 mb-2">Интересно</p>
                    <p className="text-sm italic">Interestingly, he refused.</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold text-rose-900">
                      Sadly
                    </p>
                    <p className="text-xs text-zinc-600 mb-2">К сожалению</p>
                    <p className="text-sm italic">Sadly, he passed away.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  Примеры в контексте
                </h4>
                <div className="space-y-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-2">
                      <strong className="text-green-700">Fortunately</strong>,
                      nobody was hurt in the accident.
                    </p>
                    <p className="text-xs text-zinc-600">
                      К счастью, никто не пострадал в аварии.
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-2">
                      <strong className="text-red-700">Unfortunately</strong>, I
                      have to cancel our meeting.
                    </p>
                    <p className="text-xs text-zinc-600">
                      К сожалению, мне придётся отменить нашу встречу.
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-2">
                      <strong className="text-purple-700">Surprisingly</strong>,
                      the exam was quite easy.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Удивительно, экзамен был довольно лёгким.
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-2">
                      <strong className="text-orange-700">Obviously</strong>,
                      you didn't read the instructions.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Очевидно, ты не прочитал инструкцию.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-400">
                <h4 className="font-bold text-yellow-900 mb-3 text-center">
                  🔑 Ключевая особенность
                </h4>
                <div className="space-y-2 text-sm text-zinc-700">
                  <p>
                    Comment Adverbs **модифицируют всё предложение целиком**, а
                    не отдельное слово!
                  </p>
                  <p>
                    Они выражают **ваше отношение** к ситуации, а не описывают
                    действие.
                  </p>
                  <p>
                    <strong>Позиция:</strong> почти всегда FRONT (с запятой)!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 6) {
    const items: FillItem[] = [
      {
        left: "",
        answers: ["Obviously", "obviously"],
        right: ", he's lying.",
        explanation: "Очевидно → Obviously (FRONT Position)",
      },
      {
        left: "She",
        answers: ["often", "Often"],
        right: "visits us.",
        explanation: "Часто → often (MID Position, перед глаголом!)",
      },
      {
        left: "He spoke",
        answers: ["clearly", "Clearly"],
        right: ".",
        explanation: "Чётко → clearly (END Position для manner!)",
      },
      {
        left: "",
        answers: ["Fortunately", "fortunately"],
        right: ", we survived.",
        explanation: "К счастью → Fortunately (Comment Adverb, FRONT!)",
      },
      {
        left: "They are",
        answers: ["always", "Always"],
        right: "late.",
        explanation: "Всегда → always (MID Position, после BE!)",
      },
      {
        left: "She sings",
        answers: ["beautifully", "Beautifully"],
        right: ".",
        explanation: "Красиво → beautifully (END Position для manner!)",
      },
    ];

    return (
      <>
        <Section title="✏️ Упражнение 1: Позиция наречий">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-5 border-2 border-orange-400 mb-4">
            <p className="font-bold text-orange-900 mb-2 text-lg">
              🎯 Вставь наречие в правильную позицию!
            </p>
            <p className="text-sm text-zinc-700">
              Используй FRONT / MID / END Position в зависимости от типа
              наречия.
            </p>
          </div>

          <CheckableExercise
            title="Adverbs Position — 6 вопросов"
            instruction="Вставь наречие в правильное место."
            items={items}
          />
        </Section>
      </>
    );
  }

  if (step === 7) {
    return (
      <>
        <Section title="👁️ Viewpoint Adverbs — Точка зрения">
          <div className="bg-pink-50 rounded-lg p-6 border-2 border-pink-300 mb-4">
            <h3 className="text-2xl font-bold text-pink-900 mb-4">
              Viewpoint Adverbs — с какой точки зрения?
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              **Viewpoint Adverbs** = наречия, которые показывают **точку
              зрения** или **аспект**, с которой вы рассматриваете ситуацию!
              Обычно в **FRONT Position** с запятой.
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  Основные Viewpoint Adverbs
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold text-blue-900">
                      Personally
                    </p>
                    <p className="text-xs text-zinc-600 mb-2">
                      Лично (моё мнение)
                    </p>
                    <p className="text-sm italic">Personally, I disagree.</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold text-green-900">
                      Politically
                    </p>
                    <p className="text-xs text-zinc-600 mb-2">Политически</p>
                    <p className="text-sm italic">Politically, it's risky.</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold text-purple-900">
                      Economically
                    </p>
                    <p className="text-xs text-zinc-600 mb-2">Экономически</p>
                    <p className="text-sm italic">
                      Economically, it makes sense.
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold text-orange-900">
                      Financially
                    </p>
                    <p className="text-xs text-zinc-600 mb-2">Финансово</p>
                    <p className="text-sm italic">Financially, we're stable.</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold text-red-900">
                      Morally
                    </p>
                    <p className="text-xs text-zinc-600 mb-2">Морально</p>
                    <p className="text-sm italic">Morally, it's wrong.</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold text-cyan-900">
                      Legally
                    </p>
                    <p className="text-xs text-zinc-600 mb-2">Юридически</p>
                    <p className="text-sm italic">Legally, you're right.</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold text-indigo-900">
                      Technically
                    </p>
                    <p className="text-xs text-zinc-600 mb-2">Технически</p>
                    <p className="text-sm italic">
                      Technically, it's possible.
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold text-teal-900">
                      Theoretically
                    </p>
                    <p className="text-xs text-zinc-600 mb-2">Теоретически</p>
                    <p className="text-sm italic">Theoretically, yes, but...</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold text-pink-900">
                      Practically
                    </p>
                    <p className="text-xs text-zinc-600 mb-2">Практически</p>
                    <p className="text-sm italic">
                      Practically, it won't work.
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-1 font-semibold text-amber-900">
                      Historically
                    </p>
                    <p className="text-xs text-zinc-600 mb-2">Исторически</p>
                    <p className="text-sm italic">
                      Historically, this is true.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-900 mb-3">
                  Примеры в контексте
                </h4>
                <div className="space-y-3">
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-2">
                      <strong className="text-blue-700">Personally</strong>, I
                      think he's wrong.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Лично я думаю, что он неправ.
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-2">
                      <strong className="text-green-700">Politically</strong>,
                      this decision is controversial.
                    </p>
                    <p className="text-xs text-zinc-600">
                      С политической точки зрения, это решение спорное.
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-2">
                      <strong className="text-purple-700">Economically</strong>,
                      the country is doing well.
                    </p>
                    <p className="text-xs text-zinc-600">
                      С экономической точки зрения, страна процветает.
                    </p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm mb-2">
                      <strong className="text-orange-700">Financially</strong>,
                      we can't afford it.
                    </p>
                    <p className="text-xs text-zinc-600">
                      С финансовой точки зрения, мы не можем себе это позволить.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-400">
                <h4 className="font-bold text-yellow-900 mb-3 text-center">
                  🔑 Ключевое различие
                </h4>
                <div className="space-y-2 text-sm text-zinc-700">
                  <p>
                    <strong>Comment Adverbs</strong> = ваше отношение
                    (fortunately, surprisingly)
                  </p>
                  <p>
                    <strong>Viewpoint Adverbs</strong> = аспект/сфера
                    рассмотрения (personally, politically)
                  </p>
                  <p>Оба типа обычно стоят в **FRONT Position** с запятой!</p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 8) {
    return (
      <>
        <Section title="🔗 Linking Adverbs — Связующие наречия">
          <div className="bg-orange-50 rounded-lg p-6 border-2 border-orange-300 mb-4">
            <h3 className="text-2xl font-bold text-orange-900 mb-4">
              Linking Adverbs — связывают предложения и идеи
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              **Linking Adverbs** = наречия, которые **связывают** предложения и
              показывают **отношения** между идеями! Обычно в **FRONT Position**
              с запятой.
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h4 className="text-xl font-bold text-blue-900 mb-3">
                  Типы Linking Adverbs
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-white rounded p-3">
                    <p className="font-bold text-blue-900 mb-2">
                      Addition (добавление)
                    </p>
                    <p className="text-sm">Furthermore</p>
                    <p className="text-sm">Moreover</p>
                    <p className="text-sm">Besides</p>
                    <p className="text-sm">Additionally</p>
                    <p className="text-sm">Also</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="font-bold text-green-900 mb-2">
                      Contrast (контраст)
                    </p>
                    <p className="text-sm">However</p>
                    <p className="text-sm">Nevertheless</p>
                    <p className="text-sm">Nonetheless</p>
                    <p className="text-sm">On the other hand</p>
                    <p className="text-sm">In contrast</p>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="font-bold text-purple-900 mb-2">
                      Result (результат)
                    </p>
                    <p className="text-sm">Therefore</p>
                    <p className="text-sm">Consequently</p>
                    <p className="text-sm">Thus</p>
                    <p className="text-sm">Hence</p>
                    <p className="text-sm">As a result</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-orange-900 mb-2">30 примеров</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <p className="text-sm">Furthermore, we need more time.</p>
                  <p className="text-sm">However, I disagree.</p>
                  <p className="text-sm">Therefore, we left early.</p>
                  <p className="text-sm">Moreover, it's expensive.</p>
                  <p className="text-sm">Nevertheless, he stayed.</p>
                  <p className="text-sm">Consequently, they failed.</p>
                  <p className="text-sm">Besides, I'm tired.</p>
                  <p className="text-sm">On the other hand, she's right.</p>
                  <p className="text-sm">Thus, we decided to wait.</p>
                  <p className="text-sm">Additionally, it's risky.</p>
                  <p className="text-sm">Nonetheless, we tried.</p>
                  <p className="text-sm">Hence, the delay.</p>
                  <p className="text-sm">Also, it's important.</p>
                  <p className="text-sm">In contrast, he's calm.</p>
                  <p className="text-sm">As a result, we won.</p>
                  <p className="text-sm">Furthermore, it's illegal.</p>
                  <p className="text-sm">However, she agreed.</p>
                  <p className="text-sm">Therefore, I quit.</p>
                  <p className="text-sm">Moreover, they're late.</p>
                  <p className="text-sm">Nevertheless, we survived.</p>
                  <p className="text-sm">Consequently, he left.</p>
                  <p className="text-sm">Besides, it's too late.</p>
                  <p className="text-sm">On the other hand, it's cheap.</p>
                  <p className="text-sm">Thus, the problem.</p>
                  <p className="text-sm">Additionally, we're busy.</p>
                  <p className="text-sm">Nonetheless, it worked.</p>
                  <p className="text-sm">Hence, the confusion.</p>
                  <p className="text-sm">Also, he's smart.</p>
                  <p className="text-sm">In contrast, she's quiet.</p>
                  <p className="text-sm">As a result, they won.</p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 9) {
    const items: FillItem[] = [
      {
        left: "He speaks",
        answers: ["clearly"],
        right: ".",
        explanation:
          "Наречие образа действия → END Position (He speaks clearly)",
      },
      {
        left: "She is",
        answers: ["always"],
        right: "busy.",
        explanation: "Наречие частоты → MID Position (She is always busy)",
      },
      {
        left: "",
        answers: ["Unfortunately"],
        right: ", we lost.",
        explanation: "Comment adverb → FRONT Position (Unfortunately, we lost)",
      },
      {
        left: "They have",
        answers: ["never"],
        right: "been there.",
        explanation:
          "Наречие частоты → MID Position (They have never been there)",
      },
      {
        left: "",
        answers: ["Personally"],
        right: ", I disagree.",
        explanation:
          "Viewpoint adverb → FRONT Position (Personally, I disagree)",
      },
      {
        left: "We met",
        answers: ["yesterday"],
        right: ".",
        explanation: "Наречие времени → END Position (We met yesterday)",
      },
    ];

    return (
      <>
        <Section title="✏️ Упражнение 2: Позиция наречий">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-5 border-2 border-blue-400 mb-4">
            <p className="font-bold text-blue-900 mb-2 text-lg">
              🎯 Вставь наречие в правильную позицию!
            </p>
            <p className="text-sm text-zinc-700">
              Используй правила FRONT / MID / END Position!
            </p>
          </div>

          <CheckableExercise
            title="Позиция наречий — 6 вопросов"
            instruction="Вставь наречие в правильное место в предложении."
            items={items}
          />
        </Section>
      </>
    );
  }

  if (step === 10) {
    return (
      <>
        <Section title="⚠️ 10 критических ошибок">
          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300 mb-4">
            <h3 className="text-2xl font-bold text-red-900 mb-4">
              Типичные ошибки с позицией наречий
            </h3>

            <div className="space-y-3">
              {[
                {
                  title: "Ошибка 1: Наречие частоты после основного глагола",
                  wrong: "He goes always there.",
                  correct: "He always goes there.",
                  rule: "Наречия частоты ПЕРЕД основным глаголом!",
                },
                {
                  title: "Ошибка 2: Comment adverb без запятой",
                  wrong: "Unfortunately I'm busy.",
                  correct: "Unfortunately, I'm busy.",
                  rule: "Comment adverbs ВСЕГДА с запятой!",
                },
                {
                  title:
                    "Ошибка 3: Наречие образа действия между глаголом и объектом",
                  wrong: "He speaks clearly English.",
                  correct: "He speaks English clearly.",
                  rule: "Наречие образа действия ПОСЛЕ объекта!",
                },
                {
                  title: "Ошибка 4: Наречие частоты перед BE",
                  wrong: "Always she is late.",
                  correct: "She is always late.",
                  rule: "Наречия частоты ПОСЛЕ BE!",
                },
                {
                  title:
                    "Ошибка 5: Неправильный порядок: Time → Place → Manner",
                  wrong: "He worked yesterday hard.",
                  correct: "He worked hard yesterday.",
                  rule: "Порядок: Manner → Place → Time!",
                },
                {
                  title: "Ошибка 6: Viewpoint adverb без запятой",
                  wrong: "Personally I think...",
                  correct: "Personally, I think...",
                  rule: "Viewpoint adverbs с запятой!",
                },
                {
                  title: "Ошибка 7: Наречие частоты после модального глагола",
                  wrong: "She can always help.",
                  correct: "She always can help. / She can always help.",
                  rule: "Оба варианта возможны, но ПЕРЕД модальным — формальнее!",
                },
                {
                  title: "Ошибка 8: Linking adverb без запятой",
                  wrong: "However I stayed.",
                  correct: "However, I stayed.",
                  rule: "Linking adverbs ВСЕГДА с запятой!",
                },
                {
                  title: "Ошибка 9: Наречие степени после прилагательного",
                  wrong: "Beautiful very girl.",
                  correct: "Very beautiful girl.",
                  rule: "Наречия степени ПЕРЕД прилагательным!",
                },
                {
                  title: "Ошибка 10: Несколько наречий в конце без порядка",
                  wrong: "He spoke yesterday clearly at the meeting.",
                  correct: "He spoke clearly at the meeting yesterday.",
                  rule: "Порядок: Manner → Place → Time!",
                },
              ].map((error, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded p-4 border-l-4 border-red-500"
                >
                  <p className="font-bold text-red-900 mb-2">
                    ❌ {error.title}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="bg-red-100 rounded p-2">
                      <p className="text-sm">❌ {error.wrong}</p>
                    </div>
                    <div className="bg-green-100 rounded p-2">
                      <p className="text-sm">✅ {error.correct}</p>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-600 mt-2">💡 {error.rule}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 11) {
    const items: FillItem[] = [
      {
        left: "She",
        answers: ["usually"],
        right: "arrives late.",
        explanation: "Наречие частоты → MID Position",
      },
      {
        left: "",
        answers: ["Fortunately"],
        right: ", we won.",
        explanation: "Comment adverb → FRONT Position",
      },
      {
        left: "He sings",
        answers: ["beautifully"],
        right: ".",
        explanation: "Наречие образа действия → END Position",
      },
      {
        left: "They have",
        answers: ["rarely"],
        right: "visited.",
        explanation: "Наречие частоты → MID Position",
      },
      {
        left: "",
        answers: ["Economically"],
        right: ", it's viable.",
        explanation: "Viewpoint adverb → FRONT Position",
      },
      {
        left: "We left",
        answers: ["early"],
        right: ".",
        explanation: "Наречие времени → END Position",
      },
    ];

    return (
      <>
        <Section title="🎯 Финальный тест + Шпаргалка">
          <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-pink-50 rounded-lg p-6 border-2 border-purple-400 mb-4">
            <h3 className="text-2xl font-bold text-purple-900 mb-4 text-center">
              Мега-тест: Adverbs Position
            </h3>
          </div>

          <CheckableExercise
            title="Финальный тест — 6 вопросов"
            instruction="Вставь наречие в правильное место."
            items={items}
          />

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border-2 border-amber-400 mt-6">
            <h3 className="text-2xl font-bold text-amber-900 mb-4 text-center">
              📋 Шпаргалка: Adverbs Position
            </h3>

            <div className="space-y-3">
              <div className="bg-white rounded p-4">
                <p className="font-bold text-blue-900 mb-2">
                  1️⃣ FRONT Position
                </p>
                <p className="text-sm text-zinc-700">
                  Time, Comment, Viewpoint, Linking adverbs
                </p>
                <p className="text-xs text-zinc-600 italic">
                  Tomorrow, we'll leave. / Unfortunately, I'm busy.
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-green-900 mb-2">2️⃣ MID Position</p>
                <p className="text-sm text-zinc-700">
                  Frequency, Degree, Some Manner adverbs
                </p>
                <p className="text-xs text-zinc-600 italic">
                  После BE / auxiliary, ПЕРЕД основным глаголом
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-purple-900 mb-2">
                  3️⃣ END Position
                </p>
                <p className="text-sm text-zinc-700">
                  Manner, Place, Time (в таком порядке!)
                </p>
                <p className="text-xs text-zinc-600 italic">
                  He spoke clearly at the meeting yesterday.
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded p-4">
                <p className="font-bold text-yellow-900 mb-2 text-center">
                  🔑 Главное правило
                </p>
                <p className="text-sm text-zinc-700 text-center">
                  Manner → Place → Time
                </p>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  return <div>Creating step {step}...</div>;
}
