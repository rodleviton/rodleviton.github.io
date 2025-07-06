"use client";

import { createContext, useContext, ReactNode } from "react";

interface SectionVisibilityContextType {
  isInView: boolean;
}

const SectionVisibilityContext = createContext<
  SectionVisibilityContextType | undefined
>(undefined);

export function useSectionVisibility() {
  const context = useContext(SectionVisibilityContext);
  if (context === undefined) {
    throw new Error(
      "useSectionVisibility must be used within a SectionVisibilityProvider"
    );
  }
  return context;
}

export function SectionVisibilityProvider({
  children,
  isInView,
}: {
  children: ReactNode;
  isInView: boolean;
}) {
  return (
    <SectionVisibilityContext.Provider value={{ isInView }}>
      {children}
    </SectionVisibilityContext.Provider>
  );
}
