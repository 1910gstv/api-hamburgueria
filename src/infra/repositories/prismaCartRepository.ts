import { CreateCartDTO } from "../../application/use-cases/Cart/CartDTO";
import { Cart, ICart } from "../../domain/entities/CartEntity";
import { ICartRepository } from "../../domain/repositories/ICartRepository";
import { prisma } from "../config/db";

export class PrismaCartRepository implements ICartRepository {
  public async create(data: CreateCartDTO & { total: number }): Promise<ICart> {
    // Garante que items seja ao menos um array vazio caso data.items venha undefined
    const itemsList = data.items ?? [];

    const response = await prisma.cart.create({
      data: {
        user: {
          connect: { id: data.user_id },
        },
        items: {
          create: itemsList.map((item) => ({
            product: { connect: { id: item.product_id } },
            quantity: item.quantity,
            observation: item.observation ?? "",
          })),
        },
        status: "OPEN",
        total: data.total,
      },
    });

    return new Cart(
      response.id,
      response.userId,
      response.status,
      response.total ? response.total.toNumber() : 0,
    );
  }

  public async findById(id: string): Promise<ICart | null> {
    const response = await prisma.cart.findUnique({ where: { id } });
    if (!response) return null;
    return new Cart(
      response.id,
      response.userId,
      response.status,
      response.total ? response.total.toNumber() : 0,
    );
  }
}
