import { IProduct } from "../../domain/entities/ProductEntity";
import { CreateProductDTO } from "../use-cases/Product/ProductDTO";

export interface ProductGateway {
    create(data: CreateProductDTO): Promise<IProduct>;
    delete(id: string): Promise<void>;
    findAll(): Promise<IProduct[] | null>;
    findById(id: string): Promise<IProduct | null>;
    update(data: IProduct): Promise<IProduct | null>; 
}


