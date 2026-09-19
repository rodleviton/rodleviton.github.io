import type { Metadata } from "next";
import { sans, heading } from "@/lib/fonts";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { SiteFooter } from "@/components/layout/site-footer";
import { CommandTerminal } from "@/components/terminal/command-terminal";

const description =
  "Front-end architect in the Blue Mountains, Australia. Twenty years building interfaces, design systems and products.";

export const metadata: Metadata = {
  metadataBase: new URL("https://rodleviton.github.io"),
  title: {
    default: "Rod Leviton",
    template: "%s · Rod Leviton",
  },
  description,
  authors: [{ name: "Rod Leviton", url: "https://rodleviton.github.io" }],
  creator: "Rod Leviton",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://rodleviton.github.io",
    siteName: "Rod Leviton",
    title: "Rod Leviton",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Rod Leviton",
    description,
  },
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
      lang="en-AU"
      className={`dark ${sans.variable} ${heading.variable}`}
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
          <SiteFooter />
          <CommandTerminal />
        </ThemeProvider>
      </body>
    </html>
  );
}
