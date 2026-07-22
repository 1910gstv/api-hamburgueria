import { Request, Response } from "express";
import { CreateCartUseCase } from "../../../application/use-cases/Cart/CreateCartUseCase";
import { FindCartByIdUseCase } from "../../../application/use-cases/Cart/FindByIdUseCase";
import { HttpError } from "../../../application/use-cases/Exceptions/Exceptions";

export class CartController {
  constructor(
    private readonly createCartUseCase: CreateCartUseCase,
    private readonly findCartByIdUseCase: FindCartByIdUseCase,
  ) {}

  public async createCart(req: Request, res: Response): Promise<Response> {
    try {
      const { user_id, items, status } = req.body;

      const data = {
        user_id,
        items,
        status,
      };

      const cart = await this.createCartUseCase.execute(data);

      return res.status(201).json(cart);
    } catch (error) {
      if (error instanceof HttpError) {
        return res.status(error.statusCode).json({
          message: error.message,
        });
      }
      const err = error as Error;
      // 1. Imprime o erro completo com o stack trace no terminal/console
      console.error("🔥 Erro não tratado no Controller:", error);

      // 2. Retorna a mensagem e a pilha de chamadas no JSON (útil no Postman/Insomnia)
      return res.status(500).json({
        message: "Erro interno do servidor.",
        error: {
          name: err.name || "Error",
          message: err.message || String(error),
          stack: err.stack, // Mostra exatamente em qual arquivo e linha estourou
        },
      });
    }
  }

  public async findCartById(req: Request<{cartId: string}>, res: Response): Promise<Response> {
    try {
      const { cartId } = req.params;

      const cart = await this.findCartByIdUseCase.execute(cartId);

      return res.status(201).json(cart);
    } catch (error) {
      if (error instanceof HttpError) {
        return res.status(error.statusCode).json({
          message: error.message,
        });
      }
      const err = error as Error;
      // 1. Imprime o erro completo com o stack trace no terminal/console
      console.error("🔥 Erro não tratado no Controller:", error);

      // 2. Retorna a mensagem e a pilha de chamadas no JSON (útil no Postman/Insomnia)
      return res.status(500).json({
        message: "Erro interno do servidor.",
        error: {
          name: err.name || "Error",
          message: err.message || String(error),
          stack: err.stack, // Mostra exatamente em qual arquivo e linha estourou
        },
      });
    }
  }
}
