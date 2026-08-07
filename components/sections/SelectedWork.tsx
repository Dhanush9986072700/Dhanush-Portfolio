"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects, type Project } from "@/data/projects";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

/* ── Custom project visuals (for cards without a heroImage) ── */
function ProjectVisual({ slug, title }: { slug: string; title: string }) {
  if (slug === "harmony-luxe-spa-admin") {
    return (
      <div className="h-full bg-[#f6f3ed] p-8 text-[#0b1324] flex flex-col justify-between">
        <div className="flex items-center justify-between border-b border-[#0b1324]/10 pb-4 font-mono text-[10px] uppercase">
          <span>Billing suite</span>
          <span style={{ color: "#9a6500" }}>Reports live</span>
        </div>
        <div className="grid grid-cols-[0.55fr_1fr] gap-4 py-8">
          <div className="space-y-2">
            {["Dashboard", "Menu", "Billing", "Invoices", "Reports"].map((item, i) => (
              <span
                key={item}
                className={`block border px-3 py-2 font-mono text-[9px] uppercase ${
                  i === 2
                    ? "border-[#9a6500]/20 bg-[#9a6500]/12 text-[#9a6500]"
                    : "border-[#0b1324]/10 bg-white/55 text-[#0b1324]/45"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
          <div className="space-y-3">
            <div className="h-24 border border-[#0b1324]/10 bg-white/75 p-3">
              <div className="mb-4 flex items-center justify-between font-mono text-[8px] uppercase text-[#0b1324]/42">
                <span>Revenue trend</span><span>Rs 4.5k</span>
              </div>
              <div className="flex h-10 items-end gap-1.5">
                {[15, 16, 18, 64, 19, 17, 20].map((height, i) => (
                  <span key={i} className="w-full bg-[#9a6500]/35" style={{ height }} />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {["50", "20", "13"].map((value, i) => (
                <div key={value} className="border border-[#0b1324]/10 bg-white/70 p-3">
                  <p className="font-mono text-xl leading-none text-[#0b1324]">{value}</p>
                  <p className="mt-1 font-mono text-[7px] uppercase text-[#0b1324]/38">
                    {["services", "invoices", "customers"][i]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="font-mono text-[10px] uppercase text-[#0b1324]/45">Spa billing + analytics dashboard</p>
      </div>
    );
  }

  if (slug === "resort-app") {
    return (
      <div className="h-full bg-[#d8d3c4] p-8 text-black flex flex-col justify-between">
        <div className="flex items-center justify-between border-b border-black/15 pb-4 font-mono text-[10px] uppercase">
          <span>Reservations</span>
          <span style={{ color: "#9a5e00" }}>Live board</span>
        </div>
        <div className="grid grid-cols-8 gap-2 my-auto py-8">
          {Array.from({ length: 40 }).map((_, i) => (
            <span key={i} className={`aspect-square border border-black/10 ${i % 7 === 0 ? "bg-black" : i % 5 === 0 ? "bg-[#F97316]" : "bg-white/60"}`} />
          ))}
        </div>
        <p className="font-mono text-[10px] uppercase text-black/50">Booking engine + property management</p>
      </div>
    );
  }

  if (slug === "agree-superfoods") {
    return (
      <div className="h-full bg-[#17120c] flex">
        <div className="w-[30%] bg-[#F97316] p-8 text-black flex flex-col justify-between">
          <p className="font-mono text-[10px] uppercase">D2C Launch</p>
          <div>
            <p className="text-7xl font-black leading-none">15</p>
            <p className="font-mono text-[10px] uppercase mt-1">days</p>
          </div>
          <p className="font-mono text-[9px] uppercase">Premium Shopify</p>
        </div>
        <div className="flex-1 p-8 flex flex-col justify-end">
          <p className="text-4xl font-black leading-tight text-white max-w-[18rem]">
            Premium D2C<br />commerce
          </p>
          <div className="mt-6 space-y-2">
            <div className="h-2 w-full bg-white/90" />
            <div className="h-2 w-2/3 bg-white/22" />
            <div className="h-2 w-3/4 bg-white/12" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-[#F8F8F8] p-8 flex flex-col justify-between">
      <div className="flex items-start justify-between">
        <p className="font-mono text-[10px] uppercase text-[#111]/35">Global advisory platform</p>
        <span className="relative flex h-8 w-8 flex-shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F97316] opacity-15" />
          <span className="relative h-8 w-8 rounded-full border border-[#F97316]/40 bg-[#F97316]/[0.08]" />
        </span>
      </div>
      <p className="text-5xl font-black leading-[0.9] text-[#111] max-w-[22rem]">{title}</p>
      <div className="grid grid-cols-4 gap-2">
        {["Residency", "Citizenship", "Corporate", "Skilled"].map((item, i) => (
          <span key={item} className={`border py-3 px-2 font-mono text-[9px] text-center ${i === 0 ? "border-[#F97316]/20 bg-[#F97316]/[0.04] text-[#F97316]/60" : "border-black/[0.1] text-[#111]/35"}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Single unified card ── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <ScrollReveal delay={index * 0.06}>
      <Link href={`/work/${project.slug}`} className="focus-ring group block h-full">
        <motion.article
          className="h-full flex flex-col overflow-hidden"
          style={{ borderRadius: 20, border: "1px solid rgba(0,0,0,0.07)", background: "#fff" }}
          whileHover={shouldReduceMotion ? undefined : { y: -4 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          {/* Image / visual area */}
          <div className="relative flex-shrink-0" style={{ height: 280 }}>
            {project.caseStudy.heroImage ? (
              <motion.div
                className="absolute inset-0"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.015 }}
                transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <Image
                  src={project.caseStudy.heroImage}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 640px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top"
                  priority={index < 2}
                />
              </motion.div>
            ) : (
              <div className="absolute inset-0">
                <ProjectVisual slug={project.slug} title={project.title} />
              </div>
            )}

            {/* Arrow — appears on hover */}
            <span
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200"
              style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.12)" }}
              aria-hidden
            >
              <ArrowUpRight size={15} color="#111" />
            </span>
          </div>

          {/* Content */}
          <div
            className="flex flex-col flex-1 gap-3 p-6"
            style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
          >
            {/* Number + year + arrow */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="font-mono text-[10px] tabular-nums"
                  style={{ color: "rgba(17,17,17,0.22)" }}
                >
                  {project.number}
                </span>
                <span
                  className="font-mono text-[10px] uppercase tracking-widest"
                  style={{ color: "rgba(249,115,22,0.72)" }}
                >
                  {project.year}
                </span>
              </div>
              <span
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-200 group-hover:bg-[#F97316] group-hover:border-[#F97316] group-hover:text-white"
                style={{ borderColor: "rgba(0,0,0,0.12)", color: "rgba(17,17,17,0.40)" }}
              >
                <ArrowUpRight size={13} />
              </span>
            </div>

            {/* Title */}
            <h3
              className="font-bold leading-tight text-[#111]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.2rem",
                letterSpacing: "-0.02em",
              }}
            >
              {project.title}
            </h3>

            {/* Description */}
            <p
              className="text-sm leading-relaxed line-clamp-2 flex-1"
              style={{ color: "rgba(17,17,17,0.45)" }}
            >
              {project.description}
            </p>

            {/* Tags — pill outline style */}
            <div className="flex flex-wrap gap-2 mt-auto pt-1">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border px-3 font-mono text-[10px] uppercase tracking-wide"
                  style={{
                    height: 26,
                    borderColor: "rgba(0,0,0,0.14)",
                    color: "rgba(17,17,17,0.50)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      </Link>
    </ScrollReveal>
  );
}

export default function SelectedWork() {
  return (
    <Section id="work" spacing="lg" className="overflow-hidden">
      <Container size="lg">

        {/* Section header */}
        <ScrollReveal className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 pb-8 border-b border-black/[0.08]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest mb-4" style={{ color: "rgba(17,17,17,0.28)" }}>
                02 / Selected Work
              </p>
              <h2 className="text-[2.75rem] font-black leading-[0.88] text-[#111] sm:text-[4rem] lg:text-[5rem]">
                Selected<br />projects.
              </h2>
            </div>
            <div className="sm:pb-1 max-w-[18rem]">
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(17,17,17,0.45)" }}>
                Solo-led product strategy, interface design, and front-end engineering across shipped sites, admin tools, and concept systems.
              </p>
              <Link
                href="/work"
                className="focus-ring inline-flex items-center gap-2 rounded-full border border-black/[0.14] px-4 py-2 font-mono text-[10px] uppercase transition-colors hover:border-black/30 hover:text-[#111]"
                style={{ color: "rgba(17,17,17,0.55)" }}
              >
                All work
                <ArrowUpRight size={12} />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* 2-column equal grid */}
        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </Container>
    </Section>
  );
}
