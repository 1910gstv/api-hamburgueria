import { UserUseCase } from "../../application/use-cases/UserUseCase";
import { UserController } from "../../interface-adapters/controller/User/UserController";
import { UserRepositoryGateway } from "../../interface-adapters/gateways/UserRepositoryGateway";
import { PrismaUserRepository } from "../repositories/prismaUserRepository";

export function userControllerFactory(): UserController{
    const userRepository = new PrismaUserRepository();
    const userRepositoryGateway = new UserRepositoryGateway(userRepository);
    const userUseCase = new UserUseCase(userRepositoryGateway);
    const userController = new UserController(userUseCase);

    return userController;
}