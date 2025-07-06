import type { Metadata } from "next";
import { sans, heading } from "@/lib/fonts";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";

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
      className={`dark debug-gaps ${sans.variable} ${heading.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
