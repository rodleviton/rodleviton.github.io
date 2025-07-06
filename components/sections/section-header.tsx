"use client";

import { PlusIcon } from "@/components/icons/plus";
import { useSectionVisibility } from "@/contexts/section-visibility-context";

interface SectionHeaderProps {
  title: string;
}

export function SectionHeader({ title }: SectionHeaderProps) {
  const { isInView } = useSectionVisibility();

  return (
    <div className="flex gap-8">
      <div className="text-accent flex items-center w-34 min-w-34 justify-end">
        <div
          className={`transition-transform duration-700 ease-out ${
            isInView ? "animate-spin-once" : "opacity-50 scale-90"
          }`}
        >
          <PlusIcon size="sm" />
        </div>
      </div>
      <div className="flex w-full gap-8 items-center">
        <h2 className="text-xl whitespace-nowrap font-bold font-heading uppercase">
          {title}
        </h2>
        <div className="flex h-px bg-foreground w-full"></div>
      </div>
    </div>
  );
}
