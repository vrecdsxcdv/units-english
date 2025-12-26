"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function TimeAndDates({ step }: Props) {
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

/* ===== СТРАНИЦА 1: Числа (Numbers) ===== */
function Step1() {
  return (
    <>
      <UiSection title="Numbers: Числа в английском языке">
        <div className="bg-zinc-50 rounded-lg p-6 mb-6">
          <p className="text-lg font-semibold text-zinc-900 mb-4">
            Зачем нужны числа?
          </p>
          <p className="text-indigo-700 leading-relaxed mb-4">
            Числа — это основа для обозначения времени, дат, возраста, цен и
            многого другого. В английском есть два типа чисел:{" "}
            <strong>Cardinal Numbers</strong> (количественные) и{" "}
            <strong>Ordinal Numbers</strong> (порядковые).
          </p>
        </div>
      </UiSection>

      <UiSection title="Cardinal Numbers (Количественные числительные)">
        <div className="border border-blue-200 rounded-lg p-6 mb-6">
          <p className="text-sm text-indigo-700 mb-4">
            Отвечают на вопрос <strong>&quot;Сколько?&quot;</strong> (How
            many?). Используются для счёта.
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-blue-900 mb-3">0-20:</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  ["0", "zero"],
                  ["1", "one"],
                  ["2", "two"],
                  ["3", "three"],
                  ["4", "four"],
                  ["5", "five"],
                  ["6", "six"],
                  ["7", "seven"],
                  ["8", "eight"],
                  ["9", "nine"],
                  ["10", "ten"],
                  ["11", "eleven"],
                  ["12", "twelve"],
                  ["13", "thirteen"],
                  ["14", "fourteen"],
                  ["15", "fifteen"],
                  ["16", "sixteen"],
                  ["17", "seventeen"],
                  ["18", "eighteen"],
                  ["19", "nineteen"],
                  ["20", "twenty"],
                ].map(([num, word]) => (
                  <div key={num} className="bg-blue-50 rounded p-2">
                    <p className="text-sm">
                      <strong className="text-blue-700">{num}</strong> – {word}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-blue-900 mb-3">Десятки (20-90):</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  ["20", "twenty"],
                  ["30", "thirty"],
                  ["40", "forty"],
                  ["50", "fifty"],
                  ["60", "sixty"],
                  ["70", "seventy"],
                  ["80", "eighty"],
                  ["90", "ninety"],
                ].map(([num, word]) => (
                  <div key={num} className="bg-green-50 rounded p-2">
                    <p className="text-sm">
                      <strong className="text-green-700">{num}</strong> – {word}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-blue-900 mb-3">
                Как образуются числа 21-99:
              </h4>
              <div className="bg-zinc-100 rounded-lg p-4">
                <p className="text-sm text-indigo-700 mb-3">
                  Десяток + дефис + единица
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="bg-white rounded p-2">
                    <p className="text-sm">
                      <strong>21</strong> = twenty-one
                    </p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="text-sm">
                      <strong>35</strong> = thirty-five
                    </p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="text-sm">
                      <strong>47</strong> = forty-seven
                    </p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="text-sm">
                      <strong>56</strong> = fifty-six
                    </p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="text-sm">
                      <strong>68</strong> = sixty-eight
                    </p>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="text-sm">
                      <strong>99</strong> = ninety-nine
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-blue-900 mb-3">Сотни и тысячи:</h4>
              <div className="space-y-2">
                <div className="bg-indigo-50 rounded p-3">
                  <p className="text-sm">
                    <strong>100</strong> = one hundred (или a hundred)
                  </p>
                </div>
                <div className="bg-indigo-50 rounded p-3">
                  <p className="text-sm">
                    <strong>200</strong> = two hundred
                  </p>
                </div>
                <div className="bg-indigo-50 rounded p-3">
                  <p className="text-sm">
                    <strong>1,000</strong> = one thousand (или a thousand)
                  </p>
                </div>
                <div className="bg-indigo-50 rounded p-3">
                  <p className="text-sm">
                    <strong>1,000,000</strong> = one million (или a million)
                  </p>
                </div>
              </div>

              <div className="mt-4 bg-amber-50 border border-amber-200 rounded p-3">
                <p className="text-xs font-semibold text-zinc-900 mb-2">
                  ⚠️ Важно:
                </p>
                <p className="text-xs text-indigo-700">
                  Hundred, thousand, million НЕ имеют окончания -s, когда перед
                  ними стоит число: <strong>two hundred</strong> (не hundreds),
                  <strong>five thousand</strong> (не thousands).
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-blue-900 mb-3">
                Примеры больших чисел:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white border border-zinc-200 rounded p-3">
                  <p className="text-sm">
                    <strong>365</strong> = three hundred and sixty-five
                  </p>
                </div>
                <div className="bg-white border border-zinc-200 rounded p-3">
                  <p className="text-sm">
                    <strong>1,492</strong> = one thousand, four hundred and
                    ninety-two
                  </p>
                </div>
                <div className="bg-white border border-zinc-200 rounded p-3">
                  <p className="text-sm">
                    <strong>2,024</strong> = two thousand and twenty-four
                  </p>
                </div>
                <div className="bg-white border border-zinc-200 rounded p-3">
                  <p className="text-sm">
                    <strong>10,000</strong> = ten thousand
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Ordinal Numbers (Порядковые числительные)">
        <div className="border border-green-200 rounded-lg p-6">
          <p className="text-sm text-indigo-700 mb-4">
            Отвечают на вопрос <strong>&quot;Который по счёту?&quot;</strong>{" "}
            (Which?). Используются для дат, этажей, позиций.
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-green-900 mb-3">
                Основные порядковые числительные:
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  ["1st", "first"],
                  ["2nd", "second"],
                  ["3rd", "third"],
                  ["4th", "fourth"],
                  ["5th", "fifth"],
                  ["6th", "sixth"],
                  ["7th", "seventh"],
                  ["8th", "eighth"],
                  ["9th", "ninth"],
                  ["10th", "tenth"],
                  ["11th", "eleventh"],
                  ["12th", "twelfth"],
                  ["13th", "thirteenth"],
                  ["14th", "fourteenth"],
                  ["15th", "fifteenth"],
                  ["16th", "sixteenth"],
                  ["17th", "seventeenth"],
                  ["18th", "eighteenth"],
                  ["19th", "nineteenth"],
                  ["20th", "twentieth"],
                  ["21st", "twenty-first"],
                  ["30th", "thirtieth"],
                  ["40th", "fortieth"],
                  ["50th", "fiftieth"],
                ].map(([num, word]) => (
                  <div key={num} className="bg-green-50 rounded p-2">
                    <p className="text-sm">
                      <strong className="text-green-700">{num}</strong> – {word}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-zinc-100 rounded-lg p-4">
              <h4 className="font-semibold text-zinc-900 mb-3">
                Как образуются:
              </h4>
              <div className="space-y-2 text-sm">
                <p>
                  • Большинство: добавляем <strong>-th</strong> к
                  количественному числу
                </p>
                <p className="pl-4">
                  four → four<strong>th</strong>, seven → seven
                  <strong>th</strong>
                </p>
                <p className="mt-2">
                  • <strong>Исключения</strong> (нужно запомнить):
                </p>
                <div className="pl-4 space-y-1">
                  <p>
                    one → <strong>first</strong> (1st)
                  </p>
                  <p>
                    two → <strong>second</strong> (2nd)
                  </p>
                  <p>
                    three → <strong>third</strong> (3rd)
                  </p>
                  <p>
                    five → fif<strong>th</strong> (буква v меняется на f)
                  </p>
                  <p>
                    eight → eigh<strong>th</strong> (убирается одна t)
                  </p>
                  <p>
                    nine → nin<strong>th</strong> (убирается e)
                  </p>
                  <p>
                    twelve → twelf<strong>th</strong> (v меняется на f)
                  </p>
                  <p>
                    twenty → twentie<strong>th</strong> (y меняется на ie)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <h4 className="font-semibold text-blue-900 mb-2">
                Когда используем:
              </h4>
              <div className="space-y-2 text-sm text-indigo-700">
                <p>
                  • <strong>Даты:</strong> January 1st (the first), October 31st
                  (the thirty-first)
                </p>
                <p>
                  • <strong>Этажи:</strong> the 5th floor (пятый этаж)
                </p>
                <p>
                  • <strong>Позиции:</strong> She finished first (она
                  финишировала первой)
                </p>
                <p>
                  • <strong>Дни рождения:</strong> My birthday is on the 15th of
                  May
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 2: Дни недели ===== */
function Step2() {
  return (
    <>
      <UiSection title="Days of the Week: Дни недели">
        <div className="bg-zinc-50 rounded-lg p-6 mb-6">
          <p className="text-indigo-700 leading-relaxed">
            В английском языке 7 дней недели. Все они пишутся{" "}
            <strong>с большой буквы</strong>!
          </p>
        </div>
      </UiSection>

      <div className="border border-purple-200 rounded-lg p-6 mb-6">
        <h3 className="text-xl font-bold text-indigo-900 mb-4">
          Дни недели (Days of the Week)
        </h3>
        <div className="space-y-3">
          {[
            { day: "Monday", ru: "Понедельник", abbr: "Mon" },
            { day: "Tuesday", ru: "Вторник", abbr: "Tue" },
            { day: "Wednesday", ru: "Среда", abbr: "Wed" },
            { day: "Thursday", ru: "Четверг", abbr: "Thu" },
            { day: "Friday", ru: "Пятница", abbr: "Fri" },
            { day: "Saturday", ru: "Суббота", abbr: "Sat" },
            { day: "Sunday", ru: "Воскресенье", abbr: "Sun" },
          ].map(({ day, ru, abbr }, idx) => (
            <div
              key={day}
              className={`rounded-lg p-4 border-2 ${
                idx < 5
                  ? "bg-blue-50 border-blue-200"
                  : "bg-green-50 border-green-200"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-bold text-zinc-900">{day}</p>
                  <p className="text-sm text-zinc-600">{ru}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-zinc-500">Сокращение:</p>
                  <p className="text-sm font-semibold text-indigo-700">{abbr}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
          <h4 className="font-semibold text-zinc-900 mb-3 flex items-center gap-2">
            <span>💡</span>
            <span>Важные замечания:</span>
          </h4>
          <ul className="space-y-2 text-sm text-indigo-700">
            <li>
              • В английском неделя начинается с{" "}
              <strong>воскресенья (Sunday)</strong>, но в календарях часто
              показывают с понедельника
            </li>
            <li>
              • Все дни недели пишутся <strong>с большой буквы</strong>: Monday,
              Tuesday...
            </li>
            <li>
              • Предлог для дней недели: <strong>ON</strong> (on Monday, on
              Friday)
            </li>
          </ul>
        </div>
      </div>

      <UiSection title="Useful Expressions (Полезные выражения)">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-bold text-blue-900 mb-3">Общие выражения:</h4>
            <div className="space-y-2 text-sm">
              <p>
                <strong>What day is it today?</strong>
              </p>
              <p className="text-zinc-600 pl-4">Какой сегодня день?</p>
              <p className="mt-2">
                <strong>It&apos;s Monday.</strong>
              </p>
              <p className="text-zinc-600 pl-4">Сегодня понедельник.</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-bold text-green-900 mb-3">С предлогами:</h4>
            <div className="space-y-2 text-sm">
              <p>
                <strong>on Monday</strong> – в понедельник (конкретный)
              </p>
              <p>
                <strong>on Mondays</strong> – по понедельникам (каждый)
              </p>
              <p>
                <strong>every Monday</strong> – каждый понедельник
              </p>
              <p>
                <strong>next Monday</strong> – в следующий понедельник
              </p>
              <p>
                <strong>last Monday</strong> – в прошлый понедельник
              </p>
            </div>
          </div>

          <div className="bg-indigo-50 border border-purple-200 rounded-lg p-4">
            <h4 className="font-bold text-indigo-900 mb-3">Части недели:</h4>
            <div className="space-y-2 text-sm">
              <p>
                <strong>weekday</strong> – будний день
              </p>
              <p>
                <strong>weekend</strong> – выходные (суббота и воскресенье)
              </p>
              <p>
                <strong>at the weekend</strong> (UK) /{" "}
                <strong>on the weekend</strong> (US)
              </p>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h4 className="font-bold text-zinc-900 mb-3">
              Относительные слова:
            </h4>
            <div className="space-y-2 text-sm">
              <p>
                <strong>today</strong> – сегодня
              </p>
              <p>
                <strong>yesterday</strong> – вчера
              </p>
              <p>
                <strong>tomorrow</strong> – завтра
              </p>
              <p>
                <strong>the day after tomorrow</strong> – послезавтра
              </p>
              <p>
                <strong>the day before yesterday</strong> – позавчера
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Practice: Days of the Week">
        <div className="bg-zinc-100 rounded-lg p-6">
          <h4 className="font-semibold text-zinc-900 mb-4">
            Заполните предложения:
          </h4>
          <div className="space-y-3">
            <div className="bg-white rounded p-3">
              <p className="text-sm mb-2">
                1. Today is Wednesday. Tomorrow is _____.
              </p>
              <p className="text-xs text-green-700">✓ Thursday</p>
            </div>
            <div className="bg-white rounded p-3">
              <p className="text-sm mb-2">
                2. I go to the gym _____ Mondays and Fridays.
              </p>
              <p className="text-xs text-green-700">✓ on</p>
            </div>
            <div className="bg-white rounded p-3">
              <p className="text-sm mb-2">
                3. The _____ is Saturday and Sunday.
              </p>
              <p className="text-xs text-green-700">✓ weekend</p>
            </div>
            <div className="bg-white rounded p-3">
              <p className="text-sm mb-2">
                4. Today is Friday. Yesterday was _____.
              </p>
              <p className="text-xs text-green-700">✓ Thursday</p>
            </div>
            <div className="bg-white rounded p-3">
              <p className="text-sm mb-2">
                5. I have English classes _____ Tuesday.
              </p>
              <p className="text-xs text-green-700">✓ on</p>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 3: Месяцы и даты ===== */
function Step3() {
  return (
    <>
      <UiSection title="Months of the Year: Месяцы года">
        <div className="bg-zinc-50 rounded-lg p-6 mb-6">
          <p className="text-indigo-700 leading-relaxed">
            В году 12 месяцев. Все они пишутся <strong>с большой буквы</strong>!
          </p>
        </div>
      </UiSection>

      <div className="border border-blue-200 rounded-lg p-6 mb-6">
        <h3 className="text-xl font-bold text-blue-900 mb-4">
          12 месяцев года (Months of the Year)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { num: 1, month: "January", ru: "Январь", abbr: "Jan", days: 31 },
            {
              num: 2,
              month: "February",
              ru: "Февраль",
              abbr: "Feb",
              days: "28/29",
            },
            { num: 3, month: "March", ru: "Март", abbr: "Mar", days: 31 },
            { num: 4, month: "April", ru: "Апрель", abbr: "Apr", days: 30 },
            { num: 5, month: "May", ru: "Май", abbr: "May", days: 31 },
            { num: 6, month: "June", ru: "Июнь", abbr: "Jun", days: 30 },
            { num: 7, month: "July", ru: "Июль", abbr: "Jul", days: 31 },
            { num: 8, month: "August", ru: "Август", abbr: "Aug", days: 31 },
            {
              num: 9,
              month: "September",
              ru: "Сентябрь",
              abbr: "Sep",
              days: 30,
            },
            { num: 10, month: "October", ru: "Октябрь", abbr: "Oct", days: 31 },
            { num: 11, month: "November", ru: "Ноябрь", abbr: "Nov", days: 30 },
            {
              num: 12,
              month: "December",
              ru: "Декабрь",
              abbr: "Dec",
              days: 31,
            },
          ].map(({ num, month, ru, abbr, days }) => (
            <div
              key={month}
              className="bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-200 rounded-lg p-4"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded">
                      {num}
                    </span>
                    <p className="text-lg font-bold text-zinc-900">{month}</p>
                  </div>
                  <p className="text-sm text-zinc-600 mt-1">{ru}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-zinc-500">Сокращение:</p>
                  <p className="text-sm font-semibold text-indigo-700">{abbr}</p>
                </div>
              </div>
              <div className="text-xs text-zinc-500 mt-2">Дней: {days}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
          <h4 className="font-semibold text-zinc-900 mb-3 flex items-center gap-2">
            <span>💡</span>
            <span>Как запомнить количество дней:</span>
          </h4>
          <div className="text-sm text-indigo-700">
            <p className="mb-2">
              <strong>30 дней:</strong> April, June, September, November
            </p>
            <p className="mb-2">
              <strong>31 день:</strong> January, March, May, July, August,
              October, December
            </p>
            <p>
              <strong>February:</strong> 28 дней (29 в високосный год)
            </p>
          </div>
        </div>
      </div>

      <UiSection title="Dates: Как говорить даты">
        <div className="space-y-6">
          <div className="bg-zinc-100 rounded-lg p-6">
            <h4 className="font-bold text-zinc-900 mb-4">
              Два способа написания дат:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-5 border-2 border-blue-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🇬🇧</span>
                  <h5 className="font-bold text-blue-900">
                    British English (UK)
                  </h5>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold mb-1">Формат:</p>
                    <p className="font-mono bg-blue-50 p-2 rounded">
                      Day / Month / Year
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Написание:</p>
                    <p>25/12/2024 или 25.12.2024</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Как говорим:</p>
                    <p>
                      the <strong>twenty-fifth of December</strong>
                    </p>
                    <p className="text-xs text-zinc-600">
                      или: December the twenty-fifth
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 border border-green-200">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🇺🇸</span>
                  <h5 className="font-bold text-green-900">
                    American English (US)
                  </h5>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold mb-1">Формат:</p>
                    <p className="font-mono bg-green-50 p-2 rounded">
                      Month / Day / Year
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Написание:</p>
                    <p>12/25/2024</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Как говорим:</p>
                    <p>
                      <strong>December twenty-fifth</strong>
                    </p>
                    <p className="text-xs text-zinc-600">
                      (без артикля и &quot;of&quot;)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-bold text-indigo-900 mb-4">Примеры дат:</h4>
            <div className="space-y-3">
              <div className="bg-white rounded p-3">
                <p className="text-sm font-semibold mb-1">1st January 2024</p>
                <p className="text-xs text-zinc-600">
                  🇬🇧 the first of January, twenty twenty-four
                </p>
                <p className="text-xs text-zinc-600">
                  🇺🇸 January first, twenty twenty-four
                </p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-sm font-semibold mb-1">14th February 2023</p>
                <p className="text-xs text-zinc-600">
                  🇬🇧 the fourteenth of February, twenty twenty-three
                </p>
                <p className="text-xs text-zinc-600">
                  🇺🇸 February fourteenth, twenty twenty-three
                </p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-sm font-semibold mb-1">31st October 2025</p>
                <p className="text-xs text-zinc-600">
                  🇬🇧 the thirty-first of October, twenty twenty-five
                </p>
                <p className="text-xs text-zinc-600">
                  🇺🇸 October thirty-first, twenty twenty-five
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h4 className="font-bold text-blue-900 mb-3">Как говорить годы:</h4>
            <div className="space-y-2 text-sm">
              <p>
                <strong>2024</strong> = twenty twenty-four (разделяем пополам)
              </p>
              <p>
                <strong>2000</strong> = two thousand (или the year two thousand)
              </p>
              <p>
                <strong>2001-2009</strong> = two thousand and one, two thousand
                and two...
              </p>
              <p>
                <strong>1999</strong> = nineteen ninety-nine
              </p>
              <p>
                <strong>1900</strong> = nineteen hundred
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Useful Expressions with Dates">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 border border-green-200 rounded p-4">
            <h4 className="font-semibold text-green-900 mb-3">
              Спрашиваем дату:
            </h4>
            <div className="space-y-2 text-sm">
              <p>
                <strong>What&apos;s the date today?</strong>
              </p>
              <p className="text-zinc-600 pl-4">Какое сегодня число?</p>
              <p className="mt-2">
                <strong>It&apos;s the 15th of March.</strong>
              </p>
              <p className="text-zinc-600 pl-4">Сегодня 15 марта.</p>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded p-4">
            <h4 className="font-semibold text-zinc-900 mb-3">
              Предлоги с датами:
            </h4>
            <div className="space-y-2 text-sm">
              <p>
                <strong>in</strong> May (в мае)
              </p>
              <p>
                <strong>in</strong> 2024 (в 2024 году)
              </p>
              <p>
                <strong>on</strong> the 5th of May (5 мая)
              </p>
              <p>
                <strong>on</strong> Monday (в понедельник)
              </p>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 4: Telling Time (Как говорить время) ===== */
function Step4() {
  return (
    <>
      <UiSection title="Telling Time: Как говорить время">
        <div className="bg-zinc-50 rounded-lg p-6 mb-6">
          <p className="text-indigo-700 leading-relaxed mb-4">
            Время в английском можно сказать двумя способами: традиционным
            (аналоговые часы) и цифровым (24-часовой формат).
          </p>
        </div>
      </UiSection>

      <UiSection title="Ровное время (O'clock)">
        <div className="border border-blue-200 rounded-lg p-6 mb-6">
          <div className="bg-blue-50 rounded-lg p-5 mb-4">
            <p className="text-center text-xl font-bold text-blue-900 mb-2">
              It&apos;s [number] o&apos;clock
            </p>
            <p className="text-center text-sm text-zinc-600">
              Используем o&apos;clock только для ровного времени
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              ["1:00", "one o'clock"],
              ["2:00", "two o'clock"],
              ["3:00", "three o'clock"],
              ["6:00", "six o'clock"],
              ["9:00", "nine o'clock"],
              ["12:00", "twelve o'clock"],
            ].map(([time, words]) => (
              <div
                key={time}
                className="bg-white border border-blue-200 rounded p-3 text-center"
              >
                <p className="text-2xl font-bold text-blue-700">{time}</p>
                <p className="text-sm text-indigo-700 mt-1">{words}</p>
              </div>
            ))}
          </div>
        </div>
      </UiSection>

      <UiSection title="Минуты: Past и To">
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
            <h4 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
              <span>→</span>
              <span>PAST (после)</span>
            </h4>
            <p className="text-sm text-indigo-700 mb-4">
              От 1 до 30 минут используем <strong>PAST</strong> (после)
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-white rounded p-3">
                <p className="text-lg font-bold text-green-700">3:05</p>
                <p className="text-sm">five past three</p>
                <p className="text-xs text-zinc-600">5 минут после 3</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-lg font-bold text-green-700">7:10</p>
                <p className="text-sm">ten past seven</p>
                <p className="text-xs text-zinc-600">10 минут после 7</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-lg font-bold text-green-700">9:20</p>
                <p className="text-sm">twenty past nine</p>
                <p className="text-xs text-zinc-600">20 минут после 9</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-lg font-bold text-green-700">11:25</p>
                <p className="text-sm">twenty-five past eleven</p>
                <p className="text-xs text-zinc-600">25 минут после 11</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-300 rounded-lg p-6">
            <h4 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
              <span>←</span>
              <span>TO (до)</span>
            </h4>
            <p className="text-sm text-indigo-700 mb-4">
              От 31 до 59 минут используем <strong>TO</strong> (до следующего
              часа)
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-white rounded p-3">
                <p className="text-lg font-bold text-indigo-700">3:35</p>
                <p className="text-sm">twenty-five to four</p>
                <p className="text-xs text-zinc-600">25 минут до 4</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-lg font-bold text-indigo-700">7:40</p>
                <p className="text-sm">twenty to eight</p>
                <p className="text-xs text-zinc-600">20 минут до 8</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-lg font-bold text-indigo-700">9:50</p>
                <p className="text-sm">ten to ten</p>
                <p className="text-xs text-zinc-600">10 минут до 10</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-lg font-bold text-indigo-700">11:55</p>
                <p className="text-sm">five to twelve</p>
                <p className="text-xs text-zinc-600">5 минут до 12</p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Специальные выражения">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-indigo-50 border border-purple-200 rounded-lg p-5">
            <div className="text-center mb-3">
              <p className="text-3xl font-bold text-indigo-700">:15</p>
              <p className="text-sm font-semibold text-indigo-900 mt-2">
                Quarter past
              </p>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-center">
                <strong>3:15</strong> = quarter past three
              </p>
              <p className="text-center">
                <strong>7:15</strong> = quarter past seven
              </p>
              <p className="text-xs text-zinc-600 text-center mt-2">
                (четверть после)
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <div className="text-center mb-3">
              <p className="text-3xl font-bold text-blue-700">:30</p>
              <p className="text-sm font-semibold text-blue-900 mt-2">
                Half past
              </p>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-center">
                <strong>3:30</strong> = half past three
              </p>
              <p className="text-center">
                <strong>7:30</strong> = half past seven
              </p>
              <p className="text-xs text-zinc-600 text-center mt-2">
                (половина после)
              </p>
            </div>
          </div>

          <div className="bg-pink-50 border border-pink-200 rounded-lg p-5">
            <div className="text-center mb-3">
              <p className="text-3xl font-bold text-slate-700">:45</p>
              <p className="text-sm font-semibold text-slate-900 mt-2">
                Quarter to
              </p>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-center">
                <strong>3:45</strong> = quarter to four
              </p>
              <p className="text-center">
                <strong>7:45</strong> = quarter to eight
              </p>
              <p className="text-xs text-zinc-600 text-center mt-2">
                (четверть до)
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="12-часовой vs 24-часовой формат">
        <div className="space-y-4">
          <div className="bg-zinc-100 rounded-lg p-6">
            <h4 className="font-bold text-zinc-900 mb-4">AM и PM:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded p-4">
                <p className="font-bold text-blue-900 mb-2">
                  AM (ante meridiem)
                </p>
                <p className="text-sm text-indigo-700 mb-2">
                  С полуночи до полудня (00:00 - 11:59)
                </p>
                <div className="space-y-1 text-sm">
                  <p>6:00 AM = 6 утра (morning)</p>
                  <p>9:30 AM = 9:30 утра</p>
                  <p>11:45 AM = без 15 двенадцать</p>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded p-4">
                <p className="font-bold text-zinc-900 mb-2">
                  PM (post meridiem)
                </p>
                <p className="text-sm text-indigo-700 mb-2">
                  С полудня до полуночи (12:00 - 23:59)
                </p>
                <div className="space-y-1 text-sm">
                  <p>1:00 PM = 1 дня (afternoon)</p>
                  <p>6:00 PM = 6 вечера (evening)</p>
                  <p>11:30 PM = 11:30 ночи (night)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h4 className="font-bold text-green-900 mb-3">
              Цифровой формат (Digital time):
            </h4>
            <p className="text-sm text-indigo-700 mb-3">
              Можно просто называть числа по порядку:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="bg-white rounded p-2 text-center">
                <p className="font-bold">3:05</p>
                <p className="text-sm">three oh five</p>
              </div>
              <div className="bg-white rounded p-2 text-center">
                <p className="font-bold">7:15</p>
                <p className="text-sm">seven fifteen</p>
              </div>
              <div className="bg-white rounded p-2 text-center">
                <p className="font-bold">9:30</p>
                <p className="text-sm">nine thirty</p>
              </div>
              <div className="bg-white rounded p-2 text-center">
                <p className="font-bold">10:45</p>
                <p className="text-sm">ten forty-five</p>
              </div>
              <div className="bg-white rounded p-2 text-center">
                <p className="font-bold">12:00</p>
                <p className="text-sm">twelve hundred</p>
              </div>
              <div className="bg-white rounded p-2 text-center">
                <p className="font-bold">16:20</p>
                <p className="text-sm">sixteen twenty</p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Useful Expressions">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-indigo-50 border border-purple-200 rounded p-4">
            <h4 className="font-semibold text-indigo-900 mb-3">
              Спрашиваем время:
            </h4>
            <div className="space-y-2 text-sm">
              <p>
                <strong>What time is it?</strong>
              </p>
              <p>
                <strong>What&apos;s the time?</strong>
              </p>
              <p className="text-zinc-600 pl-4">Который час?</p>
              <p className="mt-2">
                <strong>It&apos;s half past three.</strong>
              </p>
              <p className="text-zinc-600 pl-4">Половина четвёртого.</p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded p-4">
            <h4 className="font-semibold text-zinc-900 mb-3">
              Предлоги времени:
            </h4>
            <div className="space-y-2 text-sm">
              <p>
                <strong>at</strong> 3 o&apos;clock (в 3 часа)
              </p>
              <p>
                <strong>at</strong> half past five (в половине шестого)
              </p>
              <p>
                <strong>in the morning</strong> (утром)
              </p>
              <p>
                <strong>in the afternoon</strong> (днём)
              </p>
              <p>
                <strong>in the evening</strong> (вечером)
              </p>
              <p>
                <strong>at night</strong> (ночью)
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
          <span>💡</span>
          <span>Запомните:</span>
        </h4>
        <ul className="space-y-2 text-sm text-indigo-700">
          <li>
            • Используйте <strong>o&apos;clock</strong> только для ровного
            времени
          </li>
          <li>
            • <strong>Past</strong> = от 1 до 30 минут (после часа)
          </li>
          <li>
            • <strong>To</strong> = от 31 до 59 минут (до следующего часа)
          </li>
          <li>
            • <strong>Quarter</strong> = 15 минут, <strong>Half</strong> = 30
            минут
          </li>
          <li>
            • Предлог для времени: <strong>AT</strong> (at 5 o&apos;clock)
          </li>
        </ul>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 5: Упражнения ===== */
function Step5() {
  const exercise1: FillItem[] = [
    {
      left: "1. 3:00 = It's three",
      right: ".",
      answers: ["o'clock"],
      explanation: "Ровное время → o'clock",
    },
    {
      left: "2. 5:15 = It's",
      right: "past five.",
      answers: ["quarter", "a quarter"],
      explanation: "15 минут = quarter past",
    },
    {
      left: "3. 7:30 = It's",
      right: "past seven.",
      answers: ["half"],
      explanation: "30 минут = half past",
    },
    {
      left: "4. 9:45 = It's quarter",
      right: "ten.",
      answers: ["to"],
      explanation: "45 минут = quarter to следующий час",
    },
    {
      left: "5. Today is Monday. Tomorrow is",
      right: ".",
      answers: ["Tuesday"],
      explanation: "После понедельника — вторник",
    },
  ];

  const exercise2: FillItem[] = [
    {
      left: "6. The first month of the year is",
      right: ".",
      answers: ["January"],
      explanation: "Первый месяц — январь",
    },
    {
      left: "7. There are",
      right: "days in a week.",
      answers: ["seven", "7"],
      explanation: "В неделе 7 дней",
    },
    {
      left: "8. I go to the gym",
      right: "Mondays. (каждый понедельник)",
      answers: ["on"],
      explanation: "Предлог для дней недели — ON",
    },
    {
      left: "9. My birthday is",
      right: "May. (в мае)",
      answers: ["in"],
      explanation: "Предлог для месяцев — IN",
    },
    {
      left: "10. The lesson starts",
      right: "9 o'clock.",
      answers: ["at"],
      explanation: "Предлог для времени — AT",
    },
  ];

  return (
    <>
      <UiSection title="Practice: Time and Dates">
        <div className="bg-zinc-50 rounded-lg p-6 mb-6">
          <p className="text-indigo-700 leading-relaxed">
            Выполните упражнения, чтобы закрепить знания о времени, датах и
            числах.
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="Упражнение 1: Время и дни"
        instruction="Заполните пропуски правильными словами."
        items={exercise1}
      />

      <CheckableExercise
        title="Упражнение 2: Даты и предлоги"
        instruction="Заполните пропуски."
        items={exercise2}
      />

      <UiSection title="Write the Time">
        <div className="bg-zinc-100 rounded-lg p-6">
          <h4 className="font-semibold text-zinc-900 mb-4">
            Напишите время словами:
          </h4>
          <div className="space-y-3">
            <div className="bg-white rounded p-3">
              <p className="text-sm mb-2">
                1. 6:00 → It&apos;s _____ o&apos;clock.
              </p>
              <p className="text-xs text-green-700">✓ six</p>
            </div>
            <div className="bg-white rounded p-3">
              <p className="text-sm mb-2">
                2. 4:30 → It&apos;s _____ past four.
              </p>
              <p className="text-xs text-green-700">✓ half</p>
            </div>
            <div className="bg-white rounded p-3">
              <p className="text-sm mb-2">
                3. 8:15 → It&apos;s _____ past eight.
              </p>
              <p className="text-xs text-green-700">✓ quarter / a quarter</p>
            </div>
            <div className="bg-white rounded p-3">
              <p className="text-sm mb-2">
                4. 10:45 → It&apos;s quarter _____ eleven.
              </p>
              <p className="text-xs text-green-700">✓ to</p>
            </div>
            <div className="bg-white rounded p-3">
              <p className="text-sm mb-2">
                5. 2:20 → It&apos;s _____ past two.
              </p>
              <p className="text-xs text-green-700">✓ twenty</p>
            </div>
            <div className="bg-white rounded p-3">
              <p className="text-sm mb-2">
                6. 7:40 → It&apos;s twenty _____ eight.
              </p>
              <p className="text-xs text-green-700">✓ to</p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Match the Dates">
        <div className="bg-zinc-100 rounded-lg p-6">
          <h4 className="font-semibold text-zinc-900 mb-4">
            Соедините даты с правильным написанием:
          </h4>
          <div className="space-y-3">
            <div className="bg-white rounded p-3">
              <p className="text-sm mb-2">1. 01/01 → New Year&apos;s Day</p>
              <p className="text-xs text-green-700">
                ✓ the first of January / January first
              </p>
            </div>
            <div className="bg-white rounded p-3">
              <p className="text-sm mb-2">2. 14/02 → Valentine&apos;s Day</p>
              <p className="text-xs text-green-700">
                ✓ the fourteenth of February / February fourteenth
              </p>
            </div>
            <div className="bg-white rounded p-3">
              <p className="text-sm mb-2">3. 31/10 → Halloween</p>
              <p className="text-xs text-green-700">
                ✓ the thirty-first of October / October thirty-first
              </p>
            </div>
            <div className="bg-white rounded p-3">
              <p className="text-sm mb-2">4. 25/12 → Christmas Day</p>
              <p className="text-xs text-green-700">
                ✓ the twenty-fifth of December / December twenty-fifth
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-6">
        <h4 className="font-bold text-zinc-900 mb-3">💡 Совет:</h4>
        <ul className="space-y-2 text-sm text-indigo-700">
          <li>• Тренируйтесь называть время вслух, глядя на часы</li>
          <li>• Запомните дни недели и месяцы в порядке</li>
          <li>
            • Обращайте внимание на предлоги: <strong>at</strong> для времени,{" "}
            <strong>on</strong> для дней, <strong>in</strong> для месяцев
          </li>
        </ul>
      </div>
    </>
  );
}

/* ===== СТРАНИЦА 6: Итоговый тест ===== */
function Step6() {
  const finalTest: FillItem[] = [
    {
      left: "1. 9:00 = It's",
      right: "o'clock.",
      answers: ["nine", "9"],
      explanation: "Ровное время",
    },
    {
      left: "2. 3:30 = It's half",
      right: "three.",
      answers: ["past"],
      explanation: "30 минут = half past",
    },
    {
      left: "3. 6:45 = It's quarter",
      right: "seven.",
      answers: ["to"],
      explanation: "45 минут = quarter to следующий час",
    },
    {
      left: "4. The third day of the week is",
      right: ".",
      answers: ["Wednesday"],
      explanation: "Понедельник, вторник, среда",
    },
    {
      left: "5. The",
      right: "month of the year is December.",
      answers: ["twelfth", "12th", "last"],
      explanation: "Декабрь — двенадцатый/последний месяц",
    },
    {
      left: "6. I have a meeting",
      right: "Monday.",
      answers: ["on"],
      explanation: "Предлог ON для дней недели",
    },
    {
      left: "7. My birthday is",
      right: "June.",
      answers: ["in"],
      explanation: "Предлог IN для месяцев",
    },
    {
      left: "8. The class starts",
      right: "10 o'clock.",
      answers: ["at"],
      explanation: "Предлог AT для времени",
    },
    {
      left: "9. 25 + 15 = twenty +",
      right: "= thirty-five",
      answers: ["fifteen"],
      explanation: "Числа словами",
    },
    {
      left: "10. Today is Friday. Yesterday was",
      right: ".",
      answers: ["Thursday"],
      explanation: "День перед пятницей",
    },
  ];

  return (
    <>
      <UiSection title="Final Test: Time and Dates">
        <div className="bg-gradient-to-br from-blue-50 to-zinc-50 rounded-lg p-6 mb-6 border border-blue-200">
          <div className="flex items-start gap-4">
            <div className="text-3xl">🎯</div>
            <div>
              <h3 className="text-lg font-bold text-zinc-900 mb-2">
                Итоговый тест!
              </h3>
              <p className="text-indigo-700 leading-relaxed">
                Проверьте, насколько хорошо вы усвоили материал о времени, датах
                и числах.
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <CheckableExercise
        title="Финальный тест"
        instruction="Заполните пропуски правильными словами."
        items={finalTest}
      />

      <UiSection title="Summary Table: Предлоги времени">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-blue-100 to-purple-100">
                <th className="border border-zinc-300 p-3 text-left font-bold">
                  Предлог
                </th>
                <th className="border border-zinc-300 p-3 text-left font-bold">
                  Когда использовать
                </th>
                <th className="border border-zinc-300 p-3 text-left font-bold">
                  Примеры
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-zinc-300 p-3 font-semibold text-blue-700">
                  AT
                </td>
                <td className="border border-zinc-300 p-3">
                  • Время
                  <br />• Ночь
                  <br />• Выходные (US)
                </td>
                <td className="border border-zinc-300 p-3">
                  at 5 o&apos;clock
                  <br />
                  at half past three
                  <br />
                  at night
                  <br />
                  at the weekend (US)
                </td>
              </tr>
              <tr className="bg-zinc-50">
                <td className="border border-zinc-300 p-3 font-semibold text-green-700">
                  ON
                </td>
                <td className="border border-zinc-300 p-3">
                  • Дни недели
                  <br />• Даты
                  <br />• Выходные (UK)
                </td>
                <td className="border border-zinc-300 p-3">
                  on Monday
                  <br />
                  on the 5th of May
                  <br />
                  on my birthday
                  <br />
                  at the weekend (UK)
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border border-zinc-300 p-3 font-semibold text-indigo-700">
                  IN
                </td>
                <td className="border border-zinc-300 p-3">
                  • Месяцы
                  <br />• Годы
                  <br />• Части дня
                </td>
                <td className="border border-zinc-300 p-3">
                  in May
                  <br />
                  in 2024
                  <br />
                  in the morning
                  <br />
                  in the afternoon
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>

      <div className="mt-6 space-y-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
            <span>🎓</span>
            <span>Ключевые выводы:</span>
          </h4>
          <ul className="space-y-2 text-sm text-indigo-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>
                <strong>Cardinal numbers</strong> (1, 2, 3...) для счёта,{" "}
                <strong>Ordinal numbers</strong> (1st, 2nd, 3rd...) для порядка
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>
                Дни недели и месяцы пишутся <strong>с большой буквы</strong>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>
                Для времени: <strong>past</strong> (1-30 минут),{" "}
                <strong>to</strong> (31-59 минут)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>
                <strong>Quarter</strong> = 15 минут, <strong>Half</strong> = 30
                минут, <strong>o&apos;clock</strong> = ровное время
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>
                Предлоги: <strong>AT</strong> для времени, <strong>ON</strong>{" "}
                для дней, <strong>IN</strong> для месяцев и годов
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-200">
          <h4 className="font-bold text-zinc-900 mb-3 flex items-center gap-2">
            <span>✨</span>
            <span>Отличная работа!</span>
          </h4>
          <p className="text-sm text-indigo-700">
            Теперь вы знаете, как говорить о времени, датах и числах на
            английском языке. Продолжайте практиковаться в повседневной жизни:
            называйте время на часах, даты в календаре, и считайте по-английски!
          </p>
        </div>
      </div>
    </>
  );
}
