interface Rating {
  rate: number;
  count: number;
}

export interface Products {
  id: number;
  badge: string;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
// export const ProductsData: Products[] = [
//   {
//     id: 1,
//     title: "Apple MacBook Air M3",
//     slug: "apple-macbook-air-m3",
//     price: 1299.99,
//     description:
//       "Lightweight laptop powered by the M3 chip with exceptional battery life.",
//     category: "laptops",
//     badge: "new",
//     image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=500",
//     rating: {
//       rate: 4.9,
//       count: 1850,
//     },
//   },
//   {
//     id: 2,
//     title: "Samsung Galaxy S25 Ultra",
//     slug: "samsung-galaxy-s25-ultra",
//     badge: "Best seller",
//     price: 1399.99,
//     description:
//       "Flagship smartphone featuring a powerful camera system and premium design.",
//     category: "smartphones",
//     image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
//     rating: {
//       rate: 4.8,
//       count: 1320,
//     },
//   },
//   {
//     id: 3,
//     title: "Sony WH-1000XM6",
//     slug: "sony-wh-1000xm6",
//     badge: "New",
//     price: 399.99,
//     description:
//       "Premium noise-canceling headphones with immersive sound quality.",
//     category: "audio",
//     image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
//     rating: {
//       rate: 4.7,
//       count: 980,
//     },
//   },
//   {
//     id: 4,
//     title: "Apple iPad Pro",
//     slug: "apple-ipad-pro",
//     badge: "Best seller",
//     price: 1199.99,
//     description:
//       "Powerful tablet with stunning display and professional performance.",
//     category: "tablets",
//     image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
//     rating: {
//       rate: 4.9,
//       count: 870,
//     },
//   },
//   {
//     id: 5,
//     title: "Logitech MX Master 3S",
//     slug: "logitech-mx-master-3s",
//     badge: "new",
//     price: 99.99,
//     description:
//       "Advanced productivity mouse with ergonomic design and silent clicks.",
//     category: "accessories",
//     image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
//     rating: {
//       rate: 4.8,
//       count: 2450,
//     },
//   },
//   {
//     id: 6,
//     title: "Dell UltraSharp 32 4K",
//     slug: "dell-ultrasharp-32-4k",
//     badge: "new",
//     price: 799.99,
//     description:
//       "Professional 4K monitor with accurate colors and USB-C connectivity.",
//     category: "monitors",
//     image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
//     rating: {
//       rate: 4.6,
//       count: 640,
//     },
//   },
//   {
//     id: 7,
//     title: "Keychron Q1 Max",
//     slug: "keychron-q1-max",
//     badge: "new",
//     price: 219.99,
//     description:
//       "Premium mechanical keyboard with wireless connectivity and RGB lighting.",
//     category: "keyboards",
//     image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
//     rating: {
//       rate: 4.8,
//       count: 710,
//     },
//   },
//   {
//     id: 8,
//     title: "GoPro HERO13 Black",
//     slug: "gopro-hero13-black",
//     badge: "new",
//     price: 449.99,
//     description:
//       "Compact action camera capable of recording stunning high-resolution videos.",
//     category: "cameras",
//     image: "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=500",
//     rating: {
//       rate: 4.7,
//       count: 530,
//     },
//   },
// ];

export const ProductsData: Products[] = [
  {
    id: 1,
    title: "ASUS ROG Zephyrus G16",
    slug: "asus-rog-zephyrus-g16",
    price: 1899.99,
    description:
      "High-performance gaming laptop with an Intel Core Ultra processor and RTX graphics.",
    category: "laptops",
    badge: "new",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    rating: {
      rate: 4.8,
      count: 1240,
    },
  },
  {
    id: 2,
    title: "Google Pixel 9 Pro",
    slug: "google-pixel-9-pro",
    price: 1099.99,
    description:
      "Premium Android smartphone featuring advanced AI tools and an exceptional camera.",
    category: "smartphones",
    badge: "Best seller",
    image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=500",
    rating: {
      rate: 4.9,
      count: 1680,
    },
  },
  {
    id: 3,
    title: "Bose QuietComfort Ultra",
    slug: "bose-quietcomfort-ultra",
    price: 429.99,
    description:
      "Industry-leading noise-canceling headphones with rich, immersive sound.",
    category: "audio",
    badge: "new",
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500",
    rating: {
      rate: 4.8,
      count: 920,
    },
  },
  {
    id: 4,
    title: "Samsung Galaxy Tab S10 Ultra",
    slug: "samsung-galaxy-tab-s10-ultra",
    price: 1299.99,
    description:
      "Large AMOLED tablet designed for productivity, creativity, and entertainment.",
    category: "tablets",
    badge: "Best seller",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
    rating: {
      rate: 4.7,
      count: 760,
    },
  },
  {
    id: 5,
    title: "Razer Basilisk V3 Pro",
    slug: "razer-basilisk-v3-pro",
    price: 159.99,
    description:
      "Wireless gaming mouse with customizable controls and RGB lighting.",
    category: "accessories",
    badge: "new",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500",
    rating: {
      rate: 4.8,
      count: 1830,
    },
  },
  {
    id: 6,
    title: "LG UltraFine 5K",
    slug: "lg-ultrafine-5k",
    price: 1299.99,
    description:
      "Professional-grade 5K monitor with exceptional color accuracy and sharpness.",
    category: "monitors",
    badge: "new",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
    rating: {
      rate: 4.7,
      count: 510,
    },
  },
  {
    id: 7,
    title: "SteelSeries Apex Pro",
    slug: "steelseries-apex-pro",
    price: 229.99,
    description:
      "Mechanical gaming keyboard with adjustable actuation switches.",
    category: "keyboards",
    badge: "Best seller",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
    rating: {
      rate: 4.9,
      count: 970,
    },
  },
  {
    id: 8,
    title: "Canon EOS R8",
    slug: "canon-eos-r8",
    price: 1499.99,
    description:
      "Compact full-frame mirrorless camera for photography and video creators.",
    category: "cameras",
    badge: "new",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
    rating: {
      rate: 4.8,
      count: 640,
    },
  },
];
