"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faCheck } from "@fortawesome/free-solid-svg-icons";

type ProductKey = "eternavia" | "levra" | "privia";

const products: Record<ProductKey, {
  name: string;
  tag: string;
  tagline: string;
  intro: string;
  images: string[];
  composition: string;
  treatmentAreas: string;
  benefits: { title: string; desc: string }[];
  addresses?: string[];
  science: { title: string; desc: string }[];
}> = {
  eternavia: {
    name: "ETERNAVIA",
    tag: "Face Solution",
    tagline: "The First & Only NAD+ Face Solution Worldwide",
    intro: "ONAD ETERNAVIA Face Solution is an NAD+ complex designed to stimulate dermal regeneration for revitalized skin. The world's first anti-aging skincare powered by nanotechnology NAD+.",
    images: [
      "/images/products/Aesthetic/Eternavia/1.jpg",
      "/images/products/Aesthetic/Eternavia/2.jpg",
      "/images/products/Aesthetic/Eternavia/3.jpg",
    ],
    composition: "NAD+, Hyaluronic Acid, Hexapeptides, Oligopeptides, Tetrapeptides, and Vitamins",
    treatmentAreas: "Face & Neck",
    benefits: [
      { title: "Dermal Regeneration", desc: "Stimulates cellular renewal at a dermal level for visibly revitalized skin." },
      { title: "Hydration & Smoothing", desc: "Hyaluronic Acid and peptides instantly hydrate and smooth fine lines." },
      { title: "Wrinkle Reduction", desc: "Targets fine lines and wrinkles for a refreshed, glowing complexion." },
      { title: "Brightens & Evens Tone", desc: "Helps target hyperpigmentation for a more even, luminous skin tone." },
    ],
    science: [
      { title: "Delivers bio-identical NAD+ directly to the dermis", desc: "Penetrates beyond the surface to where regeneration begins." },
      { title: "Activates mitochondrial function", desc: "Restores cellular energy production for healthier-acting skin cells." },
      { title: "Stimulates fibroblast activity", desc: "Encourages the cells responsible for collagen and elastin production." },
      { title: "Initiates extracellular matrix regeneration", desc: "Rebuilds the skin's structural support system from within." },
    ],
  },
  levra: {
    name: "LEVRA",
    tag: "Lip Booster",
    tagline: "Injection-Grade Science for Natural Lip Volume",
    intro: "LEVRA uses a proprietary microneedle to create micro-channels for even, controlled delivery. Levra then stimulates collagen naturally — no fillers, just your body's own regenerative response.",
    images: [
      "/images/products/Aesthetic/Levra/1.jpg",
      "/images/products/Aesthetic/Levra/2.jpg",
      "/images/products/Aesthetic/Levra/3.jpg",
    ],
    composition: "NAD+ complex with collagen-stimulating actives, delivered via precision microneedle",
    treatmentAreas: "Lips",
    benefits: [
      { title: "Natural Volume", desc: "Builds fuller, natural-looking lip volume without the use of dermal fillers." },
      { title: "No Fillers", desc: "Stimulates your own collagen production rather than adding foreign volume." },
      { title: "Controlled Delivery", desc: "The Levra microneedle ensures even, precise delivery across the lip area." },
      { title: "Naturally Hydrating", desc: "Improves lip hydration and texture alongside visible volumizing effects." },
    ],
    science: [
      { title: "Microneedle micro-channels", desc: "Creates controlled micro-channels in the lip tissue for even product delivery." },
      { title: "Collagen stimulation", desc: "Triggers the body's natural collagen response for lasting, authentic volume." },
      { title: "No filler technology", desc: "An injection-grade alternative to traditional hyaluronic acid lip fillers." },
    ],
  },
  privia: {
    name: "PRIVIA",
    tag: "Intimate Area Care",
    tagline: "Intimate Renewal. Delicate Science.",
    intro: "ONAD PRIVIA is formulated specifically for intimate area rejuvenation, addressing tissue health and comfort with the same NAD+ regenerative science behind the entire ONAD range. Now available in clinics.",
    images: [
      "/images/products/Aesthetic/Privia/1.jpg",
      "/images/products/Aesthetic/Privia/2.jpg",
      "/images/products/Aesthetic/Privia/3.jpg",
    ],
    composition: "NAD+ complex formulated for delicate intimate tissue",
    treatmentAreas: "Intimate / Vulvovaginal Area",
    addresses: [
      "Vulvovaginal dryness",
      "Decreased tissue elasticity",
      "Chronic low-grade inflammation",
      "Loss of natural lubrication",
      "Dyspareunia (painful intercourse)",
      "Post-menopausal sexual discomfort",
    ],
    benefits: [
      { title: "Restores Elasticity", desc: "Helps rebuild tissue elasticity that naturally declines with age." },
      { title: "Relieves Dryness", desc: "Addresses vulvovaginal dryness and restores natural lubrication." },
      { title: "Reduces Inflammation", desc: "Calms chronic low-grade inflammation in sensitive intimate tissue." },
      { title: "Post-Menopausal Comfort", desc: "Specifically formulated to ease post-menopausal sexual discomfort." },
    ],
    science: [
      { title: "Cellular-level renewal", desc: "Works beneath the surface to rejuvenate delicate intimate tissue." },
      { title: "Gentle, clinic-administered", desc: "Designed for safe, professional administration in a clinical setting." },
    ],
  },
};

