export function ProjectDecorator(data : any) {

    return function(constructor: Function) {
        constructor.prototype._projectName = data.projectName;
    }
}

export function loggedMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;

    function replacementMethod(this: any, ...args: any[]) {
        console.log("LOG: Entering method.");               // extracted
        const result = originalMethod.call(this, ...args);
        console.log("LOG: Exiting method.");                // extracted
        return result;
    }

    descriptor.value = replacementMethod;
    return descriptor;
}

export function writable(target: any, propertyName: string) {
    Object.defineProperty(target, propertyName, {
        writable: true,
    });
}

