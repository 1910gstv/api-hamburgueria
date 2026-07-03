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

export interface LoginUserDTO {
    email: string;
    password: string;
}

export interface LoginUserResponseDTO {
    id: number;
    name: string;
    token: string;
}
