import { UserGateway } from "../../application/gateway/UserGateway";
import { UserMapper } from "../../application/mappers/UserMapper";
import { CreateUserDTO, LoginUserDTO, ResponseUserDTO } from "../../application/use-cases/UserDTO";
import { IUser } from "../../domain/entities/UserEntity";
import { IUserRepository } from "../../domain/repositories/IUserRepository";

export class UserRepositoryGateway implements UserGateway {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public async createUser(user: CreateUserDTO): Promise<ResponseUserDTO> {
    const savedData = await this.userRepository.save(user);

     return UserMapper.createUserResponse(savedData);

  }

  public async findUserByEmail(data: LoginUserDTO): Promise<IUser | null>{
      const foundedUser =  await this.userRepository.findUserByEmail(data);
      if(foundedUser){
        return foundedUser;
      }
    return null;
  }
}
