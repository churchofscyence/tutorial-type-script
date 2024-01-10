"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.absolute = exports.phi = exports.pi = void 0;
exports.pi = 3.14;
exports.phi = 1.61;
function absolute(num) {
    if (num < 0)
        return num * -1;
    return num;
}
exports.absolute = absolute;
