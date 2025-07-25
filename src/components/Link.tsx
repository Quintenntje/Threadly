import Link from "next/link";

interface LinkProps {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
}

const CustomLink = ({
  children,
  href,
  variant = "primary",
  className,
}: LinkProps) => {
  const baseClasses =
    "px-4 py-2 border-2 cursor-pointer transition-colors duration-150";

  switch (variant) {
    case "primary":
      return (
        <Link
          href={href}
          className={`${baseClasses} bg-black text-white border-black hover:bg-white hover:text-black hover:border-black ${className}`}
        >
          {children}
        </Link>
      );
    case "secondary":
      return (
        <Link
          href={href}
          className={`${baseClasses} bg-none text-white border-white hover:bg-white hover:text-black ${className}`}
        >
          {children}
        </Link>
      );
    default:
      return (
        <Link
          href={href}
          className={`${baseClasses} bg-none text-black border-black hover:bg-black hover:text-white ${className}`}
        >
          {children}
        </Link>
      );
  }
};

export default CustomLink;
