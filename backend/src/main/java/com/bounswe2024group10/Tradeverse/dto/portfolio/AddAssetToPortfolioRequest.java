package com.bounswe2024group10.Tradeverse.dto.portfolio;

public class AddAssetToPortfolioRequest {

    private Long assetId;
    private double amount;

    public Long getAssetId() {
        return assetId;
    }

    public void setAssetId(Long assetId) {
        this.assetId = assetId;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }
}
