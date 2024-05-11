package com.bounswe2024group10.animaltroove.dto;

public class LoginResponse {
    private boolean success;
    private String message;
    private String token;
    private String userName;

    public LoginResponse(boolean success, String message, String token, String userName) {
        this.success = success;
        this.message = message;
        this.token = token;
        this.userName = userName;
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

    public String getUserName() {
        return userName;
    }
}
