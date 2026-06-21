import { Activity } from "@/types/activity";
import Image from "next/image";
import Link from "next/link";

const SingleActivity = ({ activity }: { activity: Activity }) => {
  const { title, image, paragraph, tags, publishDate, href } = activity;
  const tag = tags[0];
  return (
    <Link href={href} className="group block bg-white border border-black/8 transition-shadow duration-300 hover:shadow-md">
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
        <Image src={image} alt={title} fill loading="lazy"
          className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width:768px)100vw,33vw" />
        <span className="absolute left-4 top-4 bg-white/90 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-black/70"
          style={{ fontFamily:"Jost,sans-serif" }}>{tag}</span>
      </div>
      {/* Text */}
      <div className="px-6 py-6">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-black/35"
          style={{ fontFamily:"Jost,sans-serif" }}>{publishDate}</p>
        <h3 style={{ fontFamily:"Cormorant Garamond,Georgia,serif", fontSize:"1.2rem", fontWeight:400, letterSpacing:"-0.01em", color:"#0d1117", lineHeight:1.3 }}
          className="mb-3 group-hover:opacity-60 transition-opacity">{title}</h3>
        <p className="text-sm leading-relaxed text-black/50 line-clamp-2"
          style={{ fontFamily:"Jost,sans-serif", fontWeight:300 }}>{paragraph}</p>
      </div>
    </Link>
  );
};

export default SingleActivity;
