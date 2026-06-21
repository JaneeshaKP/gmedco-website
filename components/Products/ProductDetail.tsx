"use client";

import { useState, useRef, useCallback } from "react";
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import MiaDetail from "./MiaDetail";
import OnadDetail from "./OnadDetail";

const RP = "/images/restylane-pages";
const BA = "/images/restylane-ba";
const MB = "/images/machine-banners";

/* Banners for all products */
const PRODUCT_BANNERS: Record<string, string> = {
  /* Aesthetic product banners */
  "exohealer-hb-plus":             `${RP}/filcore-hb-banner.jpg`,
  "exohealer-sb-plus":             `${RP}/filcore-sb-banner.jpg`,
  "breast-implants-ergonomix2":    `${MB}/motiva.jpg`,
  "breast-implants-ergonomix":     `${MB}/motiva.jpg`,
  "breast-implants-motiva-round":  `${MB}/motiva.jpg`,
  "mia-femtech":                   `${MB}/mia.jpg`,
  /* Machine banners — new Website Banner set */
  "arosha":              `${MB}/arosha.jpg`,
  "aurora-x2":           `${MB}/aurora.jpg`,
  "cooltech-define":     `${MB}/cooltech-define.jpg`,
  "cooltech":            `${MB}/cooltech.jpg`,
  "emsculpt":            `${MB}/emsculpt.jpg`,
  "emsella":             `${MB}/emsella.jpg`,
  "exilis":              `${MB}/exilis.jpg`,
  "exomind":             `${MB}/exomind.jpg`,
  "hydracool":           `${MB}/hydracool.jpg`,
  "mct-technology":      `${MB}/mct.jpg`,
  "minivac":             `${MB}/minivac.jpg`,
  "o2toderm":            `${MB}/o2toderm.jpg`,
  "picocare-250":        `${MB}/picocare-250.jpg`,
  "picocare-450":        `${MB}/picocare-450.jpg`,
  "preime":              `${MB}/preime.jpg`,
  "primelase-hr":        `${MB}/primelase-hr.jpg`,
  "targetcool":          `${MB}/targetcool.jpg`,
  "ultherapy":           `${MB}/ultherapy.jpg`,
  "venus-legacy":        `${MB}/venus-legacy.jpg`,
  "visbody":             `${MB}/visbody.jpg`,
  "bison-lucid-q-ptp":   `${MB}/bison-lucid.jpg`,
  "forza":               `${MB}/forza.jpg`,
  "hydracool-plus":      `${MB}/hydracool-plus.jpg`,
  "pal-microaire":       `${MB}/pal-microaire.jpg`,
  "smart-sonic":         `${MB}/smart-sonic.jpg`,
  "venus-viva":          `${MB}/venus-viva.jpg`,
};

interface BAImage { before: string; after: string; name: string; dose: string; }

interface RD {
  bannerBg: string;
  bannerTagline: string;
  productTitle: string;
  productSubtitle: string;
  /* The moody editorial pack image — used full-bleed on the left */
  packEditorial: string;
  lifestyleImage: string;
  sliderImage: string;
  productDesc1: string;
  productDesc2: string;
  /* The stats image from zip — already contains % numbers + pack on right */
  statsImage: string;
  stat1Value: string;
  stat1Label: string;
  stat2Value: string;
  stat2Label: string;
  baImages: BAImage[];
}

