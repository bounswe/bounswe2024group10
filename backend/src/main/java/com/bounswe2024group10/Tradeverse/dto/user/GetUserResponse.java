package com.bounswe2024group10.Tradeverse.dto.user;

public class GetUserResponse {

    private String username;
    private String name;
    private String userPhoto;

    public GetUserResponse(String username, String name, String userPhoto) {
        this.username = username;
        this.name = name;
        this.userPhoto = userPhoto;
    }

    public GetUserResponse() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUserPhoto() {
        return userPhoto;
    }

    public void setUserPhoto(String userPhoto) {
        this.userPhoto = userPhoto;
    }

}
