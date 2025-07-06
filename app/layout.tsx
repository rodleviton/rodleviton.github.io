import type { Metadata } from "next";
import { sans, heading } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rod Leviton",
  description: "Front-end developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark debug-grid debug-gaps ${sans.variable} ${heading.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
