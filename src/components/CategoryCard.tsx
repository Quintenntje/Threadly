import { categories } from "@/generated/prisma";
import FullLink from "./FullLink";

interface CategoryCardProps {
    category: categories;
    fullLink: React.ReactNode;  
}

const CategoryCard = ({ category }: CategoryCardProps) => {
    return (
        <article className="flex flex-col items-center justify-center relative">
            <FullLink href={`/category/${category.name}`}/>
            <h3>{category.name}</h3>
        </article>
    )
};

export default CategoryCard;