import React from "react";
import Image from "next/image";
import { HeroItem } from "../../Data/heroData";

interface HeroSectionProps {
  data: HeroItem[];
}

export const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  const hero = data.find((item) => item.parentId === "1");
  const products = data.filter((item) => item.parentId === "2");

  if (!hero) return null;

  return (
    <section className="w-full bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
        {/* Responsive Grid System: Stacks on mobile, splits 3:2 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-7">
          {/* =========================================================
              1. MAIN HERO CARD (Responsive Column Span)
              ========================================================= */}
          <div className="relative col-span-1 md:col-span-3 h-[480px] sm:h-[550px] md:h-[720px] overflow-hidden rounded-[30px] md:rounded-[40px] group">
            <Image
              src={hero.images[0]}
              alt={hero.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px"
              className="object-cover duration-700 group-hover:scale-105"
            />

            {/* Rich gradient overlay for high contrast text readability across devices */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

            {/* Top Badges (Adaptive positions and visual hierarchy) */}
            <div className="absolute top-6 left-6 md:top-8 md:left-8">
              <div className="backdrop-blur-xl bg-white/80 rounded-full px-4 py-1.5 md:px-5 md:py-2">
                <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-semibold text-black">
                  New Arrival
                </span>
              </div>
            </div>

            <div className="absolute top-6 right-6 md:top-8 md:right-8 hidden sm:block">
              <div className="bg-white rounded-full px-5 py-2.5 md:px-6 md:py-3 shadow-lg">
                <span className="font-semibold text-xs md:text-sm text-black">
                  Premium Collection
                </span>
              </div>
            </div>

            {/* Hero Card Overlays (Responsive Typography & Spacing) */}
            <div className="absolute bottom-8 left-6 right-6 md:bottom-12 md:left-12 max-w-xl">
              <p className="uppercase tracking-[0.35em] text-white/70 text-xs md:text-sm mb-2 md:mb-4">
                Luxury Fashion
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold leading-tight md:leading-none text-white">
                {hero.name}
              </h1>

              <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-white/80 leading-relaxed md:leading-8 line-clamp-3 sm:line-clamp-none">
                Discover timeless pieces crafted with premium materials and
                modern silhouettes for every occasion.
              </p>

              <button className="mt-6 md:mt-10 rounded-full bg-white text-black px-8 py-3 md:px-10 md:py-4 uppercase tracking-[0.25em] text-xs md:text-sm font-semibold hover:bg-black hover:text-white transition-all duration-300">
                Shop Collection
              </button>
            </div>
          </div>

          {/* =========================================================
              2. DYNAMIC PRODUCTS SIDE STACK (Responsive Grid Flex)
              ========================================================= */}
          <div className="col-span-1 md:col-span-2 flex flex-col gap-6 md:gap-7 h-auto md:h-[720px]">
            {products.map((item) => (
              <div
                key={item.id}
                className="group relative h-[320px] md:flex-1 overflow-hidden rounded-[24px] md:rounded-[32px] bg-white shadow-xl hover:shadow-2xl duration-500"
              >
                <Image
                  src={item.images[0]}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 400px"
                  className="object-cover duration-700 group-hover:scale-105"
                />

                {/* Soft gradient bottom fill for localized product copy */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Dynamic Price Bubble Badge */}
                <div className="absolute top-5 right-5 md:top-6 md:right-6 bg-white rounded-full px-3 py-1.5 md:px-4 md:py-2 shadow">
                  <span className="font-semibold text-xs md:text-sm text-neutral-900">
                    ${item.price}
                  </span>
                </div>

                {/* Product Meta Overlays */}
                <div className="absolute bottom-6 left-6 md:bottom-7 md:left-7">
                  <p className="uppercase tracking-[0.3em] text-white/70 text-[10px] md:text-xs">
                    Trending
                  </p>

                  <h2 className="text-2xl md:text-3xl font-semibold text-white mt-1 md:mt-2">
                    {item.name}
                  </h2>

                  <button className="mt-4 md:mt-5 text-xs md:text-sm uppercase tracking-[0.2em] text-white border-b border-white pb-1 hover:opacity-70 transition-opacity">
                    View Product
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
