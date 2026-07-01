"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Home, Tag, Sparkles, Briefcase } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Deals", href: "/deals", icon: Tag },
    { name: "New Arrivals", href: "/new-arrivals", icon: Sparkles },
    { name: "Our Brands", href: "/brands", icon: Briefcase },
  ];

  const getShortName = (name: string) => {
    if (name === "Home") return "Home";
    if (name === "Deals") return "Deals";
    if (name === "New Arrivals") return "New";
    if (name === "Our Brands") return "Brands";
    return "";
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 hidden md:flex items-center justify-between px-12 pt-8 pb-4 bg-transparent select-none">
        <div className="flex items-center gap-4">
          <nav className="flex items-center bg-primary/50 backdrop-blur-xl px-2 py-2 rounded-full border border-white/10 shadow-xl">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-7 py-2.5 text-sm font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-white bg-primary border border-white/10 shadow-md"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <Link
            href="/"
            className="text-2xl font-black text-primary font-serif tracking-wider uppercase hover:opacity-80 transition-opacity"
          >
            StrideStyle
          </Link>
        </div>

        <Link
          href="/signup"
          className="p-3.5 rounded-full bg-[#064469] hover:bg-[#5790ab] transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <User className="text-white w-5 h-5" />
        </Link>
      </header>

      {/* Mobile Header */}
      <header className="fixed top-0 left-0 w-full z-40 md:hidden flex items-center justify-between px-4 pt-4 pb-3 bg-transparent">
        <Link
          href="/"
          className="text-xl font-black text-primary font-serif tracking-wider uppercase hover:opacity-80 transition-opacity"
        >
          StrideStyle
        </Link>

        <Link
          href="/signup"
          className="p-2.5 rounded-full bg-[#064469] hover:bg-[#5790ab] transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <User className="text-white w-5 h-5" />
        </Link>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-5 left-5 right-5 z-50 md:hidden">
        <div className="relative bg-primary/90 rounded-full backdrop-blur-3xl border border-white/10 shadow-2xl">
          <div className="flex items-center justify-around px-2 py-2.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              const shortName = getShortName(link.name);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative flex flex-col items-center justify-center gap-0.5 px-3 py-1.5 rounded-xl transition-all duration-300 min-w-[56px] ${
                    isActive
                      ? "text-white"
                      : "text-[#9ccddb]/50 hover:text-[#9ccddb]"
                  }`}
                >
                  {/* Active Background */}
                  {isActive && (
                    <div className="absolute inset-0 bg-[#064469]/40 rounded-xl border border-white/10 shadow-lg shadow-[#064469]/20" />
                  )}

                  <Icon
                    className={`relative w-5 h-5 transition-all duration-300 ${
                      isActive ? "scale-110" : "group-hover:scale-105"
                    }`}
                    strokeWidth={isActive ? 2.5 : 2}
                  />

                  {/* Label */}
                  {shortName && (
                    <span
                      className={`relative text-[9px] font-medium transition-all duration-300 ${
                        isActive ? "text-white" : "text-[#9ccddb]/60"
                      }`}
                    >
                      {shortName}
                    </span>
                  )}

                  {/* Active Indicator */}
                  {isActive && (
                    <span className="absolute -top-1 w-6 h-0.5 bg-gradient-to-r from-[#9ccddb] to-[#5790ab] rounded-full shadow-lg shadow-[#9ccddb]/30" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
