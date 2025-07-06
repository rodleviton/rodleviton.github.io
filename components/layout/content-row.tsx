import { cn } from "@/utils/cn";
import { ReactNode } from "react";

interface ContentRowProps {
  children: ReactNode;
  className?: string;
}

export function ContentRow({ children, className = "" }: ContentRowProps) {
  return (
    <div
      className={cn([
        "flex",
        "gap-8",
        "relative",
        "dotted-line",
        "dotted-line-horizontal",
        className,
      ])}
    >
      <div className="w-34 min-w-34 hidden md:block dotted-line dotted-line-vertical relative"></div>
      <div className="flex w-full dotted-line dotted-line-vertical relative">
        {children}
      </div>
    </div>
  );
}
