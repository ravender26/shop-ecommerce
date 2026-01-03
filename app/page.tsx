"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import {
  getNewArrivals,
  getSaleProducts,
  getHotSelling,
  getMostRecommended,
} from "@/lib/mock-data";

export default function Home() {
  const newArrivals = getNewArrivals();
  const saleProducts = getSaleProducts();
  const hotSelling = getHotSelling();
  const mostRecommended = getMostRecommended();

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-slate-50 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                  Premium Quality
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
                Elevate Your
                <span className="text-primary block">Kitchen Experience</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8">
                Discover our curated collection of premium kitchen utensils and
                cookware. Crafted for passionate home chefs who demand the best.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="group">
                  <Link href="/products">
                    Shop Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=800&fit=crop"
                  alt="Premium Kitchen Utensils"
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">New Arrivals</h2>
              <p className="text-muted-foreground">
                Fresh additions to our collection
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/products?filter=new">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Sale Section */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-red-600">
                On Sale Now
              </h2>
              <p className="text-muted-foreground">
                Limited time offers - Don't miss out!
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/products?filter=sale">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {saleProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Hot Selling Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">🔥 Hot Selling</h2>
              <p className="text-muted-foreground">
                Our most popular products this week
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/products?filter=hot">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hotSelling.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Most Recommended Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">⭐ Most Recommended</h2>
              <p className="text-muted-foreground">
                Top-rated products loved by our customers
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/products?filter=recommended">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mostRecommended.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your Kitchen?
            </h2>
            <p className="text-xl mb-8 text-amber-50">
              Join thousands of satisfied customers who trust KitchenPro
            </p>
            <Button asChild size="lg" variant="secondary" className="group">
              <Link href="/products">
                Start Shopping
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
