"use client";

import { useRef } from "react";
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

const values = [
  {
    cat: "Our Mission",
    name: "Family Operated",
    role: "No sub-contractors, ever",
    desc: "TerraGold counts on its own team of professionals. We assess the damage, get the work done, and leave. No middlemen.",
  },
  {
    cat: "Our Mission",
    name: "Fair Pricing",
    role: "Transparent, competitive quotes",
    desc: "Our promise is that we will charge what is fair while maintaining the highest quality of work and standards.",
  },
  {
    cat: "Our Mission",
    name: "Warranty Backed",
    role: "Every job fully warranted",
    desc: "We stand behind every project. If something is not right, we will make it right — no questions asked.",
  },
];

const team = [
  {
    cat: "Leadership",
    name: "J. Goldstein",
    role: "Owner & Founder",
  },
];

const milestones = [
  { year: "2009", text: "TerraGold Construction Services founded." },
  { year: "2012", text: "Expanded to full stone veneer and brick installations." },
  { year: "2016", text: "Launched home transformation division." },
  { year: "2019", text: "Relocated and expanded to Tampa Bay Area, FL." },
  { year: "2022", text: "EIFS synthetic stucco certification achieved." },
  { year: "2024", text: "500+ completed projects across Tampa Bay." },
];

export default function AboutPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════
          Header — "Our Company/" + "Built on" bleeds off right
          (mirrors Kreisson "Our People/" + "Built c…")
      ══════════════════════════════════════════════════════ */}
      <div
        style={{
          paddingTop: 84,
          background: "var(--cream)",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-[340px_1fr] px-5 md:px-12"
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            paddingTop: 48,
            gap: 40,
            alignItems: "start",
          }}
        >
          {/* Left: heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 32,
                fontWeight: 400,
                color: "var(--charcoal)",
                marginBottom: 8,
              }}
            >
              Our Company
            </p>
            <div style={{ width: 36, height: 2, background: "var(--gold)", marginBottom: 12 }} />
            <p
              className={`${inter.className}`}
              style={{
                fontSize: 14,
                fontWeight: 300,
                lineHeight: 1.8,
                color: "var(--stone)",
                marginBottom: 12,
              }}
            >
              TerraGold&apos;s solution-driven outlook is the product of an
              innovative and deeply committed culture — built on craftsmanship
              and integrity since 2009.
            </p>
          </motion.div>

          {/* Right: large gold "Built on" bleeds off-screen */}
          <div style={{ overflow: "hidden" }}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.85,
                delay: 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "clamp(64px, 9vw, 128px)",
                fontWeight: 300,
                color: "var(--gold)",
                lineHeight: 0.9,
                whiteSpace: "nowrap",
                opacity: 0.55,
              }}
            >
              Built on
            </motion.div>
          </div>
        </div>

        {/* "Craftsmanship" continuation line */}
        <div
          className="px-5 md:px-12"
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            paddingBottom: 48,
            overflow: "hidden",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.85,
              delay: 0.25,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "clamp(64px, 9vw, 128px)",
              fontWeight: 300,
              color: "var(--gold)",
              lineHeight: 0.9,
              whiteSpace: "nowrap",
              textAlign: "right",
              opacity: 0.55,
            }}
          >
            Craftsmanship
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          "Meet Our Team /" — value/team grid
      ══════════════════════════════════════════════════════ */}
      <section
        className="px-5 md:px-12"
        style={{
          background: "var(--cream)",
          paddingTop: 56,
          paddingBottom: 56,
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
              Meet the Team
            </p>
            <div style={{ width: 36, height: 2, background: "var(--gold)", marginBottom: 40 }} />
          </Reveal>

          {/* Category label */}
          <div
            style={{
              borderTop: "1px solid var(--rule)",
              paddingTop: 12,
              marginBottom: 24,
            }}
          >
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 10,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--stone-lt)",
              }}
            >
              Leadership
            </span>
          </div>

          {/* Team member */}
          <Reveal>
            <div
              className="grid grid-cols-2 md:grid-cols-4"
              style={{
                gap: 24,
                marginBottom: 48,
              }}
            >
              <div>
                {/* B&W portrait placeholder */}
                <div
                  style={{
                    aspectRatio: "3/4",
                    background: "#C8C0B0",
                    marginBottom: 16,
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage:
                        "url('https://placehold.co/300x400/B0A898/C0B8A8?text=.')",
                      backgroundSize: "cover",
                      backgroundPosition: "center top",
                      filter: "grayscale(100%) contrast(1.05)",
                    }}
                  />
                </div>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 18,
                    fontWeight: 400,
                    color: "var(--charcoal)",
                    marginBottom: 2,
                  }}
                >
                  J. Goldstein
                </p>
                <p
                  className={`${inter.className}`}
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.08em",
                    color: "var(--stone)",
                  }}
                >
                  Owner &amp; Founder
                </p>
              </div>
            </div>
          </Reveal>

          {/* Divider + Crew category */}
          <div
            style={{
              borderTop: "1px solid var(--rule)",
              paddingTop: 12,
              marginBottom: 24,
            }}
          >
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 10,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--stone-lt)",
              }}
            >
              Field Crew
            </span>
          </div>

          <Reveal delay={0.08}>
            <div
              className="grid grid-cols-2 md:grid-cols-4"
              style={{
                gap: 24,
                marginBottom: 48,
              }}
            >
              {[
                { name: "Stucco Specialists", role: "Lath & Stucco Division" },
                { name: "Drywall Team",        role: "Interior Division" },
                { name: "Stone Crew",          role: "Stone & Brick Division" },
                { name: "Paint Team",          role: "Interior/Exterior Painting" },
              ].map((m, i) => (
                <div key={m.name}>
                  <div
                    style={{
                      aspectRatio: "3/4",
                      background: "#C0B8A8",
                      marginBottom: 12,
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url('https://placehold.co/300x400/${["B8B0A0", "B0A898", "A8A090", "A09888"][i]}/C0B8A8?text=.')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center top",
                        filter: "grayscale(100%) contrast(1.05)",
                      }}
                    />
                  </div>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 18,
                      fontWeight: 400,
                      color: "var(--charcoal)",
                      marginBottom: 2,
                    }}
                  >
                    {m.name}
                  </p>
                  <p
                    className={`${inter.className}`}
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.08em",
                      color: "var(--stone)",
                    }}
                  >
                    {m.role}
                  </p>
                </div>
              ))}
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
            maxWidth: 1400,
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
              "
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
              }}
            >
              You work to unique requirements. We offer unique solutions. Our
              team collaborates with key stakeholders across your project to
              ensure all guidance is considered, practical, and thorough.
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
              — J. Goldstein, Founder, TerraGold Construction Services
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          Our Certifications / (mirrors "Our Memberships/")
      ══════════════════════════════════════════════════════ */}
      <section
        className="px-5 md:px-12"
        style={{
          background: "var(--cream)",
          paddingTop: 56,
          paddingBottom: 56,
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
              Our Certifications
            </p>
            <div style={{ width: 36, height: 2, background: "var(--gold)", marginBottom: 32 }} />
          </Reveal>

          <Reveal delay={0.08}>
            <div
              style={{
                display: "flex",
                gap: 40,
                alignItems: "center",
                flexWrap: "wrap",
                paddingTop: 32,
                borderTop: "1px solid var(--rule)",
              }}
            >
              {[
                "Licensed Florida Contractor",
                "Fully Insured",
                "EIFS Certified",
                "Warranty on All Work",
                "BBB Accredited",
              ].map((cert) => (
                <div
                  key={cert}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 12,
                    letterSpacing: "0.08em",
                    color: "var(--stone)",
                  }}
                >
                  <span style={{ color: "var(--gold)", fontSize: 16 }}>◈</span>
                  {cert}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          Contact CTA (mirrors the Kreisson bottom contact band)
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

            {/* Logo */}
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
