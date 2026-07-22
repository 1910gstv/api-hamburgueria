export interface IOrderItem {
    id: string;
    order_id: string;
    product_id: string;
    product_name: string;
    unit_price: number;
    quantity: number;
    observation?: string;
    subtotal: string;
}

export class OrderItem implements IOrderItem{
    public id: string;
    public order_id: string;
    public product_id: string;
    public product_name: string;
    public unit_price: number;
    public quantity: number;
    public observation?: string;
    public subtotal: string;

    constructor(id: string, order_id: string, product_id: string, product_name: string, unit_price: number, quantity: number, subtotal: string, observation?: string){
        this.id = id;
        this.order_id = order_id;
        this.product_id = product_id;
        this.product_name = product_name;
        this.unit_price = unit_price;
        this.quantity = quantity;
        this.observation = observation;
        this.subtotal = subtotal
    }

    public calculateSubtotal(){
        return this.unit_price * this.quantity;
    }
}