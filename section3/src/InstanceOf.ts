console.log("<---------------------- InstanceOf ---------------------->");

import { Invoice } from "./class/invoice";
import{SalesInvoices} from "./class/salesInvoices";
import { invoicesToProcess } from "./class/invoicesToProcess";
import{ addInvoiceToProcess } from "./class/addInvoiceToProcess";

const salesInvoice = new SalesInvoices();
salesInvoice.amount = 100;
salesInvoice.country = "ES";
salesInvoice.products = ["Milk", "Chocolate", "Bread"];

addInvoiceToProcess(salesInvoice);

console.log(invoicesToProcess);