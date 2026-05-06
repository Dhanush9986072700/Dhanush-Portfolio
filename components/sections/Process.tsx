import { processSteps } from "@/data/process";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Process() {
  return (
    <Section tone="default" className="overflow-hidden">
      <Container size="lg">

        {/* Header */}
        <ScrollReveal className="mb-16">
          <div className="flex flex-col gap-6 border-b border-white/[0.08] pb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest mb-5" style={{ color: "rgba(247,247,242,0.28)" }}>
                04 / Process
              </p>
              <h2 className="text-[2.75rem] font-black leading-[0.88] text-white sm:text-[4rem] lg:text-[5rem]">
                From brief<br />to build.
              </h2>
            </div>
            <p className="max-w-[22rem] text-sm leading-relaxed sm:pb-2" style={{ color: "rgba(247,247,242,0.42)" }}>
              Five phases I run on every project. Not a waterfall — a loop. Each phase can pull me back to the one before it.
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop: horizontal flow — Mobile: vertical stack */}
        <StaggerContainer
          staggerDelay={0.1}
          initialDelay={0.1}
          className="hidden lg:grid lg:grid-cols-5"
        >
          {processSteps.map((step, index) => (
            <StaggerItem key={step.number}>
              <div className="group relative flex flex-col h-full border-l border-white/[0.06] px-6 py-8 transition-colors duration-300 hover:bg-white/[0.02] first:border-l-0">

                {/* Connector arrow between steps */}
                {index < processSteps.length - 1 && (
                  <span
                    className="absolute -right-3 top-8 z-10 font-mono text-[10px]"
                    style={{ color: "rgba(247,247,242,0.14)" }}
                    aria-hidden="true"
                  >
                    →
                  </span>
                )}

                {/* Number */}
                <span
                  className="font-mono text-[10px] tabular-nums mb-8 block"
                  style={{ color: "rgba(201,255,106,0.65)" }}
                >
                  {step.number}
                </span>

                {/* Title */}
                <h3 className="text-[1.5rem] font-black leading-none text-white mb-4 group-hover:text-white transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs leading-relaxed flex-1 mb-8" style={{ color: "rgba(247,247,242,0.44)" }}>
                  {step.description}
                </p>

                {/* Output tag */}
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px]" style={{ color: "rgba(243,168,65,0.7)" }}>→</span>
                  <span
                    className="font-mono text-[9px] uppercase tracking-widest"
                    style={{ color: "rgba(243,168,65,0.55)" }}
                  >
                    {step.output}
                  </span>
                </div>

                {/* Bottom accent line on hover */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#c9ff6a] transition-all duration-500 group-hover:w-full"
                  aria-hidden="true"
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Mobile: vertical list */}
        <div className="lg:hidden space-y-0">
          {processSteps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 0.08}>
              <article className="grid grid-cols-[auto_1fr] gap-6 border-t border-white/[0.07] py-8">

                {/* Left: number + connector */}
                <div className="flex flex-col items-center gap-2 pt-1">
                  <span
                    className="font-mono text-[10px] tabular-nums"
                    style={{ color: "rgba(201,255,106,0.65)" }}
                  >
                    {step.number}
                  </span>
                  {index < processSteps.length - 1 && (
                    <span
                      className="block w-px flex-1 min-h-[2rem]"
                      style={{ background: "rgba(247,247,242,0.07)" }}
                      aria-hidden="true"
                    />
                  )}
                </div>

                {/* Right: content */}
                <div>
                  <h3 className="text-2xl font-black leading-none text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(247,247,242,0.45)" }}>
                    {step.description}
                  </p>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px]" style={{ color: "rgba(243,168,65,0.7)" }}>→</span>
                    <span
                      className="font-mono text-[9px] uppercase tracking-widest"
                      style={{ color: "rgba(243,168,65,0.55)" }}
                    >
                      {step.output}
                    </span>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

      </Container>
    </Section>
  );
}
