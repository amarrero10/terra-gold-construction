"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";

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

const cats = ["All", "Stucco", "Drywall", "Stone", "Painting", "Siding", "Transformation"];

const projects = [
  { id: 1, cat: "Stucco",         title: "Exterior Stucco Renovation",     loc: "Tampa, FL",         size: "large",  bg: "#2E2A24" },
  { id: 2, cat: "Stone",          title: "Stone Veneer Facade",             loc: "Brandon, FL",       size: "medium", bg: "#342E26" },
  { id: 3, cat: "Painting",       title: "Full Exterior Repaint",           loc: "Clearwater, FL",    size: "medium", bg: "#2A2820" },
  { id: 4, cat: "Drywall",        title: "Smooth Drywall Finish",           loc: "Tampa, FL",         size: "small",  bg: "#303028" },
  { id: 5, cat: "Transformation", title: "Lakehills Airbnb Flip",           loc: "Tampa, FL",         size: "large",  bg: "#2C2820" },
  { id: 6, cat: "Stucco",         title: "Synthetic EIFS System",           loc: "Wesley Chapel, FL", size: "medium", bg: "#322C24" },
  { id: 7, cat: "Stone",          title: "Fireplace Stone Renovation",      loc: "Tampa, FL",         size: "small",  bg: "#28261E" },
  { id: 8, cat: "Siding",         title: "Shiplap Siding Install",         loc: "Land O' Lakes, FL", size: "medium", bg: "#2E2A20" },
  { id: 9, cat: "Painting",       title: "Interior Full-Home Paint",        loc: "Brandon, FL",       size: "small",  bg: "#2C2A22" },
  { id: 10, cat: "Drywall",       title: "Water Damage Restoration",        loc: "Tampa, FL",         size: "medium", bg: "#302C28" },
  { id: 11, cat: "Stucco",        title: "Cementous Stucco Repair",         loc: "St. Pete, FL",      size: "small",  bg: "#262420" },
  { id: 12, cat: "Transformation", title: "Commercial Exterior Overhaul",   loc: "Tampa, FL",         size: "large",  bg: "#2A2418" },
];

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <>
      {/* Page header */}
      <div style={{ paddingTop: 68, background: "var(--cream)", borderBottom: "1px solid var(--rule)" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "64px 48px" }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 12 }}
          >
            Our Work /
          </motion.p>
          <div style={{ overflow: "hidden" }}>
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(48px, 6vw, 80px)", fontWeight: 400, letterSpacing: "-0.03em", textTransform: "uppercase", color: "var(--charcoal)", lineHeight: 0.95 }}
            >
              Project Gallery
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 14, fontWeight: 300, lineHeight: 1.8, color: "var(--stone)", maxWidth: 520, marginTop: 24 }}
          >
            A collection of completed projects across Tampa Bay — each one a
            demonstration of our commitment to craftsmanship and detail.
          </motion.p>
        </div>
      </div>

      {/* Filter + Grid */}
      <section style={{ background: "var(--white)", padding: "48px 48px 80px" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          {/* Filter pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 48, paddingBottom: 24, borderBottom: "1px solid var(--rule)" }}>
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "7px 18px",
                  border: active === c ? "1px solid var(--charcoal)" : "1px solid var(--rule)",
                  background: active === c ? "var(--charcoal)" : "transparent",
                  color: active === c ? "var(--cream)" : "var(--stone)",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 3 }}>
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.35, delay: i * 0.03 }}
                  style={{ gridColumn: p.size === "large" ? "span 2" : "span 1" }}
                >
                  <div
                    style={{
                      aspectRatio: p.size === "large" ? "16/9" : p.size === "medium" ? "4/3" : "1/1",
                      position: "relative",
                      overflow: "hidden",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      const img = e.currentTarget.querySelector(".gi") as HTMLElement;
                      if (img) img.style.transform = "scale(1.05)";
                      const ov = e.currentTarget.querySelector(".gov") as HTMLElement;
                      if (ov) ov.style.opacity = "1";
                    }}
                    onMouseLeave={(e) => {
                      const img = e.currentTarget.querySelector(".gi") as HTMLElement;
                      if (img) img.style.transform = "scale(1)";
                      const ov = e.currentTarget.querySelector(".gov") as HTMLElement;
                      if (ov) ov.style.opacity = "0";
                    }}
                  >
                    <div
                      className="gi"
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: p.bg,
                        backgroundImage: `url('https://placehold.co/800x600/${p.bg.slice(1)}/3E3830?text=.')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        filter: "grayscale(60%) contrast(1.1)",
                        transition: "transform 0.65s cubic-bezier(0.25,0.46,0.45,0.94)",
                      }}
                    />
                    {/* Hover overlay */}
                    <div
                      className="gov"
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to top, rgba(26,24,20,0.85) 0%, transparent 55%)",
                        opacity: 0,
                        transition: "opacity 0.35s",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        padding: 20,
                      }}
                    >
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 4 }}>
                        {p.cat}
                      </span>
                      <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 400, color: "var(--white)" }}>
                        {p.title}
                      </span>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, color: "rgba(245,240,232,0.6)", marginTop: 2 }}>
                        {p.loc}
                      </span>
                    </div>

                    {/* Category badge */}
                    <div style={{ position: "absolute", top: 12, left: 12, background: "rgba(245,240,232,0.9)", padding: "4px 10px" }}>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--charcoal)" }}>
                        {p.cat}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
