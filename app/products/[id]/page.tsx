"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingCart, Star, Heart, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockProducts } from "@/lib/mock-data";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = mockProducts.find((p) => p.id === params.id);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const inWishlist = product ? isInWishlist(product.id) : false;

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The product you're looking for doesn't exist.
        </p>
        <a
          href="/products"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          Browse Products
        </a>
      </div>
    );
  }

  const images = product.images || [product.image];
  const finalPrice = product.salePrice || product.price;
  const discount = product.salePrice
    ? Math.round(((product.price - product.salePrice) / product.price) * 100)
    : 0;

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-12"
      >
        {/* Image Gallery */}
        <div>
          <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 mb-4">
            <Image
              src={images[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          {images.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? "border-primary"
                      : "border-transparent"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            {product.isNewArrival && (
              <Badge className="bg-green-500">New Arrival</Badge>
            )}
            {product.isSale && (
              <Badge className="bg-red-500">-{discount}% Off</Badge>
            )}
          </div>

          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

          {product.rating && (
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating || 0)
                        ? "fill-amber-400 text-amber-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="font-medium">{product.rating}</span>
              <span className="text-muted-foreground">(128 reviews)</span>
            </div>
          )}

          <div className="mb-6">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-4xl font-bold text-primary">
                ${finalPrice.toFixed(2)}
              </span>
              {product.salePrice && (
                <span className="text-2xl text-muted-foreground line-through">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>
            <p className="text-sm text-muted-foreground">
              {product.stock > 0
                ? `In Stock (${product.stock} available)`
                : "Out of Stock"}
            </p>
          </div>

          <p className="text-lg text-slate-600 mb-8">{product.description}</p>

          <div className="space-y-4 mb-8">
            <div>
              <span className="font-semibold">Category: </span>
              <span className="text-muted-foreground">{product.category}</span>
            </div>
            <div>
              <span className="font-semibold">Material: </span>
              <span className="text-muted-foreground">{product.material}</span>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-6">
            <span className="font-semibold">Quantity:</span>
            <div className="flex items-center gap-2 border rounded-md">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button
              size="lg"
              className="flex-1 group"
              onClick={() => {
                if (product) {
                  for (let i = 0; i < quantity; i++) {
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      salePrice: product.salePrice,
                      image: product.image,
                    });
                  }
                }
              }}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                if (product) {
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
                }
              }}
            >
              <Heart
                className={`h-5 w-5 ${
                  inWishlist ? "fill-red-500 text-red-500" : ""
                }`}
              />
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Additional Info */}
      <div className="mt-16">
        <div className="border-t pt-8">
          <h2 className="text-2xl font-bold mb-4">Product Details</h2>
          <div className="prose max-w-none">
            <p className="text-slate-600">
              {product.description}
            </p>
            <p className="text-slate-600 mt-4">
              This premium kitchen utensil is crafted with attention to detail
              and built to last. Made from high-quality {product.material}, it
              combines functionality with elegant design to enhance your cooking
              experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

