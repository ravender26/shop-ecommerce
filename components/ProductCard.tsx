"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart, Star, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  salePrice?: number;
  image: string;
  isNewArrival?: boolean;
  isSale?: boolean;
  rating?: number;
}

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const finalPrice = product.salePrice || product.price;
  const discount = product.salePrice
    ? Math.round(((product.price - product.salePrice) / product.price) * 100)
    : 0;
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      salePrice: product.salePrice,
      image: product.image,
    });
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        salePrice: product.salePrice,
        image: product.image,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <Link href={`/products/${product.id}`}>
        <div className="relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl">
          {/* Badges */}
          <div className="absolute top-2 left-2 z-10 flex flex-col gap-2">
            {product.isNewArrival && (
              <Badge className="bg-green-500 hover:bg-green-600">
                New
              </Badge>
            )}
            {product.isSale && (
              <Badge className="bg-red-500 hover:bg-red-600">
                -{discount}%
              </Badge>
            )}
          </div>

          {/* Image */}
          <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Content */}
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-1 line-clamp-1">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
              {product.description}
            </p>

            {/* Rating */}
            {product.rating && (
              <div className="flex items-center gap-1 mb-2">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
            )}

            {/* Price */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-primary">
                  ${finalPrice.toFixed(2)}
                </span>
                {product.salePrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    ${product.price.toFixed(2)}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-9 w-9 rounded-full p-0"
                  onClick={handleWishlistToggle}
                >
                  <Heart
                    className={`h-4 w-4 ${
                      inWishlist ? "fill-red-500 text-red-500" : ""
                    }`}
                  />
                </Button>
                <Button
                  size="sm"
                  className="h-9 w-9 rounded-full p-0"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