const tabs: { key: ProductKey; label: string }[] = [
  { key: "eternavia", label: "Eternavia — Face" },
  { key: "levra", label: "Levra — Lips" },
  { key: "privia", label: "Privia — Intimate" },
];

export default function OnadDetail() {
  const [active, setActive] = useState<ProductKey>("eternavia");
  const p = products[active];

  return (
    <div>

      {/* ── HERO BANNER ── */}
      <div className="relative overflow-hidden" style={{ height: "clamp(320px,42vw,500px)", background: "#0d0d0d" }}>
        <Image src="/images/machine-banners/onad.jpg" alt="ONAD" fill
          className="object-cover object-center" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end px-10 pb-12 md:px-16 md:pb-16" style={{ maxWidth: 640 }}>
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60">Aesthetic — NAD+ Regenerative Science</p>
          <h1 style={{ fontFamily: "Cormorant Garamond,Georgia,serif", fontSize: "clamp(2.2rem,5vw,4.2rem)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.02em" }}
            className="text-white mb-3">ŎNAD™</h1>
          <p style={{ fontFamily: "Jost,sans-serif", fontWeight: 300, fontSize: "0.9rem", color: "rgba(255,255,255,0.75)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
            The Science of Ageless Skin
          </p>
        </div>
      </div>

      {/* ── INTRO / NAD+ STORY ── */}
      <div className="bg-white py-16 border-b border-black/8">
        <div className="mx-auto px-8 md:px-16 text-center" style={{ maxWidth: 760 }}>
          <p className="restylane-label mb-4">What is NAD+?</p>
          <h2 style={{ fontFamily: "Cormorant Garamond,Georgia,serif", fontSize: "clamp(1.6rem,2.8vw,2.4rem)", fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1.2 }}
            className="mb-6 text-black">
            ONAD is not just about adding years to your cells — it&rsquo;s about adding life to your skin.
          </h2>
          <p className="text-sm leading-relaxed text-black/55">
            NAD+ (Nicotinamide Adenine Dinucleotide) is a molecule essential to cell health and energy. Its levels decline as we age, contributing to visible signs of aging. Derived from Vitamin B3, NAD+ boosts dermal fibroblast function, enhances DNA repair and cell division, and activates sirtuins like SIRT1 to repair UV and environmental damage while reducing inflammation — backed by more than 40 years of research in aging and DNA repair.
          </p>
        </div>
      </div>

      {/* ── PRODUCT TABS ── */}
      <div className="sticky top-0 z-20 bg-white border-b border-black/8" style={{ top: 70 }}>
        <div className="mx-auto flex gap-1 overflow-x-auto px-8 md:px-16" style={{ maxWidth: 1200 }}>
          {tabs.map((t) => (
            <button key={t.key} onClick={() => setActive(t.key)}
              className="whitespace-nowrap px-6 py-5 text-[11px] font-bold uppercase tracking-widest transition-colors"
              style={{
                color: active === t.key ? "#0d1117" : "rgba(0,0,0,0.4)",
                borderBottom: active === t.key ? "2px solid #0d1117" : "2px solid transparent",
              }}>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── PRODUCT CONTENT ── */}
      <div className="bg-white py-20">
        <div className="mx-auto px-8 md:px-16" style={{ maxWidth: 1200 }}>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            {/* Left text */}
            <div>
              <p className="restylane-label mb-4">ŎNAD {p.tag}</p>
              <h2 style={{ fontFamily: "Cormorant Garamond,Georgia,serif", fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1.1 }}
                className="mb-3 text-black">{p.name}</h2>
              <p className="mb-6 text-sm font-medium text-black/50 italic">{p.tagline}</p>
              <p className="mb-8 text-sm leading-relaxed text-black/60">{p.intro}</p>

              <div className="mb-8 grid grid-cols-2 gap-6 border-t border-black/8 pt-6">
                <div>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-black/35">Treatment Areas</p>
                  <p className="text-sm text-black/70">{p.treatmentAreas}</p>
                </div>
                <div>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-black/35">Composition</p>
                  <p className="text-sm text-black/70">{p.composition}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 border border-black px-7 py-3 text-[10px] font-bold uppercase tracking-widest text-black hover:bg-black hover:text-white transition-colors">
                  <FontAwesomeIcon icon={faEnvelope} /> Request Info
                </Link>
                <a href="tel:+97444421661"
                  className="inline-flex items-center gap-2 border border-black/30 px-7 py-3 text-[10px] font-bold uppercase tracking-widest text-black/60 hover:border-black hover:text-black transition-colors">
                  <FontAwesomeIcon icon={faPhone} /> Call Us
                </a>
              </div>
            </div>

            {/* Right image */}
            <div className="relative overflow-hidden" style={{ height: 480, background: "#f0ede9" }}>
              <Image src={p.images[0]} alt={p.name} fill className="object-cover object-center" sizes="50vw" />
            </div>
          </div>
        </div>
      </div>

      {/* ── ADDRESSES (Privia only) ── */}
      {p.addresses && (
        <div className="bg-[#f5f2ef] py-20 border-t border-black/8">
          <div className="mx-auto px-8 md:px-16" style={{ maxWidth: 900 }}>
            <p className="restylane-label mb-4 text-center">{p.name} Addresses</p>
            <h2 style={{ fontFamily: "Cormorant Garamond,Georgia,serif", fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 400, letterSpacing: "-0.02em", textAlign: "center" }}
              className="mb-12 text-black">Common Intimate Health Concerns</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {p.addresses.map((a) => (
                <div key={a} className="flex items-center gap-3 bg-white px-6 py-4" style={{ border: "1px solid rgba(0,0,0,0.06)" }}>
                  <FontAwesomeIcon icon={faCheck} className="text-black/40 flex-shrink-0" style={{ fontSize: "0.7rem" }} />
                  <span className="text-sm text-black/65">{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── BENEFITS GRID ── */}
      <div className={`py-20 border-t border-black/8 ${p.addresses ? "bg-white" : "bg-[#f5f2ef]"}`}>
        <div className="mx-auto px-8 md:px-16" style={{ maxWidth: 1200 }}>
          <p className="restylane-label mb-4 text-center">Benefits</p>
          <h2 style={{ fontFamily: "Cormorant Garamond,Georgia,serif", fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 400, letterSpacing: "-0.02em", textAlign: "center" }}
            className="mb-14 text-black">What {p.name} Offers You</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {p.benefits.map((b) => (
              <div key={b.title} className={`p-7 ${p.addresses ? "bg-[#f5f2ef]" : "bg-white"}`} style={{ border: "1px solid rgba(0,0,0,0.06)" }}>
                <h3 style={{ fontFamily: "Cormorant Garamond,Georgia,serif", fontSize: "1.1rem", fontWeight: 500 }}
                  className="mb-3 text-black">{b.title}</h3>
                <p className="text-xs leading-relaxed text-black/55">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SCIENCE + IMAGE ── */}
      <div className="bg-white py-20 border-t border-black/8">
        <div className="mx-auto px-8 md:px-16" style={{ maxWidth: 1200 }}>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative overflow-hidden order-2 lg:order-1" style={{ height: 440, background: "#0d0d0d" }}>
              <Image src={p.images[2]} alt={`${p.name} science`} fill className="object-cover object-center" sizes="50vw" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="restylane-label mb-4">How It Works</p>
              <h2 style={{ fontFamily: "Cormorant Garamond,Georgia,serif", fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 400, letterSpacing: "-0.02em" }}
                className="mb-8 text-black">The Science Behind {p.name}</h2>
              <div className="space-y-6">
                {p.science.map((s) => (
                  <div key={s.title} className="border-l-2 border-black/10 pl-5">
                    <p style={{ fontFamily: "Cormorant Garamond,Georgia,serif", fontSize: "1rem", fontWeight: 500 }} className="mb-1 text-black">{s.title}</p>
                    <p className="text-xs leading-relaxed text-black/50">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── SECOND PRODUCT IMAGE STRIP ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-black/8">
        {p.images.map((img, i) => (
          <div key={i} className="relative overflow-hidden" style={{ aspectRatio: "1/1", background: "#f0ede9" }}>
            <Image src={img} alt={`${p.name} ${i + 1}`} fill className="object-cover object-center" sizes="33vw" />
          </div>
        ))}
      </div>

      {/* ── CTA ── */}
      <div className="bg-[#f5f2ef] py-16 text-center border-t border-black/8">
        <p className="restylane-label mb-4">Interested in ŎNAD {p.name}?</p>
        <h2 style={{ fontFamily: "Cormorant Garamond,Georgia,serif", fontSize: "clamp(1.5rem,2.5vw,2.2rem)", fontWeight: 400 }}
          className="mb-6 text-black">Speak with Our Team Today</h2>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/contact" className="bg-black px-8 py-3 text-[10px] font-bold uppercase tracking-widest text-white hover:opacity-75">
            Contact Us
          </Link>
          <Link href="/products" className="border border-black px-8 py-3 text-[10px] font-bold uppercase tracking-widest text-black hover:bg-black hover:text-white transition-colors">
            All Products
          </Link>
        </div>
      </div>

    </div>
  );
}
