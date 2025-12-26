"use client";
import { Section } from "@/components/ui/Section";
import CheckableExercise from "../CheckableExercise";
import type { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function WishIfOnly({ step }: Props) {
  if (step === 1) {
    return (
      <>
        <Section title="✨ Wish / If Only — Желания и сожаления">
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-400">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">
              Как выразить желания и сожаления?
            </h2>
            <p className="text-sm text-zinc-700 mb-4">
              **WISH** и **IF ONLY** используются, когда мы хотим, чтобы
              реальность была ДРУГОЙ. Это конструкции для выражения **нереальных
              желаний** (то, чего НЕТ сейчас) и **сожалений** (то, чего НЕ БЫЛО
              в прошлом).
            </p>

            <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-lg p-5 border-2 border-red-400 mb-4">
              <h3 className="font-bold text-red-900 mb-3 text-lg text-center">
                🔑 Ключевая идея
              </h3>
              <p className="text-center text-lg font-semibold text-red-900">
                WISH/IF ONLY = Реальность НЕ такая, как я хочу!
              </p>
              <p className="text-center text-sm text-zinc-700 mt-2">
                Мы используем прошедшие времена, чтобы показать, что это
                **нереально** (как в условных предложениях!)
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg p-5 border-2 border-green-400">
                <h3 className="text-lg font-bold text-green-900 mb-3 text-center">
                  1. WISH + Past Simple
                </h3>
                <p className="text-sm mb-2 text-center font-semibold">
                  Нереальное СЕЙЧАС
                </p>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1">
                    I <strong className="text-green-700">wish</strong> I{" "}
                    <strong className="text-green-700">had</strong> a car.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Жаль, что у меня НЕТ машины (сейчас)
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400">
                <h3 className="text-lg font-bold text-blue-900 mb-3 text-center">
                  2. WISH + Past Perfect
                </h3>
                <p className="text-sm mb-2 text-center font-semibold">
                  Сожаление о ПРОШЛОМ
                </p>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1">
                    I <strong className="text-blue-700">wish</strong> I{" "}
                    <strong className="text-blue-700">had bought</strong> it.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Жаль, что я НЕ КУПИЛ это (тогда)
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg p-5 border-2 border-orange-400">
                <h3 className="text-lg font-bold text-orange-900 mb-3 text-center">
                  3. WISH + would
                </h3>
                <p className="text-sm mb-2 text-center font-semibold">
                  Жалоба на БУДУЩЕЕ
                </p>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1">
                    I <strong className="text-orange-700">wish</strong> he{" "}
                    <strong className="text-orange-700">would stop</strong>{" "}
                    smoking.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Хотел бы, чтобы он перестал курить!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-5 border-2 border-purple-300">
              <h4 className="font-bold text-purple-900 mb-3 text-center">
                🆚 WISH vs IF ONLY
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white rounded p-3">
                  <p className="font-semibold text-purple-900 mb-1">WISH</p>
                  <p className="text-sm mb-1">
                    I <strong>wish</strong> I had a car.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Нейтральное желание или сожаление
                  </p>
                </div>

                <div className="bg-white rounded p-3 border-2 border-purple-500">
                  <p className="font-semibold text-purple-900 mb-1">
                    IF ONLY (сильнее!)
                  </p>
                  <p className="text-sm mb-1">
                    <strong>If only</strong> I had a car!
                  </p>
                  <p className="text-xs text-zinc-600">
                    Более эмоциональное, с сожалением!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-5 border-2 border-amber-400 mt-4">
            <h4 className="font-bold text-amber-900 mb-3 text-center">
              💡 В русском языке
            </h4>
            <div className="space-y-2 text-sm text-zinc-700">
              <p>
                • I <strong>wish</strong> I had... → Жаль, что у меня нет... /
                Хотел бы я иметь...
              </p>
              <p>
                • I <strong>wish</strong> I had done... → Жаль, что я не
                сделал... / Лучше бы я сделал...
              </p>
              <p>
                • <strong>If only</strong> I knew! → Если бы я только знал! /
                Вот если бы я знал!
              </p>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 2) {
    return (
      <>
        <Section title="💚 WISH + Past Simple — Нереальное настоящее">
          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300 mb-4">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              Желания о НАСТОЯЩЕМ (но это нереально)
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Когда мы хотим, чтобы текущая ситуация была ДРУГОЙ, мы используем
              **WISH + Past Simple**. Это похоже на Second Conditional!
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-5 border-2 border-blue-400 mb-4">
              <h4 className="font-bold text-blue-900 mb-3 text-lg">
                📌 Формула:
              </h4>
              <p className="text-center font-bold text-xl mb-3">
                I WISH + Past Simple
              </p>
              <div className="space-y-3">
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1">
                    <strong className="text-red-700">Реальность:</strong> I
                    don't have a car. (У меня НЕТ машины)
                  </p>
                  <p className="text-sm text-green-700">
                    <strong className="text-green-700">Желание:</strong> I wish
                    I <strong>had</strong> a car. (Хотел бы я ИМЕТЬ машину)
                  </p>
                </div>

                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1">
                    <strong className="text-red-700">Реальность:</strong> I
                    can't speak French. (Я НЕ УМЕЮ говорить по-французски)
                  </p>
                  <p className="text-sm text-green-700">
                    <strong className="text-green-700">Желание:</strong> I wish
                    I <strong>could speak</strong> French. (Хотел бы я УМЕТЬ)
                  </p>
                </div>

                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1">
                    <strong className="text-red-700">Реальность:</strong> She
                    lives far away. (Она живёт далеко)
                  </p>
                  <p className="text-sm text-green-700">
                    <strong className="text-green-700">Желание:</strong> I wish
                    she <strong>lived</strong> closer. (Хотел бы я, чтобы она
                    жила ближе)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-lg p-5 border-2 border-red-300">
              <h4 className="font-bold text-red-900 mb-3">
                ⚠️ ВАЖНО! Past Simple, но значение НАСТОЯЩЕЕ!
              </h4>
              <p className="text-sm text-zinc-700 mb-2">
                Мы используем **прошедшее** время (Past Simple), чтобы показать,
                что это **нереально сейчас** (как во втором условном
                предложении!).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1">
                    ❌ I wish I <strong className="text-red-700">have</strong> a
                    car.
                  </p>
                  <p className="text-xs text-zinc-600">
                    ОШИБКА! Нужен Past Simple!
                  </p>
                </div>

                <div className="bg-white rounded p-3 border-2 border-green-500">
                  <p className="text-sm mb-1">
                    ✅ I wish I <strong className="text-green-700">had</strong>{" "}
                    a car.
                  </p>
                  <p className="text-xs text-zinc-600">
                    Правильно! Past Simple для нереального настоящего!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3 mt-4">
            <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
              <p className="text-sm font-semibold mb-2 text-green-900">
                Пример 1: BE в Past Simple
              </p>
              <p className="text-sm mb-1">
                I wish I <strong>was/were</strong> taller.
              </p>
              <p className="text-xs text-zinc-600">
                Жаль, что я не выше (сейчас я невысокий)
              </p>
              <p className="text-xs text-amber-600 mt-1">
                💡 Можно использовать WAS или WERE (WERE формальнее)
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
              <p className="text-sm font-semibold mb-2 text-blue-900">
                Пример 2: COULD для способности
              </p>
              <p className="text-sm mb-1">
                I wish I <strong>could fly</strong>.
              </p>
              <p className="text-xs text-zinc-600">
                Хотел бы я уметь летать (но не могу)
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
              <p className="text-sm font-semibold mb-2 text-purple-900">
                Пример 3: Обычный глагол
              </p>
              <p className="text-sm mb-1">
                I wish I <strong>knew</strong> the answer.
              </p>
              <p className="text-xs text-zinc-600">
                Жаль, что я не знаю ответа (сейчас не знаю)
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
              <p className="text-sm font-semibold mb-2 text-orange-900">
                Пример 4: Отрицание
              </p>
              <p className="text-sm mb-1">
                I wish it <strong>wasn't/weren't</strong> raining.
              </p>
              <p className="text-xs text-zinc-600">
                Жаль, что идёт дождь (хочу, чтобы НЕ шёл)
              </p>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 3) {
    return (
      <>
        <Section title="💙 WISH + Past Perfect — Сожаление о прошлом">
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300 mb-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Сожаления о ПРОШЛОМ (уже не изменить)
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Когда мы сожалеем о том, что УЖЕ ПРОИЗОШЛО (или НЕ произошло) в
              прошлом, мы используем **WISH + Past Perfect**. Это похоже на
              Third Conditional!
            </p>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-5 border-2 border-purple-400 mb-4">
              <h4 className="font-bold text-purple-900 mb-3 text-lg">
                📌 Формула:
              </h4>
              <p className="text-center font-bold text-xl mb-3">
                I WISH + had + V3
              </p>
              <div className="space-y-3">
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1">
                    <strong className="text-red-700">Реальность:</strong> I
                    didn't study. (Я НЕ УЧИЛСЯ тогда)
                  </p>
                  <p className="text-sm text-blue-700">
                    <strong className="text-blue-700">Сожаление:</strong> I wish
                    I <strong>had studied</strong>. (Жаль, что я не учился /
                    Лучше бы я учился!)
                  </p>
                </div>

                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1">
                    <strong className="text-red-700">Реальность:</strong> I
                    bought this car. (Я КУПИЛ эту машину тогда)
                  </p>
                  <p className="text-sm text-blue-700">
                    <strong className="text-blue-700">Сожаление:</strong> I wish
                    I <strong>hadn't bought</strong> it. (Жаль, что я купил её /
                    Лучше бы я НЕ покупал!)
                  </p>
                </div>

                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1">
                    <strong className="text-red-700">Реальность:</strong> She
                    didn't tell me. (Она НЕ СКАЗАЛА мне)
                  </p>
                  <p className="text-sm text-blue-700">
                    <strong className="text-blue-700">Сожаление:</strong> I wish
                    she <strong>had told</strong> me. (Жаль, что она не сказала)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-5 border-2 border-amber-300">
              <h4 className="font-bold text-amber-900 mb-3">
                🔑 Ключевое различие!
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white rounded p-3">
                  <p className="font-semibold text-green-900 mb-1">
                    WISH + Past Simple
                  </p>
                  <p className="text-sm mb-1">
                    I wish I <strong>had</strong> a car.
                  </p>
                  <p className="text-xs text-zinc-600">
                    О НАСТОЯЩЕМ (сейчас нет)
                  </p>
                </div>

                <div className="bg-white rounded p-3">
                  <p className="font-semibold text-blue-900 mb-1">
                    WISH + Past Perfect
                  </p>
                  <p className="text-sm mb-1">
                    I wish I <strong>had bought</strong> a car.
                  </p>
                  <p className="text-xs text-zinc-600">
                    О ПРОШЛОМ (тогда не купил)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3 mt-4">
            <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
              <p className="text-sm font-semibold mb-2 text-blue-900">
                Пример 1: Не сделал что-то
              </p>
              <p className="text-sm mb-1">
                I wish I <strong>had gone</strong> to university.
              </p>
              <p className="text-xs text-zinc-600">
                Жаль, что я не пошёл в университет (но уже поздно)
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
              <p className="text-sm font-semibold mb-2 text-purple-900">
                Пример 2: Сделал что-то (но жалею)
              </p>
              <p className="text-sm mb-1">
                I wish I <strong>hadn't said</strong> that.
              </p>
              <p className="text-xs text-zinc-600">
                Жаль, что я сказал это (лучше бы промолчал)
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
              <p className="text-sm font-semibold mb-2 text-green-900">
                Пример 3: Мог бы сделать
              </p>
              <p className="text-sm mb-1">
                I wish I <strong>could have been</strong> there.
              </p>
              <p className="text-xs text-zinc-600">
                Жаль, что я не мог быть там (хотел бы я быть там!)
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
              <p className="text-sm font-semibold mb-2 text-orange-900">
                Пример 4: Сложное предложение
              </p>
              <p className="text-sm mb-1">
                I wish I <strong>had listened</strong> to your advice.
              </p>
              <p className="text-xs text-zinc-600">
                Жаль, что я не послушал твоего совета (тогда)
              </p>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 4) {
    return (
      <>
        <Section title="🧡 WISH + would — Жалобы и раздражение">
          <div className="bg-orange-50 rounded-lg p-6 border-2 border-orange-300 mb-4">
            <h3 className="text-2xl font-bold text-orange-900 mb-4">
              Жалобы на БУДУЩЕЕ и раздражающие ситуации
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Когда мы хотим, чтобы кто-то **ИЗМЕНИЛ СВОЁ ПОВЕДЕНИЕ** или чтобы
              что-то **ПЕРЕСТАЛО** происходить, мы используем **WISH + would**.
              Это часто выражает **раздражение** или **жалобу**!
            </p>

            <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-lg p-5 border-2 border-red-400 mb-4">
              <h4 className="font-bold text-red-900 mb-3 text-lg">
                📌 Формула:
              </h4>
              <p className="text-center font-bold text-xl mb-3">
                I WISH + кто-то/что-то + WOULD + глагол
              </p>
              <div className="space-y-3">
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1">
                    <strong className="text-red-700">Раздражает:</strong> He
                    keeps smoking. (Он продолжает курить — меня это раздражает!)
                  </p>
                  <p className="text-sm text-orange-700">
                    <strong className="text-orange-700">Жалоба:</strong> I wish
                    he <strong>would stop</strong> smoking! (Хотел бы я, чтобы
                    он перестал!)
                  </p>
                </div>

                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1">
                    <strong className="text-red-700">Раздражает:</strong> It
                    keeps raining. (Продолжает идти дождь — надоело!)
                  </p>
                  <p className="text-sm text-orange-700">
                    <strong className="text-orange-700">Жалоба:</strong> I wish
                    it <strong>would stop</strong> raining! (Хотел бы я, чтобы
                    перестало!)
                  </p>
                </div>

                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1">
                    <strong className="text-red-700">Раздражает:</strong> She
                    never listens to me. (Она никогда не слушает меня!)
                  </p>
                  <p className="text-sm text-orange-700">
                    <strong className="text-orange-700">Жалоба:</strong> I wish
                    she <strong>would listen</strong> to me! (Хотел бы я, чтобы
                    она слушала!)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-5 border-2 border-purple-300">
              <h4 className="font-bold text-purple-900 mb-3">
                ⚠️ ВАЖНО! НЕ используй "I wish I would"!
              </h4>
              <div className="space-y-2">
                <p className="text-sm text-zinc-700">
                  **Нельзя** использовать "I wish I would...", потому что мы не
                  можем жаловаться на самих себя!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                  <div className="bg-red-100 rounded p-3">
                    <p className="text-sm mb-1">
                      ❌ I wish I <strong>would</strong> be rich.
                    </p>
                    <p className="text-xs text-zinc-600">
                      ОШИБКА! Используй Past Simple!
                    </p>
                  </div>

                  <div className="bg-green-100 rounded p-3">
                    <p className="text-sm mb-1">
                      ✅ I wish I <strong>was/were</strong> rich.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Правильно! Past Simple для себя!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3 mt-4">
            <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
              <p className="text-sm font-semibold mb-2 text-orange-900">
                Пример 1: О человеке
              </p>
              <p className="text-sm mb-1">
                I wish <strong>he would</strong> call me.
              </p>
              <p className="text-xs text-zinc-600">
                Хотел бы я, чтобы он мне позвонил! (жду, раздражён)
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
              <p className="text-sm font-semibold mb-2 text-red-900">
                Пример 2: О погоде
              </p>
              <p className="text-sm mb-1">
                I wish the sun <strong>would</strong> come out.
              </p>
              <p className="text-xs text-zinc-600">
                Хотел бы я, чтобы солнце вышло! (надоела пасмурная погода)
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-pink-500">
              <p className="text-sm font-semibold mb-2 text-pink-900">
                Пример 3: О ситуации
              </p>
              <p className="text-sm mb-1">
                I wish they <strong>would</strong> hurry up!
              </p>
              <p className="text-xs text-zinc-600">
                Хотел бы я, чтобы они поторопились! (раздражён, что медленно)
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-amber-500">
              <p className="text-sm font-semibold mb-2 text-amber-900">
                Пример 4: Отрицание
              </p>
              <p className="text-sm mb-1">
                I wish you <strong>wouldn't</strong> do that!
              </p>
              <p className="text-xs text-zinc-600">
                Хотел бы я, чтобы ты НЕ делал этого! (прекрати!)
              </p>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 5) {
    return (
      <>
        <Section title="💜 IF ONLY — Усиленная версия WISH">
          <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300 mb-4">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              IF ONLY = WISH, но ЭМОЦИОНАЛЬНЕЕ!
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              **IF ONLY** работает ТОЧНО ТАК ЖЕ, как WISH, но выражает **более
              сильные эмоции**: отчаяние, глубокое сожаление, сильное желание!
            </p>

            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-5 border-2 border-pink-400 mb-4">
              <h4 className="font-bold text-pink-900 mb-3 text-lg">
                Все 3 формы с IF ONLY:
              </h4>

              <div className="space-y-3">
                <div className="bg-white rounded p-3 border-l-4 border-green-500">
                  <p className="font-semibold text-green-900 mb-2">
                    1. IF ONLY + Past Simple (о настоящем)
                  </p>
                  <p className="text-sm mb-1">
                    <strong className="text-green-700">If only</strong> I{" "}
                    <strong>had</strong> a car!
                  </p>
                  <p className="text-xs text-zinc-600">
                    Если бы только у меня была машина! (с сильным желанием)
                  </p>
                </div>

                <div className="bg-white rounded p-3 border-l-4 border-blue-500">
                  <p className="font-semibold text-blue-900 mb-2">
                    2. IF ONLY + Past Perfect (о прошлом)
                  </p>
                  <p className="text-sm mb-1">
                    <strong className="text-blue-700">If only</strong> I{" "}
                    <strong>had studied</strong>!
                  </p>
                  <p className="text-xs text-zinc-600">
                    Если бы только я учился! (глубокое сожаление)
                  </p>
                </div>

                <div className="bg-white rounded p-3 border-l-4 border-orange-500">
                  <p className="font-semibold text-orange-900 mb-2">
                    3. IF ONLY + would (жалоба)
                  </p>
                  <p className="text-sm mb-1">
                    <strong className="text-orange-700">If only</strong> he{" "}
                    <strong>would stop</strong>!
                  </p>
                  <p className="text-xs text-zinc-600">
                    Если бы только он перестал! (сильное раздражение)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-5 border-2 border-amber-300">
              <h4 className="font-bold text-amber-900 mb-3 text-center">
                🆚 Сравнение WISH vs IF ONLY
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white rounded p-3">
                  <p className="font-semibold text-green-900 mb-2">
                    WISH (нейтрально)
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>I wish I knew.</p>
                    <p>I wish I had gone.</p>
                    <p>I wish he would call.</p>
                  </div>
                  <p className="text-xs text-zinc-600 mt-2">
                    Просто желание или сожаление
                  </p>
                </div>

                <div className="bg-white rounded p-3 border-2 border-purple-500">
                  <p className="font-semibold text-purple-900 mb-2">
                    IF ONLY (эмоционально!)
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>If only I knew!</p>
                    <p>If only I had gone!</p>
                    <p>If only he would call!</p>
                  </div>
                  <p className="text-xs text-zinc-600 mt-2">
                    Сильное желание, отчаяние!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-5 border-2 border-red-300 mt-4">
            <h4 className="font-bold text-red-900 mb-3">💬 В русском языке</h4>
            <div className="space-y-2 text-sm text-zinc-700">
              <p>
                • <strong>If only</strong> I knew! → Если бы я только знал! /
                Вот если бы я знал!
              </p>
              <p>
                • <strong>If only</strong> I had done it! → Лучше бы я сделал
                это! / Вот если бы я сделал!
              </p>
              <p>
                • <strong>If only</strong> he would stop! → Если бы он только
                перестал! / Да перестань ты уже!
              </p>
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
        answers: ["I wish I had a car", "I wish I had a car."],
        right: "",
        explanation: "О настоящем → WISH + Past Simple (had)",
      },
      {
        left: "",
        answers: [
          "I wish I had studied harder",
          "I wish I had studied harder.",
        ],
        right: "",
        explanation: "О прошлом → WISH + Past Perfect (had studied)",
      },
      {
        left: "",
        answers: [
          "I wish he would stop smoking",
          "I wish he would stop smoking.",
        ],
        right: "",
        explanation: "Жалоба на другого человека → WISH + would",
      },
      {
        left: "",
        answers: [
          "I wish I could speak French",
          "I wish I could speak French.",
        ],
        right: "",
        explanation: "О способности сейчас → WISH + could",
      },
      {
        left: "",
        answers: [
          "If only I knew the answer",
          "If only I knew the answer.",
          "If only I knew the answer!",
        ],
        right: "",
        explanation: "О настоящем, эмоционально → IF ONLY + Past Simple",
      },
      {
        left: "",
        answers: ["I wish I hadn't said that", "I wish I hadn't said that."],
        right: "",
        explanation: "Сожаление о прошлом → WISH + Past Perfect отрицание",
      },
    ];

    return (
      <>
        <Section title="✏️ Упражнение 1: Преобразуй предложения">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-5 border-2 border-green-400 mb-4">
            <p className="font-bold text-green-900 mb-2 text-lg">
              📝 → 💡 Преобразуй в WISH или IF ONLY!
            </p>
            <p className="text-sm text-zinc-700 mb-2">
              Дано простое предложение (реальность). Преобразуй его в WISH или
              IF ONLY (нереальное желание)!
            </p>
            <p className="text-xs text-zinc-600">
              Выбирай форму: Past Simple (настоящее), Past Perfect (прошлое),
              would (жалоба)
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                1️⃣ I don't have a car. (У меня нет машины сейчас)
              </p>
              <p className="text-xs text-zinc-600 mb-3">Напиши: I wish...</p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[0]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                2️⃣ I didn't study harder. (Я не учился усерднее тогда)
              </p>
              <p className="text-xs text-zinc-600 mb-3">Напиши: I wish...</p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[1]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                3️⃣ He keeps smoking. (Он продолжает курить — раздражает!)
              </p>
              <p className="text-xs text-zinc-600 mb-3">Напиши: I wish...</p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[2]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                4️⃣ I can't speak French. (Я не умею говорить по-французски)
              </p>
              <p className="text-xs text-zinc-600 mb-3">Напиши: I wish...</p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[3]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                5️⃣ I don't know the answer. (Я не знаю ответа — так жаль!)
              </p>
              <p className="text-xs text-zinc-600 mb-3">
                Напиши: If only... (эмоционально!)
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[4]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                6️⃣ I said that. (Я сказал это — теперь жалею)
              </p>
              <p className="text-xs text-zinc-600 mb-3">
                Напиши: I wish... (отрицание!)
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[5]]}
                wideInputs
              />
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 7) {
    const items: FillItem[] = [
      {
        left: "",
        answers: ["I wish I had a car", "I wish I had a car."],
        right: "",
        explanation: 'Исправлено: "have" → "had" (Past Simple для настоящего!)',
      },
      {
        left: "",
        answers: ["I wish I had studied", "I wish I had studied."],
        right: "",
        explanation:
          'Исправлено: "studied" → "had studied" (Past Perfect для прошлого!)',
      },
      {
        left: "",
        answers: [
          "I wish I were taller",
          "I wish I was taller",
          "I wish I were taller.",
          "I wish I was taller.",
        ],
        right: "",
        explanation:
          'Исправлено: "would be" → "were/was" (НЕ используй would для себя!)',
      },
      {
        left: "",
        answers: [
          "I wish he would stop smoking",
          "I wish he would stop smoking.",
        ],
        right: "",
        explanation:
          'Исправлено: "stopped" → "would stop" (WOULD для жалобы на другого!)',
      },
      {
        left: "",
        answers: ["I wish I hadn't bought it", "I wish I hadn't bought it."],
        right: "",
        explanation:
          'Исправлено: "didn\'t buy" → "hadn\'t bought" (Past Perfect для прошлого!)',
      },
      {
        left: "",
        answers: ["I wish I could fly", "I wish I could fly."],
        right: "",
        explanation:
          'Исправлено: "can fly" → "could fly" (Past form для нереального!)',
      },
    ];

    return (
      <>
        <Section title="❌ Упражнение 2: Исправь ошибки">
          <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-lg p-5 border-2 border-red-400 mb-4">
            <p className="font-bold text-red-900 mb-2 text-lg">
              ❌ → ✅ Найди и исправь ошибки!
            </p>
            <p className="text-sm text-zinc-700 mb-2">
              Каждое предложение содержит ОШИБКУ в WISH/IF ONLY. Напиши
              ПРАВИЛЬНЫЙ вариант полностью!
            </p>
            <p className="text-xs text-zinc-600">
              Проверяй: Past Simple (настоящее), Past Perfect (прошлое), would
              (только для других!)
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-red-700 mb-1">
                ❌ Неправильно:
              </p>
              <p className="text-sm text-zinc-900 mb-3">I wish I have a car.</p>
              <p className="text-xs text-zinc-600 mb-3">
                Напиши правильный вариант:
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[0]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-red-700 mb-1">
                ❌ Неправильно:
              </p>
              <p className="text-sm text-zinc-900 mb-3">
                I wish I studied harder. (о прошлом!)
              </p>
              <p className="text-xs text-zinc-600 mb-3">
                Напиши правильный вариант:
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[1]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-red-700 mb-1">
                ❌ Неправильно:
              </p>
              <p className="text-sm text-zinc-900 mb-3">
                I wish I would be taller.
              </p>
              <p className="text-xs text-zinc-600 mb-3">
                Напиши правильный вариант:
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[2]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-red-700 mb-1">
                ❌ Неправильно:
              </p>
              <p className="text-sm text-zinc-900 mb-3">
                I wish he stopped smoking. (жалоба!)
              </p>
              <p className="text-xs text-zinc-600 mb-3">
                Напиши правильный вариант:
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[3]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-red-700 mb-1">
                ❌ Неправильно:
              </p>
              <p className="text-sm text-zinc-900 mb-3">
                I wish I didn't buy it. (о прошлом!)
              </p>
              <p className="text-xs text-zinc-600 mb-3">
                Напиши правильный вариант:
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[4]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-red-700 mb-1">
                ❌ Неправильно:
              </p>
              <p className="text-sm text-zinc-900 mb-3">I wish I can fly.</p>
              <p className="text-xs text-zinc-600 mb-3">
                Напиши правильный вариант:
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[5]]}
                wideInputs
              />
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 8) {
    const items: FillItem[] = [
      {
        left: "",
        answers: ["I wish I had a car", "I wish I had a car."],
        right: "",
        explanation: "Жаль, что у меня нет машины",
      },
      {
        left: "",
        answers: [
          "I wish I had studied harder",
          "I wish I had studied harder.",
        ],
        right: "",
        explanation: "Жаль, что я не учился усерднее",
      },
      {
        left: "",
        answers: [
          "I wish he would stop smoking",
          "I wish he would stop smoking.",
        ],
        right: "",
        explanation: "Хотел бы я, чтобы он перестал курить",
      },
      {
        left: "",
        answers: [
          "If only I knew the answer",
          "If only I knew the answer!",
          "If only I knew the answer.",
        ],
        right: "",
        explanation: "Если бы я только знал ответ",
      },
      {
        left: "",
        answers: [
          "I wish I could speak French",
          "I wish I could speak French.",
        ],
        right: "",
        explanation: "Жаль, что я не умею говорить по-французски",
      },
      {
        left: "",
        answers: ["I wish I hadn't said that", "I wish I hadn't said that."],
        right: "",
        explanation: "Жаль, что я сказал это",
      },
    ];

    return (
      <>
        <Section title="🇷🇺 Упражнение 3: Перевод с русского">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-5 border-2 border-purple-400 mb-4">
            <p className="font-bold text-purple-900 mb-2 text-lg">
              🇷🇺 → 🇬🇧 Переведи на английский с WISH/IF ONLY
            </p>
            <p className="text-sm text-zinc-700 mb-2">
              Дано предложение на русском языке с сожалением или желанием.
              Переведи его на английский, используя WISH или IF ONLY!
            </p>
            <p className="text-xs text-zinc-600">
              Определи: о настоящем (Past Simple), о прошлом (Past Perfect), или
              жалоба (would)
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                1️⃣ Жаль, что у меня нет машины.
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[0]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                2️⃣ Жаль, что я не учился усерднее.
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[1]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                3️⃣ Хотел бы я, чтобы он перестал курить.
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[2]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                4️⃣ Если бы я только знал ответ!
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[3]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                5️⃣ Жаль, что я не умею говорить по-французски.
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[4]]}
                wideInputs
              />
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-zinc-200">
              <p className="text-sm font-semibold text-zinc-900 mb-3">
                6️⃣ Жаль, что я сказал это.
              </p>
              <CheckableExercise
                title=""
                instruction=""
                items={[items[5]]}
                wideInputs
              />
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 9) {
    return (
      <>
        <Section title="⚠️ 10 КРИТИЧЕСКИХ ошибок с WISH/IF ONLY">
          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-400 mb-4">
            <h3 className="text-2xl font-bold text-red-900 mb-4 text-center">
              Типичные ошибки, которые делают ВСЕ
            </h3>

            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                <p className="font-semibold text-red-900 mb-2">
                  ❌ Ошибка 1: Используют Present Simple вместо Past Simple
                </p>
                <div className="space-y-2">
                  <p className="text-sm bg-red-100 rounded p-2">
                    ❌ I wish I <strong>have</strong> a car.
                  </p>
                  <p className="text-xs text-zinc-600 mb-2">
                    Нужен Past Simple для нереального настоящего!
                  </p>
                  <p className="text-sm bg-green-100 rounded p-2">
                    ✅ I wish I <strong>had</strong> a car.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                <p className="font-semibold text-red-900 mb-2">
                  ❌ Ошибка 2: Используют Past Simple вместо Past Perfect (о
                  прошлом)
                </p>
                <div className="space-y-2">
                  <p className="text-sm bg-red-100 rounded p-2">
                    ❌ I wish I <strong>studied</strong> harder. (о прошлом!)
                  </p>
                  <p className="text-xs text-zinc-600 mb-2">
                    Для прошлого нужен Past Perfect!
                  </p>
                  <p className="text-sm bg-green-100 rounded p-2">
                    ✅ I wish I <strong>had studied</strong> harder.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                <p className="font-semibold text-red-900 mb-2">
                  ❌ Ошибка 3: "I wish I would" для себя
                </p>
                <div className="space-y-2">
                  <p className="text-sm bg-red-100 rounded p-2">
                    ❌ I wish I <strong>would be</strong> rich.
                  </p>
                  <p className="text-xs text-zinc-600 mb-2">
                    НЕЛЬЗЯ использовать "would" для себя!
                  </p>
                  <p className="text-sm bg-green-100 rounded p-2">
                    ✅ I wish I <strong>was/were</strong> rich.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                <p className="font-semibold text-red-900 mb-2">
                  ❌ Ошибка 4: Забыли "had" в Past Perfect
                </p>
                <div className="space-y-2">
                  <p className="text-sm bg-red-100 rounded p-2">
                    ❌ I wish I <strong>gone</strong> there.
                  </p>
                  <p className="text-xs text-zinc-600 mb-2">
                    Нужен HAD для Past Perfect!
                  </p>
                  <p className="text-sm bg-green-100 rounded p-2">
                    ✅ I wish I <strong>had gone</strong> there.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                <p className="font-semibold text-red-900 mb-2">
                  ❌ Ошибка 5: Используют Past Simple вместо "would" для жалобы
                </p>
                <div className="space-y-2">
                  <p className="text-sm bg-red-100 rounded p-2">
                    ❌ I wish he <strong>stopped</strong> smoking. (жалоба!)
                  </p>
                  <p className="text-xs text-zinc-600 mb-2">
                    Для жалобы на другого нужен WOULD!
                  </p>
                  <p className="text-sm bg-green-100 rounded p-2">
                    ✅ I wish he <strong>would stop</strong> smoking!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-5 border-2 border-blue-400">
            <h4 className="font-bold text-blue-900 mb-3 text-center">
              🔑 Как выбрать правильную форму?
            </h4>
            <div className="space-y-2 text-sm text-zinc-700">
              <p>
                <strong>1. О настоящем?</strong> → WISH + Past Simple (had,
                knew, could)
              </p>
              <p>
                <strong>2. О прошлом?</strong> → WISH + Past Perfect (had done,
                had known)
              </p>
              <p>
                <strong>3. Жалоба на другого?</strong> → WISH + would (he would
                stop)
              </p>
              <p className="mt-3 font-semibold text-blue-900">
                <strong>4. Про себя?</strong> → НИКОГДА не используй "I wish I
                would"!
              </p>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 10) {
    return (
      <>
        <Section title="🎯 Реальные ситуации — Где это используется?">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-6 border-2 border-emerald-400 mb-4">
            <h3 className="text-2xl font-bold text-emerald-900 mb-4">
              WISH/IF ONLY в реальной жизни
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                <p className="font-semibold text-blue-900 mb-2 text-lg">
                  1. Разговор о мечтах
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    I <strong>wish</strong> I had more time to travel.
                  </p>
                  <p>
                    I <strong>wish</strong> I could play the piano.
                  </p>
                  <p>
                    <strong>If only</strong> I was/were younger!
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                <p className="font-semibold text-green-900 mb-2 text-lg">
                  2. Сожаления о прошлом
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    I <strong>wish</strong> I had gone to university.
                  </p>
                  <p>
                    I <strong>wish</strong> I hadn't wasted so much time.
                  </p>
                  <p>
                    <strong>If only</strong> I had listened to your advice!
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
                <p className="font-semibold text-purple-900 mb-2 text-lg">
                  3. Жалобы на ситуацию
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    I <strong>wish</strong> it would stop raining!
                  </p>
                  <p>
                    I <strong>wish</strong> the weekend would come faster!
                  </p>
                  <p>
                    <strong>If only</strong> winter would end!
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
                <p className="font-semibold text-orange-900 mb-2 text-lg">
                  4. Раздражение на других людей
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    I <strong>wish</strong> you would listen to me!
                  </p>
                  <p>
                    I <strong>wish</strong> he wouldn't be so rude!
                  </p>
                  <p>
                    <strong>If only</strong> they would hurry up!
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                <p className="font-semibold text-red-900 mb-2 text-lg">
                  5. В литературе и песнях
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>If only</strong> I could turn back time...
                  </p>
                  <p>
                    I <strong>wish</strong> I knew then what I know now.
                  </p>
                  <p>
                    <strong>If only</strong> you could see what I see...
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-5 border-2 border-yellow-400">
            <h4 className="font-bold text-yellow-900 mb-3 text-center">
              💡 Почему это важно?
            </h4>
            <div className="space-y-2 text-sm text-zinc-700">
              <p className="text-center">WISH и IF ONLY помогают:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>✅ Выразить **глубокие эмоции** (сожаление, желание)</li>
                <li>✅ Показать **нереальность** ситуации</li>
                <li>✅ Пожаловаться **вежливо** (косвенно)</li>
                <li>✅ Говорить о **мечтах** и **сожалениях**</li>
              </ul>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 11) {
    const items: FillItem[] = [
      {
        left: "1. I wish I",
        answers: ["had", "had a car"],
        right: "a car.",
        explanation: "О настоящем → Past Simple",
      },
      {
        left: "2. I wish I",
        answers: ["had studied", "had studied harder"],
        right: "harder.",
        explanation: "О прошлом → Past Perfect",
      },
      {
        left: "3. I wish he",
        answers: ["would stop", "would stop smoking"],
        right: "smoking.",
        explanation: "Жалоба на другого → would",
      },
      {
        left: "4. If only I",
        answers: ["knew", "knew the answer"],
        right: "the answer!",
        explanation: "О настоящем, эмоционально → Past Simple",
      },
      {
        left: "5. I wish I",
        answers: ["could speak", "could speak French"],
        right: "French.",
        explanation: "Способность → could",
      },
      {
        left: "6. I wish I",
        answers: ["hadn't said", "hadn't said that"],
        right: "that.",
        explanation: "Сожаление о прошлом → Past Perfect отрицание",
      },
    ];

    return (
      <>
        <Section title="🏆 Финальный тест">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-yellow-500 mb-4">
            <h3 className="text-3xl font-bold text-yellow-900 mb-3 text-center">
              Финальная проверка знаний!
            </h3>
            <p className="text-sm text-zinc-700 mb-2 text-center">
              6 вопросов на **ВСЕ формы WISH/IF ONLY**. Заполни пропуски!
            </p>
            <p className="text-sm font-semibold text-yellow-900 text-center">
              Цель: 5/6 и выше! 🎯
            </p>
          </div>

          <CheckableExercise
            title="Финальный тест (6 вопросов)"
            instruction="Заполни пропуски правильной формой WISH/IF ONLY."
            items={items}
            wideInputs
          />

          <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-6 border-2 border-green-500 mt-6">
            <h3 className="text-2xl font-bold text-green-900 mb-3 text-center">
              🎉 Поздравляем!
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Вы освоили WISH и IF ONLY! Теперь вы можете:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm text-zinc-700">
              <li>
                ✅ Выражать нереальные желания о настоящем (WISH + Past Simple)
              </li>
              <li>✅ Сожалеть о прошлом (WISH + Past Perfect)</li>
              <li>✅ Жаловаться на других людей (WISH + would)</li>
              <li>✅ Использовать IF ONLY для усиления эмоций</li>
              <li>✅ БЕЗОШИБОЧНО выбирать между формами</li>
              <li>✅ Избегать "I wish I would" (НИКОГДА не используй это!)</li>
              <li>✅ Использовать was/were правильно</li>
              <li>✅ Применять WISH/IF ONLY в реальной жизни!</li>
            </ul>
          </div>
        </Section>

        <Section title="📋 Краткая памятка">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border-2 border-indigo-400">
            <h4 className="font-bold text-indigo-900 mb-4 text-center text-xl">
              WISH / IF ONLY — Все формы
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white rounded-lg p-4 border-2 border-green-400">
                <p className="font-semibold text-green-900 mb-2 text-lg text-center">
                  О настоящем
                </p>
                <p className="text-center font-bold text-lg mb-2">
                  WISH + Past Simple
                </p>
                <p className="text-sm text-center">
                  I wish I <strong>had</strong> a car.
                </p>
                <p className="text-xs text-zinc-600 text-center mt-1">
                  (но у меня нет)
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-blue-400">
                <p className="font-semibold text-blue-900 mb-2 text-lg text-center">
                  О прошлом
                </p>
                <p className="text-center font-bold text-lg mb-2">
                  WISH + Past Perfect
                </p>
                <p className="text-sm text-center">
                  I wish I <strong>had studied</strong>.
                </p>
                <p className="text-xs text-zinc-600 text-center mt-1">
                  (но я не учился)
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-2 border-orange-400">
                <p className="font-semibold text-orange-900 mb-2 text-lg text-center">
                  Жалоба
                </p>
                <p className="text-center font-bold text-lg mb-2">
                  WISH + would
                </p>
                <p className="text-sm text-center">
                  I wish he <strong>would stop</strong>.
                </p>
                <p className="text-xs text-zinc-600 text-center mt-1">
                  (но он не останавливается!)
                </p>
              </div>
            </div>

            <div className="bg-red-50 rounded-lg p-4 border-2 border-red-400">
              <h4 className="font-bold text-red-900 mb-2 text-center">
                🚫 Главные правила:
              </h4>
              <ul className="text-sm text-zinc-700 space-y-1">
                <li>
                  • ✅ <strong>О настоящем</strong> → Past Simple (had, knew,
                  could)
                </li>
                <li>
                  • ✅ <strong>О прошлом</strong> → Past Perfect (had done)
                </li>
                <li>
                  • ✅ <strong>Жалоба на другого</strong> → would
                </li>
                <li>
                  • ❌ <strong>НИКОГДА</strong> "I wish I would" (только для
                  других!)
                </li>
                <li>
                  • ✅ <strong>IF ONLY</strong> = WISH, но эмоциональнее!
                </li>
              </ul>
            </div>
          </div>
        </Section>
      </>
    );
  }

  return null;
}
