import Link from "next/link";

interface FullLinkProps {
  href: string;
}

const FullLink = ({ href }: FullLinkProps) => {
  return (
    <Link
      className="w-full h-full absolute top-0 left-0"
      aria-label={`Go to ${href}`}
      href={href}
    ></Link>
  );
};

export default FullLink;
