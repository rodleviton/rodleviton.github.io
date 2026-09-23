"use client";

import { useCallback, useEffect, useRef } from "react";
import { skillsData } from "@/data/skills";
import { projectsData } from "@/data/projects";
import { RUN_BOOT } from "@/lib/events";
import { beep } from "@/lib/speaker";

type Line = [tone: "" | "b" | "a" | "d", text: string];

const SLOTS = ["Primary Master  ", "Primary Slave   ", "Secondary Master", "Secondary Slave "];

const HEAD: Line[] = [
  ["b", "Leviton Modular BIOS v1981, A Reactive Pixels Ally"],
  ["b", "Copyright (C) 1981-2026, Rod Leviton"],
  ["", ""],
  ["", "Main Processor : Front-end developer"],
  ["", "Memory Testing : 20+ years OK"],
  ["", "Location       : Blue Mountains, Australia"],
];

const REST: Line[] = [
  ["", ""],
  ...skillsData.map((skill, index): Line => ["", `Detecting ${SLOTS[index] ?? "Device          "} ... ${skill.label}`]),
  ["", ""],
  ["", `PCI device listing ... ${projectsData.length} devices found`],
  ["", ""],
  ["d", "1981-UI-DEV-RDLV-1985PX-00"],
  ["", ""],
];

/** Everything that draws in as the raster line passes, in reading order. */
const PAINT_UNITS =
  ".titlebar, nav.menu, footer.keys, h2, .main, .who, .kv-row, .detect > div, .help > h3, .help > p, .health h3, .health .note, .list, .pci-head, .item, .end > p";

/**
 * The power-on self test. It types out, waits for a key, blanks like a video
 * mode switch, then a raster line sweeps down and paints SETUP in row by row.
 * Whether it runs at all is decided before first paint by the inline script in
 * the layout, which sets data-boot on the root element.
 */
export function BootScreen() {
  const rootRef = useRef<HTMLDivElement>(null);
  const running = useRef(false);

  const run = useCallback(() => {
    const boot = rootRef.current;
    if (!boot || running.current) return;
    running.current = true;

    const root = document.documentElement;
    root.dataset.boot = "";
    boot.hidden = false;
    boot.innerHTML = "";

    const touch = matchMedia("(pointer: coarse)").matches;
    const top = document.createElement("div");
    top.className = "boot-row";
    const portrait = document.createElement("img");
    portrait.src = "/images/portrait.png";
    portrait.alt = "";
    const head = document.createElement("div");
    const rest = document.createElement("div");
    top.append(portrait, head);
    boot.append(top, rest);

    const put = (parent: HTMLElement, [tone, text]: Line) => {
      const line = document.createElement("div");
      line.className = tone;
      line.textContent = text || " ";
      parent.appendChild(line);
      return line;
    };

    const lines: [HTMLElement, Line][] = [...HEAD.map((l): [HTMLElement, Line] => [head, l]), ...REST.map((l): [HTMLElement, Line] => [rest, l])];
    let index = 0;
    let state: "typing" | "waiting" | "switching" = "typing";
    let auto = 0;

    const timer = window.setInterval(() => {
      if (index < lines.length) put(...lines[index++]);
      else waitForKey();
    }, 110);

    function waitForKey() {
      if (state !== "typing") return;
      state = "waiting";
      window.clearInterval(timer);
      while (index < lines.length) put(...lines[index++]);
      beep(1000, 150);
      const prompt = put(rest, ["a", touch ? "Tap to enter SETUP" : "Press any key to enter SETUP"]);
      const cursor = document.createElement("span");
      cursor.className = "boot-cursor";
      prompt.appendChild(cursor);
      auto = window.setTimeout(enter, 8000);
    }

    function enter() {
      if (state !== "waiting") return;
      state = "switching";
      window.clearTimeout(auto);
      window.removeEventListener("keydown", onKey, true);
      boot?.removeEventListener("pointerdown", onKey);
      beep(180, 25);
      // Video mode switch: the screen just goes dark.
      if (boot) boot.innerHTML = "";
      window.setTimeout(() => {
        if (boot) boot.innerHTML = '<div class="d">Entering SETUP...</div>';
      }, 120);
      window.setTimeout(paint, 520);
    }

    function paint() {
      const units = [...document.querySelectorAll<HTMLElement>(PAINT_UNITS)];
      units.forEach((unit) => unit.setAttribute("data-p", ""));
      if (boot) {
        boot.hidden = true;
        boot.innerHTML = "";
      }
      delete root.dataset.boot;

      const line = document.createElement("div");
      line.className = "raster";
      document.body.appendChild(line);
      const height = window.innerHeight;
      const start = performance.now();
      const duration = 520;

      const step = (now: number) => {
        const y = Math.min(height, ((now - start) / duration) * height);
        line.style.top = `${y}px`;
        units.forEach((unit) => {
          if (unit.hasAttribute("data-p") && unit.getBoundingClientRect().top < y) unit.removeAttribute("data-p");
        });
        if (y < height) {
          requestAnimationFrame(step);
        } else {
          units.forEach((unit) => unit.removeAttribute("data-p"));
          line.remove();
          beep(1400, 30);
          running.current = false;
        }
      };
      requestAnimationFrame(step);
    }

    function onKey(event: Event) {
      if (state === "typing") {
        event.preventDefault();
        event.stopPropagation();
        waitForKey();
      } else if (state === "waiting") {
        event.preventDefault();
        event.stopPropagation();
        enter();
      }
    }

    window.addEventListener("keydown", onKey, true);
    boot.addEventListener("pointerdown", onKey);
  }, []);

  useEffect(() => {
    if ("boot" in document.documentElement.dataset) run();
    const replay = () => run();
    window.addEventListener(RUN_BOOT, replay);
    return () => window.removeEventListener(RUN_BOOT, replay);
  }, [run]);

  return <div id="boot" ref={rootRef} aria-hidden="true" hidden suppressHydrationWarning />;
}

/**
 * Runs during HTML parsing, before first paint. Boots once per visit, never for
 * reduced motion, and never without JavaScript, because the attribute is only
 * ever set here.
 */
export const BOOT_DECISION = `(function(){try{var d=document.documentElement;if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;if(sessionStorage.getItem("booted")==="1")return;sessionStorage.setItem("booted","1");d.setAttribute("data-boot","")}catch(e){}})();`;
