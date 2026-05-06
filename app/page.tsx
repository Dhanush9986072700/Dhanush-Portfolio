import type { Metadata } from "next";
import GradientMesh from "@/components/animations/GradientMesh";
import CursorBlob from "@/components/animations/CursorBlob";
import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import SelectedWork from "@/components/sections/SelectedWork";
import DesignPrinciples from "@/components/sections/DesignPrinciples";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Dhanush N - Product Designer",
  description:
    "Product Designer with 4+ years building real products: immigration platforms, booking systems, D2C storefronts. Solo, end to end. Based in Bangalore, India.",
};

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <GradientMesh />
      <CursorBlob />
      <Navigation />

      <main className="relative z-10">
        <Hero />
        <StatsBar />
        <MarqueeStrip />
        <SelectedWork />
        <DesignPrinciples />
        <Process />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
