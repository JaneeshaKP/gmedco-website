import SchemaMarkup from "@/components/SEO/SchemaMarkup";
import ClientShell from "@/components/ClientShell";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Metadata } from "next";
config.autoAddCss = false;

export const metadata: Metadata = {
  metadataBase: new URL("https://gmedco.com"),
  title: {
    default: "GMEDCO — Medical Equipment & Aesthetic Devices Supplier in Qatar",
    template: "%s | GMEDCO Qatar",
  },
  description: "GMEDCO (Global Medical Co.) is Qatar's leading supplier of medical equipment, aesthetic devices, laser machines, and dermal fillers. Authorized distributor of Restylane, Motiva, Emsculpt, Cooltech & more. Serving Doha, Qatar, UAE, Bahrain and GCC.",
  keywords: [
    "medical equipment Qatar","medical devices Qatar","aesthetic devices Qatar",
    "laser machines Qatar","dermal fillers Qatar","Restylane Qatar","Emsculpt Qatar",
    "medical supplier Doha","healthcare solutions Qatar","aesthetic clinic equipment GCC",
    "medical equipment company Qatar","body contouring Qatar","breast implants Qatar",
    "Cooltech Qatar","Motiva Qatar","GMEDCO","Global Medical Co Qatar",
    "medical equipment UAE","medical equipment Bahrain","medical equipment GCC",
  ],
  authors: [{ name: "Global Medical Co.", url: "https://gmedco.com" }],
  creator: "Global Medical Co.",
  publisher: "Global Medical Co.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true, follow: true,
      "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_QA",
    url: "https://gmedco.com",
    siteName: "GMEDCO — Global Medical Co.",
    title: "GMEDCO — Medical Equipment & Aesthetic Devices Supplier in Qatar",
    description: "Qatar's leading supplier of medical equipment, aesthetic devices, laser machines, and dermal fillers. Serving Doha, Qatar, UAE, Bahrain and GCC.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "GMEDCO — Medical Equipment Qatar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GMEDCO — Medical Equipment & Aesthetic Devices Qatar",
    description: "Qatar's leading supplier of medical equipment, aesthetic devices, laser machines, and dermal fillers.",
    images: ["/images/og-image.jpg"],
  },
  alternates: { canonical: "https://gmedco.com" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link rel="canonical" href="https://gmedco.com" />
        <meta name="geo.region" content="QA" />
        <meta name="geo.placename" content="Doha, Qatar" />
        <meta name="geo.position" content="25.2854;51.5310" />
        <meta name="ICBM" content="25.2854, 51.5310" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="category" content="Medical Equipment, Healthcare, Aesthetic Devices" />
        <SchemaMarkup />
      </head>
      <body className="bg-[#FCFCFC] dark:bg-black">
        <ClientShell>
          {children}
        </ClientShell>
      </body>
    </html>
  );
}
