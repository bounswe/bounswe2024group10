package com.bounswe2024group10.Tradeverse.dto.subforum;

public class CreateSubforumResponse {
    private boolean isSuccessful;
    private String message;
    private Long id;

    public CreateSubforumResponse(boolean isSuccessful, String message, Long id) {
        this.isSuccessful = isSuccessful;
        this.message = message;
        this.id = id;
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}