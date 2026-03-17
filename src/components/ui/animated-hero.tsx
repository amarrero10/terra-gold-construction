"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { PhoneCall } from "lucide-react";
import { FlowButton } from "@/components/ui/flow-button";

interface AnimatedHeroProps {
  titles: string[];
  headline: string;
  subtext: string;
  phone: string;
}

export function AnimatedHero({ titles, headline, subtext, phone }: AnimatedHeroProps) {
  const [titleNumber, setTitleNumber] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div
      className="w-full px-5 md:px-12"
      style={{
        background: "var(--cream)",
        borderTop: "1px solid var(--rule)",
        paddingTop: 96,
        paddingBottom: 96,
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
        {/* Headline */}
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 400,
            letterSpacing: "-0.03em",
            lineHeight: 0.95,
            color: "var(--charcoal)",
            fontSize: "clamp(38px, 8vw, 110px)",
            marginBottom: 0,
          }}
        >
          {headline}
        </h2>

        {/* Animated word */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            height: "clamp(50px, 10vw, 130px)",
            marginBottom: 32,
          }}
        >
          {titles.map((title, index) => (
            <motion.span
              key={index}
              style={{
                position: "absolute",
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 400,
                letterSpacing: "-0.03em",
                fontSize: "clamp(38px, 8vw, 110px)",
                lineHeight: 0.95,
                color: "var(--gold)",
                whiteSpace: "nowrap",
              }}
              initial={{ opacity: 0, y: 80 }}
              transition={{ type: "spring", stiffness: 50 }}
              animate={
                titleNumber === index
                  ? { y: 0, opacity: 1 }
                  : { y: titleNumber > index ? -80 : 80, opacity: 0 }
              }
            >
              {title}
            </motion.span>
          ))}
        </div>

        {/* Subtext */}
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "clamp(14px, 1.4vw, 16px)",
            fontWeight: 300,
            lineHeight: 1.9,
            color: "var(--stone)",
            maxWidth: 540,
            margin: "0 auto 48px",
          }}
        >
          {subtext}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Jump on a call */}
          <a
            href={`tel:${phone.replace(/-/g, "")}`}
            className="group relative flex items-center gap-3 overflow-hidden border"
            style={{
              borderColor: "var(--rule)",
              background: "transparent",
              padding: "14px 32px",
              textDecoration: "none",
              transition: "border-color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor = "var(--charcoal)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor = "var(--rule)")
            }
          >
            <PhoneCall
              size={14}
              style={{ color: "var(--charcoal)", flexShrink: 0 }}
            />
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--charcoal)",
              }}
            >
              Jump on a call
            </span>
          </a>

          {/* Free Estimate — FlowButton */}
          <FlowButton href="/contact" text="Free Estimate" variant="charcoal" />
        </div>
      </div>
    </div>
  );
}
