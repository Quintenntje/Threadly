import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seed...");

  // Clear existing data in the correct order (respecting foreign key constraints)
  console.log("🗑️  Clearing existing data...");
  await prisma.product_images.deleteMany();
  await prisma.product_variants.deleteMany();
  await prisma.products.deleteMany();
  await prisma.categories.deleteMany();
  await prisma.gender.deleteMany();
  await prisma.user.deleteMany();

  // Res
  try {
    await prisma.$executeRaw`ALTER SEQUENCE "user_id_seq" RESTART WITH 1;`;
    await prisma.$executeRaw`ALTER SEQUENCE "products_id_seq" RESTART WITH 1;`;
    await prisma.$executeRaw`ALTER SEQUENCE "categories_id_seq" RESTART WITH 1;`;
    await prisma.$executeRaw`ALTER SEQUENCE "gender_id_seq" RESTART WITH 1;`;
    await prisma.$executeRaw`ALTER SEQUENCE "product_variants_id_seq" RESTART WITH 1;`;
    await prisma.$executeRaw`ALTER SEQUENCE "product_images_id_seq" RESTART WITH 1;`;
    console.log("🔄 Reset auto-increment sequences");
  } catch (error) {
    console.log(
      "⚠️  Could not reset sequences (this is normal for some databases)"
    );
  }

  console.log("✅ Database cleared and ready for seeding");

  // Create genders
  const men = await prisma.gender.create({
    data: { name: "Men" },
  });

  const women = await prisma.gender.create({
    data: { name: "Women" },
  });

  const kids = await prisma.gender.create({
    data: { name: "Kids" },
  });

  console.log("👥 Created genders:");
  console.log(`  - Men (ID: ${men.id})`);
  console.log(`  - Women (ID: ${women.id})`);
  console.log(`  - Kids (ID: ${kids.id})`);

  // Create categories
  const categories = await Promise.all([
    prisma.categories.create({
      data: { name: "t-shirts", genderId: men.id },
    }),
    prisma.categories.create({
      data: { name: "hoodies", genderId: men.id },
    }),
    prisma.categories.create({
      data: { name: "jeans", genderId: men.id },
    }),
    prisma.categories.create({
      data: { name: "dresses", genderId: women.id },
    }),
    prisma.categories.create({
      data: { name: "blouses", genderId: women.id },
    }),
    prisma.categories.create({
      data: { name: "sneakers", genderId: kids.id },
    }),
    prisma.categories.create({
      data: { name: "accessories", genderId: kids.id },
    }),
  ]);

  console.log("📂 Created categories:");
  categories.forEach((category, index) => {
    console.log(
      `  - ${category.name} (ID: ${category.id}, Gender ID: ${category.genderId})`
    );
  });

  // Sample products data
  const productsData = [
    {
      name: "Classic Cotton T-Shirt",
      description:
        "Premium cotton t-shirt with a comfortable fit. Perfect for everyday wear.",
      price: 29.99,
      categoryId: categories[0].id, // T-Shirts
      variants: [
        {
          size: "S",
          color: "White",
          price: 29.99,
          stock: 50,
          sku: "TS-WHITE-S",
        },
        {
          size: "M",
          color: "White",
          price: 29.99,
          stock: 75,
          sku: "TS-WHITE-M",
        },
        {
          size: "L",
          color: "White",
          price: 29.99,
          stock: 60,
          sku: "TS-WHITE-L",
        },
        {
          size: "S",
          color: "Black",
          price: 29.99,
          stock: 45,
          sku: "TS-BLACK-S",
        },
        {
          size: "M",
          color: "Black",
          price: 29.99,
          stock: 70,
          sku: "TS-BLACK-M",
        },
        {
          size: "L",
          color: "Black",
          price: 29.99,
          stock: 55,
          sku: "TS-BLACK-L",
        },
      ],
      images: [
        {
          url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
          alt: "White t-shirt front view",
        },
        {
          url: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500",
          alt: "White t-shirt back view",
        },
      ],
    },
    {
      name: "Premium Hoodie",
      description:
        "Warm and cozy hoodie made from high-quality fleece material.",
      price: 59.99,
      categoryId: categories[1].id, // Hoodies
      variants: [
        { size: "M", color: "Navy", price: 59.99, stock: 30, sku: "HD-NAVY-M" },
        { size: "L", color: "Navy", price: 59.99, stock: 25, sku: "HD-NAVY-L" },
        {
          size: "XL",
          color: "Navy",
          price: 59.99,
          stock: 20,
          sku: "HD-NAVY-XL",
        },
        { size: "M", color: "Gray", price: 59.99, stock: 35, sku: "HD-GRAY-M" },
        { size: "L", color: "Gray", price: 59.99, stock: 30, sku: "HD-GRAY-L" },
      ],
      images: [
        {
          url: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
          alt: "Navy hoodie front view",
        },
        {
          url: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500",
          alt: "Navy hoodie detail",
        },
      ],
    },
    {
      name: "Slim Fit Jeans",
      description:
        "Modern slim fit jeans with stretch comfort and classic styling.",
      price: 79.99,
      categoryId: categories[2].id, // Jeans

      variants: [
        {
          size: "30x32",
          color: "Blue",
          price: 79.99,
          stock: 20,
          sku: "JN-BLUE-30x32",
        },
        {
          size: "32x32",
          color: "Blue",
          price: 79.99,
          stock: 25,
          sku: "JN-BLUE-32x32",
        },
        {
          size: "34x32",
          color: "Blue",
          price: 79.99,
          stock: 30,
          sku: "JN-BLUE-34x32",
        },
        {
          size: "30x32",
          color: "Black",
          price: 79.99,
          stock: 15,
          sku: "JN-BLACK-30x32",
        },
        {
          size: "32x32",
          color: "Black",
          price: 79.99,
          stock: 20,
          sku: "JN-BLACK-32x32",
        },
      ],
      images: [
        {
          url: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
          alt: "Blue jeans front view",
        },
        {
          url: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500",
          alt: "Blue jeans detail",
        },
      ],
    },
    {
      name: "Summer Floral Dress",
      description: "Beautiful floral print dress perfect for summer occasions.",
      price: 89.99,
      categoryId: categories[3].id, // Dresses
      variants: [
        {
          size: "XS",
          color: "Floral",
          price: 89.99,
          stock: 15,
          sku: "DR-FLORAL-XS",
        },
        {
          size: "S",
          color: "Floral",
          price: 89.99,
          stock: 20,
          sku: "DR-FLORAL-S",
        },
        {
          size: "M",
          color: "Floral",
          price: 89.99,
          stock: 25,
          sku: "DR-FLORAL-M",
        },
        {
          size: "L",
          color: "Floral",
          price: 89.99,
          stock: 18,
          sku: "DR-FLORAL-L",
        },
      ],
      images: [
        {
          url: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500",
          alt: "Floral dress front view",
        },
        {
          url: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500",
          alt: "Floral dress detail",
        },
      ],
    },
    {
      name: "Casual Sneakers",
      description: "Comfortable and stylish sneakers for everyday wear.",
      price: 99.99,
      categoryId: categories[5].id, // Sneakers
      variants: [
        {
          size: "7",
          color: "White",
          price: 99.99,
          stock: 40,
          sku: "SN-WHITE-7",
        },
        {
          size: "8",
          color: "White",
          price: 99.99,
          stock: 50,
          sku: "SN-WHITE-8",
        },
        {
          size: "9",
          color: "White",
          price: 99.99,
          stock: 45,
          sku: "SN-WHITE-9",
        },
        {
          size: "10",
          color: "White",
          price: 99.99,
          stock: 35,
          sku: "SN-WHITE-10",
        },
        {
          size: "7",
          color: "Black",
          price: 99.99,
          stock: 35,
          sku: "SN-BLACK-7",
        },
        {
          size: "8",
          color: "Black",
          price: 99.99,
          stock: 45,
          sku: "SN-BLACK-8",
        },
        {
          size: "9",
          color: "Black",
          price: 99.99,
          stock: 40,
          sku: "SN-BLACK-9",
        },
      ],
      images: [
        {
          url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500",
          alt: "White sneakers front view",
        },
        {
          url: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500",
          alt: "White sneakers side view",
        },
      ],
    },
  ];

  // Create products with variants and images
  for (const productData of productsData) {
    const { variants, images, ...productInfo } = productData;

    const product = await prisma.products.create({
      data: productInfo,
    });

    // Create variants for this product
    await Promise.all(
      variants.map((variant) =>
        prisma.product_variants.create({
          data: {
            ...variant,
            productId: product.id,
          },
        })
      )
    );

    // Create images for this product
    await Promise.all(
      images.map((image) =>
        prisma.product_images.create({
          data: {
            ...image,
            productId: product.id,
          },
        })
      )
    );

    console.log(`✅ Created product: ${product.name} (ID: ${product.id})`);
  }

  console.log("🎉 Database seeding completed!");

  // Final verification
  const finalGenders = await prisma.gender.findMany();
  const finalCategories = await prisma.categories.findMany();
  const finalProducts = await prisma.products.findMany();

  console.log("\n📊 Final database state:");
  console.log(
    `  - Genders: ${finalGenders.length} (IDs: ${finalGenders
      .map((g) => g.id)
      .join(", ")})`
  );
  console.log(
    `  - Categories: ${finalCategories.length} (IDs: ${finalCategories
      .map((c) => c.id)
      .join(", ")})`
  );
  console.log(
    `  - Products: ${finalProducts.length} (IDs: ${finalProducts
      .map((p) => p.id)
      .join(", ")})`
  );
}

main()
  .catch((e) => {
    console.error("❌ Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
