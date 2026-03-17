"use client";

import Link from "next/link";
import Image from "next/image";

const serviceLinks = [
  "Stucco & Lath", "Drywall Repair & Install", "Stone & Brick Veneer",
  "Interior & Exterior Paint", "Siding & Soffit", "Home Transformations",
];

const navLinks = [
  { href: "/",             label: "Home" },
  { href: "/services",     label: "Services" },
  { href: "/about",        label: "About" },
  { href: "/gallery",      label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact",      label: "Contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--charcoal)", color: "var(--cream)" }}>
      {/* Main columns */}
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "72px 48px 48px",
          display: "grid",
          gridTemplateColumns: "2fr 1.5fr 1fr 1.5fr",
          gap: 64,
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* Brand */}
        <div>
          <div style={{ marginBottom: 20 }}>
            <Image
              src="/logo.png"
              alt="TerraGold Construction Services"
              width={200}
              height={50}
              style={{ height: 44, width: "auto", objectFit: "contain" }}
            />
          </div>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 300, lineHeight: 1.8, color: "rgba(245,240,232,0.5)", maxWidth: 280 }}>
            Over 15 years mastering Stucco, Lath, Drywall, Stone, Painting,
            and Siding across the Tampa Bay Area.
          </p>
        </div>

        {/* Services */}
        <div>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>
            Services
          </p>
          <ul style={{ listStyle: "none" }}>
            {serviceLinks.map((s) => (
              <li key={s} style={{ marginBottom: 10 }}>
                <Link
                  href="/services"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 300, color: "rgba(245,240,232,0.5)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cream)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.5)")}
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Nav */}
        <div>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>
            Company
          </p>
          <ul style={{ listStyle: "none" }}>
            {navLinks.map((l) => (
              <li key={l.href} style={{ marginBottom: 10 }}>
                <Link
                  href={l.href}
                  style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 300, color: "rgba(245,240,232,0.5)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cream)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.5)")}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>
            Contact
          </p>
          {[
            { label: "Phone", lines: [{ text: "310-855-4521", href: "tel:3108554521" }, { text: "813-669-8396", href: "tel:8136698396" }] },
            { label: "Email", lines: [{ text: "Jgoldstein@terragoldconstruction.com", href: "mailto:Jgoldstein@terragoldconstruction.com" }] },
            { label: "Address", lines: [{ text: "8208 Dunham Station Dr, Tampa FL 33647", href: null }] },
          ].map((g) => (
            <div key={g.label} style={{ marginBottom: 18 }}>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(245,240,232,0.3)", marginBottom: 4 }}>
                {g.label}
              </p>
              {g.lines.map((line) =>
                line.href ? (
                  <a key={line.text} href={line.href} style={{ display: "block", fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 300, color: "rgba(245,240,232,0.5)", textDecoration: "none", lineHeight: 1.7 }}>{line.text}</a>
                ) : (
                  <p key={line.text} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 13, fontWeight: 300, color: "rgba(245,240,232,0.5)", lineHeight: 1.7 }}>{line.text}</p>
                )
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "20px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 300, color: "rgba(245,240,232,0.3)" }}>
          © {new Date().getFullYear()} TerraGold Construction Services — All Rights Reserved.
        </p>
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, fontWeight: 300, color: "rgba(245,240,232,0.3)" }}>
          Tampa Bay Area
        </p>
      </div>
    </footer>
  );
}
