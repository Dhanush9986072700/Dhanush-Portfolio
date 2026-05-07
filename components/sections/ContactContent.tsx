"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { siteConfig } from "@/lib/site";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import GradientMesh from "@/components/animations/GradientMesh";
import CursorBlob from "@/components/animations/CursorBlob";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Container from "@/components/ui/Container";

const openTo = [
  "Senior Product Designer (IC)",
  "Design Systems Lead",
  "Front-End Product Engineer",
  "High-impact freelance",
];

function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  };
  return (
    <button
      type="button"
      onClick={handleCopy}
      className="tap-target focus-ring inline-flex items-center gap-2 rounded-full border border-white/[0.14] px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:border-white/30 hover:text-white"
      style={{ color: "rgba(247,247,242,0.58)" }}
    >
      {copied ? (
        <Check size={13} style={{ color: "#c9ff6a" }} />
      ) : (
        <Copy size={13} />
      )}
      {copied ? "Copied" : "Copy email"}
    </button>
  );
}

export default function ContactContent() {
  const email = siteConfig.email;

  return (
    <div className="relative min-h-screen">
      <GradientMesh />
      <CursorBlob />
      <Navigation />

      <main className="relative z-10 pt-24">

        {/* ── Hero ── */}
        <section className="pb-0">
          <Container size="lg">
            <ScrollReveal>
              <div className="border-b border-white/[0.07] pb-10">

                {/* Top strip */}
                <div className="flex items-center justify-between mb-10 font-mono text-[10px] uppercase tracking-widest" style={{ color: "rgba(247,247,242,0.28)" }}>
                  <span>Contact</span>
                  <div className="flex items-center gap-2">
                    <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[#c9ff6a] flex-shrink-0" aria-hidden="true" />
                    <span style={{ color: "rgba(201,255,106,0.80)" }}>Available · Bangalore</span>
                  </div>
                </div>

                {/* Headline + description */}
                <div className="grid gap-8 lg:grid-cols-[1fr_0.45fr] lg:items-end">
                  <h1 className="text-[3.5rem] font-black leading-[0.88] text-white sm:text-[5.5rem] lg:text-[7rem]">
                    Let&apos;s talk.
                  </h1>
                  <p className="max-w-sm text-[0.9375rem] leading-relaxed lg:pb-2" style={{ color: "rgba(247,247,242,0.48)" }}>
                    Open to senior roles and high-impact freelance. Best way to reach me is direct — email or phone. I read everything and reply the same day when I can.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </section>

        {/* ── Email ── */}
        <section className="py-12 border-b border-white/[0.07]">
          <Container size="lg">
            <ScrollReveal>
              <a
                href={`mailto:${email}`}
                className="group flex items-center justify-between gap-4 py-4 transition-colors duration-200"
              >
                <span
                  className="text-[1.4rem] font-black leading-none break-all transition-colors duration-200 group-hover:text-[#c9ff6a] sm:text-[2rem] lg:text-[2.75rem]"
                  style={{ color: "rgba(247,247,242,0.80)" }}
                >
                  {email}
                </span>
                <span
                  className="flex-shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.14] transition-all duration-200 group-hover:border-[#c9ff6a] group-hover:bg-[#c9ff6a] group-hover:text-black"
                  style={{ color: "rgba(247,247,242,0.40)" }}
                >
                  <ArrowUpRight size={16} />
                </span>
              </a>

              <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <CopyEmailButton email={email} />

                <div className="flex flex-wrap items-center gap-6">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="group flex items-center gap-1.5 transition-colors duration-150 hover:text-white"
                  >
                    <span className="font-mono text-[9px] uppercase tracking-widest" style={{ color: "rgba(247,247,242,0.30)" }}>
                      Phone
                    </span>
                    <span className="font-mono text-[10px] transition-colors group-hover:text-white" style={{ color: "rgba(247,247,242,0.50)" }}>
                      +91 99860 72700
                    </span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </section>

        {/* ── Open to + info ── */}
        <section className="py-16 sm:py-20">
          <Container size="lg">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

              {/* Open to */}
              <ScrollReveal>
                <div className="flex flex-col gap-8">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest mb-5" style={{ color: "rgba(247,247,242,0.28)" }}>
                      Open to
                    </p>
                    <h2 className="text-[2rem] font-black leading-[0.92] text-white sm:text-[2.75rem]">
                      What I&apos;m<br />looking for.
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {openTo.map((item, i) => (
                      <li key={item} className="flex items-center gap-3">
                        <span
                          className="h-1 w-1 rounded-full flex-shrink-0"
                          style={{ background: i % 2 === 0 ? "#c9ff6a" : "#f3a841" }}
                          aria-hidden="true"
                        />
                        <span className="text-sm" style={{ color: "rgba(247,247,242,0.60)" }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Response + socials */}
              <ScrollReveal delay={0.1}>
                <div className="flex flex-col gap-6">
                  <div className="border border-white/[0.07] bg-white/[0.015] p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[#c9ff6a] flex-shrink-0" aria-hidden="true" />
                      <p className="font-mono text-[9px] uppercase tracking-widest" style={{ color: "rgba(201,255,106,0.72)" }}>
                        Response time
                      </p>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(247,247,242,0.50)" }}>
                      Usually same day for roles and freelance. Within 24 hours for everything else.
                    </p>
                  </div>

                  <div className="border border-white/[0.07] bg-white/[0.015] p-6">
                    <p className="font-mono text-[9px] uppercase tracking-widest mb-5" style={{ color: "rgba(247,247,242,0.28)" }}>
                      Also on
                    </p>
                    <div className="flex flex-col gap-3">
                      <a
                        href="https://www.linkedin.com/in/dhanush-n-1290a61a6/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm transition-colors hover:text-white"
                        style={{ color: "rgba(247,247,242,0.50)" }}
                      >
                        LinkedIn
                        <ArrowUpRight size={12} />
                      </a>
                      <a
                        href="https://www.behance.net/dhanush698"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm transition-colors hover:text-white"
                        style={{ color: "rgba(247,247,242,0.50)" }}
                      >
                        Behance
                        <ArrowUpRight size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </Container>
        </section>

      </main>

      <Footer />
    </div>
  );
}
