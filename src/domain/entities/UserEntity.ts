export interface IUser {
    id: number,
    name: string,
    lastname: string,
    email: string,
    password: string
    role: string
}

export class User implements IUser {
    public id: number;
    public name: string;
    public lastname: string;
    public email: string;
    public password: string;
    public role: string;

    constructor(
        id: number, name: string, lastname: string, email: string, password: string, role: string
    ){
        this.id = id;
        this. name = name;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.role = role;
    }

}