import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import GradientMesh from "@/components/animations/GradientMesh";
import CursorBlob from "@/components/animations/CursorBlob";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import Container from "@/components/ui/Container";

const experience = [
  {
    role: "Product Designer (UI/UX)",
    company: "XIPHIAS Group",
    period: "Aug 2022 — Present",
    location: "Bangalore, India",
    type: "Full-time",
    highlights: [
      "Owned design for 8+ live products across immigration, e-commerce, and real estate — research, wireframing, prototyping, and developer handoff",
      "Rebuilt flagship immigration platform solo in 3 months — 25+ country pages, 30+ programme views, ~30% organic traffic lift post-launch",
      "Improved conversion on key flows by replacing exit-intent popups with embedded forms, applying progressive disclosure and contextual error states — driven by user behaviour data",
      "Built a scalable design system with tokens, components, and theming across light and dark modes for multiple products",
      "Collaborated with PMs, engineers, and content teams across the full product lifecycle — ensuring design quality and consistency at every stage",
    ],
  },
  {
    role: "Product Designer",
    company: "ASTA Healthtech",
    period: "2025 — 2026",
    location: "Bangalore, India",
    type: "Contract",
    highlights: [
      "Designed the product website for a clinical AI patient monitoring platform — translated a complex AI workflow into clear, trust-building product storytelling for hospital buyers",
      "Owned information architecture, visual system, and components for a regulated healthtech context — WCAG AA compliant, perfect Lighthouse scores at launch",
    ],
  },
  {
    role: "Product Designer",
    company: "TUR Middle East FZC",
    period: "2025 — 2026",
    location: "Remote",
    type: "Contract",
    highlights: [
      "Designed the full B2B platform website — 6 product verticals, 7 regional offices, multi-catalogue pages, and a technical blog for a GCC and South Asia institutional audience",
      "Delivered a dual-theme responsive UI, maintaining brand consistency across a complex specification-led product range",
    ],
  },
  {
    role: "Product Designer",
    company: "Resort Booking & Property Management",
    period: "2023 — 2024",
    location: "Bangalore, India",
    type: "Project",
    highlights: [
      "Designed a full-stack admin suite for a boutique resort — front-desk, housekeeping, finance, and reporting modules across a dual-theme design system",
      "Owned end-to-end UX for a 63-page, 46-data-model product solo — from information architecture and user flows through to high-fidelity components and developer handoff",
    ],
  },
  {
    role: "Product Designer",
    company: "Harmony Luxe Spa Admin",
    period: "2025 — 2026",
    location: "Bangalore, India",
    type: "Project",
    highlights: [
      "Designed a SaaS-style billing and operations dashboard — menu pricing, GST invoices, customer index, expense tracking, analytics, and print/PDF workflows",
      "Owned end-to-end UX from information architecture and user flows through to high-fidelity components and developer handoff, solo",
    ],
  },
  {
    role: "B.Sc. Graphics and VFX",
    company: "Arena Animation",
    period: "2021",
    location: "Bangalore, India",
    type: "Education",
    highlights: [
      "Foundation in visual communication, typography, and motion design",
      "VFX and compositing — shaped how I think about depth, hierarchy, and visual storytelling",
    ],
  },
];

const stack = [
  {
    category: "Design",
    accent: "#c9ff6a",
    tools: ["Figma", "Adobe XD", "FigJam", "Framer", "ProtoPie", "Photoshop", "Illustrator"],
  },
  {
    category: "Design Systems",
    accent: "#f3a841",
    tools: ["Component Libraries", "Design Tokens", "Theming", "Dark Mode", "WCAG AA", "Developer Handoff", "Style Guides"],
  },
  {
    category: "Engineering",
    accent: "#c9ff6a",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Prisma", "PostgreSQL"],
  },
  {
    category: "AI Tools",
    accent: "#f3a841",
    tools: ["Claude", "GitHub Copilot", "Codex", "Cursor AI", "ChatGPT", "v0"],
  },
  {
    category: "Methods",
    accent: "#c9ff6a",
    tools: ["Design Thinking", "User Research", "Information Architecture", "A/B Testing", "Conversion Optimisation", "Agile / Scrum", "Stakeholder Presentations"],
  },
  {
    category: "Platforms",
    accent: "#f3a841",
    tools: ["Shopify", "WordPress", "Vercel", "GitHub", "Notion", "Linear"],
  },
  {
    category: "Analytics",
    accent: "#c9ff6a",
    tools: ["Google Analytics 4", "Google Tag Manager", "Hotjar", "Lighthouse"],
  },
];

