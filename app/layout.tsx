import type { Metadata } from "next";
import { mono } from "@/lib/fonts";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { CommandTerminal } from "@/components/terminal/command-terminal";
import { BOOT_DECISION, BootScreen } from "@/components/bios/boot-screen";
import { Crt } from "@/components/bios/crt";
import { KeyBar } from "@/components/bios/key-bar";
import { SaveExitDialog } from "@/components/bios/save-exit-dialog";
import { Screensaver } from "@/components/bios/screensaver";
import { SetupKeys } from "@/components/bios/setup-keys";
import { TitleBar } from "@/components/bios/title-bar";

const description =
  "Front-end architect in the Blue Mountains, Australia. Twenty years building interfaces, design systems and products.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rodleviton.com"),
  title: {
    default: "Rod Leviton",
    template: "%s · Rod Leviton",
  },
  description,
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Rod Leviton", url: "https://www.rodleviton.com" }],
  creator: "Rod Leviton",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://www.rodleviton.com",
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

/** Server renders it as a script; the client renders inert text, and the DOM wins. */
function InlineScript({ html }: { html: string }) {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={mono.variable} suppressHydrationWarning>
      <head>
        <InlineScript html={BOOT_DECISION} />
      </head>
      <body>
        <ThemeProvider
          attribute="data-theme"
          themes={["crt", "setup"]}
          defaultTheme="crt"
          enableSystem={false}
          storageKey="bios-theme"
          disableTransitionOnChange
        >
          <TitleBar />
          {children}
          <KeyBar />
          <CommandTerminal />
          <SaveExitDialog />
          <Screensaver />
          <SetupKeys />
          <BootScreen />
          <Crt />
        </ThemeProvider>
      </body>
    </html>
  );
}
