"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BreadCrumbs = () => {
  const pathname = usePathname();

  const breadCrumbs = pathname
    .split("/")
    .filter(Boolean)
    .map((crumb, index, array) => {
      const href = array.slice(0, index + 1).join("/");
      return {
        label: crumb,
        href,
      };
    });

  return (
    <div className="flex items-center gap-2 text-lg mb-4">
      {breadCrumbs.map((crumb, index) => (
        <div key={crumb.href} className="flex items-center gap-2">
          <Link className="hover:underline" href={`/${crumb.href}`}>
            {crumb.label}
          </Link>
          {index < breadCrumbs.length - 1 && (
            <span className="text-gray-400">/</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumbs;
