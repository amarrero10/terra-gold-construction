import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Testimonials",
  description:
    "See what homeowners and businesses across Tampa, Lutz, Odessa, and Wesley Chapel say about working with TerraGold Construction Services.",
  keywords: [
    "TerraGold reviews",
    "contractor reviews Tampa Bay",
    "stucco contractor testimonials",
    "best contractor Tampa",
    "Tampa construction company reviews",
  ],
  openGraph: {
    title: "Client Testimonials | TerraGold Construction Services",
    description:
      "See what homeowners and businesses across the Tampa Bay Area say about working with TerraGold Construction Services.",
    url: "https://www.terragoldconstruction.com/testimonials",
  },
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
