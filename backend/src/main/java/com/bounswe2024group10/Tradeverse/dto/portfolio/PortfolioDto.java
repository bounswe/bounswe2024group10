package com.bounswe2024group10.Tradeverse.dto.portfolio;

public class PortfolioDto {
    private Long id;
    private String username;
    private String name;
    private String visibility;

    public PortfolioDto(Long id, String username, String name, String visibility) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.visibility = visibility;
    }

    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getName() {
        return name;
    }

    public String getVisibility() {
        return visibility;
    }
}
