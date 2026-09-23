"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { OPEN_PROMPT, SAVE_AND_EXIT } from "@/lib/events";
import { isSoundEnabled, onSoundChange, setSoundEnabled } from "@/lib/speaker";

/** The hint bar along the bottom. Every hint is also a button, for mice and thumbs. */
export function KeyBar() {
  const { resolvedTheme, setTheme } = useTheme();
  const sound = useSyncExternalStore(onSoundChange, isSoundEnabled, () => false);

  return (
    <footer className="keys">
      <div className="keys-in">
        <span className="keys-hint hide-sm">
          <b>&uarr;&darr;</b> Select
        </span>
        <span className="keys-hint hide-sm">
          <b>Enter</b> Expand
        </span>
        <span className="keys-hint hide-sm">
          <b>&larr;&rarr;</b> Menu
        </span>
        <button type="button" onClick={() => window.dispatchEvent(new Event(OPEN_PROMPT))}>
          <b>/</b> Prompt
        </button>
        <button type="button" onClick={() => setTheme(resolvedTheme === "setup" ? "crt" : "setup")}>
          <b>T</b> Theme
        </button>
        <button type="button" className="hide-sm" onClick={() => window.dispatchEvent(new Event(SAVE_AND_EXIT))}>
          <b>F10</b> Save &amp; Exit
        </button>
        <button type="button" aria-pressed={sound} onClick={() => setSoundEnabled(!sound)}>
          Sound <b className="keys-state">{sound ? "[Enabled]" : "[Disabled]"}</b>
        </button>
        <span className="keys-build">Build {process.env.NEXT_PUBLIC_BUILD_SHA}</span>
      </div>
    </footer>
  );
}
