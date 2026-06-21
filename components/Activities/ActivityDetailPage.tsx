"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import getActivityData from "@/components/Activities/activityData";

interface Props {
  href: string;
  imageCount: number;
  imageExt?: string;
  type: "events" | "workshops";
  heroIndex?: number;
}

export default function ActivityDetailPage({ href, imageCount, imageExt = "jpg", type, heroIndex = 0 }: Props) {
  const activities = getActivityData();
  const activity = activities.find(a => a.href === href);

  const [lightbox, setLightbox] = useState<number | null>(null);

  const images = Array.from({ length: imageCount }, (_, i) =>
    `${href.replace("/activities/", "/images/activities/")}/${i + 1}.${imageExt}`
  );

  const close  = useCallback(() => setLightbox(null), []);
  const prev   = useCallback(() => setLightbox(i => i !== null ? (i - 1 + imageCount) % imageCount : null), [imageCount]);
  const next   = useCallback(() => setLightbox(i => i !== null ? (i + 1) % imageCount : null), [imageCount]);

  useEffect(() => {
    if (!activity?.title) return;
    document.title = `${activity.title} — Global Medical Co.`;
  }, [activity]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape")      close();
      if (e.key === "ArrowRight")  next();
      if (e.key === "ArrowLeft")   prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, close, next, prev]);

  const backHref  = `/activities/${type}`;
  const backLabel = type === "events" ? "← Back to Events" : "← Back to Workshops";
  const typeLabel = type === "events" ? "Event" : "Workshop";

  return (
    <div className="min-h-screen bg-white">

      {/* ── Lightbox ──────────────────────────────────────────── */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
          onClick={close}>
          {/* Close */}
          <button
            onClick={close}
            className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center border border-white/20 text-white/70 transition-colors hover:border-white/60 hover:text-white"
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={e => { e.stopPropagation(); prev(); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center border border-white/20 text-white/70 transition-colors hover:border-white/60 hover:text-white"
            aria-label="Previous"
          >
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path d="M6.5 1.5L3 5.5L6.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={e => { e.stopPropagation(); next(); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center border border-white/20 text-white/70 transition-colors hover:border-white/60 hover:text-white"
            aria-label="Next"
          >
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path d="M4.5 1.5L8 5.5L4.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[11px] font-semibold uppercase tracking-widest text-white/40"
            style={{ fontFamily: "Jost, sans-serif" }}>
            {String(lightbox + 1).padStart(2, "0")} / {String(imageCount).padStart(2, "0")}
          </div>

          {/* Image */}
          <div className="relative h-[85vh] w-[90vw] max-w-5xl" onClick={e => e.stopPropagation()}>
            <Image
              src={images[lightbox]}
              alt={`Photo ${lightbox + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>
        </div>
      )}

      {/* ── Page header ───────────────────────────────────────── */}
      <div className="border-b border-black/8 bg-white px-8 pb-14 pt-36 md:px-16">
        <div className="mx-auto" style={{ maxWidth: 1400 }}>
          {/* Back link */}
          <Link
            href={backHref}
            className="mb-8 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-black/40 transition-opacity hover:opacity-60"
            style={{ fontFamily: "Jost, sans-serif" }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M7 2L3 6L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {backLabel}
          </Link>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="restylane-label mb-4">{typeLabel}</p>
              <h1 style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontSize: "clamp(2rem, 4.5vw, 4.5rem)",
                fontWeight: 300,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                color: "#0d1117",
              }}>
                {activity?.title || "Event"}
              </h1>
            </div>
            <p className="text-xs text-black/35 sm:pb-1" style={{ fontFamily: "Jost, sans-serif" }}>
              {activity?.publishDate}
            </p>
          </div>

          {activity?.paragraph && (
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-black/55"
              style={{ fontFamily: "Jost, sans-serif", fontWeight: 300 }}>
              {activity.paragraph}
            </p>
          )}
        </div>
      </div>

      {/* ── Trainer / hero photo — first image highlighted full-width ── */}
      <div className="border-b border-black/8">
        <div className="mx-auto px-8 pt-10 pb-0 md:px-16" style={{ maxWidth: 1400 }}>
          <p className="restylane-label mb-5">Featured Photo</p>
          <button
            onClick={() => setLightbox(heroIndex)}
            className="group relative w-full overflow-hidden block"
            style={{ aspectRatio: "16/7" }}
          >
            <Image
              src={images[heroIndex]}
              alt="Trainer photo"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            <div className="absolute bottom-4 right-4 border border-white/40 bg-black/30 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
              View full size
            </div>
          </button>
        </div>
      </div>

      {/* ── Photo count strip ─────────────────────────────────── */}
      <div className="border-b border-black/8 bg-[#f5f2ef] px-8 py-5 md:px-16">
        <div className="mx-auto flex items-center justify-between" style={{ maxWidth: 1400 }}>
          <p className="text-xs text-black/40" style={{ fontFamily: "Jost, sans-serif" }}>
            {imageCount} photos
          </p>
          <p className="text-[10px] uppercase tracking-widest text-black/30" style={{ fontFamily: "Jost, sans-serif" }}>
            Click any photo to view full size
          </p>
        </div>
      </div>

      {/* ── Photo grid ────────────────────────────────────────── */}
      <div className="mx-auto px-8 py-14 md:px-16" style={{ maxWidth: 1400 }}>
        <div className="grid grid-cols-2 gap-px bg-black/[0.06] border border-black/[0.06] sm:grid-cols-3 lg:grid-cols-4">
          {images.map((src, idx) => (
            <button
              key={idx}
              onClick={() => setLightbox(idx)}
              className="group relative block overflow-hidden bg-[#f5f2ef]"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src={src}
                alt={`Photo ${idx + 1}`}
                fill
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
              />
              {/* Hover overlay with index */}
              <div className="absolute inset-0 flex items-end justify-start p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/20">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-white/80"
                  style={{ fontFamily: "Jost, sans-serif" }}>
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}
