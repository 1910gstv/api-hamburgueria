export class CreateResponseUser {
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