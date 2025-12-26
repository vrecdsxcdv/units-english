import type { Metadata } from "next";
import StepikLikeClient from "./StepikLikeClient";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Тема урока: Артикли — experimental (Stepik-like)",
  robots: { index: false, follow: false },
};

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-sans",
});

export default function Page() {
  return (
    <div
      className={`${inter.variable} font-sans min-h-screen bg-gradient-to-b from-white to-zinc-50`}
    >
      <StepikLikeClient />
    </div>
  );
}
