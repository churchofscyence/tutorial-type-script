"use strict";
console.log("<------------------------- Spread Operator ------------------------->");
console.log(" *** Function Overload *** ");
function foo(x, y, z) {
    console.log(x, y, z);
}
let args = [0, 1, 2];
foo(...args);
foo(3, 4, 5);
console.log(" *** Destructuring *** ");
let [x, y, ...remaining] = [1, 2, 3, 4];
console.log(x, y, remaining);
console.log("x : " + x + " y : " + y + " remaining : " + remaining);
console.log(" *** Array Assignment *** ");
let list = [1, 2];
let newList = [...list, 3, 4];
console.log(newList); // [1,2,3,4]
console.log(" *** Object Spread *** ");
let point2D = { x: 1, y: 2 };
/** Create a new object by using all the point2D props along with z */
let point3D = Object.assign(Object.assign({}, point2D), { z: 3 });
console.log(point3D);
