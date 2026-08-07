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

interface SubBrand {
  name: string;
  entity: string;
  scope: string;
  associated?: boolean;
}

interface ExperienceEntry {
  role: string;
  company: string;
  companyShort?: string;
  period: string;
  location: string;
  type: string;
  highlights: string[];
  subBrands?: SubBrand[];
}

const experience: ExperienceEntry[] = [
  {
    role: "Product Designer (UI/UX)",
    company: "XIPHIAS Group",
    period: "Aug 2022 — Present",
    location: "Bangalore, India",
    type: "Full-time",
    highlights: [
      "Sole designer across the entire XIPHIAS ecosystem — immigration, e-commerce, print, and real estate — handling research, IA, visual design, and developer handoff end-to-end",
      "Built and maintained a shared design system (tokens, components, dark/light theming) used across 4 product lines with no separate design team",
      "Rebuilt the flagship immigration platform solo in 3 months — 25+ country pages, 30+ programme views, ~30% organic traffic lift post-launch",
      "Improved conversion on key flows by replacing exit-intent popups with embedded forms using progressive disclosure and contextual error states, driven by user behaviour data",
    ],
    subBrands: [
      {
        name: "XIPHIAS Immigration",
        entity: "Pvt. Ltd.",
        scope: "Rebuilt the full immigration advisory platform — 55 routes, 45 countries, IA, visual identity, and Next.js production code. Launched solo in 3 months.",
      },
      {
        name: "XIPHIAS Superfoods",
        entity: "LLP",
        scope: "Designed the D2C e-commerce website and brand identity — Shopify storefront, product pages, and digital marketing assets.",
      },
      {
        name: "XIPHIAS Print",
        entity: "",
        scope: "Designed the print services platform website — service catalogue, pricing pages, and online order flow.",
      },
      {
        name: "XIPHIAS Projects",
        entity: "",
        scope: "Designed the real estate & construction website — multi-vertical product pages, gallery, and inquiry flows.",
      },
      {
        name: "ASTA Healthtech",
        entity: "Director's Co.",
        scope: "Product website for a clinical AI patient monitoring platform — IA, visual system, and components. WCAG AA compliant, perfect Lighthouse scores.",
        associated: true,
      },
      {
        name: "TUR Middle East FZC",
        entity: "Director's Co.",
        scope: "Full B2B platform website — 6 product verticals, 7 regional offices, multi-catalogue pages, dual-theme UI for GCC and South Asia audience.",
        associated: true,
      },
    ],
  },
  {
    role: "Product Designer",
    company: "Resort Booking & Property Management",
    companyShort: "Boutique Resort — Karnataka",
    period: "2023 — 2024",
    location: "Bangalore, India",
    type: "Freelance",
    highlights: [
      "Designed a full-stack admin suite — front-desk, housekeeping, finance, and reporting modules across a dual-theme design system",
      "Owned end-to-end UX for a 63-page, 46-data-model product solo — from information architecture and user flows to high-fidelity components and developer handoff",
    ],
  },
  {
    role: "Product Designer",
    company: "Harmony Luxe Spa",
    companyShort: "Harmony Luxe — Bangalore",
    period: "2025 — 2026",
    location: "Bangalore, India",
    type: "Freelance",
    highlights: [
      "Designed a SaaS-style billing and operations dashboard — menu pricing, GST invoices, customer index, expense tracking, analytics, and print/PDF workflows",
      "Owned end-to-end UX solo — from information architecture and user flows to high-fidelity handoff",
    ],
  },
  {
    role: "B.Sc. Graphics and VFX",
    company: "Arena Animation · Jain University",
    companyShort: "Bachelor's Degree",
    period: "2019 — 2021",
    location: "Bangalore, India",
    type: "Education",
    highlights: [
      "Multimedia degree spanning graphic design, 3D animation, cinematography, VFX, compositing, and fine art — a broad creative foundation across visual disciplines",
      "3D modelling, rigging, and animation in Maya and 3ds Max — built a strong sense of spatial depth, form, and motion that carries directly into product design",
      "Cinematography and colour grading — trained eye for composition, light, and visual hierarchy that informs every layout decision",
      "Graphic design and print — typography, colour theory, and brand identity fundamentals that underpin all my UI work",
    ],
  },
];

