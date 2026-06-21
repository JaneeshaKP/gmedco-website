const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "500+", label: "Healthcare Partners" },
  { value: "1,000+", label: "Training Sessions" },
  { value: "50+", label: "Global Brands" },
];

export default function WhoWeAre() {
  return (
    <section className="bg-white pt-36 pb-20 border-b border-black/8">
      <div className="mx-auto px-8 md:px-16" style={{ maxWidth: 1400 }}>
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24 lg:items-end">
          <div>
            <p className="restylane-label mb-5">About Us</p>
            <h1 style={{ fontFamily:"Cormorant Garamond,Georgia,serif", fontSize:"clamp(3rem,6vw,5.5rem)", fontWeight:300, letterSpacing:"-0.035em", lineHeight:1.0, color:"#0d1117" }}>
              Who We Are
            </h1>
          </div>
          <div>
            <p className="text-sm leading-relaxed text-black/55 mb-6" style={{ fontFamily:"Jost,sans-serif", fontWeight:300 }}>
              Global Medical Co. is a leading distributor of advanced medical technologies and aesthetic solutions across Qatar and the wider Gulf region. For over 15 years we have been the trusted link between world-class manufacturers and the healthcare professionals who depend on precision, reliability and innovation.
            </p>
            <p className="text-sm leading-relaxed text-black/55" style={{ fontFamily:"Jost,sans-serif", fontWeight:300 }}>
              Our portfolio spans premium HA fillers, aesthetic devices, laser platforms and professional skincare — all sourced through deep research and long-standing global partnerships.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-px bg-black/8 border border-black/8 md:grid-cols-4">
          {stats.map(s => (
            <div key={s.value} className="bg-white px-8 py-10">
              <p style={{ fontFamily:"Cormorant Garamond,Georgia,serif", fontSize:"clamp(2.5rem,4vw,4rem)", fontWeight:300, letterSpacing:"-0.04em", color:"#0d1117", lineHeight:1 }}>{s.value}</p>
              <p className="mt-3 text-xs uppercase tracking-widest text-black/40" style={{ fontFamily:"Jost,sans-serif", fontWeight:500 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
