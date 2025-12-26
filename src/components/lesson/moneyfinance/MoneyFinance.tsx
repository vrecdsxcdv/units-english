"use client";
import { Section } from "@/components/ui/Section";
import CheckableExercise from "../CheckableExercise";
import type { FillItem } from "../CheckableExercise";

type Props = { step: number };

export default function MoneyFinance({ step }: Props) {
  if (step === 1) {
    return (
      <>
        <Section title="💰 Money & Finance Vocabulary">
          <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-lg p-6 border-2 border-green-400">
            <h2 className="text-3xl font-bold text-green-900 mb-4">
              Money & Finance — Деньги и финансы
            </h2>
            <p className="text-sm text-zinc-700 mb-4">
              Лексика про **деньги и финансы** необходима для повседневной
              жизни, управления бюджетом, покупок и финансового планирования!
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-lg p-5 border-2 border-blue-400 mb-4">
              <h3 className="font-bold text-blue-900 mb-3 text-lg text-center">
                🔑 Основные категории
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-green-900 text-center">
                    Managing Money
                  </p>
                  <p className="text-xs text-zinc-600">
                    budget, afford, save, spend, earn
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-blue-900 text-center">
                    Banking
                  </p>
                  <p className="text-xs text-zinc-600">
                    account, loan, interest, withdraw, deposit
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-sm mb-1 font-semibold text-purple-900 text-center">
                    Spending & Saving
                  </p>
                  <p className="text-xs text-zinc-600">
                    waste money, be worth it, bargain, discount
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-5 border-2 border-orange-400 mb-4">
              <h3 className="font-bold text-orange-900 mb-3 text-lg text-center">
                ⚠️ Почему это важно?
              </h3>
              <div className="space-y-2 text-sm text-zinc-700">
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-green-900 mb-1">
                    1. Daily life & shopping
                  </p>
                  <p className="text-xs italic">
                    I can't <strong>afford</strong> this car right now.
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-blue-900 mb-1">
                    2. Financial planning
                  </p>
                  <p className="text-xs italic">
                    I need to <strong>stick to my budget</strong> this month.
                  </p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="font-bold text-purple-900 mb-1">
                    3. Banking & investments
                  </p>
                  <p className="text-xs italic">
                    I'm planning to <strong>take out a loan</strong> for a
                    house.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-lg p-5 border-2 border-amber-400">
              <h4 className="font-bold text-amber-900 mb-3 text-center">
                💡 В этой теме мы изучим:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-zinc-700">
                <div>
                  <p>✅ 50+ слов про деньги и финансы</p>
                  <p>✅ Phrasal verbs (pay off, run out of, cut down on)</p>
                  <p>✅ Collocations (waste money, be worth it, save up)</p>
                </div>
                <div>
                  <p>✅ Тексты про финансовую грамотность</p>
                  <p>✅ Упражнения на понимание</p>
                  <p>✅ Real-life money situations</p>
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
        <Section title="💵 Managing Money — Управление деньгами">
          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300 mb-4">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              Базовая лексика для управления деньгами
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Эти слова используются для **планирования бюджета** и **управления
              личными финансами**!
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-green-400">
                <div className="space-y-4">
                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      1. budget
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">бюджет</p>
                    <p className="text-sm italic">
                      I need to <strong>stick to my budget</strong> this month.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Мне нужно придерживаться своего бюджета в этом месяце.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      2. afford
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      позволить себе (финансово)
                    </p>
                    <p className="text-sm italic">
                      I can't <strong>afford</strong> a new car right now.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я не могу позволить себе новую машину прямо сейчас.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      3. save (money) / save up
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      копить деньги, откладывать
                    </p>
                    <p className="text-sm italic">
                      I'm <strong>saving up</strong> for a holiday.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я коплю деньги на отпуск.
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      4. spend (money on)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      тратить (деньги на)
                    </p>
                    <p className="text-sm italic">
                      I <strong>spend</strong> too much money{" "}
                      <strong>on</strong> clothes.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я трачу слишком много денег на одежду.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      5. waste money (on)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      тратить деньги впустую (на)
                    </p>
                    <p className="text-sm italic">
                      Don't <strong>waste money on</strong> things you don't
                      need.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Не трать деньги впустую на вещи, которые тебе не нужны.
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      6. earn (money)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">зарабатывать</p>
                    <p className="text-sm italic">
                      How much do you <strong>earn</strong> per month?
                    </p>
                    <p className="text-xs text-zinc-600">
                      Сколько ты зарабатываешь в месяц?
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded p-4">
                    <h4 className="font-bold text-yellow-900 text-lg mb-2">
                      7. income
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">доход</p>
                    <p className="text-sm italic">
                      My monthly <strong>income</strong> is enough to cover my
                      expenses.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Моего месячного дохода достаточно, чтобы покрыть расходы.
                    </p>
                  </div>

                  <div className="bg-red-50 rounded p-4">
                    <h4 className="font-bold text-red-900 text-lg mb-2">
                      8. expenses
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">расходы</p>
                    <p className="text-sm italic">
                      I need to <strong>cut down on</strong> my{" "}
                      <strong>expenses</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Мне нужно сократить свои расходы.
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded p-4">
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">
                      9. be worth it
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      стоить того, оправдывать затраты
                    </p>
                    <p className="text-sm italic">
                      The new laptop is expensive, but it's{" "}
                      <strong>worth it</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Новый ноутбук дорогой, но он того стоит.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      10. make ends meet
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      сводить концы с концами
                    </p>
                    <p className="text-sm italic">
                      It's hard to <strong>make ends meet</strong> with this
                      salary.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Трудно сводить концы с концами с такой зарплатой.
                    </p>
                  </div>

                  <div className="bg-rose-50 rounded p-4">
                    <h4 className="font-bold text-rose-900 text-lg mb-2">
                      11. live beyond your means
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      жить не по средствам
                    </p>
                    <p className="text-sm italic">
                      He's <strong>living beyond his means</strong> — he can't
                      afford that lifestyle.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Он живёт не по средствам — он не может позволить себе
                      такой образ жизни.
                    </p>
                  </div>

                  <div className="bg-lime-50 rounded p-4">
                    <h4 className="font-bold text-lime-900 text-lg mb-2">
                      12. break even
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      выйти в ноль (не прибыль, не убыток)
                    </p>
                    <p className="text-sm italic">
                      After all the expenses, we just managed to{" "}
                      <strong>break even</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      После всех расходов мы едва вышли в ноль.
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
        <Section title="🏦 Banking & Accounts — Банковское дело">
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-300 mb-4">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Vocabulary для банковских операций
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Эти слова используются в контексте **банков**, **кредитов** и
              **финансовых счетов**!
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-blue-400">
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      1. bank account
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      банковский счёт
                    </p>
                    <p className="text-sm italic">
                      I need to <strong>open a bank account</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Мне нужно открыть банковский счёт.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      2. savings account
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      сберегательный счёт
                    </p>
                    <p className="text-sm italic">
                      My <strong>savings account</strong> earns 3% interest.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Мой сберегательный счёт приносит 3% процентов.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      3. loan
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">кредит, заём</p>
                    <p className="text-sm italic">
                      I need to <strong>take out a loan</strong> to buy a house.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Мне нужно взять кредит, чтобы купить дом.
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      4. mortgage
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">ипотека</p>
                    <p className="text-sm italic">
                      We're paying off our <strong>mortgage</strong> over 25
                      years.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Мы выплачиваем нашу ипотеку в течение 25 лет.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      5. interest
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">процент</p>
                    <p className="text-sm italic">
                      The <strong>interest rate</strong> on this loan is 5%.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Процентная ставка по этому кредиту — 5%.
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      6. deposit (verb & noun)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      вносить деньги / депозит
                    </p>
                    <p className="text-sm italic">
                      I need to <strong>deposit</strong> £500 into my account.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Мне нужно внести £500 на мой счёт.
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded p-4">
                    <h4 className="font-bold text-yellow-900 text-lg mb-2">
                      7. withdraw (money)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">снять деньги</p>
                    <p className="text-sm italic">
                      I <strong>withdrew</strong> £100 from the ATM.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я снял £100 в банкомате.
                    </p>
                  </div>

                  <div className="bg-red-50 rounded p-4">
                    <h4 className="font-bold text-red-900 text-lg mb-2">
                      8. transfer (money)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      перевести деньги
                    </p>
                    <p className="text-sm italic">
                      I <strong>transferred</strong> money to my sister's
                      account.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я перевёл деньги на счёт моей сестры.
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded p-4">
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">
                      9. pay off (a debt/loan)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      выплатить (долг/кредит)
                    </p>
                    <p className="text-sm italic">
                      It took me five years to <strong>pay off</strong> my
                      student loan.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Мне понадобилось пять лет, чтобы выплатить студенческий
                      кредит.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      10. be in debt / owe money
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      быть в долгах / быть должным
                    </p>
                    <p className="text-sm italic">
                      I <strong>owe</strong> the bank £10,000.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я должен банку £10,000.
                    </p>
                  </div>

                  <div className="bg-rose-50 rounded p-4">
                    <h4 className="font-bold text-rose-900 text-lg mb-2">
                      11. overdraft
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">овердрафт</p>
                    <p className="text-sm italic">
                      I went into <strong>overdraft</strong> last month.
                    </p>
                    <p className="text-xs text-zinc-600">
                      В прошлом месяце я ушёл в овердрафт.
                    </p>
                  </div>

                  <div className="bg-lime-50 rounded p-4">
                    <h4 className="font-bold text-lime-900 text-lg mb-2">
                      12. credit card / debit card
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      кредитная карта / дебетовая карта
                    </p>
                    <p className="text-sm italic">
                      I prefer to pay by <strong>debit card</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я предпочитаю платить дебетовой картой.
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
        <Section title="🛍️ Spending & Shopping — Траты и покупки">
          <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-300 mb-4">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              Vocabulary для покупок и трат
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Эти слова используются в контексте **шоппинга**, **скидок** и
              **ценности покупок**!
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-purple-400">
                <div className="space-y-4">
                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      1. price
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">цена</p>
                    <p className="text-sm italic">
                      The <strong>price</strong> of petrol has gone up.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Цена бензина выросла.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      2. cost (verb & noun)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      стоить / стоимость
                    </p>
                    <p className="text-sm italic">
                      How much does it <strong>cost</strong>?
                    </p>
                    <p className="text-xs text-zinc-600">Сколько это стоит?</p>
                  </div>

                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      3. discount
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">скидка</p>
                    <p className="text-sm italic">
                      There's a 20% <strong>discount</strong> on all items.
                    </p>
                    <p className="text-xs text-zinc-600">
                      На все товары скидка 20%.
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      4. bargain
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      выгодная сделка, удачная покупка
                    </p>
                    <p className="text-sm italic">
                      I got a real <strong>bargain</strong> — this coat was only
                      £20!
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я сделал выгодную покупку — это пальто стоило всего £20!
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      5. rip-off
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      грабёж, завышенная цена
                    </p>
                    <p className="text-sm italic">
                      £10 for a coffee? That's a <strong>rip-off</strong>!
                    </p>
                    <p className="text-xs text-zinc-600">
                      £10 за кофе? Это грабёж!
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      6. value for money
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      хорошее соотношение цены и качества
                    </p>
                    <p className="text-sm italic">
                      This restaurant offers excellent{" "}
                      <strong>value for money</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Этот ресторан предлагает отличное соотношение цены и
                      качества.
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded p-4">
                    <h4 className="font-bold text-yellow-900 text-lg mb-2">
                      7. overpriced
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">переоценённый</p>
                    <p className="text-sm italic">
                      I think this phone is <strong>overpriced</strong>.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я думаю, этот телефон переоценён.
                    </p>
                  </div>

                  <div className="bg-red-50 rounded p-4">
                    <h4 className="font-bold text-red-900 text-lg mb-2">
                      8. refund
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">возврат денег</p>
                    <p className="text-sm italic">
                      Can I get a <strong>refund</strong>? This product is
                      faulty.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Могу я получить возврат денег? Этот товар неисправен.
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded p-4">
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">
                      9. receipt
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">чек</p>
                    <p className="text-sm italic">
                      Keep your <strong>receipt</strong> in case you need to
                      return it.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Сохраните чек на случай, если вам нужно будет вернуть
                      товар.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      10. splurge (on)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      потратиться (на), позволить себе роскошь
                    </p>
                    <p className="text-sm italic">
                      I decided to <strong>splurge on</strong> a designer bag.
                    </p>
                    <p className="text-xs text-zinc-600">
                      Я решила потратиться на дизайнерскую сумку.
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
        <Section title="🔄 Phrasal Verbs & Idioms — Деньги">
          <div className="bg-orange-50 rounded-lg p-6 border-2 border-orange-300 mb-4">
            <h3 className="text-2xl font-bold text-orange-900 mb-4">
              Phrasal verbs и идиомы про деньги
            </h3>
            <p className="text-sm text-zinc-700 mb-3">
              Эти **phrasal verbs** и **идиомы** очень часто используются в
              контексте денег!
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-orange-400">
                <div className="space-y-4">
                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      1. run out of (money)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      закончиться (деньги)
                    </p>
                    <p className="text-sm italic">
                      I've <strong>run out of</strong> money! Can you lend me
                      some?
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      2. cut down on (expenses)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      сократить (расходы)
                    </p>
                    <p className="text-sm italic">
                      We need to <strong>cut down on</strong> our spending.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      3. put aside (money)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      откладывать деньги
                    </p>
                    <p className="text-sm italic">
                      I try to <strong>put aside</strong> £100 every month.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      4. pay back
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">вернуть (долг)</p>
                    <p className="text-sm italic">
                      I need to <strong>pay you back</strong> the £50 I
                      borrowed.
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      5. get by (on)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      обходиться (суммой денег)
                    </p>
                    <p className="text-sm italic">
                      It's hard to <strong>get by on</strong> minimum wage.
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      6. rip someone off
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      обманывать, обдирать
                    </p>
                    <p className="text-sm italic">
                      That taxi driver <strong>ripped me off</strong>!
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded p-4">
                    <h4 className="font-bold text-yellow-900 text-lg mb-2">
                      💰 Idioms про деньги
                    </h4>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>Money doesn't grow on trees</strong> — деньги не
                        растут на деревьях
                      </p>
                      <p>
                        <strong>Break the bank</strong> — разориться
                      </p>
                      <p>
                        <strong>Cost an arm and a leg</strong> — стоить целое
                        состояние
                      </p>
                      <p>
                        <strong>Save for a rainy day</strong> — копить на чёрный
                        день
                      </p>
                      <p>
                        <strong>Live from hand to mouth</strong> — жить
                        впроголодь
                      </p>
                      <p>
                        <strong>Tighten your belt</strong> — затянуть пояс,
                        экономить
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

  if (step === 6) {
    return (
      <>
        <Section title="📖 Reading: Financial Freedom">
          <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-lg p-6 border-2 border-green-400 mb-4">
            <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">
              Текст для чтения — Путь к финансовой свободе
            </h3>

            <div className="bg-white rounded-lg p-5 border-2 border-green-300">
              <h4 className="text-xl font-bold text-green-900 mb-3">
                "From Debt to Financial Freedom: James's Story"
              </h4>
              <div className="text-sm text-zinc-700 leading-relaxed space-y-3">
                <p>
                  Five years ago, James was drowning in debt. He had{" "}
                  <strong>taken out</strong> multiple <strong>loans</strong>,
                  maxed out his <strong>credit cards</strong>, and could barely{" "}
                  <strong>make ends meet</strong>. Every month, he struggled to
                  pay his bills and often had to <strong>borrow money</strong>{" "}
                  from friends. He was <strong>living beyond his means</strong>,
                  buying things he couldn't <strong>afford</strong>, and{" "}
                  <strong>wasting money on</strong> expensive restaurants and
                  designer clothes.
                </p>
                <p>
                  The turning point came when James realized he{" "}
                  <strong>owed</strong> over £30,000. He was paying massive{" "}
                  <strong>interest</strong> on his debts and going into{" "}
                  <strong>overdraft</strong> every month. Something had to
                  change.
                </p>
                <p>
                  James decided to take control of his finances. First, he
                  created a strict <strong>budget</strong>. He calculated his
                  monthly <strong>income</strong> and <strong>expenses</strong>,
                  and was shocked to see how much money he was{" "}
                  <strong>spending on</strong> unnecessary things. He realized
                  that his daily £5 coffee wasn't <strong>worth it</strong> when
                  he was in so much debt.
                </p>
                <p>
                  Next, James started to <strong>cut down on</strong> his
                  spending. He stopped eating out, cancelled his gym membership,
                  and began shopping for <strong>bargains</strong> instead of
                  buying expensive brands. He learned to differentiate between
                  good <strong>value for money</strong> and{" "}
                  <strong>overpriced</strong> items. If something seemed like a{" "}
                  <strong>rip-off</strong>, he simply didn't buy it.
                </p>
                <p>
                  James also looked for ways to increase his{" "}
                  <strong>income</strong>. He started a side business and began{" "}
                  <strong>earning</strong> an extra £500 per month. Every penny
                  he earned from this business went towards{" "}
                  <strong>paying off</strong> his debts. He prioritized paying
                  the loans with the highest <strong>interest rates</strong>{" "}
                  first.
                </p>
                <p>
                  It wasn't easy. There were months when James barely managed to{" "}
                  <strong>get by</strong>, and he had to{" "}
                  <strong>tighten his belt</strong> even more. His friends
                  didn't understand why he couldn't join them for dinner or why
                  he refused to <strong>splurge on</strong> a holiday. But James
                  stayed focused. He knew that{" "}
                  <strong>money doesn't grow on trees</strong>, and he was
                  determined not to <strong>live from hand to mouth</strong>{" "}
                  anymore.
                </p>
                <p>
                  After three years of discipline, James finally{" "}
                  <strong>paid off</strong> all his debts. He had{" "}
                  <strong>paid back</strong> every loan and cleared his{" "}
                  <strong>credit cards</strong>. More importantly, he had
                  learned to <strong>save</strong>. He started{" "}
                  <strong>putting aside</strong> money every month into a{" "}
                  <strong>savings account</strong>. He was no longer{" "}
                  <strong>in debt</strong>, and for the first time in years, he
                  felt free.
                </p>
                <p>
                  Today, James has £20,000 in his{" "}
                  <strong>savings account</strong> and owns his home through a
                  reasonable <strong>mortgage</strong>. He still follows a{" "}
                  <strong>budget</strong>, but now he can{" "}
                  <strong>afford</strong> to treat himself occasionally without
                  feeling guilty. He's even started investing his money to{" "}
                  <strong>earn</strong> passive income. James often says that
                  learning to manage money properly was the best decision he
                  ever made. His advice? "Stop <strong>wasting money</strong> on
                  things that don't matter.{" "}
                  <strong>Save for a rainy day</strong>. And remember —
                  short-term sacrifices lead to long-term freedom."
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-5 border-2 border-blue-400 mt-4">
              <h4 className="text-xl font-bold text-blue-900 mb-3">
                Comprehension Questions
              </h4>
              <CheckableExercise
                title="Answer the questions based on the text"
                instruction="Дай полный ответ на основе текста."
                items={[
                  {
                    left: "How much money did James owe five years ago?",
                    answers: [
                      "over £30,000",
                      "£30,000",
                      "over 30000 pounds",
                      "He owed over £30,000",
                    ],
                    right: "",
                    explanation: "James owed over £30,000",
                    wide: true,
                  },
                  {
                    left: "What did James create to control his finances?",
                    answers: [
                      "a budget",
                      "budget",
                      "a strict budget",
                      "He created a budget",
                    ],
                    right: "",
                    explanation: "James created a strict budget",
                    wide: true,
                  },
                  {
                    left: "How much extra money did James earn from his side business?",
                    answers: ["£500", "500 pounds", "£500 per month"],
                    right: "",
                    explanation: "James earned an extra £500 per month",
                    wide: true,
                  },
                  {
                    left: "How long did it take James to pay off all his debts?",
                    answers: [
                      "three years",
                      "3 years",
                      "It took three years",
                      "It took 3 years",
                    ],
                    right: "",
                    explanation:
                      "It took James three years to pay off his debts",
                    wide: true,
                  },
                ]}
              />
            </div>
          </div>
        </Section>
      </>
    );
  }

  if (step === 7) {
    return (
      <>
        <Section title="✏️ Practice & Complete Vocabulary List">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-400 mb-4">
            <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">
              Упражнение на закрепление
            </h3>
          </div>

          <CheckableExercise
            title="Complete the sentences with the correct word or phrase"
            instruction="Вставь правильное слово или фразу."
            items={[
              {
                left: "I can't",
                answers: ["afford"],
                right: "to buy a new car right now.",
                explanation: "afford = позволить себе",
                wide: true,
              },
              {
                left: "I'm",
                answers: ["saving up"],
                right: "for a holiday in Spain.",
                explanation: "save up = копить деньги",
                wide: true,
              },
              {
                left: "It took me five years to",
                answers: ["pay off"],
                right: "my student loan.",
                explanation: "pay off = выплатить (долг)",
                wide: true,
              },
              {
                left: "I need to",
                answers: ["withdraw"],
                right: "some money from the ATM.",
                explanation: "withdraw = снять деньги",
                wide: true,
              },
              {
                left: "Don't",
                answers: ["waste money on"],
                right: "things you don't need.",
                explanation: "waste money on = тратить деньги впустую на",
                wide: true,
              },
              {
                left: "This laptop is expensive, but it's",
                answers: ["worth it"],
                right: ".",
                explanation: "be worth it = стоить того",
              },
              {
                left: "We need to",
                answers: ["cut down on"],
                right: "our expenses.",
                explanation: "cut down on = сократить",
              },
              {
                left: "I",
                answers: ["owe"],
                right: "the bank £5,000.",
                explanation: "owe = быть должным",
              },
            ]}
          />

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border-2 border-amber-400 mt-6">
            <h3 className="text-2xl font-bold text-amber-900 mb-4 text-center">
              📚 Complete Vocabulary List — 50+ Words
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded p-4">
                <p className="font-bold text-green-900 mb-2">
                  💵 Managing Money (12)
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                  <p>1. budget — бюджет</p>
                  <p>2. afford — позволить себе</p>
                  <p>3. save (up) — копить</p>
                  <p>4. spend (on) — тратить</p>
                  <p>5. waste money (on) — тратить впустую</p>
                  <p>6. earn — зарабатывать</p>
                  <p>7. income — доход</p>
                  <p>8. expenses — расходы</p>
                  <p>9. be worth it — стоить того</p>
                  <p>10. make ends meet — сводить концы с концами</p>
                  <p>11. live beyond your means — жить не по средствам</p>
                  <p>12. break even — выйти в ноль</p>
                </div>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-blue-900 mb-2">
                  🏦 Banking & Accounts (12)
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                  <p>13. bank account — банковский счёт</p>
                  <p>14. savings account — сберегательный счёт</p>
                  <p>15. loan — кредит</p>
                  <p>16. mortgage — ипотека</p>
                  <p>17. interest — процент</p>
                  <p>18. deposit — вносить деньги</p>
                  <p>19. withdraw — снимать деньги</p>
                  <p>20. transfer — переводить</p>
                  <p>21. pay off — выплатить</p>
                  <p>22. be in debt / owe — быть в долгах</p>
                  <p>23. overdraft — овердрафт</p>
                  <p>24. credit/debit card — кредитная/дебетовая карта</p>
                </div>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-purple-900 mb-2">
                  🛍️ Spending & Shopping (10)
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                  <p>25. price — цена</p>
                  <p>26. cost — стоить/стоимость</p>
                  <p>27. discount — скидка</p>
                  <p>28. bargain — выгодная покупка</p>
                  <p>29. rip-off — грабёж</p>
                  <p>30. value for money — соотношение цены/качества</p>
                  <p>31. overpriced — переоценённый</p>
                  <p>32. refund — возврат денег</p>
                  <p>33. receipt — чек</p>
                  <p>34. splurge (on) — потратиться на</p>
                </div>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-orange-900 mb-2">
                  🔄 Phrasal Verbs (6)
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                  <p>35. run out of — закончиться</p>
                  <p>36. cut down on — сократить</p>
                  <p>37. put aside — откладывать</p>
                  <p>38. pay back — вернуть долг</p>
                  <p>39. get by (on) — обходиться</p>
                  <p>40. rip someone off — обманывать</p>
                </div>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-red-900 mb-2">💰 Idioms (6)</p>
                <div className="grid grid-cols-1 gap-2 text-xs">
                  <p>
                    41. Money doesn't grow on trees — деньги не растут на
                    деревьях
                  </p>
                  <p>42. Break the bank — разориться</p>
                  <p>43. Cost an arm and a leg — стоить целое состояние</p>
                  <p>44. Save for a rainy day — копить на чёрный день</p>
                  <p>45. Live from hand to mouth — жить впроголодь</p>
                  <p>46. Tighten your belt — затянуть пояс, экономить</p>
                </div>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-indigo-900 mb-2">
                  ➕ Additional Words (6+)
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                  <p>47. invest — инвестировать</p>
                  <p>48. investment — инвестиция</p>
                  <p>49. borrow — занимать</p>
                  <p>50. lend — одалживать</p>
                  <p>51. cash — наличные</p>
                  <p>52. ATM (cashpoint) — банкомат</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-5 border-2 border-green-400 mt-4">
              <h4 className="font-bold text-green-900 mb-3 text-center">
                💡 Полезные collocations
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-zinc-700">
                <p>
                  ✓ <strong>stick to a budget</strong> — придерживаться бюджета
                </p>
                <p>
                  ✓ <strong>take out a loan</strong> — взять кредит
                </p>
                <p>
                  ✓ <strong>open a bank account</strong> — открыть счёт
                </p>
                <p>
                  ✓ <strong>pay by card</strong> — платить картой
                </p>
                <p>
                  ✓ <strong>get a refund</strong> — получить возврат денег
                </p>
                <p>
                  ✓ <strong>borrow money</strong> — занять деньги
                </p>
                <p>
                  ✓ <strong>lend money</strong> — одолжить деньги
                </p>
                <p>
                  ✓ <strong>interest rate</strong> — процентная ставка
                </p>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  return <div>Creating step {step}...</div>;
}




