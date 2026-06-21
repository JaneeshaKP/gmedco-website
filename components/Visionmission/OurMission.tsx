export default function OurMission() {
  return (
    <section className="bg-white py-20 border-b border-black/8">
      <div className="mx-auto px-8 md:px-16" style={{ maxWidth: 1400 }}>
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <div>
            <p className="restylane-label mb-5">Mission</p>
            <h2 style={{ fontFamily:"Cormorant Garamond,Georgia,serif", fontSize:"clamp(2rem,3.5vw,3.5rem)", fontWeight:300, letterSpacing:"-0.03em", lineHeight:1.1, color:"#0d1117" }}>Our Mission</h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm leading-relaxed text-black/55" style={{ fontFamily:"Jost,sans-serif", fontWeight:300 }}>
              To deliver high-quality medical products and innovative healthcare solutions that support the daily needs of hospitals, clinics, and medical professionals — ensuring every product meets the highest standards of safety, performance, and reliability, empowering healthcare teams to deliver exceptional care and achieve superior clinical outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
