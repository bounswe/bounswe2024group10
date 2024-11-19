package com.bounswe2024group10.Tradeverse.dto.asset;

import com.fasterxml.jackson.annotation.JsonProperty;

public class YahooFinanceChartResponse {
    private Chart chart;

    public static class Chart {
        private Result[] result;
        
        public Result[] getResult() {
            return result;
        }
    }

    public static class Result {
        private Meta meta;
        
        public Meta getMeta() {
            return meta;
        }
    }

    public static class Meta {
        private String symbol;
        @JsonProperty("fullExchangeName")
        private String exchangeName;
        @JsonProperty("regularMarketPrice")
        private float lastPrice;
        @JsonProperty("regularMarketVolume")
        private float todayVolume;
        private String longName;

        // Getters
        public String getSymbol() { return symbol; }
        public String getExchangeName() { return exchangeName; }
        public float getLastPrice() { return lastPrice; }
        public float getTodayVolume() { return todayVolume; }
        public String getLongName() { return longName; }
    }

    public Chart getChart() {
        return chart;
    }
}
