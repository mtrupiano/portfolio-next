import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
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
        <Header />
        {children}
      </body>
    </html>
  );
}
