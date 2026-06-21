import ContactInfo from "@/components/Contact/ContactInfo";
import MapLocation from "@/components/Contact/MapLocation";
import SocialMedia from "@/components/Contact/SocialMedia";
import FAQ from "@/components/Contact/FAQ";
import { Metadata } from "next";
import JsonLd, { breadcrumb, faqSchema } from "@/components/SEO/JsonLd";

export const metadata: Metadata = {
  title: "Contact Us — Medical Equipment Supplier Doha, Qatar | GMEDCO",
  description: "Contact GMEDCO in Doha, Qatar for medical equipment inquiries, aesthetic device demonstrations, product training, or partnership opportunities. Call +974 4442 1661. Serving Qatar, UAE, Bahrain and GCC.",
  alternates: { canonical: "https://gmedco.com/contact" },
  openGraph: {
    title: "Contact GMEDCO — Medical Equipment Qatar",
    description: "Reach our team in Doha, Qatar for medical equipment inquiries, device demos and training. Call +974 4442 1661.",
    url: "https://gmedco.com/contact",
  },
};

const contactSchemas = [
  breadcrumb([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]),
  faqSchema([
    { q: "How can I place an order with GMEDCO?", a: "Contact GMEDCO via phone at +974 4442 1661, by email, or through the contact form on gmedco.com. Our team will guide you through product selection, pricing and ordering for clinics and hospitals across Qatar and the GCC." },
    { q: "Does GMEDCO offer product training?", a: "Yes. GMEDCO organises expert-led workshops and masterclasses for all major product ranges including Restylane, laser platforms and aesthetic devices." },
    { q: "What areas does GMEDCO serve?", a: "GMEDCO primarily serves Qatar with distribution across the GCC — including the UAE, Bahrain, Saudi Arabia, Kuwait and Oman — working with clinics, hospitals and aesthetic centres." },
    { q: "Does GMEDCO offer after-sales maintenance?", a: "Yes. All equipment GMEDCO distributes is backed by professional maintenance, installation and technical support services across Qatar and the GCC." },
  ]),
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact GMEDCO",
    url: "https://gmedco.com/contact",
    about: { "@id": "https://gmedco.com/#organization" },
  },
];

const ContactPage = () => {
  return (
    <>
      <JsonLd data={contactSchemas} />
      <ContactInfo />
      <MapLocation />
      <SocialMedia />
      <FAQ />
    </>
  );
};

export default ContactPage;
