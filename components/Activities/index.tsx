"use client";

import Image from "next/image";
import Link from "next/link";
import { getImagePath } from "@/lib/utils";

const instagramPosts = [
  {
    id: 1,
    image: getImagePath("/images/activities/events/restylane-reveal/3.jpg"),
    caption: "Restylane Reveal — An evening of innovation & aesthetic mastery ✨",
    likes: "124",
  },
  {
    id: 2,
    image: getImagePath("/images/activities/events/restylane-reveal/8.jpg"),
    caption: "The Restylane Experience by Global Medical Company 💫",
    likes: "98",
  },
  {
    id: 3,
    image: getImagePath("/images/activities/workshops/restylane-masterclass-dr-ishaan-ramkisson/15.jpg"),
    caption: "Restylane Masterclass with Global Galderma Trainer Dr. Ishaan Ramkisson 🎓",
    likes: "87",
  },
  {
    id: 4,
    image: getImagePath("/images/activities/events/motiva-event-plastic-surgery-event/18.jpg"),
    caption: "Motiva Plastic Surgery Event — connecting the best in the field 🏥",
    likes: "76",
  },
  {
    id: 5,
    image: getImagePath("/images/activities/workshops/restylane-workshops-micheline-chalouhi/11.jpg"),
    caption: "Advanced Restylane techniques with Micheline Chalouhi 💉",
    likes: "112",
  },
  {
    id: 6,
    image: getImagePath("/images/activities/events/prime-product-launch/7.jpg"),
    caption: "Prime Product Launch — introducing the future of aesthetic medicine 🚀",
    likes: "143",
  },
  {
    id: 7,
    image: getImagePath("/images/activities/workshops/restylane-masterclass-dr-ishaan-ramkisson/1.jpg"),
    caption: "Knowledge shared is impact multiplied 🌟 #GlobalMedical",
    likes: "91",
  },
];

const InstagramIcon = ({ size = 5 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" className={`h-${size} w-${size} fill-current`}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

const Activities = () => {
  const [featured, ...rest] = instagramPosts;

  return (
    <section id="activities" className="relative z-10 py-16 md:py-20 lg:py-28 bg-white dark:bg-dark">
      <div className="container">

        {/* Header */}
        <div className="wow fadeInUp mb-12 text-center" data-wow-delay=".1s">
          <Link
            href="https://www.instagram.com/global_medicalqatar/"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-stroke px-5 py-2 text-sm font-semibold text-body-color transition hover:border-pink-500 hover:text-pink-500 dark:border-dark-3 dark:text-body-color-dark"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white text-xs">
              <InstagramIcon size={3} />
            </span>
            @global_medicalqatar
          </Link>
          <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[42px]">
            Our Latest Activities
          </h2>
          <p className="mx-auto max-w-[580px] text-base !leading-relaxed text-body-color md:text-lg">
            Follow us on Instagram to stay updated with our workshops, events and more.
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-3 gap-2 md:gap-3">

          {/* Featured large post — top left, spans 2 cols & 2 rows */}
          <Link
            href="https://www.instagram.com/global_medicalqatar/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative col-span-2 row-span-2 overflow-hidden rounded-2xl bg-gray-100 dark:bg-dark-2"
            style={{ aspectRatio: "1/1" }}
          >
            <Image
              src={featured.image}
              alt={featured.caption}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="66vw"
            />
            {/* Gradient overlay always visible at bottom */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5">
              <p className="text-sm font-medium text-white line-clamp-2">{featured.caption}</p>
              <div className="mt-2 flex items-center gap-1 text-white/80 text-xs">
                <HeartIcon /> {featured.likes}
              </div>
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/20">
              <div className="scale-75 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-pink-500">
                  <InstagramIcon size={5} />
                </div>
              </div>
            </div>
          </Link>

          {/* Small posts — right column */}
          {rest.slice(0, 2).map((post) => (
            <Link
              key={post.id}
              href="https://www.instagram.com/global_medicalqatar/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-dark-2"
              style={{ aspectRatio: "1/1" }}
            >
              <Image
                src={post.image}
                alt={post.caption}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="33vw"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-xs font-medium text-white line-clamp-2">{post.caption}</p>
              </div>
            </Link>
          ))}

          {/* Bottom row — 3 equal posts */}
          {rest.slice(2, 5).map((post) => (
            <Link
              key={post.id}
              href="https://www.instagram.com/global_medicalqatar/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-dark-2"
              style={{ aspectRatio: "1/1" }}
            >
              <Image
                src={post.image}
                alt={post.caption}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="33vw"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-xs font-medium text-white line-clamp-2">{post.caption}</p>
              </div>
            </Link>
          ))}

          {/* Last post with "View More" overlay */}
          <Link
            href="https://www.instagram.com/global_medicalqatar/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-dark-2"
            style={{ aspectRatio: "1/1" }}
          >
            <Image
              src={rest[5].image}
              alt={rest[5].caption}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="33vw"
            />
            {/* Always-on "View More" overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 transition-colors duration-300 group-hover:bg-black/65">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white mb-2">
                <InstagramIcon size={5} />
              </div>
              <p className="text-sm font-bold text-white">View More</p>
              <p className="text-xs text-white/70">on Instagram</p>
            </div>
          </Link>

        </div>

        {/* Follow CTA */}
        <div className="mt-10 text-center">
          <Link
            href="https://www.instagram.com/global_medicalqatar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition-opacity hover:opacity-90"
          >
            <InstagramIcon size={4} />
            Follow us on Instagram
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Activities;
