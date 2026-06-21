"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const BA = "/images/restylane-ba";

const rawData = [
  { before: `${BA}/before_amanda_before.png`,           after: `${BA}/after_amanda_after.png`,              areas: ["chin"],                                        products: ["Restylane Defyne"],                       caption: "Amanda was treated with 3mL of Restylane Defyne in the chin." },
  { before: `${BA}/before_adriana_before.png`,          after: `${BA}/after_adriana_after.png`,              areas: ["chin"],                                        products: ["Restylane Defyne"],                       caption: "Adriana was treated with Restylane Defyne in the chin." },
  { before: `${BA}/before_joy_before.png`,              after: `${BA}/after_joy_after.png`,                  areas: ["chin"],                                        products: ["Restylane Defyne"],                       caption: "Joy was treated with Restylane Defyne in the chin." },
  { before: `${BA}/before_colleen_before.png`,          after: `${BA}/after_colleen_after.png`,              areas: ["chin"],                                        products: ["Restylane Defyne"],                       caption: "Colleen was treated with Restylane Defyne in the chin." },
  { before: `${BA}/before_daniela_before.png`,          after: `${BA}/after_daniela_after.png`,              areas: ["chin"],                                        products: ["Restylane Defyne"],                       caption: "Daniela was treated with Restylane Defyne in the chin." },
  { before: `${BA}/before_parker_before.png`,           after: `${BA}/after_parker_after_0.png`,             areas: ["undereye hollows","cheeks"],                   products: ["Restylane Eyelight","Restylane Lyft"],     caption: "Parker was treated with Restylane Eyelight & Lyft." },
  { before: `${BA}/before_kysse_linda_before.png`,      after: `${BA}/after_kysse_linda_after_2.png`,        areas: ["lips"],                                        products: ["Restylane Kysse"],                        caption: "Linda was treated with Restylane Kysse in the lips." },
  { before: `${BA}/before_kelsie_before.png`,           after: `${BA}/after_kelsie_after_2.png`,             areas: ["lips"],                                        products: ["Restylane Kysse"],                        caption: "Kelsie was treated with Restylane Kysse in the lips." },
  { before: `${BA}/before_kysse_elif_before.png`,       after: `${BA}/after_kysse_elif_after_2.png`,         areas: ["lips"],                                        products: ["Restylane Kysse"],                        caption: "Elif was treated with Restylane Kysse in the lips." },
  { before: `${BA}/before_silk_anne_before.png`,        after: `${BA}/after_silk_anne_after_2.png`,          areas: ["lips","lip lines"],                            products: ["Restylane Silk"],                         caption: "Anne was treated with Restylane Silk for lips & lip lines." },
  { before: `${BA}/before_Lyft_gina_before.png`,        after: `${BA}/after_Lyft_gina_after_2.png`,          areas: ["cheeks","nasolabial folds"],                   products: ["Restylane Lyft"],                         caption: "Gina was treated with Restylane Lyft for cheeks & nasolabial folds." },
  { before: `${BA}/before_lyft_claire_before.png`,      after: `${BA}/after_lyft_claire_after_0.png`,        areas: ["cheeks","nasolabial folds"],                   products: ["Restylane Lyft"],                         caption: "Claire was treated with Restylane Lyft for cheeks & nasolabial folds." },
  { before: `${BA}/before_lyft_bridget_before.png`,     after: `${BA}/after_lyft_bridget_after_2.png`,       areas: ["cheeks"],                                      products: ["Restylane Lyft"],                         caption: "Bridget was treated with Restylane Lyft in the cheeks." },
  { before: `${BA}/before_lyft_nerissa_before.png`,     after: `${BA}/after_lyft_nerissa_after_0.png`,       areas: ["nasolabial folds","marionette lines","cheeks"], products: ["Restylane Silk","Restylane Lyft"],         caption: "Nerissa was treated with Restylane Silk & Lyft." },
  { before: `${BA}/before_lyft6_gina_before.png`,       after: `${BA}/after_lyft6_gina_after_2.png`,         areas: ["hands"],                                       products: ["Restylane Lyft"],                         caption: "Gina was treated with Restylane Lyft for hands." },
  { before: `${BA}/before_lyft2_claire_before.png`,     after: `${BA}/after_lyft2_claire_after_2.png`,       areas: ["hands"],                                       products: ["Restylane Lyft"],                         caption: "Claire was treated with Restylane Lyft for hands." },
  { before: `${BA}/before_lyft4_bridget_before.png`,    after: `${BA}/after_lyft4_bridget_after_2.png`,      areas: ["hands"],                                       products: ["Restylane Lyft"],                         caption: "Bridget was treated with Restylane Lyft for hands." },
  { before: `${BA}/before_lyft_lanie_before.png`,       after: `${BA}/after_lyft_lanie_after_2.png`,         areas: ["hands"],                                       products: ["Restylane Lyft"],                         caption: "Lanie was treated with Restylane Lyft for hands." },
  { before: `${BA}/before_contour_jasmine_before.png`,  after: `${BA}/after_contour_jasmine_after_2.png`,    areas: ["cheeks"],                                      products: ["Restylane Contour"],                      caption: "Jasmine was treated with Restylane Contour for cheeks." },
  { before: `${BA}/before_contour_lizzeth_before.png`,  after: `${BA}/after_contour_lizzeth_after_2.png`,    areas: ["cheeks"],                                      products: ["Restylane Contour"],                      caption: "Lizzeth was treated with Restylane Contour for cheeks." },
  { before: `${BA}/before_contour_caterine_before.png`, after: `${BA}/after_contour_caterine_after_2.png`,   areas: ["cheeks"],                                      products: ["Restylane Contour"],                      caption: "Caterine was treated with Restylane Contour for cheeks." },
  { before: `${BA}/before_contour_ben_before.png`,      after: `${BA}/after_contour_ben_after1.png`,         areas: ["cheeks"],                                      products: ["Restylane Contour"],                      caption: "Ben was treated with Restylane Contour for cheeks." },
  { before: `${BA}/before_contour_maya_before.png`,     after: `${BA}/after_contour_maya_after_1.png`,       areas: ["cheeks"],                                      products: ["Restylane Contour"],                      caption: "Maya was treated with Restylane Contour for cheeks." },
  { before: `${BA}/before_contour_zoe_before.png`,      after: `${BA}/after_contour_zoe_after_2.png`,        areas: ["cheeks"],                                      products: ["Restylane Contour"],                      caption: "Zoe was treated with Restylane Contour for cheeks." },
  { before: `${BA}/before_alexis_before.png`,           after: `${BA}/after_alexis_after_0.png`,             areas: ["undereye hollows"],                            products: ["Restylane Eyelight"],                     caption: "Alexis was treated with Restylane Eyelight for undereye hollows." },
  { before: `${BA}/before_phaedra_before.png`,          after: `${BA}/after_phaedra_after_0.png`,            areas: ["undereye hollows","cheeks"],                   products: ["Restylane Eyelight","Restylane Contour"],  caption: "Phaedra was treated with Restylane Eyelight & Contour." },
  { before: `${BA}/before_michael_before.png`,          after: `${BA}/after_michael_after_0.png`,            areas: ["undereye hollows","cheeks"],                   products: ["Restylane Eyelight","Restylane Lyft"],     caption: "Michael was treated with Restylane Eyelight & Lyft." },
];

