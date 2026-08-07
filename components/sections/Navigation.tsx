"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site";

const navLinks = [
  { href: "/",        label: "Home"    },
  { href: "/work",    label: "Works"   },
  { href: "/about",   label: "About"   },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [scrolled,     setScrolled]     = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const pathname           = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  /* ── Scroll listener ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Mobile scroll-lock ── */
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMobileOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Header ── */}
      <motion.header
        initial={false}
        animate={shouldReduceMotion ? undefined : { y: [-12, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="fixed inset-x-0 top-0 z-50"
        style={{
          paddingTop: 16,
          /* Subtle bg when scrolled so content behind is masked */
          background: scrolled ? "rgba(250,250,250,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          transition: "background 0.35s ease, backdrop-filter 0.35s ease",
        }}
      >
        <div className="container-wide flex items-center justify-between gap-4" style={{ height: 64 }}>

          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="focus-ring shrink-0 flex items-center gap-2"
          >
            <motion.span
              animate={{ background: scrolled ? "#111" : "#111" }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 32,
                height: 32,
                borderRadius: 10,
                background: "#111",
                color: "#fff",
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.04em",
              }}
            >
              DN
            </motion.span>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 14,
                fontWeight: 600,
                color: "#111",
                letterSpacing: "-0.02em",
              }}
              className="hidden sm:block"
            >
              Dhanush N.
            </span>
          </Link>

          {/* Desktop pill nav — transparent at top, white pill when scrolled */}
          <nav
            className="hidden lg:flex items-center relative"
            style={{
              background: scrolled ? "#fff" : "rgba(255,255,255,0.0)",
              borderRadius: 24,
              boxShadow: scrolled
                ? "0px 5px 20px 0px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)"
                : "none",
              height: 48,
              padding: 4,
              gap: 2,
              transition: "background 0.35s ease, box-shadow 0.35s ease",
            }}
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="focus-ring flex items-center justify-center"
                  style={{
                    height: 40,
                    padding: "0 18px",
                    fontSize: 14,
                    fontWeight: 500,
                    fontFamily: "var(--font-display)",
                    color: active ? "#fff" : "#4d4d4d",
                    background: active ? "rgb(250,108,56)" : "transparent",
                    borderRadius: 96,
                    whiteSpace: "nowrap",
                    letterSpacing: "-0.01em",
                    transition: "background 0.2s, color 0.2s",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right — Resume + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring hidden sm:inline-flex items-center gap-1.5 text-white transition-opacity hover:opacity-80"
              style={{
                background: "#111",
                borderRadius: 96,
                height: 40,
                padding: "0 18px",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "var(--font-display)",
                letterSpacing: "-0.01em",
              }}
            >
              Resume
              <ArrowUpRight size={13} />
            </a>

            <button
              type="button"
              className="tap-target focus-ring flex items-center justify-center border border-black/[0.1] bg-white text-black/60 shadow-sm transition hover:border-black/20 hover:text-black lg:hidden"
              style={{ width: 40, height: 40, borderRadius: 20 }}
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>

        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-x-0 top-[80px] z-40 border-b border-black/[0.07] bg-white/96 backdrop-blur-xl lg:hidden"
            style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}
          >
            <nav className="container-wide py-5 grid gap-0">
              {navLinks.map((link, i) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="focus-ring flex items-center gap-5 border-b border-black/[0.06] py-4"
                  >
                    <span className="label w-7 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        letterSpacing: "-0.025em",
                        color: active ? "rgb(250,108,56)" : "#111",
                      }}
                    >
                      {link.label}
                    </span>
                  </Link>
                );
              })}
              <a
                href={siteConfig.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="focus-ring flex items-center gap-5 pt-5"
              >
                <span className="label w-7 shrink-0">05</span>
                <span
                  className="inline-flex items-center gap-2"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#111",
                    letterSpacing: "-0.025em",
                  }}
                >
                  Resume <ArrowUpRight size={20} />
                </span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
