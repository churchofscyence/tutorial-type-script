"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
console.log("<------------------------- Setup ------------------------->");
const user = new user_1.User("SetUp");
console.log("Running ..." + user.projectName);
