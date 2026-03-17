"use client";

import * as React from "react";
import { motion, useTransform, useScroll } from "motion/react";

interface ProcessStep {
  number: string;
  title: string;
  body: string;
}

interface HorizontalScrollCarouselProps {
  steps: ProcessStep[];
}

const StepCard: React.FC<{ step: ProcessStep; mobile?: boolean }> = ({ step, mobile }) => {
  return (
    <div
      style={{
        width: mobile ? "100%" : 420,
        height: mobile ? "auto" : 480,
        flexShrink: 0,
        border: "1px solid var(--rule)",
        background: "var(--cream)",
        padding: mobile ? "36px 28px" : "48px 44px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: mobile ? 24 : 0,
      }}
    >
      <span
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: mobile ? 52 : 72,
          fontWeight: 400,
          color: "var(--gold)",
          letterSpacing: "-0.03em",
          lineHeight: 1,
          opacity: 0.5,
        }}
      >
        {step.number}
      </span>

      <div>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: mobile ? 28 : 36,
            fontWeight: 400,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            color: "var(--charcoal)",
            marginBottom: 16,
          }}
        >
          {step.title}
        </p>
        <div style={{ width: 32, height: 1, background: "var(--gold)", marginBottom: 16 }} />
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 13,
            fontWeight: 300,
            lineHeight: 1.9,
            color: "var(--stone)",
          }}
        >
          {step.body}
        </p>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel: React.FC<HorizontalScrollCarouselProps> = ({ steps }) => {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["25%", "-60%"]);

  return (
    <>
      {/* Mobile: vertical stack */}
      <div className="md:hidden px-5" style={{ paddingTop: 32, paddingBottom: 56 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {steps.map((step) => (
            <StepCard key={step.number} step={step} mobile />
          ))}
        </div>
      </div>

      {/* Desktop: horizontal scroll */}
      <section ref={targetRef} className="relative w-full hidden md:block" style={{ height: "300vh" }}>
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-6">
            {steps.map((step) => (
              <StepCard key={step.number} step={step} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export { HorizontalScrollCarousel };
