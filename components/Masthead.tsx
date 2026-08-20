"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "@/components/MobileMenu";
import Icon from "@/components/Icon";
import { NAV } from "@/data/nav";

/* Wordmark left, navigation right. The name is the only thing on the left —
   what Dhanush does belongs in the page, not shouted in the header.

   Two micro-interactions, both carrying a fact: the caret and mulberry mark
   the page you are on, and hovering an item reveals its position in the set.
   The number's space is reserved at all times so the nav never reflows under
   the cursor. */
export default function Masthead() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  /* A route change closes the menu — including a back/forward navigation,
     which never fires the link's own click handler. */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="border-b border-ink">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-x-8 px-5 py-3 md:px-10">
        <Link
          href="/"
          className="flex min-h-11 items-center py-1"
          aria-label="Dhanush — home"
        >
          <span className="data text-[13px] tracking-[0.16em] text-ink">
            Dhanush
          </span>
        </Link>

        {/* Desktop */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {NAV.map((item) => {
              const current = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className="group flex min-h-11 items-center gap-2"
                  >
                    <span
                      className={[
                        "shrink-0 transition-opacity duration-150 motion-reduce:transition-none",
                        current ? "text-accent" : "opacity-0",
                      ].join(" ")}
                    >
                      <Icon name="current" className="h-3 w-3" />
                    </span>

                    <span
                      className={[
                        "label link",
                        current ? "text-accent" : "text-muted",
                      ].join(" ")}
                    >
                      {item.label}
                    </span>

                    {/* The fact the hover reveals: where this page sits. */}
                    <span
                      aria-hidden
                      className="data w-5 shrink-0 text-muted opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none"
                    >
                      {item.number}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile */}
        <button
          ref={toggle}
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="data -mr-2 flex min-h-11 min-w-11 items-center justify-end gap-2.5 px-2 text-muted lg:hidden"
        >
          <Icon name="menu" />
          Menu
        </button>
      </div>

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
        pathname={pathname}
        returnFocusTo={toggle}
      />
    </header>
  );
}
