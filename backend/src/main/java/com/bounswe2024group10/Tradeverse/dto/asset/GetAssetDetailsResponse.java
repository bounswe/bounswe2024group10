package com.bounswe2024group10.Tradeverse.dto.asset;

public class GetAssetDetailsResponse {
    private String symbol;
    private String exchangeName;
    private float lastPrice;
    private float todayVolume;
    private String longName;

    public String getSymbol() {
        return symbol;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }

    public String getExchangeName() {
        return exchangeName;
    }

    public void setExchangeName(String exchangeName) {
        this.exchangeName = exchangeName;
    }

    public float getLastPrice() {
        return lastPrice;
    }

    public void setLastPrice(float lastPrice) {
        this.lastPrice = lastPrice;
    }

    public float getTodayVolume() {
        return todayVolume;
    }

    public void setTodayVolume(float todayVolume) {
        this.todayVolume = todayVolume;
    }

    public String getLongName() {
        return longName;
    }

    public void setLongName(String longName) {
        this.longName = longName;
    }
}
