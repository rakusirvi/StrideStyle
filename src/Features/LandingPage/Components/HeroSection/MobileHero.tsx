import React from "react";
import Image from "next/image";
import { HeroItem } from "../../Data/heroData";

interface MobileHeroProps {
  data: HeroItem[];
}

export const MobileHero: React.FC<MobileHeroProps> = ({ data }) => {
  const hero = data.find((item) => item.parentId === "1");
  const products = data.filter((item) => item.parentId === "2");

  if (!hero) return null;

  return (
    <section className="md:hidden bg-[#fafafa]">
      <div className="space-y-6 p-5">
        {/* Hero Banner */}
        <div className="relative h-[560px] overflow-hidden rounded-[32px] shadow-xl">
          <Image
            src={hero.images[0]}
            alt={hero.name}
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Badge */}
          <div className="absolute top-5 left-5 rounded-full bg-white/90 px-4 py-2 backdrop-blur">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-black">
              New Collection
            </span>
          </div>

          {/* Hero Content */}
          <div className="absolute bottom-8 left-6 right-6">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/70">
              Luxury Fashion
            </p>

            <h1 className="text-5xl font-semibold leading-tight text-white">
              {hero.name}
            </h1>

            <p className="mt-4 text-sm leading-7 text-white/80">
              Premium essentials crafted for modern lifestyles.
            </p>

            <button className="mt-8 rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition active:scale-95">
              Shop Collection
            </button>
          </div>
        </div>

        {/* Trending */}
        <div>
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-neutral-900">
              Trending Now
            </h2>

            <button className="text-sm text-neutral-500">View All →</button>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2 snap-x scrollbar-none">
            {products.map((item) => (
              <div key={item.id} className="group min-w-[230px] snap-start">
                <div className="relative h-[320px] overflow-hidden rounded-[26px] bg-neutral-100 shadow-lg">
                  <Image
                    src={item.images[0]}
                    alt={item.name}
                    fill
                    className="object-cover transition duration-500 group-active:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  <div className="absolute top-4 right-4 rounded-full bg-white px-4 py-2 shadow">
                    <span className="text-sm font-semibold">${item.price}</span>
                  </div>
                </div>

                <div className="mt-4 px-1">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-sm text-neutral-500">
                    {item.sizes.join(" • ")}
                  </p>

                  <button className="mt-4 rounded-full border border-neutral-900 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition active:bg-black active:text-white">
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
