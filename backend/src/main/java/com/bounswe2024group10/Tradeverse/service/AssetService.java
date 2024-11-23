package com.bounswe2024group10.Tradeverse.service;

import com.bounswe2024group10.Tradeverse.dto.asset.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import java.util.ArrayList;
import java.util.List;

@Service
public class AssetService {
    public GetAssetDetailsResponse getAssetDetails(GetAssetDetailsRequest request) {
        RestTemplate restTemplate = new RestTemplate();
        String url = "https://query1.finance.yahoo.com/v8/finance/chart/" + request.getSymbol();
        ResponseEntity<YahooFinanceChartResponse> financialData = restTemplate.getForEntity(url, YahooFinanceChartResponse.class);
        YahooFinanceChartResponse yahooResponse = financialData.getBody();
        if (yahooResponse == null || yahooResponse.getChart() == null 
            || yahooResponse.getChart().getResult() == null 
            || yahooResponse.getChart().getResult().length == 0
            || yahooResponse.getChart().getResult()[0].getMeta() == null) {
            throw new RuntimeException("Failed to get asset details");
        }
        YahooFinanceChartResponse.Meta meta = yahooResponse.getChart().getResult()[0].getMeta();
        String symbol = meta.getSymbol();
        String exchangeName = meta.getExchangeName();
        float lastPrice = meta.getLastPrice();
        float todayVolume = meta.getTodayVolume();
        String longName = meta.getLongName();
        GetAssetDetailsResponse response = new GetAssetDetailsResponse();
        response.setSymbol(symbol);
        response.setExchangeName(exchangeName);
        response.setLastPrice(lastPrice);
        response.setTodayVolume(todayVolume);
        response.setLongName(longName);
        return response;
    }

    public GetAssetChartResponse getAssetChart(GetAssetChartRequest request) {
        RestTemplate restTemplate = new RestTemplate();
        String url = "https://query2.finance.yahoo.com/v8/finance/chart/" + request.getSymbol();
        ResponseEntity<YahooFinanceChartResponse> financialData = restTemplate.getForEntity(url, YahooFinanceChartResponse.class);
        YahooFinanceChartResponse yahooResponse = financialData.getBody();
        
        if (yahooResponse == null || yahooResponse.getChart() == null 
            || yahooResponse.getChart().getResult() == null 
            || yahooResponse.getChart().getResult().length == 0) {
            throw new RuntimeException("Failed to get asset chart data");
        }

        YahooFinanceChartResponse.Result result = yahooResponse.getChart().getResult()[0];
        List<ChartData> chartDataList = new ArrayList<>();
        
        long[] timestamps = result.getTimestamp();
        YahooFinanceChartResponse.Quote quote = result.getIndicators().getQuote()[0];
        
        for (int i = 0; i < timestamps.length; i++) {
            if (quote.getClose()[i] == null) continue;
            ChartData data = new ChartData();
            data.setTimestamp(timestamps[i]);
            data.setHigh(quote.getHigh()[i]);
            data.setLow(quote.getLow()[i]);
            data.setClose(quote.getClose()[i]);
            data.setOpen(quote.getOpen()[i]);
            chartDataList.add(data);
        }

        GetAssetChartResponse response = new GetAssetChartResponse();
        response.setSymbol(result.getMeta().getSymbol());
        response.setChart(chartDataList);
        return response;
    }
}
