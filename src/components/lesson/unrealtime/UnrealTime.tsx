"use client";

import React from "react";
import { Section as UiSection } from "@/components/ui/Section";
import CheckableExercise, { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function UnrealTime({ step }: Props) {
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
    default:
      return <Step1 />;
  }
}

function Step1() {
  return (
    <>
      <UiSection title="🕰️ Unreal Time — Нереальное время">
        <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 rounded-xl p-8 mb-6 border-2 border-purple-200">
          <div className="text-6xl mb-4 text-center">😮‍💨</div>
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            <strong>Unreal Time</strong> — это конструкции, которые выглядят как прошедшее время,
            но на самом деле говорят о настоящем или будущем. Звучит странно? Это английская магия! ✨
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Представь: твой друг всё откладывает изучение английского. Ты говоришь:
            <span className="font-bold text-purple-700"> It&rsquo;s time you started learning!</span>
            — буквально &ldquo;пора бы тебе начать&rdquo; (хотя используем past simple).
          </p>
          <p className="text-gray-700 leading-relaxed">
            Эти конструкции помогают выразить:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-3 ml-4">
            <li><strong>Пора что-то сделать</strong> — It&rsquo;s time / It&rsquo;s high time</li>
            <li><strong>Предпочтения</strong> — I&rsquo;d rather / I&rsquo;d sooner</li>
            <li><strong>Желания и сожаления</strong> — I wish / If only</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200">
          <div className="text-5xl mb-3">🎮</div>
          <p className="text-lg font-bold text-gray-800 mb-3">Почему Past Simple для настоящего?</p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Past Simple создаёт психологическую дистанцию между реальностью и желаемым.
            Это как в играх: ты в настоящем, но представляешь альтернативную реальность.
          </p>
          <div className="bg-white rounded-lg p-4 border border-blue-300">
            <p className="text-gray-800 mb-2">
              <span className="text-green-600 font-bold">✓</span> I wish I <strong>was</strong> rich.
              <span className="text-sm text-gray-600 ml-2">(но я не богат сейчас)</span>
            </p>
            <p className="text-gray-800">
              <span className="text-green-600 font-bold">✓</span> It&rsquo;s time we <strong>left</strong>.
              <span className="text-sm text-gray-600 ml-2">(нам пора уходить сейчас)</span>
            </p>
          </div>
        </div>
      </UiSection>
    </>
  );
}

