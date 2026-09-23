"use client";

import { useId, useState, type ReactNode } from "react";

interface SetupItemProps {
  /** The row itself: dates, name, class and so on. */
  header: ReactNode;
  /** What opens under the row. */
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

/** One selectable row in a setup list. The arrow keys move a highlight over these. */
export function SetupItem({ header, children, defaultOpen = false, className }: SetupItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  const bodyId = useId();

  return (
    <div className={`item${open ? " open" : ""}${className ? ` ${className}` : ""}`}>
      <button
        type="button"
        className="item-row"
        aria-expanded={open}
        aria-controls={bodyId}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="marker" aria-hidden="true">
          {open ? "▼" : "►"}
        </span>
        {header}
      </button>
      <div id={bodyId} className="item-body" hidden={!open}>
        {children}
      </div>
    </div>
  );
}
