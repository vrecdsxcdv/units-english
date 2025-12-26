"use client";

import { Section } from "@/components/ui/Section";
import CheckableExercise from "../CheckableExercise";

type Props = { step: number };

export default function ReducedRelatives({ step }: Props) {
  if (step === 1) {
    return (
      <>
        <Section title="🔗 Reduced Relative Clauses — Сокращённые определительные придаточные">
          <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-lg p-6 border-2 border-blue-400">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Reduced Relative Clauses — Делаем речь компактнее!
            </h2>
            <p className="text-sm text-zinc-700 mb-4">
              ***Reduced relative clauses*** (сокращённые определительные придаточные) — это когда мы убираем относительное местоимение (who/which/that) и глагол to be из придаточного предложения, делая речь более лаконичной.
            </p>
            <div className="bg-white rounded-lg p-4 border border-blue-300 mb-4">
              <h3 className="font-bold text-blue-800 mb-3">Сравните:</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-700">Полное придаточное:</p>
                  <p className="text-sm">The people <span className="text-blue-600">who are waiting</span> for the bus are getting wet.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-green-700">Сокращённое:</p>
                  <p className="text-sm">The people <span className="text-green-600">waiting</span> for the bus are getting wet.</p>
                  <p className="text-xs text-gray-500 italic mt-1">Люди, ожидающие автобус, промокают.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-blue-300">
              <h3 className="font-bold text-blue-800 mb-3">Ещё пример:</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-700">Полное придаточное:</p>
                  <p className="text-sm">The book <span className="text-blue-600">which was published</span> last year became a bestseller.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-green-700">Сокращённое:</p>
                  <p className="text-sm">The book <span className="text-green-600">published</span> last year became a bestseller.</p>
                  <p className="text-xs text-gray-500 italic mt-1">Книга, опубликованная в прошлом году, стала бестселлером.</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section title="📋 Три основных типа сокращений">
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg p-4 border-l-4 border-green-500">
              <h3 className="font-bold text-green-800 mb-2">1. Present Participle (V-ing) — Активное действие</h3>
              <p className="text-sm mb-2">Используется для активных действий:</p>
              <div className="space-y-1 text-sm">
                <p>• The man <strong className="text-green-700">speaking</strong> on the phone is my boss.</p>
                <p className="text-xs text-gray-600 ml-4">= who is speaking</p>
                <p>• Anyone <strong className="text-green-700">wanting</strong> to leave early should inform me.</p>
                <p className="text-xs text-gray-600 ml-4">= who wants to leave</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-violet-100 rounded-lg p-4 border-l-4 border-purple-500">
              <h3 className="font-bold text-purple-800 mb-2">2. Past Participle (V3/-ed) — Пассивное значение</h3>
              <p className="text-sm mb-2">Используется для пассивных действий:</p>
              <div className="space-y-1 text-sm">
                <p>• The car <strong className="text-purple-700">stolen</strong> last night was found.</p>
                <p className="text-xs text-gray-600 ml-4">= which was stolen</p>
                <p>• Products <strong className="text-purple-700">made</strong> in Germany are reliable.</p>
                <p className="text-xs text-gray-600 ml-4">= which are made</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-rose-100 rounded-lg p-4 border-l-4 border-pink-500">
              <h3 className="font-bold text-pink-800 mb-2">3. To-infinitive — Модальное значение</h3>
              <p className="text-sm mb-2">Используется для цели, возможности или необходимости:</p>
              <div className="space-y-1 text-sm">
                <p>• She is the first person <strong className="text-pink-700">to arrive</strong>.</p>
                <p className="text-xs text-gray-600 ml-4">= who arrived / who will arrive</p>
                <p>• I need someone <strong className="text-pink-700">to help</strong> me.</p>
                <p className="text-xs text-gray-600 ml-4">= who can help</p>
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
        <Section title="✨ Present Participle (-ing) в Reduced Clauses">
          <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-lg p-6 border-2 border-green-400">
            <h2 className="text-2xl font-bold text-green-900 mb-4">
              Present Participle — Активные действия
            </h2>
            <p className="text-sm text-zinc-700 mb-4">
              Используем ***V-ing*** когда действие активное и субъект сам его выполняет.
            </p>

            <div className="bg-white rounded-lg p-4 border border-green-300 mb-4">
              <h3 className="font-bold text-green-800 mb-3">Случай 1: Действие в процессе (Continuous)</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <p>• The woman <strong className="text-green-700">sitting</strong> on the bench is my aunt.</p>
                  <p className="text-xs text-gray-600 ml-4">= who is sitting (Женщина, сидящая на скамейке, — моя тётя.)</p>
                </div>
                <div>
                  <p>• The children <strong className="text-green-700">playing</strong> in the garden are very noisy.</p>
                  <p className="text-xs text-gray-600 ml-4">= who are playing (Дети, играющие в саду, очень шумные.)</p>
                </div>
                <div>
                  <p>• The man <strong className="text-green-700">wearing</strong> a hat is my father.</p>
                  <p className="text-xs text-gray-600 ml-4">= who is wearing (Мужчина в шляпе — мой отец.)</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-green-300 mb-4">
              <h3 className="font-bold text-green-800 mb-3">Случай 2: Постоянные действия (Simple)</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <p>• Anyone <strong className="text-green-700">wishing</strong> to attend should register.</p>
                  <p className="text-xs text-gray-600 ml-4">= who wishes (Любой, желающий посетить, должен зарегистрироваться.)</p>
                </div>
                <div>
                  <p>• Students <strong className="text-green-700">needing</strong> extra help can stay after class.</p>
                  <p className="text-xs text-gray-600 ml-4">= who need (Студенты, нуждающиеся в помощи, могут остаться после урока.)</p>
                </div>
                <div>
                  <p>• People <strong className="text-green-700">living</strong> in glass houses shouldn&apos;t throw stones.</p>
                  <p className="text-xs text-gray-600 ml-4">= who live (Людям, живущим в стеклянных домах, не стоит бросать камни.)</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-green-300">
              <h3 className="font-bold text-green-800 mb-3">Случай 3: Стативные глаголы</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <p>• The road <strong className="text-green-700">connecting</strong> the two cities needs repairs.</p>
                  <p className="text-xs text-gray-600 ml-4">= which connects (Дорога, соединяющая два города, нуждается в ремонте.)</p>
                </div>
                <div>
                  <p>• The window <strong className="text-green-700">facing</strong> south gets a lot of sun.</p>
                  <p className="text-xs text-gray-600 ml-4">= which faces (Окно, выходящее на юг, получает много солнца.)</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section title="⚠️ Важное правило позиции">
          <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
            <p className="text-sm font-semibold text-yellow-900 mb-2">Позиция причастия:</p>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold">✅ Правильно:</p>
                <p>• The woman <strong>standing on the corner</strong> is my sister.</p>
                <p className="text-xs text-gray-600">(причастие сразу после существительного)</p>
              </div>
              <div>
                <p className="font-semibold text-red-700">✗ Неправильно:</p>
                <p>• The woman is my sister <strong>standing on the corner</strong>.</p>
                <p className="text-xs text-gray-600">(неясно, кто стоит на углу)</p>
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
        <Section title="🎨 Past Participle (V3/-ed) в Reduced Clauses">
          <div className="bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 rounded-lg p-6 border-2 border-purple-400">
            <h2 className="text-2xl font-bold text-purple-900 mb-4">
              Past Participle — Пассивное значение
            </h2>
            <p className="text-sm text-zinc-700 mb-4">
              Используем ***V3/-ed*** когда действие пассивное — что-то СДЕЛАНО НАД субъектом.
            </p>

            <div className="bg-white rounded-lg p-4 border border-purple-300 mb-4">
              <h3 className="font-bold text-purple-800 mb-3">Типичные глаголы с Past Participle:</h3>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="font-semibold text-purple-700 mb-1">Создание:</p>
                  <p>• <strong>made</strong> in Italy — <em>сделанный в Италии</em></p>
                  <p>• <strong>built</strong> in 1920 — <em>построенный в 1920</em></p>
                  <p>• <strong>written</strong> by experts — <em>написанный экспертами</em></p>
                  <p>• <strong>produced</strong> locally — <em>произведённый локально</em></p>
                </div>
                <div>
                  <p className="font-semibold text-purple-700 mb-1">Расположение:</p>
                  <p>• <strong>located</strong> in the center — <em>расположенный в центре</em></p>
                  <p>• <strong>situated</strong> on a hill — <em>расположенный на холме</em></p>
                  <p>• <strong>found</strong> in Asia — <em>находящийся в Азии</em></p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-purple-300 mb-4">
              <h3 className="font-bold text-purple-800 mb-3">Примеры использования:</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <p>• The car <strong className="text-purple-700">stolen</strong> last night was found this morning.</p>
                  <p className="text-xs text-gray-600 ml-4">= which was stolen (Машина, украденная прошлой ночью, была найдена утром.)</p>
                </div>
                <div>
                  <p>• The products <strong className="text-purple-700">sold</strong> in this shop are all organic.</p>
                  <p className="text-xs text-gray-600 ml-4">= which are sold (Продукты, продаваемые в этом магазине, все органические.)</p>
                </div>
                <div>
                  <p>• The house <strong className="text-purple-700">damaged</strong> in the storm needs repairs.</p>
                  <p className="text-xs text-gray-600 ml-4">= which was damaged (Дом, повреждённый в шторм, нуждается в ремонте.)</p>
                </div>
                <div>
                  <p>• The language <strong className="text-purple-700">spoken</strong> in Brazil is Portuguese.</p>
                  <p className="text-xs text-gray-600 ml-4">= which is spoken (Язык, на котором говорят в Бразилии, — португальский.)</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-purple-300">
              <h3 className="font-bold text-purple-800 mb-3">С временными выражениями:</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <p>• The book <strong className="text-purple-700">published last year</strong> became a bestseller.</p>
                  <p className="text-xs text-gray-600 ml-4">(Книга, опубликованная в прошлом году, стала бестселлером.)</p>
                </div>
                <div>
                  <p>• The bridge <strong className="text-purple-700">completed in 2020</strong> connects two districts.</p>
                  <p className="text-xs text-gray-600 ml-4">(Мост, завершённый в 2020 году, соединяет два района.)</p>
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
        <Section title="🎯 To-infinitive в Reduced Clauses">
          <div className="bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 rounded-lg p-6 border-2 border-pink-400">
            <h2 className="text-2xl font-bold text-pink-900 mb-4">
              To-infinitive — Модальные значения
            </h2>
            <p className="text-sm text-zinc-700 mb-4">
              To-infinitive используется для выражения ***цели, возможности, необходимости*** или с порядковыми числительными и превосходной степенью.
            </p>

            <div className="bg-white rounded-lg p-4 border border-pink-300 mb-4">
              <h3 className="font-bold text-pink-800 mb-3">Случай 1: Порядковые числительные и превосходная степень</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <p>• She is the <strong>first person</strong> <strong className="text-pink-700">to arrive</strong>.</p>
                  <p className="text-xs text-gray-600 ml-4">(Она первая, кто прибыл.)</p>
                </div>
                <div>
                  <p>• He was the <strong>last one</strong> <strong className="text-pink-700">to leave</strong>.</p>
                  <p className="text-xs text-gray-600 ml-4">(Он последний ушёл.)</p>
                </div>
                <div>
                  <p>• She&apos;s the <strong>only student</strong> <strong className="text-pink-700">to get</strong> full marks.</p>
                  <p className="text-xs text-gray-600 ml-4">(Она единственная студентка, получившая полный балл.)</p>
                </div>
                <div>
                  <p>• This is the <strong>best book</strong> <strong className="text-pink-700">to read</strong> on the subject.</p>
                  <p className="text-xs text-gray-600 ml-4">(Это лучшая книга для чтения по этой теме.)</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-pink-300 mb-4">
              <h3 className="font-bold text-pink-800 mb-3">Случай 2: Возможность или способность</h3>
              <p className="text-xs text-gray-600 mb-2">Значение &quot;который может&quot; или &quot;который способен&quot;:</p>
              <div className="space-y-2 text-sm">
                <div>
                  <p>• I need someone <strong className="text-pink-700">to help</strong> me move.</p>
                  <p className="text-xs text-gray-600 ml-4">= who can help (Мне нужен кто-то, кто может помочь мне переехать.)</p>
                </div>
                <div>
                  <p>• There&apos;s nothing <strong className="text-pink-700">to worry</strong> about.</p>
                  <p className="text-xs text-gray-600 ml-4">= that you should worry about (Не о чем беспокоиться.)</p>
                </div>
                <div>
                  <p>• Give me something <strong className="text-pink-700">to drink</strong>.</p>
                  <p className="text-xs text-gray-600 ml-4">= that I can drink (Дай мне что-нибудь попить.)</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-pink-300">
              <h3 className="font-bold text-pink-800 mb-3">Случай 3: Цель или назначение</h3>
              <p className="text-xs text-gray-600 mb-2">Значение &quot;для того чтобы&quot; или &quot;предназначенный для&quot;:</p>
              <div className="space-y-2 text-sm">
                <div>
                  <p>• This is a good place <strong className="text-pink-700">to study</strong>.</p>
                  <p className="text-xs text-gray-600 ml-4">= where you can study (Это хорошее место для учёбы.)</p>
                </div>
                <div>
                  <p>• We need a bigger room <strong className="text-pink-700">to accommodate</strong> everyone.</p>
                  <p className="text-xs text-gray-600 ml-4">= that can accommodate (Нам нужна комната побольше, чтобы вместить всех.)</p>
                </div>
                <div>
                  <p>• She&apos;s looking for a house <strong className="text-pink-700">to rent</strong>.</p>
                  <p className="text-xs text-gray-600 ml-4">= that she can rent (Она ищет дом для аренды.)</p>
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
        <Section title="📍 Defining vs Non-defining Clauses">
          <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-lg p-6 border-2 border-amber-400">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">
              Defining vs Non-defining — Запятые имеют значение!
            </h2>
            <p className="text-sm text-zinc-700 mb-4">
              В сокращённых придаточных запятые работают так же, как и в полных.
            </p>

            <div className="bg-white rounded-lg p-4 border border-amber-300 mb-4">
              <h3 className="font-bold text-amber-800 mb-3">Defining (без запятых) — Необходимая информация</h3>
              <p className="text-xs text-gray-600 mb-2">Описание необходимо, чтобы понять, о ком/чём речь:</p>
              <div className="space-y-2 text-sm">
                <div>
                  <p>• The woman <strong className="text-amber-700">standing on the corner</strong> is my sister.</p>
                  <p className="text-xs text-gray-600 ml-4">(Какая женщина? Та, что стоит на углу — без этого неясно, о ком речь)</p>
                </div>
                <div>
                  <p>• Anyone <strong className="text-amber-700">wishing to participate</strong> should register now.</p>
                  <p className="text-xs text-gray-600 ml-4">(Кто? Те, кто желает участвовать)</p>
                </div>
                <div>
                  <p>• The book <strong className="text-amber-700">written by Orwell</strong> is famous.</p>
                  <p className="text-xs text-gray-600 ml-4">(Какая книга? Написанная Оруэллом)</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-amber-300 mb-4">
              <h3 className="font-bold text-amber-800 mb-3">Non-defining (с запятыми) — Дополнительная информация</h3>
              <p className="text-xs text-gray-600 mb-2">Уже ясно, о ком/чём речь, описание добавляет детали:</p>
              <div className="space-y-2 text-sm">
                <div>
                  <p>• My brother, <strong className="text-amber-700">living in London</strong>, visits us yearly.</p>
                  <p className="text-xs text-gray-600 ml-4">(Уже ясно, кто — мой брат. &quot;Living in London&quot; — доп. информация)</p>
                </div>
                <div>
                  <p>• The Eiffel Tower, <strong className="text-amber-700">built in 1889</strong>, attracts millions.</p>
                  <p className="text-xs text-gray-600 ml-4">(Все знают Эйфелеву башню. Год постройки — дополнительная информация)</p>
                </div>
                <div>
                  <p>• My car, <strong className="text-amber-700">bought last year</strong>, already needs repairs.</p>
                  <p className="text-xs text-gray-600 ml-4">(Моя машина — ясно какая. Когда куплена — дополнение)</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-100 to-amber-100 rounded-lg p-4 border-l-4 border-yellow-500">
              <p className="text-sm font-semibold text-yellow-900 mb-2">💡 Разница в полной форме:</p>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold">Defining:</p>
                  <p>• Можно использовать &quot;that&quot;: The man <strong>that is sitting</strong> = The man <strong>sitting</strong></p>
                </div>
                <div>
                  <p className="font-semibold">Non-defining:</p>
                  <p>• Только &quot;which/who&quot;: My car, <strong>which was bought</strong> = My car, <strong>bought</strong></p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 6) {
    return (
      <>
        <Section title="⚠️ Распространённые ошибки">
          <div className="bg-gradient-to-br from-red-50 via-rose-50 to-pink-50 rounded-lg p-6 border-2 border-red-400">
            <h2 className="text-2xl font-bold text-red-900 mb-4">
              Типичные ошибки и как их избежать
            </h2>

            <div className="bg-white rounded-lg p-4 border border-red-300 mb-4">
              <h3 className="font-bold text-red-800 mb-3">Ошибка 1: Active vs Passive путаница</h3>
              <div className="space-y-3 text-sm">
                <div className="bg-red-50 p-3 rounded">
                  <p className="font-semibold text-red-700">✗ Неправильно:</p>
                  <p>• The book <strong className="text-red-600">publishing</strong> last year is a bestseller.</p>
                  <p className="text-xs text-gray-600 ml-4">Книга не &quot;публикующая&quot; — её опубликовали! (пассив)</p>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <p className="font-semibold text-green-700">✓ Правильно:</p>
                  <p>• The book <strong className="text-green-600">published</strong> last year is a bestseller.</p>
                </div>
                <div className="bg-red-50 p-3 rounded mt-3">
                  <p className="font-semibold text-red-700">✗ Неправильно:</p>
                  <p>• The woman <strong className="text-red-600">stood</strong> by the door is my aunt.</p>
                  <p className="text-xs text-gray-600 ml-4">Женщина стоит сама (актив), не &quot;поставленная&quot;!</p>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <p className="font-semibold text-green-700">✓ Правильно:</p>
                  <p>• The woman <strong className="text-green-600">standing</strong> by the door is my aunt.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-red-300 mb-4">
              <h3 className="font-bold text-red-800 mb-3">Ошибка 2: Неправильные запятые</h3>
              <div className="space-y-3 text-sm">
                <div className="bg-red-50 p-3 rounded">
                  <p className="font-semibold text-red-700">✗ Неправильно:</p>
                  <p>• The woman, standing on the corner is my sister.</p>
                  <p className="text-xs text-gray-600 ml-4">(Либо обе запятые, либо никаких!)</p>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <p className="font-semibold text-green-700">✓ Правильно:</p>
                  <p>• The woman standing on the corner is my sister. (defining)</p>
                  <p>• My sister, standing on the corner, waved at me. (non-defining)</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-red-300">
              <h3 className="font-bold text-red-800 mb-3">Ошибка 3: Нельзя сократить некоторые случаи</h3>
              <div className="space-y-3 text-sm">
                <div className="bg-red-50 p-3 rounded">
                  <p className="font-semibold text-red-700">✗ Нельзя сократить:</p>
                  <p>• The man <strong className="text-red-600">called</strong> yesterday was my boss.</p>
                  <p className="text-xs text-gray-600 ml-4">Нельзя! Звучит как &quot;мужчина, которого звали вчера&quot;</p>
                  <p className="text-xs text-green-600 ml-4 mt-1">✓ The man <strong>who called</strong> yesterday was my boss.</p>
                </div>
                <div className="bg-red-50 p-3 rounded mt-3">
                  <p className="font-semibold text-red-700">✗ Нельзя:</p>
                  <p>• Anyone <strong className="text-red-600">wants</strong> to leave can go.</p>
                  <p className="text-xs text-gray-600 ml-4">Нельзя оставить просто глагол без -ing!</p>
                  <p className="text-xs text-green-600 ml-4 mt-1">✓ Anyone <strong>wanting / who wants</strong> to leave can go.</p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 7) {
    return (
      <>
        <Section title="✍️ Практика: Reduced Relative Clauses">
          <CheckableExercise
            title="Упражнение 1: Сокращение придаточных"
            instruction="Сократите придаточное, убрав who/which/that и be"
            items={[
              {
                left: "The people who are waiting for the bus →",
                answers: ["The people waiting for the bus", "The people waiting for the bus."],
                wide: true
              },
              {
                left: "The book which was published last year →",
                answers: ["The book published last year", "The book published last year."],
                wide: true
              },
              {
                left: "Anyone who wants to leave early →",
                answers: ["Anyone wanting to leave early", "Anyone wanting to leave early."],
                wide: true
              },
              {
                left: "The car which was stolen yesterday →",
                answers: ["The car stolen yesterday", "The car stolen yesterday."],
                wide: true
              },
              {
                left: "The woman who is sitting on the bench →",
                answers: ["The woman sitting on the bench", "The woman sitting on the bench."],
                wide: true
              }
            ]}
          />
        </Section>

        <Section title="Упражнение 2: Active vs Passive">
          <CheckableExercise
            title="Выберите правильную форму причастия"
            instruction="Впишите правильную форму (-ing или V3)"
            items={[
              {
                left: "The man",
                right: "(stand) by the door is my uncle.",
                answers: ["standing"]
              },
              {
                left: "The book",
                right: "(write) by Orwell is famous.",
                answers: ["written"]
              },
              {
                left: "Anyone",
                right: "(wish) to attend should register.",
                answers: ["wishing"]
              },
              {
                left: "The products",
                right: "(sell) here are organic.",
                answers: ["sold"]
              },
              {
                left: "The children",
                right: "(play) in the garden are noisy.",
                answers: ["playing"]
              },
              {
                left: "The house",
                right: "(build) in 1920 is beautiful.",
                answers: ["built"]
              }
            ]}
          />
        </Section>

        <Section title="Упражнение 3: Расставьте запятые">
          <CheckableExercise
            title="Нужны ли запятые?"
            instruction="Напишите предложение с запятыми или без (defining/non-defining)"
            items={[
              {
                left: "My brother living in London visits us yearly. →",
                answers: ["My brother, living in London, visits us yearly", "My brother, living in London, visits us yearly."],
                wide: true
              },
              {
                left: "The woman standing on the corner is my sister. →",
                answers: ["The woman standing on the corner is my sister", "The woman standing on the corner is my sister."],
                wide: true
              },
              {
                left: "The Eiffel Tower built in 1889 attracts millions. →",
                answers: ["The Eiffel Tower, built in 1889, attracts millions", "The Eiffel Tower, built in 1889, attracts millions."],
                wide: true
              },
              {
                left: "Anyone wanting to participate should register. →",
                answers: ["Anyone wanting to participate should register", "Anyone wanting to participate should register."],
                wide: true
              }
            ]}
          />
        </Section>

        <Section title="Упражнение 4: To-infinitive">
          <CheckableExercise
            title="Дополните предложения с to-infinitive"
            instruction="Впишите подходящий инфинитив"
            items={[
              {
                left: "She is the first person",
                right: "(arrive) at the party.",
                answers: ["to arrive"]
              },
              {
                left: "I need someone",
                right: "(help) me with this.",
                answers: ["to help"]
              },
              {
                left: "This is a good place",
                right: "(study).",
                answers: ["to study"]
              },
              {
                left: "He was the last one",
                right: "(leave) the office.",
                answers: ["to leave"]
              },
              {
                left: "Give me something",
                right: "(drink).",
                answers: ["to drink"]
              }
            ]}
          />
        </Section>

        <Section title="Упражнение 5: Перевод на английский">
          <CheckableExercise
            title="Переведите, используя Reduced Relative Clauses"
            instruction="Переведите предложение"
            items={[
              {
                left: "Книга, опубликованная в прошлом году →",
                answers: ["The book published last year", "The book published last year."],
                wide: true
              },
              {
                left: "Женщина, сидящая на скамейке →",
                answers: ["The woman sitting on the bench", "The woman sitting on the bench."],
                wide: true
              },
              {
                left: "Любой, желающий уйти →",
                answers: ["Anyone wanting to leave", "Anyone wanting to leave."],
                wide: true
              },
              {
                left: "Продукты, продаваемые здесь →",
                answers: ["The products sold here", "Products sold here", "The products sold here.", "Products sold here."],
                wide: true
              }
            ]}
          />
        </Section>
      </>
    );
  }

  return null;
}
