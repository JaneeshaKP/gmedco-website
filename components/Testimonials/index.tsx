"use client";

import { useState } from "react";

const testimonials = [
  {
    id: 1,
    role: "Aesthetic Physician",
    location: "Doha, Qatar",
    quote: "Global Medical Co. has been our trusted partner for Restylane products for over 5 years. Their training programmes and after-sales support are exceptional — far above any other distributor in the region.",
  },
  {
    id: 2,
    role: "Dermatologist",
    location: "Doha, Qatar",
    quote: "The quality of their laser machines and the technical support provided post-installation is outstanding. I have complete confidence recommending Global Medical Co. to my colleagues.",
  },
  {
    id: 3,
    role: "Plastic Surgeon",
    location: "Doha, Qatar",
    quote: "From product selection to training and maintenance — their team handles everything with professionalism. The Restylane range they distribute is exactly what our clinic demands.",
  },
];

const StarRow = () => (
  <div className="flex gap-1 mb-6">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#c8a96e">
        <path d="M7 1L8.854 5.146L13.5 5.854L10.25 9.021L11.09 13.646L7 11.5L2.91 13.646L3.75 9.021L0.5 5.854L5.146 5.146L7 1Z"/>
      </svg>
    ))}
  </div>
);

/* Quote icon SVG */
const QuoteIcon = ({ size = 36, color = "#c8d8e8" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="18" fill={color} />
    <path
      d="M11 20.5c0-2.485 1.343-4.672 3.343-5.871L15.5 16c-1.2.7-2 2-2 3.5H15a1.5 1.5 0 0 1 0 3h-2.5A1.5 1.5 0 0 1 11 21v-.5zm8 0c0-2.485 1.343-4.672 3.343-5.871L23.5 16c-1.2.7-2 2-2 3.5H23a1.5 1.5 0 0 1 0 3h-2.5A1.5 1.5 0 0 1 19 21v-.5z"
      fill="rgba(0,0,0,0.35)"
    />
  </svg>
);

const iconColors = ["#c8d8e8", "#d8c8e0", "#c8e0d8"];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="border-t border-black/8 bg-[#f5f2ef] py-20 md:py-28">
      <div className="mx-auto px-8 md:px-16" style={{ maxWidth: 1400 }}>

        {/* Header */}
        <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="restylane-label mb-4">Testimonials</p>
            <h2 style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: "clamp(2.2rem,3.8vw,4rem)",
              fontWeight: 300,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "#0d1117",
            }}>Trusted by Experts</h2>
          </div>
          {/* Nav dots */}
          <div className="flex items-center gap-2 self-start sm:self-end">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActive(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === active ? 22 : 6,
                  height: 6,
                  background: i === active ? "#1a1a1a" : "rgba(0,0,0,0.18)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Main testimonial */}
        <div className="grid gap-16 lg:grid-cols-[1fr_280px] lg:items-start">

          {/* Left — stars + quote */}
          <div>
            <StarRow />
            <blockquote
              style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontSize: "clamp(1rem, 1.6vw, 1.25rem)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
                lineHeight: 1.45,
                color: "#0d1117",
              }}
            >
              &ldquo;{t.quote}&rdquo;
            </blockquote>
          </div>

          {/* Right — stacked cards with quote icon + designation + location */}
          <div className="flex flex-col gap-3">
            {testimonials.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setActive(i)}
                className="flex items-center gap-4 px-5 py-4 text-left transition-all duration-200"
                style={{
                  border: i === active ? "1.5px solid rgba(0,0,0,0.18)" : "1px solid rgba(0,0,0,0.07)",
                  background: i === active ? "#ffffff" : "transparent",
                  borderRadius: 2,
                }}
              >
                {/* Quote icon circle */}
                <div style={{ flexShrink: 0 }}>
                  <QuoteIcon size={42} color={iconColors[i]} />
                </div>
                <div>
                  <p style={{
                    fontFamily: "Cormorant Garamond, Georgia, serif",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    color: i === active ? "#0d1117" : "rgba(0,0,0,0.45)",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.2,
                  }}>{item.role}</p>
                  <p style={{
                    fontFamily: "Jost, sans-serif",
                    fontWeight: 300,
                    fontSize: "0.68rem",
                    color: "rgba(0,0,0,0.35)",
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                    marginTop: 3,
                  }}>{item.location}</p>
                </div>
                {/* Active dot */}
                {i === active && (
                  <div style={{
                    marginLeft: "auto",
                    width: 6, height: 6,
                    borderRadius: "50%",
                    background: "#1a1a1a",
                    flexShrink: 0,
                  }} />
                )}
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
