import { CreateCartItemDTO } from "../../application/use-cases/CartItem/CartItemDTO";
import { ICartItem } from "../entities/CartItemEntity";

export interface ICartItemRepository {
    create(data: CreateCartItemDTO): Promise<any>;
    findByCartId(cart_id: string): Promise<ICartItem[] | null>;
}