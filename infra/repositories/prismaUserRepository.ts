import { User } from "../../domain/entities/UserEntity";
import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { prisma } from "../config/db";

export class PrismaUserRepository implements IUserRepository {
    public async save(user: any): Promise<User>{

        await prisma.user.create({data: user});

        return new User(
            1,
            'Gustavof',
            'Henrique',
            'gustavo@paula.com',
            '123456'
        )
    }
}
