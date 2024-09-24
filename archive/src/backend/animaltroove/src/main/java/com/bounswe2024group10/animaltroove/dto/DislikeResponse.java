package com.bounswe2024group10.animaltroove.dto;

public class DislikeResponse {

    private boolean success;
    private String message;

    public DislikeResponse(boolean success, String message) {
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
