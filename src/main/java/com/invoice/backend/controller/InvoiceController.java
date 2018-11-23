package com.invoice.backend.controller;

import com.invoice.backend.model.*;
import com.invoice.backend.repository.AppUserRepository;
import com.invoice.backend.repository.CompanyClientRepository;
import com.invoice.backend.repository.CompanyRepository;
import com.invoice.backend.repository.InvoiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class InvoiceController {

    @Autowired
    private InvoiceRepository invoiceRepository;

    @Autowired
    private CompanyRepository companyRepository;

    @Autowired
    private CompanyClientRepository companyClientRepository;

    @Autowired
    private AppUserRepository appUserRepository;

    @PostMapping("invoices/add-invoice")
    public void createNewInvoice(@Valid @RequestBody Invoice invoice, @RequestParam(value = "company") String companyName,
                                 @RequestParam(value = "company-client") String companyClientName,
                                 @RequestParam (value = "app-user") String appUserName){
        Company company = companyRepository.findByCompanyName(companyName);
        CompanyClient companyClient = companyClientRepository.findByCompanyName(companyClientName);
        AppUser appUser = appUserRepository.findByAppUserName(appUserName);
        invoice.setCompany(company);
        invoice.setCompanyClient(companyClient);
        invoice.setAppUser(appUser);
        invoiceRepository.save(invoice);
    }

    @GetMapping("invoices")
    public List<Invoice> getAllCompanyInvoice(@RequestParam(value = "company") String companyName){
        Company company = companyRepository.findByCompanyName(companyName);
        return invoiceRepository.findById(company.getId());
    }

}
