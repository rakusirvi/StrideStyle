import MinimalProductCard from "@/SharedComponent/ProductCard/minimalProductCard";
import Image from "next/image";
import React from "react";

interface FeaturesCardTypes {
  activeTab: string;
}

const PRODUCTS_DATA = [
  {
    id: "prod-1",
    category: "MEN TEE",
    title: "Marlow Tee",
    price: "$49",
    colorTags: ["bg-[#5E2B13]", "bg-black", "bg-white"],
    imageMain:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000",
    imageProduct:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000",
    description:
      "Our essentials are crafted from heavy-weight organic cotton and recycled fibers, ensuring every piece feels as premium as it looks.",
    isNew: true,
  },
  {
    id: "prod-2",
    category: "MEN TRACK",
    title: "Over-Sized Tracksuit",
    price: "$120",
    colorTags: ["bg-[#3c3d37]", "bg-[#1a1a1a]"],
    imageMain:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1000",
    imageProduct:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1000",
    description:
      "Premium heavy-fleece tailoring meets modern luxury street styling standards. Experience supreme loungewear structural layout loops.",
    isNew: true,
  },
  {
    id: "prod-3",
    category: "WOMEN TEE",
    title: "Classic Crop Base",
    price: "$39",
    colorTags: ["bg-[#d4af37]", "bg-white", "bg-neutral-400"],
    imageMain:
      "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=1000",
    imageProduct:
      "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=1000",
    description:
      "Breathable ultra-soft ribbed jersey weave optimized for effortless capsule wardrobe layer foundations across any casual setting.",
    isNew: true,
  },
  {
    id: "prod-4",
    category: "WOMEN TRACK",
    title: "Relaxed Lounge Pant",
    price: "$95",
    colorTags: ["bg-[#5E2B13]", "bg-black"],
    imageMain:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000",
    imageProduct:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000",
    description:
      "Designed with a high-waisted fluid drape frame tailored to perfection from sustainable eucalyptus modal French Terry structures.",
    isNew: true,
  },
  {
    id: "prod-5",
    category: "KIDS SET",
    title: "Mini Organic Set",
    price: "$65",
    colorTags: ["bg-[#a3b18a]", "bg-[#e9edc9]"],
    imageMain:
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=1000",
    imageProduct:
      "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=1000",
    description:
      "Hypoallergenic ultra-soft durability intended for high-motion day cycles. Styled cleanly in classic minimal earth-tone hues.",
    isNew: true,
  },
];

export default function FeaturesCard({ activeTab }: FeaturesCardTypes) {
  const currentItem =
    PRODUCTS_DATA.find((item) => item.category === activeTab) ||
    PRODUCTS_DATA[0];

  return (
    <section className="w-full min-h-[90vh] bg-gradient-to-b from-neutral-50 to-neutral-100 py-12 md:py-24 border-b border-neutral-200 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10">
        <div
          key={activeTab}
          className="grid grid-cols-12 gap-8 lg:gap-20 items-start animate-fade-in"
        >
          {/* Left Editorial */}
          <div className="col-span-12 lg:col-span-7 flex flex-col order-1 lg:order-none">
            <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-neutral-500 uppercase mb-3 block">
              {currentItem.category} Collection
            </span>
            <h2 className="text-3xl md:text-6xl lg:text-7xl font-serif tracking-tight text-neutral-900 mb-6">
              Designed for <span className="italic font-normal">Living</span>
            </h2>
            <p className="text-neutral-600 text-base md:text-lg lg:text-xl max-w-xl mb-8 md:mb-12 leading-relaxed font-light">
              {currentItem.description}
            </p>

            <div className="w-full relative aspect-square md:aspect-16/10 overflow-hidden bg-neutral-200 group cursor-crosshair rounded-xl shadow-lg">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent z-10 transition-colors duration-500" />
              <Image
                className="w-full h-full object-cover transform scale-100 group-hover:scale-[1.05] transition-transform duration-[1.5s] ease-out"
                alt={`${currentItem.title} Campaign View`}
                src={currentItem.imageMain}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw"
              />
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 z-20 mix-blend-difference text-white text-xs md:text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Editorial / No. {currentItem.id.split("-")[1]}
              </div>
            </div>
          </div>

          {/* Right Product Card */}
          <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-24 flex flex-col justify-center items-center lg:items-start pt-6 lg:pt-28">
            <MinimalProductCard
              title={currentItem.title}
              price={currentItem.price}
              category={currentItem.category}
              imageProduct={currentItem.imageProduct}
              colorTags={currentItem.colorTags}
              isNew={currentItem.isNew}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
