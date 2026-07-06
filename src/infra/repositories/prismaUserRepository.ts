import {
  CreateUserDTO,
  LoginUserDTO,
} from "../../application/use-cases/UserDTO";
import { User } from "../../domain/entities/UserEntity";
import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { prisma } from "../config/db";

export class PrismaUserRepository implements IUserRepository {
  public async save(user: CreateUserDTO): Promise<User> {
    const response = await prisma.user.create({ data: user });

    return new User(
      response.id,
      response.name,
      response.lastname,
      response.email,
      response.password,
    );
  }

  public async findUserByEmail(data: LoginUserDTO): Promise<User | null> {
    const response = await prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });
    if (response) {
      return new User(
        response.id,
        response.name,
        response.lastname,
        response.email,
        response.password,
      );
    }

    return null;
  }
}
