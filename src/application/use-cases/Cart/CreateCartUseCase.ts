import { CartStatus } from "@prisma/client";
import { ICart } from "../../../domain/entities/CartEntity";
import { CartGateway } from "../../gateway/CartGateway";
import { CartItemGateway } from "../../gateway/CartItemGateway";
import { ProductGateway } from "../../gateway/ProductGateway";
import { HttpError } from "../Exceptions/Exceptions";
import { CreateCartDTO } from "./CartDTO";

export class CreateCartUseCase {
    constructor(
        private cartGateway: CartGateway,
        private cartItemGateway: CartItemGateway,
        private productGateway: ProductGateway
    ){}
    // SE HOUVER MAIS DE UM PRODUTO COM O MESMO ID, DEVEM SE SOMAR
    async execute(data: CreateCartDTO): Promise<ICart | null>{
        let calculatedTotal = 0;
        const preparedItems = [];

        for(const item of data.items){
            const product = await this.productGateway.findById(item.product_id);

            if(!product){
                throw new HttpError(`Cannot find product id: ${item.product_id}`, 400)
            }

            const itemTotal = product.price * item.quantity;
            calculatedTotal += itemTotal;

            preparedItems.push({
                product_id: item.product_id,
                quantity: item.quantity,
                observation: item.observation || ""
            })

        }

        const cart = await this.cartGateway.create({
            user_id: data.user_id,
            status: CartStatus.OPEN,
            total: calculatedTotal
        })

        for(const item of preparedItems){
            await this.cartItemGateway.create({
                cart_id: cart!.id,
                product_id: item.product_id,
                quantity: item.quantity,
                observation: item.observation
            })
        }
        return cart;
    }
}