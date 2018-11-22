package com.invoice.backend.controller;

import com.invoice.backend.model.AppUser;
import com.invoice.backend.repository.AppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class AppUserController {

    @Autowired
    private AppUserRepository appUserRepository;

    @PostMapping("/admin-panel/add-user")
    public void createNewAppUser(@Valid @RequestBody AppUser appUser){
        appUserRepository.save(appUser);
    }

    @GetMapping("/users")
    public List<String> getAllUsersName(){
        return appUserRepository.findAllUsersNames();
    }

}
