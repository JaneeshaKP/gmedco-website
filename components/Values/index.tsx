import Link from "next/link";

const items = [
  {
    num: "01",
    title: "Commitment",
    body: "We deliver excellence in every aspect of our service — reliable, consistent, and trusted by specialists across the region.",
  },
  {
    num: "02",
    title: "Quality",
    body: "Our portfolio is sourced exclusively from world-class suppliers, meeting the highest standards in medical technology.",
  },
  {
    num: "03",
    title: "Innovation",
    body: "We continuously research and adopt the latest advancements — bringing cutting-edge solutions to our clients first.",
  },
  {
    num: "04",
    title: "Trainings",
    body: "Comprehensive training programmes ensure proper technique, maximum outcomes, and full confidence with every product.",
  },
  {
    num: "05",
    title: "Sales Support",
    body: "Our expert sales team provides hands-on guidance, product education, and continuous support throughout your journey.",
  },
  {
    num: "06",
    title: "Maintenance",
    body: "Professional after-sales maintenance keeps your equipment performing at peak efficiency — protecting your investment.",
  },
];

export default function Values() {
  return (
    <section className="border-t border-black/8 bg-white py-24 md:py-32">
      <div className="mx-auto px-8 md:px-16" style={{ maxWidth: 1400 }}>

        {/* Header */}
        <div className="mb-20 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="restylane-label mb-5">Who We Are</p>
            <h2 style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: "clamp(2.5rem, 4vw, 4rem)",
              fontWeight: 300,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "#0d1117",
            }}>
              Our Values<br />&amp; Services
            </h2>
          </div>
          <div className="lg:text-right">
            <p className="mb-6 text-sm leading-relaxed text-black/50 max-w-sm lg:ml-auto" style={{ fontFamily: "Jost, sans-serif", fontWeight: 300 }}>
              In Global Medical our clients come first. We are committed to offering the highest quality innovative products and unparalleled service — sourced after deep research on the latest medical technologies.
            </p>
            <Link href="/about"
              className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-black/60 transition-opacity hover:opacity-40"
              style={{ fontFamily: "Jost, sans-serif" }}>
              About Us
              <span className="flex h-7 w-7 items-center justify-center border border-black/20">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5H8M8 5L5 2M8 5L5 8" stroke="#1a1a1a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={item.num}
              className="group relative border-t border-black/8 py-12 px-8 pr-10 transition-colors duration-300"
              style={{
                borderLeft: i % 3 !== 0 ? "1px solid rgba(0,0,0,0.08)" : "none",
              }}
            >
              {/* Hover line */}
              <div className="absolute top-0 left-0 h-0.5 w-0 bg-black/80 transition-all duration-500 group-hover:w-full" />

              <span
                className="mb-6 block"
                style={{
                  fontFamily: "Cormorant Garamond, Georgia, serif",
                  fontSize: "3rem",
                  fontWeight: 300,
                  color: "rgba(0,0,0,0.07)",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                }}
              >{item.num}</span>

              <h3 className="mb-4" style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontSize: "clamp(1.3rem, 2vw, 1.6rem)",
                fontWeight: 400,
                letterSpacing: "-0.01em",
                color: "#0d1117",
              }}>{item.title}</h3>

              <p className="text-sm leading-relaxed text-black/50" style={{ fontFamily: "Jost, sans-serif", fontWeight: 300 }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom rule */}
        <div className="mt-0 border-t border-black/8" />
      </div>
    </section>
  );
}
