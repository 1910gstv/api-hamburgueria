export interface IUser {
    id: number,
    name: string,
    lastName: string,
    email: string,
    password: string
}

export class User implements IUser {
    public id: number;
    public name: string;
    public lastName: string;
    public email: string;
    public password: string;

    constructor(
        id: number, name: string, lastName: string, email: string, password: string
    ){
        this.id = id;
        this. name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

}