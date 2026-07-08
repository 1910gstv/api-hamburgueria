import jwt from 'jsonwebtoken';
import { UserGateway } from "../gateway/UserGateway";
import { AuthenticationDTO } from "./Auth/AuthenticationDTO";
import { CreateUserDTO, LoginUserResponseDTO, ResponseUserDTO } from "./UserDTO";
import { ILogger } from '../interfaces/ILogger';
import bcrypt from 'bcrypt';

export class UserUseCase {
  public userGateway: UserGateway;
  public logger: ILogger

  constructor(userGateway: UserGateway, logger: ILogger) {
    this.userGateway = userGateway;
    this.logger = logger;
  }

  public async createUser(user: CreateUserDTO): Promise<ResponseUserDTO | string> {
    if(user.password){
      user.password = await bcrypt.hash(user.password, 8);
    }
    return this.userGateway.createUser(user);
  }

  public async login(data: AuthenticationDTO): Promise<LoginUserResponseDTO | string> {
    const secret = process.env.SECRET_KEY;
    const findUser = await this.userGateway.findUserByEmail(data);

    if (!findUser) {
      return "User not found";
    }
    
    const comparePassword: Promise<boolean> = bcrypt.compare(data.password, findUser.password);

    if(!comparePassword){
      throw new Error('Password is not correct.')
    }

    if(!secret){
        throw new Error('Secret não encontrado')
    }

    const token = jwt.sign(
      { _id: findUser.id?.toString(), name: findUser.name },
      secret,
      { expiresIn: '24h' },
    );

    this.logger.info('Login realizado com sucesso!')

    return {
        id: findUser.id,
        name: findUser.name,
        token
    }
  }
}
