"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const base_1 = require("./decorators/base");
const project_decorator_1 = require("./decorators/project-decorator");
let User = class User extends base_1.Base {
    constructor(username, email) {
        super();
        this._usertype = "User";
        this._username = username;
        this._email = email;
    }
    greet() {
        console.log(`Hello, my name is ${this._username}`);
    }
    get usertype() {
        return this._usertype;
    }
    get email() {
        return this._email;
    }
    set email(newEmail) {
        this._email = newEmail;
    }
    get addressLine1() {
        return this._addressLine1;
    }
    set addressLine1(value) {
        this._addressLine1 = value;
    }
    get addressLine2() {
        return this._addressLine2;
    }
    set addressLine2(value) {
        this._addressLine2 = value;
    }
    get country() {
        return this._country;
    }
    set country(value) {
        this._country = value;
    }
    address() {
        return `${this._addressLine1}\n${this._addressLine2}\n${this._country}`;
    }
};
exports.User = User;
__decorate([
    project_decorator_1.writable
], User.prototype, "_usertype", void 0);
__decorate([
    project_decorator_1.loggedMethod
], User.prototype, "greet", null);
exports.User = User = __decorate([
    (0, project_decorator_1.ProjectDecorator)({ projectName: "Decorator" })
], User);
