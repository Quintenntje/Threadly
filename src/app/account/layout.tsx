import type { Metadata } from "next";
import "../globals.css";
import AccountNav from "@/components/accountNav/AccountNav";
import Container from "@/components/Container";

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
    <>
      <AccountNav />
      <Container>{children}</Container>
    </>
  );
}
