import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Equipment & Aesthetic Devices — Full Product Catalogue Qatar",
  description: "Browse GMEDCO's full catalogue of medical equipment and aesthetic devices in Qatar. Laser machines, body contouring, dermal fillers, breast implants, Restylane, Emsculpt, Cooltech and 100+ products from 40+ authorized international brands. Serving Doha, Qatar, UAE, Bahrain and GCC.",
  alternates: { canonical: "https://gmedco.com/products" },
  keywords: [
    "medical equipment Qatar","aesthetic devices Qatar","laser machines Qatar",
    "Restylane Qatar","Emsculpt Qatar","Cooltech Qatar","body contouring Qatar",
    "dermal fillers Qatar","medical devices catalogue","aesthetic clinic equipment",
    "medical equipment Doha","healthcare products GCC",
  ],
  openGraph: {
    title: "Medical Equipment & Aesthetic Devices Catalogue | GMEDCO Qatar",
    description: "100+ medical and aesthetic products from 40+ international brands. Authorized distributor in Qatar and GCC.",
    url: "https://gmedco.com/products",
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
