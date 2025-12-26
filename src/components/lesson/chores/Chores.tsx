"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function Chores({ step }: Props) {
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

/* ===== СТРАНИЦА 1: Введение + основные домашние дела ===== */
function Step1() {
  return (
    <>
      <UiSection title="🧹 Домашние дела и привычки">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 mb-4">
          <p className="text-lg font-semibold text-blue-900 mb-3">
            Тема: Household Chores & Daily Habits
          </p>
          <p className="text-zinc-700">
            В этом уроке вы выучите <strong>50+ фразовых глаголов</strong> о
            домашних делах и научитесь говорить о своих привычках на английском!
          </p>
        </div>
      </UiSection>

      <UiSection title="🏠 Основные домашние дела">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-5 border-2 border-blue-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-4xl">🍽️</div>
              <div>
                <p className="font-bold text-blue-900 text-lg">Do the dishes</p>
                <p className="text-sm text-zinc-600">Мыть посуду</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="text-sm italic text-blue-700">
                It&apos;s your turn to <strong>do the dishes</strong>.
              </p>
              <p className="text-xs text-zinc-600 mt-1">
                Твоя очередь мыть посуду.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-5 border-2 border-green-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-4xl">🧹</div>
              <div>
                <p className="font-bold text-green-900 text-lg">Clean up</p>
                <p className="text-sm text-zinc-600">Убирать</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="text-sm italic text-green-700">
                We need to <strong>clean up</strong> the kitchen.
              </p>
              <p className="text-xs text-zinc-600 mt-1">Нужно убрать кухню.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-5 border-2 border-purple-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-4xl">🛏️</div>
              <div>
                <p className="font-bold text-purple-900 text-lg">
                  Make the bed
                </p>
                <p className="text-sm text-zinc-600">Заправлять кровать</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="text-sm italic text-purple-700">
                I always <strong>make the bed</strong> in the morning.
              </p>
              <p className="text-xs text-zinc-600 mt-1">
                Я всегда заправляю кровать утром.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-5 border-2 border-amber-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-4xl">🗑️</div>
              <div>
                <p className="font-bold text-amber-900 text-lg">
                  Take out the trash
                </p>
                <p className="text-sm text-zinc-600">Выносить мусор</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="text-sm italic text-amber-700">
                Don&apos;t forget to <strong>take out the trash</strong>!
              </p>
              <p className="text-xs text-zinc-600 mt-1">
                Не забудь вынести мусор!
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-lg p-5 border-2 border-red-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-4xl">🧺</div>
              <div>
                <p className="font-bold text-red-900 text-lg">Do the laundry</p>
                <p className="text-sm text-zinc-600">Стирать бельё</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="text-sm italic text-red-700">
                Can you help me <strong>do the laundry</strong>?
              </p>
              <p className="text-xs text-zinc-600 mt-1">
                Можешь помочь со стиркой?
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-lg p-5 border-2 border-cyan-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-4xl">✨</div>
              <div>
                <p className="font-bold text-cyan-900 text-lg">Tidy up</p>
                <p className="text-sm text-zinc-600">Приводить в порядок</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="text-sm italic text-cyan-700">
                Let&apos;s <strong>tidy up</strong> the living room.
              </p>
              <p className="text-xs text-zinc-600 mt-1">
                Давай приведём гостиную в порядок.
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="📸 Визуализация домашних дел">
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 border-2 border-indigo-200">
          <div className="text-center mb-6">
            <p className="text-3xl mb-4">🏡</p>
            <p className="text-2xl font-bold text-indigo-900 mb-2">
              HOUSEHOLD CHORES
            </p>
            <p className="text-sm text-zinc-600">Домашние дела</p>
          </div>

          <div className="bg-white rounded-lg p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-3xl mb-2">🍽️</p>
                <p className="text-xs font-semibold">Kitchen</p>
              </div>
              <div>
                <p className="text-3xl mb-2">🛏️</p>
                <p className="text-xs font-semibold">Bedroom</p>
              </div>
              <div>
                <p className="text-3xl mb-2">🚿</p>
                <p className="text-xs font-semibold">Bathroom</p>
              </div>
              <div>
                <p className="text-3xl mb-2">🛋️</p>
                <p className="text-xs font-semibold">Living Room</p>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-indigo-100 rounded-lg p-4">
            <p className="text-center text-sm font-semibold text-indigo-900">
              💡 Каждая комната требует своих домашних дел!
            </p>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 2: Фразовые глаголы про уборку ===== */
function Step2() {
  const exercise1: FillItem[] = [
    {
      left: "1. We have to",
      right: "the living room. (пропылесосить)",
      answers: ["vacuum"],
      explanation: "Правильно: vacuum — пылесосить",
    },
    {
      left: "2. Can you",
      right: "the table after dinner? (протереть)",
      answers: ["wipe down"],
      explanation: "Правильно: wipe down — протирать поверхность",
    },
    {
      left: "3. I&apos;ll",
      right: "the floor after dinner. (вымою)",
      answers: ["mop"],
      explanation: "Правильно: mop — мыть пол шваброй",
    },
    {
      left: "4. Please",
      right: "the shelves. (вытри пыль)",
      answers: ["dust"],
      explanation: "Правильно: dust — вытирать пыль",
    },
    {
      left: "5. Let&apos;s",
      right: "the spill. (промокнуть)",
      answers: ["soak up"],
      explanation: "Правильно: soak up — промокнуть разлитое",
    },
  ];

  return (
    <>
      <UiSection title="🧹 Фразовые глаголы про уборку (32 глагола!)">
        <p className="text-zinc-700 mb-4">
          Изучите 32 фразовых глагола для описания разных видов уборки, посуды и стирки!
        </p>
      </UiSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-5 border border-blue-200">
          <p className="font-bold text-blue-900 text-lg mb-3">
            Vacuum the floor
          </p>
          <p className="text-sm text-zinc-700 mb-2">Пылесосить пол</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              We have to <strong>vacuum</strong> the living room.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Мы должны пропылесосить гостиную.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-5 border border-green-200">
          <p className="font-bold text-green-900 text-lg mb-3">Wipe down</p>
          <p className="text-sm text-zinc-700 mb-2">Протирать</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              Can you <strong>wipe down</strong> the table?
            </p>
            <p className="text-xs text-zinc-600 mt-1">Можешь протереть стол?</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-5 border border-purple-200">
          <p className="font-bold text-purple-900 text-lg mb-3">
            Mop the floor
          </p>
          <p className="text-sm text-zinc-700 mb-2">Мыть пол (шваброй)</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              I&apos;ll <strong>mop the floor</strong> after dinner.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Я вымою пол после ужина.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-5 border border-amber-200">
          <p className="font-bold text-amber-900 text-lg mb-3">
            Sweep the floor
          </p>
          <p className="text-sm text-zinc-700 mb-2">Подметать пол</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              Don&apos;t forget to <strong>sweep up</strong> the crumbs.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Не забудь подмести крошки.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-lg p-5 border border-red-200">
          <p className="font-bold text-red-900 text-lg mb-3">
            Dust the furniture
          </p>
          <p className="text-sm text-zinc-700 mb-2">Вытирать пыль с мебели</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              Please <strong>dust</strong> the shelves.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Пожалуйста, вытри пыль с полок.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-lg p-5 border border-cyan-200">
          <p className="font-bold text-cyan-900 text-lg mb-3">
            Clean the windows
          </p>
          <p className="text-sm text-zinc-700 mb-2">Мыть окна</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              Let&apos;s <strong>wash the windows</strong> this weekend.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Давай помоем окна в эти выходные.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-5 border border-indigo-200">
          <p className="font-bold text-indigo-900 text-lg mb-3">
            Clean the bathroom
          </p>
          <p className="text-sm text-zinc-700 mb-2">Убирать ванную</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              We need to <strong>clean the bathroom</strong> today.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Сегодня нужно убрать ванную.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg p-5 border border-pink-200">
          <p className="font-bold text-pink-900 text-lg mb-3">
            Scrub the toilet
          </p>
          <p className="text-sm text-zinc-700 mb-2">Чистить унитаз</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              I need to <strong>scrub the toilet</strong> later.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Мне нужно почистить унитаз позже.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg p-5 border border-yellow-200">
          <p className="font-bold text-yellow-900 text-lg mb-3">
            Wipe off (dust/dirt)
          </p>
          <p className="text-sm text-zinc-700 mb-2">Стирать (пыль/грязь)</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              I&apos;ll <strong>wipe off</strong> the dust from the shelves.
            </p>
            <p className="text-xs text-zinc-600 mt-1">Я вытру пыль с полок.</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-lg p-5 border border-lime-200">
          <p className="font-bold text-lime-900 text-lg mb-3">
            Sweep away (debris)
          </p>
          <p className="text-sm text-zinc-700 mb-2">Сметать (мусор)</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              I&apos;ll <strong>sweep away</strong> the leaves outside.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Я смету листья на улице.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-lg p-5 border border-sky-200">
          <p className="font-bold text-sky-900 text-lg mb-3">Rinse off</p>
          <p className="text-sm text-zinc-700 mb-2">Смывать, ополаскивать</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              Please <strong>rinse off</strong> the dishes before putting them
              away.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Ополосни посуду перед тем, как убрать.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-lg p-5 border border-violet-200">
          <p className="font-bold text-violet-900 text-lg mb-3">Scrub down</p>
          <p className="text-sm text-zinc-700 mb-2">Оттирать, чистить</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              We need to <strong>scrub down</strong> the kitchen counters.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Нужно оттереть кухонные столешницы.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-lg p-5 border border-rose-200">
          <p className="font-bold text-rose-900 text-lg mb-3">Vacuum up</p>
          <p className="text-sm text-zinc-700 mb-2">
            Пропылесосить (что-то конкретное)
          </p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              I&apos;ll <strong>vacuum up</strong> the dirt in the hallway.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Я пропылесошу грязь в коридоре.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-5 border border-orange-200">
          <p className="font-bold text-orange-900 text-lg mb-3">
            Soak up (spill)
          </p>
          <p className="text-sm text-zinc-700 mb-2">Промокнуть (разлитое)</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              It&apos;s time to <strong>soak up</strong> the spill.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Пора промокнуть разлитое.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-5 border border-emerald-200">
          <p className="font-bold text-emerald-900 text-lg mb-3">
            Wipe the surfaces
          </p>
          <p className="text-sm text-zinc-700 mb-2">Протирать поверхности</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              Don&apos;t forget to <strong>wipe the surfaces</strong> in the
              kitchen.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Не забудь протереть поверхности на кухне.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-fuchsia-50 to-purple-50 rounded-lg p-5 border border-fuchsia-200">
          <p className="font-bold text-fuchsia-900 text-lg mb-3">Sweep up</p>
          <p className="text-sm text-zinc-700 mb-2">Подметать</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              Don&apos;t forget to <strong>sweep up</strong> the crumbs.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Не забудь подмести крошки.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-lg p-5 border border-slate-200">
          <p className="font-bold text-slate-900 text-lg mb-3">Wash up</p>
          <p className="text-sm text-zinc-700 mb-2">Мыть (посуду, руки)</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              We need to <strong>wash up</strong> after cooking.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Нужно помыть посуду после готовки.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-stone-50 to-zinc-50 rounded-lg p-5 border border-stone-200">
          <p className="font-bold text-stone-900 text-lg mb-3">
            Dry off (dishes)
          </p>
          <p className="text-sm text-zinc-700 mb-2">Вытирать насухо (посуду)</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              I need to <strong>dry off</strong> the dishes before putting them
              away.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Нужно вытереть посуду перед тем, как убрать.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-neutral-50 to-gray-50 rounded-lg p-5 border border-neutral-200">
          <p className="font-bold text-neutral-900 text-lg mb-3">
            Take apart (for cleaning)
          </p>
          <p className="text-sm text-zinc-700 mb-2">Разбирать (для уборки)</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              We need to <strong>take apart</strong> the shelves to clean behind
              them.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Нужно разобрать полки, чтобы убрать за ними.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-warmGray-50 to-stone-50 rounded-lg p-5 border border-warmGray-200">
          <p className="font-bold text-warmGray-900 text-lg mb-3">
            Put together (after cleaning)
          </p>
          <p className="text-sm text-zinc-700 mb-2">Собирать (после уборки)</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              Let&apos;s <strong>put together</strong> the furniture after
              cleaning.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Давайте соберём мебель после уборки.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-zinc-50 to-slate-50 rounded-lg p-5 border border-zinc-200">
          <p className="font-bold text-zinc-900 text-lg mb-3">
            Clean the fridge
          </p>
          <p className="text-sm text-zinc-700 mb-2">Убирать в холодильнике</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              Let&apos;s <strong>clean the fridge</strong> before we buy
              groceries.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Давай уберём в холодильнике перед покупками.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-neutral-50 rounded-lg p-5 border border-gray-200">
          <p className="font-bold text-gray-900 text-lg mb-3">
            Put the groceries away
          </p>
          <p className="text-sm text-zinc-700 mb-2">
            Убирать продукты (на место)
          </p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              We need to <strong>put the groceries away</strong> quickly.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Нужно быстро убрать продукты.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-5 border border-teal-200">
          <p className="font-bold text-teal-900 text-lg mb-3">
            Throw out (trash)
          </p>
          <p className="text-sm text-zinc-700 mb-2">Выбрасывать (мусор)</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              Please <strong>throw out</strong> the old newspapers.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Пожалуйста, выбрось старые газеты.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-50 to-sky-50 rounded-lg p-5 border border-cyan-200">
          <p className="font-bold text-cyan-900 text-lg mb-3">
            Take care of the garden
          </p>
          <p className="text-sm text-zinc-700 mb-2">Ухаживать за садом</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              I <strong>take care of the garden</strong> every weekend.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Я ухаживаю за садом каждые выходные.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-lg p-5 border border-red-200">
          <p className="font-bold text-red-900 text-lg mb-3">
            Clear away (dishes)
          </p>
          <p className="text-sm text-zinc-700 mb-2">Убирать (посуду со стола)</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              Can you <strong>clear away</strong> the dishes?
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Можешь убрать посуду со стола?
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-lg p-5 border border-indigo-200">
          <p className="font-bold text-indigo-900 text-lg mb-3">
            Stack the dishes
          </p>
          <p className="text-sm text-zinc-700 mb-2">Складывать посуду в стопку</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              Please <strong>stack the dishes</strong> by the sink.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Пожалуйста, сложи посуду у раковины.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-lime-50 rounded-lg p-5 border border-green-200">
          <p className="font-bold text-green-900 text-lg mb-3">
            Run the dishwasher
          </p>
          <p className="text-sm text-zinc-700 mb-2">Включать посудомойку</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              Don&apos;t forget to <strong>run the dishwasher</strong>.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Не забудь включить посудомойку.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg p-5 border border-amber-200">
          <p className="font-bold text-amber-900 text-lg mb-3">
            Hang out (laundry)
          </p>
          <p className="text-sm text-zinc-700 mb-2">Развешивать белье (сушить)</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              I need to <strong>hang out</strong> the laundry to dry.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Мне нужно развесить белье сушиться.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-lg p-5 border border-blue-200">
          <p className="font-bold text-blue-900 text-lg mb-3">
            Load the washing machine
          </p>
          <p className="text-sm text-zinc-700 mb-2">Загружать стиральную машину</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              I&apos;ll <strong>load the washing machine</strong> now.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Я сейчас загружу стиральную машину.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-lg p-5 border border-purple-200">
          <p className="font-bold text-purple-900 text-lg mb-3">
            Unload the dryer
          </p>
          <p className="text-sm text-zinc-700 mb-2">Разгружать сушилку</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              Can you <strong>unload the dryer</strong>?
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Можешь разгрузить сушилку?
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-lg p-5 border border-pink-200">
          <p className="font-bold text-pink-900 text-lg mb-3">
            Set the table
          </p>
          <p className="text-sm text-zinc-700 mb-2">Накрывать на стол</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              Please <strong>set the table</strong> for dinner.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Пожалуйста, накрой на стол к ужину.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-lg p-5 border border-teal-200">
          <p className="font-bold text-teal-900 text-lg mb-3">
            Clear the table
          </p>
          <p className="text-sm text-zinc-700 mb-2">Убирать со стола</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              Kids, <strong>clear the table</strong> after eating.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Дети, уберите со стола после еды.
            </p>
          </div>
        </div>
      </div>

      <CheckableExercise
        title="📝 Упражнение: Фразовые глаголы"
        instruction="Вставьте правильный глагол (vacuum, wipe down, mop, dust, soak up)."
        items={exercise1}
      />
    </>
  );
}

/* ===== СТРАНИЦА 3: Работа с бельём и одеждой ===== */
function Step3() {
  const exercise2: FillItem[] = [
    {
      left: "1. I&apos;m going to",
      right: "the clothes. (сложить)",
      answers: ["fold"],
      explanation: "Правильно: fold — складывать одежду",
    },
    {
      left: "2. Please",
      right: "your jacket. (повесь)",
      answers: ["hang up"],
      explanation: "Правильно: hang up — вешать одежду",
    },
    {
      left: "3. I&apos;ll",
      right: "my shirt for tomorrow. (поглажу)",
      answers: ["iron"],
      explanation: "Правильно: iron — гладить",
    },
  ];

  return (
    <>
      <UiSection title="👔 Работа с бельём и одеждой">
        <p className="text-zinc-700 mb-4">
          Узнайте, как говорить о стирке, глажке и хранении одежды!
        </p>
      </UiSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-5 border border-blue-200">
          <p className="font-bold text-blue-900 text-lg mb-3">
            Fold the clothes
          </p>
          <p className="text-sm text-zinc-700 mb-2">Складывать одежду</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              I&apos;m going to <strong>fold the clothes</strong>.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Я собираюсь сложить одежду.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-5 border border-green-200">
          <p className="font-bold text-green-900 text-lg mb-3">
            Hang up (clothes)
          </p>
          <p className="text-sm text-zinc-700 mb-2">Вешать одежду</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              I&apos;ll <strong>hang up</strong> the laundry outside to dry.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Я повешу бельё сушиться на улице.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-5 border border-purple-200">
          <p className="font-bold text-purple-900 text-lg mb-3">
            Iron the clothes
          </p>
          <p className="text-sm text-zinc-700 mb-2">Гладить одежду</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              I&apos;ll <strong>iron</strong> my shirt for tomorrow.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Я поглажу рубашку на завтра.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-5 border border-amber-200">
          <p className="font-bold text-amber-900 text-lg mb-3">Put away</p>
          <p className="text-sm text-zinc-700 mb-2">Убирать на место</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              Please <strong>put away</strong> the dishes after they dry.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Убери посуду, когда она высохнет.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-lg p-5 border border-red-200">
          <p className="font-bold text-red-900 text-lg mb-3">Pick up</p>
          <p className="text-sm text-zinc-700 mb-2">Подбирать, собирать</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              I have to <strong>pick up</strong> the toys before guests arrive.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Нужно собрать игрушки перед приходом гостей.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-lg p-5 border border-cyan-200">
          <p className="font-bold text-cyan-900 text-lg mb-3">
            Change the bed linens
          </p>
          <p className="text-sm text-zinc-700 mb-2">Менять постельное бельё</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              Can you <strong>change the bed linens</strong>?
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Можешь поменять постельное бельё?
            </p>
          </div>
        </div>
      </div>

      <CheckableExercise
        title="📝 Упражнение: Одежда и бельё"
        instruction="Вставьте правильный фразовый глагол (fold, hang up, iron)."
        items={exercise2}
      />
    </>
  );
}

/* ===== СТРАНИЦА 4: Другие домашние дела ===== */
function Step4() {
  return (
    <>
      <UiSection title="🌱 Другие домашние дела">
        <p className="text-zinc-700 mb-4">
          Дополнительные фразы для полного описания домашних обязанностей!
        </p>
      </UiSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-5 border border-green-200">
          <p className="font-bold text-green-900 text-lg mb-3">
            Water the plants
          </p>
          <p className="text-sm text-zinc-700 mb-2">Поливать растения</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              You should <strong>water the plants</strong> every two days.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Поливай растения каждые два дня.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-5 border border-amber-200">
          <p className="font-bold text-amber-900 text-lg mb-3">Feed the pets</p>
          <p className="text-sm text-zinc-700 mb-2">
            Кормить домашних животных
          </p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              It&apos;s time to <strong>feed the pets</strong>.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Пора кормить домашних животных.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-5 border border-blue-200">
          <p className="font-bold text-blue-900 text-lg mb-3">
            Empty the dishwasher
          </p>
          <p className="text-sm text-zinc-700 mb-2">
            Разгружать посудомоечную машину
          </p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              The dishwasher is full; we need to <strong>empty it</strong>.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Посудомойка полная, нужно разгрузить.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-5 border border-purple-200">
          <p className="font-bold text-purple-900 text-lg mb-3">Clear out</p>
          <p className="text-sm text-zinc-700 mb-2">Разбирать, очищать</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              We need to <strong>clear out</strong> the garage.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Нам нужно разобрать гараж.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-lg p-5 border border-red-200">
          <p className="font-bold text-red-900 text-lg mb-3">Sort out</p>
          <p className="text-sm text-zinc-700 mb-2">Разбирать, сортировать</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              I&apos;ll <strong>sort out</strong> the clutter this weekend.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Я разберу беспорядок в эти выходные.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-5 border border-indigo-200">
          <p className="font-bold text-indigo-900 text-lg mb-3">
            Polish the furniture
          </p>
          <p className="text-sm text-zinc-700 mb-2">Полировать мебель</p>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm italic">
              We should <strong>polish the furniture</strong> for the party.
            </p>
            <p className="text-xs text-zinc-600 mt-1">
              Нужно отполировать мебель к вечеринке.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 5: Привычки (Habits) ===== */
function Step5() {
  const exercise3: FillItem[] = [
    {
      left: "1. I",
      right: "get up at 7 AM every day. (обычно)",
      answers: ["usually"],
      explanation: "Правильно: usually — обычно (частотное наречие)",
    },
    {
      left: "2. She",
      right: "goes to the gym. (всегда)",
      answers: ["always"],
      explanation: "Правильно: always — всегда",
    },
    {
      left: "3. We",
      right: "eat out on weekends. (иногда)",
      answers: ["sometimes"],
      explanation: "Правильно: sometimes — иногда",
    },
  ];

  return (
    <>
      <UiSection title="⏰ Привычки и распорядок дня (Daily Habits & Routines)">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 mb-4">
          <p className="text-lg font-semibold text-indigo-900 mb-3">
            Habits — это регулярные действия, которые мы делаем каждый день
          </p>
          <p className="text-zinc-700">
            Используйте <strong>частотные наречия</strong> (always, usually,
            often, sometimes, never) чтобы описать свои привычки!
          </p>
        </div>
      </UiSection>

      <UiSection title="📊 Частотные наречия (Adverbs of Frequency)">
        <div className="space-y-3 mb-6">
          <div className="bg-gradient-to-r from-green-100 to-green-50 rounded-lg p-4 border-2 border-green-300">
            <div className="flex items-center justify-between">
              <p className="font-bold text-green-900 text-lg">Always</p>
              <p className="text-sm text-zinc-600">100% — Всегда</p>
            </div>
            <p className="text-sm italic mt-2">
              I <strong>always</strong> make my bed in the morning.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg p-4 border-2 border-blue-300">
            <div className="flex items-center justify-between">
              <p className="font-bold text-blue-900 text-lg">Usually</p>
              <p className="text-sm text-zinc-600">80% — Обычно</p>
            </div>
            <p className="text-sm italic mt-2">
              I <strong>usually</strong> do the dishes after dinner.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-purple-50 rounded-lg p-4 border-2 border-purple-300">
            <div className="flex items-center justify-between">
              <p className="font-bold text-purple-900 text-lg">Often</p>
              <p className="text-sm text-zinc-600">60% — Часто</p>
            </div>
            <p className="text-sm italic mt-2">
              We <strong>often</strong> vacuum the living room on weekends.
            </p>
          </div>

          <div className="bg-gradient-to-r from-amber-100 to-amber-50 rounded-lg p-4 border-2 border-amber-300">
            <div className="flex items-center justify-between">
              <p className="font-bold text-amber-900 text-lg">Sometimes</p>
              <p className="text-sm text-zinc-600">40% — Иногда</p>
            </div>
            <p className="text-sm italic mt-2">
              I <strong>sometimes</strong> forget to take out the trash.
            </p>
          </div>

          <div className="bg-gradient-to-r from-orange-100 to-orange-50 rounded-lg p-4 border-2 border-orange-300">
            <div className="flex items-center justify-between">
              <p className="font-bold text-orange-900 text-lg">Rarely</p>
              <p className="text-sm text-zinc-600">20% — Редко</p>
            </div>
            <p className="text-sm italic mt-2">
              She <strong>rarely</strong> cleans the windows.
            </p>
          </div>

          <div className="bg-gradient-to-r from-red-100 to-red-50 rounded-lg p-4 border-2 border-red-300">
            <div className="flex items-center justify-between">
              <p className="font-bold text-red-900 text-lg">Never</p>
              <p className="text-sm text-zinc-600">0% — Никогда</p>
            </div>
            <p className="text-sm italic mt-2">
              He <strong>never</strong> does the laundry.
            </p>
          </div>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Частотные наречия"
        instruction="Вставьте подходящее наречие частоты (usually, always, sometimes)."
        items={exercise3}
      />

      <UiSection title="💡 Правило">
        <div className="bg-blue-50 rounded-lg p-5">
          <p className="font-semibold text-blue-900 mb-2">
            Позиция частотных наречий:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-700">
            <li>
              <strong>ПЕРЕД</strong> основным глаголом: I{" "}
              <strong>usually</strong> clean on Saturdays.
            </li>
            <li>
              <strong>ПОСЛЕ</strong> глагола to be: She is{" "}
              <strong>always</strong> tidy.
            </li>
            <li>
              <strong>ПОСЛЕ</strong> модальных глаголов: You should{" "}
              <strong>always</strong> clean up.
            </li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 6: Типичные ошибки ===== */
function Step6() {
  const exercise4: FillItem[] = [
    {
      left: "I always do laundry. →",
      right: "",
      answers: ["I always do the laundry", "I always do the laundry."],
      explanation: "Правильно: do THE laundry (нужен артикль)",
      wide: true,
    },
    {
      left: "She make bed every morning. →",
      right: "",
      answers: [
        "She makes the bed every morning",
        "She makes the bed every morning.",
      ],
      explanation: "Правильно: makes (3 лицо) + the bed (артикль)",
      wide: true,
    },
    {
      left: "We need clean up kitchen. →",
      right: "",
      answers: [
        "We need to clean up the kitchen",
        "We need to clean up the kitchen.",
      ],
      explanation:
        "Правильно: need TO clean (инфинитив) + the kitchen (артикль)",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="⚠️ Типичные ошибки при описании домашних дел">
        <p className="text-zinc-700 mb-4">
          Разберём самые частые ошибки русскоязычных студентов!
        </p>
      </UiSection>

      <div className="space-y-4 mb-6">
        <div className="bg-red-50 rounded-lg p-5 border-2 border-red-200">
          <p className="font-bold text-red-900 mb-3">
            Ошибка 1: Забывают артикль THE
          </p>
          <div className="space-y-2">
            <p className="text-red-600">
              ❌ I always do <del>laundry</del>.
            </p>
            <p className="text-green-600 font-semibold">
              ✅ I always do <strong>the laundry</strong>.
            </p>
            <p className="text-xs text-zinc-600 mt-2">
              💡 С домашними делами обычно используется THE: do the dishes, make
              the bed, take out the trash
            </p>
          </div>
        </div>

        <div className="bg-red-50 rounded-lg p-5 border-2 border-red-200">
          <p className="font-bold text-red-900 mb-3">
            Ошибка 2: Неправильная форма глагола в 3-м лице
          </p>
          <div className="space-y-2">
            <p className="text-red-600">
              ❌ She <del>make</del> the bed.
            </p>
            <p className="text-green-600 font-semibold">
              ✅ She <strong>makes</strong> the bed.
            </p>
          </div>
        </div>

        <div className="bg-red-50 rounded-lg p-5 border-2 border-red-200">
          <p className="font-bold text-red-900 mb-3">
            Ошибка 3: Забывают TO после need/want
          </p>
          <div className="space-y-2">
            <p className="text-red-600">
              ❌ We need <del>clean up</del> the kitchen.
            </p>
            <p className="text-green-600 font-semibold">
              ✅ We need <strong>to clean up</strong> the kitchen.
            </p>
          </div>
        </div>

        <div className="bg-red-50 rounded-lg p-5 border-2 border-red-200">
          <p className="font-bold text-red-900 mb-3">
            Ошибка 4: Неправильная позиция частотных наречий
          </p>
          <div className="space-y-2">
            <p className="text-red-600">
              ❌ I do <del>always</del> the dishes.
            </p>
            <p className="text-green-600 font-semibold">
              ✅ I <strong>always</strong> do the dishes.
            </p>
            <p className="text-xs text-zinc-600 mt-2">
              💡 Частотные наречия ставятся ПЕРЕД основным глаголом
            </p>
          </div>
        </div>

        <div className="bg-red-50 rounded-lg p-5 border-2 border-red-200">
          <p className="font-bold text-red-900 mb-3">
            Ошибка 5: Путают phrasal verbs
          </p>
          <div className="space-y-2">
            <p className="text-red-600">
              ❌ Please <del>put down</del> the dishes. (неправильный глагол)
            </p>
            <p className="text-green-600 font-semibold">
              ✅ Please <strong>put away</strong> the dishes.
            </p>
            <p className="text-xs text-zinc-600 mt-2">
              💡 Put away = убрать на место, Put down = положить вниз
            </p>
          </div>
        </div>
      </div>

      <CheckableExercise
        title="📝 Упражнение: Исправь ошибки"
        instruction="Напишите правильный вариант предложения целиком."
        items={exercise4}
      />
    </>
  );
}

/* ===== СТРАНИЦА 7: 20 мини-диалогов ===== */
function Step7() {
  return (
    <>
      <UiSection title="💬 20 мини-диалогов о домашних делах">
        <p className="text-zinc-700 mb-4">
          Практикуйте реальные диалоги о распределении домашних обязанностей!
        </p>
      </UiSection>

      <div className="space-y-4">
        <div className="bg-blue-50 rounded-lg p-5">
          <div className="space-y-2">
            <div className="flex gap-2">
              <span className="font-bold text-blue-600">A:</span>
              <p>
                Can you <strong>do the dishes</strong> tonight?
              </p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-green-600">B:</span>
              <p>
                Sure, but it&apos;s{" "}
                <strong>your turn to take out the trash</strong>!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-5">
          <div className="space-y-2">
            <div className="flex gap-2">
              <span className="font-bold text-blue-600">A:</span>
              <p>
                Have you <strong>made the bed</strong> yet?
              </p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-green-600">B:</span>
              <p>Not yet. I&apos;ll do it after breakfast.</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 rounded-lg p-5">
          <div className="space-y-2">
            <div className="flex gap-2">
              <span className="font-bold text-blue-600">A:</span>
              <p>
                The living room is a mess! Let&apos;s <strong>tidy up</strong>.
              </p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-green-600">B:</span>
              <p>
                OK, I&apos;ll <strong>vacuum</strong> and you{" "}
                <strong>dust</strong> the shelves.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 rounded-lg p-5">
          <div className="space-y-2">
            <div className="flex gap-2">
              <span className="font-bold text-blue-600">A:</span>
              <p>
                Do you <strong>always clean up</strong> after cooking?
              </p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-green-600">B:</span>
              <p>
                Yes, I <strong>usually</strong> clean up right away.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-pink-50 rounded-lg p-5">
          <div className="space-y-2">
            <div className="flex gap-2">
              <span className="font-bold text-blue-600">A:</span>
              <p>
                How <strong>often</strong> do you{" "}
                <strong>do the laundry</strong>?
              </p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-green-600">B:</span>
              <p>
                I <strong>usually</strong> do it <strong>twice a week</strong>.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-cyan-50 rounded-lg p-5">
          <div className="space-y-2">
            <div className="flex gap-2">
              <span className="font-bold text-blue-600">A:</span>
              <p>
                Don&apos;t forget to <strong>water the plants</strong>!
              </p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-green-600">B:</span>
              <p>
                I already did. And I <strong>fed the cat</strong> too.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 rounded-lg p-5">
          <div className="space-y-2">
            <div className="flex gap-2">
              <span className="font-bold text-blue-600">A:</span>
              <p>
                Can you help me <strong>clean the bathroom</strong>?
              </p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-green-600">B:</span>
              <p>
                Sure! I&apos;ll <strong>scrub the toilet</strong>, you{" "}
                <strong>mop the floor</strong>.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-teal-50 rounded-lg p-5">
          <div className="space-y-2">
            <div className="flex gap-2">
              <span className="font-bold text-blue-600">A:</span>
              <p>
                Who&apos;s supposed to <strong>empty the dishwasher</strong>?
              </p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-green-600">B:</span>
              <p>It&apos;s my turn. I&apos;ll do it now.</p>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 rounded-lg p-5">
          <div className="space-y-2">
            <div className="flex gap-2">
              <span className="font-bold text-blue-600">A:</span>
              <p>
                We need to <strong>change the bed linens</strong> this weekend.
              </p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-green-600">B:</span>
              <p>
                OK, and let&apos;s <strong>wash the windows</strong> too!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-rose-50 rounded-lg p-5">
          <div className="space-y-2">
            <div className="flex gap-2">
              <span className="font-bold text-blue-600">A:</span>
              <p>How do you keep your house so clean?</p>
            </div>
            <div className="flex gap-2">
              <span className="font-bold text-green-600">B:</span>
              <p>
                I <strong>always tidy up</strong> before bed. It&apos;s my
                habit!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 8: Упражнения ===== */
function Step8() {
  const exercise5: FillItem[] = [
    {
      left: "1. I / do the dishes →",
      right: "",
      answers: ["I do the dishes", "I do the dishes."],
      explanation: "Правильно: I do the dishes.",
      wide: true,
    },
    {
      left: "2. She / always / make the bed →",
      right: "",
      answers: ["She always makes the bed", "She always makes the bed."],
      explanation:
        "Правильно: She always makes the bed. (makes - 3 лицо, always перед глаголом)",
      wide: true,
    },
    {
      left: "3. We / need / clean up / kitchen →",
      right: "",
      answers: [
        "We need to clean up the kitchen",
        "We need to clean up the kitchen.",
      ],
      explanation:
        "Правильно: We need to clean up the kitchen. (need TO + глагол)",
      wide: true,
    },
    {
      left: "4. He / usually / take out / trash →",
      right: "",
      answers: [
        "He usually takes out the trash",
        "He usually takes out the trash.",
      ],
      explanation:
        "Правильно: He usually takes out the trash. (takes - 3 лицо)",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="📝 Упражнения — практика">
        <p className="text-zinc-700 mb-4">
          Составьте правильные предложения из слов!
        </p>
      </UiSection>

      <CheckableExercise
        title="📝 Составь предложения"
        instruction="Составьте предложение из предложенных слов в правильном порядке (добавьте артикли и to где нужно)."
        items={exercise5}
      />

      <UiSection title="✍️ Дополнительные задания">
        <div className="bg-indigo-50 rounded-lg p-5">
          <p className="font-semibold text-indigo-900 mb-3">
            Задание 1: Опишите свой день
          </p>
          <p className="text-sm text-zinc-700 mb-3">
            Напишите 7-10 предложений о своих домашних делах и привычках:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-zinc-700">
            <li>
              Используйте минимум 5 фразовых глаголов (do the dishes, make the
              bed, etc.)
            </li>
            <li>Добавьте 3 частотных наречия (always, usually, sometimes)</li>
            <li>
              Опишите, когда вы делаете каждое дело (in the morning, after
              dinner, etc.)
            </li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-lg p-5 mt-4">
          <p className="font-semibold text-green-900 mb-3">
            Задание 2: Переведите
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-sm">
            <li>Я всегда заправляю кровать по утрам.</li>
            <li>Моя очередь мыть посуду сегодня.</li>
            <li>Мы должны пропылесосить гостиную перед вечеринкой.</li>
            <li>Не забудь вынести мусор!</li>
            <li>Я обычно глажу одежду по воскресеньям.</li>
          </ol>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 9: Домашка — создай свой график дел ===== */
function Step9() {
  return (
    <>
      <UiSection title="🗓️ Домашнее задание: Создай свой график домашних дел">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6">
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-5">
              <p className="font-bold text-blue-900 mb-3 text-lg">
                Задание 1: Недельный график (Weekly Chores Schedule)
              </p>
              <p className="text-sm text-zinc-700 mb-3">
                Составьте график домашних дел на неделю:
              </p>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm font-semibold mb-2">Пример:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>
                    <strong>Monday:</strong> I always do the laundry on Mondays.
                  </li>
                  <li>
                    <strong>Tuesday:</strong> I usually vacuum the living room.
                  </li>
                  <li>
                    <strong>Wednesday:</strong> I make the bed and tidy up.
                  </li>
                  <li>
                    <strong>Thursday:</strong> I do the dishes and clean the
                    kitchen.
                  </li>
                  <li>
                    <strong>Friday:</strong> I take out the trash.
                  </li>
                  <li>
                    <strong>Weekend:</strong> I clean the bathroom and mop the
                    floor.
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5">
              <p className="font-bold text-blue-900 mb-3 text-lg">
                Задание 2: Опросите члена семьи
              </p>
              <p className="text-sm text-zinc-700 mb-3">
                Спросите родственника о его домашних делах и запишите диалог:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-zinc-700">
                <li>
                  What chores do you <strong>usually</strong> do?
                </li>
                <li>
                  How <strong>often</strong> do you vacuum the house?
                </li>
                <li>
                  Who <strong>does the dishes</strong> in your family?
                </li>
                <li>
                  Do you <strong>always make</strong> your bed?
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-5">
              <p className="font-bold text-blue-900 mb-3 text-lg">
                Задание 3: Habit Tracker
              </p>
              <p className="text-sm text-zinc-700 mb-3">
                Создайте трекер привычек на 7 дней и отмечайте каждый день:
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200 text-sm">
                  <thead className="bg-blue-100">
                    <tr>
                      <th className="border border-gray-200 px-3 py-2">
                        Habit
                      </th>
                      <th className="border border-gray-200 px-2 py-2">Mon</th>
                      <th className="border border-gray-200 px-2 py-2">Tue</th>
                      <th className="border border-gray-200 px-2 py-2">Wed</th>
                      <th className="border border-gray-200 px-2 py-2">Thu</th>
                      <th className="border border-gray-200 px-2 py-2">Fri</th>
                      <th className="border border-gray-200 px-2 py-2">Sat</th>
                      <th className="border border-gray-200 px-2 py-2">Sun</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-3 py-2">
                        Make the bed
                      </td>
                      <td className="border border-gray-200 px-2 py-2 text-center">
                        ✅
                      </td>
                      <td className="border border-gray-200 px-2 py-2 text-center"></td>
                      <td className="border border-gray-200 px-2 py-2 text-center"></td>
                      <td className="border border-gray-200 px-2 py-2 text-center"></td>
                      <td className="border border-gray-200 px-2 py-2 text-center"></td>
                      <td className="border border-gray-200 px-2 py-2 text-center"></td>
                      <td className="border border-gray-200 px-2 py-2 text-center"></td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-3 py-2">
                        Do the dishes
                      </td>
                      <td className="border border-gray-200 px-2 py-2 text-center"></td>
                      <td className="border border-gray-200 px-2 py-2 text-center"></td>
                      <td className="border border-gray-200 px-2 py-2 text-center"></td>
                      <td className="border border-gray-200 px-2 py-2 text-center"></td>
                      <td className="border border-gray-200 px-2 py-2 text-center"></td>
                      <td className="border border-gray-200 px-2 py-2 text-center"></td>
                      <td className="border border-gray-200 px-2 py-2 text-center"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-3 py-2">
                        Tidy up room
                      </td>
                      <td className="border border-gray-200 px-2 py-2 text-center"></td>
                      <td className="border border-gray-200 px-2 py-2 text-center"></td>
                      <td className="border border-gray-200 px-2 py-2 text-center"></td>
                      <td className="border border-gray-200 px-2 py-2 text-center"></td>
                      <td className="border border-gray-200 px-2 py-2 text-center"></td>
                      <td className="border border-gray-200 px-2 py-2 text-center"></td>
                      <td className="border border-gray-200 px-2 py-2 text-center"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5">
              <p className="font-bold text-blue-900 mb-3 text-lg">
                Задание 4: Напишите правила для соседа по комнате
              </p>
              <p className="text-sm text-zinc-700 mb-3">
                Представьте, что у вас появился roommate. Напишите 5-7 правил о
                домашних делах:
              </p>
              <div className="bg-amber-50 rounded-lg p-4">
                <p className="text-sm font-semibold mb-2">Пример:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>
                    Please <strong>always do the dishes</strong> after cooking.
                  </li>
                  <li>
                    We should <strong>take out the trash</strong> every Tuesday.
                  </li>
                  <li>
                    Don&apos;t forget to <strong>make your bed</strong> every
                    morning!
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="🎯 Критерии выполнения">
        <div className="bg-green-50 rounded-lg p-5">
          <p className="font-semibold text-green-900 mb-3">
            Ваша работа будет отличной, если вы:
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>
                Использовали минимум 10 фразовых глаголов о домашних делах
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>
                Применили 5 частотных наречий (always, usually, often,
                sometimes, never)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Правильно использовали артикль THE с домашними делами</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">✓</span>
              <span>Написали минимум 15 полных предложений</span>
            </li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 10: Текст для чтения ===== */
function Step10() {
  const [showTranslation, setShowTranslation] = React.useState(false);

  const readingExercise: FillItem[] = [
    {
      left: "1. Когда автор заправляет кровать? →",
      right: "",
      answers: [
        "right after waking up",
        "right after I wake up",
        "after waking up",
      ],
      explanation: "Правильно: right after waking up (сразу после пробуждения)",
      wide: true,
    },
    {
      left: "2. Как часто автор пылесосит? →",
      right: "",
      answers: ["twice a week", "two times a week", "2 times a week"],
      explanation: "Правильно: twice a week (дважды в неделю)",
      wide: true,
    },
    {
      left: "3. Что автор делает по воскресеньям? →",
      right: "",
      answers: ["does the laundry", "laundry", "do the laundry"],
      explanation: "Правильно: does the laundry (стирает бельё)",
      wide: true,
    },
    {
      left: "4. Почему в доме всегда чисто? →",
      right: "",
      answers: ["habits", "good habits", "because of habits", "daily habits"],
      explanation: "Правильно: good habits (хорошие привычки)",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="📖 Текст для чтения: My Daily Chores Routine">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 mb-4 border-2 border-blue-200">
          <p className="text-zinc-900 leading-relaxed text-base">
            I have a <strong className="text-blue-600">daily routine</strong>{" "}
            for household chores. Every morning, I{" "}
            <strong className="text-green-600">always make the bed</strong>{" "}
            right after waking up. Then I go to the kitchen and{" "}
            <strong className="text-green-600">do the dishes</strong> from last
            night. After breakfast, I{" "}
            <strong className="text-purple-600">tidy up</strong> the living room
            and <strong className="text-purple-600">put away</strong> any
            clothes or books.
            <br />
            <br />I <strong className="text-amber-600">
              usually vacuum
            </strong>{" "}
            the floors <strong className="text-amber-600">twice a week</strong>{" "}
            — on Wednesdays and Saturdays. On Sundays, I{" "}
            <strong className="text-red-600">do the laundry</strong> and{" "}
            <strong className="text-red-600">change the bed linens</strong>. I{" "}
            <strong className="text-cyan-600">sometimes</strong> forget to{" "}
            <strong className="text-cyan-600">take out the trash</strong>, but
            my roommate reminds me!
            <br />
            <br />
            The bathroom needs attention too. I{" "}
            <strong className="text-indigo-600">clean the bathroom</strong>{" "}
            every weekend and{" "}
            <strong className="text-indigo-600">scrub the toilet</strong>. I{" "}
            <strong className="text-pink-600">rarely</strong> skip this because
            I like a clean house. My secret?{" "}
            <strong className="text-green-600">Good habits!</strong> If you{" "}
            <strong className="text-green-600">always tidy up</strong> after
            yourself, the house stays clean.
          </p>
        </div>

        <button
          onClick={() => setShowTranslation(!showTranslation)}
          className="mb-4 px-4 py-2 rounded-lg bg-indigo-100 hover:bg-indigo-200 text-indigo-900 font-medium transition-colors flex items-center gap-2"
        >
          {showTranslation ? "🔼 Скрыть перевод" : "🔽 Показать перевод"}
        </button>

        {showTranslation && (
          <div className="bg-amber-50 rounded-lg p-6 mb-4 border border-amber-200">
            <p className="font-semibold text-zinc-900 mb-3">Перевод текста:</p>
            <p className="text-zinc-700 leading-relaxed">
              У меня есть ежедневная рутина для домашних дел. Каждое утро я
              всегда заправляю кровать сразу после пробуждения. Затем иду на
              кухню и мою посуду с прошлого вечера. После завтрака я привожу в
              порядок гостиную и убираю любую одежду или книги.
              <br />
              <br />
              Я обычно пылесошу полы дважды в неделю — по средам и субботам. По
              воскресеньям я стираю бельё и меняю постельное. Иногда я забываю
              вынести мусор, но мой сосед по комнате напоминает мне!
              <br />
              <br />
              Ванная тоже требует внимания. Я убираю ванную каждые выходные и
              чищу унитаз. Я редко пропускаю это, потому что люблю чистый дом.
              Мой секрет? Хорошие привычки! Если вы всегда убираете за собой,
              дом остаётся чистым.
            </p>
          </div>
        )}
      </UiSection>

      <CheckableExercise
        title="📝 Задание на понимание текста"
        instruction="Ответьте на вопросы по тексту."
        items={readingExercise}
      />

      <UiSection title="💭 Вопросы для обсуждения">
        <div className="bg-purple-50 rounded-lg p-5">
          <p className="font-semibold text-purple-900 mb-3">
            Обсудите с партнёром или напишите свои ответы:
          </p>
          <ol className="list-decimal pl-5 space-y-3 text-sm text-zinc-700">
            <li>
              What chores do you <strong>always</strong> do every day?
            </li>
            <li>
              How <strong>often</strong> do you vacuum your room?
            </li>
            <li>
              Do you <strong>usually</strong> make your bed in the morning?
            </li>
            <li>
              What chores do you <strong>never</strong> do? Why?
            </li>
            <li>Who does the most chores in your family?</li>
            <li>What&apos;s your least favorite chore?</li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="🎉 Поздравляем!">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 text-center border-2 border-green-200">
          <p className="text-3xl mb-4">🧹✨</p>
          <p className="text-2xl font-bold text-green-900 mb-3">
            Вы завершили тему &quot;Домашние дела и привычки&quot;!
          </p>
          <p className="text-zinc-700 mb-4">
            Теперь вы знаете <strong>50+ фразовых глаголов</strong> о домашних
            делах и можете свободно говорить о своих привычках!
          </p>
          <div className="bg-white rounded-lg p-5 inline-block text-left">
            <p className="text-sm text-zinc-600 mb-2">Вы научились:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Использовать 30+ фразовых глаголов о домашних делах</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>
                  Применять частотные наречия (always, usually, often, etc.)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Правильно использовать артикль THE</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Говорить о своём распорядке дня</span>
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
