import Link from "next/link";
import { PinIcon } from "@/components/icons/pin";

interface LocationLinkProps {
  href: string;
  location: string;
}

export function LocationLink({ href, location }: LocationLinkProps) {
  return (
    <Link
      target="_blank"
      href={href}
      className="group flex gap-2 items-center self-end"
    >
      <div className="group-hover:text-accent transition-colors duration-300">
        <PinIcon />
      </div>
      <span className="text-sm">{location}</span>
    </Link>
  );
}
