"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

/* ─────────────────────────────────────────────
   Project data — real photos, proper categories
───────────────────────────────────────────── */
const allProjects = [
  { id: 1,  src: "/pic1.webp",  cat: "Stucco",         title: "Exterior Stucco Application",   loc: "Tampa, FL",          ratio: 4 / 3  },
  { id: 2,  src: "/pic2.webp",  cat: "Stucco",         title: "Large Residential Build",        loc: "Tampa, FL",          ratio: 4 / 3  },
  { id: 3,  src: "/pic3.webp",  cat: "Stucco",         title: "Multi-Story Exterior System",    loc: "Wesley Chapel, FL",  ratio: 3 / 4  },
  { id: 4,  src: "/pic4.webp",  cat: "Transformation", title: "Luxury Waterfront Build",        loc: "Clearwater, FL",     ratio: 16 / 9 },
  { id: 5,  src: "/pic5.webp",  cat: "Stone",          title: "Brick & Stucco Column Detail",  loc: "Tampa, FL",          ratio: 3 / 4  },
  { id: 7,  src: "/pic7.webp",  cat: "Transformation", title: "Modern Coastal Exterior",        loc: "Tampa, FL",          ratio: 16 / 9 },
  { id: 8,  src: "/pic8.webp",  cat: "Stucco",         title: "Waterfront Stucco Application", loc: "St. Pete Beach, FL", ratio: 16 / 9 },
  { id: 9,  src: "/pic9.webp",  cat: "Stucco",         title: "Residential Stucco Finish",     loc: "Tampa, FL",          ratio: 4 / 3  },
  { id: 10, src: "/pic10.webp", cat: "Stone",          title: "Mediterranean Stone Facade",    loc: "Tampa, FL",          ratio: 16 / 9 },
  { id: 11, src: "/pic11.webp", cat: "Stucco",         title: "Coastal Stucco System",         loc: "Tierra Verde, FL",   ratio: 3 / 4  },
  { id: 12, src: "/pic12.webp", cat: "Stucco",         title: "Multi-Unit Development",        loc: "Tampa, FL",          ratio: 16 / 9 },
  { id: 13, src: "/pic13.webp", cat: "Stucco",         title: "White Exterior Stucco",         loc: "Brandon, FL",        ratio: 4 / 3  },
  { id: 14, src: "/pic14.webp", cat: "Transformation", title: "Colonial Exterior Complete",    loc: "St. Pete, FL",       ratio: 3 / 4  },
  { id: 15, src: "/pic15.webp", cat: "Transformation", title: "Three-Story Coastal Build",     loc: "Clearwater, FL",     ratio: 3 / 4  },
  { id: 16, src: "/pic16.webp", cat: "Transformation", title: "Modern Exterior Overhaul",      loc: "Tampa, FL",          ratio: 3 / 4  },
  { id: 17, src: "/pic17.webp", cat: "Stucco",         title: "Contemporary Stucco & Siding",  loc: "Tampa, FL",          ratio: 4 / 3  },
  { id: 18, src: "/pic18.webp", cat: "Stucco",         title: "Cementous Stucco System",       loc: "Wesley Chapel, FL",  ratio: 4 / 3  },
  { id: 19, src: "/pic19.webp", cat: "Stucco",         title: "Large Scale Stucco Renovation", loc: "Land O' Lakes, FL",  ratio: 4 / 3  },
  { id: 20, src: "/pic20.webp", cat: "Siding",         title: "Interior Shiplap Installation", loc: "Tampa, FL",          ratio: 3 / 4  },
  { id: 21, src: "/pic21.webp", cat: "Stucco",         title: "Dark Stucco Exterior Build",    loc: "Tampa, FL",          ratio: 16 / 9 },
  { id: 22, src: "/pic22.webp", cat: "Stucco",         title: "Exterior Stucco Renovation",    loc: "Tampa, FL",          ratio: 4 / 3  },
  { id: 23, src: "/pic23.webp", cat: "Transformation", title: "Luxury Exterior Complete",      loc: "Clearwater, FL",     ratio: 16 / 9 },
  { id: 24, src: "/pic24.webp", cat: "Stone",          title: "Historic Brick Restoration",    loc: "Tampa, FL",          ratio: 16 / 9 },
];

const cats = ["All", "Stucco", "Stone", "Transformation", "Siding"];

type Project = typeof allProjects[number];

