package com.bounswe2024group10.Tradeverse.service;

import com.bounswe2024group10.Tradeverse.dto.asset.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;

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
}
