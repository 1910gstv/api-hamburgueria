import { IProduct } from "../../domain/entities/ProductEntity";

export class ProductMapper{
    static createProductResponse(data: IProduct) {
        return {
            id : data.id,
            name : data.name,
            price :data.price,
            image : data.image,
            available: data.available,
            description: data.description
        }
    }
}