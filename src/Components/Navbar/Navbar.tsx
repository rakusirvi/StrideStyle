"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Deals", href: "/deals" },
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "Our Brands", href: "/brands" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 pt-5 md:pt-8 pb-4 bg-transparent select-none">
        {/* Brand Identity */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-black text-white tracking-wider uppercase hover:opacity-90 transition-opacity z-50"
        >
          StrideStyle
        </Link>

        {/* =========================================================
            DESKTOP NAVIGATION
            ========================================================= */}
        <nav className="hidden md:flex items-center bg-[#06334e]/50 backdrop-blur-xl px-2 py-2 rounded-full border border-white/10 shadow-xl">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-7 py-2.5 text-sm font-bold rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-white bg-[#064469] border border-white/10 shadow-md"
                    : "text-[#9ccdDB]/90 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Authentication Gateways */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/signin"
            className="text-sm font-black text-[#9ccdDB] hover:text-white tracking-widest uppercase transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="px-8 py-3.5 text-sm font-black text-[#052335] bg-white rounded-full hover:bg-[#d0d7e1] shadow-2xl transition-all transform active:scale-95 text-center"
          >
            Sign Up
          </Link>
        </div>

        {/* =========================================================
            MOBILE UI HAMBURGER TRIGGER
            ========================================================= */}
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Toggle Menu"
          className="flex md:hidden flex-col gap-1.5 justify-center items-center w-11 h-11 rounded-xl backdrop-blur-md border border-white/10 focus:outline-none shadow-lg bg-[#06334e]/40 transition-transform active:scale-95 cursor-pointer"
        >
          <span className="h-0.5 w-5 bg-white rounded"></span>
          <span className="h-0.5 w-5 bg-white rounded"></span>
          <span className="h-0.5 w-5 bg-white rounded"></span>
        </button>
      </header>

      {/* =========================================================
          FULL-SCREEN MOBILE NAVIGATION (Premium Backdrop Blur)
          ========================================================= */}
      <div
        className={`fixed inset-0 h-screen w-screen bg-[#052335]/90 backdrop-blur-2xl z-[101] md:hidden p-8 flex flex-col justify-between transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="w-full flex flex-col">
          {/* Header containing Branding and Dismiss Action */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-xl font-black text-white tracking-wider uppercase"
            >
              StrideStyle
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
              className="w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white text-2xl font-light cursor-pointer active:scale-95 transition-transform"
            >
              &times;
            </button>
          </div>

          {/* Core Interactive Routing Matrix */}
          <nav className="flex flex-col space-y-8 mt-12">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`w-full text-left text-2xl tracking-wide transition-colors ${
                    isActive
                      ? "text-white font-black pl-2 border-l-2 border-[#9ccdDB]"
                      : "text-[#9ccdDB] font-medium hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Full-Screen Lower Authentication Group */}
        <div className="flex flex-col space-y-4 w-full pb-8">
          <div className="h-px bg-white/10 w-full mb-4" />
          <Link
            href="/signin"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-4 rounded-xl text-base font-bold text-[#9ccdDB] border border-white/10 bg-white/5 tracking-widest uppercase active:scale-98 transition-transform"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-4 rounded-xl text-base font-black text-[#052335] bg-white tracking-widest uppercase shadow-xl active:scale-98 transition-transform"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
