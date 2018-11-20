package com.invoice.backend.controller;

import com.invoice.backend.model.CompanyClient;
import com.invoice.backend.repository.CompanyClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api")
public class CompanyClientController {

    @Autowired
    CompanyClientRepository companyClientRepository;

    @PostMapping("/add-company-client")
    public void createCompanyClient(@Valid @RequestBody CompanyClient companyClient){
        companyClientRepository.save(companyClient);
    }
}
