"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("<---------------------- Type Guards ---------------------->");
const salesInvoices_1 = require("./class/salesInvoices");
const invoicesToProcess_1 = require("./class/invoicesToProcess");
const addInvoiceToProcess_1 = require("./class/addInvoiceToProcess");
function isValidInvoice(invoice) {
    return invoice.amount > 100 && invoice.country === "RU";
}
const salesInvoice = new salesInvoices_1.SalesInvoices();
salesInvoice.amount = 300;
salesInvoice.country = "RU";
salesInvoice.products = ["Car", "Bike"];
(0, addInvoiceToProcess_1.addInvoiceToProcess)(salesInvoice);
invoicesToProcess_1.invoicesToProcess.forEach((invoice) => {
    if (isValidInvoice(invoice)) {
        console.log(invoice);
    }
});
