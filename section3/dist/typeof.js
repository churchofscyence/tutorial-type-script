"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("<---------------------- Side Notes ---------------------->");
console.log(true ? "ANSWER: true" : "ANSWER: false");
let user = "John";
console.log("User name is ${user}");
console.log("<---------------------- Typeof ---------------------->");
function createInvoice(description, //Can be a string or a number
amount, country) {
    const descriptionValue = typeof description === "number" ? `${description}` : description; //If description is a number, we convert it to a string
    return {
        description: descriptionValue,
        amount,
        country,
    };
}
let invoiceWithNumber = createInvoice(1231321, 120, "ES");
console.log(invoiceWithNumber);
let invoiceWithString = createInvoice("Banana", 90, "USA");
console.log(invoiceWithString);
