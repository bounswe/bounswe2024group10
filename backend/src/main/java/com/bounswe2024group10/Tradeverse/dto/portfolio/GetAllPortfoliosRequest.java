package com.bounswe2024group10.Tradeverse.dto.portfolio;

public class GetAllPortfoliosRequest {
    private String username;

    public GetAllPortfoliosRequest(String username) {
        this.username = username;
    }

    public String getUsername() {
        return username;
    }
}
