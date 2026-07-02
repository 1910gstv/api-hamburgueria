import { Request, Response } from "express";
import { UserUseCase } from "../../../application/use-cases/UserUseCase";
import { CreateUserDTO } from "../../../application/use-cases/UserDTO";

export class UserController {
    constructor(private readonly userUseCase: UserUseCase){}

    public async createUser(req: Request, res: Response): Promise<Response>{

        const { name, lastname, email, password} = req.body;

        const data: CreateUserDTO = {name, lastname, email, password};
        
        const user = await this.userUseCase.createUser(data);

        return res.status(201).json(user);
    }
}