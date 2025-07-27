import Link from "next/link";

interface MegaMenuItemsProps {
  children: React.ReactNode;
  href: string;
}

const MegaMenuItems = ({ children, href }: MegaMenuItemsProps) => {
  return (
    <li className="inline-block text-sm font-medium hover:text-gray-500">
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default MegaMenuItems;
