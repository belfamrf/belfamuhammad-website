"use client";

import { ReactLenis } from "lenis/react";
import { MotionConfig, motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

// One easing for the whole page: fast start, long soft landing.
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

/** Smooth scrolling and shared motion settings. Both step aside for reduced motion. */
export function MotionShell({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.8, ease: EASE_OUT }}>
      {reduced ? children : (
        <ReactLenis root options={{ lerp: 0.11, anchors: true }}>
          {children}
        </ReactLenis>
      )}
    </MotionConfig>
  );
}

/** Text and blocks rise into place the first time they scroll into view. */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "p" | "h2" | "li";
}) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ delay }}
    >
      {children}
    </Tag>
  );
}
