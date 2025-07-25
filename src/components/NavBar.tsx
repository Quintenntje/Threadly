import Link from "next/link";
import { Search, User, ShoppingCart } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      <div className="flex items-center gap-4">
        <Link href="/">
          <span className="text-2xl font-bold">Threadly</span>
        </Link>
      </div>
      <ul className="flex items-center gap-4">
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
        <li>
        <Link href="/">New Arrivals</Link>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <Link href="/search" aria-label="Search">
          <Search size={24} />
        </Link>
        <Link href="/user" aria-label="User">
          <User size={24} />
        </Link>
        <Link href="/cart" aria-label="Shopping Cart">
          <ShoppingCart size={24} />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
