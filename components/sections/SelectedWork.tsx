"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects, type Project } from "@/data/projects";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const NUMBER_WORDS: Record<number, string> = {
  1: "One", 2: "Two", 3: "Three", 4: "Four", 5: "Five",
  6: "Six", 7: "Seven", 8: "Eight", 9: "Nine", 10: "Ten",
  11: "Eleven",
};

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
            <span key={i} className={`aspect-square border border-black/10 ${i % 7 === 0 ? "bg-black" : i % 5 === 0 ? "bg-[#f3a841]" : "bg-white/60"}`} />
          ))}
        </div>
        <p className="font-mono text-[10px] uppercase text-black/50">Booking engine + property management</p>
      </div>
    );
  }

  if (slug === "agree-superfoods") {
    return (
      <div className="h-full bg-[#17120c] flex">
        <div className="w-[30%] bg-[#f3a841] p-8 text-black flex flex-col justify-between">
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
    <div className="h-full bg-[#101010] p-8 flex flex-col justify-between">
      <div className="flex items-start justify-between">
        <p className="font-mono text-[10px] uppercase text-white/35">Global advisory platform</p>
        <span className="relative flex h-8 w-8 flex-shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c9ff6a] opacity-15" />
          <span className="relative h-8 w-8 rounded-full border border-[#c9ff6a]/40 bg-[#c9ff6a]/[0.08]" />
        </span>
      </div>
      <p className="text-5xl font-black leading-[0.9] text-white max-w-[22rem]">{title}</p>
      <div className="grid grid-cols-4 gap-2">
        {["Residency", "Citizenship", "Corporate", "Skilled"].map((item, i) => (
          <span key={item} className={`border py-3 px-2 font-mono text-[9px] text-center ${i === 0 ? "border-[#c9ff6a]/20 bg-[#c9ff6a]/[0.04] text-[#c9ff6a]/60" : "border-white/[0.1] text-white/35"}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <ScrollReveal>
      <Link href={`/work/${project.slug}`} className="focus-ring group block">
        <motion.article
          whileHover={shouldReduceMotion ? undefined : { y: -3 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="border border-white/[0.07] p-0 overflow-hidden"
        >
          <div className="grid lg:grid-cols-[1fr_0.42fr]">

            {/* Image */}
            <div className="relative aspect-[16/9] lg:aspect-auto lg:min-h-[420px] overflow-hidden">
              {project.caseStudy.heroImage ? (
                <motion.div
                  className="absolute inset-0"
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.015 }}
                  transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  <Image
                    src={project.caseStudy.heroImage}
                    alt={`${project.title} — live product`}
                    fill
                    sizes="(min-width: 1024px) 720px, 100vw"
                    className="object-cover object-top"
                    priority
                  />
                </motion.div>
              ) : (
                <ProjectVisual slug={project.slug} title={project.title} />
              )}
              <div className="pointer-events-none absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-[0.02]" />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between gap-8 border-t border-white/[0.07] lg:border-t-0 lg:border-l p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] tabular-nums" style={{ color: "rgba(247,247,242,0.22)" }}>
                    {project.number}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "rgba(201,255,106,0.75)" }}>
                    {project.year}
                  </span>
                </div>
                <span
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.14] transition-all duration-200 group-hover:border-white/40 group-hover:bg-white group-hover:text-black"
                  style={{ color: "rgba(247,247,242,0.45)" }}
                >
                  <ArrowUpRight size={14} />
                </span>
              </div>

              <div>
                <h3 className="text-3xl font-black leading-[0.92] text-white sm:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(247,247,242,0.45)" }}>
                  {project.description}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex h-5 items-center rounded-sm border border-white/[0.09] px-2 font-mono text-[8px] uppercase tracking-wide"
                      style={{ color: "rgba(247,247,242,0.38)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <dl className="grid grid-cols-2 gap-x-4 gap-y-2.5 border-t border-white/[0.06] pt-4">
                  {[["Role", project.role], ["Duration", project.duration]].map(([label, value]) => (
                    <div key={label}>
                      <dt className="font-mono text-[8px] uppercase tracking-widest mb-0.5" style={{ color: "rgba(247,247,242,0.22)" }}>{label}</dt>
                      <dd className="font-mono text-[10px]" style={{ color: "rgba(247,247,242,0.55)" }}>{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </motion.article>
      </Link>
    </ScrollReveal>
  );
}

function GridCard({ project, index }: { project: Project; index: number }) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <ScrollReveal delay={index * 0.07}>
      <Link href={`/work/${project.slug}`} className="focus-ring group block h-full">
        <motion.article
          className="h-full flex flex-col border border-white/[0.07] overflow-hidden"
          whileHover={shouldReduceMotion ? undefined : { y: -4 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          {/* Image */}
          <div className="relative aspect-[16/10] overflow-hidden flex-shrink-0">
            {project.caseStudy.heroImage ? (
              <motion.div
                className="absolute inset-0"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.015 }}
                transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <Image
                  src={project.caseStudy.heroImage}
                  alt={`${project.title} — live product`}
                  fill
                  sizes="(min-width: 1024px) 560px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </motion.div>
            ) : (
              <div className="h-full w-full">
                <ProjectVisual slug={project.slug} title={project.title} />
              </div>
            )}
            <div className="pointer-events-none absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-[0.02]" />
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 gap-5 p-6 border-t border-white/[0.07]">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <span className="font-mono text-[10px] tabular-nums flex-shrink-0" style={{ color: "rgba(247,247,242,0.22)" }}>
                  {project.number}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest flex-shrink-0" style={{ color: "rgba(201,255,106,0.72)" }}>
                  {project.year}
                </span>
              </div>
              <span
                className="flex-shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.12] transition-all duration-200 group-hover:border-white/35 group-hover:bg-white group-hover:text-black"
                style={{ color: "rgba(247,247,242,0.40)" }}
              >
                <ArrowUpRight size={13} />
              </span>
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-black leading-[0.95] text-white sm:text-2xl">
                {project.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed line-clamp-2" style={{ color: "rgba(247,247,242,0.42)" }}>
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-auto">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex h-5 items-center rounded-sm border border-white/[0.09] px-2 font-mono text-[8px] uppercase tracking-wide"
                  style={{ color: "rgba(247,247,242,0.35)" }}
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
  const count = projects.length;
  const countWord = NUMBER_WORDS[count] ?? `${count}`;
  const [featured, ...rest] = projects;

  return (
    <Section id="work" spacing="lg" className="overflow-hidden">
      <Container size="lg">

        {/* Section header */}
        <ScrollReveal className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 pb-8 border-b border-white/[0.08]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest mb-4" style={{ color: "rgba(247,247,242,0.28)" }}>
                02 / Selected Work
              </p>
              <h2 className="text-[2.75rem] font-black leading-[0.88] text-white sm:text-[4rem] lg:text-[5rem]">
                {countWord} selected<br />projects.
              </h2>
            </div>
            <div className="sm:pb-1 max-w-[18rem]">
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(247,247,242,0.45)" }}>
                Solo-led product strategy, interface design, and front-end engineering across shipped sites, admin tools, and concept systems.
              </p>
              <Link
                href="/work"
                className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/[0.14] px-4 py-2 font-mono text-[10px] uppercase transition-colors hover:border-white/30 hover:text-white"
                style={{ color: "rgba(247,247,242,0.55)" }}
              >
                All work
                <ArrowUpRight size={12} />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Featured project */}
        <div className="mb-4">
          <FeaturedCard project={featured} />
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, index) => (
            <GridCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </Container>
    </Section>
  );
}
