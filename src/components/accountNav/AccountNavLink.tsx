import Link from "next/link";

interface AccountNavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  className?: string;
}

const AccountNavLink = ({
  href,
  children,
  isActive,
  className,
}: AccountNavLinkProps) => {
  return (
    <Link
      href={href}
      className={`  hover:border-b-2 hover:border-black ${
        isActive ? "border-b-2 border-black" : ""
      } ${className}`}
    >
      {children}
    </Link>
  );
};

export default AccountNavLink;
