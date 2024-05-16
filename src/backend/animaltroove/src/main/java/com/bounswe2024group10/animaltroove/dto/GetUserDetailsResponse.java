package com.bounswe2024group10.animaltroove.dto;

import com.bounswe2024group10.animaltroove.model.RegisteredUser;

public class GetUserDetailsResponse {
    private boolean success;
    private String message;
    private RegisteredUser user;

    public GetUserDetailsResponse(boolean success, String message, RegisteredUser user) {
        this.success = success;
        this.message = message;
        this.user = user;
    }

    public boolean isSuccess() {
        return success;
    }

    public String getMessage() {
        return message;
    }

    public RegisteredUser getUser() {
        return user;
    }
}
