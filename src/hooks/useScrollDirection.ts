"use client";

import { useState, useEffect } from "react";

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;

      setIsAtTop(scrollY < 20);

      if (Math.abs(scrollY - lastScrollY) < 15) {
        return;
      }

      const direction = scrollY > lastScrollY ? "down" : "up";

      if (direction !== scrollDirection) {
        setScrollDirection(direction);
      }

      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, [scrollDirection]);

  return { scrollDirection, isAtTop };
}
