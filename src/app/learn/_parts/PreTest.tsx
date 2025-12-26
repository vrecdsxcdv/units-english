"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BookOpen, Layers, BadgeCheck, Sparkles } from "lucide-react";

interface PreTestProps {
  guest?: boolean;
  index?: number;
  total?: number;
}

function PathCard({
  icon: Icon,
  title,
  description,
  href,
  buttonText,
  delay = 0,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
  buttonText: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
          <Icon className="w-5 h-5 text-indigo-600" />
        </div>
        <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
      </div>
      <p className="mt-3 text-slate-600 text-sm leading-relaxed">{description}</p>
      <div className="mt-5">
        <Link
          href={href}
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "rounded-full border-slate-300 text-slate-700 hover:bg-slate-50"
          )}
        >
          {buttonText}
        </Link>
      </div>
    </motion.div>
  );
}

export default function PreTest({
  guest = false,
  index = 0,
  total = 100,
}: PreTestProps) {
  const hasProgress = index > 0;
  const progressText = hasProgress
    ? `Продолжить тест (${index}/${total})`
    : "Начать тест";

  return (
    <div className="min-h-[100svh] bg-white">
      {/* Hero Section */}
      <section className="relative px-6 py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            {/* Left: text + buttons */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 mb-6"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-semibold text-slate-800">Units English</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight"
              >
                {guest ? "Выберите, как начать учёбу" : "Определите свой уровень"}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 text-lg text-slate-600"
              >
                {guest
                  ? "Повторяйте темы, проходите блоки или определите уровень."
                  : "Пройдите тест на определение уровня, чтобы получить персональные рекомендации."}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 flex flex-col items-start gap-3 sm:flex-row"
              >
                <Link
                  href="/assessment"
                  className="h-12 rounded-full px-7 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold inline-flex items-center transition-colors"
                >
                  {progressText}
                </Link>
                {guest && (
                  <Link
                    href="/catalog"
                    className="h-12 rounded-full px-7 border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium inline-flex items-center transition-colors"
                  >
                    Открыть каталог
                  </Link>
                )}
              </motion.div>
            </div>

            {/* Right: abstract illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mx-auto w-full max-w-md"
            >
              <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-indigo-100 via-indigo-50 to-white border border-indigo-200/50 shadow-sm" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-white/20 to-white/40" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cards with icons */}
      <section className="px-6 pb-20 bg-slate-50">
        <div className="max-w-5xl mx-auto pt-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl font-bold text-slate-800 mb-6 text-center"
          >
            Выберите формат обучения
          </motion.h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <PathCard
              icon={BookOpen}
              title="Повторить тему"
              description="Выберите тему и освежите знания в удобном темпе."
              href="/catalog#topics"
              buttonText="Открыть темы"
              delay={0.5}
            />
            <PathCard
              icon={Layers}
              title="Обучение по блокам"
              description="Проходите курс структурированными блоками с чёткими целями."
              href="/catalog?mode=blocks"
              buttonText="Открыть блоки"
              delay={0.6}
            />
            <PathCard
              icon={BadgeCheck}
              title="Пройти тест уровня"
              description="Узнайте свой текущий уровень, чтобы подобрать подходящий путь."
              href="/assessment"
              buttonText={progressText}
              delay={0.7}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
