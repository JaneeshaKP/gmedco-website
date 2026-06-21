const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "60px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => (
  <div
    className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
    data-wow-delay=".1s"
    style={{ maxWidth: width, marginBottom: mb }}
  >
    <h2 className="restylane-title mb-5 text-black dark:text-white">{title}</h2>
    <p className="text-sm leading-relaxed text-black/50 dark:text-white/50">{paragraph}</p>
  </div>
);

export default SectionTitle;
