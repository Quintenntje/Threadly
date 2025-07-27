import NavBar from "@/components/Nav/NavBar";
import Hero from "@/components/hero";
import Footer from "@/components/Footer";
import { PrismaClient } from "../generated/prisma";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import SectionTitle from "@/components/SectionTitle";
import Container from "@/components/Container";

const prisma = new PrismaClient();

const products = await prisma.products.findMany();
const categories = await prisma.categories.findMany();

export default async function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Container isSection>
        <SectionTitle>Products</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
      <Container isSection>
        <SectionTitle>Categories</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </Container>
      <Footer />
    </div>
  );
}
