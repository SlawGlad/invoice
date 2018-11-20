package com.invoice.backend.controller;

import com.invoice.backend.model.Company;
import com.invoice.backend.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class CompanyController {

    @Autowired
    CompanyRepository companyRepository;

    @PostMapping("/add-company")
    public void createNewCompany(@Valid @RequestBody Company company){
        companyRepository.save(company);
    }

    @GetMapping("/companies")
    public List<String> getAllCompaniesName(){
        return companyRepository.findAllCompanyNames();
    }

}
