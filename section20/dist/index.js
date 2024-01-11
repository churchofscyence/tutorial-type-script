"use strict";
var _a, _b;
console.log("<------------------------- Optional Chaining ------------------------->");
const adventurer = {
    name: 'Alice',
    cat: {
        name: 'Dinah',
    },
};
// @ts-ignore
const dogName = (_a = adventurer.dog) === null || _a === void 0 ? void 0 : _a.name;
console.log(dogName);
// Expected output: undefined
// @ts-ignore
console.log((_b = adventurer.someNonExistentMethod) === null || _b === void 0 ? void 0 : _b.call(adventurer));
// Expected output: undefined
