import ScrollReveal from "@/components/animations/ScrollReveal";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const principles = [
  {
    number: "01",
    keyword: "Constraints",
    title: "Constraints are the brief.",
    body: "Every project arrives with limits — time, budget, legacy code, stakeholder politics. I stopped treating them as friction early on. Constraints collapse the solution space: instead of choosing from infinite options, you're choosing from three. The interesting design happens inside the constraint, not around it.",
    accent: "#c9ff6a",
  },
  {
    number: "02",
    keyword: "Systems",
    title: "One token, not ten components.",
    body: "A mature design system isn't measured by component count — it's measured by how rarely you need to add one. I build token-first: primitives → semantic → theme. When the token layer is right, new components are obvious. When it isn't, every screen becomes a negotiation.",
    accent: "#f3a841",
  },
  {
    number: "03",
    keyword: "Shipping",
    title: "Design ends at the metrics dashboard.",
    body: "I set success criteria before I open Figma. Then I ship. Then I wait 90 days and look at the numbers. The work isn't done at handoff — it starts there. The best design research happens in production, on real devices, with real users who weren't recruited.",
    accent: "#c9ff6a",
  },
  {
    number: "04",
    keyword: "Legibility",
    title: "Legibility is a trust signal.",
    body: "WCAG AAA isn't a compliance checkbox — it's a statement about who the product is for. Every contrast ratio, every focus state, every type scale decision signals whether this product respects its users. I build accessibility from token zero because the people who suffer most from inaccessible design are the most likely to leave and the least likely to tell you why.",
    accent: "#f3a841",
  },
];

export default function DesignPrinciples() {
  return (
    <Section className="overflow-hidden border-y border-white/[0.06] bg-white/[0.015]">
      <Container size="lg">

        {/* Header */}
        <ScrollReveal className="mb-16">
          <div className="flex flex-col gap-6 border-b border-white/[0.08] pb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest mb-5" style={{ color: "rgba(247,247,242,0.28)" }}>
                03 / Design Philosophy
              </p>
              <h2 className="text-[2.75rem] font-black leading-[0.88] text-white sm:text-[4rem] lg:text-[5rem]">
                Positions, not<br />best practices.
              </h2>
            </div>
            <p className="max-w-[22rem] text-sm leading-relaxed sm:pb-2" style={{ color: "rgba(247,247,242,0.42)" }}>
              Four things I won't compromise on. Formed over four years of shipping products that had to work, not just look right.
            </p>
          </div>
        </ScrollReveal>

        {/* Principles — 2-col grid on desktop */}
        <div className="grid gap-px sm:grid-cols-2 border border-white/[0.06] bg-white/[0.06]">
          {principles.map((p, index) => (
            <ScrollReveal key={p.number} delay={index * 0.1}>
              <article className="group relative flex flex-col justify-between gap-10 bg-[#020202] p-8 sm:p-10 min-h-[320px] transition-colors duration-300 hover:bg-white/[0.022]">

                {/* Top: number + keyword */}
                <div className="flex items-start justify-between">
                  <span
                    className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded-sm border"
                    style={{
                      color: p.accent,
                      borderColor: `${p.accent}30`,
                      background: `${p.accent}0a`,
                    }}
                  >
                    {p.keyword}
                  </span>
                  <span
                    className="font-mono text-xs tabular-nums"
                    style={{ color: "rgba(247,247,242,0.18)" }}
                  >
                    {p.number}
                  </span>
                </div>

                {/* Bottom: title + body */}
                <div>
                  <h3 className="text-2xl font-black leading-[1.05] text-white mb-4 sm:text-[1.65rem]">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(247,247,242,0.50)" }}>
                    {p.body}
                  </p>
                </div>

                {/* Accent line on hover */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
                  style={{ background: p.accent }}
                  aria-hidden="true"
                />
              </article>
            </ScrollReveal>
          ))}
        </div>

      </Container>
    </Section>
  );
}
