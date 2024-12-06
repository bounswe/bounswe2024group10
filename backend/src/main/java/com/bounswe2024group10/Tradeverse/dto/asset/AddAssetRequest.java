package com.bounswe2024group10.Tradeverse.dto.asset;

public class AddAssetRequest {
    private String name;
    private String yahooFinanceSymbol;
    private String tradingViewSymbol;
    private String imageUrl;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getYahooFinanceSymbol() {
        return yahooFinanceSymbol;
    }

    public void setYahooFinanceSymbol(String yahooFinanceSymbol) {
        this.yahooFinanceSymbol = yahooFinanceSymbol;
    }

    public String getTradingViewSymbol() {
        return tradingViewSymbol;
    }

    public void setTradingViewSymbol(String tradingViewSymbol) {
        this.tradingViewSymbol = tradingViewSymbol;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
} 
