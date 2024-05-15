package com.bounswe2024group10.animaltroove.dto;

public class UnlikeResponse {
    
    private boolean success;
    private String message;

    public UnlikeResponse(boolean success, String message) {
        this.success = success;
        this.message = message;
    }

    public boolean isSuccess() {
        return success;
    }

    public String getMessage() {
        return message;
    }

}
