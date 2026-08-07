"use client";

import Image from "next/image";
import { Heart, Wrench, Users } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Container from "@/components/ui/Container";

function ToolDot({ label, bg, color = "#fff" }: { label: string; bg: string; color?: string }) {
  return (
    <span
      style={{
        width: 32,
        height: 32,
        borderRadius: "50%",
        background: bg,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 9,
        fontWeight: 700,
        fontFamily: "var(--font-mono)",
        color,
        flexShrink: 0,
      }}
    >
      {label}
    </span>
  );
}

const h3: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "1.0625rem",
  fontWeight: 700,
  color: "#111",
  letterSpacing: "-0.02em",
  marginBottom: "0.4rem",
};

const body: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "0.8125rem",
  lineHeight: 1.7,
  color: "rgba(17,17,17,0.50)",
};

const card: React.CSSProperties = {
  borderRadius: 14,
  border: "1px solid rgba(0,0,0,0.06)",
  background: "#fff",
  overflow: "hidden",
};

export default function Capabilities() {
  return (
    <section style={{ background: "#fff", paddingBlock: "6rem" }}>
      <Container size="xl">

        {/* Header */}
        <ScrollReveal>
          <div
            className="flex flex-col sm:flex-row sm:items-start sm:justify-between"
            style={{ marginBottom: "2rem", gap: "1.5rem" }}
          >
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 3.8vw, 2.625rem)",
                fontWeight: 700,
                color: "#111",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                maxWidth: "28rem",
              }}
            >
              Professional services that highlight my expertise.
            </h2>
            <p
              style={{
                ...body,
                fontSize: "0.9375rem",
                maxWidth: "22rem",
                lineHeight: 1.75,
                paddingTop: "0.25rem",
              }}
            >
              From creative design to technical solutions, my services set the standard for industry excellence.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento */}
        <ScrollReveal delay={0.12}>
          <div
            style={{
              background: "#F8F8F8",
              borderRadius: 24,
              padding: 12,
              border: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            {/* Desktop: 3 explicit flex columns */}
            <div className="hidden md:flex gap-3" style={{ alignItems: "stretch" }}>

              {/* Col 1 — User Research (full column height) */}
              <div style={{ flex: 1, ...card, display: "flex", flexDirection: "column" }}>
                <div style={{ position: "relative", height: 250, background: "#e8e8e8", flexShrink: 0 }}>
                  <Image
                    src="/case-studies/xiphias/screen-1.jpg"
                    alt="User Research"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3 style={{ ...h3, fontSize: "1.125rem" }}>User Research</h3>
                  <p style={{ ...body, flex: 1 }}>
                    I specialize in crafting intuitive and engaging experiences by conducting thorough user research, creating detailed wireframes, designing visually appealing interfaces, and performing usability testing to ensure the final product meets users&apos; needs.
                  </p>
                  <div style={{ display: "flex", gap: 8, marginTop: "1.25rem" }}>
                    <ToolDot label="Mz" bg="#f5c518" color="#0a0a0a" />
                    <ToolDot label="Ow" bg="#4895EF" />
                  </div>
                </div>
              </div>

              {/* Col 2 — Industry card + Wireframing card */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>

                {/* Industry experience */}
                <div
                  style={{
                    ...card,
                    padding: "1.5rem",
                    background: "rgba(249,115,22,0.05)",
                    borderColor: "rgba(249,115,22,0.12)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.0625rem",
                      fontWeight: 700,
                      color: "#111",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.3,
                      marginBottom: "0.5rem",
                    }}
                  >
                    I have experience working across diverse industries
                  </p>
                  <p style={{ ...body, marginBottom: "1rem" }}>
                    Including Immigration, Healthcare, Hospitality, E-commerce, EdTech, and SaaS.
                  </p>
                  <div style={{ display: "flex", gap: 12 }}>
                    <Heart size={20} strokeWidth={1.5} style={{ color: "rgba(17,17,17,0.30)" }} />
                    <Wrench size={20} strokeWidth={1.5} style={{ color: "rgba(17,17,17,0.30)" }} />
                    <Users size={20} strokeWidth={1.5} style={{ color: "rgba(17,17,17,0.30)" }} />
                  </div>
                </div>

                {/* Wireframing & Prototyping */}
                <div style={{ ...card, padding: "1.25rem", flex: 1 }}>
                  <h3 style={h3}>Wireframing and Prototyping</h3>
                  <p style={{ ...body, marginBottom: "1rem" }}>
                    I create wireframes, interactive prototypes, user flows, and information architecture diagrams to design seamless and intuitive user experiences.
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 6, borderRadius: 10, overflow: "hidden" }}>
                    {[
                      "/case-studies/asta/screen-1.png",
                      "/case-studies/asta/screen-2.png",
                      "/case-studies/asta/screen-3.png",
                    ].map((src, i) => (
                      <div key={i} style={{ position: "relative", height: 130, borderRadius: 8, overflow: "hidden" }}>
                        <Image src={src} alt="Wireframe" fill className="object-cover object-top" />
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Col 3 — UI & UX + Frontend */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>

                {/* UI & UX Design */}
                <div style={{ ...card, display: "flex", flexDirection: "column" }}>
                  <div style={{ position: "relative", height: 220, background: "#e8e8e8", flexShrink: 0 }}>
                    <Image
                      src="/case-studies/resort-app/screen-1.jpg"
                      alt="UI & UX Design"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div style={{ padding: "1.25rem" }}>
                    <h3 style={h3}>UI &amp; UX Design</h3>
                    <p style={{ ...body, marginBottom: "0.875rem" }}>
                      I create stunning visual designs that enhance user experiences with intuitive web and mobile interfaces.
                    </p>
                    <div style={{ display: "flex", gap: 8 }}>
                      <ToolDot label="Fg" bg="#7B61FF" />
                      <ToolDot label="Fr" bg="#0066FF" />
                    </div>
                  </div>
                </div>

                {/* Front-end Development */}
                <div style={{ ...card, padding: "1.25rem", flex: 1 }}>
                  <h3 style={h3}>Front-end Development</h3>
                  <p style={body}>
                    I have a solid grasp of HTML, CSS, React, and Next.js, enabling efficient front-end design implementation.
                  </p>
                </div>

              </div>
            </div>

            {/* Mobile: stacked */}
            <div className="flex flex-col gap-3 md:hidden">
              {[
                { title: "User Research", desc: "Thorough user research, wireframes, and usability testing to ensure the final product meets real user needs.", img: "/case-studies/xiphias/screen-1.jpg", badges: [{ label: "Mz", bg: "#f5c518", color: "#0a0a0a" }, { label: "Ow", bg: "#4895EF", color: "#fff" }] },
                { title: "UI & UX Design", desc: "Stunning visual designs that enhance user experiences with intuitive web and mobile interfaces.", img: "/case-studies/resort-app/screen-1.jpg", badges: [{ label: "Fg", bg: "#7B61FF", color: "#fff" }, { label: "Fr", bg: "#0066FF", color: "#fff" }] },
                { title: "Wireframing & Prototyping", desc: "Wireframes, interactive prototypes, user flows, and IA diagrams for seamless user experiences.", img: "/case-studies/asta/screen-1.png", badges: [] },
                { title: "Front-end Development", desc: "React, Next.js, and Tailwind CSS. I close the design–code gap by shipping the interfaces I design.", img: null, badges: [] },
              ].map(({ title, desc, img, badges }) => (
                <div key={title} style={{ ...card }}>
                  {img && (
                    <div style={{ position: "relative", height: 180, background: "#e8e8e8" }}>
                      <Image src={img} alt={title} fill className="object-cover object-top" />
                    </div>
                  )}
                  <div style={{ padding: "1.25rem" }}>
                    <h3 style={h3}>{title}</h3>
                    <p style={{ ...body, marginBottom: badges.length ? "0.875rem" : 0 }}>{desc}</p>
                    {badges.length > 0 && (
                      <div style={{ display: "flex", gap: 8 }}>
                        {badges.map(b => <ToolDot key={b.label} {...b} />)}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </ScrollReveal>

      </Container>
    </section>
  );
}
