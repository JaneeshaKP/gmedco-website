import Partners from "@/components/Partners";
import ScrollUp from "@/components/Common/ScrollUp";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Values from "@/components/Values";
import InstagramFeed from "@/components/InstagramFeed";
import { Metadata } from "next";
import JsonLd, { faqSchema } from "@/components/SEO/JsonLd";

export const metadata: Metadata = {
  title: "Medical Equipment & Aesthetic Device Supplier in Qatar | GMEDCO",
  description: "GMEDCO is Qatar's #1 medical equipment supplier. We distribute advanced aesthetic devices, laser machines, dermal fillers (Restylane), body contouring equipment, and breast implants (Motiva, Mia Femtech) to clinics and hospitals across Doha, Qatar, UAE, Bahrain and GCC.",
  alternates: { canonical: "https://gmedco.com" },
  openGraph: {
    title: "GMEDCO — Medical Equipment & Aesthetic Devices Supplier in Qatar",
    description: "Qatar's leading medical equipment supplier. Authorized distributor of Restylane, Emsculpt, Cooltech, Motiva & 40+ premium medical brands. Serving Doha & GCC.",
    url: "https://gmedco.com",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
};

const homeSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "GMEDCO Medical Solution Categories",
    itemListElement: [
      "Aesthetic Devices & Laser Systems","Dermal Fillers & Injectables","Body Contouring Equipment",
      "Breast Implants & Harmonization","Hair Restoration & PRP","Hospital Equipment & Furniture",
      "Laboratory Products & Diagnostics","Medical Consumables","Professional Skincare",
    ].map((name, i) => ({ "@type": "ListItem", position: i + 1, name })),
  },
  faqSchema([
    { q: "Who is the leading medical equipment supplier in Qatar?", a: "GMEDCO (Global Medical Co.) is a leading medical equipment and aesthetic device supplier in Qatar, distributing dermal fillers, laser systems, body contouring devices, breast implants, hospital equipment and laboratory products to clinics and hospitals across Doha, Qatar and the GCC." },
    { q: "Which medical brands does GMEDCO distribute?", a: "GMEDCO is an authorized distributor of leading international medical brands including Restylane, Motiva, Mia Femtech, ONAD, Emsculpt, Cooltech and 40+ others, covering aesthetic medicine, body contouring, breast harmonization and regenerative skincare." },
    { q: "Does GMEDCO supply medical equipment across the GCC?", a: "Yes. GMEDCO serves Qatar, the UAE, Bahrain, Saudi Arabia, Kuwait and Oman, providing medical equipment, aesthetic devices, training, installation and after-sales support throughout the GCC and wider Middle East." },
    { q: "How can clinics request a quotation or product demonstration from GMEDCO?", a: "Clinics and hospitals can contact GMEDCO at +974 4442 1661 or via gmedco.com to request pricing, a product demonstration, training, or a formal quotation for any device or aesthetic product." },
  ]),
];

export default function Home() {
  return (
    <>
      <JsonLd data={homeSchemas} />
      <ScrollUp />
      <Hero />
      <Partners />
      <Featured />
      <Values />
      <Testimonials />
      <InstagramFeed />
    </>
  );
}
