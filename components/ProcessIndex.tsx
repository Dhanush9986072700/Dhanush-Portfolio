"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";

/* ---------------------------------------------------------------------------
   PROCESS INDEX

   A chart annotation in the right margin: all five points visible at once
   while you read, with the one you are currently in marked.

   Fixed rather than sticky, and that is the whole point. A sticky element has
   to sit in the document flow, which would mean putting the passages into a
   grid column and changing the width of the reading column. Fixed is out of
   flow, so the measure and left edge of the prose cannot move — and it is how
   the left margin rail already works.

   Which passage you are reading is a true live fact, so the active item is
   allowed mulberry. Nothing else here takes colour.

   Below 1280px there is no right margin to annotate, so it is display:none —
   out of the tab order, out of the accessibility tree, and costing no layout.
--------------------------------------------------------------------------- */

export type IndexItem = { n: string; short: string; id: string };

export default function ProcessIndex({ items }: { items: IndexItem[] }) {
  const [active, setActive] = useState<string | null>(null);
  const visible = useRef<Set<string>>(new Set());

  useEffect(() => {
    const nodes = items
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => node !== null);

    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (records) => {
        for (const record of records) {
          if (record.isIntersecting) visible.current.add(record.target.id);
          else visible.current.delete(record.target.id);
        }

        /* Topmost in document order wins. An empty set means the reader is
           above the first passage or below the last, and nothing is marked —
           better than claiming a position they are not in. */
        const current = items.find((item) => visible.current.has(item.id));
        setActive(current ? current.id : null);
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="The five points"
      className="fixed right-8 top-1/2 z-30 hidden w-56 -translate-y-1/2 border-l border-hairline pl-4 xl:block"
    >
      <ol>
        {items.map((item) => {
          const current = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={current ? "location" : undefined}
                className="flex items-start gap-2 py-2"
              >
                <span
                  aria-hidden
                  className={[
                    "shrink-0 pt-[0.15rem] transition-opacity duration-150 motion-reduce:transition-none",
                    current ? "text-accent" : "opacity-0",
                  ].join(" ")}
                >
                  <Icon name="current" className="h-3 w-3" />
                </span>

                <span
                  className={[
                    "data shrink-0",
                    current ? "text-accent" : "text-muted",
                  ].join(" ")}
                >
                  {item.n}
                </span>

                <span
                  className={[
                    "label leading-[1.5]",
                    current ? "text-accent" : "text-muted",
                  ].join(" ")}
                >
                  {item.short}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
