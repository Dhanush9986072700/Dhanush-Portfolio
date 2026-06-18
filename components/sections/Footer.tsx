import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { href: "https://www.linkedin.com/in/dhanush-n-1290a61a6/", label: "LinkedIn" },
  { href: "https://www.behance.net/dhanush698", label: "Behance" },
  { href: "mailto:dhanush.n698@gmail.com", label: "Email" },
];

const caseStudies = [
  { href: "/work/xiphias-immigration", label: "XIPHIAS Immigration" },
  { href: "/work/resort-app", label: "Resort Booking" },
  { href: "/work/agree-superfoods", label: "Agree Superfoods" },
  { href: "/work/harmony-luxe-spa-admin", label: "Harmony Luxe Admin" },
  { href: "/work/clinical-ai-ward-monitoring", label: "Clinical AI Platform" },
  { href: "/work/iris-digital-imaging", label: "IRIS Digital Imaging" },
  { href: "/work/harmony-luxe-website", label: "Harmony Luxe Website" },
  { href: "/work/xiphias-superfoods", label: "XIPHIAS Superfoods" },
  { href: "/work/vault", label: "Vault (Concept)" },
  { href: "/work/prism", label: "Prism — AI Brand Intelligence" },
  { href: "/work/helm", label: "Helm — Automotive AI OS" },
  { href: "/work/clearr", label: "Clearr — Credit Card Clarity" },
  { href: "/work/certus", label: "Certus — Supplier Compliance" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06]">
      <Container size="lg">

        {/* Main grid */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span
                className="pulse-dot h-1.5 w-1.5 rounded-full bg-[#c9ff6a] flex-shrink-0"
                aria-hidden="true"
              />
              <p className="font-mono text-[11px] uppercase tracking-widest font-black" style={{ color: "#c9ff6a" }}>
                Dhanush N.
              </p>
            </div>
            <p className="text-sm leading-relaxed max-w-[18rem] mb-6" style={{ color: "rgba(247,247,242,0.40)" }}>
              Product designer who codes. Based in Bangalore — building for the world.
            </p>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c9ff6a]/60 flex-shrink-0" aria-hidden="true" />
              <span className="font-mono text-[9px] uppercase tracking-widest" style={{ color: "rgba(247,247,242,0.30)" }}>
                Open to senior roles
              </span>
            </div>
          </div>

          {/* Work */}
          <div>
            <p className="font-mono text-[9px] uppercase tracking-widest mb-5" style={{ color: "rgba(247,247,242,0.22)" }}>
              Case Studies
            </p>
            <div className="flex flex-col gap-2.5">
              {caseStudies.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="focus-ring w-fit text-sm transition-colors duration-150 hover:text-white"
                  style={{ color: "rgba(247,247,242,0.45)" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <p className="font-mono text-[9px] uppercase tracking-widest mb-5" style={{ color: "rgba(247,247,242,0.22)" }}>
              Pages
            </p>
            <div className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="focus-ring w-fit text-sm transition-colors duration-150 hover:text-white"
                  style={{ color: "rgba(247,247,242,0.45)" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="font-mono text-[9px] uppercase tracking-widest mb-5" style={{ color: "rgba(247,247,242,0.22)" }}>
              Connect
            </p>
            <div className="flex flex-col gap-2.5">
              {socials.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex w-fit items-center gap-1 text-sm transition-colors duration-150 hover:text-white"
                  style={{ color: "rgba(247,247,242,0.45)" }}
                >
                  {social.label}
                  <ArrowUpRight size={11} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 border-t border-white/[0.06] py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[9px] uppercase tracking-widest" style={{ color: "rgba(247,247,242,0.22)" }}>
            © 2026 Dhanush N. — All rights reserved
          </p>
          <p className="font-mono text-[9px] uppercase tracking-widest" style={{ color: "rgba(247,247,242,0.18)" }}>
            Next.js 16 · Tailwind v4 · Framer Motion · Built by Dhanush N.
          </p>
        </div>

      </Container>
    </footer>
  );
}
