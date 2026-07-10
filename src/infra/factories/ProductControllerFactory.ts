import { PinoLogger } from "../logger/pino-logger";
import { ProductController } from "../../interface-adapters/controller/Product/ProductController";
import { PrismaProductRepository } from "../repositories/prismaProductRepository";
import { ProductRepositoryGateway } from "../../interface-adapters/gateways/ProductRepositoryGateway";
import { CreateProductUseCase } from "../../application/use-cases/Product/CreateProductUseCase";

export function productControllerFactory(): ProductController{
    const logger = new PinoLogger();
    const productRepository = new PrismaProductRepository();
    const productRepositoryGateway = new ProductRepositoryGateway(productRepository);
    const productUseCase = new CreateProductUseCase(productRepositoryGateway, logger);
    const productController = new ProductController(productUseCase);

    return productController;
}