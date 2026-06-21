"use client";

import { Featured } from '@/types/featured';
import Image from 'next/image';
import Link from 'next/link';

interface Props { featured: Featured; }

const SingleFeatured = ({ featured }: Props) => {
  const { image, name, category, productId, productCategory } = featured;
  const href = productId && productCategory ? `/products/${productCategory}/${productId}` : '#';
  const isMachine = category === "Machines";

  const Inner = () => (
    <>
      {/* Image area — taller for machines */}
      <div
        className="relative flex items-center justify-center bg-white overflow-hidden"
        style={{ height: isMachine ? '280px' : '220px', padding: isMachine ? '12px' : '28px' }}
      >
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt={name}
            fill
            className={`transition-transform duration-500 group-hover:scale-105 ${isMachine ? 'object-contain' : 'object-contain'}`}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>
      {/* Label */}
      <div className="px-5 py-4 border-t border-black/8">
        {category && (
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-black/40">{category}</p>
        )}
        <h3 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "1rem", fontWeight: 500, letterSpacing: "-0.01em" }}
          className="text-black leading-snug">
          {name}
        </h3>
      </div>
    </>
  );

  return productId && productCategory ? (
    <Link href={href} className="group block overflow-hidden bg-white border border-black/8 transition-shadow duration-300 hover:shadow-md">
      <Inner />
    </Link>
  ) : (
    <div className="group overflow-hidden bg-white border border-black/8">
      <Inner />
    </div>
  );
};

export default SingleFeatured;
