package com.invoice.backend.repository;

import com.invoice.backend.model.AppUser;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppUserRepository extends CrudRepository<AppUser, Long> {

    @Query(value = "SELECT concat(last_name,' ',first_name) AS name FROM app_user\n" +
            "ORDER BY name", nativeQuery = true)
    List<String> findAllUsersNames();
}
