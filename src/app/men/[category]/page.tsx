import { PrismaClient } from "../../../generated/prisma";
import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import { products } from "../../../generated/prisma";
import SubpageTitle from "@/components/SubpageTitle";
import BreadCrumbs from "@/components/BreadCrumbs";
import SectionTitle from "@/components/SectionTitle";

const prisma = new PrismaClient();

interface CategoryPageProps {
  params: {
    category: string;
  };
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { category } = params;
  const gender = "Men";

  const productsData = await prisma.products.findMany({
    where: {
      category: {
        name: category,
        gender: {
          name: gender,
        },
      },
    },
    include: {
      category: {
        include: {
          gender: true,
        },
      },
    },
  });

  return (
    <div>
      <Container isSection>
        <BreadCrumbs />
        <SectionTitle>
          Products - {category} ({gender})
        </SectionTitle>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {productsData.map((product: products) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {productsData.length === 0 && (
            <div className="col-span-full text-center">
              <p>
                No products found for {category} in {gender} category
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Available categories for {gender}: t-shirts, hoodies, jeans
              </p>
            </div>
          )}
        </section>
      </Container>
    </div>
  );
};

export default CategoryPage;
