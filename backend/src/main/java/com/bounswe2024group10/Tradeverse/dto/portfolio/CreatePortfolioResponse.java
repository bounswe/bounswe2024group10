package com.bounswe2024group10.Tradeverse.dto.portfolio;

public class CreatePortfolioResponse {
    private boolean isSuccessful;
    private Long id;
    private String message;

    public CreatePortfolioResponse(boolean isSuccessful, Long id, String message) {
        this.isSuccessful = isSuccessful;
        this.id = id;
        this.message = message;
    }
    public boolean isSuccessful() {
        return isSuccessful;
    }

    public void setSuccessful(boolean successful) {
        isSuccessful = successful;
    }


    public Long getId() {
        return id;
    }

    public String getMessage() {
        return message;
    }
}
