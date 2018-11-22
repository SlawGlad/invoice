package com.invoice.backend.repository;

import com.invoice.backend.model.CompanyClient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CompanyClientRepository extends CrudRepository<CompanyClient,Long> {

    @Query(value = "SELECT * FROM company_client\n" +
                    "JOIN company_company_clients ON company_client.id = company_company_clients.company_clients_id\n" +
                    "WHERE company_company_clients.company_id = :companyId", nativeQuery = true)
    List<CompanyClient> findById(@Param("companyId") Long companyId);

    @Query(value = "SELECT * FROM company_client\n" +
                    "WHERE company_name = :companyName",nativeQuery = true)
    CompanyClient findByCompanyName(@Param("companyName") String companyName);
}
