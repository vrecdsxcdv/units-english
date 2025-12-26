"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function VerbsInfinitive({ step }: Props) {
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

/* ===== СТРАНИЦА 1: Введение ===== */
function Step1() {
  return (
    <>
      <UiSection title="Что такое глаголы с -ing или инфинитивом с to?">
        <p className="text-zinc-700 leading-relaxed mb-4">
          В английском языке после некоторых глаголов используется форма{" "}
          <strong>глагол + -ing</strong> (I like swimming), а после других —{" "}
          <strong>инфинитив с to</strong> (I want to swim). Это зависит от
          главного глагола в предложении.
        </p>

        <div className="space-y-3 mb-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-indigo-900 mb-2">
              Глаголы с -ing:
            </p>
            <p className="text-sm text-zinc-700">
              Используются после глаголов чувств, привычек или процессов (like,
              enjoy, hate) → <strong>I enjoy swimming.</strong> (Я люблю
              плавать.)
            </p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-green-900 mb-2">
              Глаголы с to инфинитивом:
            </p>
            <p className="text-sm text-zinc-700">
              Используются после глаголов желаний, намерений или целей (want,
              need, plan) → <strong>I want to swim.</strong> (Я хочу плавать.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Зачем нужна эта тема?">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Помогает правильно строить предложения: I enjoy playing football. /
            I want to play football.
          </li>
          <li>
            Учит выбирать правильную форму после глагола (-ing или to + глагол).
          </li>
          <li>Закрепляет навыки для естественной речи и письма.</li>
        </ul>
      </UiSection>

      <UiSection title="Ключевые особенности">
        <div className="bg-amber-50/50 rounded-lg p-4 mb-4">
          <p className="font-semibold mb-2">Формулы:</p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>С -ing:</strong> Подлежащее + глагол + глагол + -ing
              <br />
              Пример: I enjoy swimming.
            </li>
            <li>
              <strong>С to:</strong> Подлежащее + глагол + to + глагол
              (начальная форма)
              <br />
              Пример: I want to swim.
            </li>
          </ul>
        </div>

        <div className="bg-sky-50/50 rounded-lg p-4 mb-4">
          <p className="font-semibold mb-2">Произношение:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>-ing [ɪŋ] — звучит как «инг»</li>
            <li>To [tu] — короткое, перед гласной [tə]</li>
          </ul>
        </div>

        <div className="bg-rose-50/50 rounded-lg p-4">
          <p className="font-semibold mb-2">Правила добавления -ing:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Обычные глаголы: play → playing</li>
            <li>На -e: убираем e (write → writing)</li>
            <li>Короткая гласная + согласная: удваиваем (run → running)</li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Примеры для понимания">
        <div className="space-y-3">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="text-sm text-zinc-700">
              <strong>-ing:</strong> I like swimming. (Я люблю плавать,
              процесс.)
            </p>
          </div>
          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="text-sm text-zinc-700">
              <strong>to:</strong> I want to swim. (Я хочу поплавать, цель.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка для русскоязычных">
        <div className="bg-yellow-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              В русском «я люблю плавать» и «я хочу плавать» не различают форму
              глагола, в английском нужна чёткая форма (-ing или to + глагол).
            </li>
            <li>
              Русскоязычные часто путают формы: I like to swim вместо I like
              swimming.
            </li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 2: Лексика ===== */
function Step2() {
  return (
    <>
      <UiSection title="Лексика для глаголов с -ing и to инфинитивом">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Вот список из <strong>20 ключевых слов</strong> для уровня A1-A2:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white/50 rounded-lg p-3 border">
            <p className="text-sm">
              <strong>Like</strong> [laɪk] — Любить
            </p>
          </div>
          <div className="bg-white/50 rounded-lg p-3 border">
            <p className="text-sm">
              <strong>Love</strong> [lʌv] — Обожать
            </p>
          </div>
          <div className="bg-white/50 rounded-lg p-3 border">
            <p className="text-sm">
              <strong>Enjoy</strong> [ɪnˈdʒɔɪ] — Наслаждаться
            </p>
          </div>
          <div className="bg-white/50 rounded-lg p-3 border">
            <p className="text-sm">
              <strong>Hate</strong> [heɪt] — Ненавидеть
            </p>
          </div>
          <div className="bg-white/50 rounded-lg p-3 border">
            <p className="text-sm">
              <strong>Want</strong> [wɒnt] — Хотеть
            </p>
          </div>
          <div className="bg-white/50 rounded-lg p-3 border">
            <p className="text-sm">
              <strong>Need</strong> [niːd] — Нуждаться
            </p>
          </div>
          <div className="bg-white/50 rounded-lg p-3 border">
            <p className="text-sm">
              <strong>Plan</strong> [plæn] — Планировать
            </p>
          </div>
          <div className="bg-white/50 rounded-lg p-3 border">
            <p className="text-sm">
              <strong>Try</strong> [traɪ] — Пытаться
            </p>
          </div>

          <div className="bg-indigo-50/50 rounded-lg p-3 border border-indigo-200">
            <p className="text-sm">
              <strong>Play</strong> [pleɪ] → <strong>Playing</strong> [ˈpleɪɪŋ]
            </p>
            <p className="text-xs text-zinc-600">Играть → Играя</p>
          </div>
          <div className="bg-indigo-50/50 rounded-lg p-3 border border-indigo-200">
            <p className="text-sm">
              <strong>Swim</strong> [swɪm] → <strong>Swimming</strong> [ˈswɪmɪŋ]
            </p>
            <p className="text-xs text-zinc-600">Плавать → Плавая</p>
          </div>
          <div className="bg-indigo-50/50 rounded-lg p-3 border border-indigo-200">
            <p className="text-sm">
              <strong>Run</strong> [rʌn] → <strong>Running</strong> [ˈrʌnɪŋ]
            </p>
            <p className="text-xs text-zinc-600">Бегать → Бегущий</p>
          </div>
          <div className="bg-indigo-50/50 rounded-lg p-3 border border-indigo-200">
            <p className="text-sm">
              <strong>Read</strong> [riːd] → <strong>Reading</strong> [ˈriːdɪŋ]
            </p>
            <p className="text-xs text-zinc-600">Читать → Читая</p>
          </div>
          <div className="bg-indigo-50/50 rounded-lg p-3 border border-indigo-200">
            <p className="text-sm">
              <strong>Dance</strong> [dæns] → <strong>Dancing</strong> [ˈdænsɪŋ]
            </p>
            <p className="text-xs text-zinc-600">Танцевать → Танцуя</p>
          </div>

          <div className="bg-green-50/50 rounded-lg p-3 border border-green-200">
            <p className="text-sm">
              <strong>Book</strong> [bʊk] — Книга
            </p>
          </div>
          <div className="bg-green-50/50 rounded-lg p-3 border border-green-200">
            <p className="text-sm">
              <strong>Football</strong> [ˈfʊtbɔːl] — Футбол
            </p>
          </div>
          <div className="bg-green-50/50 rounded-lg p-3 border border-green-200">
            <p className="text-sm">
              <strong>Music</strong> [ˈmjuːzɪk] — Музыка
            </p>
          </div>
          <div className="bg-green-50/50 rounded-lg p-3 border border-green-200">
            <p className="text-sm">
              <strong>Today</strong> [təˈdeɪ] — Сегодня
            </p>
          </div>
          <div className="bg-green-50/50 rounded-lg p-3 border border-green-200">
            <p className="text-sm">
              <strong>Tomorrow</strong> [təˈmɒroʊ] — Завтра
            </p>
          </div>
          <div className="bg-green-50/50 rounded-lg p-3 border border-green-200">
            <p className="text-sm">
              <strong>Friend</strong> [frend] — Друг
            </p>
          </div>
          <div className="bg-green-50/50 rounded-lg p-3 border border-green-200">
            <p className="text-sm">
              <strong>School</strong> [skuːl] — Школа
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Примеры использования">
        <div className="space-y-3">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="text-sm text-zinc-700">
              <strong>-ing:</strong> I like playing football. (Я люблю играть в
              футбол.)
            </p>
          </div>
          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="text-sm text-zinc-700">
              <strong>to инфинитив:</strong> I want to play football. (Я хочу
              играть в футбол.)
            </p>
          </div>
        </div>
      </UiSection>

      <UiSection title="Как запомнить?">
        <ul className="list-disc pl-5 space-y-2">
          <li>Повторяйте с аудио (like [laɪk], swimming [ˈswɪmɪŋ]).</li>
          <li>Составляйте предложения: I enjoy dancing. / I plan to dance.</li>
          <li>Карточки: глагол + форма (-ing или to) + пример.</li>
        </ul>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 3: Глаголы с -ing ===== */
function Step3() {
  return (
    <>
      <UiSection title="Глаголы с -ing">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Глаголы с <strong>-ing</strong> используются после глаголов, связанных
          с чувствами, предпочтениями или процессами (like, love, enjoy, hate).
        </p>

        <div className="bg-amber-50/50 rounded-lg p-4 mb-4">
          <p className="font-semibold mb-2">Основные глаголы с -ing (A1-A2):</p>
          <ol className="list-decimal pl-5 space-y-2 text-sm">
            <li>
              <strong>Like</strong> — Любить: I like reading books. (Я люблю
              читать книги.)
            </li>
            <li>
              <strong>Love</strong> — Обожать: She loves dancing. (Она обожает
              танцевать.)
            </li>
            <li>
              <strong>Enjoy</strong> — Наслаждаться: We enjoy playing football.
              (Мы наслаждаемся игрой в футбол.)
            </li>
            <li>
              <strong>Hate</strong> — Ненавидеть: He hates running. (Он
              ненавидит бегать.)
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <div className="bg-sky-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Формула:</strong> Подлежащее + глагол + глагол + -ing
            </li>
            <li>
              <strong>Произношение:</strong> -ing [ɪŋ], акцент на главном
              глаголе (I LOVE dancing)
            </li>
            <li>
              <strong>Временные слова:</strong> always, every day, sometimes (но
              не обязательно)
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            I like swimming in the sea. (Я люблю плавать в море.) — Отдых.
          </li>
          <li>
            She enjoys reading books. (Она наслаждается чтением книг.) — Хобби.
          </li>
          <li>
            We hate running in the morning. (Мы ненавидим бегать по утрам.) —
            Спорт.
          </li>
        </ul>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <div className="text-red-600">
                ❌ НЕ после глаголов желаний/целей: I want swimming.
              </div>
              <div className="text-green-600">
                ✅ Правильно: I want to swim.
              </div>
            </li>
            <li>
              <div className="text-red-600">
                ❌ НЕ после to: I like to swimming.
              </div>
              <div className="text-green-600">
                ✅ Правильно: I like swimming.
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-yellow-50/50 rounded-lg p-4">
          <p className="text-sm">
            Русскоязычные добавляют to после like (I like to swim вместо I like
            swimming), так как в русском нет аналога -ing.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 4: Глаголы с to инфинитивом ===== */
function Step4() {
  return (
    <>
      <UiSection title="Глаголы с to инфинитивом">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Глаголы с <strong>to + глагол</strong> используются после глаголов,
          связанных с желаниями, намерениями или целями (want, need, plan, try).
        </p>

        <div className="bg-amber-50/50 rounded-lg p-4 mb-4">
          <p className="font-semibold mb-2">Основные глаголы с to (A1-A2):</p>
          <ol className="list-decimal pl-5 space-y-2 text-sm">
            <li>
              <strong>Want</strong> — Хотеть: I want to learn English. (Я хочу
              выучить английский.)
            </li>
            <li>
              <strong>Need</strong> — Нуждаться: She needs to read this book.
              (Ей нужно прочитать эту книгу.)
            </li>
            <li>
              <strong>Plan</strong> — Планировать: We plan to visit Paris. (Мы
              планируем посетить Париж.)
            </li>
            <li>
              <strong>Try</strong> — Пытаться: He tries to run faster. (Он
              пытается бежать быстрее.)
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <div className="bg-sky-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Формула:</strong> Подлежащее + глагол + to + глагол
              (начальная форма)
            </li>
            <li>
              <strong>Произношение:</strong> To [tu] или [tə], акцент на втором
              глаголе (I want to LEARN)
            </li>
            <li>
              <strong>Временные слова:</strong> tomorrow, next week (но не
              обязательно)
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Примеры из жизни">
        <ul className="list-disc pl-5 space-y-2">
          <li>I want to travel. (Я хочу путешествовать.) — Мечта.</li>
          <li>She needs to study. (Ей нужно учиться.) — Школа.</li>
          <li>
            We plan to play football. (Мы планируем играть в футбол.) — Досуг.
          </li>
        </ul>
      </UiSection>

      <UiSection title="Когда НЕ использовать?">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <div className="text-red-600">
                ❌ НЕ после глаголов чувств: I enjoy to swim.
              </div>
              <div className="text-green-600">
                ✅ Правильно: I enjoy swimming.
              </div>
            </li>
            <li>
              <div className="text-red-600">❌ НЕ без to: I want swim.</div>
              <div className="text-green-600">
                ✅ Правильно: I want to swim.
              </div>
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-yellow-50/50 rounded-lg p-4">
          <p className="text-sm">
            Русскоязычные пропускают to (I want swim вместо I want to swim), так
            как в русском инфинитив без частицы.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 5: Сравнение -ing и to ===== */
function Step5() {
  return (
    <>
      <UiSection title="Сравнение -ing и to инфинитива">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Давайте разберём разницу между -ing и to инфинитивом:
        </p>

        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-2 text-left">Форма</th>
                <th className="border border-gray-300 p-2 text-left">Глагол</th>
                <th className="border border-gray-300 p-2 text-left">Пример</th>
                <th className="border border-gray-300 p-2 text-left">Когда?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">-ing</td>
                <td className="border border-gray-300 p-2">Like</td>
                <td className="border border-gray-300 p-2">I like swimming.</td>
                <td className="border border-gray-300 p-2">Чувства/процесс</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">to Infinitive</td>
                <td className="border border-gray-300 p-2">Want</td>
                <td className="border border-gray-300 p-2">I want to swim.</td>
                <td className="border border-gray-300 p-2">Желание/цель</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-3 mb-4">
          <div className="bg-indigo-50/50 rounded-lg p-4">
            <p className="font-semibold text-indigo-900 mb-2">
              -ing: После глаголов чувств/процессов
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>I like playing football. (Мне нравится процесс.)</li>
              <li>She enjoys dancing. (Ей нравится процесс.)</li>
            </ul>
          </div>

          <div className="bg-green-50/50 rounded-lg p-4">
            <p className="font-semibold text-green-900 mb-2">
              to Infinitive: После глаголов желаний/целей
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>I want to play football. (Я хочу сыграть.)</li>
              <li>She plans to dance. (Она планирует танцевать.)</li>
            </ul>
          </div>
        </div>
      </UiSection>

      <UiSection title="Правила">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ol className="list-decimal pl-5 space-y-2 text-sm">
            <li>
              <strong>-ing:</strong> Для описания процесса или предпочтений
            </li>
            <li>
              <strong>to Infinitive:</strong> Для целей, намерений, желаний
            </li>
            <li>
              <strong>Произношение:</strong> -ing [ɪŋ], to [tu]
            </li>
          </ol>
        </div>
      </UiSection>

      <UiSection title="Типичные ошибки">
        <div className="bg-red-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <div className="text-red-600">❌ Wrong: I like to swim.</div>
              <div className="text-green-600">✅ Right: I like swimming.</div>
            </li>
            <li>
              <div className="text-red-600">❌ Wrong: I want swimming.</div>
              <div className="text-green-600">✅ Right: I want to swim.</div>
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-yellow-50/50 rounded-lg p-4">
          <p className="text-sm">
            Русский «я люблю плавать» не различает процесс и цель, английский
            требует -ing для процесса, to для цели.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 6: Типичные ошибки ===== */
function Step6() {
  return (
    <>
      <UiSection title="Типичные ошибки русскоязычных">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Давайте разберём самые частые ошибки:
        </p>

        <div className="space-y-4">
          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-red-900 mb-2">
              1. Путаница -ing и to:
            </p>
            <div className="space-y-2 text-sm">
              <div>
                <div className="text-red-600">❌ Wrong: I like to swim.</div>
                <div className="text-green-600">
                  ✅ Right: I like swimming. (Процесс.)
                </div>
              </div>
              <div>
                <div className="text-red-600">❌ Wrong: I want swimming.</div>
                <div className="text-green-600">
                  ✅ Right: I want to swim. (Цель.)
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-red-900 mb-2">2. Пропуск to:</p>
            <div className="space-y-2 text-sm">
              <div className="text-red-600">❌ Wrong: I want swim.</div>
              <div className="text-green-600">✅ Right: I want to swim.</div>
            </div>
          </div>

          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-red-900 mb-2">
              3. Неправильное -ing:
            </p>
            <div className="space-y-2 text-sm">
              <div className="text-red-600">❌ Wrong: I enjoy swiming.</div>
              <div className="text-green-600">
                ✅ Right: I enjoy swimming. (удваиваем m)
              </div>
            </div>
          </div>

          <div className="bg-red-50/50 rounded-lg p-4">
            <p className="font-semibold text-red-900 mb-2">
              4. Путаница с глаголами:
            </p>
            <div className="space-y-2 text-sm">
              <div className="text-red-600">❌ Wrong: I plan swimming.</div>
              <div className="text-green-600">✅ Right: I plan to swim.</div>
            </div>
          </div>
        </div>
      </UiSection>

      <UiSection title="Почему так происходит?">
        <div className="bg-amber-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              В русском «плавать» не меняет форму после «люблю» или «хочу», в
              английском нужны разные конструкции (-ing или to).
            </li>
            <li>
              Русскоязычные забывают -ing или to, так как в русском нет
              аналогов.
            </li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="Сравнительная таблица ошибок">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-2 text-left">Ошибка</th>
                <th className="border border-gray-300 p-2 text-left">
                  Правильно
                </th>
                <th className="border border-gray-300 p-2 text-left">
                  Почему?
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">I like to swim.</td>
                <td className="border border-gray-300 p-2">I like swimming.</td>
                <td className="border border-gray-300 p-2">
                  Процесс требует -ing
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">I want swim.</td>
                <td className="border border-gray-300 p-2">I want to swim.</td>
                <td className="border border-gray-300 p-2">Цель требует to</td>
              </tr>
            </tbody>
          </table>
        </div>
      </UiSection>

      <UiSection title="Культурная заметка">
        <div className="bg-yellow-50/50 rounded-lg p-4">
          <p className="text-sm">
            Русскоязычные используют to после like по аналогии с want, но like
            swimming звучит естественнее.
          </p>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 7: Упражнения часть 1 ===== */
function Step7() {
  const exercise1: FillItem[] = [
    {
      left: "I like",
      right: "football. (play)",
      answers: ["playing"],
      explanation: "Правильно: playing. После like используется глагол с -ing.",
      ariaLabel: "Упражнение 1",
    },
    {
      left: "I want",
      right: "English. (learn)",
      answers: ["to learn"],
      explanation: "Правильно: to learn. После want используется to + глагол.",
      ariaLabel: "Упражнение 2",
    },
    {
      left: "She enjoys",
      right: "music. (listen)",
      answers: ["listening", "listening to"],
      explanation: "Правильно: listening (to). После enjoy используется глагол с -ing. Не забудьте убрать -e из listen.",
      ariaLabel: "Упражнение 3",
    },
    {
      left: "We hate",
      right: "in the morning. (run)",
      answers: ["running"],
      explanation: "Правильно: running. После hate используется глагол с -ing. Не забудьте удвоить n.",
      ariaLabel: "Упражнение 4",
    },
    {
      left: "He plans",
      right: "to Paris. (travel)",
      answers: ["to travel"],
      explanation: "Правильно: to travel. После plan используется to + глагол.",
      ariaLabel: "Упражнение 5",
    },
  ];

  const exercise2: FillItem[] = [
    {
      left: "1. I like playing football. → (отрицание)",
      right: "",
      answers: [
        "I don't like playing football",
        "I don't like playing football.",
      ],
      explanation: "Ответ: I don't like playing football.",
      ariaLabel: "Отрицание 1",
      wide: true,
    },
    {
      left: "2. I want to learn English. → (отрицание)",
      right: "",
      answers: [
        "I don't want to learn English",
        "I don't want to learn English.",
      ],
      explanation: "Ответ: I don't want to learn English.",
      ariaLabel: "Отрицание 2",
      wide: true,
    },
    {
      left: "3. She enjoys dancing. → (отрицание)",
      right: "",
      answers: ["She doesn't enjoy dancing", "She doesn't enjoy dancing."],
      explanation: "Ответ: She doesn't enjoy dancing.",
      ariaLabel: "Отрицание 3",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="🎯 Упражнение 1: Заполните пропуски">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Вставьте глагол из скобок в правильной форме: либо с окончанием <strong>-ing</strong>, либо с частицей <strong>to</strong> перед глаголом.
        </p>
        <div className="bg-amber-50/50 rounded-lg p-3 mb-4">
          <p className="text-sm text-zinc-700">
            💡 <strong>Подсказка:</strong> Глаголы <strong>like, enjoy, hate</strong> требуют <strong>-ing</strong>. 
            Глаголы <strong>want, plan</strong> требуют <strong>to + глагол</strong>.
          </p>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Заполните пропуски"
        instruction="Вставьте глагол из скобок в форме -ing или to + глагол (например: playing или to play)."
        items={exercise1}
      />

      <CheckableExercise
        title="📝 Упражнение 2: Сделайте отрицания"
        instruction="Переделайте утвердительные предложения в отрицательные, используя don't/doesn't."
        items={exercise2}
      />

      <UiSection title="💡 Напоминание">
        <div className="bg-blue-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Like, love, enjoy, hate:</strong> всегда используют глагол с <strong>-ing</strong>
            </li>
            <li>
              <strong>Want, need, plan, try:</strong> всегда используют <strong>to + глагол</strong>
            </li>
            <li>
              <strong>Важно:</strong> Не забывайте правила добавления -ing (listen → listening, run → running)!
            </li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 8: Упражнения часть 2 ===== */
function Step8() {
  const exercise1: FillItem[] = [
    {
      left: "1. I like playing football. → (вопрос)",
      right: "",
      answers: ["Do I like playing football", "Do I like playing football?"],
      explanation: "Ответ: Do I like playing football?",
      ariaLabel: "Вопрос 1",
      wide: true,
    },
    {
      left: "2. I want to learn English. → (вопрос)",
      right: "",
      answers: ["Do I want to learn English", "Do I want to learn English?"],
      explanation: "Ответ: Do I want to learn English?",
      ariaLabel: "Вопрос 2",
      wide: true,
    },
    {
      left: "3. She enjoys dancing. → (вопрос)",
      right: "",
      answers: ["Does she enjoy dancing", "Does she enjoy dancing?"],
      explanation: "Ответ: Does she enjoy dancing?",
      ariaLabel: "Вопрос 3",
      wide: true,
    },
  ];

  const exercise2: FillItem[] = [
    {
      left: "1. Я люблю играть в футбол. →",
      right: "",
      answers: ["I like playing football", "I like playing football."],
      explanation: "Ответ: I like playing football.",
      ariaLabel: "Перевод 1",
      wide: true,
    },
    {
      left: "2. Я хочу выучить английский. →",
      right: "",
      answers: ["I want to learn English", "I want to learn English."],
      explanation: "Ответ: I want to learn English.",
      ariaLabel: "Перевод 2",
      wide: true,
    },
    {
      left: "3. Она ненавидит бегать. →",
      right: "",
      answers: ["She hates running", "She hates running."],
      explanation: "Ответ: She hates running.",
      ariaLabel: "Перевод 3",
      wide: true,
    },
  ];

  const exercise3: FillItem[] = [
    {
      left: "1. ❌ I like to swiming. →",
      right: "",
      answers: ["I like swimming", "I like swimming."],
      explanation:
        "Исправление: I like swimming. — -ing после like, правильно swimming.",
      ariaLabel: "Исправьте 1",
      wide: true,
    },
    {
      left: "2. ❌ I want swim. →",
      right: "",
      answers: ["I want to swim", "I want to swim."],
      explanation: "Исправление: I want to swim. — to после want.",
      ariaLabel: "Исправьте 2",
      wide: true,
    },
    {
      left: "3. ❌ She enjoys to dance. →",
      right: "",
      answers: ["She enjoys dancing", "She enjoys dancing."],
      explanation: "Исправление: She enjoys dancing. — -ing после enjoy.",
      ariaLabel: "Исправьте 3",
      wide: true,
    },
  ];

  return (
    <>
      <CheckableExercise
        title="📝 Упражнение 1: Задайте вопросы"
        instruction="Переделайте утверждения в вопросительные предложения."
        items={exercise1}
      />

      <CheckableExercise
        title="📝 Упражнение 2: Переведите на английский"
        instruction="Переведите предложения с русского на английский."
        items={exercise2}
      />

      <CheckableExercise
        title="📝 Упражнение 3: Исправьте ошибки"
        instruction="Найдите и исправьте ошибки в предложениях."
        items={exercise3}
      />

      <UiSection title="💡 Напоминание">
        <div className="bg-blue-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong>Вопросы:</strong> Do/Does + подлежащее + глагол + -ing/to?
            </li>
            <li>
              <strong>Важно:</strong> Форма после глагола остается той же в
              вопросах!
            </li>
            <li>
              <strong>-ing:</strong> Не забывайте правила (swim → swimming)
            </li>
          </ul>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 9: Домашнее задание ===== */
function Step9() {
  return (
    <>
      <UiSection title="📚 Домашнее задание: Выучите лексику">
        <p className="text-zinc-700 leading-relaxed mb-4">
          Задание: Выучите 20 слов из списка на странице 2.
        </p>

        <div className="bg-indigo-50/50 rounded-lg p-4 mb-4">
          <p className="font-semibold text-indigo-900 mb-3">
            Как выполнять задание:
          </p>
          <ol className="list-decimal pl-5 space-y-3 text-sm">
            <li>
              <strong>Повторение:</strong> Прочитайте каждое слово вслух 3 раза
              (like [laɪk], swimming [ˈswɪmɪŋ]). Используйте аудио на сайте.
            </li>
            <li>
              <strong>Карточки:</strong> Напишите слова на карточках (английское
              слово + перевод + пример). Проверяйте себя.
            </li>
            <li>
              <strong>Предложения:</strong> Составьте 10 предложений:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>5 с -ing: I enjoy dancing.</li>
                <li>3 с to инфинитивом: I want to learn.</li>
                <li>2 вопроса: Do you like running?</li>
              </ul>
            </li>
            <li>
              <strong>Диалог:</strong> Напишите диалог (5-6 реплик) с минимум 5
              словами из списка.
            </li>
          </ol>
        </div>

        <div className="bg-green-50/50 rounded-lg p-4 mb-4">
          <p className="font-semibold text-green-900 mb-2">Пример диалога:</p>
          <div className="space-y-2 text-sm">
            <p>
              <strong>A:</strong> Do you like playing football?
            </p>
            <p>
              <strong>B:</strong> Yes, I love playing football.
            </p>
            <p>
              <strong>A:</strong> Do you want to play tomorrow?
            </p>
            <p>
              <strong>B:</strong> Yes, I want to play!
            </p>
          </div>
        </div>

        <div className="bg-amber-50/50 rounded-lg p-4">
          <p className="font-semibold text-amber-900 mb-2">Советы:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Практикуйте в реальных ситуациях (опишите, что любите или хотите).
            </li>
            <li>Проверяйте произношение (-ing [ɪŋ], to [tu]).</li>
            <li>Повторяйте слова каждый день по 10-15 минут.</li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="✍️ Задание для самопроверки">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="font-semibold mb-3">Опишите свои хобби и планы:</p>
          <p className="text-sm text-zinc-700 mb-3">
            Напишите 5-7 предложений о том, что вам нравится делать и что вы
            хотите/планируете. Используйте слова из списка.
          </p>
          <div className="bg-gray-50 rounded p-3">
            <p className="text-sm text-zinc-600 italic">
              Пример: I like reading books. I enjoy playing football with my
              friends. I want to learn English. I plan to travel to London...
            </p>
          </div>
        </div>
      </UiSection>
    </>
  );
}

/* ===== СТРАНИЦА 10: Чтение и задания ===== */
function Step10() {
  const [showTranslation, setShowTranslation] = React.useState(false);

  const matchingItems: FillItem[] = [
    {
      left: "1. Любовь к игре в футбол",
      right: "",
      answers: ["D", "d"],
      explanation: "Ответ: D — I love playing football with my friends.",
      ariaLabel: "Сопоставление 1",
      wide: true,
    },
    {
      left: "2. Наслаждение бегом",
      right: "",
      answers: ["E", "e"],
      explanation: "Ответ: E — I enjoy running in the park every weekend.",
      ariaLabel: "Сопоставление 2",
      wide: true,
    },
    {
      left: "3. Нелюбовь к танцам",
      right: "",
      answers: ["B", "b"],
      explanation: "Ответ: B — I don't like dancing.",
      ariaLabel: "Сопоставление 3",
      wide: true,
    },
    {
      left: "4. Желание выучить английский",
      right: "",
      answers: ["A", "a"],
      explanation: "Ответ: A — I want to learn English because it's important.",
      ariaLabel: "Сопоставление 4",
      wide: true,
    },
    {
      left: "5. План сестры путешествовать",
      right: "",
      answers: ["C", "c"],
      explanation: "Ответ: C — She plans to travel to London next year.",
      ariaLabel: "Сопоставление 5",
      wide: true,
    },
    {
      left: "6. Отрицание желания читать книги",
      right: "",
      answers: ["F", "f"],
      explanation: "Ответ: F — No, she doesn't.",
      ariaLabel: "Сопоставление 6",
      wide: true,
    },
  ];

  return (
    <>
      <UiSection title="📖 Текст для чтения: My Hobbies and Plans">
        <div className="bg-blue-50/50 rounded-lg p-6 mb-4">
          <p className="text-zinc-900 leading-relaxed">
            I love playing football with my friends. I enjoy running in the park
            every weekend. I don't like dancing, but my sister loves it. I want
            to learn English because it's important. She plans to travel to
            London next year. Do we enjoy swimming? Yes, we do. Does she want to
            read books? No, she doesn't.
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
              Я люблю играть в футбол с друзьями. Я наслаждаюсь бегом в парке
              каждые выходные. Я не люблю танцевать, но моя сестра это обожает.
              Я хочу выучить английский, потому что это важно. Она планирует
              путешествовать в Лондон в следующем году. Любим ли мы плавать? Да,
              любим. Хочет ли она читать книги? Нет, не хочет.
            </p>
          </div>
        )}
      </UiSection>

      <UiSection title="📝 Варианты для сопоставления">
        <div className="bg-white rounded-lg border p-4 mb-4">
          <p className="text-sm font-semibold mb-2">
            Сопоставьте утверждения с частями текста:
          </p>
          <ul className="list-none space-y-1 text-sm">
            <li>
              <strong>A.</strong> I want to learn English because it's
              important.
            </li>
            <li>
              <strong>B.</strong> I don't like dancing.
            </li>
            <li>
              <strong>C.</strong> She plans to travel to London next year.
            </li>
            <li>
              <strong>D.</strong> I love playing football with my friends.
            </li>
            <li>
              <strong>E.</strong> I enjoy running in the park every weekend.
            </li>
            <li>
              <strong>F.</strong> No, she doesn't.
            </li>
          </ul>
        </div>
      </UiSection>

      <CheckableExercise
        title="📝 Задание: Сопоставьте утверждения"
        instruction="Введите букву (A, B, C, D, E или F), соответствующую каждому утверждению."
        items={matchingItems}
      />

      <UiSection title="💡 Совет">
        <div className="bg-green-50/50 rounded-lg p-4">
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Подчеркните -ing и to в тексте для поиска ответов.</li>
            <li>Обратите внимание на глаголы (like → -ing, want → to).</li>
          </ul>
        </div>
      </UiSection>

      <UiSection title="🎉 Поздравляем!">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
          <p className="text-zinc-700 leading-relaxed mb-4">
            Вы завершили тему{" "}
            <strong>Глаголы с -ing или инфинитивом с to</strong>! Теперь вы
            знаете:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Когда использовать -ing (после like, enjoy, hate, love)</li>
            <li>Когда использовать to (после want, need, plan, try)</li>
            <li>Правила добавления -ing к глаголам</li>
            <li>Типичные ошибки русскоязычных и как их избегать</li>
          </ul>
          <div className="bg-indigo-50 rounded-lg p-4">
            <p className="text-indigo-900 font-semibold mb-2">
              Продолжайте практиковаться!
            </p>
            <p className="text-sm">
              Запомните: like, love, enjoy, hate + -ing, а want, need, plan, try
              + to + глагол. Это поможет говорить естественно!
            </p>
          </div>
        </div>
      </UiSection>
    </>
  );
}
