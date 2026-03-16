"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/ui/marquee";
import { Gelasio, Inter } from "next/font/google";

const gelasio = Gelasio({
  weight: "500",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

function CountUp({
  target,
  suffix = "",
  duration = 1800,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

const expertise = [
  {
    title: "Stucco Systems",
    desc: "Cementous and synthetic (EIFS) stucco applied by our own team — no sub-contractors. Perfect texture matching on repairs and new applications.",
  },
  {
    title: "Drywall Solutions",
    desc: "Build-outs, water-damage repairs, and specialty textures including Knock-down, Spanish Lace, and Orange Peel.",
  },
  {
    title: "Stone & Painting",
    desc: "Manufactured and natural stone veneer, fireplace renovations, and professional interior/exterior painting for residential and commercial.",
  },
];

const sectors = [
  { label: "Stucco & Lath", desc: "Cementous, synthetic EIFS, and full lath systems" },
  { label: "Drywall Repair & Install", desc: "Build-outs, water damage, texture options" },
  {
    label: "Stone & Brick Veneer",
    desc: "Manufactured, natural stone, fireplace, architectural trim",
  },
  { label: "Interior & Exterior Paint", desc: "Residential and commercial, full prep and finish" },
  { label: "Siding, Soffit & Foam", desc: "Shiplap, soffit, architectural foam decorations" },
];

const projects = [
  { label: "Stucco", title: "Exterior Stucco Renovation", loc: "Tampa, FL" },
  { label: "Transformation", title: "Lakehills Airbnb Flip", loc: "Tampa, FL" },
  { label: "Stone", title: "Stone Veneer Facade", loc: "Brandon, FL" },
];

export default function HomePage() {
  const [openSector, setOpenSector] = useState<number | null>(null);

  return (
    <>
      {/* ══════════════════════════════════════════════════════
          HERO — full viewport photo + large serif heading
      ══════════════════════════════════════════════════════ */}
      <section style={{ paddingTop: 68 }}>
        {/* Full-viewport photo */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "75vh",
            minHeight: 480,
            overflow: "hidden",
            background: "#2A2622",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url('/hero-img.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center 30%",
              filter: "none",
              opacity: 0.85,
            }}
          />
          {/* Bottom fade into cream */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "55%",
              background: "linear-gradient(to bottom, transparent 0%, var(--cream) 100%)",
            }}
          />
        </div>

        {/* Hero text — overlaps photo bottom edge */}
        <div
          style={{
            background: "var(--cream)",
            marginTop: -100,
            position: "relative",
            zIndex: 2,
            padding: "48px 64px 120px",
            maxWidth: 1400,
            margin: "-100px auto 0",
          }}
        >
          <div>
            <BlurFade delay={0.1} duration={0.7} yOffset={20} blur="8px">
              <h1
                className={`${gelasio.className}`}
                style={{
                  fontSize: "clamp(60px, 8vw, 120px)",
                  fontWeight: 400,
                  letterSpacing: "-0.03em",
                  lineHeight: 0.93,
                  color: "var(--charcoal)",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                Construction &
              </h1>
            </BlurFade>
            <BlurFade delay={0.28} duration={0.7} yOffset={20} blur="8px">
              <div
                className={`${gelasio.className}`}
                style={{
                  fontSize: "clamp(60px, 8vw, 120px)",
                  fontWeight: 400,
                  letterSpacing: "-0.03em",
                  lineHeight: 0.93,
                  color: "var(--charcoal)",
                  textTransform: "uppercase",
                }}
              >
                Exterior Experts
              </div>
            </BlurFade>
          </div>

          <BlurFade delay={0.3} duration={0.65} yOffset={12} blur="4px">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 80,
                marginTop: 64,
                alignItems: "start",
              }}
            >
              <p
                style={{
                  fontSize: 17,
                  fontWeight: 300,
                  lineHeight: 1.85,
                  color: "var(--stone)",
                  maxWidth: 500,
                }}
                className={`${inter.className}`}
              >
                TerraGold is a forward-thinking construction company based in Tampa, FL, providing
                comprehensive stucco, drywall, stone, and painting services to residential and
                commercial clients across the Tampa Bay Area.
              </p>

              <div style={{ display: "flex", gap: 64, paddingTop: 6 }}>
                {[
                  { target: 15, suffix: "+", l: "Years of experience" },
                  { target: 500, suffix: "+", l: "Projects completed" },
                ].map((s) => (
                  <div key={s.l}>
                    <div
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 56,
                        fontWeight: 400,
                        color: "var(--charcoal)",
                        lineHeight: 1,
                      }}
                    >
                      <CountUp target={s.target} suffix={s.suffix} />
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--stone)",
                        marginTop: 8,
                      }}
                      className={`${inter.className}`}
                    >
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          Who We Are — intro text
      ══════════════════════════════════════════════════════ */}
      <section
        style={{
          background: "var(--cream-alt)",
          borderTop: "1px solid var(--rule)",
          padding: "140px 64px",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <Reveal>
            <p
              style={{
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 28,
              }}
              className={`${inter.className}`}
            >
              Who We Are /
            </p>
            <p
              style={{
                fontSize: 17,
                fontWeight: 300,
                lineHeight: 1.9,
                color: "var(--stone)",
                marginBottom: 40,
              }}
              className={`${inter.className}`}
            >
              Our team ensures better outcomes at every stage of your project lifecycle. With over
              15 years of diverse industry experience, we proactively manage your exterior and
              interior needs — stucco, lath, drywall, stone, painting, and siding.
            </p>
            <Link
              href="/about"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 12,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--charcoal)",
                textDecoration: "none",
                borderBottom: "1px solid var(--charcoal)",
                paddingBottom: 3,
              }}
            >
              Learn More →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          Services Marquee
      ══════════════════════════════════════════════════════ */}
      <section
        style={{
          background: "var(--charcoal)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "32px 0",
          overflow: "hidden",
        }}
      >
        <Marquee duration={50} pauseOnHover fade fadeAmount={8}>
          {[
            "Stucco & Lath",
            "Drywall Repair & Installation",
            "Stone & Brick Veneer",
            "Interior & Exterior Painting",
            "Siding & Soffit",
            "Architectural Foam",
            "Home Transformations",
            "Stucco Repair",
            "Natural Stone",
            "Fireplace Stone",
            "Shiplap Siding",
            "Popcorn Ceiling Removal",
            "EIFS Systems",
            "Commercial Painting",
            "Foam Decorations",
          ].map((s) => (
            <div
              key={s}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 32,
                padding: "0 32px",
                whiteSpace: "nowrap",
              }}
            >
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 11,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "rgba(245,240,232,0.8)",
                }}
              >
                {s}
              </span>
              <span style={{ color: "var(--gold)", fontSize: 10, opacity: 0.6 }}>✦</span>
            </div>
          ))}
        </Marquee>
      </section>

      {/* ══════════════════════════════════════════════════════
          Our Expertise /
      ══════════════════════════════════════════════════════ */}
      <section
        style={{
          background: "var(--cream)",
          padding: "140px 64px",
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
                marginBottom: 16,
              }}
            >
              Our Expertise<span style={{ color: "var(--gold)" }}>/</span>
            </p>
            <p
              className={`${inter.className}`}
              style={{
                fontSize: 16,
                fontWeight: 300,
                lineHeight: 1.85,
                color: "var(--stone)",
                maxWidth: 600,
                marginBottom: 72,
              }}
            >
              Our multidisciplinary team ensures better outcomes at every stage of your project
              lifecycle. With diverse industry experience, we proactively manage, build, and
              beautify your assets.
            </p>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              borderTop: "1px solid var(--rule)",
            }}
          >
            {expertise.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.08}>
                <div
                  style={{
                    padding: "64px 48px 64px 0",
                    borderRight: i < 2 ? "1px solid var(--rule)" : "none",
                    paddingLeft: i > 0 ? 48 : 0,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 11,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      marginBottom: 20,
                    }}
                  >
                    0{i + 1}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 32,
                      fontWeight: 400,
                      color: "var(--charcoal)",
                      marginBottom: 20,
                    }}
                  >
                    {e.title}
                  </h3>
                  <p
                    className={`${inter.className}`}
                    style={{
                      fontSize: 15,
                      fontWeight: 300,
                      lineHeight: 1.85,
                      color: "var(--stone)",
                    }}
                  >
                    {e.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          Services we offer / — accordion
      ══════════════════════════════════════════════════════ */}
      <section
        style={{
          background: "var(--white)",
          padding: "140px 64px",
          borderTop: "1px solid var(--rule)",
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "420px 1fr",
            gap: 120,
          }}
        >
          {/* Left heading — sticky */}
          <Reveal>
            <div style={{ position: "sticky", top: 100 }}>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 48,
                  fontWeight: 400,
                  color: "var(--charcoal)",
                  lineHeight: 1.1,
                  marginBottom: 28,
                }}
              >
                Services we
                <br />
                offer
                <span style={{ color: "var(--gold)" }}>/</span>
              </p>
              <p
                className={`${inter.className}`}
                style={{
                  fontSize: 16,
                  fontWeight: 300,
                  lineHeight: 1.85,
                  color: "var(--stone)",
                  marginBottom: 36,
                }}
              >
                We make complex projects simple. From structural repairs to full exterior
                transformations — all completed by our own team of professionals, never
                sub-contracted.
              </p>
              <Link
                href="/services"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 12,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--charcoal)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--charcoal)",
                  paddingBottom: 3,
                }}
              >
                All Services →
              </Link>
            </div>
          </Reveal>

          {/* Right: accordion rows */}
          <div>
            {sectors.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05}>
                <div
                  style={{
                    borderTop: "1px solid var(--rule)",
                    paddingTop: 28,
                    paddingBottom: 28,
                    cursor: "pointer",
                  }}
                  onClick={() => setOpenSector(openSector === i ? null : i)}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 14,
                        fontWeight: 400,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--charcoal)",
                      }}
                    >
                      {s.label}
                    </span>
                    <span
                      style={{
                        color: "var(--gold)",
                        fontSize: 20,
                        transition: "transform 0.3s",
                        transform: openSector === i ? "rotate(45deg)" : "none",
                        display: "inline-block",
                        lineHeight: 1,
                      }}
                    >
                      ↗
                    </span>
                  </div>
                  {openSector === i && (
                    <p
                      className={`${inter.className}`}
                      style={{
                        fontSize: 15,
                        fontWeight: 300,
                        color: "var(--stone)",
                        marginTop: 14,
                        lineHeight: 1.8,
                      }}
                    >
                      {s.desc}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
            <div style={{ borderTop: "1px solid var(--rule)" }} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          Insights & Projects /
      ══════════════════════════════════════════════════════ */}
      <section
        style={{
          background: "var(--cream)",
          padding: "140px 64px",
          borderTop: "1px solid var(--rule)",
        }}
      >
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                marginBottom: 64,
              }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 48,
                  fontWeight: 400,
                  color: "var(--charcoal)",
                }}
              >
                Insights &amp; Projects
                <span style={{ color: "var(--gold)" }}>/</span>
              </p>
              <Link
                href="/gallery"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 12,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--stone)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--rule)",
                  paddingBottom: 3,
                }}
              >
                View All →
              </Link>
            </div>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 32,
            }}
          >
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <Link href="/gallery" style={{ textDecoration: "none" }}>
                  <div
                    style={{
                      aspectRatio: "3/4",
                      background: "#2E2A24",
                      marginBottom: 24,
                      overflow: "hidden",
                      position: "relative",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget.querySelector(".img-inner") as HTMLElement;
                      if (el) el.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget.querySelector(".img-inner") as HTMLElement;
                      if (el) el.style.transform = "scale(1)";
                    }}
                  >
                    <div
                      className="img-inner"
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url('https://placehold.co/600x800/${["2E2A24", "342E26", "2A2820"][i]}/3E3A34?text=.')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        filter: "grayscale(70%) contrast(1.05)",
                        transition: "transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(193,154,53,0.2) 0%, transparent 50%)",
                        mixBlendMode: "multiply",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 11,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      marginBottom: 8,
                    }}
                  >
                    {p.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 26,
                      fontWeight: 400,
                      color: "var(--charcoal)",
                      marginBottom: 6,
                    }}
                  >
                    {p.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 13,
                      color: "var(--stone-lt)",
                    }}
                  >
                    {p.loc}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FIFTEEN YEARS — dark milestone section
      ══════════════════════════════════════════════════════ */}
      <section
        style={{
          background: "var(--charcoal)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Top: text + photo */}
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            padding: "120px 64px 0",
            gap: 80,
          }}
        >
          <Reveal>
            <p
              className={`${inter.className}`}
              style={{
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 28,
              }}
            >
              Our Promise /
            </p>
            <p
              className={`${inter.className}`}
              style={{
                fontSize: 17,
                fontWeight: 300,
                lineHeight: 1.9,
                color: "rgba(245,240,232,0.6)",
                marginBottom: 40,
              }}
            >
              Client safety is our top priority. We are clean, reliable, friendly, responsible, and
              detail oriented. We offer free estimates and warranty all of our jobs. You will pay
              what is fair and get a professional job done.
            </p>
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 12,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--cream)",
                background: "transparent",
                border: "1px solid rgba(245,240,232,0.3)",
                padding: "14px 32px",
                textDecoration: "none",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(245,240,232,0.7)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(245,240,232,0.3)")}
            >
              Free Estimate
            </Link>
          </Reveal>

          {/* B&W photo */}
          <Reveal delay={0.12}>
            <div
              style={{
                aspectRatio: "4/3",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: "url('https://placehold.co/800x600/1E1C18/282420?text=.')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "grayscale(100%) contrast(1.1)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, transparent 55%, rgba(26,24,20,0.65) 100%)",
                }}
              />
            </div>
          </Reveal>
        </div>

        {/* "FIFTEEN YEARS" */}
        <Reveal>
          <div
            style={{
              padding: "0 56px 24px",
              maxWidth: 1400,
              margin: "0 auto",
              overflow: "hidden",
            }}
          >
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(96px, 13vw, 200px)",
                fontWeight: 500,
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
                color: "var(--gold)",
                lineHeight: 0.88,
                whiteSpace: "nowrap",
              }}
            >
              Fifteen Years
            </h2>
          </div>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════════════════════
          Our Certifications /
      ══════════════════════════════════════════════════════ */}
      <section
        style={{
          background: "var(--cream)",
          padding: "140px 64px",
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
                marginBottom: 64,
              }}
            >
              Our Certifications
              <span style={{ color: "var(--gold)" }}>/</span>
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                borderTop: "1px solid var(--rule)",
                borderLeft: "1px solid var(--rule)",
              }}
            >
              {[
                { icon: "◈", title: "Licensed & Insured", sub: "Florida certified contractor" },
                { icon: "◆", title: "Warranty Backed", sub: "All work fully warranted" },
                { icon: "◉", title: "Free Estimates", sub: "No-obligation assessments" },
                { icon: "◑", title: "Family Operated", sub: "15+ years, our own team" },
              ].map((c) => (
                <div
                  key={c.title}
                  style={{
                    padding: "56px 40px",
                    borderRight: "1px solid var(--rule)",
                    borderBottom: "1px solid var(--rule)",
                  }}
                >
                  <div style={{ fontSize: 28, color: "var(--gold)", marginBottom: 24 }}>
                    {c.icon}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 26,
                      fontWeight: 400,
                      color: "var(--charcoal)",
                      marginBottom: 10,
                    }}
                  >
                    {c.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 14,
                      fontWeight: 300,
                      color: "var(--stone)",
                    }}
                  >
                    {c.sub}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
