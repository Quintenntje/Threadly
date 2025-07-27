import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface ExpandDropdownProps {
  children: React.ReactNode;
}

const ExpandDropdown = ({ children }: ExpandDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)}>
        <ChevronDown className="w-4 h-4" />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
          {children}
        </div>
      )}
    </div>
  );
};

export default ExpandDropdown;