const stack = [
  {
    category: "Design",
    primary: true,
    tools: ["Figma", "Adobe XD", "FigJam", "Framer", "ProtoPie", "Photoshop", "Illustrator"],
  },
  {
    category: "Design Systems",
    primary: true,
    tools: ["Component Libraries", "Design Tokens", "Theming", "Dark Mode", "WCAG AA", "Developer Handoff", "Style Guides"],
  },
  {
    category: "UX Methods",
    primary: true,
    tools: ["User Research", "Information Architecture", "Usability Testing", "A/B Testing", "Conversion Optimisation", "Design Thinking", "Stakeholder Presentations"],
  },
  {
    category: "Engineering",
    primary: false,
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Prisma", "PostgreSQL"],
  },
  {
    category: "AI Tools",
    primary: false,
    tools: ["Claude", "GitHub Copilot", "Codex", "Cursor AI", "ChatGPT", "v0"],
  },
  {
    category: "Platforms",
    primary: false,
    tools: ["Shopify", "WordPress", "Vercel", "GitHub", "Notion", "Linear"],
  },
  {
    category: "Analytics",
    primary: false,
    tools: ["Google Analytics 4", "Google Tag Manager", "Hotjar", "Lighthouse"],
  },
];

const interests = [
  { emoji: "📈", title: "Stocks" },
  { emoji: "🎬", title: "Documentaries" },
  { emoji: "🚗", title: "Cars" },
  { emoji: "📚", title: "Books" },
  { emoji: "🎵", title: "Music" },
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
              <div className="border-b border-black/[0.07] pb-10">

                {/* Top strip */}
                <div className="flex items-center justify-between mb-10 font-mono text-[10px] uppercase tracking-widest" style={{ color: "rgba(17,17,17,0.28)" }}>
                  <span>About</span>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F97316] pulse-dot" aria-hidden="true" />
                    <span style={{ color: "rgba(249,115,22,0.80)" }}>Available · Bangalore</span>
                  </div>
                </div>

                {/* Hero grid */}
                <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest mb-6" style={{ color: "rgba(17,17,17,0.30)" }}>
                      Dhanush N. · UI/UX Product Designer
                    </p>
                    <h1 className="text-[3rem] font-black leading-[0.88] text-[#111] sm:text-[5rem] lg:text-[6.5rem] text-balance">
                      Designer who<br />
                      <span style={{ color: "#F97316" }}>builds.</span>
                    </h1>
                    <div className="mt-6 max-w-xl space-y-4 text-[0.9375rem] leading-relaxed" style={{ color: "rgba(17,17,17,0.52)" }}>
                      <p>Grew up obsessed with how things look and feel. Went deep into it — graphics, 3D, cinematography, the full multimedia world. Somewhere in that process I found product design, and that was kind of it for me.</p>
                      <p>Since 2022 I&apos;ve been at XIPHIAS Group, working across really different domains — immigration, food, print, hospitality. Each one pushed me in a different direction. I design and I build. Not as separate steps — at the same time. And I use AI as a real tool in that process, not a shortcut. The thinking is still mine.</p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <Link
                        href="/contact"
                        className="tap-target focus-ring inline-flex items-center gap-2 rounded-full bg-[#111] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#F97316]"
                      >
                        Get in touch
                        <ArrowUpRight size={13} />
                      </Link>
                      <a
                        href={siteConfig.resumePath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tap-target focus-ring inline-flex items-center gap-2 rounded-full border border-black/[0.14] px-6 py-2.5 text-sm font-semibold transition-colors duration-200 hover:border-black/30 hover:text-[#111]"
                        style={{ color: "rgba(17,17,17,0.60)" }}
                      >
                        View resume
                        <ArrowUpRight size={13} />
                      </a>
                    </div>
                  </div>

                  {/* Identity card */}
                  <div className="w-full max-w-[260px] lg:w-[260px] flex-shrink-0">
                    <div className="border border-black/[0.09] bg-black/[0.02] p-5 flex flex-col gap-5">
                      {/* Photo */}
                      <div className="relative aspect-square overflow-hidden border border-black/[0.06]">
                        <Image
                          src="/dhanush_image.jpeg"
                          alt="Dhanush N — Product Designer"
                          fill
                          sizes="260px"
                          className="object-cover object-top"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <span className="absolute bottom-3 left-3 font-mono text-[9px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.65)" }}>
                          Bangalore · India
                        </span>
                      </div>

                      {/* Stats */}
                      {[
                        { value: "4+", label: "Years shipping" },
                        { value: "10+", label: "Products built" },
                        { value: "Solo", label: "End to end" },
                      ].map((stat, i) => (
                        <div key={stat.label} className="flex items-center justify-between border-t border-black/[0.06] pt-4">
                          <span className="font-mono text-[9px] uppercase tracking-widest" style={{ color: "rgba(17,17,17,0.28)" }}>
                            {stat.label}
                          </span>
                          <span
                            className="font-mono text-sm font-black"
                            style={{ color: i % 2 === 0 ? "#F97316" : "#F97316" }}
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

        {/* ── Experience ── */}
        <section className="py-16 sm:py-20 border-b border-black/[0.07] bg-black/[0.012]">
          <Container size="lg">
            <ScrollReveal className="mb-12">
              <p className="font-mono text-[10px] uppercase tracking-widest mb-5" style={{ color: "rgba(17,17,17,0.28)" }}>
                Experience
              </p>
              <h2 className="text-[2.5rem] font-black leading-[0.9] text-[#111] sm:text-[3.5rem] lg:text-[4.5rem]">
                Where I&apos;ve worked.
              </h2>
            </ScrollReveal>

            <div className="space-y-0">
              {experience.map((exp, index) => {
                const isFullTime = exp.type === "Full-time";
                const isEducation = exp.type === "Education";
                const badgeColor = isFullTime
                  ? { color: "rgba(249,115,22,0.75)", borderColor: "rgba(249,115,22,0.20)" }
                  : isEducation
                  ? { color: "rgba(17,17,17,0.40)", borderColor: "rgba(17,17,17,0.10)" }
                  : { color: "rgba(17,17,17,0.35)", borderColor: "rgba(17,17,17,0.08)" };

                return (
                  <ScrollReveal key={index} delay={index * 0.08}>
                    <div className="border-t border-black/[0.07] py-8 grid gap-6 lg:grid-cols-[0.35fr_1fr] lg:gap-12">

                      {/* Left: company + period */}
                      <div>
                        <p className="font-mono text-[11px] font-black uppercase tracking-widest text-[#111] mb-0.5">
                          {exp.company}
                        </p>
                        {exp.companyShort && (
                          <p className="font-mono text-[9px] uppercase tracking-widest mb-1" style={{ color: "rgba(17,17,17,0.30)" }}>
                            {exp.companyShort}
                          </p>
                        )}
                        <p className="font-mono text-[9px] uppercase tracking-widest mb-2" style={{ color: "rgba(17,17,17,0.30)" }}>
                          {exp.period}
                        </p>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span
                            className="inline-block font-mono text-[8px] uppercase px-2 py-0.5 border rounded-sm"
                            style={badgeColor}
                          >
                            {exp.type}
                          </span>
                          <span className="font-mono text-[8px] uppercase" style={{ color: "rgba(17,17,17,0.25)" }}>
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Right: role + highlights + optional sub-brands */}
                      <div>
                        <h3 className="text-lg font-black text-[#111] mb-4">{exp.role}</h3>
                        <ul className="space-y-2">
                          {exp.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="mt-[7px] h-1 w-1 rounded-full flex-shrink-0 bg-black/20" aria-hidden="true" />
                              <span className="text-sm leading-relaxed" style={{ color: "rgba(17,17,17,0.50)" }}>
                                {h}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {/* Sub-brands — only for XIPHIAS */}
                        {exp.subBrands && exp.subBrands.length > 0 && (() => {
                          const core = exp.subBrands!.filter(b => !b.associated);
                          const associated = exp.subBrands!.filter(b => b.associated);
                          return (
                            <div className="mt-6 pt-6 border-t border-black/[0.06] space-y-5">
                              {/* Core XIPHIAS entities */}
                              <div>
                                <p className="font-mono text-[9px] uppercase tracking-widest mb-3" style={{ color: "rgba(17,17,17,0.25)" }}>
                                  Products &amp; Entities
                                </p>
                                <div className="grid sm:grid-cols-2 gap-2.5">
                                  {core.map((brand) => (
                                    <div key={brand.name} className="border border-black/[0.07] bg-white p-4" style={{ borderRadius: 8 }}>
                                      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                                        <span className="text-sm font-bold text-[#111] leading-none">{brand.name}</span>
                                        {brand.entity && (
                                          <span className="font-mono text-[8px] uppercase px-1.5 py-0.5 border rounded-sm" style={{ color: "rgba(249,115,22,0.65)", borderColor: "rgba(249,115,22,0.18)" }}>
                                            {brand.entity}
                                          </span>
                                        )}
                                      </div>
                                      <p className="text-xs leading-relaxed" style={{ color: "rgba(17,17,17,0.45)" }}>{brand.scope}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Associated companies — same director, different legal entity */}
                              {associated.length > 0 && (
                                <div>
                                  <p className="font-mono text-[9px] uppercase tracking-widest mb-3" style={{ color: "rgba(17,17,17,0.22)" }}>
                                    Also worked on — Director&apos;s associated companies
                                  </p>
                                  <div className="grid sm:grid-cols-2 gap-2.5">
                                    {associated.map((brand) => (
                                      <div key={brand.name} className="border border-dashed border-black/[0.10] bg-black/[0.012] p-4" style={{ borderRadius: 8 }}>
                                        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                                          <span className="text-sm font-bold text-[#111] leading-none">{brand.name}</span>
                                          <span className="font-mono text-[8px] uppercase px-1.5 py-0.5 border rounded-sm" style={{ color: "rgba(17,17,17,0.35)", borderColor: "rgba(17,17,17,0.10)" }}>
                                            {brand.entity}
                                          </span>
                                        </div>
                                        <p className="text-xs leading-relaxed" style={{ color: "rgba(17,17,17,0.42)" }}>{brand.scope}</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })()}
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </Container>
        </section>

        {/* ── Stack ── */}
        <section className="py-16 sm:py-20 border-b border-black/[0.07]">
          <Container size="lg">
            <ScrollReveal className="mb-12">
              <p className="font-mono text-[10px] uppercase tracking-widest mb-5" style={{ color: "rgba(17,17,17,0.28)" }}>
                Stack
              </p>
              <h2 className="text-[2.5rem] font-black leading-[0.9] text-[#111] sm:text-[3.5rem] lg:text-[4.5rem]">
                Tools I reach for.
              </h2>
            </ScrollReveal>

            {/* Primary: UX/Design tools — prominent */}
            <div className="grid gap-8 sm:grid-cols-3 mb-10">
              {stack.filter(g => g.primary).map((group, index) => (
                <ScrollReveal key={group.category} delay={index * 0.08}>
                  <div>
                    <p
                      className="font-mono text-[9px] uppercase tracking-widest mb-4 pb-3 border-b border-[#F97316]/20"
                      style={{ color: "#F97316" }}
                    >
                      {group.category}
                    </p>
                    <StaggerContainer staggerDelay={0.04} className="flex flex-col gap-2">
                      {group.tools.map((tool) => (
                        <StaggerItem key={tool}>
                          <span
                            className="block text-sm transition-colors duration-150 hover:text-[#111]"
                            style={{ color: "rgba(17,17,17,0.65)" }}
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

            {/* Secondary: supporting tools — subdued */}
            <div className="pt-6 border-t border-black/[0.05]">
              <p className="font-mono text-[9px] uppercase tracking-widest mb-6" style={{ color: "rgba(17,17,17,0.22)" }}>
                Also familiar with
              </p>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {stack.filter(g => !g.primary).map((group, index) => (
                  <ScrollReveal key={group.category} delay={index * 0.06}>
                    <div>
                      <p
                        className="font-mono text-[9px] uppercase tracking-widest mb-3 pb-2 border-b border-black/[0.05]"
                        style={{ color: "rgba(17,17,17,0.28)" }}
                      >
                        {group.category}
                      </p>
                      <div className="flex flex-col gap-1.5">
                        {group.tools.map((tool) => (
                          <span
                            key={tool}
                            className="block text-xs"
                            style={{ color: "rgba(17,17,17,0.35)" }}
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ── Interests ── */}
        <section className="py-16 sm:py-20">
          <Container size="lg">
            <ScrollReveal>
              <h2 className="text-[2rem] font-black text-[#111] sm:text-[2.75rem] mb-10">
                What I&apos;m into.
              </h2>
            </ScrollReveal>

            <div className="flex flex-wrap gap-3">
              {interests.map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 0.06}>
                  <span className="inline-flex items-center gap-2 rounded-full border border-black/[0.09] px-4 py-2 text-sm font-semibold text-[#111]">
                    {item.emoji} {item.title}
                  </span>
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
