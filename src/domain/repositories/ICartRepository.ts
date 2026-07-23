import { ICart } from "../entities/CartEntity";

export interface ICartRepository {
    create(data: any): Promise<any>;
    findById(id: string): Promise<ICart | null>;
}