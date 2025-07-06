import { ReactNode } from "react";
import { Container } from "./container";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
}

export function SectionContainer({
  children,
  className = "",
}: SectionContainerProps) {
  return (
    <Container className={`py-8 ${className}`}>
      <section className="flex flex-col gap-12">{children}</section>
    </Container>
  );
}
