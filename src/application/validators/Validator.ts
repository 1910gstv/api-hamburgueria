export class Validator {

    public missing(data: unknown, field: string, errors: string[]) {
        if (data === undefined || data === null || data === "") {
            errors.push(field);
        }
    }

}