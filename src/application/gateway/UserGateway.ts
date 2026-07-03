import { IUser } from "../../domain/entities/UserEntity";
import { CreateUserDTO, ResponseUserDTO, LoginUserDTO } from "../use-cases/UserDTO";

export interface UserGateway {
    createUser(user: CreateUserDTO): Promise<ResponseUserDTO>;
    findUserByEmail(data: LoginUserDTO): Promise<IUser | null>;
}

