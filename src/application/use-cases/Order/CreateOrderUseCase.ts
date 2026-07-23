import { IOrder } from "../../../domain/entities/OrderEntity";

export class CreateOrderUseCase{
    constructor(private orderGateway: string ){}

    async execute(): Promise<IOrder| null>{

        return null;
    }
}