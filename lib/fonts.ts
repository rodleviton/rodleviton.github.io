/**
 * @fileoverview Font configuration for the Next.js application
 * @description This module configures and exports Google Fonts for use throughout the application.
 * It defines two primary fonts: Inter for body text and Montserrat for headings.
 * The fonts are configured with CSS variables for easy theming and include fallback fonts
 * for better performance and accessibility.
 *
 * @author Rod Leviton
 * @version 1.0.0
 */

import { Montserrat as HeadingFont, Inter as SansFont } from "next/font/google";

/**
 * Sans-serif font configuration using Inter from Google Fonts
 *
 * @description This is the primary body font for the application.
 * Inter is a highly legible font designed specifically for user interfaces.
 *
 * @constant {NextFont} sans - The configured sans-serif font object
 *
 * Configuration options:
 * - subsets: Includes Latin character subset
 * - variable: CSS custom property name for theming
 * - fallback: System fonts to use if Inter fails to load
 * - preload: Optimizes font loading performance
 * - weight: Available font weights from light to bold
 */
const sans = SansFont({
  subsets: ["latin"],
  variable: "--font-sans",
  fallback: ["system-ui", "Helvetica Neue", "Helvetica", "Arial"],
  preload: true,
  weight: ["300", "400", "500", "600", "700"],
});

/**
 * Heading font configuration using Montserrat from Google Fonts
 *
 * @description This is the primary heading font for the application.
 * Montserrat is a geometric sans-serif font that works well for titles and headings.
 *
 * @constant {NextFont} heading - The configured heading font object
 *
 * Configuration options:
 * - subsets: Includes Latin character subset
 * - variable: CSS custom property name for theming
 * - fallback: System fonts to use if Montserrat fails to load
 * - preload: Optimizes font loading performance
 * - weight: Available font weights from light to bold
 */
const heading = HeadingFont({
  subsets: ["latin"],
  variable: "--font-heading",
  fallback: ["system-ui", "Helvetica Neue", "Helvetica", "Arial"],
  preload: true,
  weight: ["300", "400", "500", "600", "700"],
});

/**
 * Font exports for use in the root layout and throughout the application
 *
 * @description These fonts should be imported in the root layout component
 * and their CSS variables applied to make them available globally.
 *
 * Usage example:
 * ```typescript
 * import { sans, heading } from "@/lib/fonts";
 *
 * export default function RootLayout({
 *   children,
 * }: {
 *   children: React.ReactNode;
 * }) {
 *   return (
 *     <html lang="en" className={`${sans.variable} ${heading.variable}`}>
 *       <body className="font-sans">
 *         {children}
 *       </body>
 *     </html>
 *   );
 * }
 * ```
 *
 * CSS usage:
 * ```css
 * .font-sans { font-family: var(--font-sans); }
 * .font-heading { font-family: var(--font-heading); }
 * ```
 */
export { sans, heading };
