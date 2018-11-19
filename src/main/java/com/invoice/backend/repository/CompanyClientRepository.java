package com.invoice.backend.repository;

import com.invoice.backend.model.CompanyClient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyClientRepository extends JpaRepository<CompanyClient,Long> {
}
