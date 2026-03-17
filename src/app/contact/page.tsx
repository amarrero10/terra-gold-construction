"use client";

import { useRef, useState } from "react";
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

const services = [
  "Stucco / Synthetic Stucco",
  "Lath Installation",
  "Drywall Repair & Installation",
  "Stone & Brick Veneer",
  "Interior Painting",
  "Exterior Painting",
  "Siding & Soffit",
  "Home Transformation",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", message: "",
  });

  return (
    <>
      {/* ══════════════════════════════════════════════════════
          HERO — B&W full-bleed photo + "CONTACT US" overlay
          (mirrors the Kreisson reference exactly)
      ══════════════════════════════════════════════════════ */}
      <div
        style={{
          paddingTop: 84,
          position: "relative",
          height: "70vh",
          minHeight: 480,
          overflow: "hidden",
          background: "#E8E3DA",
        }}
      >
        {/* Background photo — B&W treatment */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('https://placehold.co/1600x900/C8C0B4/D0C8BC?text=.')",
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
            filter: "grayscale(100%) contrast(0.9) brightness(1.05)",
          }}
        />

        {/* Subtle light overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(245,240,232,0.18)",
          }}
        />

        {/* "Protect your project" — top-right label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            position: "absolute",
            top: 40,
            right: 48,
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 12,
            fontWeight: 300,
            letterSpacing: "0.08em",
            color: "var(--charcoal)",
          }}
        >
          Protect your project
        </motion.p>

        {/* Arrow — top-right corner decoration */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{
            position: "absolute",
            top: 80,
            right: 48,
            width: 28,
            height: 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid var(--charcoal)",
          }}
        >
          <span style={{ fontSize: 14, color: "var(--charcoal)" }}>↙</span>
        </motion.div>

        {/* "CONTACT US" — massive serif text */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            left: 0,
            right: 0,
            padding: "0 48px",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 12,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--stone)",
              marginBottom: 8,
            }}
          >
            Free No-Obligation Estimates
          </motion.div>

          <div style={{ overflow: "hidden" }}>
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(64px, 10vw, 140px)",
                fontWeight: 400,
                letterSpacing: "-0.03em",
                lineHeight: 0.92,
                color: "var(--charcoal)",
                textTransform: "uppercase",
              }}
            >
              Contact Us
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            style={{ marginTop: 24 }}
          >
            <a
              href="#contact-form"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--charcoal)",
                textDecoration: "none",
                border: "1px solid var(--charcoal)",
                padding: "10px 20px",
              }}
            >
              Get in Touch <span>›</span>
            </a>
          </motion.div>
        </div>

        {/* Circular TG seal — bottom left of photo */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 48,
            width: 88,
            height: 88,
            borderRadius: "50%",
            border: "1px solid var(--charcoal)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(245,240,232,0.9)",
          }}
        >
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 22,
              fontWeight: 600,
              color: "var(--gold)",
              lineHeight: 1,
            }}
          >
            TG
          </span>
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 7,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--charcoal)",
              marginTop: 3,
            }}
          >
            TerraGold
          </span>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          Contact info + Form
      ══════════════════════════════════════════════════════ */}
      <section
        id="contact-form"
        className="px-5 md:px-12"
        style={{
          background: "var(--cream)",
          paddingTop: 64,
          paddingBottom: 64,
          borderTop: "1px solid var(--rule)",
        }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-[300px_1fr]"
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            gap: 56,
          }}
        >
          {/* Left: contact details */}
          <Reveal>
            <div>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 28,
                  fontWeight: 400,
                  color: "var(--charcoal)",
                  marginBottom: 8,
                }}
              >
                Get in Touch
              </p>
              <div style={{ width: 36, height: 2, background: "var(--gold)", marginBottom: 28 }} />

              {[
                {
                  label: "Phone",
                  items: [
                    { text: "310-855-4521", href: "tel:3108554521" },
                    { text: "813-669-8396", href: "tel:8136698396" },
                  ],
                },
                {
                  label: "Email",
                  items: [
                    {
                      text: "Jgoldstein@terragoldconstruction.com",
                      href: "mailto:Jgoldstein@terragoldconstruction.com",
                    },
                  ],
                },
                {
                  label: "Address",
                  items: [
                    { text: "8208 Dunham Station Dr", href: null },
                    { text: "Tampa, FL 33647", href: null },
                  ],
                },
                {
                  label: "Hours",
                  items: [
                    { text: "Mon – Fri: 8:00am – 2:00pm", href: null },
                  ],
                },
              ].map((g) => (
                <div key={g.label} style={{ marginBottom: 28 }}>
                  <div
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 10,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--stone-lt)",
                      marginBottom: 6,
                    }}
                  >
                    {g.label}
                  </div>
                  {g.items.map((item) =>
                    item.href ? (
                      <a
                        key={item.text}
                        href={item.href}
                        style={{
                          display: "block",
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: 14,
                          fontWeight: 300,
                          color: "var(--charcoal)",
                          textDecoration: "none",
                          lineHeight: 1.7,
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "var(--gold)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "var(--charcoal)")
                        }
                      >
                        {item.text}
                      </a>
                    ) : (
                      <p
                        key={item.text}
                        className={`${inter.className}`}
                        style={{
                          fontSize: 14,
                          fontWeight: 300,
                          color: "var(--charcoal)",
                          lineHeight: 1.7,
                        }}
                      >
                        {item.text}
                      </p>
                    )
                  )}
                </div>
              ))}

              {/* Service area note */}
              <div
                style={{
                  marginTop: 36,
                  padding: "20px 20px 20px 18px",
                  borderLeft: "2px solid var(--gold)",
                  background: "var(--cream-alt)",
                }}
              >
                <p
                  className={`${inter.className}`}
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: 6,
                  }}
                >
                  Service Area
                </p>
                <p
                  className={`${inter.className}`}
                  style={{
                    fontSize: 13,
                    fontWeight: 300,
                    color: "var(--stone)",
                    lineHeight: 1.7,
                  }}
                >
                  Serving Tampa, St. Petersburg, Clearwater, Brandon, Wesley
                  Chapel &amp; surrounding areas.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.12}>
            {submitted ? (
              <div style={{ paddingTop: 48 }}>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 42,
                    fontWeight: 400,
                    color: "var(--charcoal)",
                    marginBottom: 12,
                  }}
                >
                  Thank you.
                </p>
                <p
                  className={`${inter.className}`}
                  style={{
                    fontSize: 14,
                    fontWeight: 300,
                    color: "var(--stone)",
                  }}
                >
                  We&apos;ll be in touch within one business day to schedule
                  your free estimate.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                {/* Row 1 */}
                <div
                  className="grid grid-cols-1 md:grid-cols-2"
                  style={{
                    gap: 24,
                    marginBottom: 32,
                  }}
                >
                  {[
                    { label: "Full Name *", key: "name", type: "text", ph: "John Smith", required: true },
                    { label: "Email Address *", key: "email", type: "email", ph: "john@example.com", required: true },
                  ].map((f) => (
                    <div key={f.key}>
                      <label
                        style={{
                          display: "block",
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: 10,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "var(--stone)",
                          marginBottom: 8,
                        }}
                      >
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        required={f.required}
                        placeholder={f.ph}
                        value={(form as Record<string, string>)[f.key]}
                        onChange={(e) =>
                          setForm({ ...form, [f.key]: e.target.value })
                        }
                        style={{
                          width: "100%",
                          background: "transparent",
                          border: "none",
                          borderBottom: "1px solid var(--rule)",
                          padding: "10px 0",
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: 14,
                          fontWeight: 300,
                          color: "var(--charcoal)",
                          outline: "none",
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderBottomColor = "var(--gold)")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderBottomColor = "var(--rule)")
                        }
                      />
                    </div>
                  ))}
                </div>

                {/* Row 2 */}
                <div
                  className="grid grid-cols-1 md:grid-cols-2"
                  style={{
                    gap: 24,
                    marginBottom: 32,
                  }}
                >
                  {[
                    { label: "Phone Number", key: "phone", type: "tel", ph: "(813) 000-0000", required: false },
                  ].map((f) => (
                    <div key={f.key}>
                      <label
                        style={{
                          display: "block",
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: 10,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "var(--stone)",
                          marginBottom: 8,
                        }}
                      >
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        required={f.required}
                        placeholder={f.ph}
                        value={(form as Record<string, string>)[f.key]}
                        onChange={(e) =>
                          setForm({ ...form, [f.key]: e.target.value })
                        }
                        style={{
                          width: "100%",
                          background: "transparent",
                          border: "none",
                          borderBottom: "1px solid var(--rule)",
                          padding: "10px 0",
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: 14,
                          fontWeight: 300,
                          color: "var(--charcoal)",
                          outline: "none",
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderBottomColor = "var(--gold)")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderBottomColor = "var(--rule)")
                        }
                      />
                    </div>
                  ))}

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 10,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--stone)",
                        marginBottom: 8,
                      }}
                    >
                      Service Needed
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) =>
                        setForm({ ...form, service: e.target.value })
                      }
                      style={{
                        width: "100%",
                        background: "transparent",
                        border: "none",
                        borderBottom: "1px solid var(--rule)",
                        padding: "10px 0",
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 14,
                        fontWeight: 300,
                        color: form.service ? "var(--charcoal)" : "var(--stone-lt)",
                        outline: "none",
                        cursor: "pointer",
                        appearance: "none",
                      }}
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div style={{ marginBottom: 40 }}>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 10,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--stone)",
                      marginBottom: 8,
                    }}
                  >
                    Project Details
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Describe your project — location, scope, timeline, any specific concerns..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      borderBottom: "1px solid var(--rule)",
                      padding: "10px 0",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: 14,
                      fontWeight: 300,
                      color: "var(--charcoal)",
                      outline: "none",
                      resize: "vertical",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderBottomColor = "var(--gold)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderBottomColor = "var(--rule)")
                    }
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 11,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--cream)",
                    background: "var(--charcoal)",
                    border: "none",
                    padding: "14px 32px",
                    cursor: "pointer",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.opacity = "0.8")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.opacity = "1")
                  }
                >
                  Request Free Estimate
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
