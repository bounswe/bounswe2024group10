package com.bounswe2024group10.animaltroove.dto;

public class LoginResponse {
    private boolean success;
    private String message;
    private String token;

    public LoginResponse(boolean success, String message, String token) {
        this.success = success;
        this.message = message;
        this.token = token;
    }

    public boolean isSuccess() {
        return success;
    }

    public String getMessage() {
        return message;
    }

    public String getToken() {
        return token;
    }
}
