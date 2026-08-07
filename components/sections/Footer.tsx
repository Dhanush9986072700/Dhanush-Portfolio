"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return <>{time}</>;
}

const socials = [
  { href: "https://www.behance.net/dhanush698", label: "Bé" },
  { href: "https://www.linkedin.com/in/dhanush-n-1290a61a6/", label: "in" },
];

export default function Footer() {
  return (
    <footer
      style={{ background: "#0f0f0f" }}
      className="relative z-10"
    >
      <Container size="xl">

        {/* ── Main: 2-column ── */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-12"
          style={{ paddingBlock: "4rem 3rem" }}
        >
          {/* Left — brand + tagline */}
          <div>
            {/* Monogram + name */}
            <div className="flex items-center gap-2.5" style={{ marginBottom: "1.5rem" }}>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 32,
                  height: 32,
                  borderRadius: 10,
                  background: "#fff",
                  color: "#111",
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  flexShrink: 0,
                }}
              >
                DN
              </span>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#fff",
                  letterSpacing: "-0.01em",
                }}
              >
                Dhanush N.
              </span>
            </div>

            {/* Tagline */}
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.9375rem",
                lineHeight: 1.8,
                color: "rgba(247,247,242,0.45)",
                maxWidth: "26rem",
              }}
            >
              Got a project, an exciting opportunity, or just feel like chatting?
              I&apos;m always up for a good conversation. I&apos;d love to hear from you! :)
            </p>
          </div>

          {/* Right — CTA + big email */}
          <div className="flex flex-col gap-5">
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.875rem",
                color: "rgba(247,247,242,0.40)",
              }}
            >
              Yay! We&apos;ve made it to the finish line. Say 👋 hi!
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="group focus-ring"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1rem, 2.4vw, 1.625rem)",
                fontWeight: 600,
                color: "#fff",
                letterSpacing: "-0.02em",
                textDecoration: "none",
                wordBreak: "break-all",
                lineHeight: 1.3,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.65")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <ArrowUpRight
                size={22}
                style={{ flexShrink: 0, color: "rgba(247,247,242,0.40)" }}
              />
              {siteConfig.email}
            </a>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingBlock: "1.25rem",
          }}
        >
          {/* Left: tagline + clock */}
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.8125rem",
              color: "rgba(247,247,242,0.38)",
            }}
          >
            Time is precious;{" "}
            <em style={{ color: "rgba(247,247,242,0.55)", fontStyle: "italic" }}>
              make the most of it.
            </em>
            {"   "}
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "rgba(247,247,242,0.28)",
                fontStyle: "normal",
              }}
            >
              <LiveClock />
            </span>
          </p>

          {/* Right: social icons */}
          <div style={{ display: "flex", gap: "0.625rem", alignItems: "center" }}>
            {socials.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring"
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  border: "1px solid rgba(255,255,255,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  fontWeight: 700,
                  color: "rgba(247,247,242,0.50)",
                  textDecoration: "none",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.35)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.12)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(247,247,242,0.50)";
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

      </Container>
    </footer>
  );
}
