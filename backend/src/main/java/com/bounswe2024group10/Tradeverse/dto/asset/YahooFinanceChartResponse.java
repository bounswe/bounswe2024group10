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
        private long[] timestamp;
        private Indicators indicators;
        
        public Meta getMeta() {
            return meta;
        }
        
        public long[] getTimestamp() {
            return timestamp;
        }
        
        public Indicators getIndicators() {
            return indicators;
        }
    }

    public static class Indicators {
        private Quote[] quote;
        
        public Quote[] getQuote() {
            return quote;
        }
    }

    public static class Quote {
        private Float[] high;
        private Float[] low;
        private Float[] close;
        private Float[] open;
        private Long[] volume;
        
        public Float[] getHigh() { return high; }
        public Float[] getLow() { return low; }
        public Float[] getClose() { return close; }
        public Float[] getOpen() { return open; }
        public Long[] getVolume() { return volume; }
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
