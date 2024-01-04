import { User } from "./user";

console.log("<------------------------- Basic Types ------------------------->");

const user = new User("Basic Types");
console.log( "Running ..." + user.projectName );

console.log("<---------------------- Tuple ---------------------->");

console.log("*** Simple Example ***");
let employee: [number, boolean, string] = [0, false, ""];

employee[0] = 1;
employee[1] = true;
employee[2] = "John";

console.log(employee.join());

employee.push(2);

console.log("*** Push Example ***");
let car: [number, string, boolean] = [0, "",  true];

let carFactory:any = [];

carFactory.push(1);
carFactory.push("ford");
carFactory.push(true);

let findCar = function (item:unknown,index: number,array: unknown[]) {
    console.log("item: " + item + " index: " + index + " array: " + array);

    if(typeof item === "number") {
        car[0] = item;
    }

    if(typeof item === "string") {
        car[1] = item;
    }

    if(typeof item === "boolean") {
        car[2] = item;
    }

}

carFactory.forEach(findCar)

console.log(car.join());

console.log("<---------------------- Unknown ---------------------->");

let a: unknown;
let b: unknown;

console.log("*** Simple Example ***");
a = 10;
b = 4;
if(typeof a === "number" && typeof b === "number") {
    let c: number = a + b;
    console.log(c);
}

console.log("*** Concatenate Or Example ***");

let d: unknown;
let e: unknown;
d = 10;
e = "Elm Street";
if(typeof d === "string" || typeof e === "string") {
    console.log("d: " + d + " e: " + e);
}

console.log("*** Reassignment ***");
let f: unknown;
f = 10;
console.log(f + " is type of " + typeof f);
f = "Elm Street";
console.log(f + " is type of " + typeof f);
