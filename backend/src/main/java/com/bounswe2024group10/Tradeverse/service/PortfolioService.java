package com.bounswe2024group10.Tradeverse.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.bounswe2024group10.Tradeverse.dto.asset.YahooFinanceChartResponse;
import com.bounswe2024group10.Tradeverse.dto.portfolio.AddAssetToPortfolioResponse;
import com.bounswe2024group10.Tradeverse.dto.portfolio.GetPortfolioResponse;
import com.bounswe2024group10.Tradeverse.dto.portfolio.PortfolioDto;
import com.bounswe2024group10.Tradeverse.model.Asset;
import com.bounswe2024group10.Tradeverse.model.Portfolio;
import com.bounswe2024group10.Tradeverse.model.User;
import com.bounswe2024group10.Tradeverse.repository.AssetRepository;
import com.bounswe2024group10.Tradeverse.repository.PortfolioRepository;
import com.bounswe2024group10.Tradeverse.repository.UserRepository;

@Service
public class PortfolioService {

    @Autowired
    private PortfolioRepository portfolioRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AssetRepository assetRepository;

    public GetPortfolioResponse getPortfolio(String username) {
        try {
            List<Portfolio> portfolios = portfolioRepository.findByUsername(username);
            List<PortfolioDto> portfolioDtos = new ArrayList<>();
            double totalValue = 0.0;
            RestTemplate restTemplate = new RestTemplate();

            for (Portfolio portfolio : portfolios) {
                Asset asset = assetRepository.findById(portfolio.getAssetId())
                        .orElseThrow(() -> new RuntimeException("Asset not found"));

                // Get price from Yahoo Finance
                String url = "https://query1.finance.yahoo.com/v8/finance/chart/" + asset.getYahooFinanceSymbol();
                ResponseEntity<YahooFinanceChartResponse> response = restTemplate.getForEntity(url, YahooFinanceChartResponse.class);
                YahooFinanceChartResponse yahooResponse = response.getBody();

                if (yahooResponse == null || yahooResponse.getChart() == null
                        || yahooResponse.getChart().getResult() == null
                        || yahooResponse.getChart().getResult().length == 0
                        || yahooResponse.getChart().getResult()[0].getMeta() == null) {
                    throw new RuntimeException("Failed to get asset price");
                }

                double price = yahooResponse.getChart().getResult()[0].getMeta().getLastPrice();
                totalValue += price * portfolio.getAmount();

                portfolioDtos.add(new PortfolioDto(
                        portfolio.getId(),
                        asset,
                        portfolio.getAmount(),
                        price * portfolio.getAmount()
                ));
            }
            return new GetPortfolioResponse(true, "Portfolios retrieved successfully", null, portfolioDtos, totalValue);
        } catch (Exception e) {
            return new GetPortfolioResponse(false, "Failed to get portfolios: " + e.getMessage(), null, null, 0.0);
        }
    }

    public AddAssetToPortfolioResponse addAssetToPortfolio(Long assetId, double amount, String username) {
        try {
            // Check if asset exists
            if (!assetRepository.existsById(assetId)) {
                return new AddAssetToPortfolioResponse(false, "Asset not found");
            }

            User user = userRepository.findByUsername(username);
            if (user == null) {
                return new AddAssetToPortfolioResponse(false, "User not found");
            }

            if (amount == 0) {
                return new AddAssetToPortfolioResponse(true, "Asset amount updated in portfolio (Nothing changed)");
            }

            // Update existing portfolio entry
            if (portfolioRepository.existsByUsernameAndAssetId(username, assetId)) {
                Portfolio portfolio = portfolioRepository.findByUsernameAndAssetId(username, assetId);
                if (portfolio.getAmount() + amount <= 0) {
                    portfolioRepository.delete(portfolio);
                    return new AddAssetToPortfolioResponse(true, "Asset amount updated in portfolio");
                } else {
                    portfolio.setAmount(portfolio.getAmount() + amount);
                    portfolioRepository.save(portfolio);
                    return new AddAssetToPortfolioResponse(true, "Asset amount updated in portfolio");
                }
            }

            if (amount > 0) {
                Portfolio portfolio = new Portfolio(
                        username,
                        assetId,
                        amount
                );
                portfolioRepository.save(portfolio);
            }
            return new AddAssetToPortfolioResponse(true, "Asset added to portfolio successfully");
        } catch (Exception e) {
            return new AddAssetToPortfolioResponse(false, "Failed to add asset to portfolio: " + e.getMessage());
        }
    }

    // Updated getPortfoliosByAsset method
    public GetPortfolioResponse getPortfoliosByAsset(Long assetId) {
        try {
            // Check if asset exists
            if (!assetRepository.existsById(assetId)) {
                return new GetPortfolioResponse(false, "Asset not found", null, null, 0.0);
            }

            List<Portfolio> portfolios = portfolioRepository.findByAssetId(assetId);

            if (portfolios.isEmpty()) {
                return new GetPortfolioResponse(false, "No portfolios found for this asset", null, null, 0.0);
            }

            Asset asset = assetRepository.findById(assetId)
                    .orElseThrow(() -> new RuntimeException("Asset not found"));

            RestTemplate restTemplate = new RestTemplate();
            String url = "https://query1.finance.yahoo.com/v8/finance/chart/" + asset.getYahooFinanceSymbol();
            ResponseEntity<YahooFinanceChartResponse> response = restTemplate.getForEntity(url, YahooFinanceChartResponse.class);
            YahooFinanceChartResponse yahooResponse = response.getBody();
            double price = yahooResponse.getChart().getResult()[0].getMeta().getLastPrice();

            List<PortfolioDto> portfolioDtos = portfolios.stream()
                    .map(portfolio -> new PortfolioDto(
                    portfolio.getId(),
                    asset,
                    portfolio.getAmount(),
                    portfolio.getAmount() * price
            ))
                    .collect(Collectors.toList());

            return new GetPortfolioResponse(true, "Portfolios retrieved successfully", null, portfolioDtos, 0.0);
        } catch (Exception e) {
            return new GetPortfolioResponse(false, "Failed to get portfolios: " + e.getMessage(), null, null, 0.0);
        }
    }
}
