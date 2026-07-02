import { User } from "../../domain/entities/UserEntity";

export class UserMapper {
    static createUserResponse(user: User) {
        return {
            id : user.id,
            name : user.name,
            lastname :user.lastname,
            email : user.email,
        }
    }
}