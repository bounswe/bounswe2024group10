package com.bounswe2024group10.Tradeverse.service;

import com.bounswe2024group10.Tradeverse.dto.portfolio.*;
import com.bounswe2024group10.Tradeverse.model.Portfolio;
import com.bounswe2024group10.Tradeverse.model.Asset;
import com.bounswe2024group10.Tradeverse.repository.PortfolioRepository;
import com.bounswe2024group10.Tradeverse.repository.AssetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.ArrayList;
import java.util.stream.Collectors;

@Service
public class PortfolioService {

    @Autowired
    private PortfolioRepository portfolioRepository;

    @Autowired
    private AssetRepository assetRepository;

    public GetPortfolioResponse getPortfolio(GetPortfolioRequest request) {
        try {
            List<Portfolio> portfolios = portfolioRepository.findByUsername(request.getUsername());
            
            if (portfolios.isEmpty()) {
                return new GetPortfolioResponse(false, "No portfolio found for this user", request.getUsername(), null);
            }

            List<PortfolioDto> portfolioDtos = new ArrayList<>();
            for (Portfolio portfolio : portfolios) {
                Asset asset = assetRepository.findById(portfolio.getAssetId())
                    .orElseThrow(() -> new RuntimeException("Asset not found"));
                
                portfolioDtos.add(new PortfolioDto(
                    portfolio.getId(),
                    asset,
                    portfolio.getAmount()
                ));
            }

            return new GetPortfolioResponse(true, "Portfolio retrieved successfully", request.getUsername(), portfolioDtos);
        } catch (Exception e) {
            return new GetPortfolioResponse(false, "Failed to get portfolio: " + e.getMessage(), request.getUsername(), null);
        }
    }

    public AddAssetToPortfolioResponse addAssetToPortfolio(AddAssetToPortfolioRequest request) {
        try {
            // Check if asset exists
            if (!assetRepository.existsById(request.getAssetId())) {
                return new AddAssetToPortfolioResponse(false, "Asset not found");
            }

            // Check if portfolio entry already exists
            if (portfolioRepository.existsByUsernameAndAssetId(request.getUsername(), request.getAssetId())) {
                // Update existing portfolio
                List<Portfolio> portfolios = portfolioRepository.findByUsername(request.getUsername());
                Portfolio portfolio = portfolios.stream()
                    .filter(p -> p.getAssetId().equals(request.getAssetId()))
                    .findFirst()
                    .orElseThrow(() -> new RuntimeException("Portfolio not found"));
                
                portfolio.setAmount(request.getAmount());
                portfolioRepository.save(portfolio);
                return new AddAssetToPortfolioResponse(true, "Asset amount updated in portfolio");
            }

            // Create new portfolio entry
            Portfolio portfolio = new Portfolio(
                request.getUsername(),
                request.getAssetId(),
                request.getAmount()
            );
            portfolioRepository.save(portfolio);

            return new AddAssetToPortfolioResponse(true, "Asset added to portfolio successfully");
        } catch (Exception e) {
            return new AddAssetToPortfolioResponse(false, "Failed to add asset to portfolio: " + e.getMessage());
        }
    }

    public GetPortfolioResponse getPortfoliosByAsset(Long assetId) {
        try {
            // Check if asset exists
            if (!assetRepository.existsById(assetId)) {
                return new GetPortfolioResponse(false, "Asset not found", null, null);
            }

            List<Portfolio> portfolios = portfolioRepository.findByAssetId(assetId);
            
            if (portfolios.isEmpty()) {
                return new GetPortfolioResponse(false, "No portfolios found for this asset", null, null);
            }

            Asset asset = assetRepository.findById(assetId)
                .orElseThrow(() -> new RuntimeException("Asset not found"));

            List<PortfolioDto> portfolioDtos = portfolios.stream()
                .map(portfolio -> new PortfolioDto(
                    portfolio.getId(),
                    asset,
                    portfolio.getAmount()
                ))
                .collect(Collectors.toList());

            return new GetPortfolioResponse(true, "Portfolios retrieved successfully", null, portfolioDtos);
        } catch (Exception e) {
            return new GetPortfolioResponse(false, "Failed to get portfolios: " + e.getMessage(), null, null);
        }
    }
}
