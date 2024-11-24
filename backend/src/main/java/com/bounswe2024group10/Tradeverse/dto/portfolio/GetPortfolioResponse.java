package com.bounswe2024group10.Tradeverse.dto.portfolio;

import java.util.List;

public class GetPortfolioResponse {
    private boolean isSuccessful;
    private String message;
    private String username;
    private List<PortfolioDto> portfolios;

    public GetPortfolioResponse(boolean isSuccessful, String message, String username, List<PortfolioDto> portfolios) {
        this.isSuccessful = isSuccessful;
        this.message = message;
        this.username = username;
        this.portfolios = portfolios;
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

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public List<PortfolioDto> getPortfolios() {
        return portfolios;
    }

    public void setPortfolios(List<PortfolioDto> portfolios) {
        this.portfolios = portfolios;
    }
}
