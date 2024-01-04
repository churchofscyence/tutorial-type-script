console.log("<---------------------- Side Notes ---------------------->");

console.log( true ? "ANSWER: true" : "ANSWER: false" );

let user:string = "John";
console.log("User name is ${user}");


console.log("<---------------------- Typeof ---------------------->");

import { Invoice } from "./class/invoice";

function createInvoice(
    description: string | number, //Can be a string or a number
    amount: number,
    country : string
): Invoice {
    const descriptionValue =
        typeof description === "number" ? `${description}` : description; //If description is a number, we convert it to a string
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