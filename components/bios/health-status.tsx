"use client";

import { useEffect, useState } from "react";

type Row = [label: string, value: string];

/** Only what the browser really exposes about the visitor's machine. Nothing leaves the page. */
function readHealth(): Row[] {
  const ua = navigator.userAgent;
  const browser = /Edg\//.test(ua)
    ? "Edge"
    : /Firefox\//.test(ua)
      ? "Firefox"
      : /Chrome\//.test(ua)
        ? "Chrome"
        : /Safari\//.test(ua)
          ? "Safari"
          : "Unknown";
  const os = /iPhone|iPad/.test(ua)
    ? "iOS"
    : /Android/.test(ua)
      ? "Android"
      : /Mac OS X/.test(ua)
        ? "macOS"
        : /Windows/.test(ua)
          ? "Windows"
          : /Linux/.test(ua)
            ? "Linux"
            : "Unknown";

  const rows: Row[] = [
    ["Browser", `${browser} on ${os}`],
    ["Screen", `${screen.width} x ${screen.height}, ${window.devicePixelRatio}x`],
  ];
  if (navigator.hardwareConcurrency) rows.push(["CPU cores", String(navigator.hardwareConcurrency)]);
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
  if (memory) rows.push(["Memory", `${memory} GB or more`]);
  rows.push(["Colour scheme", matchMedia("(prefers-color-scheme: dark)").matches ? "Dark" : "Light"]);
  rows.push(["Reduced motion", matchMedia("(prefers-reduced-motion: reduce)").matches ? "On" : "Off"]);
  rows.push(["Your time", new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })]);
  return rows;
}

export function HealthStatus() {
  const [rows, setRows] = useState<Row[] | null>(null);

  useEffect(() => {
    const read = () => setRows(readHealth());
    read();
    const timer = window.setInterval(read, 30_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="health">
      <h3>PC Health Status</h3>
      <dl className="kv">
        {(rows ?? [["Browser", "Detecting..."]]).map(([label, value]) => (
          <div key={label} className="kv-row">
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
      <p className="note">Read from your browser just now. Nothing is sent anywhere.</p>
    </div>
  );
}
