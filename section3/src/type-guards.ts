console.log("<---------------------- Type Guards ---------------------->");

import { Invoice } from "./class/invoice";
import{SalesInvoices} from "./class/salesInvoices";
import { invoicesToProcess } from "./class/invoicesToProcess";
import{ addInvoiceToProcess } from "./class/addInvoiceToProcess";

function isValidInvoice(invoice: Invoice): invoice is SalesInvoices {
    return invoice.amount > 100 && invoice.country === "RU";
}

const salesInvoice = new SalesInvoices();
salesInvoice.amount = 300;
salesInvoice.country = "RU";
salesInvoice.products = ["Car", "Bike"];

addInvoiceToProcess(salesInvoice);

invoicesToProcess.forEach((invoice) => {
    if (isValidInvoice(invoice)) {
        console.log(invoice);
    }
});