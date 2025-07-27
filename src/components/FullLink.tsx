import Link from "next/link";

interface FullLinkProps {
  href: string;
  className?: string;
}

const FullLink = ({
  href,
  className = "w-full h-full absolute top-0 left-0",
}: FullLinkProps) => {
  return (
    <Link className={className} aria-label={`Go to ${href}`} href={href}></Link>
  );
};

export default FullLink;
