export interface Stock {
  [size: string]: number;
}

export interface HeroItem {
  parentId: string;
  id: string;
  name: string;
  price: number;
  sizes: string[];
  color: string;
  images: string[];
  stock: Stock;
}

export const heroData: HeroItem[] = [
  {
    parentId: "1",
    id: "HERO-MAIN-001",
    name: "Ultimate Luxury Banner",
    price: 100.0,
    sizes: ["NEW COLLECTION"],
    color: "#9ccdDB",
    images: [
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800",
    ],
    stock: {
      S: 12,
      M: 8,
      L: 4,
    },
  },
  {
    parentId: "2",
    id: "TREND-LEFT-001",
    name: "Classic Trend Left",
    price: 49.99,
    sizes: ["S", "M", "L"],
    color: "#b3becc",
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    ],
    stock: {
      S: 12,
      M: 8,
      L: 4,
    },
  },
  {
    parentId: "2",
    id: "TREND-RIGHT-001",
    name: "Classic Trend Right",
    price: 49.99,
    sizes: ["S", "M", "L"],
    color: "#b3becc",
    images: [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=600",
    ],
    stock: {
      S: 15,
      M: 10,
      L: 2,
    },
  },
];
