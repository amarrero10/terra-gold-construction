import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TerraGold Construction Services | Tampa Bay Area",
  description:
    "Over 15 years of expertise in Stucco, Lath, Drywall, Stone, Painting, and Siding. Serving residential and commercial clients across the Tampa Bay Area.",
  keywords: "stucco, drywall, stone, painting, lath, siding, Tampa, construction",
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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
