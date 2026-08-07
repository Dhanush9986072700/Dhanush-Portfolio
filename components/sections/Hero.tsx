"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

/* ── Rolling tag ── */
const TAGS = [
  "Product Designer",
  "UX / UI Expert",
  "Frontend Developer",
  "Design Systems",
];

function RollingTag() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % TAGS.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 24,
        width: 220,
        height: 32,
        padding: "0 12px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
      }}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0,      opacity: 1 }}
          exit={{   y: "-100%", opacity: 0 }}
          transition={{ duration: 0.38, ease: [0.32, 0.72, 0, 1] }}
          style={{
            display: "block",
            textAlign: "center",
            fontSize: 14,
            fontWeight: 500,
            color: "#4d4d4d",
            whiteSpace: "nowrap",
            fontFamily: "var(--font-display)",
          }}
        >
          {TAGS[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

/* ── Circular scroll badge (flip card back face) ── */
function CircularBadge() {
  return (
    <div style={{ position: "relative", width: 190, height: 190, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <motion.svg
        width={190}
        height={190}
        viewBox="0 0 190 190"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{ position: "absolute", inset: 0 }}
      >
        <defs>
          <path
            id="circle-path"
            d="M 95,95 m -68,0 a 68,68 0 1,1 136,0 a 68,68 0 1,1 -136,0"
          />
        </defs>
        <text
          style={{
            fontSize: 10.5,
            fontFamily: "var(--font-jetbrains)",
            fill: "#111",
            letterSpacing: "0.14em",
          }}
        >
          <textPath href="#circle-path">
            ★ SCROLL DOWN AND KNOW ME BETTER ★ SCROLL DOWN ★
          </textPath>
        </text>
      </motion.svg>
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: "50%",
          border: "1.5px solid rgba(17,17,17,0.22)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          zIndex: 10,
        }}
      >
        <ArrowDown size={20} color="#111" />
      </div>
    </div>
  );
}

/* ── 3D Flip Card ── */
function FlipCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      style={{ position: "relative", width: 280, height: 280, perspective: "900px", cursor: "pointer" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      {/* Floating glow shadow below card */}
      <div
        style={{
          position: "absolute",
          bottom: -24,
          left: "8%",
          right: "8%",
          height: 40,
          background: "rgba(102,112,255,0.38)",
          filter: "blur(22px)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: -1,
        }}
        aria-hidden
      />

      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front — photo */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 48,
            background: "#6670ff",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            overflow: "hidden",
            boxShadow:
              "0 32px 64px -12px rgba(102,112,255,0.52), 0 20px 20px 0 rgba(0,0,0,0.10)",
          }}
        >
          <Image
            src="/dhanush_image.jpeg"
            alt="Dhanush N — Product Designer"
            fill
            className="object-cover"
            style={{ objectPosition: "48% 12%" }}
            priority
          />
        </div>

        {/* Back — circular scroll badge */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 48,
            background: "#fff",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow:
              "0 32px 64px -12px rgba(0,0,0,0.14), 0 20px 20px 0 rgba(0,0,0,0.06)",
          }}
        >
          <CircularBadge />
        </div>
      </motion.div>
    </div>
  );
}

