"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("<------------------------- Modules ------------------------->");
const math_1 = require("./math");
console.log(math_1.pi);
let absPhi = (0, math_1.absolute)(math_1.phi);
console.log(absPhi);
