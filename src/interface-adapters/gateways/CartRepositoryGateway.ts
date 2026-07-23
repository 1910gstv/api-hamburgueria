import { CartGateway } from "../../application/gateway/CartGateway";
import { CreateCartDTO } from "../../application/use-cases/Cart/CartDTO";
import { ICart } from "../../domain/entities/CartEntity";
import { ICartRepository } from "../../domain/repositories/ICartRepository";

export class CartRepositoryGateway implements CartGateway {
    constructor(private cartRepository: ICartRepository){}

    public async create(data: CreateCartDTO): Promise<ICart | null>{
        const cart = await this.cartRepository.create(data)
        return cart;
    }

    public async delete(id: string): Promise<void>{
        return;
    }

    public async findAll(): Promise<ICart[] | null> {
        return null;
    }

    public async findById(id: string): Promise<ICart | null> {
        const cart = await this.cartRepository.findById(id)
        if(!cart) return null
        return cart
    }

    public async update(data: ICart): Promise<ICart | null> {
        return null
    }
}