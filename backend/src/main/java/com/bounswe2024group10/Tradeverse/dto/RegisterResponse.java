package com.bounswe2024group10.Tradeverse.dto;

public class RegisterResponse {
    private boolean isSuccessful;
    private String message;
    private String token;
    private String username;

    public RegisterResponse(boolean isSuccessful, String message, String token, String username) {
        this.isSuccessful = isSuccessful;
        this.message = message;
        this.token = token;
        this.username = username;
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
}
