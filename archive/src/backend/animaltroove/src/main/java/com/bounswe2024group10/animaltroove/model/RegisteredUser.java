package com.bounswe2024group10.animaltroove.model;

import java.util.Date;
import jakarta.persistence.*;

@Entity
@Table(name = "RegisteredUser")
public class RegisteredUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "userID")
    private Integer userID;

    @Column(name = "name", nullable = false, length = 20)
    private String name;

    @Column(name = "birthday")
    private Date birthday;

    @Column(name = "userName", unique = true, nullable = false, length = 20)
    private String userName;

    @Column(name = "bio", length = 300)
    private String bio;

    @Column(name = "email", unique = true, nullable = false, length = 30)
    private String email;

    @Column(name = "password", nullable = false, length = 400)
    private String password;

    @Lob
    @Column(name = "profile_picture")
    private byte[] profilePicture;

    public RegisteredUser() {
    }

    public RegisteredUser(String userName, String email, String password, String name, Date birthday, String bio, byte[] profilePicture) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.name = name;
        this.birthday = birthday;
        this.bio = bio;
        this.profilePicture = profilePicture;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public byte[] getProfilePicture() {
        return profilePicture;
    }

    public void setProfilePicture(byte[] profilePicture) {
        this.profilePicture = profilePicture;
    }
}
