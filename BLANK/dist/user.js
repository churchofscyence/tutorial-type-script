"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(projectName) {
        this._projectName = '';
        this._projectName = projectName;
    }
    get projectName() {
        return this._projectName;
    }
    set projectName(value) {
        this._projectName = value;
    }
}
exports.User = User;
