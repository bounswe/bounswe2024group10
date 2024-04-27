package com.bounswe2024group10.animaltroove.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name = "guest_user")
@PrimaryKeyJoinColumn(name = "userID")
public class GuestUser extends User {

    public GuestUser() {
        super();
    }


}

