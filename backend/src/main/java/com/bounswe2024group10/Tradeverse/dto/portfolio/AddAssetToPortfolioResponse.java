package com.bounswe2024group10.Tradeverse.dto.portfolio;

public class AddAssetToPortfolioResponse {
    private boolean isSuccessful;
    private String message;

    public AddAssetToPortfolioResponse(boolean isSuccessful, String message) {
        this.isSuccessful = isSuccessful;
        this.message = message;
    }

    public boolean isSuccessful() {
        return isSuccessful;
    }

    public String getMessage() {
        return message;
    }
} 