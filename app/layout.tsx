import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luma Portfolio — Creative Portfolio",
  description: "Luma is a fictional creative portfolio concept website.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
