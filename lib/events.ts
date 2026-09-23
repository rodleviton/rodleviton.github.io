/**
 * Window events the setup utility's parts use to ask each other for things,
 * so no state has to be lifted above the page.
 */
export const OPEN_PROMPT = "rodleviton:open-command-terminal";
export const RUN_BOOT = "rodleviton:run-boot";
export const SAVE_AND_EXIT = "rodleviton:save-and-exit";

/** Set on the root element while something owns the keyboard. */
export function isKeyboardClaimed() {
  const root = document.documentElement;
  return "boot" in root.dataset || "prompt" in root.dataset || "dialog" in root.dataset;
}
