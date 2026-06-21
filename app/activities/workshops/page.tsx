import { Metadata } from "next";
import WorkshopsClient from "./WorkshopsClient";

export const metadata: Metadata = {
  title: "Medical & Aesthetic Training Workshops Qatar | GMEDCO",
  description: "GMEDCO organizes expert-led medical aesthetic training workshops in Doha, Qatar — Restylane filler techniques, laser device training, and aesthetic masterclasses for physicians across Qatar and GCC.",
  alternates: { canonical: "https://gmedco.com/activities/workshops" },
  openGraph: {
    title: "Medical Aesthetic Training Workshops Qatar | GMEDCO",
    description: "Hands-on aesthetic training in Doha — Restylane fillers, laser devices and aesthetic techniques for Qatar physicians.",
    url: "https://gmedco.com/activities/workshops",
  },
};

export default function WorkshopsPage() {
  return <WorkshopsClient />;
}
