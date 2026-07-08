import { Role } from "@prisma/client";

export interface CreateUserDTO {
    name: string;
    lastname: string;
    email:string;
    password: string;
    role: Role;
}

export interface ResponseUserDTO {
    id: number;    
    name: string;
    lastname: string;
    email:string;
    role: Role;
}

export interface LoginUserDTO {
    email: string;
    password: string;
}

export interface LoginUserResponseDTO {
    id: number;
    name: string;
    token: string;
}
