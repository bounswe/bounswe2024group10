package com.bounswe2024group10.Tradeverse.dto;

public class LoginResponse {
    private boolean isSuccessful;
    private String message;
    private String token;

    public LoginResponse(boolean isSuccessful, String message, String token) {
        this.isSuccessful = isSuccessful;
        this.message = message;
        this.token = token;
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

}
