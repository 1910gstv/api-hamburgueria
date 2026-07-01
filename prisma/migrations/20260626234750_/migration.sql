/*
  Warnings:

  - You are about to drop the column `pedidoid` on the `pedidosprodutos` table. All the data in the column will be lost.
  - You are about to drop the column `produtoid` on the `pedidosprodutos` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "pedidosprodutos" DROP CONSTRAINT "pedidosprodutos_ibfk_1";

-- DropForeignKey
ALTER TABLE "pedidosprodutos" DROP CONSTRAINT "pedidosprodutos_ibfk_2";

-- DropIndex
DROP INDEX "pedidoid_idx";

-- DropIndex
DROP INDEX "produtoid_idx";

-- AlterTable
ALTER TABLE "pedidos" ALTER COLUMN "data_pedido" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "pedidosprodutos" DROP COLUMN "pedidoid",
DROP COLUMN "produtoid",
ADD COLUMN     "PedidoId" INTEGER,
ADD COLUMN     "ProdutoId" INTEGER;

-- CreateIndex
CREATE INDEX "PedidoId" ON "pedidosprodutos"("PedidoId");

-- CreateIndex
CREATE INDEX "ProdutoId" ON "pedidosprodutos"("ProdutoId");

-- AddForeignKey
ALTER TABLE "pedidosprodutos" ADD CONSTRAINT "pedidosprodutos_ibfk_1" FOREIGN KEY ("PedidoId") REFERENCES "pedidos"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "pedidosprodutos" ADD CONSTRAINT "pedidosprodutos_ibfk_2" FOREIGN KEY ("ProdutoId") REFERENCES "produtos"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- RenameIndex
ALTER INDEX "id_pagamentos_fk" RENAME TO "pagamentos_id";

-- RenameIndex
ALTER INDEX "id_usuariosfk" RENAME TO "usuario_id";

-- RenameIndex
ALTER INDEX "fk_id_categoria" RENAME TO "categorias_id";

-- RenameIndex
ALTER INDEX "id_endereco" RENAME TO "endereco_id";
