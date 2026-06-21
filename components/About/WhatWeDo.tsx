const services = [
  { num:"01", title:"Medical Equipment Distribution", body:"Advanced devices and technologies from the world's leading brands — delivered with full after-sales support." },
  { num:"02", title:"Aesthetic & Dermatology Solutions", body:"Premium fillers, laser platforms and professional skincare supporting practitioners through clinical excellence." },
  { num:"03", title:"Clinical & Technical Training", body:"Expert-led workshops, masterclasses and product certifications that elevate professional knowledge and skill." },
  { num:"04", title:"Partnership Support", body:"Direct collaboration with healthcare providers — ensuring reliability, service, and ongoing development." },
];

export default function WhatWeDo() {
  return (
    <section className="bg-white py-20 border-b border-black/8">
      <div className="mx-auto px-8 md:px-16" style={{ maxWidth: 1400 }}>
        <div className="mb-16">
          <p className="restylane-label mb-5">Services</p>
          <h2 style={{ fontFamily:"Cormorant Garamond,Georgia,serif", fontSize:"clamp(2rem,3.5vw,3.5rem)", fontWeight:300, letterSpacing:"-0.03em", lineHeight:1.1, color:"#0d1117" }}>What We Do</h2>
        </div>
        <div className="grid grid-cols-1 gap-px bg-black/8 border border-black/8 sm:grid-cols-2">
          {services.map((s,i) => (
            <div key={s.num} className="group relative bg-white px-10 py-10">
              <div className="absolute top-0 left-0 h-0.5 w-0 bg-black/70 transition-all duration-500 group-hover:w-full" />
              <span style={{ fontFamily:"Cormorant Garamond,Georgia,serif", fontSize:"3rem", fontWeight:300, color:"rgba(0,0,0,0.06)", lineHeight:1, letterSpacing:"-0.04em" }} className="block mb-5">{s.num}</span>
              <h3 style={{ fontFamily:"Cormorant Garamond,Georgia,serif", fontSize:"1.4rem", fontWeight:400, letterSpacing:"-0.01em", color:"#0d1117", lineHeight:1.25 }} className="mb-4">{s.title}</h3>
              <p className="text-sm leading-relaxed text-black/50" style={{ fontFamily:"Jost,sans-serif", fontWeight:300 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
