export interface CreateCartItemDTO {
    product_id: string;
    cart_id: string;
    quantity: number;
    observation?: string;
}