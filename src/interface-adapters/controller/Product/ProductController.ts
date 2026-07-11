import { Request, Response } from "express";
import { CreateProductUseCase } from "../../../application/use-cases/Product/CreateProductUseCase";
import { CreateProductDTO } from "../../../application/use-cases/Product/ProductDTO";
import { HttpError } from "../../../application/use-cases/Exceptions/Exceptions";

export class ProductController {
  constructor(private readonly createProductUseCase: CreateProductUseCase) {}

  public async createProduct(req: Request, res: Response): Promise<Response> {
    try {
      const { name, price, available, image, description } = req.body;

      const data: CreateProductDTO = {
        name,
        price,
        available,
        image,
        description,
      };

      const product = await this.createProductUseCase.createProduct(data);

      return res.status(201).json(product);
    } catch (error) {
      if (error instanceof HttpError) {
        return res.status(error.statusCode).json({
          message: error.message,
        });
      }

      return res.status(500).json({
        message: "Erro interno do servidor.",
      });
    }
  }
}
