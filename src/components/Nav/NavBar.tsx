"use client";

import Link from "next/link";
import { Search, User, ShoppingCart, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import ByGender from "./ByGender";
import { usePathname } from "next/navigation";
import MegaMenu from "./MegaMenu/MegaMenu";
import MegaMenuItems from "./MegaMenu/MegaMenuItems";
import MegeMenuCol from "./MegaMenu/MegeMenuCol";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState<string | null>(null);
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

  const handleMegaMenu = (gender: string) => {
    setMegaMenuOpen(gender);
  };

  const handleCloseMegaMenu = () => {
    setMegaMenuOpen(null);
  };

  return (
    <nav className="relative w-full p-4 max-w-7xl mx-auto">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center flex-shrink-0">
          <Link href="/">
            <span className="text-2xl font-bold">Threadly</span>
          </Link>
        </div>

        <ul className="hidden sm:flex items-center gap-12 flex-1 justify-center">
          <li className="text-lg font-medium hover:text-gray-500">
            <Link href="/">Sales</Link>
          </li>

          <li className="relative">
            <div
              onMouseEnter={() => handleMegaMenu("men")}

              className="text-lg font-medium hover:text-gray-500"
            >
              <Link href="/men">Men</Link>
            </div>
          </li>

          <li className="relative">
            <div
              onMouseEnter={() => handleMegaMenu("woman")}
            
              className="text-lg font-medium hover:text-gray-500"
            >
              <Link href="/woman">Woman</Link>
            </div>
          </li>

          <li className="relative">
            <div
              onMouseEnter={() => handleMegaMenu("kids")}
            
              className="text-lg font-medium hover:text-gray-500"
            >
              <Link href="/kids">Kids</Link>
            </div>
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

      {megaMenuOpen === "men" && (
        <MegaMenu onMouseLeave={handleCloseMegaMenu}>
          <div className="max-w-7xl mx-auto p-8 grid grid-cols-4 gap-8">
            <MegeMenuCol title="Clothing">
              <MegaMenuItems href="/men/t-shirts">T-Shirts</MegaMenuItems>
              <MegaMenuItems href="/men/shirts">Shirts</MegaMenuItems>
              <MegaMenuItems href="/men/jeans">Jeans</MegaMenuItems>
              <MegaMenuItems href="/men/pants">Pants</MegaMenuItems>
              <MegaMenuItems href="/men/shorts">Shorts</MegaMenuItems>
              <MegaMenuItems href="/men/jackets">Jackets</MegaMenuItems>
              <MegaMenuItems href="/men/hoodies">Hoodies</MegaMenuItems>
              <MegaMenuItems href="/men/sweaters">Sweaters</MegaMenuItems>
            </MegeMenuCol>

            <MegeMenuCol title="Shoes">
              <MegaMenuItems href="/men/sneakers">Sneakers</MegaMenuItems>
              <MegaMenuItems href="/men/boots">Boots</MegaMenuItems>
              <MegaMenuItems href="/men/dress-shoes">Dress Shoes</MegaMenuItems>
              <MegaMenuItems href="/men/sandals">Sandals</MegaMenuItems>
              <MegaMenuItems href="/men/athletic">Athletic</MegaMenuItems>
              <MegaMenuItems href="/men/casual">Casual</MegaMenuItems>
            </MegeMenuCol>

            <MegeMenuCol title="Accessories">
              <MegaMenuItems href="/men/watches">Watches</MegaMenuItems>
              <MegaMenuItems href="/men/belts">Belts</MegaMenuItems>
              <MegaMenuItems href="/men/wallets">Wallets</MegaMenuItems>
              <MegaMenuItems href="/men/bags">Bags</MegaMenuItems>
              <MegaMenuItems href="/men/jewelry">Jewelry</MegaMenuItems>
              <MegaMenuItems href="/men/sunglasses">Sunglasses</MegaMenuItems>
              <MegaMenuItems href="/men/hats">Hats</MegaMenuItems>
              <MegaMenuItems href="/men/scarves">Scarves</MegaMenuItems>
            </MegeMenuCol>

            <MegeMenuCol title="Activewear">
              <MegaMenuItems href="/men/workout-tops">
                Workout Tops
              </MegaMenuItems>
              <MegaMenuItems href="/men/workout-bottoms">
                Workout Bottoms
              </MegaMenuItems>
              <MegaMenuItems href="/men/sports-jackets">
                Sports Jackets
              </MegaMenuItems>
              <MegaMenuItems href="/men/athletic-shoes">
                Athletic Shoes
              </MegaMenuItems>
              <MegaMenuItems href="/men/swimwear">Swimwear</MegaMenuItems>
              <MegaMenuItems href="/men/underwear">Underwear</MegaMenuItems>
            </MegeMenuCol>
          </div>
        </MegaMenu>
      )}

      {megaMenuOpen === "woman" && (
        <MegaMenu onMouseLeave={handleCloseMegaMenu}>
          <div className="max-w-7xl mx-auto p-8 grid grid-cols-4 gap-8">
            <MegeMenuCol title="Clothing">
              <MegaMenuItems href="/woman/dresses">Dresses</MegaMenuItems>
              <MegaMenuItems href="/woman/tops">Tops</MegaMenuItems>
              <MegaMenuItems href="/woman/blouses">Blouses</MegaMenuItems>
              <MegaMenuItems href="/woman/jeans">Jeans</MegaMenuItems>
              <MegaMenuItems href="/woman/pants">Pants</MegaMenuItems>
              <MegaMenuItems href="/woman/skirts">Skirts</MegaMenuItems>
              <MegaMenuItems href="/woman/jackets">Jackets</MegaMenuItems>
              <MegaMenuItems href="/woman/sweaters">Sweaters</MegaMenuItems>
            </MegeMenuCol>

            <MegeMenuCol title="Shoes">
              <MegaMenuItems href="/woman/heels">Heels</MegaMenuItems>
              <MegaMenuItems href="/woman/flats">Flats</MegaMenuItems>
              <MegaMenuItems href="/woman/boots">Boots</MegaMenuItems>
              <MegaMenuItems href="/woman/sneakers">Sneakers</MegaMenuItems>
              <MegaMenuItems href="/woman/sandals">Sandals</MegaMenuItems>
              <MegaMenuItems href="/woman/athletic">Athletic</MegaMenuItems>
            </MegeMenuCol>

            <MegeMenuCol title="Accessories">
              <MegaMenuItems href="/woman/handbags">Handbags</MegaMenuItems>
              <MegaMenuItems href="/woman/wallets">Wallets</MegaMenuItems>
              <MegaMenuItems href="/woman/jewelry">Jewelry</MegaMenuItems>
              <MegaMenuItems href="/woman/watches">Watches</MegaMenuItems>
              <MegaMenuItems href="/woman/scarves">Scarves</MegaMenuItems>
              <MegaMenuItems href="/woman/belts">Belts</MegaMenuItems>
              <MegaMenuItems href="/woman/sunglasses">Sunglasses</MegaMenuItems>
              <MegaMenuItems href="/woman/hair-accessories">
                Hair Accessories
              </MegaMenuItems>
            </MegeMenuCol>

            <MegeMenuCol title="Intimates & Swim">
              <MegaMenuItems href="/woman/bras">Bras</MegaMenuItems>
              <MegaMenuItems href="/woman/underwear">Underwear</MegaMenuItems>
              <MegaMenuItems href="/woman/lingerie">Lingerie</MegaMenuItems>
              <MegaMenuItems href="/woman/swimsuits">Swimsuits</MegaMenuItems>
              <MegaMenuItems href="/woman/cover-ups">Cover-ups</MegaMenuItems>
              <MegaMenuItems href="/woman/sleepwear">Sleepwear</MegaMenuItems>
            </MegeMenuCol>
          </div>
        </MegaMenu>
      )}

      {megaMenuOpen === "kids" && (
        <MegaMenu onMouseLeave={handleCloseMegaMenu}>
          <div className="max-w-7xl mx-auto p-8 grid grid-cols-4 gap-8">
            <MegeMenuCol title="Boys (2-16)">
              <MegaMenuItems href="/kids/boys/t-shirts">T-Shirts</MegaMenuItems>
              <MegaMenuItems href="/kids/boys/shirts">Shirts</MegaMenuItems>
              <MegaMenuItems href="/kids/boys/jeans">Jeans</MegaMenuItems>
              <MegaMenuItems href="/kids/boys/pants">Pants</MegaMenuItems>
              <MegaMenuItems href="/kids/boys/shorts">Shorts</MegaMenuItems>
              <MegaMenuItems href="/kids/boys/jackets">Jackets</MegaMenuItems>
              <MegaMenuItems href="/kids/boys/shoes">Shoes</MegaMenuItems>
              <MegaMenuItems href="/kids/boys/accessories">
                Accessories
              </MegaMenuItems>
            </MegeMenuCol>

            <MegeMenuCol title="Girls (2-16)">
              <MegaMenuItems href="/kids/girls/dresses">Dresses</MegaMenuItems>
              <MegaMenuItems href="/kids/girls/tops">Tops</MegaMenuItems>
              <MegaMenuItems href="/kids/girls/jeans">Jeans</MegaMenuItems>
              <MegaMenuItems href="/kids/girls/skirts">Skirts</MegaMenuItems>
              <MegaMenuItems href="/kids/girls/shorts">Shorts</MegaMenuItems>
              <MegaMenuItems href="/kids/girls/jackets">Jackets</MegaMenuItems>
              <MegaMenuItems href="/kids/girls/shoes">Shoes</MegaMenuItems>
              <MegaMenuItems href="/kids/girls/accessories">
                Accessories
              </MegaMenuItems>
            </MegeMenuCol>

            <MegeMenuCol title="Babies (0-24m)">
              <MegaMenuItems href="/kids/babies/onesies">Onesies</MegaMenuItems>
              <MegaMenuItems href="/kids/babies/bodysuits">
                Bodysuits
              </MegaMenuItems>
              <MegaMenuItems href="/kids/babies/sleepwear">
                Sleepwear
              </MegaMenuItems>
              <MegaMenuItems href="/kids/babies/outerwear">
                Outerwear
              </MegaMenuItems>
              <MegaMenuItems href="/kids/babies/shoes">Shoes</MegaMenuItems>
              <MegaMenuItems href="/kids/babies/accessories">
                Accessories
              </MegaMenuItems>
            </MegeMenuCol>

            <MegeMenuCol title="School & Uniforms">
              <MegaMenuItems href="/kids/school-uniforms">
                School Uniforms
              </MegaMenuItems>
              <MegaMenuItems href="/kids/backpacks">Backpacks</MegaMenuItems>
              <MegaMenuItems href="/kids/lunch-boxes">
                Lunch Boxes
              </MegaMenuItems>
              <MegaMenuItems href="/kids/school-shoes">
                School Shoes
              </MegaMenuItems>
              <MegaMenuItems href="/kids/activewear">Activewear</MegaMenuItems>
              <MegaMenuItems href="/kids/swimwear">Swimwear</MegaMenuItems>
            </MegeMenuCol>
          </div>
        </MegaMenu>
      )}

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
            <Link href={`/${byGender}/clothing`}>Clothing</Link>
          </li>
          <li className="text-sm font-medium hover:text-gray-500">
            <Link href={`/${byGender}/shoes`}>Shoes</Link>
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
