"use client";

import { useEffect, useState } from "react";
import { OPEN_EVENT } from "@/components/terminal/command-terminal";

const TIME_ZONE = "Australia/Sydney";

/**
 * A readout rather than a sign-off. Every value here is measured at runtime or
 * stamped at build, so nothing in it can drift out of date.
 */
export function SiteFooter() {
  // Rendered only after mount: viewport and clock differ between server and
  // client, and a static export has no business guessing either.
  const [viewport, setViewport] = useState<string | null>(null);
  const [localTime, setLocalTime] = useState<string | null>(null);

  useEffect(() => {
    const readViewport = () =>
      setViewport(`${window.innerWidth} × ${window.innerHeight}`);

    readViewport();
    window.addEventListener("resize", readViewport);
    return () => window.removeEventListener("resize", readViewport);
  }, []);

  useEffect(() => {
    const readClock = () =>
      setLocalTime(
        new Intl.DateTimeFormat("en-AU", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: TIME_ZONE,
          hour12: false,
        }).format(new Date())
      );

    readClock();
    const timer = window.setInterval(readClock, 30_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <footer className="container py-8">
      <div className="flex flex-col gap-3 pt-6 sm:flex-row sm:items-center sm:justify-between dotted-line dotted-line-horizontal relative">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2">
            <span aria-hidden="true" className="block size-1.5 bg-accent" />
            <span className="text-2xs font-heading uppercase tracking-widest text-foreground-muted">
              Rod Leviton
            </span>
          </span>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
            className="border border-border px-2 py-1 text-2xs font-heading uppercase tracking-widest text-foreground-muted transition-colors hover:cursor-pointer hover:border-accent hover:text-accent focus-visible:outline-1 focus-visible:outline-accent"
          >
            &#8984;K Command prompt
          </button>
        </div>
        <dl className="flex flex-wrap items-center gap-x-6 gap-y-1 text-2xs font-heading uppercase tracking-widest text-foreground-muted">
          <div className="flex gap-2">
            <dt className="sr-only">Build</dt>
            <dd>Build {process.env.NEXT_PUBLIC_BUILD_SHA}</dd>
          </div>
          {viewport && (
            <div className="flex gap-2">
              <dt className="sr-only">Viewport</dt>
              <dd>{viewport}</dd>
            </div>
          )}
          {localTime && (
            <div className="flex gap-2">
              <dt className="sr-only">Local time</dt>
              <dd>{localTime} Blue Mountains</dd>
            </div>
          )}
        </dl>
      </div>
    </footer>
  );
}
