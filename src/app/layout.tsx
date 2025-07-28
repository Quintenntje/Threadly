import type { Metadata } from "next";
import { inter, crimson } from "./fonts";
import "./globals.css";
import NavBar from "@/components/Nav/NavBar";
import Footer from "@/components/Footer";

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
    <html lang="en" className={`${inter.variable} ${crimson.variable}`}>
      <body className="antialiased">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
