import { projectsData } from "@/data/projects";
import { experienceData } from "@/data/experience";
import { RUN_BOOT } from "@/lib/events";
import { isSoundEnabled, setSoundEnabled } from "@/lib/speaker";

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
    name: "theme",
    usage: "theme [crt|setup]",
    summary: "Switch between the CRT and the blue setup screen.",
    run: (args, context) => {
      const requested = args[0] ?? (context.resolvedTheme === "setup" ? "crt" : "setup");

      if (!["crt", "setup"].includes(requested)) {
        context.print([`theme: no such mode "${requested}". Try crt or setup.`]);
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
      const shipped = projectsData.filter((project) =>
        project.status.toLowerCase().startsWith("shipped")
      ).length;

      context.print([
        `build        ${process.env.NEXT_PUBLIC_BUILD_SHA}`,
        `viewport     ${window.innerWidth} x ${window.innerHeight}`,
        `theme        ${context.resolvedTheme ?? "unknown"}`,
        `sound        ${isSoundEnabled() ? "on" : "off"}`,
        `roles        ${experienceData.length}`,
        `projects     ${projectsData.length} listed, ${shipped} shipped`,
      ]);
    },
  },
  {
    name: "boot",
    usage: "boot",
    summary: "Run the power-on self test again.",
    run: (_args, context) => {
      context.close();
      window.scrollTo(0, 0);
      window.dispatchEvent(new Event(RUN_BOOT));
    },
  },
  {
    name: "sound",
    usage: "sound [on|off]",
    summary: "The PC speaker. Off unless you ask.",
    run: (args, context) => {
      const next = args[0] ? args[0] === "on" : !isSoundEnabled();
      setSoundEnabled(next);
      context.print([`Sound ${next ? "on" : "off"}`]);
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
    context.print([`${name}: command not found. Type help.`]);
    return;
  }

  command.run(args, context);
}
