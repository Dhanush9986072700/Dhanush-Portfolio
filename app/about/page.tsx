import type { Metadata } from "next";
import AboutContent from "@/components/sections/AboutContent";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Senior Product Designer based in Bangalore. Designs and ships from Figma to production code, solo and end-to-end.",
  openGraph: {
    title: "About | Dhanush N",
    description:
      "Senior Product Designer based in Bangalore. Designs and ships from Figma to production code.",
    images: [siteConfig.ogImage],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
