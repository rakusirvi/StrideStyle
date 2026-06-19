"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";

interface ProductType {
  product: {
    id: string;
    title: string;
    price: string;
    img: string;
    colors?: string[];
  };
}

const ProductCard = ({ product }: ProductType) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);

    console.log(`MongoDB Product ID clicked: ${product.id}`);
  };

  // Memoizing the color computations so they don't run on every toggle/re-render
  const displayColors = useMemo(() => {
    if (!product.colors || product.colors.length === 0) return null;

    const visibleColors = product.colors.slice(0, 4);
    const remainingCount =
      product.colors.length > 4 ? product.colors.length - 4 : 0;

    return {
      visibleColors,
      remainingCount,
    };
  }, [product.colors]); // Only recalculates if the product's colors array changes

  return (
    <div className="group cursor-pointer flex flex-col h-full space-y-2">
      <div className="relative overflow-hidden bg-gray-100 aspect-3/4 rounded-md">
        <Image
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
          src={product.img}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
          priority={false}
        />

        <button
          onClick={handleLikeToggle}
          className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full shadow-sm transition-all z-10 group/btn"
          aria-label={isLiked ? "Unlike product" : "Like product"}
        >
          <Heart
            className={`w-4 h-4 transition-colors duration-300 ${
              isLiked
                ? "text-red-500 fill-red-500"
                : "text-gray-700 group-hover/btn:text-red-500 group-hover/btn:fill-red-500"
            }`}
            strokeWidth={2}
          />
        </button>
      </div>

      <div className="flex flex-col flex-1 justify-between space-y-1.5 px-0.5">
        <div className="flex flex-col space-y-0.5">
          <h3 className="font-normal text-gray-800 text-sm tracking-tight line-clamp-1 group-hover:underline">
            {product.title}
          </h3>
          <p className="font-medium text-gray-500 text-sm">{product.price}</p>
        </div>

        {displayColors && (
          <div className="flex gap-1 items-center pt-0.5">
            {displayColors.visibleColors.map((color, index) => (
              <span
                key={index}
                className="w-3 h-3 md:w-4 md:h-4 rounded-sm border border-gray-200/80 shadow-sm"
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
            {displayColors.remainingCount > 0 && (
              <span className="text-[10px] font-medium text-gray-400 ml-0.5">
                +{displayColors.remainingCount}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
