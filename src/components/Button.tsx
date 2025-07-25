import { Loader2 } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
}

const Button = ({
  children,
  onClick,
  variant = "primary",
  className,
  isLoading,
  disabled,
}: ButtonProps) => {
  const baseClasses =
    "px-4 py-2 border-2 cursor-pointer transition-colors duration-150";

  switch (variant) {
    case "primary":
      return (
        <button
          onClick={onClick}
          className={`${baseClasses} bg-black text-white border-black hover:bg-white hover:text-black hover:border-black ${className}`}
        >
          {isLoading ? <Loader2 className="animate-spin" /> : disabled ? <Loader2 className="animate-spin" /> : children}
        </button>
      );
    case "secondary":
      return (
        <button
          onClick={onClick}
          className={`${baseClasses} bg-none text-white border-white hover:bg-white hover:text-black ${className}`}
        >
          {isLoading ? <Loader2 className="animate-spin" /> : disabled ? <Loader2 className="animate-spin" /> : children}
        </button>
      );
    default:
      return (
        <button
          onClick={onClick}
          className={`${baseClasses} bg-none text-black border-black hover:bg-black hover:text-white ${className}`}
        >
          {isLoading ? <Loader2 className="animate-spin" /> : disabled ? <Loader2 className="animate-spin" /> : children}
        </button>
      );
  }
};

export default Button;
