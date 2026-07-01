/*
  Warnings:

  - You are about to drop the `categorias` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `enderecos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pagamentos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pedidos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pedidosprodutos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `produtos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `usuarios` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "pedidos" DROP CONSTRAINT "id_pagamentos_fk";

-- DropForeignKey
ALTER TABLE "pedidos" DROP CONSTRAINT "id_usuariosfk";

-- DropForeignKey
ALTER TABLE "pedidosprodutos" DROP CONSTRAINT "pedidosprodutos_ibfk_1";

-- DropForeignKey
ALTER TABLE "pedidosprodutos" DROP CONSTRAINT "pedidosprodutos_ibfk_2";

-- DropForeignKey
ALTER TABLE "produtos" DROP CONSTRAINT "fk_id_categoria";

-- DropForeignKey
ALTER TABLE "usuarios" DROP CONSTRAINT "id_endereco";

-- DropTable
DROP TABLE "categorias";

-- DropTable
DROP TABLE "enderecos";

-- DropTable
DROP TABLE "pagamentos";

-- DropTable
DROP TABLE "pedidos";

-- DropTable
DROP TABLE "pedidosprodutos";

-- DropTable
DROP TABLE "produtos";

-- DropTable
DROP TABLE "usuarios";

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "lastname" VARCHAR(255) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(40) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);
