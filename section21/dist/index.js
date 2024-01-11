"use strict";
console.log("<------------------------- Nullish coalescing operator (??) ------------------------->");
const foo = null !== null && null !== void 0 ? null : 'default string';
console.log(foo);
// Expected output: "default string"
const baz = 0 !== null && 0 !== void 0 ? 0 : 42;
console.log(baz);
// Expected output: 0
