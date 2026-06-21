import ProductDetail from "@/components/Products/ProductDetail";
import { productsData } from "@/components/Products/productsData";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import JsonLd, { productSchema, breadcrumb, faqSchema } from "@/components/SEO/JsonLd";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const product = productsData.find((p) => p.id === id && p.category === "Aesthetic");
  if (!product) return { title: "Product Not Found | GMEDCO" };

  const title = `${product.name} — ${product.subcategory} in Qatar | GMEDCO`;
  const desc = `${product.name} by ${product.brand} — ${product.description} Available in Doha, Qatar and across the GCC. Contact GMEDCO for pricing, demonstrations and training.`;
  const url = `https://gmedco.com/products/aesthetic/${id}`;

  return {
    title,
    description: desc.slice(0, 160),
    alternates: { canonical: url },
    keywords: [
      `${product.name} Qatar`, `${product.brand} Qatar`, `${product.subcategory} Qatar`,
      `${product.name} UAE`, `${product.name} GCC`, `buy ${product.name} Qatar`,
      `${product.name} price Qatar`, `${product.name} distributor Qatar`,
      "aesthetic products Qatar", "medical aesthetics Doha", "aesthetic devices GCC",
    ],
    openGraph: {
      title, description: desc.slice(0, 160), url, type: "website",
      images: product.images[0] ? [{ url: `https://gmedco.com${product.images[0]}`, alt: product.name }] : [],
    },
    twitter: { card: "summary_large_image", title, description: desc.slice(0, 160) },
  };
}

export default async function AestheticProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = productsData.find((p) => p.id === id && p.category === "Aesthetic");
  if (!product) notFound();

  const url = `/products/aesthetic/${id}`;
  const schemas = [
    productSchema({ ...product, image: product.images[0] }),
    breadcrumb([
      { name: "Home", url: "/" },
      { name: "Products", url: "/products" },
      { name: product.subcategory, url: "/products" },
      { name: product.name, url },
    ]),
    faqSchema([
      { q: `Is ${product.name} available in Qatar?`, a: `Yes. ${product.name} by ${product.brand} is available through GMEDCO (Global Medical Co.), an authorized distributor serving Doha, Qatar and the wider GCC including the UAE, Bahrain, Saudi Arabia, Kuwait and Oman.` },
      { q: `How can I request a price or quotation for ${product.name}?`, a: `Contact GMEDCO directly by phone at +974 4442 1661 or through the contact form on gmedco.com to request pricing, a product demonstration, or a formal quotation for ${product.name}.` },
      { q: `Does GMEDCO provide training and after-sales support for ${product.name}?`, a: `Yes. GMEDCO provides professional product training, installation support where applicable, and ongoing after-sales service for ${product.name} across Qatar and the GCC.` },
    ]),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <ProductDetail product={product} />
    </>
  );
}

export async function generateStaticParams() {
  return productsData.filter((p) => p.category === "Aesthetic").map((p) => ({ id: p.id }));
}
