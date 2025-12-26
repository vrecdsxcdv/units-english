"use client";

import { Section } from "@/components/ui/Section";
import { useState } from "react";

type Props = { step: number };

export default function Conjunctions({ step }: Props) {
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
    default:
      return <Step1 />;
  }
}

// Step 1: Introduction to Conjunctions
function Step1() {
  return (
    <div className="space-y-8">
      <Section title="🔗 Conjunctions — Союзы">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-blue-900 mb-3">
            What are Conjunctions?
          </h3>
          <p className="text-gray-700 leading-relaxed">
            <b>Conjunctions</b> (союзы) — это слова, которые соединяют слова,
            фразы или предложения. Они помогают сделать нашу речь более плавной
            и связной. В этом уроке мы изучим основные союзы: <b>and</b>,{" "}
            <b>but</b>, <b>or</b>, <b>so</b>, <b>because</b>.
          </p>
        </div>
      </Section>

      <Section title="Main Conjunctions — Основные союзы">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-green-50 border-2 border-green-300 rounded-lg">
            <p className="font-bold text-2xl text-green-900 mb-2">AND</p>
            <p className="text-gray-700 mb-3">
              <b>И</b> — соединяет похожие идеи, добавляет информацию
            </p>
            <div className="space-y-2 text-sm">
              <div className="p-3 bg-white rounded">
                <p className="font-semibold text-gray-900">
                  I like tea <b>and</b> coffee.
                </p>
                <p className="text-gray-600">Мне нравится чай и кофе.</p>
              </div>
              <div className="p-3 bg-white rounded">
                <p className="font-semibold text-gray-900">
                  She is smart <b>and</b> beautiful.
                </p>
                <p className="text-gray-600">Она умная и красивая.</p>
              </div>
            </div>
          </div>

          <div className="p-5 bg-orange-50 border-2 border-orange-300 rounded-lg">
            <p className="font-bold text-2xl text-orange-900 mb-2">BUT</p>
            <p className="text-gray-700 mb-3">
              <b>НО</b> — показывает контраст, противоположность
            </p>
            <div className="space-y-2 text-sm">
              <div className="p-3 bg-white rounded">
                <p className="font-semibold text-gray-900">
                  I like coffee, <b>but</b> I don't like tea.
                </p>
                <p className="text-gray-600">Мне нравится кофе, но не чай.</p>
              </div>
              <div className="p-3 bg-white rounded">
                <p className="font-semibold text-gray-900">
                  It's expensive, <b>but</b> it's good quality.
                </p>
                <p className="text-gray-600">
                  Это дорого, но хорошего качества.
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 bg-purple-50 border-2 border-purple-300 rounded-lg">
            <p className="font-bold text-2xl text-purple-900 mb-2">OR</p>
            <p className="text-gray-700 mb-3">
              <b>ИЛИ</b> — предлагает выбор между вариантами
            </p>
            <div className="space-y-2 text-sm">
              <div className="p-3 bg-white rounded">
                <p className="font-semibold text-gray-900">
                  Do you want tea <b>or</b> coffee?
                </p>
                <p className="text-gray-600">Ты хочешь чай или кофе?</p>
              </div>
              <div className="p-3 bg-white rounded">
                <p className="font-semibold text-gray-900">
                  We can go by car <b>or</b> by bus.
                </p>
                <p className="text-gray-600">
                  Мы можем поехать на машине или автобусе.
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 bg-blue-50 border-2 border-blue-300 rounded-lg">
            <p className="font-bold text-2xl text-blue-900 mb-2">SO</p>
            <p className="text-gray-700 mb-3">
              <b>ПОЭТОМУ</b> — показывает результат, следствие
            </p>
            <div className="space-y-2 text-sm">
              <div className="p-3 bg-white rounded">
                <p className="font-semibold text-gray-900">
                  I was tired, <b>so</b> I went to bed.
                </p>
                <p className="text-gray-600">Я устал, поэтому лёг спать.</p>
              </div>
              <div className="p-3 bg-white rounded">
                <p className="font-semibold text-gray-900">
                  It's cold, <b>so</b> wear a jacket.
                </p>
                <p className="text-gray-600">Холодно, поэтому надень куртку.</p>
              </div>
            </div>
          </div>

          <div className="p-5 bg-red-50 border-2 border-red-300 rounded-lg md:col-span-2">
            <p className="font-bold text-2xl text-red-900 mb-2">BECAUSE</p>
            <p className="text-gray-700 mb-3">
              <b>ПОТОМУ ЧТО</b> — объясняет причину
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <div className="p-3 bg-white rounded">
                <p className="font-semibold text-gray-900">
                  I went to bed <b>because</b> I was tired.
                </p>
                <p className="text-gray-600">Я лёг спать, потому что устал.</p>
              </div>
              <div className="p-3 bg-white rounded">
                <p className="font-semibold text-gray-900">
                  She's happy <b>because</b> she passed the exam.
                </p>
                <p className="text-gray-600">
                  Она счастлива, потому что сдала экзамен.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Important Note — Важное замечание">
        <div className="bg-yellow-50 border-2 border-yellow-400 p-5 rounded-lg">
          <p className="font-bold text-yellow-900 mb-3">
            💡 SO vs BECAUSE — В чём разница?
          </p>
          <div className="space-y-3 text-gray-800">
            <div className="p-3 bg-white rounded">
              <p className="font-semibold text-blue-900">
                SO — показывает результат (что произошло)
              </p>
              <p className="text-sm">
                I was tired, <b>so</b> I went to bed.
              </p>
              <p className="text-xs text-gray-600">
                (причина → результат: устал → лёг спать)
              </p>
            </div>
            <div className="p-3 bg-white rounded">
              <p className="font-semibold text-red-900">
                BECAUSE — объясняет причину (почему это случилось)
              </p>
              <p className="text-sm">
                I went to bed <b>because</b> I was tired.
              </p>
              <p className="text-xs text-gray-600">
                (результат → причина: лёг спать ← устал)
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Step 2: Coordinating Conjunctions - AND, BUT, OR
function Step2() {
  return (
    <div className="space-y-8">
      <Section title="Coordinating Conjunctions: AND, BUT, OR">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-green-900 mb-3">
            Сочинительные союзы
          </h3>
          <p className="text-gray-700">
            Эти союзы соединяют равноправные части предложения: слова, фразы или
            целые предложения.
          </p>
        </div>
      </Section>

      <Section title="AND — И (добавление)">
        <div className="space-y-4">
          <div className="p-5 bg-green-50 border-2 border-green-300 rounded-lg">
            <p className="font-bold text-lg text-green-900 mb-3">
              📌 When to use AND:
            </p>
            <ul className="space-y-2 text-gray-800">
              <li>✓ Соединить два похожих действия или качества</li>
              <li>✓ Добавить дополнительную информацию</li>
              <li>✓ Перечислить несколько предметов</li>
            </ul>
          </div>

          <div className="p-5 bg-white border border-green-300 rounded-lg">
            <p className="font-bold text-green-900 mb-3">Examples:</p>
            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded">
                <p className="font-semibold">
                  I bought apples <b>and</b> bananas.
                </p>
                <p className="text-sm text-gray-600">
                  Я купил яблоки и бананы.
                </p>
              </div>
              <div className="p-3 bg-green-50 rounded">
                <p className="font-semibold">
                  She can sing <b>and</b> dance.
                </p>
                <p className="text-sm text-gray-600">
                  Она умеет петь и танцевать.
                </p>
              </div>
              <div className="p-3 bg-green-50 rounded">
                <p className="font-semibold">
                  I woke up <b>and</b> had breakfast.
                </p>
                <p className="text-sm text-gray-600">
                  Я проснулся и позавтракал.
                </p>
              </div>
              <div className="p-3 bg-green-50 rounded">
                <p className="font-semibold">
                  The weather is sunny <b>and</b> warm.
                </p>
                <p className="text-sm text-gray-600">
                  Погода солнечная и тёплая.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="BUT — НО (контраст)">
        <div className="space-y-4">
          <div className="p-5 bg-orange-50 border-2 border-orange-300 rounded-lg">
            <p className="font-bold text-lg text-orange-900 mb-3">
              📌 When to use BUT:
            </p>
            <ul className="space-y-2 text-gray-800">
              <li>✓ Показать контраст между двумя идеями</li>
              <li>✓ Выразить неожиданный результат</li>
              <li>✓ Противопоставить две вещи</li>
            </ul>
          </div>

          <div className="p-5 bg-white border border-orange-300 rounded-lg">
            <p className="font-bold text-orange-900 mb-3">Examples:</p>
            <div className="space-y-3">
              <div className="p-3 bg-orange-50 rounded">
                <p className="font-semibold">
                  I like pizza, <b>but</b> I don't like pasta.
                </p>
                <p className="text-sm text-gray-600">
                  Мне нравится пицца, но не нравится паста.
                </p>
              </div>
              <div className="p-3 bg-orange-50 rounded">
                <p className="font-semibold">
                  She's rich, <b>but</b> she's not happy.
                </p>
                <p className="text-sm text-gray-600">
                  Она богата, но не счастлива.
                </p>
              </div>
              <div className="p-3 bg-orange-50 rounded">
                <p className="font-semibold">
                  The book was long, <b>but</b> interesting.
                </p>
                <p className="text-sm text-gray-600">
                  Книга была длинная, но интересная.
                </p>
              </div>
              <div className="p-3 bg-orange-50 rounded">
                <p className="font-semibold">
                  I want to go, <b>but</b> I'm too tired.
                </p>
                <p className="text-sm text-gray-600">
                  Я хочу пойти, но слишком устал.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="OR — ИЛИ (выбор)">
        <div className="space-y-4">
          <div className="p-5 bg-purple-50 border-2 border-purple-300 rounded-lg">
            <p className="font-bold text-lg text-purple-900 mb-3">
              📌 When to use OR:
            </p>
            <ul className="space-y-2 text-gray-800">
              <li>✓ Предложить выбор между вариантами</li>
              <li>✓ Показать альтернативу</li>
              <li>✓ В вопросах о предпочтениях</li>
            </ul>
          </div>

          <div className="p-5 bg-white border border-purple-300 rounded-lg">
            <p className="font-bold text-purple-900 mb-3">Examples:</p>
            <div className="space-y-3">
              <div className="p-3 bg-purple-50 rounded">
                <p className="font-semibold">
                  Would you like tea <b>or</b> coffee?
                </p>
                <p className="text-sm text-gray-600">Вы хотите чай или кофе?</p>
              </div>
              <div className="p-3 bg-purple-50 rounded">
                <p className="font-semibold">
                  We can watch a movie <b>or</b> go for a walk.
                </p>
                <p className="text-sm text-gray-600">
                  Мы можем посмотреть фильм или пойти погулять.
                </p>
              </div>
              <div className="p-3 bg-purple-50 rounded">
                <p className="font-semibold">
                  Is she French <b>or</b> Italian?
                </p>
                <p className="text-sm text-gray-600">
                  Она французженка или итальянка?
                </p>
              </div>
              <div className="p-3 bg-purple-50 rounded">
                <p className="font-semibold">
                  You can pay by card <b>or</b> cash.
                </p>
                <p className="text-sm text-gray-600">
                  Вы можете заплатить картой или наличными.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Step 3: Conjunction SO
function Step3() {
  return (
    <div className="space-y-8">
      <Section title="SO — ПОЭТОМУ (результат, следствие)">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-blue-900 mb-3">
            Когда использовать SO
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Союз <b>SO</b> показывает <b>результат</b> или <b>следствие</b>{" "}
            того, что было сказано в первой части предложения. Используйте SO,
            когда хотите объяснить, что произошло в результате какой-то
            ситуации.
          </p>
        </div>
      </Section>

      <Section title="Structure — Структура">
        <div className="p-6 bg-blue-50 border-2 border-blue-400 rounded-lg">
          <p className="text-center text-xl font-bold text-blue-900 mb-4">
            [Ситуация/Причина] + <span className="text-red-600">SO</span> +
            [Результат]
          </p>
          <div className="space-y-3">
            <div className="p-4 bg-white rounded-lg">
              <p className="text-lg font-semibold text-gray-900 mb-2">
                I was hungry, <span className="text-blue-600">so</span> I made a
                sandwich.
              </p>
              <p className="text-sm text-gray-600">
                Я был голоден, поэтому сделал бутерброд.
              </p>
              <p className="text-xs text-gray-500 mt-2">
                (ситуация: голоден → результат: сделал бутерброд)
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Examples with SO — Примеры">
        <div className="space-y-3">
          <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
            <p className="font-semibold text-gray-900 mb-1">
              It was raining, <b>so</b> we stayed at home.
            </p>
            <p className="text-sm text-gray-600">
              Шёл дождь, поэтому мы остались дома.
            </p>
          </div>

          <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
            <p className="font-semibold text-gray-900 mb-1">
              I missed the bus, <b>so</b> I walked to work.
            </p>
            <p className="text-sm text-gray-600">
              Я опоздал на автобус, поэтому пошёл на работу пешком.
            </p>
          </div>

          <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
            <p className="font-semibold text-gray-900 mb-1">
              She was sick, <b>so</b> she didn't go to school.
            </p>
            <p className="text-sm text-gray-600">
              Она была больна, поэтому не пошла в школу.
            </p>
          </div>

          <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
            <p className="font-semibold text-gray-900 mb-1">
              The store was closed, <b>so</b> we went to another one.
            </p>
            <p className="text-sm text-gray-600">
              Магазин был закрыт, поэтому мы пошли в другой.
            </p>
          </div>

          <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
            <p className="font-semibold text-gray-900 mb-1">
              I forgot my umbrella, <b>so</b> I got wet.
            </p>
            <p className="text-sm text-gray-600">
              Я забыл зонт, поэтому промок.
            </p>
          </div>

          <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
            <p className="font-semibold text-gray-900 mb-1">
              The movie was boring, <b>so</b> we left early.
            </p>
            <p className="text-sm text-gray-600">
              Фильм был скучный, поэтому мы ушли рано.
            </p>
          </div>

          <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
            <p className="font-semibold text-gray-900 mb-1">
              He didn't study, <b>so</b> he failed the test.
            </p>
            <p className="text-sm text-gray-600">
              Он не учился, поэтому провалил тест.
            </p>
          </div>

          <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
            <p className="font-semibold text-gray-900 mb-1">
              The restaurant was full, <b>so</b> we had to wait.
            </p>
            <p className="text-sm text-gray-600">
              Ресторан был полон, поэтому нам пришлось ждать.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Practice — Практика">
        <div className="bg-cyan-50 border-2 border-cyan-300 p-5 rounded-lg">
          <p className="font-bold text-cyan-900 mb-3">
            💪 Complete the sentences with your own ideas:
          </p>
          <ul className="space-y-2 text-gray-800">
            <li>1. I was tired, so ___________.</li>
            <li>2. The weather was nice, so ___________.</li>
            <li>3. I forgot my password, so ___________.</li>
            <li>4. The coffee was too hot, so ___________.</li>
            <li>5. My phone died, so ___________.</li>
          </ul>
        </div>
      </Section>
    </div>
  );
}

// Step 4: Conjunction BECAUSE
function Step4() {
  return (
    <div className="space-y-8">
      <Section title="BECAUSE — ПОТОМУ ЧТО (причина)">
        <div className="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-red-900 mb-3">
            Когда использовать BECAUSE
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Союз <b>BECAUSE</b> объясняет <b>причину</b> или <b>причину</b>{" "}
            действия. Используйте BECAUSE, когда хотите ответить на вопрос
            "Почему?"
          </p>
        </div>
      </Section>

      <Section title="Structure — Структура">
        <div className="p-6 bg-red-50 border-2 border-red-400 rounded-lg">
          <p className="text-center text-xl font-bold text-red-900 mb-4">
            [Результат] + <span className="text-blue-600">BECAUSE</span> +
            [Причина]
          </p>
          <div className="space-y-3 mb-6">
            <div className="p-4 bg-white rounded-lg">
              <p className="text-lg font-semibold text-gray-900 mb-2">
                I made a sandwich <span className="text-red-600">because</span>{" "}
                I was hungry.
              </p>
              <p className="text-sm text-gray-600">
                Я сделал бутерброд, потому что был голоден.
              </p>
              <p className="text-xs text-gray-500 mt-2">
                (результат: сделал бутерброд ← причина: был голоден)
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-400 p-4 rounded">
            <p className="font-bold text-yellow-900 mb-2">
              ℹ️ BECAUSE можно ставить в начале!
            </p>
            <p className="text-sm text-gray-700 mb-3">
              Когда BECAUSE в начале предложения, после придаточного предложения
              ставим запятую:
            </p>
            <div className="p-3 bg-white rounded">
              <p className="font-semibold">
                <span className="text-red-600">Because</span> I was hungry, I
                made a sandwich.
              </p>
              <p className="text-sm text-gray-600">
                Потому что я был голоден, я сделал бутерброд.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Examples with BECAUSE — Примеры">
        <div className="space-y-3">
          <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
            <p className="font-semibold text-gray-900 mb-1">
              We stayed at home <b>because</b> it was raining.
            </p>
            <p className="text-sm text-gray-600">
              Мы остались дома, потому что шёл дождь.
            </p>
          </div>

          <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
            <p className="font-semibold text-gray-900 mb-1">
              I walked to work <b>because</b> I missed the bus.
            </p>
            <p className="text-sm text-gray-600">
              Я пошёл на работу пешком, потому что опоздал на автобус.
            </p>
          </div>

          <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
            <p className="font-semibold text-gray-900 mb-1">
              She didn't go to school <b>because</b> she was sick.
            </p>
            <p className="text-sm text-gray-600">
              Она не пошла в школу, потому что была больна.
            </p>
          </div>

          <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
            <p className="font-semibold text-gray-900 mb-1">
              He's happy <b>because</b> he got a new job.
            </p>
            <p className="text-sm text-gray-600">
              Он счастлив, потому что получил новую работу.
            </p>
          </div>

          <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
            <p className="font-semibold text-gray-900 mb-1">
              I'm learning English <b>because</b> I want to travel.
            </p>
            <p className="text-sm text-gray-600">
              Я учу английский, потому что хочу путешествовать.
            </p>
          </div>

          <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
            <p className="font-semibold text-gray-900 mb-1">
              They cancelled the concert <b>because</b> the singer was ill.
            </p>
            <p className="text-sm text-gray-600">
              Они отменили концерт, потому что певец был болен.
            </p>
          </div>

          <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
            <p className="font-semibold text-gray-900 mb-1">
              <b>Because</b> it was late, we decided to go home.
            </p>
            <p className="text-sm text-gray-600">
              Потому что было поздно, мы решили пойти домой.
            </p>
          </div>

          <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
            <p className="font-semibold text-gray-900 mb-1">
              <b>Because</b> I love you, I will help you.
            </p>
            <p className="text-sm text-gray-600">
              Потому что я люблю тебя, я помогу тебе.
            </p>
          </div>
        </div>
      </Section>

      <Section title="SO vs BECAUSE — Comparison">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-blue-50 border-2 border-blue-300 rounded-lg">
            <p className="font-bold text-xl text-blue-900 mb-3">
              SO (результат)
            </p>
            <div className="space-y-2 text-sm">
              <p className="p-2 bg-white rounded">
                I was tired, <b className="text-blue-600">so</b> I went to bed.
              </p>
              <p className="p-2 bg-white rounded">
                It was cold, <b className="text-blue-600">so</b> I wore a
                jacket.
              </p>
              <p className="p-2 bg-white rounded">
                She was late, <b className="text-blue-600">so</b> she took a
                taxi.
              </p>
            </div>
          </div>

          <div className="p-5 bg-red-50 border-2 border-red-300 rounded-lg">
            <p className="font-bold text-xl text-red-900 mb-3">
              BECAUSE (причина)
            </p>
            <div className="space-y-2 text-sm">
              <p className="p-2 bg-white rounded">
                I went to bed <b className="text-red-600">because</b> I was
                tired.
              </p>
              <p className="p-2 bg-white rounded">
                I wore a jacket <b className="text-red-600">because</b> it was
                cold.
              </p>
              <p className="p-2 bg-white rounded">
                She took a taxi <b className="text-red-600">because</b> she was
                late.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Step 5: Practice with all Conjunctions
function Step5() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <Section title="Practice with Conjunctions — Практика">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-purple-900 mb-3">
            Закрепим все союзы!
          </h3>
          <p className="text-gray-700">
            Теперь попрактикуемся использовать все изученные союзы: AND, BUT,
            OR, SO, BECAUSE.
          </p>
        </div>
      </Section>

      <Section title="Exercise 1: Choose the Right Conjunction">
        <div className="space-y-4">
          <div className="p-4 bg-white border-2 border-gray-300 rounded-lg">
            <p className="font-semibold text-gray-900 mb-2">
              1. I like tea _____ coffee. (оба нравятся)
            </p>
            <input
              type="text"
              value={answers.ex1 || ""}
              onChange={(e) => handleChange("ex1", e.target.value)}
              placeholder="Введите союз..."
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="p-4 bg-white border-2 border-gray-300 rounded-lg">
            <p className="font-semibold text-gray-900 mb-2">
              2. I like tea, _____ I don't like coffee. (контраст)
            </p>
            <input
              type="text"
              value={answers.ex2 || ""}
              onChange={(e) => handleChange("ex2", e.target.value)}
              placeholder="Введите союз..."
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="p-4 bg-white border-2 border-gray-300 rounded-lg">
            <p className="font-semibold text-gray-900 mb-2">
              3. Would you like tea _____ coffee? (выбор)
            </p>
            <input
              type="text"
              value={answers.ex3 || ""}
              onChange={(e) => handleChange("ex3", e.target.value)}
              placeholder="Введите союз..."
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="p-4 bg-white border-2 border-gray-300 rounded-lg">
            <p className="font-semibold text-gray-900 mb-2">
              4. I was thirsty, _____ I drank some water. (результат)
            </p>
            <input
              type="text"
              value={answers.ex4 || ""}
              onChange={(e) => handleChange("ex4", e.target.value)}
              placeholder="Введите союз..."
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="p-4 bg-white border-2 border-gray-300 rounded-lg">
            <p className="font-semibold text-gray-900 mb-2">
              5. I drank water _____ I was thirsty. (причина)
            </p>
            <input
              type="text"
              value={answers.ex5 || ""}
              onChange={(e) => handleChange("ex5", e.target.value)}
              placeholder="Введите союз..."
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </Section>

      <Section title="Exercise 2: Sentence Building">
        <div className="p-5 bg-blue-50 border-2 border-blue-300 rounded-lg mb-4">
          <p className="font-bold text-blue-900 mb-3">
            Combine the sentences using the conjunction in brackets:
          </p>
          <div className="space-y-4">
            <div className="p-3 bg-white rounded">
              <p className="text-gray-900 mb-2">
                1. I'm tired. I have a lot of work. (but)
              </p>
              <input
                type="text"
                value={answers.build1 || ""}
                onChange={(e) => handleChange("build1", e.target.value)}
                placeholder="Напишите объединённое предложение..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="p-3 bg-white rounded">
              <p className="text-gray-900 mb-2">
                2. She studies hard. She wants good grades. (because)
              </p>
              <input
                type="text"
                value={answers.build2 || ""}
                onChange={(e) => handleChange("build2", e.target.value)}
                placeholder="Напишите объединённое предложение..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="p-3 bg-white rounded">
              <p className="text-gray-900 mb-2">
                3. It was raining. We took an umbrella. (so)
              </p>
              <input
                type="text"
                value={answers.build3 || ""}
                onChange={(e) => handleChange("build3", e.target.value)}
                placeholder="Напишите объединённое предложение..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="p-3 bg-white rounded">
              <p className="text-gray-900 mb-2">
                4. I can speak English. I can speak Spanish. (and)
              </p>
              <input
                type="text"
                value={answers.build4 || ""}
                onChange={(e) => handleChange("build4", e.target.value)}
                placeholder="Напишите объединённое предложение..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="p-3 bg-white rounded">
              <p className="text-gray-900 mb-2">
                5. Do you prefer cats? Do you prefer dogs? (or)
              </p>
              <input
                type="text"
                value={answers.build5 || ""}
                onChange={(e) => handleChange("build5", e.target.value)}
                placeholder="Напишите объединённое предложение..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section title="Exercise 3: Complete the Dialogue">
        <div className="p-5 bg-purple-50 border-2 border-purple-300 rounded-lg">
          <p className="font-bold text-purple-900 mb-4">
            Fill in the blanks with: and, but, or, so, because
          </p>
          <div className="space-y-4 text-gray-900">
            <div>
              <p className="mb-2">
                <b>A:</b> Do you want to go to the cinema _____ stay at home?
              </p>
              <input
                type="text"
                value={answers.dial1 || ""}
                onChange={(e) => handleChange("dial1", e.target.value)}
                placeholder="Введите союз..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <p className="mb-2">
                <b>B:</b> I want to go to the cinema, _____ I'm too tired.
              </p>
              <input
                type="text"
                value={answers.dial2 || ""}
                onChange={(e) => handleChange("dial2", e.target.value)}
                placeholder="Введите союз..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <p className="mb-2">
                <b>A:</b> You're tired _____ you worked all day?
              </p>
              <input
                type="text"
                value={answers.dial3 || ""}
                onChange={(e) => handleChange("dial3", e.target.value)}
                placeholder="Введите союз..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <p className="mb-2">
                <b>B:</b> Yes, I worked hard, _____ now I need to rest.
              </p>
              <input
                type="text"
                value={answers.dial4 || ""}
                onChange={(e) => handleChange("dial4", e.target.value)}
                placeholder="Введите союз..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <p className="mb-2">
                <b>A:</b> OK, we can watch a movie _____ order pizza at home.
              </p>
              <input
                type="text"
                value={answers.dial5 || ""}
                onChange={(e) => handleChange("dial5", e.target.value)}
                placeholder="Введите союз..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Step 6: Homework
function Step6() {
  return (
    <div className="space-y-8">
      <Section title="📚 Homework — Домашнее задание">
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-400 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-yellow-900 mb-3">
            Practice Conjunctions at Home!
          </h3>
          <p className="text-gray-700">
            Выполните эти задания, чтобы закрепить знания о союзах.
          </p>
        </div>
      </Section>

      <Section title="Task 1: Write Your Own Sentences">
        <div className="p-5 bg-white border-2 border-blue-300 rounded-lg">
          <p className="font-bold text-lg text-blue-900 mb-3">
            Write 2 sentences for each conjunction:
          </p>
          <ul className="space-y-3 text-gray-800">
            <li>
              <b>AND:</b> Write 2 sentences about things you like or activities
              you do.
              <p className="text-sm text-gray-600 ml-4 mt-1">
                Example: I like pizza and burgers.
              </p>
            </li>
            <li>
              <b>BUT:</b> Write 2 sentences showing contrast.
              <p className="text-sm text-gray-600 ml-4 mt-1">
                Example: I want to go out, but it's raining.
              </p>
            </li>
            <li>
              <b>OR:</b> Write 2 questions offering choices.
              <p className="text-sm text-gray-600 ml-4 mt-1">
                Example: Do you prefer summer or winter?
              </p>
            </li>
            <li>
              <b>SO:</b> Write 2 sentences showing result.
              <p className="text-sm text-gray-600 ml-4 mt-1">
                Example: I was tired, so I went to bed early.
              </p>
            </li>
            <li>
              <b>BECAUSE:</b> Write 2 sentences explaining reasons.
              <p className="text-sm text-gray-600 ml-4 mt-1">
                Example: I'm happy because it's my birthday.
              </p>
            </li>
          </ul>
        </div>
      </Section>

      <Section title="Task 2: Fill in the Blanks">
        <div className="p-5 bg-white border-2 border-green-300 rounded-lg">
          <p className="font-bold text-lg text-green-900 mb-3">
            Choose the correct conjunction:
          </p>
          <ul className="space-y-2 text-gray-800">
            <li>1. I love chocolate, _____ I don't like candy.</li>
            <li>2. She can play the piano _____ the guitar.</li>
            <li>3. We stayed home _____ it was raining.</li>
            <li>4. I forgot my keys, _____ I couldn't open the door.</li>
            <li>5. Do you want juice _____ water?</li>
            <li>6. He's tall _____ strong.</li>
            <li>7. I'm studying English _____ I want to work abroad.</li>
            <li>8. The food was delicious, _____ expensive.</li>
            <li>9. It's sunny, _____ let's go to the park.</li>
            <li>10. _____ I was sick, I stayed in bed all day.</li>
          </ul>
        </div>
      </Section>

      <Section title="Task 3: Translation Practice">
        <div className="p-5 bg-white border-2 border-purple-300 rounded-lg">
          <p className="font-bold text-lg text-purple-900 mb-3">
            Переведите предложения на английский:
          </p>
          <ul className="space-y-2 text-gray-800">
            <li>1. Я люблю читать и писать.</li>
            <li>2. Это дорого, но качественно.</li>
            <li>3. Ты хочешь чай или кофе?</li>
            <li>4. Я устал, поэтому лёг спать.</li>
            <li>5. Она счастлива, потому что получила подарок.</li>
            <li>6. Мы можем пойти в кино или остаться дома.</li>
            <li>7. Он умный и добрый.</li>
            <li>8. Я хочу помочь, но у меня нет времени.</li>
            <li>9. Было холодно, поэтому я надел куртку.</li>
            <li>10. Я учу английский, потому что это важно.</li>
          </ul>
        </div>
      </Section>
    </div>
  );
}

// Step 7: Logic Task
function Step7() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <Section title="🧠 Logic Task — Задание на логику">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-purple-900 mb-3">
            Conjunction Logic Puzzles
          </h3>
          <p className="text-gray-700">
            Решите логические задачи, используя правильные союзы.
          </p>
        </div>
      </Section>

      <Section title="Task 1: Choose the Best Conjunction">
        <div className="space-y-4">
          <div className="p-5 bg-white border-2 border-blue-300 rounded-lg">
            <p className="text-gray-900 mb-3">
              1. I want to buy a new phone, _____ I don't have enough money.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              (Я хочу купить новый телефон, _____ у меня недостаточно денег)
            </p>
            <input
              type="text"
              value={answers.q1 || ""}
              onChange={(e) => handleChange("q1", e.target.value)}
              placeholder="and / but / so / because?"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="p-5 bg-white border-2 border-blue-300 rounded-lg">
            <p className="text-gray-900 mb-3">
              2. She speaks English _____ French fluently.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              (Она говорит по-английски _____ по-французски свободно)
            </p>
            <input
              type="text"
              value={answers.q2 || ""}
              onChange={(e) => handleChange("q2", e.target.value)}
              placeholder="and / but / or / because?"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="p-5 bg-white border-2 border-blue-300 rounded-lg">
            <p className="text-gray-900 mb-3">
              3. I'm going to bed now _____ I'm very tired.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              (Я иду спать сейчас _____ я очень устал)
            </p>
            <input
              type="text"
              value={answers.q3 || ""}
              onChange={(e) => handleChange("q3", e.target.value)}
              placeholder="so / because?"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="p-5 bg-white border-2 border-blue-300 rounded-lg">
            <p className="text-gray-900 mb-3">
              4. Do you want to eat at home _____ go to a restaurant?
            </p>
            <p className="text-sm text-gray-600 mb-2">
              (Ты хочешь поесть дома _____ пойти в ресторан?)
            </p>
            <input
              type="text"
              value={answers.q4 || ""}
              onChange={(e) => handleChange("q4", e.target.value)}
              placeholder="and / but / or?"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="p-5 bg-white border-2 border-blue-300 rounded-lg">
            <p className="text-gray-900 mb-3">
              5. The test was difficult, _____ I passed it.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              (Тест был сложным, _____ я его сдал)
            </p>
            <input
              type="text"
              value={answers.q5 || ""}
              onChange={(e) => handleChange("q5", e.target.value)}
              placeholder="and / but / so?"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </Section>

      <Section title="Task 2: Complete the Story">
        <div className="p-5 bg-white border-2 border-purple-300 rounded-lg">
          <p className="font-bold text-lg text-purple-900 mb-3">
            Fill in the blanks with the correct conjunctions:
          </p>
          <div className="space-y-4">
            <textarea
              value={answers.story || ""}
              onChange={(e) => handleChange("story", e.target.value)}
              placeholder="Вставьте союзы: and, but, or, so, because"
              rows={10}
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500 font-mono text-sm"
            />
            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="text-gray-800 leading-relaxed">
                Yesterday was my birthday, _____ I was very excited. My friends
                came to my house _____ we had a party. We played games _____
                listened to music. The cake was delicious, _____ there wasn't
                enough for everyone. My friend Tom couldn't come _____ he was
                sick. I wanted to invite more people, _____ my house is small.
                We had to choose: invite fewer friends _____ rent a bigger
                place. In the end, it was a great party _____ I was with people
                I love!
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Task 3: Create Logical Sentences">
        <div className="p-5 bg-white border-2 border-green-300 rounded-lg">
          <p className="font-bold text-lg text-green-900 mb-3">
            Combine these ideas using the conjunction in brackets:
          </p>
          <div className="space-y-4">
            <div>
              <p className="text-gray-900 mb-2">
                1. The weather is nice. Let's go for a walk. (so)
              </p>
              <input
                type="text"
                value={answers.combine1 || ""}
                onChange={(e) => handleChange("combine1", e.target.value)}
                placeholder="Напишите объединённое предложение..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <p className="text-gray-900 mb-2">
                2. I love pizza. I don't eat it often. (but)
              </p>
              <input
                type="text"
                value={answers.combine2 || ""}
                onChange={(e) => handleChange("combine2", e.target.value)}
                placeholder="Напишите объединённое предложение..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <p className="text-gray-900 mb-2">
                3. She's learning Spanish. She wants to work in Spain. (because)
              </p>
              <input
                type="text"
                value={answers.combine3 || ""}
                onChange={(e) => handleChange("combine3", e.target.value)}
                placeholder="Напишите объединённое предложение..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Step 8: Final Exercises
function Step8() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <Section title="📝 Final Exercises — Финальные упражнения">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-green-900 mb-3">
            Test Your Knowledge!
          </h3>
          <p className="text-gray-700">
            Проверьте, как хорошо вы усвоили материал о союзах.
          </p>
        </div>
      </Section>

      <Section title="Exercise 1: Multiple Choice">
        <div className="space-y-4">
          {[
            {
              q: "I wanted to go swimming, _____ the pool was closed.",
              a: "but",
            },
            {
              q: "She studies hard _____ she wants to get good grades.",
              a: "because",
            },
            {
              q: "I need to buy milk _____ bread.",
              a: "and",
            },
            {
              q: "We can watch TV _____ play video games.",
              a: "or",
            },
            {
              q: "It started raining, _____ we went inside.",
              a: "so",
            },
            {
              q: "He's rich _____ not very happy.",
              a: "but",
            },
            {
              q: "I'm tired _____ I didn't sleep well.",
              a: "because",
            },
            {
              q: "Do you prefer cats _____ dogs?",
              a: "or",
            },
            {
              q: "She's smart _____ funny.",
              a: "and",
            },
            {
              q: "I forgot my umbrella, _____ I got wet.",
              a: "so",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 bg-white border border-gray-300 rounded-lg"
            >
              <p className="text-gray-900 mb-2">
                {idx + 1}. {item.q}
              </p>
              <input
                type="text"
                value={answers[`mc${idx + 1}`] || ""}
                onChange={(e) => handleChange(`mc${idx + 1}`, e.target.value)}
                placeholder="Введите союз..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
        </div>
      </Section>

      <Section title="Exercise 2: Error Correction">
        <div className="p-5 bg-yellow-50 border-2 border-yellow-400 rounded-lg">
          <p className="font-bold text-lg text-yellow-900 mb-3">
            Find and correct the mistakes:
          </p>
          <div className="space-y-3">
            <div className="p-3 bg-white rounded">
              <p className="text-gray-900 mb-2">
                ❌ I like tea, and I don't like coffee.
              </p>
              <input
                type="text"
                value={answers.err1 || ""}
                onChange={(e) => handleChange("err1", e.target.value)}
                placeholder="Исправьте предложение..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div className="p-3 bg-white rounded">
              <p className="text-gray-900 mb-2">
                ❌ Do you want tea but coffee?
              </p>
              <input
                type="text"
                value={answers.err2 || ""}
                onChange={(e) => handleChange("err2", e.target.value)}
                placeholder="Исправьте предложение..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div className="p-3 bg-white rounded">
              <p className="text-gray-900 mb-2">
                ❌ I was hungry, because I ate a sandwich.
              </p>
              <input
                type="text"
                value={answers.err3 || ""}
                onChange={(e) => handleChange("err3", e.target.value)}
                placeholder="Исправьте предложение..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div className="p-3 bg-white rounded">
              <p className="text-gray-900 mb-2">❌ She's beautiful or smart.</p>
              <input
                type="text"
                value={answers.err4 || ""}
                onChange={(e) => handleChange("err4", e.target.value)}
                placeholder="Исправьте предложение..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section title="Exercise 3: Write a Paragraph">
        <div className="p-5 bg-purple-50 border-2 border-purple-300 rounded-lg">
          <p className="font-bold text-lg text-purple-900 mb-3">
            Write about your day using all 5 conjunctions:
          </p>
          <p className="text-sm text-gray-700 mb-3">
            Use: AND, BUT, OR, SO, BECAUSE (at least once each)
          </p>
          <textarea
            value={answers.paragraph || ""}
            onChange={(e) => handleChange("paragraph", e.target.value)}
            placeholder="Напишите текст о вашем дне, используя все 5 союзов..."
            rows={8}
            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </Section>

      <Section>
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400 p-6 rounded-xl text-center">
          <div className="text-4xl mb-3">🎉</div>
          <h3 className="text-2xl font-bold text-green-900 mb-2">
            Congratulations!
          </h3>
          <p className="text-gray-700 mb-4">
            Вы завершили тему <b>Conjunctions</b>! Теперь вы умеете правильно
            использовать союзы AND, BUT, OR, SO и BECAUSE для создания связных и
            логичных предложений на английском языке.
          </p>
          <div className="bg-white p-4 rounded-lg mb-4">
            <p className="font-semibold text-gray-900 mb-2">Что вы выучили:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ AND — соединяет похожие идеи</li>
              <li>✓ BUT — показывает контраст</li>
              <li>✓ OR — предлагает выбор</li>
              <li>✓ SO — показывает результат</li>
              <li>✓ BECAUSE — объясняет причину</li>
            </ul>
          </div>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full font-semibold">
            <span>✓</span>
            <span>Тема завершена</span>
          </div>
        </div>
      </Section>
    </div>
  );
}
