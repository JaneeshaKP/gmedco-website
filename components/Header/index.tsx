"use client";
import { getImagePath } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);
  const usePathName = usePathname();

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY >= 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <header
      className={`left-0 top-0 z-[9999] flex w-full items-center border-b transition-all duration-300 ${
        sticky
          ? "fixed bg-white/95 backdrop-blur-sm border-black/10 shadow-sm"
          : "absolute bg-white border-black/10"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={getImagePath("/images/logo/global-logo.png")}
              alt="Global Medical Co."
              width={160}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex lg:items-center lg:gap-8">
            {menuData.map((menuItem, index) => (
              <div key={index} className="group relative">
                {menuItem.path ? (
                  <Link
                    href={menuItem.path}
                    className={`nav-link-restylane py-2 transition-colors ${
                      usePathName === menuItem.path ? "text-black" : "text-black/70 hover:text-black"
                    }`}
                  >
                    {menuItem.title}
                  </Link>
                ) : (
                  <>
                    <button className="nav-link-restylane flex items-center gap-1 py-2 text-black/70 hover:text-black">
                      {menuItem.title}
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </button>
                    {/* Dropdown */}
                    <div className="pointer-events-none invisible absolute left-0 top-full z-50 min-w-[220px] translate-y-2 border border-black/10 bg-white opacity-0 shadow-lg transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      {menuItem.submenu?.map((sub, si) => (
                        <Link
                          key={si}
                          href={sub.path}
                          className="block border-b border-black/5 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-black/70 transition-colors last:border-0 hover:bg-gray-50 hover:text-black"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex flex-col gap-1.5 p-2 lg:hidden"
            aria-label="Menu"
          >
            <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ${navbarOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ${navbarOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ${navbarOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {navbarOpen && (
          <div className="border-t border-black/10 pb-4 lg:hidden">
            {menuData.map((menuItem, index) => (
              <div key={index}>
                {menuItem.path ? (
                  <Link
                    href={menuItem.path}
                    className="block px-2 py-3 text-xs font-semibold uppercase tracking-widest text-black/70 hover:text-black"
                    onClick={() => setNavbarOpen(false)}
                  >
                    {menuItem.title}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => handleSubmenu(index)}
                      className="flex w-full items-center justify-between px-2 py-3 text-xs font-semibold uppercase tracking-widest text-black/70"
                    >
                      {menuItem.title}
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </button>
                    {openIndex === index && (
                      <div className="bg-gray-50 pl-4">
                        {menuItem.submenu?.map((sub, si) => (
                          <Link
                            key={si}
                            href={sub.path}
                            className="block px-2 py-2.5 text-xs font-medium tracking-wide text-black/60 hover:text-black"
                            onClick={() => setNavbarOpen(false)}
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
