import type { Metadata } from "next";
import { inter, crimson } from "./fonts";
import "./globals.css";
import NavBar from "@/components/Nav/NavBar";
import Footer from "@/components/Footer";
import AccountNav from "@/components/accountNav/AccountNav";

export const metadata: Metadata = {
  title: "Threadly",
  description: "Threadly is a platform for selling and buying clothes",
};

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${crimson.variable}`}>
      <body className="antialiased">
        <NavBar />
        <AccountNav />

        {children}
        <Footer />
      </body>
    </html>
  );
}
