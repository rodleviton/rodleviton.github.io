import { IBM_Plex_Mono } from "next/font/google";

/**
 * One typeface for the whole setup utility. A BIOS screen has a single
 * character grid, so headings, body and data all share the same mono.
 */
export const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});
