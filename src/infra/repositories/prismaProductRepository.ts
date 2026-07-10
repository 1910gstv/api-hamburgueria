import { CreateProductDTO } from "../../application/use-cases/Product/ProductDTO";
import { IProduct, Product } from "../../domain/entities/ProductEntity";
import { IProductRepository } from "../../domain/repositories/IProductRepository";
import { prisma } from "../config/db";

export class PrismaProductRepository implements IProductRepository {
  public async save(data: CreateProductDTO): Promise<IProduct> {
    const response = await prisma.product.create({ data });

    return new Product(
      response.id,
      response.name,
      response.price.toNumber(),
      response.description || 'Descrição padrão Produto',
      response.available,
      response.image || ''
    );
  }

}
