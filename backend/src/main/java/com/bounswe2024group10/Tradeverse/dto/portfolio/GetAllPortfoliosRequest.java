package com.bounswe2024group10.Tradeverse.dto.portfolio;

import com.bounswe2024group10.Tradeverse.model.Portfolio;

import java.util.List;

public class GetAllPortfoliosRequest {
    private String username;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
