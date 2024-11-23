package com.bounswe2024group10.Tradeverse.dto.portfolio;

public class UpdatePortfolioResponse {
    private boolean isSuccessful;
    private Long id;
    private String message;

    public UpdatePortfolioResponse(boolean isSuccessful, Long id, String message) {
        this.isSuccessful = isSuccessful;
        this.id = id;
        this.message = message;
    }
    public boolean getIsSuccessful() {

        return isSuccessful;
    }

    public void setIsSuccessful(boolean isSuccessful) {

        this.isSuccessful = isSuccessful;
    }

    public Long getId() {
        return id;
    }

    public String getMessage() {
        return message;
    }
}
