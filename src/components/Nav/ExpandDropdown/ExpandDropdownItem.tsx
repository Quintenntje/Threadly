import Link from "next/link";

interface ExpandDropdownItemProps {
  children: React.ReactNode;
  href: string;
}

const ExpandDropdownItem = ({ children, href }: ExpandDropdownItemProps) => {
  return (
    <li className="inline-block font-medium hover:text-gray-500">
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default ExpandDropdownItem;