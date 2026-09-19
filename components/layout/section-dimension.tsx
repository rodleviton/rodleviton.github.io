"use client";

import { RefObject, useEffect, useState } from "react";
import { useSectionVisibility } from "@/contexts/section-visibility-context";

interface SectionDimensionProps {
  /** The element being measured. */
  target: RefObject<HTMLElement | null>;
}

/**
 * A drawing-style dimension line down the left margin, annotating the real
 * rendered height of its section. The number is measured, never authored, so it
 * stays honest across breakpoints and content changes.
 */
export function SectionDimension({ target }: SectionDimensionProps) {
  const [height, setHeight] = useState<number | null>(null);
  const { isInView } = useSectionVisibility();

  useEffect(() => {
    const element = target.current;
    if (!element || typeof ResizeObserver === "undefined") return;

    const observer = new ResizeObserver(([entry]) => {
      setHeight(Math.round(entry.contentRect.height));
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, [target]);

  if (height === null) return null;

  return (
    <div
      aria-hidden="true"
      data-section-dimension=""
      className={`pointer-events-none absolute left-0 top-8 bottom-8 hidden w-5 select-none md:block transition-opacity duration-700 ${
        isInView ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* End ticks, as on a dimensioned drawing */}
      <span className="absolute left-0 top-0 h-px w-3 bg-foreground-muted/40" />
      <span className="absolute left-0 bottom-0 h-px w-3 bg-foreground-muted/40" />
      {/* The extension line itself */}
      <span className="absolute left-1.5 top-0 bottom-0 w-px bg-foreground-muted/25" />
      {/* Measured value, reading up the line */}
      <span
        className="absolute left-1.5 top-1/2 origin-center -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap bg-background px-1.5 text-2xs font-heading uppercase tracking-widest text-foreground-muted/70"
      >
        {height}px
      </span>
    </div>
  );
}
