import { PinoLogger } from "../logger/pino-logger";
import { ProductController } from "../../interface-adapters/controller/Product/ProductController";
import { PrismaProductRepository } from "../repositories/prismaProductRepository";
import { ProductRepositoryGateway } from "../../interface-adapters/gateways/ProductRepositoryGateway";
import { CreateProductUseCase } from "../../application/use-cases/Product/CreateProductUseCase";
import { Validator } from "../../application/validators/Validator";
import { FindByIdUseCase } from "../../application/use-cases/Product/FindByIdUseCase";

export function productControllerFactory(): ProductController{
    const logger = new PinoLogger();
    const validator = new Validator();
    const productRepository = new PrismaProductRepository();
    const productRepositoryGateway = new ProductRepositoryGateway(productRepository);
    const createProductUseCase = new CreateProductUseCase(productRepositoryGateway, logger, validator);
    const findByIdProductUseCase = new FindByIdUseCase(productRepositoryGateway, logger, validator);
    const productController = new ProductController(createProductUseCase, findByIdProductUseCase);

    return productController;
}