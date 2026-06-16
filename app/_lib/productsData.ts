interface Rating {
  rate: number;
  count: number;
}

interface ProductsData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

const ProductsData: ProductsData[] = [
  {
    id: 1,
    title: "Apple MacBook Air M3",
    price: 1299.99,
    description:
      "Lightweight laptop powered by the M3 chip with exceptional battery life.",
    category: "laptops",
    image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=500",
    rating: {
      rate: 4.9,
      count: 1850,
    },
  },
  {
    id: 2,
    title: "Samsung Galaxy S25 Ultra",
    price: 1399.99,
    description:
      "Flagship smartphone featuring a powerful camera system and premium design.",
    category: "smartphones",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    rating: {
      rate: 4.8,
      count: 1320,
    },
  },
  {
    id: 3,
    title: "Sony WH-1000XM6",
    price: 399.99,
    description:
      "Premium noise-canceling headphones with immersive sound quality.",
    category: "audio",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    rating: {
      rate: 4.7,
      count: 980,
    },
  },
  {
    id: 4,
    title: "Apple iPad Pro",
    price: 1199.99,
    description:
      "Powerful tablet with stunning display and professional performance.",
    category: "tablets",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
    rating: {
      rate: 4.9,
      count: 870,
    },
  },
  {
    id: 5,
    title: "Logitech MX Master 3S",
    price: 99.99,
    description:
      "Advanced productivity mouse with ergonomic design and silent clicks.",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
    rating: {
      rate: 4.8,
      count: 2450,
    },
  },
  {
    id: 6,
    title: "Dell UltraSharp 32 4K",
    price: 799.99,
    description:
      "Professional 4K monitor with accurate colors and USB-C connectivity.",
    category: "monitors",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
    rating: {
      rate: 4.6,
      count: 640,
    },
  },
  {
    id: 7,
    title: "Keychron Q1 Max",
    price: 219.99,
    description:
      "Premium mechanical keyboard with wireless connectivity and RGB lighting.",
    category: "keyboards",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
    rating: {
      rate: 4.8,
      count: 710,
    },
  },
  {
    id: 8,
    title: "GoPro HERO13 Black",
    price: 449.99,
    description:
      "Compact action camera capable of recording stunning high-resolution videos.",
    category: "cameras",
    image: "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=500",
    rating: {
      rate: 4.7,
      count: 530,
    },
  },
];
