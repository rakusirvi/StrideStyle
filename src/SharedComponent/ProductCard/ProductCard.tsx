"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";

interface ProductType {
  product: {
    id: string;
    title: string;
    price: string;
    img: string;
  };
}

const ProductCard = ({ product }: ProductType) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeToggle = (e: React.MouseEvent) => {
    e.stopPropagation();

    const newLikedState = !isLiked;
    setIsLiked(newLikedState);

    // This will now perfectly log your MongoDB string ID
    console.log(`MongoDB Product ID clicked: ${product.id}`);

    if (newLikedState) {
      // Future Favorites Logic
      // addToFavorites(product.id);
    } else {
      // removeFromFavorites(product.id);
    }
  };

  return (
    <div className="group cursor-pointer relative">
      <div className="relative overflow-hidden bg-gray-100 aspect-3/4 rounded-md mb-3">
        <Image
          className="w-full h-full  object-cover transition-transform duration-500 group-hover:scale-102"
          src={product.img}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
          priority={false}
        />

        <button
          onClick={handleLikeToggle}
          className="absolute top-3 right-3 p-2  hover:bg-white/30 rounded-full shadow-md transition-all z-10 group/btn"
          aria-label={isLiked ? "Unlike product" : "Like product"}
        >
          <Heart
            className={`w-5 h-5 transition-colors duration-300 ${
              isLiked
                ? "text-red-500 fill-red-600"
                : "text-gray-700 group-hover/btn:text-red-600 group-hover/btn:fill-red-500"
            }`}
            strokeWidth={1.5}
          />
        </button>
      </div>

      <div className="flex flex-col  items-start  ml-2">
        <h3 className="font-medium text-gray-900 text-sm group-hover:underline">
          {product.title}
        </h3>
        <p className="font-semibold text-gray-900 text-s"> {product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
