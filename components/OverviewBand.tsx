"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { isLive, type Entry } from "@/data/projects";

/* ---------------------------------------------------------------------------
   OVERVIEW BAND

   One project, one band, roughly one viewport. Everything here has to survive
   a two-second glance on a shared screen, so the band carries six things and
   refuses the rest: the number, what it measures, the subject, the surface,
   the honest state, and the year.

   The metric leads because it is the only part a reader will still have in
   their head at the bottom of the page.

   Motion: eight pixels of rise, once, as the band arrives — enough to feel
   like a slide advancing, not enough to make anyone wait for it. Removed
   entirely under `prefers-reduced-motion`.
--------------------------------------------------------------------------- */

export default function OverviewBand({ entry }: { entry: Entry }) {
  const reduce = useReducedMotion();
  const live = isLive(entry.state);

  const rise = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 8 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.25 },
        transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
      };

  return (
    <section
      data-band={entry.index}
      aria-labelledby={`band-${entry.index}`}
      className="border-b border-hairline"
    >
      <div className="mx-auto max-w-[1180px] px-5 py-14 md:px-10 md:py-20 lg:min-h-[86svh] lg:flex lg:flex-col lg:justify-center">
        {/* The strip: index left, state and year right. */}
        <div className="flex items-baseline justify-between border-b border-hairline pb-3">
          <span className="data text-muted">{entry.index}</span>
          <span className="data">
            <span className={live ? "text-accent" : "text-muted"}>
              {entry.state}
            </span>
            <span className="text-muted"> &middot; {entry.year}</span>
          </span>
        </div>

        <motion.div
          {...rise}
          className="grid gap-10 pt-10 md:pt-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14"
        >
          {/* Left: the number, then the name. */}
          <div className="flex flex-col justify-center">
            <p className="font-display text-[clamp(3.25rem,8vw,5.5rem)] font-light leading-[0.95] tracking-[-0.03em] text-ink [font-variant-numeric:tabular-nums]">
              {entry.metric.value}
            </p>
            <p className="mt-4 max-w-[34ch] text-[clamp(0.95rem,1.4vw,1.125rem)] leading-[1.55] text-muted">
              {entry.metric.label}
            </p>

            <div className="mt-8 border-t border-hairline pt-6">
              <h2
                id={`band-${entry.index}`}
                className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-light leading-[1.15] tracking-[-0.015em] text-ink"
              >
                {entry.subject}
              </h2>
              <p className="data mt-2 text-muted">
                {entry.surface} &middot; {entry.stack.join(" · ")}
              </p>

              <p className="mt-6">
                <Link
                  href={`/work#e-${entry.index}`}
                  className="data link text-ink"
                >
                  Open in Work &rarr;
                  <span className="sr-only"> — {entry.subject}</span>
                </Link>
              </p>
            </div>
          </div>

          {/* Right: the one image. */}
          <figure className="flex flex-col justify-center">
            {entry.plate ? (
              <Image
                src={entry.plate.img}
                alt={entry.plate.alt}
                sizes="(max-width: 1024px) 100vw, 640px"
                className="h-auto w-full border border-hairline"
              />
            ) : (
              <div className="flex aspect-[4/3] w-full items-center justify-center border border-hairline bg-raised">
                <p className="label text-center">Image to come</p>
              </div>
            )}
          </figure>
        </motion.div>
      </div>
    </section>
  );
}
