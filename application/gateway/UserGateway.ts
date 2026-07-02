import { User } from "../../domain/entities/UserEntity";
import { CreateUserDTO, ResponseUserDTO } from "../use-cases/UserDTO";

export interface UserGateway {
    createUser(user: CreateUserDTO): Promise<ResponseUserDTO>;
}

