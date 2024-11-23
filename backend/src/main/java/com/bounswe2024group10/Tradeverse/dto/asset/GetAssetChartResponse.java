package com.bounswe2024group10.Tradeverse.dto.asset;

import java.util.List;

public class GetAssetChartResponse {
    private String symbol;
    private List<ChartData> chart;

    public String getSymbol() {
        return symbol;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }

    public List<ChartData> getChart() {
        return chart;
    }

    public void setChart(List<ChartData> chart) {
        this.chart = chart;
    }
} 