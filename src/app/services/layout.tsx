import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Expert stucco, drywall, stone veneer, interior and exterior painting, siding, soffit, and full home transformations. TerraGold serves residential and commercial clients across Tampa Bay.",
  keywords: [
    "stucco installation Tampa",
    "drywall repair Tampa Bay",
    "stone veneer Tampa",
    "interior exterior painting Tampa",
    "siding soffit installation",
    "EIFS synthetic stucco",
    "home transformation Tampa",
    "fireplace stone installation",
    "popcorn ceiling removal Tampa",
    "knock down texture Tampa",
  ],
  openGraph: {
    title: "Our Services | TerraGold Construction Services",
    description:
      "Expert stucco, drywall, stone veneer, interior and exterior painting, siding, soffit, and full home transformations across the Tampa Bay Area.",
    url: "https://www.terragoldconstruction.com/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
