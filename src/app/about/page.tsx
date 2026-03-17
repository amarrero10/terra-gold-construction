"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap", weight: "400" });

function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

function CardHover({ title, body }: { title: string; body: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "64px 48px",
        borderRight: "1px solid var(--rule)",
        borderBottom: "1px solid var(--rule)",
        background: hovered ? "var(--cream-alt)" : "var(--white)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        transition: "background 0.25s ease, transform 0.25s ease",
        cursor: "default",
      }}
    >
      <div
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 22,
          fontWeight: 500,
          color: "var(--charcoal)",
          marginBottom: 14,
          lineHeight: 1.2,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: 13,
          fontWeight: 300,
          lineHeight: 1.8,
          color: "var(--stone)",
        }}
      >
        {body}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════
          Header — "Our Company" foreground, "Built on Craftsmanship" background
      ══════════════════════════════════════════════════════ */}
      <div
        style={{
          paddingTop: 84,
          background: "var(--cream)",
          borderBottom: "1px solid var(--rule)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background watermark */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "clamp(56px, 10vw, 140px)",
              fontWeight: 300,
              color: "#a07c20",
              opacity: 0.15,
              filter: "blur(1px)",
              whiteSpace: "nowrap",
              letterSpacing: "-0.02em",
              userSelect: "none",
            }}
          >
            Built on Craftsmanship
          </span>
        </div>

        {/* Foreground content */}
        <div
          className="px-5 md:px-12"
          style={{
            maxWidth: 760,
            margin: "0 auto",
            paddingTop: 64,
            paddingBottom: 64,
            position: "relative",
            zIndex: 1,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 36,
                fontWeight: 400,
                color: "var(--charcoal)",
                marginBottom: 8,
              }}
            >
              Our Company
            </p>
            <div
              style={{
                width: 36,
                height: 2,
                background: "var(--gold)",
                marginBottom: 28,
              }}
            />
            <p
              className={`${inter.className}`}
              style={{
                fontSize: 15,
                fontWeight: 300,
                lineHeight: 1.9,
                color: "var(--stone)",
                marginBottom: 20,
              }}
            >
              TerraGold was built on a simple principle—do the work right, and
              stand behind it.
            </p>
            <p
              className={`${inter.className}`}
              style={{
                fontSize: 15,
                fontWeight: 300,
                lineHeight: 1.9,
                color: "var(--stone)",
                marginBottom: 36,
              }}
            >
              For over 15 years, we&apos;ve delivered high-quality craftsmanship
              with a hands-on, in-house team committed to precision,
              reliability, and long-term results.
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: 20,
                fontWeight: 400,
                color: "var(--charcoal)",
                letterSpacing: "0.01em",
              }}
            >
              Led by experience. Built by professionals.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          Meet the Team
      ══════════════════════════════════════════════════════ */}
      <section
        className="px-5 md:px-12"
        style={{
          background: "var(--cream)",
          paddingTop: 72,
          paddingBottom: 72,
          borderTop: "1px solid var(--rule)",
        }}
      >
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 30,
                fontWeight: 400,
                color: "var(--charcoal)",
                marginBottom: 8,
              }}
            >
              Meet the Owner
            </p>
            <div
              style={{
                width: 36,
                height: 2,
                background: "var(--gold)",
                marginBottom: 48,
              }}
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div
              className="grid grid-cols-1 md:grid-cols-[480px_1fr]"
              style={{ gap: 56, alignItems: "start" }}
            >
              {/* Large image */}
              <div
                style={{
                  aspectRatio: "4/3",
                  overflow: "hidden",
                  position: "relative",
                  background: "#C8C0B0",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                      "url('https://placehold.co/960x720/B0A898/C0B8A8?text=.')",
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                    filter: "grayscale(100%) contrast(1.05)",
                  }}
                />
              </div>

              {/* Text */}
              <div style={{ paddingTop: 8 }}>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 32,
                    fontWeight: 400,
                    color: "var(--charcoal)",
                    marginBottom: 4,
                    lineHeight: 1.1,
                  }}
                >
                  Joseph Goldstein
                </p>
                <p
                  className={`${inter.className}`}
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#a07c20",
                    marginBottom: 24,
                  }}
                >
                  Owner &amp; Founder
                </p>
                <div
                  style={{
                    width: 36,
                    height: 1,
                    background: "var(--rule)",
                    marginBottom: 24,
                  }}
                />
                <p
                  className={`${inter.className}`}
                  style={{
                    fontSize: 15,
                    fontWeight: 300,
                    lineHeight: 1.9,
                    color: "var(--stone)",
                  }}
                >
                  With over 15 years leading TerraGold Construction Services,
                  Joseph Goldstein has built a reputation for hands-on quality
                  and honest work. Every project is overseen personally—no
                  shortcuts, no sub-contractors, and no compromises on
                  craftsmanship.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          Pull quote
      ══════════════════════════════════════════════════════ */}
      <section
        className="px-5 md:px-12"
        style={{
          background: "var(--cream-alt)",
          paddingTop: 56,
          paddingBottom: 56,
          borderTop: "1px solid var(--rule)",
        }}
      >
        <div
          className="grid grid-cols-[40px_1fr] md:grid-cols-[64px_1fr]"
          style={{
            maxWidth: 600,
            margin: "0 auto",
            gap: 24,
            alignItems: "start",
          }}
        >
          <Reveal>
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 72,
                fontWeight: 300,
                color: "var(--gold)",
                lineHeight: 0.8,
              }}
            >
              &ldquo;
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "clamp(24px, 3vw, 36px)",
                fontWeight: 300,
                color: "var(--charcoal)",
                lineHeight: 1.35,
                marginBottom: 20,
                maxWidth: 450,
              }}
            >
              We show up, do the work right, and stand behind it. That&apos;s how we&apos;ve built our reputation.
            </p>
            <p
              className={`${inter.className}`}
              style={{
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--stone)",
              }}
            >
              — Joseph Goldstein, Founder, TerraGold Construction Services
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          The Standard We Work By
      ══════════════════════════════════════════════════════ */}
      <section
        className="px-5 md:px-12"
        style={{
          background: "var(--cream)",
          paddingTop: 72,
          paddingBottom: 72,
          borderTop: "1px solid var(--rule)",
        }}
      >
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 48,
                fontWeight: 400,
                color: "var(--charcoal)",
                marginBottom: 8,
              }}
            >
              The Standard We Work By
            </p>
            <div
              style={{
                width: 36,
                height: 2,
                background: "var(--gold)",
                marginBottom: 48,
              }}
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div
              className="grid grid-cols-2 md:grid-cols-4"
              style={{
                borderTop: "1px solid var(--rule)",
                borderLeft: "1px solid var(--rule)",
              }}
            >
              {[
                {
                  title: "Licensed & Insured",
                  body: "Florida-certified contractor, fully compliant and covered for your peace of mind.",
                },
                {
                  title: "Warranty Backed Work",
                  body: "Every project is backed by our workmanship guarantee—done right the first time.",
                },
                {
                  title: "Free, No-Pressure Estimates",
                  body: "Clear, honest pricing with zero obligation.",
                },
                {
                  title: "Family-Owned & Operated",
                  body: "15+ years of hands-on experience, with work completed by our own team.",
                },
              ].map((c) => (
                <CardHover key={c.title} title={c.title} body={c.body} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          Contact CTA
      ══════════════════════════════════════════════════════ */}
      <div
        style={{
          position: "relative",
          height: "50vh",
          minHeight: 360,
          overflow: "hidden",
          background: "#E8E3DA",
          borderTop: "1px solid var(--rule)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('https://placehold.co/1600x900/C8C0B4/D0C8BC?text=.')",
            backgroundSize: "cover",
            backgroundPosition: "center 60%",
            filter: "grayscale(100%) contrast(0.9) brightness(1.05)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(245,240,232,0.25)",
          }}
        />

        <Reveal>
          <div
            className="px-5 md:px-12"
            style={{
              position: "absolute",
              bottom: 32,
              left: 0,
              right: 0,
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <div>
              <p
                className={`${inter.className}`}
                style={{
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--stone)",
                  marginBottom: 8,
                }}
              >
                Protect your project
              </p>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(48px, 7vw, 100px)",
                  fontWeight: 400,
                  letterSpacing: "-0.03em",
                  textTransform: "uppercase",
                  color: "var(--charcoal)",
                  lineHeight: 0.92,
                }}
              >
                Contact Us
              </h2>
            </div>

            <div style={{ flexShrink: 0 }}>
              <Image
                src="/logo.png"
                alt="TerraGold Construction Services"
                width={180}
                height={46}
                style={{ height: 46, width: "auto", objectFit: "contain" }}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </>
  );
}
