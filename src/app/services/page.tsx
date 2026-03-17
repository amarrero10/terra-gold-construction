"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { Inter } from "next/font/google";
import { ChevronDown } from "lucide-react";
import { FlowButton } from "@/components/ui/flow-button";

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

const services = [
  {
    n: "01",
    title: "Stucco & Lath",
    sub: "Cementous & Synthetic EIFS",
    body: "Proudly servicing the Tampa Bay Area for over a decade. Expert stucco application in cementous and synthetic (EIFS) systems, with precision lath installation as the structural foundation.",
    items: [
      "Cementous stucco — 2-coat & 3-coat",
      "Synthetic / EIFS systems",
      "Stucco repair & patch matching",
      "Integral color finishes",
      "Metal lath installation",
      "Wire lath & self-furring systems",
      "Corner bead & moisture barriers",
    ],
  },
  {
    n: "02",
    title: "Drywall",
    sub: "Repair & Installation",
    body: "From new room build-outs to water damage restoration. We handle every drywall need including specialty texture work: Knock-down, Spanish Lace, Orange Peel, and smooth finishes.",
    items: [
      "New room additions & build-outs",
      "Water damage repair",
      "A/C overflow & plumbing cuts",
      "Popcorn ceiling removal",
      "Knock-down texture",
      "Spanish Lace & Orange Peel",
      "Smooth wall finishing",
    ],
  },
  {
    n: "03",
    title: "Stone & Brick Veneer",
    sub: "Natural & Manufactured",
    body: "Manufactured and natural stone veneer installed throughout Tampa Bay. Interior and exterior applications — from full facades to fireplace renovations and architectural trim details.",
    items: [
      "Manufactured stone veneer",
      "Natural stone installation",
      "Precast architectural cladding",
      "Fireplace stone renovation",
      "Interior & exterior applications",
      "Multiple color options",
    ],
  },
  {
    n: "04",
    title: "Interior & Exterior Painting",
    sub: "Residential & Commercial",
    body: "Professional painting services covering the full Tampa Bay Area. Proper surface preparation, quality materials, and clean finishing — every time.",
    items: [
      "Exterior house painting",
      "Interior full-home painting",
      "Commercial painting",
      "Primer & surface prep",
      "Trim & detail work",
      "Color consultation",
    ],
  },
  {
    n: "05",
    title: "Siding, Soffit & Foam",
    sub: "Exterior Finishing",
    body: "Quality siding and soffit installation that protects and beautifies your home's exterior for decades. Includes shiplap, architectural foam, and decorative foam elements.",
    items: [
      "Shiplap siding",
      "Soffit installation",
      "Architectural foam decorations",
      "Foam trim elements",
      "Siding repair & replacement",
      "Moisture-resistant systems",
    ],
  },
  {
    n: "06",
    title: "Home Transformations",
    sub: "Complete Renovations",
    body: "Buying your dream home can be hard — but we can make your current home your new dream home. Full exterior and interior transformation projects handled start to finish.",
    items: [
      "Full exterior overhaul",
      "Interior renovation",
      "Flipping & investment property prep",
      "Airbnb property renovation",
      "Before/after documentation",
    ],
  },
];

const allServices = [
  "Lath", "Stucco / Synthetic Stucco", "Siding", "Shiplap", "Soffit",
  "Paint (Interior & Exterior)", "Drywall Repair & Installation", "Pavers",
  "Stone Installation", "Stucco Repair Services", "Stone Veneer",
  "Natural Stone", "Home Transformations", "Fireplace Stone Installation",
  "Architectural Foam", "Foam Decorations",
];

