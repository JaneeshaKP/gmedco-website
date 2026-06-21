"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faCheck } from "@fortawesome/free-solid-svg-icons";

const benefits = [
  { icon: "🕐", title: "15-Minute Procedure", desc: "Complete experience in just 90 minutes total, with only 15 minutes for the actual procedure." },
  { icon: "💉", title: "No General Anesthesia", desc: "Performed under local anesthesia — no risks associated with general anesthesia." },
  { icon: "✨", title: "Scarless*", desc: "Minimal scar hidden in each armpit — no visible scarring on the breast." },
  { icon: "🏃", title: "Same Day Recovery", desc: "Return to your daily life on the same day of the procedure." },
  { icon: "🌿", title: "Tissue Preservation", desc: "Proprietary technology preserves breast tissue with no tissue damage." },
  { icon: "🎯", title: "Natural Results", desc: "1–2 cup size increase with a natural look, feel and harmony with your body." },
];

const technologies = [
  { name: "SmoothSilk® Ergonomix2® Diamond® with Zen®", desc: "First-ever injectable implant technology designed for authentic natural feel." },
  { name: "Breast Tissue Preservation", desc: "Proprietary transaxillary approach that preserves breast tissue integrity." },
  { name: "Motiva SuperSilicones®", desc: "Advanced silicone technology with BlueSeal+® and TrueMonobloc+®." },
  { name: "Motiva® Pre-Op Marking Tool", desc: "Precision planning for perfectly symmetric results." },
];

const indications = ["Breast Harmonization", "Scarless* Lift", "Breast Symmetrization"];

const comparison = [
  { label: "Procedure time", traditional: "1-hour surgery", mia: "15-min procedure" },
  { label: "Anesthesia", traditional: "General anesthesia", mia: "Local anesthesia only" },
  { label: "Recovery", traditional: "Extended recovery period", mia: "Same day return to life" },
  { label: "Scarring", traditional: "Visible scar", mia: "Hidden in armpit fold" },
  { label: "Feel", traditional: "Foreign implant", mia: "Part of your body" },
  { label: "Focus", traditional: "Size & volume", mia: "Balance & harmony" },
];

