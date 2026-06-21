import Link from "next/link";

export default function ContactInfo() {
  return (
    <section className="bg-white pt-36 pb-20 border-b border-black/8">
      <div className="mx-auto px-8 md:px-16" style={{ maxWidth: 1400 }}>

        {/* Header */}
        <div className="mb-20">
          <p className="restylane-label mb-5">Get In Touch</p>
          <h1 style={{ fontFamily:"Cormorant Garamond,Georgia,serif", fontSize:"clamp(3rem,6vw,5.5rem)", fontWeight:300, letterSpacing:"-0.035em", lineHeight:1.0, color:"#0d1117" }}>
            Contact Us
          </h1>
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left — contact details */}
          <div>

            {/* Address */}
            <div className="border-t border-black/8 py-7 flex gap-8">
              <span className="w-20 flex-shrink-0 text-[10px] font-bold uppercase tracking-widest text-black/35 pt-0.5" style={{ fontFamily:"Jost,sans-serif" }}>Address</span>
              <Link href="https://maps.app.goo.gl/AVHudKdfADT35a9R8" target="_blank"
                className="text-sm text-black/70 transition-colors hover:text-black leading-relaxed" style={{ fontFamily:"Jost,sans-serif", fontWeight:300 }}>
                Building 69, Al Juwan Street,<br/>P.O. Box – 11093,<br/>Al Sadd, Doha, Qatar.
              </Link>
            </div>

            {/* Phone */}
            <div className="border-t border-black/8 py-7 flex gap-8">
              <span className="w-20 flex-shrink-0 text-[10px] font-bold uppercase tracking-widest text-black/35 pt-0.5" style={{ fontFamily:"Jost,sans-serif" }}>Phone</span>
              <div className="flex flex-col gap-1">
                <Link href="tel:+97444421661" className="text-sm text-black/70 hover:text-black transition-colors" style={{ fontFamily:"Jost,sans-serif", fontWeight:300 }}>+974 4442 1661</Link>
                <span className="text-sm text-black/50" style={{ fontFamily:"Jost,sans-serif", fontWeight:300 }}>Fax: +974 4442 9588</span>
              </div>
            </div>

            {/* Email */}
            <div className="border-t border-black/8 py-7 flex gap-8">
              <span className="w-20 flex-shrink-0 text-[10px] font-bold uppercase tracking-widest text-black/35 pt-0.5" style={{ fontFamily:"Jost,sans-serif" }}>Email</span>
              <div className="flex flex-col gap-3">
                <div>
                  <p className="text-sm text-black/50 mb-1" style={{ fontFamily:"Jost,sans-serif", fontWeight:300 }}>For any inquiries &amp; sales, kindly send to</p>
                  <Link href="mailto:procurement@gmedco.com" className="text-sm font-medium text-black/80 hover:text-black transition-colors" style={{ fontFamily:"Jost,sans-serif" }}>procurement@gmedco.com</Link>
                </div>
                <div>
                  <p className="text-sm text-black/50 mb-1" style={{ fontFamily:"Jost,sans-serif", fontWeight:300 }}>For reporting any product quality complaints or adverse events, kindly send to</p>
                  <Link href="mailto:pv@gmedco.com" className="text-sm font-medium text-black/80 hover:text-black transition-colors" style={{ fontFamily:"Jost,sans-serif" }}>pv@gmedco.com</Link>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="border-t border-black/8 py-7 flex gap-8">
              <span className="w-20 flex-shrink-0 text-[10px] font-bold uppercase tracking-widest text-black/35 pt-0.5" style={{ fontFamily:"Jost,sans-serif" }}>Hours</span>
              <div className="text-sm text-black/70 leading-relaxed" style={{ fontFamily:"Jost,sans-serif", fontWeight:300 }}>
                <p>Days: Sunday to Thursday</p>
                <p>Time: 8.00 a.m. to 5.30 p.m.</p>
              </div>
            </div>

            <div className="border-t border-black/8" />
          </div>

          {/* Right — contact form */}
          <div>
            <p className="restylane-label mb-8">Send a Message</p>
            <div className="space-y-8">
              {[
                { id:"name",    label:"Full Name",     type:"text",  placeholder:"Your name" },
                { id:"email",   label:"Email Address", type:"email", placeholder:"your@email.com" },
                { id:"subject", label:"Subject",       type:"text",  placeholder:"How can we help?" },
              ].map(f => (
                <div key={f.id}>
                  <label htmlFor={f.id} className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-black/40" style={{ fontFamily:"Jost,sans-serif" }}>{f.label}</label>
                  <input id={f.id} type={f.type} placeholder={f.placeholder}
                    className="w-full border-b border-black/20 bg-transparent pb-3 text-sm text-black outline-none placeholder:text-black/25 focus:border-black/60 transition-colors"
                    style={{ fontFamily:"Jost,sans-serif", fontWeight:300 }} />
                </div>
              ))}
              <div>
                <label htmlFor="msg" className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-black/40" style={{ fontFamily:"Jost,sans-serif" }}>Message</label>
                <textarea id="msg" rows={4} placeholder="Tell us more..."
                  className="w-full border-b border-black/20 bg-transparent pb-3 text-sm text-black outline-none placeholder:text-black/25 focus:border-black/60 transition-colors resize-none"
                  style={{ fontFamily:"Jost,sans-serif", fontWeight:300 }} />
              </div>
              <button className="mt-2 border border-black px-8 py-3 text-[10px] font-bold uppercase tracking-widest text-black transition-colors hover:bg-black hover:text-white"
                style={{ fontFamily:"Jost,sans-serif" }}>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
