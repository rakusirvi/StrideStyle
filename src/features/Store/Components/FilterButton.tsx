"use client";
import React from "react";

interface FilterButtonProps {
  label: string;
  value: string;
  isSelected: boolean;
  onClick: (value: string) => void;
  className?: string;
}

// React.memo ensures this button ONLY re-renders if its isSelected status or label changes
export const FilterButton = React.memo(
  ({ label, value, isSelected, onClick }: FilterButtonProps) => {
    return (
      <button
        onClick={() => onClick(value)}
        className={`h-10 border text-xs transition-colors px-1 tracking-tight font-medium justity-center ${
          isSelected
            ? "border-black bg-black text-white"
            : "border-gray-200 hover:border-black text-gray-700"
        }`}
      >
        {label}
      </button>
    );
  },
);

FilterButton.displayName = "FilterButton";
