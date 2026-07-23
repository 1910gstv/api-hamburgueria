import { ICart } from "../../domain/entities/CartEntity";

export interface CartGateway {
    create(data: any): Promise<ICart | null>;
    delete(id: string): Promise<void>;
    findAll(): Promise<ICart[] | null>;
    findById(id: string): Promise<ICart | null>;
    update(data: ICart): Promise<ICart | null>; 
}


