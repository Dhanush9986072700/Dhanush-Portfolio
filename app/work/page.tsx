import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { siteConfig } from "@/lib/site";
import GradientMesh from "@/components/animations/GradientMesh";
import CursorBlob from "@/components/animations/CursorBlob";
import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected product design and front-end case studies by Dhanush N - immigration platforms, hospitality operations, D2C commerce, clinical AI, static websites, and SaaS admin dashboards.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work | Dhanush N",
    description: "Shipped product design, front-end systems, and proof-led case studies.",
    images: [siteConfig.ogImage],
  },
};

const accentColors: Record<string, string> = {
  "xiphias-immigration": "#F97316",
  "resort-app": "#F97316",
  "agree-superfoods": "#4A7C59",
  "harmony-luxe-spa-admin": "#C39A4A",
  "harmony-luxe-website": "#C39A4A",
  "clinical-ai-ward-monitoring": "#60a5fa",
  "iris-digital-imaging": "#8B1111",
  "xiphias-superfoods": "#C8960C",
  "vault": "#7C6EF8",
  "prism": "#4F46E5",
  "helm": "#00C8FF",
  "clearr": "#6366F1",
  "certus": "#2563EB",
};

function MetricCard({ project }: { project: Project }) {
  const accent = accentColors[project.slug] ?? "#F97316";
  return (
    <div className="border border-black/[0.07] bg-black/[0.018] p-5 sm:p-6">
      <p className="font-mono text-[9px] uppercase tracking-widest mb-5" style={{ color: "rgba(17,17,17,0.25)" }}>
        Proof points
      </p>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
        {project.caseStudy.metrics.map((metric, i) => (
          <div key={metric.label}>
            <p
              className="font-mono text-2xl sm:text-3xl leading-none mb-1.5 tabular-nums"
              style={{ color: i % 2 === 0 ? accent : "rgba(17,17,17,0.85)" }}
            >
              {metric.value}{metric.suffix ?? ""}
            </p>
            <p className="font-mono text-[9px] uppercase tracking-wide leading-relaxed" style={{ color: "rgba(17,17,17,0.30)" }}>
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkShowcase({ project, index }: { project: Project; index: number }) {
  const accent = accentColors[project.slug] ?? "#F97316";
  const heroImage = project.caseStudy.heroImage ?? project.caseStudy.screens?.[0]?.image;
  const screens = project.caseStudy.screens?.slice(1, 3) ?? [];
  const total = projects.length;

  return (
    <ScrollReveal delay={index * 0.07}>
      <article className="border-t border-black/[0.07] py-14 sm:py-18 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:items-start">

          {/* ── Left panel (sticky on desktop) ── */}
          <div className="lg:sticky lg:top-24 flex flex-col gap-7">

            {/* Counter + year */}
            <div className="flex items-center gap-4">
              <span className="font-mono text-[10px] tabular-nums" style={{ color: "rgba(17,17,17,0.20)" }}>
                {String(index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: `${accent}` }}>
                {project.year}
              </span>
            </div>

            {/* Title */}
            <div>
              <h2 className="text-[2.6rem] font-black leading-[0.9] text-[#111] sm:text-5xl lg:text-[3.5rem] text-balance">
                {project.title}
              </h2>
              <p className="mt-4 text-[0.9375rem] leading-relaxed max-w-sm" style={{ color: "rgba(17,17,17,0.48)" }}>
                {project.pitch}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 5).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex h-5 items-center rounded-sm border border-black/[0.09] px-2 font-mono text-[8px] uppercase tracking-wide"
                  style={{ color: "rgba(17,17,17,0.38)" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Metadata table */}
            <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-black/[0.06] pt-5">
              {[
                ["Role", project.role],
                ["Duration", project.duration],
                ["Team", project.team],
                ["Stack", project.stack.slice(0, 3).join(", ")],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="font-mono text-[9px] uppercase tracking-widest mb-1" style={{ color: "rgba(17,17,17,0.22)" }}>
                    {label}
                  </dt>
                  <dd className="font-mono text-[11px] leading-relaxed" style={{ color: "rgba(17,17,17,0.55)" }}>
                    {value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/work/${project.slug}`}
                className="tap-target focus-ring inline-flex items-center gap-2 rounded-full bg-[#111] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#F97316]"
              >
                Case study
                <ArrowUpRight size={13} />
              </Link>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-target focus-ring inline-flex items-center gap-2 rounded-full border border-black/[0.12] px-5 py-2.5 text-sm font-semibold transition-colors duration-200 hover:border-black/28 hover:text-[#111]"
                  style={{ color: "rgba(17,17,17,0.55)" }}
                >
                  Live site
                  <ArrowUpRight size={13} />
                </a>
              )}
            </div>
          </div>

          {/* ── Right panel (scrollable visuals) ── */}
          <div className="flex flex-col gap-4">

            {/* Hero image */}
            <div className="relative aspect-[16/9] overflow-hidden border border-black/[0.08]">
              {heroImage ? (
                <Image
                  src={heroImage}
                  alt={`${project.title} — live product`}
                  fill
                  sizes="(min-width: 1024px) 640px, 100vw"
                  className="object-cover object-center"
                  priority={index === 0}
                />
              ) : (
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center"
                  style={{ background: "#F8F8F8" }}
                >
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.2) 1px, transparent 1px)",
                      backgroundSize: "28px 28px",
                    }}
                  />
                  <p className="relative font-mono text-[10px] uppercase tracking-widest mb-3" style={{ color: `${accent}80` }}>
                    Screenshot pending
                  </p>
                  <p className="relative text-3xl font-black text-[#111]/20">{project.title}</p>
                </div>
              )}
            </div>

            {/* Secondary screens */}
            {screens.length > 0 && (
              <div className="grid grid-cols-2 gap-4">
                {screens.map((screen) => (
                  <div key={screen.title} className="flex flex-col gap-2">
                    <div className="relative aspect-[16/10] overflow-hidden border border-black/[0.07]">
                      {screen.image ? (
                        <Image
                          src={screen.image}
                          alt={screen.alt ?? `${project.title} — ${screen.title}`}
                          fill
                          sizes="320px"
                          className="object-cover object-center"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/[0.025]">
                          <p className="font-mono text-[9px] uppercase text-[#111]/25 text-center px-4">
                            {screen.title}
                          </p>
                        </div>
                      )}
                    </div>
                    <p className="font-mono text-[9px] leading-relaxed" style={{ color: "rgba(17,17,17,0.25)" }}>
                      {screen.caption}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Metrics */}
            <MetricCard project={project} />
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
}

export default function WorkPage() {
  return (
    <div className="relative min-h-screen">
      <GradientMesh />
      <CursorBlob />
      <Navigation />

      <main className="relative z-10 pt-28">

        {/* Page header */}
        <section className="pb-0">
          <Container size="lg">
            <ScrollReveal>
              <div className="border-b border-black/[0.07] pb-10">
                <div className="flex items-start justify-between gap-6 mb-8">
                  <p className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "rgba(17,17,17,0.28)" }}>
                    Work / Selected projects
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "rgba(17,17,17,0.28)" }}>
                    {projects.length} projects · Selected work
                  </p>
                </div>
                <div className="grid gap-6 lg:grid-cols-[1fr_0.4fr] lg:items-end">
                  <h1 className="text-[3rem] font-black leading-[0.88] text-[#111] sm:text-[5rem] lg:text-[6.5rem] text-balance">
                    Selected work.
                  </h1>
                  <p className="max-w-xs text-sm leading-relaxed lg:pb-2" style={{ color: "rgba(17,17,17,0.45)" }}>
                    Product design and front-end development — solo, end to end. Strategy to browser, with AI tools in the workflow to ship without trading craft.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </section>

        {/* Projects */}
        <section className="pb-12">
          <Container size="lg">
            <div className="border-b border-black/[0.07]">
              {projects.map((project, index) => (
                <WorkShowcase key={project.id} project={project} index={index} />
              ))}
            </div>
          </Container>
        </section>

      </main>

      <Footer />
    </div>
  );
}
