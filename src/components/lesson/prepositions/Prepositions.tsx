"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function Prepositions({ step }: Props) {
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

/* ===== СТРАНИЦА 1: Базовое введение ===== */
function Step1() {
  return (
    <>
      <UiSection title="Что такое предлоги места?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Предлоги места (<strong>in, on, at, under, next to, between</strong>)
          используются для указания <strong>где находится</strong> предмет,
          человек или место. Они отвечают на вопрос «Где?» (<em>Where?</em>).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          <div className="bg-indigo-50/50 rounded-lg p-3">
            <p className="font-semibold text-sm">In — внутри</p>
            <p className="text-xs text-gray-600">in the room</p>
          </div>
          <div className="bg-green-50/50 rounded-lg p-3">
            <p className="font-semibold text-sm">On — на поверхности</p>
            <p className="text-xs text-gray-600">on the table</p>
          </div>
          <div className="bg-blue-50/50 rounded-lg p-3">
            <p className="font-semibold text-sm">At — в точке/месте</p>
            <p className="text-xs text-gray-600">at school</p>
          </div>
          <div className="bg-amber-50/50 rounded-lg p-3">
            <p className="font-semibold text-sm">Under — под</p>
            <p className="text-xs text-gray-600">under the bed</p>
          </div>
          <div className="bg-purple-50/50 rounded-lg p-3">
            <p className="font-semibold text-sm">Next to — рядом</p>
            <p className="text-xs text-gray-600">next to the door</p>
          </div>
          <div className="bg-pink-50/50 rounded-lg p-3">
            <p className="font-semibold text-sm">Between — между</p>
            <p className="text-xs text-gray-600">between two chairs</p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Зачем нужна эта тема?">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Помогает описывать расположение: The book is on the table. (Книга на
            столе.)
          </li>
          <li>Учит задавать вопросы: Where is the cat? (Где кошка?)</li>
          <li>
            Необходима для общения: в школе, дома, в путешествиях (The shop is
            next to the bank).
          </li>
        </ul>
      </UiSection>

      <UiSection title="Ключевые особенности">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Предлоги места ставятся <strong>перед</strong> названием места (in
              the room, не the room in).
            </li>
            <li>
              Каждый предлог имеет <strong>специфическое значение</strong>
              (например, in ≠ on).
            </li>
            <li>
              <strong>Произношение:</strong> In [ɪn] (ин), On [ɒn] (он), At [æt]
              (эт), Under [ˈʌndər] (андэр), Next to [nɛkst tə] (нэкст ту),
              Between [bɪˈtwiːn] (битвин).
            </li>
            <li>
              <strong>Интонация:</strong> В вопросах (Where is it?) — восходящая
              (↑), в утверждениях — ровная.
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Пример для понимания">
        <div className="space-y-3">
          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold mb-1">Русский: Книга на столе.</p>
            <p className="text-green-600 font-semibold">
              English: The book is on the table.
            </p>
          </div>

          <div className="border-l-4 border-amber-400 pl-4 py-2">
            <p className="font-semibold mb-1">Русский: Кошка под столом.</p>
            <p className="text-amber-600 font-semibold">
              English: The cat is under the table.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="📸 Визуализация предлогов места">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200">
            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div className="absolute bottom-0 w-24 h-16 bg-blue-300 rounded-lg flex items-center justify-center text-sm font-bold">
                  TABLE
                </div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-4xl">
                  📖
                </div>
              </div>
              <p className="text-2xl font-bold text-blue-900 mb-2">ON</p>
              <p className="text-sm text-zinc-600 mb-3">На (поверхности)</p>
              <div className="bg-white rounded-lg p-3 text-left">
                <p className="text-sm font-semibold">
                  The book is <span className="text-blue-600">on</span> the
                  table
                </p>
                <p className="text-xs text-zinc-600 mt-1">Книга на столе</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <div className="absolute top-0 w-24 h-16 bg-green-300 rounded-lg flex items-center justify-center text-sm font-bold">
                  TABLE
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-4xl">
                  🐱
                </div>
              </div>
              <p className="text-2xl font-bold text-green-900 mb-2">UNDER</p>
              <p className="text-sm text-zinc-600 mb-3">Под</p>
              <div className="bg-white rounded-lg p-3 text-left">
                <p className="text-sm font-semibold">
                  The cat is <span className="text-green-600">under</span> the
                  table
                </p>
                <p className="text-xs text-zinc-600 mt-1">Кошка под столом</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4 flex items-center">
                <div className="w-12 h-20 bg-purple-300 rounded-lg flex items-center justify-center text-xs font-bold">
                  DOOR
                </div>
                <div className="ml-2 text-4xl">🧍</div>
              </div>
              <p className="text-2xl font-bold text-purple-900 mb-2">NEXT TO</p>
              <p className="text-sm text-zinc-600 mb-3">Рядом с</p>
              <div className="bg-white rounded-lg p-3 text-left">
                <p className="text-sm font-semibold">
                  The man is <span className="text-purple-600">next to</span>{" "}
                  the door
                </p>
                <p className="text-xs text-zinc-600 mt-1">
                  Человек рядом с дверью
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-amber-50 rounded-lg p-4 border border-amber-200">
          <p className="text-center font-semibold text-amber-900">
            💡 Предлоги места показывают,{" "}
            <span className="text-amber-700">ГДЕ</span> находится предмет
            относительно другого предмета
          </p>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка для русскоязычных">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Отличие от русского:</strong> В русском предлоги (в, на,
              под) часто совпадают с английскими, но есть нюансы (at school ≠ в
              школе).
            </li>
            <li>
              <strong>Порядок слов:</strong> Английский строгий (The book is in
              the bag), русский гибкий (Книга в сумке).
            </li>
            <li>
              <strong>Артикли:</strong> Английский требует the/a (on the table),
              русский их опускает.
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Предлоги места указывают, где что-то
            находится.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 2: Лексика ===== */
