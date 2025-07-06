import { ReactNode } from "react";

interface ContentRowProps {
  children: ReactNode;
  className?: string;
}

export function ContentRow({ children, className = "" }: ContentRowProps) {
  return (
    <div className={`flex gap-8 ${className}`}>
      <div className="w-34 min-w-34 hidden md:block"></div>
      <div className="flex w-full">{children}</div>
    </div>
  );
}
