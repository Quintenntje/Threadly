-- CreateTable
CREATE TABLE "adresses" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "address" TEXT,
    "address2" TEXT,
    "city" TEXT,
    "postalCode" TEXT,
    "country" TEXT,
    "phone" TEXT,

    CONSTRAINT "adresses_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "adresses" ADD CONSTRAINT "adresses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
