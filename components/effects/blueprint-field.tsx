"use client";

import { useEffect, useRef } from "react";

/**
 * A full-page drafting field that only exists where you are looking.
 *
 * The site's dotted rules sit at roughly 1.33:1 against the background, which
 * is below the threshold of perception, so the grid they imply is invisible.
 * This lays the full field underneath the page and reveals it in a soft radius
 * around the pointer, so the drawing surface the design keeps referring to is
 * actually there when you go looking for it.
 *
 * Pointer position is written straight to custom properties rather than state,
 * so moving the mouse never re-renders React.
 */
export function BlueprintField() {
  const field = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = field.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;

    let frame = 0;
    let x = -9999;
    let y = -9999;

    const paint = () => {
      frame = 0;
      element.style.setProperty("--x", `${x}px`);
      element.style.setProperty("--y", `${y}px`);
    };

    const onMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (!frame) frame = requestAnimationFrame(paint);
    };

    const onLeave = () => {
      x = -9999;
      y = -9999;
      if (!frame) frame = requestAnimationFrame(paint);
    };

    element.style.setProperty("--on", "1");
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <div ref={field} aria-hidden="true" className="blueprint-field" />;
}
