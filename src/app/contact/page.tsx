"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Inter } from "next/font/google";
import { FloatingLabelInput, FloatingLabelTextarea } from "@/components/ui/floating-label";

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
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", message: "",
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  function validate() {
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.email.trim()) {
      e.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) e.message = "Project details are required.";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setSubmitError("Something went wrong. Please try again or call us directly.");
      }
    } catch {
      setSubmitError("Unable to send your message. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* ══════════════════════════════════════════════════════
          Page header
      ══════════════════════════════════════════════════════ */}
      <div
        style={{
          paddingTop: 84,
          background: "var(--cream)",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <div
          className="px-5 md:px-12"
          style={{ maxWidth: 1400, margin: "0 auto", paddingTop: 48, paddingBottom: 48 }}
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
            Free No-Obligation Estimates
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
              Contact Us
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
            Reach out for a free, no-obligation estimate. We typically respond
            within one business day and serve clients across the Tampa Bay Area.
          </motion.p>
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
                    { text: "Mon – Fri: 8:00am – 5:00pm", href: null },
                    { text: "Sat: 8:00am – 2:00pm", href: null },
                    { text: "Sun: Closed", href: null },
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
              <form onSubmit={handleSubmit}>
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 8, marginBottom: 8 }}>
                  <div>
                    <FloatingLabelInput
                      id="name"
                      label="Full Name *"
                      type="text"
                      value={form.name}
                      onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors((p) => ({ ...p, name: undefined })); }}
                    />
                    {errors.name && <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: "#b94040", marginTop: 4 }}>{errors.name}</p>}
                  </div>
                  <div>
                    <FloatingLabelInput
                      id="email"
                      label="Email Address *"
                      type="email"
                      value={form.email}
                      onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors((p) => ({ ...p, email: undefined })); }}
                    />
                    {errors.email && <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: "#b94040", marginTop: 4 }}>{errors.email}</p>}
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 8, marginBottom: 8 }}>
                  <FloatingLabelInput
                    id="phone"
                    label="Phone Number"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />

                  <div className="relative" style={{ height: 56, display: "flex", alignItems: "flex-end" }}>
                    <label
                      style={{
                        position: "absolute",
                        top: 8,
                        left: 0,
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: 10,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--stone-lt)",
                      }}
                    >
                      Service Needed
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      style={{
                        width: "100%",
                        background: "transparent",
                        border: "none",
                        borderBottom: "1px solid var(--rule)",
                        padding: "0 0 8px",
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
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div style={{ marginBottom: 40, marginTop: 8 }}>
                  <FloatingLabelTextarea
                    id="message"
                    label="Project Details *"
                    rows={5}
                    value={form.message}
                    onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors((p) => ({ ...p, message: undefined })); }}
                  />
                  {errors.message && <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 11, color: "#b94040", marginTop: 4 }}>{errors.message}</p>}
                </div>

                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 11,
                    fontWeight: 300,
                    color: "var(--stone)",
                    lineHeight: 1.7,
                    marginBottom: 16,
                  }}
                >
                  By submitting this form, you consent to be contacted by TerraGold Construction regarding your inquiry.
                </p>


                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: 11,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--cream)",
                    background: "var(--charcoal)",
                    border: "none",
                    padding: "14px 32px",
                    cursor: submitting ? "not-allowed" : "pointer",
                    opacity: submitting ? 0.6 : 1,
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => { if (!submitting) e.currentTarget.style.opacity = "0.8"; }}
                  onMouseLeave={(e) => { if (!submitting) e.currentTarget.style.opacity = "1"; }}
                >
                  {submitting ? "Sending…" : "Request Free Estimate"}
                </button>
                {submitError && (
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 12, color: "#b94040", marginTop: 16 }}>
                    {submitError}
                  </p>
                )}
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
