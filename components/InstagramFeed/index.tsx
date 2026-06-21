"use client";

import Image from "next/image";
import Link from "next/link";

const INSTAGRAM_URL = "https://www.instagram.com/global_medicalqatar/";

/* The 8 uploaded Instagram images */
const posts = [
  { src: "/images/instagram/post1.jpg", dark: true  }, // Restylane box spotlight
  { src: "/images/instagram/post2.png", dark: true  }, // FORZA machine
  { src: "/images/instagram/post3.png", dark: false }, // MCT girl
  { src: "/images/instagram/post4.png", dark: false }, // Preime machine
  { src: "/images/instagram/post5.png", dark: false }, // Restylane Lyft man
  { src: "/images/instagram/post6.png", dark: true  }, // Wake up to Restylane
  { src: "/images/instagram/post7.png", dark: false }, // GRWM
  { src: "/images/instagram/post8.png", dark: false }, // MCT science
];

/* Instagram gradient icon — exact brand colors */
const IgIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const IG_GRADIENT = "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)";

export default function InstagramFeed() {
  return (
    <section className="bg-white border-t border-black/8 py-20">

      {/* Header — consistent with other sections */}
      <div className="mx-auto mb-14 px-8 md:px-16" style={{ maxWidth: 1400 }}>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="restylane-label mb-4">Our Feed</p>
            <h2 style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: "clamp(2.2rem,3.8vw,4rem)",
              fontWeight: 300,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "#0d1117",
            }}>
              Follow Along
            </h2>
          </div>
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 self-start transition-opacity hover:opacity-50 sm:self-end"
          >
            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full" style={{ background: IG_GRADIENT }}>
              <IgIcon size={14} />
            </span>
            <span className="text-sm text-black/55 border-b border-black/20 pb-0.5"
              style={{ fontFamily: "Jost, sans-serif", fontWeight: 400, letterSpacing: "0.02em" }}>
              @global_medicalqatar
            </span>
          </Link>
        </div>
      </div>

      {/* Full-bleed 4-col × 2-row grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "280px 280px",
          gap: "3px",
        }}
      >
        {posts.map((post, i) => {
          const isFirstCol  = i === 0;
          const isLastCol   = i === 3;

          return (
            <Link
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-black/5"
            >
              <Image
                src={post.src}
                alt={`Instagram post ${i + 1}`}
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="25vw"
              />

              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-black/0 transition-colors duration-400 group-hover:bg-black/12" />

              {/* Instagram icon — top right, always visible, colored */}
              <div
                className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full opacity-80 shadow-sm transition-opacity group-hover:opacity-100"
                style={{ background: IG_GRADIENT }}
              >
                <IgIcon size={12} />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Follow CTA */}
      <div className="mt-10 text-center px-8">
        <Link
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 border-b border-black/20 pb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-black/45 transition-opacity hover:opacity-40"
          style={{ fontFamily: "Jost, sans-serif" }}
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-full" style={{ background: IG_GRADIENT }}>
            <IgIcon size={10} />
          </span>
          Follow us on Instagram
        </Link>
      </div>
    </section>
  );
}
