"use client";
import { useEffect } from "react";

interface ProductSchemaProps {
  name: string;
  brand: string;
  description: string;
  image?: string;
  category: string;
  subcategory: string;
  id: string;
}

export default function ProductSchema({ name, brand, description, image, category, subcategory, id }: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    brand: { "@type": "Brand", name: brand },
    description,
    image: image ? `https://gmedco.com${image}` : undefined,
    category: `${category} > ${subcategory}`,
    url: `https://gmedco.com/products/${category.toLowerCase()}/${id}`,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Global Medical Co.",
        "@id": "https://gmedco.com/#organization",
      },
      areaServed: ["Qatar", "UAE", "Bahrain", "GCC"],
      url: `https://gmedco.com/contact`,
    },
    manufacturer: { "@type": "Organization", name: brand },
  };

  useEffect(() => {
    const existing = document.getElementById("product-schema");
    if (existing) existing.remove();
    const script = document.createElement("script");
    script.id = "product-schema";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => { document.getElementById("product-schema")?.remove(); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return null;
}
