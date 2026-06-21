import Link from "next/link";

const socials = [
  { label: "Instagram", handle: "@global_medicalqatar", href: "https://www.instagram.com/global_medicalqatar/" },
  { label: "LinkedIn",  handle: "Global Medical Co.",   href: "https://www.linkedin.com/company/global-medical-qatar/" },
  { label: "Facebook",  handle: "GMEDCO",               href: "https://facebook.com/gmedco" },
];

export default function SocialMedia() {
  return (
    <section className="bg-white py-16 border-b border-black/8">
      <div className="mx-auto px-8 md:px-16" style={{ maxWidth: 1400 }}>
        <p className="restylane-label mb-8">Follow Us</p>
        <div className="flex flex-wrap gap-6">
          {socials.map(s => (
            <Link key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-4 border border-black/12 px-7 py-5 transition-colors hover:border-black/40">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-black/35 mb-1" style={{ fontFamily:"Jost,sans-serif" }}>{s.label}</p>
                <p className="text-sm text-black/70" style={{ fontFamily:"Cormorant Garamond,Georgia,serif", fontSize:"1.1rem", fontWeight:400 }}>{s.handle}</p>
              </div>
              <svg className="ml-4 text-black/30 group-hover:text-black transition-colors" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
