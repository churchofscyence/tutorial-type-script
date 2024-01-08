import {Base} from "./decorators/base";
import {ProjectDecorator, loggedMethod, writable} from "./decorators/project-decorator";

@ProjectDecorator({projectName: "Decorator"})
export class User extends Base {

    @writable
    private _usertype: string = "User";

    private _email!: string;
    private _username!: string;

    private _addressLine1!: string;
    private _addressLine2!: string;
    private _country!: string;

    constructor(username: string, email: string) {
        super();
        this._username = username;
        this._email = email;
    }

    @loggedMethod
    greet(){
       console.log(`Hello, my name is ${this._username}`);
    }

    get usertype(): string {
        return this._usertype;
    }


    get email() {
        return this._email;
    }

    set email(newEmail: string) {
        this._email = newEmail;
    }


    get addressLine1(): string {
        return this._addressLine1;
    }

    set addressLine1(value: string) {
        this._addressLine1 = value;
    }

    get addressLine2(): string {
        return this._addressLine2;
    }

    set addressLine2(value: string) {
        this._addressLine2 = value;
    }

    get country(): string {
        return this._country;
    }

    set country(value: string) {
        this._country = value;
    }

    address(): any {
        return `${this._addressLine1}\n${this._addressLine2}\n${this._country}`;
    }
}
