"use client";

import { useState } from "react";

interface Props {
  step: number;
}

// Liquid Glass стили
const glassCard = "relative rounded-[28px] bg-gradient-to-br from-white/70 via-white/50 to-white/30 backdrop-blur-2xl border border-white/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),inset_0_-1px_1px_rgba(0,0,0,0.05),0_20px_50px_-15px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.2)]";

const glassCardInner = "rounded-[20px] bg-gradient-to-br from-white/50 via-white/30 to-white/20 backdrop-blur-xl border border-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(0,0,0,0.03)]";

const glassButton = "rounded-2xl bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-xl border border-white/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_8px_20px_rgba(0,0,0,0.12)] transition-all duration-300";

const glassTag = "px-3 py-1.5 rounded-full bg-gradient-to-r from-white/60 to-white/40 backdrop-blur-lg border border-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]";

export default function BusinessCorrespondence({ step }: Props) {
  // STEP 1: Введение
  if (step === 1) {
    return (
      <div className="min-h-screen p-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Hero Section */}
          <div className="text-center py-10">
            <div className={`inline-flex items-center justify-center w-24 h-24 ${glassCard} mb-6`}>
              <span className="text-5xl">✉️</span>
            </div>
            <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-600 bg-clip-text text-transparent">
              Business Correspondence
            </h1>
            <p className="text-lg text-zinc-500">Деловая переписка на английском</p>
          </div>

          {/* Main Card */}
          <div className={`${glassCard} p-8`}>
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />

            <h2 className="text-2xl font-semibold text-zinc-800 mb-4 relative">Что такое деловая переписка?</h2>
            <p className="text-zinc-600 leading-relaxed mb-6 relative">
              Деловая переписка — это официальное общение в бизнес-среде.
              Правильный стиль, тон и формулировки создают профессиональное впечатление
              и помогают достигать бизнес-целей. В этом уроке вы научитесь писать
              письма и email на английском языке.
            </p>

            <div className="grid md:grid-cols-2 gap-4 relative">
              <div className={`${glassCardInner} p-5`}>
                <h3 className="font-semibold text-zinc-700 mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-blue-100/80 flex items-center justify-center text-blue-600">📋</span>
                  Типы писем
                </h3>
                <ul className="text-zinc-600 text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Inquiry letters — запросы
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Complaint letters — жалобы
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Cover letters — сопроводительные
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Follow-up letters — follow-up письма
                  </li>
                </ul>
              </div>
              <div className={`${glassCardInner} p-5`}>
                <h3 className="font-semibold text-zinc-700 mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-indigo-100/80 flex items-center justify-center text-indigo-600">🎯</span>
                  Ключевые принципы
                </h3>
                <ul className="text-zinc-600 text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    Clarity — ясность
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    Conciseness — краткость
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    Courtesy — вежливость
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    Correctness — правильность
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Vocabulary */}
          <div className={`${glassCard} p-8`}>
            <h2 className="text-xl font-semibold text-zinc-800 mb-5">Базовая лексика</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { en: "recipient", ru: "получатель" },
                { en: "subject line", ru: "тема письма" },
                { en: "attachment", ru: "вложение" },
                { en: "signature", ru: "подпись" },
                { en: "correspondence", ru: "переписка" },
                { en: "addressee", ru: "адресат" },
              ].map((item, i) => (
                <div key={i} className={`${glassButton} flex items-center justify-between p-4`}>
                  <span className="font-medium text-zinc-800">{item.en}</span>
                  <span className="text-zinc-500">{item.ru}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // STEP 2: Структура письма
  if (step === 2) {
    return (
      <div className="min-h-screen p-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center py-6">
            <h1 className="text-3xl font-bold text-zinc-800 mb-2">Letter Structure</h1>
            <p className="text-zinc-500">Структура делового письма</p>
          </div>

          <div className={`${glassCard} p-8`}>
            <p className="text-zinc-600 mb-8">
              Каждое деловое письмо имеет чёткую структуру. Соблюдение формата показывает
              ваш профессионализм и облегчает восприятие информации.
            </p>

            <div className="space-y-4">
              {[
                { num: 1, title: "Sender's Address", titleRu: "Адрес отправителя", desc: "Ваш адрес (без имени) в правом верхнем углу", example: "123 Business St.\nNew York, NY 10001" },
                { num: 2, title: "Date", titleRu: "Дата", desc: "Полная дата под адресом", example: "15 December 2024" },
                { num: 3, title: "Recipient's Address", titleRu: "Адрес получателя", desc: "Имя, должность, компания, адрес получателя", example: "Mr. John Smith\nHR Manager\nABC Company" },
                { num: 4, title: "Salutation", titleRu: "Приветствие", desc: "Официальное обращение", example: "Dear Mr. Smith," },
                { num: 5, title: "Body", titleRu: "Основная часть", desc: "Вступление, суть, заключение", example: "I am writing to inquire about..." },
                { num: 6, title: "Closing", titleRu: "Завершение", desc: "Вежливое прощание", example: "Yours sincerely," },
                { num: 7, title: "Signature", titleRu: "Подпись", desc: "Ваше имя и должность", example: "Jane Doe\nSales Manager" },
              ].map((item) => (
                <div key={item.num} className={`${glassCardInner} p-5`}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-blue-600 font-bold shadow-inner shrink-0">
                      {item.num}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-zinc-800">{item.title}</h3>
                        <span className="text-zinc-400">—</span>
                        <span className="text-zinc-500 text-sm">{item.titleRu}</span>
                      </div>
                      <p className="text-zinc-500 text-sm mb-2">{item.desc}</p>
                      <div className="bg-white/40 rounded-xl p-3 border border-white/20">
                        <pre className="text-zinc-700 text-sm font-mono whitespace-pre-wrap">{item.example}</pre>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // STEP 3: Приветствия
  if (step === 3) {
    return (
      <div className="min-h-screen p-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center py-6">
            <h1 className="text-3xl font-bold text-zinc-800 mb-2">Salutations</h1>
            <p className="text-zinc-500">Приветствия в деловой переписке</p>
          </div>

          <div className={`${glassCard} p-8`}>
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

            <p className="text-zinc-600 mb-6 relative">
              Выбор приветствия зависит от того, знаете ли вы имя получателя и насколько формальны ваши отношения.
            </p>

            <div className="grid gap-6 relative">
              {/* Formal - Unknown */}
              <div className={`${glassCardInner} p-6`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`${glassTag} text-xs font-medium text-zinc-600`}>Очень формально</span>
                  <span className="text-zinc-400 text-sm">Имя неизвестно</span>
                </div>
                <div className="space-y-3">
                  {[
                    { en: "Dear Sir or Madam,", ru: "Уважаемый господин или госпожа" },
                    { en: "To Whom It May Concern,", ru: "Всем заинтересованным лицам" },
                    { en: "Dear Hiring Manager,", ru: "Уважаемый менеджер по найму" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/40 border border-white/20">
                      <span className="font-medium text-zinc-800">{item.en}</span>
                      <span className="text-zinc-500 text-sm">{item.ru}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Formal - Known */}
              <div className={`${glassCardInner} p-6`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`${glassTag} text-xs font-medium text-zinc-600`}>Формально</span>
                  <span className="text-zinc-400 text-sm">Имя известно</span>
                </div>
                <div className="space-y-3">
                  {[
                    { en: "Dear Mr. Smith,", ru: "Уважаемый мистер Смит" },
                    { en: "Dear Ms. Johnson,", ru: "Уважаемая мисс/миссис Джонсон" },
                    { en: "Dear Dr. Williams,", ru: "Уважаемый доктор Уильямс" },
                    { en: "Dear Professor Brown,", ru: "Уважаемый профессор Браун" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/40 border border-white/20">
                      <span className="font-medium text-zinc-800">{item.en}</span>
                      <span className="text-zinc-500 text-sm">{item.ru}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Less Formal */}
              <div className={`${glassCardInner} p-6`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`${glassTag} text-xs font-medium text-zinc-600`}>Менее формально</span>
                  <span className="text-zinc-400 text-sm">Email или знакомые контакты</span>
                </div>
                <div className="space-y-3">
                  {[
                    { en: "Dear John,", ru: "Дорогой Джон" },
                    { en: "Hello Sarah,", ru: "Здравствуйте, Сара" },
                    { en: "Hi Team,", ru: "Привет, команда" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/40 border border-white/20">
                      <span className="font-medium text-zinc-800">{item.en}</span>
                      <span className="text-zinc-500 text-sm">{item.ru}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Note about Ms. */}
          <div className={`${glassCard} p-6`}>
            <div className="flex items-start gap-4">
              <span className="text-2xl">💡</span>
              <div>
                <h3 className="font-semibold text-zinc-800 mb-2">Ms. vs Mrs. vs Miss</h3>
                <p className="text-zinc-600 text-sm">
                  <strong>Ms.</strong> — универсальное обращение к женщине (не указывает семейное положение).
                  Используйте его, если не уверены. <strong>Mrs.</strong> — для замужних, <strong>Miss</strong> — для незамужних.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // STEP 4: Вступительные фразы
  if (step === 4) {
    return (
      <div className="min-h-screen p-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center py-6">
            <h1 className="text-3xl font-bold text-zinc-800 mb-2">Opening Lines</h1>
            <p className="text-zinc-500">Вступительные фразы</p>
          </div>

          <div className={`${glassCard} p-8`}>
            <p className="text-zinc-600 mb-6">
              Первое предложение сразу показывает цель вашего письма. Начинайте чётко и профессионально.
            </p>

            <div className="space-y-4">
              {[
                { purpose: "Запрос информации", purposeEn: "Inquiry", phrases: [
                  { en: "I am writing to inquire about...", ru: "Я пишу, чтобы узнать о..." },
                  { en: "I would like to request information regarding...", ru: "Я хотел бы запросить информацию о..." },
                ]},
                { purpose: "Подача заявки", purposeEn: "Application", phrases: [
                  { en: "I am writing to apply for the position of...", ru: "Я пишу, чтобы подать заявку на позицию..." },
                  { en: "I wish to express my interest in...", ru: "Я хочу выразить свой интерес к..." },
                ]},
                { purpose: "Жалоба", purposeEn: "Complaint", phrases: [
                  { en: "I am writing to express my dissatisfaction with...", ru: "Я пишу, чтобы выразить неудовлетворённость..." },
                  { en: "I regret to inform you that...", ru: "С сожалением сообщаю, что..." },
                ]},
                { purpose: "Благодарность", purposeEn: "Thank you", phrases: [
                  { en: "Thank you for your email dated...", ru: "Спасибо за ваше письмо от..." },
                  { en: "I am grateful for your prompt response.", ru: "Благодарю за ваш быстрый ответ." },
                ]},
                { purpose: "Ответ", purposeEn: "Response", phrases: [
                  { en: "In response to your inquiry...", ru: "В ответ на ваш запрос..." },
                  { en: "Further to our telephone conversation...", ru: "Вслед за нашим телефонным разговором..." },
                ]},
              ].map((group, i) => (
                <div key={i} className={`${glassCardInner} p-5`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`${glassTag} text-xs font-semibold text-indigo-600`}>{group.purposeEn}</span>
                    <span className="text-zinc-500 text-sm">{group.purpose}</span>
                  </div>
                  <div className="space-y-2">
                    {group.phrases.map((phrase, j) => (
                      <div key={j} className="p-3 rounded-xl bg-white/40 border border-white/20">
                        <p className="font-medium text-zinc-800 text-sm mb-1">{phrase.en}</p>
                        <p className="text-zinc-500 text-xs">{phrase.ru}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // STEP 5: Основная часть - Запросы
  if (step === 5) {
    return (
      <div className="min-h-screen p-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center py-6">
            <h1 className="text-3xl font-bold text-zinc-800 mb-2">Making Requests</h1>
            <p className="text-zinc-500">Как вежливо просить о чём-либо</p>
          </div>

          <div className={`${glassCard} p-8`}>
            <p className="text-zinc-600 mb-6">
              В деловой переписке важно формулировать просьбы вежливо и профессионально.
              Используйте модальные глаголы и условные конструкции для смягчения тона.
            </p>

            <div className="grid gap-4">
              {[
                { level: "Вежливо", color: "green", phrases: [
                  { en: "Could you please send me...", ru: "Не могли бы вы отправить мне..." },
                  { en: "Would it be possible to...", ru: "Было бы возможно..." },
                  { en: "I would appreciate it if you could...", ru: "Я был бы признателен, если бы вы могли..." },
                ]},
                { level: "Очень вежливо", color: "blue", phrases: [
                  { en: "I would be most grateful if you could...", ru: "Я был бы очень признателен, если бы вы могли..." },
                  { en: "Would you be so kind as to...", ru: "Будьте так добры..." },
                  { en: "I was wondering if you might be able to...", ru: "Мне хотелось бы узнать, могли бы вы..." },
                ]},
                { level: "Для срочных запросов", color: "amber", phrases: [
                  { en: "I would appreciate your prompt attention to this matter.", ru: "Буду признателен за скорое внимание к этому вопросу." },
                  { en: "Please treat this as a matter of urgency.", ru: "Пожалуйста, отнеситесь к этому как к срочному вопросу." },
                  { en: "Your earliest response would be appreciated.", ru: "Буду благодарен за ваш скорейший ответ." },
                ]},
              ].map((group, i) => (
                <div key={i} className={`${glassCardInner} p-5`}>
                  <h3 className="font-semibold text-zinc-800 mb-3 flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full bg-${group.color}-400`} />
                    {group.level}
                  </h3>
                  <div className="space-y-2">
                    {group.phrases.map((phrase, j) => (
                      <div key={j} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 rounded-xl bg-white/40 border border-white/20 gap-1">
                        <span className="font-medium text-zinc-800 text-sm">{phrase.en}</span>
                        <span className="text-zinc-500 text-xs sm:text-sm">{phrase.ru}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bad vs Good Example */}
          <div className={`${glassCard} p-6`}>
            <h3 className="font-semibold text-zinc-800 mb-4">Сравните:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-gradient-to-br from-red-50 to-red-100/50 border border-red-200/50">
                <p className="text-xs text-red-600 mb-2 font-medium">❌ Слишком прямо</p>
                <p className="text-zinc-700 text-sm">Send me the report.</p>
                <p className="text-zinc-500 text-xs mt-1">Отправьте мне отчёт.</p>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200/50">
                <p className="text-xs text-green-600 mb-2 font-medium">✓ Вежливо</p>
                <p className="text-zinc-700 text-sm">Could you please send me the report at your earliest convenience?</p>
                <p className="text-zinc-500 text-xs mt-1">Не могли бы вы отправить мне отчёт при первой возможности?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // STEP 6: Заключительные фразы
  if (step === 6) {
    return (
      <div className="min-h-screen p-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center py-6">
            <h1 className="text-3xl font-bold text-zinc-800 mb-2">Closing Lines</h1>
            <p className="text-zinc-500">Заключительные фразы перед подписью</p>
          </div>

          <div className={`${glassCard} p-8`}>
            <p className="text-zinc-600 mb-6">
              Заключительные фразы подводят итог письма и указывают на ожидаемые действия.
            </p>

            <div className="space-y-4">
              {[
                { en: "I look forward to hearing from you.", ru: "С нетерпением жду вашего ответа." },
                { en: "I look forward to your reply.", ru: "Жду вашего ответа." },
                { en: "Please do not hesitate to contact me if you have any questions.", ru: "Пожалуйста, не стесняйтесь связаться со мной, если у вас есть вопросы." },
                { en: "Should you require any further information, please let me know.", ru: "Если вам потребуется дополнительная информация, пожалуйста, сообщите мне." },
                { en: "Thank you for your time and consideration.", ru: "Спасибо за ваше время и внимание." },
                { en: "I would appreciate a response at your earliest convenience.", ru: "Буду признателен за ответ при первой возможности." },
                { en: "Please find attached the requested documents.", ru: "Во вложении запрошенные документы." },
                { en: "Enclosed please find the contract for your review.", ru: "В приложении контракт для вашего рассмотрения." },
              ].map((item, i) => (
                <div key={i} className={`${glassButton} p-4`}>
                  <p className="font-medium text-zinc-800 mb-1">{item.en}</p>
                  <p className="text-zinc-500 text-sm">{item.ru}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tip */}
          <div className={`${glassCard} p-6`}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center shrink-0 shadow-inner">
                <span className="text-2xl">📎</span>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-800 mb-2">Attached vs Enclosed</h3>
                <p className="text-zinc-600 text-sm">
                  <strong>Attached</strong> используется для email ("Please find attached...").
                  <strong> Enclosed</strong> — для традиционных писем с физическими вложениями ("Enclosed please find...").
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // STEP 7: Подписи
  if (step === 7) {
    return (
      <div className="min-h-screen p-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center py-6">
            <h1 className="text-3xl font-bold text-zinc-800 mb-2">Sign-offs</h1>
            <p className="text-zinc-500">Yours faithfully vs Yours sincerely</p>
          </div>

          <div className={`${glassCard} p-8`}>
            <p className="text-zinc-600 mb-6">
              Выбор завершающей фразы зависит от того, как вы обратились к получателю в начале письма.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Yours faithfully */}
              <div className={`${glassCardInner} p-6`}>
                <div className="text-center mb-4">
                  <span className="text-4xl mb-3 block">📜</span>
                  <h3 className="text-xl font-bold text-zinc-800">Yours faithfully</h3>
                  <p className="text-zinc-500 text-sm mt-1">С уважением (формально)</p>
                </div>
                <div className="bg-white/40 rounded-xl p-4 border border-white/20 mb-4">
                  <p className="text-zinc-600 text-sm">
                    Используется, когда вы <strong>НЕ знаете</strong> имя получателя
                  </p>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-zinc-500">После:</p>
                  <ul className="text-zinc-700 space-y-1">
                    <li>• Dear Sir or Madam,</li>
                    <li>• To Whom It May Concern,</li>
                    <li>• Dear Hiring Manager,</li>
                  </ul>
                </div>
              </div>

              {/* Yours sincerely */}
              <div className={`${glassCardInner} p-6`}>
                <div className="text-center mb-4">
                  <span className="text-4xl mb-3 block">✍️</span>
                  <h3 className="text-xl font-bold text-zinc-800">Yours sincerely</h3>
                  <p className="text-zinc-500 text-sm mt-1">Искренне ваш</p>
                </div>
                <div className="bg-white/40 rounded-xl p-4 border border-white/20 mb-4">
                  <p className="text-zinc-600 text-sm">
                    Используется, когда вы <strong>ЗНАЕТЕ</strong> имя получателя
                  </p>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-zinc-500">После:</p>
                  <ul className="text-zinc-700 space-y-1">
                    <li>• Dear Mr. Smith,</li>
                    <li>• Dear Ms. Johnson,</li>
                    <li>• Dear Dr. Williams,</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Other sign-offs */}
          <div className={`${glassCard} p-8`}>
            <h3 className="font-semibold text-zinc-800 mb-4">Другие варианты завершения:</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { en: "Best regards,", ru: "С наилучшими пожеланиями", level: "Semi-formal" },
                { en: "Kind regards,", ru: "С добрыми пожеланиями", level: "Semi-formal" },
                { en: "Regards,", ru: "С уважением", level: "Neutral" },
                { en: "Respectfully,", ru: "С уважением", level: "Formal" },
                { en: "With gratitude,", ru: "С благодарностью", level: "After help" },
                { en: "Many thanks,", ru: "Большое спасибо", level: "Informal" },
              ].map((item, i) => (
                <div key={i} className={`${glassButton} p-4 flex items-center justify-between`}>
                  <div>
                    <p className="font-medium text-zinc-800">{item.en}</p>
                    <p className="text-zinc-500 text-sm">{item.ru}</p>
                  </div>
                  <span className={`${glassTag} text-xs text-zinc-600`}>{item.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Memory tip */}
          <div className={`${glassCard} p-6`}>
            <div className="flex items-start gap-4">
              <span className="text-2xl">🧠</span>
              <div>
                <h3 className="font-semibold text-zinc-800 mb-2">Как запомнить?</h3>
                <p className="text-zinc-600 text-sm">
                  <strong>F + F = Faithfully</strong> → "Dear Sir" не содержит имени = Faithfully<br />
                  <strong>S + S = Sincerely</strong> → "Dear Mr. <u>S</u>mith" содержит имя = Sincerely
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // STEP 8: Email этикет
  if (step === 8) {
    return (
      <div className="min-h-screen p-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center py-6">
            <h1 className="text-3xl font-bold text-zinc-800 mb-2">Email Etiquette</h1>
            <p className="text-zinc-500">Правила деловой email-переписки</p>
          </div>

          <div className={`${glassCard} p-8`}>
            <div className="grid gap-4">
              {[
                { icon: "📧", title: "Subject Line", titleRu: "Тема письма", tips: [
                  "Краткая и информативная (5-7 слов)",
                  "Отражает содержание: 'Meeting Request: Q4 Budget Review'",
                  "Избегайте CAPS LOCK и восклицательных знаков",
                ]},
                { icon: "👋", title: "Greeting", titleRu: "Приветствие", tips: [
                  "Менее формально, чем в письмах: 'Dear John,' или 'Hello Sarah,'",
                  "Для групп: 'Dear All,' или 'Hi Team,'",
                  "Избегайте 'Hey' в деловой переписке",
                ]},
                { icon: "📝", title: "Body", titleRu: "Текст", tips: [
                  "Короткие абзацы (3-4 предложения)",
                  "Одна тема — одно письмо",
                  "Bullet points для списков",
                ]},
                { icon: "✍️", title: "Signature", titleRu: "Подпись", tips: [
                  "Имя, должность, компания",
                  "Контактные данные",
                  "Не более 4-5 строк",
                ]},
              ].map((section, i) => (
                <div key={i} className={`${glassCardInner} p-5`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{section.icon}</span>
                    <div>
                      <h3 className="font-semibold text-zinc-800">{section.title}</h3>
                      <p className="text-zinc-500 text-sm">{section.titleRu}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {section.tips.map((tip, j) => (
                      <li key={j} className="flex items-start gap-2 text-zinc-600 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* CC vs BCC */}
          <div className={`${glassCard} p-6`}>
            <h3 className="font-semibold text-zinc-800 mb-4">CC vs BCC</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className={`${glassCardInner} p-4`}>
                <h4 className="font-medium text-zinc-800 mb-2">CC (Carbon Copy)</h4>
                <p className="text-zinc-600 text-sm">
                  Все получатели видят друг друга. Используйте, когда нужно держать коллег в курсе.
                </p>
              </div>
              <div className={`${glassCardInner} p-4`}>
                <h4 className="font-medium text-zinc-800 mb-2">BCC (Blind Carbon Copy)</h4>
                <p className="text-zinc-600 text-sm">
                  Скрытая копия. Получатели не видят друг друга. Для массовых рассылок или конфиденциальности.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // STEP 9: Формальные фразы
  if (step === 9) {
    return (
      <div className="min-h-screen p-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center py-6">
            <h1 className="text-3xl font-bold text-zinc-800 mb-2">Formal Phrases</h1>
            <p className="text-zinc-500">Устойчивые формальные выражения</p>
          </div>

          <div className={`${glassCard} p-8`}>
            <p className="text-zinc-600 mb-6">
              Эти фразы — стандарт деловой переписки. Запомните их и используйте для создания профессионального впечатления.
            </p>

            <div className="space-y-3">
              {[
                { en: "Enclosed please find...", ru: "В приложении вы найдёте...", context: "Для вложений в письмах" },
                { en: "Please find attached...", ru: "Во вложении...", context: "Для вложений в email" },
                { en: "As per your request...", ru: "Согласно вашему запросу...", context: "Ответ на просьбу" },
                { en: "Further to our conversation...", ru: "В продолжение нашего разговора...", context: "После звонка/встречи" },
                { en: "With reference to...", ru: "Касательно...", context: "Ссылка на предмет обсуждения" },
                { en: "Please be advised that...", ru: "Информируем вас о том, что...", context: "Официальное уведомление" },
                { en: "We regret to inform you...", ru: "С сожалением сообщаем...", context: "Плохие новости" },
                { en: "We are pleased to inform you...", ru: "Мы рады сообщить вам...", context: "Хорошие новости" },
                { en: "At your earliest convenience...", ru: "При первой возможности...", context: "Вежливая срочность" },
                { en: "Please do not hesitate to contact...", ru: "Не стесняйтесь обращаться...", context: "Предложение помощи" },
                { en: "I would like to bring to your attention...", ru: "Хотел бы обратить ваше внимание на...", context: "Важная информация" },
                { en: "We apologize for any inconvenience caused.", ru: "Приносим извинения за причинённые неудобства.", context: "Извинение" },
              ].map((item, i) => (
                <div key={i} className={`${glassButton} p-4`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <p className="font-medium text-zinc-800">{item.en}</p>
                      <p className="text-zinc-500 text-sm">{item.ru}</p>
                    </div>
                    <span className={`${glassTag} text-xs text-zinc-500 shrink-0`}>{item.context}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // STEP 10: Тест
  if (step === 10) {
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [showResults, setShowResults] = useState(false);

    const questions = [
      {
        q: "Какое завершение использовать после 'Dear Sir or Madam'?",
        options: ["Yours sincerely", "Yours faithfully", "Best regards", "Cheers"],
        correct: "Yours faithfully"
      },
      {
        q: "Как вежливо попросить о чём-то?",
        options: ["Send me the report.", "I need the report now.", "Could you please send me the report?", "Report. Now."],
        correct: "Could you please send me the report?"
      },
      {
        q: "Что означает 'Enclosed please find'?",
        options: ["Пожалуйста, закройте", "В приложении вы найдёте", "Найдите, пожалуйста", "Закрытое приложение"],
        correct: "В приложении вы найдёте"
      },
      {
        q: "Какое приветствие подходит, если вы не знаете имени получателя?",
        options: ["Dear John,", "Hey there,", "Dear Sir or Madam,", "Hi!"],
        correct: "Dear Sir or Madam,"
      },
      {
        q: "Что использовать в email для вложений?",
        options: ["Enclosed please find", "Please find attached", "I give you", "Here is file"],
        correct: "Please find attached"
      },
    ];

    const correctCount = questions.filter((q, i) => answers[i] === q.correct).length;

    return (
      <div className="min-h-screen p-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center py-6">
            <h1 className="text-3xl font-bold text-zinc-800 mb-2">Quiz</h1>
            <p className="text-zinc-500">Проверьте свои знания</p>
          </div>

          <div className="space-y-6">
            {questions.map((q, i) => (
              <div key={i} className={`${glassCard} p-6`}>
                <p className="font-semibold text-zinc-800 mb-4">{i + 1}. {q.q}</p>
                <div className="space-y-2">
                  {q.options.map((opt, j) => {
                    const isSelected = answers[i] === opt;
                    const isCorrect = opt === q.correct;
                    let styles = `${glassButton} w-full text-left p-4`;

                    if (showResults) {
                      if (isCorrect) {
                        styles = "w-full text-left p-4 rounded-2xl bg-gradient-to-br from-green-100 to-green-50 border border-green-200 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]";
                      } else if (isSelected && !isCorrect) {
                        styles = "w-full text-left p-4 rounded-2xl bg-gradient-to-br from-red-100 to-red-50 border border-red-200 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]";
                      }
                    }

                    return (
                      <button
                        key={j}
                        onClick={() => !showResults && setAnswers({ ...answers, [i]: opt })}
                        className={`${styles} ${isSelected && !showResults ? "ring-2 ring-indigo-400" : ""} transition-all`}
                      >
                        <span className="text-zinc-700">{opt}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {!showResults && (
            <button
              onClick={() => setShowResults(true)}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold hover:from-indigo-600 hover:to-blue-600 transition-all shadow-lg shadow-indigo-200"
            >
              Проверить ответы
            </button>
          )}

          {showResults && (
            <div className={`${glassCard} p-8 text-center`}>
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center mx-auto mb-4 shadow-inner">
                <span className="text-3xl font-bold text-indigo-600">{correctCount}/{questions.length}</span>
              </div>
              <p className="text-xl font-semibold text-zinc-800 mb-2">
                {correctCount === questions.length
                  ? "Превосходно! 🎉"
                  : correctCount >= 3
                  ? "Хороший результат!"
                  : "Попробуйте ещё раз"}
              </p>
              <p className="text-zinc-500">
                {correctCount === questions.length
                  ? "Вы отлично освоили деловую переписку!"
                  : "Повторите материал и попробуйте снова."}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
}
