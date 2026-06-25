import MinimalProductCard from "@/SharedComponent/ProductCard/minimalProductCard";
import { ChevronRight } from "lucide-react";
import React from "react";

const PRODUCTS_DATA = [
  {
    id: "prod-1",
    category: "MEN TEE",
    title: "Marlow Tee",
    price: "$49",
    colorTags: ["bg-[#5E2B13]", "bg-black", "bg-white"],
    imageProduct:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000",
    isNew: true,
  },
  {
    id: "prod-2",
    category: "MEN TRACK",
    title: "Over-Sized Tracksuit",
    price: "$120",
    colorTags: ["bg-[#3c3d37]", "bg-[#1a1a1a]"],
    imageProduct:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1000",
    isNew: true,
  },
  {
    id: "prod-3",
    category: "WOMEN TEE",
    title: "Classic Crop Base",
    price: "$39",
    colorTags: ["bg-[#d4af37]", "bg-white", "bg-neutral-400"],
    imageProduct:
      "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=1000",
    isNew: true,
  },
  {
    id: "prod-4",
    category: "WOMEN TRACK",
    title: "Relaxed Lounge Pant",
    price: "$95",
    colorTags: ["bg-[#5E2B13]", "bg-black"],
    imageProduct:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000",
    isNew: true,
  },
];

const TrendingSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-primary-fixed-dim to-primary-fixed-dim/80 py-16 md:py-24 lg:py-32">
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between mb-12 md:mb-16 lg:mb-20">
            <div className="max-w-2xl">
              <span className="uppercase tracking-[0.35em] text-[11px] sm:text-xs text-on-tertiary-fixed-variant/60">
                Community Picks
              </span>

              <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase text-on-tertiary-fixed-variant leading-none">
                Trending Now
              </h2>

              <p className="mt-5 text-sm sm:text-base md:text-lg font-light text-inverse-surface leading-relaxed">
                Selected by our community and curated for your wardrobe.
                Discover the season’s most-loved essentials and everyday
                silhouettes.
              </p>
            </div>

            <button
              className="
                group
                self-start
                md:self-auto
                flex
                items-center
                gap-2
                rounded-full
                bg-on-tertiary-fixed
                px-6
                py-3.5
                text-sm
                font-medium
                text-white
                transition-all
                duration-300
                hover:shadow-lg
                hover:gap-4
                cursor-pointer
              "
            >
              <span>Shop All</span>

              <ChevronRight
                className="
                  w-4
                  h-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>
          </div>

          {/* Mobile Scroll / Desktop Grid */}
          <div
            className="
              flex
              gap-5
              overflow-x-auto
              pb-4
              snap-x
              snap-mandatory

              md:grid
              md:grid-cols-2
              lg:grid-cols-4
              md:gap-6
              md:overflow-visible

              [&::-webkit-scrollbar]:hidden
              [-ms-overflow-style:none]
              [scrollbar-width:none]
            "
          >
            {PRODUCTS_DATA.map((product) => (
              <div
                key={product.id}
                className="
                  min-w-[280px]
                  snap-start

                  md:min-w-0
                "
              >
                <MinimalProductCard
                  title={product.title}
                  category={product.category}
                  price={product.price}
                  imageProduct={product.imageProduct}
                  colorTags={product.colorTags}
                  isNew={product.isNew}
                />
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="flex justify-center mt-12 md:mt-16">
            <button
              className="
                border
                border-on-tertiary-fixed/20
                px-8
                py-4
                rounded-full
                text-sm
                uppercase
                tracking-wider
                text-on-tertiary-fixed-variant
                hover:bg-on-tertiary-fixed
                hover:text-white
                transition-all
                duration-300
                cursor-pointer
              "
            >
              View Entire Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
