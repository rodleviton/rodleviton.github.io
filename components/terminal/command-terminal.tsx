"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { runCommand, type CommandContext } from "./commands";
import { OPEN_PROMPT, isKeyboardClaimed } from "@/lib/events";

interface Line {
  id: number;
  kind: "input" | "output";
  text: string;
}

const PROMPT = "C:\\ROD>";

/** Lets the footer affordance open the prompt without lifting state. */
export const OPEN_EVENT = OPEN_PROMPT;

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
        if (!isOpen && isKeyboardClaimed()) return;
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
      if ("boot" in document.documentElement.dataset) return;
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

  // While open the prompt owns the keyboard, so the page's own keys stand down.
  useEffect(() => {
    const root = document.documentElement;
    if (isOpen) root.dataset.prompt = "";
    else delete root.dataset.prompt;
    return () => {
      delete root.dataset.prompt;
    };
  }, [isOpen]);

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
      className="prompt-scrim"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <div role="dialog" aria-modal="true" aria-label="Command prompt" className="prompt">
        <div className="prompt-title">
          <span>{PROMPT} prompt</span>
          <span>Esc closes</span>
        </div>

        <div ref={outputRef} className="prompt-out">
          {lines.map((line) => (
            <div key={line.id} className={line.kind === "input" ? "prompt-in" : undefined}>
              {line.kind === "input" && <span className="prompt-sign">{PROMPT} </span>}
              <span>{line.text}</span>
            </div>
          ))}
        </div>

        <form onSubmit={submit} className="prompt-form">
          <label htmlFor="command-input" className="prompt-sign">
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
            placeholder="help"
          />
        </form>
      </div>
    </div>
  );
}
