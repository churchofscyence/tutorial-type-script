"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addInvoiceToProcess = void 0;
const salesInvoices_1 = require("./salesInvoices");
const invoicesToProcess_1 = require("./invoicesToProcess");
function addInvoiceToProcess(invoice) {
    if (invoice instanceof salesInvoices_1.SalesInvoices) {
        invoicesToProcess_1.invoicesToProcess.push(invoice);
    }
}
exports.addInvoiceToProcess = addInvoiceToProcess;