const entries = rawData.map((d, i) => ({ id: i, ...d }));

const ALL_AREAS    = ["All","Cheeks","Chin","Hands","Lips and lip lines","Marionette lines","Nasolabial folds","Undereye hollows"];
const ALL_PRODUCTS = ["All","Restylane Defyne","Restylane Kysse","Restylane Lyft","Restylane Contour","Restylane Silk","Restylane Eyelight"];

const AREA_KEYS: Record<string, string[]> = {
  "Cheeks":             ["cheeks","midface"],
  "Chin":               ["chin"],
  "Hands":              ["hands"],
  "Lips and lip lines": ["lips","lip lines","perioral"],
  "Marionette lines":   ["marionette lines","marionette"],
  "Nasolabial folds":   ["nasolabial folds","nasolabial"],
  "Undereye hollows":   ["undereye hollows","undereye"],
};

const THUMB_PER_PAGE = 6;

/* ── Drag slider ───────────────────────────────────────────────── */
function DragSlider({ before, after }: { before: string; after: string }) {
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  const calc = useCallback((clientX: number) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  }, []);

  return (
    <div ref={ref}
      className="relative w-full select-none overflow-hidden bg-gray-100"
      style={{ aspectRatio: "4/3", cursor: "ew-resize", maxHeight: "420px" }}
      onMouseDown={e => { dragging.current = true; calc(e.clientX); }}
      onMouseMove={e => { if (dragging.current) calc(e.clientX); }}
      onMouseUp={() => { dragging.current = false; }}
      onMouseLeave={() => { dragging.current = false; }}
      onTouchStart={e => { dragging.current = true; calc(e.touches[0].clientX); }}
      onTouchMove={e => calc(e.touches[0].clientX)}
      onTouchEnd={() => { dragging.current = false; }}
    >
      {/* AFTER */}
      <Image src={after} alt="After" fill className="object-cover" sizes="60vw" priority />
      <span className="absolute right-4 top-4 z-10 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-widest">After</span>

      {/* BEFORE clipped */}
      <div className="absolute inset-0 z-10 overflow-hidden" style={{ width: `${pos}%` }}>
        <div className="absolute inset-0" style={{ width: ref.current?.offsetWidth ?? 800 }}>
          <Image src={before} alt="Before" fill className="object-cover" sizes="60vw" priority />
        </div>
        <span className="absolute left-4 top-4 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-widest">Before</span>
      </div>

      {/* Divider + handle */}
      <div className="absolute inset-y-0 z-20 flex flex-col items-center"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}>
        <div className="h-full w-px bg-white/90" />
        <div className="absolute top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-white shadow-xl">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path d="M7 5L3 10L7 15M13 5L17 10L13 15" stroke="#111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        {/* Arrow buttons at bottom */}
        <div className="absolute bottom-4 flex gap-2">
          <button onClick={e => { e.stopPropagation(); setPos(p => Math.max(0, p-15)); }}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/60 bg-white/80 hover:bg-white shadow">
            <svg width="10" height="10" viewBox="0 0 10 10"><path d="M6 2L3 5L6 8" stroke="#111" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </button>
          <button onClick={e => { e.stopPropagation(); setPos(p => Math.min(100, p+15)); }}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/60 bg-white/80 hover:bg-white shadow">
            <svg width="10" height="10" viewBox="0 0 10 10"><path d="M4 2L7 5L4 8" stroke="#111" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Thumbnails ────────────────────────────────────────────────── */
