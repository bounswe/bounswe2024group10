package com.bounswe2024group10.Tradeverse.dto.portfolio;

import java.util.List;

public class GetAllPortfoliosResponse {
    private boolean isSuccessful;
    private String message;
    private List<PortfolioDto> portfolios;

    public GetAllPortfoliosResponse(boolean isSuccessful, String message, List<PortfolioDto> portfolios) {
        this.isSuccessful = isSuccessful;
        this.message = message;
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

    public List<PortfolioDto> getPortfolios() {
        return portfolios;
    }

    public void setPortfolios(List<PortfolioDto> portfolios) {
        this.portfolios = portfolios;
    }
}
