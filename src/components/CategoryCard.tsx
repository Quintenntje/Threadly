"use client";
import { categories } from "@/generated/prisma";
import FullLink from "./FullLink";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

interface CategoryCardProps {
  category: categories;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <article
      className="relative h-48 w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src="/main-hero.jpg"
        alt={category.name}
        fill
        className="object-cover"
      />
      <div
        className={`absolute inset-0 bg-black/50 z-10 transition-opacity duration-300 ease-in-out ${
          isHovered ? "opacity-70" : "opacity-50"
        }`}
      />
      <div className="absolute inset-0 z-20 flex items-center justify-center gap-4">
        <h3 className="text-white text-3xl font-sans font-semibold uppercase">
          {category.name}
        </h3>
        <div
          className={`flex items-center justify-center bg-white border-2 border-white rounded-full p-2 transition-all duration-300 ease-in-out hover:bg-black hover:text-white ${
            isHovered ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <ChevronRight className="text-black" size={24} />
        </div>
      </div>

      <FullLink
        href={`/category/${category.name}`}
        className="absolute inset-0 z-30"
      />
    </article>
  );
};

export default CategoryCard;
