"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { runCommand, type CommandContext } from "./commands";

interface Line {
  id: number;
  kind: "input" | "output";
  text: string;
}

const PROMPT = "rodleviton ~ %";

/** Lets the footer affordance open the prompt without lifting state. */
export const OPEN_EVENT = "rodleviton:open-command-terminal";

export function CommandTerminal() {
  const { setTheme, resolvedTheme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<Line[]>([]);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const restoreFocusTo = useRef<Element | null>(null);
  const lineId = useRef(0);

  const nextLines = useCallback((kind: Line["kind"], texts: string[]) => {
    setLines((current) => [
      ...current,
      ...texts.map((text) => ({ id: lineId.current++, kind, text })),
    ]);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    if (restoreFocusTo.current instanceof HTMLElement) {
      restoreFocusTo.current.focus();
    }
  }, []);

  // Cmd+K / Ctrl+K opens, Escape closes.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsOpen((open) => {
          if (!open) restoreFocusTo.current = document.activeElement;
          return !open;
        });
      }

      if (event.key === "Escape" && isOpen) {
        event.preventDefault();
        close();
      }
    };

    const onRequestOpen = () => {
      restoreFocusTo.current = document.activeElement;
      setIsOpen(true);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener(OPEN_EVENT, onRequestOpen);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener(OPEN_EVENT, onRequestOpen);
    };
  }, [isOpen, close]);

  useEffect(() => {
    if (!isOpen) return;
    inputRef.current?.focus();

    if (lines.length === 0) {
      nextLines("output", [
        "This prompt drives the page behind it. Type help.",
      ]);
    }
  }, [isOpen, lines.length, nextLines]);

  useEffect(() => {
    outputRef.current?.scrollTo({ top: outputRef.current.scrollHeight });
  }, [lines]);

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    const entered = input;
    if (!entered.trim()) return;

    nextLines("input", [entered]);
    setHistory((current) => [entered, ...current]);
    setHistoryIndex(null);
    setInput("");

    const context: CommandContext = {
      setTheme,
      resolvedTheme,
      print: (texts) => nextLines("output", texts),
      clear: () => setLines([]),
      close,
    };

    runCommand(entered, context);
  };

  const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
    if (history.length === 0) return;

    event.preventDefault();
    const step = event.key === "ArrowUp" ? 1 : -1;
    const nextIndex =
      historyIndex === null ? (step === 1 ? 0 : null) : historyIndex + step;

    if (nextIndex === null || nextIndex < 0) {
      setHistoryIndex(null);
      setInput("");
      return;
    }

    const clamped = Math.min(nextIndex, history.length - 1);
    setHistoryIndex(clamped);
    setInput(history[clamped]);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-background/70 px-4 pt-[12vh] backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command prompt"
        className="w-full max-w-2xl border border-border bg-background shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-2">
          <span className="text-2xs font-heading uppercase tracking-widest text-foreground-muted">
            Command prompt
          </span>
          <span className="text-2xs font-heading uppercase tracking-widest text-foreground-muted">
            Esc to close
          </span>
        </div>

        <div
          ref={outputRef}
          className="max-h-[42vh] overflow-y-auto px-4 py-3 font-mono text-xs leading-6"
        >
          {lines.map((line) => (
            <div
              key={line.id}
              className={
                line.kind === "input" ? "text-foreground" : "text-foreground-muted"
              }
            >
              {line.kind === "input" && (
                <span className="text-accent">{PROMPT} </span>
              )}
              <span className="whitespace-pre-wrap">{line.text}</span>
            </div>
          ))}
        </div>

        <form
          onSubmit={submit}
          className="flex items-center gap-2 border-t border-border px-4 py-3 font-mono text-xs"
        >
          <label htmlFor="command-input" className="text-accent">
            {PROMPT}
          </label>
          <input
            ref={inputRef}
            id="command-input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={onInputKeyDown}
            autoComplete="off"
            spellCheck={false}
            className="flex-1 bg-transparent text-foreground outline-none placeholder:text-foreground-muted"
            placeholder="help"
          />
        </form>
      </div>
    </div>
  );
}
