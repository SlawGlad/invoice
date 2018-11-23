import {CONFIGURATION} from '../configuration/Configuration'
import axios from "axios";

export default class InvoiceController {
    constructor() {
        this.endpoint = 'http://' + CONFIGURATION.HOST + ':' + CONFIGURATION.PORT + '/api/'
    }

    getAllInvoices(company){
        var response = axios.get(this.endpoint + 'invoices' + '?company=' + company);
        return response;
    }

    createNewInvoice(company,companyClient,users,invoiceNumber,dateService,datePayment,dateIssue,placeName,paymentMethod,
                     sumNetValue,sumAmountTax,sumGrossValue,productName,quantity,netPrice,vatValue,productNameB,quantityB,netPriceB,
                     vatValueB,productNameC,quantityC,netPriceC,vatValueC,accountNumber){
        axios.post(this.endpoint + 'invoices/add-invoice' + '?company=' + company + '&company-client=' + companyClient
                    + '&app-user=' + users,
            {
                invoiceNumber: invoiceNumber,
                dateService: dateService,
                datePayment: datePayment,
                dateIssue: dateIssue,
                placeOfIssue: placeName,
                paymentMethod: paymentMethod,
                netValue: sumNetValue,
                amountTax: sumAmountTax,
                grossValue: sumGrossValue,
                accountNumber: accountNumber,
                invoiceDetails:[{
                    productName: productName,
                    quantity: quantity,
                    unitPrice: netPrice,
                    vatRate: vatValue
                    },
                    {
                     productName: productNameB,
                     quantity: quantityB,
                     unitPrice: netPriceB,
                     vatRate: vatValueB
                    },
                    {
                    productName: productNameC,
                    quantity: quantityC,
                    unitPrice: netPriceC,
                    vatRate: vatValueC
                    }
                ],
            }, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
    }

/*        createNewInvoice(company,companyClient,users,invoiceNumber,dateService,datePayment,dateIssue,placeName,paymentMethod,
                                              sumNetValue,sumAmountTax,sumGrossValue,productName,quantity,netPrice,vatValue,productNameB,quantityB,netPriceB,
                                              vatValueB,productNameC,quantityC,netPriceC,vatValueC){
            axios.post(this.endpoint + 'invoices/add-invoice' + '?company=' + company + '&companyClient=' + companyClient,{
                invoiceNumber: invoiceNumber,
                dateService: dateService,
                datePayment: datePayment,
                dateIssue: dateIssue,
                placeOfIssue: placeName,
                paymentMethod: paymentMethod,
                netValue: sumNetValue,
                amountTax: sumAmountTax,
                grossValue: sumGrossValue,
                }, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
        }*/
}