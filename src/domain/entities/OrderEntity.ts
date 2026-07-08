import { OrderStatus, PaymentStatus } from "@prisma/client";

export interface IOrder {
    id: string;
    created_at: string;
    status: OrderStatus;
    total: number;
    user_id: string;
    payment_status: PaymentStatus;
}

export class Order implements IOrder {
    public id: string;
    public created_at: string;
    public status: OrderStatus;
    public total: number;
    public user_id: string;
    public payment_status: PaymentStatus;

    constructor(id: string, created_at: string, status: OrderStatus, total: number, user_id: string, payment_status: PaymentStatus){
     this.id = id;
     this.created_at = created_at;
     this.status = status;
     this.total = total;
     this.user_id = user_id;
     this.payment_status = payment_status;
    }

    public changeStatus(status: OrderStatus): void {
        this.status = status;
    }
}