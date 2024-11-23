package com.bounswe2024group10.Tradeverse.dto.portfolio;

import java.math.BigDecimal;

public class UpdatePortfolioRequest {
    private Long id;
    private String name;
    private BigDecimal amount;

    public UpdatePortfolioRequest(Long id, String name, BigDecimal amount) {
        this.id = id;
        this.name = name;
        this.amount = amount;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public BigDecimal getAmount() {
        return amount;
    }
}
