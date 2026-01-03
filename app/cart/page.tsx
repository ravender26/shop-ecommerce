"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Plus, Minus, Trash2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

// Mock cart data - in real app, this would come from state/context
const cartItems = [
  {
    id: "1",
    name: "Premium Stainless Steel Chef Knife",
    price: 69.99,
    originalPrice: 89.99,
    image: "https://images.unsplash.com/photo-1594736797933-d0cbc0b1b4c1?w=200&h=200&fit=crop",
    quantity: 1,
  },
  {
    id: "2",
    name: "Silicone Spatula Set",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=200&h=200&fit=crop",
    quantity: 2,
  },
];

export default function CartPage() {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 10.00;
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
          <ShoppingCart className="h-8 w-8" />
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingCart className="h-24 w-24 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">
              Start adding some products to your cart!
            </p>
            <Button asChild size="lg">
              <Link href="/products">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-lg shadow-md p-6 flex gap-4"
                >
                  <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl font-bold text-primary">
                        ${item.price.toFixed(2)}
                      </span>
                      {item.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${item.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 border rounded-md">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button variant="ghost" size="sm" className="text-red-600">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-semibold">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-semibold">
                      ${shipping.toFixed(2)}
                    </span>
                  </div>
                  <div className="border-t pt-4 flex justify-between text-xl">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-primary">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
                <Button asChild size="lg" className="w-full group">
                  <Link href="/checkout">
                    Proceed to Checkout
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full mt-4"
                >
                  <Link href="/products">Continue Shopping</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

