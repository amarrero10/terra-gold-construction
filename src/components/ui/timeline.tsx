"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full font-sans md:px-10"
      style={{ background: "var(--white)" }}
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-16 md:pt-56 md:gap-10"
          >
            {/* Left — sticky: circle on line + large step number */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-64 self-start max-w-xs lg:max-w-sm md:w-full">
              {/* Circle dot centered on the vertical line */}
              <div
                className="h-10 absolute left-3 md:left-3 w-10 rounded-full flex items-center justify-center"
                style={{ background: "var(--white)" }}
              >
                <div
                  className="h-4 w-4 rounded-full border p-2"
                  style={{
                    background: "var(--cream-alt)",
                    borderColor: "var(--rule)",
                  }}
                />
              </div>

              {/* Step number */}
              <h3
                className="hidden md:block md:pl-20"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(48px, 5vw, 72px)",
                  fontWeight: 400,
                  color: "var(--gold)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                {String(index + 1).padStart(2, "0")}.
              </h3>
            </div>

            {/* Right — title + body */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              {/* Mobile step number */}
              <h3
                className="md:hidden block mb-4"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 40,
                  fontWeight: 400,
                  color: "var(--gold)",
                  letterSpacing: "-0.03em",
                }}
              >
                {String(index + 1).padStart(2, "0")}.
              </h3>

              <h4
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(28px, 3.5vw, 48px)",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.05,
                  color: "var(--charcoal)",
                  marginBottom: 20,
                }}
              >
                {item.title}
              </h4>

              <div
                style={{
                  width: 36,
                  height: 1,
                  background: "var(--gold)",
                  marginBottom: 24,
                }}
              />

              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "clamp(15px, 1.6vw, 18px)",
                  fontWeight: 300,
                  lineHeight: 1.9,
                  color: "var(--stone)",
                  maxWidth: 520,
                }}
              >
                {item.content}
              </div>
            </div>
          </div>
        ))}

        {/* Animated vertical line */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--rule) 10%, var(--rule) 90%, transparent)",
            }}
          />
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
              background: "var(--gold)",
            }}
            className="absolute inset-x-0 top-0 w-full rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
