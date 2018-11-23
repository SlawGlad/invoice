package com.invoice.backend.model;

import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Set;

@Entity
public class Invoice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String invoiceNumber;
    private String dateIssue;
    private String dateService;
    private String datePayment;
    private String placeOfIssue;
    private String paymentMethod;
    private BigDecimal netValue;
    private BigDecimal amountTax;
    private BigDecimal grossValue;
    private String accountNumber;

    @ManyToOne
    @JoinColumn(name = "seller_FK")
    private Company company;

    @ManyToOne
    @JoinColumn(name = "buyer_FK")
    private CompanyClient companyClient;

    @ManyToOne
    @JoinColumn(name = "issuing_FK")
    private AppUser appUser;

    @OneToMany
    @JoinColumn(name = "invoice_FK")
    @Cascade(org.hibernate.annotations.CascadeType.PERSIST)
    private Set<InvoiceDetails> invoiceDetails;

    public Invoice(){
    }

    public Long getId() {
        return id;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public String getInvoiceNumber() {
        return invoiceNumber;
    }

    public void setInvoiceNumber(String invoiceNumber) {
        this.invoiceNumber = invoiceNumber;
    }

    public String getDateIssue() {
        return dateIssue;
    }

    public void setDateIssue(String dateIssue) {
        this.dateIssue = dateIssue;
    }

    public String getDateService() {
        return dateService;
    }

    public void setDateService(String dateService) {
        this.dateService = dateService;
    }

    public String getDatePayment() {
        return datePayment;
    }

    public void setDatePayment(String datePayment) {
        this.datePayment = datePayment;
    }

    public String getPlaceOfIssue() {
        return placeOfIssue;
    }

    public void setPlaceOfIssue(String placeOfIssue) {
        this.placeOfIssue = placeOfIssue;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public BigDecimal getNetValue() {
        return netValue;
    }

    public void setNetValue(BigDecimal netValue) {
        this.netValue = netValue;
    }

    public BigDecimal getAmountTax() {
        return amountTax;
    }

    public void setAmountTax(BigDecimal amountTax) {
        this.amountTax = amountTax;
    }

    public BigDecimal getGrossValue() {
        return grossValue;
    }

    public void setGrossValue(BigDecimal grossValue) {
        this.grossValue = grossValue;
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

    public AppUser getAppUser() {
        return appUser;
    }

    public void setAppUser(AppUser appUser) {
        this.appUser = appUser;
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
                ", dateIssue='" + dateIssue + '\'' +
                ", dateService='" + dateService + '\'' +
                ", datePayment='" + datePayment + '\'' +
                ", placeOfIssue='" + placeOfIssue + '\'' +
                ", paymentMethod='" + paymentMethod + '\'' +
                ", netValue=" + netValue +
                ", amountTax=" + amountTax +
                ", grossValue=" + grossValue +
                ", accountNumber='" + accountNumber + '\'' +
                ", company=" + company +
                ", companyClient=" + companyClient +
                ", appUser=" + appUser +
                ", invoiceDetails=" + invoiceDetails +
                '}';
    }
}
