"use client";

import Link from "next/link";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import ByGender from "./ByGender";
import { usePathname } from "next/navigation";
import MegaMenu from "./MegaMenu/MegaMenu";
import MegaMenuItem from "./MegaMenu/MegaMenuItem";
import MegeMenuCol from "./MegaMenu/MegeMenuCol";
import ExpandDropdown from "./ExpandDropdown/ExpandDropdown";
import ExpandDropdownItem from "./ExpandDropdown/ExpandDropdownItem";
import { checkUserAuth } from "@/lib/auth";
import { User as UserType } from "@/types/user";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState<string | null>(null);
  const [byGender, setByGender] = useState<string>("");
  const [user, setUser] = useState<UserType | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await checkUserAuth();
      setUser(user);
    };
    fetchUser();
  }, []);

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
      setByGender("Men");
    }
  }, [pathname]);

  const handleMegaMenu = (gender: string) => {
    setMegaMenuOpen(gender);
  };

  const handleCloseMegaMenu = () => {
    setMegaMenuOpen(null);
  };

  return (
    <nav
      onMouseLeave={() => setMegaMenuOpen(null)}
      className="relative w-full h-full p-4 max-w-7xl mx-auto"
    >
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
          {user && user.role === "user" ? (
            <Link
              className="cursor-pointer"
              href="/account"
              aria-label="Account"
            >
              <User size={24} />
            </Link>
          ) : user && user.role === "admin" ? (
            <Link
              className="cursor-pointer"
              href="/dashboard"
              aria-label="Admin"
            >
              <User size={24} />
            </Link>
          ) : (
            <Link className="cursor-pointer" href="/login" aria-label="Login">
              <User size={24} />
            </Link>
          )}
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
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {megaMenuOpen === "men" && (
        <MegaMenu onMouseLeave={handleCloseMegaMenu}>
          <div className="max-w-7xl mx-auto p-8 grid grid-cols-4 gap-8">
            <MegeMenuCol title="Clothing">
              <MegaMenuItem href="/men/t-shirts">T-Shirts</MegaMenuItem>
              <MegaMenuItem href="/men/shirts">Shirts</MegaMenuItem>
              <MegaMenuItem href="/men/jeans">Jeans</MegaMenuItem>
              <MegaMenuItem href="/men/pants">Pants</MegaMenuItem>
              <MegaMenuItem href="/men/shorts">Shorts</MegaMenuItem>
              <MegaMenuItem href="/men/jackets">Jackets</MegaMenuItem>
              <MegaMenuItem href="/men/hoodies">Hoodies</MegaMenuItem>
              <MegaMenuItem href="/men/sweaters">Sweaters</MegaMenuItem>
            </MegeMenuCol>

            <MegeMenuCol title="Shoes">
              <MegaMenuItem href="/men/sneakers">Sneakers</MegaMenuItem>
              <MegaMenuItem href="/men/boots">Boots</MegaMenuItem>
              <MegaMenuItem href="/men/dress-shoes">Dress Shoes</MegaMenuItem>
              <MegaMenuItem href="/men/sandals">Sandals</MegaMenuItem>
              <MegaMenuItem href="/men/athletic">Athletic</MegaMenuItem>
              <MegaMenuItem href="/men/casual">Casual</MegaMenuItem>
            </MegeMenuCol>

            <MegeMenuCol title="Accessories">
              <MegaMenuItem href="/men/watches">Watches</MegaMenuItem>
              <MegaMenuItem href="/men/belts">Belts</MegaMenuItem>
              <MegaMenuItem href="/men/wallets">Wallets</MegaMenuItem>
              <MegaMenuItem href="/men/bags">Bags</MegaMenuItem>
              <MegaMenuItem href="/men/jewelry">Jewelry</MegaMenuItem>
              <MegaMenuItem href="/men/sunglasses">Sunglasses</MegaMenuItem>
              <MegaMenuItem href="/men/hats">Hats</MegaMenuItem>
              <MegaMenuItem href="/men/scarves">Scarves</MegaMenuItem>
            </MegeMenuCol>

            <MegeMenuCol title="Activewear">
              <MegaMenuItem href="/men/workout-tops">Workout Tops</MegaMenuItem>
              <MegaMenuItem href="/men/workout-bottoms">
                Workout Bottoms
              </MegaMenuItem>
              <MegaMenuItem href="/men/sports-jackets">
                Sports Jackets
              </MegaMenuItem>
              <MegaMenuItem href="/men/athletic-shoes">
                Athletic Shoes
              </MegaMenuItem>
              <MegaMenuItem href="/men/swimwear">Swimwear</MegaMenuItem>
              <MegaMenuItem href="/men/underwear">Underwear</MegaMenuItem>
            </MegeMenuCol>
          </div>
        </MegaMenu>
      )}

      {megaMenuOpen === "woman" && (
        <MegaMenu onMouseLeave={handleCloseMegaMenu}>
          <div className="max-w-7xl mx-auto p-8 grid grid-cols-4 gap-8">
            <MegeMenuCol title="Clothing">
              <MegaMenuItem href="/woman/dresses">Dresses</MegaMenuItem>
              <MegaMenuItem href="/woman/tops">Tops</MegaMenuItem>
              <MegaMenuItem href="/woman/blouses">Blouses</MegaMenuItem>
              <MegaMenuItem href="/woman/jeans">Jeans</MegaMenuItem>
              <MegaMenuItem href="/woman/pants">Pants</MegaMenuItem>
              <MegaMenuItem href="/woman/skirts">Skirts</MegaMenuItem>
              <MegaMenuItem href="/woman/jackets">Jackets</MegaMenuItem>
              <MegaMenuItem href="/woman/sweaters">Sweaters</MegaMenuItem>
            </MegeMenuCol>

            <MegeMenuCol title="Shoes">
              <MegaMenuItem href="/woman/heels">Heels</MegaMenuItem>
              <MegaMenuItem href="/woman/flats">Flats</MegaMenuItem>
              <MegaMenuItem href="/woman/boots">Boots</MegaMenuItem>
              <MegaMenuItem href="/woman/sneakers">Sneakers</MegaMenuItem>
              <MegaMenuItem href="/woman/sandals">Sandals</MegaMenuItem>
              <MegaMenuItem href="/woman/athletic">Athletic</MegaMenuItem>
            </MegeMenuCol>

            <MegeMenuCol title="Accessories">
              <MegaMenuItem href="/woman/handbags">Handbags</MegaMenuItem>
              <MegaMenuItem href="/woman/wallets">Wallets</MegaMenuItem>
              <MegaMenuItem href="/woman/jewelry">Jewelry</MegaMenuItem>
              <MegaMenuItem href="/woman/watches">Watches</MegaMenuItem>
              <MegaMenuItem href="/woman/scarves">Scarves</MegaMenuItem>
              <MegaMenuItem href="/woman/belts">Belts</MegaMenuItem>
              <MegaMenuItem href="/woman/sunglasses">Sunglasses</MegaMenuItem>
              <MegaMenuItem href="/woman/hair-accessories">
                Hair Accessories
              </MegaMenuItem>
            </MegeMenuCol>

            <MegeMenuCol title="Intimates & Swim">
              <MegaMenuItem href="/woman/bras">Bras</MegaMenuItem>
              <MegaMenuItem href="/woman/underwear">Underwear</MegaMenuItem>
              <MegaMenuItem href="/woman/lingerie">Lingerie</MegaMenuItem>
              <MegaMenuItem href="/woman/swimsuits">Swimsuits</MegaMenuItem>
              <MegaMenuItem href="/woman/cover-ups">Cover-ups</MegaMenuItem>
              <MegaMenuItem href="/woman/sleepwear">Sleepwear</MegaMenuItem>
            </MegeMenuCol>
          </div>
        </MegaMenu>
      )}

      {megaMenuOpen === "kids" && (
        <MegaMenu onMouseLeave={handleCloseMegaMenu}>
          <div className="max-w-7xl mx-auto p-8 grid grid-cols-4 gap-8">
            <MegeMenuCol title="Boys (2-16)">
              <MegaMenuItem href="/kids/boys/t-shirts">T-Shirts</MegaMenuItem>
              <MegaMenuItem href="/kids/boys/shirts">Shirts</MegaMenuItem>
              <MegaMenuItem href="/kids/boys/jeans">Jeans</MegaMenuItem>
              <MegaMenuItem href="/kids/boys/pants">Pants</MegaMenuItem>
              <MegaMenuItem href="/kids/boys/shorts">Shorts</MegaMenuItem>
              <MegaMenuItem href="/kids/boys/jackets">Jackets</MegaMenuItem>
              <MegaMenuItem href="/kids/boys/shoes">Shoes</MegaMenuItem>
              <MegaMenuItem href="/kids/boys/accessories">
                Accessories
              </MegaMenuItem>
            </MegeMenuCol>

            <MegeMenuCol title="Girls (2-16)">
              <MegaMenuItem href="/kids/girls/dresses">Dresses</MegaMenuItem>
              <MegaMenuItem href="/kids/girls/tops">Tops</MegaMenuItem>
              <MegaMenuItem href="/kids/girls/jeans">Jeans</MegaMenuItem>
              <MegaMenuItem href="/kids/girls/skirts">Skirts</MegaMenuItem>
              <MegaMenuItem href="/kids/girls/shorts">Shorts</MegaMenuItem>
              <MegaMenuItem href="/kids/girls/jackets">Jackets</MegaMenuItem>
              <MegaMenuItem href="/kids/girls/shoes">Shoes</MegaMenuItem>
              <MegaMenuItem href="/kids/girls/accessories">
                Accessories
              </MegaMenuItem>
            </MegeMenuCol>

            <MegeMenuCol title="Babies (0-24m)">
              <MegaMenuItem href="/kids/babies/onesies">Onesies</MegaMenuItem>
              <MegaMenuItem href="/kids/babies/bodysuits">
                Bodysuits
              </MegaMenuItem>
              <MegaMenuItem href="/kids/babies/sleepwear">
                Sleepwear
              </MegaMenuItem>
              <MegaMenuItem href="/kids/babies/outerwear">
                Outerwear
              </MegaMenuItem>
              <MegaMenuItem href="/kids/babies/shoes">Shoes</MegaMenuItem>
              <MegaMenuItem href="/kids/babies/accessories">
                Accessories
              </MegaMenuItem>
            </MegeMenuCol>

            <MegeMenuCol title="School & Uniforms">
              <MegaMenuItem href="/kids/school-uniforms">
                School Uniforms
              </MegaMenuItem>
              <MegaMenuItem href="/kids/backpacks">Backpacks</MegaMenuItem>
              <MegaMenuItem href="/kids/lunch-boxes">Lunch Boxes</MegaMenuItem>
              <MegaMenuItem href="/kids/school-shoes">
                School Shoes
              </MegaMenuItem>
              <MegaMenuItem href="/kids/activewear">Activewear</MegaMenuItem>
              <MegaMenuItem href="/kids/swimwear">Swimwear</MegaMenuItem>
            </MegeMenuCol>
          </div>
        </MegaMenu>
      )}

      <div
        className={`flex-col items-center gap-4 p-4 bg-white z-20 transition-all duration-200 ease-in-out w-full min-h-screen mt-2
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

        {byGender === "Men" && (
          <div className="flex flex-col gap-4 w-full">
            <ExpandDropdown title="Clothing" href="/men">
              <ExpandDropdownItem href="/men/t-shirts">
                T-Shirts
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/men/shirts">Shirts</ExpandDropdownItem>
              <ExpandDropdownItem href="/men/jeans">Jeans</ExpandDropdownItem>
              <ExpandDropdownItem href="/men/pants">Pants</ExpandDropdownItem>
              <ExpandDropdownItem href="/men/shorts">Shorts</ExpandDropdownItem>
              <ExpandDropdownItem href="/men/jackets">
                Jackets
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/men/hoodies">
                Hoodies
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/men/sweaters">
                Sweaters
              </ExpandDropdownItem>
            </ExpandDropdown>

            <ExpandDropdown title="Shoes" href="/men">
              <ExpandDropdownItem href="/men/sneakers">
                Sneakers
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/men/boots">Boots</ExpandDropdownItem>
              <ExpandDropdownItem href="/men/dress-shoes">
                Dress Shoes
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/men/sandals">
                Sandals
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/men/athletic">
                Athletic
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/men/casual">Casual</ExpandDropdownItem>
            </ExpandDropdown>

            <ExpandDropdown title="Accessories" href="/men">
              <ExpandDropdownItem href="/men/watches">
                Watches
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/men/belts">Belts</ExpandDropdownItem>
              <ExpandDropdownItem href="/men/wallets">
                Wallets
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/men/bags">Bags</ExpandDropdownItem>
              <ExpandDropdownItem href="/men/jewelry">
                Jewelry
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/men/sunglasses">
                Sunglasses
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/men/hats">Hats</ExpandDropdownItem>
              <ExpandDropdownItem href="/men/scarves">
                Scarves
              </ExpandDropdownItem>
            </ExpandDropdown>

            <ExpandDropdown title="Activewear" href="/men">
              <ExpandDropdownItem href="/men/workout-tops">
                Workout Tops
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/men/workout-bottoms">
                Workout Bottoms
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/men/sports-jackets">
                Sports Jackets
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/men/athletic-shoes">
                Athletic Shoes
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/men/swimwear">
                Swimwear
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/men/underwear">
                Underwear
              </ExpandDropdownItem>
            </ExpandDropdown>
          </div>
        )}

        {byGender === "Woman" && (
          <div className="flex flex-col gap-4 w-full">
            <ExpandDropdown title="Clothing" href="/woman">
              <ExpandDropdownItem href="/woman/dresses">
                Dresses
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/woman/tops">Tops</ExpandDropdownItem>
              <ExpandDropdownItem href="/woman/blouses">
                Blouses
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/woman/jeans">Jeans</ExpandDropdownItem>
              <ExpandDropdownItem href="/woman/pants">Pants</ExpandDropdownItem>
              <ExpandDropdownItem href="/woman/skirts">
                Skirts
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/woman/jackets">
                Jackets
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/woman/sweaters">
                Sweaters
              </ExpandDropdownItem>
            </ExpandDropdown>

            <ExpandDropdown title="Shoes" href="/woman">
              <ExpandDropdownItem href="/woman/heels">Heels</ExpandDropdownItem>
              <ExpandDropdownItem href="/woman/flats">Flats</ExpandDropdownItem>
              <ExpandDropdownItem href="/woman/boots">Boots</ExpandDropdownItem>
              <ExpandDropdownItem href="/woman/sneakers">
                Sneakers
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/woman/sandals">
                Sandals
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/woman/athletic">
                Athletic
              </ExpandDropdownItem>
            </ExpandDropdown>

            <ExpandDropdown title="Accessories" href="/woman">
              <ExpandDropdownItem href="/woman/handbags">
                Handbags
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/woman/wallets">
                Wallets
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/woman/jewelry">
                Jewelry
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/woman/watches">
                Watches
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/woman/scarves">
                Scarves
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/woman/belts">Belts</ExpandDropdownItem>
              <ExpandDropdownItem href="/woman/sunglasses">
                Sunglasses
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/woman/hair-accessories">
                Hair Accessories
              </ExpandDropdownItem>
            </ExpandDropdown>

            <ExpandDropdown title="Intimates & Swim" href="/woman">
              <ExpandDropdownItem href="/woman/bras">Bras</ExpandDropdownItem>
              <ExpandDropdownItem href="/woman/underwear">
                Underwear
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/woman/lingerie">
                Lingerie
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/woman/swimsuits">
                Swimsuits
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/woman/cover-ups">
                Cover-ups
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/woman/sleepwear">
                Sleepwear
              </ExpandDropdownItem>
            </ExpandDropdown>
          </div>
        )}

        {byGender === "Kids" && (
          <div className="flex flex-col gap-4 w-full">
            <ExpandDropdown title="Boys (2-16)" href="/kids">
              <ExpandDropdownItem href="/kids/boys/t-shirts">
                T-Shirts
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/kids/boys/shirts">
                Shirts
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/kids/boys/jeans">
                Jeans
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/kids/boys/pants">
                Pants
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/kids/boys/shorts">
                Shorts
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/kids/boys/jackets">
                Jackets
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/kids/boys/shoes">
                Shoes
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/kids/boys/accessories">
                Accessories
              </ExpandDropdownItem>
            </ExpandDropdown>

            <ExpandDropdown title="Girls (2-16)" href="/kids">
              <ExpandDropdownItem href="/kids/girls/dresses">
                Dresses
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/kids/girls/tops">
                Tops
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/kids/girls/jeans">
                Jeans
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/kids/girls/skirts">
                Skirts
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/kids/girls/shorts">
                Shorts
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/kids/girls/jackets">
                Jackets
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/kids/girls/shoes">
                Shoes
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/kids/girls/accessories">
                Accessories
              </ExpandDropdownItem>
            </ExpandDropdown>

            <ExpandDropdown title="Babies (0-24m)" href="/kids">
              <ExpandDropdownItem href="/kids/babies/onesies">
                Onesies
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/kids/babies/bodysuits">
                Bodysuits
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/kids/babies/sleepwear">
                Sleepwear
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/kids/babies/outerwear">
                Outerwear
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/kids/babies/shoes">
                Shoes
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/kids/babies/accessories">
                Accessories
              </ExpandDropdownItem>
            </ExpandDropdown>

            <ExpandDropdown title="School & Uniforms" href="/kids">
              <ExpandDropdownItem href="/kids/school-uniforms">
                School Uniforms
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/kids/backpacks">
                Backpacks
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/kids/lunch-boxes">
                Lunch Boxes
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/kids/school-shoes">
                School Shoes
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/kids/activewear">
                Activewear
              </ExpandDropdownItem>
              <ExpandDropdownItem href="/kids/swimwear">
                Swimwear
              </ExpandDropdownItem>
            </ExpandDropdown>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
