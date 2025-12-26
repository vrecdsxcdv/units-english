"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import ProfileDropdown from "@/components/ProfileDropdown";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type StreakData = {
  streak: number;
  isActive: boolean;
  todayCompleted: boolean;
};

function StreakBadge() {
  const { data } = useSWR<StreakData>("/api/user/streak", fetcher, {
    refreshInterval: 1000, // Обновлять каждую секунду
    revalidateOnFocus: true,
    revalidateOnMount: true,
    dedupingInterval: 0,
  });

  if (!data || data.streak === 0) return null;

  return (
    <div
      className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-semibold transition-all ${
        data.todayCompleted
          ? "bg-orange-100 text-orange-600"
          : "bg-gray-100 text-gray-500"
      }`}
      title={data.todayCompleted ? "Сегодня занимались!" : "Позанимайтесь сегодня, чтобы сохранить стрик!"}
    >
      <span className={`text-lg ${data.todayCompleted ? "animate-pulse" : "opacity-50"}`}>
        🔥
      </span>
      <span>{data.streak}</span>
    </div>
  );
}

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="flex justify-between items-center px-8 py-4 shadow-sm bg-white/70 backdrop-blur-md sticky top-0 z-50">
      <Link href="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition">
        Units English
      </Link>
      <nav className="hidden md:flex gap-6 text-gray-600">
        <Link href="/learn" className="hover:text-indigo-600 transition">
          Обучение
        </Link>
        <Link href="/catalog" className="hover:text-indigo-600 transition">
          Каталог
        </Link>
        <Link href="/reviews" className="hover:text-indigo-600 transition">
          Отзывы
        </Link>
        <Link
          href="/tutor"
          className="hover:text-indigo-600 transition flex items-center gap-1"
        >
          <span>😉</span>
          <span>Speakly</span>
        </Link>
      </nav>
      {session?.user ? (
        <div className="flex items-center gap-3">
          <StreakBadge />
          <ProfileDropdown />
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <Button
            asChild
            className="rounded-full px-6 bg-white text-indigo-600 border hover:bg-gray-50"
          >
            <Link href="/login">Войти</Link>
          </Button>
          <Button
            asChild
            className="rounded-full px-6 bg-indigo-600 text-white hover:bg-indigo-700"
          >
            <Link href="/register">Зарегистрироваться</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
