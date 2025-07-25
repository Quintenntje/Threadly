import type { Metadata } from "next";
import { inter, playfair } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Threadly",
  description: "Threadly is a platform for selling and buying clothes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
