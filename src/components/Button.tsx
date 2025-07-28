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
          disabled={isLoading || disabled}
          className={`${baseClasses} bg-black text-white border-black disabled:opacity-50 disabled:cursor-not-allowed   hover:bg-white hover:text-black hover:border-black ${className}`}
        >
          {isLoading ? (
            <div className="flex justify-center items-center gap-2">
              <Loader2 className="animate-spin" />
              <span>Loading...</span>
            </div>
          ) : disabled ? (
            <div className="flex justify-center items-center gap-2">
              <Loader2 className="animate-spin" />
              <span>Loading...</span>
            </div>
          ) : (
            children
          )}
        </button>
      );
    case "secondary":
      return (
        <button
          onClick={onClick}
          disabled={isLoading || disabled}
          className={`${baseClasses} bg-none text-white border-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white hover:text-black ${className}`}
        >
          {isLoading ? (
            <div className="flex justify-center items-center gap-2">
              <Loader2 className="animate-spin" />
              <span>Loading...</span>
            </div>
          ) : disabled ? (
            <div className="flex justify-center items-center gap-2">
              <Loader2 className="animate-spin" />
              <span>Loading...</span>
            </div>
          ) : (
            children
          )}
        </button>
      );
    default:
      return (
        <button
          onClick={onClick}
          disabled={isLoading || disabled}
          className={`${baseClasses} bg-none text-black border-black disabled:opacity-50 disabled:cursor-not-allowed hover:bg-black hover:text-white ${className}`}
        >
          {isLoading ? (
            <div className="flex justify-center items-center gap-2">
              <Loader2 className="animate-spin" />
              <span>Loading...</span>
            </div>
          ) : disabled ? (
            <div className="flex justify-center items-center gap-2">
              <Loader2 className="animate-spin" />
              <span>Loading...</span>
            </div>
          ) : (
            children
          )}
        </button>
      );
  }
};

export default Button;
