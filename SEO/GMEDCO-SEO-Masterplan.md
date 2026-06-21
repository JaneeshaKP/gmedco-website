# GMEDCO — SEO Domination Masterplan

This document covers (A) what has now been implemented in the codebase, and (B) the off-page / operational roadmap that lives outside the code. No design, content theme, colour or structure was changed — every item below is additive SEO infrastructure.

---

## PART A — IMPLEMENTED IN CODE (this build)

### 1. Structured data / Schema (JSON-LD)
Rendered server-side into static HTML so Google, Bing and AI crawlers (AI Overview, ChatGPT, Claude, Perplexity, Gemini) read it without executing JS.

- **Global (every page):** `Organization` + `MedicalBusiness` + `MedicalOrganization` + `LocalBusiness` combined node with NAP, geo-coordinates, opening hours, `priceRange`, `paymentAccepted`, two `ContactPoint` nodes (sales + support) covering 6 GCC countries, `medicalSpecialty`, and a 30+ entity `knowsAbout` list (entity SEO for AI search). Plus `WebSite` + `SearchAction`.
- **Home:** `ItemList` of the 9 solution categories + `FAQPage` with 4 brand-level questions engineered for AI-answer citation ("Who is the leading medical equipment supplier in Qatar?").
- **Every product page (65 products):** `Product` (with `Offer`, QAR currency, GCC `eligibleRegion`, seller linked to the org node) + `BreadcrumbList` + `FAQPage` (3 buyer-intent Q&As per product — availability, quotation, training).
- **Contact:** `ContactPage` + `BreadcrumbList` + `FAQPage` (mirrors the visible FAQ — Google-compliant).

Helper library: `components/SEO/JsonLd.tsx` exposes `productSchema()`, `breadcrumb()`, `faqSchema()`, `medicalProcedureSchema()` for reuse on any future page.

### 2. Sitemaps
- `public/sitemap.xml` is now generated from live `productsData` (93 URLs) so new products (ONAD, Mia, etc.) are always included. Includes the **image-sitemap namespace** with each product's primary image for Google Images ranking.
- Priorities weighted: home 1.0, products index 0.9, hero brands (Restylane/Mia/ONAD/Motiva/Emsculpt) 0.85, other products 0.8.

### 3. robots.txt
- Explicitly **allows AI search crawlers**: GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot, Claude-Web, Google-Extended, Applebot-Extended, CCBot. This is what lets GMEDCO appear *inside* AI answers.
- Allows Googlebot-Image + Bingbot. Sitemap + Host directives present.

### 4. Per-page metadata (already live from prior pass, retained)
- Unique title/description/canonical/OG/Twitter on every static page and dynamically on all 65 product pages via `generateMetadata()`.
- Geo meta tags (`geo.region=QA`, coordinates) in root layout.

### 5. Performance (static export)
- Full static HTML export (SSG) → near-instant TTFB on cPanel.
- `.htaccess` ships Brotli/gzip, 1-year immutable caching for hashed assets, no-cache for HTML (prevents stale-chunk errors), security headers.
- Images optimized at build; video H.264 faststart.

---

## PART B — ROADMAP (operational / off-page — not code)

### 30 DAYS — Quick wins
1. **Google Search Console + Bing Webmaster:** verify domain, submit `sitemap.xml`. Replace the placeholder `google-site-verification` token in `app/layout.tsx`.
2. **Google Business Profile:** create/claim "Global Medical Co." at the Doha address. Category: *Medical equipment supplier*. Add photos, hours, phone, WhatsApp link. This alone drives local pack + Maps visibility.
3. **Real OG image:** replace `/public/images/og-image.jpg` (currently a placeholder) with a branded 1200×630 image.
4. **NAP consistency:** ensure the exact name/address/phone match across the site, GBP, and any directory listing.
5. **WhatsApp click-to-chat:** add `https://wa.me/97444421661` as a conversion CTA (lead-gen).

### 90 DAYS — Content & authority foundation
6. **Brand hub pages** (`/brands/restylane`, `/brands/motiva`, `/brands/mia`, `/brands/onad`, `/brands/emsculpt`...). Each: brand intro + product list + FAQ + the existing `Product` cards. Turns each brand into its own topical cluster.
7. **Programmatic geo landing pages** (highest commercial intent first):
   `/medical-equipment-qatar`, `/aesthetic-devices-qatar`, `/dermal-fillers-qatar`, `/body-contouring-qatar`, `/medical-equipment-uae`, `/medical-equipment-bahrain`, `/hospital-equipment-qatar`, `/laboratory-equipment-qatar`. Each ~600+ words, unique, with `Service` + `FAQ` schema.
8. **Blog / knowledge hub** — start 12 cornerstone articles mapped to clusters below.

### 180 DAYS — Topical authority
9. Expand blog to 40–60 articles (clusters: injectables, fillers, body contouring, lasers, breast harmonization, NAD+ skincare, clinic ROI, device buying guides).
10. **Backlinks (white-hat only):** GCC healthcare directories, aesthetic-medicine associations, manufacturer "where to buy" pages (Galderma/Restylane, Motiva, Mia Femtech, ONAD/Medistic), conference/event listings, press releases for product launches.
11. **Case studies + testimonials** with `Review`/`MedicalProcedure` schema (E-E-A-T).

### 365 DAYS — Domination
12. Doctor/partner profile pages (`Physician` schema), white papers, clinical-evidence pages.
13. Video SEO: product demos + workshop recaps on YouTube with `VideoObject` schema embedded on relevant pages.
14. Competitor gap closure: quarterly keyword-gap review vs regional medical suppliers.

---

## KEYWORD CLUSTERS (priority order by commercial intent)

**Transactional (build landing pages first):**
medical equipment supplier qatar · aesthetic devices qatar · dermal fillers qatar · buy restylane qatar · body contouring machine qatar · emsculpt qatar · breast implants qatar · hospital equipment qatar · laboratory equipment qatar · medical equipment uae/bahrain.

**Commercial / comparison:** best medical equipment supplier gcc · motiva vs mia femtech · restylane price qatar · cooltech vs coolsculpting.

**Informational (blog / AI-answer capture):** what is NAD+ skincare · how does emsculpt work · dermal filler types · breast harmonization vs augmentation · PRP for hair restoration.

**Brand:** gmedco · global medical co qatar · restylane qatar · onad qatar · mia femtech qatar.

---

## BLOG CORNERSTONE TOPICS (first 12)
1. Choosing a medical equipment supplier in Qatar — a clinic's guide
2. Dermal fillers explained: types, uses and what clinics should stock
3. How Emsculpt body contouring works
4. NAD+ skincare and the science of ageless skin (ONAD)
5. Breast harmonization vs traditional augmentation (Mia Femtech)
6. Restylane range: which filler for which indication
7. Setting up an aesthetic clinic in Qatar: equipment checklist
8. Cooltech fat-freezing: clinical overview
9. PRP & exosomes for hair restoration
10. Laser platforms for dermatology clinics: a buyer's guide
11. ROI of body-contouring devices for clinics
12. Aesthetic device maintenance & after-sales: what to expect

Each article: target keyword + 3–5 semantic variations, H2/H3 hierarchy, `Article`/`BlogPosting` schema, internal links to related product pages, and a CTA to `/contact`.

---

## AI-SEARCH NOTES
The `knowsAbout` entity list, `FAQPage` nodes, and AI-crawler `robots.txt` allowances are the three levers that get GMEDCO cited inside AI answers. Keep FAQ answers factual, self-contained, and entity-rich (always name the brand, the city, and the GCC scope) — that phrasing is what AI engines lift verbatim.
