package com.invoice.backend.model;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Set;

@Entity
public class Invoice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String invoiceNumber;
    private String saleDate;
    private String paymentDate;
    private String placeOfIssue;
    private BigDecimal netAmount;
    private BigDecimal grossAmount;

    @ManyToOne
    @JoinColumn(name = "seller_FK")
    private Company company;

    @ManyToOne
    @JoinColumn(name = "buyer_FK")
    private CompanyClient companyClient;

    @ManyToOne
    @JoinColumn(name = "issuing_FK")
    private User user;

    @OneToMany
    @JoinColumn(name = "invoice_FK")
    private Set<InvoiceDetails> invoiceDetails;

    public Invoice(){
    }

    public Long getId() {
        return id;
    }

    public String getInvoiceNumber() {
        return invoiceNumber;
    }

    public void setInvoiceNumber(String invoiceNumber) {
        this.invoiceNumber = invoiceNumber;
    }

    public String getSaleDate() {
        return saleDate;
    }

    public void setSaleDate(String saleDate) {
        this.saleDate = saleDate;
    }

    public String getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(String paymentDate) {
        this.paymentDate = paymentDate;
    }

    public String getPlaceOfIssue() {
        return placeOfIssue;
    }

    public void setPlaceOfIssue(String placeOfIssue) {
        this.placeOfIssue = placeOfIssue;
    }

    public BigDecimal getNetAmount() {
        return netAmount;
    }

    public void setNetAmount(BigDecimal netAmount) {
        this.netAmount = netAmount;
    }

    public BigDecimal getGrossAmount() {
        return grossAmount;
    }

    public void setGrossAmount(BigDecimal grossAmount) {
        this.grossAmount = grossAmount;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    public CompanyClient getCompanyClient() {
        return companyClient;
    }

    public void setCompanyClient(CompanyClient companyClient) {
        this.companyClient = companyClient;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Set<InvoiceDetails> getInvoiceDetails() {
        return invoiceDetails;
    }

    public void setInvoiceDetails(Set<InvoiceDetails> invoiceDetails) {
        this.invoiceDetails = invoiceDetails;
    }

    @Override
    public String toString() {
        return "Invoice{" +
                "id=" + id +
                ", invoiceNumber='" + invoiceNumber + '\'' +
                ", saleDate='" + saleDate + '\'' +
                ", paymentDate='" + paymentDate + '\'' +
                ", placeOfIssue='" + placeOfIssue + '\'' +
                ", netAmount=" + netAmount +
                ", grossAmount=" + grossAmount +
                ", company=" + company +
                ", companyClient=" + companyClient +
                ", user=" + user +
                ", invoiceDetails=" + invoiceDetails +
                '}';
    }
}
