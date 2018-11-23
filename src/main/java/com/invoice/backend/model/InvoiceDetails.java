package com.invoice.backend.model;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
public class InvoiceDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String productName;
    private BigDecimal unitPrice;
    private Integer quantity;
    private Integer vatRate;

    @ManyToOne
    public Invoice invoice;

    public InvoiceDetails() {
    }

    public Long getId() {
        return id;
    }

    public Invoice getInvoice() {
        return invoice;
    }

    public void setInvoice(Invoice invoice) {
        this.invoice = invoice;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public BigDecimal getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(BigDecimal unitPrice) {
        this.unitPrice = unitPrice;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Integer getVatRate() {
        return vatRate;
    }

    public void setVatRate(Integer vatRate) {
        this.vatRate = vatRate;
    }

    @Override
    public String toString() {
        return "InvoiceDetails{" +
                "id=" + id +
                ", productName='" + productName + '\'' +
                ", unitPrice=" + unitPrice +
                ", quantity=" + quantity +
                ", vatRate=" + vatRate +
                ", invoice=" + invoice +
                '}';
    }
}
