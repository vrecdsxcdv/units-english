"use client";

import { Section } from "@/components/ui/Section";
import CheckableExercise from "@/components/lesson/CheckableExercise";

type Props = { step: number };

export default function CrimeLaw({ step }: Props) {
  if (step === 1) {
    return (
      <>
        <Section title="⚖️ Crime & Law — Introduction">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-6 border-2 border-red-300 mb-6">
            <h3 className="text-2xl font-bold text-red-900 mb-4">
              📚 Введение в тему Crime & Law
            </h3>

            <div className="bg-white rounded-lg p-6 border-2 border-red-200 mb-4">
              <p className="text-base leading-relaxed mb-4">
                <strong>Crime & Law</strong> (Преступления и закон) — это важная
                тема для понимания правовой системы и общества. В этой теме мы
                изучим лексику, связанную с <strong>преступлениями</strong>,{" "}
                <strong>полицией</strong>, <strong>судом</strong>,{" "}
                <strong>наказаниями</strong> и <strong>правами</strong>.
              </p>

              <p className="text-base leading-relaxed">
                Эта тема особенно полезна для чтения новостей, просмотра
                детективных сериалов, понимания юридических текстов и обсуждения
                вопросов правосудия на английском языке.
              </p>
            </div>

            <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300">
              <h4 className="text-xl font-bold text-red-900 mb-3">
                🎯 Что вы освоите:
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>100 ключевых слов по теме Crime & Law</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Типы преступлений (theft, murder, fraud, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Люди в правовой системе (judge, lawyer, witness)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>
                    Полиция и расследование (arrest, investigate, evidence)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Суд и судебный процесс (trial, verdict, guilty)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Наказания (prison, fine, community service)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Права и законы (legal, illegal, human rights)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Чтение текста и практические упражнения</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-400">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              🔍 Types of Crimes — Виды преступлений
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-blue-300">
                <div className="space-y-4">
                  <div className="bg-red-50 rounded p-4">
                    <h4 className="font-bold text-red-900 text-lg mb-2">
                      1. crime
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">преступление</p>
                    <p className="text-sm italic">
                      <strong>Crime</strong> is increasing in big cities.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      2. commit a crime
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      совершить преступление
                    </p>
                    <p className="text-sm italic">
                      He <strong>committed a crime</strong> and was arrested.
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded p-4">
                    <h4 className="font-bold text-yellow-900 text-lg mb-2">
                      3. theft / stealing
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      кража / воровство
                    </p>
                    <p className="text-sm italic">
                      <strong>Theft</strong> is the most common crime.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      4. robbery / burglary
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      ограбление / кража со взломом
                    </p>
                    <p className="text-sm italic">
                      There was a <strong>robbery</strong> at the bank
                      yesterday.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      5. murder / homicide
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">убийство</p>
                    <p className="text-sm italic">
                      He was charged with <strong>murder</strong>.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      6. assault
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">нападение</p>
                    <p className="text-sm italic">
                      He was convicted of <strong>assault</strong>.
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      7. fraud
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">мошенничество</p>
                    <p className="text-sm italic">
                      She was accused of <strong>fraud</strong>.
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      8. kidnapping
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">похищение</p>
                    <p className="text-sm italic">
                      The <strong>kidnapping</strong> shocked the nation.
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded p-4">
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">
                      9. drug trafficking
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      торговля наркотиками
                    </p>
                    <p className="text-sm italic">
                      He was arrested for <strong>drug trafficking</strong>.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      10. vandalism
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">вандализм</p>
                    <p className="text-sm italic">
                      <strong>Vandalism</strong> damages public property.
                    </p>
                  </div>

                  <div className="bg-lime-50 rounded p-4">
                    <h4 className="font-bold text-lime-900 text-lg mb-2">
                      11. arson
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">поджог</p>
                    <p className="text-sm italic">
                      <strong>Arson</strong> is a serious crime.
                    </p>
                  </div>

                  <div className="bg-amber-50 rounded p-4">
                    <h4 className="font-bold text-amber-900 text-lg mb-2">
                      12. shoplifting
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      кража в магазине
                    </p>
                    <p className="text-sm italic">
                      She was caught <strong>shoplifting</strong>.
                    </p>
                  </div>

                  <div className="bg-sky-50 rounded p-4">
                    <h4 className="font-bold text-sky-900 text-lg mb-2">
                      13. cybercrime
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      киберпреступление
                    </p>
                    <p className="text-sm italic">
                      <strong>Cybercrime</strong> is growing rapidly.
                    </p>
                  </div>

                  <div className="bg-violet-50 rounded p-4">
                    <h4 className="font-bold text-violet-900 text-lg mb-2">
                      14. hacking
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      взлом (компьютеров)
                    </p>
                    <p className="text-sm italic">
                      <strong>Hacking</strong> into computer systems is illegal.
                    </p>
                  </div>

                  <div className="bg-rose-50 rounded p-4">
                    <h4 className="font-bold text-rose-900 text-lg mb-2">
                      15. bribery / corruption
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      взяточничество / коррупция
                    </p>
                    <p className="text-sm italic">
                      <strong>Bribery</strong> undermines the legal system.
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
        <Section title="👥 People in the Legal System">
          <div className="bg-purple-50 rounded-lg p-6 border-2 border-purple-400 mb-6">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              👨‍⚖️ Люди в правовой системе
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-purple-300">
                <div className="space-y-4">
                  <div className="bg-red-50 rounded p-4">
                    <h4 className="font-bold text-red-900 text-lg mb-2">
                      1. criminal / offender
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      преступник / правонарушитель
                    </p>
                    <p className="text-sm italic">
                      The <strong>criminal</strong> was caught by police.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      2. suspect
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">подозреваемый</p>
                    <p className="text-sm italic">
                      The <strong>suspect</strong> was questioned by detectives.
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded p-4">
                    <h4 className="font-bold text-yellow-900 text-lg mb-2">
                      3. victim
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">жертва</p>
                    <p className="text-sm italic">
                      The <strong>victim</strong> testified in court.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      4. witness
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">свидетель</p>
                    <p className="text-sm italic">
                      The <strong>witness</strong> saw the crime happen.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      5. judge
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">судья</p>
                    <p className="text-sm italic">
                      The <strong>judge</strong> sentenced him to 10 years.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      6. jury
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">присяжные</p>
                    <p className="text-sm italic">
                      The <strong>jury</strong> found him guilty.
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      7. lawyer / attorney
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      адвокат / юрист
                    </p>
                    <p className="text-sm italic">
                      His <strong>lawyer</strong> defended him in court.
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      8. prosecutor
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">прокурор</p>
                    <p className="text-sm italic">
                      The <strong>prosecutor</strong> presented the evidence.
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded p-4">
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">
                      9. defendant / accused
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      ответчик / обвиняемый
                    </p>
                    <p className="text-sm italic">
                      The <strong>defendant</strong> pleaded not guilty.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      10. police officer
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">полицейский</p>
                    <p className="text-sm italic">
                      The <strong>police officer</strong> arrested the thief.
                    </p>
                  </div>

                  <div className="bg-lime-50 rounded p-4">
                    <h4 className="font-bold text-lime-900 text-lg mb-2">
                      11. detective
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      детектив / следователь
                    </p>
                    <p className="text-sm italic">
                      The <strong>detective</strong> investigated the case.
                    </p>
                  </div>

                  <div className="bg-amber-50 rounded p-4">
                    <h4 className="font-bold text-amber-900 text-lg mb-2">
                      12. prison guard
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      тюремный охранник
                    </p>
                    <p className="text-sm italic">
                      <strong>Prison guards</strong> supervise inmates.
                    </p>
                  </div>

                  <div className="bg-sky-50 rounded p-4">
                    <h4 className="font-bold text-sky-900 text-lg mb-2">
                      13. bailiff
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      судебный пристав
                    </p>
                    <p className="text-sm italic">
                      The <strong>bailiff</strong> maintains order in court.
                    </p>
                  </div>

                  <div className="bg-violet-50 rounded p-4">
                    <h4 className="font-bold text-violet-900 text-lg mb-2">
                      14. forensic expert
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      криминалист / судмедэксперт
                    </p>
                    <p className="text-sm italic">
                      The <strong>forensic expert</strong> analyzed the DNA.
                    </p>
                  </div>

                  <div className="bg-rose-50 rounded p-4">
                    <h4 className="font-bold text-rose-900 text-lg mb-2">
                      15. accomplice
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">соучастник</p>
                    <p className="text-sm italic">
                      His <strong>accomplice</strong> was also arrested.
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
        <Section title="🚔 Police & Investigation">
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-400 mb-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              👮 Полиция и расследование
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-blue-300">
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      1. arrest
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      арест / арестовать
                    </p>
                    <p className="text-sm italic">
                      Police <strong>arrested</strong> the suspect.
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      2. investigate / investigation
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      расследовать / расследование
                    </p>
                    <p className="text-sm italic">
                      Police are <strong>investigating</strong> the crime.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      3. evidence
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      улики / доказательства
                    </p>
                    <p className="text-sm italic">
                      The <strong>evidence</strong> proved his guilt.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      4. clue
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      улика / зацепка
                    </p>
                    <p className="text-sm italic">
                      Detectives found an important <strong>clue</strong>.
                    </p>
                  </div>

                  <div className="bg-lime-50 rounded p-4">
                    <h4 className="font-bold text-lime-900 text-lg mb-2">
                      5. fingerprint
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      отпечаток пальца
                    </p>
                    <p className="text-sm italic">
                      They found his <strong>fingerprints</strong> at the scene.
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded p-4">
                    <h4 className="font-bold text-yellow-900 text-lg mb-2">
                      6. DNA
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">ДНК</p>
                    <p className="text-sm italic">
                      <strong>DNA</strong> evidence linked him to the crime.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      7. crime scene
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      место преступления
                    </p>
                    <p className="text-sm italic">
                      Police secured the <strong>crime scene</strong>.
                    </p>
                  </div>

                  <div className="bg-red-50 rounded p-4">
                    <h4 className="font-bold text-red-900 text-lg mb-2">
                      8. interrogate / question
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">допрашивать</p>
                    <p className="text-sm italic">
                      Police <strong>interrogated</strong> the suspect.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      9. confess / confession
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      признаться / признание
                    </p>
                    <p className="text-sm italic">
                      He <strong>confessed</strong> to the crime.
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      10. alibi
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">алиби</p>
                    <p className="text-sm italic">
                      He had a strong <strong>alibi</strong>.
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded p-4">
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">
                      11. surveillance camera / CCTV
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      камера наблюдения
                    </p>
                    <p className="text-sm italic">
                      <strong>CCTV</strong> footage captured the robbery.
                    </p>
                  </div>

                  <div className="bg-sky-50 rounded p-4">
                    <h4 className="font-bold text-sky-900 text-lg mb-2">
                      12. warrant
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">ордер</p>
                    <p className="text-sm italic">
                      Police obtained a search <strong>warrant</strong>.
                    </p>
                  </div>

                  <div className="bg-violet-50 rounded p-4">
                    <h4 className="font-bold text-violet-900 text-lg mb-2">
                      13. charge (with)
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">обвинить (в)</p>
                    <p className="text-sm italic">
                      He was <strong>charged with</strong> theft.
                    </p>
                  </div>

                  <div className="bg-rose-50 rounded p-4">
                    <h4 className="font-bold text-rose-900 text-lg mb-2">
                      14. bail
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">залог</p>
                    <p className="text-sm italic">
                      He was released on <strong>bail</strong>.
                    </p>
                  </div>

                  <div className="bg-amber-50 rounded p-4">
                    <h4 className="font-bold text-amber-900 text-lg mb-2">
                      15. handcuffs
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">наручники</p>
                    <p className="text-sm italic">
                      Police put <strong>handcuffs</strong> on the suspect.
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
        <Section title="⚖️ Court & Trial">
          <div className="bg-yellow-50 rounded-lg p-6 border-2 border-yellow-400 mb-6">
            <h3 className="text-2xl font-bold text-yellow-900 mb-4">
              🏛️ Суд и судебный процесс
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-yellow-300">
                <div className="space-y-4">
                  <div className="bg-red-50 rounded p-4">
                    <h4 className="font-bold text-red-900 text-lg mb-2">
                      1. trial
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      судебный процесс
                    </p>
                    <p className="text-sm italic">
                      The <strong>trial</strong> lasted three weeks.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      2. court / courtroom
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">суд / зал суда</p>
                    <p className="text-sm italic">
                      The case was heard in <strong>court</strong>.
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded p-4">
                    <h4 className="font-bold text-yellow-900 text-lg mb-2">
                      3. hearing
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">слушание</p>
                    <p className="text-sm italic">
                      The <strong>hearing</strong> begins tomorrow.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      4. plead guilty / not guilty
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      признать себя виновным / невиновным
                    </p>
                    <p className="text-sm italic">
                      He <strong>pleaded guilty</strong> to all charges.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      5. testify / testimony
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      давать показания / свидетельство
                    </p>
                    <p className="text-sm italic">
                      The witness <strong>testified</strong> under oath.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      6. verdict
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      вердикт / приговор
                    </p>
                    <p className="text-sm italic">
                      The jury reached a <strong>verdict</strong>.
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      7. guilty / innocent
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      виновный / невиновный
                    </p>
                    <p className="text-sm italic">
                      He was found <strong>guilty</strong> of murder.
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      8. acquit / acquittal
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      оправдать / оправдательный приговор
                    </p>
                    <p className="text-sm italic">
                      He was <strong>acquitted</strong> due to lack of evidence.
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded p-4">
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">
                      9. convict / conviction
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      осудить / осуждение
                    </p>
                    <p className="text-sm italic">
                      He was <strong>convicted</strong> of fraud.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      10. sentence
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      приговор / приговорить
                    </p>
                    <p className="text-sm italic">
                      The judge <strong>sentenced</strong> him to 5 years.
                    </p>
                  </div>

                  <div className="bg-lime-50 rounded p-4">
                    <h4 className="font-bold text-lime-900 text-lg mb-2">
                      11. appeal
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">апелляция</p>
                    <p className="text-sm italic">
                      He filed an <strong>appeal</strong> against the verdict.
                    </p>
                  </div>

                  <div className="bg-amber-50 rounded p-4">
                    <h4 className="font-bold text-amber-900 text-lg mb-2">
                      12. case
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">дело</p>
                    <p className="text-sm italic">
                      The <strong>case</strong> went to trial.
                    </p>
                  </div>

                  <div className="bg-sky-50 rounded p-4">
                    <h4 className="font-bold text-sky-900 text-lg mb-2">
                      13. sue / lawsuit
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      подать в суд / иск
                    </p>
                    <p className="text-sm italic">
                      She <strong>sued</strong> the company for damages.
                    </p>
                  </div>

                  <div className="bg-violet-50 rounded p-4">
                    <h4 className="font-bold text-violet-900 text-lg mb-2">
                      14. damages / compensation
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      возмещение ущерба / компенсация
                    </p>
                    <p className="text-sm italic">
                      He was awarded <strong>damages</strong> of $100,000.
                    </p>
                  </div>

                  <div className="bg-rose-50 rounded p-4">
                    <h4 className="font-bold text-rose-900 text-lg mb-2">
                      15. oath
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      клятва / присяга
                    </p>
                    <p className="text-sm italic">
                      Witnesses must swear an <strong>oath</strong>.
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
        <Section title="🔒 Punishment & Sentencing">
          <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-400 mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ⛓️ Наказания и приговоры
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-gray-300">
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded p-4">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">
                      1. punishment
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">наказание</p>
                    <p className="text-sm italic">
                      The <strong>punishment</strong> must fit the crime.
                    </p>
                  </div>

                  <div className="bg-red-50 rounded p-4">
                    <h4 className="font-bold text-red-900 text-lg mb-2">
                      2. prison / jail
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">тюрьма</p>
                    <p className="text-sm italic">
                      He was sent to <strong>prison</strong> for 10 years.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded p-4">
                    <h4 className="font-bold text-orange-900 text-lg mb-2">
                      3. life imprisonment / life sentence
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      пожизненное заключение
                    </p>
                    <p className="text-sm italic">
                      He received <strong>life imprisonment</strong>.
                    </p>
                  </div>

                  <div className="bg-yellow-50 rounded p-4">
                    <h4 className="font-bold text-yellow-900 text-lg mb-2">
                      4. death penalty / capital punishment
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">смертная казнь</p>
                    <p className="text-sm italic">
                      The <strong>death penalty</strong> is controversial.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      5. fine
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">штраф</p>
                    <p className="text-sm italic">
                      He had to pay a <strong>fine</strong> of $5,000.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      6. community service
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      общественные работы
                    </p>
                    <p className="text-sm italic">
                      She was ordered to do <strong>community service</strong>.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      7. probation
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">условный срок</p>
                    <p className="text-sm italic">
                      He was placed on <strong>probation</strong> for 2 years.
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      8. parole
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      условно-досрочное освобождение
                    </p>
                    <p className="text-sm italic">
                      He was released on <strong>parole</strong>.
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      9. suspended sentence
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      условный приговор
                    </p>
                    <p className="text-sm italic">
                      He received a <strong>suspended sentence</strong>.
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded p-4">
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">
                      10. juvenile detention
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      заключение для несовершеннолетних
                    </p>
                    <p className="text-sm italic">
                      Young offenders go to <strong>juvenile detention</strong>.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      11. inmate / prisoner
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">заключённый</p>
                    <p className="text-sm italic">
                      The <strong>inmate</strong> served 15 years.
                    </p>
                  </div>

                  <div className="bg-lime-50 rounded p-4">
                    <h4 className="font-bold text-lime-900 text-lg mb-2">
                      12. release
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">освобождение</p>
                    <p className="text-sm italic">
                      He was <strong>released</strong> after 10 years.
                    </p>
                  </div>

                  <div className="bg-amber-50 rounded p-4">
                    <h4 className="font-bold text-amber-900 text-lg mb-2">
                      13. rehabilitation
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">реабилитация</p>
                    <p className="text-sm italic">
                      <strong>Rehabilitation</strong> helps offenders reform.
                    </p>
                  </div>

                  <div className="bg-sky-50 rounded p-4">
                    <h4 className="font-bold text-sky-900 text-lg mb-2">
                      14. reoffend / recidivism
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      повторно совершить преступление / рецидив
                    </p>
                    <p className="text-sm italic">
                      Many offenders <strong>reoffend</strong> after release.
                    </p>
                  </div>

                  <div className="bg-violet-50 rounded p-4">
                    <h4 className="font-bold text-violet-900 text-lg mb-2">
                      15. criminal record
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">судимость</p>
                    <p className="text-sm italic">
                      He has a <strong>criminal record</strong>.
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
        <Section title="📜 Rights & Laws">
          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-400 mb-6">
            <h3 className="text-2xl font-bold text-green-900 mb-4">
              ⚖️ Права и законы
            </h3>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-green-300">
                <div className="space-y-4">
                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-900 text-lg mb-2">
                      1. law
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">закон</p>
                    <p className="text-sm italic">
                      Everyone must obey the <strong>law</strong>.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-bold text-blue-900 text-lg mb-2">
                      2. legal / illegal
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      законный / незаконный
                    </p>
                    <p className="text-sm italic">
                      Stealing is <strong>illegal</strong>.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-bold text-purple-900 text-lg mb-2">
                      3. justice
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      правосудие / справедливость
                    </p>
                    <p className="text-sm italic">
                      <strong>Justice</strong> must be served.
                    </p>
                  </div>

                  <div className="bg-pink-50 rounded p-4">
                    <h4 className="font-bold text-pink-900 text-lg mb-2">
                      4. human rights
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">права человека</p>
                    <p className="text-sm italic">
                      Everyone has <strong>human rights</strong>.
                    </p>
                  </div>

                  <div className="bg-cyan-50 rounded p-4">
                    <h4 className="font-bold text-cyan-900 text-lg mb-2">
                      5. right to remain silent
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      право хранить молчание
                    </p>
                    <p className="text-sm italic">
                      You have the <strong>right to remain silent</strong>.
                    </p>
                  </div>

                  <div className="bg-indigo-50 rounded p-4">
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">
                      6. presumption of innocence
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      презумпция невиновности
                    </p>
                    <p className="text-sm italic">
                      The <strong>presumption of innocence</strong> is
                      fundamental.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded p-4">
                    <h4 className="font-bold text-teal-900 text-lg mb-2">
                      7. fair trial
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      справедливый суд
                    </p>
                    <p className="text-sm italic">
                      Everyone deserves a <strong>fair trial</strong>.
                    </p>
                  </div>

                  <div className="bg-lime-50 rounded p-4">
                    <h4 className="font-bold text-lime-900 text-lg mb-2">
                      8. self-defense
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">самооборона</p>
                    <p className="text-sm italic">
                      He acted in <strong>self-defense</strong>.
                    </p>
                  </div>

                  <div className="bg-amber-50 rounded p-4">
                    <h4 className="font-bold text-amber-900 text-lg mb-2">
                      9. statute / legislation
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      статут / законодательство
                    </p>
                    <p className="text-sm italic">
                      New <strong>legislation</strong> was passed.
                    </p>
                  </div>

                  <div className="bg-sky-50 rounded p-4">
                    <h4 className="font-bold text-sky-900 text-lg mb-2">
                      10. enforce / enforcement
                    </h4>
                    <p className="text-sm text-zinc-700 mb-2">
                      применять / применение (закона)
                    </p>
                    <p className="text-sm italic">
                      Police <strong>enforce</strong> the law.
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
        <Section title="📖 Reading: The Trial of James Carter">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 border-2 border-indigo-300 mb-6">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">
              📚 Текст: The Trial of James Carter
            </h3>

            <div className="bg-white rounded-lg p-6 border-2 border-indigo-200 mb-4">
              <p className="text-base leading-relaxed mb-4">
                On a cold November evening, James Carter was{" "}
                <strong>arrested</strong> for <strong>robbery</strong> and{" "}
                <strong>assault</strong>. The <strong>victim</strong>, Mrs.
                Thompson, had been attacked outside her home, and her handbag
                containing $500 was stolen. <strong>Witnesses</strong> reported
                seeing a man matching Carter's description fleeing the{" "}
                <strong>crime scene</strong>.
              </p>

              <p className="text-base leading-relaxed mb-4">
                <strong>Detectives</strong> launched an{" "}
                <strong>investigation</strong>. They found Carter's{" "}
                <strong>fingerprints</strong> on Mrs. Thompson's car, and{" "}
                <strong>CCTV footage</strong> from a nearby shop showed him
                running away moments after the attack. When police{" "}
                <strong>interrogated</strong> Carter, he initially denied
                involvement, claiming he had an <strong>alibi</strong>. However,
                the <strong>evidence</strong> was overwhelming.
              </p>

              <p className="text-base leading-relaxed mb-4">
                Carter was <strong>charged with</strong> robbery and assault and
                held in custody. Unable to pay <strong>bail</strong>, he
                remained in jail until his <strong>trial</strong>. At the first{" "}
                <strong>hearing</strong>, Carter{" "}
                <strong>pleaded not guilty</strong>. His <strong>lawyer</strong>{" "}
                argued that the fingerprints could have been left at another
                time and that the CCTV image was unclear.
              </p>

              <p className="text-base leading-relaxed mb-4">
                During the <strong>trial</strong>, the{" "}
                <strong>prosecutor</strong> presented compelling evidence. Mrs.
                Thompson <strong>testified</strong> under <strong>oath</strong>,
                identifying Carter as her attacker. A{" "}
                <strong>forensic expert</strong> confirmed that Carter's{" "}
                <strong>DNA</strong> was found on Mrs. Thompson's handbag. The{" "}
                <strong>jury</strong> deliberated for two days before reaching a{" "}
                <strong>verdict</strong>.
              </p>

              <p className="text-base leading-relaxed">
                Carter was found <strong>guilty</strong> on both charges. The{" "}
                <strong>judge</strong> <strong>sentenced</strong> him to 8 years
                in <strong>prison</strong>. Carter's lawyer filed an{" "}
                <strong>appeal</strong>, arguing that the trial was unfair, but
                it was rejected. Carter is now serving his{" "}
                <strong>sentence</strong> and will be eligible for{" "}
                <strong>parole</strong> after 5 years. This case demonstrates
                how the <strong>legal system</strong> works to ensure{" "}
                <strong>justice</strong> is served.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6 border-2 border-indigo-300">
              <h4 className="text-xl font-bold text-indigo-900 mb-3">
                💡 Comprehension Questions
              </h4>

              <div className="space-y-3">
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    1. What crimes was James Carter charged with?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → Robbery and assault.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    2. What evidence linked Carter to the crime?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → Fingerprints, CCTV footage, and DNA on the victim's
                    handbag.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    3. What was the jury's verdict?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → Guilty on both charges.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    4. What sentence did Carter receive?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → 8 years in prison, eligible for parole after 5 years.
                  </p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-sm mb-2">
                    5. What happened to Carter's appeal?
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    → It was rejected.
                  </p>
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
        <Section title="✍️ Practice Exercises">
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-400 mb-6">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              📝 Упражнение 1: Fill in the Blanks
            </h3>

            <p className="text-sm text-gray-700 mb-4">
              Choose the correct word from the list:{" "}
              <strong>
                arrested, trial, guilty, evidence, witness, sentence, lawyer,
                crime, jury, suspect
              </strong>
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-5 border-2 border-blue-300">
                <CheckableExercise
                  items={[
                    {
                      left: "1. The police",
                      answers: ["arrested"],
                      right: "the suspect.",
                      wide: true,
                    },
                    {
                      left: "2. The",
                      answers: ["witness"],
                      right: "saw the crime happen.",
                      wide: true,
                    },
                    {
                      left: "3. The",
                      answers: ["evidence"],
                      right: "proved his guilt.",
                      wide: true,
                    },
                    {
                      left: "4. The",
                      answers: ["trial"],
                      right: "lasted three weeks.",
                      wide: true,
                    },
                    {
                      left: "5. The",
                      answers: ["jury"],
                      right: "found him guilty.",
                      wide: true,
                    },
                    {
                      left: "6. He was found",
                      answers: ["guilty"],
                      right: "of murder.",
                      wide: true,
                    },
                    {
                      left: "7. The judge gave him a 10-year",
                      answers: ["sentence"],
                      right: ".",
                      wide: true,
                    },
                    {
                      left: "8. His",
                      answers: ["lawyer"],
                      right: "defended him in court.",
                      wide: true,
                    },
                    {
                      left: "9. He committed a serious",
                      answers: ["crime"],
                      right: ".",
                      wide: true,
                    },
                    {
                      left: "10. The",
                      answers: ["suspect"],
                      right: "was interrogated by police.",
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
                      left: "1. Полиция расследует преступление:",
                      answers: [
                        "The police are investigating the crime",
                        "Police are investigating the crime",
                      ],
                      wide: true,
                    },
                    {
                      left: "2. Он был признан виновным:",
                      answers: ["He was found guilty", "He was convicted"],
                      wide: true,
                    },
                    {
                      left: "3. Свидетель дал показания в суде:",
                      answers: [
                        "The witness testified in court",
                        "A witness testified in court",
                      ],
                      wide: true,
                    },
                    {
                      left: "4. Его приговорили к 5 годам тюрьмы:",
                      answers: [
                        "He was sentenced to 5 years in prison",
                        "He was sentenced to five years in prison",
                      ],
                      wide: true,
                    },
                    {
                      left: "5. Все имеют право на справедливый суд:",
                      answers: [
                        "Everyone has the right to a fair trial",
                        "Everyone has a right to a fair trial",
                      ],
                      wide: true,
                    },
                    {
                      left: "6. Он был освобождён под залог:",
                      answers: ["He was released on bail"],
                      wide: true,
                    },
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="bg-orange-50 rounded-lg p-6 border-2 border-orange-400 mb-6">
            <h3 className="text-2xl font-bold text-orange-900 mb-4">
              📝 Упражнение 3: Match the Crime with the Definition
            </h3>

            <div className="space-y-3">
              <div className="bg-white rounded p-4">
                <p className="font-bold text-sm mb-2">1. Theft</p>
                <p className="text-sm text-gray-700 italic">
                  → Stealing something from someone
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-sm mb-2">2. Murder</p>
                <p className="text-sm text-gray-700 italic">
                  → Illegally killing someone
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-sm mb-2">3. Fraud</p>
                <p className="text-sm text-gray-700 italic">
                  → Deceiving someone for money
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-sm mb-2">4. Kidnapping</p>
                <p className="text-sm text-gray-700 italic">
                  → Taking someone by force and holding them captive
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-sm mb-2">5. Vandalism</p>
                <p className="text-sm text-gray-700 italic">
                  → Deliberately damaging property
                </p>
              </div>

              <div className="bg-white rounded p-4">
                <p className="font-bold text-sm mb-2">6. Arson</p>
                <p className="text-sm text-gray-700 italic">
                  → Deliberately setting fire to property
                </p>
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
        <Section title="📚 Complete Vocabulary List — 100 Words">
          <div className="bg-gradient-to-br from-red-50 to-purple-50 rounded-lg p-6 border-2 border-red-300 mb-6">
            <h3 className="text-2xl font-bold text-red-900 mb-4">
              🎓 Полный список всех изученных слов
            </h3>

            <p className="text-sm text-gray-700 mb-4">
              Все 100 слов по теме Crime & Law, которые вы освоили!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* TYPES OF CRIMES */}
              <div className="bg-white rounded-lg p-4 border-2 border-red-300">
                <h4 className="font-bold text-lg text-red-900 mb-2">
                  🔴 Types of Crimes (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• crime</li>
                  <li>• commit a crime</li>
                  <li>• theft / stealing</li>
                  <li>• robbery / burglary</li>
                  <li>• murder / homicide</li>
                  <li>• assault</li>
                  <li>• fraud</li>
                  <li>• kidnapping</li>
                  <li>• drug trafficking</li>
                  <li>• vandalism</li>
                  <li>• arson</li>
                  <li>• shoplifting</li>
                  <li>• cybercrime</li>
                  <li>• hacking</li>
                  <li>• bribery / corruption</li>
                </ul>
              </div>

              {/* PEOPLE */}
              <div className="bg-white rounded-lg p-4 border-2 border-purple-300">
                <h4 className="font-bold text-lg text-purple-900 mb-2">
                  👥 People in Legal System (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• criminal / offender</li>
                  <li>• suspect</li>
                  <li>• victim</li>
                  <li>• witness</li>
                  <li>• judge</li>
                  <li>• jury</li>
                  <li>• lawyer / attorney</li>
                  <li>• prosecutor</li>
                  <li>• defendant / accused</li>
                  <li>• police officer</li>
                  <li>• detective</li>
                  <li>• prison guard</li>
                  <li>• bailiff</li>
                  <li>• forensic expert</li>
                  <li>• accomplice</li>
                </ul>
              </div>

              {/* POLICE */}
              <div className="bg-white rounded-lg p-4 border-2 border-blue-300">
                <h4 className="font-bold text-lg text-blue-900 mb-2">
                  🚔 Police & Investigation (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• arrest</li>
                  <li>• investigate / investigation</li>
                  <li>• evidence</li>
                  <li>• clue</li>
                  <li>• fingerprint</li>
                  <li>• DNA</li>
                  <li>• crime scene</li>
                  <li>• interrogate / question</li>
                  <li>• confess / confession</li>
                  <li>• alibi</li>
                  <li>• surveillance camera / CCTV</li>
                  <li>• warrant</li>
                  <li>• charge (with)</li>
                  <li>• bail</li>
                  <li>• handcuffs</li>
                </ul>
              </div>

              {/* COURT */}
              <div className="bg-white rounded-lg p-4 border-2 border-yellow-300">
                <h4 className="font-bold text-lg text-yellow-900 mb-2">
                  ⚖️ Court & Trial (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• trial</li>
                  <li>• court / courtroom</li>
                  <li>• hearing</li>
                  <li>• plead guilty / not guilty</li>
                  <li>• testify / testimony</li>
                  <li>• verdict</li>
                  <li>• guilty / innocent</li>
                  <li>• acquit / acquittal</li>
                  <li>• convict / conviction</li>
                  <li>• sentence</li>
                  <li>• appeal</li>
                  <li>• case</li>
                  <li>• sue / lawsuit</li>
                  <li>• damages / compensation</li>
                  <li>• oath</li>
                </ul>
              </div>

              {/* PUNISHMENT */}
              <div className="bg-white rounded-lg p-4 border-2 border-gray-400">
                <h4 className="font-bold text-lg text-gray-900 mb-2">
                  🔒 Punishment & Sentencing (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• punishment</li>
                  <li>• prison / jail</li>
                  <li>• life imprisonment</li>
                  <li>• death penalty</li>
                  <li>• fine</li>
                  <li>• community service</li>
                  <li>• probation</li>
                  <li>• parole</li>
                  <li>• suspended sentence</li>
                  <li>• juvenile detention</li>
                  <li>• inmate / prisoner</li>
                  <li>• release</li>
                  <li>• rehabilitation</li>
                  <li>• reoffend / recidivism</li>
                  <li>• criminal record</li>
                </ul>
              </div>

              {/* RIGHTS & LAWS */}
              <div className="bg-white rounded-lg p-4 border-2 border-green-300">
                <h4 className="font-bold text-lg text-green-900 mb-2">
                  📜 Rights & Laws (10)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• law</li>
                  <li>• legal / illegal</li>
                  <li>• justice</li>
                  <li>• human rights</li>
                  <li>• right to remain silent</li>
                  <li>• presumption of innocence</li>
                  <li>• fair trial</li>
                  <li>• self-defense</li>
                  <li>• statute / legislation</li>
                  <li>• enforce / enforcement</li>
                </ul>
              </div>

              {/* ADDITIONAL */}
              <div className="bg-white rounded-lg p-4 border-2 border-indigo-300">
                <h4 className="font-bold text-lg text-indigo-900 mb-2">
                  ➕ Additional Vocabulary (15)
                </h4>
                <ul className="text-sm space-y-1">
                  <li>• guilty / not guilty</li>
                  <li>• innocent</li>
                  <li>• accuse / accusation</li>
                  <li>• break the law</li>
                  <li>• obey the law</li>
                  <li>• criminal justice system</li>
                  <li>• serve a sentence</li>
                  <li>• behind bars (idiom)</li>
                  <li>• get away with (escape punishment)</li>
                  <li>• above the law (idiom)</li>
                  <li>• law enforcement</li>
                  <li>• legal system</li>
                  <li>• court case</li>
                  <li>• criminal offense</li>
                  <li>• misdemeanor / felony</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-100 to-purple-100 rounded-lg p-6 mt-6 border-2 border-red-300">
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                🎯 Итого изучено:
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white rounded p-3">
                  <p className="text-3xl font-bold text-red-900">100</p>
                  <p className="text-sm text-gray-700">Words</p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-3xl font-bold text-purple-900">1</p>
                  <p className="text-sm text-gray-700">Reading Text</p>
                </div>
                <div className="bg-white rounded p-3">
                  <p className="text-3xl font-bold text-blue-900">3</p>
                  <p className="text-sm text-gray-700">Practice Exercises</p>
                </div>
              </div>

              <div className="mt-4 bg-white rounded-lg p-4">
                <p className="text-sm text-gray-800 text-center">
                  ⚖️ <strong>Congratulations!</strong> You've mastered 100
                  essential Crime & Law vocabulary words covering crimes, legal
                  system, police work, court procedures, punishments, and
                  rights. You can now understand crime news, legal discussions,
                  and detective stories in English!
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




