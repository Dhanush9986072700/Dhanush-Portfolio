"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

function SkillPill({ label }: { label: string }) {
  return (
    <span className="inline-flex h-6 items-center rounded-sm border border-white/[0.1] px-2.5 font-mono text-[9px] uppercase tracking-wider text-white/50">
      {label}
    </span>
  );
}


export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay: number, y: number, duration: number) => ({
    initial: false,
    animate: shouldReduceMotion
      ? undefined
      : {
          opacity: [0.01, 1],
          y: [y, 0],
          filter: ["blur(8px)", "blur(0px)"],
        },
    transition: {
      duration: shouldReduceMotion ? 0 : duration,
      delay: shouldReduceMotion ? 0 : delay,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  });

  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28">
      {/* Ambient glow behind name */}
      <div
        className="pointer-events-none absolute left-1/2 top-40 -translate-x-1/2 h-[480px] w-[900px]"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,255,106,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">

        {/* ── Centered hero block ── */}
        <div className="flex flex-col items-center text-center py-14 sm:py-20 lg:py-24">

          {/* Greeting */}
          <motion.p
            {...reveal(0.12, 10, 0.45)}
            className="font-mono text-[10px] uppercase tracking-widest mb-7"
            style={{ color: "rgba(201,255,106,0.80)" }}
          >
            Hi, I&apos;m Dhanush.
          </motion.p>

          {/* Massive name */}
          <motion.h1
            {...reveal(0.2, 24, 0.8)}
            className="text-[4.5rem] font-black leading-[0.86] text-white sm:text-[8rem] lg:text-[10.5rem] xl:text-[12rem]"
          >
            Dhanush 
            
            <span style={{ color: "#c9ff6a" }}>.N</span>
          </motion.h1>

          {/* Thin separator */}
          <motion.div
            {...reveal(0.3, 0, 0.5)}
            className="mt-10 mb-9 w-px h-14 bg-white/[0.08]"
          />

          {/* Role tagline */}
          <motion.h2
            {...reveal(0.33, 14, 0.55)}
            className="text-[1.6rem] font-extrabold leading-[1.08] text-white sm:text-3xl lg:text-4xl"
          >
            Product Designer who writes{" "}
            <span style={{ color: "#f3a841" }}>code.</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            {...reveal(0.4, 12, 0.5)}
            className="mt-5 max-w-sm text-[0.9375rem] leading-relaxed sm:max-w-md"
            style={{ color: "rgba(247,247,242,0.58)" }}
          >
            12 products shipped across fintech, immigration, hospitality, and
            healthtech — research to deployed code, end-to-end, solo. No
            handoff. No drift. ~30% traffic lift on one. Perfect Lighthouse
            scores on another.
          </motion.p>

          {/* Skill pills */}
          <motion.div
            {...reveal(0.45, 10, 0.45)}
            className="mt-5 flex flex-wrap justify-center gap-1.5"
          >
            {["Design Systems", "WCAG AA", "Figma", "Next.js", "User Research"].map((tag) => (
              <SkillPill key={tag} label={tag} />
            ))}
          </motion.div>

          {/* CTA buttons — always side-by-side */}
          <motion.div
            {...reveal(0.5, 10, 0.45)}
            className="mt-8 flex flex-row items-center gap-3"
          >
            <Link
              href="/work"
              className="tap-target focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-all duration-200 hover:bg-[#c9ff6a]"
            >
              View work
              <ArrowUpRight size={14} />
            </Link>
            <Link
              href="/contact"
              className="tap-target focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.18] px-7 py-3 text-sm font-semibold transition-colors duration-200 hover:border-white/35 hover:text-white"
              style={{ color: "rgba(247,247,242,0.72)" }}
            >
              Say hello
              <ArrowUpRight size={14} />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
