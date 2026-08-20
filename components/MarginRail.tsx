"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/* ---------------------------------------------------------------------------
   THE MARGIN RAIL

   A chart carries its scale in the margin. So does this. It is not a progress
   bar for decoration — it is a readout: where you are in the sheet, which
   section you are in, and a tick scale you can measure against.

   Position is a fact, so it is allowed the accent.

   Motion: the marker glides because a scale should feel continuous. Under
   `prefers-reduced-motion` the glide is removed but the readout keeps
   updating — the information is not the animation, and suppressing motion
   should never cost the reader data.

   TWO MODES
   ---------
   Default: a 24-tick scale reading percentage through the sheet.
   Band mode: on a sheet built of `[data-band]` sections (the Overview), the
   ticks become the bands themselves and the readout counts them — 03/07. The
   scale measures whatever the sheet is actually made of.
--------------------------------------------------------------------------- */

const TICKS = 24;

export default function MarginRail() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [section, setSection] = useState("");
  const [bands, setBands] = useState({ index: 0, total: 0 });
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const read = () => {
      frame.current = null;
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
    };

    const onScroll = () => {
      if (frame.current === null) frame.current = requestAnimationFrame(read);
    };

    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    /* A hidden tab suspends requestAnimationFrame, so the readout can be
       stale by the time the reader comes back to it. Re-read on return. */
    document.addEventListener("visibilitychange", read);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.removeEventListener("visibilitychange", read);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, []);

  /* Which named section is currently under the reader. Re-runs on navigation:
     a client-side route change swaps the whole DOM the observers were watching. */
  useEffect(() => {
    const marks = Array.from(
      document.querySelectorAll<HTMLElement>("[data-section]")
    );
    if (marks.length === 0) {
      setSection("");
      return;
    }

    /* Name the first section straight away. The observer is asynchronous, so
       without this the rail wears the previous page's label for a frame. */
    setSection(marks[0].dataset.section ?? "");

    const observer = new IntersectionObserver(
      (records) => {
        const visible = records
          .filter((r) => r.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) {
          setSection((visible.target as HTMLElement).dataset.section ?? "");
        }
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    marks.forEach((m) => observer.observe(m));
    return () => observer.disconnect();
  }, [pathname]);

  /* Band mode. Absent on sheets that have no bands, which leaves the scale
     in its default percentage mode. */
  useEffect(() => {
    const marks = Array.from(
      document.querySelectorAll<HTMLElement>("[data-band]")
    );

    setBands({ index: 0, total: marks.length });
    if (marks.length === 0) return;

    const observer = new IntersectionObserver(
      (records) => {
        const visible = records
          .filter((r) => r.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (!visible) return;
        const index = marks.indexOf(visible.target as HTMLElement);
        if (index !== -1) setBands({ index, total: marks.length });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    marks.forEach((m) => observer.observe(m));
    return () => observer.disconnect();
  }, [pathname]);

  const banded = bands.total > 0;
  const tickCount = banded ? bands.total : TICKS;
  const active = banded ? bands.index : Math.round(progress * (TICKS - 1));

  const reading = banded
    ? `${String(bands.index + 1).padStart(2, "0")}/${String(bands.total).padStart(2, "0")}`
    : Math.round(progress * 100)
        .toString()
        .padStart(3, "0");

  return (
    <>
      {/* Small screens: the scale collapses to a single hairline of depth. */}
      <div
        aria-hidden
        className="fixed inset-x-0 top-0 z-40 h-px bg-transparent lg:hidden"
      >
        <div
          className="h-px bg-accent transition-[width] duration-150 ease-out motion-reduce:transition-none"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* Large screens: the full margin scale. */}
      <aside
        aria-hidden
        className="fixed inset-y-0 left-0 z-30 hidden w-rail border-r border-hairline bg-paper lg:flex lg:flex-col lg:items-center lg:justify-between lg:py-5"
      >
        <span className="data text-ink">DR</span>

        <div className="relative flex h-full w-full flex-col items-center justify-center py-8">
          {/* The rotated section readout: the label on a chart margin. */}
          <span
            className="label absolute left-3 top-1/2 -translate-y-1/2 whitespace-nowrap text-ink"
            style={{ writingMode: "vertical-rl", rotate: "180deg" }}
          >
            {section}
          </span>

          {/* The tick scale. */}
          <ol className="absolute right-3 top-0 flex h-full flex-col justify-between py-8">
            {Array.from({ length: tickCount }).map((_, i) => (
              <li
                key={i}
                className={[
                  "h-px transition-[width,background-color] duration-200 ease-out motion-reduce:transition-none",
                  i === active
                    ? "w-4 bg-accent"
                    : banded || i % 4 === 0
                      ? "w-2.5 bg-hairline"
                      : "w-1.5 bg-hairline",
                ].join(" ")}
              />
            ))}
          </ol>
        </div>

        <span className="data text-muted">{reading}</span>
      </aside>
    </>
  );
}
