package com.bounswe2024group10.Tradeverse.dto;

public class GetUserDetailsResponse {
    private String email;
    private String username;
    private String name;
    private String profilePhoto;
    private int tag;
    private String bio;

    public GetUserDetailsResponse(String email, String username, String name, String profilePhoto, int tag, String bio) {
        this.email = email;
        this.username = username;
        this.name = name;
        this.profilePhoto = profilePhoto;
        this.tag = tag;
        this.bio = bio;
    }

    public String getEmail() {
        return email;
    }

    public String getUsername() {
        return username;
    }

    public String getName() {
        return name;
    }

    public String getProfilePhoto() {
        return profilePhoto;
    }

    public int getTag() {
        return tag;
    }

    public String getBio() {
        return bio;
    }
}
