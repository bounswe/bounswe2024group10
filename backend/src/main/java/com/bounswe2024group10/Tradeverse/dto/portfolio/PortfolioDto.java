package com.bounswe2024group10.Tradeverse.dto.portfolio;

import com.bounswe2024group10.Tradeverse.model.Asset;

public class PortfolioDto {
    private Long id;
    private Asset asset;
    private double amount;
    private double totalCurrentPrice;

    public PortfolioDto(Long id, Asset asset, double amount, double totalCurrentPrice) {
        this.id = id;
        this.asset = asset;
        this.amount = amount;
        this.totalCurrentPrice = totalCurrentPrice;
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

    public double getTotalCurrentPrice() {
        return totalCurrentPrice;
    }
}
