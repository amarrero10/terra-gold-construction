"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/services",      label: "Services" },
  { href: "/about",         label: "About" },
  { href: "/gallery",       label: "Gallery" },
  { href: "/testimonials",  label: "Testimonials" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: "var(--cream)",
          borderBottom: "1px solid var(--rule)",
          height: "68px",
        }}
      >
        <div
          className="mx-auto px-8 flex items-center justify-between h-full"
          style={{ maxWidth: "1400px" }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div
              style={{
                width: 32,
                height: 32,
                border: "1px solid var(--gold)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--gold)",
                  letterSpacing: "0.05em",
                }}
              >
                TG
              </span>
            </div>
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 13,
                fontWeight: 400,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--charcoal)",
              }}
            >
              TerraGold
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 12,
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: path === l.href ? "var(--gold)" : "var(--stone)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--charcoal)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color =
                    path === l.href ? "var(--gold)" : "var(--stone)")
                }
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--cream)",
                background: "var(--charcoal)",
                padding: "10px 22px",
                textDecoration: "none",
                display: "inline-block",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.82")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setOpen(!open)}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: i === 1 ? 16 : 22,
                  height: 1,
                  background: "var(--charcoal)",
                  transition: "all 0.25s",
                  transformOrigin: "center",
                  transform:
                    open && i === 0
                      ? "rotate(45deg) translate(4px,4px)"
                      : open && i === 2
                      ? "rotate(-45deg) translate(4px,-4px)"
                      : open && i === 1
                      ? "scaleX(0)"
                      : "none",
                }}
              />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 40,
          background: "var(--cream)",
          paddingTop: 68,
          transition: "opacity 0.3s, transform 0.3s",
          opacity: open ? 1 : 0,
          transform: open ? "none" : "translateY(-6px)",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        <div className="px-8 pt-12 flex flex-col gap-8">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 40,
              color: "var(--charcoal)",
            }}
          >
            Home
          </Link>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 40,
                color: path === l.href ? "var(--gold)" : "var(--charcoal)",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 12,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--cream)",
              background: "var(--charcoal)",
              padding: "14px 28px",
              marginTop: 8,
              display: "inline-block",
              width: "fit-content",
            }}
          >
            Free Estimate
          </Link>
        </div>
      </div>
    </>
  );
}
