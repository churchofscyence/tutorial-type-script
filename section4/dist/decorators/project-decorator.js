"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writable = exports.loggedMethod = exports.ProjectDecorator = void 0;
function ProjectDecorator(data) {
    return function (constructor) {
        constructor.prototype._projectName = data.projectName;
    };
}
exports.ProjectDecorator = ProjectDecorator;
function loggedMethod(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    function replacementMethod(...args) {
        console.log("LOG: Entering method."); // extracted
        const result = originalMethod.call(this, ...args);
        console.log("LOG: Exiting method."); // extracted
        return result;
    }
    descriptor.value = replacementMethod;
    return descriptor;
}
exports.loggedMethod = loggedMethod;
function writable(target, propertyName) {
    Object.defineProperty(target, propertyName, {
        writable: true,
    });
}
exports.writable = writable;
