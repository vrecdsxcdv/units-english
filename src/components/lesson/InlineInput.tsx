"use client";
import React from "react";
import clsx from "clsx";

export type InlineInputProps = {
  value: string;
  setValue: (v: string) => void;
  invalid?: boolean;
  valid?: boolean;
  placeholder?: string;
  ariaLabel?: string;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  dataIndex?: number;
  wide?: boolean; // Широкое поле для длинных ответов
};

export default function InlineInput({
  value,
  setValue,
  invalid,
  valid,
  placeholder = "…",
  ariaLabel,
  onKeyDown,
  dataIndex,
  wide = false,
}: InlineInputProps) {
  return (
    <input
      aria-label={ariaLabel}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={onKeyDown}
      data-index={dataIndex}
      className={clsx(
        "inline-block align-baseline",
        // компактная или широкая ширина:
        wide
          ? "min-w-[20ch] max-w-[50ch] w-[35ch]"
          : "min-w-[8ch] max-w-[14ch] w-[10ch]",
        "px-2 py-1 rounded-md border",
        wide ? "text-left" : "text-center",
        "border-zinc-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500",
        invalid && "border-red-400 bg-red-50",
        valid && "border-green-400 bg-green-50"
      )}
      autoCapitalize="off"
      autoCorrect="off"
      spellCheck={false}
      inputMode="latin"
      placeholder={placeholder}
    />
  );
}
