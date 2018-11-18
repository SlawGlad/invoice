package com.invoice.backend.repository;

import com.invoice.backend.model.TaxRates;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaxRatesRepository extends CrudRepository<TaxRates, Long> {
}
