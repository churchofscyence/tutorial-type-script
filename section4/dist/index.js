"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
console.log("<------------------------- Decorator ------------------------->");
const user = new user_1.User("Decorator", "exampleUser", "example@exmaple.com");
user.addressLine1 = "1, New Avenue";
user.addressLine2 = "Bahcelievler, Istanbul";
console.log("Running ..." + user.projectName);
console.log("Address : \n" + user.address());
