import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

interface ExpandDropdownProps {
  children: React.ReactNode;
  title: string;
  href: string;
}

const ExpandDropdown = ({ children, title, href }: ExpandDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      <button className="flex items-center justify-between  w-full gap-2">
        <Link href={href} className="text-xl font-medium ">
          {title}
        </Link>
        <ChevronDown
          onClick={() => setIsOpen(!isOpen)}
          className={`w-8 h-8 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out bg-white z-50 w-full ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 p-2">{children}</div>
      </div>
    </div>
  );
};

export default ExpandDropdown;
