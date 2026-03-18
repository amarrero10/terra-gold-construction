"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface FlowButtonProps {
  text?: string;
  href?: string;
  variant?: "dark" | "charcoal";
}

export function FlowButton({ text = "Free Estimate", href, variant = "dark" }: FlowButtonProps) {
  const isCharcoal = variant === "charcoal";

  const inner = isCharcoal ? (
    <span className="group relative flex items-center gap-1 overflow-hidden bg-(--charcoal) px-8 py-3.5 text-[11px] font-medium tracking-[0.14em] uppercase text-(--cream) cursor-pointer transition-colors duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-[#0a0a0a] active:scale-[0.97]">
      {/* Left arrow */}
      <ArrowRight className="absolute w-3.5 h-3.5 left-[-25%] stroke-(--cream) fill-none z-9 group-hover:left-4 group-hover:stroke-[#0a0a0a] transition-all duration-800 ease-[cubic-bezier(0.34,1.56,0.64,1)]" />

      {/* Text */}
      <span className="relative z-1 -translate-x-3 group-hover:translate-x-3 transition-all duration-800 ease-out">
        {text}
      </span>

      {/* Gold fill circle */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[var(--gold)] rounded-[50%] opacity-0 group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)]" />

      {/* Right arrow */}
      <ArrowRight className="absolute w-3.5 h-3.5 right-4 stroke-[var(--cream)] fill-none z-[9] group-hover:right-[-25%] group-hover:stroke-[#0a0a0a] transition-all duration-800 ease-[cubic-bezier(0.34,1.56,0.64,1)]" />
    </span>
  ) : (
    <span className="group relative flex items-center gap-1 overflow-hidden border border-[rgba(245,240,232,0.3)] bg-transparent px-8 py-3.5 text-[11px] font-medium tracking-[0.14em] uppercase text-[rgba(245,240,232,0.8)] cursor-pointer transition-colors duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-[var(--gold)] hover:text-[#0a0a0a] active:scale-[0.97]">
      {/* Left arrow */}
      <ArrowRight className="absolute w-3.5 h-3.5 left-[-25%] stroke-[rgba(245,240,232,0.8)] fill-none z-[9] group-hover:left-4 group-hover:stroke-[#0a0a0a] transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" />

      {/* Text */}
      <span className="relative z-[1] -translate-x-3 group-hover:translate-x-3 transition-all duration-[800ms] ease-out">
        {text}
      </span>

      {/* Gold fill circle */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[var(--gold)] rounded-[50%] opacity-0 group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)]" />

      {/* Right arrow */}
      <ArrowRight className="absolute w-3.5 h-3.5 right-4 stroke-[rgba(245,240,232,0.8)] fill-none z-[9] group-hover:right-[-25%] group-hover:stroke-[#0a0a0a] transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" />
    </span>
  );

  if (href) {
    return (
      <Link href={href} style={{ display: "inline-block", textDecoration: "none" }}>
        {inner}
      </Link>
    );
  }

  return <button>{inner}</button>;
}
