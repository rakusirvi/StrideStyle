"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface MinimalProductCardProps {
  title: string;
  category: string;
  price: string;
  imageProduct: string;
  colorTags: string[];
  isNew?: boolean;
}

export default function MinimalProductCard({
  title,
  category,
  price,
  imageProduct,
  colorTags,
  isNew = false,
}: MinimalProductCardProps) {
  return (
    <article
      className="
        group
        w-[280px]
        sm:w-[290px]
        lg:w-full
        max-w-[300px]
        overflow-hidden
        rounded-3xl
        bg-white
        border border-neutral-200/60
        shadow-sm
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
        duration-500
      "
    >
      {/* Image */}
      <div className="relative h-[300px] overflow-hidden bg-neutral-100">
        {isNew && (
          <div
            className="
              absolute
              top-4
              left-4
              z-10
              rounded-full
              bg-white/90
              px-3
              py-1
              text-[10px]
              font-semibold
              tracking-[0.2em]
              text-[#5E2B13]
              backdrop-blur-md
            "
          >
            NEW
          </div>
        )}

        <Image
          src={imageProduct}
          alt={title}
          fill
          sizes="300px"
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-neutral-400
                font-medium
              "
            >
              {category}
            </p>

            <h3
              className="
                mt-2
                text-base
                font-semibold
                text-neutral-900
                leading-snug
              "
            >
              {title}
            </h3>
          </div>

          <span
            className="
              text-base
              font-bold
              text-[#5E2B13]
              whitespace-nowrap
            "
          >
            {price}
          </span>
        </div>

        {/* Colors */}
        <div className="flex gap-2 mt-4">
          {colorTags.map((color, index) => (
            <span
              key={index}
              className={`
                h-4
                w-4
                rounded-full
                border
                border-black/10
                ${color}
              `}
            />
          ))}
        </div>

        {/* CTA */}
        <button
          className="
            mt-5
            flex
            items-center
            gap-2
            text-sm
            font-medium
            text-neutral-700
            transition-all
            duration-300
            hover:text-[#5E2B13]
          "
        >
          View Product
          <ArrowRight
            className="
              h-4
              w-4
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </button>
      </div>
    </article>
  );
}
