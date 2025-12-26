"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function ProfileDropdown() {
  const { data: session } = useSession();

  if (!session?.user) return null;

  const displayName = session.user.email || session.user.name || "User";
  const initials = (session.user.name || session.user.email || "US").slice(0, 2).toUpperCase();

  return (
    <div className="flex items-center gap-3">
      {/* Profile link */}
      <Link
        href="/profile"
        className="flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 rounded-full bg-white/60 backdrop-blur-xl border border-white/40 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-300"
      >
        {/* Avatar */}
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
          {initials}
        </div>
        {/* Email */}
        <span className="text-base font-medium text-zinc-700 hidden sm:block">{displayName}</span>
      </Link>
    </div>
  );
}
