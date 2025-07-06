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
      className="group items-end md:self-end dotted-line dotted-line-vertical relative"
    >
      <div className="flex gap-2 h-full items-center dotted-line dotted-line-horizontal relative">
        <div className="group-hover:text-accent transition-colors duration-300">
          <PinIcon />
        </div>
        <span className="text-2xs uppercase whitespace-nowrap self-end">
          {location}
        </span>
      </div>
    </Link>
  );
}
