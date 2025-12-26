"use client";
import { Section } from "@/components/ui/Section";
import CheckableExercise from "../CheckableExercise";
import type { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function RelationshipsPhrasalVerbs({ step }: Props) {
  if (step === 1) {
    return (
      <>
        <Section title="📊 Relationships: Phrasal Verbs">
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-400">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">
              Relationships: Phrasal Verbs — Отношения
            </h2>
            <p className="text-sm text-zinc-700 mb-4">
              **Phrasal verbs** — это глаголы с предлогами или наречиями,
              которые меняют смысл глагола. В теме отношений их **очень много**
              и они **крайне важны** для естественной речи!
            </p>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-100 rounded-lg p-5 border-2 border-cyan-400 mb-4">
              <h3 className="font-bold text-cyan-900 mb-3 text-lg text-center">
                🔑 Основные категории
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-green-900 text-center">
                    Starting (Начало)
                  </p>
                  <p className="text-xs text-zinc-600">
                    ask out, go out with, chat up, fall for
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-blue-900 text-center">
                    Maintaining (Поддержание)
                  </p>
                  <p className="text-xs text-zinc-600">
                    get on with, look after, make up, put up with
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-red-900 text-center">
                    Ending (Окончание)
                  </p>
                  <p className="text-xs text-zinc-600">
                    fall out, break up, split up, grow apart
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-lg p-5 border-2 border-red-400 mb-4">
              <h3 className="font-bold text-red-900 mb-3 text-lg text-center">
                ⚠️ Почему это важно?
              </h3>
              <div className="space-y-2 text-sm text-zinc-700">
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-blue-900 mb-1">
                    1. Естественная речь
                  </p>
                  <p className="text-xs italic">
                    We <strong>get on well</strong> with each other.
                  </p>
                  <p className="text-xs text-zinc-600">
                    (Не "We have good relations")
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-green-900 mb-1">
                    2. Разговорный английский
                  </p>
                  <p className="text-xs italic">
                    They <strong>broke up</strong> last month.
                  </p>
                  <p className="text-xs text-zinc-600">
                    (Не "They ended their relationship")
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-purple-900 mb-1">
                    3. Экзамены и Speaking
                  </p>
                  <p className="text-xs italic">
                    I <strong>fell out</strong> with my best friend.
                  </p>
                  <p className="text-xs text-zinc-600">(Естественно звучит!)</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-5 border-2 border-amber-400">
              <h4 className="font-bold text-amber-900 mb-3 text-center">
                💡 В этой теме мы изучим:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-zinc-700">
                <div>
                  <p>✅ 30+ phrasal verbs про отношения</p>
                  <p>✅ Starting, maintaining, ending relationships</p>
                  <p>✅ Тексты про романтические и дружеские отношения</p>
                </div>
                <div>
                  <p>✅ Упражнения на понимание текста</p>
                  <p>✅ Упражнения с выбором правильного phrasal verb</p>
                  <p>✅ Real-life ситуации</p>
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
        <Section title="💚 Starting Relationships — Начало отношений">
          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300 mb-4">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              Phrasal verbs для начала отношений
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Эти phrasal verbs описывают **знакомство** и **начало**
              романтических или дружеских отношений!
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-green-400">
                <div className="space-y-4">
                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      1. ask (somebody) out
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      пригласить на свидание
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm italic">
                        He finally <strong>asked her out</strong> for dinner.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Он наконец пригласил её на ужин.
                      </p>
                      <p className="text-sm italic mt-2">
                        I want to <strong>ask him out</strong>, but I'm too shy.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Я хочу пригласить его на свидание, но слишком стесняюсь.
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      2. go out (with somebody)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      встречаться с кем-то, быть в отношениях
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm italic">
                        They've been <strong>going out</strong> for two years.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Они встречаются уже два года.
                      </p>
                      <p className="text-sm italic mt-2">
                        She's <strong>going out with</strong> someone from work.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Она встречается с кем-то с работы.
                      </p>
                    </div>
                  </div>

                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      3. chat (somebody) up
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      флиртовать, пытаться познакомиться (неформально)
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm italic">
                        He tried to <strong>chat her up</strong> at the party.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Он пытался с ней заигрывать на вечеринке.
                      </p>
                      <p className="text-sm italic mt-2">
                        Some guy was <strong>chatting me up</strong> at the bar.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Какой-то парень пытался со мной познакомиться в баре.
                      </p>
                    </div>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      4. fall for (somebody)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      влюбиться в кого-то
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm italic">
                        I think I'm <strong>falling for</strong> her.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Кажется, я в неё влюбляюсь.
                      </p>
                      <p className="text-sm italic mt-2">
                        He <strong>fell for</strong> her the moment they met.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Он влюбился в неё с момента встречи.
                      </p>
                    </div>
                  </div>

                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      5. hit it off (with somebody)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      сразу найти общий язык
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm italic">
                        We <strong>hit it off</strong> immediately.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Мы сразу нашли общий язык.
                      </p>
                      <p className="text-sm italic mt-2">
                        They <strong>hit it off</strong> on their first date.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Они поладили на первом свидании.
                      </p>
                    </div>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      6. settle down (with somebody)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      остепениться, обзавестись семьёй
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm italic">
                        He wants to <strong>settle down</strong> and start a
                        family.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Он хочет остепениться и завести семью.
                      </p>
                      <p className="text-sm italic mt-2">
                        They <strong>settled down</strong> together last year.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Они обзавелись семьёй в прошлом году.
                      </p>
                    </div>
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
        <Section title="💙 Maintaining Relationships — Поддержание отношений">
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300 mb-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Phrasal verbs для поддержания отношений
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Эти phrasal verbs описывают **взаимодействие** в уже существующих
              отношениях!
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-blue-400">
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      1. get on (well) with (somebody)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      ладить с кем-то, иметь хорошие отношения
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm italic">
                        I <strong>get on really well with</strong> my
                        colleagues.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Я отлично лажу со своими коллегами.
                      </p>
                      <p className="text-sm italic mt-2">
                        Do you <strong>get on with</strong> your neighbours?
                      </p>
                      <p className="text-xs text-zinc-600">
                        Ты ладишь со своими соседями?
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      2. look after (somebody)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      заботиться о ком-то
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm italic">
                        She <strong>looks after</strong> her elderly parents.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Она заботится о своих пожилых родителях.
                      </p>
                      <p className="text-sm italic mt-2">
                        He always <strong>looks after</strong> me when I'm sick.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Он всегда заботится обо мне, когда я болею.
                      </p>
                    </div>
                  </div>

                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      3. make up (with somebody)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      помириться после ссоры
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm italic">
                        They had a fight but <strong>made up</strong> the next
                        day.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Они поссорились, но помирились на следующий день.
                      </p>
                      <p className="text-sm italic mt-2">
                        Have you <strong>made up with</strong> your sister yet?
                      </p>
                      <p className="text-xs text-zinc-600">
                        Ты уже помирилась со своей сестрой?
                      </p>
                    </div>
                  </div>

                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      4. put up with (somebody/something)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      терпеть, мириться с чем-то
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm italic">
                        I can't <strong>put up with</strong> his bad behaviour
                        anymore.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Я больше не могу терпеть его плохое поведение.
                      </p>
                      <p className="text-sm italic mt-2">
                        She <strong>puts up with</strong> a lot from him.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Она много от него терпит.
                      </p>
                    </div>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      5. count on (somebody)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      рассчитывать на кого-то
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm italic">
                        You can always <strong>count on</strong> me.
                      </p>
                      <p className="text-xs text-zinc-600">
                        На меня всегда можно рассчитывать.
                      </p>
                      <p className="text-sm italic mt-2">
                        I know I can <strong>count on</strong> my best friend.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Я знаю, что могу рассчитывать на своего лучшего друга.
                      </p>
                    </div>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      6. stand by (somebody)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      поддерживать кого-то в трудную минуту
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm italic">
                        She <strong>stood by</strong> him through difficult
                        times.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Она поддерживала его в трудные времена.
                      </p>
                      <p className="text-sm italic mt-2">
                        True friends <strong>stand by</strong> you no matter
                        what.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Настоящие друзья поддерживают тебя несмотря ни на что.
                      </p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 rounded p-4">
                    <h4 className="font-bold text-yellow-900 text-lg mb-2">
                      7. stick up for (somebody)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      заступиться за кого-то
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm italic">
                        He always <strong>sticks up for</strong> his little
                        brother.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Он всегда заступается за своего младшего брата.
                      </p>
                    </div>
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
        <Section title="❤️ Ending Relationships — Окончание отношений">
          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300 mb-4">
            <h3 className="text-2xl font-bold text-red-900 mb-4">
              Phrasal verbs для окончания отношений
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Эти phrasal verbs описывают **конфликты**, **расставания** и
              **окончание** отношений!
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-red-400">
                <div className="space-y-4">
                  <div className="bg-red-50 rounded p-4">
                    <h4 className="font-bold text-red-900 text-lg mb-2">
                      1. fall out (with somebody)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      поссориться, разругаться
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm italic">
                        We <strong>fell out</strong> over money.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Мы поссорились из-за денег.
                      </p>
                      <p className="text-sm italic mt-2">
                        They <strong>fell out</strong> and haven't spoken since.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Они разругались и с тех пор не разговаривают.
                      </p>
                    </div>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      2. break up (with somebody)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      расстаться (романтические отношения)
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm italic">
                        They <strong>broke up</strong> last month.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Они расстались в прошлом месяце.
                      </p>
                      <p className="text-sm italic mt-2">
                        She <strong>broke up with</strong> her boyfriend.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Она расстала со своим парнем.
                      </p>
                    </div>
                  </div>

                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      3. split up (with somebody)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      разойтись, расстаться
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm italic">
                        They <strong>split up</strong> after five years
                        together.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Они разошлись после пяти лет вместе.
                      </p>
                      <p className="text-sm italic mt-2">
                        The band <strong>split up</strong> in 2010.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Группа распалась в 2010 году.
                      </p>
                    </div>
                  </div>

                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      4. grow apart (from somebody)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      отдалиться друг от друга (со временем)
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm italic">
                        We just <strong>grew apart</strong> over the years.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Мы просто отдалились друг от друга со временем.
                      </p>
                      <p className="text-sm italic mt-2">
                        They <strong>grew apart</strong> after university.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Они отдалились друг от друга после университета.
                      </p>
                    </div>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      5. drift apart (from somebody)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      постепенно отдалиться (менее активно)
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm italic">
                        We've <strong>drifted apart</strong> since school.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Мы постепенно отдалились со школы.
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      6. let (somebody) down
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      подвести кого-то
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm italic">
                        I trusted him, but he <strong>let me down</strong>.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Я доверял ему, но он меня подвёл.
                      </p>
                      <p className="text-sm italic mt-2">
                        Don't <strong>let me down</strong> this time!
                      </p>
                      <p className="text-xs text-zinc-600">
                        Не подведи меня на этот раз!
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      7. walk out on (somebody)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      бросить кого-то (внезапно уйти)
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm italic">
                        He <strong>walked out on</strong> his family.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Он бросил свою семью.
                      </p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 rounded p-4">
                    <h4 className="font-bold text-yellow-900 text-lg mb-2">
                      8. cheat on (somebody)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      изменять кому-то
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm italic">
                        I found out he was <strong>cheating on</strong> me.
                      </p>
                      <p className="text-xs text-zinc-600">
                        Я узнала, что он мне изменял.
                      </p>
                    </div>
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
        <Section title="📖 Reading: A Love Story">
          <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 rounded-lg p-6 border-2 border-pink-400 mb-4">
            <h3 className="text-2xl font-bold text-pink-900 mb-4 text-center">
              Текст для чтения — История любви
            </h3>

            <div className="bg-white rounded-lg p-5 border-2 border-pink-300">
              <h4 className="text-xl font-bold text-pink-900 mb-3">
                "From First Date to Breakup"
              </h4>
              <div className="text-sm text-zinc-700 leading-relaxed space-y-3">
                <p>
                  Emma and Tom <strong>hit it off</strong> immediately when they
                  met at a mutual friend's party. Tom had wanted to{" "}
                  <strong>ask her out</strong> for weeks, but he was too
                  nervous. Finally, at the party, he gathered his courage and
                  invited her for coffee. They started{" "}
                  <strong>going out</strong> shortly after that first date.
                </p>
                <p>
                  For the first year, everything was perfect. They{" "}
                  <strong>got on really well</strong> and rarely argued. Tom was
                  very caring and always <strong>looked after</strong> Emma when
                  she was stressed. Emma appreciated how she could always{" "}
                  <strong>count on</strong> him — he was incredibly reliable and
                  supportive. When Emma had problems at work, Tom would always{" "}
                  <strong>stand by</strong> her and offer helpful advice.
                </p>
                <p>
                  However, things started to change in their second year
                  together. They began to <strong>fall out</strong> over small
                  things — money, where to live, how to spend weekends. Emma
                  felt like Tom had changed and wasn't the same person she had{" "}
                  <strong>fallen for</strong>. They would argue and then{" "}
                  <strong>make up</strong>, but the cycle kept repeating.
                </p>
                <p>
                  Emma tried to <strong>put up with</strong> the constant
                  arguments, but she was exhausted. They had{" "}
                  <strong>grown apart</strong> and no longer shared the same
                  interests or values. She felt that Tom had{" "}
                  <strong>let her down</strong> by not being honest about his
                  feelings.
                </p>
                <p>
                  Finally, after a particularly bad fight, Emma decided it was
                  time to end things. They <strong>broke up</strong> on a rainy
                  Tuesday evening. It was painful, but both knew it was the
                  right decision. They had simply <strong>drifted apart</strong>{" "}
                  over time, and trying to stay together would only make things
                  worse.
                </p>
                <p>
                  Looking back, Emma doesn't regret the relationship. She
                  learned a lot about herself and what she needs in a partner.
                  Sometimes, even when you <strong>get on well</strong> with
                  someone at first, you can still <strong>grow apart</strong> as
                  people change. It's a natural part of life and relationships.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-5 border-2 border-purple-400 mt-4">
              <h4 className="text-xl font-bold text-purple-900 mb-3">
                Comprehension Questions
              </h4>
              <div className="space-y-3 text-sm">
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-purple-900 mb-2">
                    1. What happened when Emma and Tom first met?
                  </p>
                  <div className="space-y-1 text-xs">
                    <p className="italic">
                      A) They didn't like each other at first
                    </p>
                    <p className="italic">
                      B) They{" "}
                      <strong className="text-green-700">hit it off</strong>{" "}
                      immediately ✓
                    </p>
                    <p className="italic">C) Tom asked her out right away</p>
                    <p className="italic">D) They fell out over something</p>
                  </div>
                </div>

                <div className="bg-white rounded p-3">
                  <p className="font-bold text-purple-900 mb-2">
                    2. How did Tom support Emma?
                  </p>
                  <div className="space-y-1 text-xs">
                    <p className="italic">A) He gave her money</p>
                    <p className="italic">
                      B) He{" "}
                      <strong className="text-green-700">looked after</strong>{" "}
                      her and{" "}
                      <strong className="text-green-700">stood by</strong> her ✓
                    </p>
                    <p className="italic">C) He let her down</p>
                    <p className="italic">D) He walked out on her</p>
                  </div>
                </div>

                <div className="bg-white rounded p-3">
                  <p className="font-bold text-purple-900 mb-2">
                    3. What happened in their second year?
                  </p>
                  <div className="space-y-1 text-xs">
                    <p className="italic">A) They got married</p>
                    <p className="italic">B) They hit it off better</p>
                    <p className="italic">
                      C) They started to{" "}
                      <strong className="text-green-700">fall out</strong> and{" "}
                      <strong className="text-green-700">grow apart</strong> ✓
                    </p>
                    <p className="italic">D) They made up immediately</p>
                  </div>
                </div>

                <div className="bg-white rounded p-3">
                  <p className="font-bold text-purple-900 mb-2">
                    4. Why did Emma decide to end the relationship?
                  </p>
                  <div className="space-y-1 text-xs">
                    <p className="italic">A) Tom cheated on her</p>
                    <p className="italic">
                      B) They had{" "}
                      <strong className="text-green-700">grown apart</strong>{" "}
                      and she couldn't{" "}
                      <strong className="text-green-700">put up with</strong>{" "}
                      the arguments ✓
                    </p>
                    <p className="italic">C) They never got on well</p>
                    <p className="italic">D) Tom walked out on her</p>
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
        <Section title="📖 Reading: Friendship Problems">
          <div className="bg-gradient-to-br from-blue-50 via-green-50 to-cyan-50 rounded-lg p-6 border-2 border-blue-400 mb-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">
              Текст для чтения — Проблемы дружбы
            </h3>

            <div className="bg-white rounded-lg p-5 border-2 border-blue-300">
              <h4 className="text-xl font-bold text-blue-900 mb-3">
                "Best Friends Forever?"
              </h4>
              <div className="text-sm text-zinc-700 leading-relaxed space-y-3">
                <p>
                  Sarah and Lisa had been best friends since primary school.
                  They always <strong>got on brilliantly</strong> — they shared
                  the same sense of humour, loved the same music, and could{" "}
                  <strong>count on</strong> each other no matter what. Whenever
                  Sarah had a problem, Lisa would always{" "}
                  <strong>stand by</strong> her and offer support.
                </p>
                <p>
                  Their friendship was tested when they started university.
                  Sarah went to London while Lisa stayed in their hometown. At
                  first, they called each other every day and visited on
                  weekends. But gradually, they started to{" "}
                  <strong>drift apart</strong>. Sarah was making new friends and
                  had less time for Lisa. Lisa felt hurt and believed that Sarah
                  had <strong>let her down</strong> by not making enough effort
                  to stay in touch.
                </p>
                <p>
                  Things came to a head when Lisa found out from Instagram that
                  Sarah had been to a party in their hometown but hadn't told
                  her. They <strong>fell out</strong> over a heated phone call
                  where accusations were thrown around. Lisa accused Sarah of
                  changing and forgetting about their friendship. Sarah defended
                  herself, saying she was just busy with her new life.
                </p>
                <p>
                  For six months, they didn't speak at all. Both were too
                  stubborn to <strong>make up</strong>. Sarah's mother kept
                  telling her to reach out, but Sarah felt that Lisa should
                  apologize first. Lisa, meanwhile, was{" "}
                  <strong>putting up with</strong> her hurt feelings and trying
                  to move on.
                </p>
                <p>
                  Everything changed when Sarah's father became seriously ill.
                  Lisa heard about it from a mutual friend and immediately sent
                  Sarah a message offering support. Sarah realized how much she
                  had missed Lisa and how silly their argument had been. They
                  met for coffee and talked for hours. They finally{" "}
                  <strong>made up</strong> and admitted that they had both{" "}
                  <strong>let each other down</strong>.
                </p>
                <p>
                  Now, their friendship is stronger than ever. They've learned
                  that even best friends can <strong>fall out</strong>
                  sometimes, but if you <strong>get on well</strong> at your
                  core, you can always find your way back to each other. They
                  still don't talk every day like before — they've both grown
                  and changed — but they know they can always{" "}
                  <strong>count on</strong> each other when it really matters.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-5 border-2 border-green-400 mt-4">
              <h4 className="text-xl font-bold text-green-900 mb-3">
                Comprehension Questions
              </h4>
              <div className="space-y-3 text-sm">
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-green-900 mb-2">
                    1. How was Sarah and Lisa's friendship at the beginning?
                  </p>
                  <div className="space-y-1 text-xs">
                    <p className="italic">A) They often fell out</p>
                    <p className="italic">
                      B) They{" "}
                      <strong className="text-green-700">
                        got on brilliantly
                      </strong>{" "}
                      and could{" "}
                      <strong className="text-green-700">count on</strong> each
                      other ✓
                    </p>
                    <p className="italic">C) They had grown apart</p>
                    <p className="italic">D) They let each other down</p>
                  </div>
                </div>

                <div className="bg-white rounded p-3">
                  <p className="font-bold text-green-900 mb-2">
                    2. What happened when they went to different places?
                  </p>
                  <div className="space-y-1 text-xs">
                    <p className="italic">A) They made up immediately</p>
                    <p className="italic">
                      B) They started to{" "}
                      <strong className="text-green-700">drift apart</strong> ✓
                    </p>
                    <p className="italic">C) They hit it off better</p>
                    <p className="italic">D) They walked out on each other</p>
                  </div>
                </div>

                <div className="bg-white rounded p-3">
                  <p className="font-bold text-green-900 mb-2">
                    3. What caused their big argument?
                  </p>
                  <div className="space-y-1 text-xs">
                    <p className="italic">
                      A) Lisa felt that Sarah had{" "}
                      <strong className="text-green-700">let her down</strong>{" "}
                      by not telling her about the party ✓
                    </p>
                    <p className="italic">B) Sarah cheated on Lisa</p>
                    <p className="italic">C) They broke up</p>
                    <p className="italic">D) Lisa walked out on Sarah</p>
                  </div>
                </div>

                <div className="bg-white rounded p-3">
                  <p className="font-bold text-green-900 mb-2">
                    4. What brought them back together?
                  </p>
                  <div className="space-y-1 text-xs">
                    <p className="italic">A) They fell out again</p>
                    <p className="italic">B) They drifted apart further</p>
                    <p className="italic">
                      C) Sarah's father's illness — Lisa{" "}
                      <strong className="text-green-700">stood by</strong>{" "}
                      Sarah, and they{" "}
                      <strong className="text-green-700">made up</strong> ✓
                    </p>
                    <p className="italic">D) They split up permanently</p>
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
        <Section title="✏️ Practice Exercises">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border-2 border-purple-400 mb-4">
            <h3 className="text-2xl font-bold text-purple-900 mb-4 text-center">
              Упражнения на закрепление
            </h3>
          </div>

          <CheckableExercise
            title="Exercise 1: Choose the correct phrasal verb"
            instruction="Вставь правильный phrasal verb."
            items={[
              {
                left: "They",
                answers: ["broke up", "split up"],
                right: "last month. (расстались)",
                explanation: "break up / split up = расстаться",
                wide: true,
              },
              {
                left: "I really",
                answers: ["get on with", "get on well with"],
                right: "my colleagues. (лажу)",
                explanation: "get on with = ладить с кем-то",
                wide: true,
              },
              {
                left: "They",
                answers: ["fell out"],
                right: "over money. (поссорились)",
                explanation: "fall out = поссориться",
              },
              {
                left: "He finally",
                answers: ["asked her out"],
                right: "for dinner. (пригласил)",
                explanation: "ask out = пригласить на свидание",
                wide: true,
              },
              {
                left: "You can always",
                answers: ["count on"],
                right: "me. (рассчитывать)",
                explanation: "count on = рассчитывать на кого-то",
              },
              {
                left: "They",
                answers: ["made up"],
                right: "after the argument. (помирились)",
                explanation: "make up = помириться",
              },
            ]}
          />

          <div className="mt-6">
            <CheckableExercise
              title="Exercise 2: Complete the sentences"
              instruction="Вставь правильный phrasal verb в нужной форме."
              items={[
                {
                  left: "We",
                  answers: ["hit it off"],
                  right: "immediately when we met. (поладили)",
                  explanation: "hit it off = сразу найти общий язык",
                  wide: true,
                },
                {
                  left: "She",
                  answers: ["looks after"],
                  right: "her elderly parents. (заботится)",
                  explanation: "look after = заботиться о ком-то",
                },
                {
                  left: "I can't",
                  answers: ["put up with"],
                  right: "his behaviour anymore. (терпеть)",
                  explanation: "put up with = терпеть что-то",
                  wide: true,
                },
                {
                  left: "They",
                  answers: ["grew apart", "drifted apart"],
                  right: "over the years. (отдалились)",
                  explanation: "grow apart / drift apart = отдалиться",
                  wide: true,
                },
                {
                  left: "He",
                  answers: ["let me down"],
                  right: "when I needed him. (подвёл)",
                  explanation: "let down = подвести кого-то",
                  wide: true,
                },
                {
                  left: "She",
                  answers: ["stood by"],
                  right: "him through difficult times. (поддержала)",
                  explanation: "stand by = поддержать в трудную минуту",
                  wide: true,
                },
              ]}
            />
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border-2 border-amber-400 mt-6">
            <h3 className="text-2xl font-bold text-amber-900 mb-4 text-center">
              📚 Complete Vocabulary List — 30+ Phrasal Verbs
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded p-4">
                <p className="font-bold text-green-900 mb-2">
                  ✅ Starting Relationships (6)
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                  <p>• ask out — пригласить на свидание</p>
                  <p>• go out with — встречаться</p>
                  <p>• chat up — флиртовать</p>
                  <p>• fall for — влюбиться</p>
                  <p>• hit it off — поладить сразу</p>
                  <p>• settle down — остепениться</p>
                </div>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-blue-900 mb-2">
                  💙 Maintaining Relationships (7)
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                  <p>• get on with — ладить с кем-то</p>
                  <p>• look after — заботиться</p>
                  <p>• make up — помириться</p>
                  <p>• put up with — терпеть</p>
                  <p>• count on — рассчитывать</p>
                  <p>• stand by — поддерживать</p>
                  <p>• stick up for — заступиться</p>
                </div>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-red-900 mb-2">
                  ❤️ Ending Relationships (8)
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                  <p>• fall out — поссориться</p>
                  <p>• break up — расстаться</p>
                  <p>• split up — разойтись</p>
                  <p>• grow apart — отдалиться</p>
                  <p>• drift apart — постепенно отдалиться</p>
                  <p>• let down — подвести</p>
                  <p>• walk out on — бросить</p>
                  <p>• cheat on — изменять</p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  return <div>Creating step {step}...</div>;
}




