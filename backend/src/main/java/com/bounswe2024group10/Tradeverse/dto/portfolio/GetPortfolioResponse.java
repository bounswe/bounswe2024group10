package com.bounswe2024group10.Tradeverse.dto.portfolio;

import java.util.List;

public class GetPortfolioResponse {
    private boolean isSuccessful;
    private String message;
    private String username;
    private List<PortfolioDto> portfolios;
    private double totalValue;

    public GetPortfolioResponse(boolean isSuccessful, String message, String username, List<PortfolioDto> portfolios, double totalValue) {
        this.isSuccessful = isSuccessful;
        this.message = message;
        this.username = username;
        this.portfolios = portfolios;
        this.totalValue = totalValue;
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

    public double getTotalValue() {
        return totalValue;
    }

    public void setTotalValue(double totalValue) {
        this.totalValue = totalValue;
    }
}
