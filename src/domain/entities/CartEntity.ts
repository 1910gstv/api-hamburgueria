import { CartStatus } from "@prisma/client";
import { CreateCartDTO } from "../../application/use-cases/Cart/CartDTO";

export interface ICart {
    id: string;
    user_id: string;
    status: CartStatus;
    total: number;
}

export class Cart implements ICart{
    public id: string;
    public user_id: string;
    public status: CartStatus;
    public total: number

    constructor(id: string, user_id: string, status: CartStatus, total: number){
        this.id = id,
        this.user_id = user_id,
        this.status = status,
        this.total = total
    }

}