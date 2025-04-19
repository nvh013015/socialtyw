package com.reposity;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

import com.model.Account;

public interface AccountReposity extends JpaRepository<Account, Integer> {
    Optional<Account> findByEmailAndPassword(String email, String password);
}