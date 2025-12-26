import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-2xl border bg-white/15 dark:bg-white/10",
          "border-white/30 dark:border-white/10 backdrop-blur-2xl",
          "px-3.5 text-[15px] shadow-sm outline-none transition",
          "focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:border-white/60",
          "placeholder:text-gray-500 dark:placeholder:text-gray-400",
          "disabled:cursor-not-allowed disabled:opacity-60",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
