import { cn } from "@/lib/utils";

interface ProjectStatusProps {
  /** Measured state of the project, e.g. "Shipped" or "Engine complete, unreleased". */
  status: string;
  /** The evidence behind the status. */
  detail: string;
}

/**
 * A project states what it actually is, not what would flatter it. The status is
 * the claim; the detail is what backs it up.
 */
export function ProjectStatus({ status, detail }: ProjectStatusProps) {
  // Only a shipped claim pulses. A parked one has nothing to sample.
  const isLive = status.toLowerCase().startsWith("shipped");

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
      <span className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={cn("block size-1.5 bg-accent", isLive && "status-live")}
        />
        <span className="text-2xs font-heading font-semibold uppercase tracking-widest text-accent">
          {status}
        </span>
      </span>
      <span className="text-2xs font-heading uppercase tracking-widest text-foreground-muted">
        {detail}
      </span>
    </div>
  );
}
