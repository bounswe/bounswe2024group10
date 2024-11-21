package com.bounswe2024group10.Tradeverse.dto.portfolio;

public class UpdatePortfolioRequest {
    private String name;
    private String visibility;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getVisibility() {
        return visibility;
    }

    public void setVisibility(String visibility) {
        this.visibility = visibility;
    }
}
