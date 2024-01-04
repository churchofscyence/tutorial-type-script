"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
console.log("<------------------------- Decorator ------------------------->");
const user = new user_1.User("Decorator");
console.log("Running ..." + user.projectName);
