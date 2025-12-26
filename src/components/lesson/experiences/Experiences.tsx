"use client";

import { Section } from "@/components/ui/Section";
import { useState } from "react";

type Props = { step: number };

export default function Experiences({ step }: Props) {
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

// Step 1: Introduction to Experiences and Stories
function Step1() {
  return (
    <div className="space-y-8">
      <Section title="📖 Experiences and Stories — Опыты и истории">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-purple-900 mb-3">
            Talking About Life Experiences
          </h3>
          <p className="text-gray-700 leading-relaxed">
            В этом уроке мы научимся рассказывать о прошлых событиях и будущих
            планах на английском языке. Вы узнаете, как делиться своими
            историями, описывать опыт и говорить о мечтах!
          </p>
        </div>
      </Section>

      <Section title="Talking About Past Events — Прошлые события">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-blue-50 border-2 border-blue-300 rounded-lg">
            <p className="font-bold text-lg text-blue-900 mb-3">
              ⏮️ Past Simple — Простое прошедшее
            </p>
            <p className="text-sm text-gray-700 mb-3">
              Используем для завершённых действий в прошлом:
            </p>
            <div className="space-y-2 text-sm">
              <div className="p-3 bg-white rounded">
                <p className="font-semibold">I visited Paris last year.</p>
                <p className="text-gray-600">Я посетил Париж в прошлом году.</p>
              </div>
              <div className="p-3 bg-white rounded">
                <p className="font-semibold">She studied English at school.</p>
                <p className="text-gray-600">Она учила английский в школе.</p>
              </div>
              <div className="p-3 bg-white rounded">
                <p className="font-semibold">We met in 2020.</p>
                <p className="text-gray-600">Мы встретились в 2020 году.</p>
              </div>
            </div>
          </div>

          <div className="p-5 bg-green-50 border-2 border-green-300 rounded-lg">
            <p className="font-bold text-lg text-green-900 mb-3">
              ✅ Present Perfect — Настоящее совершённое
            </p>
            <p className="text-sm text-gray-700 mb-3">
              Используем для опыта, результата или незавершённого времени:
            </p>
            <div className="space-y-2 text-sm">
              <div className="p-3 bg-white rounded">
                <p className="font-semibold">I have visited 10 countries.</p>
                <p className="text-gray-600">Я посетил 10 стран.</p>
              </div>
              <div className="p-3 bg-white rounded">
                <p className="font-semibold">She has lived here since 2015.</p>
                <p className="text-gray-600">Она живёт здесь с 2015 года.</p>
              </div>
              <div className="p-3 bg-white rounded">
                <p className="font-semibold">Have you ever been to Japan?</p>
                <p className="text-gray-600">Ты когда-нибудь был в Японии?</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Talking About Future Plans — Будущие планы">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-orange-50 border-2 border-orange-300 rounded-lg">
            <p className="font-bold text-lg text-orange-900 mb-3">
              🔮 Future Simple (will) — Простое будущее
            </p>
            <p className="text-sm text-gray-700 mb-3">
              Спонтанные решения, предсказания:
            </p>
            <div className="space-y-2 text-sm">
              <div className="p-3 bg-white rounded">
                <p className="font-semibold">I will travel next year.</p>
                <p className="text-gray-600">
                  Я буду путешествовать в следующем году.
                </p>
              </div>
              <div className="p-3 bg-white rounded">
                <p className="font-semibold">She will be famous one day.</p>
                <p className="text-gray-600">Она станет знаменитой однажды.</p>
              </div>
            </div>
          </div>

          <div className="p-5 bg-purple-50 border-2 border-purple-300 rounded-lg">
            <p className="font-bold text-lg text-purple-900 mb-3">
              📅 Going to — Собираться
            </p>
            <p className="text-sm text-gray-700 mb-3">
              Запланированные действия, намерения:
            </p>
            <div className="space-y-2 text-sm">
              <div className="p-3 bg-white rounded">
                <p className="font-semibold">I'm going to study abroad.</p>
                <p className="text-gray-600">
                  Я собираюсь учиться за границей.
                </p>
              </div>
              <div className="p-3 bg-white rounded">
                <p className="font-semibold">We're going to buy a house.</p>
                <p className="text-gray-600">Мы собираемся купить дом.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Useful Expressions — Полезные выражения">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="p-3 bg-blue-50 rounded">
            <p className="font-bold text-blue-900">When I was younger...</p>
            <p className="text-sm text-gray-600">Когда я был моложе...</p>
          </div>
          <div className="p-3 bg-blue-50 rounded">
            <p className="font-bold text-blue-900">A few years ago...</p>
            <p className="text-sm text-gray-600">Несколько лет назад...</p>
          </div>
          <div className="p-3 bg-blue-50 rounded">
            <p className="font-bold text-blue-900">In my childhood...</p>
            <p className="text-sm text-gray-600">В моём детстве...</p>
          </div>
          <div className="p-3 bg-blue-50 rounded">
            <p className="font-bold text-blue-900">Last summer...</p>
            <p className="text-sm text-gray-600">Прошлым летом...</p>
          </div>
          <div className="p-3 bg-green-50 rounded">
            <p className="font-bold text-green-900">In the future...</p>
            <p className="text-sm text-gray-600">В будущем...</p>
          </div>
          <div className="p-3 bg-green-50 rounded">
            <p className="font-bold text-green-900">One day...</p>
            <p className="text-sm text-gray-600">Однажды...</p>
          </div>
          <div className="p-3 bg-green-50 rounded">
            <p className="font-bold text-green-900">Next year...</p>
            <p className="text-sm text-gray-600">В следующем году...</p>
          </div>
          <div className="p-3 bg-green-50 rounded">
            <p className="font-bold text-green-900">I hope to...</p>
            <p className="text-sm text-gray-600">Я надеюсь...</p>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Step 2: Vocabulary for Past Experiences
function Step2() {
  return (
    <div className="space-y-8">
      <Section title="Vocabulary for Past Experiences">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-blue-900 mb-3">
            Describing What Happened
          </h3>
          <p className="text-gray-700">
            Словарный запас для описания прошлых событий и опыта.
          </p>
        </div>
      </Section>

      <Section title="Life Events — Жизненные события">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white border border-blue-300 rounded-lg">
            <p className="font-bold text-blue-900 mb-2">Education:</p>
            <ul className="space-y-1 text-sm text-gray-800">
              <li>• graduate from university — закончить университет</li>
              <li>• pass an exam — сдать экзамен</li>
              <li>• fail a test — провалить тест</li>
              <li>• get a degree — получить степень</li>
              <li>• learn a skill — освоить навык</li>
              <li>• study abroad — учиться за границей</li>
            </ul>
          </div>

          <div className="p-4 bg-white border border-blue-300 rounded-lg">
            <p className="font-bold text-blue-900 mb-2">Work:</p>
            <ul className="space-y-1 text-sm text-gray-800">
              <li>• get a job — получить работу</li>
              <li>• lose a job — потерять работу</li>
              <li>• start a business — начать бизнес</li>
              <li>• get promoted — получить повышение</li>
              <li>• change careers — сменить карьеру</li>
              <li>• retire — выйти на пенсию</li>
            </ul>
          </div>

          <div className="p-4 bg-white border border-green-300 rounded-lg">
            <p className="font-bold text-green-900 mb-2">Travel:</p>
            <ul className="space-y-1 text-sm text-gray-800">
              <li>• visit a country — посетить страну</li>
              <li>• go on a trip — отправиться в поездку</li>
              <li>• explore a city — исследовать город</li>
              <li>• travel abroad — путешествовать за границу</li>
              <li>• go backpacking — путешествовать с рюкзаком</li>
              <li>• stay in a hotel — остановиться в отеле</li>
            </ul>
          </div>

          <div className="p-4 bg-white border border-green-300 rounded-lg">
            <p className="font-bold text-green-900 mb-2">Relationships:</p>
            <ul className="space-y-1 text-sm text-gray-800">
              <li>• meet someone — встретить кого-то</li>
              <li>• fall in love — влюбиться</li>
              <li>• get married — пожениться</li>
              <li>• have children — завести детей</li>
              <li>• break up — расстаться</li>
              <li>• make friends — подружиться</li>
            </ul>
          </div>

          <div className="p-4 bg-white border border-purple-300 rounded-lg">
            <p className="font-bold text-purple-900 mb-2">Achievements:</p>
            <ul className="space-y-1 text-sm text-gray-800">
              <li>• win a competition — выиграть соревнование</li>
              <li>• achieve a goal — достичь цели</li>
              <li>• overcome a challenge — преодолеть трудность</li>
              <li>• learn something new — выучить что-то новое</li>
              <li>• master a language — овладеть языком</li>
              <li>• accomplish a dream — осуществить мечту</li>
            </ul>
          </div>

          <div className="p-4 bg-white border border-purple-300 rounded-lg">
            <p className="font-bold text-purple-900 mb-2">Challenges:</p>
            <ul className="space-y-1 text-sm text-gray-800">
              <li>• face a problem — столкнуться с проблемой</li>
              <li>• make a mistake — совершить ошибку</li>
              <li>• miss an opportunity — упустить возможность</li>
              <li>• experience difficulties — испытать трудности</li>
              <li>• go through hard times — пройти через трудные времена</li>
              <li>• learn from mistakes — учиться на ошибках</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Time Expressions for Past — Временные выражения">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="p-3 bg-blue-50 rounded text-center">
            <p className="font-bold">yesterday</p>
            <p className="text-xs text-gray-600">вчера</p>
          </div>
          <div className="p-3 bg-blue-50 rounded text-center">
            <p className="font-bold">last week</p>
            <p className="text-xs text-gray-600">на прошлой неделе</p>
          </div>
          <div className="p-3 bg-blue-50 rounded text-center">
            <p className="font-bold">ago</p>
            <p className="text-xs text-gray-600">назад</p>
          </div>
          <div className="p-3 bg-blue-50 rounded text-center">
            <p className="font-bold">in 2020</p>
            <p className="text-xs text-gray-600">в 2020</p>
          </div>
          <div className="p-3 bg-green-50 rounded text-center">
            <p className="font-bold">ever</p>
            <p className="text-xs text-gray-600">когда-либо</p>
          </div>
          <div className="p-3 bg-green-50 rounded text-center">
            <p className="font-bold">never</p>
            <p className="text-xs text-gray-600">никогда</p>
          </div>
          <div className="p-3 bg-green-50 rounded text-center">
            <p className="font-bold">already</p>
            <p className="text-xs text-gray-600">уже</p>
          </div>
          <div className="p-3 bg-green-50 rounded text-center">
            <p className="font-bold">yet</p>
            <p className="text-xs text-gray-600">ещё (не)</p>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Step 3: Vocabulary for Future Plans
function Step3() {
  return (
    <div className="space-y-8">
      <Section title="Vocabulary for Future Plans">
        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-orange-900 mb-3">
            Talking About What Will Happen
          </h3>
          <p className="text-gray-700">
            Словарный запас для обсуждения будущих планов и намерений.
          </p>
        </div>
      </Section>

      <Section title="Future Goals and Dreams — Цели и мечты">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white border border-orange-300 rounded-lg">
            <p className="font-bold text-orange-900 mb-2">Career Goals:</p>
            <ul className="space-y-1 text-sm text-gray-800">
              <li>• get a promotion — получить повышение</li>
              <li>• start my own business — начать свой бизнес</li>
              <li>• become a manager — стать менеджером</li>
              <li>• work remotely — работать удалённо</li>
              <li>• change my job — сменить работу</li>
              <li>• earn more money — зарабатывать больше</li>
            </ul>
          </div>

          <div className="p-4 bg-white border border-orange-300 rounded-lg">
            <p className="font-bold text-orange-900 mb-2">Education Plans:</p>
            <ul className="space-y-1 text-sm text-gray-800">
              <li>• take a course — пройти курс</li>
              <li>• learn a new skill — освоить новый навык</li>
              <li>• study abroad — учиться за границей</li>
              <li>• get a Master's degree — получить степень магистра</li>
              <li>• improve my English — улучшить английский</li>
              <li>• attend workshops — посещать мастер-классы</li>
            </ul>
          </div>

          <div className="p-4 bg-white border border-yellow-300 rounded-lg">
            <p className="font-bold text-yellow-900 mb-2">Travel Plans:</p>
            <ul className="space-y-1 text-sm text-gray-800">
              <li>• visit new countries — посетить новые страны</li>
              <li>• go on a world tour — отправиться в мировое турне</li>
              <li>• explore Europe — исследовать Европу</li>
              <li>
                • see famous landmarks — увидеть знаменитые
                достопримечательности
              </li>
              <li>• experience new cultures — познать новые культуры</li>
              <li>• go backpacking — путешествовать с рюкзаком</li>
            </ul>
          </div>

          <div className="p-4 bg-white border border-yellow-300 rounded-lg">
            <p className="font-bold text-yellow-900 mb-2">Personal Goals:</p>
            <ul className="space-y-1 text-sm text-gray-800">
              <li>• get fit — привести себя в форму</li>
              <li>• lose weight — похудеть</li>
              <li>• quit smoking — бросить курить</li>
              <li>• save money — копить деньги</li>
              <li>• buy a car/house — купить машину/дом</li>
              <li>• move to another city — переехать в другой город</li>
            </ul>
          </div>

          <div className="p-4 bg-white border border-pink-300 rounded-lg">
            <p className="font-bold text-pink-900 mb-2">Life Plans:</p>
            <ul className="space-y-1 text-sm text-gray-800">
              <li>• get married — пожениться</li>
              <li>• have children — завести детей</li>
              <li>• buy a house — купить дом</li>
              <li>• start a family — завести семью</li>
              <li>• settle down — обосноваться</li>
              <li>• retire early — выйти на пенсию рано</li>
            </ul>
          </div>

          <div className="p-4 bg-white border border-pink-300 rounded-lg">
            <p className="font-bold text-pink-900 mb-2">Hobbies & Interests:</p>
            <ul className="space-y-1 text-sm text-gray-800">
              <li>• learn to play guitar — научиться играть на гитаре</li>
              <li>• write a book — написать книгу</li>
              <li>• learn to cook — научиться готовить</li>
              <li>• take up photography — заняться фотографией</li>
              <li>• join a gym — записаться в спортзал</li>
              <li>• volunteer — заниматься волонтёрством</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Time Expressions for Future — Временные выражения">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="p-3 bg-orange-50 rounded text-center">
            <p className="font-bold">tomorrow</p>
            <p className="text-xs text-gray-600">завтра</p>
          </div>
          <div className="p-3 bg-orange-50 rounded text-center">
            <p className="font-bold">next week</p>
            <p className="text-xs text-gray-600">на следующей неделе</p>
          </div>
          <div className="p-3 bg-orange-50 rounded text-center">
            <p className="font-bold">in the future</p>
            <p className="text-xs text-gray-600">в будущем</p>
          </div>
          <div className="p-3 bg-orange-50 rounded text-center">
            <p className="font-bold">soon</p>
            <p className="text-xs text-gray-600">скоро</p>
          </div>
          <div className="p-3 bg-yellow-50 rounded text-center">
            <p className="font-bold">one day</p>
            <p className="text-xs text-gray-600">однажды</p>
          </div>
          <div className="p-3 bg-yellow-50 rounded text-center">
            <p className="font-bold">someday</p>
            <p className="text-xs text-gray-600">когда-нибудь</p>
          </div>
          <div className="p-3 bg-yellow-50 rounded text-center">
            <p className="font-bold">in 5 years</p>
            <p className="text-xs text-gray-600">через 5 лет</p>
          </div>
          <div className="p-3 bg-yellow-50 rounded text-center">
            <p className="font-bold">later</p>
            <p className="text-xs text-gray-600">позже</p>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Step 4: Telling Stories
function Step4() {
  return (
    <div className="space-y-8">
      <Section title="How to Tell a Good Story">
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-purple-900 mb-3">
            Story Structure
          </h3>
          <p className="text-gray-700">
            Хорошая история имеет начало, середину и конец. Давайте научимся
            структурировать наши рассказы!
          </p>
        </div>
      </Section>

      <Section title="Story Structure — Структура рассказа">
        <div className="space-y-4">
          <div className="p-5 bg-green-50 border-2 border-green-400 rounded-lg">
            <p className="font-bold text-xl text-green-900 mb-3">
              1️⃣ Beginning — Начало
            </p>
            <p className="text-gray-700 mb-3">
              Set the scene: When? Where? Who?
            </p>
            <div className="space-y-2">
              <div className="p-3 bg-white rounded">
                <p className="font-semibold">Last summer, I went to Italy.</p>
                <p className="text-sm text-gray-600">
                  Прошлым летом я поехал в Италию.
                </p>
              </div>
              <div className="p-3 bg-white rounded">
                <p className="font-semibold">
                  When I was 16, I moved to a new city.
                </p>
                <p className="text-sm text-gray-600">
                  Когда мне было 16, я переехал в новый город.
                </p>
              </div>
              <div className="p-3 bg-white rounded">
                <p className="font-semibold">
                  A few years ago, I met an interesting person.
                </p>
                <p className="text-sm text-gray-600">
                  Несколько лет назад я встретил интересного человека.
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 bg-blue-50 border-2 border-blue-400 rounded-lg">
            <p className="font-bold text-xl text-blue-900 mb-3">
              2️⃣ Middle — Середина
            </p>
            <p className="text-gray-700 mb-3">
              Tell what happened: Actions, events, details
            </p>
            <div className="space-y-2">
              <div className="p-3 bg-white rounded">
                <p className="font-semibold">
                  I visited Rome, Florence, and Venice. The food was amazing!
                </p>
                <p className="text-sm text-gray-600">
                  Я посетил Рим, Флоренцию и Венецию. Еда была потрясающей!
                </p>
              </div>
              <div className="p-3 bg-white rounded">
                <p className="font-semibold">
                  At first, I didn't know anyone. Then I joined a sports club.
                </p>
                <p className="text-sm text-gray-600">
                  Сначала я никого не знал. Потом я вступил в спортивный клуб.
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 bg-purple-50 border-2 border-purple-400 rounded-lg">
            <p className="font-bold text-xl text-purple-900 mb-3">
              3️⃣ End — Конец
            </p>
            <p className="text-gray-700 mb-3">
              Conclusion: Result, feeling, lesson learned
            </p>
            <div className="space-y-2">
              <div className="p-3 bg-white rounded">
                <p className="font-semibold">
                  It was the best trip of my life. I want to go back!
                </p>
                <p className="text-sm text-gray-600">
                  Это была лучшая поездка в моей жизни. Я хочу вернуться!
                </p>
              </div>
              <div className="p-3 bg-white rounded">
                <p className="font-semibold">
                  Now I have many friends and I love living here.
                </p>
                <p className="text-sm text-gray-600">
                  Теперь у меня много друзей, и мне нравится жить здесь.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Useful Story Connectors — Связующие слова">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="font-bold text-green-900 mb-2">Beginning:</p>
            <ul className="text-sm space-y-1">
              <li>• First of all — Прежде всего</li>
              <li>• At first — Сначала</li>
              <li>• In the beginning — В начале</li>
              <li>• To start with — Для начала</li>
            </ul>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="font-bold text-blue-900 mb-2">Middle:</p>
            <ul className="text-sm space-y-1">
              <li>• Then — Затем</li>
              <li>• After that — После этого</li>
              <li>• Next — Далее</li>
              <li>• Later — Позже</li>
              <li>• Suddenly — Внезапно</li>
              <li>• Meanwhile — Тем временем</li>
            </ul>
          </div>

          <div className="p-4 bg-purple-50 rounded-lg">
            <p className="font-bold text-purple-900 mb-2">End:</p>
            <ul className="text-sm space-y-1">
              <li>• Finally — Наконец</li>
              <li>• In the end — В конце концов</li>
              <li>• Eventually — В итоге</li>
              <li>• At last — Наконец-то</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Step 5: Example Stories
function Step5() {
  return (
    <div className="space-y-8">
      <Section title="Example Stories — Примеры историй">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-blue-900 mb-3">
            Read and Learn
          </h3>
          <p className="text-gray-700">
            Прочитайте эти истории и обратите внимание на структуру!
          </p>
        </div>
      </Section>

      <Section title="Story 1: My Best Holiday">
        <div className="p-6 bg-white border-2 border-blue-300 rounded-lg">
          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p>
              <b className="text-green-700">[Beginning]</b> Last summer, I went
              to Thailand with my best friend. We had been planning this trip
              for two years, and finally, we were there!
            </p>
            <p>
              <b className="text-blue-700">[Middle]</b> First, we visited
              Bangkok. The city was incredibly busy and noisy, but we loved it.
              We tried delicious street food and visited beautiful temples.
              Then, we traveled to Phuket. The beaches were amazing! We went
              snorkeling and saw colorful fish. After that, we spent a few days
              in Chiang Mai. We rode elephants and learned to cook Thai food.
            </p>
            <p>
              <b className="text-purple-700">[End]</b> Finally, we returned
              home. It was the most memorable holiday of my life. I learned a
              lot about Thai culture and made wonderful memories. One day, I
              want to go back!
            </p>
          </div>
        </div>
      </Section>

      <Section title="Story 2: How I Learned English">
        <div className="p-6 bg-white border-2 border-green-300 rounded-lg">
          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p>
              <b className="text-green-700">[Beginning]</b> When I was in high
              school, I decided to learn English seriously. At first, it was
              very difficult because I didn't know any words.
            </p>
            <p>
              <b className="text-blue-700">[Middle]</b> I started watching
              English movies with subtitles. Every day, I learned 10 new words.
              Then, I joined an online language exchange program and met people
              from different countries. We talked on Skype every week. Later, I
              started reading English books. It was hard, but I didn't give up.
            </p>
            <p>
              <b className="text-purple-700">[End]</b> After three years of hard
              work, I can now speak English fluently. I'm proud of myself!
              Learning English opened many doors for me. Now I'm planning to
              study abroad.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Story 3: My Future Plans">
        <div className="p-6 bg-white border-2 border-orange-300 rounded-lg">
          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p>
              In the next few years, I have many exciting plans. First of all,
              I'm going to finish my university degree. I'm studying computer
              science, and I love it.
            </p>
            <p>
              After graduation, I will look for a job in a tech company. I want
              to work as a software developer. I hope to gain experience and
              learn from professionals. Then, in about five years, I'm planning
              to start my own business. I have some interesting ideas for mobile
              apps.
            </p>
            <p>
              One day, I also want to travel around the world. I'm going to
              visit Japan, because I'm interested in Japanese culture.
              Eventually, I hope to settle down and have a family. But for now,
              I'm focused on my career and personal growth.
            </p>
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
            Practice Your Stories!
          </h3>
          <p className="text-gray-700">
            Выполните эти задания, чтобы научиться рассказывать истории.
          </p>
        </div>
      </Section>

      <Section title="Task 1: Write About Your Past">
        <div className="p-5 bg-white border-2 border-blue-300 rounded-lg">
          <p className="font-bold text-lg text-blue-900 mb-3">
            Tell a story about something interesting that happened to you:
          </p>
          <ul className="space-y-3 text-gray-800">
            <li>
              <b>Topic ideas:</b>
              <ul className="ml-4 mt-2 space-y-1 text-sm">
                <li>• Your best holiday</li>
                <li>• A funny experience</li>
                <li>• How you learned something new</li>
                <li>• An important day in your life</li>
                <li>• Meeting someone special</li>
              </ul>
            </li>
            <li className="mt-3">
              <b>Remember to include:</b>
              <ul className="ml-4 mt-2 space-y-1 text-sm">
                <li>✓ Beginning (when, where, who)</li>
                <li>✓ Middle (what happened)</li>
                <li>✓ End (how you felt, what you learned)</li>
                <li>✓ Story connectors (first, then, after that, finally)</li>
              </ul>
            </li>
          </ul>
        </div>
      </Section>

      <Section title="Task 2: Write About Your Future">
        <div className="p-5 bg-white border-2 border-orange-300 rounded-lg">
          <p className="font-bold text-lg text-orange-900 mb-3">
            Describe your plans for the future:
          </p>
          <ul className="space-y-2 text-gray-800">
            <li>1. What are you going to do next year?</li>
            <li>2. What will you be doing in 5 years?</li>
            <li>3. What do you hope to achieve?</li>
            <li>4. Where do you want to travel?</li>
            <li>5. What skills do you want to learn?</li>
          </ul>
          <p className="text-sm text-gray-600 mt-4">
            Use: will, going to, hope to, want to, plan to
          </p>
        </div>
      </Section>

      <Section title="Task 3: Vocabulary Practice">
        <div className="p-5 bg-white border-2 border-purple-300 rounded-lg">
          <p className="font-bold text-lg text-purple-900 mb-3">
            Make sentences using these expressions:
          </p>
          <ul className="space-y-2 text-gray-800">
            <li>1. a few years ago</li>
            <li>2. at first</li>
            <li>3. then</li>
            <li>4. after that</li>
            <li>5. finally</li>
            <li>6. in the future</li>
            <li>7. one day</li>
            <li>8. next year</li>
          </ul>
        </div>
      </Section>
    </div>
  );
}

// Step 7: Interactive Practice
function Step7() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <Section title="Interactive Practice — Интерактивная практика">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-green-900 mb-3">
            Complete the Stories
          </h3>
          <p className="text-gray-700">Завершите эти истории своими идеями!</p>
        </div>
      </Section>

      <Section title="Story 1: Complete the Past Story">
        <div className="p-5 bg-white border-2 border-blue-300 rounded-lg">
          <p className="text-gray-800 mb-4 leading-relaxed">
            Last year, I decided to try something new. I...
          </p>
          <textarea
            value={answers.past || ""}
            onChange={(e) => handleChange("past", e.target.value)}
            placeholder="Продолжите историю... (What did you try? What happened? How did you feel?)"
            rows={6}
            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </Section>

      <Section title="Story 2: Complete the Future Story">
        <div className="p-5 bg-white border-2 border-orange-300 rounded-lg">
          <p className="text-gray-800 mb-4 leading-relaxed">
            In the next 5 years, I'm going to...
          </p>
          <textarea
            value={answers.future || ""}
            onChange={(e) => handleChange("future", e.target.value)}
            placeholder="Расскажите о своих планах... (What will you do? What do you hope to achieve?)"
            rows={6}
            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </Section>

      <Section title="Choose the Correct Time Expression">
        <div className="space-y-4">
          {[
            {
              q: "I visited Paris _____ summer.",
              opts: "last / next",
            },
            {
              q: "_____, I'm going to graduate from university.",
              opts: "Last year / Next year",
            },
            {
              q: "Have you _____ been to Japan?",
              opts: "ever / never",
            },
            {
              q: "I met her three years _____.",
              opts: "ago / later",
            },
            {
              q: "_____ day, I want to travel the world.",
              opts: "One / Last",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 bg-white border border-gray-300 rounded-lg"
            >
              <p className="text-gray-900 mb-2">
                {idx + 1}. {item.q}
              </p>
              <p className="text-sm text-gray-600 mb-2">({item.opts})</p>
              <input
                type="text"
                value={answers[`time${idx + 1}`] || ""}
                onChange={(e) => handleChange(`time${idx + 1}`, e.target.value)}
                placeholder="Введите ваш ответ..."
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

// Step 8: Final Project
function Step8() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-8">
      <Section title="Final Project — Финальный проект">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 p-6 rounded-xl mb-6">
          <h3 className="text-xl font-bold text-purple-900 mb-3">
            Tell Your Life Story!
          </h3>
          <p className="text-gray-700">
            Напишите свою историю жизни: прошлое, настоящее и будущее!
          </p>
        </div>
      </Section>

      <Section title="Part 1: My Past">
        <div className="p-5 bg-blue-50 border-2 border-blue-300 rounded-lg">
          <p className="font-bold text-blue-900 mb-3">
            Write about your past experiences:
          </p>
          <ul className="text-sm text-gray-700 mb-4 space-y-1">
            <li>• Where were you born?</li>
            <li>• What did you study?</li>
            <li>• What interesting things happened?</li>
            <li>• What was your best memory?</li>
          </ul>
          <textarea
            value={answers.myPast || ""}
            onChange={(e) => handleChange("myPast", e.target.value)}
            placeholder="Write about your past..."
            rows={8}
            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </Section>

      <Section title="Part 2: My Present">
        <div className="p-5 bg-green-50 border-2 border-green-300 rounded-lg">
          <p className="font-bold text-green-900 mb-3">
            Write about your current life:
          </p>
          <ul className="text-sm text-gray-700 mb-4 space-y-1">
            <li>• What do you do now?</li>
            <li>• Where do you live?</li>
            <li>• What are you studying/working on?</li>
            <li>• What do you enjoy?</li>
          </ul>
          <textarea
            value={answers.myPresent || ""}
            onChange={(e) => handleChange("myPresent", e.target.value)}
            placeholder="Write about your present..."
            rows={8}
            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
          />
        </div>
      </Section>

      <Section title="Part 3: My Future">
        <div className="p-5 bg-orange-50 border-2 border-orange-300 rounded-lg">
          <p className="font-bold text-orange-900 mb-3">
            Write about your future plans:
          </p>
          <ul className="text-sm text-gray-700 mb-4 space-y-1">
            <li>• What are you going to do?</li>
            <li>• What do you hope to achieve?</li>
            <li>• Where do you want to be in 5 years?</li>
            <li>• What are your dreams?</li>
          </ul>
          <textarea
            value={answers.myFuture || ""}
            onChange={(e) => handleChange("myFuture", e.target.value)}
            placeholder="Write about your future..."
            rows={8}
            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
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
            Вы завершили тему <b>Experiences and Stories</b>! Теперь вы умеете
            рассказывать о прошлых событиях, делиться опытом и говорить о
            будущих планах. Вы можете структурировать истории и использовать
            правильные временные выражения!
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full font-semibold">
            <span>✓</span>
            <span>Тема завершена</span>
          </div>
        </div>
      </Section>
    </div>
  );
}