/* ── CTA Button — glass outer + white inner + sliding arrow ── */
function CTAButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          background: "rgba(102,112,255,0.10)",
          backdropFilter: "blur(6px)",
          borderRadius: 96,
          padding: 6,
          overflow: "hidden",
          cursor: "pointer",
        }}
      >
        <Link
          href="/work"
          className="focus-ring"
          style={{
            display: "flex",
            alignItems: "center",
            background: "#fff",
            borderRadius: 48,
            height: 72,
            padding: "0 92px 0 52px",
            fontSize: 22,
            fontWeight: 700,
            color: "#000",
            letterSpacing: "-0.02em",
            whiteSpace: "nowrap",
            fontFamily: "var(--font-display)",
            textDecoration: "none",
          }}
        >
          View Case Studies
        </Link>

        {/* Arrow circle — starts off-screen right, slides in on hover */}
        <motion.div
          initial={{ x: 84 }}
          animate={{ x: hovered ? 0 : 84 }}
          transition={{ type: "spring", stiffness: 340, damping: 30, mass: 0.8 }}
          style={{
            position: "absolute",
            right: 6,
            width: 72,
            height: 72,
            borderRadius: 48,
            background: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
          aria-hidden
        >
          <motion.div
            animate={{ rotate: hovered ? 0 : 180 }}
            transition={{ type: "spring", stiffness: 340, damping: 30 }}
          >
            <ArrowRight size={26} color="#fff" />
          </motion.div>
        </motion.div>
      </div>

      {/* Secondary CTA */}
      <Link
        href="/contact"
        style={{
          fontSize: 14,
          fontWeight: 500,
          color: "rgba(17,17,17,0.45)",
          fontFamily: "var(--font-display)",
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#111")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(17,17,17,0.45)")}
      >
        or Let&apos;s Work Together
        <ArrowRight size={13} />
      </Link>
    </div>
  );
}

/* ── 3-layer shape: scroll parallax → entry scale → CSS float ── */
function FloatShape({
  src,
  size,
  style,
  floatClass,
  delay = 0,
  parallaxY,
  reduceMotion = false,
}: {
  src: string;
  size: number;
  style?: React.CSSProperties;
  floatClass: string;
  delay?: number;
  parallaxY: MotionValue<number>;
  reduceMotion?: boolean;
}) {
  return (
    <motion.div
      className="absolute pointer-events-none select-none"
      style={{ ...style, y: reduceMotion ? 0 : parallaxY }}
      aria-hidden
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.55 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={reduceMotion ? undefined : floatClass}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt=""
            width={size}
            height={size}
            draggable={false}
            style={{ width: size, height: "auto", display: "block" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

const reveal = (delay: number) => ({
  initial: { opacity: 0, y: 22, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0,  filter: "blur(0px)" },
  transition: { duration: 0.85, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
});

export default function Hero() {
  const sectionRef   = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const pFast = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const pMid  = useTransform(scrollYProgress, [0, 1], [0,  -90]);
  const pSlow = useTransform(scrollYProgress, [0, 1], [0,  -45]);
  const pDown = useTransform(scrollYProgress, [0, 1], [0,   70]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
      style={{ background: "#fafafa", paddingTop: 64 }}
    >

      {/* ── Background: large drifting text ── */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        animate={reduceMotion ? undefined : { x: [0, -40, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(120px, 22vw, 380px)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 0.88,
            color: "rgba(17,17,17,0.06)",
            whiteSpace: "nowrap",
          }}
        >
          UI UX · PRODUCT DESIGNER
        </span>
      </motion.div>

      {/* ── Shape container: 1100×700 centred ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 1100,
          height: 700,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -46%)",
        }}
      >
        <FloatShape src="/shapes/orange-pyramid.png"    size={260} style={{ top: 0,     left: 60 }}                              floatClass="float-b"    delay={0.18} parallaxY={pFast} reduceMotion={reduceMotion} />
        <FloatShape src="/shapes/orange-star.png"       size={245} style={{ top: 0,     right: 60 }}                             floatClass="float-spin" delay={0.24} parallaxY={pFast} reduceMotion={reduceMotion} />
        <FloatShape src="/shapes/purple-torus.png"      size={240} style={{ top: "50%", left: 0,  transform: "translateY(-50%)" }} floatClass="float-a"    delay={0.32} parallaxY={pMid}  reduceMotion={reduceMotion} />
        <FloatShape src="/shapes/lime-green-object.png" size={220} style={{ top: "50%", right: 0, transform: "translateY(-50%)" }} floatClass="float-c"    delay={0.36} parallaxY={pMid}  reduceMotion={reduceMotion} />
        <FloatShape src="/shapes/turquoise-cube.png"    size={230} style={{ bottom: 0,  left: 60 }}                              floatClass="float-d"    delay={0.44} parallaxY={pDown} reduceMotion={reduceMotion} />
        <FloatShape src="/shapes/yellow-cylinder.png"   size={230} style={{ bottom: 0,  right: 60 }}                             floatClass="float-e"    delay={0.40} parallaxY={pSlow} reduceMotion={reduceMotion} />
      </div>

      {/* ── Centre content ── */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-4"
        style={{ minHeight: "calc(100vh - 64px)", paddingBlock: "5rem" }}
      >

        {/* Heading */}
        <motion.h1
          {...reveal(0.10)}
          style={{
            fontSize: "clamp(26px, 3.2vw, 48px)",
            fontWeight: 500,
            color: "#000",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: 14,
            fontFamily: "var(--font-display)",
          }}
        >
          Hi, I&apos;m{" "}
          <em
            style={{
              fontStyle: "italic",
              fontWeight: 700,
              fontFamily: "var(--font-serif)",
              color: "#000",
            }}
          >
            Dhanush
          </em>
          !
        </motion.h1>

        {/* Rolling tag */}
        <motion.div {...reveal(0.18)} style={{ marginBottom: 32 }}>
          <RollingTag />
        </motion.div>

        {/* Flip card */}
        <motion.div
          {...reveal(0.26)}
          style={{ position: "relative", marginBottom: 40 }}
        >
          <FlipCard />
        </motion.div>

        {/* Stats row */}
        <motion.div
          {...reveal(0.34)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 28,
          }}
        >
          <div style={{ position: "relative", width: 84, height: 36 }}>
            {[
              { init: "FT", bg: "#4895EF", left: 0  },
              { init: "HT", bg: "#F97316", left: 28 },
              { init: "IM", bg: "#52B788", left: 56 },
            ].map(({ init, bg, left }) => (
              <span
                key={init}
                style={{
                  position: "absolute",
                  width: 32,
                  height: 32,
                  top: "50%",
                  left,
                  transform: "translateY(-50%)",
                  borderRadius: "50%",
                  border: "2px solid #fafafa",
                  background: bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 7,
                  fontWeight: 700,
                  color: "#fff",
                  fontFamily: "var(--font-jetbrains)",
                  letterSpacing: "0.04em",
                }}
              >
                {init}
              </span>
            ))}
          </div>
          <span
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "#4d4d4d",
              fontFamily: "var(--font-display)",
            }}
          >
            13 Products Shipped
          </span>
        </motion.div>

        {/* CTA */}
        <motion.div {...reveal(0.42)}>
          <CTAButton />
        </motion.div>

      </div>
    </section>
  );
}
