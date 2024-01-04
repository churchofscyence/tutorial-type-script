"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(projectName, username, email) {
        this._projectName = '';
        this.addressLine1 = "";
        this.addressLine2 = "";
        this.country = "";
        this._projectName = projectName;
        this.username = username;
        this._email = email;
    }
    get projectName() {
        return this._projectName;
    }
    set projectName(value) {
        this._projectName = value;
    }
    get userType() {
        return User.userType;
    }
    get email() {
        return this._email;
    }
    set email(newEmail) {
        this._email = newEmail;
    }
    address() {
        return `${this.addressLine1}\n${this.addressLine2}\n${this.country}`;
    }
}
exports.User = User;
User.userType = "Generic";
