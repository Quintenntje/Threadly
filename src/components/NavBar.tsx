"use client";

import Link from "next/link";
import { Search, User, ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
            <Link href="/">Men</Link>
          </li>
          <li className="text-sm font-medium hover:text-gray-500">
            <Link href="/">Woman</Link>
          </li>
          <li className="text-sm font-medium hover:text-gray-500">
            <Link href="/">Kids</Link>
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
          <Link className="cursor-pointer" href="/cart" aria-label="Shopping Cart">
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
      
      <ul
        className={`flex-col items-center gap-4 p-4 bg-white z-20 transition-all duration-200 ease-in-out w-full mt-2 rounded shadow sm:hidden
        ${menuOpen ? "flex" : "hidden"}`}
      >
        <li className="text-sm font-medium hover:text-gray-500">
          <Link href="/">Sales</Link>
        </li>
        <li className="text-sm font-medium hover:text-gray-500">
          <Link href="/">Men</Link>
        </li>
        <li className="text-sm font-medium hover:text-gray-500">
          <Link href="/">Woman</Link>
        </li>
        <li className="text-sm font-medium hover:text-gray-500">
          <Link href="/">Kids</Link>
        </li>
        <li className="text-sm font-medium hover:text-gray-500">
          <Link href="/">Accessories</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
