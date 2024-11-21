package com.bounswe2024group10.Tradeverse.service;

import com.bounswe2024group10.Tradeverse.dto.portfolio.*;
import com.bounswe2024group10.Tradeverse.model.Portfolio;
import com.bounswe2024group10.Tradeverse.repository.PortfolioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PortfolioService {

    @Autowired
    private PortfolioRepository portfolioRepository;

    public CreatePortfolioResponse createPortfolio(CreatePortfolioRequest request) {
        Portfolio portfolio = new Portfolio(request.getUsername(), request.getName(), request.getVisibility());

        try {
            Portfolio savedPortfolio = portfolioRepository.save(portfolio);
            return new CreatePortfolioResponse(true, savedPortfolio.getId(), "Portfolio created successfully");
        } catch (Exception e) {
            return new CreatePortfolioResponse(false, null, "Failed to create portfolio");
        }
    }

    public GetAllPortfoliosResponse getAllPortfolios(GetAllPortfoliosRequest request) {
        List<Portfolio> portfolios = portfolioRepository.findByUsername(request.getUsername());

        if (portfolios.isEmpty()) {
            return new GetAllPortfoliosResponse(false, "No portfolios found for this user", null);
        }

        List<PortfolioDto> portfolioDtos = portfolios.stream()
                .map(portfolio -> new PortfolioDto(portfolio.getId(), portfolio.getName(), portfolio.getVisibility(), portfolio.getCreatedAt()))
                .collect(Collectors.toList());

        return new GetAllPortfoliosResponse(true, "Portfolios retrieved successfully", portfolioDtos);
    }

    public UpdatePortfolioResponse updatePortfolio(UpdatePortfolioRequest request) {
        Portfolio portfolio = portfolioRepository.findById(request.getId()).orElse(null);

        if (portfolio == null) {
            return new UpdatePortfolioResponse(false, null, "Portfolio not found");
        }

        portfolio.setName(request.getName());
        portfolio.setVisibility(request.getVisibility());

        Portfolio updatedPortfolio = portfolioRepository.save(portfolio);
        return new UpdatePortfolioResponse(true, updatedPortfolio.getId(), "Portfolio updated successfully");
    }
}
