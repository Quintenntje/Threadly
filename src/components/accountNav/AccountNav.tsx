import { usePathname } from "next/navigation";
import AccountNavLink from "./AccountNavLink";

const AccountNav = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <div className="w-full bg-gray-100">
      <ul className="flex justify-center items-center flex-col gap-4 pb-4">
        <li>
          <AccountNavLink href="/account" isActive={isActive("/account")}>
            Orders
          </AccountNavLink>
        </li>
        <li>
          <AccountNavLink
            href="/account/address"
            isActive={isActive("/account/address")}
          >
            Address
          </AccountNavLink>
        </li>
      </ul>
    </div>
  );
};

export default AccountNav;
