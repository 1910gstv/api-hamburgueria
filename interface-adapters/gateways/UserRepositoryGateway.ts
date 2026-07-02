import { UserGateway } from "../../application/gateway/UserGateway";
import { CreateResponseUser, CreateUserDTO, ResponseUserDTO } from "../../application/use-cases/UserDTO";
import { IUserRepository } from "../../domain/repositories/IUserRepository";

export class UserRepositoryGateway implements UserGateway {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public async createUser(user: CreateUserDTO): Promise<ResponseUserDTO> {
    const savedData = await this.userRepository.save(user);

     return new CreateResponseUser(
      savedData.id,
      savedData.name,
      savedData.lastname,
      savedData.email,
     )

  }
}
