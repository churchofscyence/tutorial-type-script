"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
console.log("<------------------------- Decorator ------------------------->");
const user = new user_1.User("John Smith", "JohnSmithe@gmail.com");
user.addressLine1 = "1 New Avenue";
user.addressLine2 = "New York, Germany";
console.log("Project Name: " + user.projectName);
user.greet();
console.log("User Type: " + user.usertype);
