"use client";
import React from "react";
import { Section } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

export default function Demonstratives({ step }: { step: number }) {
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

// Страница 1: Базовое введение
function Step1() {
  return (
    <div className="space-y-6">
      <Section title="Что такое указательные местоимения? (What are Demonstrative Pronouns?)">
        <div className="space-y-4 text-base leading-relaxed">
          <p>
            <b>Указательные местоимения (Demonstrative Pronouns)</b> — это
            слова, которые заменяют существительные, чтобы указать на конкретные
            предметы, людей или места. Они помогают показать, о чем идет речь,
            без повторения существительного. В английском языке основные
            указательные местоимения — это <b>this, that, these, those</b>. Они
            зависят от <b>расстояния</b> (близко или далеко) и <b>числа</b>{" "}
            (единственное или множественное).
          </p>

          <div className="bg-zinc-50 p-4 rounded-lg border border-zinc-200">
            <h4 className="font-semibold text-gray-900 mb-2">Зачем нужны?</h4>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>
                Указывают на конкретный объект или человека (например, вместо
                "the book" — "this").
              </li>
              <li>Делают речь короче и естественнее.</li>
              <li>
                Показывают, близко или далеко находится объект (this/these —
                близко, that/those — далеко).
              </li>
            </ul>
          </div>

          <div className="bg-zinc-50 p-4 rounded-lg border border-zinc-200">
            <h4 className="font-semibold text-gray-900 mb-2">
              Ключевые слова для запоминания:
            </h4>
            <div className="space-y-2 text-gray-700">
              <p>
                • <b>This</b> [ðɪs] (зис) — для одного предмета/человека, близко
                (этот/эта/это).
              </p>
              <p>
                • <b>That</b> [ðæt] (зэт) — для одного предмета/человека, далеко
                (тот/та/то).
              </p>
              <p>
                • <b>These</b> [ðiːz] (зиз) — для нескольких предметов/людей,
                близко (эти).
              </p>
              <p>
                • <b>Those</b> [ðoʊz] (зоуз) — для нескольких предметов/людей,
                далеко (те).
              </p>
            </div>
          </div>

          <div className="bg-zinc-50 p-4 rounded-lg border border-zinc-200">
            <h4 className="font-semibold text-gray-900 mb-2">
              Пример для понимания:
            </h4>
            <p className="text-gray-700 mb-2">
              Вместо <i>"The book is on the table"</i> (Книга на столе) можно
              сказать: <b>"This is on the table"</b> (Это на столе), если книга
              рядом.
            </p>
            <p className="text-gray-900 font-semibold">
              Повтор: Указательные местоимения заменяют существительное и
              показывают расстояние/число.
            </p>
          </div>

          <div className="bg-indigo-50/30 p-4 rounded-lg border border-zinc-200/50">
            <h4 className="font-semibold text-gray-900 mb-2">
              💡 Культурная заметка:
            </h4>
            <p className="text-gray-700">
              В английском указательные местоимения <b>не меняются по роду</b>{" "}
              (gender), в отличие от русского ("этот/эта/это"). В разговорной
              речи носители часто используют this/that для акцента:{" "}
              <i>"This is my favorite!"</i> (Это мой фаворит!).
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Страница 2: Примеры предложений
function Step2() {
  return (
    <div className="space-y-6">
      <Section title="Примеры предложений с указательными местоимениями">
        <p className="text-base text-gray-600 mb-6">
          Вот простые примеры с this, that, these, those, чтобы показать, как
          они работают в реальной жизни. Каждый пример включает предложение на
          английском, перевод на русский и объяснение.
        </p>

        <div className="space-y-4">
          {/* Пример 1 */}
          <div className="p-4 bg-zinc-50 rounded-lg border border-zinc-200">
            <div className="font-semibold text-gray-900 mb-2">
              Пример 1: С <b>this</b> (для одного, близко)
            </div>
            <div className="mb-1">
              <span className="text-gray-700">• Предложение: </span>
              <span className="font-medium text-gray-900">This is my pen.</span>
            </div>
            <div className="mb-2">
              <span className="text-gray-700">• Перевод: </span>
              <span className="font-medium">Это моя ручка.</span>
            </div>
            <div className="text-sm text-gray-600">
              <b>Почему "this":</b> Заменяет существительное (pen) в
              единственном числе, если предмет близко к говорящему (например, в
              руке).
            </div>
          </div>

          {/* Пример 2 */}
          <div className="p-4 bg-zinc-50 rounded-lg border border-zinc-200">
            <div className="font-semibold text-gray-900 mb-2">
              Пример 2: С <b>that</b> (для одного, далеко)
            </div>
            <div className="mb-1">
              <span className="text-gray-700">• Предложение: </span>
              <span className="font-medium text-gray-900">
                That is your car.
              </span>
            </div>
            <div className="mb-2">
              <span className="text-gray-700">• Перевод: </span>
              <span className="font-medium">То твоя машина.</span>
            </div>
            <div className="text-sm text-gray-600">
              <b>Почему "that":</b> Заменяет существительное (car) в
              единственном числе, если предмет далеко от говорящего (например,
              на парковке).
            </div>
          </div>

          {/* Пример 3 */}
          <div className="p-4 bg-zinc-50 rounded-lg border border-zinc-200">
            <div className="font-semibold text-gray-900 mb-2">
              Пример 3: С <b>these</b> (для нескольких, близко)
            </div>
            <div className="mb-1">
              <span className="text-gray-700">• Предложение: </span>
              <span className="font-medium text-gray-900">
                These are my books.
              </span>
            </div>
            <div className="mb-2">
              <span className="text-gray-700">• Перевод: </span>
              <span className="font-medium">Это мои книги.</span>
            </div>
            <div className="text-sm text-gray-600">
              <b>Почему "these":</b> Множественное число, заменяет
              существительные (books), если предметы близко (например, на столе
              перед говорящим).
            </div>
          </div>

          {/* Пример 4 */}
          <div className="p-4 bg-zinc-50 rounded-lg border border-zinc-200">
            <div className="font-semibold text-gray-900 mb-2">
              Пример 4: С <b>those</b> (для нескольких, далеко)
            </div>
            <div className="mb-1">
              <span className="text-gray-700">• Предложение: </span>
              <span className="font-medium text-gray-900">
                Those are her shoes.
              </span>
            </div>
            <div className="mb-2">
              <span className="text-gray-700">• Перевод: </span>
              <span className="font-medium">То её туфли.</span>
            </div>
            <div className="text-sm text-gray-600">
              <b>Почему "those":</b> Заменяет существительные (shoes) во
              множественном числе, если предметы далеко (например, у двери).
            </div>
          </div>

          {/* Пример 5 */}
          <div className="p-4 bg-zinc-50 rounded-lg border border-zinc-200">
            <div className="font-semibold text-gray-900 mb-2">
              Пример 5: С <b>this</b> в разговоре (как дополнение)
            </div>
            <div className="mb-1">
              <span className="text-gray-700">• Предложение: </span>
              <span className="font-medium text-gray-900">I like this.</span>
            </div>
            <div className="mb-2">
              <span className="text-gray-700">• Перевод: </span>
              <span className="font-medium">Мне это нравится.</span>
            </div>
            <div className="text-sm text-gray-600">
              <b>Почему "this":</b> Заменяет конкретный предмет в единственном
              числе (например, платье, которое держит говорящий). Используется
              как объект после глагола (like).
            </div>
          </div>

          {/* Пример 6 */}
          <div className="p-4 bg-zinc-50 rounded-lg border border-zinc-200">
            <div className="font-semibold text-gray-900 mb-2">
              Пример 6: С <b>that</b> для акцента (разговорное)
            </div>
            <div className="mb-1">
              <span className="text-gray-700">• Предложение: </span>
              <span className="font-medium text-gray-900">
                That was awesome!
              </span>
            </div>
            <div className="mb-2">
              <span className="text-gray-700">• Перевод: </span>
              <span className="font-medium">Это было круто!</span>
            </div>
            <div className="text-sm text-gray-600">
              <b>Почему "that":</b> Заменяет событие или ситуацию (например,
              фильм, концерт), которая только что произошла. Употребляется для
              акцента, часто эмоционально.
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-indigo-50/30 border border-zinc-200/50 rounded-lg">
          <p className="font-semibold text-gray-900">
            📝 Повторение: This/these — для близких предметов
            (единственное/множественное). That/those — для дальних предметов
            (единственное/множественное).
          </p>
        </div>
      </Section>
    </div>
  );
}

// Страница 3: Подробное объяснение
function Step3() {
  return (
    <div className="space-y-6">
      <Section title="Подробное объяснение указательных местоимений (Detailed Explanation)">
        <div className="space-y-6">
          {/* Подшаг 3.1 */}
          <div className="border-l-4 border-indigo-600/30 bg-zinc-50 p-4 rounded-r-lg">
            <h4 className="text-lg font-bold text-gray-900 mb-3">
              Что такое This/That/These/Those и их роль
            </h4>
            <div className="space-y-3 text-gray-700">
              <p>
                <b>Что это?</b> Указательные местоимения (this, that, these,
                those) заменяют существительные, чтобы указать на конкретный
                предмет, человека или место. Они отвечают на вопрос "который?" и
                зависят от расстояния (близко/далеко) и числа (singular/plural).
              </p>

              <div className="bg-white p-3 rounded border border-zinc-200">
                <p className="font-semibold text-gray-900 mb-2">
                  Когда использовать:
                </p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>
                    <b>This</b> — один предмет/человек рядом (This is my dog. —
                    Это моя собака).
                  </li>
                  <li>
                    <b>That</b> — один предмет/человек далеко (That is your
                    house. — То твой дом).
                  </li>
                  <li>
                    <b>These</b> — несколько предметов/людей рядом (These are my
                    friends. — Это мои друзья).
                  </li>
                  <li>
                    <b>Those</b> — несколько предметов/людей далеко (Those are
                    his apples. — То его яблоки).
                  </li>
                </ul>
              </div>

              <div className="bg-white p-3 rounded border border-zinc-200">
                <p className="font-semibold text-gray-900 mb-2">
                  Роли в предложении:
                </p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>
                    Как подлежащее (subject): <i>This is nice.</i> (Это
                    классно.)
                  </li>
                  <li>
                    Как дополнение (object): <i>I want that.</i> (Я хочу то.)
                  </li>
                </ul>
              </div>

              <p className="text-gray-900 font-semibold">
                Повтор: Они заменяют существительное, чтобы избежать повтора.
              </p>
            </div>
          </div>

          {/* Правила */}
          <div className="bg-zinc-50 p-4 rounded-lg border border-zinc-200">
            <h4 className="font-semibold text-gray-900 mb-2">📋 Правила:</h4>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>
                This/these — для предметов/людей, физически или эмоционально
                близких (например, в руке, в разговоре).
              </li>
              <li>
                That/those — для предметов/людей, физически или эмоционально
                дальних (например, в другом конце комнаты, в прошлом).
              </li>
              <li>
                Не зависят от рода (gender): This для male, female, thing (в
                отличие от русского "этот/эта/это").
              </li>
              <li>
                <b>Произношение:</b> This [ðɪs] (зис), That [ðæt] (зэт), These
                [ðiːz] (зиз), Those [ðoʊz] (зоуз).
              </li>
            </ul>
          </div>

          {/* Примеры из жизни */}
          <div className="bg-zinc-50 p-4 rounded-lg border border-zinc-200">
            <h4 className="font-semibold text-gray-900 mb-2">
              🌍 Примеры из жизни:
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li>
                • <i>This is my phone.</i> (Это мой телефон.) — Держите телефон
                в руке.
              </li>
              <li>
                • <i>That is her bag.</i> (То её сумка.) — Сумка на стуле вдали.
              </li>
              <li>
                • <i>These are my keys.</i> (Это мои ключи.) — Ключи на столе
                рядом.
              </li>
              <li>
                • <i>Those are their bikes.</i> (То их велосипеды.) — Велосипеды
                у забора.
              </li>
            </ul>
          </div>

          {/* Когда НЕ использовать */}
          <div className="bg-zinc-50 p-4 rounded-lg border border-zinc-200">
            <h4 className="font-semibold text-gray-900 mb-2">
              ⚠️ Когда НЕ использовать:
            </h4>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>
                Не путайте с прилагательными: <i>"This book"</i> —
                прилагательное (стоит перед существительным).{" "}
                <i>"This is a book"</i> — местоимение (заменяет
                существительное).
              </li>
              <li>
                Не используйте для неконкретных вещей: ❌ Wrong: This is good
                weather; ✅ Right: The weather is good.
              </li>
            </ul>
          </div>

          {/* Культурная заметка */}
          <div className="bg-indigo-50/30 p-4 rounded-lg border border-zinc-200/50">
            <h4 className="font-semibold text-gray-900 mb-2">
              💡 Культурная заметка:
            </h4>
            <p className="text-gray-700">
              В разговорном английском <i>that</i> часто используется для
              акцента: <i>"That's the one!"</i> (Вот тот самый!). В русском
              такого эмоционального усиления через указательные местоимения
              меньше.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Страница 4: Сравнение с другими типами местоимений
function Step4() {
  return (
    <div className="space-y-6">
      <Section title="Сравнение указательных местоимений с другими типами (Comparing with Other Pronouns)">
        <div className="space-y-6">
          <div className="bg-zinc-50 p-4 rounded-lg border border-zinc-200">
            <h4 className="font-semibold text-indigo-900 mb-3">
              Что общего и что разного?
            </h4>
            <p className="text-gray-700 mb-3">
              <b>Что общего?</b> Указательные (this/that/these/those), личные
              (I/you/he), объектные (me/you/him) и притяжательные (my/your/his)
              местоимения заменяют существительные, чтобы избежать повтора. Все
              делают речь короче.
            </p>
          </div>

          {/* Типы местоимений */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border-l-4 border-indigo-600/30 bg-zinc-50/50 p-4 rounded-r-lg">
              <h5 className="font-bold text-gray-900 mb-2">
                Personal Pronouns (Личные)
              </h5>
              <p className="text-gray-700 text-sm">
                Для подлежащего, показывают, кто делает действие.
              </p>
              <p className="text-gray-900 font-medium mt-2">
                Пример: <i>She runs.</i> (Она бежит.)
              </p>
            </div>

            <div className="border-l-4 border-indigo-600/30 bg-zinc-50/50 p-4 rounded-r-lg">
              <h5 className="font-bold text-gray-900 mb-2">
                Object Pronouns (Объектные)
              </h5>
              <p className="text-gray-700 text-sm">
                Для дополнения, показывают, на кого направлено действие.
              </p>
              <p className="text-gray-900 font-medium mt-2">
                Пример: <i>See her.</i> (Видишь её.)
              </p>
            </div>

            <div className="border-l-4 border-indigo-600/30 bg-zinc-50/50 p-4 rounded-r-lg">
              <h5 className="font-bold text-gray-900 mb-2">
                Possessive Pronouns (Притяжательные)
              </h5>
              <p className="text-gray-700 text-sm">Показывают владение.</p>
              <p className="text-gray-900 font-medium mt-2">
                Пример: <i>My book.</i> (Моя книга.)
              </p>
            </div>

            <div className="border-l-4 border-indigo-500 bg-indigo-50/50 p-4 rounded-r-lg">
              <h5 className="font-bold text-indigo-900 mb-2">
                Demonstrative Pronouns (Указательные)
              </h5>
              <p className="text-gray-700 text-sm">
                Указывают на конкретный предмет/человека по расстоянию и числу.
              </p>
              <p className="text-indigo-900 font-medium mt-2">
                Пример: <i>This is my book.</i> (Это моя книга.)
              </p>
            </div>
          </div>

          {/* Словарь сравнений */}
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">
              📚 Vocabulary list (с произношением и переводом):
            </h4>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-gray-900">Personal:</p>
                <p className="text-gray-700">
                  • I [aɪ] (я: I read. — Я читаю.)
                </p>
                <p className="text-gray-700">
                  • You [juː] (ты: You sing. — Ты поёшь.)
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Object:</p>
                <p className="text-gray-700">
                  • me [miː] (меня: Help me. — Помоги мне.)
                </p>
                <p className="text-gray-700">
                  • you [juː] (тебя: Tell you. — Расскажу тебе.)
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Possessive:</p>
                <p className="text-gray-700">
                  • my [maɪ] (мой: My phone. — Мой телефон.)
                </p>
                <p className="text-gray-700">
                  • mine [maɪn] (мой: It's mine. — Это моё.)
                </p>
              </div>
              <div>
                <p className="font-semibold text-indigo-900">Demonstrative:</p>
                <p className="text-gray-700">
                  • this [ðɪs] (этот: This is cool. — Это круто.)
                </p>
                <p className="text-gray-700">
                  • that [ðæt] (тот: That is far. — То далеко.)
                </p>
                <p className="text-gray-700">
                  • these [ðiːz] (эти: These are mine. — Это мои.)
                </p>
                <p className="text-gray-700">
                  • those [ðoʊz] (те: Those are yours. — То твои.)
                </p>
              </div>
            </div>
          </div>

          {/* Типичные ошибки */}
          <div className="bg-zinc-50 p-4 rounded-lg border border-zinc-200">
            <h4 className="font-semibold text-gray-900 mb-3">
              ⚠️ Common mistakes (типичные ошибки):
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li>
                ❌ Wrong: <i>This are books.</i> (Неправильное число.) <br />✅
                Right: <i>These are books.</i>
              </li>
              <li>
                ❌ Wrong: <i>That book is nice.</i> (That как местоимение, а не
                прилагательное.) <br />✅ Right: <i>That is a nice book.</i>
              </li>
              <li>
                ❌ Wrong: <i>These is my friend.</i> (These для plural.) <br />
                ✅ Right: <i>This is my friend.</i>
              </li>
            </ul>
          </div>

          {/* Культурная заметка */}
          <div className="bg-indigo-50/30 p-4 rounded-lg border border-zinc-200/50">
            <h4 className="font-semibold text-gray-900 mb-2">
              💡 Культурная заметка:
            </h4>
            <p className="text-gray-700">
              В английском this/that часто используются в разговоре для
              эмоционального акцента (<i>"That's what I'm talking about!"</i> —
              Вот о чём я говорю!). В русском указательные местоимения реже
              несут такую эмоциональную нагрузку.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Страница 5: Практические советы и повторение
function Step5() {
  return (
    <div className="space-y-6">
      <Section title="Практические советы и повторение">
        <div className="space-y-6">
          {/* Ключевые моменты */}
          <div className="bg-indigo-50/30 border border-indigo-200/50 p-5 rounded-lg ">
            <h4 className="font-bold text-indigo-900 mb-3 text-lg">
              🔑 Ключевые моменты для запоминания:
            </h4>
            <ul className="space-y-2 text-gray-800">
              <li>
                • <b>This/these</b> — близко, <b>that/those</b> — далеко.
              </li>
              <li>
                • <b>This/that</b> — единственное число, <b>these/those</b> —
                множественное.
              </li>
              <li>
                • Местоимения заменяют существительное (<i>This is a pen</i>),
                прилагательные описывают (<i>This pen is nice</i>).
              </li>
              <li>• Не зависят от рода, в отличие от русского.</li>
            </ul>
          </div>

          {/* Советы для практики */}
          <div className="border-l-4 border-indigo-600/30 bg-zinc-50/50 p-4 rounded-r-lg">
            <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 bg-indigo-600 text-white rounded text-sm font-bold">
                💪
              </span>
              Советы для практики:
            </h4>
            <div className="space-y-3 text-gray-700">
              <p>
                1. <b>Слушайте аудио</b> с произношением: this [ðɪs], that
                [ðæt], these [ðiːz], those [ðoʊz].
              </p>
              <p>
                2. <b>Составляйте предложения:</b> Возьмите предмет рядом (This
                is my cup), вдали (That is your chair).
              </p>
              <p>
                3. <b>Упражнение:</b> Замените существительное местоимением.
                Пример: <i>The books are here</i> → <i>These are here.</i>
              </p>
            </div>
          </div>

          {/* Типичные ошибки */}
          <div className="border-l-4 border-zinc-300 bg-zinc-50/50 p-4 rounded-r-lg">
            <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 bg-zinc-600 text-white rounded text-sm font-bold">
                ⚠️
              </span>
              Типичные ошибки и как их избежать:
            </h4>
            <div className="space-y-3 text-gray-700">
              <p>
                • <b>Не путайте число:</b> These (не this) для множественного.
              </p>
              <p>
                • <b>Не используйте местоимение вместо прилагательного:</b>
                <br />❌ Wrong: <i>This is book</i>
                <br />✅ Right: <i>This is a book.</i>
              </p>
              <p>
                • <b>Проверяйте расстояние:</b> This для близкого, that для
                дальнего.
              </p>
            </div>
          </div>

          {/* Повторение всей темы */}
          <div className="bg-zinc-50 border border-zinc-200 p-5 rounded-lg ">
            <h4 className="font-bold text-gray-900 mb-3 text-lg">
              📝 Повторение всей темы:
            </h4>
            <p className="text-gray-800 leading-relaxed">
              <b>Указательные местоимения</b> (this, that, these, those)
              указывают на конкретные предметы или людей, заменяя
              существительные. Они зависят от <b>расстояния</b> (близко/далеко)
              и <b>числа</b> (singular/plural). Используйте как подлежащее (This
              is good) или дополнение (I like that). Не путайте с
              прилагательными (This book).
            </p>
          </div>

          {/* Визуальная схема */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-zinc-50 rounded-lg border border-zinc-200">
              <h5 className="font-bold text-gray-900 mb-2">
                👉 THIS (близко, 1)
              </h5>
              <p className="text-gray-700 text-sm">
                Книга в руке → <i>"This is my book."</i>
              </p>
            </div>
            <div className="p-4 bg-zinc-50 rounded-lg border border-zinc-200">
              <h5 className="font-bold text-gray-900 mb-2">
                👉 THAT (далеко, 1)
              </h5>
              <p className="text-gray-700 text-sm">
                Книга на полке вдали → <i>"That is my book."</i>
              </p>
            </div>
            <div className="p-4 bg-zinc-50 rounded-lg border border-zinc-200">
              <h5 className="font-bold text-gray-900 mb-2">
                👉 THESE (близко, 2+)
              </h5>
              <p className="text-gray-700 text-sm">
                Книги на столе рядом → <i>"These are my books."</i>
              </p>
            </div>
            <div className="p-4 bg-zinc-50 rounded-lg border border-zinc-200">
              <h5 className="font-bold text-gray-900 mb-2">
                👉 THOSE (далеко, 2+)
              </h5>
              <p className="text-gray-700 text-sm">
                Книги на полке вдали → <i>"Those are my books."</i>
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Страница 6: Упражнения
function Step6() {
  const exercise1: FillItem[] = [
    {
      left: "1.",
      right: "is my phone. (Телефон в руке говорящего.)",
      answers: ["This", "this"],
      explanation: "Телефон в руке (близко, единственное число).",
    },
    {
      left: "2.",
      right: "are your books. (Книги на полке вдали.)",
      answers: ["Those", "those"],
      explanation: "Книги на полке вдали (далеко, множественное число).",
    },
    {
      left: "3. I like",
      right: ". (Человек держит чашку кофе.)",
      answers: ["this", "This"],
      explanation: "Чашка кофе в руке (близко, единственное число).",
    },
    {
      left: "4.",
      right: "is her car. (Машина стоит на парковке далеко.)",
      answers: ["That", "that"],
      explanation: "Машина на парковке (далеко, единственное число).",
    },
    {
      left: "5.",
      right: "are my friends. (Друзья стоят рядом с говорящим.)",
      answers: ["These", "these"],
      explanation: "Друзья рядом (близко, множественное число).",
    },
  ];

  const exercise2: FillItem[] = [
    {
      left: "1.",
      right: "is my laptop. (Лэптоп на столе перед вами.)",
      answers: ["This", "this"],
      explanation: "Лэптоп рядом (близко, единственное число).",
    },
    {
      left: "2.",
      right: "are his shoes. (Туфли у двери вдали.)",
      answers: ["Those", "those"],
      explanation: "Туфли вдали (далеко, множественное число).",
    },
    {
      left: "3. I want",
      right: ". (Вы указываете на платье в магазине рядом.)",
      answers: ["this", "This"],
      explanation: "Платье рядом (близко, единственное число).",
    },
    {
      left: "4.",
      right: "is your house. (Дом виден на холме далеко.)",
      answers: ["That", "that"],
      explanation: "Дом далеко (далеко, единственное число).",
    },
    {
      left: "5.",
      right: "are our bikes. (Велосипеды стоят рядом с вами.)",
      answers: ["These", "these"],
      explanation: "Велосипеды рядом (близко, множественное число).",
    },
  ];

  const exercise3: FillItem[] = [
    {
      left: "1. Это мой кот. (Кот сидит рядом с вами.) →",
      right: "is my cat.",
      answers: ["This", "this"],
      explanation: "Кот рядом (this, единственное число).",
    },
    {
      left: "2. То его велосипед. (Велосипед стоит далеко.) →",
      right: "is his bike.",
      answers: ["That", "that"],
      explanation: "Велосипед далеко (that, единственное число).",
    },
    {
      left: "3. Эти мои книги. (Книги лежат на столе перед вами.) →",
      right: "are my books.",
      answers: ["These", "these"],
      explanation: "Книги рядом (these, множественное число).",
    },
    {
      left: "4. Те твои друзья. (Друзья стоят на другой стороне улицы.) →",
      right: "are your friends.",
      answers: ["Those", "those"],
      explanation: "Друзья далеко (those, множественное число).",
    },
    {
      left: "5. Мне нравится это. (Вы держите яблоко.) → I like",
      right: ".",
      answers: ["this", "This"],
      explanation: "Яблоко в руке (this, единственное число).",
    },
  ];

  return (
    <div className="space-y-6">
      <Section title="Упражнения по указательным местоимениям (Demonstrative Pronouns Exercises)">
        <p className="text-base text-gray-600 mb-4">
          Эти упражнения помогут вам закрепить использование указательных
          местоимений this, that, these, those. Выполняйте задания и проверяйте
          ответы, чтобы лучше понять, как указывать на предметы или людей,
          используя правильное местоимение.
        </p>
      </Section>

      <CheckableExercise
        title="Упражнение 1: Выберите правильное местоимение"
        instruction="Вставьте правильное указательное местоимение (this, that, these, those). Ориентируйтесь на расстояние (близко/далеко) и число (единственное/множественное)."
        items={exercise1}
      />

      <CheckableExercise
        title="Упражнение 2: Заполните пропуски"
        instruction="Вставьте правильное указательное местоимение (this, that, these, those) в пропуски. Подумайте о расстоянии и числе."
        items={exercise2}
      />

      <CheckableExercise
        title="Упражнение 3: Переведите предложения"
        instruction="Переведите предложения с русского на английский, используя правильное указательное местоимение."
        items={exercise3}
      />

      <Section title="Повторение ключевых моментов">
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-zinc-50 rounded-lg border border-zinc-200">
              <h5 className="font-bold text-gray-900 mb-2">This</h5>
              <p className="text-gray-700 text-sm">
                Один предмет/человек, близко. <br />
                <i>This is my cup.</i> (Это моя чашка.)
              </p>
            </div>
            <div className="p-4 bg-zinc-50 rounded-lg border border-zinc-200">
              <h5 className="font-bold text-gray-900 mb-2">That</h5>
              <p className="text-gray-700 text-sm">
                Один предмет/человек, далеко. <br />
                <i>That is your bag.</i> (То твоя сумка.)
              </p>
            </div>
            <div className="p-4 bg-zinc-50 rounded-lg border border-zinc-200">
              <h5 className="font-bold text-gray-900 mb-2">These</h5>
              <p className="text-gray-700 text-sm">
                Несколько предметов/людей, близко. <br />
                <i>These are my keys.</i> (Это мои ключи.)
              </p>
            </div>
            <div className="p-4 bg-zinc-50 rounded-lg border border-zinc-200">
              <h5 className="font-bold text-gray-900 mb-2">Those</h5>
              <p className="text-gray-700 text-sm">
                Несколько предметов/людей, далеко. <br />
                <i>Those are their bikes.</i> (То их велосипеды.)
              </p>
            </div>
          </div>

          <div className="bg-indigo-50/30 border border-indigo-200/50 p-5 rounded-lg ">
            <h5 className="font-bold text-indigo-900 mb-3">
              💡 Советы для практики:
            </h5>
            <ul className="space-y-2 text-gray-800">
              <li>
                1. Практикуйте произношение: this [ðɪs], that [ðæt], these
                [ðiːz], those [ðoʊz].
              </li>
              <li>
                2. Указывайте на предметы вокруг вас и называйте их с
                this/that/these/those.
              </li>
              <li>
                3. Повторяйте упражнения, если допустили ошибки, чтобы закрепить
                правила.
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
