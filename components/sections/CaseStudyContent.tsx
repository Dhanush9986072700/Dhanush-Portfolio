import Image from "next/image";
import type { ReactNode } from "react";
import type { Project, CaseStudyScreenAspect, Persona, ColorToken, TypographyItem } from "@/data/projects";
import ScrollReveal from "@/components/animations/ScrollReveal";
import AnimatedNumber from "@/components/ui/AnimatedNumber";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

interface Props {
  project: Project;
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-[10px] text-[#111]/25 tracking-widest uppercase mb-4">
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display text-3xl md:text-4xl text-[#111] mb-8 sm:mb-10 leading-tight text-balance">
      {children}
    </h2>
  );
}

const aspectClasses: Record<CaseStudyScreenAspect, string> = {
  wide: "aspect-[16/7]",
  desktop: "aspect-[16/10]",
  mobile: "aspect-[9/16] max-w-sm mx-auto",
};

function MediaFrame({
  title,
  image,
  alt,
  aspect = "desktop",
  label = "Screenshot pending",
}: {
  title: string;
  image?: string;
  alt?: string;
  aspect?: CaseStudyScreenAspect;
  label?: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-sm border border-black/[0.08] bg-[#F8F8F8] ${aspectClasses[aspect]}`}
    >
      {image ? (
        <Image
          src={image}
          alt={alt ?? title}
          fill
          sizes="(min-width: 1024px) 960px, 100vw"
          className="object-cover object-center"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.16) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="relative z-10">
            <p className="font-mono text-[10px] text-[#111]/30 tracking-widest uppercase mb-3">
              {label}
            </p>
            <p className="font-display text-2xl sm:text-3xl text-[#111]/20 leading-tight">
              {title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function PersonaCard({ persona, index }: { persona: Persona; index: number }) {
  const accentColor = index === 0 ? "#F97316" : "#F97316";
  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="border border-black/[0.08] bg-black/[0.02] p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-black/[0.06] pb-5 mb-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest mb-1" style={{ color: `${accentColor}80` }}>
              {persona.type}
            </p>
            <h3 className="text-xl font-black text-[#111] leading-none">{persona.name}</h3>
            <p className="font-mono text-xs mt-1" style={{ color: "rgba(17,17,17,0.42)" }}>
              {persona.age} · {persona.location}
            </p>
            <p className="font-mono text-[10px] mt-0.5" style={{ color: "rgba(17,17,17,0.32)" }}>
              {persona.role}
            </p>
          </div>
          <div
            className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-sm font-mono text-lg font-black"
            style={{ background: `${accentColor}14`, color: accentColor }}
          >
            {persona.name.charAt(0)}
          </div>
        </div>

        {/* Goals */}
        <div className="mb-5">
          <p className="font-mono text-[9px] uppercase tracking-widest mb-3" style={{ color: "rgba(17,17,17,0.25)" }}>
            Goals
          </p>
          <ul className="space-y-2">
            {persona.goals.map((goal, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: accentColor }} />
                <span className="text-xs leading-relaxed" style={{ color: "rgba(17,17,17,0.55)" }}>{goal}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Frustrations */}
        <div className="mb-5">
          <p className="font-mono text-[9px] uppercase tracking-widest mb-3" style={{ color: "rgba(17,17,17,0.25)" }}>
            Frustrations
          </p>
          <ul className="space-y-2">
            {persona.frustrations.map((f, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="mt-1.5 w-1 h-1 rounded-sm flex-shrink-0 bg-black/20" />
                <span className="text-xs leading-relaxed" style={{ color: "rgba(17,17,17,0.45)" }}>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quote */}
        <blockquote
          className="border-l-2 pl-4 mt-6"
          style={{ borderColor: `${accentColor}40` }}
        >
          <p className="text-sm italic leading-relaxed" style={{ color: "rgba(17,17,17,0.60)" }}>
            {persona.quote}
          </p>
        </blockquote>
      </div>
    </ScrollReveal>
  );
}

function ColorSwatch({ token }: { token: ColorToken }) {
  return (
    <div className="flex items-center gap-4 border border-black/[0.06] p-4">
      <div
        className="w-12 h-12 flex-shrink-0 rounded-sm border border-black/[0.08]"
        style={{ background: token.hex }}
        aria-label={`Colour swatch for ${token.name}`}
      />
      <div className="min-w-0">
        <p className="text-sm font-semibold text-[#111] leading-none mb-0.5">{token.name}</p>
        <p className="font-mono text-[10px] text-[#111]/35 mb-1.5">{token.hex}</p>
        <p className="text-xs leading-relaxed" style={{ color: "rgba(17,17,17,0.45)" }}>{token.usage}</p>
      </div>
    </div>
  );
}

function TypographyRow({ item, index }: { item: TypographyItem; index: number }) {
  return (
    <div className="border-t border-black/[0.06] py-6 grid lg:grid-cols-[1fr_auto_2fr] gap-3 lg:gap-10 items-start">
      <div>
        <p className="text-lg font-bold text-[#111] leading-none mb-1">{item.family}</p>
        <p className="font-mono text-[10px] text-[#111]/30">{item.weights}</p>
      </div>
      <p className="font-mono text-[10px] text-[#111]/20 tracking-widest uppercase lg:mt-1">
        {String(index + 1).padStart(2, "0")}
      </p>
      <p className="text-sm leading-relaxed" style={{ color: "rgba(17,17,17,0.55)" }}>
        {item.usage}
      </p>
    </div>
  );
}

export default function CaseStudyContent({ project }: Props) {
  const { caseStudy } = project;

  return (
    <>
      {/* Metrics */}
      <Section>
        <Container size="lg">
          <ScrollReveal>
            <SectionLabel>At a Glance</SectionLabel>
            {/* Large numbers side by side */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
              {caseStudy.metrics.map((metric, i) => (
                <div key={i}>
                  <div className="font-mono text-3xl sm:text-4xl md:text-5xl text-[#111] tabular-nums leading-none mb-2">
                    <AnimatedNumber
                      value={parseInt(metric.value.replace(/\D/g, "")) || 0}
                      suffix={metric.suffix ?? ""}
                      duration={1400}
                    />
                  </div>
                  <div className="font-mono text-xs text-[#111]/30 leading-relaxed max-w-[16ch]">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <hr className="rule" />
      </div>

      {/* The Brief */}
      <Section>
        <Container size="lg">
          <ScrollReveal>
            <SectionLabel>The Brief</SectionLabel>
            <SectionHeading>What we were solving</SectionHeading>
          </ScrollReveal>

          {/* Pull quote — large typographic element */}
          <ScrollReveal delay={0.1}>
            <blockquote className="mb-12">
              <p className="font-display text-2xl md:text-3xl lg:text-4xl text-[#111]/80 leading-snug italic max-w-3xl">
                {caseStudy.pullQuote}
              </p>
            </blockquote>
          </ScrollReveal>

          {/* Brief text + Goals side by side */}
          <div className="grid lg:grid-cols-[2fr_1fr] gap-10 lg:gap-12">
            <ScrollReveal delay={0.15}>
              <p className="text-[#111]/55 leading-relaxed text-[0.9375rem]">
                {caseStudy.brief}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <p className="font-mono text-[10px] text-[#111]/25 tracking-widest uppercase mb-5">
                  Goals
                </p>
                <ul className="space-y-4">
                  {caseStudy.goals.map((goal, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="font-mono text-xs text-[#111]/20 flex-shrink-0 mt-0.5 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm text-[#111]/50 leading-relaxed">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <hr className="rule" />
      </div>

      {/* Research */}
      <Section>
        <Container size="lg">
          <ScrollReveal>
            <SectionLabel>Research &amp; Discovery</SectionLabel>
            <SectionHeading>Understanding the problem</SectionHeading>
            <p className="text-[#111]/55 leading-relaxed text-[0.9375rem] max-w-2xl mb-12">
              {caseStudy.research.intro}
            </p>
          </ScrollReveal>

          {/* Research paragraphs */}
          <div className="space-y-5 mb-14 max-w-2xl">
            {caseStudy.research.paragraphs.map((para, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <p className="text-[#111]/45 leading-relaxed text-sm">{para}</p>
              </ScrollReveal>
            ))}
          </div>

          {/* Insights — numbered list, magazine sidebar style */}
          <ScrollReveal delay={0.15}>
            <p className="font-mono text-[10px] text-[#111]/25 tracking-widest uppercase mb-8">
              Key Insights
            </p>
            <div className="space-y-7">
              {caseStudy.research.insights.map((insight, i) => (
                <div key={i} className="flex items-start gap-4 sm:gap-6 border-t border-black/[0.06] pt-7">
                  <span className="font-mono text-2xl md:text-3xl text-[#111]/10 tabular-nums leading-none flex-shrink-0 w-10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[#111]/55 leading-relaxed text-[0.9375rem] max-w-xl">
                    {insight}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* Personas — only render when data exists */}
      {caseStudy.personas && caseStudy.personas.length > 0 && (
        <>
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <hr className="rule" />
          </div>
          <Section>
            <Container size="lg">
              <ScrollReveal>
                <SectionLabel>User Personas</SectionLabel>
                <SectionHeading>Who we designed for</SectionHeading>
              </ScrollReveal>
              <div className="grid gap-8 md:grid-cols-2">
                {caseStudy.personas.map((persona, i) => (
                  <PersonaCard key={i} persona={persona} index={i} />
                ))}
              </div>
            </Container>
          </Section>
        </>
      )}

      {/* Design System — only render when data exists */}
      {(caseStudy.colorPalette || caseStudy.typography) && (
        <>
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <hr className="rule" />
          </div>
          <Section tone="raised">
            <Container size="lg">
              <ScrollReveal>
                <SectionLabel>Design System</SectionLabel>
                <SectionHeading>Visual language &amp; tokens</SectionHeading>
              </ScrollReveal>

              {caseStudy.colorPalette && caseStudy.colorPalette.length > 0 && (
                <ScrollReveal delay={0.08}>
                  <div className="mb-14">
                    <p className="font-mono text-[10px] text-[#111]/25 tracking-widest uppercase mb-6">
                      Colour Palette
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {caseStudy.colorPalette.map((token) => (
                        <ColorSwatch key={token.hex} token={token} />
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {caseStudy.typography && caseStudy.typography.length > 0 && (
                <ScrollReveal delay={0.14}>
                  <p className="font-mono text-[10px] text-[#111]/25 tracking-widest uppercase mb-6">
                    Typography
                  </p>
                  <div className="space-y-0">
                    {caseStudy.typography.map((item, i) => (
                      <TypographyRow key={i} item={item} index={i} />
                    ))}
                  </div>
                </ScrollReveal>
              )}
            </Container>
          </Section>
        </>
      )}

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <hr className="rule" />
      </div>

      {/* Key Decisions */}
      <Section>
        <Container size="lg">
          <ScrollReveal>
            <SectionLabel>Key Decisions</SectionLabel>
            <SectionHeading>What we chose and why</SectionHeading>
          </ScrollReveal>

          {/* Vertical list, not a card grid */}
          <div className="space-y-0">
            {caseStudy.keyDecisions.map((decision, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="border-t border-black/[0.06] py-8 grid lg:grid-cols-[auto_1fr_2fr] gap-4 sm:gap-6 lg:gap-10">
                  <span className="font-mono text-2xl text-[#111]/10 tabular-nums leading-none w-10 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg text-[#111] leading-snug">
                    {decision.title}
                  </h3>
                  <p className="text-[#111]/45 text-sm leading-relaxed">
                    {decision.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Wireframes — only render when data exists */}
      {caseStudy.wireframes && caseStudy.wireframes.length > 0 && (
        <>
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <hr className="rule" />
          </div>
          <Section>
            <Container size="lg">
              <ScrollReveal>
                <SectionLabel>Structure &amp; Wireframes</SectionLabel>
                <SectionHeading>Lo-fi process &amp; IA decisions</SectionHeading>
                <p className="text-[#111]/45 text-[0.9375rem] leading-relaxed max-w-2xl mb-10">
                  Before any visual design, I mapped the information architecture, documented friction points in the existing site, and wireframed proposed structures for key flows.
                </p>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {caseStudy.wireframes.map((frame, i) => (
                  <ScrollReveal
                    key={i}
                    delay={i * 0.05}
                    className={frame.span === "full" ? "sm:col-span-2" : ""}
                  >
                    <div className="flex flex-col gap-2">
                      {/* Label pill */}
                      <span className="self-start font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 border border-black/[0.10] rounded-sm" style={{ color: "rgba(17,17,17,0.35)" }}>
                        {frame.label}
                      </span>

                      {/* Image — exact natural aspect ratio, zero leftover space */}
                      <div
                        className="relative w-full overflow-hidden rounded-sm border border-black/[0.08] bg-[#F8F8F8]"
                        style={{ aspectRatio: `${frame.imgW} / ${frame.imgH}` }}
                      >
                        <Image
                          src={frame.image}
                          alt={frame.title}
                          fill
                          sizes={frame.span === "full" ? "(min-width: 1024px) 960px, 100vw" : "(min-width: 640px) 50vw, 100vw"}
                          className="object-cover object-top"
                        />
                      </div>

                      {/* Compact caption */}
                      <p className="font-mono text-[10px] leading-relaxed" style={{ color: "rgba(17,17,17,0.38)" }}>
                        <span className="text-[#111]/20 mr-2">WF.{i + 1}</span>
                        {frame.caption}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </Container>
          </Section>
        </>
      )}

      {/* The Design */}
      <Section tone="raised">
        <Container size="lg">
          <ScrollReveal>
            <SectionLabel>The Design</SectionLabel>
            <SectionHeading>Selected screens &amp; decisions</SectionHeading>
          </ScrollReveal>

          {caseStudy.flow ? (
            <ScrollReveal delay={0.08}>
              <div className="mb-12">
                <MediaFrame
                  title={caseStudy.flow.title}
                  image={caseStudy.flow.image}
                  alt={`${project.title} product flow`}
                  aspect="wide"
                  label="Flow pending"
                />
                <div className="mt-4 max-w-2xl">
                  <p className="font-mono text-xs text-[#111]/25 italic">
                    Flow - {caseStudy.flow.caption}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ) : null}

          {caseStudy.beforeAfter ? (
            <ScrollReveal delay={0.12}>
              <div className="mb-12">
                <div className="grid md:grid-cols-2 gap-4">
                  <MediaFrame
                    title="Before"
                    image={caseStudy.beforeAfter.before}
                    alt={`${project.title} before state`}
                    aspect="desktop"
                    label="Before pending"
                  />
                  <MediaFrame
                    title="After"
                    image={caseStudy.beforeAfter.after}
                    alt={`${project.title} after state`}
                    aspect="desktop"
                    label="After pending"
                  />
                </div>
                <p className="font-mono text-xs text-[#111]/25 italic mt-4 max-w-2xl">
                  Before / After - {caseStudy.beforeAfter.caption}
                </p>
              </div>
            </ScrollReveal>
          ) : null}

          <div className="space-y-12">
            {(caseStudy.screens ?? []).map((screen, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div>
                  <MediaFrame
                    title={screen.title}
                    image={screen.image}
                    alt={screen.alt ?? `${project.title} - ${screen.title}`}
                    aspect={screen.aspect ?? "desktop"}
                  />
                  <div className="mt-4 grid md:grid-cols-[auto_1fr] gap-3 md:gap-6 max-w-3xl">
                    <p className="font-mono text-xs text-[#111]/25 italic whitespace-nowrap">
                      Fig. {i + 1}
                    </p>
                    <div>
                      <p className="text-sm text-[#111]/50 leading-relaxed">
                        {screen.caption}
                      </p>
                      {screen.decision ? (
                        <p className="text-xs text-[#111]/35 leading-relaxed mt-3 border-l border-black/[0.08] pl-4">
                          <span className="font-mono text-[#111]/25 tracking-widest uppercase">
                            Decision
                          </span>
                          <span className="text-[#111]/20"> - </span>
                          {screen.decision}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <hr className="rule" />
      </div>

      {/* Impact */}
      <Section>
        <Container size="lg">
          <ScrollReveal>
            <SectionLabel>Impact</SectionLabel>
            <SectionHeading>What this delivered</SectionHeading>
          </ScrollReveal>

          {/* Large numbers scattered across width */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {caseStudy.impact.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div>
                  <div className="font-mono text-5xl md:text-6xl text-[#111] leading-none mb-3">
                    {item.value}
                  </div>
                  <div className="text-sm font-medium text-[#111]/60 mb-1">
                    {item.label}
                  </div>
                  <div className="text-xs text-[#111]/30 leading-relaxed max-w-[22ch]">
                    {item.description}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <hr className="rule" />
      </div>

      {/* Reflection */}
      <Section>
        <Container size="lg">
          <ScrollReveal>
            <SectionLabel>Reflection</SectionLabel>
            <SectionHeading>Looking back</SectionHeading>
          </ScrollReveal>

          {/* Three questions, typographic hierarchy — no cards */}
          <div className="space-y-10 max-w-2xl">
            {[
              {
                label: "What I'm proud of",
                content: caseStudy.reflection.proud,
              },
              {
                label: "What I'd do differently",
                content: caseStudy.reflection.different,
              },
              {
                label: "What this taught me",
                content: caseStudy.reflection.learned,
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="border-t border-black/[0.06] pt-8">
                  <p className="font-mono text-[10px] text-[#111]/25 tracking-widest uppercase mb-4">
                    {item.label}
                  </p>
                  <p className="text-[#111]/55 leading-relaxed text-[0.9375rem]">
                    {item.content}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
