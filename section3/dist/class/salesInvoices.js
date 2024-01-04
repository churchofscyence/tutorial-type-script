"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesInvoices = void 0;
const invoice_1 = require("./invoice");
class SalesInvoices extends invoice_1.Invoice {
    constructor() {
        super(...arguments);
        this.products = [];
    }
}
exports.SalesInvoices = SalesInvoices;
