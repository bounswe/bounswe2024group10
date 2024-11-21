package com.bounswe2024group10.Tradeverse.dto.portfolio;

public class UpdatePortfolioRequest {
    private Long id;
    private String name;
    private String visibility;

    public UpdatePortfolioRequest(Long id, String name, String visibility) {
        this.id = id;
        this.name = name;
        this.visibility = visibility;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getVisibility() {
        return visibility;
    }
}
