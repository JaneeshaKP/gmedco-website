export default function OurVision() {
  return (
    <section className="bg-[#f5f2ef] py-20 border-b border-black/8">
      <div className="mx-auto px-8 md:px-16" style={{ maxWidth: 1400 }}>
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <div>
            <p className="restylane-label mb-5">Vision</p>
            <h2 style={{ fontFamily:"Cormorant Garamond,Georgia,serif", fontSize:"clamp(2rem,3.5vw,3.5rem)", fontWeight:300, letterSpacing:"-0.03em", lineHeight:1.1, color:"#0d1117" }}>Our Vision</h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm leading-relaxed text-black/55" style={{ fontFamily:"Jost,sans-serif", fontWeight:300 }}>
              To be the most trusted medical distribution partner in the region — recognised for the quality of our products, the expertise of our team, and the depth of our partnerships. We envision a future where every clinic and hospital has access to world-class medical technology, supported by training and service excellence that truly makes a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