/* ─────────────────────────────────────────────
   Lightbox
───────────────────────────────────────────── */
function Lightbox({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(10,10,10,0.92)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          background: "rgba(255,255,255,0.08)",
          border: "none",
          borderRadius: "50%",
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "rgba(245,240,232,0.8)",
          transition: "background 0.2s",
          zIndex: 10,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.16)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
      >
        <X size={20} />
      </button>

      {/* Image container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.94 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          maxWidth: "90vw",
          maxHeight: "85vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src={project.src}
          alt={project.title}
          style={{
            maxWidth: "90vw",
            maxHeight: "78vh",
            objectFit: "contain",
            display: "block",
          }}
        />
        {/* Caption */}
        <div
          style={{
            paddingTop: 14,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            gap: 16,
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 9,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--gold)",
                display: "block",
                marginBottom: 4,
              }}
            >
              {project.cat}
            </span>
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 22,
                fontWeight: 400,
                color: "rgba(245,240,232,0.9)",
              }}
            >
              {project.title}
            </span>
          </div>
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 11,
              color: "rgba(245,240,232,0.4)",
              whiteSpace: "nowrap",
            }}
          >
            {project.loc}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Per-image animated card
───────────────────────────────────────────── */
interface ProjectCardProps {
  project: Project;
  delay?: number;
  onClick: () => void;
}

function ProjectCard({ project, delay = 0, onClick }: ProjectCardProps) {
  const cardRef = useRef(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "100px" });
  const [loaded, setLoaded] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Handle cached images that won't fire onLoad
  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ width: "100%" }}
    >
      <div
        onClick={onClick}
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: String(project.ratio),
          overflow: "hidden",
          cursor: "zoom-in",
          background: "#1e1c18",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image */}
        <img
          ref={imgRef}
          src={project.src}
          alt={project.title}
          onLoad={() => setLoaded(true)}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-[transform,opacity] duration-700 ease-out",
            loaded ? "opacity-100" : "opacity-0",
            hovered ? "scale-105" : "scale-100",
          )}
        />

        {/* Gold color tint overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(212,175,55,0.12) 0%, transparent 50%)",
            mixBlendMode: "multiply",
            pointerEvents: "none",
          }}
        />

        {/* Hover overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.1) 55%, transparent 100%)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.35s ease",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "20px 20px",
            pointerEvents: "none",
          }}
        >
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 10,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: 5,
            }}
          >
            {project.cat}
          </span>
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 20,
              fontWeight: 400,
              color: "#fdfaf5",
              lineHeight: 1.2,
            }}
          >
            {project.title}
          </span>
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 11,
              color: "rgba(245,240,232,0.55)",
              marginTop: 4,
            }}
          >
            {project.loc}
          </span>
        </div>

        {/* Category badge */}
        <div
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            background: "rgba(10,10,10,0.65)",
            backdropFilter: "blur(6px)",
            padding: "4px 10px",
            pointerEvents: "none",
          }}
        >
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 9,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(245,240,232,0.85)",
            }}
          >
            {project.cat}
          </span>
        </div>

        {/* Loading shimmer */}
        {!loaded && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(90deg, #1e1c18 25%, #2a2820 50%, #1e1c18 75%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 1.6s infinite",
            }}
          />
        )}
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<Project | null>(null);

  const filtered =
    active === "All" ? allProjects : allProjects.filter((p) => p.cat === active);


  return (
    <>
      <style>{`
        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox project={lightbox} onClose={() => setLightbox(null)} />
        )}
      </AnimatePresence>

      {/* ── Page header ─────────────────────────── */}
      <div
        style={{
          paddingTop: 84,
          background: "var(--cream)",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <div className="px-5 md:px-12" style={{ maxWidth: 1400, margin: "0 auto", paddingTop: 48, paddingBottom: 48 }}>
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
              marginBottom: 8,
            }}
          >
            Our Work
          </motion.p>
          <div style={{ width: 36, height: 2, background: "var(--gold)", marginBottom: 12 }} />
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
              Project Gallery
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
            A collection of completed projects across Tampa Bay — each one a
            demonstration of our commitment to craftsmanship and detail.
          </motion.p>
        </div>
      </div>

      {/* ── Filter + Masonry grid ────────────────── */}
      <section className="px-5 md:px-12" style={{ background: "var(--white)", paddingTop: 40, paddingBottom: 80 }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>

          {/* Filter pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              marginBottom: 48,
              paddingBottom: 24,
              borderBottom: "1px solid var(--rule)",
            }}
          >
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

          {/* Count */}
          <motion.p
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 11,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--stone-lt)",
              marginBottom: 32,
            }}
          >
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          </motion.p>

          {/* Masonry grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="columns-2 md:columns-3"
              style={{ gap: 8 }}
            >
              {filtered.map((project, i) => (
                <div key={project.id} style={{ breakInside: "avoid", marginBottom: 8 }}>
                  <ProjectCard
                    project={project}
                    delay={(i % 6) * 0.06}
                    onClick={() => setLightbox(project)}
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div
              style={{
                textAlign: "center",
                padding: "80px 0",
                color: "var(--stone-lt)",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 13,
                letterSpacing: "0.08em",
              }}
            >
              No projects in this category yet.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
