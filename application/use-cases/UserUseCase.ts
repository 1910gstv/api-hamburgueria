import { User } from "../../domain/entities/UserEntity";
import { UserGateway } from "../gateway/UserGateway";
import { CreateUserDTO, ResponseUserDTO } from "./UserDTO";

export class UserUseCase {
    public userGateway : UserGateway;

    constructor(userGateway: UserGateway){
        this.userGateway = userGateway
    }

    public createUser(user: CreateUserDTO) : Promise<ResponseUserDTO>{
        
        return this.userGateway.createUser(user);
    }

}