"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseInvoice = void 0;
const invoice_1 = require("./invoice");
class PurchaseInvoice extends invoice_1.Invoice {
    constructor() {
        super(...arguments);
        this.tax = 0;
    }
}
exports.PurchaseInvoice = PurchaseInvoice;