const RESTYLANE: Record<string, RD> = {
  "restylane-kysse": {
    bannerBg:        `${RP}/banner-kysse.png`,
    bannerTagline:   "Lip Fillers",
    productTitle:    "Restylane® KYSSE™",
    productSubtitle: "FOR NATURAL-LOOKING, KISSABLE LIPS",
    packEditorial:   `${RP}/lip-restylane-kysse.png`,
    sliderImage:     `/images/products/Aesthetic/HA Fillers/Restylane/3.png`,
    lifestyleImage:  `${RP}/lifestyle-kysse.png`,
    productDesc1:    "Restylane® KYSSE™ is a lip filler specifically designed for the lips. It creates natural-looking and natural-feeling, soft, plump lips, with less filler needed for optimal lip fullness. The soft and flexible filler gel makes the lips even more kissable—according to both those treated and their partners.",
    productDesc2:    "Enhance your natural beauty with long-lasting kissable lips for up to 12 months. People treated with Restylane® KYSSE™ report that they are very satisfied with the natural look and feel.",
    statsImage:      `${RP}/Restylane_Lips_Statistics.jpg`,
    stat1Value:     "100%",
    stat1Label:     "were happy with the style of their lips",
    stat2Value:     "98%",
    stat2Label:     "were satisfied with the kissability of their lips",
    baImages: [
      { before:`${BA}/before_kysse_linda_before.png`, after:`${BA}/after_kysse_linda_after_2.png`, name:"Linda",  dose:"Restylane® KYSSE™, 1ml / lips" },
      { before:`${BA}/before_kelsie_before.png`,      after:`${BA}/after_kelsie_after_2.png`,      name:"Kelsie", dose:"Restylane® KYSSE™, 0.8ml / lips" },
      { before:`${BA}/before_kysse_elif_before.png`,  after:`${BA}/after_kysse_elif_after_2.png`,  name:"Elif",   dose:"Restylane® KYSSE™, 1ml / lips" },
    ],
  },
  "restylane-lyft": {
    bannerBg:        `${RP}/banner-lyft.png`,
    bannerTagline:   "Cheek Fillers",
    productTitle:    "Restylane® LYFT™",
    productSubtitle: "FOR CHEEK AUGMENTATION & VOLUME RESTORATION",
    packEditorial:   `${RP}/restylane-lyft.png`,
    sliderImage:     `/images/products/Aesthetic/HA Fillers/Restylane/4.png`,
    lifestyleImage:  `${RP}/lifestyle-lyft.png`,
    productDesc1:    "Restylane® LYFT™ is a hyaluronic acid filler developed specifically for cheek augmentation and correction of age-related midface contour deficiencies. Its unique gel formulation provides natural-looking lift and volume that integrates seamlessly with your facial tissues.",
    productDesc2:    "Clinically proven to restore youthful cheek volume with results lasting up to 12 months.",
    statsImage:      `${RP}/Restylane_Cheeks_Lyft_Statistics.jpg`,
    stat1Value:     "96%",
    stat1Label:     "reported a natural look after treatment",
    stat2Value:     "94%",
    stat2Label:     "were satisfied with the results",
    baImages: [
      { before:`${BA}/before_Lyft_gina_before.png`,    after:`${BA}/after_Lyft_gina_after_2.png`,    name:"Gina",    dose:"Restylane® LYFT™, 2ml / cheeks" },
      { before:`${BA}/before_lyft_claire_before.png`,  after:`${BA}/after_lyft_claire_after_0.png`,  name:"Claire",  dose:"Restylane® LYFT™, 1.5ml / cheeks" },
      { before:`${BA}/before_lyft_bridget_before.png`, after:`${BA}/after_lyft_bridget_after_2.png`, name:"Bridget", dose:"Restylane® LYFT™, 2ml / cheeks" },
    ],
  },
  "restylane-volyme": {
    bannerBg:        `${RP}/banner-volyme.png`,
    bannerTagline:   "Volume Fillers",
    productTitle:    "Restylane® VOLYME™",
    productSubtitle: "FOR DEEP FACIAL VOLUME AUGMENTATION",
    packEditorial:   `${RP}/restylane_volyme.jpg`,
    sliderImage:     `/images/products/Aesthetic/HA Fillers/Restylane/4.png`,
    lifestyleImage:  `${RP}/lifestyle-volyme.png`,
    productDesc1:    "Restylane® VOLYME™ delivers exceptional volume with a robust gel formulation that lifts and contours facial features naturally. Designed for deep tissue placement, it provides long-lasting results that look and feel completely natural.",
    productDesc2:    "Treat areas with significant volume loss and achieve facial harmony with results lasting up to 18 months.",
    statsImage:      `${RP}/Restylane_Cheeks_Volyme_Statistics.jpg`,
    stat1Value:     "97%",
    stat1Label:     "were satisfied with the volume enhancement",
    stat2Value:     "95%",
    stat2Label:     "would recommend it to a friend",
    baImages: [
      { before:`${BA}/before_lyft_nerissa_before.png`, after:`${BA}/after_lyft_nerissa_after_0.png`, name:"Nerissa", dose:"Restylane® VOLYME™, 2ml / midface" },
      { before:`${BA}/before_Lyft_gina_before.png`,    after:`${BA}/after_Lyft_gina_after_2.png`,    name:"Gina",    dose:"Restylane® VOLYME™, 1.5ml / cheeks" },
    ],
  },
  "restylane-defyne": {
    bannerBg:        `${RP}/banner-defyne.png`,
    bannerTagline:   "Chin & Fold Fillers",
    productTitle:    "Restylane® DEFYNE™",
    productSubtitle: "FOR DEEP FOLDS, CHIN & JAWLINE DEFINITION",
    packEditorial:   `${RP}/restylane-defyne.png`,
    sliderImage:     `/images/products/Aesthetic/HA Fillers/Restylane/2.png`,
    lifestyleImage:  `${RP}/lifestyle-defyne.png`,
    productDesc1:    "Restylane® DEFYNE™ is specifically formulated using XpresHAn Technology™ for natural facial movement. It corrects deep nasolabial folds, marionette lines and defines the chin with a result that moves with your expressions naturally.",
    productDesc2:    "Experience smooth, defined results that maintain natural facial dynamics for up to 12 months.",
    statsImage:      `${RP}/Restylane_Defyne_Statistics.jpg`,
    stat1Value:     "95%",
    stat1Label:     "were satisfied with their nasolabial fold correction",
    stat2Value:     "93%",
    stat2Label:     "felt their result looked natural",
    baImages: [
      { before:`${BA}/before_amanda_before.png`,  after:`${BA}/after_amanda_after.png`,  name:"Amanda",  dose:"Restylane® DEFYNE™, 3ml / chin" },
      { before:`${BA}/before_adriana_before.png`, after:`${BA}/after_adriana_after.png`, name:"Adriana", dose:"Restylane® DEFYNE™, 2ml / chin" },
      { before:`${BA}/before_joy_before.png`,     after:`${BA}/after_joy_after.png`,     name:"Joy",     dose:"Restylane® DEFYNE™, 2.5ml / chin" },
      { before:`${BA}/before_colleen_before.png`, after:`${BA}/after_colleen_after.png`, name:"Colleen", dose:"Restylane® DEFYNE™, 2ml / chin" },
    ],
  },
  "restylane-classyc": {
    bannerBg:        `${RP}/banner-classyc.png`,
    bannerTagline:   "Classic Facial Fillers",
    productTitle:    "Restylane® CLASSYC™",
    productSubtitle: "THE ORIGINAL HYALURONIC ACID FILLER",
    packEditorial:   `${RP}/classyc.png`,
    sliderImage:     `/images/products/Aesthetic/HA Fillers/Restylane/1.png`,
    lifestyleImage:  `${RP}/lifestyle-classyc.png`,
    productDesc1:    "Restylane® CLASSYC™ is the pioneer of hyaluronic acid-based fillers, with a proven track record of safety and efficacy spanning more than 25 years. It is highly versatile and can be used to smooth wrinkles, restore volume and enhance facial contours.",
    productDesc2:    "With a well-established safety profile and natural-looking results lasting up to 6–12 months, it remains a go-to choice for practitioners globally.",
    statsImage:      `${RP}/Restylane_Classyc_Statistics.jpg`,
    stat1Value:     "96%",
    stat1Label:     "reported natural-looking results",
    stat2Value:     "94%",
    stat2Label:     "were satisfied with the overall outcome",
    baImages: [
      { before:`${BA}/before_daniela_before.png`, after:`${BA}/after_daniela_after.png`, name:"Daniela", dose:"Restylane® CLASSYC™, 1.5ml / nasolabial folds" },
      { before:`${BA}/before_amanda_before.png`,  after:`${BA}/after_amanda_after.png`,  name:"Amanda",  dose:"Restylane® CLASSYC™, 1ml / wrinkles" },
    ],
  },
  "restylane-skinbooster-vital": {
    bannerBg:        `${RP}/banner-skinbooster.png`,
    bannerTagline:   "Skin Hydration Boosters",
    productTitle:    "Restylane® Skinbooster Vital",
    productSubtitle: "FOR DEEP SKIN HYDRATION & RADIANCE",
    packEditorial:   `${RP}/eyelight.png`,
    sliderImage:     `/images/products/Aesthetic/HA Fillers/Restylane/6.png`,
    lifestyleImage:  `${RP}/lifestyle-skinbooster.png`,
    productDesc1:    "Restylane® Skinbooster Vital is a unique skin treatment that works at the deepest level to improve skin quality by restoring hydration from within. Unlike surface moisturisers, it integrates with the skin to provide long-lasting improvement in smoothness, elasticity and radiance.",
    productDesc2:    "Clinically proven to improve skin quality with results lasting up to 6 months after a course of treatments.",
    statsImage:      `${RP}/Restylane_Eyelight_Statistics.jpg`,
    stat1Value:     "97%",
    stat1Label:     "reported improved skin hydration",
    stat2Value:     "95%",
    stat2Label:     "noticed a visible improvement in skin quality",
    baImages: [
      { before:`${BA}/before_parker_before.png`, after:`${BA}/after_parker_after_0.png`, name:"Parker", dose:"Restylane® Skinbooster Vital, full face" },
      { before:`${BA}/before_alexis_before.png`, after:`${BA}/after_alexis_after_0.png`, name:"Alexis", dose:"Restylane® Skinbooster Vital, skin hydration" },
    ],
  },
  "restylane-skinbooster-vital-light": {
    bannerBg:        `${RP}/banner-skinbooster-light.png`,
    bannerTagline:   "Skin Hydration — Light Formula",
    productTitle:    "Restylane® Skinbooster Vital Light",
    productSubtitle: "LIGHTER FORMULA FOR DELICATE SKIN AREAS",
    packEditorial:   `${RP}/eyelight.png`,
    sliderImage:     `/images/products/Aesthetic/HA Fillers/Restylane/5.png`,
    lifestyleImage:  `${RP}/lifestyle-skinbooster-light.png`,
    productDesc1:    "Restylane® Skinbooster Vital Light features a lower concentration of hyaluronic acid, making it ideal for delicate areas such as the periorbital region, neck and décolletage. It improves skin texture, elasticity and radiance with gentle, effective hydration.",
    productDesc2:    "Perfect for patients who want subtle skin quality improvement or are new to skin-boosting treatments.",
    statsImage:      `${RP}/Restylane_Eyelight_Statistics.jpg`,
    stat1Value:     "95%",
    stat1Label:     "reported improved skin smoothness",
    stat2Value:     "93%",
    stat2Label:     "were satisfied with the results",
    baImages: [
      { before:`${BA}/before_phaedra_before.png`, after:`${BA}/after_phaedra_after_0.png`, name:"Phaedra", dose:"Restylane® Skinbooster Vital Light, periorbital" },
      { before:`${BA}/before_michael_before.png`, after:`${BA}/after_michael_after_0.png`, name:"Michael", dose:"Restylane® Skinbooster Vital Light, under-eye" },
    ],
  },
};

