"use client";

import { useEffect, useRef, useState } from "react";
import { isKeyboardClaimed } from "@/lib/events";

const IDLE_SECONDS = 60;
const SIZE = 160;
const TINTS = ["none", "hue-rotate(90deg)", "hue-rotate(180deg)", "hue-rotate(270deg)", "saturate(2)"];

/** After a minute idle, the portrait bounces around a black screen. Never for reduced motion. */
export function Screensaver() {
  const [on, setOn] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let idle = 0;
    const wake = () => {
      idle = 0;
      setOn(false);
    };
    const events = ["mousemove", "keydown", "scroll", "touchstart", "click"] as const;
    events.forEach((name) => window.addEventListener(name, wake, { passive: true, capture: true }));

    const timer = window.setInterval(() => {
      if (matchMedia("(prefers-reduced-motion: reduce)").matches || isKeyboardClaimed()) return;
      idle += 1;
      if (idle === IDLE_SECONDS) setOn(true);
    }, 1000);

    return () => {
      events.forEach((name) => window.removeEventListener(name, wake, { capture: true }));
      window.clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (!on) return;
    let x = 40;
    let y = 40;
    let dx = 2;
    let dy = 1.6;
    let tint = 0;
    let frame = 0;

    const step = () => {
      const image = imageRef.current;
      if (!image) return;
      const maxX = window.innerWidth - SIZE;
      const maxY = window.innerHeight - SIZE;
      x += dx;
      y += dy;
      if (x < 0 || x > maxX) {
        dx = -dx;
        x = Math.max(0, Math.min(maxX, x));
        image.style.filter = TINTS[(tint = (tint + 1) % TINTS.length)];
      }
      if (y < 0 || y > maxY) {
        dy = -dy;
        y = Math.max(0, Math.min(maxY, y));
        image.style.filter = TINTS[(tint = (tint + 1) % TINTS.length)];
      }
      image.style.transform = `translate(${x}px, ${y}px)`;
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [on]);

  if (!on) return null;

  return (
    <div className="saver" aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img ref={imageRef} src="/images/portrait.png" alt="" width={SIZE} height={SIZE} />
      <p>Screen saver. Move the mouse or press a key.</p>
    </div>
  );
}
