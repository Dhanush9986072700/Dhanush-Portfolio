import { testimonials } from "@/data/testimonials";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Testimonials() {
  const featured = testimonials.find((t) => t.featured);
  const supporting = testimonials.filter((t) => !t.featured);

  return (
    <Section className="overflow-hidden border-t border-black/[0.06]">
      <Container size="lg">

        {/* Header */}
        <ScrollReveal className="mb-14">
          <div className="flex flex-col gap-5 border-b border-black/[0.08] pb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest mb-5" style={{ color: "rgba(17,17,17,0.28)" }}>
                05 / Social proof
              </p>
              <h2 className="text-[2.75rem] font-black leading-[0.88] text-[#111] sm:text-[4rem] lg:text-[5rem]">
                In their words.
              </h2>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-widest self-end pb-2" style={{ color: "rgba(17,17,17,0.28)" }}>
              References available on request
            </p>
          </div>
        </ScrollReveal>

        {/* Featured quote — full width editorial pull */}
        {featured && (
          <ScrollReveal delay={0.08} className="mb-3">
            <figure className="relative border border-black/[0.07] bg-black/[0.018] p-8 sm:p-12 lg:p-16 group hover:border-black/[0.14] transition-colors duration-300">

              {/* Large decorative quote mark */}
              <span
                className="absolute top-6 left-8 sm:top-8 sm:left-10 font-display text-[5rem] sm:text-[7rem] leading-none select-none pointer-events-none"
                style={{ color: "rgba(249,115,22,0.12)" }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <blockquote className="relative z-10">
                <p
                  className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-[1.35] text-[#111] max-w-4xl"
                  style={{ color: "rgba(17,17,17,0.88)" }}
                >
                  &ldquo;{featured.quote}&rdquo;
                </p>
              </blockquote>

              <figcaption className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-black/[0.07] pt-6">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div
                    className="h-9 w-9 flex-shrink-0 flex items-center justify-center rounded-full font-mono text-xs font-black"
                    style={{ background: "rgba(249,115,22,0.1)", color: "#F97316" }}
                  >
                    {featured.initials}
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-widest" style={{ color: "#F97316" }}>
                      {featured.name}
                    </p>
                    <p className="font-mono text-[10px] uppercase mt-0.5" style={{ color: "rgba(17,17,17,0.32)" }}>
                      {featured.role} · {featured.company}
                    </p>
                  </div>
                </div>
                <span
                  className="font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 border rounded-sm"
                  style={{
                    color: "rgba(17,17,17,0.30)",
                    borderColor: "rgba(17,17,17,0.08)",
                  }}
                >
                  {featured.project}
                </span>
              </figcaption>
            </figure>
          </ScrollReveal>
        )}

        {/* Supporting quotes — side by side */}
        <div className="grid gap-3 sm:grid-cols-2">
          {supporting.map((t, index) => (
            <ScrollReveal key={t.id} delay={0.12 + index * 0.1}>
              <figure className="flex flex-col justify-between border border-black/[0.07] bg-black/[0.012] p-6 sm:p-8 min-h-[220px] group hover:border-black/[0.14] transition-colors duration-300">

                {/* Quote */}
                <blockquote className="mb-8">
                  <span
                    className="font-display text-3xl leading-none block mb-3 select-none"
                    style={{ color: index === 0 ? "rgba(249,115,22,0.20)" : "rgba(249,115,22,0.20)" }}
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>
                  <p className="text-sm leading-relaxed sm:text-[0.9375rem]" style={{ color: "rgba(17,17,17,0.72)" }}>
                    {t.quote}
                  </p>
                </blockquote>

                {/* Attribution */}
                <figcaption className="flex items-center justify-between border-t border-black/[0.07] pt-4">
                  <div>
                    <p
                      className="font-mono text-[10px] uppercase tracking-widest"
                      style={{ color: index === 0 ? "rgba(249,115,22,0.75)" : "rgba(249,115,22,0.75)" }}
                    >
                      {t.name}
                    </p>
                    <p className="font-mono text-[9px] uppercase mt-0.5" style={{ color: "rgba(17,17,17,0.28)" }}>
                      {t.role} · {t.company}
                    </p>
                  </div>
                  <span className="font-mono text-lg font-black" style={{ color: "rgba(17,17,17,0.12)" }}>
                    {t.initials}
                  </span>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>

        {/* Footnote */}
        <ScrollReveal delay={0.3}>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-widest" style={{ color: "rgba(17,17,17,0.22)" }}>
            * From the XIPHIAS team — written references available on request
          </p>
        </ScrollReveal>

      </Container>
    </Section>
  );
}
