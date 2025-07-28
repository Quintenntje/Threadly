import { PrismaClient } from "../../../generated/prisma";
import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import { products } from "../../../generated/prisma";

const prisma = new PrismaClient();

interface CategoryPageProps {
  params: {
    gender: string;
    category: string;
  };
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { gender, category } = params;

  const productsData = await prisma.products.findMany({
    where: {
      category: {
        name: category,
        gender: {
          name: gender,
        },
      },
    },
  });

  return (
    <div>
      <Container isSection>
        <SectionTitle>
          Products - {category} ({gender})
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {productsData.map((product: products) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {productsData.length === 0 && (
            <div className="col-span-full text-center">
              <p>
                No products found for {category} in {gender} category
              </p>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
