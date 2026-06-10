// components/Footer.tsx
"use client";
import { FooterCopyright } from "./footerComponent/FooterCopyRight";
import { FooterLinkColumn } from "./footerComponent/FooterLinkColumn";
import { FooterLogoColumn } from "./footerComponent/FooterLogoColumn";

// Required in Next.js App Router to handle click interactions

export default function Footer() {
  const shopLinks = [
    { label: "Men's Collection", href: "#" },
    { label: "Women's Collection", href: "#" },
    { label: "Kids' Comfort", href: "#" },
    { label: "New Arrivals", href: "#" },
  ];

  const supportLinks = [
    { label: "Returns & Exchanges", href: "#" },
    { label: "Shipping Policy", href: "#" },
    { label: "Size Guide", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  const handleLinkClick = (link: { label: string; href: string }) => {
    console.log(`User navigated to: ${link.label} (${link.href})`);
  };

  return (
    <footer className="bg-on-secondary-fixed w-full">
      <div className="w-full px-4 md:px-16 py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 max-w-[1440px] mx-auto">
        <FooterLogoColumn />

        <FooterLinkColumn
          title="Shop"
          links={shopLinks}
          onClick={handleLinkClick}
        />
        <FooterLinkColumn
          title="Support"
          links={supportLinks}
          onClick={handleLinkClick}
        />

        <FooterLinkColumn
          title="Journal"
          links={[
            { label: "Our Story", href: "#" },
            { label: "Sustainability", href: "#" },
            { label: "Care Guide", href: "#" },
          ]}
          onClick={handleLinkClick}
        />
      </div>

      <FooterCopyright />
    </footer>
  );
}
