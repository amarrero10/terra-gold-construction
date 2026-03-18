import { cn } from "@/lib/utils";
import * as React from "react";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "peer w-full bg-transparent outline-none",
          "h-14 pt-6 pb-2 px-0",
          "border-b border-[var(--rule)] focus:border-[var(--gold)]",
          "font-[Montserrat,sans-serif] text-sm font-light text-[var(--charcoal)]",
          "placeholder:text-transparent transition-colors duration-200",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
