"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import LevelCard from "@/components/blocks/LevelCard";
import { TRACKS } from "@/lib/blocks";

export default function BlocksPage() {
  const { status } = useSession();
  const router = useRouter();
  const isAuth = status === "authenticated";

  function go(track: keyof typeof TRACKS) {
    const href = `/blocks/${track}`;
    if (isAuth) router.push(href);
    else router.push(`/register?redirect=${encodeURIComponent(href)}`);
  }

  return (
    <div className="min-h-[calc(100vh-80px)] bg-neutral-50">
      {/* hero */}
      <div className="mx-auto max-w-5xl px-4 pt-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
          Обучение по блокам
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-gray-600">
          Спокойный, последовательный прогресс без перегруза цветом: выберите
          уровень и двигайтесь шаг за шагом.
        </p>

        {/* Switch to topics button */}
        <div className="mt-6">
          <button
            onClick={() => router.push("/topics")}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-300 bg-white px-5 py-2.5 text-sm font-medium text-indigo-700 hover:bg-indigo-50 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            Учиться по темам
          </button>
        </div>
      </div>

      {/* grid */}
      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 px-4 md:grid-cols-3">
        <LevelCard
          title={TRACKS.a1.title}
          pill={TRACKS.a1.pill}
          subtitle={TRACKS.a1.subtitle}
          icon={"📘"}
          onClick={() => go("a1")}
        />
        <LevelCard
          title={TRACKS.b1.title}
          pill={TRACKS.b1.pill}
          subtitle={TRACKS.b1.subtitle}
          icon={"📗"}
          onClick={() => go("b1")}
        />
        <LevelCard
          title={TRACKS.b2.title}
          pill={TRACKS.b2.pill}
          subtitle={TRACKS.b2.subtitle}
          icon={"📙"}
          onClick={() => go("c2")}
        />
      </div>

      {/* calm feature strip */}
      <div className="mx-auto mt-12 max-w-5xl px-4 pb-14">
        <div className="rounded-3xl border border-white/30 bg-white/70 backdrop-blur-xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <div className="text-lg">📖</div>
              <div className="mt-1 font-medium text-gray-900">
                Короткая теория
              </div>
              <div className="text-sm text-gray-600">
                Только главное — без воды, с понятными примерами.
              </div>
            </div>
            <div>
              <div className="text-lg">📝</div>
              <div className="mt-1 font-medium text-gray-900">Практика</div>
              <div className="text-sm text-gray-600">
                Живые упражнения и задания на закрепление.
              </div>
            </div>
            <div>
              <div className="text-lg">📊</div>
              <div className="mt-1 font-medium text-gray-900">Прогресс</div>
              <div className="text-sm text-gray-600">
                Сохранение прогресса и рекомендации по следующему шагу.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
