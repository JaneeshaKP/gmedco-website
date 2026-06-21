"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { productsData } from "@/components/Products/productsData";
import { getImagePath } from "@/lib/utils";

const PRODUCTS_PER_PAGE = 12;

/* Category → subcategory map */
const SUBCATEGORIES: Record<string, string[]> = {
  Machines:  ["Laser", "Aesthetic", "Facial", "Slimming", "Support"],
  Aesthetic: ["HA Fillers", "Aesthetic", "Breast Implants", "Professional - Retail Products"],
};

/* Top-level category tabs */
const MAIN_CATS = [
  { label: "All Products", value: null  },
  { label: "Machines",     value: "Machines"  },
  { label: "Aesthetic",    value: "Aesthetic" },
  { label: "Restylane",    value: "Restylane" }, // special: brand filter
];

function Pill({
  label, active, onClick,
}: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-widest transition-all duration-200"
      style={{
        fontFamily: "Jost, sans-serif",
        borderColor: active ? "#1a1a1a" : "rgba(0,0,0,0.15)",
        background:  active ? "#1a1a1a" : "transparent",
        color:       active ? "#ffffff" : "rgba(0,0,0,0.5)",
      }}
    >{label}</button>
  );
}

function SubPill({
  label, active, onClick,
}: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="rounded-full border px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest transition-all duration-200"
      style={{
        fontFamily: "Jost, sans-serif",
        borderColor: active ? "#1a1a1a" : "rgba(0,0,0,0.12)",
        background:  active ? "transparent" : "transparent",
        color:       active ? "#1a1a1a" : "rgba(0,0,0,0.4)",
        fontWeight:  active ? 700 : 600,
      }}
    >{label}</button>
  );
}

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const brandParam    = searchParams.get("brand");

  const [category, setCategory]   = useState<string | null>(categoryParam);
  const [subcat,   setSubcat]     = useState<string | null>(null);
  const [brand,    setBrand]      = useState<string | null>(brandParam);
  const [query,    setQuery]      = useState("");
  const [page,     setPage]       = useState(1);

  useEffect(() => {
    if (brandParam === "Restylane") {
      setCategory("Aesthetic");
      setBrand("Restylane");
      setSubcat(null);
    } else {
      setCategory(categoryParam);
      setBrand(null);
      setSubcat(null);
    }
    setPage(1);
  }, [categoryParam, brandParam]);

  /* Which main tab is active */
  const activeMain = brand === "Restylane" ? "Restylane" : category;

  /* Subcategories available for current category */
  const availableSubs = category && !brand ? (SUBCATEGORIES[category] ?? []) : [];

  /* Filtered products */
  const filtered = productsData.filter(p => {
    if (query) {
      const q = query.toLowerCase();
      if (
        !p.name.toLowerCase().includes(q) &&
        !p.brand.toLowerCase().includes(q) &&
        !p.subcategory.toLowerCase().includes(q)
      ) return false;
    }
    if (brand === "Restylane") return p.brand === "Restylane";
    if (brand && p.brand !== brand) return false;
    if (category && p.category !== category) return false;
    if (subcat && p.subcategory !== subcat) return false;
    return true;
  });

  const totalPages = Math.ceil(filtered.length / PRODUCTS_PER_PAGE);
  const paginated  = filtered.slice((page - 1) * PRODUCTS_PER_PAGE, page * PRODUCTS_PER_PAGE);

  const handleMain = (val: string | null) => {
    if (val === "Restylane") {
      setCategory("Aesthetic"); setBrand("Restylane");
    } else {
      setCategory(val); setBrand(null);
    }
    setSubcat(null);
    setPage(1);
  };

  const handleSub = (val: string | null) => {
    setSubcat(val);
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Page header */}
      <div className="border-b border-black/8 bg-white px-8 pb-14 pt-36 md:px-16">
        <div className="mx-auto" style={{ maxWidth: 1400 }}>
          <p className="restylane-label mb-4">Global Medical Co.</p>
          <h1 style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: "clamp(2.5rem, 5vw, 5rem)",
            fontWeight: 300,
            letterSpacing: "-0.03em",
            lineHeight: 1.0,
            color: "#0d1117",
          }}>Products</h1>
        </div>
      </div>

      <div className="mx-auto px-8 py-12 md:px-16" style={{ maxWidth: 1400 }}>

        {/* ── Filter area ── */}
        <div className="mb-10">
          {/* Row 1: main category pills + search */}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between mb-4">
            <div className="flex flex-wrap gap-2">
              {MAIN_CATS.map(c => (
                <Pill
                  key={c.label}
                  label={c.label}
                  active={activeMain === c.value}
                  onClick={() => handleMain(c.value)}
                />
              ))}
            </div>
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={query}
                onChange={e => { setQuery(e.target.value); setPage(1); }}
                className="w-full border-b border-black/20 bg-transparent pb-2 pr-8 text-sm text-black outline-none placeholder:text-black/30 focus:border-black/60"
                style={{ fontFamily: "Jost, sans-serif", fontWeight: 300, minWidth: 220 }}
              />
              <svg className="absolute right-0 top-0 h-4 w-4 text-black/30" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
              </svg>
            </div>
          </div>

          {/* Row 2: subcategory pills (only when a category is selected) */}
          {availableSubs.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              <SubPill
                label={`All ${category}`}
                active={subcat === null}
                onClick={() => handleSub(null)}
              />
              {availableSubs.map(s => (
                <SubPill
                  key={s}
                  label={s}
                  active={subcat === s}
                  onClick={() => handleSub(s)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Results count + clear */}
        <div className="mb-8 flex items-center justify-between">
          <p className="text-xs text-black/40" style={{ fontFamily: "Jost, sans-serif" }}>
            {filtered.length} {filtered.length === 1 ? "product" : "products"}
            {subcat ? ` — ${subcat}` : category ? ` in ${brand ?? category}` : ""}
          </p>
          {(category || brand || query || subcat) && (
            <button
              onClick={() => { setCategory(null); setBrand(null); setSubcat(null); setQuery(""); setPage(1); }}
              className="text-xs text-black/40 underline underline-offset-2 transition-colors hover:text-black"
              style={{ fontFamily: "Jost, sans-serif" }}
            >Clear all</button>
          )}
        </div>

        {/* Product grid */}
        {paginated.length > 0 ? (
          <div className="grid grid-cols-2 gap-px bg-black/8 border border-black/8 sm:grid-cols-3 lg:grid-cols-4">
            {paginated.map(product => {
              const href = `/products/${product.category.toLowerCase()}/${product.id}`;
              const img  = getImagePath(product.images[0] || "/images/products/placeholder.jpg");
              const isRestylane = product.brand === "Restylane";

              const fullBleed = ["mia-femtech","breast-implants-ergonomix2","breast-implants-ergonomix","breast-implants-motiva-round"].includes(product.id);

              return (
                <Link key={product.id} href={href} className="group block bg-white">
                  <div
                    className="relative overflow-hidden flex items-center justify-center"
                    style={{
                      aspectRatio: "1/1",
                      background: isRestylane ? "#e8edf5" : fullBleed ? "#f0ede9" : "#f5f2ef",
                    }}
                  >
                    <Image
                      src={img}
                      alt={product.name}
                      fill
                      loading="lazy"
                      className={`transition-transform duration-500 group-hover:scale-105 ${fullBleed ? "object-cover object-center" : "object-contain p-6"}`}
                      sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 flex items-end justify-between p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="bg-white/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-black">
                        View →
                      </span>
                    </div>
                  </div>
                  <div className="px-4 py-4 border-t border-black/8">
                    <div className="mb-1 flex items-center justify-between gap-2">
                      <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-black/35"
                        style={{ fontFamily: "Jost, sans-serif" }}>
                        {product.subcategory}
                      </span>
                      <span className="text-[9px] font-semibold uppercase tracking-widest text-black/35"
                        style={{ fontFamily: "Jost, sans-serif" }}>
                        {product.brand}
                      </span>
                    </div>
                    <h3 style={{
                      fontFamily: "Cormorant Garamond, Georgia, serif",
                      fontSize: "1rem",
                      fontWeight: 500,
                      letterSpacing: "-0.01em",
                      color: "#0d1117",
                      lineHeight: 1.3,
                    }}>{product.name}</h3>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="py-24 text-center">
            <p style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "1.5rem", fontWeight: 300, color: "rgba(0,0,0,0.4)" }}>
              No products found
            </p>
            <button onClick={() => { setCategory(null); setBrand(null); setSubcat(null); setQuery(""); }}
              className="mt-6 border-b border-black/30 pb-0.5 text-xs uppercase tracking-widest text-black/50 hover:text-black">
              Clear filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-16 flex items-center justify-center gap-2">
            <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
              className="flex h-9 w-9 items-center justify-center border border-black/15 disabled:opacity-30 hover:border-black/50">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M7 2L3 6L7 10" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
              <button key={n} onClick={() => setPage(n)}
                className="flex h-9 w-9 items-center justify-center border text-xs font-semibold transition-all"
                style={{
                  fontFamily: "Jost, sans-serif",
                  borderColor: n === page ? "#1a1a1a" : "rgba(0,0,0,0.12)",
                  background:  n === page ? "#1a1a1a" : "transparent",
                  color:       n === page ? "#fff"     : "rgba(0,0,0,0.5)",
                }}>{n}</button>
            ))}
            <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}
              className="flex h-9 w-9 items-center justify-center border border-black/15 disabled:opacity-30 hover:border-black/50">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M5 2L9 6L5 10" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center"><p className="restylane-label">Loading...</p></div>}>
      <ProductsContent />
    </Suspense>
  );
}
