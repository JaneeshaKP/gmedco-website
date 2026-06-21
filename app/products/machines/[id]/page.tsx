import ProductDetail from "@/components/Products/ProductDetail";
import { productsData } from "@/components/Products/productsData";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import JsonLd, { productSchema, breadcrumb, faqSchema } from "@/components/SEO/JsonLd";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const product = productsData.find((p) => p.id === id && p.category === "Machines");
  if (!product) return { title: "Product Not Found | GMEDCO" };

  const title = `${product.name} — ${product.subcategory} Machine in Qatar | GMEDCO`;
  const desc = `${product.name} by ${product.brand} — ${product.description} Buy or lease medical aesthetic machines in Doha, Qatar. Full training, installation and after-sales support across Qatar and the GCC.`;
  const url = `https://gmedco.com/products/machines/${id}`;

  return {
    title,
    description: desc.slice(0, 160),
    alternates: { canonical: url },
    keywords: [
      `${product.name} Qatar`, `${product.brand} Qatar`, `${product.subcategory} machine Qatar`,
      `${product.name} UAE`, `${product.name} GCC`, `${product.name} price Qatar`,
      `${product.name} distributor Qatar`, "medical machines Qatar", "aesthetic equipment Doha",
      "medical laser Qatar", "body contouring machine Qatar",
    ],
    openGraph: {
      title, description: desc.slice(0, 160), url, type: "website",
      images: product.images[0] ? [{ url: `https://gmedco.com${product.images[0]}`, alt: product.name }] : [],
    },
    twitter: { card: "summary_large_image", title, description: desc.slice(0, 160) },
  };
}

export default async function MachineProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = productsData.find((p) => p.id === id && p.category === "Machines");
  if (!product) notFound();

  const url = `/products/machines/${id}`;
  const schemas = [
    productSchema({ ...product, image: product.images[0] }),
    breadcrumb([
      { name: "Home", url: "/" },
      { name: "Products", url: "/products" },
      { name: product.subcategory, url: "/products" },
      { name: product.name, url },
    ]),
    faqSchema([
      { q: `Is the ${product.name} available in Qatar?`, a: `Yes. The ${product.name} by ${product.brand} is supplied by GMEDCO (Global Medical Co.), an authorized distributor serving Doha, Qatar and the wider GCC including the UAE, Bahrain, Saudi Arabia, Kuwait and Oman.` },
      { q: `Can I book a demonstration of the ${product.name}?`, a: `Yes. Contact GMEDCO at +974 4442 1661 or via gmedco.com to arrange a live demonstration, request pricing, or obtain a formal quotation for the ${product.name}.` },
      { q: `Does GMEDCO provide installation and training for the ${product.name}?`, a: `Yes. GMEDCO provides professional installation, operator training and ongoing after-sales technical support for the ${product.name} throughout Qatar and the GCC.` },
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
  return productsData.filter((p) => p.category === "Machines").map((p) => ({ id: p.id }));
}
