"use client";

import { ReactLenis } from "lenis/react";
import { MotionConfig, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

// One easing for the whole page: fast start, long soft landing.
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

/** Smooth scrolling and shared motion settings. Both step aside for reduced motion. */
export function MotionShell({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.8, ease: EASE_OUT }}>
      {/* Same tree on server and client; with reduced motion Lenis keeps native scrolling. */}
      <ReactLenis root options={{ lerp: 0.11, anchors: true, smoothWheel: !reduced }}>
        {children}
      </ReactLenis>
    </MotionConfig>
  );
}
