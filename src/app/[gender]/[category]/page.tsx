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

  // Map URL-friendly gender names to database names
  const genderMapping: Record<string, string> = {
    men: "Men",
    women: "Women",
    woman: "Women",
    kids: "Kids",
  };

  const dbGender = genderMapping[gender] || gender;

  console.log(
    `Searching for products: category=${category}, gender=${gender} -> ${dbGender}`
  );

  const productsData = await prisma.products.findMany({
    where: {
      category: {
        name: category,
        gender: {
          name: dbGender,
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

  console.log(`Found ${productsData.length} products`);

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
              <p className="text-sm text-gray-500 mt-2">
                Available categories for {gender}:{" "}
                {gender === "men"
                  ? "t-shirts, hoodies, jeans"
                  : gender === "woman" || gender === "women"
                  ? "dresses, blouses"
                  : gender === "kids"
                  ? "sneakers, accessories"
                  : "Unknown"}
              </p>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
