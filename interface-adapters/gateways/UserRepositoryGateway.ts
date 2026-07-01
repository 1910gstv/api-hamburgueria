import { UserGateway } from "../../application/gateway/UserInterface";
import { User } from "../../domain/entities/UserEntity";
import { IUserRepository } from "../../domain/repositories/IUserRepository";

export class UserRepositoryGateway implements UserGateway {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public async createUser(user: User): Promise<User> {
    const savedData = await this.userRepository.save(user);

    return new User(
      savedData.id,
      savedData.name,
      savedData.lastName,
      savedData.email,
      savedData.password,
    );
  }
}
