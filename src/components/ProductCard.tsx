import { PrismaClient } from "../generated/prisma";
import Image from "next/image";
import { products } from "../generated/prisma";
import FullLink from "./FullLink";

interface ProductCardProps {
  product: products;
}

const prisma = new PrismaClient();

const ProductCard = async ({ product }: ProductCardProps) => {
  const productImages = await prisma.product_images.findMany({
    where: {
      productId: product.id,
    },
  });

  const { name, price } = product;
  return (
    <article className="flex flex-col items-center justify-center relative">
      <FullLink href={`/product/${product.id}`} />
      <Image
        src={productImages[0].url}
        alt="Product image"
        width={300}
        height={300}
        className="w-72 h-72 object-cover mb-4"
      />
      <div className="flex flex-col items-center justify-center gap-2">
        <h3>{name}</h3>
        <p className="text-sm text-gray-500">€{price}</p>
      </div>
    </article>
  );
};

export default ProductCard;
