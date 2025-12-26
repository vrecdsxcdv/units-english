"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import {
  levelLabel,
  recommendedBlockName,
  recommendedBlockPath,
  persuasiveBullets,
  type CEFR,
} from "@/lib/level-plan";
import ConfirmDialog from "@/components/ui/ConfirmDialog";
import { CheckCircle, BookOpen, Layers } from "lucide-react";

export default function RecommendationCards({
  level,
  score,
}: {
  level: CEFR;
  score: number;
}) {
  const router = useRouter();
  const { status } = useSession();
  const isAuth = status === "authenticated";

  const blockName = recommendedBlockName(level);
  const blockPath = recommendedBlockPath(level);
  const bullets = persuasiveBullets(level);

  const [openConfirm, setOpenConfirm] = React.useState(false);

  function gotoBlocks() {
    if (isAuth) router.push(blockPath);
    else router.push(`/register?redirect=${encodeURIComponent(blockPath)}`);
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
          Выберите свой план обучения
        </h1>
        <p className="mt-2 text-slate-600">
          Рекомендуем программу по блокам, но вы можете повторять отдельные
          темы.
        </p>
        <div className="mt-4 inline-flex items-center rounded-full bg-indigo-50 px-4 py-2 text-indigo-700 border border-indigo-200">
          Ваш уровень: <b className="ml-1">{levelLabel(level)}</b> • {score}/100
        </div>
      </motion.div>

      {/* PRIMARY — Обучение по блокам */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        whileHover={{ y: -4 }}
        className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
            <Layers className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 px-2.5 py-0.5 text-xs font-medium">
              Рекомендуем
            </span>
          </div>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-slate-800">
          Обучение по блокам
        </h2>
        <p className="mt-2 text-slate-600">
          Исходя из вашего уровня мы советуем начать с блока: <b className="text-slate-800">{blockName}</b>.
        </p>
        <ul className="mt-4 space-y-2">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-slate-600">
              <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button
            onClick={gotoBlocks}
            className="inline-flex justify-center items-center rounded-full h-11 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors"
          >
            Начать обучение по блокам
          </button>
          <button
            onClick={() => setOpenConfirm(true)}
            className="inline-flex justify-center items-center rounded-full h-11 px-6 border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium transition-colors"
          >
            Хочу начать изучать другой уровень
          </button>
        </div>
      </motion.div>

      {/* SECONDARY — Обучение по темам */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ y: -4 }}
        className="mt-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-indigo-600" />
          </div>
        </div>
        <h3 className="text-lg md:text-xl font-bold text-slate-800">Обучение по темам</h3>
        <p className="mt-2 text-slate-600">
          Хотите закрыть конкретный пробел? Выберите тему (Present Perfect,
          артикли, фразовые глаголы и др.) и тренируйтесь точечно.
        </p>
        <div className="mt-4">
          <a
            href="/catalog#topics"
            className="inline-flex justify-center items-center rounded-full h-11 px-6 border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium transition-colors"
          >
            Открыть темы
          </a>
        </div>
      </motion.div>

      {/* Modal */}
      <ConfirmDialog
        open={openConfirm}
        onClose={() => setOpenConfirm(false)}
        onConfirm={() => router.push("/catalog?mode=blocks")}
        title="Подтверждение"
        confirmText="Да, выбрать другой уровень"
        cancelText="Отмена"
        description={
          <span>
            Вы действительно хотите начать изучать <b>другой уровень</b>? Ваш
            уровень: <b>{levelLabel(level)}</b>.
          </span>
        }
      />
    </div>
  );
}
