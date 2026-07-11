import { Role } from "@prisma/client";

export interface CreateUserDTO {
    name: string;
    lastname: string;
    email:string;
    password: string;
    role: Role;
}

export interface ResponseUserDTO {
    id: string;    
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
    id: string;
    name: string;
    token: string;
}
