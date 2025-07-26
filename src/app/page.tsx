import NavBar from "@/components/NavBar";
import Hero from "@/components/hero";
import { PrismaClient } from "../generated/prisma";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";


const prisma = new  PrismaClient();

const products = await prisma.products.findMany();
const categories = await prisma.categories.findMany();

export default async function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <section className="grid justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
      <section className="grid justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </section>
    </div>
  );
}
