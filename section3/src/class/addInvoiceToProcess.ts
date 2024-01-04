import {Invoice} from "./invoice";
import {SalesInvoices} from "./salesInvoices";
import {invoicesToProcess} from "./invoicesToProcess";

export function addInvoiceToProcess(invoice: Invoice) {
    if (invoice instanceof SalesInvoices) {
        invoicesToProcess.push(invoice);
    }
}