import BlurCircle from "@/Components/Designs/BlurCircle";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  const sampleProducts = [
    {
      id: 1,
      title: "Classic Trench",
      imgUrl:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      title: "Minimal Knitwear",
      imgUrl:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      title: "Urban Jacket",
      imgUrl:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=80",
    },
    {
      id: 5,
      title: "Summer Linen",
      imgUrl:
        "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500&auto=format&fit=crop&q=80",
    },
    {
      id: 6,
      title: "Casual Denim",
      imgUrl:
        "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section className="relative w-full  md:h-screen overflow-hidden">
      {/* Background Visuals */}
      <div
        className="absolute inset-0 z-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <BlurCircle size={800} />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full h-full p-0 md:p-2">
        <div className="w-full h-full flex flex-col gap-10  md:gap-0 md:justify-around items-center text-center bg-fifth/70 md:rounded-3xl overflow-hidden pt-20 md:pt-20">
          {/* Top Section: Typography and CTA */}
          <div className="flex flex-col items-center gap-6 md:gap-8 px-6">
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-salsa text-white leading-tight">
              Where Style speaks, <br className="md:hidden" />
              trends resonate, <br className="hidden md:block" />
              fashion Flourishes, Comfort
            </h1>

            <Link
              href="/shop"
              className="flex items-center justify-center w-58 md:w-60 h-14 md:h-16 rounded-full bg-primary text-white text-sm md:text-base hover:bg-secondary transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-primary/30"
            >
              SHOP COLLECTION
            </Link>
          </div>

          {/* Bottom Section: Properly Aligned Product Slider */}
          <div className="w-full flex gap-4 overflow-x-auto no-scrollbar px-6 pb-6  lg:justify-center">
            {sampleProducts.map((product) => (
              <Link
                key={product.id}
                href="/shop"
                className="group min-w-[160px] sm:min-w-[190px] md:min-w-[280px] max-w-[240px] flex-1 text-white transition-all duration-300 hover:-translate-y-2 block text-left"
              >
                <div className=" aspect-4/7  rounded-t-4xl md:rounded-t-[100px] overflow-hidden mb-3">
                  <Image
                    src={product.imgUrl}
                    alt={product.title}
                    width={500}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
