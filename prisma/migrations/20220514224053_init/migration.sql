/*
  Warnings:

  - You are about to drop the `cliente` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "cliente";

-- CreateTable
CREATE TABLE "clientes" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "associado" BOOLEAN NOT NULL,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clientes_email_key" ON "clientes"("email");
