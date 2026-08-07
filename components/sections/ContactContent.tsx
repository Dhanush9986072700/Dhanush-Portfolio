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
      className="tap-target focus-ring inline-flex items-center gap-2 rounded-full border border-black/[0.14] px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:border-black/30 hover:text-[#111]"
      style={{ color: "rgba(17,17,17,0.58)" }}
    >
      {copied ? <Check size={13} style={{ color: "#F97316" }} /> : <Copy size={13} />}
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
        <section className="py-16 sm:py-24">
          <Container size="lg">
            <ScrollReveal>

              {/* Top label */}
              <div className="flex items-center gap-2 mb-12">
                <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[#F97316] flex-shrink-0" aria-hidden="true" />
                <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "rgba(249,115,22,0.80)" }}>
                  Available · Bangalore
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-[3.5rem] font-black leading-[0.88] text-[#111] sm:text-[5.5rem] lg:text-[7rem] mb-16">
                Let&apos;s talk.
              </h1>

              {/* Email */}
              <a
                href={`mailto:${email}`}
                className="group flex items-center justify-between gap-4 border-t border-b border-black/[0.07] py-6 transition-colors duration-200"
              >
                <span
                  className="text-[1.25rem] font-black leading-none break-all transition-colors duration-200 group-hover:text-[#F97316] sm:text-[1.75rem] lg:text-[2.25rem]"
                  style={{ color: "rgba(17,17,17,0.80)" }}
                >
                  {email}
                </span>
                <span
                  className="flex-shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.14] transition-all duration-200 group-hover:border-[#F97316] group-hover:bg-[#F97316] group-hover:text-white"
                  style={{ color: "rgba(17,17,17,0.40)" }}
                >
                  <ArrowUpRight size={15} />
                </span>
              </a>

              {/* Actions row */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <CopyEmailButton email={email} />
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="tap-target focus-ring inline-flex items-center gap-2 rounded-full border border-black/[0.14] px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:border-black/30 hover:text-[#111]"
                    style={{ color: "rgba(17,17,17,0.58)" }}
                  >
                    +91 99860 72700
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href="https://www.linkedin.com/in/dhanush-n-1290a61a6/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm transition-colors hover:text-[#111]"
                    style={{ color: "rgba(17,17,17,0.42)" }}
                  >
                    LinkedIn <ArrowUpRight size={12} />
                  </a>
                  <a
                    href="https://www.behance.net/dhanush698"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm transition-colors hover:text-[#111]"
                    style={{ color: "rgba(17,17,17,0.42)" }}
                  >
                    Behance <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>

            </ScrollReveal>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
