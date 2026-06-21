"use client";
import { getImagePath } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="border-t border-black/10 bg-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="mb-6 inline-block">
              <Image
                src={getImagePath("/images/logo/global-logo.png")}
                alt="Global Medical Co."
                width={150}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-black/50 mb-6 max-w-[260px]">
              Your trusted partner in medical equipment and aesthetic solutions across the region.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://facebook.com/gmedco" target="_blank" rel="noopener noreferrer"
                className="text-black/40 transition-colors hover:text-black">
                <FontAwesomeIcon icon={faFacebook} className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/global_medicalqatar/" target="_blank" rel="noopener noreferrer"
                className="text-black/40 transition-colors hover:text-black">
                <FontAwesomeIcon icon={faInstagram} className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/company/global-medical-qatar/" target="_blank" rel="noopener noreferrer"
                className="text-black/40 transition-colors hover:text-black">
                <FontAwesomeIcon icon={faLinkedin} className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-black">Products</h4>
            <ul className="space-y-3">
              {[
                { label: "All Products", href: "/products" },
                { label: "Machines", href: "/products?category=Machines" },
                { label: "Aesthetic", href: "/products?category=Aesthetic" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-black/50 transition-colors hover:text-black">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Restylane */}
          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-black">Restylane</h4>
            <ul className="space-y-3">
              {[
                { label: "Restylane Kysse", href: "/products/aesthetic/restylane-kysse" },
                { label: "Restylane Defyne", href: "/products/aesthetic/restylane-defyne" },
                { label: "Restylane Lyft", href: "/products/aesthetic/restylane-lyft" },
                { label: "Restylane Classyc", href: "/products/aesthetic/restylane-classyc" },
                { label: "Restylane Volyme", href: "/products/aesthetic/restylane-volyme" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-black/50 transition-colors hover:text-black">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-black">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Activities", href: "/activities/workshops" },
                { label: "Workshops", href: "/activities/workshops" },
                { label: "Events", href: "/activities/events" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-black/50 transition-colors hover:text-black">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-black/10 pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-black/40">
            © {new Date().getFullYear()} Global Medical Co. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/contact" className="text-xs text-black/40 transition-colors hover:text-black">Contact</Link>
            <Link href="/about" className="text-xs text-black/40 transition-colors hover:text-black">About</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
