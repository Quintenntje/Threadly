import NavBar from "@/components/NavBar";
import Hero from "@/components/hero";
import { PrismaClient } from "../generated/prisma";
import ProductCard from "@/components/ProductCard";


const prisma = new  PrismaClient();

const products = await prisma.products.findMany();

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
    </div>
  );
}
