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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String name;

    @Column(nullable = true, columnDefinition = "LONGTEXT")
    private String profilePhoto;

    @Column(nullable = false)
    private int portfolioPrivacyLevel = 0;

    @Column(nullable = false)
    private int tag;

    @Column(nullable = true, columnDefinition = "LONGTEXT")
    private String bio;

    @Column(nullable = false)
    private boolean isAdmin = false;
    
    public User() {
    }

    public User(String email, String username, String password, String name, String profilePhoto, int portfolioPrivacyLevel, int tag, String bio, boolean isAdmin) {
        this.email = email;
        this.username = username;
        this.password = password;
        this.name = name;
        this.profilePhoto = profilePhoto;
        this.portfolioPrivacyLevel = portfolioPrivacyLevel;
        this.tag = tag;
        this.bio = bio;
        this.isAdmin = isAdmin;
    }

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

    public boolean getIsAdmin() {
        return isAdmin;
    }

    public void setIsAdmin(boolean isAdmin) {
        this.isAdmin = isAdmin;
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
