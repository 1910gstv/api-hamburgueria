import { UserGateway } from "../../application/gateway/UserGateway";
import { CreateUserDTO, ResponseUserDTO } from "../../application/use-cases/UserDTO";
import { User } from "../../domain/entities/UserEntity";
import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { CreateResponseUser } from "./CreateResponseUser";

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
