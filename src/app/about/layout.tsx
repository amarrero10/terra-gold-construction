import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the team behind TerraGold Construction Services. Over 15 years of hands-on craftsmanship led by owner Joseph Goldstein, serving the Tampa Bay Area with integrity and precision.",
  keywords: [
    "TerraGold Construction about",
    "Joseph Goldstein contractor",
    "Tampa Bay construction company",
    "family owned contractor Tampa",
    "licensed insured contractor Florida",
  ],
  openGraph: {
    title: "About Us | TerraGold Construction Services",
    description:
      "Meet the team behind TerraGold Construction Services. Over 15 years of hands-on craftsmanship led by owner Joseph Goldstein, serving the Tampa Bay Area with integrity and precision.",
    url: "https://www.terragoldconstruction.com/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
