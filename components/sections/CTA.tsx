import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function CTA() {
  return (
    <Section className="overflow-hidden border-t border-white/[0.06]">
      <Container size="lg">

        {/* Header strip */}
        <ScrollReveal>
          <div className="flex flex-col gap-2 border-b border-white/[0.07] pb-6 sm:flex-row sm:items-center sm:justify-between font-mono text-[10px] uppercase tracking-widest" style={{ color: "rgba(247,247,242,0.28)" }}>
            <span>06 / Get in touch</span>
            <span>Bangalore · Remote · Usually 24h</span>
          </div>
        </ScrollReveal>

        {/* Availability + headline */}
        <ScrollReveal delay={0.08} className="mt-10 mb-10">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2.5">
              <span className="pulse-dot h-2 w-2 rounded-full bg-[#c9ff6a] flex-shrink-0" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "rgba(201,255,106,0.85)" }}>
                Currently available
              </span>
            </div>

            <h2 className="text-[2.5rem] font-black leading-[0.9] text-white sm:text-[4rem] lg:text-[5.5rem] max-w-4xl">
              Open for the<br />right work.
            </h2>

            <p className="max-w-lg text-[0.9375rem] leading-relaxed" style={{ color: "rgba(247,247,242,0.48)" }}>
              Senior product designer roles and high-impact freelance. Design, code, systems — and a clean path from idea to launch.
            </p>
          </div>
        </ScrollReveal>

        {/* Email — the primary CTA */}
        <ScrollReveal delay={0.14}>
          <a
            href={`mailto:${siteConfig.email}`}
            className="group flex items-end justify-between gap-4 border-t border-b border-white/[0.08] py-6 sm:py-8 transition-colors duration-300 hover:border-white/[0.20]"
          >
            <span
              className="text-[1.6rem] font-black leading-none break-all transition-colors duration-200 group-hover:text-[#c9ff6a] sm:text-[2.5rem] lg:text-[3.5rem]"
              style={{ color: "rgba(247,247,242,0.85)" }}
            >
              {siteConfig.email}
            </span>
            <span className="flex-shrink-0 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/[0.14] text-white/45 transition-all duration-200 group-hover:border-[#c9ff6a] group-hover:bg-[#c9ff6a] group-hover:text-black">
              <ArrowUpRight size={16} />
            </span>
          </a>
        </ScrollReveal>

        {/* Secondary actions */}
        <ScrollReveal delay={0.2}>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="tap-target focus-ring inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black transition-colors duration-200 hover:bg-[#c9ff6a]"
              >
                Say hello
                <ArrowUpRight size={13} />
              </Link>
              <a
                href={siteConfig.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-target focus-ring inline-flex items-center gap-2 rounded-full border border-white/[0.14] px-6 py-2.5 text-sm font-semibold transition-colors duration-200 hover:border-white/30 hover:text-white"
                style={{ color: "rgba(247,247,242,0.65)" }}
              >
                View resume
                <ArrowUpRight size={13} />
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Senior IC roles", "Freelance", "Design systems", "Full-stack"].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 border rounded-sm"
                  style={{
                    color: "rgba(247,247,242,0.30)",
                    borderColor: "rgba(247,247,242,0.08)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </Container>
    </Section>
  );
}
