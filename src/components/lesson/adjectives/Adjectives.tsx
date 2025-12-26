"use client";

import { Section as UiSection } from "@/components/ui/Section";

type Props = { step: number };

export default function Adjectives({ step }: Props) {
  return (
    <UiSection title={`Adjectives - Step ${step}`}>
      <p>
        Прилагательные (Adjectives) описывают существительные. Эта тема будет
        переведена в новый формат позже.
      </p>
      <p className="mt-4 text-sm text-gray-500">
        Сейчас находится в разработке. Используйте текущие материалы в
        /blocks/[track]/adjectives.
      </p>
    </UiSection>
  );
}
