import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PageWrapper } from "@/components/PageWrapper";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Premium Kitchen Utensils Store",
  description: "Discover premium quality kitchen utensils and cookware",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <PageWrapper>{children}</PageWrapper>
        <Footer />
      </body>
    </html>
  );
}
