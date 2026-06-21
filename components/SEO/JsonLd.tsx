// Server-rendered JSON-LD injector — renders <script> into static HTML.
// Used by product/category pages for Product, BreadcrumbList and FAQPage schema.

export default function JsonLd({ data }: { data: object | object[] }) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}

const BASE = "https://gmedco.com";

export function breadcrumb(trail: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: t.url.startsWith("http") ? t.url : `${BASE}${t.url}`,
    })),
  };
}

export function productSchema(p: {
  id: string;
  name: string;
  brand: string;
  description: string;
  category: string;
  subcategory: string;
  image?: string;
}) {
  const url = `${BASE}/products/${p.category.toLowerCase()}/${p.id}`;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url}#product`,
    name: p.name,
    brand: { "@type": "Brand", name: p.brand },
    description: p.description,
    image: p.image ? `${BASE}${p.image}` : `${BASE}/images/og-image.jpg`,
    category: `${p.category} > ${p.subcategory}`,
    url,
    manufacturer: { "@type": "Organization", name: p.brand },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "QAR",
      url: `${BASE}/contact`,
      seller: { "@id": `${BASE}/#organization` },
      areaServed: ["Qatar", "United Arab Emirates", "Bahrain", "Saudi Arabia", "Kuwait", "Oman"],
      eligibleRegion: ["QA", "AE", "BH", "SA", "KW", "OM"],
    },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function medicalProcedureSchema(p: { name: string; description: string; type: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: p.name,
    description: p.description,
    procedureType: p.type,
    url: p.url.startsWith("http") ? p.url : `${BASE}${p.url}`,
    provider: { "@id": `${BASE}/#organization` },
  };
}
