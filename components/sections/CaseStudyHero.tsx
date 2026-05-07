"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/animations/ScrollReveal";

interface Props {
  project: Project;
}

const gradients: Record<string, string> = {
  "xiphias-immigration":
    "#101010",
  "resort-app":
    "#d8d3c4",
  "agree-superfoods":
    "#17120c",
  "harmony-luxe-spa-admin":
    "#0b1324",
  "clinical-ai-ward-monitoring":
    "#060816",
  "iris-digital-imaging":
    "#1f1f1f",
};

export default function CaseStudyHero({ project }: Props) {
  const gradientBg = gradients[project.slug] ?? gradients["xiphias-immigration"];
  const shouldReduceMotion = useReducedMotion();
  const heroImageSrc = project.caseStudy.heroImage ?? project.caseStudy.screens?.[0]?.image;
  const heroCaption = project.caseStudy.screens?.[0]?.caption ?? `${project.title} / ${project.year}`;
  const projectLinks = [
    { label: "Live site", href: project.liveUrl },
    { label: "Prototype", href: project.prototypeUrl },
    { label: "Repo", href: project.repoUrl },
  ].filter((link): link is { label: string; href: string } => Boolean(link.href));
  const reveal = (delay: number, y: number, duration: number) => ({
    initial: false,
    animate: shouldReduceMotion ? undefined : { opacity: [0.01, 1], y: [y, 0] },
    transition: {
      duration: shouldReduceMotion ? 0 : duration,
      delay: shouldReduceMotion ? 0 : delay,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  });

  return (
    <section className="relative pt-10 sm:pt-16 pb-0 overflow-hidden">
      <Container size="lg">
        {/* Project number + year */}
        <motion.p
          {...reveal(0.1, 10, 0.4)}
          className="font-mono text-xs text-[#c9ff6a]/70 uppercase mb-6"
        >
          {project.number} / {project.year}
        </motion.p>

        {/* Title */}
        <motion.h1
          {...reveal(0.2, 20, 0.7)}
          className="text-[4rem] font-black leading-[0.86] text-white mb-6 sm:text-[7rem] lg:text-[9rem] sm:mb-8 text-balance"
        >
          {project.title}
        </motion.h1>

        {/* Pitch */}
        <motion.p
          {...reveal(0.35, 14, 0.5)}
          className="text-lg sm:text-xl md:text-2xl text-white/55 max-w-2xl mb-8 leading-relaxed text-pretty"
        >
          {project.pitch}
        </motion.p>

        {projectLinks.length > 0 ? (
          <motion.div
            {...reveal(0.4, 10, 0.4)}
            className="flex flex-col sm:flex-row gap-3 mb-10"
          >
            {projectLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-target focus-ring inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.1] text-sm text-white/60 hover:text-white/85 hover:border-white/25 transition-colors duration-200"
              >
                {link.label}
                <ArrowUpRight size={13} />
              </a>
            ))}
          </motion.div>
        ) : null}

        {/* Meta strip */}
        <motion.div
          {...reveal(0.45, 10, 0.4)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12 sm:mb-14 pb-10 sm:pb-12 border-b border-white/[0.06]"
        >
          {[
            { label: "Role", value: project.role },
            { label: "Duration", value: project.duration },
            { label: "Team", value: project.team },
            { label: "Stack", value: project.stack.join(", ") },
          ].map((meta) => (
            <div key={meta.label}>
              <div>
                <span className="font-mono text-[10px] text-white/25 tracking-widest uppercase block mb-0.5">
                  {meta.label}
                </span>
                <span className="font-mono text-sm text-white/60">{meta.value}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </Container>

      {/* Full-width proof frame */}
      <div className="w-full">
        <ScrollReveal>
          <div
            className="relative w-full overflow-hidden aspect-[16/10] sm:aspect-[16/8] lg:aspect-[16/7] border-y border-white/[0.06]"
          >
            {heroImageSrc ? (
              <Image
                src={heroImageSrc}
                alt={`${project.title} — live product`}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />
            ) : (
              <>
                <div className="absolute inset-0" style={{ background: gradientBg }} />
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                  <span className="font-mono text-[10px] text-[#c9ff6a]/70 uppercase mb-4">
                    Live site
                  </span>
                  <h2 className="text-3xl font-black leading-none text-white/24 sm:text-4xl md:text-6xl text-balance">
                    {project.title}
                  </h2>
                </div>
              </>
            )}
          </div>
          {/* Caption */}
          <div className="max-w-7xl mx-auto px-6 md:px-10 mt-4">
            <p className="font-mono text-xs text-white/25 italic">
              {heroCaption}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
