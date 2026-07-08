export interface IProduct {
    id: string;
    name: string;
    price: number;
    description: string;
    available: boolean;
    image?: string;
}

export class Product implements IProduct {
    public id: string;
    public name: string;
    public price: number;
    public description: string;
    public available: boolean;
    public image?: string | undefined;

    constructor(id: string, name: string, price: number, description: string, available: boolean, image?: string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.available = available;
        this.image = image;
    }

    public updatePrice(price: number): void {
        if(price <= 0){
            throw new Error('Price must be greater than zero.')
        }
        this.price = price;
    }

    public enable(): void{
        this.available = true;
    }

    public disable(): void{
        this.available = false;
    }

    public isAvailable(): boolean{
        return this.available;
    }
}
