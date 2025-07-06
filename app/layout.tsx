import type { Metadata } from "next";
import { sans, heading } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rod Leviton",
  description: "Front-end developer",
  icons: {
    icon: "/images/favicon/favicon.ico",
    apple: "/images/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark debug-gaps debug-grid  ${sans.variable} ${heading.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
