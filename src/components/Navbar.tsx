"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HoverButton } from "@/components/ui/hover-glow-button";

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: "#000000",
          borderBottom: "1px solid rgba(212,175,55,0.18)",
          height: "84px",
        }}
      >
        <div
          className="px-4 md:px-16 flex items-center justify-between h-full"
          style={{ maxWidth: "1400px", margin: "0 auto" }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="TerraGold Construction Services"
              width={220}
              height={56}
              style={{ height: 62, width: "auto", objectFit: "contain", marginLeft: 10 }}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 14,
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: path === l.href ? "var(--gold)" : "rgba(245,240,232,0.55)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color =
                    path === l.href ? "var(--gold)" : "rgba(245,240,232,0.55)")
                }
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link href="/contact" style={{ textDecoration: "none" }}>
              <HoverButton
                glowColor="#7a5c00"
                backgroundColor="#d4af37"
                textColor="#0a0a0a"
                hoverTextColor="#0a0a0a"
                className="text-[11px] font-medium tracking-[0.14em] uppercase px-6 py-3"
              >
                Free Estimate
              </HoverButton>
            </Link>
          </div>

          {/* Mobile burger */}
          <button className="md:hidden flex flex-col gap-1.25 p-2" onClick={() => setOpen(!open)}>
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: i === 1 ? 16 : 22,
                  height: 1,
                  background: "rgba(245,240,232,0.8)",
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
          background: "#000000",
          paddingTop: 84,
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
              color: "rgba(245,240,232,0.9)",
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
                color: path === l.href ? "var(--gold)" : "rgba(245,240,232,0.9)",
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
              color: "#0a0a0a",
              background: "var(--gold)",
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
