package com.bounswe2024group10.Tradeverse.dto.subforum;

public class FollowSubforumResponse {
    private boolean isSuccessful;
    private String message;

    public FollowSubforumResponse() {}

    public FollowSubforumResponse(boolean isSuccessful, String message) {
        this.isSuccessful = isSuccessful;
        this.message = message;
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
}