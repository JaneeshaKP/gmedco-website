const items = [
  { title:"Quality You Can Trust", body:"Every product meets the highest standards of safety and performance." },
  { title:"Innovation That Shapes the Future", body:"Cutting-edge technologies that advance healthcare delivery." },
  { title:"Training That Elevates Practice", body:"Expert-led programmes that enhance professional knowledge and skills." },
  { title:"Service Built on Integrity", body:"Partnerships founded on trust, reliability, and long-term excellence." },
];

export default function OurCommitment() {
  return (
    <section className="bg-[#f5f2ef] py-20">
      <div className="mx-auto px-8 md:px-16" style={{ maxWidth: 1400 }}>
        <div className="mb-16">
          <p className="restylane-label mb-5">Commitment</p>
          <h2 style={{ fontFamily:"Cormorant Garamond,Georgia,serif", fontSize:"clamp(2rem,3.5vw,3.5rem)", fontWeight:300, letterSpacing:"-0.03em", lineHeight:1.1, color:"#0d1117" }}>Our Commitment</h2>
        </div>
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item,i) => (
            <div key={item.title} className={`group relative border-t border-black/8 py-10 pr-8 ${i>0?"border-l border-black/8":""}`}>
              <div className="absolute top-0 left-0 h-0.5 w-0 bg-black/70 transition-all duration-500 group-hover:w-full" />
              <h3 style={{ fontFamily:"Cormorant Garamond,Georgia,serif", fontSize:"1.3rem", fontWeight:400, letterSpacing:"-0.01em", color:"#0d1117" }} className="mb-4">{item.title}</h3>
              <p className="text-sm leading-relaxed text-black/50" style={{ fontFamily:"Jost,sans-serif", fontWeight:300 }}>{item.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-0 border-t border-black/8" />
      </div>
    </section>
  );
}
