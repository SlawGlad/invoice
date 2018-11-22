package com.invoice.backend.repository;

import com.invoice.backend.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface CompanyRepository extends CrudRepository<Company,Long> {

    @Query(value = "SELECT company_name FROM company\n" +
            "ORDER BY company_name", nativeQuery = true)
    List<String> findAllCompanyNames();

    //Company findByCompanyName(@Param("name") String companyName);
    Company findByCompanyName(String companyName);
}
