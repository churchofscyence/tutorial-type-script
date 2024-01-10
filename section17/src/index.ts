console.log("<------------------------- Type Casting------------------------->");

console.log(" *** 1 as *** ");
let x1: unknown = 'hello';
console.log((x1 as string).length);

console.log(" *** 2 <> *** ");
let x2: unknown = 'hello';
console.log((<string>x2).length);

console.log(" *** 3 Force Casting with () *** ");
let x3 = 'hello';
console.log( (x3 as string).length ); // x is not actually a number so this will return undefined
