"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={false}
        animate={shouldReduceMotion ? undefined : { y: [-12, 0], opacity: [0.01, 1] }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/[0.08] bg-black/82 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto] items-center gap-5 px-5 sm:px-7 lg:grid-cols-[1fr_auto_1fr] lg:px-10">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="focus-ring w-fit rounded-sm font-mono text-[11px] font-semibold uppercase leading-tight text-white"
          >
            Dhanush N.
            <span className="block font-normal text-white/32">Product design + code</span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link text-sm">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center justify-end gap-4 lg:flex">
            <span className="flex items-center gap-2 font-mono text-[11px] uppercase text-white/35">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[#c9ff6a]" />
              Open to senior roles
            </span>
            <a
              href={siteConfig.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-1 rounded-sm font-mono text-[11px] uppercase text-white/45 transition-colors hover:text-white"
            >
              Resume
              <ArrowUpRight size={12} />
            </a>
          </div>

          <button
            type="button"
            className="tap-target focus-ring inline-flex items-center justify-center justify-self-end rounded-full border border-white/[0.12] text-white/70 transition-colors hover:border-white/30 hover:text-white lg:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            id="mobile-navigation"
            initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            className="fixed inset-x-0 top-16 z-40 border-b border-white/[0.08] bg-black/95 px-5 py-6 backdrop-blur-xl lg:hidden"
          >
            <nav className="grid gap-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="focus-ring grid grid-cols-[2rem_1fr] border-t border-white/[0.08] py-4 text-white"
                >
                  <span className="font-mono text-xs text-white/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-2xl font-semibold">{link.label}</span>
                </Link>
              ))}
              <a
                href={siteConfig.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="focus-ring grid grid-cols-[2rem_1fr] border-y border-white/[0.08] py-4 text-white"
              >
                <span className="font-mono text-xs text-white/30">04</span>
                <span className="inline-flex items-center gap-2 text-2xl font-semibold">
                  Resume
                  <ArrowUpRight size={18} />
                </span>
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
