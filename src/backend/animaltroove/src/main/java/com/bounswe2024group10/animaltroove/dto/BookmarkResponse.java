package com.bounswe2024group10.animaltroove.dto;

public class BookmarkResponse {
    private boolean success;
    private String message;

    public BookmarkResponse(boolean success, String message) {
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
