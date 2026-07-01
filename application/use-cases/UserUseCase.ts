import { User } from "../../domain/entities/UserEntity";
import { UserGateway } from "../gateway/UserInterface";

export class UserUseCase {
    public userGateway : UserGateway;

    constructor(userGateway: UserGateway){
        this.userGateway = userGateway
    }

    public createUser(user: User) : Promise<User>{
        return this.userGateway.createUser(user);
    }

}