/* ─── Fixed Before/After Slider ─────────────────────────────── */
function BASlider({ before, after }: { before: string; after: string }) {
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const calc = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden select-none cursor-ew-resize"
      style={{ aspectRatio: "3/4" }}
      onMouseDown={e => { dragging.current = true; calc(e.clientX); }}
      onMouseMove={e => { if (dragging.current) calc(e.clientX); }}
      onMouseUp={() => { dragging.current = false; }}
      onMouseLeave={() => { dragging.current = false; }}
      onTouchStart={e => { dragging.current = true; calc(e.touches[0].clientX); }}
      onTouchMove={e => calc(e.touches[0].clientX)}
      onTouchEnd={() => { dragging.current = false; }}
    >
      {/* AFTER — full base */}
      <div className="absolute inset-0">
        <Image src={after} alt="After" fill className="object-cover" sizes="420px" priority />
      </div>
      <span className="absolute right-3 top-3 z-30 bg-white px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest shadow-sm">After</span>

      {/* BEFORE — clipped */}
      <div className="absolute inset-y-0 left-0 z-20 overflow-hidden" style={{ width: `${pos}%` }}>
        <div className="absolute inset-0" style={{ width: containerRef.current?.offsetWidth ?? 420 }}>
          <Image src={before} alt="Before" fill className="object-cover" sizes="420px" priority />
        </div>
        <span className="absolute left-3 top-3 bg-white px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest shadow-sm">Before</span>
      </div>

      {/* Divider + handle */}
      <div className="pointer-events-none absolute inset-y-0 z-30 flex flex-col items-center"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}>
        <div className="h-full w-0.5 bg-white shadow" />
        <div className="pointer-events-auto absolute top-1/2 -translate-y-1/2 flex h-10 w-10 cursor-ew-resize items-center justify-center rounded-full border-2 border-white bg-white shadow-xl">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <path d="M7 5L3 10L7 15M13 5L17 10L13 15" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ─── Main ───────────────────────────────────────────────────── */
