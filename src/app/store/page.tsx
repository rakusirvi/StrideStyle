"use client";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/SharedComponent/ProductCard/ProductCard";
import FilterSection from "@/features/Store/FilterSection";

// Raw mock products dataset
const products = [
  {
    id: "65c2a1b3e4b0f1a2c3d4e5f1",
    title: "Marlow Tee",
    price: 65.0,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgLUdTl9pmsHGcbAzfpMEaEYo2FDJreL1l6Gb_NeSwrFNpnqSilhGFk9tJLe5dhsYn3MF-14j6oGrtZI8P50b989nHNh8sxVDfMQ4j6IbF0lNyIn8gZ_qhpyNHTb56cJA7XmNkAXbGeHSGjEolbh6CnYcD2BV5sUix7R2xqxGokqbJvuviC8VyPnUd639nRXF8DvqyfTyP4ovL7LhnaId1JrjFCa_SG2RGHls0RBN0aajRFeoFG16yc1dy5yl_bu-D9gIwUjKBrkU",
    category: "Men",
    type: "T-shirts",
    sizes: ["XS", "S", "M"],
    collar: "ROUNDED",
    sleeve: "half",
    colors: ["#FFFFFF", "#171717", "#4B5563", "#D1D5DB"],
  },
  {
    id: "65c2a1b3e4b0f1a2c3d4e5f2",
    title: "Stride Joggers",
    price: 110.0,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAX4qteYyoiJJwLhMiB_mt6TbqrKtoCX_0IjqKlUJNnSW_c-y8WU108OG-V5zMgJ4ZORMFEQ8wwSR-9w4kcFUtzhUuX_gYeO0ztPmDeP1V0YGSl82-BBVLV5CZ7Y0RaVOidR19prPn2OD6NmZQ6aVBNeRViUivrrpSi95PX_q2w7T1d-La6afoJZY2n6kfdcBi5yus5arWXXDALi7ldkijocRnACyZNwH-XLvZy4lIx38eO0_spcy6V29WDUtfzz0-A9yai5BdjECc",
    category: "Men",
    type: "Track Pants",
    sizes: ["M", "L", "XL", "XXL"],
    collar: "Zip",
    sleeve: "FULL",
    colors: ["#171717", "#374151", "#065F46"],
  },
  {
    id: "65c2a1b3e4b0f1a2c3d4e5f3",
    title: "Icon Tee",
    price: 60.0,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlMmN33xZ8bnVwAe1NVTpncgVAGYx5Yk2FHDKLrFA3llQj6XccAYlAzs9NDbCSvQNZa9D0CBdXQEcyrUanU1m8MFlq3EJbcr9ofDnt4Cf0T5OWS7D4vuTl_rIU0ITssoUB8hAnuyCJKLCq6WXxQvFiLjvR21Aal8CGlstE5yhe7LjYEnCd4w5yZjyS--gQJ6Tkta0LGlBPquj4DCTy05wY8uQhC03gyjf8XPOaWQo93gNg3EIOD4GFLSxi1xnmyVCKkQzI689uGAU",
    category: "Women",
    type: "T-shirts",
    sizes: ["S", "M", "L"],
    collar: "POLO",
    sleeve: "half",
    colors: ["#FCA5A5", "#FEF08A", "#BFDBFE", "#FFFFFF", "#171717"],
  },
  {
    id: "65c2a1b3e4b0e5f4",
    title: "Oversized Hoodie",
    price: 145.0,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRrL-gCDOvhda5K1wSSPBZf45KCvChYHgjTj5dYorKstKcQeaMEO-qhY2K0Ifanl8B-x35-M1X76bqg1PYGXs3ZHRHG3SD7E1iPDk4tHFaupjES5Chqd8kaq3DhE5b0egFef74vOKEXrvloFjhidAWlm-YA2wma1XxGDOMieqV0uDhLvfXpnBizWR817yU2JbY1IMyiNeYvNohl5E8jvg1dumn326Zka0C5cJGbG-Agw_JmSLmVxfWXfstjy3HZJJ03JqpZQHFzQE",
    category: "Kids",
    type: "Outerwear",
    sizes: ["S", "M"],
    collar: "ROUNDED",
    sleeve: "FULL",
    colors: ["#6B7280", "#E5E7EB", "#93C5FD", "#F472B6"],
  },
  {
    id: "c2a1b3e4b0f1a2c3d4e5f1",
    title: "Marlow Tee",
    price: 65.0,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgLUdTl9pmsHGcbAzfpMEaEYo2FDJreL1l6Gb_NeSwrFNpnqSilhGFk9tJLe5dhsYn3MF-14j6oGrtZI8P50b989nHNh8sxVDfMQ4j6IbF0lNyIn8gZ_qhpyNHTb56cJA7XmNkAXbGeHSGjEolbh6CnYcD2BV5sUix7R2xqxGokqbJvuviC8VyPnUd639nRXF8DvqyfTyP4ovL7LhnaId1JrjFCa_SG2RGHls0RBN0aajRFeoFG16yc1dy5yl_bu-D9gIwUjKBrkU",
    category: "Men",
    type: "T-shirts",
    sizes: ["XS", "S", "M"],
    collar: "ROUNDED",
    sleeve: "half",
    colors: ["#FFFFFF", "#171717", "#4B5563"],
  },
  {
    id: "65c2a1b3e4d4e5f2",
    title: "Stride Joggers",
    price: 110.0,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAX4qteYyoiJJwLhMiB_mt6TbqrKtoCX_0IjqKlUJNnSW_c-y8WU108OG-V5zMgJ4ZORMFEQ8wwSR-9w4kcFUtzhUuX_gYeO0ztPmDeP1V0YGSl82-BBVLV5CZ7Y0RaVOidR19prPn2OD6NmZQ6aVBNeRViUivrrpSi95PX_q2w7T1d-La6afoJZY2n6kfdcBi5yus5arWXXDALi7ldkijocRnACyZNwH-XLvZy4lIx38eO0_spcy6V29WDUtfzz0-A9yai5BdjECc",
    category: "Men",
    type: "Track Pants",
    sizes: ["M", "L", "XL", "XXL"],
    collar: "Zip",
    sleeve: "FULL",
    colors: ["#171717", "#374151"],
  },
  {
    id: "65c2a1b3e4b0f1a2c3d4e3",
    title: "Icon Tee",
    price: 60.0,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlMmN33xZ8bnVwAe1NVTpncgVAGYx5Yk2FHDKLrFA3llQj6XccAYlAzs9NDbCSvQNZa9D0CBdXQEcyrUanU1m8MFlq3EJbcr9ofDnt4Cf0T5OWS7D4vuTl_rIU0ITssoUB8hAnuyCJKLCq6WXxQvFiLjvR21Aal8CGlstE5yhe7LjYEnCd4w5yZjyS--gQJ6Tkta0LGlBPquj4DCTy05wY8uQhC03gyjf8XPOaWQo93gNg3EIOD4GFLSxi1xnmyVCKkQzI689uGAU",
    category: "Women",
    type: "T-shirts",
    sizes: ["S", "M", "L"],
    collar: "POLO",
    sleeve: "half",
    colors: ["#FCA5A5", "#BFDBFE", "#FFFFFF"],
  },
  {
    id: "65c2a1b3e4b0f1ad4e5f4",
    title: "Oversized Hoodie",
    price: 145.0,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRrL-gCDOvhda5K1wSSPBZf45KCvChYHgjTj5dYorKstKcQeaMEO-qhY2K0Ifanl8B-x35-M1X76bqg1PYGXs3ZHRHG3SD7E1iPDk4tHFaupjES5Chqd8kaq3DhE5b0egFef74vOKEXrvloFjhidAWlm-YA2wma1XxGDOMieqV0uDhLvfXpnBizWR817yU2JbY1IMyiNeYvNohl5E8jvg1dumn326Zka0C5cJGbG-Agw_JmSLmVxfWXfstjy3HZJJ03JqpZQHFzQE",
    category: "Kids",
    type: "Outerwear",
    sizes: ["S", "M"],
    collar: "ROUNDED",
    sleeve: "FULL",
    colors: ["#171717", "#D4D4D8", "#F5F5F4"],
  },
  {
    id: "65cb3e4b0f1a2c3d4e5f1",
    title: "Marlow Tee",
    price: 65.0,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgLUdTl9pmsHGcbAzfpMEaEYo2FDJreL1l6Gb_NeSwrFNpnqSilhGFk9tJLe5dhsYn3MF-14j6oGrtZI8P50b989nHNh8sxVDfMQ4j6IbF0lNyIn8gZ_qhpyNHTb56cJA7XmNkAXbGeHSGjEolbh6CnYcD2BV5sUix7R2xqxGokqbJvuviC8VyPnUd639nRXF8DvqyfTyP4ovL7LhnaId1JrjFCa_SG2RGHls0RBN0aajRFeoFG16yc1dy5yl_bu-D9gIwUjKBrkU",
    category: "Men",
    type: "T-shirts",
    sizes: ["XS", "S", "M"],
    collar: "ROUNDED",
    sleeve: "half",
    colors: ["#FFFFFF", "#171717", "#4B5563", "#000000", "#FF0000"],
  },
  {
    id: "65c2a1b3e4b1a2c3d4e5f2",
    title: "Stride Joggers",
    price: 110.0,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAX4qteYyoiJJwLhMiB_mt6TbqrKtoCX_0IjqKlUJNnSW_c-y8WU108OG-V5zMgJ4ZORMFEQ8wwSR-9w4kcFUtzhUuX_gYeO0ztPmDeP1V0YGSl82-BBVLV5CZ7Y0RaVOidR19prPn2OD6NmZQ6aVBNeRViUivrrpSi95PX_q2w7T1d-La6afoJZY2n6kfdcBi5yus5arWXXDALi7ldkijocRnACyZNwH-XLvZy4lIx38eO0_spcy6V29WDUtfzz0-A9yai5BdjECc",
    category: "Men",
    type: "Track Pants",
    sizes: ["M", "L", "XL", "XXL"],
    collar: "Zip",
    sleeve: "FULL",
    colors: ["#171717", "#374151", "#FFFFFF"],
  },
  {
    id: "65c2a1be4b0f1a2c3d4e5f3",
    title: "Icon Tee",
    price: 60.0,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlMmN33xZ8bnVwAe1NVTpncgVAGYx5Yk2FHDKLrFA3llQj6XccAYlAzs9NDbCSvQNZa9D0CBdXQEcyrUanU1m8MFlq3EJbcr9ofDnt4Cf0T5OWS7D4vuTl_rIU0ITssoUB8hAnuyCJKLCq6WXxQvFiLjvR21Aal8CGlstE5yhe7LjYEnCd4w5yZjyS--gQJ6Tkta0LGlBPquj4DCTy05wY8uQhC03gyjf8XPOaWQo93gNg3EIOD4GFLSxi1xnmyVCKkQzI689uGAU",
    category: "Women",
    type: "T-shirts",
    sizes: ["S", "M", "L"],
    collar: "POLO",
    sleeve: "half",
    colors: ["#FFFFFF", "#000000", "#1D4ED8"],
  },
  {
    id: "65c2a13e4b0f1a2c3d4e5f4",
    title: "Oversized Hoodie",
    price: 145.0,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRrL-gCDOvhda5K1wSSPBZf45KCvChYHgjTj5dYorKstKcQeaMEO-qhY2K0Ifanl8B-x35-M1X76bqg1PYGXs3ZHRHG3SD7E1iPDk4tHFaupjES5Chqd8kaq3DhE5b0egFef74vOKEXrvloFjhidAWlm-YA2wma1XxGDOMieqV0uDhLvfXpnBizWR817yU2JbY1IMyiNeYvNohl5E8jvg1dumn326Zka0C5cJGbG-Agw_JmSLmVxfWXfstjy3HZJJ03JqpZQHFzQE",
    category: "Kids",
    type: "Outerwear",
    sizes: ["S", "M"],
    collar: "ROUNDED",
    sleeve: "FULL",
    colors: ["#F3F4F6", "#D1D5DB", "#111827"],
  },
];

