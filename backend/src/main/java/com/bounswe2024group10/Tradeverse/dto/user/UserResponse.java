package com.bounswe2024group10.Tradeverse.dto.user;

public class UserResponse {

    private String userPhoto;
    private String name;

    public UserResponse() {
    }

    public UserResponse(String userPhoto, String name) {
        this.userPhoto = userPhoto;
        this.name = name;
    }

    public String getUserPhoto() {
        return userPhoto;
    }

    public void setUserPhoto(String userPhoto) {
        this.userPhoto = userPhoto;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
