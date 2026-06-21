"use client";
import { useState } from "react";

const faqs = [
  { q: "How can I place an order?", a: "Contact us via phone, email or the form above. Our team will guide you through product selection and ordering." },
  { q: "Do you offer product training?", a: "Yes. We organise expert-led workshops and masterclasses for all major product ranges — Restylane, laser platforms and more." },
  { q: "What areas do you serve?", a: "We primarily serve Qatar with distribution across the Gulf region, working with clinics, hospitals and aesthetic centres." },
  { q: "Do you offer after-sales maintenance?", a: "All equipment we distribute is backed by professional maintenance and technical support services." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number|null>(null);
  return (
    <section className="bg-[#f5f2ef] py-20">
      <div className="mx-auto px-8 md:px-16" style={{ maxWidth: 1400 }}>
        <p className="restylane-label mb-5">FAQ</p>
        <h2 style={{ fontFamily:"Cormorant Garamond,Georgia,serif", fontSize:"clamp(1.8rem,3vw,3rem)", fontWeight:300, letterSpacing:"-0.03em", color:"#0d1117" }} className="mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl">
          {faqs.map((f,i) => (
            <div key={i} className="border-t border-black/8 last:border-b">
              <button onClick={() => setOpen(open===i?null:i)}
                className="flex w-full items-center justify-between py-6 text-left gap-8">
                <span style={{ fontFamily:"Cormorant Garamond,Georgia,serif", fontSize:"1.15rem", fontWeight:400, color:"#0d1117" }}>{f.q}</span>
                <span className={`flex-shrink-0 transition-transform duration-200 ${open===i?"rotate-45":""}`}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1V13M1 7H13" stroke="#1a1a1a" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>
              {open===i && (
                <p className="pb-6 text-sm leading-relaxed text-black/55" style={{ fontFamily:"Jost,sans-serif", fontWeight:300 }}>{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
