import WhoWeAre from "@/components/About/WhoWeAre";
import WhatWeDo from "@/components/About/WhatWeDo";
import OurCommitment from "@/components/About/OurCommitment";
import QualityControl from "@/components/About/QualityControl";
import OurMission from "@/components/Visionmission/OurMission";
import OurVision from "@/components/Visionmission/OurVision";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Leading Medical Equipment Company in Qatar & GCC",
  description: "Global Medical Co. (GMEDCO) is a premier medical equipment company in Qatar, specializing in aesthetic devices, laser systems, dermal fillers and healthcare solutions. Authorized distributor for 40+ international medical brands serving Doha, Qatar, UAE, Bahrain and GCC since our founding.",
  alternates: { canonical: "https://gmedco.com/about" },
  openGraph: {
    title: "About GMEDCO — Medical Equipment Company Qatar",
    description: "Qatar's trusted medical equipment partner. Authorized distributor for world-leading medical device brands serving clinics and hospitals across Doha and GCC.",
    url: "https://gmedco.com/about",
  },
};

const AboutPage = () => {
  return (
    <>
      <WhoWeAre />
      <OurMission />
      <OurVision />
      <WhatWeDo />
      <QualityControl />
      <OurCommitment />
    </>
  );
};

export default AboutPage;
