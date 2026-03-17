import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TerraGold Construction Services | Tampa Bay Area",
    template: "%s | TerraGold Construction Services",
  },
  description:
    "Over 15 years of expertise in Stucco, Lath, Drywall, Stone, Painting, and Siding. Serving residential and commercial clients across the Tampa Bay Area.",
  keywords: [
    "stucco contractor Tampa",
    "drywall repair Tampa Bay",
    "stone veneer installation",
    "exterior painting Tampa",
    "lath installation",
    "siding contractor",
    "home renovation Tampa",
    "TerraGold Construction",
    "Lutz contractor",
    "Odessa contractor",
    "Wesley Chapel contractor",
  ],
  authors: [{ name: "TerraGold Construction Services" }],
  creator: "TerraGold Construction Services",
  metadataBase: new URL("https://terra-gold-construction.vercel.app/"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "TerraGold Construction Services",
    title: "TerraGold Construction Services | Tampa Bay Area",
    description:
      "Over 15 years of expertise in Stucco, Lath, Drywall, Stone, Painting, and Siding. Serving residential and commercial clients across the Tampa Bay Area.",
    images: [{ url: "/logo.png", width: 800, height: 200, alt: "TerraGold Construction Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TerraGold Construction Services | Tampa Bay Area",
    description:
      "Over 15 years of expertise in Stucco, Lath, Drywall, Stone, Painting, and Siding. Serving residential and commercial clients across the Tampa Bay Area.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
