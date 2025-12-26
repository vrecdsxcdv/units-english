"use client";

import { Section } from "@/components/ui/Section";
import CheckableExercise from "../CheckableExercise";

type Props = { step: number };

export default function ComplexNounPhrases({ step }: Props) {
  if (step === 1) {
    return (
      <>
        <Section title="🏗️ Complex Noun Phrases — Сложные именные группы">
          <div className="bg-gradient-to-br from-sky-50 via-cyan-50 to-teal-50 rounded-lg p-6 border-2 border-sky-400">
            <h2 className="text-3xl font-bold text-sky-900 mb-4">
              Complex Noun Phrases — Когда одно существительное недостаточно!
            </h2>
            <p className="text-sm text-zinc-700 mb-4">
              ***Complex Noun Phrases*** — это когда мы добавляем к существительному множество модификаторов (прилагательные, числительные, причастия, предлоги), создавая более точное и выразительное описание.
            </p>
            <p className="text-sm text-zinc-700 mb-4">
              В английском языке такие фразы могут быть очень длинными и сложными, особенно в академическом и публицистическом стиле.
            </p>
            <div className="bg-white rounded-lg p-4 border border-sky-300 mb-4">
              <h3 className="font-bold text-sky-800 mb-2">Основные компоненты:</h3>
              <div className="space-y-2 text-sm">
                <p><strong className="text-sky-700">Pre-modifiers</strong> (перед существительным):</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Determiners: a, the, my, this</li>
                  <li>Numbers: two, several, many</li>
                  <li>Adjectives: big, beautiful, wooden</li>
                  <li>Participles: broken, running</li>
                  <li>Nouns as adjectives: stone wall, business meeting</li>
                </ul>
                <p className="mt-3"><strong className="text-sky-700">Head Noun</strong> (главное существительное):</p>
                <ul className="list-disc list-inside ml-4">
                  <li>Центральное слово фразы: house, delay, sunset</li>
                </ul>
                <p className="mt-3"><strong className="text-sky-700">Post-modifiers</strong> (после существительного):</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Prepositional phrases: in the garden, of great importance</li>
                  <li>Relative clauses: that I bought, who lives here</li>
                  <li>Participle clauses: written by experts, standing in the corner</li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-r from-sky-100 to-cyan-100 rounded-lg p-4 border-l-4 border-sky-500">
              <p className="text-sm font-semibold text-sky-900">💡 Примеры сложности:</p>
              <div className="space-y-2 mt-2 text-sm">
                <p>Simple: <strong>house</strong></p>
                <p>Complex: <strong>a large old stone house</strong></p>
                <p>Very Complex: <strong>a large old stone house with a beautiful garden</strong></p>
                <p>Extremely Complex: <strong>a large old stone house with a beautiful garden that overlooks the sea</strong></p>
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
        <Section title="🔗 Compound Modifiers with Hyphens — Составные модификаторы с дефисами">
          <div className="bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 rounded-lg p-6 border-2 border-violet-400">
            <h2 className="text-2xl font-bold text-violet-900 mb-4">
              Когда два слова работают вместе как одно прилагательное!
            </h2>
            <p className="text-sm text-zinc-700 mb-4">
              ***Compound modifiers*** (составные модификаторы) — это когда два или более слов объединяются дефисом и работают как одно прилагательное перед существительным.
            </p>
            <div className="bg-white rounded-lg p-4 border border-violet-300 mb-4">
              <h3 className="font-bold text-violet-800 mb-3">Правило дефиса:</h3>
              <p className="text-sm mb-2">✅ <strong>С дефисом</strong> (перед существительным):</p>
              <p className="text-sm ml-4 mb-3">a <strong className="text-violet-700">two-hour</strong> delay</p>
              <p className="text-sm mb-2">❌ <strong>Без дефиса</strong> (после существительного):</p>
              <p className="text-sm ml-4">The delay was <strong className="text-violet-700">two hours</strong> long</p>
            </div>
          </div>
        </Section>

        <Section title="📊 Number + Noun Compounds">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg p-4 border-l-4 border-purple-500">
              <h3 className="font-bold text-purple-800 mb-2">Time & Duration</h3>
              <div className="space-y-2 text-sm">
                <p>• a <strong>two-hour</strong> delay — <em>двухчасовая задержка</em></p>
                <p>• a <strong>three-day</strong> conference — <em>трёхдневная конференция</em></p>
                <p>• a <strong>ten-minute</strong> break — <em>десятиминутный перерыв</em></p>
                <p>• a <strong>five-year</strong> plan — <em>пятилетний план</em></p>
                <p>• a <strong>six-month</strong> project — <em>шестимесячный проект</em></p>
                <p>• a <strong>forty-five-minute</strong> lecture — <em>45-минутная лекция</em></p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg p-4 border-l-4 border-pink-500">
              <h3 className="font-bold text-pink-800 mb-2">Age & Measurements</h3>
              <div className="space-y-2 text-sm">
                <p>• a <strong>five-year-old</strong> child — <em>пятилетний ребёнок</em></p>
                <p>• a <strong>twenty-storey</strong> building — <em>двадцатиэтажное здание</em></p>
                <p>• a <strong>ten-kilometre</strong> race — <em>десятикилометровый забег</em></p>
                <p>• a <strong>six-foot-tall</strong> man — <em>мужчина ростом 6 футов</em></p>
                <p>• a <strong>three-bedroom</strong> apartment — <em>трёхкомнатная квартира</em></p>
                <p>• a <strong>two-litre</strong> bottle — <em>двухлитровая бутылка</em></p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg p-4 border-l-4 border-indigo-500">
              <h3 className="font-bold text-indigo-800 mb-2">Money & Cost</h3>
              <div className="space-y-2 text-sm">
                <p>• a <strong>hundred-dollar</strong> bill — <em>стодолларовая купюра</em></p>
                <p>• a <strong>million-pound</strong> house — <em>дом за миллион фунтов</em></p>
                <p>• a <strong>low-cost</strong> airline — <em>бюджетная авиакомпания</em></p>
                <p>• a <strong>high-price</strong> item — <em>дорогой товар</em></p>
                <p>• a <strong>fifty-euro</strong> fine — <em>штраф в 50 евро</em></p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-lg p-4 border-l-4 border-teal-500">
              <h3 className="font-bold text-teal-800 mb-2">Quality & Status</h3>
              <div className="space-y-2 text-sm">
                <p>• a <strong>first-class</strong> ticket — <em>билет первого класса</em></p>
                <p>• a <strong>full-time</strong> job — <em>работа на полный день</em></p>
                <p>• a <strong>part-time</strong> student — <em>студент-заочник</em></p>
                <p>• a <strong>last-minute</strong> decision — <em>решение в последнюю минуту</em></p>
                <p>• a <strong>state-of-the-art</strong> facility — <em>ультрасовременное оборудование</em></p>
              </div>
            </div>
          </div>
        </Section>

        <Section title="✍️ Adjective + Noun Compounds">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-amber-50 to-yellow-100 rounded-lg p-4 border-l-4 border-amber-500">
              <h3 className="font-bold text-amber-800 mb-2">Physical Properties</h3>
              <div className="space-y-2 text-sm">
                <p>• a <strong>long-term</strong> goal — <em>долгосрочная цель</em></p>
                <p>• a <strong>short-term</strong> solution — <em>краткосрочное решение</em></p>
                <p>• a <strong>high-speed</strong> train — <em>скоростной поезд</em></p>
                <p>• a <strong>low-fat</strong> diet — <em>диета с низким содержанием жира</em></p>
                <p>• a <strong>full-length</strong> film — <em>полнометражный фильм</em></p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-lg p-4 border-l-4 border-emerald-500">
              <h3 className="font-bold text-emerald-800 mb-2">Character & Reputation</h3>
              <div className="space-y-2 text-sm">
                <p>• a <strong>well-known</strong> author — <em>известный автор</em></p>
                <p>• a <strong>well-respected</strong> professor — <em>уважаемый профессор</em></p>
                <p>• a <strong>highly-skilled</strong> worker — <em>высококвалифицированный работник</em></p>
                <p>• a <strong>world-famous</strong> singer — <em>всемирно известный певец</em></p>
                <p>• a <strong>self-made</strong> millionaire — <em>миллионер, добившийся всего сам</em></p>
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
        <Section title="💫 Adverb + Adjective/Participle Compounds">
          <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 rounded-lg p-6 border-2 border-rose-400">
            <h2 className="text-2xl font-bold text-rose-900 mb-4">
              Усиливаем прилагательные наречиями!
            </h2>
            <p className="text-sm text-zinc-700 mb-4">
              Когда наречие усиливает прилагательное или причастие, они соединяются дефисом перед существительным.
            </p>
          </div>
        </Section>

        <Section title="🌟 Intensifiers + Adjectives">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-fuchsia-50 to-pink-100 rounded-lg p-4 border-l-4 border-fuchsia-500">
              <h3 className="font-bold text-fuchsia-800 mb-2">Emotional Impact</h3>
              <div className="space-y-2 text-sm">
                <p>• a <strong>heart-breakingly</strong> beautiful sunset — <em>до слёз красивый закат</em></p>
                <p>• a <strong>breath-takingly</strong> gorgeous view — <em>захватывающий дух вид</em></p>
                <p>• a <strong>stunningly</strong> handsome man — <em>ошеломительно красивый мужчина</em></p>
                <p>• an <strong>incredibly</strong> talented artist — <em>невероятно талантливый художник</em></p>
                <p>• an <strong>unbearably</strong> hot day — <em>невыносимо жаркий день</em></p>
                <p>• a <strong>painfully</strong> slow process — <em>мучительно медленный процесс</em></p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-violet-50 to-purple-100 rounded-lg p-4 border-l-4 border-violet-500">
              <h3 className="font-bold text-violet-800 mb-2">Quality & Standard</h3>
              <div className="space-y-2 text-sm">
                <p>• a <strong>highly-qualified</strong> specialist — <em>высококвалифицированный специалист</em></p>
                <p>• a <strong>poorly-designed</strong> website — <em>плохо спроектированный сайт</em></p>
                <p>• a <strong>beautifully-written</strong> novel — <em>прекрасно написанный роман</em></p>
                <p>• a <strong>carefully-planned</strong> event — <em>тщательно спланированное мероприятие</em></p>
                <p>• a <strong>badly-needed</strong> reform — <em>крайне необходимая реформа</em></p>
                <p>• a <strong>well-deserved</strong> victory — <em>заслуженная победа</em></p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-cyan-100 rounded-lg p-4 border-l-4 border-sky-500">
              <h3 className="font-bold text-sky-800 mb-2">Degree & Extent</h3>
              <div className="space-y-2 text-sm">
                <p>• a <strong>widely-used</strong> method — <em>широко используемый метод</em></p>
                <p>• a <strong>rarely-seen</strong> species — <em>редко встречающийся вид</em></p>
                <p>• a <strong>frequently-asked</strong> question — <em>часто задаваемый вопрос</em></p>
                <p>• a <strong>commonly-held</strong> belief — <em>общепринятое убеждение</em></p>
                <p>• a <strong>little-known</strong> fact — <em>малоизвестный факт</em></p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-100 rounded-lg p-4 border-l-4 border-emerald-500">
              <h3 className="font-bold text-emerald-800 mb-2">Manner & Style</h3>
              <div className="space-y-2 text-sm">
                <p>• a <strong>well-behaved</strong> child — <em>хорошо воспитанный ребёнок</em></p>
                <p>• a <strong>badly-behaved</strong> student — <em>плохо ведущий себя ученик</em></p>
                <p>• a <strong>smartly-dressed</strong> gentleman — <em>элегантно одетый джентльмен</em></p>
                <p>• a <strong>casually-dressed</strong> tourist — <em>неформально одетый турист</em></p>
                <p>• a <strong>neatly-arranged</strong> display — <em>аккуратно расставленная витрина</em></p>
              </div>
            </div>
          </div>
        </Section>

        <Section title="⚠️ Important Note: WELL vs GOOD">
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-4 border-l-4 border-amber-500">
            <h3 className="font-bold text-amber-900 mb-2">Особое внимание к WELL-:</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-amber-800">✅ Правильно:</p>
                <p>• a <strong>well-known</strong> author (хорошо известный автор)</p>
                <p>• a <strong>well-written</strong> book (хорошо написанная книга)</p>
                <p>• a <strong>well-paid</strong> job (хорошо оплачиваемая работа)</p>
              </div>
              <div>
                <p className="font-semibold text-red-700">❌ Неправильно:</p>
                <p>• ~~a good-known author~~ ← так не говорят!</p>
                <p>• ~~a good-written book~~ ← так не говорят!</p>
              </div>
              <p className="mt-3 text-amber-900 italic">
                💡 <strong>WELL</strong> используется с причастиями (known, written, paid),<br/>
                а <strong>GOOD</strong> — с существительными (a good book, a good job)
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
        <Section title="🎨 Order of Adjectives — Порядок прилагательных">
          <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-sky-50 rounded-lg p-6 border-2 border-indigo-400">
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">
              Когда несколько прилагательных идут подряд!
            </h2>
            <p className="text-sm text-zinc-700 mb-4">
              В английском есть ***строгий порядок*** прилагательных перед существительным. Нарушение этого порядка звучит неестественно для носителей языка.
            </p>
            <div className="bg-white rounded-lg p-5 border border-indigo-300 mb-4">
              <h3 className="font-bold text-indigo-800 mb-3 text-center">📐 Правильный порядок (OSASCOMP):</h3>
              <div className="grid grid-cols-1 md:grid-cols-7 gap-2 text-xs text-center">
                <div className="bg-red-100 rounded p-2 border border-red-300">
                  <strong className="text-red-700">1. Opinion</strong>
                  <p className="mt-1 text-red-600">beautiful, ugly, nice</p>
                </div>
                <div className="bg-orange-100 rounded p-2 border border-orange-300">
                  <strong className="text-orange-700">2. Size</strong>
                  <p className="mt-1 text-orange-600">large, small, tiny</p>
                </div>
                <div className="bg-yellow-100 rounded p-2 border border-yellow-300">
                  <strong className="text-yellow-700">3. Age</strong>
                  <p className="mt-1 text-yellow-600">old, young, new</p>
                </div>
                <div className="bg-green-100 rounded p-2 border border-green-300">
                  <strong className="text-green-700">4. Shape</strong>
                  <p className="mt-1 text-green-600">round, square</p>
                </div>
                <div className="bg-blue-100 rounded p-2 border border-blue-300">
                  <strong className="text-blue-700">5. Colour</strong>
                  <p className="mt-1 text-blue-600">red, blue, white</p>
                </div>
                <div className="bg-indigo-100 rounded p-2 border border-indigo-300">
                  <strong className="text-indigo-700">6. Origin</strong>
                  <p className="mt-1 text-indigo-600">British, French</p>
                </div>
                <div className="bg-purple-100 rounded p-2 border border-purple-300">
                  <strong className="text-purple-700">7. Material</strong>
                  <p className="mt-1 text-purple-600">wooden, metal</p>
                </div>
              </div>
              <p className="text-center mt-3 text-sm font-bold text-indigo-900">+ <strong>Purpose/Noun</strong> (coffee table, dining room)</p>
            </div>
          </div>
        </Section>

        <Section title="📚 Examples with Multiple Adjectives">
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-rose-50 to-pink-100 rounded-lg p-4 border-l-4 border-rose-500">
              <p className="text-sm mb-2">✅ <strong className="text-rose-700">a beautiful large old round wooden table</strong></p>
              <p className="text-xs text-zinc-600 ml-4">Opinion → Size → Age → Shape → Material → Noun</p>
              <p className="text-xs text-zinc-600 ml-4 italic">красивый большой старый круглый деревянный стол</p>
            </div>

            <div className="bg-gradient-to-br from-violet-50 to-purple-100 rounded-lg p-4 border-l-4 border-violet-500">
              <p className="text-sm mb-2">✅ <strong className="text-violet-700">a lovely small new rectangular Italian dining table</strong></p>
              <p className="text-xs text-zinc-600 ml-4">Opinion → Size → Age → Shape → Origin → Purpose → Noun</p>
              <p className="text-xs text-zinc-600 ml-4 italic">прекрасный маленький новый прямоугольный итальянский обеденный стол</p>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-cyan-100 rounded-lg p-4 border-l-4 border-sky-500">
              <p className="text-sm mb-2">✅ <strong className="text-sky-700">an expensive big old square blue Chinese silk carpet</strong></p>
              <p className="text-xs text-zinc-600 ml-4">Opinion → Size → Age → Shape → Colour → Origin → Material → Noun</p>
              <p className="text-xs text-zinc-600 ml-4 italic">дорогой большой старый квадратный синий китайский шёлковый ковёр</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-100 rounded-lg p-4 border-l-4 border-emerald-500">
              <p className="text-sm mb-2">❌ <strong className="text-red-700">~~a wooden old large beautiful table~~</strong></p>
              <p className="text-xs text-zinc-600 ml-4">⚠️ Неправильный порядок! Звучит очень странно для носителей.</p>
            </div>
          </div>
        </Section>

        <Section title="💡 Practical Examples">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-amber-50 to-yellow-100 rounded-lg p-4">
              <h3 className="font-bold text-amber-800 mb-3">Common Phrases</h3>
              <div className="space-y-2 text-sm">
                <p>• a <strong>nice small modern flat</strong> — <em>хорошая маленькая современная квартира</em></p>
                <p>• a <strong>beautiful big old stone house</strong> — <em>красивый большой старый каменный дом</em></p>
                <p>• some <strong>lovely fresh red roses</strong> — <em>прекрасные свежие красные розы</em></p>
                <p>• an <strong>ugly large metal structure</strong> — <em>уродливое большое металлическое сооружение</em></p>
                <p>• a <strong>gorgeous tiny white kitten</strong> — <em>прелестный крошечный белый котёнок</em></p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-4">
              <h3 className="font-bold text-blue-800 mb-3">With Origin & Material</h3>
              <div className="space-y-2 text-sm">
                <p>• a <strong>stylish new Italian leather jacket</strong> — <em>стильная новая итальянская кожаная куртка</em></p>
                <p>• some <strong>expensive old French wine</strong> — <em>дорогое старое французское вино</em></p>
                <p>• a <strong>cheap modern Chinese plastic toy</strong> — <em>дешёвая современная китайская пластиковая игрушка</em></p>
                <p>• an <strong>elegant antique Japanese wooden box</strong> — <em>элегантная старинная японская деревянная коробка</em></p>
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
        <Section title="📌 Post-modifiers with Prepositional Phrases">
          <div className="bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-50 rounded-lg p-6 border-2 border-teal-400">
            <h2 className="text-2xl font-bold text-teal-900 mb-4">
              Уточняем существительное после него!
            </h2>
            <p className="text-sm text-zinc-700 mb-4">
              ***Post-modifiers*** — это фразы, которые идут ***после*** существительного и добавляют дополнительную информацию. Чаще всего это предложные фразы (prepositional phrases).
            </p>
          </div>
        </Section>

        <Section title="🔗 Common Prepositional Phrases">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg p-4 border-l-4 border-purple-500">
              <h3 className="font-bold text-purple-800 mb-2">Location & Position</h3>
              <div className="space-y-2 text-sm">
                <p>• the house <strong>in the garden</strong> — <em>дом в саду</em></p>
                <p>• the woman <strong>at the door</strong> — <em>женщина у двери</em></p>
                <p>• the café <strong>on the corner</strong> — <em>кафе на углу</em></p>
                <p>• the bridge <strong>over the river</strong> — <em>мост через реку</em></p>
                <p>• the painting <strong>on the wall</strong> — <em>картина на стене</em></p>
                <p>• the car <strong>in front of the building</strong> — <em>машина перед зданием</em></p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg p-4 border-l-4 border-pink-500">
              <h3 className="font-bold text-pink-800 mb-2">Possession & Relationship</h3>
              <div className="space-y-2 text-sm">
                <p>• the roof <strong>of the house</strong> — <em>крыша дома</em></p>
                <p>• the importance <strong>of education</strong> — <em>важность образования</em></p>
                <p>• the arrival <strong>of the guests</strong> — <em>прибытие гостей</em></p>
                <p>• the cost <strong>of living</strong> — <em>стоимость жизни</em></p>
                <p>• a sense <strong>of achievement</strong> — <em>чувство выполненного долга</em></p>
                <p>• a lack <strong>of confidence</strong> — <em>недостаток уверенности</em></p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg p-4 border-l-4 border-indigo-500">
              <h3 className="font-bold text-indigo-800 mb-2">Time & Duration</h3>
              <div className="space-y-2 text-sm">
                <p>• the meeting <strong>at 3 o'clock</strong> — <em>встреча в 3 часа</em></p>
                <p>• the events <strong>of last year</strong> — <em>события прошлого года</em></p>
                <p>• the conference <strong>in September</strong> — <em>конференция в сентябре</em></p>
                <p>• a holiday <strong>in summer</strong> — <em>отпуск летом</em></p>
                <p>• the situation <strong>at the moment</strong> — <em>ситуация в данный момент</em></p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-100 rounded-lg p-4 border-l-4 border-emerald-500">
              <h3 className="font-bold text-emerald-800 mb-2">Purpose & Material</h3>
              <div className="space-y-2 text-sm">
                <p>• a tool <strong>for cutting wood</strong> — <em>инструмент для резки дерева</em></p>
                <p>• a place <strong>for relaxation</strong> — <em>место для отдыха</em></p>
                <p>• a dress <strong>made of silk</strong> — <em>платье из шёлка</em></p>
                <p>• a ring <strong>made from gold</strong> — <em>кольцо из золота</em></p>
                <p>• equipment <strong>for the laboratory</strong> — <em>оборудование для лаборатории</em></p>
              </div>
            </div>
          </div>
        </Section>

        <Section title="🎯 Complex Examples with Multiple Post-modifiers">
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-violet-100 to-purple-100 rounded-lg p-4 border-l-4 border-violet-500">
              <p className="text-sm font-semibold text-violet-900">
                the <strong>importance</strong> <span className="text-violet-700">of education</span> <span className="text-purple-700">for society</span> <span className="text-fuchsia-700">in the modern world</span>
              </p>
              <p className="text-xs text-zinc-600 mt-2 italic">важность образования для общества в современном мире</p>
            </div>

            <div className="bg-gradient-to-r from-sky-100 to-cyan-100 rounded-lg p-4 border-l-4 border-sky-500">
              <p className="text-sm font-semibold text-sky-900">
                the <strong>house</strong> <span className="text-sky-700">on the hill</span> <span className="text-cyan-700">with a red roof</span> <span className="text-teal-700">near the forest</span>
              </p>
              <p className="text-xs text-zinc-600 mt-2 italic">дом на холме с красной крышей рядом с лесом</p>
            </div>

            <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-4 border-l-4 border-amber-500">
              <p className="text-sm font-semibold text-amber-900">
                a <strong>discussion</strong> <span className="text-amber-700">about climate change</span> <span className="text-orange-700">at the conference</span> <span className="text-red-700">in Paris</span>
              </p>
              <p className="text-xs text-zinc-600 mt-2 italic">дискуссия об изменении климата на конференции в Париже</p>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 6) {
    return (
      <>
        <Section title="🔄 Participle Clauses as Post-modifiers">
          <div className="bg-gradient-to-br from-fuchsia-50 via-pink-50 to-rose-50 rounded-lg p-6 border-2 border-fuchsia-400">
            <h2 className="text-2xl font-bold text-fuchsia-900 mb-4">
              Причастные обороты после существительного
            </h2>
            <p className="text-sm text-zinc-700 mb-4">
              ***Participle clauses*** (причастные обороты) — это ещё один способ добавить информацию после существительного. Они могут быть активными (-ing) или пассивными (-ed/V3).
            </p>
          </div>
        </Section>

        <Section title="▶️ Present Participle (-ing) — Active Meaning">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-4 border-l-4 border-blue-500 mb-4">
            <h3 className="font-bold text-blue-800 mb-3">Активное действие (who/which + verb)</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p>• the woman <strong className="text-blue-700">standing at the door</strong></p>
                <p className="text-xs text-zinc-600 ml-4">= the woman who is standing at the door</p>
                <p className="text-xs text-zinc-600 ml-4 italic">женщина, стоящая у двери</p>
              </div>
              <div>
                <p>• the train <strong className="text-blue-700">leaving from platform 3</strong></p>
                <p className="text-xs text-zinc-600 ml-4">= the train which is leaving from platform 3</p>
                <p className="text-xs text-zinc-600 ml-4 italic">поезд, отправляющийся с 3-й платформы</p>
              </div>
              <div>
                <p>• people <strong className="text-blue-700">living in cities</strong></p>
                <p className="text-xs text-zinc-600 ml-4">= people who live in cities</p>
                <p className="text-xs text-zinc-600 ml-4 italic">люди, живущие в городах</p>
              </div>
              <div>
                <p>• the child <strong className="text-blue-700">playing in the garden</strong></p>
                <p className="text-xs text-zinc-600 ml-4">= the child who is playing in the garden</p>
                <p className="text-xs text-zinc-600 ml-4 italic">ребёнок, играющий в саду</p>
              </div>
            </div>
          </div>
        </Section>

        <Section title="⏹️ Past Participle (-ed/V3) — Passive Meaning">
          <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg p-4 border-l-4 border-purple-500 mb-4">
            <h3 className="font-bold text-purple-800 mb-3">Пассивное действие (which is/was + V3)</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p>• the book <strong className="text-purple-700">written by Tolkien</strong></p>
                <p className="text-xs text-zinc-600 ml-4">= the book which was written by Tolkien</p>
                <p className="text-xs text-zinc-600 ml-4 italic">книга, написанная Толкином</p>
              </div>
              <div>
                <p>• the house <strong className="text-purple-700">built in 1920</strong></p>
                <p className="text-xs text-zinc-600 ml-4">= the house which was built in 1920</p>
                <p className="text-xs text-zinc-600 ml-4 italic">дом, построенный в 1920 году</p>
              </div>
              <div>
                <p>• the documents <strong className="text-purple-700">sent yesterday</strong></p>
                <p className="text-xs text-zinc-600 ml-4">= the documents which were sent yesterday</p>
                <p className="text-xs text-zinc-600 ml-4 italic">документы, отправленные вчера</p>
              </div>
              <div>
                <p>• the car <strong className="text-purple-700">stolen last week</strong></p>
                <p className="text-xs text-zinc-600 ml-4">= the car which was stolen last week</p>
                <p className="text-xs text-zinc-600 ml-4 italic">машина, украденная на прошлой неделе</p>
              </div>
            </div>
          </div>
        </Section>

        <Section title="🎯 Combining Everything: Complex Noun Phrases">
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-rose-100 via-pink-100 to-fuchsia-100 rounded-lg p-4 border-2 border-rose-400">
              <p className="text-sm font-bold text-rose-900 mb-2">
                the <strong>beautiful old stone house</strong> <span className="text-rose-700">with a red roof</span> <span className="text-pink-700">standing on the hill</span> <span className="text-fuchsia-700">overlooking the sea</span>
              </p>
              <div className="text-xs text-zinc-700 space-y-1 ml-4">
                <p>• Pre-modifiers: beautiful old stone</p>
                <p>• Head noun: house</p>
                <p>• Post-modifier (prepositional phrase): with a red roof</p>
                <p>• Post-modifier (present participle): standing on the hill</p>
                <p>• Post-modifier (present participle): overlooking the sea</p>
              </div>
              <p className="text-xs text-zinc-600 ml-4 mt-2 italic">
                красивый старый каменный дом с красной крышей, стоящий на холме с видом на море
              </p>
            </div>

            <div className="bg-gradient-to-r from-indigo-100 via-blue-100 to-sky-100 rounded-lg p-4 border-2 border-indigo-400">
              <p className="text-sm font-bold text-indigo-900 mb-2">
                a <strong>highly-qualified specialist</strong> <span className="text-indigo-700">working in genetics</span> <span className="text-blue-700">trained at Harvard</span>
              </p>
              <div className="text-xs text-zinc-700 space-y-1 ml-4">
                <p>• Pre-modifier (compound): highly-qualified</p>
                <p>• Head noun: specialist</p>
                <p>• Post-modifier (present participle): working in genetics</p>
                <p>• Post-modifier (past participle): trained at Harvard</p>
              </div>
              <p className="text-xs text-zinc-600 ml-4 mt-2 italic">
                высококвалифицированный специалист, работающий в генетике, обученный в Гарварде
              </p>
            </div>

            <div className="bg-gradient-to-r from-emerald-100 via-teal-100 to-cyan-100 rounded-lg p-4 border-2 border-emerald-400">
              <p className="text-sm font-bold text-emerald-900 mb-2">
                the <strong>new government policy</strong> <span className="text-emerald-700">on climate change</span> <span className="text-teal-700">announced yesterday</span> <span className="text-cyan-700">affecting millions of people</span>
              </p>
              <div className="text-xs text-zinc-700 space-y-1 ml-4">
                <p>• Pre-modifiers: new government</p>
                <p>• Head noun: policy</p>
                <p>• Post-modifier (prepositional phrase): on climate change</p>
                <p>• Post-modifier (past participle): announced yesterday</p>
                <p>• Post-modifier (present participle): affecting millions of people</p>
              </div>
              <p className="text-xs text-zinc-600 ml-4 mt-2 italic">
                новая государственная политика по изменению климата, объявленная вчера, затрагивающая миллионы людей
              </p>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 7) {
    const exercises = [
      {
        instruction: "Put the adjectives in the correct order",
        question: "I bought a ___ ___ ___ ___ table.",
        options: ["wooden / beautiful / small / round", "small / beautiful / round / wooden", "beautiful / small / round / wooden", "round / small / beautiful / wooden"],
        correctIndex: 2,
        explanation: "Opinion → Size → Shape → Material: beautiful small round wooden"
      },
      {
        instruction: "Choose the correct compound modifier",
        question: "It was a ___ delay at the airport.",
        options: ["three-hours", "three-hour", "three hour", "three-hours'"],
        correctIndex: 1,
        explanation: "Compound modifiers with numbers take singular form and hyphen: three-hour delay"
      },
      {
        instruction: "Select the correct phrase",
        question: "She is a ___ professional.",
        options: ["well-known", "good-known", "well-knew", "good-knew"],
        correctIndex: 0,
        explanation: "We use 'well' with participles: well-known, well-written, well-paid"
      },
      {
        instruction: "Choose the correct post-modifier",
        question: "The house ___ needs renovation.",
        options: ["building in 1920", "built in 1920", "to build in 1920", "build in 1920"],
        correctIndex: 1,
        explanation: "Use past participle for passive meaning: built in 1920 (which was built in 1920)"
      },
      {
        instruction: "Put the adjectives in the correct order",
        question: "They live in an ___ ___ ___ ___ house.",
        options: ["expensive / Italian / large / old", "large / expensive / old / Italian", "expensive / large / old / Italian", "old / large / expensive / Italian"],
        correctIndex: 2,
        explanation: "Opinion → Size → Age → Origin: expensive large old Italian"
      },
      {
        instruction: "Choose the correct compound modifier",
        question: "The book was ___.",
        options: ["beautifully-write", "beautiful-written", "beautifully-written", "beautiful-write"],
        correctIndex: 2,
        explanation: "Adverb + past participle: beautifully-written (adverb form: beautifully, not beautiful)"
      },
      {
        instruction: "Select the correct phrase",
        question: "I need a ___ apartment.",
        options: ["two-bedrooms", "two-bedroom", "two bedrooms", "two's bedroom"],
        correctIndex: 1,
        explanation: "Compound modifiers use singular form with hyphen before nouns: two-bedroom apartment"
      },
      {
        instruction: "Choose the correct post-modifier",
        question: "The woman ___ is my teacher.",
        options: ["stand at the door", "standing at the door", "stood at the door", "to stand at the door"],
        correctIndex: 1,
        explanation: "Use present participle for active meaning: standing at the door (who is standing)"
      },
      {
        instruction: "Put the adjectives in the correct order",
        question: "She wore a ___ ___ ___ ___ dress.",
        options: ["silk / beautiful / long / red", "beautiful / long / red / silk", "long / beautiful / silk / red", "red / long / beautiful / silk"],
        correctIndex: 1,
        explanation: "Opinion → Size → Colour → Material: beautiful long red silk"
      },
      {
        instruction: "Choose the correct compound modifier",
        question: "He's a ___ employee.",
        options: ["hard-work", "hard-working", "hardly-working", "hard-worked"],
        correctIndex: 1,
        explanation: "Hard-working means 'someone who works hard' (present participle for active meaning)"
      },
      {
        instruction: "Select the correct phrase",
        question: "It was a ___ sunset.",
        options: ["breath-takingly beautiful", "breath-taking beautiful", "breathtaking beautiful", "beautiful breath-taking"],
        correctIndex: 0,
        explanation: "Adverb + adjective with hyphen: breath-takingly beautiful (intensifier before adjective)"
      },
      {
        instruction: "Choose the correct post-modifier combination",
        question: "The report ___ ___ was impressive.",
        options: ["writing by experts / published yesterday", "written by experts / publishing yesterday", "written by experts / published yesterday", "writing by experts / publishing yesterday"],
        correctIndex: 2,
        explanation: "Both are passive: written by experts (was written), published yesterday (was published)"
      },
    ];

    return (
      <>
        <Section title="📝 Final Test — Complex Noun Phrases">
          <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-lg p-6 border-2 border-indigo-400 mb-6">
            <h2 className="text-2xl font-bold text-indigo-900 mb-3">
              Test Your Knowledge!
            </h2>
            <p className="text-sm text-zinc-700">
              Select the correct option for each question. Check your answers at the end!
            </p>
          </div>
        </Section>

        <Section title="Questions">
          <CheckableExercise exercises={exercises} />
        </Section>

        <Section title="📋 Quick Reference Cheat Sheet">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-violet-50 to-purple-100 rounded-lg p-4 border-l-4 border-violet-500">
              <h3 className="font-bold text-violet-800 mb-2">Adjective Order (OSASCOMP)</h3>
              <div className="text-xs space-y-1">
                <p>1. <strong>Opinion</strong> — beautiful, ugly, nice</p>
                <p>2. <strong>Size</strong> — large, small, tiny</p>
                <p>3. <strong>Age</strong> — old, young, new</p>
                <p>4. <strong>Shape</strong> — round, square</p>
                <p>5. <strong>Colour</strong> — red, blue, white</p>
                <p>6. <strong>Origin</strong> — British, French</p>
                <p>7. <strong>Material</strong> — wooden, metal</p>
                <p>8. <strong>Purpose</strong> — sleeping (bag)</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-cyan-100 rounded-lg p-4 border-l-4 border-sky-500">
              <h3 className="font-bold text-sky-800 mb-2">Compound Modifiers</h3>
              <div className="text-xs space-y-1">
                <p>• <strong>Number + Noun:</strong> two-hour delay</p>
                <p>• <strong>Adjective + Noun:</strong> long-term goal</p>
                <p>• <strong>Adverb + Participle:</strong> well-known, beautifully-written</p>
                <p>• <strong>Use hyphen</strong> before noun</p>
                <p>• <strong>No hyphen</strong> after noun</p>
                <p className="text-red-600 font-semibold mt-2">⚠️ WELL (not GOOD) with participles!</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-100 rounded-lg p-4 border-l-4 border-emerald-500">
              <h3 className="font-bold text-emerald-800 mb-2">Post-modifiers</h3>
              <div className="text-xs space-y-1">
                <p>• <strong>Prepositional phrases:</strong> the house <em>in the garden</em></p>
                <p>• <strong>Present participle (-ing):</strong> the woman <em>standing at the door</em></p>
                <p>• <strong>Past participle (-ed/V3):</strong> the book <em>written by Tolkien</em></p>
                <p className="mt-2 text-emerald-700">Can combine multiple post-modifiers!</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-pink-100 rounded-lg p-4 border-l-4 border-rose-500">
              <h3 className="font-bold text-rose-800 mb-2">Full Complex Example</h3>
              <div className="text-xs space-y-2">
                <p className="font-semibold">a beautiful large old stone house with a red roof standing on the hill</p>
                <div className="ml-2 space-y-1 text-zinc-700">
                  <p>• Pre: beautiful (opinion)</p>
                  <p>• Pre: large (size)</p>
                  <p>• Pre: old (age)</p>
                  <p>• Pre: stone (material)</p>
                  <p>• Head: <strong>house</strong></p>
                  <p>• Post: with a red roof (prep)</p>
                  <p>• Post: standing on the hill (-ing)</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section title="🎓 Congratulations!">
          <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-amber-400 text-center">
            <div className="text-5xl mb-3">🏆</div>
            <h2 className="text-2xl font-bold text-amber-900 mb-3">
              You've completed Complex Noun Phrases!
            </h2>
            <p className="text-sm text-zinc-700 max-w-2xl mx-auto">
              You now know how to create sophisticated noun phrases with multiple pre-modifiers, compound modifiers with hyphens, and post-modifiers using prepositional phrases and participle clauses. This is essential for academic writing and advanced English!
            </p>
          </div>
        </Section>
      </>
    );
  }

  return null;
}
