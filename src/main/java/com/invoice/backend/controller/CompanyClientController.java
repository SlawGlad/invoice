package com.invoice.backend.controller;

import com.invoice.backend.model.Company;
import com.invoice.backend.model.CompanyClient;
import com.invoice.backend.repository.CompanyClientRepository;
import com.invoice.backend.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api")
public class CompanyClientController {

    @Autowired
    private CompanyClientRepository companyClientRepository;

    @Autowired
    private CompanyRepository companyRepository;

    @PostMapping("/add-company-client")
    public void createCompanyClient(@Valid @RequestBody CompanyClient companyClient,@RequestParam(value = "company") String companyName){
        Company company = companyRepository.findByCompanyName(companyName);
        company.addCompanyClient(companyClient);
        companyClientRepository.save(companyClient);
    }

    @GetMapping("/company-clients")
    public List<CompanyClient> getCompanyClients(@RequestParam(value = "company") String companyName){
        Company company = companyRepository.findByCompanyName(companyName);
        return companyClientRepository.findById(company.getId());
    }
}
