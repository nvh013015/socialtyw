package com.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class userAuthentication{
    @Autowired
    private  com.reposity.AccountReposity accountReposity;
    
    public boolean authenticate(String email, String password) {
        return accountReposity.findByEmailAndPassword(email, password).isPresent();
    }

}
