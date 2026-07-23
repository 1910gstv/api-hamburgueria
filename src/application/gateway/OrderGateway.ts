import { IOrder } from "../../domain/entities/OrderEntity";

export interface OrderGateway {
    create(data: CreateCartItemDTO): Promise<IOrder | null>;
    delete(id: string): Promise<void>;
    findAll(): Promise<IOrder[] | null>;
    findById(id: string): Promise<IOrder | null>;
    update(data: IOrder): Promise<IOrder | null>; 
    findByCartId(cart_id: string): Promise<IOrder[] | null>;
}