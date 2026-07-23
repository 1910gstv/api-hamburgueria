import { CreateCartItemDTO } from "../../application/use-cases/CartItem/CartItemDTO";
import { CartItem, ICartItem } from "../../domain/entities/CartItemEntity";
import { ICartItemRepository } from "../../domain/repositories/ICartItemRepository";
import { prisma } from "../config/db";

export class PrismaCartItemRepository implements ICartItemRepository {
  public async create(data: CreateCartItemDTO): Promise<ICartItem> {
    const response = await prisma.cartItem.create({
      data: {
        quantity: data.quantity,
        observation: data.observation ?? "",
        cart: {
          connect: { id: data.cart_id },
        },
        product: {
          connect: { id: data.product_id },
        },
      },
    });

    return new CartItem(
      response.id,
      response.cartId,
      response.productId,
      response.quantity,
      response.observation || "",
    );
  }

  public async findByCartId(cart_id: string): Promise<ICartItem[] | null> {
    let items = [];
    const response = await prisma.cartItem.findMany({
      where: {
        cartId: cart_id,
      },
    });

    if (!response) {
      return null;
    }

    for (let item of response) {
      const newItem = new CartItem(
        item.id,
        item.cartId,
        item.productId,
        item.quantity,
        item.observation || "",
      );

      items.push(newItem);
    }

    return items;
  }
}
