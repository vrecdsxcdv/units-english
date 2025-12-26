"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function ThereIsAre({ step }: Props) {
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
      <UiSection title="Что такое There is и There are?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Конструкции <strong>there is</strong> и <strong>there are</strong>{" "}
          используются для указания на <strong>существование</strong> предметов,
          людей или мест в определённом пространстве.
        </p>

        <div className="space-y-3 mb-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <h4 className="font-semibold text-zinc-900 mb-2">
              There is — для единственного числа:
            </h4>
            <p className="text-sm text-zinc-700">
              Для <strong>единственного числа</strong> или{" "}
              <strong>неисчисляемых существительных</strong>.
            </p>
            <p className="text-sm text-indigo-700 mt-2 italic">
              Пример: There is a cat in the room. (В комнате есть кошка.)
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <h4 className="font-semibold text-zinc-900 mb-2">
              There are — для множественного числа:
            </h4>
            <p className="text-sm text-zinc-700">
              Для <strong>множественного числа</strong>.
            </p>
            <p className="text-sm text-green-700 mt-2 italic">
              Пример: There are two cats in the room. (В комнате две кошки.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Зачем нужна эта тема?">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Помогает описывать окружающий мир: There is a book on the table. (На
            столе книга.)
          </li>
          <li>Учит задавать вопросы: Is there a chair? (Есть стул?)</li>
          <li>
            Позволяет говорить о количестве: There are five students in the
            class. (В классе пять учеников.)
          </li>
        </ul>
      </UiSection>

      <UiSection title="Ключевые особенности">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>There is</strong> — с a/an для исчисляемых или без артикля
              для неисчисляемых (There is water).
            </li>
            <li>
              <strong>There are</strong> — с числительными (two, three) или без
              (There are books).
            </li>
            <li>
              <strong>Произношение:</strong> There is [ðɛər ɪz] (з'эар из),
              There are [ðɛər ɑːr] (з'эар ар).
            </li>
            <li>
              <strong>Интонация:</strong> Утверждения — ровная, вопросы (Is
              there?) — восходящая (↑).
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Пример для понимания">
        <div className="space-y-3">
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold mb-1">Русский: В комнате книга.</p>
            <p className="text-indigo-600 font-semibold">
              English: There is a book in the room.
            </p>
          </div>

          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold mb-1">Русский: В комнате книги.</p>
            <p className="text-green-600 font-semibold">
              English: There are books in the room.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="📸 Визуализация There is / There are">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
            <div className="text-center mb-4">
              <div className="w-24 h-24 mx-auto bg-blue-200 rounded-lg flex items-center justify-center text-5xl mb-3">
                📖
              </div>
              <p className="text-2xl font-bold text-blue-900 mb-2">THERE IS</p>
              <p className="text-sm text-zinc-600 mb-3">Единственное число</p>
              <div className="bg-white rounded-lg p-4 text-left">
                <p className="text-lg font-semibold mb-2"><span className="text-blue-600">There is</span> a book</p>
                <p className="text-sm text-zinc-600">Есть (одна) книга</p>
                <div className="mt-3 pt-3 border-t border-blue-100">
                  <p className="text-xs text-zinc-500 italic">on the table</p>
                  <p className="text-xs text-zinc-500">на столе</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
            <div className="text-center mb-4">
              <div className="w-24 h-24 mx-auto bg-green-200 rounded-lg flex items-center justify-center text-5xl mb-3">
                📚
              </div>
              <p className="text-2xl font-bold text-green-900 mb-2">THERE ARE</p>
              <p className="text-sm text-zinc-600 mb-3">Множественное число</p>
              <div className="bg-white rounded-lg p-4 text-left">
                <p className="text-lg font-semibold mb-2"><span className="text-green-600">There are</span> three books</p>
                <p className="text-sm text-zinc-600">Есть три книги</p>
                <div className="mt-3 pt-3 border-t border-green-100">
                  <p className="text-xs text-zinc-500 italic">on the table</p>
                  <p className="text-xs text-zinc-500">на столе</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-amber-50 rounded-lg p-4 border border-amber-200">
          <p className="text-center font-semibold text-amber-900">
            💡 Правило: Один предмет → <span className="text-blue-600">There IS</span> | Много предметов → <span className="text-green-600">There ARE</span>
          </p>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка для русскоязычных">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Отличие от русского:</strong> В русском «есть» часто
              опускается (На столе книга), в английском there is/are{" "}
              <strong>обязательно</strong>.
            </li>
            <li>
              <strong>Порядок слов:</strong> Русский гибкий (Книга на столе),
              английский строгий (There is a book on the table).
            </li>
            <li>
              <strong>Артикли:</strong> Русский не использует a/an, английский
              требует (There is a cat).
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> There is — один предмет, there are — много
            предметов.
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
          Для описания существования важно выучить существительные, предлоги
          места и числа. Вот список из <strong>20 ключевых слов/фраз</strong> с
          переводом и произношением для A1-A2.
        </p>
      </UiSection>

      <UiSection title="Список слов">
        <div className="grid gap-3">
          <div className="bg-indigo-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">Предметы и места:</h4>
            <div className="space-y-1 text-sm">
              <p>
                <strong>Book</strong> [bʊk] — Книга
              </p>
              <p>
                <strong>Table</strong> [ˈteɪbl] — Стол
              </p>
              <p>
                <strong>Chair</strong> [tʃɛər] — Стул
              </p>
              <p>
                <strong>Room</strong> [ruːm] — Комната
              </p>
              <p>
                <strong>Window</strong> [ˈwɪndoʊ] — Окно
              </p>
              <p>
                <strong>Door</strong> [dɔːr] — Дверь
              </p>
              <p>
                <strong>Cat</strong> [kæt] — Кошка
              </p>
              <p>
                <strong>Dog</strong> [dɒɡ] — Собака
              </p>
              <p>
                <strong>Student</strong> [ˈstuːdnt] — Студент
              </p>
              <p>
                <strong>Teacher</strong> [ˈtiːtʃər] — Учитель
              </p>
            </div>
          </div>

          <div className="bg-green-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">Неисчисляемые:</h4>
            <div className="space-y-1 text-sm">
              <p>
                <strong>Water</strong> [ˈwɔːtər] — Вода
              </p>
              <p>
                <strong>Milk</strong> [mɪlk] — Молоко
              </p>
            </div>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">Предлоги места:</h4>
            <div className="space-y-1 text-sm">
              <p>
                <strong>On</strong> [ɒn] — На
              </p>
              <p>
                <strong>In</strong> [ɪn] — В
              </p>
              <p>
                <strong>Under</strong> [ˈʌndər] — Под
              </p>
              <p>
                <strong>Near</strong> [nɪər] — Рядом
              </p>
            </div>
          </div>

          <div className="bg-amber-50/50 rounded-lg p-3">
            <h4 className="font-semibold mb-2">Числа и количество:</h4>
            <div className="space-y-1 text-sm">
              <p>
                <strong>One</strong> [wʌn] — Один
              </p>
              <p>
                <strong>Two</strong> [tuː] — Два
              </p>
              <p>
                <strong>Many</strong> [ˈmeni] — Много
              </p>
              <p>
                <strong>Some</strong> [sʌm] — Несколько
              </p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Примеры использования">
        <div className="space-y-3">
          <div className="border-l-4 border-indigo-400 pl-4 py-2">
            <p className="font-semibold">There is a book on the table.</p>
            <p className="text-sm text-gray-600">На столе книга.</p>
          </div>

          <div className="border-l-4 border-green-400 pl-4 py-2">
            <p className="font-semibold">There are two cats in the room.</p>
            <p className="text-sm text-gray-600">В комнате две кошки.</p>
          </div>

          <div className="border-l-4 border-blue-400 pl-4 py-2">
            <p className="font-semibold">There is some water in the bottle.</p>
            <p className="text-sm text-gray-600">В бутылке есть вода.</p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Как запомнить?">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Повторяйте слова с аудио (there is [з'эар из], book [бук]).</li>
            <li>Составляйте предложения: There is a chair in the room.</li>
            <li>Используйте карточки: слово + перевод.</li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русскоязычные часто забывают артикли (a/an) в there is (There is cat
            вместо There is a cat).
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 3: There is для единственного числа ===== */
function Step3() {
  const thereIsExercise: FillItem[] = [
    {
      left: "1.",
      right: "is a book on the table. (есть)",
      answers: ["There", "there"],
      explanation:
        "Ответ: There — Для единственного числа используем There is.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. There",
      right: "water in the glass. (есть)",
      answers: ["is"],
      explanation: "Ответ: is — Water неисчисляемое, используем is.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. There is",
      right: "cat in the room. (кошка)",
      answers: ["a"],
      explanation:
        "Ответ: a — Cat исчисляемое в единственном числе, нужен артикль a.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Как использовать There is?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Схема:{" "}
          <strong>
            There is + существительное (единственное/неисчисляемое) + место
          </strong>
          .
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              There is a book on the table.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: На столе книга.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> There is + a book (единственное, с a)
              + on the table.
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              There is water in the glass.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: В стакане вода.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> There is + water (неисчисляемое, без
              a).
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              There is a cat in the room.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: В комнате кошка.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> There is + a cat + in the room.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила (все мелочи)">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Единственное число:</strong> Используйте a/an для
              исчисляемых (There is a chair).
            </li>
            <li>
              <strong>Неисчисляемые:</strong> Без a/an (There is milk).
            </li>
            <li>
              <strong>Предлоги места:</strong> on, in, under, near в конце
              предложения.
            </li>
            <li>
              <strong>Произношение:</strong> There is [ðɛər ɪz] — слабое is в
              быстром разговоре [z].
            </li>
            <li>
              <strong>Артикли:</strong> a перед согласной (a book), an перед
              гласной (an apple).
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-indigo-400 pl-3 py-1">
            <p>
              <strong>Дом:</strong> There is a dog in the garden. (В саду
              собака.)
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <p>
              <strong>Школа:</strong> There is a teacher in the class. (В классе
              учитель.)
            </p>
          </div>
          <div className="border-l-4 border-blue-400 pl-3 py-1">
            <p>
              <strong>Кухня:</strong> There is water in the bottle. (В бутылке
              вода.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              НЕ используйте there are для одного:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: There are a book.</div>
                <div className="text-green-600">✅ Right: There is a book.</div>
              </div>
            </li>
            <li>
              НЕ пропускайте a/an для исчисляемых:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: There is cat.</div>
                <div className="text-green-600">✅ Right: There is a cat.</div>
              </div>
            </li>
            <li>
              НЕ путайте с have got:
              <div className="ml-4">
                <div className="text-red-600">
                  ❌ Wrong: I have got a book on the table.
                </div>
                <div className="text-green-600">
                  ✅ Right: There is a book on the table.
                </div>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Вставьте правильные слова"
        instruction="Заполните пропуски для создания предложений с There is."
        items={thereIsExercise}
      />

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русский: «В комнате кошка» (без есть), английский: There is a cat
            (строго с there is и a).
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> There is = один предмет или неисчисляемое +
            место.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 4: There are для множественного числа ===== */
function Step4() {
  const thereAreExercise: FillItem[] = [
    {
      left: "1.",
      right: "are two books on the table. (есть)",
      answers: ["There", "there"],
      explanation:
        "Ответ: There — Для множественного числа используем There are.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. There",
      right: "students in the class. (есть)",
      answers: ["are"],
      explanation: "Ответ: are — Students множественное число, используем are.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. There are",
      right: "chairs in the room. (несколько)",
      answers: ["some"],
      explanation:
        "Ответ: some — Для неопределённого количества используем some.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Как использовать There are?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Схема:{" "}
          <strong>There are + существительное (множественное) + место</strong>.
        </p>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              There are two books on the table.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: На столе две книги.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> There are + two books (множественное)
              + on the table.
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              There are students in the class.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: В классе студенты.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> There are + students (без числа).
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              There are some chairs in the room.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: В комнате несколько стульев.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> There are + some chairs.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Множественное число:</strong> Используйте с числительными
              (two, three) или словами some, many.
            </li>
            <li>
              <strong>Без a/an:</strong> Множественное не требует артикля (There
              are books, не There are a books).
            </li>
            <li>
              <strong>Предлоги:</strong> in, on, under в конце.
            </li>
            <li>
              <strong>Произношение:</strong> There are [ðɛər ɑːr] — are звучит
              как [ɑːr].
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-indigo-400 pl-3 py-1">
            <p>There are three dogs in the park. (В парке три собаки.)</p>
          </div>
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <p>
              There are many students in the school. (В школе много учеников.)
            </p>
          </div>
          <div className="border-l-4 border-blue-400 pl-3 py-1">
            <p>There are some books on the shelf. (На полке несколько книг.)</p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              НЕ используйте there is для множественного:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: There is books.</div>
                <div className="text-green-600">✅ Right: There are books.</div>
              </div>
            </li>
            <li>
              НЕ добавляйте a/an:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: There are a books.</div>
                <div className="text-green-600">✅ Right: There are books.</div>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Вставьте правильные слова"
        instruction="Заполните пропуски для создания предложений с There are."
        items={thereAreExercise}
      />

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русскоязычные часто забывают there are во множественном числе,
            говоря There is books по аналогии с русским «Книги на столе».
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> There are = множественное число + место.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 5: Отрицательные формы ===== */
function Step5() {
  const negativeExercise: FillItem[] = [
    {
      left: "1. There",
      right: "a book on the table. (нет)",
      answers: ["isn't", "isnt", "is not"],
      explanation:
        "Ответ: isn't — Для отрицания единственного числа используем isn't.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2. There",
      right: "books on the table. (нет)",
      answers: ["aren't", "arent", "are not"],
      explanation:
        "Ответ: aren't — Для отрицания множественного числа используем aren't.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. There isn't",
      right: "water in the glass. (никакой)",
      answers: ["any"],
      explanation:
        "Ответ: any — В отрицательных предложениях используем any вместо some.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Как строить отрицания?">
        <p className="text-zinc-700 leading-relaxed mb-4">Схемы:</p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>
            <strong>
              There isn't + существительное (единственное/неисчисляемое) + место
            </strong>
            .
          </li>
          <li>
            <strong>
              There aren't + существительное (множественное) + место
            </strong>
            .
          </li>
        </ul>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              There isn't a book on the table.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: На столе нет книги.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> There isn't + a book + on the table.
            </p>
          </div>

          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              There isn't water in the glass.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: В стакане нет воды.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> There isn't + water (без a).
            </p>
          </div>

          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              There aren't books on the table.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: На столе нет книг.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> There aren't + books.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>There isn't</strong> = There is not [ðɛər ˈɪznt] — для
              единственного/неисчисляемого.
            </li>
            <li>
              <strong>There aren't</strong> = There are not [ðɛər ˈɑːrnt] — для
              множественного.
            </li>
            <li>
              <strong>Артикли/слова:</strong> There isn't a book, There aren't
              any books (any для множественного).
            </li>
            <li>
              <strong>Произношение:</strong> Ударение на isn't/aren't в
              отрицаниях.
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-red-400 pl-3 py-1">
            <p>There isn't a teacher in the class. (В классе нет учителя.)</p>
          </div>
          <div className="border-l-4 border-red-400 pl-3 py-1">
            <p>There aren't any chairs in the room. (В комнате нет стульев.)</p>
          </div>
          <div className="border-l-4 border-red-400 pl-3 py-1">
            <p>There isn't milk in the fridge. (В холодильнике нет молока.)</p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              НЕ путайте формы:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: There isn't books.</div>
                <div className="text-green-600">
                  ✅ Right: There aren't books.
                </div>
              </div>
            </li>
            <li>
              НЕ используйте no (на A1-A2):
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: There is no book.</div>
                <div className="text-green-600">
                  ✅ Right: There isn't a book.
                </div>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Создайте отрицания"
        instruction="Заполните пропуски для создания отрицательных предложений."
        items={negativeExercise}
      />

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русский: «Нет книги» (без глагола). Английский: There isn't a book
            (строго с there isn't).
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Отрицания = There isn't/aren't +
            существительное + место.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 6: Вопросительные формы ===== */
function Step6() {
  const questionExercise: FillItem[] = [
    {
      left: "1.",
      right: "there a book on the table? (есть)",
      answers: ["Is", "is"],
      explanation:
        "Ответ: Is — Для вопросов в единственном числе используем Is there.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "2.",
      right: "there books on the table? (есть)",
      answers: ["Are", "are"],
      explanation:
        "Ответ: Are — Для вопросов во множественном числе используем Are there.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "3. Is there water? — Yes, there",
      right: ". (да)",
      answers: ["is"],
      explanation: "Ответ: is — Короткий ответ: Yes, there is.",
      ariaLabel: "Упражнение 3",
    },
  ];

  return (
    <>
      <UiSection title="Как задавать вопросы?">
        <p className="text-zinc-700 leading-relaxed mb-4">Схемы:</p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>
            <strong>
              Is there + существительное (единственное/неисчисляемое) + место?
            </strong>
          </li>
          <li>
            <strong>
              Are there + существительное (множественное) + место?
            </strong>
          </li>
        </ul>
      </UiSection>

      <UiSection title="Примеры и объяснения">
        <div className="space-y-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              Is there a book on the table?
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: На столе есть книга?
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> Is there + a book + on the table.
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              Are there books on the table?
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: На столе есть книги?
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> Are there + books.
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold text-lg mb-2">
              Is there water in the fridge?
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Перевод: В холодильнике есть вода?
            </p>
            <p className="text-sm text-gray-700">
              <strong>Почему так:</strong> Is there + water.
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <strong>Is there</strong> — для единственного/неисчисляемого.
            </li>
            <li>
              <strong>Are there</strong> — для множественного.
            </li>
            <li>
              <strong>Короткие ответы:</strong> Yes, there is. / No, there
              isn't.; Yes, there are. / No, there aren't.
            </li>
            <li>
              <strong>Произношение:</strong> Is there [ɪz ðɛər], Are there [ɑːr
              ðɛər] — восходящая интонация (↑).
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <div className="space-y-2">
          <div className="border-l-4 border-indigo-400 pl-3 py-1">
            <p>
              <strong>Школа:</strong> Is there a chair in the room? (В комнате
              есть стул?)
            </p>
          </div>
          <div className="border-l-4 border-green-400 pl-3 py-1">
            <p>
              <strong>Университет:</strong> Are there students in the class? (В
              классе есть студенты?)
            </p>
          </div>
          <div className="border-l-4 border-blue-400 pl-3 py-1">
            <p>
              <strong>Дом:</strong> Is there milk in the kitchen? (На кухне есть
              молоко?)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              НЕ путайте формы:
              <div className="ml-4">
                <div className="text-red-600">❌ Wrong: Is there books?</div>
                <div className="text-green-600">✅ Right: Are there books?</div>
              </div>
            </li>
            <li>
              НЕ используйте do:
              <div className="ml-4">
                <div className="text-red-600">
                  ❌ Wrong: Do there is a book?
                </div>
                <div className="text-green-600">✅ Right: Is there a book?</div>
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение: Создайте вопросы"
        instruction="Заполните пропуски для создания вопросов."
        items={questionExercise}
      />

      <UiSection title="Культурная заметка">
        <div className="bg-purple-50/50 rounded-lg p-4">
          <p className="text-sm text-zinc-700">
            Русский: «Есть книга на столе?» (гибкий порядок). Английский: Is
            there a book on the table? (строгий порядок).
          </p>
        </div>
      </UiSection>

      <UiSection title="Повторение">
        <div className="bg-green-50/50 rounded-lg p-4">
          <p className="text-zinc-700">
            <strong>Повтор:</strong> Вопросы = Is there/Are there +
            существительное + место?
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
            <p className="font-semibold mb-2">Present Simple:</p>
            <p className="text-sm">
              I read books. (привычка) ≠ There are books on the table.
              (существование).
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Have got:</p>
            <p className="text-sm">
              I have got a book. (владение) ≠ There is a book on the table.
              (местоположение).
            </p>
          </div>

          <div className="bg-blue-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Imperatives:</p>
            <p className="text-sm">
              Put the book on the table! (команда) ≠ There is a book on the
              table. (описание).
            </p>
          </div>

          <div className="bg-amber-50/50 rounded-lg p-4">
            <p className="font-semibold mb-2">Can/Can't:</p>
            <p className="text-sm">
              I can read a book. (умение) ≠ There is a book. (существование).
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Отличия от русского языка (все мелочи)">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              <strong>Глагол обязателен:</strong> Русский «На столе книга» →
              Английский There is a book on the table (there is обязательно).
            </li>
            <li>
              <strong>Артикли:</strong> Русский не использует a/an (Кошка в
              комнате), английский требует (There is a cat).
            </li>
            <li>
              <strong>Множественное число:</strong> Русский «Книги на столе» →
              There are books (не there is).
            </li>
            <li>
              <strong>Отрицания:</strong> Русский «Нет книги» → There isn't a
              book (не no book).
            </li>
            <li>
              <strong>Вопросы:</strong> Русский «Есть книга?» → Is there a book?
              (is/are в начале).
            </li>
            <li>
              <strong>Порядок слов:</strong> Русский гибкий, английский строгий
              (There is + существительное + место).
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Типичные ошибки русскоязычных">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Пропуск a/an:
              <div className="ml-4">
                <div className="text-red-600">❌ There is cat.</div>
                <div className="text-green-600">✅ There is a cat.</div>
              </div>
            </li>
            <li>
              Неправильная форма:
              <div className="ml-4">
                <div className="text-red-600">❌ There is books.</div>
                <div className="text-green-600">✅ There are books.</div>
              </div>
            </li>
            <li>
              Использование have:
              <div className="ml-4">
                <div className="text-red-600">
                  ❌ I have a book on the table.
                </div>
                <div className="text-green-600">
                  ✅ There is a book on the table.
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
              Прочитайте каждое слово вслух 3 раза (book [bʊk], there is [ðɛər
              ɪz]). Используйте аудио на сайте.
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
              Составьте <strong>10 предложений</strong> с разными словами:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>4 с there is: There is a book on the table.</li>
              <li>4 с there are: There are two cats in the room.</li>
              <li>2 вопроса: Is there a chair?</li>
            </ul>
            <p className="text-sm mt-2 italic">
              Пример: There is a dog under the table.
            </p>
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
              <p>A: Is there a book on the table?</p>
              <p>B: Yes, there is a book.</p>
              <p>A: Are there chairs in the room?</p>
              <p>B: Yes, there are two chairs.</p>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Совет">
        <div className="bg-green-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Практикуйте предлоги (on, in, under) в реальных ситуациях.</li>
            <li>
              Проверяйте произношение there is [з'эар из], there are [з'эар ар].
            </li>
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
      left: "1.",
      right: "a book on the table.",
      answers: ["There is", "there is"],
      explanation: "Ответ: There is — Единственное число.",
      ariaLabel: "Вопрос 1",
    },
    {
      left: "2.",
      right: "students in the class.",
      answers: ["There are", "there are"],
      explanation: "Ответ: There are — Множественное число.",
      ariaLabel: "Вопрос 2",
    },
    {
      left: "3.",
      right: "water in the bottle?",
      answers: ["Is there", "is there"],
      explanation: "Ответ: Is there — Вопрос для неисчисляемого.",
      ariaLabel: "Вопрос 3",
    },
  ];

  const exercise2: FillItem[] = [
    {
      left: "1.",
      right: "a cat in the room. (кошка)",
      answers: ["There is", "there is"],
      explanation: "Ответ: There is",
      ariaLabel: "Заполните 1",
    },
    {
      left: "2.",
      right: "three books on the shelf. (три книги)",
      answers: ["There are", "there are"],
      explanation: "Ответ: There are",
      ariaLabel: "Заполните 2",
    },
    {
      left: "3.",
      right: "milk in the fridge? (молоко)",
      answers: ["Is there", "is there"],
      explanation: "Ответ: Is there",
      ariaLabel: "Заполните 3",
    },
  ];

  const exercise3: FillItem[] = [
    {
      left: "1. There is a book on the table. →",
      right: "",
      answers: [
        "There isn't a book on the table",
        "There isn't a book on the table.",
        "There is not a book on the table",
        "There is not a book on the table.",
      ],
      explanation: "Ответ: There isn't a book on the table.",
      ariaLabel: "Отрицание 1",
      wide: true,
    },
    {
      left: "2. There are students in the class. →",
      right: "",
      answers: [
        "There aren't students in the class",
        "There aren't students in the class.",
        "There are not students in the class",
        "There are not students in the class.",
      ],
      explanation: "Ответ: There aren't students in the class.",
      ariaLabel: "Отрицание 2",
      wide: true,
    },
  ];

  const exercise4: FillItem[] = [
    {
      left: "1. В комнате нет кошки. →",
      right: "",
      answers: [
        "There isn't a cat in the room",
        "There isn't a cat in the room.",
        "There is not a cat in the room",
        "There is not a cat in the room.",
      ],
      explanation: "Ответ: There isn't a cat in the room.",
      ariaLabel: "Перевод 1",
      wide: true,
    },
    {
      left: "2. На столе есть книги? →",
      right: "",
      answers: [
        "Are there books on the table",
        "Are there books on the table?",
      ],
      explanation: "Ответ: Are there books on the table?",
      ariaLabel: "Перевод 2",
      wide: true,
    },
    {
      left: "3. В саду три собаки. →",
      right: "",
      answers: [
        "There are three dogs in the garden",
        "There are three dogs in the garden.",
      ],
      explanation: "Ответ: There are three dogs in the garden.",
      ariaLabel: "Перевод 3",
      wide: true,
    },
  ];

  const exercise5: FillItem[] = [
    {
      left: "1. ❌ There is books on the table. →",
      right: "",
      answers: [
        "There are books on the table",
        "There are books on the table.",
      ],
      explanation:
        "Исправление: There are books on the table. — Множественное.",
      ariaLabel: "Исправьте 1",
      wide: true,
    },
    {
      left: "2. ❌ There are a cat in the room. →",
      right: "",
      answers: ["There is a cat in the room", "There is a cat in the room."],
      explanation: "Исправление: There is a cat in the room. — Единственное.",
      ariaLabel: "Исправьте 2",
      wide: true,
    },
    {
      left: "3. ❌ Is there waters in the bottle? →",
      right: "",
      answers: [
        "Is there water in the bottle",
        "Is there water in the bottle?",
      ],
      explanation:
        "Исправление: Is there water in the bottle? — Неисчисляемое.",
      ariaLabel: "Исправьте 3",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="🎉 Упражнения по There is/There are">
        <p className="text-zinc-700 leading-relaxed">
          Проверим ваши знания! Выполните все упражнения.
        </p>
      </UiSection>

      <CheckableExercise
        title="📝 Упражнение 1: Выберите правильную форму"
        instruction="Вставьте правильное выражение."
        items={exercise1}
      />

      <CheckableExercise
        title="📝 Упражнение 2: Заполните пропуски"
        instruction="Вставьте There is, There are или Is there."
        items={exercise2}
      />

      <CheckableExercise
        title="📝 Упражнение 3: Сделайте отрицания"
        instruction="Переделайте предложения в отрицательные."
        items={exercise3}
      />

      <CheckableExercise
        title="📝 Упражнение 4: Переведите"
        instruction="Переведите с русского на английский."
        items={exercise4}
      />

      <CheckableExercise
        title="📝 Упражнение 5: Исправьте ошибки"
        instruction="Найдите ошибки в предложениях и напишите правильный вариант целиком."
        items={exercise5}
      />
    </>
  );
}

/* ===== СТРАНИЦА 10: Чтение и True/False ===== */
function Step10() {
  const [showTranslation, setShowTranslation] = React.useState(false);

  const trueFalseItems: FillItem[] = [
    {
      left: "1. There is a table in the classroom.",
      right: "",
      answers: ["True", "true", "TRUE", "Правда", "правда"],
      explanation: "Ответ: True — There is a table in the room.",
      ariaLabel: "Задание 1",
      wide: true,
    },
    {
      left: "2. There are five chairs near the table.",
      right: "",
      answers: ["False", "false", "FALSE", "Ложь", "ложь"],
      explanation: "Ответ: False — There are three chairs (не пять).",
      ariaLabel: "Задание 2",
      wide: true,
    },
    {
      left: "3. There is a cat in the classroom.",
      right: "",
      answers: ["False", "false", "FALSE", "Ложь", "ложь"],
      explanation: "Ответ: False — There isn't a cat in the classroom.",
      ariaLabel: "Задание 3",
      wide: true,
    },
    {
      left: "4. There are students in the class.",
      right: "",
      answers: ["True", "true", "TRUE", "Правда", "правда"],
      explanation: "Ответ: True — There are some students in the class.",
      ariaLabel: "Задание 4",
      wide: true,
    },
    {
      left: "5. There are books on the shelf.",
      right: "",
      answers: ["False", "false", "FALSE", "Ложь", "ложь"],
      explanation: "Ответ: False — No, there aren't any books on the shelf.",
      ariaLabel: "Задание 5",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="Текст для чтения: My Classroom">
        <div className="bg-blue-50/50 rounded-lg p-6 mb-4">
          <p className="text-zinc-900 leading-relaxed">
            My classroom is small. There is a table in the room. There is a book
            on the table. There are three chairs near the table. There isn't a
            cat in the classroom. There are some students in the class. Is there
            a teacher? Yes, there is a teacher. Are there books on the shelf?
            No, there aren't any books on the shelf.
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
              Мой класс маленький. В комнате есть стол. На столе есть книга.
              Рядом со столом три стула. В классе нет кошки. В классе есть
              несколько учеников. Есть учитель? Да, есть учитель. Есть книги на
              полке? Нет, на полке нет книг.
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
            Подчеркните there is/there are в тексте для поиска ответов. Обратите
            внимание на детали!
          </p>
        </div>
      </UiSection>

      <UiSection title="🎊 Отличная работа!">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Вы завершили весь курс "There is/There are: Существование"! Теперь вы
          можете:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Описывать существование предметов (There is a book)</li>
          <li>Говорить о множественном числе (There are books)</li>
          <li>Строить отрицания (There isn't/aren't)</li>
          <li>Задавать вопросы (Is there/Are there?)</li>
          <li>Понимать различия с русским языком</li>
        </ul>

        <div className="bg-indigo-50 rounded-lg p-4 mb-4">
          <p className="text-indigo-900 font-semibold mb-3">
            <strong>🔄 Повторение ключевых моментов:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>There is:</strong> Единственное/неисчисляемое (There is a
              book)
            </li>
            <li>
              <strong>There are:</strong> Множественное (There are books)
            </li>
            <li>
              <strong>Отрицания:</strong> There isn't/aren't (There isn't a cat)
            </li>
            <li>
              <strong>Вопросы:</strong> Is there/Are there? (Is there a book?)
            </li>
            <li>
              <strong>Отличия от русского:</strong> Обязательные there is/are,
              артикли, строгий порядок
            </li>
            <li>
              <strong>Произношение:</strong> There is [ðɛər ɪz], There are [ðɛər
              ɑːr]
            </li>
          </ul>
        </div>

        <div className="bg-green-50 rounded-lg p-4">
          <p className="text-green-900 font-semibold mb-2">
            💡 Советы для практики:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Описывайте свою комнату используя there is/there are</li>
            <li>Не забывайте артикли a/an для единственного числа!</li>
            <li>Практикуйте произношение [ðɛər] — это важно</li>
            <li>Помните: there is/are обязательно в английском!</li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}




