import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

import Client from "./Client";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mark S. Trupiano",
  description: "Portfolio page for Mark S. Trupiano",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Client>
          {children}
        </Client>
      </body>
    </html>
  );
}
