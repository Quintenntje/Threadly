import { categories } from "@/generated/prisma";
import FullLink from "./FullLink";
import Image from "next/image";

interface CategoryCardProps {
  category: categories;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <article className="relative h-48 w-full overflow-hidden">
      <Image
        src="/main-hero.jpg"
        alt={category.name}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <h3 className="text-white text-3xl font-semibold">{category.name}</h3>
      </div>
      <FullLink
        href={`/category/${category.name}`}
        className="absolute inset-0 z-30"
      />
    </article>
  );
};

export default CategoryCard;