function Step2() {
  return (
    <>
      <UiSection title="Какие слова нужно знать?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Для работы с предлогами места важно выучить существительные,
          описывающие предметы и места. Вот список из{" "}
          <strong>20 ключевых слов/фраз</strong> с переводом и произношением для
          A1-A2.
        </p>
      </UiSection>

      <UiSection title="Список слов">
        <div className="grid gap-3">
          <div className="bg-indigo-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">Предметы и места:</h4>
            <div className="space-y-1 text-sm">
              <p>
                <strong>Table</strong> [ˈteɪbl] — Стол
              </p>
              <p>
                <strong>Chair</strong> [tʃɛər] — Стул
              </p>
              <p>
                <strong>Book</strong> [bʊk] — Книга
              </p>
              <p>
                <strong>Room</strong> [ruːm] — Комната
              </p>
              <p>
                <strong>House</strong> [haʊs] — Дом
              </p>
              <p>
                <strong>Kitchen</strong> [ˈkɪtʃɪn] — Кухня
              </p>
              <p>
                <strong>Bed</strong> [bɛd] — Кровать
              </p>
              <p>
                <strong>Door</strong> [dɔːr] — Дверь
              </p>
              <p>
                <strong>Window</strong> [ˈwɪndoʊ] — Окно
              </p>
              <p>
                <strong>Cat</strong> [kæt] — Кошка
              </p>
              <p>
                <strong>Dog</strong> [dɒɡ] — Собака
              </p>
              <p>
                <strong>School</strong> [skuːl] — Школа
              </p>
              <p>
                <strong>Park</strong> [pɑːrk] — Парк
              </p>
              <p>
                <strong>Shop</strong> [ʃɒp] — Магазин
              </p>
              <p>
                <strong>Bag</strong> [bæɡ] — Сумка
              </p>
            </div>
          </div>

          <div className="bg-green-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">Предлоги места:</h4>
            <div className="space-y-1 text-sm">
              <p>
                <strong>In</strong> [ɪn] — В (внутри)
              </p>
              <p>
                <strong>On</strong> [ɒn] — На (поверхность)
              </p>
              <p>
                <strong>At</strong> [æt] — В/у (точка)
              </p>
              <p>
                <strong>Under</strong> [ˈʌndər] — Под
              </p>
              <p>
                <strong>Next to</strong> [nɛkst tə] — Рядом
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Примеры использования">
        <div className="space-y-3">
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold">The book is on the table.</p>
            <p className="text-sm text-gray-600">Книга на столе.</p>
          </div>

          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold">The cat is under the bed.</p>
            <p className="text-sm text-gray-600">Кошка под кроватью.</p>
          </div>

          <div className="border-l-4 border-blue-400 pl-4 py-2">
            <p className="font-semibold">The shop is next to the park.</p>
            <p className="text-sm text-gray-600">Магазин рядом с парком.</p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Как запомнить?">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Повторяйте слова с аудио (in [ин], under [андэр]).</li>
            <li>Составляйте предложения: The dog is in the house.</li>
            <li>Используйте карточки: слово + перевод.</li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русскоязычные часто путают in и at (at school ≠ в школе), так как
            русский предлог «в» используется шире.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 3: In - Внутри ===== */
function Step3() {
  const inExercise: FillItem[] = [
    {
      left: "1. The cat is",
      right: "the room. (в комнате)",
      answers: ["in"],
      explanation: "Ответ: in — Для замкнутого пространства используем in.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. The book is",
      right: "the bag. (в сумке)",
      answers: ["in"],
      explanation: "Ответ: in — Bag это контейнер, используем in.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. I live",
      right: "Moscow. (в Москве)",
      answers: ["in"],
      explanation: "Ответ: in — Для городов используем in.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Когда использовать In?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          <strong>In</strong> указывает, что объект находится{" "}
          <strong>внутри</strong> замкнутого пространства (комната, сумка) или в
          большом месте (город, страна).
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              The cat is in the room.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Кошка в комнате.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> In + the room (замкнутое
              пространство).
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              The book is in the bag.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Книга в сумке.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> In + the bag (внутри).
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">I live in Moscow.</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Я живу в Москве.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> In + город.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила (все мелочи)">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Использование:</strong> Для помещений (room, house),
              контейнеров (bag, box), городов/стран (in London).
            </li>
            <li>
              <strong>Артикли:</strong> In the room (с the), но in Moscow (без
              артикля для названий).
            </li>
            <li>
              <strong>Произношение:</strong> In [ɪn] — короткий звук.
            </li>
            <li>
              <strong>Части дня:</strong> In the morning (утром).
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-indigo-400 pl-3 py-1">
            <p>
              <strong>Дом:</strong> The keys are in the bag. (Ключи в сумке.)
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <p>
              <strong>Школа:</strong> There is a teacher in the classroom. (В
              классе учитель.)
            </p>
          </div>
          <div className="border-l-4 border-blue-400 pl-3 py-1">
            <p>
              <strong>Место жительства:</strong> I live in Russia. (Я живу в
              России.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              НЕ для поверхностей:
              <div className="ml-4">
                <div className="text-red-600">
                  ❌ Wrong: The book is in the table.
                </div>
                <div className="text-green-600">
                  ✅ Right: The book is on the table.
                </div>
              </div>
            </li>
            <li>
              НЕ для точек:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: I'm in school.</div>
                <div className="text-green-600">✅ Right: I'm at school.</div>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Вставьте in"
        instruction="Заполните пропуски предлогом in."
        items={inExercise}
      />

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русский «в» шире, чем in. Например, «в школе» = at school (не in
            school, если речь о пребывании в здании).
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> In = внутри замкнутого пространства.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 4: On - На поверхности ===== */
function Step4() {
  const onExercise: FillItem[] = [
    {
      left: "1. The book is",
      right: "the table. (на столе)",
      answers: ["on"],
      explanation: "Ответ: on — Для поверхностей используем on.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. The picture is",
      right: "the wall. (на стене)",
      answers: ["on"],
      explanation: "Ответ: on — Wall это поверхность, используем on.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. I'm",
      right: "the bus. (в автобусе)",
      answers: ["on"],
      explanation: "Ответ: on — Для общественного транспорта используем on.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Когда использовать On?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          <strong>On</strong> указывает, что объект находится{" "}
          <strong>на поверхности</strong> или в контакте с ней (стол, стена).
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              The book is on the table.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Книга на столе.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> On + the table (поверхность).
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              The picture is on the wall.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Картина на стене.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> On + the wall.
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              The keys are on the shelf.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Ключи на полке.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> On + the shelf.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Использование:</strong> Для поверхностей (table, shelf,
              floor, wall).
            </li>
            <li>
              <strong>Артикли:</strong> On the table (с the).
            </li>
            <li>
              <strong>Произношение:</strong> On [ɒn] — короткий звук.
            </li>
            <li>
              <strong>Транспорт:</strong> On the bus (на автобусе).
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-indigo-400 pl-3 py-1">
            <p>
              <strong>Офис:</strong> The phone is on the desk. (Телефон на
              столе.)
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <p>
              <strong>Дом:</strong> The TV is on the wall. (Телевизор на стене.)
            </p>
          </div>
          <div className="border-l-4 border-blue-400 pl-3 py-1">
            <p>
              <strong>Путешествие:</strong> I'm on the train. (Я в поезде.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              НЕ для внутреннего пространства:
              <div className="ml-4">
                <div className="text-red-600">
                  ❌ Wrong: The cat is on the room.
                </div>
                <div className="text-green-600">
                  ✅ Right: The cat is in the room.
                </div>
              </div>
            </li>
            <li>
              НЕ для точек:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: I'm on school.</div>
                <div className="text-green-600">✅ Right: I'm at school.</div>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Вставьте on"
        instruction="Заполните пропуски предлогом on."
        items={onExercise}
      />

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русский «на» совпадает с on для поверхностей, но не для транспорта
            (на автобусе = on the bus, а не in).
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> On = на поверхности или в транспорте.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 5: At - В точке/месте ===== */
function Step5() {
  const atExercise: FillItem[] = [
    {
      left: "1. I'm",
      right: "school. (в школе)",
      answers: ["at"],
      explanation: "Ответ: at — Для мест используем at.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. The dog is",
      right: "the door. (у двери)",
      answers: ["at"],
      explanation: "Ответ: at — Для точек используем at.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. Meet me",
      right: "the park. (в парке)",
      answers: ["at"],
      explanation: "Ответ: at — Для встреч в местах используем at.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Когда использовать At?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          <strong>At</strong> указывает на <strong>конкретную точку</strong> или
          место (школа, работа, адрес).
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">I'm at school.</p>
            <p className="text-sm text-gray-600 mb-2">Перевод: Я в школе.</p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> At + school (место).
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              The dog is at the door.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Собака у двери.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> At + the door (точка).
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">Meet me at the park.</p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Встретимся в парке.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> At + the park.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Использование:</strong> Для мест (school, work), точек (at
              the door), событий (at the party).
            </li>
            <li>
              <strong>Артикли:</strong> At the door (с the), но at school (без
              артикля).
            </li>
            <li>
              <strong>Произношение:</strong> At [æt] — короткий звук.
            </li>
            <li>
              <strong>Время:</strong> At 7 o'clock (в 7 часов).
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-indigo-400 pl-3 py-1">
            <p>
              <strong>Работа:</strong> I'm at work. (Я на работе.)
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <p>
              <strong>Покупки:</strong> She's at the shop. (Она в магазине.)
            </p>
          </div>
          <div className="border-l-4 border-blue-400 pl-3 py-1">
            <p>
              <strong>Досуг:</strong> We're at the party. (Мы на вечеринке.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              НЕ для внутреннего пространства:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: I'm at the room.</div>
                <div className="text-green-600">✅ Right: I'm in the room.</div>
              </div>
            </li>
            <li>
              НЕ для поверхностей:
              <div className="ml-4">
                <div className="text-red-600">
                  ❌ Wrong: The book is at the table.
                </div>
                <div className="text-green-600">
                  ✅ Right: The book is on the table.
                </div>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Вставьте at"
        instruction="Заполните пропуски предлогом at."
        items={atExercise}
      />

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русский «в школе» = at school (место), а не in school (здание).
            Русскоязычные часто путают at и in.
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> At = в конкретной точке/месте.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 6: Under, Next to, Between ===== */
function Step6() {
  const otherPrepositions: FillItem[] = [
    {
      left: "1. The cat is",
      right: "the table. (под столом)",
      answers: ["under"],
      explanation: "Ответ: under — Для положения ниже поверхности.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. The chair is",
      right: "the door. (рядом с дверью)",
      answers: ["next to"],
      explanation: "Ответ: next to — Для близости, рядом.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. The book is",
      right: "two chairs. (между стульями)",
      answers: ["between"],
      explanation: "Ответ: between — Между двумя объектами.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Когда использовать Under, Next to, Between?">
        <div className="space-y-3 mb-4">
          <div className="bg-amber-50/50 rounded-lg p-3">
            <p className="font-semibold">Under — под объектом</p>
            <p className="text-sm text-gray-600">Ниже поверхности</p>
          </div>
          <div className="bg-purple-50/50 rounded-lg p-3">
            <p className="font-semibold">Next to — рядом</p>
            <p className="text-sm text-gray-600">Сбоку от объекта</p>
          </div>
          <div className="bg-pink-50/50 rounded-lg p-3">
            <p className="font-semibold">Between — между</p>
            <p className="text-sm text-gray-600">Между двумя объектами</p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="bg-amber-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              The cat is under the table.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Кошка под столом.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> Under + the table (ниже поверхности).
            </p>
          </div>

          <div className="bg-purple-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              The chair is next to the door.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Стул рядом с дверью.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> Next to + the door (близко).
            </p>
          </div>

          <div className="bg-pink-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              The book is between two chairs.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: Книга между двумя стульями.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> Between + two chairs (между двумя).
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Under:</strong> Для чего-то ниже (under the bed).
              Произношение: [ˈʌndər] (андэр).
            </li>
            <li>
              <strong>Next to:</strong> Для близости (next to the window).
              Произношение: [nɛkst tə].
            </li>
            <li>
              <strong>Between:</strong> Только для двух объектов (between the
              table and the chair). Произношение: [bɪˈtwiːn].
            </li>
            <li>
              <strong>Артикли:</strong> Under the bed, next to the door, between
              the chairs (с the).
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-amber-400 pl-3 py-1">
            <p>
              <strong>Дом:</strong> The dog is under the chair. (Собака под
              стулом.)
            </p>
          </div>
          <div className="border-l-4 border-purple-400 pl-3 py-1">
            <p>
              <strong>Город:</strong> The shop is next to the bank. (Магазин
              рядом с банком.)
            </p>
          </div>
          <div className="border-l-4 border-pink-400 pl-3 py-1">
            <p>
              <strong>Ориентация:</strong> The park is between the school and
              the shop. (Парк между школой и магазином.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Under ≠ in:
              <div className="ml-4">
                <div className="text-red-600">
                  ❌ Wrong: The cat is under the room.
                </div>
                <div className="text-green-600">
                  ✅ Right: The cat is in the room.
                </div>
              </div>
            </li>
            <li>
              Next to ≠ between:
              <div className="ml-4">
                <div className="text-red-600">
                  ❌ Wrong: The book is next to two chairs.
                </div>
                <div className="text-green-600">
                  ✅ Right: The book is between two chairs.
                </div>
              </div>
            </li>
            <li>
              Between только для двух:
              <div className="ml-4">
                <div className="text-red-600">
                  ❌ Wrong: Between three chairs.
                </div>
                <div className="text-green-600">
                  ✅ Right: Among three chairs.
                </div>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Вставьте правильный предлог"
        instruction="Заполните пропуски предлогами under, next to или between."
        items={otherPrepositions}
      />

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русский «под» = under, но next to звучит точнее, чем русский «рядом»
            (более конкретное расположение).
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Under = под, Next to = рядом, Between =
            между двумя.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 7: Сравнение с другими темами ===== */
function Step7() {
  return (
    <>
      <UiSection title="Сравнение с другими темами">
        <div className="space-y-3">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">There is/There are:</p>
            <p className="text-sm">
              There is a book on the table. (существование) + предлог on.
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Present Simple:</p>
            <p className="text-sm">
              I live in Moscow. (действие) + предлог in.
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Have got:</p>
            <p className="text-sm">
              I have got a book in my bag. (владение) + in.
            </p>
          </div>

          <div className="bg-amber-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Can/Can't:</p>
            <p className="text-sm">I can sit on the chair. (умение) + on.</p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Отличия от русского языка (все мелочи)">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              <strong>Артикли:</strong> Русский «на столе» → on the table (с
              the).
            </li>
            <li>
              <strong>Строгий выбор предлога:</strong> Русский «в» для in и at
              (в школе = at school, в комнате = in the room).
            </li>
            <li>
              <strong>Between:</strong> Русский «между» = between (только для
              двух), но для трёх+ — among.
            </li>
            <li>
              <strong>Порядок слов:</strong> Английский: The book is on the
              table (строго), русский гибкий (Книга на столе).
            </li>
            <li>
              <strong>Произношение:</strong> Русскоязычные путают in [ɪn] и on
              [ɒn], делая их похожими.
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Типичные ошибки русскоязычных">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Пропуск the:
              <div className="ml-4">
                <div className="text-red-600">❌ The book is on table.</div>
                <div className="text-green-600">
                  ✅ The book is on the table.
                </div>
              </div>
            </li>
            <li>
              Путаница in/at:
              <div className="ml-4">
                <div className="text-red-600">❌ I'm in school.</div>
                <div className="text-green-600">✅ I'm at school.</div>
              </div>
            </li>
            <li>
              Неправильный предлог:
              <div className="ml-4">
                <div className="text-red-600">
                  ❌ The cat is on the bed. (на поверхности)
                </div>
                <div className="text-green-600">
                  ✅ The cat is under the bed. (под кроватью)
                </div>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 8: Домашнее задание ===== */
function Step8() {
  return (
    <>
      <UiSection title="Домашнее задание для запоминания слов">
        <p className="text-zinc-700 leading-relaxed mb-4">
          <strong>Задание:</strong> Выучите <strong>20 слов</strong> из списка
          на странице 2.
        </p>
      </UiSection>

      <UiSection title="Как выполнять">
        <div className="space-y-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">1. Повторение:</p>
            <p className="text-sm">
              Прочитайте каждое слово вслух 3 раза (in [ɪn], table [ˈteɪbl]).
              Используйте аудио на сайте.
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">2. Карточки:</p>
            <p className="text-sm">
              Напишите слова на карточках (английское слово + перевод).
              Проверяйте себя.
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">3. Предложения:</p>
            <p className="text-sm mb-2">
              Составьте <strong>10 предложений</strong> с разными предлогами:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>2 с in: The cat is in the room.</li>
              <li>2 с on: The book is on the table.</li>
              <li>2 с at: I'm at school.</li>
              <li>2 с under: The dog is under the bed.</li>
              <li>1 с next to: The chair is next to the door.</li>
              <li>1 с between: The book is between two chairs.</li>
            </ul>
          </div>

          <div className="bg-amber-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">4. Диалог:</p>
            <p className="text-sm mb-2">
              Напишите диалог (5-6 реплик) с минимум 5 словами из списка.
            </p>
            <div className="bg-white rounded p-3 text-sm">
              <p>
                <strong>Пример:</strong>
              </p>
              <p>A: Where is the book?</p>
              <p>B: It's on the table.</p>
              <p>A: Is the cat in the room?</p>
              <p>B: No, it's under the bed.</p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Совет">
        <div className="bg-green-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              Практикуйте предлоги в реальных ситуациях (опишите свою комнату).
            </li>
            <li>Проверяйте произношение (in [ɪn], on [ɒn]).</li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 9: Упражнения ===== */
function Step9() {
  const exercise1: FillItem[] = [
    {
      left: "1. The book is",
      right: "the table.",
      answers: ["on"],
      explanation: "Ответ: on — Поверхность.",
      ariaLabel: "Вопрос 1",
    },
    {
      left: "2. The cat is",
      right: "the room.",
      answers: ["in"],
      explanation: "Ответ: in — Замкнутое пространство.",
      ariaLabel: "Вопрос 2",
    },
    {
      left: "3. The shop is",
      right: "the bank.",
      answers: ["next to"],
      explanation: "Ответ: next to — Рядом.",
      ariaLabel: "Вопрос 3",
    },
  ];

  const exercise2: FillItem[] = [
    {
      left: "1. The dog is",
      right: "the bed. (под)",
      answers: ["under"],
      explanation: "Ответ: under",
      ariaLabel: "Заполните 1",
    },
    {
      left: "2. I'm",
      right: "school. (в школе)",
      answers: ["at"],
      explanation: "Ответ: at",
      ariaLabel: "Заполните 2",
    },
    {
      left: "3. The park is",
      right: "the school and the shop. (между)",
      answers: ["between"],
      explanation: "Ответ: between",
      ariaLabel: "Заполните 3",
    },
  ];

  const exercise3: FillItem[] = [
    {
      left: "1. Кошка в комнате. →",
      right: "",
      answers: ["The cat is in the room", "The cat is in the room."],
      explanation: "Ответ: The cat is in the room.",
      ariaLabel: "Перевод 1",
      wide: true,
    },
    {
      left: "2. Книга между двумя стульями. →",
      right: "",
      answers: [
        "The book is between two chairs",
        "The book is between two chairs.",
      ],
      explanation: "Ответ: The book is between two chairs.",
      ariaLabel: "Перевод 2",
      wide: true,
    },
    {
      left: "3. Я на работе. →",
      right: "",
      answers: ["I'm at work", "I'm at work.", "I am at work", "I am at work."],
      explanation: "Ответ: I'm at work.",
      ariaLabel: "Перевод 3",
      wide: true,
    },
  ];

  const exercise4: FillItem[] = [
    {
      left: "1. ❌ The book is in the table. →",
      right: "",
      answers: ["The book is on the table", "The book is on the table."],
      explanation: "Исправление: The book is on the table. — Поверхность.",
      ariaLabel: "Исправьте 1",
      wide: true,
    },
    {
      left: "2. ❌ I'm in school. →",
      right: "",
      answers: [
        "I'm at school",
        "I'm at school.",
        "I am at school",
        "I am at school.",
      ],
      explanation: "Исправление: I'm at school. — Место.",
      ariaLabel: "Исправьте 2",
      wide: true,
    },
    {
      left: "3. ❌ The cat is next to the bed and the chair. →",
      right: "",
      answers: [
        "The cat is between the bed and the chair",
        "The cat is between the bed and the chair.",
      ],
      explanation:
        "Исправление: The cat is between the bed and the chair. — Между двумя.",
      ariaLabel: "Исправьте 3",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="🎉 Упражнения по предлогам места">
        <p className="text-zinc-700 leading-relaxed">
          Проверим ваши знания! Выполните все упражнения.
        </p>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение 1: Выберите правильный предлог"
        instruction="Вставьте правильный предлог места."
        items={exercise1}
      />

      <CheckableExercise
        title="📝 Упражнение 2: Заполните пропуски"
        instruction="Вставьте подходящий предлог."
        items={exercise2}
      />

      <CheckableExercise
        title="📝 Упражнение 3: Переведите"
        instruction="Переведите с русского на английский."
        items={exercise3}
      />

      <CheckableExercise
        title="📝 Упражнение 4: Исправьте ошибки"
        instruction="Найдите ошибки в предложениях и напишите правильный вариант целиком."
        items={exercise4}
      />
    </>
  );
}

/* ===== СТРАНИЦА 10: Чтение и True/False ===== */
function Step10() {
  const [showTranslation, setShowTranslation] = React.useState(false);

  const trueFalseItems: FillItem[] = [
    {
      left: "1. There is a table in the kitchen.",
      right: "",
      answers: ["True", "true", "TRUE", "Правда", "правда"],
      explanation: "Ответ: True — There is a table in the kitchen.",
      ariaLabel: "Задание 1",
      wide: true,
    },
    {
      left: "2. The book is under the table.",
      right: "",
      answers: ["False", "false", "FALSE", "Ложь", "ложь"],
      explanation: "Ответ: False — A book is on the table (не под).",
      ariaLabel: "Задание 2",
      wide: true,
    },
    {
      left: "3. There are two chairs next to the table.",
      right: "",
      answers: ["True", "true", "TRUE", "Правда", "правда"],
      explanation: "Ответ: True — There are two chairs next to the table.",
      ariaLabel: "Задание 3",
      wide: true,
    },
    {
      left: "4. There is a dog in the house.",
      right: "",
      answers: ["False", "false", "FALSE", "Ложь", "ложь"],
      explanation: "Ответ: False — There isn't a dog in the house.",
      ariaLabel: "Задание 4",
      wide: true,
    },
    {
      left: "5. The shop is between the park and the school.",
      right: "",
      answers: ["True", "true", "TRUE", "Правда", "правда"],
      explanation: "Ответ: True — The shop is between the park and the school.",
      ariaLabel: "Задание 5",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="Текст для чтения: My House">
        <div className="bg-blue-50/50 rounded-lg p-6 mb-4">
          <p className="text-zinc-900 leading-relaxed">
            My house is small. There is a table in the kitchen. A book is on the
            table. There are two chairs next to the table. The cat is under the
            table. There isn't a dog in the house. I'm at home now. The shop is
            between the park and the school.
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
              Мой дом маленький. На кухне есть стол. Книга на столе. Два стула
              рядом со столом. Кошка под столом. В доме нет собаки. Я сейчас
              дома. Магазин между парком и школой.
            </p>
          </div>
        )}
      </UiSection>

      <CheckableExercise
        title="📝 Задание True/False"
        instruction="Прочитайте текст и определите, верны ли утверждения (True) или ложны (False)."
        items={trueFalseItems}
      />

      <UiSection title="💡 Совет">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            Подчеркните предлоги (in, on, next to) в тексте для поиска ответов.
            Обратите внимание на детали!
          </p>
        </div>
      </UiSection>

      <UiSection title="🎊 Отличная работа!">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Вы завершили весь курс "Предлоги места"! Теперь вы можете:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Описывать расположение предметов (in, on, at)</li>
          <li>Использовать правильные предлоги для разных ситуаций</li>
          <li>Отличать in (внутри) от on (на поверхности) и at (в точке)</li>
          <li>Применять under, next to, between</li>
          <li>Понимать различия с русским языком</li>
        </ul>

        <div className="bg-indigo-50 rounded-lg p-4 mb-4">
          <p className="text-indigo-900 font-semibold mb-3">
            <strong>🔄 Повторение ключевых моментов:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>In:</strong> Внутри (in the room)
            </li>
            <li>
              <strong>On:</strong> На поверхности (on the table)
            </li>
            <li>
              <strong>At:</strong> В точке/месте (at school)
            </li>
            <li>
              <strong>Under:</strong> Под (under the bed)
            </li>
            <li>
              <strong>Next to:</strong> Рядом (next to the door)
            </li>
            <li>
              <strong>Between:</strong> Между двумя (between two chairs)
            </li>
            <li>
              <strong>Отличия от русского:</strong> Артикли, строгий выбор
              предлога (at school ≠ в школе)
            </li>
            <li>
              <strong>Произношение:</strong> In [ɪn], On [ɒn], At [æt], Under
              [ˈʌndər]
            </li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-lg p-4">
          <p className="text-green-900 font-semibold mb-2">
            💡 Советы для практики:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Опишите свою комнату используя все предлоги</li>
            <li>Не забывайте артикли: on the table, not on table!</li>
            <li>Помните: at school (место), not in school</li>
            <li>Практикуйте произношение каждого предлога</li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}
