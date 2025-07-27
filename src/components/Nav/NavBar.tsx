"use client";

import Link from "next/link";
import { Search, User, ShoppingCart, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import ByGender from "./ByGender";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [byGender, setByGender] = useState<string>("");

  const pathname = usePathname();

  useEffect(() => {
    const pathSegments = pathname.split("/").filter(Boolean);
    const genderFromUrl = pathSegments[0]?.toLowerCase();

    if (
      genderFromUrl === "men" ||
      genderFromUrl === "woman" ||
      genderFromUrl === "kids"
    ) {
      setByGender(
        genderFromUrl.charAt(0).toUpperCase() + genderFromUrl.slice(1)
      );
    } else {
      setByGender("");
    }
  }, [pathname]);

  return (
    <nav className="relative w-full p-4 max-w-7xl mx-auto">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center flex-shrink-0">
          <Link href="/">
            <span className="text-2xl font-bold">Threadly</span>
          </Link>
        </div>

        <ul className="hidden sm:flex items-center gap-6 flex-1 justify-center">
          <li className="text-sm font-medium hover:text-gray-500">
            <Link href="/">Sales</Link>
          </li>
          <li className="text-sm font-medium hover:text-gray-500">
            <Link href="/men">Men</Link>
          </li>
          <li className="text-sm font-medium hover:text-gray-500">
            <Link href="/woman">Woman</Link>
          </li>
          <li className="text-sm font-medium hover:text-gray-500">
            <Link href="/kids">Kids</Link>
          </li>
          <li className="text-sm font-medium hover:text-gray-500">
            <Link href="/">Accessories</Link>
          </li>
        </ul>

        <div className="flex items-center gap-4 flex-shrink-0">
          <Link className="cursor-pointer" href="/search" aria-label="Search">
            <Search size={24} />
          </Link>
          <Link className="cursor-pointer" href="/user" aria-label="User">
            <User size={24} />
          </Link>
          <Link
            className="cursor-pointer"
            href="/cart"
            aria-label="Shopping Cart"
          >
            <ShoppingCart size={24} />
          </Link>

          <button
            className="sm:hidden p-2 ml-2"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      <div
        className={`flex-col items-center gap-4 p-4 bg-white z-20 transition-all duration-200 ease-in-out w-full mt-2 rounded shadow sm:hidden
        ${menuOpen ? "flex" : "hidden"}`}
      >
        <div className="grid grid-cols-3 gap-4 w-full">
          <ByGender
            IsActive={byGender === "Men"}
            onClick={() => setByGender("Men")}
          >
            Men
          </ByGender>
          <ByGender
            IsActive={byGender === "Woman"}
            onClick={() => setByGender("Woman")}
          >
            Woman
          </ByGender>
          <ByGender
            IsActive={byGender === "Kids"}
            onClick={() => setByGender("Kids")}
          >
            Kids
          </ByGender>
        </div>

        <div />

        <ul className="grid grid-cols-2 gap-4 w-full">
          <li className="text-sm font-medium hover:text-gray-500">
            <Link href={`/${byGender}`}>Home</Link>
          </li>
          <li className="text-sm font-medium hover:text-gray-500">
            <Link href={`/${byGender}/clothing`}>Kleding</Link>
          </li>
          <li className="text-sm font-medium hover:text-gray-500">
            <Link href={`/${byGender}/shoes`}>Schoenen</Link>
          </li>

          <li className="text-sm font-medium hover:text-gray-500">
            <Link href={`/${byGender}/accessories`}>Accessoires</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
