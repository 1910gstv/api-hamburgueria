import { PrismaProductRepository } from "../repositories/prismaProductRepository";
import { ProductRepositoryGateway } from "../../interface-adapters/gateways/ProductRepositoryGateway";
import { PrismaCartRepository } from "../repositories/prismaCartRepository";
import { PrismaCartItemRepository } from "../repositories/prismaCartItemRepository";
import { CartRepositoryGateway } from "../../interface-adapters/gateways/CartRepositoryGateway";
import { CartItemRepositoryGateway } from "../../interface-adapters/gateways/CartItemRepositoryGateway";
import { CreateCartUseCase } from "../../application/use-cases/Cart/CreateCartUseCase";
import { CartController } from "../../interface-adapters/controller/Cart/CartController";
import { FindCartByIdUseCase } from "../../application/use-cases/Cart/FindByIdUseCase";

export function cartControllerFactory(): CartController{
    const cartRepository = new PrismaCartRepository();
    const cartItemRepository = new PrismaCartItemRepository();
    const productRepository = new PrismaProductRepository();
    const productRepositoryGateway = new ProductRepositoryGateway(productRepository);    
    const cartRepositoryGateway = new CartRepositoryGateway(cartRepository);
    const cartItemRepositoryGateway = new CartItemRepositoryGateway(cartItemRepository);
    const createCartUseCase = new CreateCartUseCase(cartRepositoryGateway, cartItemRepositoryGateway, productRepositoryGateway);
    const findCartByIdCartUseCase = new FindCartByIdUseCase(cartRepositoryGateway, cartItemRepositoryGateway, productRepositoryGateway);
    const cartController = new CartController(createCartUseCase, findCartByIdCartUseCase);

    return cartController;
}