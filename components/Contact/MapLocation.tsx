export default function MapLocation() {
  return (
    <section className="bg-[#f5f2ef] border-b border-black/8">
      <div className="mx-auto px-8 py-16 md:px-16" style={{ maxWidth: 1400 }}>
        <p className="restylane-label mb-8">Find Us</p>
        <div className="overflow-hidden border border-black/8" style={{ height: 420 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.843493596808!2d51.488426274892994!3d25.275849728511503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45db472a7935fd%3A0xf3ef55582be0f6d3!2sGlobal%20Medical%20Company!5e0!3m2!1sen!2sqa!4v1777882553877!5m2!1sen!2sqa"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Global Medical Company — Doha, Qatar"
          />
        </div>
        <p className="mt-4 text-xs text-black/40" style={{ fontFamily: "Jost, sans-serif" }}>
          Building 69, Al Juwan Street, Al Sadd, Doha, Qatar
          {" · "}
          <a
            href="https://maps.app.goo.gl/1285Ye9N15HmyHNT9"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-black transition-colors"
          >
            Open in Google Maps
          </a>
        </p>
      </div>
    </section>
  );
}
