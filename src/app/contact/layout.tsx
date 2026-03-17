import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get a free, no-obligation estimate from TerraGold Construction Services. Call 310-855-4521 or fill out our form. Serving Tampa, Lutz, Odessa, Wesley Chapel, and surrounding areas.",
  keywords: [
    "free estimate Tampa contractor",
    "contact TerraGold Construction",
    "stucco estimate Tampa",
    "drywall estimate Tampa Bay",
    "construction quote Tampa",
    "Tampa Bay contractor contact",
  ],
  openGraph: {
    title: "Contact Us | TerraGold Construction Services",
    description:
      "Get a free, no-obligation estimate from TerraGold Construction Services. Serving Tampa, Lutz, Odessa, Wesley Chapel, and surrounding areas.",
    url: "https://www.terragoldconstruction.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
