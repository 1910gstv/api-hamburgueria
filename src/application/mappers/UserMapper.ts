import { IUser } from "../../domain/entities/UserEntity";

export class UserMapper {
    static createUserResponse(user: IUser) {
        return {
            id : user.id,
            name : user.name,
            lastname :user.lastname,
            email : user.email,
        }
    }
}