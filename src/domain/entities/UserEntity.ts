import { Role } from "@prisma/client";

export interface IUser {
    id: string,
    name: string,
    lastname: string,
    email: string,
    password: string
    role: Role
}

export class User implements IUser {
    public id: string;
    public name: string;
    public lastname: string;
    public email: string;
    public password: string;
    public role: Role;

    constructor(
        id: string, name: string, lastname: string, email: string, password: string, role: Role
    ){
        this.id = id;
        this. name = name;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.role = role;
    }

}