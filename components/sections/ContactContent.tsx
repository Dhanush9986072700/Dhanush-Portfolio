"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { siteConfig } from "@/lib/site";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import GradientMesh from "@/components/animations/GradientMesh";
import CursorBlob from "@/components/animations/CursorBlob";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Container from "@/components/ui/Container";

const channels = [
  {
    label: "LinkedIn",
    value: "/in/dhanush-n-1290a61a6",
    href: "https://www.linkedin.com/in/dhanush-n-1290a61a6/",
  },
  {
    label: "Behance",
    value: "behance.net/dhanush698",
    href: "https://www.behance.net/dhanush698",
  },
  {
    label: "Phone",
    value: "+91 99860 72700",
    href: `tel:${siteConfig.phone}`,
  },
];

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

function ContactForm() {
  const [draftHref, setDraftHref] = useState("");
  const email = siteConfig.email;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const sender = String(form.get("email") ?? "").trim();
    const subject_line = String(form.get("subject") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const subject = subject_line || `Portfolio inquiry from ${name || "a visitor"}`;
    const body = [`Name: ${name}`, `Email: ${sender}`, "", message].join("\n");
    const href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setDraftHref(href);
    window.location.href = href;
  };

  const inputBase =
    "w-full border-b border-white/[0.12] bg-transparent px-0 py-3 text-sm text-white placeholder-white/25 outline-none transition-colors duration-200 focus:border-white/40";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className="block font-mono text-[9px] uppercase tracking-widest mb-3" style={{ color: "rgba(247,247,242,0.30)" }}>
            Your name
          </label>
          <input id="c-name" name="name" type="text" required placeholder="Full name" className={inputBase} />
        </div>
        <div>
          <label htmlFor="c-email" className="block font-mono text-[9px] uppercase tracking-widest mb-3" style={{ color: "rgba(247,247,242,0.30)" }}>
            Your email
          </label>
          <input id="c-email" name="email" type="email" required placeholder="you@company.com" className={inputBase} />
        </div>
      </div>

      <div>
        <label htmlFor="c-subject" className="block font-mono text-[9px] uppercase tracking-widest mb-3" style={{ color: "rgba(247,247,242,0.30)" }}>
          Subject
        </label>
        <input id="c-subject" name="subject" type="text" placeholder="What's this about?" className={inputBase} />
      </div>

      <div>
        <label htmlFor="c-message" className="block font-mono text-[9px] uppercase tracking-widest mb-3" style={{ color: "rgba(247,247,242,0.30)" }}>
          Message
        </label>
        <textarea
          id="c-message"
          name="message"
          required
          rows={5}
          placeholder="Tell me what you're building, what you need, and when..."
          className={`${inputBase} resize-none`}
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center pt-2">
        <button
          type="submit"
          className="tap-target focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-all duration-200 hover:bg-[#c9ff6a]"
        >
          Open in email
          <ArrowUpRight size={13} />
        </button>
        {draftHref && (
          <a
            href={draftHref}
            className="font-mono text-[10px] uppercase tracking-widest transition-colors hover:text-white"
            style={{ color: "rgba(247,247,242,0.32)" }}
          >
            Reopen draft →
          </a>
        )}
      </div>

      <p className="font-mono text-[9px] uppercase tracking-widest leading-relaxed" style={{ color: "rgba(247,247,242,0.22)" }}>
        Opens your email client with a pre-filled draft. Nothing is sent from this site.
      </p>
    </form>
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
                    <span style={{ color: "rgba(201,255,106,0.80)" }}>Available · Usually replies 24h</span>
                  </div>
                </div>

                {/* Headline + description */}
                <div className="grid gap-8 lg:grid-cols-[1fr_0.45fr] lg:items-end">
                  <h1 className="text-[3.5rem] font-black leading-[0.88] text-white sm:text-[5.5rem] lg:text-[7rem]">
                    Let&apos;s talk.
                  </h1>
                  <p className="max-w-sm text-[0.9375rem] leading-relaxed lg:pb-2" style={{ color: "rgba(247,247,242,0.48)" }}>
                    Open to senior roles and high-impact freelance. Best way to reach me is email — I read everything and reply same day when I can.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </section>

        {/* ── Email hero ── */}
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

              {/* Copy + other channels */}
              <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <CopyEmailButton email={email} />

                <div className="flex flex-wrap items-center gap-6">
                  {channels.map((ch) => (
                    <a
                      key={ch.href}
                      href={ch.href}
                      target={ch.href.startsWith("http") ? "_blank" : undefined}
                      rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-1.5 transition-colors duration-150 hover:text-white"
                    >
                      <span className="font-mono text-[9px] uppercase tracking-widest" style={{ color: "rgba(247,247,242,0.30)" }}>
                        {ch.label}
                      </span>
                      <span className="font-mono text-[10px] transition-colors group-hover:text-white" style={{ color: "rgba(247,247,242,0.50)" }}>
                        {ch.value}
                      </span>
                      <ArrowUpRight size={10} style={{ color: "rgba(247,247,242,0.25)" }} />
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </section>

        {/* ── Form + context ── */}
        <section className="py-16 sm:py-20">
          <Container size="lg">
            <div className="grid gap-14 lg:grid-cols-[0.7fr_1fr] lg:gap-20">

              {/* Left: context */}
              <ScrollReveal>
                <div className="flex flex-col gap-10">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest mb-5" style={{ color: "rgba(247,247,242,0.28)" }}>
                      Send a message
                    </p>
                    <h2 className="text-[2rem] font-black leading-[0.92] text-white sm:text-[2.75rem]">
                      Start the<br />conversation.
                    </h2>
                    <p className="mt-5 text-sm leading-relaxed" style={{ color: "rgba(247,247,242,0.45)" }}>
                      Fill in the form — it opens your email client with a pre-drafted message. Or skip straight to{" "}
                      <a
                        href={`mailto:${email}`}
                        className="underline underline-offset-2 transition-colors hover:text-white"
                        style={{ color: "rgba(247,247,242,0.60)" }}
                      >
                        {email}
                      </a>
                      .
                    </p>
                  </div>

                  {/* Open to */}
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-widest mb-4" style={{ color: "rgba(247,247,242,0.25)" }}>
                      Open to
                    </p>
                    <ul className="space-y-2">
                      {openTo.map((item, i) => (
                        <li key={item} className="flex items-center gap-3">
                          <span
                            className="h-1 w-1 rounded-full flex-shrink-0"
                            style={{ background: i % 2 === 0 ? "#c9ff6a" : "#f3a841" }}
                            aria-hidden="true"
                          />
                          <span className="text-sm" style={{ color: "rgba(247,247,242,0.55)" }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Response time */}
                  <div className="border border-white/[0.07] bg-white/[0.015] p-5">
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
                </div>
              </ScrollReveal>

              {/* Right: form */}
              <ScrollReveal delay={0.1}>
                <ContactForm />
              </ScrollReveal>

            </div>
          </Container>
        </section>

      </main>

      <Footer />
    </div>
  );
}
