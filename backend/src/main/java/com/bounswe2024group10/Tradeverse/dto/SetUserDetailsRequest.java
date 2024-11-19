package com.bounswe2024group10.Tradeverse.dto;

import io.micrometer.common.lang.Nullable;

public class SetUserDetailsRequest {
    @Nullable
    private String email;
    @Nullable
    private String profilePhoto;
    @Nullable
    private String bio;
    @Nullable
    private Integer tag;
    
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getProfilePhoto() {
        return profilePhoto;
    }

    public void setProfilePhoto(String profilePicture) {
        this.profilePhoto = profilePicture;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public Integer getTag() {
        return tag;
    }

    public void setTag(Integer tag) {
        this.tag = tag;
    }
}
