import { Metadata } from "next";
import EventsClient from "./EventsClient";

export const metadata: Metadata = {
  title: "Medical & Aesthetic Industry Events Qatar | GMEDCO",
  description: "GMEDCO hosts premier medical and aesthetic industry events in Doha, Qatar — product launches, physician networking events, Restylane reveals, and medical education evenings for Qatar's healthcare community.",
  alternates: { canonical: "https://gmedco.com/activities/events" },
  openGraph: {
    title: "Medical Industry Events Qatar | GMEDCO",
    description: "Premier medical and aesthetic events in Doha, Qatar — product launches, physician networking and Restylane events.",
    url: "https://gmedco.com/activities/events",
  },
};

export default function EventsPage() {
  return <EventsClient />;
}
