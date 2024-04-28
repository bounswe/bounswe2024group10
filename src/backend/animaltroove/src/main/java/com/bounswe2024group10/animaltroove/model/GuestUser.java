package com.bounswe2024group10.animaltroove.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;

@Entity
@Table(name = "GuestUser")
@PrimaryKeyJoinColumn(name = "userID")
public class GuestUser extends User {

    public GuestUser() {
        super();
    }


}

