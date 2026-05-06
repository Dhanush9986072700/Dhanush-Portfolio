"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedNumber({
  value,
  suffix = "",
  prefix = "",
  duration = 1500,
  className = "",
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;
    if (shouldReduceMotion) return;

    const startTime = Date.now();
    const startValue = 0;
    let frame = 0;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const currentValue = Math.round(startValue + (value - startValue) * easedProgress);

      setDisplayValue(currentValue);

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isInView, shouldReduceMotion, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{(shouldReduceMotion && isInView ? value : displayValue).toLocaleString()}{suffix}
    </span>
  );
}
