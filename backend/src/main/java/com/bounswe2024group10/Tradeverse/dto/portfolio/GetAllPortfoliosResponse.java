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

    public boolean isSuccessful() {
        return isSuccessful;
    }

    public String getMessage() {
        return message;
    }

    public List<PortfolioDto> getPortfolios() {
        return portfolios;
    }
}
