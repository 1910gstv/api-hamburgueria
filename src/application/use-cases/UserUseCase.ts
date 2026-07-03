import jwt from 'jsonwebtoken';
import { UserGateway } from "../gateway/UserGateway";
import { AuthenticationDTO } from "./Auth/AuthenticationDTO";
import { CreateUserDTO, LoginUserResponseDTO, ResponseUserDTO } from "./UserDTO";

export class UserUseCase {
  public userGateway: UserGateway;

  constructor(userGateway: UserGateway) {
    this.userGateway = userGateway;
  }

  public createUser(user: CreateUserDTO): Promise<ResponseUserDTO | string> {
    //criar logica de salvar senha criptografa
    return this.userGateway.createUser(user);
  }

  public async login(data: AuthenticationDTO): Promise<LoginUserResponseDTO | string> {
    const secret = process.env.SECRET_KEY;
    const findUser = await this.userGateway.findUserByEmail(data);
    if (!findUser) {
      return "User not found";
    }

    if(!secret){
        throw new Error('Secret não encontrado')
    }

    const token = jwt.sign(
      { _id: findUser.id?.toString(), name: findUser.name },
      secret,
      { expiresIn: '24h' },
    );

    return {
        id: findUser.id,
        name: findUser.name,
        token
    }
  }
}
