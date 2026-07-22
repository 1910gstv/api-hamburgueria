export interface ICartItem {
    id: string;
    cart_id: string;
    product_id: string;
    quantity: number;
    observation: string;
}

export class CartItem implements ICartItem{
    public id: string;
    public cart_id: string;
    public product_id: string;
    public quantity: number
    public observation: string;


    constructor(id: string, cart_id: string, product_id: string, quantity: number, observation: string){
        this.id = id;
        this.cart_id = cart_id;
        this.product_id = product_id;
        this.quantity = quantity;
        this.observation = observation;
    }

}