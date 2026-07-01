import { User } from "../../domain/entities/UserEntity";

export interface UserGateway {
    createUser(user: User): Promise<User>;
}

