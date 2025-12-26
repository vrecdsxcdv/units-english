"use client";

import { Section } from "@/components/ui/Section";
import CheckableExercise from "@/components/lesson/CheckableExercise";

type Props = { step: number };

export default function MediaNews({ step }: Props) {
  if (step === 1) {
    return (
      <>
        <Section title="📰 Media & News — Introduction">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border-2 border-blue-300 mb-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              📚 Введение в тему Media & News
            </h3>

            <div className="bg-white rounded-lg p-6 border-2 border-blue-200 mb-4">
              <p className="text-base leading-relaxed mb-4">
                <strong>Media & News</strong> (Медиа и новости) — это тема,
                охватывающая всё, что связано с <strong>журналистикой</strong>,{" "}
                <strong>новостями</strong>, <strong>СМИ</strong> и{" "}
                <strong>информацией</strong>. В современном мире умение понимать
                медиа-лексику критически важно для работы с новостями на
                английском языке.
              </p>

              <p className="text-base leading-relaxed">
                Эта тема особенно актуальна для чтения англоязычных новостей,
                понимания журналистских статей, работы в медиа-индустрии и
                критического мышления в эпоху информации.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300">
              <h4 className="text-xl font-bold text-blue-900 mb-3">
                🎯 Что вы освоите:
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>150 ключевых слов по теме Media & News</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    Типы медиа (newspaper, magazine, broadcast, social media)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    Профессии в медиа (journalist, reporter, editor, anchor)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    Производство новостей (report, investigate, publish)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    Типы контента (headline, breaking news, editorial,
                    interview)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    Проблемы медиа (fake news, bias, censorship, propaganda)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    Социальные сети и цифровые медиа (viral, influencer,
                    algorithm)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Чтение текста и практические упражнения</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-6 border-2 border-cyan-300 mb-6">
            <h3 className="text-2xl font-bold text-cyan-900 mb-4">
              📱 Types of Media — Типы медиа
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-cyan-200">
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      1. media / mass media
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      медиа / СМИ (средства массовой информации)
                    </p>
                    <p className="text-sm italic">
                      The <strong>media</strong> plays a crucial role in
                      society.
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded p-4">
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">
                      2. news
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">новости</p>
                    <p className="text-sm italic">
                      I watch the <strong>news</strong> every evening.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      3. newspaper
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">газета</p>
                    <p className="text-sm italic">
                      I read the <strong>newspaper</strong> every morning.
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      4. magazine
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">журнал</p>
                    <p className="text-sm italic">
                      She works for a fashion <strong>magazine</strong>.
                    </p>
                  </div>

                  <div className="bg-red-50 rounded p-4">
                    <h4 className="font-bold text-red-900 text-lg mb-2">
                      5. television / TV
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">телевидение</p>
                    <p className="text-sm italic">
                      <strong>TV</strong> news reaches millions of viewers.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      6. radio
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">радио</p>
                    <p className="text-sm italic">
                      I listen to news on the <strong>radio</strong>.
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded p-4">
                    <h4 className="font-bold text-yellow-900 text-lg mb-2">
                      7. broadcast / broadcasting
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      вещание / радиовещание
                    </p>
                    <p className="text-sm italic">
                      The interview will be <strong>broadcast</strong> live.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      8. online media / digital media
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      онлайн-медиа / цифровые медиа
                    </p>
                    <p className="text-sm italic">
                      <strong>Online media</strong> is growing rapidly.
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      9. social media
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      социальные сети
                    </p>
                    <p className="text-sm italic">
                      <strong>Social media</strong> is a major news source.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      10. podcast
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">подкаст</p>
                    <p className="text-sm italic">
                      I listen to news <strong>podcasts</strong>.
                    </p>
                  </div>

                  <div className="bg-lime-50 rounded p-4">
                    <h4 className="font-bold text-lime-900 text-lg mb-2">
                      11. blog / blogger
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">блог / блогер</p>
                    <p className="text-sm italic">
                      She runs a popular news <strong>blog</strong>.
                    </p>
                  </div>

                  <div className="bg-amber-50 rounded p-4">
                    <h4 className="font-bold text-amber-900 text-lg mb-2">
                      12. press
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">пресса</p>
                    <p className="text-sm italic">
                      The <strong>press</strong> conference starts at 3 PM.
                    </p>
                  </div>

                  <div className="bg-sky-50 rounded p-4">
                    <h4 className="font-bold text-sky-900 text-lg mb-2">
                      13. tabloid
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      таблоид (жёлтая пресса)
                    </p>
                    <p className="text-sm italic">
                      <strong>Tabloids</strong> focus on celebrity gossip.
                    </p>
                  </div>

                  <div className="bg-violet-50 rounded p-4">
                    <h4 className="font-bold text-violet-900 text-lg mb-2">
                      14. outlet / news outlet
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      новостное издание
                    </p>
                    <p className="text-sm italic">
                      Major news <strong>outlets</strong> covered the story.
                    </p>
                  </div>

                  <div className="bg-rose-50 rounded p-4">
                    <h4 className="font-bold text-rose-900 text-lg mb-2">
                      15. publication
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">издание</p>
                    <p className="text-sm italic">
                      The <strong>publication</strong> has millions of readers.
                    </p>
                  </div>
                </div>
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
        <Section title="👨‍💼 People in Media">
          <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-400 mb-6">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              👥 Профессии в медиа
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-purple-300">
                <div className="space-y-4">
                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      1. journalist
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">журналист</p>
                    <p className="text-sm italic">
                      The <strong>journalist</strong> interviewed the president.
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      2. reporter
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">репортёр</p>
                    <p className="text-sm italic">
                      A <strong>reporter</strong> is covering the event.
                    </p>
                  </div>

                  <div className="bg-red-50 rounded p-4">
                    <h4 className="font-bold text-red-900 text-lg mb-2">
                      3. correspondent
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">корреспондент</p>
                    <p className="text-sm italic">
                      Our foreign <strong>correspondent</strong> reports from
                      Paris.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      4. editor
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">редактор</p>
                    <p className="text-sm italic">
                      The <strong>editor</strong> approves all articles.
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded p-4">
                    <h4 className="font-bold text-yellow-900 text-lg mb-2">
                      5. news anchor / presenter
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      ведущий новостей
                    </p>
                    <p className="text-sm italic">
                      The <strong>news anchor</strong> reads the headlines.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      6. columnist
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">колумнист</p>
                    <p className="text-sm italic">
                      She's a political <strong>columnist</strong> for The
                      Times.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      7. commentator
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">комментатор</p>
                    <p className="text-sm italic">
                      Sports <strong>commentators</strong> analyze the game.
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      8. photographer / photojournalist
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      фотограф / фотожурналист
                    </p>
                    <p className="text-sm italic">
                      The <strong>photographer</strong> captured dramatic
                      images.
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded p-4">
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">
                      9. cameraman / camera operator
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">оператор</p>
                    <p className="text-sm italic">
                      The <strong>cameraman</strong> filmed the interview.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      10. producer
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">продюсер</p>
                    <p className="text-sm italic">
                      The <strong>producer</strong> oversees the news program.
                    </p>
                  </div>

                  <div className="bg-lime-50 rounded p-4">
                    <h4 className="font-bold text-lime-900 text-lg mb-2">
                      11. publisher
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">издатель</p>
                    <p className="text-sm italic">
                      The <strong>publisher</strong> owns several newspapers.
                    </p>
                  </div>

                  <div className="bg-amber-50 rounded p-4">
                    <h4 className="font-bold text-amber-900 text-lg mb-2">
                      12. source
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">источник</p>
                    <p className="text-sm italic">
                      The journalist protected his <strong>source</strong>.
                    </p>
                  </div>

                  <div className="bg-sky-50 rounded p-4">
                    <h4 className="font-bold text-sky-900 text-lg mb-2">
                      13. spokesperson
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">представитель</p>
                    <p className="text-sm italic">
                      The company <strong>spokesperson</strong> made a
                      statement.
                    </p>
                  </div>

                  <div className="bg-violet-50 rounded p-4">
                    <h4 className="font-bold text-violet-900 text-lg mb-2">
                      14. influencer
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">инфлюенсер</p>
                    <p className="text-sm italic">
                      Social media <strong>influencers</strong> have millions of
                      followers.
                    </p>
                  </div>

                  <div className="bg-rose-50 rounded p-4">
                    <h4 className="font-bold text-rose-900 text-lg mb-2">
                      15. content creator
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      создатель контента
                    </p>
                    <p className="text-sm italic">
                      <strong>Content creators</strong> produce videos for
                      YouTube.
                    </p>
                  </div>
                </div>
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
        <Section title="📝 News Production & Reporting">
          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-400 mb-6">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              🎬 Производство новостей и репортажи
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-green-300">
                <div className="space-y-4">
                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      1. report / reporting
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      сообщать / репортаж
                    </p>
                    <p className="text-sm italic">
                      Journalists <strong>report</strong> on current events.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      2. cover / coverage
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      освещать / освещение
                    </p>
                    <p className="text-sm italic">
                      The media <strong>covered</strong> the election
                      extensively.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      3. investigate / investigation
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      расследовать / расследование
                    </p>
                    <p className="text-sm italic">
                      Journalists are <strong>investigating</strong> corruption.
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      4. publish / publication
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      публиковать / публикация
                    </p>
                    <p className="text-sm italic">
                      The article will be <strong>published</strong> tomorrow.
                    </p>
                  </div>

                  <div className="bg-red-50 rounded p-4">
                    <h4 className="font-bold text-red-900 text-lg mb-2">
                      5. air / on air
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      выходить в эфир / в эфире
                    </p>
                    <p className="text-sm italic">
                      The interview will <strong>air</strong> tonight.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      6. interview
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">интервью</p>
                    <p className="text-sm italic">
                      The reporter <strong>interviewed</strong> the mayor.
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded p-4">
                    <h4 className="font-bold text-yellow-900 text-lg mb-2">
                      7. quote
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">цитировать</p>
                    <p className="text-sm italic">
                      The journalist <strong>quoted</strong> the president.
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      8. film / footage
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      снимать / кадры
                    </p>
                    <p className="text-sm italic">
                      Camera crews <strong>filmed</strong> the protest.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      9. edit / editing
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      редактировать / редактирование
                    </p>
                    <p className="text-sm italic">
                      Editors <strong>edit</strong> articles before publication.
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded p-4">
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">
                      10. fact-check
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      проверять факты
                    </p>
                    <p className="text-sm italic">
                      Journalists must <strong>fact-check</strong> their
                      stories.
                    </p>
                  </div>

                  <div className="bg-lime-50 rounded p-4">
                    <h4 className="font-bold text-lime-900 text-lg mb-2">
                      11. verify / verification
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      проверять / верификация
                    </p>
                    <p className="text-sm italic">
                      <strong>Verify</strong> information before publishing.
                    </p>
                  </div>

                  <div className="bg-amber-50 rounded p-4">
                    <h4 className="font-bold text-amber-900 text-lg mb-2">
                      12. break a story / scoop
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      первым сообщить новость / эксклюзив
                    </p>
                    <p className="text-sm italic">
                      The journalist <strong>broke the story</strong> of the
                      scandal.
                    </p>
                  </div>

                  <div className="bg-sky-50 rounded p-4">
                    <h4 className="font-bold text-sky-900 text-lg mb-2">
                      13. leak
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">утечка</p>
                    <p className="text-sm italic">
                      Documents were <strong>leaked</strong> to the press.
                    </p>
                  </div>

                  <div className="bg-violet-50 rounded p-4">
                    <h4 className="font-bold text-violet-900 text-lg mb-2">
                      14. deadline
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">крайний срок</p>
                    <p className="text-sm italic">
                      Journalists work under tight <strong>deadlines</strong>.
                    </p>
                  </div>

                  <div className="bg-rose-50 rounded p-4">
                    <h4 className="font-bold text-rose-900 text-lg mb-2">
                      15. retract / retraction
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      отозвать / опровержение
                    </p>
                    <p className="text-sm italic">
                      The newspaper <strong>retracted</strong> the false story.
                    </p>
                  </div>
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
        <Section title="📄 Types of News Content">
          <div className="bg-yellow-50 rounded-lg p-6 border-2 border-yellow-400 mb-6">
            <h3 className="text-2xl font-bold text-yellow-900 mb-4">
              📰 Типы новостного контента
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-yellow-300">
                <div className="space-y-4">
                  <div className="bg-yellow-50 rounded p-4">
                    <h4 className="font-bold text-yellow-900 text-lg mb-2">
                      1. headline
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">заголовок</p>
                    <p className="text-sm italic">
                      The <strong>headline</strong> reads "President Resigns".
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      2. article
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">статья</p>
                    <p className="text-sm italic">
                      I read an interesting <strong>article</strong> today.
                    </p>
                  </div>

                  <div className="bg-red-50 rounded p-4">
                    <h4 className="font-bold text-red-900 text-lg mb-2">
                      3. breaking news
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      срочные новости
                    </p>
                    <p className="text-sm italic">
                      <strong>Breaking news</strong>: A major earthquake has hit
                      Japan.
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      4. story
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      история / материал
                    </p>
                    <p className="text-sm italic">
                      The reporter is working on a big <strong>story</strong>.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      5. editorial
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      редакционная статья
                    </p>
                    <p className="text-sm italic">
                      The <strong>editorial</strong> criticizes government
                      policy.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      6. opinion piece / op-ed
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">колонка мнений</p>
                    <p className="text-sm italic">
                      She wrote an <strong>op-ed</strong> about climate change.
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      7. feature / feature article
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      очерк / развёрнутый материал
                    </p>
                    <p className="text-sm italic">
                      The magazine published a <strong>feature</strong> on AI.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      8. report
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">репортаж</p>
                    <p className="text-sm italic">
                      A special <strong>report</strong> on the economy.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      9. live coverage
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      прямой эфир / прямая трансляция
                    </p>
                    <p className="text-sm italic">
                      Watch <strong>live coverage</strong> of the event.
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded p-4">
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">
                      10. press release
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">пресс-релиз</p>
                    <p className="text-sm italic">
                      The company issued a <strong>press release</strong>.
                    </p>
                  </div>

                  <div className="bg-lime-50 rounded p-4">
                    <h4 className="font-bold text-lime-900 text-lg mb-2">
                      11. caption
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      подпись (к фото)
                    </p>
                    <p className="text-sm italic">
                      The photo <strong>caption</strong> explains the context.
                    </p>
                  </div>

                  <div className="bg-amber-50 rounded p-4">
                    <h4 className="font-bold text-amber-900 text-lg mb-2">
                      12. bulletin
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">бюллетень</p>
                    <p className="text-sm italic">
                      A news <strong>bulletin</strong> interrupts the program.
                    </p>
                  </div>

                  <div className="bg-sky-50 rounded p-4">
                    <h4 className="font-bold text-sky-900 text-lg mb-2">
                      13. update
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">обновление</p>
                    <p className="text-sm italic">
                      Stay tuned for <strong>updates</strong> on the situation.
                    </p>
                  </div>

                  <div className="bg-violet-50 rounded p-4">
                    <h4 className="font-bold text-violet-900 text-lg mb-2">
                      14. commentary
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">комментарий</p>
                    <p className="text-sm italic">
                      Political <strong>commentary</strong> follows the news.
                    </p>
                  </div>

                  <div className="bg-rose-50 rounded p-4">
                    <h4 className="font-bold text-rose-900 text-lg mb-2">
                      15. review
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      обзор / рецензия
                    </p>
                    <p className="text-sm italic">
                      She writes film <strong>reviews</strong> for the paper.
                    </p>
                  </div>
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
        <Section title="⚠️ Media Problems & Issues">
          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-400 mb-6">
            <h3 className="text-2xl font-bold text-red-900 mb-4">
              🚨 Проблемы и вопросы медиа
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-red-300">
                <div className="space-y-4">
                  <div className="bg-red-50 rounded p-4">
                    <h4 className="font-bold text-red-900 text-lg mb-2">
                      1. fake news
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      фейковые новости
                    </p>
                    <p className="text-sm italic">
                      <strong>Fake news</strong> spreads quickly on social
                      media.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      2. misinformation
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">дезинформация</p>
                    <p className="text-sm italic">
                      <strong>Misinformation</strong> can be dangerous.
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded p-4">
                    <h4 className="font-bold text-yellow-900 text-lg mb-2">
                      3. disinformation
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      дезинформация (намеренная)
                    </p>
                    <p className="text-sm italic">
                      <strong>Disinformation</strong> is spread deliberately.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      4. bias / biased
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      предвзятость / предвзятый
                    </p>
                    <p className="text-sm italic">
                      The report was <strong>biased</strong> toward one party.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      5. propaganda
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">пропаганда</p>
                    <p className="text-sm italic">
                      State media spreads <strong>propaganda</strong>.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      6. censorship
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">цензура</p>
                    <p className="text-sm italic">
                      <strong>Censorship</strong> restricts freedom of speech.
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      7. sensationalism
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">сенсационность</p>
                    <p className="text-sm italic">
                      Tabloids rely on <strong>sensationalism</strong>.
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      8. clickbait
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">кликбейт</p>
                    <p className="text-sm italic">
                      <strong>Clickbait</strong> headlines mislead readers.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      9. yellow journalism
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">жёлтая пресса</p>
                    <p className="text-sm italic">
                      <strong>Yellow journalism</strong> exaggerates stories.
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded p-4">
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">
                      10. spin
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      подача (в выгодном свете)
                    </p>
                    <p className="text-sm italic">
                      Politicians <strong>spin</strong> the news to their
                      advantage.
                    </p>
                  </div>

                  <div className="bg-lime-50 rounded p-4">
                    <h4 className="font-bold text-lime-900 text-lg mb-2">
                      11. manipulate / manipulation
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      манипулировать / манипуляция
                    </p>
                    <p className="text-sm italic">
                      The media can <strong>manipulate</strong> public opinion.
                    </p>
                  </div>

                  <div className="bg-amber-50 rounded p-4">
                    <h4 className="font-bold text-amber-900 text-lg mb-2">
                      12. echo chamber
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      эхо-камера (информационный пузырь)
                    </p>
                    <p className="text-sm italic">
                      Social media creates <strong>echo chambers</strong>.
                    </p>
                  </div>

                  <div className="bg-sky-50 rounded p-4">
                    <h4 className="font-bold text-sky-900 text-lg mb-2">
                      13. filter bubble
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">фильтр-пузырь</p>
                    <p className="text-sm italic">
                      Algorithms create <strong>filter bubbles</strong>.
                    </p>
                  </div>

                  <div className="bg-violet-50 rounded p-4">
                    <h4 className="font-bold text-violet-900 text-lg mb-2">
                      14. hoax
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">мистификация</p>
                    <p className="text-sm italic">
                      The story turned out to be a <strong>hoax</strong>.
                    </p>
                  </div>

                  <div className="bg-rose-50 rounded p-4">
                    <h4 className="font-bold text-rose-900 text-lg mb-2">
                      15. rumor / rumour
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">слух</p>
                    <p className="text-sm italic">
                      Don't believe every <strong>rumor</strong> you hear.
                    </p>
                  </div>
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
        <Section title="📱 Social Media & Digital">
          <div className="bg-cyan-50 rounded-lg p-6 border-2 border-cyan-400 mb-6">
            <h3 className="text-2xl font-bold text-cyan-900 mb-4">
              💻 Социальные сети и цифровые медиа
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-cyan-300">
                <div className="space-y-4">
                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      1. post / share
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      публиковать / делиться
                    </p>
                    <p className="text-sm italic">
                      She <strong>posted</strong> the news on Twitter.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      2. viral / go viral
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      вирусный / стать вирусным
                    </p>
                    <p className="text-sm italic">
                      The video <strong>went viral</strong> overnight.
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded p-4">
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">
                      3. trending / trend
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      в тренде / тренд
                    </p>
                    <p className="text-sm italic">
                      This story is <strong>trending</strong> on social media.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      4. hashtag
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">хэштег</p>
                    <p className="text-sm italic">
                      Use the <strong>hashtag</strong> #BreakingNews.
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      5. algorithm
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">алгоритм</p>
                    <p className="text-sm italic">
                      The <strong>algorithm</strong> decides what you see.
                    </p>
                  </div>

                  <div className="bg-red-50 rounded p-4">
                    <h4 className="font-bold text-red-900 text-lg mb-2">
                      6. engagement
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">вовлечённость</p>
                    <p className="text-sm italic">
                      High <strong>engagement</strong> means more visibility.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      7. follower / subscriber
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      подписчик / подписчик
                    </p>
                    <p className="text-sm italic">
                      She has millions of <strong>followers</strong>.
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded p-4">
                    <h4 className="font-bold text-yellow-900 text-lg mb-2">
                      8. like / comment / react
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      лайк / комментарий / реакция
                    </p>
                    <p className="text-sm italic">
                      Users <strong>liked</strong> and{" "}
                      <strong>commented</strong> on the post.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      9. retweet / repost
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      ретвит / репост
                    </p>
                    <p className="text-sm italic">
                      Please <strong>retweet</strong> this important message.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      10. stream / streaming
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      стрим / стриминг
                    </p>
                    <p className="text-sm italic">
                      Watch the event <strong>streaming</strong> live.
                    </p>
                  </div>

                  <div className="bg-lime-50 rounded p-4">
                    <h4 className="font-bold text-lime-900 text-lg mb-2">
                      11. platform
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">платформа</p>
                    <p className="text-sm italic">
                      Twitter is a major news <strong>platform</strong>.
                    </p>
                  </div>

                  <div className="bg-amber-50 rounded p-4">
                    <h4 className="font-bold text-amber-900 text-lg mb-2">
                      12. content moderation
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      модерация контента
                    </p>
                    <p className="text-sm italic">
                      <strong>Content moderation</strong> removes harmful posts.
                    </p>
                  </div>

                  <div className="bg-sky-50 rounded p-4">
                    <h4 className="font-bold text-sky-900 text-lg mb-2">
                      13. citizen journalism
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      гражданская журналистика
                    </p>
                    <p className="text-sm italic">
                      <strong>Citizen journalism</strong> captures real-time
                      events.
                    </p>
                  </div>

                  <div className="bg-violet-50 rounded p-4">
                    <h4 className="font-bold text-violet-900 text-lg mb-2">
                      14. meme
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">мем</p>
                    <p className="text-sm italic">
                      Political <strong>memes</strong> spread quickly.
                    </p>
                  </div>

                  <div className="bg-rose-50 rounded p-4">
                    <h4 className="font-bold text-rose-900 text-lg mb-2">
                      15. user-generated content
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      пользовательский контент
                    </p>
                    <p className="text-sm italic">
                      <strong>User-generated content</strong> drives engagement.
                    </p>
                  </div>
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
        <Section title="⚖️ Media Ethics & Standards">
          <div className="bg-indigo-50 rounded-lg p-6 border-2 border-indigo-400 mb-6">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">
              📜 Медиа-этика и стандарты
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-indigo-300">
                <div className="space-y-4">
                  <div className="bg-indigo-50 rounded p-4">
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">
                      1. objectivity / objective
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      объективность / объективный
                    </p>
                    <p className="text-sm italic">
                      Journalists must maintain <strong>objectivity</strong>.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      2. impartial / impartiality
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      беспристрастный / беспристрастность
                    </p>
                    <p className="text-sm italic">
                      News should be <strong>impartial</strong>.
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      3. accuracy / accurate
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      точность / точный
                    </p>
                    <p className="text-sm italic">
                      <strong>Accuracy</strong> is crucial in journalism.
                    </p>
                  </div>

                  <div className="bg-red-50 rounded p-4">
                    <h4 className="font-bold text-red-900 text-lg mb-2">
                      4. credibility / credible
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      достоверность / достоверный
                    </p>
                    <p className="text-sm italic">
                      The source is highly <strong>credible</strong>.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      5. integrity
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">честность</p>
                    <p className="text-sm italic">
                      Journalists must act with <strong>integrity</strong>.
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded p-4">
                    <h4 className="font-bold text-yellow-900 text-lg mb-2">
                      6. transparency / transparent
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      прозрачность / прозрачный
                    </p>
                    <p className="text-sm italic">
                      Media outlets should be <strong>transparent</strong> about
                      sources.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      7. accountability / accountable
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      ответственность / ответственный
                    </p>
                    <p className="text-sm italic">
                      Journalists are <strong>accountable</strong> for their
                      reporting.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      8. ethics / ethical
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      этика / этичный
                    </p>
                    <p className="text-sm italic">
                      <strong>Ethical</strong> journalism respects privacy.
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      9. freedom of speech / press freedom
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      свобода слова / свобода прессы
                    </p>
                    <p className="text-sm italic">
                      <strong>Press freedom</strong> is a fundamental right.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      10. investigative journalism
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      журналистское расследование
                    </p>
                    <p className="text-sm italic">
                      <strong>Investigative journalism</strong> uncovers
                      corruption.
                    </p>
                  </div>

                  <div className="bg-lime-50 rounded p-4">
                    <h4 className="font-bold text-lime-900 text-lg mb-2">
                      11. watchdog
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      сторожевой пёс (контролирующий орган)
                    </p>
                    <p className="text-sm italic">
                      The press acts as a <strong>watchdog</strong>.
                    </p>
                  </div>

                  <div className="bg-amber-50 rounded p-4">
                    <h4 className="font-bold text-amber-900 text-lg mb-2">
                      12. public interest
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      общественный интерес
                    </p>
                    <p className="text-sm italic">
                      Report stories in the <strong>public interest</strong>.
                    </p>
                  </div>

                  <div className="bg-sky-50 rounded p-4">
                    <h4 className="font-bold text-sky-900 text-lg mb-2">
                      13. whistleblower
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      разоблачитель / информатор
                    </p>
                    <p className="text-sm italic">
                      The <strong>whistleblower</strong> exposed the scandal.
                    </p>
                  </div>

                  <div className="bg-violet-50 rounded p-4">
                    <h4 className="font-bold text-violet-900 text-lg mb-2">
                      14. anonymous source
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      анонимный источник
                    </p>
                    <p className="text-sm italic">
                      Journalists protect <strong>anonymous sources</strong>.
                    </p>
                  </div>

                  <div className="bg-rose-50 rounded p-4">
                    <h4 className="font-bold text-rose-900 text-lg mb-2">
                      15. defamation / libel / slander
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      клевета / клевета в печати / устная клевета
                    </p>
                    <p className="text-sm italic">
                      False claims can be <strong>defamation</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 8) {
    return (
      <>
        <Section title="📖 Reading: The Rise of Digital Journalism">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 border-2 border-blue-300 mb-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              📚 Текст: The Rise of Digital Journalism
            </h3>

            <div className="bg-white rounded-lg p-6 border-2 border-blue-200 mb-4">
              <p className="text-base leading-relaxed mb-4">
                The <strong>media landscape</strong> has transformed
                dramatically over the past two decades. Traditional{" "}
                <strong>newspapers</strong> and <strong>magazines</strong> have
                declined as <strong>digital media</strong> and{" "}
                <strong>social media</strong> platforms have become the primary
                sources of news for millions. <strong>Journalists</strong> now{" "}
                <strong>publish</strong> stories instantly online, and breaking
                news <strong>goes viral</strong> within minutes.
              </p>

              <p className="text-base leading-relaxed mb-4">
                This shift has brought both opportunities and challenges. On one
                hand, <strong>citizen journalism</strong> allows ordinary people
                to <strong>report</strong> events as they happen, democratizing
                news production. <strong>Bloggers</strong> and{" "}
                <strong>influencers</strong> reach vast audiences without
                traditional media gatekeepers. On the other hand,{" "}
                <strong>fake news</strong>, <strong>misinformation</strong>, and{" "}
                <strong>clickbait</strong> have proliferated, making it harder
                for readers to distinguish credible sources from unreliable
                ones.
              </p>

              <p className="text-base leading-relaxed mb-4">
                <strong>Algorithms</strong> control what users see, creating{" "}
                <strong>filter bubbles</strong> and{" "}
                <strong>echo chambers</strong> where people only encounter views
                they already agree with. <strong>Bias</strong> and{" "}
                <strong>sensationalism</strong> drive{" "}
                <strong>engagement</strong>, while serious{" "}
                <strong>investigative journalism</strong> struggles for funding.
                Many <strong>news outlets</strong> have had to adapt by offering
                online subscriptions, producing <strong>podcasts</strong>, and
                creating multimedia content.
              </p>

              <p className="text-base leading-relaxed">
                Despite these challenges, quality journalism remains essential.{" "}
                <strong>Fact-checking</strong> organizations work to{" "}
                <strong>verify</strong> information, <strong>editors</strong>{" "}
                maintain standards of <strong>accuracy</strong> and{" "}
                <strong>objectivity</strong>, and <strong>reporters</strong>{" "}
                continue to <strong>investigate</strong> corruption and hold
                power <strong>accountable</strong>. As the media continues to
                evolve, the core principles of ethical journalism —{" "}
                <strong>integrity</strong>, <strong>transparency</strong>, and
                serving the <strong>public interest</strong> — remain more
                important than ever.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300">
              <h4 className="text-xl font-bold text-blue-900 mb-3">
                💡 Comprehension Questions
              </h4>

              <div className="space-y-3">
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    1. How has the media landscape changed in the past 20 years?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → Traditional newspapers/magazines declined; digital and
                    social media became primary news sources.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    2. What is citizen journalism?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → Ordinary people reporting events as they happen,
                    democratizing news production.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    3. What problems have emerged with digital media?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → Fake news, misinformation, clickbait, filter bubbles, and
                    echo chambers.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    4. How do algorithms affect what people see?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → They create filter bubbles and echo chambers where people
                    only see views they agree with.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    5. What are the core principles of ethical journalism?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → Integrity, transparency, and serving the public interest.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 9) {
    return (
      <>
        <Section title="✍️ Practice Exercises">
          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-400 mb-6">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              📝 Упражнение 1: Fill in the Blanks
            </h3>

            <p className="text-sm text-gray-700 mb-4">
              Choose the correct word from the list:{" "}
              <strong>
                headline, journalist, biased, fake news, viral, trending,
                investigation, publish, broadcast, credible
              </strong>
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-green-300">
                <CheckableExercise
                  items={[
                    {
                      left: "1. The",
                      answers: ["journalist"],
                      right: "reported on the scandal.",
                      wide: true,
                    },
                    {
                      left: "2. The",
                      answers: ["headline"],
                      right: "read 'President Resigns'.",
                      wide: true,
                    },
                    {
                      left: "3. Social media spreads",
                      answers: ["fake news"],
                      right: "quickly.",
                      wide: true,
                    },
                    {
                      left: "4. The video went",
                      answers: ["viral"],
                      right: "overnight.",
                      wide: true,
                    },
                    {
                      left: "5. The report was",
                      answers: ["biased"],
                      right: "toward one party.",
                      wide: true,
                    },
                    {
                      left: "6. This topic is",
                      answers: ["trending"],
                      right: "on Twitter.",
                      wide: true,
                    },
                    {
                      left: "7. The newspaper will",
                      answers: ["publish"],
                      right: "the article tomorrow.",
                      wide: true,
                    },
                    {
                      left: "8. An",
                      answers: ["investigation"],
                      right: "uncovered corruption.",
                      wide: true,
                    },
                    {
                      left: "9. The interview will",
                      answers: ["broadcast"],
                      right: "tonight.",
                      wide: true,
                    },
                    {
                      left: "10. The source is",
                      answers: ["credible"],
                      right: "and trustworthy.",
                      wide: true,
                    },
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-400 mb-6">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              📝 Упражнение 2: Translation (Russian → English)
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-purple-300">
                <CheckableExercise
                  items={[
                    {
                      left: "1. Журналисты расследуют коррупцию:",
                      answers: [
                        "Journalists are investigating corruption",
                        "Journalists investigate corruption",
                      ],
                      wide: true,
                    },
                    {
                      left: "2. Медиа освещает выборы:",
                      answers: [
                        "The media is covering the election",
                        "The media are covering the election",
                        "Media is covering the election",
                      ],
                      wide: true,
                    },
                    {
                      left: "3. Эта новость стала вирусной:",
                      answers: ["This news went viral", "The news went viral"],
                      wide: true,
                    },
                    {
                      left: "4. Они проверяют факты:",
                      answers: ["They are fact-checking", "They fact-check"],
                      wide: true,
                    },
                    {
                      left: "5. Пресса должна быть объективной:",
                      answers: [
                        "The press should be objective",
                        "The press must be objective",
                      ],
                      wide: true,
                    },
                    {
                      left: "6. Репортёр взял интервью у мэра:",
                      answers: [
                        "The reporter interviewed the mayor",
                        "A reporter interviewed the mayor",
                      ],
                      wide: true,
                    },
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="bg-orange-50 rounded-lg p-6 border-2 border-orange-400 mb-6">
            <h3 className="text-2xl font-bold text-orange-900 mb-4">
              📝 Упражнение 3: Match Media Terms
            </h3>

            <div className="space-y-3">
              <div className="bg-white rounded p-4">
                <p className="font-bold text-sm mb-2">1. Headline</p>
                <p className="text-sm text-gray-700 italic">
                  → The title of a news story
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-sm mb-2">2. Editorial</p>
                <p className="text-sm text-gray-700 italic">
                  → An article expressing the newspaper's opinion
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-sm mb-2">3. Breaking News</p>
                <p className="text-sm text-gray-700 italic">
                  → Important news happening right now
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-sm mb-2">4. Scoop</p>
                <p className="text-sm text-gray-700 italic">
                  → An exclusive story published first
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-sm mb-2">5. Clickbait</p>
                <p className="text-sm text-gray-700 italic">
                  → Sensational headlines designed to attract clicks
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-sm mb-2">6. Echo Chamber</p>
                <p className="text-sm text-gray-700 italic">
                  → An environment where you only hear similar views
                </p>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 10) {
    return (
      <>
        <Section title="📚 Complete Vocabulary List — 150 Words">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 border-2 border-blue-300 mb-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              🎓 Полный список всех изученных слов
            </h3>

            <p className="text-sm text-gray-700 mb-4">
              Все 150 слов по теме Media & News, которые вы освоили!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* TYPES OF MEDIA */}
              <div className="bg-white rounded-lg p-4 border-2 border-cyan-300">
                <h4 className="font-bold text-lg text-cyan-900 mb-2">
                  📱 Types of Media (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• media / mass media</li>
                  <li>• news</li>
                  <li>• newspaper</li>
                  <li>• magazine</li>
                  <li>• television / TV</li>
                  <li>• radio</li>
                  <li>• broadcast / broadcasting</li>
                  <li>• online media / digital media</li>
                  <li>• social media</li>
                  <li>• podcast</li>
                  <li>• blog / blogger</li>
                  <li>• press</li>
                  <li>• tabloid</li>
                  <li>• outlet / news outlet</li>
                  <li>• publication</li>
                </ul>
              </div>

              {/* PEOPLE */}
              <div className="bg-white rounded-lg p-4 border-2 border-purple-300">
                <h4 className="font-bold text-lg text-purple-900 mb-2">
                  👥 People in Media (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• journalist</li>
                  <li>• reporter</li>
                  <li>• correspondent</li>
                  <li>• editor</li>
                  <li>• news anchor / presenter</li>
                  <li>• columnist</li>
                  <li>• commentator</li>
                  <li>• photographer / photojournalist</li>
                  <li>• cameraman / camera operator</li>
                  <li>• producer</li>
                  <li>• publisher</li>
                  <li>• source</li>
                  <li>• spokesperson</li>
                  <li>• influencer</li>
                  <li>• content creator</li>
                </ul>
              </div>

              {/* NEWS PRODUCTION */}
              <div className="bg-white rounded-lg p-4 border-2 border-green-300">
                <h4 className="font-bold text-lg text-green-900 mb-2">
                  📝 News Production (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• report / reporting</li>
                  <li>• cover / coverage</li>
                  <li>• investigate / investigation</li>
                  <li>• publish / publication</li>
                  <li>• air / on air</li>
                  <li>• interview</li>
                  <li>• quote</li>
                  <li>• film / footage</li>
                  <li>• edit / editing</li>
                  <li>• fact-check</li>
                  <li>• verify / verification</li>
                  <li>• break a story / scoop</li>
                  <li>• leak</li>
                  <li>• deadline</li>
                  <li>• retract / retraction</li>
                </ul>
              </div>

              {/* CONTENT TYPES */}
              <div className="bg-white rounded-lg p-4 border-2 border-yellow-300">
                <h4 className="font-bold text-lg text-yellow-900 mb-2">
                  📄 Content Types (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• headline</li>
                  <li>• article</li>
                  <li>• breaking news</li>
                  <li>• story</li>
                  <li>• editorial</li>
                  <li>• opinion piece / op-ed</li>
                  <li>• feature / feature article</li>
                  <li>• report</li>
                  <li>• live coverage</li>
                  <li>• press release</li>
                  <li>• caption</li>
                  <li>• bulletin</li>
                  <li>• update</li>
                  <li>• commentary</li>
                  <li>• review</li>
                </ul>
              </div>

              {/* MEDIA PROBLEMS */}
              <div className="bg-white rounded-lg p-4 border-2 border-red-300">
                <h4 className="font-bold text-lg text-red-900 mb-2">
                  ⚠️ Media Problems (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• fake news</li>
                  <li>• misinformation</li>
                  <li>• disinformation</li>
                  <li>• bias / biased</li>
                  <li>• propaganda</li>
                  <li>• censorship</li>
                  <li>• sensationalism</li>
                  <li>• clickbait</li>
                  <li>• yellow journalism</li>
                  <li>• spin</li>
                  <li>• manipulate / manipulation</li>
                  <li>• echo chamber</li>
                  <li>• filter bubble</li>
                  <li>• hoax</li>
                  <li>• rumor / rumour</li>
                </ul>
              </div>

              {/* SOCIAL MEDIA */}
              <div className="bg-white rounded-lg p-4 border-2 border-cyan-300">
                <h4 className="font-bold text-lg text-cyan-900 mb-2">
                  📱 Social Media (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• post / share</li>
                  <li>• viral / go viral</li>
                  <li>• trending / trend</li>
                  <li>• hashtag</li>
                  <li>• algorithm</li>
                  <li>• engagement</li>
                  <li>• follower / subscriber</li>
                  <li>• like / comment / react</li>
                  <li>• retweet / repost</li>
                  <li>• stream / streaming</li>
                  <li>• platform</li>
                  <li>• content moderation</li>
                  <li>• citizen journalism</li>
                  <li>• meme</li>
                  <li>• user-generated content</li>
                </ul>
              </div>

              {/* ETHICS */}
              <div className="bg-white rounded-lg p-4 border-2 border-indigo-300">
                <h4 className="font-bold text-lg text-indigo-900 mb-2">
                  ⚖️ Ethics & Standards (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• objectivity / objective</li>
                  <li>• impartial / impartiality</li>
                  <li>• accuracy / accurate</li>
                  <li>• credibility / credible</li>
                  <li>• integrity</li>
                  <li>• transparency / transparent</li>
                  <li>• accountability / accountable</li>
                  <li>• ethics / ethical</li>
                  <li>• freedom of speech / press freedom</li>
                  <li>• investigative journalism</li>
                  <li>• watchdog</li>
                  <li>• public interest</li>
                  <li>• whistleblower</li>
                  <li>• anonymous source</li>
                  <li>• defamation / libel / slander</li>
                </ul>
              </div>

              {/* ADDITIONAL */}
              <div className="bg-white rounded-lg p-4 border-2 border-pink-300">
                <h4 className="font-bold text-lg text-pink-900 mb-2">
                  ➕ Additional (45)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• circulation</li>
                  <li>• readership / viewership / audience</li>
                  <li>• ratings</li>
                  <li>• subscribe / subscription</li>
                  <li>• paywall</li>
                  <li>• ad revenue / advertising</li>
                  <li>• sponsor / sponsorship</li>
                  <li>• newsroom</li>
                  <li>• wire service / news agency</li>
                  <li>• press conference</li>
                  <li>• press kit</li>
                  <li>• embargo</li>
                  <li>• off the record / on the record</li>
                  <li>• exclusive</li>
                  <li>• front page</li>
                  <li>• above the fold</li>
                  <li>• byline</li>
                  <li>• dateline</li>
                  <li>• lead / lede</li>
                  <li>• angle</li>
                  <li>• narrative</li>
                  <li>• perspective</li>
                  <li>• frame / framing</li>
                  <li>• agenda-setting</li>
                  <li>• gatekeeping</li>
                  <li>• newsworthiness</li>
                  <li>• timeliness</li>
                  <li>• proximity</li>
                  <li>• prominence</li>
                  <li>• human interest</li>
                  <li>• soundbite</li>
                  <li>• talking head</li>
                  <li>• pundit</li>
                  <li>• panel discussion</li>
                  <li>• debate</li>
                  <li>• round-up</li>
                  <li>• recap</li>
                  <li>• archive</li>
                  <li>• corrections</li>
                  <li>• apology</li>
                  <li>• media literacy</li>
                  <li>• critical thinking</li>
                  <li>• cross-check</li>
                  <li>• primary source</li>
                  <li>• secondary source</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-6 mt-6 border-2 border-blue-300">
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                🎯 Итого изучено:
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white rounded p-3">
                  <p className="text-3xl font-bold text-blue-900">150</p>
                  <p className="text-sm text-gray-700">Words</p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-3xl font-bold text-purple-900">1</p>
                  <p className="text-sm text-gray-700">Reading Text</p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-3xl font-bold text-green-900">3</p>
                  <p className="text-sm text-gray-700">Practice Exercises</p>
                </div>
              </div>

              <div className="mt-4 bg-white rounded-lg p-4">
                <p className="text-sm text-gray-800 text-center">
                  📰 <strong>Congratulations!</strong> You've mastered 150
                  comprehensive Media & News vocabulary words covering all
                  aspects of journalism, from traditional media to digital
                  platforms, from news production to media ethics. You can now
                  understand news articles, discuss media issues, and think
                  critically about information sources in English!
                </p>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  return <div>Step {step} not found</div>;
}
