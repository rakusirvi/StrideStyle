"use client";
import React, { useState, useCallback } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { FilterButton } from "./Components/FilterButton";

export interface FilterState {
  category: string[];
  type: string[];
  size: string;
  collar: string[];
  sleeve: string[];
  price: string;
}

const FilterSection = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [localFilters, setLocalFilters] = useState<FilterState>({
    category: searchParams.getAll("category"),
    type: searchParams.getAll("type"),
    size: searchParams.get("size") || "",
    collar: searchParams.getAll("collar"),
    sleeve: searchParams.getAll("sleeve"),
    price: searchParams.get("price") || "200",
  });

  const [prevQuery, setPrevQuery] = useState(searchParams.toString());
  const currentQuery = searchParams.toString();

  if (currentQuery !== prevQuery) {
    setPrevQuery(currentQuery);
    setLocalFilters({
      category: searchParams.getAll("category"),
      type: searchParams.getAll("type"),
      size: searchParams.get("size") || "",
      collar: searchParams.getAll("collar"),
      sleeve: searchParams.getAll("sleeve"),
      price: searchParams.get("price") || "200",
    });
  }

  // Wrapped in useCallback so it doesn't get recreated on every state shift
  const handleLocalChange = useCallback(
    (key: keyof FilterState, value: string, isCheckbox: boolean = true) => {
      setLocalFilters((prev) => {
        if (isCheckbox) {
          const currentList = prev[key] as string[];
          const updatedList = currentList.includes(value)
            ? currentList.filter((item) => item !== value)
            : [...currentList, value];
          return { ...prev, [key]: updatedList };
        } else {
          return { ...prev, [key]: prev[key] === value ? "" : value };
        }
      });
    },
    [],
  );

  const handleApplyFilters = () => {
    const params = new URLSearchParams();
    localFilters.category.forEach((val) => params.append("category", val));
    localFilters.type.forEach((val) => params.append("type", val));
    localFilters.collar.forEach((val) => params.append("collar", val));
    localFilters.sleeve.forEach((val) => params.append("sleeve", val));

    if (localFilters.size) params.set("size", localFilters.size);
    if (localFilters.price !== "200") params.set("price", localFilters.price);

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleClearAll = () => {
    setLocalFilters({
      category: [],
      type: [],
      size: "",
      collar: [],
      sleeve: [],
      price: "200",
    });
    router.push(pathname, { scroll: false });
  };

  return (
    <aside className="w-full md:w-74   md:border-gray-300 md:pr-5 shrink-0 space-y-10">
      <div>
        <h4 className="font-medium text-gray-900 uppercase mb-4 tracking-widest text-sm">
          Price Range
        </h4>
        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max="200"
            step="5"
            value={localFilters.price}
            onChange={(e) => handleLocalChange("price", e.target.value, false)}
            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
          />
          <div className="flex justify-between text-xs text-gray-500 font-semibold">
            <span>$0</span>
            <span className="text-black bg-gray-100 px-2 py-0.5 rounded">
              Up to ${localFilters.price}
            </span>
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-medium text-gray-900 uppercase mb-4 tracking-widest text-sm">
          Category
        </h4>
        <div className="grid grid-cols-3 gap-2">
          {["Men", "Women", "Kids"].map((cat) => (
            <FilterButton
              key={cat}
              label={cat}
              value={cat}
              isSelected={localFilters.category.includes(cat)}
              onClick={(val) => handleLocalChange("category", val, true)}
            />
          ))}
        </div>
      </div>

      {/* Collar Filter */}
      <div>
        <h4 className="font-medium text-gray-900 uppercase mb-4 tracking-widest text-sm">
          Collar
        </h4>
        <div className="grid grid-cols-3 gap-2">
          {["Zip", "POLO", "ROUNDED"].map((collar) => (
            <FilterButton
              key={collar}
              label={collar}
              value={collar}
              isSelected={localFilters.collar.includes(collar)}
              onClick={(val) => handleLocalChange("collar", val, true)}
            />
          ))}
        </div>
      </div>

      {/* Sleeve Filter */}
      <div>
        <h4 className="font-medium text-gray-900 uppercase mb-4 tracking-widest text-sm">
          Sleeve
        </h4>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Full Sleeve", value: "FULL" },
            { label: "Half Sleeve", value: "half" },
          ].map((sleeve) => (
            <FilterButton
              key={sleeve.value}
              label={sleeve.label}
              value={sleeve.value}
              isSelected={localFilters.sleeve.includes(sleeve.value)}
              onClick={(val) => handleLocalChange("sleeve", val, true)}
            />
          ))}
        </div>
      </div>

      {/* Size Filter */}
      <div>
        <h4 className="font-medium text-gray-900 uppercase mb-4 tracking-widest text-sm">
          Size
        </h4>
        <div className="grid grid-cols-5 gap-2">
          {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
            <FilterButton
              key={size}
              label={size}
              value={size}
              isSelected={localFilters.size === size}
              onClick={(val) => handleLocalChange("size", val, false)}
            />
          ))}
        </div>
      </div>

      <div className="flex gap-3 pt-2 pb-4 z-20">
        <button
          onClick={handleApplyFilters}
          className="flex-1 bg-black text-white text-xs font-semibold py-3 px-4 rounded hover:bg-gray-800 transition-colors"
        >
          Apply Filters
        </button>
        <button
          onClick={handleClearAll}
          className="flex-1 border border-gray-200 text-gray-700 text-xs font-semibold py-3 px-4 rounded hover:bg-gray-50 transition-colors"
        >
          Clear All
        </button>
      </div>
    </aside>
  );
};

export default FilterSection;
