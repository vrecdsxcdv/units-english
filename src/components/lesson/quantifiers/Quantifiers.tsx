"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function Quantifiers({ step }: Props) {
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

/* ===== ШАГ 1: Введение в квантификаторы ===== */
function Step1() {
  return (
    <>
      <UiSection title="📊 Что такое квантификаторы?">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 mb-4">
          <p className="text-lg font-semibold text-indigo-900 mb-3">
            Квантификаторы (Quantifiers) — это слова количества
          </p>
          <p className="text-zinc-700">
            Они показывают, <strong>сколько</strong> чего-то есть: много, мало,
            несколько, немного и т.д. В английском языке выбор квантификатора
            зависит от типа существительного (исчисляемое или неисчисляемое).
          </p>
        </div>
      </UiSection>

      <UiSection title="🔍 Основные группы квантификаторов">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-lg p-5">
            <p className="font-bold text-blue-900 text-lg mb-3">
              Some / Any (немного, несколько)
            </p>
            <p className="text-sm text-zinc-700 mb-2">
              Используются с исчисляемыми и неисчисляемыми
            </p>
            <div className="bg-white rounded-lg p-3 space-y-1">
              <p className="text-sm">
                ✓ I have <strong>some</strong> apples.
              </p>
              <p className="text-sm">
                ✓ Do you have <strong>any</strong> water?
              </p>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-5">
            <p className="font-bold text-green-900 text-lg mb-3">
              Much / Many (много)
            </p>
            <p className="text-sm text-zinc-700 mb-2">
              Much — неисчисляемые, Many — исчисляемые
            </p>
            <div className="bg-white rounded-lg p-3 space-y-1">
              <p className="text-sm">
                ✓ How <strong>much</strong> money?
              </p>
              <p className="text-sm">
                ✓ How <strong>many</strong> books?
              </p>
            </div>
          </div>

          <div className="bg-purple-50 rounded-lg p-5">
            <p className="font-bold text-purple-900 text-lg mb-3">
              A few / A little (несколько, немного)
            </p>
            <p className="text-sm text-zinc-700 mb-2">
              A few — исчисляемые, A little — неисчисляемые
            </p>
            <div className="bg-white rounded-lg p-3 space-y-1">
              <p className="text-sm">
                ✓ I have <strong>a few</strong> friends.
              </p>
              <p className="text-sm">
                ✓ Add <strong>a little</strong> salt.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-5">
            <p className="font-bold text-amber-900 text-lg mb-3">
              A lot of / Lots of (много)
            </p>
            <p className="text-sm text-zinc-700 mb-2">
              Универсальные — для всех типов существительных
            </p>
            <div className="bg-white rounded-lg p-3 space-y-1">
              <p className="text-sm">
                ✓ <strong>A lot of</strong> people
              </p>
              <p className="text-sm">
                ✓ <strong>Lots of</strong> time
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="📝 Исчисляемые vs Неисчисляемые">
        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-bold text-pink-900 mb-3">
                ✓ Исчисляемые (Countable)
              </p>
              <p className="text-sm text-zinc-700 mb-2">
                Можно посчитать: 1, 2, 3...
              </p>
              <div className="bg-white rounded-lg p-3 text-sm space-y-1">
                <p>• apple, book, car, friend</p>
                <p>
                  • <strong>Many</strong> books
                </p>
                <p>
                  • <strong>A few</strong> cars
                </p>
                <p>
                  • <strong>Some</strong> friends
                </p>
              </div>
            </div>

            <div>
              <p className="font-bold text-rose-900 mb-3">
                ✗ Неисчисляемые (Uncountable)
              </p>
              <p className="text-sm text-zinc-700 mb-2">
                Нельзя посчитать поштучно
              </p>
              <div className="bg-white rounded-lg p-3 text-sm space-y-1">
                <p>• water, money, sugar, time</p>
                <p>
                  • <strong>Much</strong> water
                </p>
                <p>
                  • <strong>A little</strong> sugar
                </p>
                <p>
                  • <strong>Some</strong> money
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== ШАГ 2: Some и Any ===== */
function Step2() {
  const exercise1: FillItem[] = [
    {
      left: "1. I have",
      right: "books. (утверждение)",
      answers: ["some"],
      explanation: "В утверждении используем SOME",
    },
    {
      left: "2. Do you have",
      right: "water? (вопрос)",
      answers: ["any"],
      explanation: "В вопросе используем ANY",
    },
    {
      left: "3. I don't have",
      right: "money. (отрицание)",
      answers: ["any"],
      explanation: "В отрицании используем ANY",
    },
    {
      left: "4. Would you like",
      right: "tea? (предложение)",
      answers: ["some"],
      explanation: "В предложении используем SOME",
    },
  ];

  return (
    <>
      <UiSection title="🔵 Some — «немного, несколько»">
        <div className="bg-blue-50 rounded-lg p-6 mb-4">
          <p className="font-semibold text-blue-900 mb-3">
            Когда использовать SOME:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-zinc-700">
            <li>
              <strong>Утвердительные предложения</strong>
              <p className="text-sm italic mt-1">
                I have <strong>some</strong> apples. (У меня есть несколько
                яблок)
              </p>
            </li>
            <li>
              <strong>Предложения (offers)</strong>
              <p className="text-sm italic mt-1">
                Would you like <strong>some</strong> coffee? (Хотите кофе?)
              </p>
            </li>
            <li>
              <strong>Просьбы (requests)</strong>
              <p className="text-sm italic mt-1">
                Can I have <strong>some</strong> water? (Можно мне воды?)
              </p>
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="🟣 Any — «какой-нибудь, любой»">
        <div className="bg-purple-50 rounded-lg p-6 mb-4">
          <p className="font-semibold text-purple-900 mb-3">
            Когда использовать ANY:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-zinc-700">
            <li>
              <strong>Вопросы</strong>
              <p className="text-sm italic mt-1">
                Do you have <strong>any</strong> questions? (У вас есть
                вопросы?)
              </p>
            </li>
            <li>
              <strong>Отрицания</strong>
              <p className="text-sm italic mt-1">
                I don't have <strong>any</strong> money. (У меня нет денег)
              </p>
            </li>
            <li>
              <strong>Условия (if)</strong>
              <p className="text-sm italic mt-1">
                If you have <strong>any</strong> problems, call me.
              </p>
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="📋 Таблица: Some vs Any">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-zinc-100">
                <th className="border border-zinc-300 p-3 text-left">
                  Тип предложения
                </th>
                <th className="border border-zinc-300 p-3 text-left">Some</th>
                <th className="border border-zinc-300 p-3 text-left">Any</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-zinc-300 p-3">Утверждение (+)</td>
                <td className="border border-zinc-300 p-3 bg-green-50">
                  ✓ I have some tea
                </td>
                <td className="border border-zinc-300 p-3 bg-red-50">✗</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">Вопрос (?)</td>
                <td className="border border-zinc-300 p-3 bg-amber-50">
                  Would you like some?
                </td>
                <td className="border border-zinc-300 p-3 bg-green-50">
                  ✓ Do you have any?
                </td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">Отрицание (-)</td>
                <td className="border border-zinc-300 p-3 bg-red-50">✗</td>
                <td className="border border-zinc-300 p-3 bg-green-50">
                  ✓ I don't have any
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Some или Any?"
        instruction="Вставьте some или any."
        items={exercise1}
      />
    </>
  );
}

/* ===== ШАГ 3: Much и Many ===== */
function Step3() {
  const exercise2: FillItem[] = [
    {
      left: "1. How",
      right: "books do you have? (books = исчисл.)",
      answers: ["many"],
      explanation: "Books — исчисляемые, используем MANY",
    },
    {
      left: "2. How",
      right: "water do you drink? (water = неисчисл.)",
      answers: ["much"],
      explanation: "Water — неисчисляемое, используем MUCH",
    },
    {
      left: "3. There aren't",
      right: "people here. (people = исчисл.)",
      answers: ["many"],
      explanation: "People — исчисляемые, используем MANY",
    },
    {
      left: "4. I don't have",
      right: "time. (time = неисчисл.)",
      answers: ["much"],
      explanation: "Time — неисчисляемое, используем MUCH",
    },
  ];

  return (
    <>
      <UiSection title="🔵 Many — для исчисляемых">
        <div className="bg-blue-50 rounded-lg p-6 mb-4">
          <p className="font-semibold text-blue-900 mb-3">
            MANY используется с исчисляемыми существительными
          </p>
          <div className="space-y-3 text-zinc-700">
            <p>
              ✓ How <strong>many</strong> books? (Сколько книг?)
            </p>
            <p>
              ✓ <strong>Many</strong> people like coffee. (Многие любят кофе)
            </p>
            <p>
              ✓ I don't have <strong>many</strong> friends. (У меня немного
              друзей)
            </p>
            <p>
              ✓ Are there <strong>many</strong> students? (Много студентов?)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="🟣 Much — для неисчисляемых">
        <div className="bg-purple-50 rounded-lg p-6 mb-4">
          <p className="font-semibold text-purple-900 mb-3">
            MUCH используется с неисчисляемыми существительными
          </p>
          <div className="space-y-3 text-zinc-700">
            <p>
              ✓ How <strong>much</strong> money? (Сколько денег?)
            </p>
            <p>
              ✓ I don't have <strong>much</strong> time. (У меня мало времени)
            </p>
            <p>
              ✓ Is there <strong>much</strong> sugar? (Много сахара?)
            </p>
            <p>
              ✓ There isn't <strong>much</strong> water. (Воды немного)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="⚠️ Важно: Much и Many чаще в вопросах и отрицаниях">
        <div className="bg-amber-50 rounded-lg p-5">
          <p className="text-amber-900 font-semibold mb-3">
            В утверждениях англичане предпочитают "a lot of" вместо much/many:
          </p>
          <div className="space-y-2 text-sm">
            <p className="text-red-700">
              ❌ I have <del>many books</del>. (звучит формально)
            </p>
            <p className="text-green-700">
              ✅ I have <strong>a lot of</strong> books. (естественнее)
            </p>
            <p className="text-blue-700 mt-3">
              ✓ Но в вопросах и отрицаниях much/many — отлично!
            </p>
          </div>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Much или Many?"
        instruction="Вставьте much или many."
        items={exercise2}
      />
    </>
  );
}

/* ===== ШАГ 4: A few и A little ===== */
function Step4() {
  const exercise3: FillItem[] = [
    {
      left: "1. I have",
      right: "friends. (friends = исчисл.)",
      answers: ["a few"],
      explanation: "Friends — исчисляемые, используем A FEW",
    },
    {
      left: "2. Add",
      right: "sugar. (sugar = неисчисл.)",
      answers: ["a little"],
      explanation: "Sugar — неисчисляемое, используем A LITTLE",
    },
    {
      left: "3. I need",
      right: "minutes. (minutes = исчисл.)",
      answers: ["a few"],
      explanation: "Minutes — исчисляемые, используем A FEW",
    },
    {
      left: "4. There's",
      right: "milk in the fridge. (milk = неисчисл.)",
      answers: ["a little"],
      explanation: "Milk — неисчисляемое, используем A LITTLE",
    },
  ];

  return (
    <>
      <UiSection title="🔵 A few — «несколько» (исчисляемые)">
        <div className="bg-blue-50 rounded-lg p-6 mb-4">
          <p className="font-semibold text-blue-900 mb-3">
            A FEW = небольшое количество (но есть!)
          </p>
          <div className="space-y-3 text-zinc-700">
            <p>
              ✓ I have <strong>a few</strong> books. (У меня несколько книг)
            </p>
            <p>
              ✓ Can I ask <strong>a few</strong> questions? (Несколько вопросов)
            </p>
            <p>
              ✓ We need <strong>a few</strong> minutes. (Несколько минут)
            </p>
            <p>
              ✓ I met <strong>a few</strong> friends. (Несколько друзей)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="🟣 A little — «немного» (неисчисляемые)">
        <div className="bg-purple-50 rounded-lg p-6 mb-4">
          <p className="font-semibold text-purple-900 mb-3">
            A LITTLE = небольшое количество (но есть!)
          </p>
          <div className="space-y-3 text-zinc-700">
            <p>
              ✓ I have <strong>a little</strong> money. (У меня немного денег)
            </p>
            <p>
              ✓ Add <strong>a little</strong> salt. (Добавь немного соли)
            </p>
            <p>
              ✓ We have <strong>a little</strong> time. (У нас немного времени)
            </p>
            <p>
              ✓ There's <strong>a little</strong> milk. (Есть немного молока)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="⚠️ Few vs A few / Little vs A little">
        <div className="bg-rose-50 rounded-lg p-6">
          <p className="font-semibold text-rose-900 mb-4">
            БЕЗ артикля — негативное значение (мало, недостаточно):
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4">
              <p className="font-semibold text-green-700 mb-2">
                ✓ A FEW (положит.)
              </p>
              <p className="text-sm">
                I have <strong>a few</strong> friends.
              </p>
              <p className="text-xs text-zinc-600 mt-1">
                У меня есть друзья (немного, но достаточно)
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="font-semibold text-red-700 mb-2">
                ✗ FEW (негатив.)
              </p>
              <p className="text-sm">
                I have <strong>few</strong> friends.
              </p>
              <p className="text-xs text-zinc-600 mt-1">
                У меня мало друзей (недостаточно)
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="font-semibold text-green-700 mb-2">
                ✓ A LITTLE (положит.)
              </p>
              <p className="text-sm">
                I have <strong>a little</strong> time.
              </p>
              <p className="text-xs text-zinc-600 mt-1">
                У меня есть время (немного, но достаточно)
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <p className="font-semibold text-red-700 mb-2">
                ✗ LITTLE (негатив.)
              </p>
              <p className="text-sm">
                I have <strong>little</strong> time.
              </p>
              <p className="text-xs text-zinc-600 mt-1">
                У меня мало времени (недостаточно)
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: A few или A little?"
        instruction="Вставьте a few или a little."
        items={exercise3}
      />
    </>
  );
}

/* ===== ШАГ 5: A lot of / Lots of ===== */
function Step5() {
  return (
    <>
      <UiSection title="🌟 A lot of / Lots of — универсальное «много»">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 mb-4">
          <p className="font-semibold text-indigo-900 mb-3">
            Самый универсальный квантификатор!
          </p>
          <p className="text-zinc-700 mb-4">
            <strong>A lot of</strong> и <strong>lots of</strong> можно
            использовать с ЛЮБЫМИ существительными — исчисляемыми и
            неисчисляемыми.
          </p>
          <p className="text-zinc-700">
            Они полностью взаимозаменяемы. <strong>Lots of</strong> звучит чуть
            более неформально.
          </p>
        </div>
      </UiSection>

      <UiSection title="✓ С исчисляемыми">
        <div className="bg-blue-50 rounded-lg p-5 mb-4">
          <div className="space-y-2 text-zinc-700">
            <p>
              • I have <strong>a lot of</strong> books. (Много книг)
            </p>
            <p>
              • She has <strong>lots of</strong> friends. (Много друзей)
            </p>
            <p>
              • There are <strong>a lot of</strong> people here. (Много людей)
            </p>
            <p>
              • We saw <strong>lots of</strong> birds. (Много птиц)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="✓ С неисчисляемыми">
        <div className="bg-purple-50 rounded-lg p-5 mb-4">
          <div className="space-y-2 text-zinc-700">
            <p>
              • I have <strong>a lot of</strong> money. (Много денег)
            </p>
            <p>
              • She drinks <strong>lots of</strong> water. (Много воды)
            </p>
            <p>
              • We have <strong>a lot of</strong> time. (Много времени)
            </p>
            <p>
              • Add <strong>lots of</strong> sugar. (Много сахара)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="📋 Сравнение: Much/Many vs A lot of">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-zinc-100">
                <th className="border border-zinc-300 p-3 text-left">
                  Предложение
                </th>
                <th className="border border-zinc-300 p-3 text-left">
                  Much/Many
                </th>
                <th className="border border-zinc-300 p-3 text-left">
                  A lot of
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-zinc-300 p-3">Утверждение (+)</td>
                <td className="border border-zinc-300 p-3 bg-amber-50">
                  △ формально
                </td>
                <td className="border border-zinc-300 p-3 bg-green-50">
                  ✓ естественно
                </td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">Вопрос (?)</td>
                <td className="border border-zinc-300 p-3 bg-green-50">
                  ✓ отлично
                </td>
                <td className="border border-zinc-300 p-3 bg-green-50">
                  ✓ отлично
                </td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">Отрицание (-)</td>
                <td className="border border-zinc-300 p-3 bg-green-50">
                  ✓ отлично
                </td>
                <td className="border border-zinc-300 p-3 bg-green-50">
                  ✓ отлично
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>

      <UiSection title="💡 Важное замечание">
        <div className="bg-amber-50 rounded-lg p-5">
          <p className="text-amber-900 font-semibold mb-3">
            В конце предложения без существительного:
          </p>
          <div className="space-y-2 text-sm">
            <p className="text-green-700">
              ✅ I read <strong>a lot</strong>. (без "of"!)
            </p>
            <p className="text-green-700">
              ✅ She talks <strong>a lot</strong>. (без "of"!)
            </p>
            <p className="text-red-700">
              ❌ I read <del>a lot of</del>. (неправильно)
            </p>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== ШАГ 6: Другие квантификаторы ===== */
function Step6() {
  return (
    <>
      <UiSection title="🎯 Другие полезные квантификаторы">
        <p className="text-zinc-700 mb-4">
          Кроме основных, есть еще много полезных слов количества!
        </p>
      </UiSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-50 rounded-lg p-5">
          <p className="font-bold text-blue-900 mb-3">All — все, всё</p>
          <div className="bg-white rounded-lg p-3 text-sm space-y-1">
            <p>
              • <strong>All</strong> students passed. (Все студенты)
            </p>
            <p>
              • I ate <strong>all</strong> the cake. (Весь торт)
            </p>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-5">
          <p className="font-bold text-green-900 mb-3">Most — большинство</p>
          <div className="bg-white rounded-lg p-3 text-sm space-y-1">
            <p>
              • <strong>Most</strong> people like pizza. (Большинство)
            </p>
            <p>
              • <strong>Most</strong> water is frozen. (Большая часть)
            </p>
          </div>
        </div>

        <div className="bg-purple-50 rounded-lg p-5">
          <p className="font-bold text-purple-900 mb-3">Several — несколько</p>
          <div className="bg-white rounded-lg p-3 text-sm space-y-1">
            <p>
              • <strong>Several</strong> books (Несколько книг)
            </p>
            <p>
              • I waited <strong>several</strong> hours. (Несколько часов)
            </p>
          </div>
        </div>

        <div className="bg-amber-50 rounded-lg p-5">
          <p className="font-bold text-amber-900 mb-3">Both — оба, обе</p>
          <div className="bg-white rounded-lg p-3 text-sm space-y-1">
            <p>
              • <strong>Both</strong> students are smart. (Оба студента)
            </p>
            <p>
              • I like <strong>both</strong> options. (Оба варианта)
            </p>
          </div>
        </div>

        <div className="bg-pink-50 rounded-lg p-5">
          <p className="font-bold text-pink-900 mb-3">Each / Every — каждый</p>
          <div className="bg-white rounded-lg p-3 text-sm space-y-1">
            <p>
              • <strong>Each</strong> student has a book. (Каждый отдельно)
            </p>
            <p>
              • <strong>Every</strong> day is special. (Все дни вместе)
            </p>
          </div>
        </div>

        <div className="bg-cyan-50 rounded-lg p-5">
          <p className="font-bold text-cyan-900 mb-3">No — никакой, нет</p>
          <div className="bg-white rounded-lg p-3 text-sm space-y-1">
            <p>
              • I have <strong>no</strong> money. (Нет денег)
            </p>
            <p>
              • There's <strong>no</strong> water. (Нет воды)
            </p>
          </div>
        </div>

        <div className="bg-indigo-50 rounded-lg p-5">
          <p className="font-bold text-indigo-900 mb-3">None — ни один</p>
          <div className="bg-white rounded-lg p-3 text-sm space-y-1">
            <p>
              • <strong>None</strong> of the students came. (Никто не пришел)
            </p>
            <p>
              • I have <strong>none</strong>. (У меня нет ни одного)
            </p>
          </div>
        </div>

        <div className="bg-teal-50 rounded-lg p-5">
          <p className="font-bold text-teal-900 mb-3">
            Plenty of — много, достаточно
          </p>
          <div className="bg-white rounded-lg p-3 text-sm space-y-1">
            <p>
              • We have <strong>plenty of</strong> time. (Много времени)
            </p>
            <p>
              • <strong>Plenty of</strong> food! (Много еды)
            </p>
          </div>
        </div>

        <div className="bg-orange-50 rounded-lg p-5">
          <p className="font-bold text-orange-900 mb-3">Enough — достаточно</p>
          <div className="bg-white rounded-lg p-3 text-sm space-y-1">
            <p>
              • I have <strong>enough</strong> money. (Достаточно денег)
            </p>
            <p>
              • <strong>Enough</strong> books for everyone. (Достаточно книг)
            </p>
          </div>
        </div>

        <div className="bg-rose-50 rounded-lg p-5">
          <p className="font-bold text-rose-900 mb-3">
            Too much / Too many — слишком много
          </p>
          <div className="bg-white rounded-lg p-3 text-sm space-y-1">
            <p>
              • <strong>Too much</strong> sugar. (Слишком много сахара)
            </p>
            <p>
              • <strong>Too many</strong> people. (Слишком много людей)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== ШАГ 7: Типичные ошибки ===== */
function Step7() {
  return (
    <>
      <UiSection title="⚠️ Типичные ошибки русскоязычных студентов">
        <p className="text-zinc-700 mb-4">
          Разберём самые частые ошибки при использовании квантификаторов!
        </p>
      </UiSection>

      <div className="space-y-4">
        <div className="bg-red-50 rounded-lg p-5 border-2 border-red-200">
          <p className="font-bold text-red-900 mb-3">
            Ошибка 1: Much вместо Many
          </p>
          <div className="space-y-2">
            <p className="text-red-600">
              ❌ How <del>much books</del> do you have?
            </p>
            <p className="text-green-600 font-semibold">
              ✅ How <strong>many books</strong> do you have?
            </p>
            <p className="text-sm text-zinc-600 mt-2">
              Books — исчисляемые, поэтому MANY!
            </p>
          </div>
        </div>

        <div className="bg-red-50 rounded-lg p-5 border-2 border-red-200">
          <p className="font-bold text-red-900 mb-3">
            Ошибка 2: Many вместо Much
          </p>
          <div className="space-y-2">
            <p className="text-red-600">
              ❌ I don't have <del>many money</del>.
            </p>
            <p className="text-green-600 font-semibold">
              ✅ I don't have <strong>much money</strong>.
            </p>
            <p className="text-sm text-zinc-600 mt-2">
              Money — неисчисляемое, поэтому MUCH!
            </p>
          </div>
        </div>

        <div className="bg-red-50 rounded-lg p-5 border-2 border-red-200">
          <p className="font-bold text-red-900 mb-3">
            Ошибка 3: Any в утверждении
          </p>
          <div className="space-y-2">
            <p className="text-red-600">
              ❌ I have <del>any books</del>.
            </p>
            <p className="text-green-600 font-semibold">
              ✅ I have <strong>some books</strong>.
            </p>
            <p className="text-sm text-zinc-600 mt-2">
              В утверждении используем SOME, не ANY!
            </p>
          </div>
        </div>

        <div className="bg-red-50 rounded-lg p-5 border-2 border-red-200">
          <p className="font-bold text-red-900 mb-3">
            Ошибка 4: A little с исчисляемыми
          </p>
          <div className="space-y-2">
            <p className="text-red-600">
              ❌ I have <del>a little friends</del>.
            </p>
            <p className="text-green-600 font-semibold">
              ✅ I have <strong>a few friends</strong>.
            </p>
            <p className="text-sm text-zinc-600 mt-2">
              Friends — исчисляемые, нужно A FEW!
            </p>
          </div>
        </div>

        <div className="bg-red-50 rounded-lg p-5 border-2 border-red-200">
          <p className="font-bold text-red-900 mb-3">
            Ошибка 5: Many/Much в утверждениях
          </p>
          <div className="space-y-2">
            <p className="text-amber-600">
              △ I have <del>many books</del>. (звучит странно)
            </p>
            <p className="text-green-600 font-semibold">
              ✅ I have <strong>a lot of books</strong>. (естественно)
            </p>
            <p className="text-sm text-zinc-600 mt-2">
              В утверждениях лучше использовать A LOT OF!
            </p>
          </div>
        </div>

        <div className="bg-red-50 rounded-lg p-5 border-2 border-red-200">
          <p className="font-bold text-red-900 mb-3">
            Ошибка 6: A lot of в конце предложения
          </p>
          <div className="space-y-2">
            <p className="text-red-600">
              ❌ I read <del>a lot of</del>.
            </p>
            <p className="text-green-600 font-semibold">
              ✅ I read <strong>a lot</strong>.
            </p>
            <p className="text-sm text-zinc-600 mt-2">
              В конце без существительного — убираем OF!
            </p>
          </div>
        </div>

        <div className="bg-red-50 rounded-lg p-5 border-2 border-red-200">
          <p className="font-bold text-red-900 mb-3">
            Ошибка 7: Путают Few и A few
          </p>
          <div className="space-y-2">
            <p className="text-red-600">
              ❌ I have <strong>few</strong> friends. (негативно — мало)
            </p>
            <p className="text-green-600 font-semibold">
              ✅ I have <strong>a few</strong> friends. (позитивно — есть
              друзья)
            </p>
            <p className="text-sm text-zinc-600 mt-2">
              Артикль A делает значение положительным!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== ШАГ 8: Упражнения ===== */
function Step8() {
  const exercise4: FillItem[] = [
    {
      left: "1. How",
      right: "sugar do you need?",
      answers: ["much"],
      explanation: "Sugar — неисчисляемое → MUCH",
    },
    {
      left: "2. I have",
      right: "apples. (несколько)",
      answers: ["a few", "some"],
      explanation: "Apples — исчисляемые → A FEW или SOME",
    },
    {
      left: "3. Do you have",
      right: "time?",
      answers: ["any"],
      explanation: "Вопрос → ANY",
    },
    {
      left: "4. I don't have",
      right: "friends here.",
      answers: ["many", "a lot of"],
      explanation: "Отрицание + исчисляемые → MANY или A LOT OF",
    },
    {
      left: "5. There's",
      right: "milk in the fridge.",
      answers: ["a little", "some"],
      explanation: "Milk — неисчисляемое → A LITTLE или SOME",
    },
    {
      left: "6. How",
      right: "people came?",
      answers: ["many"],
      explanation: "People — исчисляемые → MANY",
    },
    {
      left: "7. I read",
      right: "(много, в конце)",
      answers: ["a lot"],
      explanation: "В конце предложения без OF → A LOT",
    },
    {
      left: "8. We have",
      right: "of time. (много)",
      answers: ["a lot", "lots", "plenty"],
      explanation: "Много времени → A LOT OF / LOTS OF / PLENTY OF",
    },
  ];

  return (
    <>
      <UiSection title="📝 Упражнения на все квантификаторы">
        <p className="text-zinc-700 mb-4">
          Проверьте, насколько хорошо вы усвоили тему!
        </p>
      </UiSection>

      <CheckableExercise
        title="📝 Основные упражнения"
        instruction="Вставьте правильный квантификатор."
        items={exercise4}
      />

      <UiSection title="✍️ Переведите на английский">
        <div className="bg-purple-50 rounded-lg p-5">
          <ol className="list-decimal pl-5 space-y-3 text-zinc-700">
            <li>У меня много друзей. (I have...)</li>
            <li>Сколько денег у тебя есть? (How...)</li>
            <li>У него несколько книг. (He has...)</li>
            <li>Добавь немного сахара. (Add...)</li>
            <li>У нас нет времени. (We don&apos;t have...)</li>
            <li>У тебя есть какие-нибудь вопросы? (Do you have...)</li>
            <li>Я читаю много. (I read...)</li>
            <li>Все студенты пришли. (All...)</li>
          </ol>
        </div>
      </UiSection>
    </>
  );
}

/* ===== ШАГ 9: Практика в контексте ===== */
function Step9() {
  return (
    <>
      <UiSection title="💬 Диалоги с квантификаторами">
        <p className="text-zinc-700 mb-4">
          Практикуйте квантификаторы в естественных диалогах!
        </p>
      </UiSection>

      <div className="space-y-4">
        <div className="bg-blue-50 rounded-lg p-5">
          <p className="font-bold text-blue-900 mb-3">Диалог 1: В магазине</p>
          <div className="space-y-2 text-sm">
            <p>
              <strong className="text-blue-600">A:</strong> How{" "}
              <strong>much</strong> milk do you need?
            </p>
            <p>
              <strong className="text-green-600">B:</strong> Just{" "}
              <strong>a little</strong>, please. And <strong>a few</strong>{" "}
              eggs.
            </p>
            <p>
              <strong className="text-blue-600">A:</strong> Do you have{" "}
              <strong>any</strong> money?
            </p>
            <p>
              <strong className="text-green-600">B:</strong> Yes, I have{" "}
              <strong>a lot</strong>!
            </p>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-5">
          <p className="font-bold text-green-900 mb-3">
            Диалог 2: Планирование вечеринки
          </p>
          <div className="space-y-2 text-sm">
            <p>
              <strong className="text-blue-600">A:</strong> How{" "}
              <strong>many</strong> people are coming?
            </p>
            <p>
              <strong className="text-green-600">B:</strong> About 20. We need{" "}
              <strong>a lot of</strong> food!
            </p>
            <p>
              <strong className="text-blue-600">A:</strong> Do we have{" "}
              <strong>enough</strong> chairs?
            </p>
            <p>
              <strong className="text-green-600">B:</strong> No, we have only{" "}
              <strong>a few</strong>. Let's rent <strong>some</strong> more.
            </p>
          </div>
        </div>

        <div className="bg-purple-50 rounded-lg p-5">
          <p className="font-bold text-purple-900 mb-3">Диалог 3: Экзамен</p>
          <div className="space-y-2 text-sm">
            <p>
              <strong className="text-blue-600">A:</strong> Did you study{" "}
              <strong>much</strong>?
            </p>
            <p>
              <strong className="text-green-600">B:</strong> Yes,{" "}
              <strong>a lot</strong>! I read <strong>plenty of</strong> books.
            </p>
            <p>
              <strong className="text-blue-600">A:</strong> Do you have{" "}
              <strong>any</strong> questions?
            </p>
            <p>
              <strong className="text-green-600">B:</strong> Just{" "}
              <strong>a few</strong>.
            </p>
          </div>
        </div>

        <div className="bg-amber-50 rounded-lg p-5">
          <p className="font-bold text-amber-900 mb-3">Диалог 4: Работа</p>
          <div className="space-y-2 text-sm">
            <p>
              <strong className="text-blue-600">A:</strong> How{" "}
              <strong>much</strong> time do we have?
            </p>
            <p>
              <strong className="text-green-600">B:</strong> Not{" "}
              <strong>much</strong>. Only <strong>a few</strong> hours.
            </p>
            <p>
              <strong className="text-blue-600">A:</strong> Are there{" "}
              <strong>many</strong> tasks left?
            </p>
            <p>
              <strong className="text-green-600">B:</strong> Yes,{" "}
              <strong>a lot</strong>. We need to work faster!
            </p>
          </div>
        </div>
      </div>

      <UiSection title="🎯 Задание: Создайте свой диалог">
        <div className="bg-indigo-50 rounded-lg p-5">
          <p className="font-semibold text-indigo-900 mb-3">
            Напишите короткий диалог (5-6 реплик) на одну из тем:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-700">
            <li>В ресторане (заказ еды)</li>
            <li>Планирование путешествия</li>
            <li>Обсуждение учебы</li>
            <li>Покупка подарков</li>
          </ul>
          <p className="text-sm text-zinc-600 mt-3">
            Используйте минимум 5 разных квантификаторов!
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== ШАГ 10: Итоговый тест ===== */
function Step10() {
  const finalTest: FillItem[] = [
    {
      left: "1. I don't have",
      right: "time. (много)",
      answers: ["much", "a lot of"],
      explanation: "Time — неисчисляемое, отрицание → MUCH или A LOT OF",
    },
    {
      left: "2. How",
      right: "students are here?",
      answers: ["many"],
      explanation: "Students — исчисляемые → MANY",
    },
    {
      left: "3. Would you like",
      right: "tea?",
      answers: ["some"],
      explanation: "Предложение → SOME",
    },
    {
      left: "4. I have",
      right: "books. (несколько)",
      answers: ["a few", "some", "several"],
      explanation: "Books — исчисляемые → A FEW / SOME / SEVERAL",
    },
    {
      left: "5. Add",
      right: "salt. (немного)",
      answers: ["a little", "some"],
      explanation: "Salt — неисчисляемое → A LITTLE или SOME",
    },
    {
      left: "6. Do you have",
      right: "questions?",
      answers: ["any"],
      explanation: "Вопрос → ANY",
    },
    {
      left: "7. She reads",
      right: "(много, в конце)",
      answers: ["a lot"],
      explanation: "В конце без существительного → A LOT (без OF)",
    },
    {
      left: "8. There are",
      right: "people in the room. (слишком много)",
      answers: ["too many"],
      explanation: "People — исчисляемые, избыток → TOO MANY",
    },
    {
      left: "9. We have",
      right: "of food. (достаточно)",
      answers: ["plenty", "enough"],
      explanation: "Достаточно → PLENTY OF или ENOUGH",
    },
    {
      left: "10.",
      right: "students passed the exam. (все)",
      answers: ["All", "All the"],
      explanation: "Все студенты → ALL",
    },
  ];

  return (
    <>
      <UiSection title="🎯 Итоговый тест">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 mb-4">
          <p className="text-lg font-semibold text-indigo-900 mb-2">
            Проверьте свои знания!
          </p>
          <p className="text-zinc-700">
            Пройдите финальный тест, чтобы убедиться, что вы освоили все
            квантификаторы.
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Финальный тест: 10 вопросов"
        instruction="Вставьте правильный квантификатор."
        items={finalTest}
      />

      <UiSection title="📊 Сводная таблица всех квантификаторов">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-zinc-100">
                <th className="border border-zinc-300 p-3 text-left">
                  Квантификатор
                </th>
                <th className="border border-zinc-300 p-3 text-left">Тип</th>
                <th className="border border-zinc-300 p-3 text-left">Пример</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-zinc-300 p-3">
                  <strong>some / any</strong>
                </td>
                <td className="border border-zinc-300 p-3">Оба типа</td>
                <td className="border border-zinc-300 p-3">
                  I have some books / any money
                </td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">
                  <strong>much</strong>
                </td>
                <td className="border border-zinc-300 p-3">Неисчисляемые</td>
                <td className="border border-zinc-300 p-3">How much water?</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">
                  <strong>many</strong>
                </td>
                <td className="border border-zinc-300 p-3">Исчисляемые</td>
                <td className="border border-zinc-300 p-3">How many books?</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">
                  <strong>a little</strong>
                </td>
                <td className="border border-zinc-300 p-3">Неисчисляемые</td>
                <td className="border border-zinc-300 p-3">A little time</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">
                  <strong>a few</strong>
                </td>
                <td className="border border-zinc-300 p-3">Исчисляемые</td>
                <td className="border border-zinc-300 p-3">A few friends</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">
                  <strong>a lot of / lots of</strong>
                </td>
                <td className="border border-zinc-300 p-3">Оба типа</td>
                <td className="border border-zinc-300 p-3">
                  A lot of books / water
                </td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">
                  <strong>plenty of</strong>
                </td>
                <td className="border border-zinc-300 p-3">Оба типа</td>
                <td className="border border-zinc-300 p-3">Plenty of time</td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">
                  <strong>enough</strong>
                </td>
                <td className="border border-zinc-300 p-3">Оба типа</td>
                <td className="border border-zinc-300 p-3">
                  Enough money / books
                </td>
              </tr>
              <tr>
                <td className="border border-zinc-300 p-3">
                  <strong>all / most</strong>
                </td>
                <td className="border border-zinc-300 p-3">Оба типа</td>
                <td className="border border-zinc-300 p-3">
                  All students / most water
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>

      <UiSection title="🎉 Поздравляем!">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 text-center border-2 border-green-200">
          <p className="text-3xl mb-4">🏆</p>
          <p className="text-2xl font-bold text-green-900 mb-3">
            Вы освоили тему &quot;Квантификаторы&quot;!
          </p>
          <p className="text-zinc-700 mb-4">
            Теперь вы знаете, как правильно использовать{" "}
            <strong>some, any, much, many, a few, a little</strong> и другие
            слова количества!
          </p>
          <div className="bg-white rounded-lg p-5 inline-block text-left">
            <p className="text-sm text-zinc-600 mb-2">Вы научились:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>
                  Различать исчисляемые и неисчисляемые существительные
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Правильно использовать some и any</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Выбирать между much и many</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Применять a few и a little</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Избегать типичных ошибок</span>
              </li>
            </ul>
          </div>
        </div>
      </UiSection>
    </>
  );
}

