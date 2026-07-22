import { CartItemGateway } from "../../application/gateway/CartItemGateway";
import { CreateCartItemDTO } from "../../application/use-cases/CartItem/CartItemDTO";
import { ICartItem } from "../../domain/entities/CartItemEntity";
import { ICartItemRepository } from "../../domain/repositories/ICartItemRepository";

export class CartItemRepositoryGateway implements CartItemGateway {
    constructor(private cartItemRepository: ICartItemRepository){}

    public async create(data: CreateCartItemDTO): Promise<ICartItem | null>{
        const cart = await this.cartItemRepository.create(data)
        return cart;
    }

    public async delete(id: string): Promise<void>{
        return;
    }

    public async findAll(): Promise<ICartItem[] | null> {
        return null;
    }

    public async findById(id: string): Promise<ICartItem | null> {
        return null
    }

    public async update(data: ICartItem): Promise<ICartItem | null> {
        return null
    }

    public async findByCartId(cart_id: string): Promise<ICartItem[] | null> {
        const cart = await this.cartItemRepository.findByCartId(cart_id);

        if(!cart || cart.length == 0) {
            return null;
        }
        return cart;
    }
}