package com.bounswe2024group10.Tradeverse.dto.portfolio;

import java.math.BigDecimal;

public class CreatePortfolioRequest {
    private String username;
    private String name;
    private BigDecimal amount;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

}
