import { User } from "../entities/UserEntity";

export interface IUserRepository {
  save(user: any): Promise<User>;
}
