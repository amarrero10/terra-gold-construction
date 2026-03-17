import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "Browse TerraGold's portfolio of completed stucco, drywall, stone veneer, and painting projects across Tampa, Lutz, Odessa, Wesley Chapel, and surrounding areas.",
  keywords: [
    "construction portfolio Tampa",
    "stucco project gallery",
    "drywall before after Tampa",
    "stone veneer projects Florida",
    "exterior renovation gallery Tampa Bay",
  ],
  openGraph: {
    title: "Project Gallery | TerraGold Construction Services",
    description:
      "Browse TerraGold's portfolio of completed stucco, drywall, stone veneer, and painting projects across the Tampa Bay Area.",
    url: "https://www.terragoldconstruction.com/gallery",
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
