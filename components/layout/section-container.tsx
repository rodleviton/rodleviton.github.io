"use client";

import { ReactNode, useRef } from "react";
import { Container } from "./container";
import { useInView } from "motion/react";
import { SectionVisibilityProvider } from "@/contexts/section-visibility-context";

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
    <Container className={`py-8 ${className}`}>
      <SectionVisibilityProvider isInView={isInView}>
        <section ref={ref} className={`flex flex-col gap-6 md:gap-12`}>
          {children}
        </section>
      </SectionVisibilityProvider>
    </Container>
  );
}