function Step2() {
  return (
    <>
      <UiSection title="⏰ It's time / It's high time + Past Simple">
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8 mb-6 border-2 border-orange-200">
          <div className="text-6xl mb-4 text-center">⏰</div>
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            <strong>It&rsquo;s time</strong> и <strong>It&rsquo;s high time</strong> используются,
            когда пора что-то сделать (но это ещё не сделано).
          </p>
          <div className="bg-white rounded-lg p-5 border-2 border-orange-300 mb-4">
            <p className="text-xl font-bold text-orange-700 mb-2">Формула:</p>
            <p className="text-lg text-gray-800">
              It&rsquo;s (high) time + <strong>subject + Past Simple</strong>
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            <strong>It&rsquo;s high time</strong> = более настойчиво, &ldquo;давно пора!&rdquo; 🔥
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-200">
            <div className="text-4xl mb-3">📱</div>
            <p className="text-lg font-bold text-gray-800 mb-3">Современные примеры:</p>

            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 border border-green-300">
                <p className="text-gray-800 font-semibold mb-1">
                  It&rsquo;s time you <strong>updated</strong> your Instagram bio.
                </p>
                <p className="text-sm text-gray-600">
                  🇷🇺 Пора бы тебе обновить описание в Инстаграме.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-green-300">
                <p className="text-gray-800 font-semibold mb-1">
                  It&rsquo;s high time we <strong>stopped</strong> doomscrolling and did something productive.
                </p>
                <p className="text-sm text-gray-600">
                  🇷🇺 Давно пора перестать листать негатив и заняться чем-то полезным.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-green-300">
                <p className="text-gray-800 font-semibold mb-1">
                  It&rsquo;s time you <strong>got</strong> a new phone. This one is ancient!
                </p>
                <p className="text-sm text-gray-600">
                  🇷🇺 Тебе пора купить новый телефон. Этот — динозавр!
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-green-300">
                <p className="text-gray-800 font-semibold mb-1">
                  It&rsquo;s high time someone <strong>fixed</strong> this bug in the app.
                </p>
                <p className="text-sm text-gray-600">
                  🇷🇺 Давно пора кому-то исправить этот баг в приложении.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-green-300">
                <p className="text-gray-800 font-semibold mb-1">
                  It&rsquo;s time we <strong>started</strong> that YouTube channel we talked about.
                </p>
                <p className="text-sm text-gray-600">
                  🇷🇺 Пора нам запустить тот YouTube-канал, о котором мы говорили.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-6 border-2 border-purple-200">
            <div className="text-4xl mb-3">💪</div>
            <p className="text-lg font-bold text-gray-800 mb-3">Жизненные ситуации:</p>

            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 border border-purple-300">
                <p className="text-gray-800 font-semibold mb-1">
                  It&rsquo;s time I <strong>moved</strong> out of my parents&rsquo; house.
                </p>
                <p className="text-sm text-gray-600">
                  🇷🇺 Мне пора съехать от родителей.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-purple-300">
                <p className="text-gray-800 font-semibold mb-1">
                  It&rsquo;s high time you <strong>apologized</strong> to her.
                </p>
                <p className="text-sm text-gray-600">
                  🇷🇺 Давно пора тебе извиниться перед ней.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-purple-300">
                <p className="text-gray-800 font-semibold mb-1">
                  It&rsquo;s time we <strong>had</strong> a serious conversation about our future.
                </p>
                <p className="text-sm text-gray-600">
                  🇷🇺 Нам пора серьёзно поговорить о нашем будущем.
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

function Step3() {
  const items: FillItem[] = [
    {
      left: "It's time you",
      answers: ["got"],
      right: "(get) a job. You can't live off your parents forever.",
    },
    {
      left: "It's high time we",
      answers: ["left"],
      right: "(leave). The party is getting boring.",
    },
    {
      left: "It's time he",
      answers: ["realized", "realised"],
      right: "(realize) that not everyone will like him on social media.",
    },
    {
      left: "It's high time they",
      answers: ["fixed"],
      right: "(fix) the Wi-Fi in this café.",
    },
    {
      left: "It's time you",
      answers: ["stopped"],
      right: "(stop) procrastinating and started working on your project.",
    },
    {
      left: "It's high time someone",
      answers: ["told"],
      right: "(tell) him the truth about his terrible singing.",
    },
    {
      left: "It's time we",
      answers: ["upgraded"],
      right: "(upgrade) our gaming PC. It's lagging on every game.",
    },
    {
      left: "It's high time she",
      answers: ["deleted"],
      right: "(delete) her ex from all social media.",
    },
  ];

  return (
    <>
      <UiSection title="✍️ Практика: It's time / It's high time">
        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-6 mb-6 border-2 border-yellow-300">
          <div className="text-5xl mb-3 text-center">🎯</div>
          <p className="text-center text-lg text-gray-800 font-semibold">
            Поставь глаголы в Past Simple:
          </p>
        </div>
        <CheckableExercise
          title="Заполни пропуски"
          instruction="Используй Past Simple"
          items={items}
        />
      </UiSection>
    </>
  );
}

function Step4() {
  return (
    <>
      <UiSection title="🙏 I'd rather + Past Simple (настоящее)">
        <div className="bg-gradient-to-r from-pink-50 via-rose-50 to-red-50 rounded-xl p-8 mb-6 border-2 border-pink-200">
          <div className="text-6xl mb-4 text-center">🤔</div>
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            <strong>I&rsquo;d rather</strong> (= I would rather) выражает предпочтение.
            Когда речь о ком-то другом, используем <strong>Past Simple</strong>.
          </p>
          <div className="bg-white rounded-lg p-5 border-2 border-pink-300 mb-4">
            <p className="text-xl font-bold text-pink-700 mb-2">Формула:</p>
            <p className="text-lg text-gray-800 mb-3">
              I&rsquo;d rather + <strong>subject + Past Simple</strong>
            </p>
            <p className="text-sm text-gray-600">
              (когда говорим о действиях другого человека)
            </p>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-200">
            <p className="text-gray-700 mb-2">
              <strong>Сравни:</strong>
            </p>
            <p className="text-gray-800 mb-2">
              ✓ I&rsquo;d rather <strong>stay</strong> home.
              <span className="text-sm text-gray-600 ml-2">(я сам хочу остаться)</span>
            </p>
            <p className="text-gray-800">
              ✓ I&rsquo;d rather you <strong>stayed</strong> home.
              <span className="text-sm text-gray-600 ml-2">(я хочу, чтобы ты остался)</span>
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-6 border-2 border-green-200">
            <div className="text-4xl mb-3">💬</div>
            <p className="text-lg font-bold text-gray-800 mb-3">Молодёжные примеры:</p>

            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 border border-green-300">
                <p className="text-gray-800 font-semibold mb-1">
                  I&rsquo;d rather you <strong>didn&rsquo;t post</strong> that photo of me on Instagram.
                </p>
                <p className="text-sm text-gray-600">
                  🇷🇺 Я бы предпочёл, чтобы ты не постил это моё фото в Инстаграм.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-green-300">
                <p className="text-gray-800 font-semibold mb-1">
                  I&rsquo;d rather we <strong>met</strong> in person than texted all the time.
                </p>
                <p className="text-sm text-gray-600">
                  🇷🇺 Я бы предпочёл, чтобы мы встречались лично, а не переписывались постоянно.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-green-300">
                <p className="text-gray-800 font-semibold mb-1">
                  I&rsquo;d rather you <strong>stopped</strong> sending me TikToks at 3 AM.
                </p>
                <p className="text-sm text-gray-600">
                  🇷🇺 Я бы предпочёл, чтобы ты перестал присылать мне ТикТоки в 3 ночи.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-green-300">
                <p className="text-gray-800 font-semibold mb-1">
                  I&rsquo;d rather he <strong>didn&rsquo;t know</strong> about my secret Spotify playlist.
                </p>
                <p className="text-sm text-gray-600">
                  🇷🇺 Я бы предпочёл, чтобы он не знал о моём секретном плейлисте в Spotify.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-green-300">
                <p className="text-gray-800 font-semibold mb-1">
                  I&rsquo;d rather you <strong>came</strong> to the party. It won&rsquo;t be fun without you.
                </p>
                <p className="text-sm text-gray-600">
                  🇷🇺 Я бы предпочёл, чтобы ты пришёл на вечеринку. Без тебя будет скучно.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6 border-2 border-purple-200">
            <div className="text-4xl mb-3">🎮</div>
            <p className="text-lg font-bold text-gray-800 mb-3">Игры и хобби:</p>

            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 border border-purple-300">
                <p className="text-gray-800 font-semibold mb-1">
                  I&rsquo;d rather we <strong>played</strong> co-op than competitive mode.
                </p>
                <p className="text-sm text-gray-600">
                  🇷🇺 Я бы предпочёл, чтобы мы играли в кооператив, а не в соревновательный режим.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-purple-300">
                <p className="text-gray-800 font-semibold mb-1">
                  I&rsquo;d rather you <strong>didn&rsquo;t spoil</strong> the ending of the game.
                </p>
                <p className="text-sm text-gray-600">
                  🇷🇺 Я бы предпочёл, чтобы ты не спойлерил концовку игры.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-purple-300">
                <p className="text-gray-800 font-semibold mb-1">
                  I&rsquo;d rather she <strong>joined</strong> our Discord server.
                </p>
                <p className="text-sm text-gray-600">
                  🇷🇺 Я бы предпочёл, чтобы она присоединилась к нашему Discord-серверу.
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

function Step5() {
  return (
    <>
      <UiSection title="⏮️ I'd rather + Past Perfect (прошлое)">
        <div className="bg-gradient-to-r from-violet-50 via-purple-50 to-fuchsia-50 rounded-xl p-8 mb-6 border-2 border-violet-200">
          <div className="text-6xl mb-4 text-center">😔</div>
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            Когда мы хотим выразить предпочтение о прошлом (но уже поздно что-то менять),
            используем <strong>Past Perfect</strong>.
          </p>
          <div className="bg-white rounded-lg p-5 border-2 border-violet-300 mb-4">
            <p className="text-xl font-bold text-violet-700 mb-2">Формула:</p>
            <p className="text-lg text-gray-800 mb-3">
              I&rsquo;d rather + <strong>subject + had + V3</strong>
            </p>
            <p className="text-sm text-gray-600">
              (сожаление о прошлом)
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6 border-2 border-red-200">
            <div className="text-4xl mb-3">📸</div>
            <p className="text-lg font-bold text-gray-800 mb-3">Сожаления:</p>

            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 border border-red-300">
                <p className="text-gray-800 font-semibold mb-1">
                  I&rsquo;d rather you <strong>hadn&rsquo;t posted</strong> that embarrassing story about me.
                </p>
                <p className="text-sm text-gray-600">
                  🇷🇺 Жаль, что ты запостил ту неловкую историю обо мне. (Лучше бы не постил!)
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-red-300">
                <p className="text-gray-800 font-semibold mb-1">
                  I&rsquo;d rather she <strong>hadn&rsquo;t seen</strong> my search history.
                </p>
                <p className="text-sm text-gray-600">
                  🇷🇺 Лучше бы она не видела мою историю поиска.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-red-300">
                <p className="text-gray-800 font-semibold mb-1">
                  I&rsquo;d rather we <strong>had gone</strong> to the other restaurant.
                </p>
                <p className="text-sm text-gray-600">
                  🇷🇺 Лучше бы мы пошли в другой ресторан.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-red-300">
                <p className="text-gray-800 font-semibold mb-1">
                  I&rsquo;d rather he <strong>hadn&rsquo;t told</strong> everyone about my crush.
                </p>
                <p className="text-sm text-gray-600">
                  🇷🇺 Лучше бы он не рассказывал всем о том, кто мне нравится.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-red-300">
                <p className="text-gray-800 font-semibold mb-1">
                  I&rsquo;d rather you <strong>had asked</strong> me before using my Netflix account.
                </p>
                <p className="text-sm text-gray-600">
                  🇷🇺 Лучше бы ты спросил меня, прежде чем использовать мой аккаунт Netflix.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-lg p-6 border-2 border-blue-200">
            <div className="text-4xl mb-3">💡</div>
            <p className="text-lg font-bold text-gray-800 mb-3">I&rsquo;d sooner = то же самое</p>
            <p className="text-gray-700 mb-3">
              <strong>I&rsquo;d sooner</strong> — это синоним I&rsquo;d rather, но звучит чуть более литературно.
            </p>
            <div className="space-y-2">
              <div className="bg-white rounded-lg p-4 border border-blue-300">
                <p className="text-gray-800">
                  I&rsquo;d sooner you <strong>didn&rsquo;t mention</strong> that topic.
                </p>
                <p className="text-sm text-gray-600">
                  = I&rsquo;d rather you didn&rsquo;t mention that topic.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-blue-300">
                <p className="text-gray-800">
                  I&rsquo;d sooner <strong>die</strong> than admit I was wrong. (шутка 😄)
                </p>
                <p className="text-sm text-gray-600">
                  🇷🇺 Лучше умру, чем признаю, что был неправ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

function Step6() {
  const items: FillItem[] = [
    {
      left: "I'd rather you",
      answers: ["didn't tell", "didnt tell"],
      right: "(not tell) my parents about the party last night.",
    },
    {
      left: "I'd rather she",
      answers: ["came"],
      right: "(come) with us to the concert tomorrow.",
    },
    {
      left: "I'd rather they",
      answers: ["hadn't posted", "hadnt posted"],
      right: "(not have posted) that video of me dancing.",
    },
    {
      left: "I'd rather we",
      answers: ["watched"],
      right: "(watch) something else. This movie is boring.",
    },
    {
      left: "I'd rather you",
      answers: ["hadn't told", "hadnt told"],
      right: "(not have told) him my secret.",
    },
    {
      left: "I'd rather he",
      answers: ["replied"],
      right: "(reply) to my messages more quickly.",
    },
    {
      left: "I'd rather you",
      answers: ["hadn't eaten", "hadnt eaten"],
      right: "(not have eaten) my leftovers from the fridge.",
    },
    {
      left: "I'd rather we",
      answers: ["met"],
      right: "(meet) at 6 PM instead of 5 PM.",
    },
  ];

  return (
    <>
      <UiSection title="✍️ Практика: I'd rather">
        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 mb-6 border-2 border-teal-300">
          <div className="text-5xl mb-3 text-center">🔥</div>
          <p className="text-center text-lg text-gray-800 font-semibold mb-2">
            Заполни пропуски правильной формой глагола:
          </p>
          <p className="text-center text-sm text-gray-600">
            (используй Past Simple для настоящего/будущего, Past Perfect для прошлого)
          </p>
        </div>
        <CheckableExercise
          title="Заполни пропуски"
          instruction="Past Simple для настоящего, Past Perfect для прошлого"
          items={items}
        />
      </UiSection>
    </>
  );
}

function Step7() {
  return (
    <>
      <UiSection title="🌟 I wish + Past Simple (настоящее)">
        <div className="bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 rounded-xl p-8 mb-6 border-2 border-amber-200">
          <div className="text-6xl mb-4 text-center">✨</div>
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            <strong>I wish</strong> выражает желание, чтобы ситуация была другой.
            Это всегда о чём-то нереальном.
          </p>
          <div className="bg-white rounded-lg p-5 border-2 border-amber-300 mb-4">
            <p className="text-xl font-bold text-amber-700 mb-2">I wish + Past Simple:</p>
            <p className="text-lg text-gray-800 mb-2">
              = желание о настоящем (что сейчас не так, как хочется)
            </p>
            <p className="text-sm text-gray-600">
              &ldquo;Жаль, что...&rdquo; / &ldquo;Хотел бы я...&rdquo;
            </p>
          </div>
          <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg p-4 border border-rose-200">
            <p className="text-gray-700 mb-2">
              <strong>Важно:</strong>
            </p>
            <p className="text-gray-800 mb-2">
              ✓ I wish I <strong>was/were</strong> taller.
              <span className="text-sm text-gray-600 ml-2">(но я невысокий сейчас)</span>
            </p>
            <p className="text-sm text-gray-600">
              В формальном английском: I wish I <strong>were</strong> (всегда were, не was)
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-200">
            <div className="text-4xl mb-3">😩</div>
            <p className="text-lg font-bold text-gray-800 mb-3">Молодёжные желания:</p>

            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 border border-green-300">
                <p className="text-gray-800 font-semibold mb-1">
                  I wish I <strong>had</strong> more followers on Instagram.
                </p>
                <p className="text-sm text-gray-600">
                  🇷🇺 Жаль, что у меня мало фолловеров в Инстаграме.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-green-300">
                <p className="text-gray-800 font-semibold mb-1">
                  I wish I <strong>was/were</strong> better at gaming.
                </p>
                <p className="text-sm text-gray-600">
                  🇷🇺 Жаль, что я не очень хорош в играх.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-green-300">
                <p className="text-gray-800 font-semibold mb-1">
                  I wish my phone <strong>didn&rsquo;t die</strong> so quickly.
                </p>
                <p className="text-sm text-gray-600">
                  🇷🇺 Жаль, что мой телефон так быстро разряжается.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-green-300">
                <p className="text-gray-800 font-semibold mb-1">
                  I wish we <strong>lived</strong> closer to each other.
                </p>
                <p className="text-sm text-gray-600">
                  🇷🇺 Жаль, что мы живём далеко друг от друга.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-green-300">
                <p className="text-gray-800 font-semibold mb-1">
                  I wish I <strong>knew</strong> how to code.
                </p>
                <p className="text-sm text-gray-600">
                  🇷🇺 Жаль, что я не умею программировать.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-green-300">
                <p className="text-gray-800 font-semibold mb-1">
                  I wish she <strong>liked</strong> me back.
                </p>
                <p className="text-sm text-gray-600">
                  🇷🇺 Жаль, что я ей не нравлюсь. (Хотел бы, чтобы она меня тоже любила)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border-2 border-blue-200">
            <div className="text-4xl mb-3">🎓</div>
            <p className="text-lg font-bold text-gray-800 mb-3">Учёба и карьера:</p>

            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 border border-blue-300">
                <p className="text-gray-800 font-semibold mb-1">
                  I wish I <strong>had</strong> more time to study.
                </p>
                <p className="text-sm text-gray-600">
                  🇷🇺 Жаль, что у меня мало времени на учёбу.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-blue-300">
                <p className="text-gray-800 font-semibold mb-1">
                  I wish exams <strong>weren&rsquo;t</strong> so stressful.
                </p>
                <p className="text-sm text-gray-600">
                  🇷🇺 Жаль, что экзамены такие стрессовые.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-blue-300">
                <p className="text-gray-800 font-semibold mb-1">
                  I wish my job <strong>paid</strong> better.
                </p>
                <p className="text-sm text-gray-600">
                  🇷🇺 Жаль, что моя работа плохо оплачивается.
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

function Step8() {
  return (
    <>
      <UiSection title="😔 I wish + Past Perfect (прошлое)">
        <div className="bg-gradient-to-r from-red-50 via-rose-50 to-pink-50 rounded-xl p-8 mb-6 border-2 border-red-200">
          <div className="text-6xl mb-4 text-center">💔</div>
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            Когда сожалеем о прошлом (что-то уже случилось и не изменить),
            используем <strong>Past Perfect</strong>.
          </p>
          <div className="bg-white rounded-lg p-5 border-2 border-red-300 mb-4">
            <p className="text-xl font-bold text-red-700 mb-2">I wish + Past Perfect:</p>
            <p className="text-lg text-gray-800 mb-2">
              I wish + <strong>had + V3</strong>
            </p>
            <p className="text-sm text-gray-600">
              = сожаление о прошлом (&ldquo;Жаль, что я сделал/не сделал...&rdquo;)
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-6 border-2 border-purple-200">
            <div className="text-4xl mb-3">😭</div>
            <p className="text-lg font-bold text-gray-800 mb-3">Сожаления о прошлом:</p>

            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 border border-purple-300">
                <p className="text-gray-800 font-semibold mb-1">
                  I wish I <strong>had studied</strong> harder for that test.
                </p>
                <p className="text-sm text-gray-600">
                  🇷🇺 Жаль, что я не учился усерднее к тому тесту.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-purple-300">
                <p className="text-gray-800 font-semibold mb-1">
                  I wish I <strong>hadn&rsquo;t said</strong> that to her. Now she&rsquo;s mad at me.
                </p>
                <p className="text-sm text-gray-600">
                  🇷🇺 Жаль, что я сказал ей это. Теперь она злится на меня.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-purple-300">
                <p className="text-gray-800 font-semibold mb-1">
                  I wish I <strong>had gone</strong> to that concert. Everyone said it was amazing.
                </p>
                <p className="text-sm text-gray-600">
                  🇷🇺 Жаль, что я не пошёл на тот концерт. Все говорят, что он был шикарным.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-purple-300">
                <p className="text-gray-800 font-semibold mb-1">
                  I wish I <strong>hadn&rsquo;t posted</strong> that cringe photo. It still haunts me.
                </p>
                <p className="text-sm text-gray-600">
                  🇷🇺 Жаль, что я запостил ту кринжовую фотку. Она до сих пор меня преследует.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-purple-300">
                <p className="text-gray-800 font-semibold mb-1">
                  I wish I <strong>had bought</strong> that limited edition merch when I had the chance.
                </p>
                <p className="text-sm text-gray-600">
                  🇷🇺 Жаль, что я не купил тот лимитированный мерч, когда была возможность.
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-purple-300">
                <p className="text-gray-800 font-semibold mb-1">
                  I wish we <strong>had taken</strong> more photos on that trip.
                </p>
                <p className="text-sm text-gray-600">
                  🇷🇺 Жаль, что мы не сделали больше фотографий в той поездке.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-6 border-2 border-orange-200">
            <div className="text-4xl mb-3">🙈</div>
            <p className="text-lg font-bold text-gray-800 mb-3">If only = то же самое, но драматичнее</p>
            <p className="text-gray-700 mb-3">
              <strong>If only</strong> — это более эмоциональный синоним I wish. Звучит драматичнее.
            </p>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 border border-orange-300">
                <p className="text-gray-800 font-semibold mb-1">
                  If only I <strong>had</strong> a better gaming PC!
                </p>
                <p className="text-sm text-gray-600">
                  🇷🇺 Если бы только у меня был нормальный игровой ПК! (но нет)
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-orange-300">
                <p className="text-gray-800 font-semibold mb-1">
                  If only I <strong>had listened</strong> to your advice!
                </p>
                <p className="text-sm text-gray-600">
                  🇷🇺 Если бы только я послушал твоего совета! (но не послушал)
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-orange-300">
                <p className="text-gray-800 font-semibold mb-1">
                  If only it <strong>wasn&rsquo;t/weren&rsquo;t</strong> so expensive!
                </p>
                <p className="text-sm text-gray-600">
                  🇷🇺 Если бы только это не было так дорого!
                </p>
              </div>
            </div>
          </div>
        </div>
      </UiSection>
    </>
  );
}

function Step9() {
  const items: FillItem[] = [
    {
      left: "I wish I",
      answers: ["was", "were"],
      right: "(be) more confident when talking to new people.",
    },
    {
      left: "I wish I",
      answers: ["hadn't deleted", "hadnt deleted"],
      right: "(not have deleted) that photo. I can't get it back now.",
    },
    {
      left: "If only my parents",
      answers: ["understood"],
      right: "(understand) how important gaming is to me.",
    },
    {
      left: "I wish we",
      answers: ["hadn't left", "hadnt left"],
      right: "(not have left) the party so early. We missed all the fun.",
    },
    {
      left: "I wish she",
      answers: ["replied"],
      right: "(reply) to my messages faster.",
    },
    {
      left: "If only I",
      answers: ["had"],
      right: "(have) saved money instead of spending it all on skins.",
    },
    {
      left: "I wish I",
      answers: ["could"],
      right: "(can) travel to Japan this summer.",
    },
    {
      left: "I wish I",
      answers: ["hadn't said", "hadnt said"],
      right: "(not have said) that during the stream. So embarrassing!",
    },
    {
      left: "If only the Wi-Fi",
      answers: ["was", "were"],
      right: "(be) faster in this place!",
    },
    {
      left: "I wish I",
      answers: ["had started"],
      right: "(have started) learning English earlier.",
    },
  ];

  return (
    <>
      <UiSection title="🎯 Финальный тест: Unreal Time">
        <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-xl p-6 mb-6 border-2 border-indigo-300">
          <div className="text-6xl mb-3 text-center">🔥</div>
          <p className="text-center text-lg text-gray-800 font-semibold mb-2">
            Заполни пропуски правильной формой:
          </p>
          <p className="text-center text-sm text-gray-600">
            (Past Simple для настоящего, Past Perfect для прошлого)
          </p>
        </div>
        <CheckableExercise
          title="Финальный тест"
          instruction="Используй правильную форму глагола"
          items={items}
        />

        <div className="mt-10 bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl p-8 border-2 border-gray-300">
          <div className="text-5xl mb-4 text-center">📋</div>
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Шпаргалка: Unreal Time
          </h3>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border-2 border-blue-200">
              <p className="font-bold text-blue-700 mb-2">⏰ It&rsquo;s time / It&rsquo;s high time + Past Simple</p>
              <p className="text-gray-700 text-sm mb-1">Пора что-то сделать (но ещё не сделано)</p>
              <p className="text-gray-600 text-sm italic">It&rsquo;s time you got a job.</p>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-pink-200">
              <p className="font-bold text-pink-700 mb-2">🤔 I&rsquo;d rather + subject + Past Simple</p>
              <p className="text-gray-700 text-sm mb-1">Предпочтение о настоящем/будущем</p>
              <p className="text-gray-600 text-sm italic">I&rsquo;d rather you stayed home.</p>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-purple-200">
              <p className="font-bold text-purple-700 mb-2">😔 I&rsquo;d rather + subject + Past Perfect</p>
              <p className="text-gray-700 text-sm mb-1">Предпочтение о прошлом (сожаление)</p>
              <p className="text-gray-600 text-sm italic">I&rsquo;d rather you hadn&rsquo;t told him.</p>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-amber-200">
              <p className="font-bold text-amber-700 mb-2">✨ I wish + Past Simple</p>
              <p className="text-gray-700 text-sm mb-1">Желание о настоящем (но это не так)</p>
              <p className="text-gray-600 text-sm italic">I wish I was/were taller.</p>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-red-200">
              <p className="font-bold text-red-700 mb-2">💔 I wish + Past Perfect</p>
              <p className="text-gray-700 text-sm mb-1">Сожаление о прошлом</p>
              <p className="text-gray-600 text-sm italic">I wish I had studied harder.</p>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-orange-200">
              <p className="font-bold text-orange-700 mb-2">🙈 If only = I wish (но драматичнее)</p>
              <p className="text-gray-700 text-sm mb-1">Более эмоционально</p>
              <p className="text-gray-600 text-sm italic">If only I had more time!</p>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-5 border border-green-300">
            <p className="text-center text-gray-700 font-semibold">
              🎉 Поздравляем! Ты освоил Unreal Time — одну из самых крутых тем продвинутой грамматики!
              Теперь ты можешь выражать сожаления и желания как носитель языка.
            </p>
          </div>
        </div>
      </UiSection>
    </>
  );
}