export default function ProductDetail({ product }: { product: Product }) {
  const isRestylane = product.brand === "Restylane";
  const rd = isRestylane ? RESTYLANE[product.id] : null;
  const [activeBA, setActiveBA] = useState(0);

  /* Non-Restylane — same clean editorial layout */
  if (!isRestylane || !rd) {
    // Mia Femtech gets its own rich page
    if (product.id === "mia-femtech") return <MiaDetail />;
    if (product.id === "onad") return <OnadDetail />;

    const customBanner = PRODUCT_BANNERS[product.id];
    return (
      <div>
        {/* Hero banner */}
        <div className="relative overflow-hidden" style={{ height: "clamp(300px,40vw,460px)", background: "#ffffff" }}>
          {customBanner ? (
            <>
              <Image src={customBanner} alt={product.name} fill
                className="object-contain object-bottom" sizes="100vw" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
            </>
          ) : (
            <>
              <div className="absolute inset-0" style={{ background: "#f5f2ef" }} />
              <Image src={product.images[0]} alt={product.name} fill
                className="object-contain object-bottom p-8 md:p-16" sizes="100vw" priority />
            </>
          )}
          <div className="absolute inset-0 flex flex-col justify-end px-10 pb-12 md:px-16 md:pb-16" style={{ maxWidth:620 }}>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color:"rgba(0,0,0,0.45)" }}>{product.category} — {product.subcategory}</p>
            <h1 style={{ fontFamily:"Cormorant Garamond,Georgia,serif", fontSize:"clamp(2rem,4.5vw,3.8rem)", fontWeight:400, lineHeight:1.05, letterSpacing:"-0.02em", color:"#0d1117" }}
              >{product.name}</h1>
          </div>
        </div>

        {/* Product section */}
        <div className="bg-white py-16">
          <div className="mx-auto px-6" style={{ maxWidth:1100 }}>
            <p className="restylane-label mb-10 text-center">Product Overview</p>
            <div className="flex flex-col lg:flex-row lg:items-stretch gap-0" style={{ minHeight:400 }}>

              {/* Left — product image */}
              <div className="relative lg:w-[42%] flex-shrink-0 flex items-center justify-center" style={{ minHeight:380, background: product.id === "emsculpt" ? "#ffffff" : "#e8e6e2" }}>
                <div className="relative w-full h-full" style={{ minHeight:380 }}>
                  <Image src={product.images[0]} alt={product.name} fill
                    className="object-contain p-10" sizes="42vw" />
                </div>
              </div>

              {/* Right — text */}
              <div className="flex flex-col justify-center flex-1 px-10 py-12 md:px-14">
                <p className="restylane-label mb-3">{product.subcategory}</p>
                <h2 style={{ fontFamily:"Cormorant Garamond,Georgia,serif", fontSize:"clamp(1.8rem,3vw,2.6rem)", fontWeight:400, letterSpacing:"-0.01em" }}
                  className="mb-6 text-black">{product.name}</h2>
                <p className="mb-6 text-sm leading-relaxed text-black/60">{product.description}</p>
                {product.features.length > 0 && (
                  <ul className="mb-8 space-y-2">
                    {product.features.map((f,i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-black/55">
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-black/30" />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
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
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#f9f7f5] py-14 text-center border-t border-black/8">
          <p className="restylane-label mb-4">Interested in this product?</p>
          <h2 style={{ fontFamily:"Cormorant Garamond,Georgia,serif", fontSize:"clamp(1.5rem,2.5vw,2.2rem)", fontWeight:400 }}
            className="mb-6 text-black">Get in touch with our team</h2>
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

  return (
    <div>

      {/* ── 1. HERO BANNER ─────────────────────────────────────── */}
      <div className="relative overflow-hidden" style={{ height: "clamp(420px, 55vw, 600px)" }}>
        <Image src={rd.bannerBg} alt={rd.bannerTagline} fill className="object-cover object-center" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20" style={{ maxWidth: 680 }}>
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50">Restylane® — Dermal Filler</p>
          <span className="mb-5 inline-block w-fit border border-white/35 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white/75 backdrop-blur-sm">
            {rd.bannerTagline}
          </span>
          <h1 style={{ fontFamily:"Cormorant Garamond,Georgia,serif", fontSize:"clamp(3rem,6vw,5.5rem)", fontWeight:400, lineHeight:1.0, letterSpacing:"-0.02em" }}
            className="mb-4 text-white">{rd.productTitle}</h1>
          <p className="text-sm font-light text-white/65 leading-relaxed max-w-xs">{rd.productSubtitle}</p>
        </div>
      </div>

      {/* ── 2. PRODUCT SPOTLIGHT — Galderma style (image 2 reference) */}
      {/* Large pack photo left (dark bg) | text right | stats row below */}
      <div className="bg-white py-0">
        <div className="mx-auto" style={{ maxWidth: 1100 }}>
          <p className="pt-14 pb-10 text-center restylane-label">A filler for all purposes</p>

          {/* Two-col: pack on white left, text on white right */}
          <div className="flex flex-col lg:flex-row lg:items-stretch" style={{ minHeight: 480 }}>

            {/* LEFT — pack image, no extra background, image renders with its own background */}
            <div
              className="relative lg:w-[42%] flex-shrink-0 overflow-hidden"
              style={{ minHeight: 400 }}
            >
              <Image
                src={rd.packEditorial}
                alt={rd.productTitle}
                fill
                className="object-contain"
                sizes="42vw"
                priority
              />
            </div>

            {/* RIGHT — product name, subtitle, desc, buttons */}
            <div className="flex flex-col justify-center flex-1 px-12 py-12 md:px-16 bg-white">
              <h2
                style={{ fontFamily:"Cormorant Garamond,Georgia,serif", fontSize:"clamp(1.8rem,2.8vw,2.8rem)", fontWeight:400, letterSpacing:"-0.02em", lineHeight:1.15 }}
                className="mb-3 text-black"
              >{rd.productTitle}</h2>
              <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.18em] text-black/40">{rd.productSubtitle}</p>
              <p className="mb-4 text-sm leading-[1.75] text-black/60">{rd.productDesc1}</p>
              <p className="mb-10 text-sm leading-[1.75] text-black/60">{rd.productDesc2}</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 border border-black px-7 py-3 text-[10px] font-bold uppercase tracking-widest text-black transition-colors hover:bg-black hover:text-white">
                  <FontAwesomeIcon icon={faEnvelope} /> Request Info
                </Link>
                <a href="tel:+97444421661"
                  className="inline-flex items-center gap-2 border border-black/25 px-7 py-3 text-[10px] font-bold uppercase tracking-widest text-black/55 transition-colors hover:border-black hover:text-black">
                  <FontAwesomeIcon icon={faPhone} /> Call Us
                </a>
              </div>
            </div>
          </div>

          {/* ── STATISTICS — pixel-perfect Galderma match ── */}
          <div className="bg-white" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
            <div
              className="mx-auto flex flex-col md:flex-row md:items-center"
              style={{ maxWidth: 1200, padding: "0 48px" }}
            >
              {/* LEFT — stat rows, ~70% width */}
              <div style={{ flex: "1 1 0%", paddingTop: 40, paddingBottom: 40 }}>

                {/* Stat 1 */}
                <div
                  className="flex items-center"
                  style={{
                    paddingBottom: 20,
                    borderBottom: "1px solid rgba(0,0,0,0.10)",
                  }}
                >
                  {/* Number */}
                  <span style={{
                    fontFamily: "Cormorant Garamond, Georgia, serif",
                    fontSize: "clamp(3rem, 5.5vw, 5rem)",
                    fontWeight: 400,
                    color: "#e8a4b8",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    flexShrink: 0,
                    minWidth: "7rem",
                    display: "inline-block",
                  }}>
                    {rd.stat1Value}
                  </span>
                  {/* Label — left-aligned, vertically centered with the number */}
                  <span style={{
                    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: "0.82rem",
                    color: "rgba(0,0,0,0.5)",
                    lineHeight: 1.4,
                    marginLeft: 20,
                    maxWidth: 320,
                  }}>
                    {rd.stat1Label}
                  </span>
                </div>

                {/* Stat 2 */}
                <div
                  className="flex items-center"
                  style={{ paddingTop: 20 }}
                >
                  <span style={{
                    fontFamily: "Cormorant Garamond, Georgia, serif",
                    fontSize: "clamp(3rem, 5.5vw, 5rem)",
                    fontWeight: 400,
                    color: "#e8a4b8",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    flexShrink: 0,
                    minWidth: "7rem",
                    display: "inline-block",
                  }}>
                    {rd.stat2Value}
                  </span>
                  <span style={{
                    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: "0.82rem",
                    color: "rgba(0,0,0,0.5)",
                    lineHeight: 1.4,
                    marginLeft: 20,
                    maxWidth: 320,
                  }}>
                    {rd.stat2Label}
                  </span>
                </div>

                {/* Clinical note */}
                <p style={{
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                  fontSize: "0.72rem",
                  fontStyle: "italic",
                  color: "rgba(0,0,0,0.35)",
                  marginTop: 16,
                }}>
                  Clinical data. Individual results may vary.
                </p>
              </div>

              {/* RIGHT — product image, ~30% width, right-aligned */}
              <div
                className="hidden md:flex items-center justify-end"
                style={{ flexShrink: 0, width: "30%", paddingLeft: 40 }}
              >
                <div className="relative" style={{ width: "100%", height: 150 }}>
                  <Image
                    src={rd.sliderImage}
                    alt={rd.productTitle}
                    fill
                    className="object-contain"
                    style={{ objectPosition: "right center" }}
                    sizes="300px"
                  />
                </div>
              </div>

              {/* Mobile: image below */}
              <div
                className="flex md:hidden items-center justify-center"
                style={{ paddingBottom: 32 }}
              >
                <div className="relative" style={{ width: 240, height: 100 }}>
                  <Image
                    src={rd.sliderImage}
                    alt={rd.productTitle}
                    fill
                    className="object-contain object-center"
                    sizes="240px"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>



      {/* ── 4. BEFORE & AFTER ───────────────────────────────────── */}
      <div className="bg-[#f9f7f5] py-16">
        <div className="container">
          <p className="restylane-label mb-2 text-center">Real Results</p>
          <h2 style={{ fontFamily:"Cormorant Garamond,Georgia,serif", fontSize:"clamp(1.6rem,3vw,2.4rem)", fontWeight:400 }}
            className="mb-2 text-center text-black">Before &amp; After</h2>
          <p className="mb-10 text-center text-xs text-black/45">Actual patients. Individual results may vary.</p>

          {/* Thumbnail selectors */}
          <div className="mb-8 flex justify-center gap-3 flex-wrap">
            {rd.baImages.map((b, i) => (
              <button key={i} onClick={() => setActiveBA(i)}
                className={`relative overflow-hidden border-2 transition-all ${activeBA === i ? "border-black" : "border-transparent opacity-50 hover:opacity-80"}`}
                style={{ width: 68, height: 85 }}>
                <Image src={b.before} alt={b.name} fill className="object-cover" sizes="68px" />
              </button>
            ))}
          </div>

          <div className="mx-auto" style={{ maxWidth: 400 }}>
            <BASlider
              key={`${product.id}-${activeBA}`}
              before={rd.baImages[activeBA].before}
              after={rd.baImages[activeBA].after}
            />
            <div className="mt-5 text-center">
              <p className="text-sm font-semibold text-[#1a4a8a]">
                <strong>{rd.baImages[activeBA].name}</strong> — Treated with: {rd.baImages[activeBA].dose}
              </p>
              <p className="mt-1 text-xs italic text-black/40">Actual patient. Individual results may vary.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── 5. CTA ──────────────────────────────────────────────── */}
      <div className="bg-white py-16 text-center border-t border-black/8">
        <p className="restylane-label mb-4">Ready to learn more?</p>
        <h2 style={{ fontFamily:"Cormorant Garamond,Georgia,serif", fontSize:"clamp(1.6rem,3vw,2.4rem)", fontWeight:400 }}
          className="mb-6 text-black">Talk to us about your treatment</h2>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/contact" className="bg-black px-8 py-3 text-[10px] font-bold uppercase tracking-widest text-white hover:opacity-75">
            Contact Us
          </Link>
          <Link href="/products?category=Aesthetic&brand=Restylane"
            className="border border-black px-8 py-3 text-[10px] font-bold uppercase tracking-widest text-black hover:bg-black hover:text-white">
            All Restylane Products
          </Link>
        </div>
      </div>

    </div>
  );
}
