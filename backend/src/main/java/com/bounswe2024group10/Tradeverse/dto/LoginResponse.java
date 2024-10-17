package com.bounswe2024group10.Tradeverse.dto;

public class LoginResponse {
    private boolean isSuccessful;
    private String message;
    private String token;
    private String username;
    private int tag;

    public LoginResponse(boolean isSuccessful, String message, String token, String username, int tag) {
        this.isSuccessful = isSuccessful;
        this.message = message;
        this.token = token;
        this.username = username;
        this.tag = tag;
    }

    public boolean getIsSuccessful() {
        return isSuccessful;
    }

    public void setIsSuccessful(boolean isSuccessful) {
        this.isSuccessful = isSuccessful;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getTag() {
        return tag;
    }

    public void setTag(int tag) {
        this.tag = tag;
    }
}
