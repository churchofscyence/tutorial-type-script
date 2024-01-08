"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
console.log("<------------------------- Literal Types ------------------------->");
const user = new user_1.User("Literal Types");
console.log("Running ..." + user.projectName);
function move(miles, direction) {
    console.log("Miles: " + miles + " Directions: " + direction);
}
move(1, "North");
