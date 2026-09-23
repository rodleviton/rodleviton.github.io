"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "introduction", label: "Main" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "presence", label: "Presence" },
];

const pad = (value: number) => String(value).padStart(2, "0");

export function TitleBar() {
  const [now, setNow] = useState<Date | null>(null);
  const [active, setActive] = useState(SECTIONS[0].id);

  // The clock only exists in the browser; a static export cannot know the time.
  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const timer = window.setInterval(tick, 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    SECTIONS.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="top">
      <div className="titlebar">
        <div className="title">
          <span className="title-version">BIOS v1981</span>
          <span className="title-name">Rod Leviton Setup Utility</span>
          <span className="title-clock">
            {now && (
              <>
                <span className="title-date">
                  {pad(now.getMonth() + 1)}/{pad(now.getDate())}/{now.getFullYear()}{" "}
                </span>
                {pad(now.getHours())}:{pad(now.getMinutes())}:{pad(now.getSeconds())}
              </>
            )}
          </span>
        </div>
      </div>
      <nav className="menu" aria-label="Sections">
        {SECTIONS.map(({ id, label }) => (
          <a key={id} href={`#${id}`} className={active === id ? "on" : undefined}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
