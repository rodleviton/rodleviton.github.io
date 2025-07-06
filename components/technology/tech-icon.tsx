import Link from "next/link";
import { ReactNode } from "react";

interface TechIconProps {
  href: string;
  icon: ReactNode;
  label: string;
}

export function TechIcon({ href, icon, label }: TechIconProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="hover:text-accent transition-colors duration-300"
      aria-label={label}
    >
      {icon}
    </Link>
  );
}
