const scope = [
  "Import and sale of medical cosmetics",
  "Dietary supplements and herbal products",
  "Pharmaceutical drugs and medical instruments",
  "Medical and surgical equipment",
  "Therapeutic and surgical tools",
  "Personal care products",
  "Non-pharmaceutical products",
  "Product and equipment training",
  "After-sales service",
];

const cert = {
  standard: "ISO 9001:2015",
  number: "SIS331224Q080",
  issuer: "Syndicate of International System Certifications",
  registered: "19 December 2024",
  expiry: "18 December 2027",
};

import Image from "next/image";

export default function QualityControl() {
  return (
    <section className="bg-white py-20 border-t border-black/8 border-b border-black/8">
      <div className="mx-auto px-8 md:px-16" style={{ maxWidth: 1400 }}>
        <div className="mb-16">
          <p className="restylane-label mb-5">Certification</p>
          <h2 style={{ fontFamily:"Cormorant Garamond,Georgia,serif", fontSize:"clamp(2rem,3.5vw,3.5rem)", fontWeight:300, letterSpacing:"-0.03em", lineHeight:1.1, color:"#0d1117" }}>Quality & Certification</h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          {/* ISO Certificate Image */}
          <div className="border border-black/8 p-6 flex items-center justify-center bg-[#fafaf9]">
            <div className="relative w-full" style={{ aspectRatio: "1700/2200" }}>
              <Image
                src="/images/about/iso.jpg"
                alt="ISO 9001:2015 Certificate"
                fill
                className="object-contain"
                sizes="33vw"
              />
            </div>
          </div>

          {/* Cert details */}
          <div className="border border-black/8 p-10">
            <p className="restylane-label mb-6">Certificate Details</p>
            {Object.entries(cert).map(([k,v]) => (
              <div key={k} className="flex gap-4 border-b border-black/6 py-4 last:border-0">
                <span className="w-24 flex-shrink-0 text-[10px] font-bold uppercase tracking-wider text-black/35 pt-0.5" style={{ fontFamily:"Jost,sans-serif" }}>{k}</span>
                <span className="text-sm text-black/70" style={{ fontFamily:"Jost,sans-serif", fontWeight:300 }}>{v}</span>
              </div>
            ))}
          </div>

          {/* Scope */}
          <div>
            <p className="restylane-label mb-6">Scope of Activities</p>
            <ul className="space-y-3">
              {scope.map(s => (
                <li key={s} className="flex items-start gap-3 text-sm text-black/60" style={{ fontFamily:"Jost,sans-serif", fontWeight:300 }}>
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-black/25" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
