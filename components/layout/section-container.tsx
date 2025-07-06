"use client";

import { ReactNode, useRef } from "react";
import { useInView } from "motion/react";
import { SectionVisibilityProvider } from "@/contexts/section-visibility-context";
import { cn } from "@/utils/cn";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
}

export function SectionContainer({
  children,
  className = "",
}: SectionContainerProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {
    margin: "0px 0px -100px 0px",
    amount: 0.2,
  });

  return (
    <SectionVisibilityProvider isInView={isInView}>
      <section
        ref={ref}
        className={cn(
          "container py-8 flex flex-col gap-6 md:gap-12",
          className
        )}
      >
        {children}
      </section>
    </SectionVisibilityProvider>
  );
}
