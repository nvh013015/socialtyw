package com.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;


@Data
@Entity
public class Account {
    @Id
    private int ID; // primary key
    private String Email;
    private String Password;
}
