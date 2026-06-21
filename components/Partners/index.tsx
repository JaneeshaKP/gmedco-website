"use client";

import { Partner } from "@/types/partner";
import Image from "next/image";
import partnersData from "./partnersData";
import { useEffect, useRef } from "react";
import Link from "next/link";

const Partners = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let raf: number;
    let paused = false;

    const tick = () => {
      if (!paused && el) {
        el.scrollLeft += 0.6;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const pause  = () => { paused = true; };
    const resume = () => { paused = false; };
    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
    };
  }, []);

  const partners = partnersData();
  const doubled  = [...partners, ...partners];

  return (
    <>
      {/* ── Logo scroll strip ───────────────────────────────── */}
      <section className="border-b border-black/8 bg-white py-5">
        <div
          ref={scrollRef}
          className="flex overflow-x-hidden"
          style={{ scrollBehavior: "auto" }}
        >
          {doubled.map((partner, i) => (
            <div
              key={`${partner.id}-${i}`}
              className="mx-8 flex flex-shrink-0 items-center justify-center"
              style={{ width: 180, height: 80 }}
            >
              <div className="relative opacity-75 grayscale-[50%] transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                style={{ width: 180, height: 70 }}>
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  sizes="100px"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SEO About strip ─────────────────────────────────── */}
      <section className="border-b border-black/8 bg-white py-16 md:py-20">
        <div className="mx-auto px-8 md:px-16" style={{ maxWidth: 1400 }}>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-24 lg:items-end">

            {/* Left — headline */}
            <div>
              <p className="restylane-label mb-4">Global Medical Co.</p>
              <h2 style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontSize: "clamp(2rem,4vw,3.5rem)",
                fontWeight: 300,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "#0d1117",
              }}>
                Qatar's Trusted Partner in Advanced Medical & Aesthetic Technology
              </h2>
            </div>

            {/* Right — SEO text + links */}
            <div>
              <p className="mb-5 text-sm leading-relaxed text-black/55"
                style={{ fontFamily: "Jost, sans-serif", fontWeight: 300 }}>
                Global Medical Co. is a leading distributor of premium medical equipment and aesthetic solutions across Qatar and the Gulf region. For over 15 years, we have connected world-class brands — including <strong className="font-medium text-black/80">Restylane® by Galderma</strong>, Bison, PicoCare, Forza and Preime — with the clinics and hospitals that depend on precision, safety and innovation.
              </p>
              <p className="mb-8 text-sm leading-relaxed text-black/55"
                style={{ fontFamily: "Jost, sans-serif", fontWeight: 300 }}>
                Our portfolio spans hyaluronic acid dermal fillers, laser platforms, aesthetic machines, and professional skincare — all backed by expert training, after-sales support, and a commitment to clinical excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/products"
                  className="border-b border-black/30 pb-0.5 text-[10px] font-bold uppercase tracking-widest text-black/50 transition-opacity hover:opacity-40"
                  style={{ fontFamily: "Jost, sans-serif" }}>
                  Explore Products
                </Link>
                <Link href="/about"
                  className="border-b border-black/30 pb-0.5 text-[10px] font-bold uppercase tracking-widest text-black/50 transition-opacity hover:opacity-40"
                  style={{ fontFamily: "Jost, sans-serif" }}>
                  About Us
                </Link>
                <Link href="/contact"
                  className="border-b border-black/30 pb-0.5 text-[10px] font-bold uppercase tracking-widest text-black/50 transition-opacity hover:opacity-40"
                  style={{ fontFamily: "Jost, sans-serif" }}>
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
