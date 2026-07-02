import { CreateUserDTO, ResponseUserDTO } from "../use-cases/UserDTO";

export interface UserGateway {
    createUser(user: CreateUserDTO): Promise<ResponseUserDTO>;
}

