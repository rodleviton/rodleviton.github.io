"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface SkillHoverContextType {
  hoveredSkill: string | null;
  setHoveredSkill: (skill: string | null) => void;
}

const SkillHoverContext = createContext<SkillHoverContextType | undefined>(
  undefined
);

export function useSkillHover() {
  const context = useContext(SkillHoverContext);
  if (context === undefined) {
    throw new Error("useSkillHover must be used within a SkillHoverProvider");
  }
  return context;
}

export function SkillHoverProvider({ children }: { children: ReactNode }) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <SkillHoverContext.Provider value={{ hoveredSkill, setHoveredSkill }}>
      {children}
    </SkillHoverContext.Provider>
  );
}
