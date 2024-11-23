package com.bounswe2024group10.Tradeverse.dto.portfolio;

import java.math.BigDecimal;

public class PortfolioDto {
    private Long id;
    private String username;
    private String name;
    private BigDecimal amount;

    public PortfolioDto(Long id, String username, String name, BigDecimal amount) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.amount = amount;
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

    public BigDecimal getAmount() {
        return amount;
    }
}
