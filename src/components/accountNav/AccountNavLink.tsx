import Link from "next/link";

interface AccountNavLinkProps {
    href: string;
    children: React.ReactNode;
    isActive: boolean;
    className?: string;
}

const AccountNavLink = ({ href, children, isActive, className }: AccountNavLinkProps) => {
  return (
    <Link href={href} className={`${isActive ? "border-b-2 border-black" : "text-gray-500"} ${className}`}>
      {children}
    </Link>
  );
};

export default AccountNavLink;