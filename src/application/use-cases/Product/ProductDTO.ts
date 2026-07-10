export interface CreateProductDTO {
    name: string;
    price: number;
    description: string;
    available: boolean;
    image?: string;
}