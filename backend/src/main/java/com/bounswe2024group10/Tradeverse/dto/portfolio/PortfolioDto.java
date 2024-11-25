package com.bounswe2024group10.Tradeverse.dto.portfolio;

import com.bounswe2024group10.Tradeverse.model.Asset;

public class PortfolioDto {
    private Long id;
    private Asset asset;
    private double amount;

    public PortfolioDto(Long id, Asset asset, double amount) {
        this.id = id;
        this.asset = asset;
        this.amount = amount;
    }

    public Long getId() {
        return id;
    }

    public Asset getAsset() {
        return asset;
    }

    public double getAmount() {
        return amount;
    }
}
