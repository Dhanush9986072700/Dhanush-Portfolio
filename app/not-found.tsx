import Link from "next/link";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import GradientMesh from "@/components/animations/GradientMesh";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <GradientMesh />
      <Navigation />
      <main className="relative z-10 flex-1 flex items-center justify-center">
        <div className="text-center px-6">
          <p className="font-mono text-xs text-white/25 tracking-widest uppercase mb-4">
            404
          </p>
          <h1 className="text-5xl md:text-7xl font-display text-white mb-6">
            Page not found
          </h1>
          <p className="text-white/40 mb-8 max-w-sm mx-auto">
            The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
          </p>
          <Link href="/">
            <Button variant="gradient" size="lg">
              Back to home
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
