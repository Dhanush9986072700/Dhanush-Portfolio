"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import { NAV } from "@/data/nav";

/* ---------------------------------------------------------------------------
   MOBILE MENU

   A full sheet over the page, obeying the same rules as everything else:
   paper, one raised surface, hairlines, no radius, no shadow. Mulberry marks
   one thing only — the page you are currently on.

   Behaviour: focus moves in on open and is trapped until close; Escape closes
   and returns focus to the toggle; any link closes it; the page behind cannot
   scroll while it is open. Every row is a full-width target well over 44px.
--------------------------------------------------------------------------- */

export default function MobileMenu({
  open,
  onClose,
  pathname,
  returnFocusTo,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
  returnFocusTo: React.RefObject<HTMLButtonElement | null>;
}) {
  const panel = useRef<HTMLDivElement>(null);

  /* Focus in, trap, and Escape. */
  useEffect(() => {
    if (!open) return;

    const node = panel.current;
    if (!node) return;

    const focusable = () =>
      Array.from(
        node.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );

    /* Land on the first destination, not on Close. Someone who opened a menu
       wants to go somewhere; Close is one Shift+Tab away. */
    const firstLink = node.querySelector<HTMLElement>("nav a[href]");
    (firstLink ?? focusable()[0])?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        returnFocusTo.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const items = focusable();
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;

      /* Wrap at both ends so focus can never escape the sheet. */
      if (event.shiftKey && (active === first || !node.contains(active))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose, returnFocusTo]);

  /* Hold the page still underneath. */
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      ref={panel}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className="fixed inset-0 z-50 flex flex-col bg-paper lg:hidden"
    >
      <div className="flex items-center justify-between border-b border-ink px-5 py-3">
        <span className="data text-[13px] tracking-[0.16em] text-ink">
          Dhanush
        </span>
        <button
          type="button"
          onClick={() => {
            onClose();
            returnFocusTo.current?.focus();
          }}
          className="data -mr-2 flex min-h-11 min-w-11 items-center justify-end gap-2.5 px-2 text-muted"
        >
          <Icon name="close" />
          Close
        </button>
      </div>

      <nav aria-label="Primary" className="flex-1 overflow-y-auto">
        <ul>
          {NAV.map((item) => {
            const current = pathname === item.href;
            return (
              <li key={item.href} className="border-b border-hairline">
                <Link
                  href={item.href}
                  onClick={onClose}
                  aria-current={current ? "page" : undefined}
                  className="flex min-h-11 items-center gap-4 px-5 py-6"
                >
                  <span
                    className={current ? "text-accent" : "opacity-0"}
                    aria-hidden
                  >
                    <Icon name="current" className="h-3 w-3" />
                  </span>
                  <span className="data text-muted">{item.number}</span>
                  <span
                    className={[
                      "font-display text-3xl font-light leading-none",
                      current ? "text-accent" : "text-ink",
                    ].join(" ")}
                  >
                    {item.label}
                  </span>
                  {current && (
                    <span className="data ml-auto text-accent">Here</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
