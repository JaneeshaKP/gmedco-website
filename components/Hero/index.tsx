"use client";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src="/images/video/globalmedicalco.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Hero;