export default function MiaDetail() {
  return (
    <div>

      {/* ── HERO BANNER ── */}
      <div className="relative overflow-hidden" style={{ height: "clamp(320px,42vw,500px)", background: "#d8d5cf" }}>
        <Image src="/images/machine-banners/mia.jpg" alt="Mia Femtech" fill
          className="object-cover object-bottom" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end px-10 pb-12 md:px-16 md:pb-16" style={{ maxWidth: 640 }}>
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60">Aesthetic — Breast Harmonization</p>
          <h1 style={{ fontFamily: "Cormorant Garamond,Georgia,serif", fontSize: "clamp(2.2rem,5vw,4.2rem)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.02em" }}
            className="text-white mb-3">Mia Femtech™</h1>
          <p style={{ fontFamily: "Jost,sans-serif", fontWeight: 300, fontSize: "0.9rem", color: "rgba(255,255,255,0.75)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Breast Harmonization Experience
          </p>
        </div>
      </div>

      {/* ── INTRO ── */}
      <div className="bg-white py-20">
        <div className="mx-auto px-8 md:px-16" style={{ maxWidth: 1200 }}>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            {/* Left text */}
            <div>
              <p className="restylane-label mb-4">What is Mia Femtech™?</p>
              <h2 style={{ fontFamily: "Cormorant Garamond,Georgia,serif", fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1.1 }}
                className="mb-6 text-black">A New Era in Breast Harmonization</h2>
              <p className="mb-5 text-sm leading-relaxed text-black/60">
                Mia Femtech™ is a Breast Harmonization Experience built on minimally invasive surgical technology that shapes, lifts, and increases breast volume by 1–2 cup sizes — delivering a natural, proportionate result with no visible scars.
              </p>
              <p className="mb-5 text-sm leading-relaxed text-black/60">
                Featuring the world's first injectable implants, the procedure completes in 15 minutes, requires no general anesthesia, and allows you to return to your normal life the same day.
              </p>
              <p className="mb-8 text-xs text-black/40 italic">
                *Available exclusively to Mia Femtech™ certified plastic surgeons only. Results may vary.
              </p>

              {/* Indications */}
              <div className="flex flex-wrap gap-3 mb-8">
                {indications.map((ind) => (
                  <span key={ind} className="border border-black/20 px-4 py-2 text-[11px] font-semibold uppercase tracking-widest text-black/60">
                    {ind}
                  </span>
                ))}
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
            <div className="relative overflow-hidden" style={{ height: 460, background: "#f0ede9" }}>
              <Image src="/images/products/Aesthetic/Mia/1.jpg" alt="Mia Femtech breast implant"
                fill className="object-cover object-center" sizes="50vw" />
            </div>
          </div>
        </div>
      </div>

      {/* ── BENEFITS GRID ── */}
      <div className="bg-[#f5f2ef] py-20 border-t border-black/8">
        <div className="mx-auto px-8 md:px-16" style={{ maxWidth: 1200 }}>
          <p className="restylane-label mb-4 text-center">Benefits</p>
          <h2 style={{ fontFamily: "Cormorant Garamond,Georgia,serif", fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 400, letterSpacing: "-0.02em", textAlign: "center" }}
            className="mb-14 text-black">What Mia Femtech™ Offers You</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white p-8" style={{ border: "1px solid rgba(0,0,0,0.06)" }}>
                <div className="mb-4 text-3xl">{b.icon}</div>
                <h3 style={{ fontFamily: "Cormorant Garamond,Georgia,serif", fontSize: "1.2rem", fontWeight: 500 }}
                  className="mb-3 text-black">{b.title}</h3>
                <p className="text-xs leading-relaxed text-black/55">{b.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-[11px] text-black/35 italic">*"Scarless" refers to no visible scarring on the breast. A small ~2cm incision is made in the underarm.</p>
        </div>
      </div>

      {/* ── PRODUCT IMAGE + TECHNOLOGY ── */}
      <div className="bg-white py-20 border-t border-black/8">
        <div className="mx-auto px-8 md:px-16" style={{ maxWidth: 1200 }}>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            {/* Left image */}
            <div className="relative overflow-hidden" style={{ height: 440, background: "#e8e6e2" }}>
              <Image src="/images/products/Aesthetic/Mia/2.jpg" alt="Mia Femtech procedure"
                fill className="object-cover object-center" sizes="50vw" />
            </div>

            {/* Right — technologies */}
            <div>
              <p className="restylane-label mb-4">Technologies</p>
              <h2 style={{ fontFamily: "Cormorant Garamond,Georgia,serif", fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 400, letterSpacing: "-0.02em" }}
                className="mb-8 text-black">SmoothSilk® Ergonomix2® Diamond® Features</h2>
              <ul className="mb-8 space-y-4">
                {["SmoothSilk® Surface", "ProgressiveGel ULTIMA®", "TrueMonobloc+®", "Motiva SuperSilicones®", "BlueSeal+®", "Zen®"].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-black/65">
                    <FontAwesomeIcon icon={faCheck} className="text-black/40 flex-shrink-0" style={{ fontSize: "0.7rem" }} />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="space-y-4 border-t border-black/8 pt-8">
                {technologies.map((t) => (
                  <div key={t.name}>
                    <p style={{ fontFamily: "Cormorant Garamond,Georgia,serif", fontSize: "1rem", fontWeight: 500 }} className="mb-1 text-black">{t.name}</p>
                    <p className="text-xs leading-relaxed text-black/50">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── COMPARISON TABLE ── */}
      <div className="bg-[#f5f2ef] py-20 border-t border-black/8">
        <div className="mx-auto px-8 md:px-16" style={{ maxWidth: 900 }}>
          <p className="restylane-label mb-4 text-center">Why Mia?</p>
          <h2 style={{ fontFamily: "Cormorant Garamond,Georgia,serif", fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 400, letterSpacing: "-0.02em", textAlign: "center" }}
            className="mb-14 text-black">Mia vs Traditional Augmentation</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th className="py-3 px-4 text-left text-[10px] uppercase tracking-widest text-black/40 font-semibold" style={{ width: "30%", borderBottom: "1px solid rgba(0,0,0,0.1)" }}></th>
                  <th className="py-3 px-4 text-center text-[10px] uppercase tracking-widest text-black/40 font-semibold" style={{ borderBottom: "1px solid rgba(0,0,0,0.1)" }}>Traditional</th>
                  <th className="py-3 px-4 text-center text-[10px] uppercase tracking-widest font-semibold" style={{ borderBottom: "2px solid #0d1117", color: "#0d1117" }}>Mia Femtech™</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.label} style={{ background: i % 2 === 0 ? "white" : "transparent" }}>
                    <td className="py-4 px-4 text-xs font-semibold uppercase tracking-wide text-black/50">{row.label}</td>
                    <td className="py-4 px-4 text-center text-xs text-black/45">{row.traditional}</td>
                    <td className="py-4 px-4 text-center text-xs font-medium text-black">{row.mia}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="bg-white py-16 text-center border-t border-black/8">
        <p className="restylane-label mb-4">Interested in Mia Femtech™?</p>
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