export default function ServicesPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      {/* Page header */}
      <div
        style={{
          paddingTop: 84,
          background: "var(--cream)",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <div
          className="px-5 md:px-12"
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            paddingTop: 48,
            paddingBottom: 48,
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--stone)",
              marginBottom: 12,
            }}
          >
            What We Do
          </motion.p>
          <div style={{ overflow: "hidden" }}>
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(48px, 6vw, 80px)",
                fontWeight: 400,
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
                color: "var(--charcoal)",
                lineHeight: 0.95,
              }}
            >
              Our Services
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 14,
              fontWeight: 300,
              lineHeight: 1.8,
              color: "var(--stone)",
              maxWidth: 520,
              marginTop: 24,
            }}
          >
            We make complex projects simple. From structural repairs to full
            home transformations — our own team of professionals handles every
            aspect of your exterior and interior needs.
          </motion.p>
        </div>
      </div>

      {/* Services accordion list */}
      <section
        className="px-5 md:px-12"
        style={{
          background: "var(--white)",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          {services.map((svc, i) => (
            <Reveal key={svc.n} delay={i * 0.04}>
              <div
                style={{
                  borderTop: "1px solid var(--rule)",
                  cursor: "pointer",
                }}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div
                  className="grid grid-cols-[40px_1fr_auto] md:grid-cols-[80px_1fr_auto]"
                  style={{
                    gap: 16,
                    alignItems: "center",
                    padding: "24px 0",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 11,
                      letterSpacing: "0.12em",
                      color: "var(--gold)",
                    }}
                  >
                    {svc.n}
                  </span>
                  <div>
                    <span
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 13,
                        fontWeight: 400,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--charcoal)",
                        display: "block",
                        marginBottom: 3,
                      }}
                    >
                      {svc.title}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 12,
                        color: "var(--stone-lt)",
                      }}
                    >
                      {svc.sub}
                    </span>
                  </div>
                  <ChevronDown
                    size={18}
                    style={{
                      color: "var(--stone)",
                      transition: "transform 0.3s",
                      transform: open === i ? "rotate(180deg)" : "none",
                      flexShrink: 0,
                    }}
                  />
                </div>

                {open === i && (
                  <div
                    className="grid grid-cols-1 md:grid-cols-[80px_1fr_1fr]"
                    style={{
                      gap: 24,
                      paddingBottom: 36,
                    }}
                  >
                    <div className="hidden md:block" />
                    <p
                      className={`${inter.className}`}
                      style={{
                        fontSize: 14,
                        fontWeight: 300,
                        lineHeight: 1.8,
                        color: "var(--stone)",
                      }}
                    >
                      {svc.body}
                    </p>
                    <ul style={{ listStyle: "none" }}>
                      {svc.items.map((it) => (
                        <li
                          key={it}
                          style={{
                            display: "flex",
                            gap: 10,
                            alignItems: "center",
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: 13,
                            fontWeight: 300,
                            color: "var(--charcoal)",
                            paddingBottom: 8,
                          }}
                        >
                          <span style={{ color: "var(--gold)", fontSize: 10 }}>—</span>
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
          <div style={{ borderTop: "1px solid var(--rule)" }} />
        </div>
      </section>

      {/* Complete list */}
      <section
        className="px-5 md:px-12"
        style={{
          background: "var(--cream)",
          paddingTop: 56,
          paddingBottom: 56,
          borderBottom: "1px solid var(--rule)",
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
              Full Service List
            </p>
            <div style={{ width: 36, height: 2, background: "var(--gold)", marginBottom: 32 }} />
          </Reveal>
          <Reveal delay={0.08}>
            <div
              className="grid grid-cols-2 md:grid-cols-4"
              style={{
                borderTop: "1px solid var(--rule)",
              }}
            >
              {allServices.map((s, i) => (
                <div
                  key={s}
                  style={{
                    padding: "16px 0 16px 20px",
                    borderBottom: "1px solid var(--rule)",
                    borderRight:
                      (i + 1) % 4 !== 0 ? "1px solid var(--rule)" : "none",
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 13,
                    fontWeight: 300,
                    color: "var(--charcoal)",
                  }}
                >
                  <span style={{ color: "var(--gold)", fontSize: 10 }}>—</span>
                  {s}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Proudly Serving */}
      <section
        className="px-5 md:px-12"
        style={{
          background: "var(--white)",
          paddingTop: 56,
          paddingBottom: 56,
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 12,
              }}
            >
              Service Area
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 34,
                fontWeight: 400,
                color: "var(--charcoal)",
                marginBottom: 8,
              }}
            >
              Proudly Serving
            </p>
            <div style={{ width: 36, height: 2, background: "var(--gold)", marginBottom: 28 }} />
          </Reveal>
          <Reveal delay={0.08}>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 22,
                fontWeight: 400,
                color: "var(--stone)",
                marginBottom: 20,
                letterSpacing: "0.02em",
              }}
            >
              Tampa Bay Area
            </p>
            <div
              className="flex flex-wrap gap-3"
            >
              {["Tampa", "Lutz", "Odessa", "Wesley Chapel", "Surrounding Areas"].map((area) => (
                <span
                  key={area}
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 12,
                    fontWeight: 400,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--charcoal)",
                    padding: "10px 20px",
                    border: "1px solid var(--rule)",
                    display: "inline-block",
                  }}
                >
                  {area}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section
        className="px-5 md:px-12"
        style={{
          background: "var(--cream-alt)",
          paddingTop: 56,
          paddingBottom: 56,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Reveal>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 40,
              fontWeight: 400,
              color: "var(--charcoal)",
              marginBottom: 16,
            }}
          >
            Ready to get started?
          </p>
          <p
            className={`${inter.className}`}
            style={{
              fontSize: 14,
              fontWeight: 300,
              color: "var(--stone)",
              marginBottom: 32,
            }}
          >
            Get your free, no-obligation estimate today.
          </p>
          <FlowButton href="/contact" text="Free Estimate" variant="charcoal" />
        </Reveal>
      </section>
    </>
  );
}
