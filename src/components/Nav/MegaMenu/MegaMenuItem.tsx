import Link from "next/link";

interface MegaMenuItemProps {
  children: React.ReactNode;
  href: string;
}

const MegaMenuItem = ({ children, href }: MegaMenuItemProps) => {
  return (
    <li className="inline-block text-sm font-medium hover:text-gray-500">
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default MegaMenuItem;
