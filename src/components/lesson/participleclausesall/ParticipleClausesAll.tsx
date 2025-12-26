"use client";

import { Section } from "@/components/ui/Section";
import CheckableExercise from "@/components/lesson/CheckableExercise";

interface ParticipleClausesAllProps {
  step: number;
}

export default function ParticipleClausesAll({ step }: ParticipleClausesAllProps) {
  if (step === 1) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            Причастные обороты: все типы
          </h1>

          <Section title="Что такое причастные обороты?" className="bg-gradient-to-r from-purple-100 to-pink-100">
            <p className="text-lg leading-relaxed mb-4">
              ***Причастные обороты (Participle Clauses)*** — это элегантный способ сделать английскую речь более лаконичной и изящной. Они заменяют полные придаточные предложения, делая текст короче и формальнее. Причастные обороты особенно распространены в письменном английском, новостных текстах, научной литературе и официальной речи.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <p className="font-semibold text-purple-700 mb-3">Сравните предложения:</p>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-600">Полное придаточное:</p>
                  <p className="text-lg">The man <span className="text-purple-600">who was sitting</span> next to me started talking.</p>
                  <p className="text-gray-500 text-sm">Мужчина, который сидел рядом со мной, начал разговаривать.</p>
                </div>
                <div>
                  <p className="text-gray-600">Причастный оборот:</p>
                  <p className="text-lg">The man <span className="text-pink-600">sitting</span> next to me started talking.</p>
                  <p className="text-gray-500 text-sm">Мужчина, сидевший рядом со мной, начал разговаривать.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="font-semibold text-purple-700 mb-3">Ещё пример:</p>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-600">Полное придаточное:</p>
                  <p className="text-lg"><span className="text-purple-600">Because she was</span> tired, she went to bed early.</p>
                  <p className="text-gray-500 text-sm">Так как она устала, она легла спать рано.</p>
                </div>
                <div>
                  <p className="text-gray-600">Причастный оборот:</p>
                  <p className="text-lg"><span className="text-pink-600">Being</span> tired, she went to bed early.</p>
                  <p className="text-gray-500 text-sm">Будучи уставшей, она легла спать рано.</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="Три основных типа причастных оборотов" className="bg-gradient-to-r from-blue-100 to-purple-100">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-blue-700 mb-3">1. Причастие настоящего времени (-ing)</h3>
                <p className="text-lg mb-3">Используется для активных действий, происходящих одновременно, или для указания причины:</p>
                <div className="space-y-3 ml-4">
                  <div>
                    <p className="text-lg"><span className="text-blue-600">Walking</span> down the street, I saw my old teacher.</p>
                    <p className="text-gray-500 text-sm">Идя по улице, я увидел своего старого учителя.</p>
                  </div>
                  <div>
                    <p className="text-lg"><span className="text-blue-600">Being French</span>, she speaks French fluently.</p>
                    <p className="text-gray-500 text-sm">Будучи француженкой, она свободно говорит по-французски.</p>
                  </div>
                  <div>
                    <p className="text-lg"><span className="text-blue-600">Not knowing</span> what to say, I remained silent.</p>
                    <p className="text-gray-500 text-sm">Не зная, что сказать, я молчал.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                <h3 className="text-2xl font-bold text-purple-700 mb-3">2. Причастие прошедшего времени (-ed/V3)</h3>
                <p className="text-lg mb-3">Используется для пассивных действий или завершённых состояний:</p>
                <div className="space-y-3 ml-4">
                  <div>
                    <p className="text-lg"><span className="text-purple-600">Written in 1984</span>, the book became a bestseller.</p>
                    <p className="text-gray-500 text-sm">Написанная в 1984 году, книга стала бестселлером.</p>
                  </div>
                  <div>
                    <p className="text-lg"><span className="text-purple-600">Shocked by the news</span>, she couldn't speak.</p>
                    <p className="text-gray-500 text-sm">Шокированная новостью, она не могла говорить.</p>
                  </div>
                  <div>
                    <p className="text-lg"><span className="text-purple-600">Built in the 15th century</span>, the cathedral attracts many tourists.</p>
                    <p className="text-gray-500 text-sm">Построенный в 15 веке, собор привлекает много туристов.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-pink-500">
                <h3 className="text-2xl font-bold text-pink-700 mb-3">3. Перфектное причастие (having done / having been done)</h3>
                <p className="text-lg mb-3">Используется, чтобы подчеркнуть, что одно действие произошло раньше другого:</p>
                <div className="space-y-3 ml-4">
                  <div>
                    <p className="text-lg"><span className="text-pink-600">Having finished</span> my homework, I went out to play.</p>
                    <p className="text-gray-500 text-sm">Закончив домашнюю работу, я вышел играть.</p>
                  </div>
                  <div>
                    <p className="text-lg"><span className="text-pink-600">Having been told</span> the truth, she forgave him.</p>
                    <p className="text-gray-500 text-sm">Узнав правду, она простила его.</p>
                  </div>
                  <div>
                    <p className="text-lg"><span className="text-pink-600">Having lived</span> in Paris for ten years, he speaks French perfectly.</p>
                    <p className="text-gray-500 text-sm">Прожив в Париже десять лет, он говорит по-французски безупречно.</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="Зачем использовать причастные обороты?" className="bg-gradient-to-r from-pink-100 to-purple-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h4 className="font-bold text-purple-700 mb-2">✓ Лаконичность</h4>
                <p className="text-gray-700">Меньше слов при том же смысле</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h4 className="font-bold text-purple-700 mb-2">✓ Формальность</h4>
                <p className="text-gray-700">Характерно для академического и делового стиля</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h4 className="font-bold text-purple-700 mb-2">✓ Плавность</h4>
                <p className="text-gray-700">Создаёт более гладкие связи между идеями</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h4 className="font-bold text-purple-700 mb-2">✓ Изящество</h4>
                <p className="text-gray-700">Демонстрирует продвинутый уровень языка</p>
              </div>
            </div>
          </Section>
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 p-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
            Причастие настоящего времени (-ing)
          </h1>

          <Section title="Одновременные действия" className="bg-gradient-to-r from-blue-100 to-cyan-100">
            <p className="text-lg leading-relaxed mb-4">
              Когда два действия происходят ***одновременно***, мы можем использовать причастие настоящего времени (-ing), чтобы объединить их. Причастный оборот описывает фоновое действие.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <p className="font-semibold text-blue-700 mb-3">Формула:</p>
              <p className="text-xl text-center text-blue-600 font-mono mb-4">-ing + дополнение, + главное предложение</p>
              <div className="space-y-4 mt-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-lg mb-1"><span className="text-blue-600">Walking through the park</span>, I noticed the cherry blossoms.</p>
                  <p className="text-gray-500 text-sm">Гуляя по парку, я заметил цветущую сакуру.</p>
                  <p className="text-gray-600 text-sm mt-1">= While I was walking through the park, I noticed the cherry blossoms.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-lg mb-1"><span className="text-blue-600">Listening to music</span>, she did her homework.</p>
                  <p className="text-gray-500 text-sm">Слушая музыку, она делала домашнее задание.</p>
                  <p className="text-gray-600 text-sm mt-1">= While she was listening to music, she did her homework.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-lg mb-1"><span className="text-blue-600">Waiting for the bus</span>, he checked his phone.</p>
                  <p className="text-gray-500 text-sm">Ожидая автобус, он проверил телефон.</p>
                  <p className="text-gray-600 text-sm mt-1">= While he was waiting for the bus, he checked his phone.</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="Описание людей и предметов" className="bg-gradient-to-r from-cyan-100 to-teal-100">
            <p className="text-lg leading-relaxed mb-4">
              Мы используем причастие настоящего времени, чтобы ***заменить придаточные определительные*** (who/which/that + глагол), описывая людей или предметы, которые активно что-то делают.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <div className="space-y-4">
                <div className="border-l-4 border-cyan-500 pl-4">
                  <p className="text-lg mb-1">The woman <span className="text-cyan-600">sitting on the bench</span> is my aunt.</p>
                  <p className="text-gray-500 text-sm">Женщина, сидящая на скамейке, — моя тётя.</p>
                  <p className="text-gray-600 text-sm mt-1">= The woman who is sitting on the bench is my aunt.</p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-4">
                  <p className="text-lg mb-1">Anyone <span className="text-cyan-600">wishing to attend</span> should register online.</p>
                  <p className="text-gray-500 text-sm">Любой, желающий посетить, должен зарегистрироваться онлайн.</p>
                  <p className="text-gray-600 text-sm mt-1">= Anyone who wishes to attend should register online.</p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-4">
                  <p className="text-lg mb-1">The road <span className="text-cyan-600">connecting the two cities</span> needs repairs.</p>
                  <p className="text-gray-500 text-sm">Дорога, соединяющая два города, нуждается в ремонте.</p>
                  <p className="text-gray-600 text-sm mt-1">= The road which connects the two cities needs repairs.</p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-4">
                  <p className="text-lg mb-1">People <span className="text-cyan-600">living in glass houses</span> shouldn't throw stones.</p>
                  <p className="text-gray-500 text-sm">Людям, живущим в стеклянных домах, не стоит бросать камни. (Пословица)</p>
                  <p className="text-gray-600 text-sm mt-1">= People who live in glass houses shouldn't throw stones.</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="Указание причины" className="bg-gradient-to-r from-teal-100 to-blue-100">
            <p className="text-lg leading-relaxed mb-4">
              Причастие настоящего времени может объяснять ***причину***, заменяя придаточные с "because/since/as".
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <div className="space-y-4">
                <div className="border-l-4 border-teal-500 pl-4">
                  <p className="text-lg mb-1"><span className="text-teal-600">Being tired</span>, I went to bed early.</p>
                  <p className="text-gray-500 text-sm">Будучи уставшим, я лёг спать рано.</p>
                  <p className="text-gray-600 text-sm mt-1">= Because I was tired, I went to bed early.</p>
                </div>
                <div className="border-l-4 border-teal-500 pl-4">
                  <p className="text-lg mb-1"><span className="text-teal-600">Not having a car</span>, she takes the bus everywhere.</p>
                  <p className="text-gray-500 text-sm">Не имея машины, она везде ездит на автобусе.</p>
                  <p className="text-gray-600 text-sm mt-1">= Since she doesn't have a car, she takes the bus everywhere.</p>
                </div>
                <div className="border-l-4 border-teal-500 pl-4">
                  <p className="text-lg mb-1"><span className="text-teal-600">Feeling unwell</span>, he decided to stay home.</p>
                  <p className="text-gray-500 text-sm">Чувствуя недомогание, он решил остаться дома.</p>
                  <p className="text-gray-600 text-sm mt-1">= As he was feeling unwell, he decided to stay home.</p>
                </div>
                <div className="border-l-4 border-teal-500 pl-4">
                  <p className="text-lg mb-1"><span className="text-teal-600">Living nearby</span>, I can walk to work.</p>
                  <p className="text-gray-500 text-sm">Живя рядом, я могу ходить на работу пешком.</p>
                  <p className="text-gray-600 text-sm mt-1">= Because I live nearby, I can walk to work.</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="Важно: Being + прилагательное/существительное" className="bg-gradient-to-r from-blue-100 to-cyan-100">
            <p className="text-lg leading-relaxed mb-4">
              Конструкция ***"Being + прилагательное/существительное"*** очень распространена для описания постоянных характеристик или состояний.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="space-y-3">
                <div>
                  <p className="text-lg"><span className="text-blue-600">Being French</span>, she appreciates good wine.</p>
                  <p className="text-gray-500 text-sm">Будучи француженкой, она ценит хорошее вино.</p>
                </div>
                <div>
                  <p className="text-lg"><span className="text-blue-600">Being a doctor</span>, he understood the risks.</p>
                  <p className="text-gray-500 text-sm">Будучи врачом, он понимал риски.</p>
                </div>
                <div>
                  <p className="text-lg"><span className="text-blue-600">Being intelligent</span>, she solved the problem quickly.</p>
                  <p className="text-gray-500 text-sm">Будучи умной, она быстро решила проблему.</p>
                </div>
                <div>
                  <p className="text-lg"><span className="text-blue-600">Being allergic to nuts</span>, I always check food labels.</p>
                  <p className="text-gray-500 text-sm">Имея аллергию на орехи, я всегда проверяю этикетки.</p>
                </div>
                <div>
                  <p className="text-lg"><span className="text-blue-600">Being the eldest child</span>, he inherited the house.</p>
                  <p className="text-gray-500 text-sm">Будучи старшим ребёнком, он унаследовал дом.</p>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>
    );
  }

  if (step === 3) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 p-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
            Причастие прошедшего времени (-ed/V3)
          </h1>

          <Section title="Пассивные действия" className="bg-gradient-to-r from-purple-100 to-violet-100">
            <p className="text-lg leading-relaxed mb-4">
              ***Причастие прошедшего времени*** имеет пассивное значение. Оно описывает действия, совершённые ***над*** кем-то или чем-то, а не ***кем-то***. Используется третья форма глагола (V3).
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <p className="font-semibold text-purple-700 mb-3">Формула:</p>
              <p className="text-xl text-center text-purple-600 font-mono mb-4">V3 + (by/in/on/etc.), + главное предложение</p>
              <div className="space-y-4 mt-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="text-lg mb-1"><span className="text-purple-600">Written in 1984</span>, the book became controversial.</p>
                  <p className="text-gray-500 text-sm">Написанная в 1984 году, книга стала спорной.</p>
                  <p className="text-gray-600 text-sm mt-1">= The book, which was written in 1984, became controversial.</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="text-lg mb-1"><span className="text-purple-600">Built in the 15th century</span>, the cathedral is magnificent.</p>
                  <p className="text-gray-500 text-sm">Построенный в 15 веке, собор великолепен.</p>
                  <p className="text-gray-600 text-sm mt-1">= The cathedral, which was built in the 15th century, is magnificent.</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="text-lg mb-1"><span className="text-purple-600">Shocked by the news</span>, she sat down in silence.</p>
                  <p className="text-gray-500 text-sm">Шокированная новостью, она молча села.</p>
                  <p className="text-gray-600 text-sm mt-1">= She was shocked by the news and sat down in silence.</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="Описание людей и предметов" className="bg-gradient-to-r from-violet-100 to-indigo-100">
            <p className="text-lg leading-relaxed mb-4">
              Как и в случае с причастием настоящего времени, мы используем причастие прошедшего времени для ***замены придаточных определительных***, но с пассивным значением.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <div className="space-y-4">
                <div className="border-l-4 border-violet-500 pl-4">
                  <p className="text-lg mb-1">The products <span className="text-violet-600">sold in this shop</span> are all organic.</p>
                  <p className="text-gray-500 text-sm">Продукты, продаваемые в этом магазине, все органические.</p>
                  <p className="text-gray-600 text-sm mt-1">= The products which are sold in this shop are all organic.</p>
                </div>
                <div className="border-l-4 border-violet-500 pl-4">
                  <p className="text-lg mb-1">The house <span className="text-violet-600">damaged in the storm</span> needs repairs.</p>
                  <p className="text-gray-500 text-sm">Дом, повреждённый в шторм, нуждается в ремонте.</p>
                  <p className="text-gray-600 text-sm mt-1">= The house which was damaged in the storm needs repairs.</p>
                </div>
                <div className="border-l-4 border-violet-500 pl-4">
                  <p className="text-lg mb-1">The language <span className="text-violet-600">spoken in Brazil</span> is Portuguese.</p>
                  <p className="text-gray-500 text-sm">Язык, на котором говорят в Бразилии, — португальский.</p>
                  <p className="text-gray-600 text-sm mt-1">= The language which is spoken in Brazil is Portuguese.</p>
                </div>
                <div className="border-l-4 border-violet-500 pl-4">
                  <p className="text-lg mb-1">A person <span className="text-violet-600">bitten by a dog</span> should see a doctor.</p>
                  <p className="text-gray-500 text-sm">Человек, укушенный собакой, должен обратиться к врачу.</p>
                  <p className="text-gray-600 text-sm mt-1">= A person who has been bitten by a dog should see a doctor.</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="Указание причины или реакции" className="bg-gradient-to-r from-indigo-100 to-purple-100">
            <p className="text-lg leading-relaxed mb-4">
              Причастие прошедшего времени часто описывает ***эмоциональные реакции*** или ***причины, основанные на том, что произошло с человеком***.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <div className="space-y-4">
                <div className="border-l-4 border-indigo-500 pl-4">
                  <p className="text-lg mb-1"><span className="text-indigo-600">Exhausted from the journey</span>, they went straight to bed.</p>
                  <p className="text-gray-500 text-sm">Измождённые путешествием, они сразу легли спать.</p>
                  <p className="text-gray-600 text-sm mt-1">= Because they were exhausted from the journey, they went straight to bed.</p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <p className="text-lg mb-1"><span className="text-indigo-600">Impressed by her work</span>, they offered her a promotion.</p>
                  <p className="text-gray-500 text-sm">Впечатлённые её работой, они предложили ей повышение.</p>
                  <p className="text-gray-600 text-sm mt-1">= Because they were impressed by her work, they offered her a promotion.</p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <p className="text-lg mb-1"><span className="text-indigo-600">Confused by the instructions</span>, he asked for help.</p>
                  <p className="text-gray-500 text-sm">Запутавшись в инструкциях, он попросил помощи.</p>
                  <p className="text-gray-600 text-sm mt-1">= Because he was confused by the instructions, he asked for help.</p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <p className="text-lg mb-1"><span className="text-indigo-600">Terrified by the loud noise</span>, the cat ran away.</p>
                  <p className="text-gray-500 text-sm">Напуганная громким шумом, кошка убежала.</p>
                  <p className="text-gray-600 text-sm mt-1">= Because it was terrified by the loud noise, the cat ran away.</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="Типичные конструкции с Past Participle" className="bg-gradient-to-r from-purple-100 to-violet-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h4 className="font-bold text-purple-700 mb-3">Made/Created in + время/место</h4>
                <div className="space-y-2">
                  <div>
                    <p className="text-gray-700"><span className="text-purple-600">Made in Italy</span>, these shoes are expensive.</p>
                    <p className="text-gray-500 text-sm">Сделанные в Италии, эти туфли дорогие.</p>
                  </div>
                  <div>
                    <p className="text-gray-700"><span className="text-purple-600">Created in 2004</span>, Facebook is huge now.</p>
                    <p className="text-gray-500 text-sm">Созданный в 2004, Facebook теперь огромен.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h4 className="font-bold text-purple-700 mb-3">Located/Situated in + место</h4>
                <div className="space-y-2">
                  <div>
                    <p className="text-gray-700"><span className="text-purple-600">Located in the city center</span>, the hotel is convenient.</p>
                    <p className="text-gray-500 text-sm">Расположенный в центре города, отель удобен.</p>
                  </div>
                  <div>
                    <p className="text-gray-700"><span className="text-purple-600">Situated on a hill</span>, the castle offers great views.</p>
                    <p className="text-gray-500 text-sm">Расположенный на холме, замок открывает отличные виды.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h4 className="font-bold text-purple-700 mb-3">Designed/Intended for + цель</h4>
                <div className="space-y-2">
                  <div>
                    <p className="text-gray-700"><span className="text-purple-600">Designed for children</span>, the app is very simple.</p>
                    <p className="text-gray-500 text-sm">Разработанное для детей, приложение очень простое.</p>
                  </div>
                  <div>
                    <p className="text-gray-700"><span className="text-purple-600">Intended for experts</span>, the book is difficult.</p>
                    <p className="text-gray-500 text-sm">Предназначенная для экспертов, книга сложная.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-md">
                <h4 className="font-bold text-purple-700 mb-3">Faced/Confronted with + проблема</h4>
                <div className="space-y-2">
                  <div>
                    <p className="text-gray-700"><span className="text-purple-600">Faced with a difficult choice</span>, she hesitated.</p>
                    <p className="text-gray-500 text-sm">Столкнувшись с трудным выбором, она колебалась.</p>
                  </div>
                  <div>
                    <p className="text-gray-700"><span className="text-purple-600">Confronted with the evidence</span>, he confessed.</p>
                    <p className="text-gray-500 text-sm">Столкнувшись с уликами, он признался.</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>
    );
  }

  if (step === 4) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 p-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-600">
            Перфектное причастие (Having done)
          </h1>

          <Section title="Having + V3 (активный залог)" className="bg-gradient-to-r from-pink-100 to-rose-100">
            <p className="text-lg leading-relaxed mb-4">
              Мы используем ***having + прошедшее причастие (V3)***, когда хотим подчеркнуть, что одно действие произошло ***раньше*** другого. Это особенно важно, когда последовательность действий имеет значение.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <p className="font-semibold text-pink-700 mb-3">Формула:</p>
              <p className="text-xl text-center text-pink-600 font-mono mb-4">Having + V3, + главное предложение</p>
              <div className="space-y-4 mt-4">
                <div className="border-l-4 border-pink-500 pl-4">
                  <p className="text-lg mb-1"><span className="text-pink-600">Having finished</span> her homework, she went out to play.</p>
                  <p className="text-gray-500 text-sm">Закончив домашнее задание, она вышла играть.</p>
                  <p className="text-gray-600 text-sm mt-1">= After she had finished her homework, she went out to play.</p>
                  <p className="text-gray-500 text-xs mt-1">Сначала: закончила задание → Потом: вышла играть</p>
                </div>
                <div className="border-l-4 border-pink-500 pl-4">
                  <p className="text-lg mb-1"><span className="text-pink-600">Having lived</span> in Paris for ten years, he speaks French fluently.</p>
                  <p className="text-gray-500 text-sm">Прожив в Париже десять лет, он свободно говорит по-французски.</p>
                  <p className="text-gray-600 text-sm mt-1">= Because he has lived in Paris for ten years, he speaks French fluently.</p>
                  <p className="text-gray-500 text-xs mt-1">Сначала: жил в Париже → Результат: говорит свободно</p>
                </div>
                <div className="border-l-4 border-pink-500 pl-4">
                  <p className="text-lg mb-1"><span className="text-pink-600">Having saved</span> enough money, they bought a house.</p>
                  <p className="text-gray-500 text-sm">Накопив достаточно денег, они купили дом.</p>
                  <p className="text-gray-600 text-sm mt-1">= After they had saved enough money, they bought a house.</p>
                  <p className="text-gray-500 text-xs mt-1">Сначала: накопили деньги → Потом: купили дом</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="Having been + V3 (пассивный залог)" className="bg-gradient-to-r from-rose-100 to-red-100">
            <p className="text-lg leading-relaxed mb-4">
              Мы используем ***having been + прошедшее причастие*** для пассивных действий, которые произошли раньше главного действия. Это сочетание перфектного аспекта с пассивным залогом.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <p className="font-semibold text-rose-700 mb-3">Формула:</p>
              <p className="text-xl text-center text-rose-600 font-mono mb-4">Having been + V3, + главное предложение</p>
              <div className="space-y-4 mt-4">
                <div className="border-l-4 border-rose-500 pl-4">
                  <p className="text-lg mb-1"><span className="text-rose-600">Having been told</span> the truth, she forgave him.</p>
                  <p className="text-gray-500 text-sm">Узнав правду, она простила его.</p>
                  <p className="text-gray-600 text-sm mt-1">= After she had been told the truth, she forgave him.</p>
                  <p className="text-gray-500 text-xs mt-1">Сначала: ей сказали правду → Потом: она простила</p>
                </div>
                <div className="border-l-4 border-rose-500 pl-4">
                  <p className="text-lg mb-1"><span className="text-rose-600">Having been warned</span> about the dangers, they were careful.</p>
                  <p className="text-gray-500 text-sm">Будучи предупреждёнными об опасностях, они были осторожны.</p>
                  <p className="text-gray-600 text-sm mt-1">= Because they had been warned about the dangers, they were careful.</p>
                  <p className="text-gray-500 text-xs mt-1">Сначала: их предупредили → Результат: были осторожны</p>
                </div>
                <div className="border-l-4 border-rose-500 pl-4">
                  <p className="text-lg mb-1"><span className="text-rose-600">Having been invited</span> to the party, I decided to go.</p>
                  <p className="text-gray-500 text-sm">Будучи приглашённым на вечеринку, я решил пойти.</p>
                  <p className="text-gray-600 text-sm mt-1">= After I had been invited to the party, I decided to go.</p>
                  <p className="text-gray-500 text-xs mt-1">Сначала: меня пригласили → Потом: я решил пойти</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="Когда использовать перфектное причастие vs обычное?" className="bg-gradient-to-r from-red-100 to-pink-100">
            <p className="text-lg leading-relaxed mb-4">
              Иногда можно использовать как обычное, так и перфектное причастие. Перфектное причастие используется, когда вы хотите ***подчеркнуть последовательность*** или когда одно действие ***явно завершено перед*** другим.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-red-700 mb-3">Оба варианта возможны (близкое время):</p>
                  <div className="space-y-2 ml-4">
                    <p className="text-lg">✓ <span className="text-red-600">Opening</span> the door, I saw a surprise party.</p>
                    <p className="text-lg">✓ <span className="text-red-600">Having opened</span> the door, I saw a surprise party.</p>
                    <p className="text-gray-500 text-sm">Открыв дверь, я увидел вечеринку-сюрприз.</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-red-700 mb-3">Перфектное причастие лучше (чёткая последовательность):</p>
                  <div className="space-y-2 ml-4">
                    <p className="text-lg">✗ <span className="text-gray-400">Studying</span> English for five years, she passed the exam.</p>
                    <p className="text-lg">✓ <span className="text-red-600">Having studied</span> English for five years, she passed the exam.</p>
                    <p className="text-gray-500 text-sm">Изучив английский пять лет, она сдала экзамен.</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-red-700 mb-3">Только перфектное причастие (одно действие должно завершиться первым):</p>
                  <div className="space-y-2 ml-4">
                    <p className="text-lg">✗ <span className="text-gray-400">Eating</span> dinner, we watched a movie.</p>
                    <p className="text-lg">✓ <span className="text-red-600">Having eaten</span> dinner, we watched a movie.</p>
                    <p className="text-gray-500 text-sm">Поужинав, мы посмотрели фильм.</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="Отрицательные формы перфектного причастия" className="bg-gradient-to-r from-pink-100 to-rose-100">
            <p className="text-lg leading-relaxed mb-4">
              Мы можем сделать перфектное причастие отрицательным, добавив ***not*** или ***never*** перед "having".
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="space-y-3">
                <div>
                  <p className="text-lg"><span className="text-pink-600">Not having studied</span>, he failed the exam.</p>
                  <p className="text-gray-500 text-sm">Не учившись, он провалил экзамен.</p>
                </div>
                <div>
                  <p className="text-lg"><span className="text-pink-600">Not having been invited</span>, she felt hurt.</p>
                  <p className="text-gray-500 text-sm">Не будучи приглашённой, она чувствовала себя задетой.</p>
                </div>
                <div>
                  <p className="text-lg"><span className="text-pink-600">Not having received</span> a reply, I sent another email.</p>
                  <p className="text-gray-500 text-sm">Не получив ответа, я отправил ещё одно письмо.</p>
                </div>
                <div>
                  <p className="text-lg"><span className="text-pink-600">Not having been informed</span>, we arrived late.</p>
                  <p className="text-gray-500 text-sm">Не будучи проинформированными, мы пришли поздно.</p>
                </div>
                <div>
                  <p className="text-lg"><span className="text-pink-600">Never having seen</span> snow before, she was amazed.</p>
                  <p className="text-gray-500 text-sm">Никогда не видев снега раньше, она была изумлена.</p>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>
    );
  }

  if (step === 5) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 p-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
            Причастные обороты: время, причина, условие
          </h1>

          <Section title="Причастные обороты для выражения времени" className="bg-gradient-to-r from-green-100 to-emerald-100">
            <p className="text-lg leading-relaxed mb-4">
              Причастные обороты могут заменять временные придаточные с ***when, while, after, before, since, as soon as*** и т.д.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold text-green-700 mb-2">WHILE/WHEN (одновременные действия):</p>
                  <p className="text-lg mb-1"><span className="text-green-600">Driving to work</span>, I heard the news on the radio.</p>
                  <p className="text-gray-500 text-sm">Едя на работу, я услышал новости по радио.</p>
                  <p className="text-gray-600 text-sm mt-1">= While I was driving to work, I heard the news.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold text-green-700 mb-2">AFTER (одно действие раньше другого):</p>
                  <p className="text-lg mb-1"><span className="text-green-600">Having locked the door</span>, she realized she forgot her keys inside.</p>
                  <p className="text-gray-500 text-sm">Закрыв дверь, она поняла, что забыла ключи внутри.</p>
                  <p className="text-gray-600 text-sm mt-1">= After she had locked the door, she realized she forgot her keys.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold text-green-700 mb-2">BEFORE (с перфектным причастием):</p>
                  <p className="text-lg mb-1"><span className="text-green-600">Not having traveled abroad before</span>, she was nervous.</p>
                  <p className="text-gray-500 text-sm">Не путешествовав за границу раньше, она нервничала.</p>
                  <p className="text-gray-600 text-sm mt-1">= Because she had never traveled abroad before, she was nervous.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold text-green-700 mb-2">SINCE (длительность от прошлого до настоящего):</p>
                  <p className="text-lg mb-1"><span className="text-green-600">Having worked here for 20 years</span>, she knows everyone.</p>
                  <p className="text-gray-500 text-sm">Проработав здесь 20 лет, она знает всех.</p>
                  <p className="text-gray-600 text-sm mt-1">= Since she has worked here for 20 years, she knows everyone.</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="Причастные обороты для выражения причины" className="bg-gradient-to-r from-emerald-100 to-teal-100">
            <p className="text-lg leading-relaxed mb-4">
              Причастные обороты очень часто заменяют придаточные причины с ***because, since, as***.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <div className="space-y-4">
                <div className="border-l-4 border-emerald-500 pl-4">
                  <p className="font-semibold text-emerald-700 mb-2">Present participle (текущая причина):</p>
                  <p className="text-lg mb-1"><span className="text-emerald-600">Being vegetarian</span>, she doesn't eat meat.</p>
                  <p className="text-gray-500 text-sm">Будучи вегетарианкой, она не ест мясо.</p>
                  <p className="text-gray-600 text-sm mt-1">= Because she is vegetarian, she doesn't eat meat.</p>
                </div>
                <div className="border-l-4 border-emerald-500 pl-4">
                  <p className="font-semibold text-emerald-700 mb-2">Past participle (пассивная причина):</p>
                  <p className="text-lg mb-1"><span className="text-emerald-600">Convinced of his innocence</span>, the jury acquitted him.</p>
                  <p className="text-gray-500 text-sm">Убеждённые в его невиновности, присяжные оправдали его.</p>
                  <p className="text-gray-600 text-sm mt-1">= Because they were convinced of his innocence, the jury acquitted him.</p>
                </div>
                <div className="border-l-4 border-emerald-500 pl-4">
                  <p className="font-semibold text-emerald-700 mb-2">Perfect participle (причина в прошлом):</p>
                  <p className="text-lg mb-1"><span className="text-emerald-600">Having missed the bus</span>, he had to take a taxi.</p>
                  <p className="text-gray-500 text-sm">Опоздав на автобус, ему пришлось взять такси.</p>
                  <p className="text-gray-600 text-sm mt-1">= Because he had missed the bus, he had to take a taxi.</p>
                </div>
                <div className="border-l-4 border-emerald-500 pl-4">
                  <p className="font-semibold text-emerald-700 mb-2">Отрицательная причина:</p>
                  <p className="text-lg mb-1"><span className="text-emerald-600">Not knowing the answer</span>, she remained silent.</p>
                  <p className="text-gray-500 text-sm">Не зная ответа, она молчала.</p>
                  <p className="text-gray-600 text-sm mt-1">= Because she didn't know the answer, she remained silent.</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="Причастные обороты для выражения условия" className="bg-gradient-to-r from-teal-100 to-green-100">
            <p className="text-lg leading-relaxed mb-4">
              Причастные обороты иногда могут заменять условные придаточные с ***if***. Это более формально и литературно.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <div className="space-y-4">
                <div className="border-l-4 border-teal-500 pl-4">
                  <p className="text-lg mb-1"><span className="text-teal-600">Treated with respect</span>, employees work harder.</p>
                  <p className="text-gray-500 text-sm">Если с сотрудниками обращаются уважительно, они работают усерднее.</p>
                  <p className="text-gray-600 text-sm mt-1">= If they are treated with respect, employees work harder.</p>
                </div>
                <div className="border-l-4 border-teal-500 pl-4">
                  <p className="text-lg mb-1"><span className="text-teal-600">Given enough time</span>, anyone can learn a language.</p>
                  <p className="text-gray-500 text-sm">Если дать достаточно времени, любой может выучить язык.</p>
                  <p className="text-gray-600 text-sm mt-1">= If you give them enough time, anyone can learn a language.</p>
                </div>
                <div className="border-l-4 border-teal-500 pl-4">
                  <p className="text-lg mb-1"><span className="text-teal-600">Working together</span>, we can solve this problem.</p>
                  <p className="text-gray-500 text-sm">Работая вместе, мы можем решить эту проблему.</p>
                  <p className="text-gray-600 text-sm mt-1">= If we work together, we can solve this problem.</p>
                </div>
                <div className="border-l-4 border-teal-500 pl-4">
                  <p className="text-lg mb-1"><span className="text-teal-600">Left untreated</span>, the disease can be fatal.</p>
                  <p className="text-gray-500 text-sm">Если не лечить, болезнь может быть смертельной.</p>
                  <p className="text-gray-600 text-sm mt-1">= If it is left untreated, the disease can be fatal.</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="Важно: подлежащее должно быть одинаковым" className="bg-gradient-to-r from-green-100 to-emerald-100">
            <p className="text-lg leading-relaxed mb-4">
              ⚠️ Подлежащее причастного оборота и главного предложения обычно должно быть ***одним и тем же лицом или предметом***. Если они разные, предложение звучит странно или неправильно.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-lg mb-2">✓ <span className="text-green-600">Walking down the street</span>, <span className="font-semibold">I</span> saw a famous actor.</p>
                  <p className="text-gray-600 text-sm">(Я шёл, я увидел — одно подлежащее)</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="text-lg mb-2">✗ <span className="text-red-600">Walking down the street</span>, <span className="font-semibold">a famous actor</span> was seen.</p>
                  <p className="text-gray-600 text-sm">(Кто шёл? Это неясно и неправильно)</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-lg mb-2">✓ <span className="text-green-600">Being tired</span>, <span className="font-semibold">she</span> went to bed early.</p>
                  <p className="text-gray-600 text-sm">(Она устала, она легла — одно подлежащее)</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="text-lg mb-2">✗ <span className="text-red-600">Being tired</span>, <span className="font-semibold">the bed</span> looked very inviting.</p>
                  <p className="text-gray-600 text-sm">(Кровать не была уставшей — неправильное подлежащее)</p>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>
    );
  }

  if (step === 6) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600">
            Позиция и пунктуация причастных оборотов
          </h1>

          <Section title="Позиция: в начале или в конце предложения" className="bg-gradient-to-r from-orange-100 to-amber-100">
            <p className="text-lg leading-relaxed mb-4">
              Причастные обороты могут стоять в ***начале*** или в ***конце*** предложения. Позиция влияет на акцент и иногда на значение.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-orange-700 mb-3">В НАЧАЛЕ (акцент на причастном обороте):</p>
                  <div className="space-y-3 ml-4">
                    <div>
                      <p className="text-lg"><span className="text-orange-600">Walking through the park</span>, I met an old friend.</p>
                      <p className="text-gray-500 text-sm">Гуляя по парку, я встретил старого друга.</p>
                    </div>
                    <div>
                      <p className="text-lg"><span className="text-orange-600">Built in 1850</span>, the house is a historical landmark.</p>
                      <p className="text-gray-500 text-sm">Построенный в 1850 году, дом является историческим памятником.</p>
                    </div>
                    <div>
                      <p className="text-lg"><span className="text-orange-600">Having no other choice</span>, they agreed to the terms.</p>
                      <p className="text-gray-500 text-sm">Не имея другого выбора, они согласились на условия.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-orange-700 mb-3">В КОНЦЕ (акцент на главном предложении):</p>
                  <div className="space-y-3 ml-4">
                    <div>
                      <p className="text-lg">I met an old friend <span className="text-orange-600">walking through the park</span>.</p>
                      <p className="text-gray-500 text-sm">Я встретил старого друга, гуляя по парку.</p>
                    </div>
                    <div>
                      <p className="text-lg">The house is a historical landmark, <span className="text-orange-600">built in 1850</span>.</p>
                      <p className="text-gray-500 text-sm">Дом является историческим памятником, построенным в 1850 году.</p>
                    </div>
                    <div>
                      <p className="text-lg">They agreed to the terms, <span className="text-orange-600">having no other choice</span>.</p>
                      <p className="text-gray-500 text-sm">Они согласились на условия, не имея другого выбора.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="Правила пунктуации" className="bg-gradient-to-r from-amber-100 to-yellow-100">
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-amber-700 mb-3">Правило 1: Запятая после причастного оборота в начале</p>
                  <div className="space-y-2 ml-4">
                    <p className="text-lg">✓ <span className="text-amber-600">Feeling tired</span><span className="text-red-600">,</span> I went to bed.</p>
                    <p className="text-lg">✗ <span className="text-amber-600">Feeling tired</span> I went to bed.</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-amber-700 mb-3">Правило 2: Запятая перед причастным оборотом в конце (если он добавляет доп. информацию)</p>
                  <div className="space-y-2 ml-4">
                    <p className="text-lg">✓ I saw John<span className="text-red-600">,</span> <span className="text-amber-600">standing on the corner</span>.</p>
                    <p className="text-lg">✓ The woman<span className="text-red-600">,</span> <span className="text-amber-600">dressed in red</span><span className="text-red-600">,</span> is my sister.</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-amber-700 mb-3">Правило 3: Без запятой, если причастие определяет (необходимая информация)</p>
                  <div className="space-y-2 ml-4">
                    <p className="text-lg">✓ The woman <span className="text-amber-600">standing on the corner</span> is my sister.</p>
                    <p className="text-gray-600 text-sm">(Какая женщина? Та, что стоит на углу — необходимая информация)</p>
                    <p className="text-lg mt-2">✓ Anyone <span className="text-amber-600">wishing to participate</span> should register now.</p>
                    <p className="text-gray-600 text-sm">(Кто? Те, кто желает участвовать — необходимая информация)</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="Позиция может изменить значение" className="bg-gradient-to-r from-yellow-100 to-orange-100">
            <p className="text-lg leading-relaxed mb-4">
              Иногда позиция причастного оборота может изменить ***значение*** или ясность предложения.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <div className="space-y-4">
                <div className="border-l-4 border-yellow-500 pl-4">
                  <p className="text-lg mb-1">I saw a man <span className="text-yellow-600">walking down the street</span>.</p>
                  <p className="text-gray-500 text-sm">Я увидел мужчину, идущего по улице.</p>
                  <p className="text-gray-600 text-sm mt-1">= Мужчина шёл (причастие описывает мужчину)</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <p className="text-lg mb-1"><span className="text-yellow-600">Walking down the street</span>, I saw a man.</p>
                  <p className="text-gray-500 text-sm">Идя по улице, я увидел мужчину.</p>
                  <p className="text-gray-600 text-sm mt-1">= Я шёл (причастие описывает "я")</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="Несколько причастных оборотов" className="bg-gradient-to-r from-orange-100 to-amber-100">
            <p className="text-lg leading-relaxed mb-4">
              Вы можете использовать ***больше одного*** причастного оборота в одном предложении, обычно разделяя их запятыми.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="space-y-3">
                <div>
                  <p className="text-lg"><span className="text-orange-600">Having woken up late</span> and <span className="text-orange-600">not having time for breakfast</span>, she rushed to work.</p>
                  <p className="text-gray-500 text-sm">Проснувшись поздно и не имея времени на завтрак, она помчалась на работу.</p>
                </div>
                <div>
                  <p className="text-lg"><span className="text-orange-600">Built in 1920</span> and <span className="text-orange-600">renovated in 2010</span>, the building combines old and new styles.</p>
                  <p className="text-gray-500 text-sm">Построенное в 1920 и отремонтированное в 2010, здание сочетает старый и новый стили.</p>
                </div>
                <div>
                  <p className="text-lg"><span className="text-orange-600">Being tired</span> but <span className="text-orange-600">not wanting to disappoint anyone</span>, he continued working.</p>
                  <p className="text-gray-500 text-sm">Будучи уставшим, но не желая никого разочаровать, он продолжал работать.</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="Причастные обороты в середине предложения" className="bg-gradient-to-r from-amber-100 to-yellow-100">
            <p className="text-lg leading-relaxed mb-4">
              Причастные обороты могут стоять в ***середине*** предложения между запятыми, добавляя дополнительную информацию о подлежащем.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="space-y-3">
                <div>
                  <p className="text-lg">My brother, <span className="text-amber-600">living in Tokyo</span>, visits us once a year.</p>
                  <p className="text-gray-500 text-sm">Мой брат, живущий в Токио, навещает нас раз в год.</p>
                </div>
                <div>
                  <p className="text-lg">The proposal, <span className="text-amber-600">having been rejected twice</span>, was finally accepted.</p>
                  <p className="text-gray-500 text-sm">Предложение, дважды отклонённое, наконец было принято.</p>
                </div>
                <div>
                  <p className="text-lg">The children, <span className="text-amber-600">excited about the trip</span>, couldn't sleep.</p>
                  <p className="text-gray-500 text-sm">Дети, взволнованные поездкой, не могли уснуть.</p>
                </div>
                <div>
                  <p className="text-lg">The company, <span className="text-amber-600">founded in 1995</span>, now employs 5,000 people.</p>
                  <p className="text-gray-500 text-sm">Компания, основанная в 1995 году, теперь нанимает 5000 человек.</p>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>
    );
  }

  if (step === 7) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50 p-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
            Продвинутые конструкции с причастиями
          </h1>

          <Section title="With + существительное/местоимение + причастие" className="bg-gradient-to-r from-cyan-100 to-sky-100">
            <p className="text-lg leading-relaxed mb-4">
              Конструкция ***"with + существительное/местоимение + причастие"*** описывает дополнительное обстоятельство или условие. Очень распространена в художественных описаниях.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <p className="font-semibold text-cyan-700 mb-3">Формула:</p>
              <p className="text-xl text-center text-cyan-600 font-mono mb-4">with + сущ./местоим. + причастие</p>
              <div className="space-y-4 mt-4">
                <div className="border-l-4 border-cyan-500 pl-4">
                  <p className="text-lg mb-1">She sat there <span className="text-cyan-600">with tears running down her face</span>.</p>
                  <p className="text-gray-500 text-sm">Она сидела там со слезами, катившимися по лицу.</p>
                  <p className="text-gray-600 text-sm mt-1">= Слёзы катились по её лицу, пока она сидела.</p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-4">
                  <p className="text-lg mb-1">He stood <span className="text-cyan-600">with his arms folded</span>, looking angry.</p>
                  <p className="text-gray-500 text-sm">Он стоял со скрещёнными руками, выглядя сердитым.</p>
                  <p className="text-gray-600 text-sm mt-1">= Его руки были скрещены, пока он стоял.</p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-4">
                  <p className="text-lg mb-1">They walked <span className="text-cyan-600">with the dog running ahead of them</span>.</p>
                  <p className="text-gray-500 text-sm">Они шли с собакой, бежавшей впереди них.</p>
                  <p className="text-gray-600 text-sm mt-1">= Собака бежала впереди, пока они шли.</p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-4">
                  <p className="text-lg mb-1">The house, <span className="text-cyan-600">with all its windows broken</span>, looked abandoned.</p>
                  <p className="text-gray-500 text-sm">Дом, со всеми разбитыми окнами, выглядел заброшенным.</p>
                  <p className="text-gray-600 text-sm mt-1">= Все его окна были разбиты.</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="Each/All + причастие" className="bg-gradient-to-r from-sky-100 to-blue-100">
            <p className="text-lg leading-relaxed mb-4">
              Мы можем использовать ***each*** или ***all*** перед причастием, чтобы отсылать к упомянутым ранее предметам.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <div className="space-y-4">
                <div className="border-l-4 border-sky-500 pl-4">
                  <p className="text-lg mb-1">She gave presents to the children, <span className="text-sky-600">each wrapped in colorful paper</span>.</p>
                  <p className="text-gray-500 text-sm">Она дала подарки детям, каждый из которых был завёрнут в цветную бумагу.</p>
                  <p className="text-gray-600 text-sm mt-1">= Каждый подарок был завёрнут в цветную бумагу.</p>
                </div>
                <div className="border-l-4 border-sky-500 pl-4">
                  <p className="text-lg mb-1">He interviewed three candidates, <span className="text-sky-600">all having excellent qualifications</span>.</p>
                  <p className="text-gray-500 text-sm">Он провёл собеседование с тремя кандидатами, все из которых имели отличную квалификацию.</p>
                  <p className="text-gray-600 text-sm mt-1">= Все они имели отличную квалификацию.</p>
                </div>
                <div className="border-l-4 border-sky-500 pl-4">
                  <p className="text-lg mb-1">There are five restaurants, <span className="text-sky-600">each offering a different cuisine</span>.</p>
                  <p className="text-gray-500 text-sm">Есть пять ресторанов, каждый из которых предлагает разную кухню.</p>
                  <p className="text-gray-600 text-sm mt-1">= Каждый ресторан предлагает разную кухню.</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="Причастные обороты с союзами" className="bg-gradient-to-r from-blue-100 to-cyan-100">
            <p className="text-lg leading-relaxed mb-4">
              Иногда причастные обороты могут вводиться союзами ***when, while, if, unless, though, although***, чтобы сделать значение более ясным.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-lg mb-1"><span className="text-blue-600">When asked</span> about his plans, he refused to comment.</p>
                  <p className="text-gray-500 text-sm">Когда его спросили о планах, он отказался комментировать.</p>
                  <p className="text-gray-600 text-sm mt-1">= When he was asked about his plans...</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-lg mb-1"><span className="text-blue-600">While waiting</span> for the train, I read a book.</p>
                  <p className="text-gray-500 text-sm">Ожидая поезда, я читал книгу.</p>
                  <p className="text-gray-600 text-sm mt-1">= While I was waiting for the train...</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-lg mb-1"><span className="text-blue-600">If left untreated</span>, the infection will spread.</p>
                  <p className="text-gray-500 text-sm">Если не лечить, инфекция распространится.</p>
                  <p className="text-gray-600 text-sm mt-1">= If it is left untreated...</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-lg mb-1"><span className="text-blue-600">Though lacking experience</span>, she got the job.</p>
                  <p className="text-gray-500 text-sm">Хотя ей не хватало опыта, она получила работу.</p>
                  <p className="text-gray-600 text-sm mt-1">= Though she lacked experience...</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-lg mb-1"><span className="text-blue-600">Unless told otherwise</span>, continue with the plan.</p>
                  <p className="text-gray-500 text-sm">Если не сказано иначе, продолжайте по плану.</p>
                  <p className="text-gray-600 text-sm mt-1">= Unless you are told otherwise...</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="Причастия с собственным дополнением или обстоятельством" className="bg-gradient-to-r from-cyan-100 to-sky-100">
            <p className="text-lg leading-relaxed mb-4">
              Причастные обороты могут иметь собственные ***дополнения, сказуемые или обстоятельства***, делая их довольно сложными.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <div className="space-y-4">
                <div className="border-l-4 border-cyan-500 pl-4">
                  <p className="text-lg mb-1"><span className="text-cyan-600">Believing the story to be true</span>, they published it.</p>
                  <p className="text-gray-500 text-sm">Полагая историю правдивой, они опубликовали её.</p>
                  <p className="text-gray-600 text-sm mt-1">(причастие + дополнение + сказуемое)</p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-4">
                  <p className="text-lg mb-1"><span className="text-cyan-600">Having considered all the options carefully</span>, we made our decision.</p>
                  <p className="text-gray-500 text-sm">Тщательно рассмотрев все варианты, мы приняли решение.</p>
                  <p className="text-gray-600 text-sm mt-1">(причастие + дополнение + обстоятельство)</p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-4">
                  <p className="text-lg mb-1"><span className="text-cyan-600">Knowing him to be reliable</span>, I trusted his judgment.</p>
                  <p className="text-gray-500 text-sm">Зная, что он надёжен, я доверял его суждению.</p>
                  <p className="text-gray-600 text-sm mt-1">(причастие + дополнение + сказуемое)</p>
                </div>
              </div>
            </div>
          </Section>

          <Section title="Висячие причастия (распространённая ошибка!)" className="bg-gradient-to-r from-sky-100 to-blue-100">
            <p className="text-lg leading-relaxed mb-4">
              ***Висячее причастие*** возникает, когда причастный оборот не связан чётко с подлежащим главного предложения. Это распространённая ошибка!
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="text-lg mb-1">✗ <span className="text-red-600">Walking down the street</span>, the trees looked beautiful.</p>
                  <p className="text-gray-600 text-sm">Неправильно! (Деревья не шли)</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-lg mb-1">✓ <span className="text-green-600">Walking down the street</span>, I noticed the trees looked beautiful.</p>
                  <p className="text-gray-600 text-sm">Правильно! (Я шёл)</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4 mt-4">
                  <p className="text-lg mb-1">✗ <span className="text-red-600">Having been delayed</span>, the meeting was rescheduled.</p>
                  <p className="text-gray-600 text-sm">Неправильно! (Встреча не была задержана, кто-то другой был задержан)</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-lg mb-1">✓ <span className="text-green-600">Having been delayed</span>, we rescheduled the meeting.</p>
                  <p className="text-gray-600 text-sm">Правильно! (Мы были задержаны)</p>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>
    );
  }

  if (step === 8) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-fuchsia-50 p-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-600">
            Практика: все типы причастных оборотов
          </h1>

          <Section title="Упражнение 1: Перепишите с причастными оборотами" className="bg-gradient-to-r from-indigo-100 to-purple-100">
            <p className="text-lg mb-4">Перепишите эти предложения, используя причастные обороты:</p>
            <CheckableExercise
              title="Упражнение 1"
              instruction="Перепишите предложение с причастным оборотом"
              items={[
                {
                  left: "After I had finished the report, I sent it to my boss. →",
                  answers: ["Having finished the report, I sent it to my boss", "Having finished the report, I sent it to my boss."],
                  wide: true
                },
                {
                  left: "The book, which was written in 1949, is still relevant today. →",
                  answers: ["The book, written in 1949, is still relevant today", "The book, written in 1949, is still relevant today.", "Written in 1949, the book is still relevant today", "Written in 1949, the book is still relevant today."],
                  wide: true
                },
                {
                  left: "Because she didn't know what to do, she asked for help. →",
                  answers: ["Not knowing what to do, she asked for help", "Not knowing what to do, she asked for help."],
                  wide: true
                },
                {
                  left: "While I was walking home, I saw a beautiful sunset. →",
                  answers: ["Walking home, I saw a beautiful sunset", "Walking home, I saw a beautiful sunset."],
                  wide: true
                },
                {
                  left: "The man who is standing by the door is my uncle. →",
                  answers: ["The man standing by the door is my uncle", "The man standing by the door is my uncle."],
                  wide: true
                },
                {
                  left: "Because he had been told the truth, he changed his mind. →",
                  answers: ["Having been told the truth, he changed his mind", "Having been told the truth, he changed his mind."],
                  wide: true
                },
                {
                  left: "The house, which was built in 1820, needs renovation. →",
                  answers: ["The house, built in 1820, needs renovation", "The house, built in 1820, needs renovation.", "Built in 1820, the house needs renovation", "Built in 1820, the house needs renovation."],
                  wide: true
                },
                {
                  left: "Because she is a teacher, she understands children well. →",
                  answers: ["Being a teacher, she understands children well", "Being a teacher, she understands children well."],
                  wide: true
                }
              ]}
            />
          </Section>

          <Section title="Упражнение 2: Выберите правильную форму причастия" className="bg-gradient-to-r from-purple-100 to-fuchsia-100">
            <p className="text-lg mb-4">Выберите правильную форму (настоящее, прошедшее или перфектное причастие):</p>
            <CheckableExercise
              title="Упражнение 2"
              instruction="Впишите правильную форму причастия"
              items={[
                {
                  right: "(know) him for years, I trusted his advice.",
                  answers: ["Having known"]
                },
                {
                  left: "The documents",
                  right: "(sign) yesterday are on your desk.",
                  answers: ["signed"]
                },
                {
                  right: "(feel) tired, she decided to rest.",
                  answers: ["Feeling"]
                },
                {
                  right: "(finish) my work, I can relax now.",
                  answers: ["Having finished"]
                },
                {
                  left: "The woman",
                  right: "(wear) the red dress is my sister.",
                  answers: ["wearing"]
                },
                {
                  right: "(locate) in the city center, the hotel is convenient.",
                  answers: ["Located"]
                },
                {
                  right: "(not receive) a reply, I sent another email.",
                  answers: ["Not having received"]
                },
                {
                  left: "The children",
                  right: "(play) in the garden are mine.",
                  answers: ["playing"]
                }
              ]}
            />
          </Section>

          <Section title="Упражнение 3: Объедините предложения" className="bg-gradient-to-r from-fuchsia-100 to-indigo-100">
            <p className="text-lg mb-4">Объедините эти пары предложений, используя причастные обороты:</p>
            <CheckableExercise
              title="Упражнение 3"
              instruction="Объедините два предложения с помощью причастного оборота"
              items={[
                {
                  left: "She opened the door. She found a package. →",
                  answers: ["Opening the door, she found a package on the doorstep", "Opening the door, she found a package on the doorstep.", "Opening the door, she found a package"],
                  wide: true
                },
                {
                  left: "The film was directed by Spielberg. It won an Oscar. →",
                  answers: ["Directed by Spielberg, the film won an Oscar", "Directed by Spielberg, the film won an Oscar.", "The film, directed by Spielberg, won an Oscar", "The film, directed by Spielberg, won an Oscar."],
                  wide: true
                },
                {
                  left: "I had never seen the ocean before. I was amazed. →",
                  answers: ["Never having seen the ocean before, I was amazed by its size", "Never having seen the ocean before, I was amazed by its size.", "Having never seen the ocean before, I was amazed by its size", "Having never seen the ocean before, I was amazed by its size.", "Never having seen the ocean before, I was amazed", "Having never seen the ocean before, I was amazed"],
                  wide: true
                },
                {
                  left: "He lives in Japan. He speaks Japanese fluently. →",
                  answers: ["Living in Japan, he speaks Japanese fluently", "Living in Japan, he speaks Japanese fluently."],
                  wide: true
                },
                {
                  left: "She was shocked by the news. She couldn't speak. →",
                  answers: ["Shocked by the news, she couldn't speak", "Shocked by the news, she couldn't speak."],
                  wide: true
                },
                {
                  left: "The bridge was destroyed in the war. It was never rebuilt. →",
                  answers: ["Destroyed in the war, the bridge was never rebuilt", "Destroyed in the war, the bridge was never rebuilt.", "The bridge, destroyed in the war, was never rebuilt", "The bridge, destroyed in the war, was never rebuilt."],
                  wide: true
                }
              ]}
            />
          </Section>

          <Section title="Упражнение 4: Найдите и исправьте висячие причастия" className="bg-gradient-to-r from-indigo-100 to-purple-100">
            <p className="text-lg mb-4">Исправьте эти предложения с висячими причастиями:</p>
            <CheckableExercise
              title="Упражнение 4"
              instruction="Исправьте предложение, чтобы подлежащее было правильным"
              items={[
                {
                  left: "Walking into the room, the smell was terrible. →",
                  answers: ["Walking into the room, I noticed the smell was terrible", "Walking into the room, I noticed the smell was terrible.", "Walking into the room, we noticed the smell was terrible", "Walking into the room, we noticed the smell was terrible."],
                  wide: true
                },
                {
                  left: "Having been repaired, we can use the car again. →",
                  answers: ["Having been repaired, the car can be used again", "Having been repaired, the car can be used again.", "The car having been repaired, we can use it again", "The car having been repaired, we can use it again."],
                  wide: true
                },
                {
                  left: "Driving carefully, the accident was avoided. →",
                  answers: ["Driving carefully, he avoided the accident", "Driving carefully, he avoided the accident.", "Driving carefully, they avoided the accident", "Driving carefully, they avoided the accident.", "Driving carefully, we avoided the accident", "Driving carefully, we avoided the accident.", "Driving carefully, I avoided the accident", "Driving carefully, I avoided the accident."],
                  wide: true
                },
                {
                  left: "Being Sunday, the shops were closed. →",
                  answers: ["It being Sunday, the shops were closed", "It being Sunday, the shops were closed.", "Being Sunday, all the shops were closed", "Being Sunday, all the shops were closed."],
                  wide: true
                }
              ]}
            />
          </Section>

          <Section title="Упражнение 5: Продвинутые конструкции с причастиями" className="bg-gradient-to-r from-purple-100 to-fuchsia-100">
            <p className="text-lg mb-4">Дополните предложения правильной конструкцией с причастием:</p>
            <CheckableExercise
              title="Упражнение 5"
              instruction="Впишите правильную конструкцию"
              items={[
                {
                  left: "She sat",
                  right: "(with/her eyes/close).",
                  answers: ["with her eyes closed"],
                  wide: true
                },
                {
                  left: "He visited three museums,",
                  right: "(each/have) a different theme.",
                  answers: ["each having"]
                },
                {
                  right: "(when/ask) about the incident, he said nothing.",
                  answers: ["When asked"]
                },
                {
                  left: "The house stood empty,",
                  right: "(with/all/its windows/break).",
                  answers: ["with all its windows broken"],
                  wide: true
                },
                {
                  right: "(though/warn) about the risks, they continued.",
                  answers: ["Though warned"]
                },
                {
                  left: "They interviewed five candidates,",
                  right: "(all/be) well qualified.",
                  answers: ["all being"]
                }
              ]}
            />
          </Section>
        </div>
      </div>
    );
  }

  return null;
}
