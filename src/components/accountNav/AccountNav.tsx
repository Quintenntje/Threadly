"use client";
import { usePathname } from "next/navigation";
import AccountNavLink from "./AccountNavLink";

const AccountNav = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <div className="flex justify-between items-center w-full min-h-[50px] bg-gray-100 px-4">
      <div className="w-20"></div>

      <ul className="flex justify-center items-center gap-4 h-full">
        <li className="h-full">
          <AccountNavLink href="/account" isActive={isActive("/account")}>
            Orders
          </AccountNavLink>
        </li>
        <li className="h-full">
          <AccountNavLink
            href="/account/address"
            isActive={isActive("/account/address")}
          >
            Address
          </AccountNavLink>
        </li>
      </ul>

      <div className="flex justify-end items-center h-full w-20">
        <AccountNavLink href="/account/logout" isActive={false}>
          Logout
        </AccountNavLink>
      </div>
    </div>
  );
};

export default AccountNav;
