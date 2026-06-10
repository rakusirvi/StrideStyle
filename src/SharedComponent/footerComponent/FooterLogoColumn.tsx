import Link from "next/link";
import { SiInstagram, SiFacebook } from "@icons-pack/react-simple-icons";

export function FooterLogoColumn() {
  return (
    <div className="col-span-1">
      {/* Brand Identity */}
      <div className="text-2xl font-bold tracking-tighter text-white mb-6">
        STRIDE STYLE
      </div>

      {/* Brand Philosophy */}
      <p className="text-white/70 text-base leading-relaxed mb-8">
        Crafted for relaxed exclusivity. High-end comfort for the modern
        lifestyle.
      </p>

      {/* Interactive Icon Strip */}
      <div className="flex gap-4">
        {/* INSTAGRAM LINK */}
        <Link
          className="group text-white/70 hover:text-white transition-all duration-300 p-2 rounded-xl hover:bg-linear-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] flex items-center justify-center border border-white/10 hover:border-transparent"
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          {/* group-hover:scale-110 makes the icon pop slightly when hovered */}
          <SiInstagram className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
        </Link>

        {/* FACEBOOK LINK */}
        <Link
          className="group text-white/70 transition-all duration-300 p-2 rounded-xl hover:bg-[#1877F2] hover:text-white flex items-center justify-center border border-white/10 hover:border-transparent"
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <SiFacebook className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
        </Link>
      </div>
    </div>
  );
}
