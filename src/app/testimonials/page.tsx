"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { FlowButton } from "@/components/ui/flow-button";
import { motion, useInView } from "motion/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap", weight: "400" });

function CountUp({ target, suffix = "", duration = 1800 }: { target: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
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

const reviews = [
  { name: "Maria G.",            loc: "Tampa, FL",         svc: "Stucco & Painting",       stars: 5, text: "TerraGold completely transformed our home's exterior. The stucco work was flawless — they matched our existing texture perfectly on the repair areas. You can't even tell there was damage." },
  { name: "Robert K.",           loc: "Brandon, FL",       svc: "Drywall Repair",          stars: 5, text: "We had significant water damage from a burst pipe. TerraGold came out quickly, assessed it, and completed the repair ahead of schedule. The finish is seamless." },
  { name: "Jennifer L.",         loc: "Clearwater, FL",    svc: "Stone Veneer",            stars: 5, text: "We wanted stone veneer on our fireplace and exterior columns. The result looks like natural stone — absolutely stunning. Our neighbors keep asking who did the work." },
  { name: "David M.",            loc: "Wesley Chapel, FL", svc: "Full Exterior",           stars: 5, text: "From lath to stucco to paint, TerraGold handled our entire exterior renovation. They take pride in their work. Everything was done right the first time at a fair price." },
  { name: "Sandra T.",           loc: "Land O' Lakes, FL", svc: "Siding & Soffit",         stars: 5, text: "The shiplap siding and soffit installation was done beautifully. The crew was respectful, cleaned up every day, and communicated throughout. Will definitely use them again." },
  { name: "Carlos R.",           loc: "Tampa, FL",         svc: "Interior Painting",       stars: 5, text: "Interior painting of our entire 3,000 sqft home. They prepped properly and the finish is incredible — no drips, no missed spots. Best painters I've hired." },
  { name: "Patricia W.",         loc: "St. Petersburg, FL",svc: "Stucco Repair",           stars: 5, text: "Had cracks in our stucco after a storm. TerraGold came out the same week, assessed the damage, and repaired everything perfectly. Very thorough team." },
  { name: "Michael & Anna B.",   loc: "Tampa, FL",         svc: "Home Transformation",     stars: 5, text: "TerraGold flipped our investment property for Airbnb. The transformation was incredible — guests constantly compliment the quality of the finishes." },
];

function Stars({ n }: { n: number }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[1,2,3,4,5].map((s) => (
        <span key={s} style={{ color: s <= n ? "var(--gold)" : "var(--rule)", fontSize: 12 }}>★</span>
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  const [feat, setFeat] = useState(0);
  const featured = [reviews[0], reviews[3], reviews[7]];

  return (
    <>
      {/* Page header */}
      <div style={{ paddingTop: 84, background: "var(--cream)", borderBottom: "1px solid var(--rule)" }}>
        <div className="px-5 md:px-12" style={{ maxWidth: 1400, margin: "0 auto", paddingTop: 48, paddingBottom: 48 }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 12 }}
          >
            Rave Reviews /
          </motion.p>
          <div style={{ overflow: "hidden" }}>
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(48px, 6vw, 80px)", fontWeight: 400, letterSpacing: "-0.03em", textTransform: "uppercase", color: "var(--charcoal)", lineHeight: 0.95 }}
            >
              Happy Clients
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Featured pull quote */}
      <section className="px-5 md:px-12" style={{ background: "var(--cream-alt)", paddingTop: 64, paddingBottom: 64, borderBottom: "1px solid var(--rule)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "48px 1fr", gap: 20 }}>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 80, fontWeight: 300, color: "var(--gold)", lineHeight: 0.7, opacity: 0.5 }}>
              "
            </span>
            <div>
              <motion.div
                key={feat}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 300, color: "var(--charcoal)", lineHeight: 1.4, marginBottom: 24 }}>
                  {featured[feat].text}
                </p>
                <Stars n={featured[feat].stars} />
                <p className={`${inter.className}`} style={{ fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--charcoal)", marginTop: 12 }}>
                  {featured[feat].name}
                </p>
                <p className={`${inter.className}`} style={{ fontSize: 11, color: "var(--stone-lt)", marginTop: 2 }}>
                  {featured[feat].loc} · {featured[feat].svc}
                </p>
              </motion.div>

              {/* Nav dots */}
              <div style={{ display: "flex", gap: 8, marginTop: 28 }}>
                {featured.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setFeat(i)}
                    style={{
                      width: feat === i ? 28 : 8,
                      height: 8,
                      background: feat === i ? "var(--gold)" : "var(--rule)",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All reviews */}
      <section className="px-5 md:px-12" style={{ background: "var(--white)", paddingTop: 56, paddingBottom: 56 }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Reveal>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 30, fontWeight: 400, color: "var(--charcoal)", marginBottom: 8 }}>
              All Reviews
            </p>
            <div style={{ width: 36, height: 2, background: "var(--gold)", marginBottom: 40 }} />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 1, background: "var(--rule)" }}>
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.05}>
                <div style={{ background: "var(--white)", padding: "32px 28px", height: "100%", display: "flex", flexDirection: "column" }}>
                  <Stars n={r.stars} />
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 18, fontWeight: 300, color: "var(--charcoal)", lineHeight: 1.5, flex: 1, marginTop: 16, marginBottom: 20 }}>
                    &ldquo;{r.text}&rdquo;
                  </p>
                  <div style={{ borderTop: "1px solid var(--rule)", paddingTop: 16 }}>
                    <p className={`${inter.className}`} style={{ fontSize: 12, fontWeight: 400, color: "var(--charcoal)", marginBottom: 3 }}>
                      {r.name}
                    </p>
                    <p className={`${inter.className}`} style={{ fontSize: 11, color: "var(--stone-lt)", letterSpacing: "0.06em" }}>
                      {r.loc} · {r.svc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "var(--cream)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ maxWidth: 1400, margin: "0 auto", borderLeft: "1px solid var(--rule)" }}>
          {[
            { target: 5, suffix: ".0", l: "Average Rating" },
            { target: 100, suffix: "+", l: "Verified Reviews" },
            { target: 100, suffix: "%", l: "Would Recommend" },
          ].map((s) => (
            <div key={s.l} style={{ padding: "48px 40px", borderRight: "1px solid var(--rule)", textAlign: "center" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 56, fontWeight: 400, color: "var(--charcoal)", lineHeight: 1 }}>
                <CountUp target={s.target} suffix={s.suffix} />
              </div>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--stone)", marginTop: 8 }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 md:px-12" style={{ background: "var(--cream)", paddingTop: 56, paddingBottom: 56, textAlign: "center" }}>
        <Reveal>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 40, fontWeight: 400, color: "var(--charcoal)", marginBottom: 16 }}>
            Join our happy clients<span style={{ color: "var(--gold)" }}>.</span>
          </p>
          <p className={`${inter.className}`} style={{ fontSize: 14, fontWeight: 300, color: "var(--stone)", marginBottom: 32 }}>
            Get your free, no-obligation estimate today.
          </p>
          <FlowButton href="/contact" text="Free Estimate" variant="charcoal" />
        </Reveal>
      </section>
    </>
  );
}
