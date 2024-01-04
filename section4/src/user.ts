export class User{

    private _projectName: string = '';
    private static userType: string = "Generic";
    private _email: string;

    public username: string;
    public addressLine1: string = "";
    public addressLine2: string = "";
    public country: string = "";

    constructor(projectName: string,username: string, email: string) {
        this._projectName = projectName;
        this.username = username;
        this._email = email;
    }


    get projectName(): string {
        return this._projectName;
    }

    set projectName(value: string) {
        this._projectName = value;
    }

    get userType() {
        return User.userType;
    }

    get email() {
        return this._email;
    }

    set email(newEmail: string) {
        this._email = newEmail;
    }

    address(): any {
        return `${this.addressLine1}\n${this.addressLine2}\n${this.country}`;
    }
}
