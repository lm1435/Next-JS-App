import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { relative } from "path";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Car Rental",
  description: "Discover your next car",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
