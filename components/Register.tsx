"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Delta from "@/components/Delta";
import { isLive, type Entry } from "@/data/projects";

/* ---------------------------------------------------------------------------
   THE REGISTER

   Projects are entries in a register, not cards in a grid. Density is the
   flex: seven projects legible in one screen, with the state of each stated
   plainly — including the ones that died.

   Rows deliberately do not animate in. Data that performs on arrival is data
   you distrust slightly. The only motion here is the disclosure, which is
   caused by the reader and therefore explains itself.

   Keyboard: arrow keys (or j/k) move between rows, Home/End jump to the ends,
   Enter/Space opens an entry. The rail is an instrument; so is this.
--------------------------------------------------------------------------- */

export default function Register({ entries }: { entries: Entry[] }) {
  const [open, setOpen] = useState<string | null>(null);
  const bodyRef = useRef<HTMLTableSectionElement>(null);
  const reduce = useReducedMotion();

  /* Arriving from an Overview band (/work#e-005): open that entry and put the
     reader on it. A hash alone would scroll to a collapsed row and leave them
     to guess which one they came for.

     Runs on mount and on every hash change. A link to a different entry while
     already on this page does not remount the table, so a mount-only effect
     would silently do nothing the second time. */
  useEffect(() => {
    const openFromHash = () => {
      const wanted = window.location.hash.replace("#e-", "");
      if (!wanted) return;
      if (!entries.some((entry) => entry.index === wanted)) return;

      setOpen(wanted);
      const row = bodyRef.current?.querySelector<HTMLElement>(
        `[data-index="${wanted}"] [data-row]`
      );
      row?.scrollIntoView({ block: "center" });
      row?.focus({ preventScroll: true });
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [entries]);

  const onKeyDown = (event: React.KeyboardEvent<HTMLTableSectionElement>) => {
    const keys = ["ArrowDown", "ArrowUp", "j", "k", "Home", "End"];
    if (!keys.includes(event.key)) return;

    const rows = Array.from(
      bodyRef.current?.querySelectorAll<HTMLButtonElement>("[data-row]") ?? []
    );
    if (rows.length === 0) return;

    const current = rows.indexOf(document.activeElement as HTMLButtonElement);
    if (current === -1) return;

    event.preventDefault();
    const next =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? rows.length - 1
          : event.key === "ArrowDown" || event.key === "j"
            ? Math.min(current + 1, rows.length - 1)
            : Math.max(current - 1, 0);

    rows[next]?.focus();
  };

  return (
    <table className="w-full border-collapse text-left">
      <caption className="sr-only">
        A list of projects. Each row shows what happened to it and how much of
        it Dhanush built himself. Use the arrow keys to move between rows.
      </caption>

      <thead>
        <tr className="border-b border-ink">
          <th scope="col" className="label py-3 pr-4 font-normal">
            Idx
          </th>
          <th scope="col" className="label py-3 pr-4 font-normal">
            Subject
          </th>
          <th
            scope="col"
            className="label hidden py-3 pr-4 font-normal md:table-cell"
          >
            Surface
          </th>
          <th
            scope="col"
            className="label hidden py-3 pr-4 font-normal lg:table-cell"
          >
            Des/Imp
          </th>
          <th scope="col" className="label py-3 pr-4 font-normal">
            State
          </th>
          <th
            scope="col"
            className="label hidden py-3 text-right font-normal sm:table-cell"
          >
            Year
          </th>
        </tr>
      </thead>

      <tbody ref={bodyRef} onKeyDown={onKeyDown}>
        {entries.map((entry) => {
          const expanded = open === entry.index;
          const panelId = `entry-${entry.index}`;

          return (
            <Row
              key={entry.index}
              entry={entry}
              expanded={expanded}
              panelId={panelId}
              reduce={Boolean(reduce)}
              onToggle={() => setOpen(expanded ? null : entry.index)}
            />
          );
        })}
      </tbody>
    </table>
  );
}

function Row({
  entry,
  expanded,
  panelId,
  reduce,
  onToggle,
}: {
  entry: Entry;
  expanded: boolean;
  panelId: string;
  reduce: boolean;
  onToggle: () => void;
}) {
  const live = isLive(entry.state);

  return (
    <>
      <tr
        id={`e-${entry.index}`}
        data-index={entry.index}
        className={[
          "border-b border-hairline align-baseline transition-colors duration-150 motion-reduce:transition-none",
          "[&:has(button:hover)]:bg-raised [&:has(button:focus-visible)]:bg-raised",
          expanded ? "bg-raised" : "",
        ].join(" ")}
      >
        <td className="data py-4 pr-4 text-muted">{entry.index}</td>

        <th scope="row" className="py-4 pr-4 font-normal">
          <button
            type="button"
            data-row
            aria-expanded={expanded}
            aria-controls={panelId}
            onClick={onToggle}
            /* A row that expands on click has to look clickable. It did not:
               the button carried no cursor, so the pointer stayed an arrow
               over the one control on the row. */
            className="w-full cursor-pointer text-left"
          >
            <span className="font-display text-lg font-normal leading-tight text-ink md:text-xl">
              {entry.subject}
            </span>
            {/* The columns hidden on small screens, folded back in here. */}
            <span className="data mt-1 block text-muted md:hidden">
              {entry.surface} &middot; {entry.year}
            </span>
          </button>
        </th>

        <td className="data hidden py-4 pr-4 text-muted md:table-cell">
          {entry.surface}
        </td>

        <td className="hidden py-4 pr-4 lg:table-cell">
          {entry.delta ? (
            <Delta
              designed={entry.delta.designed}
              implemented={entry.delta.implemented}
            />
          ) : (
            <span className="data text-muted">&mdash;</span>
          )}
        </td>

        <td className="py-4 pr-4">
          <span className={live ? "data text-accent" : "data text-muted"}>
            {entry.state}
          </span>
        </td>

        <td className="data hidden py-4 text-right text-muted sm:table-cell">
          {entry.year}
        </td>
      </tr>

      <AnimatePresence initial={false}>
        {expanded && (
          <tr id={panelId} className="border-b border-hairline bg-raised">
            <td colSpan={6} className="p-0">
              <motion.div
                initial={reduce ? false : { height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="grid gap-6 py-6 pr-4 md:grid-cols-[4rem_1fr_auto] md:gap-8">
                  <span className="label hidden md:block">Note</span>

                  <div>
                    <p className="prose-body text-ink">{entry.summary}</p>
                    <p className="data mt-4 text-muted">
                      {entry.stack.join(" · ")}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 md:items-end">
                    {entry.delta && (
                      <div className="lg:hidden">
                        <Delta
                          designed={entry.delta.designed}
                          implemented={entry.delta.implemented}
                        />
                      </div>
                    )}
                    {entry.href ? (
                      /* Drawn as a control rather than as running text.
                         As a quiet underlined link this was the primary
                         action on the row and read like a footnote. */
                      <Link
                        href={entry.href}
                        className="inline-flex min-h-11 shrink-0 cursor-pointer items-center border border-ink px-5 text-[14px] text-ink transition-colors duration-150 hover:bg-ink hover:text-paper focus-visible:bg-ink focus-visible:text-paper motion-reduce:transition-none"
                      >
                        Read the case study
                        <span className="sr-only"> — {entry.subject}</span>
                      </Link>
                    ) : (
                      <p className="label">Case study not yet written</p>
                    )}
                  </div>
                </div>
              </motion.div>
            </td>
          </tr>
        )}
      </AnimatePresence>
    </>
  );
}
