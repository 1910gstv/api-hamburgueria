export interface CreateUserDTO {
    name: string;
    lastname: string;
    email:string;
    password: string;
}

export interface ResponseUserDTO {
    id: number;    
    name: string;
    lastname: string;
    email:string;
}

export class CreateResponseUser implements ResponseUserDTO{
    public id: number;
    public name: string;
    public lastname: string;
    public email: string;
    constructor(id: number, name:string, lastname:string, email:string){
        this.id = id;
        this.name = name;
        this.lastname =lastname;
        this.email = email;
    }
}