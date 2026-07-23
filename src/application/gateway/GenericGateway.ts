import { ICartItem } from "../../domain/entities/CartItemEntity";
import { CreateCartItemDTO } from "../use-cases/CartItem/CartItemDTO";

export interface GenericGateway {
    create(data: CreateCartItemDTO): Promise<ICartItem | null>;
    delete(id: string): Promise<void>;
    findAll(): Promise<ICartItem[] | null>;
    findById(id: string): Promise<ICartItem | null>;
    update(data: ICartItem): Promise<ICartItem | null>; 
    findByCartId(cart_id: string): Promise<ICartItem[] | null>;
}