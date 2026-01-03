"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Filter, Grid, List } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { mockProducts, Product } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [filter, setFilter] = useState<string>("all");

  const categories = ["all", "Cutlery", "Utensils", "Cookware", "Accessories"];
  const filters = ["all", "new", "sale", "hot", "recommended"];

  let filteredProducts = [...mockProducts];

  // Apply category filter
  if (selectedCategory !== "all") {
    filteredProducts = filteredProducts.filter(
      (p) => p.category === selectedCategory
    );
  }

  // Apply other filters
  if (filter === "new") {
    filteredProducts = filteredProducts.filter((p) => p.isNewArrival);
  } else if (filter === "sale") {
    filteredProducts = filteredProducts.filter((p) => p.isSale);
  } else if (filter === "hot") {
    filteredProducts = [...filteredProducts]
      .sort((a, b) => (b.rating || 0) - (a.rating || 0))
      .slice(0, 8);
  } else if (filter === "recommended") {
    filteredProducts = filteredProducts.filter((p) => (p.rating || 0) >= 4.7);
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Our Products</h1>
          <p className="text-muted-foreground">
            Discover our complete collection of premium kitchen essentials
          </p>
        </div>

        {/* Filters and View Toggle */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-start md:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("all")}
            >
              All Products
            </Button>
            <Button
              variant={filter === "new" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("new")}
            >
              New Arrivals
            </Button>
            <Button
              variant={filter === "sale" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("sale")}
            >
              On Sale
            </Button>
            <Button
              variant={filter === "hot" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("hot")}
            >
              Hot Selling
            </Button>
            <Button
              variant={filter === "recommended" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("recommended")}
            >
              Recommended
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 border rounded-md p-1">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">
              No products found matching your criteria.
            </p>
          </div>
        ) : (
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                : "space-y-4"
            }
          >
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>
        )}

        {/* Results Count */}
        <div className="mt-8 text-center text-muted-foreground">
          Showing {filteredProducts.length} product
          {filteredProducts.length !== 1 ? "s" : ""}
        </div>
      </motion.div>
    </div>
  );
}

