"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("<---------------------- InstanceOf ---------------------->");
const salesInvoices_1 = require("./class/salesInvoices");
const invoicesToProcess_1 = require("./class/invoicesToProcess");
const addInvoiceToProcess_1 = require("./class/addInvoiceToProcess");
const salesInvoice = new salesInvoices_1.SalesInvoices();
salesInvoice.amount = 100;
salesInvoice.country = "ES";
salesInvoice.products = ["Milk", "Chocolate", "Bread"];
(0, addInvoiceToProcess_1.addInvoiceToProcess)(salesInvoice);
console.log(invoicesToProcess_1.invoicesToProcess);
