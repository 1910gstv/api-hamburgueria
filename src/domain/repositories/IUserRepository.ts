import { LoginUserDTO } from "../../application/use-cases/UserDTO";
import { User } from "../entities/UserEntity";

export interface IUserRepository {
  save(user: any): Promise<User>;
  findUserByEmail(data: LoginUserDTO): Promise<User | null>;
}
