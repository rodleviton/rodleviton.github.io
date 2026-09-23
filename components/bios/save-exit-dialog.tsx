"use client";

import { useEffect, useState } from "react";
import { RUN_BOOT, SAVE_AND_EXIT } from "@/lib/events";
import { beep } from "@/lib/speaker";

/** The red SAVE to CMOS and EXIT box. Yes reboots the page, no puts it away. */
export function SaveExitDialog() {
  const [open, setOpen] = useState(false);
  const [choice, setChoice] = useState<"Y" | "N">("Y");

  useEffect(() => {
    const onOpen = () => {
      if ("boot" in document.documentElement.dataset) return;
      setChoice("Y");
      setOpen(true);
      beep(440, 80);
    };
    window.addEventListener(SAVE_AND_EXIT, onOpen);
    return () => window.removeEventListener(SAVE_AND_EXIT, onOpen);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (!open) {
      delete root.dataset.dialog;
      return;
    }
    root.dataset.dialog = "";

    const decide = (pick: "Y" | "N") => {
      setOpen(false);
      delete root.dataset.dialog;
      if (pick === "Y") {
        beep(660, 120);
        window.scrollTo(0, 0);
        window.dispatchEvent(new Event(RUN_BOOT));
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      event.preventDefault();
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        setChoice((value) => (value === "Y" ? "N" : "Y"));
      } else if (/^[yn]$/i.test(event.key)) {
        decide(event.key.toUpperCase() as "Y" | "N");
      } else if (event.key === "Enter") {
        decide(choice);
      } else if (event.key === "Escape") {
        decide("N");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, choice]);

  if (!open) return null;

  return (
    <div className="dialog-scrim" onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}>
      <div className="dialog" role="alertdialog" aria-modal="true" aria-label="Save and exit">
        SAVE to CMOS and EXIT (Y/N)? <b>{choice}</b>
        <div className="dialog-actions">
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              window.scrollTo(0, 0);
              window.dispatchEvent(new Event(RUN_BOOT));
            }}
          >
            [Y]es
          </button>
          <button type="button" onClick={() => setOpen(false)}>
            [N]o
          </button>
        </div>
      </div>
    </div>
  );
}
