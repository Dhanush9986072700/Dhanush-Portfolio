import type { Metadata } from "next";
import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import DesignPrinciples from "@/components/sections/DesignPrinciples";
import Capabilities from "@/components/sections/Capabilities";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import SelectedWork from "@/components/sections/SelectedWork";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Dhanush N — Product Designer",
  description:
    "Product Designer with 4+ years building real products: immigration platforms, booking systems, D2C storefronts, clinical AI platforms, SaaS dashboards. Solo, end to end. Based in Bangalore, India.",
};

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <DesignPrinciples />
        <Capabilities />
        <MarqueeStrip />
        <SelectedWork />
      </main>
      <Footer />
    </div>
  );
}
