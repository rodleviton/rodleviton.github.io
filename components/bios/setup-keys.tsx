"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";
import { OPEN_PROMPT, SAVE_AND_EXIT, isKeyboardClaimed } from "@/lib/events";
import { beep } from "@/lib/speaker";

const SECTIONS = ["introduction", "experience", "work", "presence"];

/**
 * Keyboard driving for the whole page: the arrows move the highlight bar over
 * rows and step through the menu, Enter opens the highlighted row, and a few
 * keys open the prompt, switch theme or bring up Save and Exit.
 */
export function SetupKeys() {
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    let selected: HTMLElement | null = null;

    const rows = () => [...document.querySelectorAll<HTMLElement>(".item")];
    const select = (row: HTMLElement | undefined) => {
      if (!row) return;
      rows().forEach((candidate) => candidate.classList.toggle("sel", candidate === row));
      selected = row;
      row.scrollIntoView({ block: "nearest" });
      beep(1200, 18);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (isKeyboardClaimed() || event.metaKey || event.ctrlKey || event.altKey) return;
      if (event.target instanceof Element && event.target.closest("input, textarea")) return;

      if (event.key === "/" || event.key === "Delete" || event.key === "F1") {
        event.preventDefault();
        window.dispatchEvent(new Event(OPEN_PROMPT));
        return;
      }
      if (event.key === "F10") {
        event.preventDefault();
        window.dispatchEvent(new Event(SAVE_AND_EXIT));
        return;
      }
      if (event.key === "t" || event.key === "T") {
        setTheme(resolvedTheme === "setup" ? "crt" : "setup");
        return;
      }

      const all = rows();
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        const index = selected ? all.indexOf(selected) : -1;
        const next = event.key === "ArrowDown" ? index + 1 : index < 0 ? 0 : index - 1;
        select(all[Math.max(0, Math.min(all.length - 1, next))]);
        return;
      }
      if (event.key === "Enter" && selected && document.activeElement === document.body) {
        event.preventDefault();
        (selected.querySelector(".item-row") as HTMLElement | null)?.click();
        return;
      }
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        const current = document.querySelector("nav.menu a.on")?.getAttribute("href")?.slice(1);
        const index = Math.max(0, SECTIONS.indexOf(current ?? SECTIONS[0]));
        const next = SECTIONS[Math.max(0, Math.min(SECTIONS.length - 1, index + (event.key === "ArrowRight" ? 1 : -1)))];
        document.getElementById(next)?.scrollIntoView();
      }
    };

    // A click selects the row it lands on, so the keyboard picks up from there.
    const onClick = (event: MouseEvent) => {
      const row = event.target instanceof Element ? event.target.closest<HTMLElement>(".item") : null;
      if (row) {
        rows().forEach((candidate) => candidate.classList.toggle("sel", candidate === row));
        selected = row;
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("click", onClick);
    };
  }, [resolvedTheme, setTheme]);

  return null;
}