function Thumbs({ items, activeId, onSelect }: { items: typeof entries; activeId: number; onSelect: (id: number) => void }) {
  const [page, setPage] = useState(0);
  const total = Math.ceil(items.length / THUMB_PER_PAGE);
  const visible = items.slice(page * THUMB_PER_PAGE, (page + 1) * THUMB_PER_PAGE);

  return (
    <div>
      <div className="grid grid-cols-3 gap-1">
        {visible.map(e => (
          <button key={e.id} onClick={() => onSelect(e.id)}
            className={`relative overflow-hidden border-2 transition-all ${activeId === e.id ? "border-[#1a2e4a]" : "border-transparent opacity-60 hover:opacity-100"}`}
            style={{ aspectRatio: "1/1" }}>
            <Image src={e.before} alt="" fill className="object-cover" sizes="90px" />
          </button>
        ))}
        {Array.from({ length: THUMB_PER_PAGE - visible.length }).map((_, i) => (
          <div key={i} className="bg-gray-100" style={{ aspectRatio: "1/1" }} />
        ))}
      </div>
      {total > 1 && (
        <div className="mt-2 flex items-center justify-between">
          <button onClick={() => setPage(p => Math.max(0, p - 1))} disabled={page === 0}
            className="flex h-7 w-7 items-center justify-center border border-black/20 disabled:opacity-30 hover:bg-gray-50">
            <svg width="8" height="8" viewBox="0 0 10 10"><path d="M6 2L3 5L6 8" stroke="#111" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </button>
          <span className="text-xs text-black/40">{page + 1} / {total}</span>
          <button onClick={() => setPage(p => Math.min(total - 1, p + 1))} disabled={page === total - 1}
            className="flex h-7 w-7 items-center justify-center border border-black/20 disabled:opacity-30 hover:bg-gray-50">
            <svg width="8" height="8" viewBox="0 0 10 10"><path d="M4 2L7 5L4 8" stroke="#111" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </button>
        </div>
      )}
    </div>
  );
}

