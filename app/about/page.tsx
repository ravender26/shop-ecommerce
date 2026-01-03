"use client";

import { motion } from "framer-motion";
import { Award, Users, Heart, Target } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { icon: Users, value: "50K+", label: "Happy Customers" },
    { icon: Award, value: "1000+", label: "Products" },
    { icon: Heart, value: "98%", label: "Satisfaction Rate" },
    { icon: Target, value: "15+", label: "Years Experience" },
  ];

  const values = [
    {
      title: "Quality First",
      description:
        "We source only the finest materials and work with trusted manufacturers to ensure every product meets our high standards.",
    },
    {
      title: "Customer Focused",
      description:
        "Your satisfaction is our priority. We're committed to providing exceptional service and support at every step.",
    },
    {
      title: "Sustainable Practices",
      description:
        "We care about the environment and work with eco-friendly materials and sustainable manufacturing processes.",
    },
    {
      title: "Innovation",
      description:
        "We stay ahead of trends and continuously update our collection with the latest kitchen innovations.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-slate-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6 text-slate-900">
              About KitchenPro
            </h1>
            <p className="text-xl text-slate-600">
              Your trusted partner in creating the perfect kitchen experience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 mb-4">
                Founded in 2008, KitchenPro began with a simple mission: to
                provide home chefs with access to professional-grade kitchen
                tools and cookware at affordable prices.
              </p>
              <p className="text-lg text-slate-600 mb-4">
                What started as a small family business has grown into a trusted
                name in kitchenware, serving thousands of customers worldwide.
                We've built our reputation on quality, reliability, and
                exceptional customer service.
              </p>
              <p className="text-lg text-slate-600">
                Today, we continue to curate the finest selection of kitchen
                utensils, from classic essentials to innovative modern tools,
                all while maintaining our commitment to quality and
                sustainability.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1556911220-bff31c812d0b?w=800&h=800&fit=crop"
                alt="Our Story"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-4xl font-bold mb-2 text-slate-900">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-lg bg-slate-50 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-3 text-primary">
                  {value.title}
                </h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
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
              Join Our Community
            </h2>
            <p className="text-xl mb-8 text-amber-50">
              Experience the difference quality makes in your kitchen
            </p>
            <motion.a
              href="/products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-shadow"
            >
              Shop Now
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

