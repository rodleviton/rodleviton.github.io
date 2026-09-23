/** Maps a project status to its colour in the device listing. */
export function statusTone(status: string): "ok" | "warn" | "info" {
  const value = status.toLowerCase();
  if (value.startsWith("shipped") || value === "maintained") return "ok";
  if (value.startsWith("released")) return "warn";
  return "info";
}

/** Strips the scheme and trailing slash for display. */
export function displayHost(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}
