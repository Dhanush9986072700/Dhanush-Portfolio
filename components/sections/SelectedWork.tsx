"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

function ProjectVisual({ slug, title }: { slug: string; title: string }) {
  if (slug === "resort-app") {
    return (
      <div className="h-full bg-[#d8d3c4] p-8 text-black flex flex-col justify-between">
        <div className="flex items-center justify-between border-b border-black/15 pb-4 font-mono text-[10px] uppercase">
          <span>Reservations</span>
          <span style={{ color: "#9a5e00" }}>Live board</span>
        </div>
        <div className="grid grid-cols-8 gap-2 my-auto py-8">
          {Array.from({ length: 40 }).map((_, i) => (
            <span
              key={i}
              className={`aspect-square border border-black/10 ${
                i % 7 === 0 ? "bg-black" : i % 5 === 0 ? "bg-[#f3a841]" : "bg-white/60"
              }`}
            />
          ))}
        </div>
        <p className="font-mono text-[10px] uppercase text-black/50">Booking engine + property management</p>
      </div>
    );
  }

  if (slug === "superfoods") {
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
          <span
            key={item}
            className={`border py-3 px-2 font-mono text-[9px] text-center ${
              i === 0 ? "border-[#c9ff6a]/20 bg-[#c9ff6a]/[0.04] text-[#c9ff6a]/60" : "border-white/[0.1] text-white/35"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SelectedWork() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="work" spacing="lg" className="overflow-hidden">
      <Container size="lg">

        {/* Section header */}
        <ScrollReveal className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 pb-8 border-b border-white/[0.08]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest mb-4" style={{ color: "rgba(247,247,242,0.28)" }}>
                02 / Selected Work
              </p>
              <h2 className="text-[2.75rem] font-black leading-[0.88] text-white sm:text-[4rem] lg:text-[5rem]">
                Three shipped<br />products.
              </h2>
            </div>
            <div className="sm:pb-1 max-w-[18rem]">
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(247,247,242,0.45)" }}>
                All solo. All in production. Product strategy, interface design, and front-end engineering — end to end.
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

        {/* Project list */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <Link
                href={`/work/${project.slug}`}
                className="focus-ring group block border-b border-white/[0.06] py-10 first:pt-0"
              >
                <motion.article
                  whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                >
                  {/* Top meta row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-5">
                      <span className="font-mono text-xs tabular-nums" style={{ color: "rgba(247,247,242,0.22)" }}>
                        {project.number}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "rgba(201,255,106,0.70)" }}>
                        {project.year}
                      </span>
                      <span className="hidden sm:block font-mono text-[10px] uppercase" style={{ color: "rgba(247,247,242,0.28)" }}>
                        {project.role}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="hidden lg:inline-flex h-5 items-center rounded-sm border border-white/[0.09] px-2 font-mono text-[8px] uppercase tracking-wide"
                          style={{ color: "rgba(247,247,242,0.35)" }}
                        >
                          {tag}
                        </span>
                      ))}
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.14] transition-all duration-200 group-hover:border-white/35 group-hover:bg-white group-hover:text-black"
                        style={{ color: "rgba(247,247,242,0.45)" }}
                      >
                        <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </div>

                  {/* Large visual */}
                  <div className="relative overflow-hidden border border-white/[0.08] transition-colors duration-300 group-hover:border-white/[0.18] aspect-[16/8]">
                    {project.caseStudy.heroImage ? (
                      <motion.div
                        className="absolute inset-0"
                        whileHover={shouldReduceMotion ? undefined : { scale: 1.012 }}
                        transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
                      >
                        <Image
                          src={project.caseStudy.heroImage}
                          alt={`${project.title} — live product`}
                          fill
                          sizes="(min-width: 1280px) 1152px, 100vw"
                          className="object-cover object-top"
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        className="h-full w-full"
                        whileHover={shouldReduceMotion ? undefined : { scale: 1.012 }}
                        transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
                      >
                        <ProjectVisual slug={project.slug} title={project.title} />
                      </motion.div>
                    )}
                    {/* Hover shimmer */}
                    <div className="pointer-events-none absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-[0.018]" />
                  </div>

                  {/* Bottom info row */}
                  <div className="mt-5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="text-2xl font-black leading-none text-white sm:text-3xl group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-2.5 max-w-2xl text-sm leading-relaxed" style={{ color: "rgba(247,247,242,0.42)" }}>
                        {project.description}
                      </p>
                    </div>
                    <div className="flex shrink-0 items-center gap-6 sm:flex-col sm:items-end sm:gap-1.5 sm:pt-1">
                      <span className="font-mono text-[10px] uppercase" style={{ color: "rgba(247,247,242,0.25)" }}>
                        {project.team}
                      </span>
                      <span className="font-mono text-[10px] uppercase" style={{ color: "rgba(247,247,242,0.25)" }}>
                        {project.duration}
                      </span>
                    </div>
                  </div>
                </motion.article>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
