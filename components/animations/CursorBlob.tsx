"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorBlob() {
  const [enabled, setEnabled] = useState(false);
  const mouseX = useMotionValue(-80);
  const mouseY = useMotionValue(-80);

  const springX = useSpring(mouseX, { damping: 34, stiffness: 260, mass: 0.45 });
  const springY = useSpring(mouseY, { damping: 34, stiffness: 260, mass: 0.45 });

  useEffect(() => {
    const pointerQuery = window.matchMedia("(pointer: fine)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: no-preference)");

    const updateEnabled = () => {
      setEnabled(pointerQuery.matches && motionQuery.matches);
    };

    updateEnabled();
    pointerQuery.addEventListener("change", updateEnabled);
    motionQuery.addEventListener("change", updateEnabled);

    return () => {
      pointerQuery.removeEventListener("change", updateEnabled);
      motionQuery.removeEventListener("change", updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX - 14);
      mouseY.set(event.clientY - 14);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [enabled, mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed pointer-events-none rounded-full border border-white/35 mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        width: 28,
        height: 28,
        zIndex: 60,
      }}
    >
      <span className="absolute left-1/2 top-1/2 h-px w-8 -translate-x-1/2 -translate-y-1/2 bg-white/45" />
      <span className="absolute left-1/2 top-1/2 h-8 w-px -translate-x-1/2 -translate-y-1/2 bg-white/45" />
    </motion.div>
  );
}
