"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/* ── Floating Input ─────────────────────────────────── */
const FloatingInput = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, ...props }, ref) => (
    <Input placeholder=" " className={cn("peer", className)} ref={ref} {...props} />
  ),
);
FloatingInput.displayName = "FloatingInput";

/* ── Floating Label ─────────────────────────────────── */
const FloatingLabel = React.forwardRef<
  React.ElementRef<typeof Label>,
  React.ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref) => (
  <Label
    className={cn(
      // Floated state (default — when field has a value)
      "absolute left-0 top-2 z-10 origin-[left_top] scale-75 text-[10px] tracking-[0.12em] uppercase text-[var(--stone-lt)]",
      // Un-floated (placeholder shown = empty, not focused)
      "peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100",
      "peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal peer-placeholder-shown:normal-case peer-placeholder-shown:text-[var(--stone)]",
      // Focused — float back up with gold color
      "peer-focus:top-2 peer-focus:translate-y-0 peer-focus:scale-75",
      "peer-focus:text-[10px] peer-focus:tracking-[0.12em] peer-focus:uppercase peer-focus:text-[var(--gold)]",
      "cursor-text transition-all duration-200 pointer-events-none",
      className,
    )}
    ref={ref}
    {...props}
  />
));
FloatingLabel.displayName = "FloatingLabel";

/* ── FloatingLabelInput ─────────────────────────────── */
type FloatingLabelInputProps = React.ComponentProps<"input"> & { label?: string };

export const FloatingLabelInput = React.forwardRef<
  HTMLInputElement,
  FloatingLabelInputProps
>(({ id, label, className, ...props }, ref) => (
  <div className="relative">
    <FloatingInput ref={ref} id={id} className={className} {...props} />
    <FloatingLabel htmlFor={id}>{label}</FloatingLabel>
  </div>
));
FloatingLabelInput.displayName = "FloatingLabelInput";

/* ── FloatingLabelTextarea ──────────────────────────── */
type FloatingLabelTextareaProps = React.ComponentProps<"textarea"> & { label?: string };

const FloatingTextarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => (
    <textarea
      placeholder=" "
      className={cn(
        "peer w-full bg-transparent outline-none resize-vertical",
        "pt-6 pb-2 px-0 min-h-[120px]",
        "border-b border-[var(--rule)] focus:border-[var(--gold)]",
        "font-[Montserrat,sans-serif] text-sm font-light text-[var(--charcoal)]",
        "placeholder:text-transparent transition-colors duration-200",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
FloatingTextarea.displayName = "FloatingTextarea";

const FloatingTextareaLabel = React.forwardRef<
  React.ElementRef<typeof Label>,
  React.ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref) => (
  <Label
    className={cn(
      "absolute left-0 top-2 z-10 origin-[left_top] scale-75 text-[10px] tracking-[0.12em] uppercase text-[var(--stone-lt)]",
      "peer-placeholder-shown:top-5 peer-placeholder-shown:scale-100",
      "peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal peer-placeholder-shown:normal-case peer-placeholder-shown:text-[var(--stone)]",
      "peer-focus:top-2 peer-focus:scale-75 peer-focus:text-[10px] peer-focus:tracking-[0.12em] peer-focus:uppercase peer-focus:text-[var(--gold)]",
      "cursor-text transition-all duration-200 pointer-events-none",
      className,
    )}
    ref={ref}
    {...props}
  />
));
FloatingTextareaLabel.displayName = "FloatingTextareaLabel";

export const FloatingLabelTextarea = React.forwardRef<
  HTMLTextAreaElement,
  FloatingLabelTextareaProps
>(({ id, label, className, ...props }, ref) => (
  <div className="relative">
    <FloatingTextarea ref={ref} id={id} className={className} {...props} />
    <FloatingTextareaLabel htmlFor={id}>{label}</FloatingTextareaLabel>
  </div>
));
FloatingLabelTextarea.displayName = "FloatingLabelTextarea";
