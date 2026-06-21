"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { getFeaturedData } from "./featuredData";

const allData = getFeaturedData();

const SECTIONS = [
  {
    key: "Restylane",
    useLogoImage: true,
    logoSrc: "/images/restylane-pages/restylane-logo-clean.png",
    label: "Restylane®",
    headline: "Premium\nHA Fillers",
    description: "Precision-engineered hyaluronic acid — each formula crafted for a specific result.",
    href: "/products?category=Aesthetic&brand=Restylane",
    bg: "#f5f2ef",
    cardBg: "#f0ede9",
  },
  {
    key: "Aesthetics",
    useLogoImage: false,
    logoSrc: "",
    label: "Aesthetic Solutions",
    headline: "Advanced\nAesthetics",
    description: "Clinical-grade products trusted by specialists across the region.",
    href: "/products?category=Aesthetic",
    bg: "#ffffff",
    cardBg: "#f0ede9",
  },
  {
    key: "Machines",
    useLogoImage: false,
    logoSrc: "",
    label: "Medical Machines",
    headline: "Precision\nTechnology",
    description: "Lasers, platforms and devices built for clinical excellence.",
    href: "/products?category=Machines",
    bg: "#f5f2ef",
    cardBg: "#e8e6e2",
  },
];

/* ── Carousel matching screenshot exactly ───────────────────── */
function Carousel({
  items,
  cardBg,
}: {
  items: ReturnType<typeof getFeaturedData>;
  cardBg: string;
}) {
  const n = items.length;
  const [offset, setOffset] = useState(0);
  const [animating, setAnimating] = useState(false);

  const go = useCallback((dir: 1 | -1) => {
    if (animating) return;
    setAnimating(true);
    setOffset(o => ((o + dir) % n + n) % n);
    setTimeout(() => setAnimating(false), 400);
  }, [animating, n]);

  const getItem = (i: number) => items[((offset + i) % n + n) % n];

  // Show exactly 4 items like the screenshot: 1 large + 3 small
  const VISIBLE = 4;
  const showCount = Math.min(VISIBLE, n);

  return (
    <div>
      {/* Cards row — matches screenshot proportions exactly */}
      <div className="flex items-stretch gap-3">
        {Array.from({ length: showCount }, (_, i) => {
          const item = getItem(i);
          const isFirst = i === 0;
          const href = item.productId && item.productCategory
            ? `/products/${item.productCategory}/${item.productId}` : "#";

          return (
            <div
              key={`${item.id}-${offset}-${i}`}
              className="flex-shrink-0 transition-all duration-400"
              style={{
                width: isFirst ? "38%" : `${62 / (showCount - 1)}%`,
                opacity: 1,
                transition: "width 0.4s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              <Link href={href} className="group block h-full">
                {/* Image container */}
                <div
                  className="relative overflow-hidden w-full"
                  style={{
                    height: isFirst ? 310 : 200,
                    background: item.productId === "emsculpt" ? "#ffffff" : ["mia-femtech","breast-implants-ergonomix2","breast-implants-ergonomix","breast-implants-motiva-round"].includes(item.productId) ? "#f0ede9" : cardBg,
                  }}
                >
                  {(() => {
                    const fullBleed = ["mia-femtech","breast-implants-ergonomix2","breast-implants-ergonomix","breast-implants-motiva-round"].includes(item.productId);
                    return (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        loading="lazy"
                        className={`transition-transform duration-500 group-hover:scale-105 ${fullBleed ? "object-cover object-center" : "object-contain"}`}
                        style={fullBleed ? undefined : { padding: isFirst ? "24px" : "16px" }}
                        sizes={isFirst ? "40vw" : "20vw"}
                      />
                    );
                  })()}
                  {/* Active bottom line on first */}
                  {isFirst && (
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-black/20" />
                  )}
                </div>

                {/* Label */}
                <div className="mt-3 px-0.5">
                  <p style={{
                    fontFamily: "Cormorant Garamond, Georgia, serif",
                    fontSize: isFirst ? "1.1rem" : "0.82rem",
                    fontWeight: isFirst ? 500 : 400,
                    color: isFirst ? "#0d1117" : "rgba(0,0,0,0.45)",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.3,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}>
                    {item.name}
                  </p>
                  {isFirst && (
                    <p className="mt-1.5 text-[10px] uppercase tracking-[0.16em]"
                      style={{ color: "rgba(0,0,0,0.4)", fontFamily: "Jost, sans-serif", fontWeight: 500 }}>
                      View product →
                    </p>
                  )}
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Controls — exactly like screenshot */}
      <div className="mt-8 flex items-center gap-3">
        <button
          onClick={() => go(-1)}
          className="flex h-9 w-9 items-center justify-center border border-black/20 bg-white/60 transition-all hover:border-black/50 hover:bg-white active:scale-95"
          aria-label="Previous"
        >
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path d="M6.5 1.5L3 5.5L6.5 9.5" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          onClick={() => go(1)}
          className="flex h-9 w-9 items-center justify-center border border-black/20 bg-white/60 transition-all hover:border-black/50 hover:bg-white active:scale-95"
          aria-label="Next"
        >
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path d="M4.5 1.5L8 5.5L4.5 9.5" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Dots */}
        <div className="flex items-center gap-1.5 ml-1">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => { if (!animating) setOffset(i); }}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === offset ? 22 : 5,
                height: 5,
                background: i === offset ? "#1a1a1a" : "rgba(0,0,0,0.18)",
              }}
            />
          ))}
        </div>

        {/* Counter */}
        <span className="ml-auto text-[11px] tabular-nums"
          style={{ color: "rgba(0,0,0,0.3)", fontFamily: "Jost, sans-serif", letterSpacing: "0.05em" }}>
          {String(offset + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

/* ── Section ─────────────────────────────────────────────────── */
function ProductSection({ section, items }: { section: typeof SECTIONS[0]; items: ReturnType<typeof getFeaturedData> }) {
  return (
    <section
      className="relative border-t border-black/[0.07]"
      style={{ background: section.bg }}
    >
      <div className="relative mx-auto px-8 py-20 md:py-24 md:px-16" style={{ maxWidth: 1400 }}>
        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16 lg:items-start">

          {/* LEFT */}
          <div className="lg:sticky lg:top-28">
            {section.useLogoImage ? (
              <div className="mb-6 relative" style={{ width: 160, height: 54 }}>
                <Image
                  src={section.logoSrc}
                  alt="Restylane"
                  fill
                  className="object-contain object-left"
                  sizes="160px"
                  priority
                />
              </div>
            ) : (
              <p className="restylane-label mb-5">{section.label}</p>
            )}

            <h2
              style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontSize: "clamp(2.4rem, 3.8vw, 4.2rem)",
                fontWeight: 300,
                letterSpacing: "-0.035em",
                lineHeight: 1.05,
                color: "#0d1117",
                whiteSpace: "pre-line",
              }}
              className="mb-5"
            >{section.headline}</h2>

            <div className="mb-5 h-px w-8 bg-black/25" />

            <p
              className="mb-10 text-sm leading-relaxed text-black/45"
              style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, maxWidth: 230 }}
            >{section.description}</p>

            <Link
              href={section.href}
              className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-black/55 transition-opacity hover:opacity-40"
              style={{ fontFamily: "Jost, sans-serif" }}
            >
              View All
              <span className="flex h-7 w-7 items-center justify-center border border-black/20 bg-white/40">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5H8M8 5L5 2M8 5L5 8" stroke="#1a1a1a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          </div>

          {/* RIGHT */}
          <div>
            <Carousel items={items} cardBg={section.cardBg} />
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── Export ─────────────────────────────────────────────────── */
export default function Featured() {
  const restylane  = allData.filter(f => f.category === "Restylane");
  const aesthetics = allData.filter(f => f.category === "Aesthetics");
  const machines   = allData.filter(f => f.category === "Machines");

  return (
    <>
      {SECTIONS.map(s => {
        const items = s.key === "Restylane" ? restylane : s.key === "Aesthetics" ? aesthetics : machines;
        return items.length > 0 ? <ProductSection key={s.key} section={s} items={items} /> : null;
      })}
    </>
  );
}
