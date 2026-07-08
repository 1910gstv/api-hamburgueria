import { UserUseCase } from "../../application/use-cases/UserUseCase";
import { UserController } from "../../interface-adapters/controller/User/UserController";
import { UserRepositoryGateway } from "../../interface-adapters/gateways/UserRepositoryGateway";
import { PrismaUserRepository } from "../repositories/prismaUserRepository";
import { PinoLogger } from "../logger/pino-logger";

export function userControllerFactory(): UserController{
    const logger = new PinoLogger();
    const userRepository = new PrismaUserRepository();
    const userRepositoryGateway = new UserRepositoryGateway(userRepository);
    const userUseCase = new UserUseCase(userRepositoryGateway, logger);
    const userController = new UserController(userUseCase);

    return userController;
}