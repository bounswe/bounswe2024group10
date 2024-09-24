package com.bounswe2024group10.animaltroove.dto;

import java.util.Date;

public class RegisterRequest {
    private String userName;
    private String email;
    private String password;
    private String name;
    private Date birthday;
    private String bio;
    private byte[] profilePicture;

    public RegisterRequest(String userName, String email, String password, String name, Date birthday, String bio, byte[] profilePicture) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.name = name;
        this.birthday = birthday;
        this.bio = bio;
        this.profilePicture = profilePicture;
    }

    public String getUserName() {
        return userName;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getName() {
        return name;
    }

    public Date getBirthday() {
        return birthday;
    }

    public String getBio() {
        return bio;
    }

    public byte[] getProfilePicture() {
        return profilePicture;
    }
}