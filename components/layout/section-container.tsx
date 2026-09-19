"use client";

import { ReactNode, useRef } from "react";
import { useInView } from "motion/react";
import { SectionVisibilityProvider } from "@/contexts/section-visibility-context";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  /** Anchor for the command prompt's `goto`. */
  id?: string;
}

export function SectionContainer({
  children,
  className = "",
  id,
}: SectionContainerProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {
    margin: "0px 0px -100px 0px",
    amount: 0.2,
  });

  // The blueprint is drawn once and stays drawn; retracting it on scroll-away
  // would read as a glitch rather than as drafting.
  const hasBeenDrawn = useInView(ref, {
    margin: "0px 0px -100px 0px",
    amount: 0.2,
    once: true,
  });

  return (
    <SectionVisibilityProvider isInView={isInView}>
      <section
        id={id}
        ref={ref}
        className={cn(
          "container py-8 flex flex-col gap-6 md:gap-12 relative draw-lines",
          hasBeenDrawn && "is-drawn",
          className
        )}
      >
        {children}
      </section>
    </SectionVisibilityProvider>
  );
}
