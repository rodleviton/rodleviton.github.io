import { projectsData } from "@/data/projects";
import { experienceData } from "@/data/experience";

export interface CommandContext {
  setTheme: (theme: string) => void;
  resolvedTheme: string | undefined;
  print: (lines: string[]) => void;
  clear: () => void;
  close: () => void;
}

export interface Command {
  name: string;
  usage: string;
  summary: string;
  run: (args: string[], context: CommandContext) => void;
}

/** Toggles a flag class on the document root and reports the resulting state. */
function toggleRootClass(
  offClass: string,
  args: string[],
  label: string,
  context: CommandContext
) {
  const root = document.documentElement;
  const requested = args[0];
  const isOff = root.classList.contains(offClass);

  const shouldBeOn =
    requested === "on"
      ? true
      : requested === "off"
        ? false
        : isOff; // no argument: flip

  root.classList.toggle(offClass, !shouldBeOn);
  context.print([`${label} ${shouldBeOn ? "on" : "off"}`]);
}

const SECTIONS = ["introduction", "experience", "work", "presence"];

export const commands: Command[] = [
  {
    name: "help",
    usage: "help",
    summary: "List everything this prompt understands.",
    run: (_args, context) => {
      context.print([
        "Commands act on the page you are looking at, not on a transcript.",
        "",
        ...commands.map((command) => `  ${command.usage.padEnd(28)}${command.summary}`),
        "",
        "  Up and Down walk your history. Esc closes.",
      ]);
    },
  },
  {
    name: "grid",
    usage: "grid [on|off]",
    summary: "Show or hide the blueprint rules.",
    run: (args, context) => toggleRootClass("no-grid", args, "Grid", context),
  },
  {
    name: "theme",
    usage: "theme [dark|light|system]",
    summary: "Switch the colour scheme.",
    run: (args, context) => {
      const requested = args[0];

      if (!requested) {
        const next = context.resolvedTheme === "dark" ? "light" : "dark";
        context.setTheme(next);
        context.print([`Theme ${next}`]);
        return;
      }

      if (!["dark", "light", "system"].includes(requested)) {
        context.print([`theme: no such mode "${requested}". Try dark, light or system.`]);
        return;
      }

      context.setTheme(requested);
      context.print([`Theme ${requested}`]);
    },
  },
  {
    name: "goto",
    usage: "goto <section>",
    summary: `Scroll to a section: ${SECTIONS.join(", ")}.`,
    run: (args, context) => {
      const target = args[0];

      if (!target) {
        context.print([`goto: which one? ${SECTIONS.join(", ")}`]);
        return;
      }

      const element = document.getElementById(target);

      if (!element) {
        context.print([`goto: no section "${target}". Try ${SECTIONS.join(", ")}.`]);
        return;
      }

      element.scrollIntoView({ behavior: "smooth", block: "start" });
      context.close();
    },
  },
  {
    name: "status",
    usage: "status",
    summary: "Print what this page actually knows about itself.",
    run: (_args, context) => {
      const root = document.documentElement;
      const shipped = projectsData.filter((project) =>
        project.status.toLowerCase().startsWith("shipped")
      ).length;

      context.print([
        `build        ${process.env.NEXT_PUBLIC_BUILD_SHA}`,
        `viewport     ${window.innerWidth} x ${window.innerHeight}`,
        `theme        ${context.resolvedTheme ?? "unknown"}`,
        `grid         ${root.classList.contains("no-grid") ? "off" : "on"}`,
        `roles        ${experienceData.length}`,
        `projects     ${projectsData.length} listed, ${shipped} shipped`,
      ]);
    },
  },
  {
    name: "clear",
    usage: "clear",
    summary: "Empty the output.",
    run: (_args, context) => context.clear(),
  },
  {
    name: "exit",
    usage: "exit",
    summary: "Close the prompt.",
    run: (_args, context) => context.close(),
  },
];

export function runCommand(input: string, context: CommandContext) {
  const [name, ...args] = input.trim().split(/\s+/);
  if (!name) return;

  const command = commands.find((candidate) => candidate.name === name);

  if (!command) {
    context.print([`${name}: not a command. Type help.`]);
    return;
  }

  command.run(args, context);
}
