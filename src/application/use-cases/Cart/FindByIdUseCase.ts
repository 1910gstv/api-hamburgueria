import { CartGateway } from "../../gateway/CartGateway";
import { CartItemGateway } from "../../gateway/CartItemGateway";
import { ProductGateway } from "../../gateway/ProductGateway";
import { HttpError } from "../Exceptions/Exceptions";
import { ICartResponse } from "./CartDTO";

export class FindCartByIdUseCase {
  constructor(
    private cartGateway: CartGateway,
    private cartItemGateway: CartItemGateway,
    private productGateway: ProductGateway,
  ) {}

  async execute(id: string): Promise<ICartResponse | null> {
    const cart = await this.cartGateway.findById(id);
    if (!cart) {
      throw new HttpError(`Cart not found - id: ${id}`, 400);
    }

    const itemsCart = (await this.cartItemGateway.findByCartId(cart.id)) || [];

    const itemsWithProduct = await Promise.all(
      itemsCart.map(async (itemCart) => {
        const product = await this.productGateway.findById(itemCart.product_id);

        if (!product) return null;

        return {
          id: product.id,
          name: product.name,
          description: product.description,
          image: product.image || "",
          quantity: itemCart.quantity,
          price: product.price,
        };
      }),
    );

    const validItems = itemsWithProduct.filter(
        (item): item is NonNullable<typeof item> => item !== null
    )

    return {
        id: cart.id,
        user_id: cart.user_id,
        status: cart.status,
        total: cart.total,
        items: validItems
    }
  }
}