/* ── Main ──────────────────────────────────────────────────────── */
export default function RestylaneBeforeAfter() {
  const [areaFilter,    setAreaFilter]    = useState("All");
  const [productFilter, setProductFilter] = useState("All");
  const [filterMode,    setFilterMode]    = useState<"area"|"product">("area");
  const [activeId,      setActiveId]      = useState(0);

  const filtered = entries.filter(e => {
    const aOk = areaFilter === "All" || (AREA_KEYS[areaFilter] ?? []).some(k => e.areas.some(a => a.includes(k)));
    const pOk = productFilter === "All" || e.products.includes(productFilter);
    return aOk && pOk;
  });

  const active = filtered.find(e => e.id === activeId) ?? filtered[0];

  const applyFilter = (type: "area"|"product", val: string) => {
    setFilterMode(type);
    type === "area" ? (setAreaFilter(val), setProductFilter("All")) : (setProductFilter(val), setAreaFilter("All"));
    setActiveId(filtered[0]?.id ?? 0);
  };

  return (
    <section className="border-t border-black/10 bg-white py-16 md:py-24">
      <div className="container">

        {/* Title */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-black/40">Restylane®</p>
          <h2 style={{ fontFamily:"Georgia,serif", fontSize:"clamp(1.8rem,3.5vw,2.8rem)", fontWeight:400, lineHeight:1.2 }}>
            Before &amp; After
          </h2>
          <p className="mt-3 text-sm text-black/50">Actual patients. Individual results may vary.</p>
        </div>

        {/* Two column layout — LEFT: thumbs + filters | RIGHT: big slider */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-10">

          {/* ── LEFT PANEL ── exact width as reference */}
          <div className="w-full lg:w-[300px] flex-shrink-0">

            {/* Thumbnail grid */}
            {filtered.length > 0
              ? <Thumbs items={filtered} activeId={active?.id ?? 0} onSelect={setActiveId} />
              : <div className="flex h-48 items-center justify-center bg-gray-50 text-sm text-black/40">No results</div>
            }

            {/* Filter tabs */}
            <div className="mt-8">
              <div className="mb-4 flex items-end gap-3 border-b border-black/10">
                <button onClick={() => setFilterMode("area")}
                  className={`pb-3 text-xs font-bold uppercase tracking-widest transition-colors ${filterMode==="area" ? "border-b-2 border-black text-black -mb-px" : "text-black/35 hover:text-black"}`}>
                  Treatment Area
                </button>
                <span className="pb-3 text-xs text-black/30">or</span>
                <button onClick={() => setFilterMode("product")}
                  className={`pb-3 text-xs font-bold uppercase tracking-widest transition-colors ${filterMode==="product" ? "border-b-2 border-black text-black -mb-px" : "text-black/35 hover:text-black"}`}>
                  Product
                </button>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {(filterMode === "area" ? ALL_AREAS : ALL_PRODUCTS).map(val => (
                  <button key={val}
                    onClick={() => applyFilter(filterMode, val)}
                    className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-all ${
                      (filterMode==="area" ? areaFilter : productFilter) === val
                        ? "border-[#1a2e4a] bg-[#1a2e4a] text-white"
                        : "border-black/20 text-black/60 hover:border-black/50 hover:text-black"
                    }`}>
                    {val}
                  </button>
                ))}
              </div>
            </div>

            {(areaFilter !== "All" || productFilter !== "All") && (
              <button onClick={() => { setAreaFilter("All"); setProductFilter("All"); setActiveId(0); }}
                className="mt-5 text-xs font-semibold underline underline-offset-2 text-black/50 hover:text-black">
                Reset filters
              </button>
            )}
          </div>

          {/* ── RIGHT PANEL — big slider, fills remaining space */}
          <div className="flex-1 min-w-0">
            {active ? (
              <>
                <DragSlider key={active.id} before={active.before} after={active.after} />
                <div className="mt-5">
                  <p className="text-sm font-semibold text-[#1a4a8a] leading-snug">{active.caption}</p>
                  <p className="mt-1 text-xs italic text-black/40">Actual patient. Individual results may vary.</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {active.products.map(p => (
                      <span key={p} className="rounded-full border border-black/15 px-3 py-1 text-xs text-black/60">{p}</span>
                    ))}
                    {active.areas.map(a => (
                      <span key={a} className="rounded-full bg-gray-100 px-3 py-1 text-xs capitalize text-black/50">{a}</span>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="flex h-64 items-center justify-center bg-gray-50 text-sm text-black/40">
                Select a patient to view
              </div>
            )}
          </div>

        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link href="/products?category=Aesthetic&brand=Restylane"
            className="inline-block border-b border-black pb-0.5 text-xs font-bold uppercase tracking-widest text-black transition-opacity hover:opacity-50">
            Explore All Restylane Products
          </Link>
        </div>

      </div>
    </section>
  );
}
