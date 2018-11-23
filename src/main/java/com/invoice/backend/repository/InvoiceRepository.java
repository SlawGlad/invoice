package com.invoice.backend.repository;

import com.invoice.backend.model.Invoice;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InvoiceRepository extends CrudRepository<Invoice, Long> {

    @Query(value = "SELECT * FROM invoice\n" +
            "WHERE seller_fk= :companyId", nativeQuery = true)
    List<Invoice> findById(@Param("companyId") Long companyId);
}
