package com.invoice.backend.model;

import javax.persistence.*;
import java.util.Set;

@Entity
public class TaxRates {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer taxValue;

    @OneToMany
    @JoinColumn(name = "taxRate_FK")
    private Set<InvoiceDetails> invoiceDetails;

    public TaxRates() {
    }

    public Long getId() {
        return id;
    }

    public Integer getTaxValue() {
        return taxValue;
    }

    public void setTaxValue(Integer taxValue) {
        this.taxValue = taxValue;
    }

    public Set<InvoiceDetails> getInvoiceDetails() {
        return invoiceDetails;
    }

    public void setInvoiceDetails(Set<InvoiceDetails> invoiceDetails) {
        this.invoiceDetails = invoiceDetails;
    }

    @Override
    public String toString() {
        return "TaxRates{" +
                "id=" + id +
                ", taxValue=" + taxValue +
                ", invoiceDetails=" + invoiceDetails +
                '}';
    }
}
