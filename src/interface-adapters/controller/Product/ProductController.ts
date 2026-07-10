import { Request, Response } from "express";
import { CreateProductUseCase } from "../../../application/use-cases/Product/CreateProductUseCase";
import { CreateProductDTO } from "../../../application/use-cases/Product/ProductDTO";

export class ProductController {
    constructor(private readonly createProductUseCase: CreateProductUseCase){}

    public async createProduct(req: Request, res: Response): Promise<Response>{

        const { name, price, available, image, description} = req.body;

        const data: CreateProductDTO = {name, price, available, image, description};
        
        const user = await this.createProductUseCase.createProduct(data);

        return res.status(201).json(user);
    }
}