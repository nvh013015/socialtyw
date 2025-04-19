package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.model.Account;


@RestController
@RequestMapping("/api/authenticate")
public class Auth {

    @Autowired
    private com.Service.userAuthentication userAuthentication;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Account Account) {
        String email = Account.getEmail();
        String password = Account.getPassword();

        if (userAuthentication.authenticate(email, password)) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        }
    }

}