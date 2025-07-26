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
    <article className="relative">
      <FullLink href={`/product/${product.id}`}/>
      <Image
        src={productImages[0].url}
        alt="Product image"
        width={300}
        height={300}
        className="w-72 h-72 object-cover"
      />
      <h3>{name}</h3>
      <p>{price}</p>
    </article>
  );
};

export default ProductCard;
