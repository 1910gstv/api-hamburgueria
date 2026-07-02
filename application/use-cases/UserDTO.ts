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