// Mock product data for development
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  salePrice?: number;
  category: string;
  image: string;
  images?: string[];
  stock: number;
  isNewArrival: boolean;
  isSale: boolean;
  material: string;
  rating?: number;
}

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Premium Stainless Steel Chef Knife",
    description: "Professional-grade chef knife with ergonomic handle and razor-sharp blade. Perfect for all your kitchen needs.",
    price: 89.99,
    salePrice: 69.99,
    category: "Cutlery",
    image: "https://images.unsplash.com/photo-1594736797933-d0cbc0b1b4c1?w=500&h=500&fit=crop",
    stock: 25,
    isNewArrival: false,
    isSale: true,
    material: "Stainless Steel",
    rating: 4.8,
  },
  {
    id: "2",
    name: "Silicone Spatula Set",
    description: "Heat-resistant silicone spatulas in multiple sizes. Safe for all cookware including non-stick surfaces.",
    price: 24.99,
    category: "Utensils",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=500&h=500&fit=crop",
    stock: 50,
    isNewArrival: true,
    isSale: false,
    material: "Silicone",
    rating: 4.6,
  },
  {
    id: "3",
    name: "Copper Mixing Bowl Set",
    description: "Beautiful copper mixing bowls that add elegance to your kitchen. Perfect for mixing, serving, and storing.",
    price: 129.99,
    category: "Cookware",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812d0b?w=500&h=500&fit=crop",
    stock: 15,
    isNewArrival: true,
    isSale: false,
    material: "Copper",
    rating: 4.9,
  },
  {
    id: "4",
    name: "Wooden Cutting Board",
    description: "Eco-friendly bamboo cutting board with juice groove. Large surface area for all your prep work.",
    price: 45.99,
    salePrice: 34.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=500&h=500&fit=crop",
    stock: 30,
    isNewArrival: false,
    isSale: true,
    material: "Bamboo",
    rating: 4.7,
  },
  {
    id: "5",
    name: "Cast Iron Skillet",
    description: "Pre-seasoned cast iron skillet for even heat distribution. Perfect for searing, baking, and frying.",
    price: 79.99,
    category: "Cookware",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812d0b?w=500&h=500&fit=crop",
    stock: 20,
    isNewArrival: false,
    isSale: false,
    material: "Cast Iron",
    rating: 4.9,
  },
  {
    id: "6",
    name: "Stainless Steel Measuring Cups",
    description: "Precise measuring cups with engraved measurements. Dishwasher safe and rust-resistant.",
    price: 19.99,
    category: "Utensils",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=500&h=500&fit=crop",
    stock: 40,
    isNewArrival: true,
    isSale: false,
    material: "Stainless Steel",
    rating: 4.5,
  },
  {
    id: "7",
    name: "Ceramic Non-Stick Frying Pan",
    description: "Healthy cooking with ceramic non-stick coating. PFOA-free and easy to clean.",
    price: 59.99,
    salePrice: 44.99,
    category: "Cookware",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812d0b?w=500&h=500&fit=crop",
    stock: 35,
    isNewArrival: false,
    isSale: true,
    material: "Ceramic",
    rating: 4.6,
  },
  {
    id: "8",
    name: "Professional Whisk Set",
    description: "Multi-purpose whisk set with different sizes. Perfect for whipping, mixing, and aerating.",
    price: 29.99,
    category: "Utensils",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=500&h=500&fit=crop",
    stock: 45,
    isNewArrival: false,
    isSale: false,
    material: "Stainless Steel",
    rating: 4.7,
  },
];

// Helper functions to get filtered products
export function getNewArrivals(): Product[] {
  return mockProducts.filter((p) => p.isNewArrival);
}

export function getSaleProducts(): Product[] {
  return mockProducts.filter((p) => p.isSale);
}

export function getHotSelling(): Product[] {
  // Products with highest ratings
  return [...mockProducts]
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 4);
}

export function getMostRecommended(): Product[] {
  // Mix of high-rated and popular items
  return [...mockProducts]
    .filter((p) => (p.rating || 0) >= 4.7)
    .slice(0, 4);
}