const currently = [
  { label: "Building", value: "Resort Property Management System — 46 data models, full ops suite for a boutique hospitality client" },
  { label: "Exploring", value: "AI-assisted development with Claude and Codex — shipping faster without trading craft" },
  { label: "Reading", value: "Shape Up — Ryan Singer, Basecamp" },
  { label: "Listening", value: "99% Invisible, Design Details, Lenny's Podcast" },
  { label: "Languages", value: "English, Kannada, Telugu, Hindi" },
];

const interests = [
  { title: "Cars + Automotive Design", detail: "How engineering constraints become aesthetic" },
  { title: "Photography", detail: "Composition, light, decisive moments" },
  { title: "Football", detail: "Arsenal FC — the highs are worth the lows" },
  { title: "Building Things", detail: "If it can be made, it should be understood" },
  { title: "Design Books", detail: "The shelf includes Tufte, Rams, Norman" },
  { title: "Music", detail: "Playlists built for deep work, not distraction" },
];

export default function AboutContent() {
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
                  <span>About</span>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#c9ff6a] pulse-dot" aria-hidden="true" />
                    <span style={{ color: "rgba(201,255,106,0.80)" }}>Available · Bangalore</span>
                  </div>
                </div>

                {/* Hero grid */}
                <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest mb-6" style={{ color: "rgba(247,247,242,0.30)" }}>
                      Dhanush N. · UI/UX Product Designer
                    </p>
                    <h1 className="text-[3rem] font-black leading-[0.88] text-white sm:text-[5rem] lg:text-[6.5rem] text-balance">
                      Designer who<br />
                      <span style={{ color: "#c9ff6a" }}>builds.</span>
                    </h1>
                    <p className="mt-6 max-w-xl text-[0.9375rem] leading-relaxed" style={{ color: "rgba(247,247,242,0.50)" }}>
                      Four years shipping real products solo — strategy, design, and production code all in one person. I work across five business verticals at XIPHIAS Group. No handoffs, no lost context. When you own the whole chain, nothing gets mistranslated between design and build.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <Link
                        href="/contact"
                        className="tap-target focus-ring inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-[#c9ff6a]"
                      >
                        Get in touch
                        <ArrowUpRight size={13} />
                      </Link>
                      <a
                        href={siteConfig.resumePath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tap-target focus-ring inline-flex items-center gap-2 rounded-full border border-white/[0.14] px-6 py-2.5 text-sm font-semibold transition-colors duration-200 hover:border-white/30 hover:text-white"
                        style={{ color: "rgba(247,247,242,0.60)" }}
                      >
                        View resume
                        <ArrowUpRight size={13} />
                      </a>
                    </div>
                  </div>

                  {/* Identity card */}
                  <div className="w-full max-w-[260px] lg:w-[260px] flex-shrink-0">
                    <div className="border border-white/[0.09] bg-white/[0.02] p-5 flex flex-col gap-5">
                      {/* Photo */}
                      <div className="relative aspect-square overflow-hidden border border-white/[0.06]">
                        <Image
                          src="/dhanush_image.jpeg"
                          alt="Dhanush N — Product Designer"
                          fill
                          sizes="260px"
                          className="object-cover object-top"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <span className="absolute bottom-3 left-3 font-mono text-[9px] uppercase tracking-widest" style={{ color: "rgba(247,247,242,0.55)" }}>
                          Bangalore · India
                        </span>
                      </div>

                      {/* Stats */}
                      {[
                        { value: "4+", label: "Years shipping" },
                        { value: "10+", label: "Products built" },
                        { value: "Solo", label: "End to end" },
                      ].map((stat, i) => (
                        <div key={stat.label} className="flex items-center justify-between border-t border-white/[0.06] pt-4">
                          <span className="font-mono text-[9px] uppercase tracking-widest" style={{ color: "rgba(247,247,242,0.28)" }}>
                            {stat.label}
                          </span>
                          <span
                            className="font-mono text-sm font-black"
                            style={{ color: i % 2 === 0 ? "#c9ff6a" : "#f3a841" }}
                          >
                            {stat.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </section>

        {/* ── Story ── */}
        <section className="py-16 sm:py-20 border-b border-white/[0.07]">
          <Container size="lg">
            <ScrollReveal className="mb-12">
              <p className="font-mono text-[10px] uppercase tracking-widest mb-5" style={{ color: "rgba(247,247,242,0.28)" }}>
                Background
              </p>
              <h2 className="text-[2.5rem] font-black leading-[0.9] text-white sm:text-[3.5rem] lg:text-[4.5rem]">
                The longer version.
              </h2>
            </ScrollReveal>

            <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
              <div className="space-y-6">
                {[
                  "My roots are in visual communication — a year at Arena Animation that taught me every pixel is a decision and every decision sends a message. That thinking didn't leave when I moved into product. It became the foundation.",
                  "Since 2022, I've been the entire design and front-end function at XIPHIAS Group. Five business verticals, zero teammates, real stakes. Immigration platforms, D2C storefronts, marketing sites — brief to browser, solo. Alongside that I've taken on freelance clients in healthtech, hospitality, and B2B — same standard, different domains.",
                  "I design and build in the same breath. On top of that, I use AI tools — Claude, Codex, Copilot — as genuine collaborators in my development workflow. Not to skip thinking, but to move at a pace that keeps up with how fast ideas should ship. The craft stays mine. The speed multiplies.",
                ].map((para, i) => (
                  <ScrollReveal key={i} delay={i * 0.08}>
                    <p
                      className="text-[0.9375rem] leading-relaxed border-l-2 border-white/[0.06] pl-5"
                      style={{ color: "rgba(247,247,242,0.52)" }}
                    >
                      {para}
                    </p>
                  </ScrollReveal>
                ))}
              </div>

              {/* Pull quote */}
              <ScrollReveal delay={0.2}>
                <div className="lg:pt-2">
                  <blockquote className="border border-white/[0.07] bg-white/[0.018] p-7 sm:p-8">
                    <span className="font-display text-5xl leading-none block mb-4" style={{ color: "rgba(201,255,106,0.15)" }} aria-hidden="true">
                      &ldquo;
                    </span>
                    <p className="text-lg font-semibold leading-[1.4]" style={{ color: "rgba(247,247,242,0.78)" }}>
                      I&apos;m a designer who ships production code — and I use AI tools like Claude and Codex as part of how I build. The thinking is mine. The output is faster, tighter, and still entirely intentional.
                    </p>
                    <div className="mt-6 border-t border-white/[0.07] pt-4">
                      <p className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "rgba(201,255,106,0.65)" }}>
                        Dhanush N.
                      </p>
                      <p className="font-mono text-[9px] uppercase mt-0.5" style={{ color: "rgba(247,247,242,0.28)" }}>
                        UI/UX Product Designer
                      </p>
                    </div>
                  </blockquote>
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </section>

        {/* ── Experience ── */}
        <section className="py-16 sm:py-20 border-b border-white/[0.07] bg-white/[0.012]">
          <Container size="lg">
            <ScrollReveal className="mb-12">
              <p className="font-mono text-[10px] uppercase tracking-widest mb-5" style={{ color: "rgba(247,247,242,0.28)" }}>
                Experience
              </p>
              <h2 className="text-[2.5rem] font-black leading-[0.9] text-white sm:text-[3.5rem] lg:text-[4.5rem]">
                Where I&apos;ve worked.
              </h2>
            </ScrollReveal>

            <div className="space-y-0">
              {experience.map((exp, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="border-t border-white/[0.07] py-8 grid gap-6 lg:grid-cols-[0.35fr_1fr] lg:gap-12">

                    {/* Left: company + period */}
                    <div>
                      <p className="font-mono text-[11px] font-black uppercase tracking-widest text-white mb-1">
                        {exp.company}
                      </p>
                      <p className="font-mono text-[9px] uppercase tracking-widest mb-2" style={{ color: "rgba(247,247,242,0.30)" }}>
                        {exp.period}
                      </p>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className="inline-block font-mono text-[8px] uppercase px-2 py-0.5 border rounded-sm"
                          style={{
                            color: index === 0 ? "rgba(201,255,106,0.75)" : "rgba(247,247,242,0.35)",
                            borderColor: index === 0 ? "rgba(201,255,106,0.20)" : "rgba(247,247,242,0.08)",
                          }}
                        >
                          {exp.type}
                        </span>
                        <span className="font-mono text-[8px] uppercase" style={{ color: "rgba(247,247,242,0.25)" }}>
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Right: role + highlights */}
                    <div>
                      <h3 className="text-lg font-black text-white mb-4">{exp.role}</h3>
                      <ul className="space-y-2">
                        {exp.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="mt-[7px] h-1 w-1 rounded-full flex-shrink-0 bg-white/20" aria-hidden="true" />
                            <span className="text-sm leading-relaxed" style={{ color: "rgba(247,247,242,0.50)" }}>
                              {h}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Stack ── */}
        <section className="py-16 sm:py-20 border-b border-white/[0.07]">
          <Container size="lg">
            <ScrollReveal className="mb-12">
              <p className="font-mono text-[10px] uppercase tracking-widest mb-5" style={{ color: "rgba(247,247,242,0.28)" }}>
                Stack
              </p>
              <h2 className="text-[2.5rem] font-black leading-[0.9] text-white sm:text-[3.5rem] lg:text-[4.5rem]">
                Tools I reach for.
              </h2>
            </ScrollReveal>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
              {stack.map((group, index) => (
                <ScrollReveal key={group.category} delay={index * 0.08}>
                  <div>
                    <p
                      className="font-mono text-[9px] uppercase tracking-widest mb-4 pb-3 border-b"
                      style={{
                        color: group.accent,
                        borderColor: `${group.accent}20`,
                      }}
                    >
                      {group.category}
                    </p>
                    <StaggerContainer staggerDelay={0.04} className="flex flex-col gap-2">
                      {group.tools.map((tool) => (
                        <StaggerItem key={tool}>
                          <span
                            className="block text-sm transition-colors duration-150 hover:text-white"
                            style={{ color: "rgba(247,247,242,0.50)" }}
                          >
                            {tool}
                          </span>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Currently ── */}
        <section className="py-16 sm:py-20 border-b border-white/[0.07] bg-white/[0.012]">
          <Container size="lg">
            <ScrollReveal className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <span className="pulse-dot h-2 w-2 rounded-full bg-[#c9ff6a] flex-shrink-0" aria-hidden="true" />
                <p className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "rgba(247,247,242,0.28)" }}>
                  Status / Right now
                </p>
              </div>
              <h2 className="text-[2.5rem] font-black leading-[0.9] text-white sm:text-[3.5rem] lg:text-[4.5rem]">
                Currently.
              </h2>
            </ScrollReveal>

            <div className="space-y-0">
              {currently.map((item, index) => (
                <ScrollReveal key={item.label} delay={index * 0.07}>
                  <div className="grid gap-3 border-t border-white/[0.07] py-6 sm:grid-cols-[12rem_1fr]">
                    <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "rgba(247,247,242,0.28)" }}>
                      {item.label}
                    </span>
                    <span className="text-sm leading-relaxed" style={{ color: "rgba(247,247,242,0.62)" }}>
                      {item.value}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Interests ── */}
        <section className="py-16 sm:py-20">
          <Container size="lg">
            <ScrollReveal className="mb-12">
              <p className="font-mono text-[10px] uppercase tracking-widest mb-5" style={{ color: "rgba(247,247,242,0.28)" }}>
                Outside work
              </p>
              <h2 className="text-[2.5rem] font-black leading-[0.9] text-white sm:text-[3.5rem] lg:text-[4.5rem]">
                What I&apos;m into.
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05] border border-white/[0.05]">
              {interests.map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 0.05}>
                  <div className="group bg-[#020202] p-6 sm:p-8 flex flex-col gap-8 min-h-[160px] justify-between transition-colors duration-300 hover:bg-white/[0.025]">
                    <span
                      className="font-mono text-[9px] uppercase tracking-widest"
                      style={{ color: index % 2 === 0 ? "rgba(201,255,106,0.55)" : "rgba(243,168,65,0.55)" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-lg font-black text-white leading-none mb-2">
                        {item.title}
                      </p>
                      <p className="font-mono text-[10px]" style={{ color: "rgba(247,247,242,0.32)" }}>
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </section>

      </main>

      <Footer />
    </div>
  );
}
