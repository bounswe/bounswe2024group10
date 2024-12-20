package com.bounswe2024group10.Tradeverse.dto.follow;

public class UnfollowUserResponse {
    private boolean isSuccessful;
    private String message;

    public UnfollowUserResponse(boolean isSuccessful, String message) {
        this.isSuccessful = isSuccessful;
        this.message = message;
    }

    public boolean isSuccessful() {
        return isSuccessful;
    }

    public void setSuccessful(boolean successful) {
        isSuccessful = successful;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
