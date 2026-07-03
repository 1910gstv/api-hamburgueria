import { Request, Response } from "express";
import { CreateUserDTO, LoginUserDTO } from "../../../application/use-cases/UserDTO";
import { UserUseCase } from "../../../application/use-cases/UserUseCase";

export class UserController {
    constructor(private readonly userUseCase: UserUseCase){}

    public async createUser(req: Request, res: Response): Promise<Response>{

        const { name, lastname, email, password} = req.body;

        const data: CreateUserDTO = {name, lastname, email, password};
        
        const user = await this.userUseCase.createUser(data);

        return res.status(201).json(user);
    }

    public async login(req: Request, res: Response): Promise<Response> {
        const { email, password} = req.body;

        const data: LoginUserDTO = {email, password};
        
        const user = await this.userUseCase.login(data);

        return res.status(201).json(user);
    }
}