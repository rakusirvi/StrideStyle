"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag, User } from "lucide-react";

// 1. Centralized navigation configuration array (DRY Principle)
const NAV_LINKS = [
  { label: "Our Brands", href: "/brands" },
  { label: "New Arrival", href: "/new-arrivals" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // 2. Prevent background scrolling when the mobile drawer overlay is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="bg-surface sticky top-0 z-50 border-b border-outline-variant/30 backdrop-blur-md bg-surface/90">
      <nav className="flex justify-between items-center px-4 md:px-16 py-4 md:py-5 w-full max-w-[1440px] mx-auto">
        {/* Left: Mobile Menu Trigger */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden flex items-center p-2 -ml-2 text-text-main hover:text-secondary rounded-lg focus-visible:ring-2 focus-visible:ring-secondary/20 transition-colors"
          aria-label="Open Menu"
          aria-expanded={isOpen}
        >
          <Menu className="w-6 h-6 stroke-[1.5]" />
        </button>

        {/* Center/Left: Brand Identity */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold tracking-tighter text-secondary select-none focus-visible:outline-hidden"
        >
          STRIDE STYLE
        </Link>

        {/* Desktop Links (Mapped dynamically from central array) */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              className="text-sm font-medium text-text-muted hover:text-secondary transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-secondary hover:after:w-full after:transition-all after:duration-300"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Action Icons */}
        <div className="flex items-center gap-3 md:gap-5 text-secondary">
          <Link
            href="/cart"
            className="hover:opacity-80 p-2 -mr-1 transition-opacity relative rounded-lg focus-visible:ring-2 focus-visible:ring-secondary/20"
            aria-label="Shopping Cart"
          >
            <ShoppingBag className="w-5 h-5 md:w-[22px] md:h-[22px] stroke-[1.5]" />
            {/* Structural Cart item notification dot blueprint */}
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse hidden" />
          </Link>

          <Link
            href="/account"
            className="hover:opacity-80 p-2 transition-opacity rounded-lg focus-visible:ring-2 focus-visible:ring-secondary/20"
            aria-label="User Account"
          >
            <User className="w-5 h-5 md:w-[22px] md:h-[22px] stroke-[1.5]" />
          </Link>
        </div>
      </nav>

      {/* --- MOBILE DRAWERS OVERLAY --- */}
      {/* Backdrop Dim Layer */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Slide-out Navigation Drawer */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-[290px] bg-surface z-50 p-6 shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        {/* Drawer Header Close Bar */}
        <div className="flex justify-between items-center mb-10">
          <div className="text-lg font-bold tracking-tighter text-secondary">
            STRIDE STYLE
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-text-main hover:text-secondary p-1 -mr-1 rounded-lg focus-visible:ring-2 focus-visible:ring-secondary/20 transition-colors"
            aria-label="Close Menu"
          >
            <X className="w-6 h-6 stroke-[1.5]" />
          </button>
        </div>

        {/* Vertical Mobile Links */}
        <div className="flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-text-main hover:text-secondary border-b border-outline-variant/20 pb-3 transition-colors flex justify-between items-center group"
              href={link.href}
            >
              {link.label}
              <span className="text-xs text-text-muted transform translate-x-[-4px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
