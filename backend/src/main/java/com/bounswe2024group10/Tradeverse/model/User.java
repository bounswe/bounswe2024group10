package com.bounswe2024group10.Tradeverse.model;

import jakarta.persistence.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "users")
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Use auto-generated ID
    private Long id;

    private String email;
    private String username;
    private String password;
    private String name;
    private String profilePhoto;
    private int portfolioPrivacyLevel = 0; // Default value
    private int tag;
    private String bio; // New field for user bio

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getProfilePhoto() {
        return profilePhoto;
    }

    public void setProfilePhoto(String profilePhoto) {
        this.profilePhoto = profilePhoto;
    }

    public int getPortfolioPrivacyLevel() {
        return portfolioPrivacyLevel;
    }

    public void setPortfolioPrivacyLevel(int portfolioPrivacyLevel) {
        this.portfolioPrivacyLevel = portfolioPrivacyLevel;
    }

    public int getTag() {
        return tag;
    }

    public void setTag(int tag) {
        this.tag = tag;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    // UserDetails interface methods
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // You can return roles or authorities assigned to the user
        return List.of(() -> "ROLE_USER"); // or return an empty list if no roles are used
    }

    @Override
    public boolean isAccountNonExpired() {
        return true; // Implement logic to check if account is expired
    }

    @Override
    public boolean isAccountNonLocked() {
        return true; // Implement logic to check if account is locked
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true; // Implement logic to check if credentials are expired
    }

    @Override
    public boolean isEnabled() {
        return true; // Implement logic to check if the account is enabled
    }
}