function StoreContent() {
  const searchParams = useSearchParams();

  const activeCategories = searchParams.getAll("category");
  const activeTypes = searchParams.getAll("type");
  const activeSize = searchParams.get("size") || "";
  const activeCollars = searchParams.getAll("collar");
  const activeSleeves = searchParams.getAll("sleeve");
  const activeMaxPrice = searchParams.get("price") || "200";

  const filteredProducts = products.filter((product) => {
    if (
      activeCategories.length > 0 &&
      !activeCategories.includes(product.category)
    )
      return false;
    if (activeTypes.length > 0 && !activeTypes.includes(product.type))
      return false;
    if (activeSize && !product.sizes.includes(activeSize)) return false;
    if (activeCollars.length > 0 && !activeCollars.includes(product.collar))
      return false;
    if (activeSleeves.length > 0 && !activeSleeves.includes(product.sleeve))
      return false;
    if (product.price > parseFloat(activeMaxPrice)) return false;
    return true;
  });
  

  return (
    <div className="max-w-[1600px] min-h-screen md:h-[calc(100vh-56px)] mx-auto p-2 overflow-hidden">
      <div className="flex flex-col md:flex-row gap-8 h-full pb-6">
        <div className="w-full md:w-82 shrink-0 md:h-full md:overflow-y-auto ">
          <FilterSection />
        </div>

        <div className="grow md:h-full overflow-y-auto pr-2 scrollbar-none">
          <div className="flex flex-col md:flex-row md:items-end justify-between pt-4 pb-8 gap-4">
            <div>
              <h2 className="md:text-3xl text-2xl font-bold tracking-tight text-gray-900 mb-2">
                New Essentials
              </h2>
              <p className="text-sm text-gray-500 max-w-xl leading-relaxed">
                A curated selection of premium streetwear designed for
                intentional movement and effortless comfort.
              </p>
            </div>

            <div className="text-xs md:text-sm text-gray-400 font-medium whitespace-nowrap">
              Showing {filteredProducts.length} items
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-10 pb-16">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={{
                  ...product,
                  price: `Rs ${product.price.toFixed(2)}`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black" />
        </div>
      }
    >
      <StoreContent />
    </Suspense>
  );
}
