package com.bounswe2024group10.Tradeverse.dto.authentication;

public class LoginResponse {
    private boolean isSuccessful;
    private String message;
    private String token;
    private String username;
    private int tag;
    private boolean isAdmin;

    public LoginResponse(boolean isSuccessful, String message, String token, String username, int tag,boolean isAdmin) {
        this.isSuccessful = isSuccessful;
        this.message = message;
        this.token = token;
        this.username = username;
        this.tag = tag;
        this.isAdmin = isAdmin;
    }

    public boolean getIsSuccessful() {
        return isSuccessful;
    }

    public void setIsSuccessful(boolean isSuccessful) {
        this.isSuccessful = isSuccessful;
    }
    public boolean getIsAdmin(){ return isAdmin; }
    public void setIsAdmin(boolean isAdmin){ this.isAdmin = isAdmin; }

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
