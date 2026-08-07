import { Users, Pen, LayoutGrid } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import Container from "@/components/ui/Container";

const services = [
  {
    Icon: Users,
    title: "User Research",
    body: "Conduct user research, heuristic evaluations, usability testing & A/B testing to analyze and improve UX.",
  },
  {
    Icon: Pen,
    title: "UI/UX Design",
    body: "Design intuitive, visually appealing interfaces focused on user needs and brand consistency.",
  },
  {
    Icon: LayoutGrid,
    title: "Wireframe & Prototype",
    body: "Create low-fidelity wireframes and high-fidelity interactive prototypes to visualize and test design concepts.",
  },
];

export default function DesignPrinciples() {
  return (
    <section style={{ background: "#F5F5F5", paddingBlock: "6rem" }}>
      <Container size="lg">

        {/* Heading */}
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 700,
                color: "#111",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                marginBottom: "1.1rem",
              }}
            >
              What Can I Do
            </h2>
            <p
              style={{
                maxWidth: "38rem",
                margin: "0 auto",
                fontFamily: "var(--font-display)",
                fontSize: "0.9375rem",
                lineHeight: 1.75,
                color: "rgba(17,17,17,0.50)",
              }}
            >
              Craft seamless, user-centered digital experiences by combining research, design, and prototyping to enhance usability and engagement.
            </p>
          </div>
        </ScrollReveal>

        {/* 3-card row */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {services.map(({ Icon, title, body }) => (
            <StaggerItem key={title}>
              <div
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  padding: "2rem",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.05), 0 4px 20px rgba(0,0,0,0.04)",
                  height: "100%",
                }}
              >
                <Icon
                  size={32}
                  strokeWidth={1.5}
                  style={{ color: "rgba(17,17,17,0.30)", marginBottom: "1.5rem" }}
                />
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.0625rem",
                    fontWeight: 700,
                    color: "#111",
                    letterSpacing: "-0.01em",
                    marginBottom: "0.625rem",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.875rem",
                    lineHeight: 1.7,
                    color: "rgba(17,17,17,0.50)",
                  }}
                >
                  {body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </Container>
    </section>
  );
}
