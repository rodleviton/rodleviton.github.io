"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  // resolvedTheme is undefined until the client has hydrated, which is its own
  // guard: the label stays generic until then. The icons are driven by CSS.
  const next = resolvedTheme === "dark" ? "light" : "dark";

  return (
    <div className="relative dotted-line dotted-line-vertical">
      <div className="relative dotted-line dotted-line-horizontal">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(next)}
          aria-label={
            resolvedTheme ? `Switch to ${next} theme` : "Toggle theme"
          }
          className="hover:cursor-pointer group"
        >
          <Sun className="group-hover:text-accent h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="group-hover:text-accent absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        </Button>
      </div>
    </div>
  );
}
